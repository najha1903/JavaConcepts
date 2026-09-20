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

// The generated code questions and practice expectations are refreshed BEFORE the
// parse, so they are always in step with the notes they came from. See generate.js
// for why the order is what it is.
const generate = spawnSync(process.execPath, [path.join(__dirname, 'generate.js'), '--propose', '--no-prompt'], {
  cwd: root,
  stdio: 'inherit'
});

if (generate.status !== 0 && !fs.existsSync(proposalFile)) process.exit(generate.status || 1);

if (fs.existsSync(proposalFile)) {
  // Something is waiting, so open the review page instead of the dashboard.
  require(path.join(__dirname, 'review-server.js'));
} else {
  openPage(dashboardPage);
}
