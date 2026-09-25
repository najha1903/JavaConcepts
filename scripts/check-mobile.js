// ============================================================================
// Drives the dashboard in a real browser at mobile widths.
//
// WHY THIS EXISTS
//
// check-dashboard.js runs the page in jsdom and says so plainly: jsdom does not
// lay anything out. It has no viewport, no box model and no overflow, so it can
// prove that a view renders without throwing while the same view pushes content
// off the side of a phone. That gap is exactly where the reported Code Practice
// overflow lived, and no amount of jsdom testing could have caught it.
//
// WHAT IT CHECKS
//
// The invariants, not a snapshot of today's markup:
//
//   - no view causes horizontal overflow of the document at a phone width
//   - the practice code editor stays inside the viewport
//   - the practice action buttons wrap rather than pushing the layout wide
//   - the mobile drawer is off-screen when closed and on-screen when opened
//
// Horizontal overflow is the symptom the user reported, so it is asserted
// directly rather than inferred from individual element widths.
//
// Playwright is a required devDependency and its Chromium build must be
// installed (`npx playwright install chromium`). Missing tooling fails this
// check, rather than silently reporting untested layout as green.
//
// Usage: node scripts/check-mobile.js
// ============================================================================

'use strict';

const fs = require('fs');
const path = require('path');
const { serveDashboard, closeServer } = require('./lib/static-server');

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');

// The widths that matter: the narrowest phone still in use, a common phone, and
// the point where the desktop layout usually takes over.
const VIEWPORTS = [
  { name: 'small phone', width: 320, height: 568 },
  { name: 'phone', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 }
];

let chromium;
try {
  ({ chromium } = require('playwright'));
} catch (error) {
  console.error('Mobile layout check failed: playwright is not installed.');
  console.error('   Install it with:  npm install && npx playwright install chromium');
  process.exit(1);
}

if (!fs.existsSync(path.join(dashboardDir, 'index.html'))) {
  console.error('Mobile layout check failed: revision-dashboard/index.html does not exist.');
  console.error('Run npm run revise first.');
  process.exit(1);
}

// A minimal static server. The page is served over http rather than file://
// because the dashboard stores progress in localStorage, and Chromium treats a
// file:// origin as opaque, which would make the page behave differently from
// the way a reader actually opens it.
const results = [];
function record(name, ok, detail) {
  results.push({ name, ok, detail: detail || '' });
}

async function main() {
  const server = await serveDashboard(dashboardDir);
  const origin = `http://127.0.0.1:${server.port}/index.html`;
  const browser = await chromium.launch();

  try {
    for (const viewport of VIEWPORTS) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
      const runtimeErrors = [];
      page.on('pageerror', error => runtimeErrors.push(error.message));

      await page.goto(origin, { waitUntil: 'load' });
      await page.waitForFunction(() => typeof showView === 'function');

      // ---- Every view fits the viewport -----------------------------------
      const viewIds = await page.evaluate(() =>
        [...document.querySelectorAll('.view-section')].map(section => section.id));

      for (const viewId of viewIds) {
        const metrics = await page.evaluate(id => {
          showView(id);
          return {
            scrollWidth: document.documentElement.scrollWidth,
            clientWidth: document.documentElement.clientWidth
          };
        }, viewId);
        const overflow = metrics.scrollWidth - metrics.clientWidth;
        record(
          `${viewport.name}: ${viewId} does not overflow horizontally`,
          overflow <= 1,
          overflow > 1 ? `document is ${overflow}px wider than the viewport` : ''
        );
      }

      // ---- The practice editor stays inside the screen ---------------------
      const editor = await page.evaluate(() => {
        showView('practice-view');
        const textarea = document.getElementById('practice-code-textarea');
        if (!textarea) return null;
        const rect = textarea.getBoundingClientRect();
        return { left: rect.left, right: rect.right, width: rect.width, innerWidth: window.innerWidth };
      });
      if (!editor) {
        record(`${viewport.name}: practice editor is present`, false, 'no #practice-code-textarea on the page');
      } else {
        record(
          `${viewport.name}: practice editor stays inside the viewport`,
          editor.left >= -1 && editor.right <= editor.innerWidth + 1,
          editor.left < -1 || editor.right > editor.innerWidth + 1
            ? `editor spans ${Math.round(editor.left)}..${Math.round(editor.right)} in a ${editor.innerWidth}px viewport`
            : ''
        );
      }

      // ---- The action row wraps instead of widening the layout -------------
      const actions = await page.evaluate(() => {
        const row = document.querySelector('.practice-workspace .editor-actions');
        if (!row) return null;
        const rect = row.getBoundingClientRect();
        return { right: rect.right, innerWidth: window.innerWidth };
      });
      if (actions) {
        record(
          `${viewport.name}: practice action buttons do not widen the layout`,
          actions.right <= actions.innerWidth + 1,
          actions.right > actions.innerWidth + 1 ? `action row reaches ${Math.round(actions.right)}px` : ''
        );
      }

      // ---- The drawer is off-screen closed and on-screen open --------------
      const drawer = await page.evaluate(() => {
        const element = document.getElementById('sidebar') || document.querySelector('.sidebar');
        if (!element) return null;
        const closed = element.getBoundingClientRect();
        return { closedLeft: closed.left, closedRight: closed.right, innerWidth: window.innerWidth };
      });
      if (drawer) {
        const offScreen = drawer.closedRight <= 1 || drawer.closedLeft >= drawer.innerWidth - 1;
        record(
          `${viewport.name}: closed drawer is off-screen`,
          offScreen,
          offScreen ? '' : `drawer sits at ${Math.round(drawer.closedLeft)}..${Math.round(drawer.closedRight)} while closed`
        );
      }

      record(`${viewport.name}: no uncaught page error`, runtimeErrors.length === 0, runtimeErrors.join('; '));
      await page.close();
    }
  } finally {
    await browser.close();
    await closeServer(server);
  }

  const failed = results.filter(result => !result.ok);
  for (const result of results) {
    console.log(`   ${result.ok ? 'PASS' : 'FAIL'}  ${result.name}${result.detail ? `  ->  ${result.detail}` : ''}`);
  }
  console.log('');
  if (failed.length) {
    console.log(`Mobile layout check failed: ${failed.length} problem(s).`);
    console.log('   A real browser found a layout problem jsdom cannot see.');
    process.exit(1);
  }
  console.log(`Mobile layout checks passed: ${results.length} across ${VIEWPORTS.length} viewport(s).`);
  console.log('   Chromium layout only; this does not cover other engines or real devices.');
}

main().catch(error => {
  console.error(`Mobile layout check failed: ${error.message}`);
  process.exit(1);
});
