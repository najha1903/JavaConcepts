// ============================================================================
// Renders the review page in a DOM and checks what it TELLS the author.
//
// WHY THIS EXISTS
//
// The review page is the one place a change to the notes is approved, and it used to
// describe every suggestion as an insertion: a green block, under a promise that
// "nothing else in the file changes". Editorial suggestions REPLACE an existing
// sentence, so the author was shown a replacement with no sign that anything was
// being removed, and no way to check that their original meaning survived.
//
// The lesson generalises: a screen can be technically correct and still mislead about
// what pressing its button does. So this checks the message, not just the markup.
//
// Usage: node scripts/check-review-page.js
// ============================================================================

'use strict';

const assert = require('assert/strict');
const fs = require('fs');
const path = require('path');

const dashboardDir = path.join(__dirname, '..', 'revision-dashboard');
const pagePath = path.join(dashboardDir, 'review.html');

let JSDOM;
try {
  ({ JSDOM } = require('jsdom'));
} catch (error) {
  console.error('Review page check failed: required jsdom is not installed.');
  console.error('   Install it with:  npm install');
  process.exit(1);
}

if (!fs.existsSync(pagePath)) {
  console.error('Review page check failed: revision-dashboard/review.html does not exist.');
  process.exit(1);
}

// One editorial proposal, which replaces wording, and one insertion, which adds it.
const pending = {
  pending: true,
  proposalId: 'review-page-check',
  generated: new Date().toISOString(),
  totals: { notesAdded: 1, notesRemoved: 0, quizzesAdded: 0, quizzesRemoved: 0, code: 0 },
  changes: [],
  suggestions: {
    items: [
      { key: 'editorial|alpha', kind: 'editorial', chapter: 'Chapter 1: Sample', topic: 'Alpha',
        what: 'Clarify the sentence', why: 'The wording is vague',
        before: 'The old vague sentence.', after: 'The precise replacement.' },
      { key: 'api|beta', kind: 'api', chapter: 'Chapter 1: Sample', topic: 'Beta',
        what: 'Explain a construct', why: 'Your notes never explain it',
        draft: ['Title', 'Example line'] }
    ]
  }
};

const results = [];
const check = (name, fn) => {
  try { fn(); results.push({ name, ok: true, detail: '' }); }
  catch (error) { results.push({ name, ok: false, detail: error.message }); }
};

async function main() {
  const dom = new JSDOM(fs.readFileSync(pagePath, 'utf8'), {
    runScripts: 'dangerously',
    url: 'http://localhost/',
    beforeParse(window) {
      // The page loads its proposal from the review server. Stubbing the response keeps
      // this check offline and deterministic.
      window.fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve(pending) });
    }
  });
  const doc = dom.window.document;
  // load() is asynchronous, so let its promise chain settle before reading the DOM.
  await new Promise(resolve => setTimeout(resolve, 50));

  const items = [...doc.querySelectorAll('.suggest-item')];
  check('both suggestions are rendered', () => assert.equal(items.length, 2));

  const editorial = items.find(item => item.querySelector('input').value === 'editorial|alpha');
  const insertion = items.find(item => item.querySelector('input').value === 'api|beta');

  check('an editorial proposal shows the wording it removes', () => {
    const removed = editorial.querySelector('.diff-line.del');
    assert.ok(removed, 'no removal line is rendered for a replacement');
    assert.match(removed.textContent, /The old vague sentence\./);
  });
  check('an editorial proposal shows the wording it puts in place', () => {
    assert.match(editorial.querySelector('.diff-line.add').textContent, /The precise replacement\./);
  });
  check('an insertion proposal shows no removal', () => {
    assert.equal(insertion.querySelector('.diff-line.del'), null);
  });

  check('the heading does not call a replacement an addition', () => {
    const heading = doc.querySelector('.chapter-block h2');
    assert.equal(heading.textContent, 'Suggested changes');
  });
  check('the description does not promise that nothing else changes', () => {
    const intro = doc.querySelector('.chapter-block > p.code-note');
    assert.ok(intro, 'no description is rendered');
    assert.doesNotMatch(intro.textContent, /nothing else in the file changes/);
    assert.match(intro.textContent, /applied on its own/);
  });

  const failed = results.filter(result => !result.ok);
  for (const result of results) {
    console.log(`   ${result.ok ? 'PASS' : 'FAIL'}  ${result.name}${result.detail ? `  ->  ${result.detail}` : ''}`);
  }
  console.log('');
  if (failed.length) {
    console.log(`Review page check failed: ${failed.length} problem(s).`);
    process.exit(1);
  }
  console.log(`Review page checks passed: ${results.length}.`);
}

main().catch(error => {
  console.error(`Review page check failed: ${error.message}`);
  process.exit(1);
});
