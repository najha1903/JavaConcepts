// ============================================================================
// Runs every check over the generated content, in one command.
//
// The author writes notes; this decides whether what was generated from them is
// sound. It is what `npm run approve` and the Apply button both run, so the two
// can never disagree about what "verified" means.
//
// The checks, in order, cheapest first:
//
//   audit-generated   the shape of the data: ids, paths, answer shapes, a marker
//                     outside a comment, a note line that never reached the page
//   check-practice    every auto-checked practice challenge runs against the
//                     author's own solution, so none can reject correct code
//   check-questions   every question about output is compiled and run, and the
//                     real output is compared with the answer it marks correct
//   check-bank        every hand-researched OCJP question marks the answer the
//                     bank intends, and every wrong option says why it is wrong
//   check-quality     every question gives feedback on a wrong choice, and none
//                     gives the answer away without reasoning
//   check-ui          every text colour clears WCAG AA, no text is below 12px, and no
//                     container gap is below 12px
//   fix-encoding      no file contains double-encoded text, which renders as mojibake
//                     such as the em-dash becoming three wrong characters
//   check-in-progress nothing is generated for a chapter that is still being written
//
// The first failure stops the run and the exit code is non-zero, so a broken
// generation can never be reported as approved.
// ============================================================================

const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');

const CHECKS = [
  { script: 'audit-generated.js', label: 'Generated content' },
  { script: 'check-practice.js', label: 'Practice verifiers' },
  { script: 'check-questions.js', label: 'Question answers' },
  { script: 'check-bank.js', label: 'OCJP bank' },
  { script: 'check-quality.js', label: 'Question quality' },
  { script: 'check-cram.js', label: 'Cram points' },
  { script: 'check-ui.js', label: 'Interface' },
  { script: 'fix-encoding.js', label: 'Text encoding' },
  { script: 'check-in-progress.js', label: 'In-progress chapter' },
  { script: 'coverage.js', label: 'Coverage', args: ['--check'] }
];

let failed = 0;

for (const check of CHECKS) {
  const result = spawnSync(process.execPath, [path.join(__dirname, check.script), ...(check.args || [])], {
    cwd: root,
    stdio: 'inherit'
  });
  if (result.status !== 0) {
    console.error(`\n${check.label} failed. Nothing was approved.`);
    failed++;
    break;
  }
}

if (failed) {
  console.error('');
  process.exit(1);
}

console.log('All checks passed.');
console.log('');
