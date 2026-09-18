// ============================================================================
// Checks the practice checker itself.
//
// The practice lab runs a learner's method in the browser by translating the Java
// into JavaScript and comparing the result with an expected value. If that
// translation is incomplete, or an expected value is wrong, the lab tells a
// learner their CORRECT code is wrong, which is the worst thing it can do.
//
// This script runs every auto-checked challenge against the author's own solution,
// taken from the file the challenge came from, and reports:
//
//   FAIL  the verifier returned false for the author's correct code
//   WARN  the verifier could not run the code, so the lab says "could not be
//         checked", which is honest but worth knowing about
//
// A FAIL exits non-zero, so `npm run check` stops.
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');

// ---- A permissive DOM stub, enough for app.js to load without a browser ------
function stubElement() {
  const noop = () => {};
  return {
    style: {}, dataset: {}, children: [], value: '', textContent: '', innerHTML: '',
    classList: { add: noop, remove: noop, toggle: noop, contains: () => false },
    addEventListener: noop, removeEventListener: noop, appendChild: noop, removeChild: noop,
    setAttribute: noop, getAttribute: () => null, removeAttribute: noop,
    querySelector: () => null, querySelectorAll: () => [], closest: () => null,
    insertAdjacentHTML: noop, focus: noop, click: noop, scrollIntoView: noop,
    getBoundingClientRect: () => ({ width: 0, height: 0, top: 0, left: 0 })
  };
}

function buildSandbox() {
  const noop = () => {};
  const store = {};
  const sandbox = {
    console,
    setTimeout, clearTimeout, setInterval, clearInterval,
    localStorage: {
      getItem: key => (key in store ? store[key] : null),
      setItem: (key, value) => { store[key] = String(value); },
      removeItem: key => { delete store[key]; },
      clear: () => { Object.keys(store).forEach(k => delete store[k]); }
    },
    matchMedia: () => ({ matches: false, addListener: noop, removeListener: noop, addEventListener: noop, removeEventListener: noop }),
    requestAnimationFrame: callback => setTimeout(callback, 0),
    navigator: { clipboard: { writeText: async () => {} } }
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  sandbox.document = {
    getElementById: () => stubElement(),
    querySelector: () => null,
    querySelectorAll: () => [],
    createElement: () => stubElement(),
    addEventListener: noop,
    body: stubElement(), documentElement: stubElement(), head: stubElement()
  };
  return sandbox;
}

function loadValue(file, globalName) {
  const source = fs.readFileSync(path.join(dashboardDir, file), 'utf8');
  const context = {};
  vm.runInNewContext(`${source}\nthis.__value = typeof ${globalName} !== 'undefined' ? ${globalName} : null;`, context, { filename: file });
  return context.__value;
}

function findSourceFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) findSourceFiles(full, out);
    else if (entry.name.endsWith('.java')) out.push(full);
  }
  return out;
}

// ---- Run --------------------------------------------------------------------

let sandbox;
try {
  sandbox = buildSandbox();
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(dashboardDir, 'app.js'), 'utf8'), sandbox, { filename: 'app.js' });
} catch (error) {
  console.error(`Could not load revision-dashboard/app.js to check the practice verifiers: ${error.message}`);
  process.exit(1);
}

if (typeof sandbox.prepareJavaBody !== 'function' || typeof sandbox.extractMethodBody !== 'function') {
  console.error('app.js loaded but the translation helpers are missing, so the practice verifiers cannot be checked.');
  process.exit(1);
}

const practice = loadValue('practice.js', 'GENERATED_PRACTICE_CHALLENGES') || [];
const autoChecked = practice.filter(c => (c.testCases || []).some(t => t && t.expected !== null && t.expected !== undefined));

const sources = new Map();
for (const file of findSourceFiles(path.join(root, 'src'))) {
  sources.set(path.basename(file, '.java').toLowerCase().replace(/-/g, ''), file);
}

const failures = [];
const warnings = [];
let passed = 0;

for (const challenge of autoChecked) {
  const sourceFile = sources.get(challenge.id);
  if (!sourceFile) {
    warnings.push(`${challenge.id}: the source file could not be found, so the challenge cannot be checked against a solution.`);
    continue;
  }
  if (!challenge.verifyFnStr) {
    failures.push(`${challenge.id}: marked as auto-checked but has no verifier.`);
    continue;
  }

  let verify;
  try {
    sandbox.__challengeSource = challenge.verifyFnStr;
    verify = vm.runInContext('eval("(" + __challengeSource + ")")', sandbox);
  } catch (error) {
    failures.push(`${challenge.id}: the verifier could not be built (${error.message}).`);
    continue;
  }

  const solution = fs.readFileSync(sourceFile, 'utf8');
  const outcomes = challenge.testCases.map(testCase => {
    try { return verify(solution, testCase); } catch (error) { return null; }
  });

  if (outcomes.every(outcome => outcome === true)) { passed++; continue; }

  if (outcomes.some(outcome => outcome === null)) {
    warnings.push(`${challenge.id}: the lab reports "could not be checked" for this challenge.`);
    continue;
  }

  const detail = challenge.testCases
    .map((testCase, i) => `${JSON.stringify(testCase.args)} expected ${JSON.stringify(testCase.expected)}, verifier said ${outcomes[i]}`)
    .join('; ');
  failures.push(`${challenge.id}: the verifier rejects the author's own solution, so correct code would be marked wrong. ${detail}`);
}

console.log('');
console.log(`Practice verifier check: ${autoChecked.length} auto-checked challenge(s), ${passed} verified against the author's solution.`);
if (warnings.length) {
  console.log('');
  console.log(`  ${warnings.length} challenge(s) cannot be run by the checker and are reported as "could not be checked", which is honest:`);
  warnings.forEach(warning => console.log(`    - ${warning}`));
}
if (failures.length) {
  console.log('');
  console.log(`  ${failures.length} challenge(s) would mark CORRECT code as wrong:`);
  failures.forEach(failure => console.log(`    - ${failure}`));
  console.log('');
  process.exit(1);
}
console.log('  No challenge rejects a correct solution.');
console.log('');
