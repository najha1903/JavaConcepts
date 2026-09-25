const { hash } = require('./content-identity');
const { finishedChapterNames } = require('./note-rules');

// A note file may use CRLF or LF, and the catalogue is built from text that was read
// with CRLF normalized away - parse-concepts.js does that on read. Comparing the two
// representations directly is how every editorial proposal came to fail with
// "Enhancement source changed" on a Windows checkout, where git restores CRLF. So
// every comparison normalizes first, and the file's own line ending goes back on
// afterwards; without that second half, applying one rule would rewrite every line of
// the file and make the diff meaningless.
function normalizeNewlines(text) {
  return String(text).replace(/\r\n?/g, '\n');
}

function lineEndingOf(source) {
  return String(source).includes('\r\n') ? '\r\n' : '\n';
}

// The fingerprint of a note file, independent of how the checkout stored its line
// endings. Both the generator and the approval step must use this one function, or
// they compare different things and reject a proposal that is perfectly valid.
function sourceFingerprint(source) {
  return hash(normalizeNewlines(source));
}

// Offsets refer to the original source bytes as decoded UTF-8. Literals (including
// text blocks) are skipped so prose-looking strings can never become edits.
function comments(source) {
  const out = [];
  let i = 0;
  while (i < source.length) {
    if (source[i] === '"' || source[i] === "'") {
      const quote = source.startsWith('"""', i) ? '"""' : source[i];
      i += quote.length;
      while (i < source.length) {
        if (source[i] === '\\') { i += 2; continue; }
        if (source.startsWith(quote, i)) { i += quote.length; break; }
        i++;
      }
    } else if (source.startsWith('//', i) || source.startsWith('/*', i)) {
      const start = i;
      const block = source[i + 1] === '*';
      const close = source.indexOf(block ? '*/' : '\n', i + 2);
      const contentEnd = close < 0 ? source.length : close;
      i = close < 0 ? source.length : close + (block ? 2 : 0);
      out.push({ start, end: i, contentStart: start + 2, contentEnd });
    } else i++;
  }
  return out;
}

function codeOnly(source) {
  let cursor = 0, code = '';
  for (const item of comments(source)) {
    code += source.slice(cursor, item.start);
    cursor = item.end;
  }
  return (code + source.slice(cursor)).replace(/\s+/g, ' ').trim();
}

function noteLines(source) {
  const lines = [];
  for (const block of comments(source)) {
    let offset = block.contentStart;
    for (const raw of source.slice(block.contentStart, block.contentEnd).split('\n')) {
      const prefix = raw.match(/^\s*(?:\*\s*)?/)[0];
      const text = raw.slice(prefix.length).trimEnd();
      if (text && !/^@/.test(text)) {
        lines.push({ text, start: offset + prefix.length, end: offset + prefix.length + text.length,
          line: source.slice(0, offset + prefix.length).split('\n').length });
      }
      offset += raw.length + 1;
    }
  }
  return lines;
}

function validateReplacement(source, before, after) {
  if (typeof before !== 'string' || !before || typeof after !== 'string' || !after.trim()) {
    throw new Error('An enhancement needs nonempty original and replacement text.');
  }
  // Match on LF text, then restore the file's own line ending. A CRLF file and an LF
  // catalogue entry describe the same sentence, so a difference in line endings must
  // never make a valid rule look like a changed source.
  const ending = lineEndingOf(source);
  const text = normalizeNewlines(source);
  const needle = normalizeNewlines(before);
  const start = text.indexOf(needle);
  if (start < 0 || text.indexOf(needle, start + 1) !== -1) {
    throw new Error('The original enhancement text must occur exactly once. Regenerate the review.');
  }
  const blocks = comments(text);
  if (!blocks.some(b => start >= b.start && start < b.end) ||
      !blocks.some(b => start + needle.length <= b.end && start + needle.length > b.start)) {
    throw new Error('An enhancement may replace comments only.');
  }
  const next = text.slice(0, start) + normalizeNewlines(after) + text.slice(start + needle.length);
  if (codeOnly(text) !== codeOnly(next)) throw new Error('An enhancement must not change executable Java.');
  return ending === '\n' ? next : next.replace(/\n/g, '\r\n');
}

function analyze(chapters, catalog) {
  if (catalog.schemaVersion !== 1 || !Array.isArray(catalog.rules) || !Array.isArray(catalog.drafts)) {
    throw new Error('Unsupported note enhancement catalogue.');
  }
  const finished = finishedChapterNames(chapters);
  const proposals = [], findings = [], reviewed = [];
  for (const chapter of chapters) {
    if (!finished.has(chapter.name)) continue;
    for (const topic of chapter.topics) {
      const source = String(topic.code || '');
      const lines = noteLines(source);
      const eligible = (topic.headerComments || []).filter(b => b.type !== 'code' && b.type !== 'table').flatMap(b => b.lines || []);
      reviewed.push(topic.filePath);
      const propose = (entry, before, after, line) => {
        validateReplacement(source, before, after);
        const key = `editorial|${topic.filePath}|${entry.id}|${hash(before).slice(0,12)}`;
        proposals.push({ key, kind: 'editorial', chapter: chapter.name, topic: topic.topicName,
          file: topic.filePath, line, what: entry.title || 'Clarify the explanation', why: entry.reason,
          category: entry.category || 'clarification', before, after,
          sourceFingerprint: sourceFingerprint(source), contentVersion: hash([before, after]),
          evidence: 'review-required', draft: [entry.title || entry.id, after] });
      };
      for (const rule of catalog.rules) {
        const matches = lines.filter(line => line.text === rule.before);
        if (matches.length === 1 && (!rule.context || source.includes(rule.context))) {
          propose(rule, rule.before, rule.after, matches[0].line);
        }
      }
      for (const draft of catalog.drafts.filter(d => d.file === topic.filePath)) {
        if (source.includes(draft.after) && !source.includes(draft.before)) continue;
        if (!source.includes(draft.before)) {
          findings.push({ file: topic.filePath, topic: topic.topicName, chapter: chapter.name,
            kind: 'stale-draft', text: draft.id, recommendation: 'The source changed. Refresh this editorial draft before accepting it.' });
        } else propose(draft, draft.before, draft.after, source.slice(0, source.indexOf(draft.before)).split('\n').length);
      }
      if (!eligible.length && !(topic.inlineComments || []).length) {
        findings.push({ file: topic.filePath, topic: topic.topicName, chapter: chapter.name, kind: 'explanation',
          text: 'Code-only topic', recommendation: 'Review whether the parent lesson explains this supporting class; add a local explanation only if needed.' });
      }
      for (const text of eligible) {
        if (/\b(everything else is handled|derived in some way|major constructor|good way of doing things|memory is fully used)\b/i.test(text)) {
          findings.push({ file: topic.filePath, topic: topic.topicName, chapter: chapter.name,
            kind: 'clarity', text, recommendation: 'Name the behavior, conditions, and result explicitly. Check nearby notes before adding an example.' });
        }
      }
    }
  }
  const ids = new Set();
  for (const item of proposals) {
    if (ids.has(item.key)) throw new Error(`Duplicate enhancement: ${item.key}`);
    ids.add(item.key);
  }
  return { schemaVersion: 1, scope: 'finished-chapters', reviewedTopics: reviewed.length,
    evidence: 'conservative-rules-and-authored-drafts-not-a-semantic-proof', proposals, findings };
}

function markdown(report) {
  const lines = ['# Notes Review Queue', '',
    'Generated from the current notes. Proposals are optional, preserve executable Java, and require individual approval.',
    'This is a conservative scan, not a guarantee that every sentence is clear or correct. Unrecognized wording needs editorial review.', '',
    `Topics scanned: ${report.reviewedTopics}. Wording proposals: ${report.proposals.length}. Review findings: ${report.findings.length}.`, ''];
  for (const item of report.proposals) lines.push(`## ${item.chapter}: ${item.topic}`, '', `${item.category}: ${item.why}`, '',
    'Before:', '```text', item.before, '```', 'After:', '```text', item.after, '```', '');
  for (const item of report.findings) lines.push(`- ${item.chapter} / ${item.topic} (${item.kind}): ${item.text} ${item.recommendation}`);
  return lines.join('\n') + '\n';
}

module.exports = { comments, noteLines, codeOnly, validateReplacement, analyze, markdown,
  normalizeNewlines, lineEndingOf, sourceFingerprint };
