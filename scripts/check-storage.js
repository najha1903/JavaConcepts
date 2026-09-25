'use strict';

// Run: node scripts/check-storage.js. No server, generation, or publishing.
// The shared backend queues native-style cross-window events and can suspend a
// cache write while another tab commits, deterministically exercising lost writes.
// A parent browser harness can also call runTwoTabBrowserChecks(browser, url).
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { randomUUID } = require('node:crypto');
const dashboard = path.resolve(__dirname, '../revision-dashboard');
const source = fs.readFileSync(path.join(dashboard, 'storage.js'), 'utf8');
const KEY = 'javarev_state_v2';
const JOURNAL = 'javarev_journal_v1:';
const NOTES = 'javarev_notes';
const DRAFTS = 'javarev_editor_drafts';
const THEME = 'javarev_theme';

class SharedStorage {
  constructor(seed = {}) {
    this.data = new Map(Object.entries(seed));
    this.clients = [];
    this.events = [];
    this.beforeSet = null;
  }
  connect(dispatch) {
    const backend = this;
    const client = {
      get length() { return backend.data.size; },
      key: index => [...backend.data.keys()][index] ?? null,
      getItem: key => backend.data.get(key) ?? null,
      setItem(key, value) {
        value = String(value);
        if (backend.beforeSet) backend.beforeSet(client, key, value);
        const oldValue = backend.data.get(key) ?? null;
        backend.data.set(key, value);
        if (oldValue !== value) backend.enqueue(client, { key, oldValue, newValue: value });
      },
      removeItem(key) {
        const oldValue = backend.data.get(key) ?? null;
        backend.data.delete(key);
        if (oldValue !== null) backend.enqueue(client, { key, oldValue, newValue: null });
      },
      dispatch
    };
    this.clients.push(client);
    return client;
  }
  enqueue(sender, event) {
    for (const client of this.clients) if (client !== sender) this.events.push(() => client.dispatch(event));
  }
  flush() {
    while (this.events.length) this.events.shift()();
  }
}

function createVMTab(shared) {
  const warning = { hidden: true, textContent: '' };
  const handlers = {};
  const context = vm.createContext({
    crypto: { randomUUID },
    document: { getElementById: () => warning },
    addEventListener: (type, handler) => { (handlers[type] ||= []).push(handler); },
    localStorage: shared.connect(event => { for (const fn of handlers.storage || []) fn(event); })
  });
  vm.runInContext(source, context);
  return { store: context.JavaRevStorage, storage: context.localStorage, warning,
    focus: () => { for (const fn of handlers.focus || []) fn(); } };
}

const plain = value => JSON.parse(JSON.stringify(value));
function pair() {
  const shared = new SharedStorage();
  const a = createVMTab(shared);
  const b = createVMTab(shared);
  a.store.read(NOTES); b.store.read(NOTES);
  return { shared, a, b };
}
function recovery(tab) { return JSON.parse(tab.store.recoveryText()); }
function noConflict(tab) { assert.doesNotMatch(tab.warning.textContent, /conflict|changed in another tab/i); }

function runVMChecks(check) {
  check('blank tabs: notes survive stale theme save and events are quiet', () => {
    const { shared, a, b } = pair();
    const messages = b.warning.textContent;
    assert.equal(a.store.write(NOTES, { project: 'Keep my notes', topics: {} }), true);
    assert.equal(b.store.write(THEME, 'light'), true);
    shared.flush();
    assert.equal(a.store.read(NOTES).project, 'Keep my notes');
    assert.equal(b.store.read(NOTES).project, 'Keep my notes');
    assert.equal(a.store.read(THEME), 'light');
    assert.equal(b.warning.textContent, messages);
    noConflict(a); noConflict(b);
  });
  check('stale map snapshots merge distinct notes, drafts, and deletions', () => {
    const { shared, a, b } = pair();
    const left = a.store.read(NOTES), right = b.store.read(NOTES);
    left.topics.alpha = 'A'; right.topics.beta = 'B';
    assert.equal(a.store.write(NOTES, left), true);
    assert.equal(b.store.write(NOTES, right), true);
    const da = a.store.read(DRAFTS), db = b.store.read(DRAFTS);
    da.one = { code: 'one' }; db.two = { code: 'two' };
    assert.equal(a.store.write(DRAFTS, da), true);
    assert.equal(b.store.write(DRAFTS, db), true);
    const na = a.store.read(NOTES), nb = b.store.read(NOTES);
    delete na.topics.alpha; nb.topics.beta = 'B2';
    assert.equal(a.store.write(NOTES, na), true);
    assert.equal(b.store.write(NOTES, nb), true);
    shared.flush();
    assert.deepEqual(plain(a.store.read(NOTES).topics), { beta: 'B2' });
    assert.deepEqual(plain(b.store.read(DRAFTS)), { one: { code: 'one' }, two: { code: 'two' } });
    noConflict(a); noConflict(b);
  });
  check('same note conflicts keep both versions across reload and repeated input', () => {
    const { shared, a, b } = pair();
    const baseA = a.store.readText(NOTES), baseB = b.store.readText(NOTES);
    assert.equal(a.store.saveText(baseA, 'A text').ok, true);
    const rejected = b.store.saveText(baseB, 'B text');
    assert.equal(rejected.ok, false);
    assert.equal(rejected.conflict, true);
    assert.equal(rejected.recoverable, true);
    assert.equal(rejected.snapshot.revision, baseB.revision);
    assert.equal(b.store.saveText(rejected.snapshot, 'B continued').ok, false);
    shared.flush();
    const reloaded = createVMTab(shared);
    assert.equal(reloaded.store.read(NOTES).project, 'A text');
    for (const text of ['A text', 'B text', 'B continued']) assert.ok(JSON.stringify(recovery(reloaded)).includes(text));
    assert.match(reloaded.warning.textContent, /conflict/i);
    const current = reloaded.store.readText(NOTES);
    assert.equal(reloaded.store.saveText(current, 'Manually merged A and B').ok, true);
  });
  check('legacy synchronous writes also protect the same note and code draft', () => {
    const { a, b } = pair();
    const left = a.store.read(NOTES), right = b.store.read(NOTES);
    left.project = 'A'; right.project = 'B';
    assert.equal(a.store.write(NOTES, left), true);
    assert.equal(b.store.write(NOTES, right), false);
    const da = a.store.readText(DRAFTS, 'challenge'), db = b.store.readText(DRAFTS, 'challenge');
    assert.equal(a.store.saveText(da, { code: 'class A {}' }).ok, true);
    assert.equal(b.store.saveText(db, { code: 'class B {}' }).ok, false);
    assert.equal(b.store.read(DRAFTS).challenge.code, 'class A {}');
    assert.ok(b.store.recoveryText().includes('class B {}'));
  });
  check('identical simultaneous saves do not produce false conflict warnings', () => {
    const { a, b, shared } = pair();
    const ba = a.store.readText(NOTES), bb = b.store.readText(NOTES);
    a.store.saveText(ba, 'same');
    const result = b.store.saveText(bb, 'same');
    assert.equal(result.ok, true);
    assert.equal(b.store.saveText(result.snapshot, 'same, continued').ok, true);
    shared.flush(); noConflict(a); noConflict(b);
  });
  check('a genuinely lost cache write is reconstructed from the durable journal', () => {
    const { shared, a, b } = pair();
    shared.beforeSet = (client, key) => {
      if (client === a.storage && key === KEY) {
        shared.beforeSet = null;
        assert.equal(b.store.write(THEME, 'light'), true);
      }
    };
    assert.equal(a.store.write(NOTES, { project: 'Journal survives', topics: {} }), true);
    // A's older cache really did overwrite B's cache, so this is not just a
    // sequential read/write test disguised as a concurrency test.
    assert.equal(JSON.parse(shared.data.get(KEY)).data[THEME], 'dark');
    const reloaded = createVMTab(shared);
    assert.equal(reloaded.store.read(THEME), 'light');
    assert.equal(reloaded.store.read(NOTES).project, 'Journal survives');
    shared.flush(); noConflict(a); noConflict(b); noConflict(reloaded);
  });
  check('same-field interleaving at journal append preserves the losing text', () => {
    const { shared, a, b } = pair();
    const baseA = a.store.readText(NOTES), baseB = b.store.readText(NOTES);
    shared.beforeSet = (client, key) => {
      if (client === a.storage && key.startsWith(JOURNAL)) {
        shared.beforeSet = null;
        assert.equal(b.store.saveText(baseB, 'B wins this race').ok, true);
      }
    };
    assert.equal(a.store.saveText(baseA, 'A recoverable').ok, false);
    const reloaded = createVMTab(shared);
    assert.equal(reloaded.store.read(NOTES).project, 'B wins this race');
    assert.ok(reloaded.store.recoveryText().includes('A recoverable'));
    assert.match(reloaded.warning.textContent, /conflict/i);
  });
  check('journal succeeds but cache fails: reload still recovers the save', () => {
    const { shared, a } = pair();
    shared.beforeSet = (_, key) => { if (key === KEY) throw new Error('cache full'); };
    assert.equal(a.store.saveText(a.store.readText(NOTES), 'durable without cache').ok, true);
    assert.equal(shared.data.has(KEY), false);
    assert.equal(createVMTab(shared).store.read(NOTES).project, 'durable without cache');
  });
  check('repeated saves bound the recovery journal instead of filling storage', () => {
    const { shared, a } = pair();
    // Each save journals the full before and after text, so an unbounded journal grows
    // by roughly 32 KB per edit on a large note. That is the measurement that filled a
    // 5 MiB budget after about 158 edits and then stopped saving durably.
    const note = 'x'.repeat(8000);
    let base = a.store.readText(NOTES);
    for (let i = 0; i < 200; i++) {
      const result = a.store.saveText(base, `${note}${i}`);
      if (result.snapshot) base = result.snapshot;
    }
    const journalKeys = [...shared.data.keys()].filter(key => key.startsWith(JOURNAL));
    const bytes = journalKeys.reduce((total, key) => total + shared.data.get(key).length, 0);
    assert.ok(journalKeys.length < 200, `journal kept ${journalKeys.length} of 200 records`);
    assert.ok(bytes <= 1500000, `journal holds ${bytes} bytes, over its budget`);
    // Bounding the history must never cost the current value.
    assert.equal(createVMTab(shared).store.read(NOTES).project, `${note}199`);
  });
  check('a conflicted version survives journal pruning', () => {
    const { shared, a, b } = pair();
    const note = 'y'.repeat(8000);
    // Both tabs edit the same field from the same base, so the second save conflicts.
    const left = a.store.readText(NOTES), right = b.store.readText(NOTES);
    a.store.saveText(left, `${note}first`);
    const conflicted = b.store.saveText(right, `${note}second`);
    assert.equal(conflicted.conflict, true, 'the second save is recorded as a conflict');
    const conflictedKey = JOURNAL + conflicted.id;
    let base = a.store.readText(NOTES);
    for (let i = 0; i < 200; i++) {
      const result = a.store.saveText(base, `${note}${i}`);
      if (result.snapshot) base = result.snapshot;
    }
    assert.ok(shared.data.has(conflictedKey), 'a conflicted record is never pruned');
  });
  check('pruning never breaks recovery when the cache write fails', () => {
    const { shared, a } = pair();
    const note = 'z'.repeat(4000);
    // Every cache write fails, so the journal is the only copy of these changes and the
    // revision chain in the cache never advances. Removing the oldest records would
    // break the chain that recovery replays.
    shared.beforeSet = (_, key) => { if (key === KEY) throw new Error('cache full'); };
    let base = a.store.readText(NOTES);
    for (let i = 0; i < 200; i++) {
      const result = a.store.saveText(base, `${note}${i}`);
      if (result.snapshot) base = result.snapshot;
    }
    assert.equal(createVMTab(shared).store.read(NOTES).project, `${note}199`,
      'the newest value must survive a reload even when the cache never updated');
  });
  check('pruning with overlapping saves from two tabs keeps the newest and the conflict', () => {
    const { shared, a, b } = pair();
    const note = 'w'.repeat(4000);
    // B takes its base before A works, so its later save is genuinely stale.
    const staleBase = b.store.readText(NOTES);
    let base = a.store.readText(NOTES);
    for (let i = 0; i < 200; i++) {
      const result = a.store.saveText(base, `${note}${i}`);
      if (result.snapshot) base = result.snapshot;
    }
    const conflicted = b.store.saveText(staleBase, `${note}stale`);
    assert.equal(conflicted.conflict, true, 'the stale save is recorded as a conflict');
    const reloaded = createVMTab(shared);
    assert.equal(reloaded.store.read(NOTES).project, `${note}199`, 'the newest value survives a reload');
    assert.ok(reloaded.store.recoveryText().includes('stale'), 'the conflicting text stays recoverable');
  });
  check('quota failure keeps pending text exportable and never claims success', () => {
    const { shared, a } = pair();
    const base = a.store.readText(NOTES);
    shared.beforeSet = () => { throw new Error('quota'); };
    const result = a.store.saveText(base, 'memory only');
    assert.equal(result.ok, false); assert.equal(result.recoverable, false);
    assert.equal(a.store.read(NOTES).project, 'memory only');
    assert.ok(a.store.recoveryText().includes('memory only'));
    assert.match(a.warning.textContent, /only in this tab/);
    assert.equal(shared.data.size, 0);
  });
  check('schema-2 import/reset invalidate old editor bases and preserve recovery', () => {
    const { shared, a, b } = pair();
    const base = b.store.readText(NOTES);
    const backup = a.store.exportText();
    assert.equal(a.store.importData(backup), true);
    assert.equal(b.store.saveText(base, 'stale after import').ok, false);
    const beforeReset = b.store.readText(DRAFTS, 'challenge');
    assert.equal(a.store.reset(), true);
    assert.equal(b.store.saveText(beforeReset, { code: 'stale after reset' }).ok, false);
    const reloaded = createVMTab(shared);
    assert.equal(reloaded.store.read(NOTES).project, '');
    assert.equal(reloaded.store.read(DRAFTS).challenge, undefined);
    assert.ok(reloaded.store.recoveryText().includes('stale after import'));
    assert.ok(reloaded.store.recoveryText().includes('stale after reset'));
    assert.equal(JSON.parse(a.store.backupText()).version, 2);
    assert.equal(a.store.preview(a.store.exportText()).parsed.version, 2);
  });
  check('unsafe paths and damaged envelopes cannot overwrite existing storage', () => {
    const shared = new SharedStorage({ [KEY]: '{broken' });
    const a = createVMTab(shared);
    assert.equal(a.store.write(NOTES, { project: 'recover me', topics: {} }), false);
    assert.equal(shared.data.get(KEY), '{broken');
    assert.throws(() => a.store.readText(NOTES, '__proto__'));
    assert.equal(a.store.reset(), true);
    assert.equal(a.store.backupText(), '{broken');
    assert.equal(a.store.read(NOTES).project, '');
  });
  check('ordinary events notify subscribers without writing back or adding warnings', () => {
    const { shared, a, b } = pair();
    let changes = 0;
    b.store.subscribe(() => changes++);
    a.store.write(THEME, 'light');
    const count = shared.data.size;
    shared.flush(); b.focus();
    assert.equal(changes, 1);
    assert.equal(shared.data.size, count);
    noConflict(a); noConflict(b);
  });
}

function runDOMChecks(check) {
  const { JSDOM } = require('jsdom');
  const html = fs.readFileSync(path.join(dashboard, 'index.html'), 'utf8');
  function open(shared) {
    const dom = new JSDOM(html, { runScripts: 'dangerously', pretendToBeVisual: true, url: 'http://localhost/' });
    const win = dom.window;
    Object.defineProperty(win, 'localStorage', { value: shared.connect(event => win.dispatchEvent(new win.StorageEvent('storage', event))) });
    Object.defineProperty(win.HTMLElement.prototype, 'innerText', {
      get() { return this.textContent; }, set(value) { this.textContent = value; }
    });
    win.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
    win.confirm = () => true;
    win.alert = () => {};
    for (const [, src] of html.matchAll(/<script\s+src="([^"]+)"/g)) {
      const element = win.document.createElement('script');
      element.textContent = fs.readFileSync(path.join(dashboard, src), 'utf8');
      win.document.head.appendChild(element);
    }
    win.document.dispatchEvent(new win.Event('DOMContentLoaded'));
    return dom;
  }
  check('two app windows preserve active notes/code, warn only on relevant changes, and offer recovery', () => {
    const shared = new SharedStorage();
    const da = open(shared), db = open(shared);
    const a = da.window, b = db.window;
    const input = (win, id, value) => {
      const el = win.document.getElementById(id);
      el.value = value; el.dispatchEvent(new win.Event('input'));
      // Notes are saved after a pause in typing, not on every keystroke, so the test
      // has to let the pending save run before asserting on storage. This is exactly
      // what a blur or a hidden page does.
      win.eval('flushNoteSaves()');
    };
    try {
      a.eval('showView("notes-view")'); b.eval('showView("notes-view")');
      // showView only toggles the section. The editor's input handler and the edit
      // baseline it compares against are both installed by renderNotesView, so both
      // windows must render the notes view before either can be typed into.
      a.eval('renderNotesView()'); b.eval('renderNotesView()');
      const warning = b.document.getElementById('storage-warnings');
      const initialWarning = warning.textContent;
      a.JavaRevStorage.write(THEME, 'light'); shared.flush();
      assert.equal(warning.textContent, initialWarning);
      assert.equal(b.document.documentElement.getAttribute('data-theme'), 'light');
      input(a, 'project-notes-textarea', 'A project'); shared.flush();
      assert.equal(b.document.getElementById('project-notes-textarea').value, '');
      assert.match(warning.textContent, /editor text was kept/);
      input(b, 'project-notes-textarea', 'B project');
      assert.equal(b.JavaRevStorage.read(NOTES).project, 'A project');
      assert.match(b.document.getElementById('project-notes-meta').textContent, /Conflict/);
      b.eval('renderNotesView()');
      assert.equal(b.document.getElementById('project-notes-textarea').value, 'B project');
      a.eval('showPracticeLab({chapterName:null,subChapterName:null})');
      b.eval('showPracticeLab({chapterName:null,subChapterName:null})');
      const originalCode = b.document.getElementById('practice-code-textarea').value;
      input(a, 'practice-code-textarea', '// A code'); shared.flush();
      assert.equal(b.document.getElementById('practice-code-textarea').value, originalCode);
      input(b, 'practice-code-textarea', '// B code');
      b.eval('selectChallenge(1); selectChallenge(0)');
      assert.equal(b.document.getElementById('practice-code-textarea').value, '// B code');
      assert.ok(b.JavaRevStorage.recoveryText().includes('// B code'));
      assert.ok(b.document.getElementById('btn-export-recovery'));
      b.document.getElementById('btn-reload-saved-text').click();
      assert.equal(b.document.getElementById('practice-code-textarea').value, '// A code');
      assert.equal(b.document.getElementById('project-notes-textarea').value, 'A project');
      input(b, 'practice-code-textarea', '// explicitly merged');
      assert.equal(b.JavaRevStorage.read(DRAFTS)[b.eval('currentEditorChallenge.id')].code, '// explicitly merged');
    } finally { da.window.close(); db.window.close(); }
  });
}

// Optional real-browser suite. The caller owns the browser and a server serving
// the existing dashboard; this suite creates/closes an isolated browser context.
async function runTwoTabBrowserChecks(browser, url) {
  const context = await browser.newContext();
  try {
    const a = await context.newPage(), b = await context.newPage();
    await Promise.all([a.goto(url), b.goto(url)]);
    await Promise.all([a, b].map(page => page.waitForFunction(() => window.JavaRevStorage && typeof showView === 'function')));
    await Promise.all([a, b].map(page => page.evaluate(() => showView('notes-view'))));
    const warnings = await b.locator('#storage-warnings').textContent();
    await a.evaluate(() => JavaRevStorage.write('javarev_theme', 'light'));
    await b.waitForFunction(() => document.documentElement.getAttribute('data-theme') === 'light');
    assert.equal(await b.locator('#storage-warnings').textContent(), warnings);
    await a.locator('#project-notes-textarea').fill('Real tab A');
    await b.waitForFunction(() => JavaRevStorage.read('javarev_notes').project === 'Real tab A');
    assert.equal(await b.locator('#project-notes-textarea').inputValue(), '');
    await b.locator('#project-notes-textarea').fill('Real tab B');
    assert.equal(await b.evaluate(() => JavaRevStorage.read('javarev_notes').project), 'Real tab A');
    await b.reload();
    assert.ok(await b.evaluate(() => JavaRevStorage.recoveryText().includes('Real tab B')));
    await Promise.all([a, b].map(page => page.evaluate(() => showPracticeLab({ chapterName: null, subChapterName: null }))));
    const originalCode = await b.locator('#practice-code-textarea').inputValue();
    await a.locator('#practice-code-textarea').fill('// Real code A');
    await b.waitForFunction(() => JavaRevStorage.read('javarev_editor_drafts')[currentEditorChallenge.id]?.code === '// Real code A');
    assert.equal(await b.locator('#practice-code-textarea').inputValue(), originalCode);
    await b.locator('#practice-code-textarea').fill('// Real code B');
    assert.ok(await b.evaluate(() => JavaRevStorage.recoveryText().includes('// Real code B')));
    assert.match(await b.locator('#storage-warnings').textContent(), /conflict/i);
  } finally { await context.close(); }
}

if (require.main === module) {
  let passed = 0, failed = 0;
  const check = (name, fn) => {
    try { fn(); passed++; console.log(`PASS ${name}`); }
    catch (error) { failed++; console.error(`FAIL ${name}\n${error.stack}`); }
  };
  runVMChecks(check);
  runDOMChecks(check);
  console.log(`Storage checks: ${passed} passed, ${failed} failed. Real-browser suite is exported for a parent harness.`);
  process.exitCode = failed ? 1 : 0;
}

module.exports = { SharedStorage, createVMTab, runTwoTabBrowserChecks };
