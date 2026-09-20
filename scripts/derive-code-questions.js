// ============================================================================
// Derives "what does this print?" questions from real code in the notes.
//
// WHY THIS IS DIFFERENT FROM THE ATTEMPT THAT WAS DELETED
//
// An earlier generator tried to INFER answers from code and produced 0 usable
// questions. This one never infers anything: it COMPILES AND RUNS the block and
// takes the real output as the answer. The answer is not a guess that might be
// wrong, it is what the JVM did. check-questions.js then re-runs every one of them
// on each `npm run revise`, so a stale answer fails the build.
//
// The raw material is the author's own code blocks. Most of them carry his own
// answer in a trailing comment:
//
//     int a = 1; int b = 2; System.out.println(a + b);   // prints 3
//
// That comment is the answer, so it is STRIPPED from the code the question shows,
// and kept as the explanation, in his own words. Without stripping, every question
// would show its own answer.
//
// Measured before building: of 132 code blocks, 49 compile on their own, 45 also
// run, 26 state their output in a comment, and all 26 still compile and run with
// identical output once that comment is stripped. Those 26 are the candidates.
//
// Output: data/code-questions.js, which parse-concepts.js merges like the OCJP bank.
//
// Usage: node scripts/derive-code-questions.js [--quiet]
// ============================================================================

const fs = require('fs');
const os = require('os');
const path = require('path');
const { runProcess, mapWithConcurrency, availableConcurrency } = require(path.join(__dirname, 'lib', 'run-java.js'));

const root = path.resolve(__dirname, '..');
const quiet = process.argv.includes('--quiet');

function loadValue(file, globalName) {
  const source = fs.readFileSync(path.join(root, 'revision-dashboard', file), 'utf8');
  return new Function(`${source}\nreturn typeof ${globalName} !== 'undefined' ? ${globalName} : null;`)();
}

const concepts = loadValue('data.js', 'CONCEPTS_DATA') || [];

// Every code block in the notes, in a stable order, is the input to this script.
function collectBlocks() {
  const out = [];
  for (const chapter of concepts) {
    for (const topic of chapter.topics) {
      for (const block of topic.headerComments || []) {
        if (block.type !== 'code' || !block.code) continue;
        out.push({ chapter: chapter.name, topic: topic.topicName, topicPath: topic.filePath, code: String(block.code) });
      }
    }
  }
  return out;
}

function hashBlocks(blocks) {
  let result = 2166136261;
  const feed = (text) => {
    for (let i = 0; i < text.length; i++) {
      result ^= text.charCodeAt(i);
      result = Math.imul(result, 16777619);
    }
  };
  for (const b of blocks) feed(b.chapter + '|' + b.topic + '|' + b.code + '\n');
  return (result >>> 0).toString(16);
}

const blocks = collectBlocks();
const sourceHash = hashBlocks(blocks);
const outputFile = path.join(root, 'data', 'code-questions.js');

// Deriving means compiling and running every candidate block, which takes minutes.
// The result depends only on the blocks, so when they have not changed there is
// nothing to redo. The hash is stored in the generated file and compared here.
if (!process.argv.includes('--force') && fs.existsSync(outputFile)) {
  const existing = fs.readFileSync(outputFile, 'utf8');
  const match = existing.match(/SOURCE_HASH = '([0-9a-f]+)'/);
  if (match && match[1] === sourceHash) {
    if (!quiet) console.log(`   Code questions are already up to date (${(existing.match(/"id":/g) || []).length} questions, source unchanged).`);
    process.exit(0);
  }
}

// A block states its own answer. Only these are used, because the claim is what
// tells us the block is meant to demonstrate output rather than just be read.
const OUTPUT_CLAIM = /\/\/[^\S\n]*(?:prints?|output|gives?)\b[^\S\n]*[:\-]?[^\S\n]*([^\n]*)/i;

// The author's own reason, kept as the explanation. Everything after "//" on the
// line that made the claim, minus the claim marker itself.
function explanationFrom(code) {
  const match = code.match(OUTPUT_CLAIM);
  if (!match) return '';
  return match[1].trim().replace(/\s+/g, ' ');
}

// A comment can describe something other than the output, such as "returns a
// primitive int" about the TYPE a call returns. When the comment states a value and
// none of its numbers appear in the real output, it is talking about something else,
// so it is dropped rather than shown as an explanation of the wrong thing. The
// question is kept either way.
function explanationFitsOutput(explanation, output) {
  const numbers = String(explanation).match(/\d[\d.]*/g);
  if (!numbers || !numbers.length) return true;
  return numbers.some(n => output.includes(n));
}

// The code the question shows: the same block with every trailing comment removed,
// so the answer is not on the page.
function stripComments(code) {
  return code
    .split('\n')
    .map(line => line.replace(/\s*\/\/.*$/, '').replace(/\s+$/, ''))
    .filter((line, i, all) => line.trim() || (i > 0 && i < all.length - 1))
    .join('\n')
    .trim();
}

// Output that is nothing but the string literals already on the page tests nothing.
function isTrivialOutput(code, output) {
  const literals = [...code.matchAll(/"([^"]*)"/g)].map(m => m[1]).filter(l => l.trim());
  if (!literals.length) return false;
  const lines = output.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length > literals.length) return false;
  return lines.every(line => literals.includes(line));
}

const work = fs.mkdtempSync(path.join(os.tmpdir(), 'derive-'));

// Compiles and runs a block, returning its real output, or null when it cannot be
// compiled or does not finish. ASYNC: these used to run one at a time through
// execFileSync, which is why a full rebuild took 29 seconds.
async function runBlock(code, tag) {
  const candidates = [];
  if (/\bclass\s+\w+/.test(code)) candidates.push(code);
  candidates.push(`public class Probe {\n    public static void main(String[] args) {\n${code.split('\n').map(l => '        ' + l).join('\n')}\n    }\n}`);

  for (const source of candidates) {
    const dir = fs.mkdtempSync(path.join(work, tag + '-'));
    const file = path.join(dir, 'Probe.java');
    fs.writeFileSync(file, source.replace(/\n/g, '\r\n'), 'utf8');
    const compile = await runProcess('javac', ['-d', dir, file], { timeout: 30000 });
    if (compile.status !== 0) continue;
    const run = await runProcess('java', ['-cp', dir, 'Probe'], { timeout: 5000 });
    return run.status === 0 ? String(run.stdout).trim() : null;
  }
  return null;
}

const questions = [];
const skipped = { noClaim: 0, wontCompile: 0, noOutput: 0, changedWhenStripped: 0, trivial: 0, duplicate: 0 };
const seen = new Set();

// CommonJS has no top-level await, so the part that compiles is wrapped in an async
// main. Everything after the runBlock definition belongs to it.
async function main() {

// Blocks are processed in parallel, because each one needs a javac and a java process
// and JVM startup is the whole cost. Results are then assembled in the original order
// so the generated file stays byte-stable between runs.
async function evaluateBlock(block, index) {
  const code = block.code;
  const claim = code.match(OUTPUT_CLAIM);
  if (!claim) return { skip: 'noClaim' };

  const tag = 'b' + index;
  const realOutput = await runBlock(code, tag);
  if (realOutput === null) return { skip: 'wontCompile' };
  if (!realOutput) return { skip: 'noOutput' };

  // The stripped code must produce exactly the same output, or the comment was
  // load-bearing and the block cannot be shown without it.
  const shown = stripComments(code);
  if (!shown) return { skip: 'noOutput' };
  const strippedOutput = await runBlock(shown, tag + 's');
  if (strippedOutput !== realOutput) return { skip: 'changedWhenStripped' };

  if (isTrivialOutput(shown, realOutput)) return { skip: 'trivial' };

  return {
    question: {
      chapter: block.chapter,
      topic: block.topic,
      topicPath: block.topicPath,
      code: shown,
      answer: realOutput,
      explanation: explanationFitsOutput(explanationFrom(code), realOutput) ? explanationFrom(code) : '',
      claim: claim[1].trim()
    }
  };
}

const evaluated = await mapWithConcurrency(blocks, availableConcurrency(), evaluateBlock);
for (const outcome of evaluated) {
  if (outcome.skip) { skipped[outcome.skip]++; continue; }
  const key = outcome.question.code + '||' + outcome.question.answer;
  if (seen.has(key)) { skipped.duplicate++; continue; }
  seen.add(key);
  questions.push(outcome.question);
}

// A stable id per question, so progress tracking survives a regeneration.
function slug(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
}
for (const q of questions) {
  q.id = `code-${slug(q.chapter)}-${slug(q.topic)}-${slug(q.answer).slice(0, 20)}`;
}

const output = `// ============================================================================
// AUTO-GENERATED by scripts/derive-code-questions.js. Do NOT edit by hand.
//
// "What does this print?" questions taken from real code blocks in the notes. Each
// answer is the output the JVM actually produced, not an inference, and the code
// shown has the author's own answer comment stripped from it so the question does
// not give itself away. The explanation is that comment, in the author's words.
//
// SOURCE_HASH is the fingerprint of the code blocks this was derived from. When it
// still matches, the script skips the work instead of compiling everything again.
//
// Regenerate with: node scripts/derive-code-questions.js [--force]
// ============================================================================

const SOURCE_HASH = '${sourceHash}';

const DERIVED_CODE_QUESTIONS = ${JSON.stringify(questions, null, 2)};

module.exports = { DERIVED_CODE_QUESTIONS, SOURCE_HASH };
`;

fs.writeFileSync(outputFile, output, 'utf8');

if (!quiet) {
  console.log(`   Derived ${questions.length} print question(s) from real code`);
  console.log(`   Skipped: ${skipped.noClaim} with no output claim, ${skipped.wontCompile} that will not compile, ` +
    `${skipped.noOutput} with no output, ${skipped.changedWhenStripped} that changed when the comment was stripped, ` +
    `${skipped.trivial} whose output is already on the page, ${skipped.duplicate} duplicates`);
  const perChapter = new Map();
  for (const q of questions) perChapter.set(q.chapter, (perChapter.get(q.chapter) || 0) + 1);
  [...perChapter.entries()].sort().forEach(([c, n]) => console.log(`      ${String(n).padStart(2)}  ${c}`));
}

fs.rmSync(work, { recursive: true, force: true });
}

main().catch(error => {
  console.error(`Could not derive the code questions: ${error && error.message ? error.message : error}`);
  process.exit(1);
});
