// ============================================================================
// Regenerates everything that is derived from the notes, in the order it has to
// happen. Both `npm run revise` and `npm run approve` call this, so they cannot
// disagree about what "generate" means.
//
// THE ORDER, AND WHY
//
//   1. derive-code-questions   compiles the note code blocks and records what they
//                              print. Cached against a fingerprint, so it is a no-op
//                              when nothing changed.
//   2. parse-concepts          writes data.js, questions.js, practice.js and
//                              deep-challenges.js from the notes.
//   3. fill-practice-expectations
//                              reads the practice challenges that step 2 just wrote,
//                              computes the expected value by CALLING the author's
//                              own method, and checks the result against the practice
//                              lab's verifier before keeping it.
//   4. parse-concepts again    only if step 3 changed something, because the
//                              expectations live in a separate file that step 2 reads.
//   5. coverage                writes the ledger, which is the only source of the
//                              Coverage view. It runs here so the view can never show
//                              the previous run's picture.
//
// Step 2 has to run before step 3, and step 4 exists because of that dependency. The
// second parse is skipped when there is nothing new, which is the common case.
//
// Any arguments are passed through to parse-concepts, so `--propose` still works.
// ============================================================================

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const notesGuard = require(path.join(__dirname, 'lib', 'notes-guard.js'));

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');
const expectationsFile = path.join(root, 'data', 'practice-expectations.js');

// The author's own notes. Nothing generated may land here, and this is checked by
// comparing bytes rather than by trusting the generators to behave. See the bottom of this
// file for why that distinction matters.
const NOTES_DIR = path.join(root, 'src');

// Every file the generation steps write. Copied before generating and restored if the
// structural checks then fail, so no code path can leave broken content on disk.
//
// practice-expectations.js is included because the fill step writes it, and it is a
// SOURCE file the next run reads. Leaving it out meant a rollback restored practice.js but
// kept a fingerprint computed from the rejected version, so the two disagreed until the
// next run noticed and recomputed. Harmless, but an incomplete rollback is the kind of
// thing that stops being harmless.
const GENERATED = [
  'data.js', 'questions.js', 'practice.js', 'deep-challenges.js', 'coverage-data.js'
];
const GENERATED_SOURCES = ['data/practice-expectations.js'];

function snapshot() {
  const saved = new Map();
  for (const name of GENERATED) {
    const file = path.join(dashboardDir, name);
    saved.set(file, fs.existsSync(file) ? fs.readFileSync(file) : null);
  }
  for (const name of GENERATED_SOURCES) {
    const file = path.join(root, name);
    saved.set(file, fs.existsSync(file) ? fs.readFileSync(file) : null);
  }
  return saved;
}

function restore(saved) {
  for (const [file, contents] of saved) {
    if (contents === null) {
      if (fs.existsSync(file)) fs.unlinkSync(file);
    } else {
      fs.writeFileSync(file, contents);
    }
  }
}

function step(script, args, label) {
  console.log('');
  console.log(`── ${label}`);
  return spawnSync(process.execPath, [path.join(__dirname, script), ...args], {
    cwd: root,
    stdio: 'inherit'
  });
}

// Everything below runs with a snapshot taken, so a failure at any point restores the
// generated files rather than leaving half-generated content on disk.
const saved = snapshot();
const notesBefore = notesGuard.readTree(NOTES_DIR);

function fail(message, status) {
  restore(saved);
  const notesChanges = notesGuard.restoreTree(NOTES_DIR, notesBefore);
  if (notesChanges.length) {
    console.error('');
    console.error('Your notes were also restored, because a generator had written into them:');
    for (const change of notesChanges) {
      console.error(`   ${change.kind.padEnd(7)} ${path.relative(root, change.file)}`);
    }
  }
  console.error('');
  console.error(message);
  console.error('The generated files were restored, so the dashboard still shows the last good version.');
  process.exit(status || 1);
}

// 1. The derived code questions, before the parse that merges them.
const derive = step('derive-code-questions.js', ['--quiet'], 'Deriving questions from your code');
if (derive.status !== 0) {
  fail('Could not derive the code questions. Nothing was generated.', derive.status);
}

// 2. The parse, with whatever expectations are already known.
const before = fs.existsSync(expectationsFile) ? fs.readFileSync(expectationsFile, 'utf8') : '';
const firstParse = step('parse-concepts.js', process.argv.slice(2), 'Generating from your notes');
if (firstParse.status !== 0) fail('Generation failed. Nothing was applied.', firstParse.status);

// 3. Compute and validate the practice expectations from the challenges just written.
const fill = step('fill-practice-expectations.js', ['--quiet'], 'Checking practice challenges');
if (fill.status !== 0) {
  fail('Could not compute the practice expectations. Nothing was generated.', fill.status);
}

// 4. Re-parse only when step 3 produced a new value, so the dashboard picks it up.
const after = fs.existsSync(expectationsFile) ? fs.readFileSync(expectationsFile, 'utf8') : '';
if (after !== before) {
  const secondParse = step('parse-concepts.js', process.argv.slice(2), 'Applying the new practice expectations');
  if (secondParse.status !== 0) fail('Applying the practice expectations failed.', secondParse.status);
}

// 5. The ledger, so the Coverage view is never stale. It reads the files the parse just
// wrote, and it is the only thing that writes coverage-data.js.
const coverage = step('coverage.js', ['--quiet'], 'Updating the coverage ledger');
if (coverage.status !== 0) fail('Updating the coverage ledger failed.', coverage.status);

// 5b. THE NOTES. Nothing above may have touched them.
//
// This is the guard the earlier rounds were missing. The in-progress rule was checked
// against the tool's OUTPUT only, so it passed while Chapter 15 - the chapter being
// written - showed 13 quizzes and a "Composition Deep Problem" topic, because the quizzes
// were text sitting in the author's files and the exercise was a file in his folder.
// Neither was output, so no output check could ever see them.
//
// Comparing bytes answers the question that matters - did anything change here? - instead
// of the question I kept answering, which was "does this look like something I would
// generate?". Prose, a marker, a new file or something nobody has thought of yet is caught
// identically, and it is a fact rather than a guess.
const notesChanges = notesGuard.diffTrees(notesBefore, notesGuard.readTree(NOTES_DIR));
if (notesChanges.length) {
  fail(
    'A generator wrote into your notes. Nothing generated may live in src/ - your notes are\n' +
    'yours, and content written into them cannot be removed by any later run, because it is\n' +
    'no longer generated. See rules.md, "A Chapter You Are Still Writing".'
  );
}

// Which generated files this run actually rewrote, so the checks below only ever judge
// content that was just produced.
//
// WHY THIS IS NEEDED. `npm run revise` proposes: when there is authored content waiting -
// a note edit, a @quiz change - the parse reports it and exits WITHOUT writing anything,
// and the browser review page asks the author to Apply. In that state the generated files
// on disk are the last APPROVED version, and checking them means checking history. It also
// deadlocks: the check fails on the old content, so the review page never opens, so the
// author can never Apply the change that would make the check pass.
//
// coverage-data.js is deliberately not in this list. Step 5 rewrites it from the other
// files on every run, so its changing is not evidence that the parse produced anything.
const CHECKED_FILES = ['data.js', 'questions.js', 'practice.js', 'deep-challenges.js'];

function rewrittenSince(before) {
  const changed = [];
  for (const name of CHECKED_FILES) {
    const file = path.join(dashboardDir, name);
    const was = before.get(file);
    const now = fs.existsSync(file) ? fs.readFileSync(file) : null;
    if (was === null && now === null) continue;
    if (was === null || now === null || !was.equals(now)) changed.push(name);
  }
  return changed;
}

// 6. The FAST structural checks, HERE rather than only on approve.
//
// This is the hole that made the in-progress rule unreliable. `npm run revise` runs this
// file with --propose, which WRITES the generated files and then opens the dashboard. It
// never ran a check, so a generator that emitted content for the chapter being written
// left it on disk and live in the dashboard, and nothing said a word. The Apply button
// was protected because approve.js verifies and rolls back; the ordinary everyday path
// was not.
//
// These checks take about a second, so they can run every time. The ones that compile and
// run Java stay in verify.js, because they are slower and belong with a deliberate action.
const rewritten = rewrittenSince(saved);
if (!rewritten.length) {
  const proposalFile = path.join(dashboardDir, 'content-changes.json');
  console.log('');
  if (fs.existsSync(proposalFile)) {
    console.log('A content change is waiting for your review, so nothing was written and there is');
    console.log('nothing new to check. Apply it in the review page and the checks run on the result.');
  } else {
    console.log('Nothing changed, so there was nothing new to check.');
  }
  console.log('');
  console.log('Generated and checked.');
  process.exit(0);
}

const structure = step('check-structure.js', [], 'Checking what was generated');
if (structure.status !== 0) {
  fail('A structural check failed, so the generated files were rolled back.');
}

console.log('Generated and checked.');