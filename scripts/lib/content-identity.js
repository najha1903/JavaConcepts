const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const hash = value => crypto.createHash('sha256').update(typeof value === 'string' ? value : JSON.stringify(value)).digest('hex');
const text = value => String(value || '').replace(/\r\n?/g, '\n').trim();
function identityKey(q) {
  // Option order and marked answers are versioned content, not identity. Different
  // alternatives under the same stem are genuinely different questions.
  return hash([text(q.topicPath || q.chapter), q.kind || q.type, text(q.question),
    text(q.code), (q.options || []).map(text).sort()]);
}
function contentVersion(q) {
  const answers = Array.isArray(q.answer) ? q.answer : [q.answer];
  const correct = q.options ? answers.map(i => q.options[i]).map(text).sort() : answers;
  return hash([q.type, text(q.question), text(q.code), (q.options || []).map(text).sort(),
    correct, q.modelAnswer || null, q.keyPoints || null, q.explanation || null,
    q.outputExpectation ? [q.outputExpectation.kind, q.outputExpectation.value, q.outputExpectation.normalization || 'terminal-newline'] : null,
    q.options ? Object.entries(q.whyByOption || {}).map(([i, why]) => [q.options[i], why]).sort() : null]);
}

function createRegistry(file, previousBank = {}) {
  const registry = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : { schemaVersion: 1, entries: {}, permanent: {} };
  if (registry.schemaVersion !== 1 || !registry.entries) throw new Error('Unsupported question identity registry.');
  registry.permanent = registry.permanent || {};
  // Bootstrap from the last published bank BEFORE replacing it. Never recompute an
  // old positional id from the current source order.
  for (const questions of Object.values(previousBank)) {
    for (const q of questions || []) {
      if (!q.qid || q.kind === 'true-false') continue;
      const key = identityKey(q);
      if (!registry.entries[key]) registry.entries[key] = { qid: q.qid, legacyQids: q.legacyQids || [] };
    }
  }
  const emitted = new Set();
  function assign(q) {
    const key = identityKey(q);
    const permanent = q.permanentId;
    if (permanent && !/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(permanent)) throw new Error(`Invalid permanent question id: ${permanent}`);
    let entry = permanent && registry.permanent[permanent] || registry.entries[key];
    if (!entry) entry = { qid: permanent ? `authored-${permanent}` : `q-${key.slice(0, 24)}`, legacyQids: [] };
    if (permanent) {
      const prior = registry.entries[key];
      if (prior && prior.qid !== entry.qid) entry.legacyQids = [...new Set([...entry.legacyQids, prior.qid, ...prior.legacyQids])].sort();
      registry.permanent[permanent] = entry;
    }
    registry.entries[key] = entry;
    if (emitted.has(entry.qid)) throw new Error(`Duplicate permanent question identity: ${entry.qid}`);
    emitted.add(entry.qid);
    return { ...q, qid: entry.qid, legacyQids: [...entry.legacyQids].filter(id => id !== entry.qid).sort(), contentVersion: contentVersion(q) };
  }
  function save() {
    const ordered = object => Object.fromEntries(Object.entries(object).sort(([a], [b]) => a.localeCompare(b)));
    const output = JSON.stringify({ schemaVersion: 1, entries: ordered(registry.entries), permanent: ordered(registry.permanent) }, null, 2) + '\n';
    fs.mkdirSync(path.dirname(file), { recursive: true });
    if (!fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== output) fs.writeFileSync(file, output);
  }
  return { assign, save };
}

function frameworkFingerprint(root, files) {
  return hash(files.slice().sort().map(file => [file.replace(/\\/g, '/'), fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n?/g, '\n')]));
}
module.exports = { hash, identityKey, contentVersion, createRegistry, frameworkFingerprint };
