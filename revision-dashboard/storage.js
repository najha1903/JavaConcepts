/* Local, project-specific persistence. No account or network storage is used. */
(function (root) {
  'use strict';
  const PROJECT = 'JavaConcepts/JavaRevise';
  const VERSION = 2;
  const KEY = 'javarev_state_v2';
  const BACKUP = 'javarev_backup_v2';
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
      root.localStorage.setItem(KEY, JSON.stringify(envelope(state)));
      return true;
    } catch (error) {
      warn('Browser storage is unavailable or full. Changes remain only in this tab; export a backup before leaving.');
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
    load();
    return clone(Object.hasOwn(state, key) ? state[key] : null);
  }
  function write(key, value) {
    load();
    if (!validValue(key, value)) { warn(`Could not save invalid ${key} data. Existing history was kept.`); return false; }
    state[key] = clone(value);
    return persist();
  }
  function backup() {
    load();
    try {
      const original = root.localStorage.getItem(KEY);
      root.localStorage.setItem(BACKUP, original || JSON.stringify(envelope(state)));
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
    const incoming = parseEnvelope(text).data;
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
    const previous = state;
    state = incoming;
    protectedRaw = false;
    if (!persist()) { state = previous; return false; }
    warn('Backup imported. Imported scores are retained as history only; answer questions here for new study evidence.');
    return true;
  }
  function reset() {
    if (!backup()) return false;
    const previous = state;
    state = clone(defaults);
    protectedRaw = false;
    if (!persist()) { state = previous; return false; }
    // Remove migrated keys only after the new reset state has been saved successfully.
    try { for (const key of Object.keys(defaults)) root.localStorage.removeItem(key); } catch (_) {}
    warn('All study data was reset. A pre-reset local backup is available below.');
    return true;
  }
  root.JavaRevStorage = {
    read, write, warn, preview, importData, reset, backup,
    remove: key => write(key, clone(defaults[key])),
    exportText: () => { load(); return JSON.stringify(envelope(state), null, 2); },
    backupText: () => {
      try { return root.localStorage.getItem(BACKUP); }
      catch (_) { warn('The local backup cannot be read.'); return null; }
    },
    refreshWarnings: () => { for (const message of warnings) warn(message); }
  };
})(globalThis);
