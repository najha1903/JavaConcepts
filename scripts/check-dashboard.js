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
// jsdom does the DOM. It is a devDependency, and if it is missing this SKIPS rather than
// fails, the same way the Java checks skip when javac is absent - a missing tool is not a
// defect in the author's notes.
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
  console.log('Dashboard check skipped: jsdom is not installed.');
  console.log('   Install it with:  npm install');
  process.exit(0);
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
    results.push({ name, ok: false, value: error.message });
  }
}

// jsdom has no alert; the app uses it to refuse an action, so it is captured rather than
// printed, and each test reads what was said.
let alerts = [];
win.alert = message => { alerts.push(String(message)); };

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

// ---- Report -----------------------------------------------------------------

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
console.log(`   The dashboard renders and behaves: ${results.length} checks passed.`);
