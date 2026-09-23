// ============================================================================
// Rules about the author's notes that more than one script needs.
//
// WHY THIS EXISTS
//
// These rules were copied into several scripts and kept in step by hand, and they had
// already drifted. "Is this file an exercise?" existed in TWO different forms:
//
//   parse-concepts.js   matched by FILENAME  (includes('challenge'))
//   coverage.js         matched by CONTENT   (/^(Challenge|Deep Problem):/)
//
// So a file named `StringConcatChallenge.java` was an exercise to the practice
// generator but not to the ledger, and the two could report different numbers for the
// same project. The "is this chapter finished?" rule was copied into three files.
//
// One definition each, used by everyone, means they cannot disagree. This runs inside
// `npm run revise`, so every consumer is updated by the same pipeline.
// ============================================================================

// ---- Exercises --------------------------------------------------------------

// The author's own naming: practice files end in Challenge or Problem.
function isExerciseFileName(name) {
  return /challenge|problem/i.test(String(name || ''));
}

// The first line of actual notes, skipping code and tables. A file that opens with
// "Challenge:" or "Deep Problem:" is an exercise even when its name does not say so.
function firstNoteLine(topic) {
  for (const block of topic.headerComments || []) {
    if (block.type === 'code' || block.type === 'table') continue;
    for (const line of block.lines || []) {
      const text = String(line || '').trim();
      if (text) return text;
    }
  }
  return '';
}

function opensAsExercise(topic) {
  return /^\s*(Challenge|Deep Problem)\s*:/i.test(firstNoteLine(topic));
}

// An exercise by EITHER signal. This is the union deliberately: the two tests used to
// be used separately, so half the exercises were invisible to the ledger.
function isExerciseTopic(topic) {
  return isExerciseFileName(topic.fileName) || opensAsExercise(topic);
}

// ---- Chapters still being written -------------------------------------------

function chapterNumber(name) {
  const match = String(name).match(/Chapter\s*_?\s*(\d+)/i);
  return match ? Number(match[1]) : null;
}

// `@draft` in any file of a chapter marks it as unfinished, whatever its number.
function isDraftChapter(chapter) {
  return (chapter.topics || []).some(topic => /@draft\b/.test(String(topic.code || '')));
}

// A chapter is finished once a HIGHER-numbered chapter exists, and not before. While it
// is unfinished nothing is generated for it and it is not judged; see rules.md.
function finishedChapterNames(chapters) {
  const numbers = (chapters || []).map(c => chapterNumber(c.name)).filter(n => n !== null);
  const highest = numbers.length ? Math.max(...numbers) : null;
  const finished = new Set();
  for (const chapter of chapters || []) {
    const n = chapterNumber(chapter.name);
    if (n === null || highest === null) { finished.add(chapter.name); continue; }
    if (n < highest && !isDraftChapter(chapter)) finished.add(chapter.name);
  }
  return finished;
}

// ---- Does a topic have notes of its own? ------------------------------------

// True when the author has written something in this file - either a header block above
// the declaration or a comment inside it.
//
// This exists because the parser used to invent three sentences for a topic with no notes,
// so that the interface had something to show. That filler made a file with NO notes pass
// the coverage check while a file with two of the author's own sentences failed, and it was
// displayed and quizzed as if he had written it. The filler is gone; this is how the ledger
// asks the real question instead.
//
// Code and table blocks do not count. A file that is only code, with no comment anywhere,
// has no notes of its own - which is a fact worth reporting, not a defect to paper over.
function hasOwnNotes(topic) {
  if (!topic) return false;
  const prose = (topic.headerComments || []).some(block =>
    block && block.type !== 'code' && block.type !== 'table' && (block.lines || []).some(line => String(line || '').trim())
  );
  if (prose) return true;
  return (topic.inlineComments || []).some(line => String(line || '').trim());
}

// ---- Is a note line actually code? ------------------------------------------

// Returns true if a line is commented-out code rather than an explanation.
function isCodeFragment(line) {
  const n = String(line || '').trim();
  if (!n) return false;
  // Pure annotation
  if (/^@\w+(\(.*\))?$/.test(n)) return true;
  // A brace that opens the line, with anything after it. This has to come before the
  // "brace alone" test below, because the common shape is a brace plus a trailing
  // comment: "{  // outer block (e.g., a method)". That matched none of the patterns
  // here, so it was treated as prose and appeared in the Revision Bank as if it were
  // a note.
  if (/^[{}]/.test(n)) return true;
  // Lines with unmatched brace or braces only
  if (/^\s*[{}]\s*$/.test(n)) return true;
  if (/^[A-Za-z_][\w$.]*\s*[({][^)]*[)};]*$/.test(n) && /[{};]/.test(n) && !/\s[a-z]{4,}/.test(n)) return true;
  // Ends with semicolon and starts with code keyword or call
  if (/;\s*$/.test(n) && /^(super|this|System|new|return|throw|[a-z_][a-zA-Z0-9_.]*\s*\()/.test(n)) return true;
  // Pure method call  bark();  super();
  if (/^[A-Za-z_][\w$.]*\s*\([^)]*\)\s*;$/.test(n)) return true;
  // Java access-modifier declarations
  if (/^(public|private|protected)\s+(static\s+|final\s+)?[\w<>\[\],\s]+\s+\w+\s*[({]/.test(n)) return true;
  // A control-statement header that opens a block, such as "switch (x) {" or
  // "if (n > 0) {". Without this the header is treated as prose and the sample
  // is split apart from the braces that belong to it.
  if (/^(if|else\s+if|else|for|while|do|switch|try|catch|finally|synchronized)\b[^{};]*\{\s*$/.test(n)) return true;
  // Switch labels:  case 1:   case 'A':   case "x":   case ENUM_VALUE:   default:
  if (/^(case\s+([0-9]+|'\\?.'|"[^"]*"|[A-Za-z_$][\w$.]*)|default)\s*:\s*$/.test(n)) return true;
  // Starts with another comment marker
  if (/^\/\//.test(n)) return true;
  return false;
}

module.exports = {
  isExerciseFileName,
  opensAsExercise,
  isExerciseTopic,
  firstNoteLine,
  chapterNumber,
  isDraftChapter,
  finishedChapterNames,
  isCodeFragment,
  hasOwnNotes
};
