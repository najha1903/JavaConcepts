// Targeted regression checks; fixtures are confined to a disposable project-local
// directory. This never runs generation or touches real notes/dashboard artifacts.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { createRegistry, contentVersion } = require('./lib/content-identity.js');
const { exactOutputMatches, expectationFor, asRunnableProgram, expectedCompileFailure } = require('./lib/output-contract.js');
const { finishedChapterNames } = require('./lib/note-rules.js');
const { createWorkDir, requireJava, compileArguments, nativeValidation } = require('./lib/run-java.js');
const { parseJavaFile, parseQuizHeader, buildStarterQuestions, buildPracticeChallenges, buildQuickRevisionEntry } = require('./parse-concepts.js');
const { checkOne } = require('./check-questions.js');
const root = path.resolve(__dirname, '..');

async function main() {
  const fixture = createWorkDir('regression');
  let assertions = 0;
  const check = (condition, message) => { assert(condition, message); assertions++; };
  try {
    check(compileArguments(['Sample.java']).slice(0, 2).join(' ') === '--release 21', 'native compilation defaults to Java 21');
    check(compileArguments(['--release', '21', 'Sample.java']).filter(arg => arg === '--release').length === 1, 'explicit Java 21 release not duplicated');
    assert.throws(() => compileArguments(['--release', '25', 'Sample.java']), /require --release 21/); assertions++;
    assert.throws(() => compileArguments(['--enable-preview', 'Sample.java']), /non-preview/); assertions++;
    check(!exactOutputMatches('21\n', '2'), 'prefix is not output equality');
    check(!exactOutputMatches('A 7\n', 'B 7'), 'shared token is not output equality');
    check(!exactOutputMatches('one\nextra\n', 'one'), 'extra lines must fail');
    check(exactOutputMatches('A\r\nB\r\n', 'A\nB'), 'platform line endings and one terminal newline');
    check(exactOutputMatches('', ''), 'empty output is a legitimate expectation');
    check(!exactOutputMatches('11 ', '11'), 'explicit contracts preserve trailing spaces');
    check(expectationFor({ type: 'scq', question: 'What is printed?', options: ['A on one line then B'], answer: 0 }) === null, 'prose is unsupported, not a partial match');
    check(expectationFor({ type: 'predict', answer: ['A B'] }).value === 'A B', 'predict text is an explicit full-output contract');
    check(!expectedCompileFailure({ status: -1, stderr: 'compiler.err.prob.found.req', error: 'ENOENT' }, 'prob.found.req'), 'infrastructure is not an expected Java error');
    check(!expectedCompileFailure({ status: 1, stderr: 'compiler.err.cant.resolve.location' }, 'prob.found.req'), 'wrong compiler diagnostic must fail');
    check(!expectedCompileFailure({ status: 1, stderr: 'compiler.err.prob.found.req\ncompiler.err.cant.resolve.location' }, 'prob.found.req'), 'unrelated additional diagnostics must fail');
    check(expectedCompileFailure({ status: 1, stderr: 'compiler.err.prob.found.req' }, 'prob.found.req'), 'matching compiler diagnostic');
    const chapters = [1, 2, 3].map(n => ({ name: `Chapter ${n}: Test`, topics: [] }));
    check(finishedChapterNames(chapters, { chapters: { 1: 'finished', 2: 'finished', 3: 'finished' } }).size === 3, 'all-finished supported');
    check(finishedChapterNames(chapters, { chapters: { 1: 'draft', 2: 'draft', 3: 'draft' } }).size === 0, 'all-draft supported');
    check(finishedChapterNames(chapters, { chapters: { 1: 'finished' } }).size === 2, 'unlisted chapter compatibility');
    check(finishedChapterNames([{ name: 'Chapter 1: T', topics: [{ code: '// @draft' }] }], { chapters: { 1: 'finished' } }).size === 0, '@draft override');
    const registryFile = path.join(fixture, 'identities.json');
    const original = { qid: 'old-positional-4', kind: 'custom', type: 'scq', chapter: 'Chapter 1: T', topicPath: 'src/T.java', question: 'Which value?', options: ['A', 'B'], answer: 0, explanation: 'A is correct.' };
    let registry = createRegistry(registryFile, { chapter: [original] });
    const initial = registry.assign(original);
    registry.save();
    registry = createRegistry(registryFile);
    registry.assign({ ...original, question: 'Inserted first' });
    const reordered = registry.assign({ ...original, options: ['B', 'A'], answer: 1 });
    check(reordered.qid === initial.qid, 'insertion and option reorder preserve published ID');
    check(reordered.contentVersion === initial.contentVersion, 'option reorder preserves semantic version');
    registry.save();
    registry = createRegistry(registryFile);
    const changedAnswer = registry.assign({ ...original, answer: 1 });
    check(changedAnswer.qid === initial.qid && changedAnswer.contentVersion !== initial.contentVersion, 'answer edits change version, not identity');
    const variant = registry.assign({ ...original, options: ['A', 'C'] });
    check(variant.qid !== initial.qid && variant.qid.startsWith('q-'), 'duplicate stems with different alternatives have non-positional IDs');
    registry.save();
    registry = createRegistry(registryFile);
    const pinned = registry.assign({ ...original, permanentId: 'permanent-value' });
    registry.save();
    registry = createRegistry(registryFile);
    const moved = registry.assign({ ...original, question: 'A renamed question', topicPath: 'src/Moved.java', permanentId: 'permanent-value' });
    check(moved.qid === pinned.qid, 'explicit permanent ID survives move/rename');
    registry.save();
    registry = createRegistry(registryFile);
    const migrated = registry.assign({ ...original, options: ['A', 'C'], permanentId: 'permanent-value' });
    check(migrated.legacyQids.includes(variant.qid), 'aliases preserve replaced published identity');
    check(parseQuizHeader('[id:permanent-value] (OCJP, HARD) Which value?').permanentId === 'permanent-value', 'authored permanent ID marker');
    const src = path.join(fixture, 'src', 'Chapter_1_Fixture');
    fs.mkdirSync(src, { recursive: true });
    const note = path.join(src, 'DraftChallenge.java');
    fs.writeFileSync(note, '// @draft\n// Challenge: legitimate authored exercise.\n// @quiz What is one?\n// @answer One.\n// @testcase twice(1) -> 2\npublic class DraftChallenge { public static int twice(int n) { return n * 2; } }\n');
    const topic = parseJavaFile(note, fixture);
    check(topic.customQuizzes.length === 1, 'authored quiz retained in parsed draft notes');
    check(buildPracticeChallenges([topic], new Set()).length === 0, 'draft practice is not emitted');
    const quick = buildQuickRevisionEntry(topic.chapter, [topic], false);
    check(!quick.takeaways.length && !quick.gotchas.length, 'draft quick revision empty');
    const rich = [1, 2, 3].map(i => ({ ...topic, code: '', customQuizzes: [], topicName: `Topic ${i}`, filePath: `src/T${i}.java`, headerComments: [{ type: 'paragraph', lines: ['An integer value stores a whole number.', 'A variable has a declared type in Java.', 'A boolean value can be either true or false.'] }] }));
    check(!buildStarterQuestions('Chapter 1: Fixture', rich).some(q => q.kind === 'true-false'), 'no scored topic-membership generation');
    check(!buildStarterQuestions('Chapter 1: Fixture', [{ ...rich[0], code: 'System.out.println(10 + 20 + "Java");' }]).some(q => q.kind === 'predict'), 'numeric prefix is not guessed as string concatenation');
    const concat = buildStarterQuestions('Chapter 1: Fixture', [{ ...rich[0], code: 'System.out.println("A+B" + 3);' }]).find(q => q.kind === 'predict');
    check(concat && concat.answer[0] === 'A+B3', 'plus inside string literal is not a concatenation boundary');
    const files = [
      ['src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java', /boolean\s*\|\s*1 bit|short -> char/],
      ['src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringVsStringBufferVsStringBuilder.java', /reference variable always sits on the stack/]
    ];
    for (const [file, wrong] of files) check(!wrong.test(fs.readFileSync(path.join(root, file), 'utf8')), `corrected factual claim regressed in ${file}`);
    const noJavaEnv = { ...process.env };
    for (const key of Object.keys(noJavaEnv)) if (key.toLowerCase() === 'path') delete noJavaEnv[key];
    noJavaEnv.PATH = '';
    const missing = spawnSync(process.execPath, ['-e', "require('./scripts/lib/run-java.js').requireJava()"], { cwd: root, env: noJavaEnv, encoding: 'utf8' });
    check(missing.status !== 0 && /Required native check cannot run/.test(missing.stderr), 'missing native tools fail the required job');
    if (process.argv.includes('--native')) {
      requireJava();
      const evidence = nativeValidation('regression-probe', 'test-fingerprint');
      check(evidence.release === 21 && evidence.compilerVersion && evidence.runtimeVersion && evidence.validatorFingerprint === 'test-fingerprint', 'native evidence names target, actual tools, and validator');
      const scenarios = [
        ['System.out.println(21);', '2', false],
        ['System.out.println("A 7");', 'B 7', false],
        ['int n = "bad"; System.out.println(n);', 'bad', false],
        ['throw new IllegalStateException("expected runtime regression");', '', false],
        ['', '', true],
        ['static void change(int x) { x = 99; }\nint a = 1; change(a); System.out.println(a);', '1', true],
        ['class Base { Base(int x) {} } class Child extends Base { Child() { int x = 1; super(x); } }\nSystem.out.println("ok");', 'ok', false],
        ['class Base { Base(int x) {} } class Child extends Base { Child() { super(1); } }\nSystem.out.println("ok");', 'ok', true]
      ];
      for (let i = 0; i < scenarios.length; i++) {
        const [code, value, shouldPass] = scenarios[i];
        const result = await checkOne({ program: asRunnableProgram(code), expectation: { value } }, fixture, i);
        check((result === null) === shouldPass, `native regression ${i}: ${result}`);
      }
    }
    // ---- An editorial rule must not depend on how the checkout stored newlines ----
    // The catalogue is built from text read with CRLF normalized away, while the file
    // on disk may use CRLF. Comparing the two representations directly rejected every
    // valid proposal with "Enhancement source changed" on a Windows checkout.
    const { validateReplacement, sourceFingerprint, lineEndingOf } = require('./lib/note-enhancements.js');
    const lfNote = 'public class Sample {\n    // The this() keyword can be parameterised or non - parameterised.\n}\n';
    const crlfNote = lfNote.replace(/\n/g, '\r\n');
    check(sourceFingerprint(lfNote) === sourceFingerprint(crlfNote), 'line endings do not change a note fingerprint');
    check(lineEndingOf(crlfNote) === '\r\n' && lineEndingOf(lfNote) === '\n', 'line ending detection');
    const ruleBefore = 'The this() keyword can be parameterised or non - parameterised.';
    const ruleAfter = 'Use this() to call another constructor with arguments.';
    const crlfResult = validateReplacement(crlfNote, ruleBefore, ruleAfter);
    check(crlfResult.includes(ruleAfter), 'an LF rule applies to a CRLF file');
    check(crlfResult.includes('\r\n') && !/[^\r]\n/.test(crlfResult), 'applying a rule preserves the file line ending');
    check(!validateReplacement(lfNote, ruleBefore, ruleAfter).includes('\r'), 'an LF file stays LF');
    // The real multi-line rule (single-initialization) spans two lines inside a block
    // comment. That shape could never match a CRLF file before this fix.
    const blockNote = "/*\nThat's a good way of doing things, and it often leads to good coding because it avoids\nhaving to duplicate code by duplicating initialization in more than one place.\n*/\npublic class Sample {}\n";
    const blockCrlf = blockNote.replace(/\n/g, '\r\n');
    const multiLine = validateReplacement(blockCrlf,
      "That's a good way of doing things, and it often leads to good coding because it avoids\nhaving to duplicate code by duplicating initialization in more than one place.",
      'Keeping the initialization in one constructor is better because it avoids');
    check(multiLine.includes('Keeping the initialization in one constructor'), 'a multi-line rule matches a CRLF file');
    check(!/[^\r]\n/.test(multiLine), 'a multi-line replacement preserves CRLF');
    assert.throws(() => validateReplacement(crlfNote, 'text that is not present', 'x'), /exactly once/); assertions++;
    assert.throws(() => validateReplacement(crlfNote, 'public class Sample', 'x'), /comments only/); assertions++;

    console.log(`Content-engine regressions: ${assertions} passed${process.argv.includes('--native') ? ', including native execution failure/mismatch probes' : ' (native probes not requested)'}.`);
  } finally { fs.rmSync(fixture, { recursive: true, force: true }); }
}
main().catch(error => { console.error(error.stack); process.exitCode = 1; });
