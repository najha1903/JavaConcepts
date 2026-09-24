// Native output contracts only: prose and unsupported fragments are reported, never
// counted as passed. A promised executable program failing to run is a failure.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { runProcess, requireJava, createWorkDir, mapWithConcurrency, availableConcurrency, nativeValidation } = require('./lib/run-java.js');
const { frameworkFingerprint } = require('./lib/content-identity.js');
const { expectationFor, asRunnableProgram, exactOutputMatches } = require('./lib/output-contract.js');
const root = path.resolve(__dirname, '..');

async function checkOne(candidate, work, index) {
  const dir = path.join(work, String(index));
  fs.mkdirSync(dir);
  const { program, expectation } = candidate;
  const file = path.join(dir, `${program.className}.java`);
  fs.writeFileSync(file, program.source);
  const compile = await runProcess('javac', ['-encoding', 'UTF-8', '-d', dir, file]);
  if (compile.status !== 0) return `compile failure (${compile.failureKind || 'compiler'}): ${compile.stderr || compile.error}`;
  const run = await runProcess('java', ['-cp', dir, program.launchName], { timeout: 15000 });
  if (run.status !== 0) return `runtime failure (${run.failureKind || 'program'}): ${run.stderr || run.error}`;
  if (!exactOutputMatches(run.stdout, expectation.value, expectation.normalization)) return `expected ${JSON.stringify(expectation.value)}, actual ${JSON.stringify(run.stdout)}`;
  return null;
}

async function main() {
  requireJava();
  const context = {};
  vm.runInNewContext(fs.readFileSync(path.join(root, 'revision-dashboard', 'questions.js'), 'utf8') + '\nthis.bank=QUESTIONS_BANK;', context);
  const candidates = [];
  let prose = 0, fragments = 0;
  for (const q of Object.values(context.bank).flat()) {
    if (!q.code) continue;
    const expectation = expectationFor(q);
    if (!expectation) { prose++; continue; }
    const program = asRunnableProgram(q.code);
    if (!program) {
      if (q.type === 'predict' || q.outputExpectation) throw new Error(`${q.qid}: an exact output contract has unsupported runnable code.`);
      fragments++; continue;
    }
    candidates.push({ q, program, expectation });
  }
  const work = createWorkDir('questions');
  let results;
  try { results = await mapWithConcurrency(candidates, availableConcurrency(), (c, i) => checkOne(c, work, i)); }
  finally { fs.rmSync(work, { recursive: true, force: true }); }
  const failed = results.filter(Boolean).length;
  console.log(`Native question output: ${candidates.length - failed}/${candidates.length} exact contracts passed; ${prose} prose/non-output and ${fragments} fragments unsupported (not passed).`);
  console.log('Comparison preserves full output; literal MCQ answers ignore terminal whitespace, while predict/explicit contracts ignore only one final newline.');
  console.log(`Native evidence: ${JSON.stringify(nativeValidation('scripts/check-questions.js', frameworkFingerprint(root, ['scripts/check-questions.js', 'scripts/lib/run-java.js', 'scripts/lib/output-contract.js'])))}`);
  results.forEach((failure, i) => { if (failure) console.error(`${candidates[i].q.qid}: ${failure}`); });
  if (failed) process.exitCode = 1;
}
if (require.main === module) main().catch(error => { console.error(error.message); process.exitCode = 1; });
module.exports = { checkOne };
