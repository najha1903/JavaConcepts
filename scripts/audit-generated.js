const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dashboard = path.join(root, 'revision-dashboard');
const failures = [];

function loadGlobal(file, name) {
  const source = fs.readFileSync(path.join(dashboard, file), 'utf8');
  const context = {};
  vm.runInNewContext(`${source}\nthis.__value = typeof ${name} !== 'undefined' ? ${name} : null;`, context, { filename: file });
  return context.__value;
}

const concepts = loadGlobal('data.js', 'CONCEPTS_DATA');
const questions = loadGlobal('questions.js', 'QUESTIONS_BANK');
const practice = loadGlobal('practice.js', 'GENERATED_PRACTICE_CHALLENGES');
const deep = loadGlobal('deep-challenges.js', 'DEEP_CHALLENGES');

if (!Array.isArray(concepts) || concepts.length === 0) failures.push('CONCEPTS_DATA is empty.');
const topicPaths = new Set();
for (const chapter of concepts || []) {
  for (const topic of chapter.topics || []) {
    if (!topic.filePath) failures.push(`${chapter.name}: topic is missing filePath.`);
    if (topicPaths.has(topic.filePath)) failures.push(`Duplicate topic filePath: ${topic.filePath}`);
    topicPaths.add(topic.filePath);
  }
}

const seenQids = new Set();
let questionCount = 0;
for (const [chapterName, chapterQuestions] of Object.entries(questions || {})) {
  for (const question of chapterQuestions || []) {
    questionCount++;
    if (!question.qid) failures.push(`${chapterName}: question is missing qid.`);
    if (seenQids.has(question.qid)) failures.push(`Duplicate qid: ${question.qid}`);
    seenQids.add(question.qid);
    const isGlobalQuestion = String(question.topic || '').startsWith('OCJP') ||
      String(question.topic || '').includes('Deep Challenge');
    if (!isGlobalQuestion && (!question.topicPath || !topicPaths.has(question.topicPath))) {
      failures.push(`${question.qid}: question points to missing topicPath.`);
    }
    if (!question.question || !String(question.question).trim()) failures.push(`${question.qid}: empty question text.`);
    if (['scq', 'mcq'].includes(question.type) && (!Array.isArray(question.options) || question.options.length < 2)) {
      failures.push(`${question.qid}: invalid options.`);
    }
    if (question.type === 'interview' && (!question.modelAnswer || !Array.isArray(question.keyPoints))) {
      failures.push(`${question.qid}: invalid interview answer shape.`);
    }
  }
}

// Guards for the tool's own text. Each pattern matches something the tool must
// never leave behind in the notes: the "For Ex :-" shorthand it rewrites, a
// mangled rewrite of that shorthand, and boilerplate from the retired
// parameter-notes generator.
//
// The author's own phrasing is deliberately NOT listed here. Lines such as
// "Value of the field always stays with the class" and "iii) Value is accessed
// by ObjectVariable.fieldname" are his own notes, and the audit must never
// report his writing as a defect.
const clarityPatterns = [
  /For Ex\s*[:-]/i,
  /For example:(?:ample|plan|act)/i,
  /parameters mean the same as printf/i
];
const incompleteEnding = /\b(?:as|and|or|but|because|with|from|to|of|for|in|on|is|are|the|a|an|that|which|when|if|than|into|while|until|this|its|their|same|nearly)$/i;
for (const chapter of concepts || []) {
  for (const topic of chapter.topics || []) {
    for (const block of topic.headerComments || []) {
      if (block.type === 'table') continue;
      for (const line of block.lines || []) {
        if (clarityPatterns.some(pattern => pattern.test(line))) {
          failures.push(`${topic.filePath}: unclear note text: ${line}`);
        }
        const prose = String(line || '').replace(/^[-*•]\s*/, '').trim();
        if (prose.length > 15 && incompleteEnding.test(prose) && !/:$/.test(prose)) {
          failures.push(`${topic.filePath}: incomplete sentence: ${line}`);
        }
      }
    }
  }
}

// ---- Author notes must survive the parser ------------------------------------
// Every note line the author wrote has to reach the dashboard. The parser used
// to drop a line silently when it judged the line to be decoration, which threw
// away real notes such as a precedence list written mostly with operator
// symbols. Comparing the source comment lines against the rendered topic catches
// that class of loss, which is otherwise invisible.
function normalizeNote(text) {
  return String(text)
    // Strip the comment delimiters first: a one-line /* note */ is a note.
    .replace(/^\s*\/\*+\s?/, '')
    .replace(/\s*\*+\/\s*$/, '')
    .replace(/^\s*(?:\/\/|\*)\s?/, '')
    .replace(/\bFor Ex\s*[:-]+/gi, 'For example:')
    .replace(/\bEx\s*:-\s*/gi, 'Example: ')
    .replace(/\bFor ex\s*[:-]+/gi, 'For example:')
    // A pipe-delimited row is rendered as a real table, so the pipes are not in
    // the output. Dropping them on both sides keeps tables out of the report.
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function renderedText(topic) {
  const parts = [];
  for (const block of topic.headerComments || []) {
    if (block.type === 'code') { parts.push(block.code || ''); continue; }
    if (block.type === 'table') {
      parts.push((block.headers || []).join(' '));
      (block.rows || []).forEach(row => parts.push(row.join(' ')));
      continue;
    }
    (block.lines || []).forEach(line => parts.push(line));
  }
  for (const block of topic.inlineComments || []) {
    (block.lines || []).forEach(line => parts.push(line));
  }
  return parts.join('\n').replace(/\|/g, ' ').replace(/\s+/g, ' ');
}

for (const chapter of concepts || []) {
  for (const topic of chapter.topics || []) {
    if (!topic.filePath || !fs.existsSync(path.join(root, topic.filePath))) continue;
    const source = fs.readFileSync(path.join(root, topic.filePath), 'utf8');
    const rendered = renderedText(topic);
    // Only comments above the class declaration are notes. A comment inside a
    // method body annotates the code beside it and is shown with that code, so it
    // is not part of the note comparison.
    const sourceLines = source.split('\n');
    const classLine = sourceLines.findIndex(l => /^\s*(?:public\s+|final\s+|abstract\s+)*class\s+\w+/.test(l));
    const noteRegion = classLine === -1 ? sourceLines : sourceLines.slice(0, classLine);
    let inBlock = false;
    for (const rawLine of noteRegion) {
      const trimmed = rawLine.trim();
      if (/^\/\*/.test(trimmed)) inBlock = true;
      const isComment = trimmed.startsWith('//') || inBlock;
      if (/\*\/$/.test(trimmed)) inBlock = false;
      if (!isComment) continue;
      if (/^(?:\/\/|\*)?\s*@/.test(trimmed)) continue;      // tool markers are not notes
      const note = normalizeNote(trimmed);
      // Only lines with real prose are checked; decoration and short labels are
      // filtered out on purpose by the parser.
      if (note.length < 20 || !/[A-Za-z]{3,}/.test(note)) continue;
      if (/https?:\/\//.test(note)) continue;
      const probe = note.slice(0, 40);
      if (note.length > 40 && !rendered.includes(probe)) {
        failures.push(`${topic.filePath}: note line did not reach the dashboard: ${note.slice(0, 70)}`);
      }
    }
  }
}

// ---- Tool markers must live inside a comment --------------------------------
// A marker line that is not commented out is a compile error, because the
// compiler reads "@takeaway ..." as Java. This happened when the marker was
// written in the style of a block comment but placed among // note lines.
const MARKER_LINE = /^\s*@(?:quiz|answer|option|explain|why|code|challenge|desc|hint|testcase|section|takeaway|gotcha)\b/;
for (const chapter of concepts || []) {
  for (const topic of chapter.topics || []) {
    if (!topic.filePath || !fs.existsSync(path.join(root, topic.filePath))) continue;
    const lines = fs.readFileSync(path.join(root, topic.filePath), 'utf8').split('\n');
    let inBlock = false;
    lines.forEach((line, index) => {
      const t = line.trim();
      const startsBlock = /\/\*/.test(t) && !/\*\//.test(t);
      const isComment = /^\s*\/\//.test(line) || /^\s*\*/.test(line) || inBlock;
      if (/\*\/\s*$/.test(t)) inBlock = false;
      if (startsBlock) inBlock = true;
      if (MARKER_LINE.test(line) && !isComment) {
        failures.push(`${topic.filePath}:${index + 1}: marker is not inside a comment, so the file will not compile: ${t.slice(0, 60)}`);
      }
    });
  }
}

// ---- Generated text must be clean -------------------------------------------
// Two defects that were invisible until a code sample was read on screen:
//
// 1) A stray carriage return. The source files are CRLF, and splitting on \n left
//    a \r at the end of every code line. In a <pre> the browser treats that as a
//    line break, so rows were doubled and the caret jumped back to the column 0,
//    which overlapped the text that followed.
// 2) Trailing spaces in a code sample, which add nothing and shift the caret.
let strayCr = 0;
let trailingSpace = 0;
for (const chapter of concepts || []) {
  for (const topic of chapter.topics || []) {
    for (const block of topic.headerComments || []) {
      const texts = block.type === 'code' ? [block.code || ''] : (block.lines || []);
      for (const text of texts) {
        if (/\r/.test(text)) {
          strayCr++;
          if (strayCr <= 3) failures.push(`${topic.filePath}: generated text contains a carriage return: ${JSON.stringify(text.slice(0, 60))}`);
        }
      }
      if (block.type === 'code') {
        for (const line of (block.code || '').split('\n')) {
          if (/\s+$/.test(line)) {
            trailingSpace++;
            if (trailingSpace <= 3) failures.push(`${topic.filePath}: code line has trailing whitespace: ${JSON.stringify(line.slice(0, 60))}`);
          }
        }
      }
    }
  }
}

for (const challenge of [...(practice || []), ...(deep || [])]) {
  if (!challenge.id || !challenge.title || !challenge.description) failures.push(`Challenge is incomplete: ${challenge.id || '(no id)'}`);
}

if (failures.length) {
  console.error(`Generated artifact audit failed with ${failures.length} issue(s):`);
  failures.slice(0, 40).forEach(item => console.error(`- ${item}`));
  process.exitCode = 1;
} else {
  console.log(`Generated artifact audit passed: ${concepts.length} chapters, ${topicPaths.size} topics, ${questionCount} questions, ${(practice || []).length} practice challenges, ${(deep || []).length} deep challenges.`);
}
