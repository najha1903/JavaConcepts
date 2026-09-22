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

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');
const expectationsFile = path.join(root, 'data', 'practice-expectations.js');

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

function fail(message, status) {
  restore(saved);
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
const structure = step('check-structure.js', [], 'Checking what was generated');
if (structure.status !== 0) {
  fail('A structural check failed, so the generated files were rolled back.');
}

console.log('Generated and checked.');
