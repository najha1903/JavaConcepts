// ============================================================================
// Checks that NOTHING is generated for a chapter that is still being written.
//
// WHY THIS EXISTS
//
// The rule was introduced with good intentions and implemented badly. It was applied at
// the two call sites the author and I happened to be looking at - the Quick Revision
// panel and the generated questions - and nowhere else. There are SEVEN generators that
// produce chapter-scoped content:
//
//   buildQuickRevisionEntry      takeaways, gotchas, badges, syntax snippet
//   buildStarterQuestions        generated questions
//   buildOCJPQuestions           generated questions
//   buildBankQuestions           the researched bank
//   buildDerivedCodeQuestions    questions derived from code blocks
//   buildPracticeChallenges      practice challenges      <- MISSED
//   buildDeepChallenges          deep challenges          <- MISSED
//
// The first five were covered by accident: they all feed one array that happens to be
// filtered by a single flag. The last two were not covered at all, so Chapter 15 - the
// chapter being written - shipped a generated challenge whose test cases the tool had
// derived from its main method, plus an auto-checker built from them.
//
// WHY A CHECK RATHER THAN MORE CARE
//
// The failure was not a lack of knowledge. It was a cross-cutting rule applied by hand at
// some call sites and not others, with nothing to notice the difference. Documentation
// could not catch it either: rules.md was written from the code I had just written, so it
// inherited the same gap and listed questions and takeaways but not challenges. A document
// derived from an implementation cannot reveal an implementation gap.
//
// So this enumerates the OUTPUT rather than trusting the code. It discovers every
// top-level array in every generated file, and fails if any entry belongs to a chapter
// that is still being written. A generator added tomorrow is covered automatically, as
// long as its output carries a chapter, which the audit already requires of challenges.
//
// Usage: node scripts/check-in-progress.js
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');
const noteRules = require(path.join(__dirname, 'lib', 'note-rules.js'));

// Files the dashboard reads, and the ones holding generated content. data.js is included
// because it tells us WHICH chapter is being written, but its own content is the author's
// notes and is meant to be shown.
const GENERATED_FILES = ['data.js', 'questions.js', 'practice.js', 'deep-challenges.js', 'coverage-data.js'];

// Globals that are allowed to mention a chapter still being written, with the reason.
const ALLOWED = {
  // The author's own notes. The whole point is that he can read what he has written.
  CONCEPTS_DATA: 'the author\'s own parsed notes',
  // The ledger, which exists to report that the chapter is in progress.
  COVERAGE_DATA: 'the coverage ledger'
};

function loadGlobals(file) {
  const full = path.join(dashboardDir, file);
  if (!fs.existsSync(full)) return null;
  const source = fs.readFileSync(full, 'utf8');
  const names = [...source.matchAll(/^const\s+([A-Z][A-Z0-9_]*)\s*=/gm)].map(m => m[1]);
  if (!names.length) return {};
  const context = {};
  try {
    vm.runInNewContext(
      `${source}\nthis.__out = {${names.map(n => `${n}: typeof ${n} !== 'undefined' ? ${n} : null`).join(',')}};`,
      context,
      { filename: file }
    );
  } catch (error) {
    return { __error: error.message };
  }
  return context.__out;
}

const concepts = (loadGlobals('data.js') || {}).CONCEPTS_DATA || [];
if (!Array.isArray(concepts) || !concepts.length) {
  console.error('Could not read CONCEPTS_DATA, so which chapter is being written is unknown.');
  process.exit(1);
}

const finished = noteRules.finishedChapterNames(concepts);
const inProgress = concepts.filter(c => !finished.has(c.name)).map(c => c.name);

// If this ever finds nothing, the check has stopped being meaningful - most likely because
// the "finished" rule changed. Saying so is better than passing silently.
if (!inProgress.length) {
  console.error('No chapter is marked as being written, so this check has nothing to verify.');
  console.error('That usually means the finished-chapter rule changed. Check note-rules.js.');
  process.exit(1);
}

const problems = [];
const checked = [];
let scanned = 0;

function labelFor(entry) {
  if (!entry || typeof entry !== 'object') return String(entry);
  return entry.id || entry.qid || entry.title || entry.question || entry.topic || '(no id)';
}

for (const file of GENERATED_FILES) {
  const globals = loadGlobals(file);
  if (!globals) continue;
  if (globals.__error) {
    problems.push(`${file}: could not be evaluated (${globals.__error}).`);
    continue;
  }

  for (const [name, value] of Object.entries(globals)) {
    if (!value || typeof value !== 'object') continue;
    if (ALLOWED[name]) { checked.push(`${name} (allowed: ${ALLOWED[name]})`); continue; }

    // ---- Shape 1: an array of chapter-scoped entries --------------------------
    // practice.js and deep-challenges.js. Every entry carries its own chapter.
    if (Array.isArray(value)) {
      const chapterScoped = value.filter(v => v && typeof v === 'object' && typeof v.chapter === 'string');
      if (!chapterScoped.length) continue;
      scanned++;
      checked.push(`${name} (array, ${chapterScoped.length} entries)`);
      for (const entry of chapterScoped) {
        if (inProgress.includes(entry.chapter)) {
          problems.push(`${file} -> ${name}: "${labelFor(entry)}" belongs to ${entry.chapter}, which is still being written.`);
        }
      }
      continue;
    }

    // ---- Shape 2: an object KEYED BY CHAPTER NAME ------------------------------
    // questions.js: QUESTIONS_BANK maps a chapter to its questions, and
    // QUICK_REVISION_BANK maps a chapter to its takeaways, gotchas, badges and snippet.
    // Neither is an array, which is why the first version of this check - written as an
    // array check - would have passed while the questions were being generated wrongly.
    const keys = Object.keys(value);
    const chapterKeyed = keys.filter(k => inProgress.includes(k));
    if (!chapterKeyed.length) continue;

    scanned++;
    checked.push(`${name} (keyed by chapter, ${keys.length} keys)`);

    for (const key of chapterKeyed) {
      const entry = value[key];

      // An array under a chapter key: every item belongs to that chapter.
      //
      // EXCEPT the author's own @quiz questions, which are kept on purpose. `kind` is
      // 'custom' for a question he wrote in his notes, and anything else - true-false,
      // ocjp-tricky, derived, bank - is generated by the tool.
      if (Array.isArray(entry)) {
        const generated = entry.filter(item => item && item.kind !== 'custom');
        if (!generated.length) continue;
        for (const item of generated) {
          problems.push(`${file} -> ${name}["${key}"]: "${labelFor(item)}" is generated (kind: ${item.kind}) for a chapter still being written.`);
        }
        continue;
      }

      // An object under a chapter key: only the DERIVED fields matter. Takeaways and
      // gotchas are the author's own @takeaway and @gotcha lines, so they are meant to be
      // there; the badges and the syntax snippet are the tool's own output.
      if (entry && typeof entry === 'object') {
        if (Array.isArray(entry.badges) && entry.badges.length) {
          problems.push(`${file} -> ${name}["${key}"].badges: ${entry.badges.length} badge(s) derived for a chapter still being written.`);
        }
        if (entry.syntax) {
          problems.push(`${file} -> ${name}["${key}"].syntax: a syntax snippet was selected for a chapter still being written.`);
        }
        if (Array.isArray(entry.tables) && entry.tables.length) {
          problems.push(`${file} -> ${name}["${key}"].tables: ${entry.tables.length} table(s) for a chapter still being written.`);
        }
      }
    }
  }
}

console.log('');
console.log(`   Being written : ${inProgress.join(', ')}`);
console.log(`   Arrays checked: ${scanned} chapter-scoped array(s) across ${GENERATED_FILES.length} generated file(s)`);

if (problems.length) {
  console.error('');
  for (const problem of problems) console.error(`   ${problem}`);
  console.error('');
  console.error(`In-progress check failed: ${problems.length} item(s) generated for a chapter still being written.`);
  console.error('Nothing should be generated for it. Gate the generator, as buildPracticeChallenges does.');
  process.exit(1);
}

console.log('   Nothing is generated for a chapter that is still being written.');
