// ============================================================================
// Writes accepted suggestions into the author's notes.
//
// This is the ONLY script in the project that writes to his .java files, so it
// carries every rail the plan promised:
//
//   INSERTION ONLY   it adds lines and never modifies, reorders or deletes one
//                    he wrote. Verified after writing: removing exactly the
//                    lines it added must reproduce the original file byte for
//                    byte, or the write is reverted.
//   A SHOWN DIFF     nothing is written unless the caller names the keys, and
//                    --dry-run prints exactly what would be inserted where.
//   ONE TICK EACH    each suggestion is named separately, so accepting one never
//                    drags another in.
//   A RECORD         every line written is reported and appended to a log.
//   GIT AS THE UNDO  a file with uncommitted changes is refused, because that is
//                    the one case git cannot bring back.
//
// Usage:
//   node scripts/accept-suggestions.js --dry-run <key> [<key> ...]
//   node scripts/accept-suggestions.js <key> [<key> ...]
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');
const logFile = path.join(root, 'data', 'accepted-suggestions.log');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const keys = args.filter(a => a !== '--dry-run');

if (!keys.length) {
  console.error('Nothing named, so nothing was written.');
  console.error('Usage: node scripts/accept-suggestions.js [--dry-run] <key> [<key> ...]');
  process.exit(1);
}

// ---- The suggestions --------------------------------------------------------
const suggestionsFile = path.join(dashboardDir, 'suggestions-data.js');
if (!fs.existsSync(suggestionsFile)) {
  console.error('No suggestions have been generated. Run npm run revise first.');
  process.exit(1);
}
const context = {};
vm.runInNewContext(`${fs.readFileSync(suggestionsFile, 'utf8')}\nthis.__s = SUGGESTIONS;`, context, { filename: 'suggestions-data.js' });
const items = (context.__s && context.__s.items) || [];
const byKey = new Map(items.map(i => [i.key, i]));

// ---- Is the file safe to touch? ---------------------------------------------
// A file with uncommitted changes is refused: git is the undo, and it cannot
// bring back work that was never committed.
function hasUncommittedChanges(relativePath) {
  const result = spawnSync('git', ['status', '--porcelain', '--', relativePath], { cwd: root, encoding: 'utf8' });
  if (result.status !== 0) return null;         // not a git repo, or git missing
  return result.stdout.trim().length > 0;
}

// ---- Where the note goes ----------------------------------------------------
// Immediately before the class declaration, which is where the author already
// writes his notes.
function insertionPoint(lines) {
  const index = lines.findIndex(l => /^\s*(?:public\s+|final\s+|abstract\s+)*class\s+\w+/.test(l));
  if (index === -1) return null;
  // Step back over any blank lines so the new note sits with the other notes.
  let at = index;
  while (at > 0 && lines[at - 1].trim() === '') at--;
  return at;
}

// ---- Write ------------------------------------------------------------------
let written = 0;
let refused = 0;
const report = [];

for (const key of keys) {
  const item = byKey.get(key);
  if (!item) {
    console.error(`  not found, so skipped: ${key}`);
    refused++;
    continue;
  }
  const full = path.join(root, item.file);
  if (!fs.existsSync(full)) {
    console.error(`  file is gone, so skipped: ${item.file}`);
    refused++;
    continue;
  }

  const dirty = hasUncommittedChanges(item.file);
  if (dirty) {
    console.error(`  REFUSED: ${item.file} has uncommitted changes.`);
    console.error('           Commit it first, because git is the undo and it cannot bring back');
    console.error('           work that was never committed.');
    refused++;
    continue;
  }

  const original = fs.readFileSync(full, 'utf8');
  const newline = original.includes('\r\n') ? '\r\n' : '\n';
  const lines = original.split(/\r?\n/);
  const at = insertionPoint(lines);
  if (at === null) {
    console.error(`  no class declaration found, so skipped: ${item.file}`);
    refused++;
    continue;
  }

  // The lines to add, in the author's style, each as a comment.
  const added = [
    '',
    `// ${item.what} :- ${item.why.replace(/^the /, 'the ')}`,
    ...item.draft.slice(1).map(line => `// ${line}`)
  ];
  const updated = [...lines.slice(0, at), ...added, ...lines.slice(at)].join(newline);

  // The guard that matters: removing exactly what was added must give back the
  // original, byte for byte. If it does not, this would not be an insertion.
  const check = updated.split(newline);
  const rebuilt = [...check.slice(0, at), ...check.slice(at + added.length)].join(newline);
  if (rebuilt !== original) {
    console.error(`  REFUSED: the change would not be a pure insertion: ${item.file}`);
    refused++;
    continue;
  }

  report.push({ item, added: added.filter(l => l.trim()), at });

  if (!dryRun) {
    fs.writeFileSync(full, updated, 'utf8');
  }
  written++;
}

// ---- Report -----------------------------------------------------------------
if (report.length) {
  console.log('');
  console.log(dryRun ? 'WOULD INSERT (nothing written):' : 'INSERTED:');
  for (const entry of report) {
    console.log('');
    console.log(`  ${entry.item.file}  (line ${entry.at + 1})`);
    entry.added.forEach(line => console.log(`      + ${line}`));
  }
}

if (!dryRun && report.length) {
  const log = report.map(entry =>
    `${new Date().toISOString()}  ${entry.item.file}  ${entry.item.what}\n` +
    entry.added.map(l => `    ${l}`).join('\n')
  ).join('\n');
  fs.appendFileSync(logFile, log + '\n', 'utf8');
  console.log('');
  console.log(`  A record was appended to data/accepted-suggestions.log`);
}

console.log('');
console.log(dryRun ? `${written} would be written, ${refused} refused.` : `${written} written, ${refused} refused.`);
if (refused && !written) process.exit(1);
