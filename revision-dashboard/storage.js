/* Local, project-specific persistence. No account or network storage is used. */
(function (root) {
  'use strict';
  const PROJECT = 'JavaConcepts/JavaRevise';
  const VERSION = 2;
  const KEY = 'javarev_state_v2';
  const BACKUP = 'javarev_backup_v2';
  const JOURNAL = 'javarev_journal_v1:';
  const writer = root.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
  let sequence = 0;
  let clock = 0;
  let metadata = { applied: [], revisions: {}, generation: 'initial', conflicts: [] };
  const pending = [];
  const reads = new Map();
  const snapshots = new WeakMap();
  const listeners = new Set();
  let records = [];
  // The exact cache text this tab last read. persist() compares it before writing, so a
  // save that was suspended while another tab committed cannot overwrite newer state.
  let cacheRaw = null;
  // False until this tab has built its state from storage once. Only that first pass
  // recovers from the journal; later refreshes are ordinary syncs.
  let established = false;
  const defaults = {
    javarev_revised_topics: {}, javarev_quiz_history: [], javarev_practice_status: {},
    javarev_notes: { project: '', topics: {} }, javarev_question_history: {},
    javarev_anki_srs: {}, javarev_quiz_progress: null, javarev_theme: 'dark',
    javarev_editor_drafts: {}, javarev_archived_evidence: {}
  };
  const warnings = new Set();
  let state;
  let protectedRaw = false;
  const clone = value => JSON.parse(JSON.stringify(value));
  const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const count = value => Number.isSafeInteger(value) && value >= 0;
  const number = value => typeof value === 'number' && Number.isFinite(value) && value >= 0;
  function warn(message) {
    warnings.add(message);
    const host = root.document && root.document.getElementById('storage-warnings');
    if (host) {
      host.hidden = false;
      host.textContent = [...warnings].join(' ');
    }
  }
  function safeTree(value, depth = 0) {
    if (depth > 30) throw new Error('Backup nesting is too deep.');
    if (value && typeof value === 'object') {
      for (const [key, item] of Object.entries(value)) {
        if (['__proto__', 'constructor', 'prototype'].includes(key)) throw new Error('Unsafe object key.');
        safeTree(item, depth + 1);
      }
    }
  }
  function validRecord(h) {
    return object(h) && count(h.seen) && count(h.correct) && count(h.wrong) &&
      h.correct + h.wrong <= h.seen &&
      ['lastSeenMs', 'lastCorrectMs', 'dueMs', 'intervalDays'].every(k => h[k] === undefined || number(h[k])) &&
      (h.contentVersion === undefined || typeof h.contentVersion === 'string') &&
      (h.sessions === undefined || (Array.isArray(h.sessions) && h.sessions.every(s => typeof s === 'string')));
  }
  function validSession(s) {
    return s === null || (object(s) && Array.isArray(s.questionIds) && s.questionIds.length > 0 &&
      s.questionIds.length <= 10000 && s.questionIds.every(q => typeof q === 'string') &&
      new Set(s.questionIds).size === s.questionIds.length && count(s.index) && s.index < s.questionIds.length &&
      (s.sessionId === undefined || typeof s.sessionId === 'string') &&
      (s.label === undefined || typeof s.label === 'string') &&
      (s.originView === undefined || typeof s.originView === 'string') &&
      (s.versions === undefined || (Array.isArray(s.versions) && s.versions.every(v => v === null || typeof v === 'string'))) &&
      Array.isArray(s.answered) && s.answered.length <= s.questionIds.length &&
      s.answered.every(a => a === null || (object(a) && typeof a.isCorrect === 'boolean' &&
        (typeof a.selected === 'string' || count(a.selected) ||
          (Array.isArray(a.selected) && a.selected.every(count))))) &&
      (s.inputs === undefined || (object(s.inputs) && Object.values(s.inputs).every(validInput))));
  }
  function validInput(d) {
    return object(d) && (d.option === null || count(d.option)) &&
      Array.isArray(d.options) && d.options.every(count) &&
      typeof d.predict === 'string' && typeof d.interview === 'string' &&
      typeof d.revealed === 'boolean' && Array.isArray(d.points) && d.points.every(count);
  }
  const entryValidators = {
    javarev_revised_topics: value => typeof value === 'boolean',
    javarev_practice_status: value => typeof value === 'boolean' || (object(value) && typeof value.kind === 'string'),
    javarev_question_history: validRecord,
    javarev_editor_drafts: value => object(value) && typeof value.code === 'string',
    javarev_anki_srs: value => object(value) && number(value.due) &&
      ['interval', 'ease', 'reps', 'lapses'].every(k => value[k] === undefined || number(value[k])),
    javarev_archived_evidence: object
  };
  function validValue(key, value) {
    if (entryValidators[key]) return object(value) && Object.values(value).every(entryValidators[key]);
    if (key === 'javarev_theme') return value === 'dark' || value === 'light';
    if (key === 'javarev_quiz_progress') return validSession(value);
    if (key === 'javarev_notes') return object(value) && typeof value.project === 'string' &&
      object(value.topics) && Object.values(value.topics).every(v => typeof v === 'string');
    if (key === 'javarev_quiz_history') return Array.isArray(value) && value.every(h =>
      object(h) && typeof h.chapter === 'string' && count(h.correct) && count(h.total) &&
      h.correct <= h.total && (h.sessionId === undefined || typeof h.sessionId === 'string'));
    return false;
  }
  function envelope(data) {
    return { project: PROJECT, version: VERSION, exportedAt: new Date().toISOString(), data };
  }
  const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  const at = (data, path) => path.reduce((value, key) => value?.[key], data) ?? null;
  const revision = path => metadata.revisions[JSON.stringify(path)] ||
    `${metadata.generation}:${JSON.stringify(at(state, path))}`;
  function assign(path, value) {
    let target = state;
    for (const key of path.slice(0, -1)) target = target[key];
    if (value === null && path.length > 1) delete target[path.at(-1)];
    else target[path.at(-1)] = clone(value);
  }
  function validPath(path) {
    if (!Array.isArray(path) || !path.every(p => typeof p === 'string' &&
        !['__proto__', 'constructor', 'prototype'].includes(p))) return false;
    if (path.length === 1) return Object.hasOwn(defaults, path[0]);
    if (path[0] === 'javarev_notes') return (path.length === 2 && path[1] === 'project') ||
      (path.length === 3 && path[1] === 'topics');
    return path.length === 2 && Object.hasOwn(entryValidators, path[0]);
  }
  function validateRecord(record) {
    safeTree(record);
    if (!object(record) || typeof record.id !== 'string' || !count(record.clock)) throw new Error('Invalid journal');
    if (record.replace) {
      parseEnvelope(JSON.stringify(envelope(record.replace)));
      if (typeof record.basis !== 'string') throw new Error('Invalid replacement');
    } else {
      if (!Array.isArray(record.patches)) throw new Error('Invalid patches');
      for (const patch of record.patches) {
        if (!validPath(patch.path) || typeof patch.expected !== 'string' || patch.value === undefined) throw new Error('Invalid patch');
        const [key, field] = patch.path;
        const valid = patch.path.length === 1 ? validValue(key, patch.value) :
          key === 'javarev_notes' ? (typeof patch.value === 'string' || (field === 'topics' && patch.value === null)) :
            patch.value === null || entryValidators[key](patch.value);
        if (!valid) throw new Error('Invalid patch value');
      }
    }
    return record;
  }
  function conflict() {
    warn('Changes from another tab conflict with a save. Your text has not been replaced. Recoverable versions are in Download recovery versions; review them before saving again.');
  }
  function applyRecord(record, options = {}) {
    if (metadata.applied.includes(record.id)) return;
    let rejected = false;
    if (record.replace) {
      if (record.basis !== JSON.stringify({ state, metadata })) rejected = true;
      else {
        state = clone(record.replace);
        metadata.generation = record.id;
        metadata.revisions = {};
      }
    } else {
      for (const patch of record.patches) {
        if (revision(patch.path) !== patch.expected) {
          if (!equal(at(state, patch.path), patch.value)) rejected = true;
          // During recovery the journal is append-only history, so the later write wins
          // and the record is still listed as a conflict. Live saves keep the strict
          // check, because there the point is to notice the clash and warn rather than
          // to choose silently. Without this, a cache written by a tab whose save was
          // suspended discarded every newer record: the cache's revision map no longer
          // matched, so replay rejected all of them and an older note came back.
          if (options.recovery) {
            assign(patch.path, patch.value);
            metadata.revisions[JSON.stringify(patch.path)] = record.id;
          }
          continue;
        }
        assign(patch.path, patch.value);
        metadata.revisions[JSON.stringify(patch.path)] = record.id;
      }
    }
    metadata.applied.push(record.id);
    if (rejected) metadata.conflicts.push(record.id);
  }
  /* KEY is a materialized cache, not an atomic read/modify/write lock. Every save
     first appends a uniquely named, immutable journal record. Refresh replays any
     records a racing cache writer omitted, checking each field's base revision.
     Journals are bounded by size rather than kept forever: the newest recoverable
     versions and every conflicted record survive, and older ones are dropped once the
     journal passes its budget. Rejected attempts and overwritten cache versions stay
     recoverable while they are inside that window. Storage quota/eviction, disabled
     storage, or clients predating this protocol cannot be made lossless by
     localStorage. No cross-tab ordering is promised for simultaneous edits of the same
     field; the rejected version is preserved. */
  function refresh() {
    load();
    // Recovery semantics apply only while establishing this tab's state from storage,
    // which is the first refresh. Later refreshes are syncs before a save, and there the
    // strict revision check is what turns a clash into a warning instead of a silent
    // choice between two versions.
    const recovering = !established;
    try {
      const raw = root.localStorage.getItem(KEY);
      cacheRaw = raw;
      if (raw) {
        const parsed = parseEnvelope(raw);
        const meta = parsed.storage;
        if (meta && (!Array.isArray(meta.applied) || !meta.applied.every(x => typeof x === 'string') ||
            !object(meta.revisions) || !Object.values(meta.revisions).every(x => typeof x === 'string') ||
            typeof meta.generation !== 'string' || !Array.isArray(meta.conflicts) ||
            !meta.conflicts.every(x => typeof x === 'string'))) throw new Error('Invalid storage metadata');
        state = parsed.data;
        metadata = meta || { applied: [], revisions: {}, generation: 'initial', conflicts: [] };
        protectedRaw = false;
      }
      const found = [];
      for (let i = 0; i < root.localStorage.length; i++) {
        const key = root.localStorage.key(i);
        if (!key?.startsWith(JOURNAL)) continue;
        try {
          const record = validateRecord(JSON.parse(root.localStorage.getItem(key)));
          if (key !== JOURNAL + record.id) throw new Error('Mismatched journal ID');
          found.push(record);
        } catch (_) { warn('A recovery journal entry is damaged. The original is preserved; download recovery versions.'); }
      }
      records = found.sort((a, b) => a.clock - b.clock || a.id.localeCompare(b.id));
      for (const record of records) { clock = Math.max(clock, record.clock); applyRecord(record, { recovery: recovering }); }
      for (const record of pending) applyRecord(record, { recovery: recovering });
      established = true;
      if (metadata.conflicts.length) conflict();
      return true;
    } catch (_) {
      // A failed read must never authorize overwriting an unreadable envelope.
      protectedRaw = true;
      warn('Saved data cannot be read safely. The original is preserved; changes are in this tab only until a valid backup is imported or data is reset.');
      return false;
    }
  }
  function parseEnvelope(text) {
    if (text.length > 20 * 1024 * 1024) throw new Error('Backup exceeds 20 MB.');
    const parsed = JSON.parse(text);
    safeTree(parsed);
    if (!object(parsed) || parsed.project !== PROJECT || parsed.version !== VERSION || !object(parsed.data)) {
      throw new Error('Not a supported JavaConcepts backup (schema version 2 required).');
    }
    for (const [key, value] of Object.entries(parsed.data)) {
      if (!Object.hasOwn(defaults, key) || !validValue(key, value)) throw new Error(`Invalid backup field: ${key}.`);
    }
    for (const key of Object.keys(defaults)) {
      if (!Object.hasOwn(parsed.data, key)) throw new Error(`Missing backup field: ${key}.`);
    }
    return parsed;
  }
  function persist() {
    if (protectedRaw) {
      warn('Damaged saved data is preserved. Changes are in memory only; export, then import a valid backup or reset.');
      return false;
    }
    try {
      // A save can be suspended while another tab commits. If the cache changed since
      // this tab read it, the state in memory is older than theirs, and writing it
      // would silently revert their work - measured, one paused save discarded 120
      // successful ones. Rebuild from the newer cache plus the journal first, so this
      // write carries both.
      if (root.localStorage.getItem(KEY) !== cacheRaw) refresh();
      root.localStorage.setItem(KEY, JSON.stringify({ ...envelope(state), storage: metadata }));
      cacheRaw = root.localStorage.getItem(KEY);
      return true;
    } catch (error) {
      warn('The main storage cache could not be saved. Export study data and recovery versions before leaving.');
      return false;
    }
  }
  function load() {
    if (state) return;
    state = clone(defaults);
    try {
      const raw = root.localStorage.getItem(KEY);
      if (raw) {
        try { state = parseEnvelope(raw).data; }
        catch (error) {
          protectedRaw = true;
          warn('Saved data is damaged or uses an unsupported version. The original was not overwritten.');
          // Salvage individually valid sections without discarding the damaged original.
          try {
            const old = JSON.parse(raw);
            safeTree(old);
            for (const key of Object.keys(defaults)) {
              if (old.data && validValue(key, old.data[key])) state[key] = old.data[key];
            }
          } catch (_) { /* original remains available through backup */ }
        }
        return;
      }
      let migrated = false;
      for (const key of Object.keys(defaults)) {
        const legacy = root.localStorage.getItem(key);
        if (legacy === null) continue;
        migrated = true;
        try {
          const value = key === 'javarev_theme' ? legacy : JSON.parse(legacy);
          safeTree(value);
          if (!validValue(key, value)) {
            if (entryValidators[key] && object(value)) {
              state[key] = Object.fromEntries(Object.entries(value).filter(([, v]) => entryValidators[key](v)));
            }
            throw new Error('Invalid legacy section');
          }
          state[key] = value;
        } catch (_) {
          warn(`Some legacy ${key.replace('javarev_', '')} data is damaged. Valid entries were kept; original keys remain untouched.`);
        }
      }
      if (migrated) persist();
      else warn('No saved progress was found in this browser. Study data stays on this device; export backups to keep it.');
    } catch (_) {
      warn('Browser storage is unavailable. Study data is in memory only; export before leaving this tab.');
    }
  }
  function read(key) {
    refresh();
    const value = clone(Object.hasOwn(state, key) ? state[key] : null);
    const base = { value: clone(value), revisions: clone(metadata.revisions), generation: metadata.generation };
    reads.set(key, base);
    if (value && typeof value === 'object') snapshots.set(value, base);
    return value;
  }
  /* The journal is the recovery mechanism, and it used to be unbounded: every save
     appended a permanent key, so ordinary typing could exhaust the quota. Measured, an
     8000-character note filled a 5 MiB budget after about 158 edits, and changes after
     that were no longer durably saved. The bound is by SIZE rather than by count,
     because a record holds the full before and after text and one note can be forty
     times larger than another. Conflicted records are always kept: those are the ones a
     person may need to recover by hand. */
  const JOURNAL_BYTE_BUDGET = 1500000;
  function pruneJournal() {
    let total = 0;
    const sizes = new Map();
    for (let i = 0; i < root.localStorage.length; i++) {
      const key = root.localStorage.key(i);
      if (!key?.startsWith(JOURNAL)) continue;
      const size = (root.localStorage.getItem(key) || '').length;
      sizes.set(key, size);
      total += size;
    }
    if (total <= JOURNAL_BYTE_BUDGET) return;
    const conflicted = new Set(metadata.conflicts || []);
    // records is sorted oldest first, so the oldest recoverable versions go first.
    for (const record of [...records]) {
      if (total <= JOURNAL_BYTE_BUDGET) break;
      if (conflicted.has(record.id)) continue;
      const key = JOURNAL + record.id;
      const size = sizes.get(key);
      if (size === undefined) continue;
      try {
        root.localStorage.removeItem(key);
        total -= size;
        records = records.filter(item => item.id !== record.id);
      } catch (_) { /* a failed removal is not worth a warning; the next save retries */ }
    }
  }
  function commit(record, allowRepair = false) {
    record.id = `${writer}:${++sequence}`;
    record.clock = ++clock;
    validateRecord(record);
    let durable = false;
    try {
      if (protectedRaw && !allowRepair) throw new Error('Protected original');
      root.localStorage.setItem(JOURNAL + record.id, JSON.stringify(record));
      durable = true;
    } catch (_) {
      pending.push(record);
      warn('Browser storage is unavailable or full. This change is only in this tab; download recovery versions before leaving.');
    }
    if (durable && !allowRepair) refresh();
    applyRecord(record);
    if (metadata.conflicts.includes(record.id)) conflict();
    if (durable) {
      if (allowRepair) protectedRaw = false;
      // Only prune once the cache is a faithful checkpoint of everything applied so far.
      // If the cache write fails, the journal is the ONLY copy of these changes, and
      // removing records breaks the revision chain that recovery replays: each surviving
      // record's expected revision no longer matches, every replay is rejected, and the
      // state silently reverts to an older value even though every save reported success.
      const checkpointed = persist();
      if (!checkpointed) warn('The recovery journal saved this change, but the main storage cache could not be updated. Export a backup.');
      if (checkpointed) pruneJournal();
    }
    return { id: record.id, ok: durable && !metadata.conflicts.includes(record.id), recoverable: durable,
      conflict: metadata.conflicts.includes(record.id) };
  }
  function write(key, value) {
    const base = (value && typeof value === 'object' && snapshots.get(value)) || reads.get(key);
    refresh();
    try { safeTree(value); } catch (_) { warn('Unsafe saved data was rejected.'); return false; }
    if (!validValue(key, value)) { warn(`Could not save invalid ${key} data. Existing history was kept.`); return false; }
    const previous = base ? base.value : clone(state[key]);
    const paths = key === 'javarev_notes' ? [[key, 'project'],
      ...new Set([...Object.keys(previous.topics), ...Object.keys(value.topics)])].map(p =>
        Array.isArray(p) ? p : [key, 'topics', p]) : entryValidators[key] ?
        [...new Set([...Object.keys(previous), ...Object.keys(value)])].map(id => [key, id]) : [[key]];
    const patches = paths.filter(path => !equal(at({ [key]: previous }, path), at({ [key]: value }, path)))
      .map(path => ({ path, before: at({ [key]: previous }, path), value: at({ [key]: value }, path), expected: base ?
        base.revisions[JSON.stringify(path)] || `${base.generation}:${JSON.stringify(at({ [key]: previous }, path))}` : revision(path) }));
    if (!patches.length) return true;
    const result = commit({ patches });
    // Fresh direct writes may follow a previous read. Advance only this caller's
    // successful base; storage events never advance an editor's explicit snapshot.
    if (result.ok) {
      reads.delete(key);
      if (value && typeof value === 'object') snapshots.set(value, {
        value: clone(value), revisions: clone(metadata.revisions), generation: metadata.generation
      });
    }
    return result.ok;
  }
  function textPath(key, id) {
    const path = key === 'javarev_notes' ? (id === null ? [key, 'project'] : [key, 'topics', id]) : [key, id];
    safeTree(Object.fromEntries(path.map(p => [p, null])));
    if (!['javarev_notes', 'javarev_editor_drafts'].includes(key) || !validPath(path)) throw new Error('Invalid text target');
    return path;
  }
  function readText(key, id = null) {
    refresh();
    const path = textPath(key, id);
    return { key, id, value: clone(at(state, path)), revision: revision(path) };
  }
  function saveText(base, value) {
    refresh();
    const path = textPath(base.key, base.id);
    // Even a stale attempt is journaled. A UI must retain its original base after
    // rejection, so another keystroke cannot silently turn into an overwrite.
    const result = commit({ patches: [{ path, before: clone(base.value), value: clone(value), expected: base.revision }] });
    return { ...result, snapshot: result.ok ? { ...base, value: clone(value), revision: revision(path) } : base };
  }
  function backup() {
    refresh();
    try {
      const original = root.localStorage.getItem(KEY);
      let text = original;
      if (!protectedRaw && (!original || !equal(parseEnvelope(original).data, state))) text = exportText();
      root.localStorage.setItem(BACKUP, text || exportText());
      return true;
    } catch (_) {
      warn('A local backup could not be saved. Export a file before replacing or resetting data.');
      return false;
    }
  }
  function preview(text) {
    const parsed = parseEnvelope(text);
    return {
      parsed, summary: `${Object.keys(parsed.data.javarev_notes.topics).length} topic notes, ` +
        `${Object.keys(parsed.data.javarev_editor_drafts).length} editor drafts, ` +
        `${parsed.data.javarev_quiz_history.length} quiz sessions, ` +
        `${Object.keys(parsed.data.javarev_question_history).length} question records. ` +
        'This replaces local data after a backup. Imported scores are history only, not study-confidence evidence.'
    };
  }
  function importData(text) {
    const parsed = parseEnvelope(text);
    const incoming = parsed.data;
    if (!backup()) return false;
    for (const h of Object.values(incoming.javarev_question_history)) h.imported = true;
    for (const h of incoming.javarev_quiz_history) h.imported = true;
    for (const [id, value] of Object.entries(incoming.javarev_practice_status)) {
      incoming.javarev_practice_status[id] = { kind: 'imported', previous: value };
    }
    if (incoming.javarev_quiz_progress) {
      incoming.javarev_quiz_progress.answered = [];
      incoming.javarev_quiz_progress.score = 0;
      incoming.javarev_quiz_progress.sessionId = '';
    }
    if (!replace(incoming, parsed.recovery)) return false;
    warn('Backup imported. Imported scores are retained as history only; answer questions here for new study evidence.');
    return true;
  }
  function reset() {
    if (!backup()) return false;
    if (!replace(clone(defaults))) return false;
    // Remove migrated keys only after the new reset state has been saved successfully.
    try { for (const key of Object.keys(defaults)) root.localStorage.removeItem(key); } catch (_) {}
    warn('All study data was reset. A pre-reset local backup is available below.');
    return true;
  }
  function replace(incoming, recovery = []) {
    refresh();
    const previous = clone(state);
    const previousMeta = clone(metadata);
    const wasProtected = protectedRaw;
    const result = commit({ replace: incoming, before: previous, recovery,
      basis: JSON.stringify({ state, metadata }) }, wasProtected);
    if (!result.ok) { state = previous; metadata = previousMeta; protectedRaw = wasProtected; return false; }
    reads.clear();
    for (const listener of listeners) listener({ localReplacement: true });
    return true;
  }
  function recoveryData() {
    const entries = [];
    try {
      for (let i = 0; i < root.localStorage.length; i++) {
        const key = root.localStorage.key(i);
        if (key?.startsWith(JOURNAL)) entries.push({ key, raw: root.localStorage.getItem(key) });
      }
    } catch (_) { warn('Recovery storage cannot be read. The export includes this tab\'s available versions.'); }
    return { entries, pending: clone(pending) };
  }
  function exportText() {
    refresh();
    return JSON.stringify({ ...envelope(state), recovery: recoveryData() }, null, 2);
  }
  function notify() {
    const previous = state && JSON.stringify(state);
    refresh();
    if (previous !== JSON.stringify(state)) {
      for (const listener of listeners) listener();
    }
  }
  if (root.addEventListener) {
    root.addEventListener('storage', event => {
      if (event.key === null || event.key === KEY || event.key?.startsWith(JOURNAL)) notify();
    });
    root.addEventListener('focus', notify);
  }
  root.JavaRevStorage = {
    read, write, readText, saveText, warn, preview, importData, reset, backup, refresh,
    subscribe: listener => { listeners.add(listener); return () => listeners.delete(listener); },
    recoveryText: () => { refresh(); return JSON.stringify({ project: PROJECT, recovery: recoveryData() }, null, 2); },
    remove: key => write(key, clone(defaults[key])),
    exportText,
    backupText: () => {
      try { return root.localStorage.getItem(BACKUP); }
      catch (_) { warn('The local backup cannot be read.'); return null; }
    },
    refreshWarnings: () => { for (const message of warnings) warn(message); }
  };
})(globalThis);
