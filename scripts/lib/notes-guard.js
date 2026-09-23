// ============================================================================
// Watching the author's own notes, so nothing generated can land in them.
//
// WHY THIS EXISTS
//
// The rule "nothing is generated for the chapter being written" was enforced only against
// the tool's OUTPUT: the arrays in data.js, questions.js, practice.js and
// deep-challenges.js. That is half the story, because the tool had also written things
// directly into the author's .java files, by hand, over several commits:
//
//   - 13 @quiz blocks in Chapter 15, so a chapter he was still studying showed quizzes
//   - Sub_Chapter_3_DeepProblems/CompositionDeepProblem.java, which the parser then read
//     as a topic called "Composition Deep Problem"
//   - explanatory prose and @takeaway/@gotcha lines presented as his notes
//
// No output check could ever have caught any of that, because none of it was output. The
// generator was gated correctly and the notes were the leak.
//
// So this compares the notes BYTE FOR BYTE around a generation run. It does not try to
// guess intent or match keywords - it asks whether a single byte changed under src/, which
// is a fact rather than an inference. A generator that writes prose, a marker, an exercise
// file, or something nobody has thought of yet is caught the same way.
//
// Used by generate.js (snapshot before, compare after, roll back and refuse) and by
// check-in-progress.js for the marker half of the same rule.
// ============================================================================

const fs = require('fs');
const path = require('path');

// Every file under a directory, as absolute path -> Buffer. Buffers rather than strings so
// a comparison cannot be fooled by encoding, and so a restore is exact.
function readTree(dir) {
  const out = new Map();
  if (!fs.existsSync(dir)) return out;
  const walk = current => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile()) out.set(full, fs.readFileSync(full));
    }
  };
  walk(dir);
  return out;
}

// Every subdirectory, so a restore can remove a folder that appeared as well as a file.
function listDirectories(dir) {
  const out = new Set();
  if (!fs.existsSync(dir)) return out;
  const walk = current => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const full = path.join(current, entry.name);
      out.add(full);
      walk(full);
    }
  };
  walk(dir);
  return out;
}

// What changed between two snapshots, as readable descriptions.
function diffTrees(before, after) {
  const changes = [];
  for (const [file, bytes] of after) {
    if (!before.has(file)) changes.push({ kind: 'added', file });
    else if (!before.get(file).equals(bytes)) changes.push({ kind: 'changed', file });
  }
  for (const file of before.keys()) {
    if (!after.has(file)) changes.push({ kind: 'removed', file });
  }
  return changes;
}

// Put the tree back exactly as the snapshot had it, including removing files and folders
// that appeared. Returns the list of changes it undid, so the caller can report them.
function restoreTree(dir, before) {
  const after = readTree(dir);
  const changes = diffTrees(before, after);

  const directoriesBefore = new Set();
  for (const file of before.keys()) {
    let parent = path.dirname(file);
    while (parent.startsWith(dir) && parent !== dir) {
      directoriesBefore.add(parent);
      parent = path.dirname(parent);
    }
  }

  for (const file of after.keys()) {
    if (!before.has(file)) fs.unlinkSync(file);
  }

  for (const [file, bytes] of before) {
    const current = after.get(file);
    if (!current || !current.equals(bytes)) {
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, bytes);
    }
  }

  // Deepest first, so a folder that appeared inside another new folder is removed too.
  const directoriesAfter = [...listDirectories(dir)].sort((a, b) => b.length - a.length);
  for (const directory of directoriesAfter) {
    if (directoriesBefore.has(directory)) continue;
    if (fs.existsSync(directory) && fs.readdirSync(directory).length === 0) fs.rmdirSync(directory);
  }

  return changes;
}

module.exports = { readTree, listDirectories, diffTrees, restoreTree };
