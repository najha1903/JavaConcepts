// ============================================================================
// Makes more practice challenges auto-checked, by supplying the expected value.
//
// THE PROBLEM
//
// A challenge is only auto-checked when every test case has an expected value. 38 of
// 63 were self-check. Measured: 34 of those 38 carry a placeholder test case with an
// EMPTY argument list - `[{ args: [], expected: null }]` - while the method they ask
// about takes one to four parameters. So they have no usable test case at all, which
// is why the challenge falls back to self-check. Nothing is wrong with the
// challenges; the material to check them was simply never recorded.
//
// THE FIX
//
// The author's implementation is right there, so the expected value is knowable: run
// the method and take what it returns. Same principle as the derived code questions.
//
// Arguments have to come from somewhere. They are generated only for parameter types
// where ANY in-range value is meaningful - numbers and booleans. A String parameter
// is skipped, because "January" exercises getQuarter and "abc" does not, and picking
// one would be a guess about the author's domain. That is the honest limit of this
// script, and it is why it fills some challenges and not others.
//
// Output: data/practice-expectations.js, applied by parse-concepts.js. Kept in its own
// file so the computed values survive a regeneration and show up in a diff.
//
// Usage: node scripts/fill-practice-expectations.js [--quiet]
// ============================================================================

const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');
const { buildVerifySource } = require('./lib/lab-verifier.js');

const root = path.resolve(__dirname, '..');
const quiet = process.argv.includes('--quiet');

function loadValue(file, globalName) {
  const source = fs.readFileSync(path.join(root, 'revision-dashboard', file), 'utf8');
  return new Function(`${source}\nreturn typeof ${globalName} !== 'undefined' ? ${globalName} : null;`)();
}

const concepts = loadValue('data.js', 'CONCEPTS_DATA') || [];
const challenges = loadValue('practice.js', 'GENERATED_PRACTICE_CHALLENGES') || [];
const outputFile = path.join(root, 'data', 'practice-expectations.js');

// Existing entries are kept, so a re-run cannot lose work. Without this the script
// would read the practice file it has ALREADY filled, find nothing left to do, and
// write an empty file.
let existing = {};
if (fs.existsSync(outputFile)) {
  try { existing = require(outputFile).PRACTICE_EXPECTATIONS || {}; } catch { existing = {}; }
}

// A target is a challenge with no usable expected value, plus every challenge that
// already has one - so each entry is re-validated on every run rather than only the
// first time. That is what removes an entry that the lab has since stopped agreeing
// with, instead of leaving it to mark correct code wrong.
function needsFilling(challenge) {
  const cases = challenge.testCases || [];
  if (!cases.length) return false;
  if (challenge.id in existing) return true;
  return cases.some(tc => tc.expected === null);
}

const targets = challenges.filter(needsFilling);

function sourceFor(challenge) {
  for (const chapter of concepts) {
    if (chapter.name !== challenge.chapter) continue;
    for (const topic of chapter.topics) {
      const re = new RegExp(`public\\s+static\\s+[\\w<>\\[\\]]+\\s+${challenge.methodName}\\s*\\(`);
      if (re.test(String(topic.code || ''))) return topic;
    }
  }
  return null;
}

// In-range values that are meaningful for any method taking that type. Deliberately
// small: one or two cases per challenge, not a sweep. These are real JS values, so
// the literal conversion below can tell a number from a string; returning "2.0" as a
// string would be quoted and produce a type error.
function valuesFor(type) {
  const t = String(type).replace(/\bfinal\b/g, '').trim();
  if (/\b(int|long|short|byte)\b/.test(t)) return [1, 4];
  if (/\b(double|float)\b/.test(t)) return [2.5, 10.5];
  if (/\bboolean\b/.test(t)) return [true];
  return null;   // String, char, arrays, objects: the valid domain is the author's to define
}

// What Java printed has to come back as the JS type the verifier will compare it
// with. Storing "36.5" as a string made `36.5 === "36.5"` false, and the verifier
// then rejected the author's own correct solution. check-practice.js caught that on
// 16 challenges, which is exactly what it is for.
function asJsValue(printed, returnType) {
  const t = String(returnType).trim();
  if (/^(int|long|short|byte)$/.test(t)) {
    const n = Number.parseInt(printed, 10);
    return Number.isNaN(n) ? printed : n;
  }
  if (/^(double|float)$/.test(t)) {
    const n = Number.parseFloat(printed);
    return Number.isNaN(n) ? printed : n;
  }
  if (t === 'boolean') {
    if (printed === 'true') return true;
    if (printed === 'false') return false;
  }
  // String, char, and void methods that print: the text is the value.
  return printed;
}

// ---- The lab's own verifier, so nothing is written that it will reject ---------
// An expectation is only useful if the lab agrees with it. Computing the value in
// Java is not enough: the lab translates the method into JavaScript, and that
// translation has known limits. If the two disagree, writing the expectation would
// make the lab mark the author's own correct code wrong - the worst outcome there is.
//
// So every candidate is run through the real verifier against the author's source,
// and only the ones it accepts are written.
function buildLab() {
  const noop = () => {};
  const store = {};
  const stubElement = () => ({
    style: {}, dataset: {}, children: [], value: '', textContent: '', innerHTML: '',
    classList: { add: noop, remove: noop, toggle: noop, contains: () => false },
    addEventListener: noop, removeEventListener: noop, appendChild: noop, removeChild: noop,
    setAttribute: noop, getAttribute: () => null, removeAttribute: noop,
    querySelector: () => null, querySelectorAll: () => [], closest: () => null,
    insertAdjacentHTML: noop, focus: noop, click: noop, scrollIntoView: noop,
    getBoundingClientRect: () => ({ width: 0, height: 0, top: 0, left: 0 })
  });
  const sandbox = {
    console,
    setTimeout, clearTimeout, setInterval, clearInterval,
    localStorage: { getItem: k => (k in store ? store[k] : null), setItem: (k, v) => { store[k] = String(v); }, removeItem: k => { delete store[k]; }, clear: () => {} },
    matchMedia: () => ({ matches: false, addListener: noop, removeListener: noop, addEventListener: noop, removeEventListener: noop }),
    requestAnimationFrame: cb => setTimeout(cb, 0),
    navigator: { clipboard: { writeText: async () => {} } }
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  sandbox.document = {
    getElementById: () => stubElement(), querySelector: () => null, querySelectorAll: () => [],
    createElement: () => stubElement(), addEventListener: noop,
    body: stubElement(), documentElement: stubElement(), head: stubElement()
  };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(root, 'revision-dashboard', 'app.js'), 'utf8'), sandbox, { filename: 'app.js' });
  return sandbox;
}

let lab = null;
try { lab = buildLab(); } catch (error) {
  console.error(`   Could not load the practice lab to validate expectations: ${error.message}`);
  process.exit(1);
}

// Runs the real verifier for a challenge over the given cases. Returns true only when
// the lab accepts every one of them for the author's own solution.
function labAgrees({ methodName, paramNames, capturesOutput, solution, cases }) {
  const source = buildVerifySource({ methodName, paramNames, capturesOutput });
  if (!source) return false;
  let verify;
  try {
    lab.__src = source;
    verify = vm.runInContext('eval("(" + __src + ")")', lab);
  } catch { return false; }
  return cases.every(testCase => {
    try { return verify(solution, testCase) === true; } catch { return false; }
  });
}

const work = fs.mkdtempSync(path.join(os.tmpdir(), 'expect-'));
// Built fresh, so an entry that is no longer valid is genuinely removed rather than
// carried over. A challenge whose Java run fails for an unrelated reason keeps its
// previous entry instead, so a transient javac problem cannot lose good work.
const expectations = {};
const report = { filled: 0, skippedDomainTypes: 0, noSource: 0, wouldNotCompile: 0, threw: 0, noResult: 0, labDisagreed: 0, carriedOver: 0 };
const skipped = [];
const disagreements = [];

for (const challenge of targets) {
  const topic = sourceFor(challenge);
  if (!topic) { report.noSource++; continue; }

  const classBody = String(topic.code)
    .replace(/^\s*package\s+[^;]+;\s*$/m, '')
    .replace(new RegExp(`public\\s+class\\s+${topic.fileName.replace('.java', '')}\\b`), 'public class Harness');

  const signature = classBody.match(new RegExp(`public\\s+static\\s+([\\w<>\\[\\]]+)\\s+${challenge.methodName}\\s*\\(([^)]*)\\)`));
  if (!signature) { report.noSource++; continue; }
  const returnType = signature[1];
  const isVoid = returnType === 'void';
  const params = signature[2].split(',').map(p => p.trim()).filter(Boolean);
  const types = params.map(p => p.replace(/\s+\w+$/, '').trim());
  // Only the parameter NAMES, exactly as parse-concepts.js derives them. Passing the
  // full declaration ("double celsius") would build `new Function("double celsius")`,
  // which is not valid JavaScript, so the verifier would throw and every expectation
  // would look like a disagreement.
  const paramNames = params.map(p => p.split(/\s+/).pop());

  // Argument sets: the scraped case when it fits, otherwise generated values.
  const scraped = challenge.testCases.find(tc => tc.args.length === params.length);
  let argSets = null;
  if (scraped) {
    argSets = [scraped.args];
  } else {
    const choices = types.map(valuesFor);
    if (choices.some(c => c === null)) {
      report.skippedDomainTypes++;
      skipped.push({ id: challenge.id, method: challenge.methodName, types: types.join(', ') });
      continue;
    }
    const rounds = Math.max(...choices.map(c => c.length));
    argSets = Array.from({ length: rounds }, (_, i) => choices.map(c => c[Math.min(i, c.length - 1)]));
  }

  const cases = [];
  let ok = true;

  for (const args of argSets) {
    const literals = args.map(a => {
      if (typeof a === 'boolean') return a ? 'true' : 'false';
      if (typeof a === 'number') return String(a);
      const text = String(a).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      return `"${text}"`;
    });
    const call = `Harness.${challenge.methodName}(${literals.join(', ')})`;
    const statement = isVoid ? `${call};` : `System.out.print(${call});`;

    const dir = fs.mkdtempSync(path.join(work, 'c-'));
    const file = path.join(dir, 'Harness.java');
    fs.writeFileSync(file, `${classBody}\n\nclass Runner {\n    public static void main(String[] a) {\n        ${statement}\n    }\n}`.replace(/\n/g, '\r\n'), 'utf8');

    try {
      execFileSync('javac', ['-d', dir, file], { stdio: 'pipe' });
    } catch { report.wouldNotCompile++; ok = false; break; }

    let out;
    try {
      out = execFileSync('java', ['-cp', dir, 'Runner'], { stdio: 'pipe', timeout: 5000 }).toString().replace(/\r\n/g, '\n');
    } catch { report.threw++; ok = false; break; }

    const trimmed = out.replace(/\s+$/, '');
    // An empty result cannot be told apart from "it never ran", so it is not used as
    // an expectation. A challenge that genuinely expects no output needs an explicit
    // @testcase line from the author.
    if (!trimmed) { report.noResult++; ok = false; break; }
    cases.push({ args, expected: asJsValue(trimmed, returnType) });
  }

  if (ok && cases.length) {
    // The lab has the final say. If it does not agree with the Java-computed value,
    // the challenge stays self-check: honest, rather than marking correct code wrong.
    const solution = String(topic.code);
    if (labAgrees({ methodName: challenge.methodName, paramNames, capturesOutput: isVoid, solution, cases })) {
      expectations[challenge.id] = cases;
      report.filled++;
    } else {
      report.labDisagreed++;
      disagreements.push({ id: challenge.id, method: challenge.methodName, cases });
    }
  } else if (existing[challenge.id]) {
    // The Java run failed this time. Keep what was already validated rather than
    // dropping it on a transient problem.
    expectations[challenge.id] = existing[challenge.id];
    report.carriedOver++;
  }
}

const output = `// ============================================================================
// AUTO-GENERATED by scripts/fill-practice-expectations.js. Do NOT edit by hand.
//
// Expected values for practice challenges whose notes recorded no expectation. Each
// one is the result of calling the author's OWN implementation, so it is his answer
// rather than a guess. This is what turns a self-check challenge into an
// auto-checked one.
//
// The arguments are generated, and only for numeric and boolean parameters: for
// those, any in-range value is meaningful. A String parameter is left alone, because
// choosing the value would be a guess about the author's domain. A challenge that is
// absent here needs a @testcase line in the notes.
//
// Regenerate with: node scripts/fill-practice-expectations.js
// ============================================================================

const PRACTICE_EXPECTATIONS = ${JSON.stringify(expectations, null, 2)};

module.exports = { PRACTICE_EXPECTATIONS };
`;

// Only rewritten when a value actually changed, so a run that finds nothing to do
// does not leave the working tree dirty.
const previous = fs.existsSync(outputFile) ? fs.readFileSync(outputFile, 'utf8') : '';
if (previous !== output) fs.writeFileSync(outputFile, output, 'utf8');

if (!quiet) {
  console.log(`   ${targets.length} challenge(s) had test cases with no expected value.`);
  console.log(`   Filled expectations for ${report.filled} challenge(s) by running the author's own method.`);
  if (report.skippedDomainTypes) {
    console.log(`   ${report.skippedDomainTypes} skipped: a parameter's valid values are the author's to define.`);
    skipped.slice(0, 8).forEach(s => console.log(`      ${s.method}(${s.types})`));
    console.log('      Add an @testcase line for these to make them auto-checked.');
  }
  if (report.labDisagreed) {
    console.log(`   ${report.labDisagreed} left as self-check: the lab's own verifier disagrees, so an`);
    console.log('   expectation would have marked the author\'s correct code wrong.');
    disagreements.slice(0, 8).forEach(d => console.log(`      ${d.method}  ${d.cases.map(c => `(${c.args.join(',')})=>${JSON.stringify(c.expected)}`).join('  ')}`));
  }
  if (report.carriedOver) console.log(`   ${report.carriedOver} kept their previous value (the Java run failed this time).`);
  if (report.noSource) console.log(`   ${report.noSource} had no matching source file.`);
  if (report.wouldNotCompile) console.log(`   ${report.wouldNotCompile} did not compile in a harness.`);
  if (report.threw) console.log(`   ${report.threw} threw on the generated arguments.`);
  if (report.noResult) console.log(`   ${report.noResult} produced no output to compare.`);
}

fs.rmSync(work, { recursive: true, force: true });
