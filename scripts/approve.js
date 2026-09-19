// ============================================================================
// Applies the pending content and verifies it, all or nothing.
//
// The order matters. Generating writes the dashboard files, and the checks read
// those files, so the checks have to run after generation. But if a check then
// fails, the content is already on disk while the author is told it was not
// approved, which is a lie and leaves broken content in place.
//
// So the generated files are copied first, and restored if any check fails. The
// author sees either "applied and verified" or "nothing was applied", and both
// are true.
//
// This is what `npm run approve` runs, and what the Apply button runs, so the two
// can never disagree about what approving means.
// ============================================================================

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');

// Every file the generator writes. data.js is also the baseline the review gate
// compares against, so restoring it restores the whole approved state.
const GENERATED = ['data.js', 'questions.js', 'practice.js', 'deep-challenges.js'];

function snapshot() {
  const saved = new Map();
  for (const name of GENERATED) {
    const file = path.join(dashboardDir, name);
    saved.set(file, fs.existsSync(file) ? fs.readFileSync(file) : null);
  }
  return saved;
}

function restore(saved) {
  for (const [file, contents] of saved) {
    if (contents === null) {
      if (fs.existsSync(file)) fs.unlinkSync(file);
    } else {
      fs.writeFileSync(file, contents);
    }
  }
}

function run(script, label) {
  console.log('');
  console.log(`── ${label}`);
  const result = spawnSync(process.execPath, [path.join(__dirname, script)], {
    cwd: root,
    stdio: 'inherit'
  });
  return result.status === 0;
}

const saved = snapshot();

const generated = run('parse-concepts.js', 'Generating from your notes');
if (!generated) {
  restore(saved);
  console.error('\nGeneration failed. Nothing was applied; the dashboard still shows the last approved version.');
  process.exit(1);
}

const verified = run('verify.js', 'Checking what was generated');
if (!verified) {
  restore(saved);
  console.error('');
  console.error('A check failed, so nothing was applied.');
  console.error('The dashboard still shows your last approved version. Fix the problem and run this again.');
  console.error('');
  process.exit(1);
}

// The ledger is the last thing shown, because it is what says what to do next.
run('coverage.js', 'Coverage');

// Suggestions are for chapters that are finished, so they come after the ledger.
run('suggest.js', 'Suggested additions');

console.log('Applied and verified. Every check passed.');
console.log('');
