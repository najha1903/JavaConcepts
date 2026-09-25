const path = require('path');
const { spawnSync } = require('child_process');

const CHECKS = [
  { script: 'audit-generated.js', label: 'Generated content', structural: true },
  { script: 'check-content-engine.js', label: 'Content identity and output contracts', structural: true, nativeArgs: ['--native'] },
  { script: 'check-in-progress.js', label: 'Chapter eligibility', structural: true },
  { script: 'fix-encoding.js', label: 'Text encoding', structural: true },
  { script: 'check-ui.js', label: 'Interface rules', structural: true },
  { script: 'check-dashboard.js', label: 'Dashboard behaviour', structural: true },
  { script: 'check-storage.js', label: 'Cross-tab storage safety', structural: true },
  { script: 'check-export.js', label: 'Chapter export and print', structural: true },
  { script: 'coverage.js', label: 'Coverage', structural: true, args: ['--check'] },
  { script: 'check-workflow.js', label: 'Revision transaction workflow' },
  { script: 'check-practice-contracts.js', label: 'Independent Java practice contracts' },
  { script: 'check-practice.js', label: 'Browser practice approximations' },
  { script: 'check-questions.js', label: 'Supported native question outputs' },
  { script: 'check-bank.js', label: 'Authored question bank' },
  { script: 'check-quality.js', label: 'Question feedback quality' },
  { script: 'check-cram.js', label: 'Cram points and supported snippet contracts' }
];

function runChecks(profile) {
  if (!['structural', 'full'].includes(profile)) throw new Error(`Unknown validation profile: ${profile}`);
  const root = path.resolve(__dirname, '..', '..');
  for (const check of CHECKS) {
    if (profile === 'structural' && !check.structural) continue;
    const args = [...(check.args || []), ...(profile === 'full' ? check.nativeArgs || [] : [])];
    const result = spawnSync(process.execPath, [path.join(root, 'scripts', check.script), ...args], { cwd: root, stdio: 'inherit' });
    if (result.error || result.status !== 0) {
      console.error(`\n${check.label} failed.${result.error ? ` ${result.error.message}` : ''}`);
      process.exitCode = 1;
      return false;
    }
  }
  console.log(`\n${profile === 'full' ? 'Full' : 'Structural'} validation profile completed.`);
  return true;
}

module.exports = { CHECKS, runChecks };
