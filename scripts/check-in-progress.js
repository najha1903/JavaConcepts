// Draft notes remain readable and editable; only generated revision material is gated.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { finishedChapterNames } = require('./lib/note-rules.js');
const dashboard = path.resolve(__dirname, '..', 'revision-dashboard');
const files = ['data.js', 'questions.js', 'practice.js', 'deep-challenges.js', 'coverage-data.js'];

function loadGlobals(file) {
  const source = fs.readFileSync(path.join(dashboard, file), 'utf8');
  const names = [...source.matchAll(/^const\s+([A-Z][A-Z0-9_]*)\s*=/gm)].map(m => m[1]);
  return vm.runInNewContext(`${source}\n;({${names.join(',')}})`, {}, { filename: file });
}

const concepts = loadGlobals('data.js').CONCEPTS_DATA;
if (!Array.isArray(concepts) || !concepts.length) throw new Error('No parsed chapters to check.');
const finished = finishedChapterNames(concepts);
const draft = new Set(concepts.filter(c => !finished.has(c.name)).map(c => c.name));
const allowed = new Set(['CONCEPTS_DATA', 'COVERAGE_DATA']);
const problems = [];
let checked = 0;
for (const file of files) {
  for (const [name, value] of Object.entries(loadGlobals(file))) {
    if (!value || typeof value !== 'object' || allowed.has(name)) continue;
    checked++;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item && draft.has(item.chapter)) problems.push(`${file}: ${name} contains ${item.id || item.qid || item.title} for ${item.chapter}.`);
      }
    } else {
      for (const chapter of draft) {
        const entry = value[chapter];
        if (!entry) continue;
        if (Array.isArray(entry)) {
          if (entry.length) problems.push(`${file}: ${name}[${chapter}] contains ${entry.length} items.`);
        } else {
          for (const field of ['badges', 'syntax', 'tables', 'takeaways', 'gotchas']) {
            if (entry[field] && entry[field].length) problems.push(`${file}: ${name}[${chapter}].${field} is not empty.`);
          }
        }
      }
    }
  }
}
console.log(`Draft eligibility: ${draft.size} draft chapter(s), ${checked} generated collections checked. All-finished and all-draft are valid states.`);
if (problems.length) {
  problems.forEach(p => console.error(p));
  process.exitCode = 1;
} else {
  console.log('No revision material generated for draft chapters. Authored draft exercise notes are allowed.');
}
