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
