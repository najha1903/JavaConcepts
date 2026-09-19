// ============================================================================
// Checks the hand-researched OCJP bank.
//
// The bank is the one part of the question set a generator cannot write, so it is
// also the one part that can silently teach something false. Two things must hold
// for every entry, and both are checked mechanically:
//
//   1. The option the quiz marks CORRECT is the option the author of the bank
//      intended. The options are shuffled at build time so the answer is not
//      always first, and if the shuffle and the answer index ever disagree, the
//      quiz marks a right answer wrong. That is worse than having no question.
//
//   2. Every WRONG option carries a reason. A distractor with no explanation
//      teaches nothing about why it is wrong, which is the whole point of an
//      exam question.
//
// It also checks the smaller things that break quietly: an id that is reused, a
// chapter name that does not exist, a question that never reached the output, a
// difficulty that disagrees with the source.
//
// The claims themselves are verified by compiling and running the snippets; see
// the note at the top of data/ocjp-bank.js.
//
// Usage: node scripts/check-bank.js
// ============================================================================

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const { OCJP_BANK } = require(path.join(root, 'data', 'ocjp-bank.js'));

function loadValue(file, globalName) {
  const full = path.join(root, 'revision-dashboard', file);
  if (!fs.existsSync(full)) return null;
  const source = fs.readFileSync(full, 'utf8');
  const fn = new Function(`${source}\nreturn typeof ${globalName} !== 'undefined' ? ${globalName} : null;`);
  return fn();
}

const questionBank = loadValue('questions.js', 'QUESTIONS_BANK') || {};
const chapterNames = new Set(Object.keys(questionBank));

const problems = [];
const emitted = [];
for (const [chapterName, questions] of Object.entries(questionBank)) {
  for (const question of questions || []) {
    if (question.kind === 'bank') emitted.push({ chapterName, question });
  }
}

// ---- The source file itself -------------------------------------------------
const ids = OCJP_BANK.map(e => e.id);
if (new Set(ids).size !== ids.length) {
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) problems.push(`data/ocjp-bank.js: id "${id}" is used more than once.`);
    seen.add(id);
  }
}
for (const entry of OCJP_BANK) {
  if (!entry.id) problems.push('data/ocjp-bank.js: an entry has no id.');
  if (!entry.chapter) problems.push(`${entry.id}: no chapter.`);
  else if (!chapterNames.has(entry.chapter)) problems.push(`${entry.id}: chapter "${entry.chapter}" does not exist.`);
  if (!entry.question) problems.push(`${entry.id}: no question text.`);
  if (!entry.explanation || entry.explanation.length < 40) problems.push(`${entry.id}: the explanation is missing or too short to teach anything.`);
  if (!['easy', 'medium', 'hard'].includes(entry.difficulty)) problems.push(`${entry.id}: difficulty "${entry.difficulty}" is not easy, medium or hard.`);
  if (!Array.isArray(entry.concepts) || entry.concepts.length === 0) problems.push(`${entry.id}: no concepts, so the concept filter and the ledger cannot find it.`);
  if (!Array.isArray(entry.options) || entry.options.length < 2) problems.push(`${entry.id}: fewer than two options.`);
  else {
    const correct = entry.options.filter(o => o.correct);
    if (correct.length !== 1) problems.push(`${entry.id}: ${correct.length} options are marked correct, expected exactly 1.`);
    for (const option of entry.options) {
      if (!option.text) problems.push(`${entry.id}: an option has no text.`);
      if (!option.correct && !option.why) problems.push(`${entry.id}: the wrong option "${String(option.text).slice(0, 40)}..." has no reason why it is wrong.`);
    }
  }
}

// ---- What actually reached the dashboard ------------------------------------
const byId = new Map(OCJP_BANK.map(e => [e.id, e]));
const matched = new Set();

for (const { chapterName, question } of emitted) {
  const id = String(question.qid).split('_').pop();
  const entry = byId.get(id);
  if (!entry) {
    problems.push(`${id}: a bank question reached the output but has no entry in data/ocjp-bank.js.`);
    continue;
  }
  matched.add(id);

  if (entry.chapter !== chapterName) {
    problems.push(`${id}: emitted under "${chapterName}" but written for "${entry.chapter}".`);
  }

  // The critical one: the marked answer must be the intended answer.
  const intended = entry.options.find(o => o.correct).text;
  const marked = question.options[question.answer];
  if (intended !== marked) {
    problems.push(`${id}: the quiz marks "${String(marked).slice(0, 50)}" correct, but the bank intends "${String(intended).slice(0, 50)}".`);
  }

  const wrongCount = question.options.length - 1;
  const whyCount = Object.keys(question.whyByOption || {}).length;
  if (whyCount !== wrongCount) {
    problems.push(`${id}: ${whyCount} reasons for ${wrongCount} wrong options after the shuffle.`);
  }
  if (question.whyByOption && question.whyByOption[question.answer] !== undefined) {
    problems.push(`${id}: the correct option carries a "why it is wrong" note.`);
  }
  if (question.difficulty !== entry.difficulty) {
    problems.push(`${id}: emitted as ${question.difficulty} but written as ${entry.difficulty}.`);
  }
  if (!(question.tags || []).includes('ocjp')) problems.push(`${id}: not tagged ocjp.`);
  if (!question.topicPath) problems.push(`${id}: no topicPath, so the audit cannot trace it.`);
}

for (const entry of OCJP_BANK) {
  if (!matched.has(entry.id)) problems.push(`${entry.id}: is in the bank but never reached the dashboard.`);
}

// ---- Report -----------------------------------------------------------------
const slots = {};
for (const { question } of emitted) slots[question.answer] = (slots[question.answer] || 0) + 1;

console.log(`   Bank entries: ${OCJP_BANK.length} written, ${emitted.length} in the dashboard`);
console.log(`   Answer slots: ${Object.entries(slots).sort((a, b) => a[0] - b[0]).map(([k, v]) => `#${Number(k) + 1}:${v}`).join('  ')}`);
if (Object.keys(slots).length === 1 && emitted.length > 3) {
  console.log('   Note: every answer is in the same slot, so the shuffle is not working.');
}

if (problems.length) {
  console.error('');
  for (const problem of problems.slice(0, 25)) console.error(`   ${problem}`);
  if (problems.length > 25) console.error(`   ... and ${problems.length - 25} more.`);
  console.error('');
  console.error(`Bank check failed: ${problems.length} problem(s).`);
  process.exit(1);
}

console.log('   Every marked answer matches the bank, and every distractor has a reason.');
