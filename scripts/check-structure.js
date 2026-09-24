// ============================================================================
// The FAST structural checks, for use right after generating.
//
// WHY THIS EXISTS
//
// The full suite lives in verify.js and runs when the author approves. That is right for
// the checks that compile and run Java, because they take ten seconds and belong with a
// deliberate action.
//
// But it left a real hole, proven by breaking a generator on purpose:
//
//   npm run revise -> generate.js --propose -> WRITES the files -> opens the dashboard
//
// The propose pass never ran a check. So a generator that emitted content for the chapter
// being written left that content on disk and live in the dashboard, and nothing said a
// word. The Apply button was protected, because approve.js verifies and rolls back, but
// the ordinary path - the one the author actually uses every day - was not.
//
// This runs the checks that are cheap and unambiguous, in about a second, so generate.js
// can run them every time and roll back if any fails. No code path can then leave
// structurally broken generated content on disk.
//
// The split is deliberate:
//
//   here       the shape of what was generated - ids, paths, the in-progress rule,
//              the text encoding, the interface rules, the dashboard's behaviour,
//              coverage. All fast, all definite.
//   verify.js  everything above, PLUS the checks that compile and run Java to prove
//              answers are right. Slower, so it runs on approve.
//
// check-dashboard is here because it takes 3.5 seconds and catches a whole class of failure
// nothing else can see: a function renamed, an element id changed, a button that no longer
// does anything. The generated data stays perfectly valid while the page is broken.
//
// check-cram is NOT here, and that is deliberate too. It compiles every cram snippet, which
// takes 11.6 seconds - too slow for the command the author runs most, and a check that slows
// the everyday path down is a check that gets worked around. It runs on approve instead.
// An attempt to speed it up by batching the compiles into one javac call cut it to 3.4
// seconds and silently broke the claim check, so it was reverted: correctness over speed.
// The reason is recorded because the temptation to retry it will come back.
//
// Usage: node scripts/check-structure.js
// ============================================================================

const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');

const CHECKS = [
  { script: 'audit-generated.js', label: 'Generated content' },
  { script: 'check-in-progress.js', label: 'In-progress chapter' },
  { script: 'fix-encoding.js', label: 'Text encoding' },
  { script: 'check-ui.js', label: 'Interface' },
  { script: 'check-dashboard.js', label: 'Dashboard behaviour' },
  { script: 'coverage.js', label: 'Coverage', args: ['--check'] }
];

let failed = 0;

for (const check of CHECKS) {
  const result = spawnSync(process.execPath, [path.join(__dirname, check.script), ...(check.args || [])], {
    cwd: root,
    stdio: 'inherit'
  });
  if (result.status !== 0) {
    console.error(`\n${check.label} failed.`);
    failed++;
    break;
  }
}

if (failed) {
  console.error('');
  process.exit(1);
}

console.log('');
console.log('Structure checks passed.');
console.log('');
