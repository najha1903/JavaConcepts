const fs = require('fs');
const path = require('path');

function readTree(dir) {
  const out = new Map();
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Source inspection will not follow a symbolic link: ${full}`);
    if (entry.isDirectory()) {
      for (const [file, bytes] of readTree(full)) out.set(file, bytes);
    } else if (entry.isFile()) out.set(full, fs.readFileSync(full));
  }
  return out;
}

function diffTrees(before, after) {
  const changes = [];
  for (const [file, bytes] of after) {
    if (!before.has(file)) changes.push({ kind: 'added', file });
    else if (!before.get(file).equals(bytes)) changes.push({ kind: 'changed', file });
  }
  for (const file of before.keys()) if (!after.has(file)) changes.push({ kind: 'removed', file });
  return changes;
}

// A comparison cannot establish who edited a file. Never restore a live source tree.
module.exports = { readTree, diffTrees };
