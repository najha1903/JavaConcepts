// ============================================================================
// Suggests what a finished chapter might be missing.
//
// The author writes notes. When a chapter is finished, this looks for things its
// code demonstrates that its notes never explain, and writes them out in his own
// style so he can decide whether to add them.
//
// Three rules govern everything here, and each was learned the hard way:
//
//   1. PRECISION OVER COVERAGE. Two gaps he acts on beat twenty he ignores. A
//      suggestion is raised only when this can point at the exact API or the
//      exact construct, never on a hunch.
//   2. A FINISHED CHAPTER ONLY. A chapter still being written is skipped, because
//      he may cover the gap later and flagging it now is double work.
//   3. ONCE, NOT EVERY RUN. A suggestion that has been rejected never returns, and
//      a chapter is only reviewed once. Nagging teaches a reader to ignore.
//
// Only two of the four planned sources are implemented, and deliberately so.
// These two are STRUCTURAL: they compare what the code contains with what the
// notes mention, which is a fact rather than a judgement. The other two - a
// concept a later chapter depends on, and a topic from the exam objectives -
// need more care and are not guessed at here.
//
// Usage: node scripts/suggest.js [--quiet]
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');
const stateFile = path.join(root, 'data', 'suggestions-state.json');
const quiet = process.argv.includes('--quiet');

function loadValue(file, globalName) {
  const full = path.join(dashboardDir, file);
  if (!fs.existsSync(full)) return null;
  const context = {};
  vm.runInNewContext(`${fs.readFileSync(full, 'utf8')}\nthis.__value = typeof ${globalName} !== 'undefined' ? ${globalName} : null;`, context, { filename: file });
  return context.__value;
}

const concepts = loadValue('data.js', 'CONCEPTS_DATA') || [];
const catalogue = require(path.join(root, 'data', 'java-concepts.js'));

// ---- What has been decided already ------------------------------------------
// A rejected suggestion must never come back, or the list stops being read.
function readState() {
  if (!fs.existsSync(stateFile)) return { reviewedChapters: {}, rejected: {} };
  try {
    const parsed = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
    return { reviewedChapters: parsed.reviewedChapters || {}, rejected: parsed.rejected || {} };
  } catch (error) {
    return { reviewedChapters: {}, rejected: {} };
  }
}

const state = readState();

// ---- Remembering a decision -------------------------------------------------
// A rejected suggestion must never return, and a chapter that has been reviewed
// must not be reviewed again on every run. Both are recorded here.
function writeState() {
  fs.writeFileSync(stateFile, JSON.stringify(state, null, 2), 'utf8');
}

const rejectArg = process.argv.indexOf('--reject');
if (rejectArg !== -1 && process.argv[rejectArg + 1]) {
  const key = process.argv[rejectArg + 1];
  state.rejected[key] = new Date().toISOString();
  writeState();
  console.log(`Rejected, and it will not be raised again: ${key}`);
  process.exit(0);
}

const reviewedArg = process.argv.indexOf('--reviewed');
if (reviewedArg !== -1 && process.argv[reviewedArg + 1]) {
  const chapter = process.argv[reviewedArg + 1];
  state.reviewedChapters[chapter] = new Date().toISOString();
  writeState();
  console.log(`Marked as reviewed, so it will not be reviewed again: ${chapter}`);
  process.exit(0);
}

if (process.argv.includes('--list-keys')) {
  // Printed so a caller can offer a choice without recomputing anything.
  const list = (loadValue('data.js', 'CONCEPTS_DATA') || []);
  console.log(JSON.stringify(Object.keys(state.rejected)));
  process.exit(0);
}

// ---- Which chapters are finished --------------------------------------------
// The rule lives in scripts/lib/note-rules.js so this script, the parser and the
// coverage ledger cannot disagree about what "finished" means. It used to be copied
// here with its own numbering convention.
const noteRules = require(path.join(__dirname, 'lib', 'note-rules.js'));
const finishedChapterNames = noteRules.finishedChapterNames(concepts);

function isFinished(chapter) {
  return finishedChapterNames.has(chapter.name);
}

// ---- Source 1: a JDK API the code uses and the notes never explain -----------
// A maintained list, because these are the APIs a learner is expected to know.
// Matching is on the method name, so `String.format` and `"x".formatted` are both
// found by `format`.
const JDK_APIS = [
  { name: 'format', note: 'String.format', concept: 'text-blocks' },
  { name: 'printf', note: 'printf', concept: 'text-blocks' },
  { name: 'valueOf', note: 'String.valueOf', concept: 'wrappers' },
  { name: 'parseInt', note: 'Integer.parseInt', concept: 'wrappers' },
  { name: 'parseDouble', note: 'Double.parseDouble', concept: 'wrappers' },
  { name: 'parseLong', note: 'Long.parseLong', concept: 'wrappers' },
  { name: 'charAt', note: 'String.charAt', concept: 'strings' },
  { name: 'substring', note: 'String.substring', concept: 'strings' },
  { name: 'indexOf', note: 'String.indexOf', concept: 'strings' },
  { name: 'toCharArray', note: 'String.toCharArray', concept: 'strings' },
  { name: 'toUpperCase', note: 'String.toUpperCase', concept: 'strings' },
  { name: 'toLowerCase', note: 'String.toLowerCase', concept: 'strings' },
  { name: 'trim', note: 'String.trim', concept: 'strings' },
  { name: 'strip', note: 'String.strip', concept: 'strings' },
  { name: 'split', note: 'String.split', concept: 'strings' },
  { name: 'join', note: 'String.join', concept: 'strings' },
  { name: 'replace', note: 'String.replace', concept: 'strings' },
  { name: 'equalsIgnoreCase', note: 'String.equalsIgnoreCase', concept: 'string-pool' },
  { name: 'compareTo', note: 'String.compareTo', concept: 'strings' },
  { name: 'repeat', note: 'String.repeat', concept: 'strings' },
  { name: 'append', note: 'StringBuilder.append', concept: 'strings' },
  { name: 'insert', note: 'StringBuilder.insert', concept: 'strings' },
  { name: 'reverse', note: 'StringBuilder.reverse', concept: 'strings' },
  { name: 'Math.round', note: 'Math.round', concept: 'operators' },
  { name: 'Math.abs', note: 'Math.abs', concept: 'operators' },
  { name: 'Math.pow', note: 'Math.pow', concept: 'operators' },
  { name: 'Math.sqrt', note: 'Math.sqrt', concept: 'operators' },
  { name: 'Math.max', note: 'Math.max', concept: 'operators' },
  { name: 'Math.min', note: 'Math.min', concept: 'operators' },
  { name: 'Math.random', note: 'Math.random', concept: 'operators' },
  { name: 'Arrays.sort', note: 'Arrays.sort', concept: 'arrays' },
  { name: 'Arrays.toString', note: 'Arrays.toString', concept: 'arrays' },
  { name: 'Arrays.asList', note: 'Arrays.asList', concept: 'arrays' },
  { name: 'Scanner', note: 'Scanner', concept: 'wrappers' },
  { name: 'nextLine', note: 'Scanner.nextLine', concept: 'wrappers' },
  { name: 'nextInt', note: 'Scanner.nextInt', concept: 'wrappers' },
  { name: 'hasNextInt', note: 'Scanner.hasNextInt', concept: 'wrappers' },
  { name: 'try-with-resources', note: 'try-with-resources', concept: 'exceptions' },
  { name: 'hashCode', note: 'Object.hashCode', concept: 'object-class' },
  { name: 'toString', note: 'Object.toString', concept: 'object-class' },
  { name: 'getClass', note: 'Object.getClass', concept: 'object-class' },
  { name: 'instanceof', note: 'instanceof', concept: 'polymorphism' },
  { name: 'StringBuilder', note: 'StringBuilder', concept: 'strings' },
  { name: 'StringBuffer', note: 'StringBuffer', concept: 'strings' },
  { name: 'Objects.equals', note: 'Objects.equals', concept: 'object-class' },
  { name: 'Objects.requireNonNull', note: 'Objects.requireNonNull', concept: 'object-class' }
];

// ---- Source 2: a construct the code demonstrates and the notes never explain --
// Each entry is a pattern in the code and the words that would show the notes
// explain it.
//
// The patterns are deliberately NARROW, because a loose one floods the list and a
// list nobody reads is worse than no list. `static` alone matched
// `public static void main`, and `String[] args` counted as "an array", so every
// single file was reported. The first run of the loose version produced 423
// suggestions, which is how a reader learns to ignore suggestions.
const CONSTRUCTS = [
  { name: 'try / catch', concept: 'exceptions', code: /\btry\s*\{/, notes: /\btry\b|\bcatch\b|\bexception\b/i },
  { name: 'finally', concept: 'exceptions', code: /\bfinally\s*\{/, notes: /\bfinally\b/i },
  { name: 'throwing an exception', concept: 'throw-throws', code: /\bthrow\s+new\b/, notes: /\bthrow\b|\bexception\b/i },
  { name: 'a for loop', concept: 'loops', code: /\bfor\s*\(/, notes: /\bfor\b|\bloop\b|\biteration\b/i },
  { name: 'a while loop', concept: 'loops', code: /\bwhile\s*\(/, notes: /\bwhile\b|\bloop\b/i },
  { name: 'a do-while loop', concept: 'loops', code: /\bdo\s*\{[\s\S]*?\}\s*while\s*\(/, notes: /\bdo[\s-]?while\b/i },
  { name: 'a switch', concept: 'switch', code: /\bswitch\s*\(/, notes: /\bswitch\b|\bcase\b/i },
  // An array that is actually built or declared, not the `String[] args` of main.
  { name: 'an array', concept: 'arrays', code: /\bnew\s+[\w<>]+\s*\[|\b\w+\[\]\s+\w+\s*=/, notes: /\barray\b/i },
  { name: 'inheritance', concept: 'inheritance', code: /\bextends\b/, notes: /\bextend|\binherit|\bsuperclass\b/i },
  { name: 'an interface', concept: 'abstract', code: /\bimplements\b/, notes: /\binterface\b|\bimplements\b/i },
  { name: 'an abstract class', concept: 'abstract', code: /\babstract\s+class\b/, notes: /\babstract\b/i },
  { name: 'an enum', concept: 'records-enums', code: /\benum\s+\w+\s*\{/, notes: /\benum\b/i },
  { name: 'a record', concept: 'records-enums', code: /\brecord\s+\w+\s*\(/, notes: /\brecord\b/i },
  // A static FIELD or a static method other than main.
  { name: 'a static member', concept: 'static', code: /\bstatic\s+(?!void\s+main\b)[\w<>\[\]]+\s+\w+/, notes: /\bstatic\b/i },
  { name: 'generics', concept: 'generics', code: /<[A-Z]\w*(\s*,\s*[A-Z]\w*)*>/, notes: /\bgeneric|type parameter\b/i },
  // An assignment that chooses between two values, not a `?` anywhere.
  { name: 'a ternary expression', concept: 'if-else', code: /=\s*[^=;]*\?[^;:]*:[^;]*;/, notes: /\bternary\b/i },
  { name: 'String formatting', concept: 'text-blocks', code: /%\.?\d*[dfs]|%n/, notes: /\bformat|printf|placeholder\b/i },
  { name: 'var', concept: 'var', code: /\bvar\s+\w+\s*=/, notes: /\bvar\b|\btype inference\b/i },
  // A lambda is an arrow after a parameter list or before a block, not an arrow
  // drawn in a comment.
  { name: 'a lambda', concept: 'lambda', code: /\)\s*->|->\s*\{/, notes: /\blambda\b|\bfunctional\b/i }
];

// Code with its comments removed, and the JVM entry point taken out. Matching
// against the raw file counted `public static void main` as a static member and
// `String[] args` as an array, which flagged every file in the project.
function codeOnly(source) {
  return String(source || '')
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\/\/.*$/gm, ' ')
    .replace(/\bpublic\s+static\s+void\s+main\s*\([^)]*\)/g, ' ')
    .replace(/\bString\s*\[\]\s*args\b/g, ' ');
}

// ---- A suggestion, written the way the author writes ------------------------
// Definition first, then the consequence, with his ":-" signpost and a concrete
// value. A factual gap can be stated exactly, which is why these two sources can
// be written automatically and the explanatory ones cannot.
function draftNote(gap) {
  if (gap.kind === 'api') {
    const api = gap.entry.note;
    const simple = api.split('.').pop();
    return [
      `${api} :- used in this topic's code but not explained in the notes.`,
      `Note :- say what ${simple} does, what it takes, and what it gives back, so the code above is not taken on trust.`
    ];
  }
  return [
    `${gap.entry.name} :- the code in this topic uses this, but the notes do not explain it.`,
    `Note :- a reader who has not met ${gap.entry.name} yet cannot follow the example.`
  ];
}

// ---- Find the gaps ----------------------------------------------------------
const suggestions = [];
let reviewedCount = 0;
let skippedInProgress = 0;

for (const chapter of concepts) {
  if (!isFinished(chapter)) { skippedInProgress++; continue; }
  if (state.reviewedChapters[chapter.name]) continue;
  reviewedCount++;
  // The concepts this chapter is responsible for teaching. A construct outside
  // that set belongs to another chapter, so its absence here is not a gap: a
  // Chapter 1 exercise that happens to use `static` is not missing an explanation
  // of `static`, because Chapter 10 teaches it.
  const chapterConcepts = new Set(catalogue.conceptsForChapter(chapter.name, chapter.topics));

  for (const topic of chapter.topics || []) {
    const raw = String(topic.code || '');
    // Match against the CODE only, with comments and the entry point removed.
    const code = codeOnly(raw);
    // Only the notes, so a mention anywhere in the file does not count as an
    // explanation. A comment inside a method is not an explanation either.
    const notes = [
      ...(topic.headerComments || []).flatMap(b => (b.type === 'code' ? [] : (b.lines || []))),
      ...(topic.inlineComments || [])
    ].join(' ');
    if (!notes.trim()) continue;

    for (const entry of JDK_APIS) {
      // Only an API this chapter is responsible for teaching.
      if (entry.concept && !chapterConcepts.has(entry.concept)) continue;
      const usesIt = new RegExp(`\\b${entry.name.replace('.', '\\.')}\\b`).test(code);
      if (!usesIt) continue;
      // The method name in the notes, either bare or qualified.
      const simple = entry.name.split('.').pop();
      if (new RegExp(`\\b${simple}\\b`, 'i').test(notes)) continue;
      const key = `${chapter.name}|${topic.filePath}|api|${entry.name}`;
      if (state.rejected[key]) continue;
      suggestions.push({
        key, kind: 'api', chapter: chapter.name, topic: topic.topicName,
        file: topic.filePath, entry, why: `the code calls ${entry.note}, and the notes never mention ${simple}`
      });
    }

    for (const entry of CONSTRUCTS) {
      if (!entry.code) continue;
      // Only a construct this chapter is responsible for teaching.
      if (entry.concept && !chapterConcepts.has(entry.concept)) continue;
      if (!entry.code.test(code)) continue;
      if (entry.notes.test(notes)) continue;
      const key = `${chapter.name}|${topic.filePath}|construct|${entry.name}`;
      if (state.rejected[key]) continue;
      suggestions.push({
        key, kind: 'construct', chapter: chapter.name, topic: topic.topicName,
        file: topic.filePath, entry, why: `the code uses ${entry.name}, and the notes never explain it`
      });
    }
  }
}

// ---- Write ------------------------------------------------------------------
const output = suggestions.map(s => ({
  key: s.key,
  kind: s.kind,
  chapter: s.chapter,
  topic: s.topic,
  file: s.file,
  what: s.kind === 'api' ? s.entry.note : s.entry.name,
  why: s.why,
  draft: draftNote(s)
}));

fs.writeFileSync(
  path.join(dashboardDir, 'suggestions-data.js'),
  `// Auto-generated by scripts/suggest.js. Do NOT edit — run 'npm run revise'.\nconst SUGGESTIONS = ${JSON.stringify({ generated: new Date().toISOString(), items: output }, null, 2)};\n`,
  'utf8'
);

const md = ['# Suggested additions', '',
  'Generated by `npm run revise`. Nothing here is written to your notes until you accept it.', '',
  'A suggestion is raised only when this can point at the exact API or the exact construct, and only for a chapter that is finished.', ''];
for (const item of output) {
  md.push(`## ${item.chapter}`, '', `**${item.topic}** — ${item.what}`, '', `_${item.why}_`, '', '```java');
  item.draft.forEach(line => md.push(`// ${line}`));
  md.push('```', '');
}
fs.writeFileSync(path.join(dashboardDir, 'suggestions.md'), md.join('\n'), 'utf8');

if (!quiet) {
  console.log('');
  console.log('💡 SUGGESTED ADDITIONS');
  console.log(`   Chapters reviewed this run  : ${reviewedCount}`);
  console.log(`   Chapters still in progress  : ${skippedInProgress} (skipped, as agreed)`);
  console.log(`   Suggestions                 : ${output.length}`);
  if (output.length) {
    const byKind = output.reduce((acc, s) => { acc[s.kind] = (acc[s.kind] || 0) + 1; return acc; }, {});
    Object.keys(byKind).forEach(k => console.log(`     ${String(byKind[k]).padStart(3)}  ${k === 'api' ? 'an API the notes never explain' : 'a construct the notes never explain'}`));
    console.log('');
    output.slice(0, 6).forEach(s => console.log(`     ${s.chapter.replace(/^Chapter (\d+).*/, 'Ch$1')}  ${s.topic} — ${s.what}`));
    if (output.length > 6) console.log(`     ... and ${output.length - 6} more`);
    console.log('');
    console.log('   Read them: revision-dashboard/suggestions.md');
  }
  console.log('');
}
