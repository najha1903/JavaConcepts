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
const expectationsFile = path.join(root, 'data', 'practice-expectations.js');

function step(script, args, label) {
  console.log('');
  console.log(`── ${label}`);
  return spawnSync(process.execPath, [path.join(__dirname, script), ...args], {
    cwd: root,
    stdio: 'inherit'
  });
}

// 1. The derived code questions, before the parse that merges them.
const derive = step('derive-code-questions.js', ['--quiet'], 'Deriving questions from your code');
if (derive.status !== 0) {
  console.error('\nCould not derive the code questions. Nothing was generated.');
  process.exit(derive.status || 1);
}

// 2. The parse, with whatever expectations are already known.
const before = fs.existsSync(expectationsFile) ? fs.readFileSync(expectationsFile, 'utf8') : '';
const firstParse = step('parse-concepts.js', process.argv.slice(2), 'Generating from your notes');
if (firstParse.status !== 0) process.exit(firstParse.status || 1);

// 3. Compute and validate the practice expectations from the challenges just written.
const fill = step('fill-practice-expectations.js', ['--quiet'], 'Checking practice challenges');
if (fill.status !== 0) {
  console.error('\nCould not compute the practice expectations. Nothing was generated.');
  process.exit(fill.status || 1);
}

// 4. Re-parse only when step 3 produced a new value, so the dashboard picks it up.
const after = fs.existsSync(expectationsFile) ? fs.readFileSync(expectationsFile, 'utf8') : '';
if (after !== before) {
  const secondParse = step('parse-concepts.js', process.argv.slice(2), 'Applying the new practice expectations');
  if (secondParse.status !== 0) process.exit(secondParse.status || 1);
}
