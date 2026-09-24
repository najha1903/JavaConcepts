// ============================================================================
// Opens the dashboard in a real DOM and drives it, the way a person would.
//
// WHY THIS EXISTS
//
// Every other check reads the generated FILES. This one runs the PAGE.
//
// That difference matters, because the two failure modes are different. A data file can be
// perfectly valid and the dashboard still broken: a function renamed, an element id changed,
// a view that throws halfway through rendering, a count that divides by zero and prints NaN,
// a button wired to a handler that no longer exists. None of that is visible to a check that
// only reads JSON.
//
// It was written during a session in which almost every claim about the interface was
// verified by hand, with a harness that lived outside the repository. That harness would have
// vanished, leaving the dashboard with no test at all. This is it, in the repository, so it
// runs on every `npm run verify`.
//
// WHAT IT CHECKS, AND WHY THESE
//
// Each check states an INVARIANT rather than a snapshot, so it keeps working as the notes
// grow. It does not assert "766 questions"; it asserts "the preset's pool equals the pool
// computed independently by the same filter". A check pinned to today's numbers would have to
// be edited every time a chapter is written, and would then stop meaning anything.
//
//   - the page loads: every <script src> in index.html exists, and the data is there
//   - every view renders with no NaN and no literal "undefined" in the text
//   - a chapter still being written is silent, and refuses a quiz rather than redirecting
//   - a finished chapter quizzes normally, and the header count matches the questions
//   - no quiz contains the same question twice, however it was started
//   - Quick Revision shows the cram sheet, with snippets rendered as code
//   - Mastery routes into the Revision Bank instead of starting its own quiz
//   - the Bank's presets select exactly what the same filter selects
//   - no invented text anywhere on screen
//
// jsdom is a required devDependency. Missing tooling fails this check, rather than
// silently reporting untested behaviour as green. DOM tests do not prove visual layout.
//
// Usage: node scripts/check-dashboard.js
// ============================================================================

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');

let JSDOM;
try {
  ({ JSDOM } = require('jsdom'));
} catch (error) {
  console.error('Dashboard check failed: required jsdom is not installed.');
  console.log('   Install it with:  npm install');
  process.exit(1);
}

const indexPath = path.join(dashboardDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('Dashboard check failed: revision-dashboard/index.html does not exist.');
  console.error('Run npm run revise first.');
  process.exit(1);
}

const html = fs.readFileSync(indexPath, 'utf8');

// The scripts are read from index.html rather than hardcoded, so a script added to the page
// is loaded here too. A hardcoded list would silently stop testing whatever was added.
const scriptSources = [...html.matchAll(/<script\s+src="([^"]+)"/g)].map(m => m[1]);
const missing = scriptSources.filter(src => !fs.existsSync(path.join(dashboardDir, src)));
if (missing.length) {
  console.error(`Dashboard check failed: index.html loads ${missing.length} script(s) that do not exist:`);
  for (const src of missing) console.error(`   ${src}`);
  console.error('Run npm run revise to regenerate them.');
  process.exit(1);
}

const dom = new JSDOM(html, {
  runScripts: 'dangerously',
  pretendToBeVisual: true,
  // An http origin rather than file://, because jsdom refuses localStorage for opaque
  // origins and the dashboard keeps quiz progress there.
  url: 'http://localhost/revision-dashboard/index.html'
});
const win = dom.window;
const doc = win.document;

// jsdom implements textContent but not innerText, and the dashboard writes its labels with
// innerText. Without this, every element the app "sets" would keep its static HTML value, and
// a check could pass while the screen showed the wrong number.
Object.defineProperty(win.HTMLElement.prototype, 'innerText', {
  configurable: true,
  get() { return this.textContent; },
  set(value) { this.textContent = value; }
});

// jsdom has no matchMedia, and the dashboard asks for the theme preference.
win.matchMedia = win.matchMedia || (query => ({
  matches: false, media: query, onchange: null,
  addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {},
  dispatchEvent() { return false; }
}));

const runtimeErrors = [];
win.addEventListener('error', event => runtimeErrors.push(String(event.message || event)));
win.console.error = (...args) => runtimeErrors.push(args.join(' '));

// Load the page's own scripts, in the order index.html lists them, so the top-level `const`
// declarations share one global lexical scope exactly as they do in a browser.
for (const src of scriptSources) {
  const element = doc.createElement('script');
  element.textContent = fs.readFileSync(path.join(dashboardDir, src), 'utf8');
  doc.head.appendChild(element);
}

// app.js attaches its listeners inside a DOMContentLoaded handler, and jsdom's document is
// already complete by the time the script is injected, so that event never fires on its own.
// Without this the page has no click handlers and every interaction silently does nothing.
doc.dispatchEvent(new win.Event('DOMContentLoaded'));

// A top-level `const` is not a property of window, so the page's bindings are read by
// evaluating an expression in its global lexical scope.
const g = expression => win.eval(expression);

const results = [];
function check(name, fn) {
  try {
    const value = fn();
    results.push({ name, ok: true, value: value === undefined ? '' : String(value) });
  } catch (error) {
    results.push({ name, ok: false, value: error.stack || error.message });
  }
}

// jsdom has no alert; the app uses it to refuse an action, so it is captured rather than
// printed, and each test reads what was said.
let alerts = [];
win.alert = message => { alerts.push(String(message)); };
win.confirm = () => true;

function isHidden(element) {
  let node = element;
  while (node && node.nodeType === 1) {
    const style = node.getAttribute && node.getAttribute('style');
    if (style && /display:\s*none/.test(style)) return true;
    if (node.hasAttribute && node.hasAttribute('hidden')) return true;
    node = node.parentNode;
  }
  return false;
}

// ---- The page loaded --------------------------------------------------------

check('the page loads with real data', () => {
  const chapters = g('CONCEPTS_DATA').length;
  const questions = Object.values(g('QUESTIONS_BANK')).reduce((n, list) => n + list.length, 0);
  if (!chapters) throw new Error('CONCEPTS_DATA is empty');
  if (!questions) throw new Error('QUESTIONS_BANK is empty');
  const views = doc.querySelectorAll('.view-section').length;
  if (views < 6) throw new Error(`only ${views} view sections found`);
  return `${chapters} chapters, ${questions} questions, ${views} views`;
});

// ---- The chapter being written is silent ------------------------------------

check('a chapter being written carries nothing, and refuses a quiz', () => {
  const inProgress = g('CONCEPTS_DATA').filter(chapter => {
    const revision = g('QUICK_REVISION_BANK')[chapter.name];
    return revision && revision.inProgress;
  });
  if (!inProgress.length) {
    throw new Error('no chapter is marked as being written, so this check has nothing to verify');
  }

  const chapter = inProgress[0];
  const questions = (g('QUESTIONS_BANK')[chapter.name] || []).length;
  if (questions) throw new Error(`${chapter.name} has ${questions} question(s)`);

  const practice = g('getAllPracticeChallenges()').filter(c => c.chapter === chapter.name).length;
  if (practice) throw new Error(`${chapter.name} has ${practice} practice challenge(s)`);
  const deep = g('DEEP_CHALLENGES').filter(c => c.chapter === chapter.name).length;
  if (deep) throw new Error(`${chapter.name} has ${deep} deep challenge(s)`);

  // Starting a quiz on it must say so, not quietly redirect to the Grand Quiz.
  alerts = [];
  g('startChapterQuiz')(chapter.name);
  if (!alerts.length) throw new Error('starting a quiz on it said nothing');
  if (/grand/i.test(alerts[0])) throw new Error(`it redirected to the Grand Quiz: ${alerts[0]}`);
  if (g('activeQuizQuestions').length) throw new Error('a quiz started anyway');
  return `${chapter.name}: 0 questions, refuses with a message`;
});

check('the chapter being written has no cram sheet', () => {
  const chapter = g('CONCEPTS_DATA').find(c => {
    const revision = g('QUICK_REVISION_BANK')[c.name];
    return revision && revision.inProgress;
  });
  const revision = g('QUICK_REVISION_BANK')[chapter.name];
  const bad = ['takeaways', 'gotchas', 'badges', 'tables'].filter(k => (revision[k] || []).length);
  if (bad.length) throw new Error(`still has ${bad.join(', ')}`);
  if (revision.syntax) throw new Error('still has a syntax snippet');
  return 'empty, and flagged in progress';
});

// ---- A finished chapter works -----------------------------------------------

check('a finished chapter quizzes normally', () => {
  const finished = g('CONCEPTS_DATA').find(c => {
    const revision = g('QUICK_REVISION_BANK')[c.name];
    return revision && !revision.inProgress && (g('QUESTIONS_BANK')[c.name] || []).length > 0;
  });
  if (!finished) throw new Error('no finished chapter with questions');
  alerts = [];
  g('startChapterQuiz')(finished.name);
  const started = g('activeQuizQuestions').length;
  if (!started) throw new Error(`${finished.name} started a quiz with no questions`);
  g('runActiveQuiz')();
  const header = doc.getElementById('total-q-index').textContent;
  if (header !== String(started)) throw new Error(`the header says ${header}, the quiz has ${started}`);
  return `${finished.name}: ${started} questions, header agrees`;
});

check('the Grand Quiz runs, with no NaN', () => {
  alerts = [];
  g('startChapterQuiz')('Grand Java Quiz');
  const pool = g('activeQuizQuestions').length;
  if (!pool) throw new Error('the Grand Quiz has no questions');
  g('runActiveQuiz')();
  const text = doc.getElementById('current-q-index').textContent
    + doc.getElementById('total-q-index').textContent
    + doc.getElementById('quiz-q-progress').style.width
    + doc.getElementById('quiz-question-text').textContent;
  if (/NaN/.test(text)) throw new Error('NaN in the quiz header');
  if (!doc.getElementById('quiz-question-text').textContent.trim()) throw new Error('no question text rendered');
  return `${pool} questions, header clean`;
});

check('no quiz repeats a question, even when the pool contains one twice', () => {
  // This is tested with a DELIBERATE duplicate rather than by inspecting a real quiz.
  //
  // The first version of this check looked at the Grand Quiz and counted repeats, and it was
  // useless: the quiz picks 40 questions out of 766, so a duplicated question almost never
  // lands in the same quiz by chance. Proven by disabling the de-duplication - the check still
  // passed. Feeding the function a pool that definitely contains a duplicate is deterministic.
  const key = q => `${q.question || ''}||${q.code || ''}||${(q.options || []).join('|')}`;
  const source = g('QUESTIONS_BANK');
  const pool = [];
  for (const chapter of Object.keys(source)) {
    for (const q of source[chapter]) { pool.push(q); if (pool.length >= 3) break; }
    if (pool.length >= 3) break;
  }
  if (pool.length < 3) throw new Error('not enough questions to build a test pool');

  // Every question twice, which is what a cross-chapter duplicate looks like to the picker.
  const doubled = [...pool, ...pool];
  const picked = g('pickSmartQuestions')(doubled, doubled.length, 'all', 'all');
  if (!picked.length) throw new Error('the picker returned nothing');
  const repeats = picked.length - new Set(picked.map(key)).size;
  if (repeats) throw new Error(`${repeats} repeated question(s) survived the picker`);
  if (picked.length !== pool.length) throw new Error(`expected ${pool.length} unique questions, got ${picked.length}`);

  // And the real quizzes still start.
  for (const name of ['Grand Java Quiz']) {
    alerts = [];
    g('startChapterQuiz')(name);
    if (!g('activeQuizQuestions').length) throw new Error(`${name} started with no questions`);
  }
  return `${pool.length} unique questions kept from a pool of ${doubled.length}`;
});

// ---- Quick Revision shows the cram sheet ------------------------------------

check('Quick Revision shows the cram sheet, with snippets as code', () => {
  const target = g('CONCEPTS_DATA').find(c => {
    const revision = g('QUICK_REVISION_BANK')[c.name];
    return revision && !revision.inProgress && (revision.takeaways || []).some(p => p && p.code);
  });
  if (!target) throw new Error('no finished chapter has a cram point with a snippet');

  const chapterIndex = g('CONCEPTS_DATA').indexOf(target);
  g('selectTopic')(chapterIndex, 0);
  g('setRevisionDepth')('quick');

  const bullets = doc.getElementById('quick-bullet-points');
  if (!bullets.children.length) throw new Error('the panel is empty for a chapter that has points');
  const snippets = doc.querySelectorAll('#quick-bullet-points .cram-snippet code').length;
  if (!snippets) throw new Error('no snippet rendered as code');
  if (/NaN/.test(bullets.textContent)) throw new Error('NaN in the panel');
  return `${bullets.children.length} points, ${snippets} snippet(s) as code`;
});

// ---- Mastery routes into the Bank -------------------------------------------

check('Mastery routes into the Revision Bank instead of starting its own quiz', () => {
  g('showMastery')();
  const levels = doc.querySelectorAll('#mastery-levels .level-card button');
  if (!levels.length) throw new Error('no level buttons rendered');
  const handler = levels[0].getAttribute('onclick') || '';
  if (!/drillLevelInBank/.test(handler)) throw new Error(`a level button still starts its own quiz: ${handler}`);

  g('drillLevelInBank')('easy');
  const active = doc.querySelector('.view-section.active');
  if (!active || active.id !== 'bank-view') throw new Error(`did not land on the bank, landed on ${active && active.id}`);
  if (g('bankFilters.level') !== 'easy') throw new Error(`the level filter is ${g('bankFilters.level')}`);
  return 'a level button opens the bank with the filter applied';
});

check('the Bank still quizzes, and the history-driven quizzes are untouched', () => {
  const source = fs.readFileSync(path.join(dashboardDir, 'app.js'), 'utf8');
  for (const name of ['startDueQuestionsQuiz', 'startWeakestConceptQuiz', 'startConceptQuiz']) {
    if (!source.includes(`function ${name}`)) throw new Error(`${name} is missing`);
  }
  if (!source.includes('onclick="startDueQuestionsQuiz()"')) throw new Error('the due-questions button is not rendered');
  if (source.includes('function startLevelQuiz')) throw new Error('startLevelQuiz is dead code and should be gone');
  return 'due questions and weakest concept kept';
});

// ---- The Bank's presets select what they say --------------------------------

check('each preset selects exactly what its filter selects', () => {
  // The invariant, not a snapshot: a preset sets filters, and the pool it produces must equal
  // the pool those same filters produce when applied directly. This keeps working as the
  // notes grow, and it is the check that would catch a preset wired to the wrong filter.
  const key = q => `${q.question || ''}||${q.code || ''}||${(q.options || []).join('|')}`;
  const byTag = tag => {
    const pool = [];
    for (const chapter of Object.keys(g('QUESTIONS_BANK'))) {
      for (const q of g('QUESTIONS_BANK')[chapter]) {
        if (!tag || (q.tags || []).includes(tag)) pool.push(q);
      }
    }
    return pool;
  };

  const problems = [];
  const seen = [];
  for (const [preset, tag] of [['everything', null], ['ocjp', 'ocjp'], ['tricky', 'tricky'], ['interview', 'interview']]) {
    const expected = byTag(tag);
    g(`applyBankPreset(${JSON.stringify(preset)}, document.querySelector('[data-preset="${preset}"]'))`);
    const actual = g('collectBankSelection().questions');
    const sameRaw = actual.length === expected.length;
    const sameUnique = new Set(actual.map(key)).size === new Set(expected.map(key)).size;
    seen.push(`${preset} ${actual.length}`);
    if (!sameRaw || !sameUnique) {
      problems.push(`${preset}: expected ${expected.length}/${new Set(expected.map(key)).size}, got ${actual.length}/${new Set(actual.map(key)).size}`);
    }
  }
  if (problems.length) throw new Error(problems.join('; '));
  return seen.join(', ');
});

check('the Bank offers a quiz size', () => {
  const select = doc.getElementById('bank-quiz-size');
  if (!select) throw new Error('no size select');
  const sizes = [...select.options].map(o => o.value);
  if (!sizes.includes('all')) throw new Error(`no "all" option: ${sizes.join(',')}`);
  return `sizes ${sizes.join('/')}`;
});

// ---- Nothing invented is on screen -----------------------------------------

check('no invented text appears anywhere on screen', () => {
  // The parser used to write three sentences of its own prose for a topic with no notes, which
  // were then displayed as the author's notes and used as the correct answers to a quiz
  // question. It is gone; this is the guard that it does not come back.
  const invented = [/This topic belongs to/, /understand its key responsibilities/, /trace method behavior/, /Run through the main method flow/];
  const found = [];
  const walker = doc.createTreeWalker(doc.body, 1);
  let node;
  while ((node = walker.nextNode())) {
    if (isHidden(node)) continue;
    const own = Array.from(node.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent).join('');
    for (const pattern of invented) {
      if (pattern.test(own)) found.push(pattern.source);
    }
  }
  if (found.length) throw new Error(`invented text is on screen: ${[...new Set(found)].join(', ')}`);
  return 'none of the tool\'s old filler is visible';
});

check('no question uses the tool\'s old invented text', () => {
  const invented = [/This topic belongs to/, /understand its key responsibilities/, /trace method behavior/, /Run through the main method flow/];
  const bank = g('QUESTIONS_BANK');
  for (const chapter of Object.keys(bank)) {
    for (const q of bank[chapter]) {
      const blob = [q.question, q.explanation, q.modelAnswer, ...(q.options || []), ...(q.keyPoints || [])].join(' ');
      for (const pattern of invented) {
        if (pattern.test(blob)) throw new Error(`${chapter}: a question still uses it: ${String(q.question).slice(0, 50)}`);
      }
    }
  }
  return 'none of the questions use it';
});

// ---- Every control does something -------------------------------------------

check('every button in the dashboard does something', () => {
  // WHY THIS EXISTS
  //
  // The three Mastery filter buttons had no onclick and no listener, so clicking "Not yet
  // proved" did nothing at all. setMasteryFilter was defined and masteryFilter was read when
  // the list rendered, but nothing ever set it, so the filter was permanently 'all'.
  //
  // That is invisible to every other check: the data is valid, the page renders, no error is
  // thrown. The button is simply inert. It was found by hand, and the dashboard has 49 buttons
  // while this project has deleted two whole views and re-wired several handlers, so it is
  // exactly the kind of thing that comes back.
  //
  // A button is wired if it has an onclick, or if app.js reaches it by id - which covers
  // addEventListener, since that needs getElementById first.
  //
  // Only STATIC buttons are checked: the ones written in index.html. A button the script
  // creates gets its handler attached to the element it just made, so it is never fetched by
  // id and this test would wrongly call it inert. The first version did exactly that and
  // reported 141 false positives, every one of them a subtopic button the notes view builds.
  const source = fs.readFileSync(path.join(dashboardDir, 'app.js'), 'utf8');
  const markup = fs.readFileSync(indexPath, 'utf8');
  const inert = [];
  for (const element of doc.querySelectorAll('button[id]')) {
    if (!markup.includes(`id="${element.id}"`)) continue;
    if (element.hasAttribute('onclick')) continue;
    if (new RegExp(`getElementById\\(['"]${element.id}['"]\\)`).test(source)) continue;
    inert.push(element.id);
  }
  const staticCount = [...doc.querySelectorAll('button[id]')].filter(b => markup.includes(`id="${b.id}"`)).length;
  if (inert.length) throw new Error(`${inert.length} static button(s) do nothing: ${inert.join(', ')}`);
  return `${staticCount} static buttons, all wired`;
});

check('the Mastery filters actually filter', () => {
  // The behavioural half of the check above: click each filter and confirm the list changes.
  g('showMastery')();
  const host = doc.getElementById('mastery-list');
  const counts = {};
  for (const [id, value] of [['mastery-filter-all', 'all'], ['mastery-filter-weak', 'weak'], ['mastery-filter-untried', 'untried']]) {
    const button = doc.getElementById(id);
    if (!button) throw new Error(`no ${id}`);
    button.click();
    if (g('masteryFilter') !== value) {
      throw new Error(`clicking ${id} left the filter as ${g('masteryFilter')}, expected ${value}`);
    }
    counts[value] = host.querySelectorAll('.mastery-row').length;
  }
  // With no quiz history every concept is untried, so 'all' and 'untried' must agree and
  // 'weak' must be empty. That is a real relationship, not a snapshot of today's numbers.
  if (counts.all !== counts.untried) {
    throw new Error(`all=${counts.all} and untried=${counts.untried} should match with no history`);
  }
  if (counts.weak !== 0) throw new Error(`weak=${counts.weak} should be 0 with no history`);
  g(`setMasteryFilter('all', document.getElementById('mastery-filter-all'))`);
  return `all ${counts.all}, weak ${counts.weak}, untried ${counts.untried}`;
});

// ---- Every view renders -----------------------------------------------------

for (const section of [...doc.querySelectorAll('.view-section')].map(s => s.id)) {
  check(`renders ${section}`, () => {
    g('showView')(section);
    const active = doc.querySelector('.view-section.active');
    if (!active) throw new Error('no section became active');
    const text = active.textContent;
    if (/NaN/.test(text)) throw new Error('the rendered view contains NaN');
    if (/\bundefined\b/.test(text)) throw new Error('the rendered view contains "undefined"');
    return `${text.length} characters, clean`;
  });
}

// ---- Persistence, grading and accessibility regressions ----------------------

const assert = require('assert/strict');
const savedState = g('JavaRevStorage.exportText()');
function storageFixture(seed = {}, unavailable = false) {
  const fixture = new JSDOM('<div id="storage-warnings" hidden></div>', {
    url: 'http://localhost/', runScripts: 'outside-only'
  });
  for (const [key, value] of Object.entries(seed)) fixture.window.localStorage.setItem(key, value);
  if (unavailable) Object.defineProperty(fixture.window, 'localStorage', { get() { throw new Error('denied'); } });
  fixture.window.eval(fs.readFileSync(path.join(dashboardDir, 'storage.js'), 'utf8'));
  return fixture;
}
function expectWarning(fixture) {
  assert.equal(fixture.window.document.getElementById('storage-warnings').hidden, false);
  assert.ok(fixture.window.document.getElementById('storage-warnings').textContent.length > 20);
}
check('grading preserves case and meaningful whitespace', () => {
  const grade = g('JavaRevScoring.grade');
  for (const type of ['predict', 'codefill']) {
    const q = { type, answer: ['Hello World\nnext'] };
    assert.equal(grade(q, 'Hello World\r\nnext\n'), true);
    for (const wrong of ['hello world\nnext', 'HelloWorld\nnext', 'Hello  World\nnext', ' Hello World\nnext', 'Hello World\nnext\n\n']) {
      assert.equal(grade(q, wrong), false, wrong);
    }
  }
  assert.equal(grade({ type: 'codefill', answer: ['String'] }, 'string'), false);
});

check('missing, corrupt and unavailable storage warn visibly and preserve valid legacy data', () => {
  const fixtures = [];
  try {
    const empty = storageFixture(); fixtures.push(empty);
    empty.window.JavaRevStorage.read('javarev_notes'); expectWarning(empty);
    const blocked = storageFixture({}, true); fixtures.push(blocked);
    blocked.window.JavaRevStorage.write('javarev_notes', { project: 'in memory', topics: {} });
    assert.equal(blocked.window.JavaRevStorage.read('javarev_notes').project, 'in memory');
    expectWarning(blocked);
    const oldRecord = { seen: 2, correct: 1, wrong: 1, lastSeenMs: 10 };
    const corrupt = storageFixture({
      javarev_quiz_history: '{broken',
      javarev_question_history: JSON.stringify({ valid: oldRecord, invalid: { seen: 'no' } }),
      javarev_notes: JSON.stringify({ project: 'Keep this', topics: { topic: 'note' } })
    }); fixtures.push(corrupt);
    const store = corrupt.window.JavaRevStorage;
    assert.equal(store.read('javarev_notes').project, 'Keep this');
    assert.equal(store.read('javarev_question_history').valid.correct, 1);
    assert.equal(corrupt.window.localStorage.getItem('javarev_quiz_history'), '{broken');
    expectWarning(corrupt);
    const brokenEnvelope = storageFixture({ javarev_state_v2: '{broken' }); fixtures.push(brokenEnvelope);
    brokenEnvelope.window.JavaRevStorage.write('javarev_notes', { project: 'new', topics: {} });
    assert.equal(brokenEnvelope.window.localStorage.getItem('javarev_state_v2'), '{broken');
    expectWarning(brokenEnvelope);
    const quota = storageFixture({ javarev_state_v2: savedState }); fixtures.push(quota);
    quota.window.JavaRevStorage.read('javarev_notes');
    quota.window.Storage.prototype.setItem = () => { throw new Error('quota'); };
    assert.equal(quota.window.JavaRevStorage.write('javarev_notes', { project: 'unsaved', topics: {} }), false);
    assert.equal(quota.window.localStorage.getItem('javarev_state_v2'), savedState);
    expectWarning(quota);
  } finally { fixtures.forEach(f => f.window.close()); }
});

check('backup import validates schema, previews, backs up and distrusts scores', () => {
  const fixture = storageFixture({ javarev_state_v2: savedState });
  try {
    const store = fixture.window.JavaRevStorage;
    const imported = JSON.parse(savedState);
    imported.data.javarev_question_history = { score: { seen: 9, correct: 9, wrong: 0, lastSeenMs: 10 } };
    imported.data.javarev_quiz_history = [{ chapter: 'test', correct: 9, total: 9 }];
    imported.data.javarev_editor_drafts = { sample: { code: 'int value = 3;' } };
    const text = JSON.stringify(imported);
    assert.match(store.preview(text).summary, /1 editor drafts/);
    assert.equal(store.importData(text), true);
    assert.equal(store.read('javarev_question_history').score.imported, true);
    assert.equal(store.backupText(), savedState);
    for (const invalid of [
      { ...imported, project: 'DifferentProject' },
      { ...imported, version: 999 },
      { ...imported, data: { ...imported.data, javarev_notes: [] } },
      { ...imported, data: { ...imported.data, javarev_quiz_progress: { questionIds: [null] } } }
    ]) assert.throws(() => store.preview(JSON.stringify(invalid)));
    assert.throws(() => store.preview(text.replace('"data":{', '"data":{"__proto__":{},')));
    assert.equal(store.reset(), true);
    assert.equal(Object.keys(store.read('javarev_editor_drafts')).length, 0);
    assert.equal(store.read('javarev_question_history').score, undefined);
    assert.equal(JSON.parse(store.backupText()).data.javarev_editor_drafts.sample.code, 'int value = 3;');
  } finally { fixture.window.close(); }
});

let sessionFixture;
check('quiz scoring is idempotent and all selection types survive navigation and close', () => {
  const all = Object.values(g('QUESTIONS_BANK')).flat();
  // The regression drives all four answer shapes, so each one has to exist. A type with
  // no question yet - multi-select needs an authored question with two [correct] options,
  // and the generated topic-membership questions were removed as unsound - is supplied as
  // a fixture and registered in the bank. A saved quiz re-resolves its questions by id, so
  // a fixture that was not registered would make resume refuse the whole session.
  const synthetic = [];
  const pick = (type, qid, build, match) => {
    const found = all.find(q => q.type === type && (!match || match(q)));
    if (found) return found;
    const question = {
      qid, type, difficulty: 'easy', chapter: 'Regression fixture', topic: 'Regression fixture',
      question: `Regression fixture for the ${type} answer shape`, concepts: [],
      contentVersion: 'regression-fixture', explanation: 'Fixture explanation.',
      ...build
    };
    synthetic.push(question);
    return question;
  };
  sessionFixture = [
    pick('scq', 'regression-fixture-scq', { answer: 0, options: ['First', 'Second', 'Third'] }, q => q.answer === 0),
    pick('mcq', 'regression-fixture-mcq', { answer: [0, 1], options: ['Alpha', 'Beta', 'Gamma'] }),
    pick('predict', 'regression-fixture-predict', { answer: ['Exact output'], code: 'System.out.println("x");' }),
    pick('interview', 'regression-fixture-interview', { modelAnswer: 'Fixture answer.', keyPoints: ['First point', 'Second point'] })
  ];
  assert.equal(sessionFixture.length, 4, 'fixtures for all four question types exist');
  if (synthetic.length) g(`QUESTIONS_BANK['Regression fixture'] = ${JSON.stringify(synthetic)}; questionIndexCache = null;`);
  win.__sessionFixture = sessionFixture;
  g('startSelectionQuiz(__sessionFixture, "Persistence regression", 4); activeQuizQuestions = __sessionFixture.slice(); currentQuizQuestionIndex = 0; renderQuizQuestion();');
  doc.querySelector('#quiz-options-container .option-item').click();
  doc.getElementById('btn-submit-answer').click();
  const afterSubmit = g('getQuestionHistory()')[sessionFixture[0].qid].seen;
  g('submitQuizAnswer()');
  assert.equal(g('getQuestionHistory()')[sessionFixture[0].qid].seen, afterSubmit);
  g('loadNextQuizQuestion()');
  doc.querySelectorAll('#quiz-options-container .option-item')[1].click();
  g('previousQuizQuestion()');
  assert.equal(doc.getElementById('btn-submit-answer').style.display, 'none');
  assert.ok(doc.querySelector('#quiz-options-container .option-item').classList.contains('selected'));
  assert.match(doc.getElementById('quiz-feedback-text').textContent, /Your answer: 0/);
  g('loadNextQuizQuestion()');
  assert.ok(doc.querySelectorAll('#quiz-options-container .option-item')[1].classList.contains('selected'));
  g('closeQuiz(); resumeQuiz()');
  assert.ok(doc.querySelectorAll('#quiz-options-container .option-item')[1].classList.contains('selected'));
  g('submitQuizAnswer(); loadNextQuizQuestion()');
  const predict = doc.getElementById('quiz-predict-input');
  predict.value = '  Exact CASE\nline  ';
  predict.dispatchEvent(new win.Event('input'));
  g('showView("notes-view"); resumeQuiz()');
  assert.equal(predict.value, '  Exact CASE\nline  ');
  g('previousQuizQuestion(); loadNextQuizQuestion()');
  assert.equal(predict.value, '  Exact CASE\nline  ');
  predict.value = '<img src=x onerror="alert(1)">';
  predict.dispatchEvent(new win.Event('input'));
  g('submitQuizAnswer(); loadNextQuizQuestion()');
  const interview = doc.getElementById('quiz-interview-textarea');
  interview.value = 'My original interview explanation';
  interview.dispatchEvent(new win.Event('input'));
  g('submitQuizAnswer()');
  const box = doc.querySelector('#quiz-interview-checklist input');
  box.checked = true; box.dispatchEvent(new win.Event('change'));
  g('closeQuiz(); resumeQuiz()');
  assert.equal(interview.value, 'My original interview explanation');
  assert.equal(doc.querySelector('#quiz-interview-checklist input').checked, true);
  g('submitQuizAnswer()');
  const stored = g('loadQuizProgress()');
  assert.equal(stored.saved.answered.length, 4);
  assert.equal(stored.saved.inputs[3].interview, 'My original interview explanation');
  assert.equal(stored.saved.score, g('JavaRevScoring.totals(activeQuizQuestions, answeredQuestions).correct'));
  g('showQuizResults()');
  const sessions = g('getQuizHistory()').length;
  g('showQuizResults(); closeQuiz(); showView("dashboard-view")');
  assert.equal(g('getQuizHistory()').length, sessions);
  assert.equal(g('loadQuizProgress()'), null);
  assert.match(doc.getElementById('result-score-note').textContent, /3 scored questions; 1 self-assessed/);
  assert.equal(doc.querySelector('#quiz-results-breakdown img'), null);
});

check('saved quiz restores after a full app reload with unsubmitted text', () => {
  win.__reloadQuestion = sessionFixture[2];
  g('startSelectionQuiz([__reloadQuestion], "Reload regression", 1)');
  const input = doc.getElementById('quiz-predict-input');
  input.value = 'Retain\nCASE and spaces ';
  input.dispatchEvent(new win.Event('input'));
  const seed = win.localStorage.getItem('javarev_state_v2');
  const fixture = new JSDOM(html, { runScripts: 'dangerously', url: 'http://localhost/revision-dashboard/index.html#quiz-view' });
  try {
    const w = fixture.window;
    w.localStorage.setItem('javarev_state_v2', seed);
    w.matchMedia = win.matchMedia;
    w.alert = () => {}; w.confirm = () => true;
    Object.defineProperty(w.HTMLElement.prototype, 'innerText', {
      get() { return this.textContent; }, set(value) { this.textContent = value; }
    });
    for (const src of scriptSources) {
      const script = w.document.createElement('script');
      script.textContent = fs.readFileSync(path.join(dashboardDir, src), 'utf8');
      w.document.head.appendChild(script);
    }
    w.document.dispatchEvent(new w.Event('DOMContentLoaded'));
    assert.equal(w.document.querySelector('.view-section.active').id, 'quiz-view');
    assert.equal(w.document.getElementById('quiz-predict-input').value, 'Retain\nCASE and spaces ');
    assert.equal(w.eval('activeQuizQuestions.length'), 1);
  } finally { fixture.window.close(); }
});

check('study confidence requires distinct objective IDs and excludes imported and retired evidence', () => {
  const history = g('getQuestionHistory()');
  try {
    const concept = [...g('questionIndex().byConcept')].find(([, ids]) =>
      ids.filter(id => g('questionIndex().byId').get(id).type !== 'interview').length >= 3);
    assert.ok(concept);
    const qs = concept[1].map(id => g('questionIndex().byId').get(id)).filter(q => q.type !== 'interview');
    const records = {};
    const record = q => ({ seen: 10, correct: 10, wrong: 0, lastSeenMs: 1, contentVersion: q.contentVersion });
    records[qs[0].qid] = record(qs[0]);
    g('JavaRevStorage').write('javarev_question_history', records);
    assert.equal(g('getConceptMastery()').find(m => m.id === concept[0]).proved, false);
    records[qs[1].qid] = record(qs[1]); records[qs[2].qid] = record(qs[2]);
    g('JavaRevStorage').write('javarev_question_history', records);
    assert.equal(g('getConceptMastery()').find(m => m.id === concept[0]).proved, true);
    records[qs[2].qid].imported = true;
    records.retired = { seen: 10000, correct: 10000, wrong: 0, lastSeenMs: 1 };
    records[sessionFixture[3].qid] = record(sessionFixture[3]);
    g('JavaRevStorage').write('javarev_question_history', records);
    assert.equal(g('getConceptMastery()').find(m => m.id === concept[0]).proved, false);
    assert.equal(g('computeReadiness().answered'), 2);
    g('renderReadiness()');
    assert.match(doc.getElementById('mastery-readiness').textContent, /Study confidence/);
  } finally { g('JavaRevStorage').write('javarev_question_history', history); }
});

check('content identity aliases preserve compatible history and archive changed evidence visibly', () => {
  const q = sessionFixture[0];
  const oldVersion = q.contentVersion, oldAliases = q.legacyQids;
  const history = g('getQuestionHistory()');
  try {
    q.contentVersion = 'regression-v1'; q.legacyQids = ['regression-old-id'];
    const records = { 'regression-old-id': { seen: 3, correct: 2, wrong: 1, lastSeenMs: 1 } };
    g('JavaRevStorage').write('javarev_question_history', records);
    g('questionIndexCache = null; reconcileQuestionHistory()');
    assert.equal(g('getQuestionHistory()')[q.qid].correct, 2);
    assert.equal(g('getQuestionHistory()')['regression-old-id'], undefined);
    q.contentVersion = 'regression-v2';
    g('questionIndexCache = null; reconcileQuestionHistory()');
    assert.equal(g('getQuestionHistory()')[q.qid], undefined);
    assert.ok(Object.keys(g('JavaRevStorage.read("javarev_archived_evidence")')).some(key => key.includes(q.qid)));
    assert.equal(doc.getElementById('storage-warnings').hidden, false);
  } finally {
    q.contentVersion = oldVersion; q.legacyQids = oldAliases;
    g('questionIndexCache = null');
    g('JavaRevStorage').write('javarev_question_history', history);
  }
});

check('practice drafts survive challenge and tab changes without claiming compilation', () => {
  g('showPracticeLab({ chapterName: null, subChapterName: null })');
  const editor = doc.getElementById('practice-code-textarea');
  editor.value = '// keep my draft\nint count = 7;';
  editor.dispatchEvent(new win.Event('input'));
  const id = g('currentEditorChallenge.id');
  g('selectChallenge(1); selectChallenge(0)');
  assert.equal(g('currentEditorChallenge.id'), id);
  assert.equal(editor.value, '// keep my draft\nint count = 7;');
  if (g('DEEP_CHALLENGES.length')) {
    g('switchPracticeTab("deep")');
    editor.value = '// deep draft'; editor.dispatchEvent(new win.Event('input'));
    g('switchPracticeTab("coding"); switchPracticeTab("deep")');
    assert.equal(editor.value, '// deep draft');
  }
  assert.doesNotMatch(doc.getElementById('btn-run-practice').textContent, /Compile/);
});

check('mobile drawer hides focus, traps Tab, closes with Escape and restores focus', () => {
  const original = win.matchMedia;
  win.matchMedia = () => ({ matches: true });
  try {
    g('syncDrawerVisibility()');
    assert.equal(doc.querySelector('.sidebar').inert, true);
    doc.getElementById('mobile-menu-btn').focus();
    g('openDrawer()');
    assert.equal(doc.querySelector('.sidebar').inert, false);
    assert.equal(doc.querySelector('.main-content').inert, true);
    assert.equal(doc.getElementById('mobile-menu-btn').getAttribute('aria-expanded'), 'true');
    doc.dispatchEvent(new win.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    assert.equal(doc.querySelector('.sidebar').inert, true);
    assert.equal(doc.activeElement.id, 'mobile-menu-btn');
    g('openDrawer(); showView("notes-view")');
    assert.equal(doc.querySelector('.main-content').inert, false);
    assert.equal(doc.querySelector('.app-container').classList.contains('drawer-open'), false);
    assert.ok(doc.querySelector('#notes-view').contains(doc.activeElement));
  } finally { win.matchMedia = original; g('syncDrawerVisibility()'); }
});

async function checkAsync(name, fn) {
  try { await fn(); results.push({ name, ok: true, value: '' }); }
  catch (error) { results.push({ name, ok: false, value: error.message }); }
}

async function asyncRegressions() {
  await checkAsync('practice worker handles normal, unsupported, unavailable and infinite-loop cases', async () => {
    const { Worker: NodeWorker } = require('worker_threads');
    const workerSource = fs.readFileSync(path.join(dashboardDir, 'practice-worker.js'), 'utf8');
    let terminated = 0;
    win.Worker = class {
      constructor() {
        this.worker = new NodeWorker(`
          const { parentPort } = require('worker_threads');
          global.self = global;
          self.postMessage = value => parentPort.postMessage(value);
          ${workerSource}
          parentPort.on('message', data => self.onmessage({ data }));
        `, { eval: true });
        this.worker.on('message', data => this.onmessage?.({ data }));
        this.worker.on('error', error => this.onerror?.(error));
      }
      postMessage(value) { this.worker.postMessage(value); }
      terminate() { terminated++; this.worker.terminate(); }
    };
    const runtime = g('JavaRevRuntime');
    const challenge = { id: 'worker-regression', testCases: [{}], verifyFnStr: 'function(code) { return new Function(code)(); }' };
    const good = await runtime.run(challenge, 'return true;', {}, 2000);
    assert.equal(good.outcomes[0], 'match');
    const unsupported = await runtime.run(challenge, 'throw new Error("unsupported");', {}, 2000);
    assert.equal(unsupported.outcomes[0], 'unsupported');
    let responsive = false;
    setTimeout(() => { responsive = true; }, 25);
    const infinite = await runtime.run(challenge, 'while (true) {}', {}, 100);
    assert.match(infinite.unavailable, /stopped after/);
    assert.equal(responsive, true);
    assert.equal(terminated, 3);
    delete win.Worker;
    const unavailable = await runtime.run(challenge, 'while (true) {}', {});
    assert.match(unavailable.unavailable, /Nothing was executed/);
  });
  await checkAsync('browser back/forward restores views and focus without losing a quiz', async () => {
    g('resumeQuiz(); showView("notes-view"); showView("bank-view")');
    const saved = g('loadQuizProgress().saved.inputs[0].predict');
    win.history.back();
    await new Promise(resolve => setTimeout(resolve, 80));
    assert.equal(doc.querySelector('.view-section.active').id, 'notes-view');
    assert.ok(doc.querySelector('#notes-view').contains(doc.activeElement));
    win.history.forward();
    await new Promise(resolve => setTimeout(resolve, 80));
    assert.equal(doc.querySelector('.view-section.active').id, 'bank-view');
    assert.equal(g('loadQuizProgress().saved.inputs[0].predict'), saved);
  });
  await checkAsync('import UI previews and requires confirmation before replacement', async () => {
    const fileInput = doc.getElementById('import-data-file');
    const before = g('JavaRevStorage.exportText()');
    const parsed = JSON.parse(before);
    parsed.data.javarev_notes.project = 'Imported project note';
    Object.defineProperty(fileInput, 'files', {
      configurable: true, value: [{ size: before.length, text: async () => JSON.stringify(parsed) }]
    });
    await fileInput.onchange();
    assert.equal(doc.getElementById('btn-confirm-import').hidden, false);
    assert.match(doc.getElementById('import-data-preview').textContent, /replaces local data/);
    win.confirm = () => false;
    doc.getElementById('btn-confirm-import').click();
    assert.notEqual(g('getProjectNotes()'), 'Imported project note');
    win.confirm = () => true;
    doc.getElementById('btn-confirm-import').click();
    assert.equal(g('getProjectNotes()'), 'Imported project note');
    assert.equal(doc.getElementById('btn-confirm-import').hidden, true);
    assert.ok(g('JavaRevStorage.backupText()'));
  });
  report();
}

// ---- Report -----------------------------------------------------------------

function report() {
console.log('');
let failed = 0;
for (const result of results) {
  if (result.ok) console.log(`   PASS  ${result.name}  ->  ${result.value}`);
  else { failed++; console.error(`   FAIL  ${result.name}  ->  ${result.value}`); }
}

// An error thrown inside a view's render is the failure this check exists to catch, so it is
// reported even when no assertion noticed it.
const unique = [...new Set(runtimeErrors)].filter(e => !/Not implemented: window\./.test(e));
if (unique.length) {
  console.error('');
  for (const error of unique.slice(0, 10)) console.error(`   Runtime error: ${error}`);
  failed++;
}

console.log('');
if (failed) {
  console.error(`Dashboard check failed: ${failed} problem(s). The page is broken even though the data is valid.`);
  process.exit(1);
}
console.log(`   DOM/state checks passed: ${results.length}. jsdom does not verify real visual layout or browser rendering.`);
dom.window.close();
}
asyncRegressions().catch(error => { console.error(error); dom.window.close(); process.exitCode = 1; });
