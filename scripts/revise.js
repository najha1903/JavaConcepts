const path = require('path');
const readline = require('readline');
const { execute } = require('./lib/revision-workflow');
const openPage = require('./lib/open-page');

async function main() {
  const args = process.argv.slice(2);
  if (args.some(arg => !['--cli', '--yes', '--no-open'].includes(arg))) throw new Error('Supported options: --cli, --yes, --no-open.');
  if (args.includes('--no-open')) process.env.REVISION_NO_OPEN = '1';
  let result = execute({ mode: 'propose' });
  if (result.pending && (args.includes('--cli') || args.includes('--yes'))) {
    let accepted = args.includes('--yes');
    if (!accepted && process.stdin.isTTY) {
      const prompt = readline.createInterface({ input: process.stdin, output: process.stdout });
      accepted = await new Promise(resolve => prompt.question('Apply the reviewed content (no optional note insertions)? (y/N) ', answer => {
        prompt.close();
        resolve(/^y(es)?$/i.test(answer.trim()));
      }));
    }
    if (!accepted) {
      console.log('Not applied. The candidate remains available for review.');
      return;
    }
    result = execute({ mode: 'approve', proposalId: result.proposalId });
  }
  if (result.pending) {
    if (process.env.REVISION_NO_OPEN === '1') process.env.REVIEW_NO_OPEN = '1';
    require('./review-server');
  } else {
    openPage(path.join(__dirname, '..', 'revision-dashboard', 'index.html'));
  }
}

main().catch(error => {
  console.error(`\n${error.message}`);
  process.exitCode = 1;
});
