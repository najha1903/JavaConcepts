const workflow = require('./lib/revision-workflow');

try {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const acceptedKeys = args.filter(arg => arg !== '--dry-run');
  if (!acceptedKeys.length) throw new Error('Name the reviewed suggestion keys to accept, or add --dry-run to preview them.');
  const proposal = workflow.pending(workflow.DEFAULT_ROOT);
  if (!proposal) throw new Error('Run npm run revise and review the proposed suggestions first.');
  if (dryRun) {
    if (workflow.reviewFingerprint(workflow.capture(workflow.DEFAULT_ROOT)) !== proposal.inputFingerprint) throw new Error('The proposal is stale. Run npm run revise again.');
    workflow.suggestionPatches(workflow.DEFAULT_ROOT, proposal.suggestions, acceptedKeys);
    for (const key of acceptedKeys) {
      const item = proposal.suggestions.find(suggestion => suggestion.key === key);
      console.log(`\n${item.file}\n// ${item.what} :- ${item.why}\n${item.draft.slice(1).map(line => `// ${line}`).join('\n')}`);
    }
    console.log('\nPreview only. No source, dashboard or cache files changed.');
  } else {
    workflow.execute({ mode: 'approve', proposalId: proposal.proposalId, acceptedKeys });
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
