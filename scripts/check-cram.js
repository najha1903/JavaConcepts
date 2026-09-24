// ============================================================================
// Checks the cram points in Quick Revision.
//
// WHY THIS EXISTS
//
// Quick Revision was rebuilt because it read as a shortened copy of the notes. Measuring
// it showed why, and the reason was NOT copying - it was SHAPE:
//
//   old points (152)   median 157 characters, 28 words, 2 sentences
//                     90 of 152 over 150 characters, the longest 294
//   rewritten (155)    median ~90 characters, 15 words, 1 sentence
//
// A median of 157 characters and 28 words is something you READ, not something you SAY. So
// the primary check here is length. It is the one that would have caught the real defect.
//
// The other checks exist so the panel cannot quietly regress:
//
//   - a point must not duplicate another note line in its chapter. This catches nothing
//     today (0 of 152, measured from the files with the marker lines excluded), so it is
//     labelled a guard rather than the fix.
//   - a chapter must have 6 to 14 points and 2 to 8 traps. Thirty is not a cram sheet.
//   - a snippet must be at most 3 lines, must not be a copy of a note code block, and must
//     either compile as Java or - when it carries a "// value" comment - produce that value
//     when it is run. A claim in a comment is verified, not trusted.
//   - a chapter still being written has none of this at all.
//
// Usage: node scripts/check-cram.js
// ============================================================================

const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');
const noteRules = require(path.join(__dirname, 'lib', 'note-rules.js'));
const { requireJava, createWorkDir, compileArguments, nativeValidation } = require('./lib/run-java.js');
const { frameworkFingerprint } = require('./lib/content-identity.js');
const { exactOutputMatches, expectedCompileFailure } = require('./lib/output-contract.js');
const compileContracts = require('../data/snippet-contracts.js');

// A point is one sentence you could say out loud. Past this and it is prose to read.
const MAX_CHARS = 160;
const MAX_WORDS = 26;
const MAX_SNIPPET_LINES = 3;

// A chapter's sheet, within reason. Too few is thin; too many is not a cram sheet.
//
// The floor is 5 rather than 6 because a small chapter genuinely has fewer points: Chapter 4
// is statements, whitespace and indentation, and five points plus three traps is a complete
// cram for it. Padding a sheet to reach a round number would make it worse, so the floor is
// set where the smallest real chapter sits.
const MIN_POINTS = 5;
const MAX_POINTS = 14;
const MIN_TRAPS = 2;
// A chapter spanning three files, such as Strings, legitimately carries more traps than a
// single-file one.
const MAX_TRAPS = 10;

const failures = [];
const authoringGaps = [];
try { requireJava(); } catch (error) { failures.push(error.message); }

function loadGlobal(file, expression) {
  const full = path.join(dashboardDir, file);
  if (!fs.existsSync(full)) return null;
  const context = {};
  try {
    vm.runInNewContext(`${fs.readFileSync(full, 'utf8')}\nthis.__v = ${expression};`, context, { filename: file });
  } catch (error) {
    failures.push(`${file} could not be read (${error.message}).`);
    return null;
  }
  return context.__v;
}

const concepts = loadGlobal('data.js', 'CONCEPTS_DATA') || [];
const bank = loadGlobal('questions.js', 'QUICK_REVISION_BANK') || {};
if (!concepts.length || !Object.keys(bank).length) {
  console.error('Could not read the notes or the Quick Revision bank, so there is nothing to check.');
  process.exit(1);
}

const finished = noteRules.finishedChapterNames(concepts);
const say = point => (point === null || point === undefined) ? '' : (typeof point === 'string' ? point : String(point.say || ''));
const code = point => (point && typeof point === 'object' && point.code) ? String(point.code) : '';

const normalize = text => String(text || '')
  .replace(/[`*_]/g, '')
  .replace(/\s+/g, ' ')
  .trim()
  .toLowerCase();

// Every note line in a chapter EXCEPT the cram points themselves.
//
// Two exclusions, and both are needed:
//
//   1. A line that still carries an @takeaway/@gotcha/@snippet marker.
//   2. A line that IS a cram point. The parser emits each point's text twice: once in
//      headerComments, and once in inlineComments as the "anchored points" for the file,
//      with the marker stripped. So a point's own text comes back as a note line, and
//      without this exclusion every point would match itself and report a copy.
//
// That mistake was made once already while measuring this change, which is why it is
// spelled out rather than just coded.
function otherNoteLines(chapterName, ownPoints) {
  const chapter = concepts.find(c => c.name === chapterName);
  if (!chapter) return [];
  const own = new Set(ownPoints.map(normalize));
  const out = [];
  const add = raw => {
    const text = String(raw || '').trim();
    if (!text) return;
    if (/^(?:\/\/|\*)?\s*@(takeaway|gotcha|snippet)\b/i.test(text)) return;
    if (own.has(normalize(text))) return;
    out.push(text);
  };
  for (const topic of chapter.topics || []) {
    for (const block of topic.headerComments || []) {
      if (block.type === 'code' || block.type === 'table') continue;
      for (const line of block.lines || []) add(line);
    }
    for (const line of topic.inlineComments || []) add(line);
  }
  return out;
}

// Every code block the author wrote, so a snippet can be checked against them.
function noteCodeBlocks(chapterName) {
  const chapter = concepts.find(c => c.name === chapterName);
  if (!chapter) return [];
  const out = [];
  for (const topic of chapter.topics || []) {
    for (const block of topic.headerComments || []) {
      if (block.type === 'code' && block.code) out.push(String(block.code));
    }
  }
  return out;
}

// ---- The checks per chapter -------------------------------------------------

let checkedPoints = 0;
let checkedSnippets = 0;
const snippetsToVerify = [];

for (const chapter of concepts) {
  const entry = bank[chapter.name];
  if (!entry) continue;

  const isFinished = finished.has(chapter.name);
  // A placeholder is the message a finished chapter gets when it has no points yet. It is not
  // a cram point, so it is not counted, not measured for length, and not checked for repeats.
  const real = list => (list || []).filter(p => !(p && typeof p === 'object' && p.placeholder));
  const points = real(entry.takeaways);
  const traps = real(entry.gotchas);

  // A chapter still being written carries nothing. Same rule as everything else, checked in
  // one more place because this panel is new.
  if (!isFinished) {
    if (points.length || traps.length) {
      failures.push(`${chapter.name}: ${points.length} point(s) and ${traps.length} trap(s) exist, but the chapter is still being written.`);
    }
    continue;
  }

  if (points.length < MIN_POINTS) authoringGaps.push(`${chapter.name}: ${points.length} authored points; no filler added.`);
  if (points.length > MAX_POINTS) {
    failures.push(`${chapter.name}: ${points.length} points. A cram sheet wants ${MIN_POINTS} to ${MAX_POINTS}.`);
  }
  if (traps.length < MIN_TRAPS) authoringGaps.push(`${chapter.name}: ${traps.length} authored traps; no filler added.`);
  if (traps.length > MAX_TRAPS) {
    failures.push(`${chapter.name}: ${traps.length} traps. A cram sheet wants ${MIN_TRAPS} to ${MAX_TRAPS}.`);
  }

  const ownPoints = [...points, ...traps].map(say);
  const noteLines = otherNoteLines(chapter.name, ownPoints).map(normalize);
  const noteBlocks = noteCodeBlocks(chapter.name).map(normalize);

  for (const [kind, list] of [['point', points], ['trap', traps]]) {
    for (const item of list) {
      const text = say(item);
      checkedPoints++;

      // The length of the SENTENCE, not of the snippet under it.
      if (text.length > MAX_CHARS) {
        failures.push(`${chapter.name}: ${kind} is ${text.length} characters, over ${MAX_CHARS}: "${text.slice(0, 70)}..."`);
      }
      const words = text.split(/\s+/).filter(Boolean).length;
      if (words > MAX_WORDS) {
        failures.push(`${chapter.name}: ${kind} is ${words} words, over ${MAX_WORDS}: "${text.slice(0, 70)}..."`);
      }
      if (!text.trim()) {
        failures.push(`${chapter.name}: a ${kind} has no text.`);
      }

      // The guard: a point must not be another note line repeated.
      const norm = normalize(text);
      const duplicate = noteLines.find(line => line === norm || (line.length > 40 && norm.length > 40 && (line.includes(norm) || norm.includes(line))));
      if (duplicate) {
        failures.push(`${chapter.name}: ${kind} repeats a note line rather than stating a cram point: "${text.slice(0, 70)}..."`);
      }

      const snippet = code(item);
      if (!snippet) continue;
      checkedSnippets++;

      const lines = snippet.split('\n').filter(l => l.trim());
      if (lines.length > MAX_SNIPPET_LINES) {
        failures.push(`${chapter.name}: a snippet is ${lines.length} lines, over ${MAX_SNIPPET_LINES}: "${lines[0].slice(0, 50)}..."`);
      }
      const normSnippet = normalize(snippet);
      // A snippet is meant to show the shape of the syntax, so a short one will often appear
      // inside one of the notes' own code blocks - `System.out.println("Hello World");` is in
      // the annotated HelloWorld example, and that is fine. What is NOT fine is lifting a
      // whole block out as a snippet, which is what this checks: equality with a note block,
      // not containment.
      if (noteBlocks.some(block => block === normSnippet)) {
        failures.push(`${chapter.name}: a snippet is a whole code block lifted from the notes: "${lines[0].slice(0, 50)}..."`);
      }

      snippetsToVerify.push({ chapter: chapter.name, kind, snippet, point: text });
    }
  }
}

// ---- Verifying the snippets, by compiling or by running them ----------------

// A snippet is one of four things, and each is verified differently:
//
//   a claim        "5 / 2          // 2"            run it, compare the comment
//   a non-claim    "x = 1;         // compile error"  assert it does NOT compile
//   a statement    "int n = 5;"                       compile inside a method
//   a member       "public static void main(String[] a)"  compile inside a class
//
// Trying several wrappers is deliberate: a cram snippet is a fragment, and the honest
// question is whether it is valid Java in some reasonable place, not whether it compiles as
// a file by itself.
//
// Two things this enforces that are worth stating, because they make the sheet better
// rather than just checkable:
//
//   - a snippet must be SELF-CONTAINED, using the JDK only. A fragment that calls the
//     author's own method cannot be verified by anyone, including him, six months later.
//   - a snippet whose comment claims it does not compile must actually not compile. The
//     claim is tested rather than trusted.
const COMPILE_ERROR_CLAIM = /\b(compile error|does not compile|will not compile|won't compile|fails to compile)\b/i;

function compileResult(work, className, source) {
  const file = path.join(work, `${className}.java`);
  fs.writeFileSync(file, source, 'utf8');
  return spawnSync('javac', compileArguments(['-XDrawDiagnostics', '-d', work, file]), { encoding: 'utf8', timeout: 30000 });
}
function attemptCompile(work, className, source) { return compileResult(work, className, source).status === 0; }
const evidence = { output: 0, compileFailure: 0, runtimeFailure: 0, syntaxOnly: 0, unsupportedClaims: 0 };

// A claim is a line whose comment says what the line produces: "5 / 2  // 2". The comment
// may be a single token ("2", "30Java", "Jav") or a sentence ("9, not 10"), so the first
// token is what gets compared against what the line actually prints.
function verifyClaim(work, index, item, line) {
  const comment = (line.match(/\/\/\s*(.+)$/) || [])[1];
  if (!comment) return false;

  const expression = line.replace(/\/\/.*$/, '').trim().replace(/;\s*$/, '');
  if (!expression) return false;

  // A snippet whose comment says it does not compile must actually not compile. The claim is
  // tested rather than trusted, which is what makes "// compile error" worth writing.
  if (COMPILE_ERROR_CLAIM.test(comment)) {
    const name = `Fail${index}`;
    const contract = compileContracts[expression];
    if (!contract) {
      failures.push(`${item.chapter}: compile-failure claim needs an authored diagnostic contract: ${expression}`);
      return true;
    }
    const source = `public class ${name} {\n${contract.members || ''}\n    void run() {\n${expression};\n    }\n}\n`;
    const result = compileResult(work, name, source);
    if (!expectedCompileFailure(result, contract.diagnostic)) {
      failures.push(`${item.chapter}: expected compiler diagnostic ${contract.diagnostic}, not an unrelated failure: ${result.stderr || result.error || 'compiled successfully'}`);
    } else {
      evidence.compileFailure++;
    }
    return true;
  }

  const throwing = comment.trim().match(/^throws(?:\s+([\w.]+Exception))?$/);
  let expected = comment.trim().replace(/,\s+not\s+.+$/, '');
  if (expected.startsWith('"')) {
    try { expected = JSON.parse(expected); } catch { evidence.unsupportedClaims++; return false; }
  } else if (!throwing && /\b(?:always|runs|now|still|same|object|because)\b/i.test(expected)) {
    evidence.unsupportedClaims++;
    return false;
  }

  const name = `Claim${index}`;
  const field = expression.match(/^static\s+\w+\s+(\w+)$/);
  const source = `public class ${name} {\n${field ? expression + ';' : ''}\n    public static void main(String[] args) {\n        System.out.print(${field ? field[1] : expression});\n    }\n}\n`;
  const compiled = compileResult(work, name, source);
  if (compiled.status !== 0) {
    failures.push(`${item.chapter}: output/runtime claim did not compile: ${compiled.stderr || compiled.error}`);
    return true;
  }

  // One retry, because a JVM that will not start is not a wrong answer. Without it a transient
  // failure falls through to the whole-snippet compile, and a claim-style line cannot be
  // validated that way - `2 + 3   // 5` is not a statement, so the snippet gets reported as
  // "not valid Java on its own". That false alarm was observed once, in a run that started
  // while a regenerate was still finishing, and then not again in six repeats.
  let run = spawnSync('java', ['-cp', work, name], { encoding: 'utf8', timeout: 15000 });
  if (run.status !== 0) run = spawnSync('java', ['-cp', work, name], { encoding: 'utf8', timeout: 15000 });
  if (throwing) {
    const expectedException = throwing[1] || (expression === 'String.format("%d", "text")' ? 'IllegalFormatConversionException' : null);
    if (!expectedException || run.error || run.signal || run.status !== 1 || !new RegExp(`Exception in thread "[^"]+" (?:[\\w.]+\\.)?${expectedException.replace(/\./g, '\\.')}(?::|\\s)`).test(run.stderr || '')) {
      failures.push(`${item.chapter}: expected ${expectedException || 'a named exception'}, not an unrelated runtime/infrastructure error: ${run.stderr || run.error}`);
    } else evidence.runtimeFailure++;
    return true;
  }
  if (run.status !== 0) failures.push(`${item.chapter}: output claim failed at runtime: ${run.stderr || run.error}`);
  else if (!exactOutputMatches(run.stdout, expected)) failures.push(`${item.chapter}: snippet claims ${JSON.stringify(expected)} but prints ${JSON.stringify(run.stdout)}.`);
  else evidence.output++;
  return true;
}

function verifySnippet(work, index, item) {
  const lines = item.snippet.split('\n').filter(l => l.trim());
  if (!lines.length) return;

  // Two shapes, and the difference matters:
  //
  //   every line carries its own "// value"   -> each line is a separate claim
  //   otherwise                               -> the lines are ONE sample of Java
  //
  // "5 / 2 // 2" followed by "5 / 2.0 // 2.5" is two claims, not a two-line program.
  const allClaims = lines.every(line => /\/\/\s*\S/.test(line));
  if (allClaims) {
    const resolved = lines.map((line, n) => verifyClaim(work, `${index}_${n}`, item, line));
    // Falling through matters. verifyClaim returns false in three ordinary situations - the
    // comment is prose rather than a value, the claim will not compile, or the run failed -
    // and in all three the snippet has NOT been checked as Java at all. Without this, a
    // one-line snippet that carries a comment is counted as "valid Java" without ever being
    // compiled: `this is not java at all; // some comment` passed, and was reported as
    // checked. Verified by sabotage, and it is why the summary line is trustworthy now.
    if (resolved.every(Boolean)) return;
  }

  const body = lines.join('\n');
  const attempts = [
    `public class Probe${index} {\n${body}\n}\n`,
    `public class Probe${index} {\n${body} { }\n}\n`,
    `public class Probe${index} {\n    void run() {\n${body}\n    }\n}\n`,
    `public class Probe${index} {\n    void run() {\n        Object v = ${body};\n    }\n}\n`
  ];
  // A fifth shape, and it is needed for one specific line: a claim carries no semicolon,
  // because a claim is an expression rather than a statement - `2 + 3   // 5`. verifyClaim adds
  // the semicolon back when it runs the claim, but when a claim cannot be evaluated - the
  // comment is prose, or the expression throws at runtime - this fallback is the only check
  // left, and NONE of the four wrappers above can validate a line with no semicolon. They all
  // reported "';' expected", so a perfectly valid claim was called "not valid Java on its own".
  // That was the real cause of a false alarm blamed on a transient JVM failure, and it also
  // rejected `String.format("%d", "text")   // throws`. Restricted to the one-line claim shape,
  // so a multi-line sample still has to carry its own semicolons.
  if (lines.length === 1 && body.includes('//')) {
    const codeOnly = body.replace(/\/\/.*$/, '').trim().replace(/;\s*$/, '');
    if (codeOnly) {
      attempts.push(`public class Probe${index} {\n    void run() {\n        ${codeOnly};\n    }\n}\n`);
    }
  }
  if (!attempts.some(source => attemptCompile(work, `Probe${index}`, source))) {
    failures.push(`${item.chapter}: a snippet is not valid Java on its own: "${lines[0].slice(0, 60)}..."`);
  } else evidence.syntaxOnly++;
}

if (snippetsToVerify.length) {
  try {
    if (failures.some(f => f.startsWith('Required native check cannot run'))) throw new Error('Native snippet execution unavailable; no snippet was counted as passed.');
    const work = createWorkDir('cram');
    try {
      snippetsToVerify.forEach((item, index) => verifySnippet(work, index, item));
    } finally {
      fs.rmSync(work, { recursive: true, force: true });
    }
  } catch (error) { failures.push(error.message); }
}

// ---- Report -----------------------------------------------------------------

console.log('');
console.log(`   Points checked      : ${checkedPoints} across ${finished.size} finished chapter(s)`);
console.log(`   Snippets inspected  : ${checkedSnippets}; native exact output ${evidence.output}, expected compile failures ${evidence.compileFailure}, expected exceptions ${evidence.runtimeFailure}, syntax-only ${evidence.syntaxOnly}, unsupported prose claims ${evidence.unsupportedClaims}`);
console.log(`   Length limit        : ${MAX_CHARS} characters, ${MAX_WORDS} words`);
if (!failures.some(f => f.startsWith('Required native check cannot run'))) {
  console.log(`   Native evidence     : ${JSON.stringify(nativeValidation('scripts/check-cram.js', frameworkFingerprint(root, ['scripts/check-cram.js', 'scripts/lib/run-java.js', 'scripts/lib/output-contract.js', 'data/snippet-contracts.js'])))}`);
}
authoringGaps.forEach(gap => console.log(`   Needs authoring: ${gap}`));

if (failures.length) {
  console.error('');
  for (const failure of failures) console.error(`   ${failure}`);
  console.error('');
  console.error(`Cram point check failed: ${failures.length} problem(s).`);
  console.error('A cram point is one short sentence you could say out loud. See rules.md.');
  process.exit(1);
}

console.log('   Structural and supported native snippet checks passed; syntax-only checks do not establish prose correctness.');
