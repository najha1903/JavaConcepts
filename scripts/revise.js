// ============================================================================
// `npm run revise`
//
// Proposes the changes without applying them, then opens the review in the
// browser when there is something to approve. When nothing is pending it simply
// refreshes the dashboard, so the command behaves sensibly either way.
//
// The terminal flow is still available as `npm run revise:cli`, which asks the
// y/N question directly.
// ============================================================================

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');
const proposalFile = path.join(dashboardDir, 'content-changes.json');
const dashboardPage = path.join(dashboardDir, 'index.html');

function openPage(file) {
  const url = `file:///${file.replace(/\\/g, '/')}`;
  if (process.platform === 'win32') {
    spawnSync(process.env.ComSpec || 'cmd.exe', ['/c', 'start', '', url], { stdio: 'ignore' });
  } else if (process.platform === 'darwin') {
    spawnSync('open', [file], { stdio: 'ignore' });
  } else {
    spawnSync('xdg-open', [file], { stdio: 'ignore' });
  }
}

// The derived code questions are regenerated from the notes BEFORE the parse, so
// they are always in step with the code blocks they came from. This is the only
// step that compiles anything, and it is cached by content: the file is only
// rewritten when a block's derived question would actually change.
const derive = spawnSync(process.execPath, [path.join(__dirname, 'derive-code-questions.js'), '--quiet'], {
  cwd: root,
  stdio: 'inherit'
});
if (derive.status !== 0) {
  console.error('');
  console.error('Could not derive the code questions. Nothing was proposed.');
  process.exit(derive.status || 1);
}

const propose = spawnSync(process.execPath, [path.join(__dirname, 'parse-concepts.js'), '--propose', '--no-prompt'], {
  cwd: root,
  stdio: 'inherit'
});

if (propose.status !== 0 && !fs.existsSync(proposalFile)) process.exit(propose.status || 1);

if (fs.existsSync(proposalFile)) {
  // Something is waiting, so open the review page instead of the dashboard.
  require(path.join(__dirname, 'review-server.js'));
} else {
  openPage(dashboardPage);
}
