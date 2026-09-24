const { execute } = require('./lib/revision-workflow');

try {
  const allowed = new Set(['--check', '--propose', '--no-prompt', '--force']);
  if (process.argv.slice(2).some(arg => !allowed.has(arg))) throw new Error('Use --check for scratch validation or npm run approve to publish reviewed content.');
  execute({ mode: process.argv.includes('--check') ? 'check' : 'propose', force: process.argv.includes('--force') });
} catch (error) {
  console.error(`\n${error.message}`);
  process.exitCode = 1;
}
