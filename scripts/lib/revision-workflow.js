const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const vm = require('vm');
const { spawnSync } = require('child_process');

const DEFAULT_ROOT = path.resolve(__dirname, '..', '..');
const COPIED_DIRECTORIES = ['src', 'data', 'scripts', 'revision-dashboard'];
const OUTPUTS = [
  'revision-dashboard/data.js', 'revision-dashboard/questions.js',
  'revision-dashboard/practice.js', 'revision-dashboard/deep-challenges.js',
  'revision-dashboard/coverage-data.js', 'revision-dashboard/coverage.md',
  'revision-dashboard/suggestions-data.js', 'revision-dashboard/suggestions.md',
  'revision-dashboard/note-quality.json', 'revision-dashboard/note-quality.md',
  'data/code-questions.js', 'data/practice-expectations.js',
  'data/question-identities.json'
];
const STATE = 'revision-dashboard/revision-state.json';
const PROPOSAL = 'revision-dashboard/content-changes.json';
const REPORT = 'revision-dashboard/content-changes.md';
const LOG = 'data/accepted-suggestions.log';
const HISTORY = 'data/notes-history.json';
const GENERATED = new Set([...OUTPUTS, STATE, PROPOSAL, REPORT, LOG, HISTORY]);

function read(file) {
  return fs.existsSync(file) ? fs.readFileSync(file) : null;
}

function equal(a, b) {
  return a === null ? b === null : b !== null && a.equals(b);
}

function digest(bytes) {
  return crypto.createHash('sha256').update(bytes === null ? Buffer.from('(absent)') : bytes).digest('hex');
}

function checkedPath(root, relative) {
  const target = path.resolve(root, relative);
  const rel = path.relative(root, target);
  if (!rel || rel.startsWith('..') || path.isAbsolute(rel)) throw new Error(`Invalid revision path: ${relative}`);
  let current = root;
  for (const part of rel.split(path.sep)) {
    current = path.join(current, part);
    if (fs.existsSync(current) && fs.lstatSync(current).isSymbolicLink()) {
      throw new Error(`Revision paths must not follow symbolic links: ${relative}`);
    }
  }
  return target;
}

function walk(root, relative, result) {
  const dir = checkedPath(root, relative);
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const name = `${relative}/${entry.name}`;
    const file = checkedPath(root, name);
    if (entry.isDirectory()) walk(root, name, result);
    else if (entry.isFile()) result.set(name, fs.readFileSync(file));
  }
}

function capture(root) {
  const result = new Map();
  for (const dir of COPIED_DIRECTORIES) walk(root, dir, result);
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (entry.isFile() && (/\.md$/i.test(entry.name) || ['package.json', 'package-lock.json'].includes(entry.name))) {
      result.set(entry.name, fs.readFileSync(checkedPath(root, entry.name)));
    }
  }
  return result;
}

function fingerprint(files, filter = () => true) {
  const hash = crypto.createHash('sha256');
  for (const [name, bytes] of [...files].sort(([a], [b]) => a.localeCompare(b))) {
    if (filter(name)) hash.update(name).update('\0').update(digest(bytes)).update('\0');
  }
  return hash.digest('hex');
}

function inputFingerprint(files) {
  return fingerprint(files, name => !GENERATED.has(name));
}

function reviewFingerprint(files) {
  return fingerprint(files, name => name !== PROPOSAL && name !== REPORT);
}

function authoringFingerprint(files) {
  return fingerprint(files, name => name.startsWith('data/') && !GENERATED.has(name));
}

function atomicWrite(file, bytes) {
  if (bytes === null) {
    if (fs.existsSync(file)) fs.unlinkSync(file);
    return;
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const temp = `${file}.${crypto.randomUUID()}.revision-tmp`;
  try {
    fs.writeFileSync(temp, bytes, { flag: 'wx' });
    fs.renameSync(temp, file);
  } finally {
    if (fs.existsSync(temp)) fs.unlinkSync(temp);
  }
}

function journalPath(root) {
  return path.join(root, '.revision-work', 'publication.json');
}

function recover(root) {
  const file = journalPath(root);
  if (!fs.existsSync(file)) return;
  const journal = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (journal.version !== 1 || !Array.isArray(journal.entries)) throw new Error('Unrecognized revision recovery journal.');
  const entries = journal.entries.map(entry => ({
    file: checkedPath(root, entry.path),
    before: entry.before === null ? null : Buffer.from(entry.before, 'base64'),
    after: entry.after === null ? null : Buffer.from(entry.after, 'base64')
  }));
  const conflicts = entries.filter(entry => {
    const current = read(entry.file);
    return !equal(current, entry.before) && !equal(current, entry.after);
  });
  if (conflicts.length) {
    throw new Error(`Recovery preserved newer edits and stopped. Reconcile these paths before retrying: ${conflicts.map(e => path.relative(root, e.file)).join(', ')}. Journal: ${file}`);
  }
  for (const entry of entries.reverse()) {
    if (equal(read(entry.file), entry.after)) atomicWrite(entry.file, entry.before);
  }
  fs.unlinkSync(file);
}

function withLock(root, action) {
  const work = path.join(root, '.revision-work');
  fs.mkdirSync(work, { recursive: true });
  const file = path.join(work, 'lock.json');
  const token = crypto.randomUUID();
  if (fs.existsSync(file)) {
    const previous = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!Number.isInteger(previous.pid) || previous.pid <= 0) throw new Error(`Invalid revision lock: ${file}`);
    let alive = true;
    try { process.kill(previous.pid, 0); } catch (error) {
      if (error.code === 'ESRCH') alive = false;
      else throw error;
    }
    if (alive) throw new Error('Another revision is running. Wait for it to finish; no files were changed.');
    if (fs.readFileSync(file, 'utf8') === JSON.stringify(previous)) fs.unlinkSync(file);
  }
  const lock = JSON.stringify({ pid: process.pid, token });
  fs.writeFileSync(file, lock, { flag: 'wx' });
  try {
    recover(root);
    return action();
  } finally {
    if (fs.existsSync(file) && fs.readFileSync(file, 'utf8') === lock) fs.unlinkSync(file);
  }
}

function publish(root, baseline, updates, beforeWrite) {
  const entries = [];
  for (const [name, after] of updates) {
    const file = checkedPath(root, name);
    const before = baseline.get(name) || null;
    if (!equal(read(file), before)) throw new Error(`Publication conflict: ${name} changed while revising. Your edits were preserved.`);
    if (!equal(before, after)) entries.push({ path: name, before, after });
  }
  if (!entries.length) return;
  const journal = {
    version: 1,
    entries: entries.map(entry => ({
      path: entry.path,
      before: entry.before === null ? null : entry.before.toString('base64'),
      after: entry.after === null ? null : entry.after.toString('base64')
    }))
  };
  atomicWrite(journalPath(root), Buffer.from(JSON.stringify(journal)));
  try {
    for (const [index, entry] of entries.entries()) {
      if (beforeWrite) beforeWrite(entry.path, index);
      const file = checkedPath(root, entry.path);
      if (!equal(read(file), entry.before)) throw new Error(`Publication conflict: ${entry.path}`);
      atomicWrite(file, entry.after);
    }
    const expected = new Map(baseline);
    for (const [name, bytes] of updates) {
      if (bytes === null) expected.delete(name);
      else expected.set(name, bytes);
    }
    if (reviewFingerprint(capture(root)) !== reviewFingerprint(expected)) {
      throw new Error('Inputs changed during publication. The candidate was not committed; newer source edits are preserved.');
    }
    fs.unlinkSync(journalPath(root));
  } catch (error) {
    try { recover(root); } catch (recoveryError) {
      throw new Error(`${error.message}\n${recoveryError.message}`);
    }
    throw error;
  }
}

function runStep(stage, script, args = []) {
  console.log(`\n-- ${script}`);
  const result = spawnSync(process.execPath, [path.join(stage, 'scripts', script), ...args], {
    cwd: stage, stdio: 'inherit', env: { ...process.env, REVISION_STAGED: '1' }
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${script} failed${result.signal ? ` (${result.signal})` : ''}. The candidate was not published.`);
}

function readSuggestions(stage) {
  const bytes = read(path.join(stage, 'revision-dashboard', 'suggestions-data.js'));
  if (!bytes) throw new Error('Suggestion generation did not produce its dataset.');
  const context = {};
  vm.runInNewContext(`${bytes.toString('utf8')}\nthis.items = SUGGESTIONS.items;`, context, { timeout: 1000 });
  if (!Array.isArray(context.items)) throw new Error('Invalid suggestions dataset.');
  return JSON.parse(JSON.stringify(context.items));
}

function suggestionPatches(stage, items, keys) {
  if (!Array.isArray(keys) || keys.some(key => typeof key !== 'string') || new Set(keys).size !== keys.length) {
    throw new Error('Accepted suggestions must be distinct string keys.');
  }
  const patches = new Map();
  for (const key of keys) {
    const item = items.find(candidate => candidate.key === key);
    if (!item) throw new Error(`Suggestion no longer exists: ${key}`);
    const relative = String(item.file).replace(/\\/g, '/');
    if (!relative.startsWith('src/') || !relative.endsWith('.java')) throw new Error(`Invalid suggestion destination: ${relative}`);
    const file = checkedPath(stage, relative);
    const original = read(file);
    if (!original) throw new Error(`Suggestion source is missing: ${relative}`);
    const current = patches.has(relative) ? patches.get(relative) : original;
    const text = current.toString('utf8');
    if (item.kind === 'editorial') {
      const { validateReplacement, sourceFingerprint } = require('./note-enhancements');
      // Both sides of this comparison must normalize line endings identically. The
      // fingerprint was built from text that was read with CRLF normalized away, so
      // hashing the raw bytes here rejected every valid proposal on a Windows
      // checkout, where git restores CRLF.
      if (sourceFingerprint(original.toString('utf8')) !== item.sourceFingerprint) {
        throw new Error(`Enhancement source changed: ${relative}`);
      }
      patches.set(relative, Buffer.from(validateReplacement(text, item.before, item.after)));
      continue;
    }
    const newline = text.includes('\r\n') ? '\r\n' : '\n';
    const lines = text.split(/\r?\n/);
    let at = lines.findIndex(line => /^\s*(?:(?:public|final|abstract)\s+)*class\s+\w+/.test(line));
    if (at < 0) throw new Error(`No insertion point in ${relative}`);
    while (at > 0 && !lines[at - 1].trim()) at--;
    const added = ['', `// ${item.what} :- ${item.why}`, ...item.draft.slice(1).map(line => `// ${line}`)];
    patches.set(relative, Buffer.from([...lines.slice(0, at), ...added, ...lines.slice(at)].join(newline)));
  }
  return patches;
}

function pending(root) {
  const bytes = read(path.join(root, PROPOSAL));
  if (!bytes) return null;
  const proposal = JSON.parse(bytes.toString('utf8'));
  if (proposal.schemaVersion !== 1 || !proposal.proposalId || !proposal.inputFingerprint) {
    throw new Error('The pending review uses an older format. Run npm run revise to replace it.');
  }
  return proposal;
}

function assertUnchanged(root, before) {
  if (reviewFingerprint(capture(root)) !== reviewFingerprint(before)) {
    throw new Error('Source, content or configuration changed while revising. Your edits were preserved. Run npm run revise again.');
  }
}

function buildCandidate(root, baseline, options) {
  const stage = fs.mkdtempSync(path.join(root, '.revision-work', 'candidate-'));
  try {
    for (const dir of COPIED_DIRECTORIES) fs.mkdirSync(path.join(stage, dir), { recursive: true });
    for (const [name, bytes] of baseline) atomicWrite(checkedPath(stage, name), bytes);
    const patches = suggestionPatches(stage, options.suggestions || [], options.acceptedKeys || []);
    for (const [name, bytes] of patches) atomicWrite(checkedPath(stage, name), bytes);
    const expectedInputs = capture(stage);
    runStep(stage, 'parse-concepts.js', ['--propose', '--no-prompt']);
    const reviewBytes = read(path.join(stage, PROPOSAL));
    const review = reviewBytes ? JSON.parse(reviewBytes.toString('utf8')) : null;
    runStep(stage, 'parse-concepts.js');
    runStep(stage, 'derive-code-questions.js', options.force ? ['--quiet', '--force'] : ['--quiet']);
    runStep(stage, 'parse-concepts.js');
    const expectations = read(path.join(stage, 'data', 'practice-expectations.js'));
    runStep(stage, 'fill-practice-expectations.js', options.force ? ['--quiet', '--force'] : ['--quiet']);
    if (!equal(expectations, read(path.join(stage, 'data', 'practice-expectations.js')))) runStep(stage, 'parse-concepts.js');
    runStep(stage, 'coverage.js', ['--quiet']);
    runStep(stage, 'suggest.js');
    runStep(stage, options.full ? 'verify.js' : 'check-structure.js');
    const after = capture(stage);
    if (inputFingerprint(after) !== inputFingerprint(expectedInputs)) {
      throw new Error('A candidate generator changed source or authored inputs. No live source files were touched.');
    }
    assertUnchanged(root, baseline);
    const outputs = new Map(OUTPUTS.map(name => [name, read(path.join(stage, name))]));
    return { stage, review, outputs, patches, suggestions: readSuggestions(stage) };
  } catch (error) {
    fs.rmSync(stage, { recursive: true, force: true });
    throw error;
  }
}

// Publish the approved candidate. Returns whether anything actually changed, so a
// repeated approval of an unchanged candidate can be reported as a no-op instead of
// rewriting identical files.
function savePublication(root, baseline, candidate, profile) {
  const updates = new Map(candidate.outputs);
  for (const [name, bytes] of candidate.patches) updates.set(name, bytes);
  if (candidate.patches.size) {
    const previous = baseline.get(LOG) || Buffer.alloc(0);
    const record = `${new Date().toISOString()} Approved insertions: ${[...candidate.patches.keys()].join(', ')}\n`;
    updates.set(LOG, Buffer.concat([previous, Buffer.from(record)]));
    const history = baseline.has(HISTORY) ? JSON.parse(baseline.get(HISTORY).toString('utf8')) : { schemaVersion: 1, revisions: [] };
    if (history.schemaVersion !== 1 || !Array.isArray(history.revisions)) throw new Error('Unsupported notes history. Original notes were not changed.');
    for (const [file, bytes] of candidate.patches) {
      history.revisions.push({ file, before: baseline.get(file).toString('utf8'), after: bytes.toString('utf8'),
        beforeHash: digest(baseline.get(file)), afterHash: digest(bytes) });
    }
    updates.set(HISTORY, Buffer.from(JSON.stringify(history, null, 2) + '\n'));
  }
  updates.set(STATE, Buffer.from(JSON.stringify({
    schemaVersion: 1,
    // Deterministic on purpose: the state file is part of the approved baseline, so it
    // must change only when the approved content changes, never on every run. The
    // validation profile is deliberately not recorded here - a structural refresh would
    // then rewrite this file on every ordinary revise and create meaningless churn.
    generationId: fingerprint(candidate.outputs),
    authoringFingerprint: authoringFingerprint(baseline)
  }, null, 2) + '\n'));
  updates.set(PROPOSAL, null);
  updates.set(REPORT, null);
  const changed = [...updates].some(([name, bytes]) => !equal(baseline.get(name) || null, bytes));
  assertUnchanged(root, baseline);
  publish(root, baseline, updates);
  return changed;
}

function execute(options = {}) {
  const root = options.root || DEFAULT_ROOT;
  return withLock(root, () => {
    const baseline = capture(root);
    const proposal = options.mode === 'approve' ? pending(root) : null;
    if (options.proposalId && proposal && options.proposalId !== proposal.proposalId) {
      throw new Error('This review has been replaced or discarded. Reload the review before applying.');
    }
    if (proposal && proposal.inputFingerprint !== reviewFingerprint(baseline)) {
      throw new Error('The reviewed inputs have changed. Nothing was applied; run npm run revise and review the new candidate.');
    }
    if ((options.acceptedKeys || []).length && !proposal) {
      throw new Error('No review is pending, so there is nothing to insert. If this candidate was already applied, no further action is needed; otherwise run npm run revise to review it again.');
    }
    const candidate = buildCandidate(root, baseline, {
      full: options.mode === 'approve' || options.mode === 'check',
      acceptedKeys: options.acceptedKeys,
      force: options.force,
      suggestions: proposal ? proposal.suggestions : []
    });
    try {
      if (options.mode === 'check') {
        console.log('\nCandidate checks completed. No dashboard, notes or caches were published.');
        return { pending: false, published: false };
      }
      if (options.mode === 'approve') {
        const changed = savePublication(root, baseline, candidate, 'full');
        if (changed) console.log('\nReviewed candidate published. Source insertions, if selected, were included.');
        else console.log('\nThis candidate was already published, so nothing changed.');
        return { pending: false, published: true, alreadyApplied: !changed };
      }
      const previousState = baseline.has(STATE) ? JSON.parse(baseline.get(STATE).toString('utf8')) : null;
      const changedAuthoring = !previousState || previousState.authoringFingerprint !== authoringFingerprint(baseline);
      const oldSuggestions = baseline.has('revision-dashboard/suggestions-data.js') ? readSuggestions(root) : [];
      const suggestionChange = JSON.stringify(oldSuggestions) !== JSON.stringify(candidate.suggestions);
      if ((candidate.review && candidate.review.awaitingReview) || changedAuthoring || (suggestionChange && candidate.suggestions.length)) {
        const review = {
          totals: {}, changes: [], ...(candidate.review || {}),
          schemaVersion: 1, proposalId: crypto.randomUUID(),
          inputFingerprint: reviewFingerprint(baseline), generated: new Date().toISOString(),
          awaitingReview: true,
          suggestions: candidate.suggestions,
          authoringChanged: changedAuthoring,
          ledger: candidate.outputs.get('revision-dashboard/coverage.md').toString('utf8')
          ,noteReview: candidate.outputs.get('revision-dashboard/note-quality.md')?.toString('utf8') || ''
        };
        const report = read(path.join(candidate.stage, REPORT)) || Buffer.from('# Revision candidate\n\nReviewed content/configuration or suggestions changed. Open `npm run revise` to review.\n');
        publish(root, baseline, new Map([[PROPOSAL, Buffer.from(JSON.stringify(review, null, 2) + '\n')], [REPORT, report]]));
        console.log('\nCandidate ready for review. The published dashboard and source notes are unchanged.');
        return { pending: true, proposalId: review.proposalId, published: false };
      }
      savePublication(root, baseline, candidate, 'structural');
      console.log('\nDashboard refreshed with structural checks. Native checks run on approval or npm run check.');
      return { pending: false, published: true };
    } finally {
      fs.rmSync(candidate.stage, { recursive: true, force: true });
    }
  });
}

function discard(root = DEFAULT_ROOT, proposalId) {
  return withLock(root, () => {
    const proposal = pending(root);
    if (!proposal || proposal.proposalId !== proposalId) throw new Error('The review changed. Reload before discarding.');
    const baseline = capture(root);
    publish(root, baseline, new Map([[PROPOSAL, null], [REPORT, null]]));
  });
}

module.exports = {
  execute, discard, pending, read, equal, capture, fingerprint, inputFingerprint,
  reviewFingerprint, authoringFingerprint, suggestionPatches, publish, recover, withLock, atomicWrite,
  OUTPUTS, GENERATED, DEFAULT_ROOT
};
