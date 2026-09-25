// ============================================================================
// Walks the two journeys a reader actually takes, in a real browser.
//
// WHY THIS EXISTS
//
// Every other check asks "is this correct?". This one asks "can a person use it?".
// They are different questions, and the second one has no other coverage: a view can
// render perfectly and still leave a first-time reader with no idea where to begin,
// or a returning reader with no sight of what they were doing.
//
//   FIRST RUN      nothing in storage. The dashboard must offer a starting point
//                  rather than an empty page, every view must render, and no
//                  uncaught error may appear.
//
//   RETURNING      progress already in storage. The history must survive a reload,
//                  Mastery must reflect it, and the dashboard must point somewhere
//                  useful instead of resetting to a blank slate.
//
// Playwright is a required devDependency and its Chromium build must be installed
// (`npx playwright install chromium`). Missing tooling fails this check.
//
// Usage: node scripts/check-journey.js
// ============================================================================

'use strict';

const fs = require('fs');
const path = require('path');
const { serveDashboard, closeServer } = require('./lib/static-server');

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');
const PORT = Number(process.env.JOURNEY_CHECK_PORT || 4400);
const URL_BASE = `http://127.0.0.1:${PORT}/index.html`;

let chromium;
try {
  ({ chromium } = require('playwright'));
} catch (error) {
  console.error('Journey check failed: playwright is not installed.');
  console.error('   Install it with:  npm install && npx playwright install chromium');
  process.exit(1);
}

if (!fs.existsSync(path.join(dashboardDir, 'index.html'))) {
  console.error('Journey check failed: revision-dashboard/index.html does not exist.');
  console.error('Run npm run revise first.');
  process.exit(1);
}

const results = [];
function record(name, ok, detail) {
  results.push({ name, ok, detail: detail || '' });
}

// A rendered label that computed to NaN is a bug; the literal word "NaN" inside
// authored notes is not, so content subtrees are excluded exactly as
// check-dashboard.js does.
function visibleLabels(page) {
  return page.evaluate(() => {
    const clone = document.body.cloneNode(true);
    clone.querySelectorAll('.bank-notes, .bank-code-block, .bank-note-table, .bank-questions, .bank-q, .bank-q-answer, .explanations-content, .instructions-content, pre, code')
      .forEach(element => element.remove());
    return clone.textContent;
  });
}

async function openDashboard(browser) {
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(URL_BASE, { waitUntil: 'load' });
  await page.waitForFunction(() => typeof showView === 'function');
  return { context, page, errors };
}

async function firstRun(browser) {
  const { context, page, errors } = await openDashboard(browser);
  try {
    // Nothing is stored, so this really is a first visit.
    const empty = await page.evaluate(() => Object.keys(localStorage).length === 0);
    record('first run starts with empty storage', empty, empty ? '' : 'storage was not empty on a fresh context');

    const labels = await visibleLabels(page);
    record('first run shows no computed NaN', !/\bNaN\b/.test(labels));

    // An empty page is a dead end. The dashboard has to point somewhere.
    const next = await page.evaluate(() => {
      const host = document.getElementById('study-next-panel');
      return host ? host.textContent.trim() : '';
    });
    record(
      'first run offers a starting point',
      next.length > 0,
      next.length > 0 ? '' : '#study-next-panel is empty, so a new reader has nowhere to begin'
    );

    // Every view must render something rather than an empty shell.
    const viewIds = await page.evaluate(() =>
      [...document.querySelectorAll('.view-section')].map(section => section.id));
    const emptyViews = [];
    for (const viewId of viewIds) {
      const length = await page.evaluate(id => {
        showView(id);
        return document.getElementById(id).textContent.trim().length;
      }, viewId);
      if (length === 0) emptyViews.push(viewId);
    }
    record('every view renders content on a first run', emptyViews.length === 0, emptyViews.join(', '));
    record('first run raises no uncaught error', errors.length === 0, errors.join('; '));
  } finally {
    await context.close();
  }
}

async function returningUser(browser) {
  const { context, page, errors } = await openDashboard(browser);
  try {
    // Seed real objective evidence through the app's own API rather than by
    // hand-writing storage, so the check cannot pass against a format the app
    // would never produce.
    const seed = await page.evaluate(() => {
      const objective = Object.values(QUESTIONS_BANK).flat().filter(q => q.type !== 'interview');
      const byConcept = new Map();
      for (const question of objective) {
        for (const concept of question.concepts || []) {
          if (!byConcept.has(concept)) byConcept.set(concept, []);
          byConcept.get(concept).push(question);
        }
      }
      // Three distinct questions, which is the breadth the confidence rule requires.
      for (const [concept, questions] of byConcept) {
        if (questions.length >= 3) {
          return {
            concept,
            name: (typeof CONCEPT_NAMES !== 'undefined' && CONCEPT_NAMES[concept]) || concept,
            qids: questions.slice(0, 3).map(question => question.qid)
          };
        }
      }
      return null;
    });
    record('a concept with three distinct questions exists to test with', Boolean(seed), seed ? seed.concept : 'none found');
    if (!seed) return;

    await page.evaluate(qids => { qids.forEach(qid => recordQuestionResult(qid, true)); }, seed.qids);
    await page.reload({ waitUntil: 'load' });
    await page.waitForFunction(() => typeof showView === 'function');

    // The whole point of persistence: it survives coming back.
    const survived = await page.evaluate(qids => {
      const history = getQuestionHistory();
      return qids.filter(qid => history[qid] && history[qid].seen > 0).length;
    }, seed.qids);
    record('recorded progress survives a reload', survived === seed.qids.length, `${survived} of ${seed.qids.length} answers survived`);

    // Mastery must reflect that evidence rather than showing a blank slate.
    // showMastery() is the app's own entry point: showView() only toggles the
    // section, and the list is populated by renderMastery().
    const mastery = await page.evaluate(name => {
      showMastery();
      const host = document.getElementById('mastery-list');
      return { text: host ? host.textContent : '', hasConcept: host ? host.textContent.includes(name) : false };
    }, seed.name);
    record(
      'Mastery reflects the returning reader\'s evidence',
      mastery.hasConcept,
      mastery.hasConcept ? '' : `"${seed.name}" is absent from the mastery list after three correct answers`
    );

    // A returning reader should be told what to do next, not dropped on a dead page.
    const next = await page.evaluate(() => {
      showView('dashboard-view');
      const host = document.getElementById('study-next-panel');
      return host ? host.textContent.trim() : '';
    });
    record('returning reader is offered a next action', next.length > 0, next.length > 0 ? '' : '#study-next-panel is empty after progress exists');

    const labels = await visibleLabels(page);
    record('returning run shows no computed NaN', !/\bNaN\b/.test(labels));
    record('returning run raises no uncaught error', errors.length === 0, errors.join('; '));
  } finally {
    await context.close();
  }
}

async function main() {
  const server = await serveDashboard(dashboardDir, PORT);
  const browser = await chromium.launch();
  try {
    await firstRun(browser);
    await returningUser(browser);
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
    console.log(`Journey check failed: ${failed.length} problem(s).`);
    process.exit(1);
  }
  console.log(`Journey checks passed: ${results.length}.`);
  console.log('   Chromium only; this does not replace watching a person use it.');
}

main().catch(error => {
  console.error(`Journey check failed: ${error.message}`);
  process.exit(1);
});
