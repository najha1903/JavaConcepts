// Native reference-solution checks for the explicitly authored finite cases only.
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { PRACTICE_CONTRACTS } = require('../data/practice-contracts.js');
const { requireJava, runProcess, createWorkDir, mapWithConcurrency, availableConcurrency, nativeValidation } = require('./lib/run-java.js');
const { frameworkFingerprint } = require('./lib/content-identity.js');
const root = path.resolve(__dirname, '..');

function literal(value, type) {
  if (type === 'double') return `${Number(value).toFixed(12)}d`;
  if (type === 'long') return `${value}L`;
  return JSON.stringify(value);
}
async function checkContract(contract, work, index) {
  assert(contract.cases.length && contract.cases.every(c => c.provenance.kind === 'independent-contract'));
  for (const kind of ['normal', 'boundary', 'invalid']) assert(contract.cases.some(c => c.category === kind), `${contract.id}: missing ${kind}`);
  const source = path.join(root, contract.sourceFile);
  const text = fs.readFileSync(source, 'utf8');
  const pkg = (text.match(/^\s*package\s+([\w.]+);/m) || [])[1];
  const className = path.basename(source, '.java');
  const qualified = pkg ? `${pkg}.${className}` : className;
  const dir = path.join(work, String(index));
  fs.mkdirSync(dir);
  const runner = path.join(dir, 'ContractRunner.java');
  const calls = contract.cases.map(c => `System.out.println(${qualified}.${contract.methodName}(${c.args.map((a, i) => literal(a, contract.parameterTypes[i])).join(',')}));`);
  fs.writeFileSync(runner, `public class ContractRunner { public static void main(String[] args) { ${calls.join('\n')} } }`);
  const compile = await runProcess('javac', ['-encoding', 'UTF-8', '-d', dir, source, runner]);
  if (compile.status !== 0) throw new Error(`${contract.id}: compilation failed: ${compile.stderr || compile.error}`);
  const run = await runProcess('java', ['-cp', dir, 'ContractRunner'], { timeout: 15000 });
  if (run.status !== 0) throw new Error(`${contract.id}: runtime failed: ${run.stderr || run.error}`);
  const actual = run.stdout.replace(/\r\n?/g, '\n').replace(/\n$/, '').split('\n');
  assert.strictEqual(actual.length, contract.cases.length, `${contract.id}: unexpected extra/missing output`);
  contract.cases.forEach((c, i) => {
    const matches = contract.tolerance !== undefined
      ? Number.isFinite(Number(actual[i])) && Math.abs(Number(actual[i]) - c.expected) <= contract.tolerance
      : typeof c.expected === 'number' ? Number(actual[i]) === c.expected : actual[i] === String(c.expected);
    assert(matches, `${contract.id} ${c.category} ${JSON.stringify(c.args)}: expected ${c.expected}, actual ${actual[i]}`);
  });
  return contract.cases.length;
}
async function main() {
  requireJava();
  const work = createWorkDir('contracts');
  try {
    const results = await mapWithConcurrency(PRACTICE_CONTRACTS, availableConcurrency(), async (c, i) => {
      try { return { count: await checkContract(c, work, i) }; }
      catch (error) { return { error: error.message }; }
    });
    const errors = results.filter(r => r.error);
    errors.forEach(r => console.error(r.error));
    console.log(`Native independent practice contracts: ${results.filter(r => !r.error).length}/${results.length} methods/overloads, ${results.reduce((n, r) => n + (r.count || 0), 0)} cases passed. Representative finite inputs only; this does not validate all exercises or browser translation.`);
    console.log(`Native evidence: ${JSON.stringify(nativeValidation('scripts/check-practice-contracts.js', frameworkFingerprint(root, ['scripts/check-practice-contracts.js', 'scripts/lib/run-java.js', 'data/practice-contracts.js'])))}`);
    if (errors.length) process.exitCode = 1;
  } finally { fs.rmSync(work, { recursive: true, force: true }); }
}
if (require.main === module) main().catch(error => { console.error(error.message); process.exitCode = 1; });
module.exports = { checkContract };
