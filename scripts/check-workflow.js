const assert = require('assert/strict');
const fs = require('fs');
const path = require('path');
const os = require('os');
const workflow = require('./lib/revision-workflow');

const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'javarev-workflow-'));
let passed = 0;

function fixture(name) {
  const root = path.join(temp, name);
  for (const dir of ['src', 'scripts', 'data', 'revision-dashboard']) fs.mkdirSync(path.join(root, dir), { recursive: true });
  // The stub generator computes an editorial fingerprint with the real helper, so the
  // staged tree needs the real module - which is the point: the test must exercise the
  // same normalization the production path uses, not a copy of it.
  fs.mkdirSync(path.join(root, 'scripts', 'lib'), { recursive: true });
  for (const module of ['note-enhancements.js', 'content-identity.js', 'note-rules.js']) {
    fs.copyFileSync(path.join(__dirname, 'lib', module), path.join(root, 'scripts', 'lib', module));
  }
  fs.writeFileSync(path.join(root, 'src', 'Lesson.java'), '// Original note\n// authored\npublic class Lesson {}\n');
  const producer = `
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'src', 'Lesson.java'), 'utf8');
const name = path.basename(__filename);
if (source.includes('FAIL') && name === 'verify.js') process.exit(1);
if (source.includes('WRITE_SOURCE') && name === 'derive-code-questions.js') fs.appendFileSync(path.join(root, 'src', 'Lesson.java'), '// illegal write');
if (name === 'derive-code-questions.js') {
  fs.writeFileSync(path.join(root, 'data', 'code-questions.js'), fs.readFileSync(path.join(root, 'revision-dashboard', 'data.js')));
}
if (name === 'fill-practice-expectations.js' && process.argv.includes('--force')) {
  fs.writeFileSync(path.join(root, 'data', 'practice-expectations.js'), 'forced practice refresh');
}
if (name === 'parse-concepts.js' && process.argv.includes('--propose') && source.includes('// authored')) {
  fs.writeFileSync(path.join(root, 'revision-dashboard', 'content-changes.json'), JSON.stringify({awaitingReview:true,totals:{},changes:[]}));
  fs.writeFileSync(path.join(root, 'revision-dashboard', 'content-changes.md'), '# Candidate\\n');
}
if (name === 'parse-concepts.js') {
  for (const file of ['data.js','questions.js','practice.js','deep-challenges.js']) fs.writeFileSync(path.join(root,'revision-dashboard',file), source);
}
if (name === 'coverage.js') {
  fs.writeFileSync(path.join(root,'revision-dashboard','coverage.md'), '# Current ledger\\n');
  fs.writeFileSync(path.join(root,'revision-dashboard','coverage-data.js'), 'const COVERAGE = {};');
}
if (name === 'suggest.js') {
  const items = ['one','two'].map(key => ({key,file:'src/Lesson.java',what:key,why:'Additional explanation',draft:['Title','Example '+key]}));
  // An editorial proposal, whose fingerprint is built exactly the way the real
  // catalogue builds it: from text with CRLF normalized away. The workflow must
  // compare it the same way, or every proposal fails on a Windows checkout.
  const { sourceFingerprint } = require(path.join(root, 'scripts', 'lib', 'note-enhancements.js'));
  items.push({ key: 'editorial|src/Lesson.java|stub-rule', kind: 'editorial', file: 'src/Lesson.java',
    what: 'Clarify the note', why: 'The wording is vague', category: 'clarification',
    before: '// Original note', after: '// Clarified note',
    sourceFingerprint: sourceFingerprint(source) });
  fs.writeFileSync(path.join(root,'revision-dashboard','suggestions-data.js'),'const SUGGESTIONS = '+JSON.stringify({items})+';');
  fs.writeFileSync(path.join(root,'revision-dashboard','suggestions.md'),'# Suggestions\\n');
}
`;
  for (const file of ['derive-code-questions.js', 'parse-concepts.js', 'fill-practice-expectations.js', 'coverage.js', 'suggest.js', 'verify.js', 'check-structure.js']) {
    fs.writeFileSync(path.join(root, 'scripts', file), producer);
  }
  return root;
}

function test(name, action) {
  action();
  passed++;
  console.log(`PASS: ${name}`);
}

try {
  test('public generation commands keep using the shared workflow adapters', () => {
    const { scripts } = require('../package.json');
    assert.equal(scripts.revise, 'node scripts/revise.js');
    assert.equal(scripts['revise:cli'], 'node scripts/revise.js --cli');
    assert.equal(scripts.approve, 'node scripts/approve.js');
    assert.equal(scripts.check, 'node scripts/generate.js --check');
    for (const command of ['generate', 'derive:code', 'generate:all', 'fill:practice']) {
      assert.match(scripts[command], /^node scripts\/generate\.js(?: --propose)?$/);
    }
  });
  test('publication restores all outputs after a write failure', () => {
    const root = fixture('rollback');
    const baseline = workflow.capture(root);
    const updates = new Map([['revision-dashboard/data.js', Buffer.from('new')], ['src/Lesson.java', Buffer.from('inserted')]]);
    assert.throws(() => workflow.publish(root, baseline, updates, (name, index) => { if (index === 1) throw new Error('failed write'); }), /failed write/);
    assert.equal(fs.existsSync(path.join(root, 'revision-dashboard', 'data.js')), false);
    assert.deepEqual(workflow.read(path.join(root, 'src', 'Lesson.java')), baseline.get('src/Lesson.java'));
  });
  test('recovery preserves concurrent human edits and retains its journal', () => {
    const root = fixture('conflict');
    const baseline = workflow.capture(root);
    const source = path.join(root, 'src', 'Lesson.java');
    const updates = new Map([['revision-dashboard/data.js', Buffer.from('new')], ['src/Lesson.java', Buffer.from('inserted')]]);
    assert.throws(() => workflow.publish(root, baseline, updates, (name, index) => {
      if (index === 1) { fs.writeFileSync(source, 'human edit'); throw new Error('write interrupted'); }
    }), /preserved newer edits/);
    assert.equal(fs.readFileSync(source, 'utf8'), 'human edit');
    assert.equal(fs.existsSync(path.join(root, '.revision-work', 'publication.json')), true);
    fs.writeFileSync(source, baseline.get('src/Lesson.java'));
    workflow.recover(root);
    assert.equal(fs.existsSync(path.join(root, 'revision-dashboard', 'data.js')), false);
  });
  test('a publication conflict never restores the live source snapshot', () => {
    const root = fixture('preflight');
    const baseline = workflow.capture(root);
    fs.writeFileSync(path.join(root, 'src', 'Lesson.java'), 'new personal note');
    assert.throws(() => workflow.publish(root, baseline, new Map([['src/Lesson.java', Buffer.from('old patch')]])), /conflict/);
    assert.equal(fs.readFileSync(path.join(root, 'src', 'Lesson.java'), 'utf8'), 'new personal note');
  });
  test('one project lock prevents concurrent generation', () => {
    const root = fixture('lock');
    workflow.withLock(root, () => assert.throws(() => workflow.withLock(root, () => {}), /Another revision/));
    assert.equal(fs.existsSync(path.join(root, '.revision-work', 'lock.json')), false);
  });
  test('source changes during publication prevent committing stale outputs', () => {
    const root = fixture('mid-publication');
    const baseline = workflow.capture(root);
    const source = path.join(root, 'src', 'Lesson.java');
    assert.throws(() => workflow.publish(root, baseline, new Map([['revision-dashboard/data.js', Buffer.from('candidate')]]), () => {
      fs.appendFileSync(source, '// saved during publication\n');
    }), /Inputs changed during publication/);
    assert.match(fs.readFileSync(source, 'utf8'), /saved during publication/);
    assert.equal(fs.existsSync(path.join(root, 'revision-dashboard', 'data.js')), false);
  });
  test('all selected insertions are prepared together without writing source', () => {
    const root = fixture('patches');
    const before = workflow.read(path.join(root, 'src', 'Lesson.java'));
    const items = ['one', 'two'].map(key => ({ key, file: 'src/Lesson.java', what: key, why: 'Explained', draft: ['Title', 'Example'] }));
    const patches = workflow.suggestionPatches(root, items, ['one', 'two']);
    assert.match(patches.get('src/Lesson.java').toString(), /one :- Explained/);
    assert.match(patches.get('src/Lesson.java').toString(), /two :- Explained/);
    assert.deepEqual(workflow.read(path.join(root, 'src', 'Lesson.java')), before);
    assert.throws(() => workflow.suggestionPatches(root, items, ['one', 'missing']), /no longer exists/);
  });
  test('check runs the complete candidate pipeline without publication', () => {
    const root = fixture('check');
    const before = workflow.fingerprint(workflow.capture(root));
    const result = workflow.execute({ root, mode: 'check' });
    assert.equal(result.published, false);
    assert.equal(workflow.fingerprint(workflow.capture(root)), before);
  });
  test('generation cannot modify live notes even if a generator writes source', () => {
    const root = fixture('source-guard');
    const source = path.join(root, 'src', 'Lesson.java');
    fs.appendFileSync(source, '// WRITE_SOURCE\n');
    const before = fs.readFileSync(source);
    assert.throws(() => workflow.execute({ root, mode: 'check' }), /changed source/);
    assert.deepEqual(fs.readFileSync(source), before);
  });
  test('review binds approval to the exact inputs and discard preserves edits', () => {
    const root = fixture('stale');
    const result = workflow.execute({ root, mode: 'propose' });
    assert.equal(result.pending, true);
    const source = path.join(root, 'src', 'Lesson.java');
    fs.appendFileSync(source, '// New personal edit\n');
    assert.throws(() => workflow.execute({ root, mode: 'approve', proposalId: result.proposalId }), /reviewed inputs have changed/);
    workflow.discard(root, result.proposalId);
    assert.match(fs.readFileSync(source, 'utf8'), /New personal edit/);
    assert.equal(fs.existsSync(path.join(root, 'revision-dashboard', 'data.js')), false);
  });
  test('failed approval leaves selected source insertions and caches unpublished', () => {
    const root = fixture('failed-approval');
    const source = path.join(root, 'src', 'Lesson.java');
    fs.appendFileSync(source, '// FAIL\n');
    const before = fs.readFileSync(source);
    const result = workflow.execute({ root, mode: 'propose' });
    assert.throws(() => workflow.execute({ root, mode: 'approve', proposalId: result.proposalId, acceptedKeys: ['one', 'two'] }), /verify.js failed/);
    assert.deepEqual(fs.readFileSync(source), before);
    assert.equal(fs.existsSync(path.join(root, 'revision-dashboard', 'data.js')), false);
    assert.equal(workflow.pending(root).proposalId, result.proposalId);
  });
  test('changing a consumed cache invalidates a pending review', () => {
    const root = fixture('cache-review');
    const result = workflow.execute({ root, mode: 'propose' });
    fs.writeFileSync(path.join(root, 'data', 'code-questions.js'), 'replacement cache');
    assert.throws(() => workflow.execute({ root, mode: 'approve', proposalId: result.proposalId }), /reviewed inputs have changed/);
  });
  test('forced generation refreshes practice expectations too', () => {
    const root = fixture('force');
    workflow.execute({ root, mode: 'approve', force: true });
    assert.equal(fs.readFileSync(path.join(root, 'data', 'practice-expectations.js'), 'utf8'), 'forced practice refresh');
  });
  test('successful approval is idempotent and accepts two patches in one file', () => {
    const root = fixture('success');
    const result = workflow.execute({ root, mode: 'propose' });
    workflow.execute({ root, mode: 'approve', proposalId: result.proposalId, acceptedKeys: ['one', 'two'] });
    const source = fs.readFileSync(path.join(root, 'src', 'Lesson.java'), 'utf8');
    assert.match(source, /one :- Additional explanation/);
    assert.match(source, /two :- Additional explanation/);
    assert.equal(fs.readFileSync(path.join(root, 'data', 'code-questions.js'), 'utf8'), source);
    const before = workflow.fingerprint(workflow.capture(root));
    assert.equal(workflow.execute({ root, mode: 'approve', proposalId: result.proposalId }).alreadyApplied, true);
    assert.equal(workflow.fingerprint(workflow.capture(root)), before);
  });
  test('an editorial proposal applies to a CRLF note and preserves its line endings', () => {
    // CRLF is what git restores on a Windows checkout, where core.autocrlf is true.
    // The catalogue fingerprint is built from LF-normalized text, so comparing it
    // against raw bytes rejected every proposal with "Enhancement source changed".
    const root = fixture('crlf-editorial');
    const source = path.join(root, 'src', 'Lesson.java');
    fs.writeFileSync(source, '// Original note\r\n// authored\r\npublic class Lesson {}\r\n');
    const result = workflow.execute({ root, mode: 'propose' });
    const proposal = workflow.pending(root);
    const editorial = proposal.suggestions.find(item => item.kind === 'editorial');
    assert.ok(editorial, 'the stub produced an editorial suggestion');
    workflow.execute({ root, mode: 'approve', proposalId: result.proposalId, acceptedKeys: [editorial.key] });
    const after = fs.readFileSync(source, 'utf8');
    assert.match(after, /\/\/ Clarified note/, 'the replacement was applied');
    assert.ok(after.includes('\r\n'), 'the file keeps its CRLF line endings');
    assert.ok(!/[^\r]\n/.test(after), 'no bare LF was introduced');
  });
  test('outstanding suggestions can be reopened for approval on request', () => {
    const root = fixture('reopen');
    // Clear the marker that makes the stub report an authored change, before anything is
    // generated, so the suggestion list is stable across runs.
    fs.writeFileSync(path.join(root, 'src', 'Lesson.java'), '// Original note\npublic class Lesson {}\n');
    const first = workflow.execute({ root, mode: 'propose' });
    workflow.execute({ root, mode: 'approve', proposalId: first.proposalId });
    // An ordinary run raises no review. The suggestions are still visible in the
    // dashboard, but applying one needs a pending review, so there was no way back.
    assert.equal(workflow.execute({ root, mode: 'propose' }).pending, false,
      'an unchanged suggestion list does not raise a review');
    const reopened = workflow.execute({ root, mode: 'propose', reviewSuggestions: true });
    assert.equal(reopened.pending, true, 'an explicit request reopens outstanding suggestions');
    assert.ok((workflow.pending(root).suggestions || []).length > 0, 'the reopened review carries them');
  });
  test('a repeated apply never inserts the same suggestion twice', () => {
    const root = fixture('repeat');
    const result = workflow.execute({ root, mode: 'propose' });
    workflow.execute({ root, mode: 'approve', proposalId: result.proposalId, acceptedKeys: ['one'] });
    const after = fs.readFileSync(path.join(root, 'src', 'Lesson.java'), 'utf8');
    assert.equal((after.match(/one :- Additional explanation/g) || []).length, 1);
    assert.throws(
      () => workflow.execute({ root, mode: 'approve', proposalId: result.proposalId, acceptedKeys: ['one'] }),
      /No review is pending/
    );
    assert.equal(fs.readFileSync(path.join(root, 'src', 'Lesson.java'), 'utf8'), after);
  });
  console.log(`\n${passed} workflow regressions passed.`);
} finally {
  fs.rmSync(temp, { recursive: true, force: true });
}
