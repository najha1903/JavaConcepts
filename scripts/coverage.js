// ============================================================================
// The Coverage Ledger.
//
// One computed answer to "what exists, what is missing, and what to do next",
// for every chapter and every topic. It reads the generated data on every run,
// so it cannot drift and it cannot forget. Nothing here is maintained by hand.
//
// This exists because the only other way to know whether a topic is covered is
// to open the dashboard and look, chapter by topic, holding it all in your head.
// That is how a topic gets missed, and how a plan gets written, forgotten, and
// written again.
//
// Outputs:
//   revision-dashboard/coverage.md   the full ledger, readable and diffable
//   a work list on the console      the topics that are incomplete
//   an OCJP work order              the chapters that still need exam questions
//
// Usage: node scripts/coverage.js [--quiet]
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');
const quiet = process.argv.includes('--quiet');

// A chapter is not exam-ready on a handful of questions. The target is a
// deliberate figure rather than zero, so the work order says how far off a
// chapter is instead of only naming the ones with nothing at all.
const OCJP_TARGET = 12;

function loadValue(file, globalName) {
  const full = path.join(dashboardDir, file);
  if (!fs.existsSync(full)) return null;
  const source = fs.readFileSync(full, 'utf8');
  const context = {};
  vm.runInNewContext(`${source}\nthis.__value = typeof ${globalName} !== 'undefined' ? ${globalName} : null;`, context, { filename: file });
  return context.__value;
}

const concepts = loadValue('data.js', 'CONCEPTS_DATA') || [];
const questionBank = loadValue('questions.js', 'QUESTIONS_BANK') || {};
const revisionBank = loadValue('questions.js', 'QUICK_REVISION_BANK') || {};
const practice = loadValue('practice.js', 'GENERATED_PRACTICE_CHALLENGES') || [];
const deep = loadValue('deep-challenges.js', 'DEEP_CHALLENGES') || [];

// ---- Index the questions by the topic they came from ------------------------
const byTopic = new Map();
const byChapter = new Map();
for (const [chapterName, list] of Object.entries(questionBank)) {
  for (const question of list || []) {
    const level = String(question.difficulty || 'medium').toLowerCase();
    const authored = question.kind === 'custom';
    const ocjp = /ocjp/i.test((question.tags || []).join(' '));
    const record = { level, authored, ocjp };
    if (!byChapter.has(chapterName)) byChapter.set(chapterName, []);
    byChapter.get(chapterName).push(record);
    const key = question.topicPath;
    if (key) {
      if (!byTopic.has(key)) byTopic.set(key, []);
      byTopic.get(key).push(record);
    }
  }
}

const practiceByChapter = new Map();
const practiceByFile = new Map();
for (const challenge of practice) {
  if (!practiceByChapter.has(challenge.chapter)) practiceByChapter.set(challenge.chapter, []);
  practiceByChapter.get(challenge.chapter).push(challenge);
  // A practice challenge is built from one file, and its id is that file name in
  // lower case, so it can be matched back to the topic it belongs to.
  practiceByFile.set(challenge.id, challenge);
}

// A topic is covered when it has material of its own, and for an exercise file
// that material is the CHALLENGE rather than a quiz question. Asking "what does
// this print?" about an exercise the learner is meant to solve is redundant, so a
// practice challenge counts as coverage. This is the honest definition, and it is
// why the ledger no longer reports 28 topics as uncovered when 20 of them carry a
// challenge already.
function practiceForTopic(topic) {
  const key = String(topic.fileName || '').replace('.java', '').toLowerCase();
  return practiceByFile.get(key) || null;
}

// A rule is a note that states a constraint. Whether it has an EXAMPLE beside it
// is structural, so it can be measured reliably: does a code sample sit directly
// above or below the block the rule is in?
//
// Linking a rule to matching lines in the source was tried and removed. It
// produced 36 links, most of them wrong: "println is the method called on it"
// linked to `public class HelloWorld {`, and a rule about keywords linked to an
// arithmetic line. Keyword matching cannot tell what a line is ABOUT from what it
// merely mentions. Detection is reliable; linking is not.
const RULE_PATTERN = /\b(must|cannot|can't|never|always|only|throws?|does not compile|compile error|is required|is not allowed|is forbidden)\b/i;

function ruleCoverage(topic) {
  const blocks = (topic.headerComments || []).filter(b => b.type !== 'table');
  let rules = 0;
  let withExample = 0;
  blocks.forEach((block, index) => {
    if (block.type === 'code') return;
    const hasExample = (index > 0 && blocks[index - 1].type === 'code') ||
      (index < blocks.length - 1 && blocks[index + 1].type === 'code');
    for (const line of block.lines || []) {
      if (!RULE_PATTERN.test(line)) continue;
      rules++;
      if (hasExample) withExample++;
    }
  });
  return { rules, withExample, withoutExample: rules - withExample };
}

// ---- Per topic --------------------------------------------------------------
function topicCoverage(chapter, topic) {
  const questions = byTopic.get(topic.filePath) || [];
  const count = level => questions.filter(q => q.level === level).length;
  let noteLines = 0;
  let codeBlocks = 0;
  let tables = 0;
  for (const block of topic.headerComments || []) {
    if (block.type === 'code') { codeBlocks++; continue; }
    if (block.type === 'table') { tables++; continue; }
    noteLines += (block.lines || []).length;
  }
  const challenge = practiceForTopic(topic);
  const hasQuestions = questions.length > 0;
  const hasPractice = Boolean(challenge);
  // An exercise file IS the exercise. The author wrote the task and then solved it in
  // main, so there is no method for the tool to extract and no plausible mistake to
  // ask about, and no generated practice could add anything. The rule lives in
  // scripts/lib/note-rules.js and matches by NAME or by the notes opening with
  // "Challenge:" / "Deep Problem:". It used to match only by note content here and
  // only by name in the parser, so the two reported different numbers.
  const opensAsExercise = noteRules.isExerciseTopic(topic);
  const rules = ruleCoverage(topic);
  return {
    file: topic.filePath,
    name: topic.topicName,
    noteLines,
    codeBlocks,
    tables,
    inlineNotes: (topic.inlineComments || []).length,
    questions: questions.length,
    easy: count('easy'),
    medium: count('medium'),
    hard: count('hard'),
    authored: questions.filter(q => q.authored).length,
    generated: questions.filter(q => !q.authored).length,
    ocjp: questions.filter(q => q.ocjp).length,
    practice: hasPractice,
    practiceAutoChecked: hasPractice && !challenge.selfCheck,
    rules: rules.rules,
    rulesWithExample: rules.withExample,
    rulesWithoutExample: rules.withoutExample,
    hasNotes: noteLines > 0 || (topic.inlineComments || []).length > 0,
    isExercise: opensAsExercise,
    // Covered means it has material of its own: a question, a challenge, or it is an
    // exercise the author wrote and solved himself.
    covered: hasQuestions || hasPractice || opensAsExercise,
    coverageKind: opensAsExercise ? 'the exercise itself'
      : hasQuestions && hasPractice ? 'question and challenge'
      : hasQuestions ? 'question'
      : hasPractice ? 'challenge'
      : 'nothing'
  };
}

// ---- Which chapters are finished, and which files are exercises --------------
// Both rules live in scripts/lib/note-rules.js so this ledger, the parser and the
// suggestion engine cannot disagree. They used to be copied into each file by hand,
// and "is this an exercise?" had already drifted into two different definitions.
const noteRules = require(path.join(root, 'scripts', 'lib', 'note-rules.js'));

// ---- Per chapter ------------------------------------------------------------
// The catalogue is needed by chapterCoverage below, so it is loaded first.
const catalogue = require(path.join(root, 'data', 'java-concepts.js'));
const conceptById = new Map((catalogue.CONCEPTS || []).map(c => [c.id, c]));

// Every badge any of this chapter's concepts can legitimately produce.
function allowedBadges(chapterName) {
  const allowed = new Set();
  const ids = catalogue.conceptsForChapter(chapterName, []) || [];
  for (const id of ids) {
    for (const badge of (catalogue.CONCEPT_BADGES || {})[id] || []) allowed.add(badge);
  }
  return allowed;
}

function normaliseSnippet(text) {
  return String(text || '')
    .replace(/\/\/.*$/gm, '')            // the author's trailing comments
    .replace(/\b(class|interface|record|enum)\s+\w+/g, '$1')  // the class name
    .replace(/\s+/g, ' ')
    .trim();
}

function chapterCoverage(chapter) {
  const topics = (chapter.topics || []).map(t => topicCoverage(chapter, t));
  const questions = byChapter.get(chapter.name) || [];
  const revision = revisionBank[chapter.name] || {};
  const syntax = String(revision.syntax || '');
  const badges = revision.badges || [];
  // A badge is wrong only when NO concept the chapter covers can produce it. The
  // old test asked whether every badge looked like a lowercase word, which flagged
  // `switch`, `case`, `try` and `catch` - the keywords the chapter teaches.
  const allowed = allowedBadges(chapter.name);
  const strayBadges = badges.filter(b => !allowed.has(b));
  const challenges = practice.filter(c => c.chapter === chapter.name);
  return {
    name: chapter.name,
    topics,
    topicsTotal: topics.length,
    topicsWithQuestions: topics.filter(t => t.covered).length,
    questions: questions.length,
    easy: questions.filter(q => q.level === 'easy').length,
    medium: questions.filter(q => q.level === 'medium').length,
    hard: questions.filter(q => q.level === 'hard').length,
    ocjp: questions.filter(q => q.ocjp).length,
    authored: questions.filter(q => q.authored).length,
    takeaways: (revision.takeaways || []).length,
    gotchas: (revision.gotchas || []).length,
    tables: (revision.tables || []).length,
    syntaxKey: normaliseSnippet(syntax),
    badges,
    strayBadges,
    practice: challenges.length,
    practiceAutoChecked: challenges.filter(c => !c.selfCheck).length,
    deep: deep.filter(c => c.chapter === chapter.name).length
  };
}

const chapters = concepts.map(chapterCoverage);
const finishedChapters = noteRules.finishedChapterNames(concepts);
// Totals over the FINISHED chapters only, so the summary cannot contradict the check.
// A chapter still being written is reported separately: counting its gaps here would
// say "137 of 142" while the check says everything is covered.
const finishedCoverage = chapters.filter(c => finishedChapters.has(c.name));

// The original defect was that EVERY chapter showed the same first code block, so
// the test is whether a snippet is shared, not what it starts with. Chapter 1's
// annotated HelloWorld program is unique to Chapter 1, and that chapter is the one
// that teaches it, so it is not boilerplate.
const snippetCounts = new Map();
for (const chapter of chapters) {
  if (!chapter.syntaxKey) continue;
  snippetCounts.set(chapter.syntaxKey, (snippetCounts.get(chapter.syntaxKey) || 0) + 1);
}
for (const chapter of chapters) {
  chapter.syntaxIsBoilerplate = !!chapter.syntaxKey && snippetCounts.get(chapter.syntaxKey) > 1;
}

// ---- Concepts ---------------------------------------------------------------
// Questions are tagged by concept rather than by chapter name, so coverage can be
// reported against the concepts a chapter actually teaches, and against the
// published exam objectives.

const questionsByConcept = new Map();
for (const list of Object.values(questionBank)) {
  for (const question of list || []) {
    for (const concept of question.concepts || []) {
      questionsByConcept.set(concept, (questionsByConcept.get(concept) || 0) + 1);
    }
  }
}

// Only the concepts the author has actually studied are judged. An objective he
// has not reached yet is listed as ahead, not as a gap in his notes.
const studiedConcepts = catalogue.CONCEPTS.filter(c => !catalogue.OBJECTIVES_AHEAD.includes(c.objective));

// A concept is only judged once a FINISHED chapter covers it. A concept that lives
// only in the chapter the author is still writing has no questions by design, because
// nothing is generated for that chapter, so it must not be reported as a gap.
const conceptsInFinishedChapters = new Set();
for (const chapter of chapters) {
  if (!finishedChapters.has(chapter.name)) continue;
  for (const id of catalogue.conceptsForChapter(chapter.name, []) || []) conceptsInFinishedChapters.add(id);
}
const judgeableConcepts = studiedConcepts.filter(c => conceptsInFinishedChapters.has(c.id));
const conceptsCovered = judgeableConcepts.filter(c => (questionsByConcept.get(c.id) || 0) > 0);
const conceptsMissing = judgeableConcepts.filter(c => (questionsByConcept.get(c.id) || 0) === 0);
const objectiveStatus = catalogue.EXAM_OBJECTIVES.map(name => ({
  name,
  ahead: catalogue.OBJECTIVES_AHEAD.includes(name),
  concepts: catalogue.CONCEPTS.filter(c => c.objective === name),
  covered: catalogue.CONCEPTS.filter(c => c.objective === name && (questionsByConcept.get(c.id) || 0) > 0).length
}));

// ---- The ledger -------------------------------------------------------------
const lines = [];
lines.push('# Coverage Ledger');
lines.push('');
lines.push('Generated by `npm run revise`. Do not edit by hand.');
lines.push('');
lines.push('One line per topic: what it has, and what it still needs.');
lines.push('');

// Totals are over the finished chapters. The chapter still being written is counted
// separately, because its gaps are not gaps.
const totals = {
  topics: finishedCoverage.reduce((n, c) => n + c.topicsTotal, 0),
  topicsWithQuestions: finishedCoverage.reduce((n, c) => n + c.topicsWithQuestions, 0),
  questions: finishedCoverage.reduce((n, c) => n + c.questions, 0),
  easy: finishedCoverage.reduce((n, c) => n + c.easy, 0),
  medium: finishedCoverage.reduce((n, c) => n + c.medium, 0),
  hard: finishedCoverage.reduce((n, c) => n + c.hard, 0),
  ocjp: finishedCoverage.reduce((n, c) => n + c.ocjp, 0),
  authored: finishedCoverage.reduce((n, c) => n + c.authored, 0)
};
const inProgressTotals = chapters
  .filter(c => !finishedChapters.has(c.name))
  .reduce((acc, c) => ({
    chapters: acc.chapters + 1,
    questions: acc.questions + c.questions,
    topics: acc.topics + c.topicsTotal
  }), { chapters: 0, questions: 0, topics: 0 });

lines.push('## Summary');
lines.push('');
lines.push(`- Topics: **${totals.topicsWithQuestions} of ${totals.topics}** have a question of their own`);
lines.push(`- Questions: **${totals.questions}** (easy ${totals.easy}, medium ${totals.medium}, hard ${totals.hard})`);
lines.push(`- OCJP tagged: **${totals.ocjp}**`);
lines.push(`- Authored by hand: **${totals.authored}**, generated from the notes: **${totals.questions - totals.authored}**`);
if (inProgressTotals.chapters) {
  lines.push(`- Still being written: **${inProgressTotals.chapters} chapter(s)**, ${inProgressTotals.topics} topic(s), ${inProgressTotals.questions} question(s) — nothing is generated for these, and they are not counted above`);
}
lines.push('');

for (const chapter of chapters) {
  lines.push(`## ${chapter.name}`);
  lines.push('');
  lines.push(`Questions ${chapter.questions} (E${chapter.easy} M${chapter.medium} H${chapter.hard}) · OCJP ${chapter.ocjp} · topics covered ${chapter.topicsWithQuestions}/${chapter.topicsTotal} · practice ${chapter.practice} · takeaways ${chapter.takeaways} · gotchas ${chapter.gotchas}`);
  lines.push('');
  const flags = [];
  // A chapter still being written is listed with what it HAS, and no "needs work"
  // line at all. See finishedChapterNames for why.
  if (finishedChapters.has(chapter.name)) {
    if (chapter.topicsWithQuestions < chapter.topicsTotal) flags.push(`${chapter.topicsTotal - chapter.topicsWithQuestions} topic(s) with no question`);
    if (chapter.easy === 0) flags.push('no easy question');
    if (chapter.hard === 0) flags.push('no hard question');
    if (chapter.ocjp === 0) flags.push('no OCJP question');
    if (chapter.syntaxIsBoilerplate) flags.push('syntax snippet is boilerplate');
    if (chapter.strayBadges.length) flags.push(`badges no concept of this chapter teaches: ${chapter.strayBadges.join(', ')}`);
    if (chapter.tables === 0) flags.push('no comparison table (your content to add, nothing is generated)');
    if (chapter.takeaways === 0) flags.push('no takeaways');
    if (chapter.practice === 0) flags.push('no practice challenge');
  } else {
    flags.push('still being written — nothing is generated for it yet, and it is not counted as incomplete');
  }
  if (flags.length) {
    lines.push(`**Needs work:** ${flags.join(' · ')}`);
    lines.push('');
  }
  lines.push('| Topic | Notes | Q | E | M | H | Practice |');
  lines.push('|---|---|---|---|---|---|---|');
  for (const topic of chapter.topics) {
    const practiceMark = chapter.practice > 0 ? '' : '';
    lines.push(`| ${topic.name} | ${topic.noteLines} | ${topic.questions} | ${topic.easy} | ${topic.medium} | ${topic.hard} | ${practiceMark} |`);
  }
  lines.push('');
}

fs.writeFileSync(path.join(dashboardDir, 'coverage.md'), lines.join('\n'), 'utf8');

// ---- Structured form, so the dashboard can render it ------------------------
// One source of truth: the same computation feeds the markdown, the console and
// the Coverage view. The browser never recomputes it.
const payload = {
  generated: new Date().toISOString(),
  totals,
  inProgress: inProgressTotals,
  ocjpTarget: OCJP_TARGET,
  workList: [],
  ocjpWork: [],
  quickRevision: { syntax: 0, badges: 0, tables: 0 },
  chapters: chapters.map(c => ({
    name: c.name,
    // True for the chapter still being written, so the view can show it without
    // judging it. See finishedChapterNames.
    inProgress: !finishedChapters.has(c.name),
    questions: c.questions,
    easy: c.easy,
    medium: c.medium,
    hard: c.hard,
    ocjp: c.ocjp,
    authored: c.authored,
    topicsTotal: c.topicsTotal,
    topicsWithQuestions: c.topicsWithQuestions,
    takeaways: c.takeaways,
    gotchas: c.gotchas,
    tables: c.tables,
    practice: c.practice,
    practiceAutoChecked: c.practiceAutoChecked,
    deep: c.deep,
    syntaxIsBoilerplate: c.syntaxIsBoilerplate,
    strayBadges: c.strayBadges,
    badges: c.badges,
    topics: c.topics.map(t => ({
      name: t.name,
      noteLines: t.noteLines,
      codeBlocks: t.codeBlocks,
      inlineNotes: t.inlineNotes,
      questions: t.questions,
      easy: t.easy,
      medium: t.medium,
      hard: t.hard,
      authored: t.authored,
    ocjp: t.ocjp,
    practice: t.practice,
    practiceAutoChecked: t.practiceAutoChecked,
    covered: t.covered,
    coverageKind: t.coverageKind,
    isExercise: t.isExercise
    }))
  }))
};

// ---- The work list ----------------------------------------------------------
const uncoveredTopics = [];
for (const chapter of chapters) {
  for (const topic of chapter.topics) {
    if (topic.covered) continue;
    // Say what the topic actually needs, so the work list is actionable rather
    // than just a list of names. A file whose logic all lives in main has no
    // method to test and no mistake to mutate, so it needs a practice challenge
    // rather than a quiz question.
    uncoveredTopics.push({
      chapter: chapter.name,
      topic: topic.name,
      needs: topic.hasNotes ? 'a practice challenge' : 'notes and material',
      reason: topic.hasNotes
        ? 'its logic lives in main, so there is no method to test and no plausible mistake to ask about'
        : 'it has almost no notes to work from'
    });
  }
}

const ocjpWork = chapters
  .map(c => ({ name: c.name, ocjp: c.ocjp, gap: OCJP_TARGET - c.ocjp }))
  .filter(c => c.gap > 0)
  .sort((a, b) => b.gap - a.gap);

// Exercise files the author wrote and solved himself. Nothing can be generated for
// them, so they are reported separately rather than counted as a gap - but they are
// still reported, so the fact is visible instead of silently dropped.
const exerciseTopics = chapters.flatMap(c => c.topics.filter(t => t.isExercise).map(t => ({ chapter: c.name, topic: t.name })));

// Chapters with no comparison table. This is deliberately NOT a warning: a table is
// authored content, and writing one means putting the tool's words into the notes,
// which the author has said must never happen. The alternative - deriving one from
// the notes - cannot be done reliably. Every chapter contains comparison language
// ("difference", "rather than", "instead of"), but Chapter 1 alone has 22
// occurrences of "difference", almost all of them the ordinary word "different",
// so the signal is noise rather than evidence of a comparison worth tabulating.
// It is reported as information, and the author decides.
const chaptersWithoutTable = chapters.filter(c => c.tables === 0);
const syntaxWork = chapters.filter(c => c.syntaxIsBoilerplate).length;
const badgeWork = chapters.filter(c => c.strayBadges.length).length;

// Rules that state a constraint with no example to show it. Reliable because it is
// structural: it asks whether a code sample sits beside the rule, not whether some
// line is about the same subject.
const rulesTotal = chapters.reduce((n, c) => n + c.topics.reduce((m, t) => m + (t.rules || 0), 0), 0);
const rulesWithoutExample = chapters.reduce((n, c) => n + c.topics.reduce((m, t) => m + (t.rulesWithoutExample || 0), 0), 0);

// Fill in the structured payload now that every part is known.
payload.workList = uncoveredTopics;
payload.exerciseTopics = exerciseTopics;
payload.ocjpWork = ocjpWork;
payload.quickRevision = { syntax: syntaxWork, badges: badgeWork, tables: chaptersWithoutTable.length };
payload.rules = { total: rulesTotal, withoutExample: rulesWithoutExample };
payload.concepts = {
  covered: conceptsCovered.length,
  studied: studiedConcepts.length,
  missing: conceptsMissing.map(c => ({ id: c.id, name: c.name, objective: c.objective })),
  objectives: objectiveStatus.map(o => ({ name: o.name, ahead: o.ahead, covered: o.covered, total: o.concepts.length })),
  byConcept: Object.fromEntries([...questionsByConcept.entries()].sort((a, b) => b[1] - a[1]))
};
// The ledger is rewritten only when something other than the timestamp changed.
// `npm run revise` runs the check on every pass, and rewriting the file each time
// left the working tree permanently dirty, which hides the changes that matter.
const coverageFile = path.join(dashboardDir, 'coverage-data.js');
const withoutTimestamp = (text) => String(text || '').replace(/"generated":\s*"[^"]*"/, '"generated": ""');
const coverageOutput = `// Auto-generated by scripts/coverage.js. Do NOT edit — run 'npm run revise'.\nconst COVERAGE_DATA = ${JSON.stringify(payload, null, 2)};\n`;
const existingCoverage = fs.existsSync(coverageFile) ? fs.readFileSync(coverageFile, 'utf8') : '';
if (withoutTimestamp(existingCoverage) !== withoutTimestamp(coverageOutput)) {
  fs.writeFileSync(coverageFile, coverageOutput, 'utf8');
}

// ---- Check mode -------------------------------------------------------------
// `--check` makes the ledger enforce rather than report, so a later change
// cannot quietly drop coverage. Two tiers, deliberately:
//
//   FAIL  a chapter with no questions at all, or with no easy question. These
//         are catastrophic and there are none today, so the build stays green
//         while still being unable to regress into them.
//   WARN  the finer gaps: a topic with no question, a boilerplate syntax
//         snippet, method-name badges, a missing table. These are the work of
//         Phases 1 and 3, so they are reported loudly but do not block. Each is
//         promoted to a failure as its phase lands.
if (process.argv.includes('--check')) {
  const failures = [];
  const warnings = [];

  for (const chapter of chapters) {
    // A chapter still being written is exempt. It is not incomplete; it is unfinished,
    // and failing the build while the author is mid-chapter would block his work.
    if (!finishedChapters.has(chapter.name)) continue;
    if (chapter.questions === 0) failures.push(`${chapter.name}: has no questions at all.`);
    if (chapter.questions > 0 && chapter.easy === 0) failures.push(`${chapter.name}: has no easy question, so there is no way in for a beginner.`);
    if (chapter.questions > 0 && chapter.hard === 0) failures.push(`${chapter.name}: has no hard question, so nothing stretches.`);
    if (chapter.takeaways === 0) failures.push(`${chapter.name}: has no key takeaways.`);
    if (chapter.topicsTotal - chapter.topicsWithQuestions > 0) {
      failures.push(`${chapter.name}: ${chapter.topicsTotal - chapter.topicsWithQuestions} topic(s) with nothing of their own, so there is no way to revise them.`);
    }
    if (chapter.syntaxIsBoilerplate) failures.push(`${chapter.name}: the Quick Revision syntax snippet is boilerplate rather than the chapter's own construct.`);
    if (chapter.strayBadges.length) failures.push(`${chapter.name}: Quick Revision badges no concept of this chapter teaches: ${chapter.strayBadges.join(', ')}.`);
    // The OCJP count stays a WARNING. It is a target for hand-written exam questions
    // rather than a defect, so it tells you what to write next without blocking.
    if (chapter.ocjp < OCJP_TARGET) warnings.push(`${chapter.name}: ${chapter.ocjp} OCJP questions, target ${OCJP_TARGET}.`);
  }

  // "No comparison table" is deliberately NOT a warning; see chaptersWithoutTable.

  // A concept the notes cover but no question tests can never be revised, which is
  // the point of the ledger. It is 29/29 today, so this guards against a future
  // chapter dropping one rather than being a task list.
  for (const concept of conceptsMissing) {
    failures.push(`Concept "${concept.name}" (${concept.objective}) is covered by your notes but has no question, so it can never be revised.`);
  }

  console.log('');
  if (failures.length) {
    console.error(`Coverage check FAILED with ${failures.length} problem(s):`);
    failures.forEach(f => console.error(`  - ${f}`));
    process.exitCode = 1;
  } else if (warnings.length) {
    console.log(`Coverage check: ${warnings.length} item(s) still to do. These are the work of Phases 1 and 3.`);
    warnings.slice(0, 8).forEach(w => console.log(`  - ${w}`));
    if (warnings.length > 8) console.log(`  ... and ${warnings.length - 8} more. See revision-dashboard/coverage.md`);
  } else {
    console.log('Coverage check: every topic and every concept in a FINISHED chapter is covered.');
  }
  console.log('');
}

if (!quiet) {
  console.log('');
  console.log('📊 COVERAGE');
  console.log(`   Topics with a question of their own : ${totals.topicsWithQuestions} / ${totals.topics}   (finished chapters)`);
  if (inProgressTotals.chapters) {
    console.log(`   Still being written                 : ${inProgressTotals.chapters} chapter(s), ${inProgressTotals.topics} topic(s) - not judged, nothing generated`);
  }
  console.log(`   Questions                            : ${totals.questions}  (E${totals.easy} M${totals.medium} H${totals.hard})`);
  console.log(`   Difficulty spread                    : ${Math.round(totals.easy / totals.questions * 100)}% easy, ${Math.round(totals.medium / totals.questions * 100)}% medium, ${Math.round(totals.hard / totals.questions * 100)}% hard`);
  console.log(`   OCJP tagged                          : ${totals.ocjp}`);
  console.log(`   Written by hand                      : ${totals.authored}`);

  if (uncoveredTopics.length) {
    console.log('');
    console.log(`🔧 WORK LIST — ${uncoveredTopics.length} topic(s) with nothing of their own`);
    uncoveredTopics.slice(0, 12).forEach(item => console.log(`     ${item.chapter.replace(/^Chapter (\d+).*/, 'Ch$1')}  ${item.topic}\n         needs ${item.needs} — ${item.reason}`));
    if (uncoveredTopics.length > 12) console.log(`     ... and ${uncoveredTopics.length - 12} more`);
  }

  if (exerciseTopics.length) {
    console.log('');
    console.log(`✍️  YOUR OWN EXERCISES — ${exerciseTopics.length} file(s), nothing to generate`);
    console.log('   These open with "Challenge:" or "Deep Problem:". You wrote the task and solved it');
    console.log('   in main, so there is no method to test and no generated practice would add anything.');
    exerciseTopics.slice(0, 12).forEach(item => console.log(`     ${item.chapter.replace(/^Chapter (\d+).*/, 'Ch$1')}  ${item.topic}`));
    if (exerciseTopics.length > 12) console.log(`     ... and ${exerciseTopics.length - 12} more`);
  }

  if (ocjpWork.length) {
    console.log('');
    console.log(`📚 OCJP BANK — target ${OCJP_TARGET} exam questions per chapter`);
    ocjpWork.forEach(item => console.log(`     ${String(item.ocjp).padStart(3)} now, ${String(item.gap).padStart(2)} to write   ${item.name}`));
    console.log(`   Ask Copilot: "write the OCJP questions for ${ocjpWork[0].name}"`);
  }

  const quickRevisionWork = syntaxWork + badgeWork;

  if (quickRevisionWork) {
    console.log('');
    console.log('🧩 QUICK REVISION');
    if (syntaxWork) console.log(`     ${syntaxWork} chapter(s): the syntax snippet is boilerplate, not the chapter's construct`);
    if (badgeWork) console.log(`     ${badgeWork} chapter(s): the badges are not the syntax the chapter teaches`);
  }

  if (chaptersWithoutTable.length) {
    console.log('');
    console.log(`📋 COMPARISON TABLES — ${chaptersWithoutTable.length} chapter(s) have none`);
    console.log('   A table is your content, so none is generated. Add one to the notes with a markdown');
    console.log('   table if a comparison is worth keeping, and it appears in Quick Revision automatically.');
  }

  console.log('');
  console.log('📝 NOTES — rules that state a constraint');
  console.log(`   Rules found in the notes            : ${rulesTotal}`);
  console.log(`   With an example beside them          : ${rulesTotal - rulesWithoutExample}`);
  console.log(`   With no example to show it           : ${rulesWithoutExample}  (${rulesTotal ? Math.round(rulesWithoutExample / rulesTotal * 100) : 0}%)`);
  console.log(`   These are where an example would help most. The tool cannot write one, so they are listed for you.`);

  console.log('');
  console.log('📖 EXAM OBJECTIVES');  objectiveStatus.forEach(o => {
    const mark = o.ahead ? 'ahead' : `${o.covered}/${o.concepts.length}`;
    console.log(`     ${mark.padStart(6)}  ${o.name}`);
  });
  console.log('');
  console.log(`   Concepts studied and covered: ${conceptsCovered.length}/${judgeableConcepts.length}   (finished chapters)`);
  if (conceptsMissing.length) {
    console.log(`   Concepts with no question yet: ${conceptsMissing.map(c => c.name).join(', ')}`);
  }

  console.log('');
  console.log(`   Full ledger: revision-dashboard/coverage.md`);
}

module.exports = { chapters, totals, uncoveredTopics, ocjpWork };
