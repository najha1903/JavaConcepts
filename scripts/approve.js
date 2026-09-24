const { execute } = require('./lib/revision-workflow');

try {
  const args = process.argv.slice(2);
  let proposalId;
  const acceptedKeys = [];
  while (args.length) {
    const arg = args.shift();
    if (arg === '--proposal' && args.length) proposalId = args.shift();
    else if (arg.startsWith('--proposal=')) proposalId = arg.slice('--proposal='.length);
    else if (arg === '--accept' && args.length) acceptedKeys.push(args.shift());
    else if (arg.startsWith('--accept=')) acceptedKeys.push(arg.slice('--accept='.length));
    // A bare argument is the reviewed proposal id. npm consumes a space-separated
    // `--proposal <id>` as its own configuration, so `npm run approve -- <id>` is the
    // form that reaches this script intact.
    else if (!arg.startsWith('-') && !proposalId) proposalId = arg;
    else throw new Error(`Unknown or incomplete approval option: ${arg}`);
  }
  execute({ mode: 'approve', proposalId, acceptedKeys });
} catch (error) {
  console.error(`\n${error.message}`);
  process.exitCode = 1;
}
