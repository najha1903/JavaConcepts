// Native reference-solution checks for the explicitly authored finite cases only.
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { PRACTICE_CONTRACTS } = require('../data/practice-contracts.js');
const { requireJava, runProcess, createWorkDir, mapWithConcurrency, availableConcurrency, nativeValidation } = require('./lib/run-java.js');
const { frameworkFingerprint } = require('./lib/content-identity.js');
const root = path.resolve(__dirname, '..');

function literal(value, type) {
  if (type === 'boolean') {
    assert.strictEqual(typeof value, 'boolean', 'Expected a boolean');
    return String(value);
  }
  assert.strictEqual(typeof value, 'number', 'Expected a number');
  assert(Number.isFinite(value), 'Only finite numeric inputs are supported');
  if (type === 'double') return `${Object.is(value, -0) ? '-0.0' : String(value)}d`;
  assert(['int', 'long'].includes(type), `Unsupported input type: ${type}`);
  assert(Number.isSafeInteger(value), 'Integer inputs must be exact JavaScript safe integers');
  if (type === 'int') assert(value >= -2147483648 && value <= 2147483647, 'Input outside Java int range');
  return type === 'long' ? `${value}L` : String(value);
}
function validateContract(contract) {
  assert(contract.cases.length && contract.cases.every(c => c.provenance && c.provenance.kind === 'independent-contract'));
  for (const kind of ['normal', 'boundary']) assert(contract.cases.some(c => c.category === kind), `${contract.id}: missing ${kind}`);
  assert(contract.cases.some(c => c.category === 'invalid') ||
    (typeof contract.invalidCasesNotApplicable === 'string' && contract.invalidCasesNotApplicable.trim()),
  `${contract.id}: missing invalid cases or explicit rationale`);
  assert(['int', 'long', 'double', 'boolean', 'long[]'].includes(contract.returnType), `${contract.id}: unsupported return type`);
  if (contract.tolerance !== undefined) {
    assert(contract.returnType === 'double' && Number.isFinite(contract.tolerance) && contract.tolerance >= 0, 'Tolerance requires a double return and finite nonnegative value');
  }
  for (const c of contract.cases) {
    assert(['normal', 'boundary', 'invalid'].includes(c.category), `${contract.id}: unknown category`);
    assert.strictEqual(c.args.length, contract.parameterTypes.length, `${contract.id}: argument count`);
    c.args.forEach((value, i) => literal(value, contract.parameterTypes[i]));
    if (contract.returnType === 'long[]') {
      assert(Array.isArray(c.expected), `${contract.id}: expected long array`);
      c.expected.forEach(value => literal(value, 'long'));
    } else literal(c.expected, contract.returnType);
  }
}
function matchesExpected(actual, expected, type, tolerance = 0) {
  if (type === 'long[]') {
    // Compare exact decimal tokens, avoiding precision loss in JSON numeric parsing.
    return /^\[(?:-?\d+(?:, -?\d+)*)?\]$/.test(actual) && actual === `[${expected.join(', ')}]`;
  }
  if (type === 'boolean') return actual === String(expected);
  if (type === 'int' || type === 'long') return /^-?\d+$/.test(actual) && BigInt(actual) === BigInt(expected);
  if (type === 'double') return /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(actual) &&
    Number.isFinite(Number(actual)) && Math.abs(Number(actual) - expected) <= tolerance;
  return false;
}
async function checkContract(contract, work, index) {
  validateContract(contract);
  const source = path.join(root, contract.sourceFile);
  const text = fs.readFileSync(source, 'utf8');
  const pkg = (text.match(/^\s*package\s+([\w.]+);/m) || [])[1];
  const className = path.basename(source, '.java');
  const qualified = pkg ? `${pkg}.${className}` : className;
  const dir = path.join(work, String(index));
  fs.mkdirSync(dir);
  const runner = path.join(dir, 'ContractRunner.java');
  const calls = contract.cases.map((c, i) => {
    const call = `${qualified}.${contract.methodName}(${c.args.map((a, j) => literal(a, contract.parameterTypes[j])).join(',')})`;
    return `${contract.returnType} result${i} = ${call}; System.out.println(${contract.returnType === 'long[]' ? `java.util.Arrays.toString(result${i})` : `result${i}`});`;
  });
  fs.writeFileSync(runner, `public class ContractRunner { public static void main(String[] args) { ${calls.join('\n')} } }`);
  const compile = await runProcess('javac', ['-encoding', 'UTF-8', '-d', dir, source, runner]);
  if (compile.status !== 0) throw new Error(`${contract.id}: compilation failed: ${compile.stderr || compile.error}`);
  const run = await runProcess('java', ['-cp', dir, 'ContractRunner'], { timeout: 15000 });
  if (run.status !== 0) throw new Error(`${contract.id}: runtime failed: ${run.stderr || run.error}`);
  const actual = run.stdout.replace(/\r\n?/g, '\n').replace(/\n$/, '').split('\n');
  assert.strictEqual(actual.length, contract.cases.length, `${contract.id}: unexpected extra/missing output`);
  const failures = contract.cases.flatMap((c, i) => matchesExpected(actual[i], c.expected, contract.returnType, contract.tolerance) ? [] :
    [`${contract.id} ${c.category} ${JSON.stringify(c.args)}: expected ${JSON.stringify(c.expected)}, actual ${actual[i]}`]);
  if (failures.length) {
    const error = new Error(failures.join('\n'));
    error.passedCases = contract.cases.length - failures.length;
    error.failedCases = failures.length;
    throw error;
  }
  return contract.cases.length;
}
async function main() {
  requireJava();
  assert.strictEqual(new Set(PRACTICE_CONTRACTS.map(c => c.id)).size, PRACTICE_CONTRACTS.length, 'Duplicate contract ids');
  const work = createWorkDir('contracts');
  try {
    const results = await mapWithConcurrency(PRACTICE_CONTRACTS, availableConcurrency(), async (c, i) => {
      try { return { count: await checkContract(c, work, i) }; }
      catch (error) { return { error: error.message, count: error.passedCases || 0, failed: error.failedCases || 0 }; }
    });
    const errors = results.filter(r => r.error);
    errors.forEach(r => console.error(r.error));
    const total = PRACTICE_CONTRACTS.reduce((n, c) => n + c.cases.length, 0);
    const passed = results.reduce((n, r) => n + (r.count || 0), 0);
    const failed = results.reduce((n, r) => n + (r.failed || 0), 0);
    const challenges = new Set(PRACTICE_CONTRACTS.map(c => c.challengeId)).size;
    const chapters = new Set(PRACTICE_CONTRACTS.map(c => c.sourceFile.split('/')[1])).size;
    console.log(`Native independent practice contracts: ${results.filter(r => !r.error).length}/${results.length} methods/overloads passed; ${passed}/${total} cases passed, ${failed} mismatched, ${total - passed - failed} unverified. Authored coverage: ${challenges} source challenges across ${chapters} chapters.`);
    const categories = Object.fromEntries(['normal', 'boundary', 'invalid'].map(kind => [kind, PRACTICE_CONTRACTS.reduce((n, c) => n + c.cases.filter(entry => entry.category === kind).length, 0)]));
    console.log(`Authored case categories: ${JSON.stringify(categories)}. Representative finite inputs only; no claim of exhaustive exercise coverage or browser translation support. Native inputs: int, safe-integer long, finite double, boolean; returns: those scalars and safe-integer long[]. Printed side effects, exceptions, other arrays, strings and object/stateful workflows are not supported by this runner.`);
    console.log(`Native evidence: ${JSON.stringify(nativeValidation('scripts/check-practice-contracts.js', frameworkFingerprint(root, ['scripts/check-practice-contracts.js', 'scripts/lib/run-java.js', 'data/practice-contracts.js'])))}`);
    if (errors.length) process.exitCode = 1;
  } finally { fs.rmSync(work, { recursive: true, force: true }); }
}
if (require.main === module) main().catch(error => { console.error(error.message); process.exitCode = 1; });
module.exports = { checkContract, literal, validateContract, matchesExpected };
