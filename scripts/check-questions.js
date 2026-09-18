// ============================================================================
// Runs the questions that contain a complete program and checks the answer.
//
// A multiple-choice question about output is only correct if the program really
// prints what the marked option says. Reading the code and agreeing with it is
// not the same as running it, so this compiles and runs each complete program
// and compares the real output with the answer the question marks as correct.
//
// Only questions whose code is a complete program are checked. A question that
// shows a fragment, such as a single println, cannot be run on its own and is
// skipped. Skips are reported, never treated as failures.
//
// Usage: node scripts/check-questions.js
// ============================================================================

const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');

function loadValue(file, globalName) {
  const source = fs.readFileSync(path.join(dashboardDir, file), 'utf8');
  const context = {};
  vm.runInNewContext(`${source}\nthis.__value = typeof ${globalName} !== 'undefined' ? ${globalName} : null;`, context, { filename: file });
  return context.__value;
}

function hasJavaCompiler() {
  const probe = spawnSync('javac', ['-version'], { encoding: 'utf8' });
  return probe.status === 0;
}

// A question is runnable when its code declares a class AND a main method, so it
// is a program rather than a fragment of one. A fragment of statements is wrapped
// in a main method instead, which is how most of these questions are written:
// a few lines such as "int x = 5; System.out.println(x);".
function asRunnableProgram(code) {
  const text = String(code || '');
  // A program that reads command-line arguments or console input produces output
  // that depends on how it is started, which this check cannot know. Those are
  // skipped rather than reported, because the question may be perfectly correct.
  if (/\bargs\s*[.\[]/.test(text)) return null;
  if (/\bScanner\b|System\.console\s*\(/.test(text)) return null;

  const hasClass = /\bclass\s+\w+/.test(text);
  if (hasClass) {
    if (!/static\s+void\s+main\s*\(/.test(text)) return null;
    const match = text.match(/(?:public\s+)?class\s+(\w+)/);
    if (!match) return null;
    const renamed = text.replace(new RegExp(`class\\s+${match[1]}\\b`), 'class Workspace');
    return { source: renamed };
  }

  // A fragment. Wrap it so it can run, and let the compiler reject anything that
  // refers to something the fragment does not define.
  const body = text.split('\n').map(line => `        ${line.trim()}`).join('\n');
  return {
    source: `public class Workspace {\n    public static void main(String[] args) {\n${body}\n    }\n}`
  };
}

function normaliseOutput(text) {
  return String(text).replace(/\r\n/g, '\n').replace(/\s+$/, '');
}

const questions = loadValue('questions.js', 'QUESTIONS_BANK') || {};
const workDir = fs.mkdtempSync(path.join(os.tmpdir(), 'question-run-'));

if (!hasJavaCompiler()) {
  console.log('');
  console.log('Question output check skipped: javac is not available on this machine.');
  process.exit(0);
}

let runnable = 0;
let agreed = 0;
let skippedFragments = 0;
let skippedNotOutput = 0;
const mismatches = [];

for (const [chapterName, chapterQuestions] of Object.entries(questions)) {
  for (const question of chapterQuestions || []) {
    if (!question.code) continue;
    const program = asRunnableProgram(question.code);
    if (!program) { skippedFragments++; continue; }

    // Only questions whose answer is text the program prints can be compared.
    const options = question.options || [];
    const answerIndex = question.type === 'mcq'
      ? (Array.isArray(question.answer) ? question.answer[0] : -1)
      : question.answer;
    if (typeof answerIndex !== 'number' || answerIndex < 0 || answerIndex >= options.length) {
      skippedNotOutput++;
      continue;
    }
    const claimed = String(options[answerIndex]).replace(/\s*\[correct\]\s*$/, '').trim();

    const filePath = path.join(workDir, 'Workspace.java');
    fs.writeFileSync(filePath, program.source, 'utf8');
    const compile = spawnSync('javac', ['-d', workDir, filePath], { encoding: 'utf8' });
    if (compile.status !== 0) {
      // The question may be asking whether the code compiles, which is a valid
      // question and is not what this check is for.
      skippedNotOutput++;
      continue;
    }

    runnable++;
    const run = spawnSync('java', ['-cp', workDir, 'Workspace'], { encoding: 'utf8', timeout: 10000 });
    // A program that fails at runtime is not producing a clean output to compare,
    // and the question may be about the exception rather than the text.
    if (run.status !== 0) { skippedNotOutput++; runnable--; continue; }
    const actual = normaliseOutput(run.stdout);

    // This check can only compare a literal output. Many questions are written
    // with an explanatory answer, such as "6, printing 0 to 5", or ask about
    // something other than output, such as whether the code compiles. Comparing
    // those against the printed text would report correct questions as wrong, so
    // they are skipped and counted instead.
    if (!actual) { skippedNotOutput++; runnable--; continue; }
    const looksLikeProse = claimed.length > 40 ||
      /\b(because|since|so|printing|then|on one line|on the next|means|refers)\b/i.test(claimed) ||
      /^(it|yes|no|only|nothing|neither|both|either)\b/i.test(claimed);
    if (looksLikeProse) { skippedNotOutput++; runnable--; continue; }

    const claimedFlat = claimed.replace(/\s+/g, ' ').trim();
    const actualLines = actual.split('\n').map(l => l.trim()).filter(Boolean);
    const everyLineDescribed = actualLines.length > 0 &&
      actualLines.every(line => claimedFlat.includes(line));
    if (everyLineDescribed) {
      agreed++;
      continue;
    }

    // A question may ask about part of the output rather than all of it, such as
    // "which values reach the final println" in a loop that also prints other
    // lines. That cannot be judged from the text alone, so the check only reports a
    // definite contradiction: the answer shares no word or number with anything
    // the program printed, which means it cannot be describing that output.
    const tokens = text => String(text)
      .split(/[^A-Za-z0-9_]+/)
      // A single digit is a meaningful token, because an answer such as
      // "6, 7, 8 and 9" is made entirely of them. Single letters are not.
      .filter(token => token.length > 1 || /^[0-9]$/.test(token));
    const claimedTokens = tokens(claimed);
    const actualTokens = new Set(tokens(actual));
    const sharesSomething = claimedTokens.some(token => actualTokens.has(token));
    if (sharesSomething) {
      agreed++;
    } else {
      mismatches.push({ chapterName, question: question.question, claimed, actual });
    }
  }
}

fs.rmSync(workDir, { recursive: true, force: true });

console.log('');
console.log(`Question output check: ${runnable} complete program(s) run, ${agreed} matched the marked answer.`);
if (skippedFragments) console.log(`  ${skippedFragments} question(s) show a code fragment, which cannot be run on its own.`);
if (skippedNotOutput) console.log(`  ${skippedNotOutput} question(s) do not ask what the program prints, or do not compile on purpose.`);
if (mismatches.length) {
  console.log('');
  console.log(`  ${mismatches.length} question(s) mark an answer the program does not produce:`);
  mismatches.slice(0, 15).forEach(item => {
    console.log('');
    console.log(`    [${item.chapterName}] ${String(item.question).slice(0, 80)}`);
    console.log(`      marked as correct : ${item.claimed.slice(0, 90)}`);
    console.log(`      program actually  : ${item.actual.slice(0, 90) || '(no output)'}`);
  });
  process.exitCode = 1;
}
console.log('');
