// ============================================================================
// Runs the two-tab storage suite in a real browser.
//
// WHY THIS IS SEPARATE FROM check-storage.js
//
// check-storage.js runs the same scenarios against a simulated localStorage inside a
// VM. That is fast and deterministic, and it covers the storage protocol well, but it
// is not a browser: it has no real storage events, no real event loop, and no real
// page. The suite was written for a real browser and then left exported but never
// called, so it tested nothing.
//
// It also had a real defect: it opened the notes view with showView() alone, which only
// toggles the section. renderNotesView() is what installs the editor's input handler and
// its edit baseline, so typing saved nothing and the assertions passed against an app
// that had done no work. That is now fixed, and this script is what runs it.
//
// Playwright is a required devDependency and its Chromium build must be installed
// (`npx playwright install chromium`). Missing tooling fails this check.
//
// Usage: node scripts/check-browser-storage.js
// ============================================================================

'use strict';

const assert = require('assert/strict');
const fs = require('fs');
const path = require('path');
const { serveDashboard, closeServer } = require('./lib/static-server');
const { runTwoTabBrowserChecks } = require('./check-storage.js');

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');

let chromium;
try {
  ({ chromium } = require('playwright'));
} catch (error) {
  console.error('Browser storage check failed: playwright is not installed.');
  console.error('   Install it with:  npm install && npx playwright install chromium');
  process.exit(1);
}

if (!fs.existsSync(path.join(dashboardDir, 'index.html'))) {
  console.error('Browser storage check failed: revision-dashboard/index.html does not exist.');
  console.error('Run npm run revise first.');
  process.exit(1);
}

async function main() {
  const server = await serveDashboard(dashboardDir);
  const browser = await chromium.launch();
  try {
    await runTwoTabBrowserChecks(browser, `http://127.0.0.1:${server.port}/index.html`);
    console.log('   PASS  two real browser tabs keep their own editors, warn on conflict and offer recovery');
    console.log('');
    console.log('Browser storage checks passed: 1 scenario in Chromium.');
    console.log('   Real storage events and real pages; still not a second browser engine.');
  } finally {
    await browser.close();
    await closeServer(server);
  }
}

main().catch(error => {
  console.error('Browser storage check failed: ' + error.message);
  console.error('   A real browser disagreed with the simulated storage protocol.');
  process.exit(1);
});
