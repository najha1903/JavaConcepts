// ============================================================================
// The question quality gate.
//
// The tool cannot write a good question, but it can refuse to accept a bad one.
// This is the difference between "the answer is correct" and "the question is
// worth answering": check-questions.js proves the marked answer is the real one,
// and this proves the question actually teaches something.
//
// EVERY rule here was measured against the existing 776 questions BEFORE it was
// enforced, because a gate that rejects good questions is worse than no gate. Four
// candidate rules were dropped or rewritten for that reason:
//
//   - "a wrong option has no @why" flagged 100 questions. 92 were the generated
//     select-all type, which had no per-option feedback at all - a real defect, so
//     the GENERATOR was fixed to say which topic each distractor came from. The
//     other 8 are the author's own OCJP questions, whose explanations do describe
//     the distractors, so a blanket rule would have been a false positive. The rule
//     now asks for feedback from EITHER place.
//   - "the answer appears in the code" flagged 2 questions, both false positives:
//     the answer text contained the literal but also the reasoning.
//   - "numeric options" and "filler stem" flag nothing today, which is what a guard
//     should do.
//
// Usage: node scripts/check-quality.js
// ============================================================================

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function loadValue(file, globalName) {
  const full = path.join(root, 'revision-dashboard', file);
  if (!fs.existsSync(full)) return null;
  const source = fs.readFileSync(full, 'utf8');
  return new Function(`${source}\nreturn typeof ${globalName} !== 'undefined' ? ${globalName} : null;`)();
}

const questionBank = loadValue('questions.js', 'QUESTIONS_BANK') || {};

// A placeholder explanation that was written by the tool rather than by a person.
const PLACEHOLDER_EXPLANATION = /taken directly from the notes|written in the source file with the @quiz marker/i;
const MIN_EXPLANATION = 80;
const FILLER_STEM = /^(what is the output\??|what does this (code )?(print|do)\??|which (one )?is (correct|true)\??|choose the correct (answer|option)\??|what is the result\??)$/i;

const problems = [];
const stats = { total: 0, multipleChoice: 0, withPerOptionReasons: 0 };

function wrongIndices(q) {
  if (!Array.isArray(q.options) || q.answer === undefined) return [];
  const answers = Array.isArray(q.answer) ? q.answer : [q.answer];
  return q.options.map((_, i) => i).filter(i => !answers.includes(i));
}

function hasRealExplanation(q) {
  const text = String(q.explanation || '').trim();
  return text.length >= MIN_EXPLANATION && !PLACEHOLDER_EXPLANATION.test(text);
}

// ---- Rule 1: the learner gets no feedback about a wrong choice ---------------
// Feedback counts if it is attached to the option, OR if the explanation describes
// the mistake. What is rejected is a question that marks you wrong and says nothing.
function rule1(q) {
  const wrong = wrongIndices(q);
  const explained = new Set(Object.keys(q.whyByOption || {}).map(Number));
  const missing = wrong.filter(i => !explained.has(i));
  if (!missing.length) return null;
  if (hasRealExplanation(q)) return null;
  return `marks ${missing.length} of ${wrong.length} wrong option(s) wrong with no reason on the option and no real explanation`;
}

// ---- Rule 2: the answer is the code's own literal ----------------------------
// "What does this print?" where the code is one println of a string and the marked
// answer IS that string. The answer is visible, so nothing is being tested.
function rule2(q) {
  if (!/print|output|display/i.test(q.question || '')) return null;
  const code = String(q.code || '');
  if (!code) return null;
  const literal = code.match(/System\.out\.print(?:ln)?\s*\(\s*"([^"]*)"\s*\)/);
  if (!literal) return null;
  const lines = code.split('\n').filter(l => l.trim() && !/^\s*\/\//.test(l));
  if (lines.length !== 1) return null;
  const answers = Array.isArray(q.answer) ? q.answer.map(i => q.options[i]).join(' ') : (q.options ? q.options[q.answer] : q.answer);
  if (String(answers || '').trim() !== literal[1].trim()) return null;
  return `the marked answer is exactly the string literal already visible in the code, so no reasoning is needed`;
}

// ---- Rule 3: options are arbitrary values, not real alternatives ------------
function rule3(q) {
  if (!Array.isArray(q.options)) return null;
  const allNumeric = q.options.every(o => /^\s*-?\d+(\.\d+)?\s*$/.test(String(o)));
  if (!allNumeric) return null;
  if (Object.keys(q.whyByOption || {}).length) return null;
  if (hasRealExplanation(q)) return null;
  return `every option is a bare number (${q.options.join(', ')}) and nothing explains why any of them is wrong`;
}

// ---- Rule 4: a filler stem with nothing to read ------------------------------
function rule4(q) {
  const stem = String(q.question || '').trim();
  if (!FILLER_STEM.test(stem)) return null;
  const hasCode = Boolean(String(q.code || '').trim());
  const hasOptions = Array.isArray(q.options) && q.options.length >= 2;
  if (hasCode || hasOptions) return null;
  return `the stem is filler ("${stem}") with no code and no options, so there is nothing to read`;
}

// ---- Rule 5: asks true/false but the options are not true/false --------------
function rule5(q) {
  if (!Array.isArray(q.options)) return null;
  if (!/true or false|true\/false/i.test(q.question || '')) return null;
  const isTrueFalse = q.options.every(o => /^\s*(true|false)\s*$/i.test(String(o)));
  if (isTrueFalse) return null;
  return `the stem asks for true or false but the options are ${JSON.stringify(q.options.map(String))}`;
}

// ---- Rule 6: the explanation is missing, thin, or a placeholder --------------
function rule6(q) {
  const text = String(q.explanation || '').trim();
  if (!text) return `has no explanation`;
  if (PLACEHOLDER_EXPLANATION.test(text)) return `the explanation is the tool's placeholder, not an explanation: "${text.slice(0, 60)}"`;
  if (text.length < MIN_EXPLANATION) return `the explanation is ${text.length} characters, too short to explain anything: "${text}"`;
  return null;
}

// ---- Rule 7: the same stem and code twice in one chapter --------------------
function rule7(q) {
  const key = String(q.question || '').trim().toLowerCase() + '||' + String(q.code || '').trim() + '||' + JSON.stringify([...(q.options || [])].sort());
  if (seenInChapter.get(key)) return `is the same question as ${seenInChapter.get(key)}, which is already in this chapter`;
  seenInChapter.set(key, q.qid);
  return null;
}

const RULES = [
  { id: 1, name: 'no feedback on a wrong choice', test: rule1 },
  { id: 2, name: 'answer visible in the code', test: rule2 },
  { id: 3, name: 'options are arbitrary numbers', test: rule3 },
  { id: 4, name: 'filler stem with nothing to read', test: rule4 },
  { id: 5, name: 'asks true/false with non-boolean options', test: rule5 },
  { id: 6, name: 'explanation missing or a placeholder', test: rule6 },
  { id: 7, name: 'duplicate question in one chapter', test: rule7 },
  { id: 8, name: 'topic membership is not truth', test: q => q.kind === 'true-false' || /true statement (?:taken from|about) (?:a different|another) topic/i.test(q.explanation || '') ? 'marks a true fact false merely because it came from another topic' : null }
];

const seenInChapter = new Map();
const fired = new Map();

for (const [chapter, list] of Object.entries(questionBank)) {
  seenInChapter.clear();
  for (const q of list || []) {
    stats.total++;
    const isMcq = Array.isArray(q.options) && q.options.length >= 2 && q.answer !== undefined;
    if (isMcq) {
      stats.multipleChoice++;
      const wrong = wrongIndices(q);
      const explained = new Set(Object.keys(q.whyByOption || {}).map(Number));
      if (wrong.length && wrong.every(i => explained.has(i))) stats.withPerOptionReasons++;
    }
    for (const rule of RULES) {
      const message = rule.test(q);
      if (!message) continue;
      fired.set(rule.id, (fired.get(rule.id) || 0) + 1);
      problems.push({ chapter, qid: q.qid, kind: q.kind || q.type, rule, message, question: String(q.question || '').slice(0, 70).replace(/\n/g, ' ') });
    }
  }
}

// ---- Report -----------------------------------------------------------------
console.log(`   Questions: ${stats.total}, of which ${stats.multipleChoice} are multiple-choice`);
console.log(`   Multiple-choice with a reason on every wrong option: ${stats.withPerOptionReasons}`);
for (const rule of RULES) {
  const n = fired.get(rule.id) || 0;
  console.log(`   Rule ${rule.id}  ${rule.name.padEnd(46)} ${n === 0 ? 'clean' : n + ' hit(s)'}`);
}

if (problems.length) {
  console.error('');
  for (const p of problems.slice(0, 25)) {
    console.error(`   [${p.chapter}] ${p.qid}`);
    console.error(`      ${p.message}`);
    console.error(`      "${p.question}"`);
  }
  if (problems.length > 25) console.error(`   ... and ${problems.length - 25} more.`);
  console.error('');
  console.error(`Question quality check failed: ${problems.length} problem(s).`);
  process.exit(1);
}

console.log('   Every question gives feedback on a wrong choice, and none gives the answer away.');
