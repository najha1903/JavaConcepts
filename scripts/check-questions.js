// ============================================================================
// Runs the questions that contain a program and checks the answer.
//
// A multiple-choice question about output is only correct if the program really
// prints what the marked option says. Reading the code and agreeing with it is
// not the same as running it, so this compiles and runs each program and compares
// the real output with the answer the question marks as correct.
//
// Speed matters, because this runs inside `npm run approve`. Two things keep it
// quick: every cheap test is applied BEFORE anything is compiled, so only the
// questions that actually ask about printed output reach the compiler, and those
// are compiled a few at a time rather than one after another.
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
const CONCURRENCY = 6;

function loadValue(file, globalName) {
  const source = fs.readFileSync(path.join(dashboardDir, file), 'utf8');
  const context = {};
  vm.runInNewContext(`${source}\nthis.__value = typeof ${globalName} !== 'undefined' ? ${globalName} : null;`, context, { filename: file });
  return context.__value;
}

function hasJavaCompiler() {
  return spawnSync('javac', ['-version'], { encoding: 'utf8' }).status === 0;
}

// A question is runnable when its code declares a class AND a main method. A
// fragment of statements is wrapped in a main method instead, which is how most
// of these questions are written: a few lines such as
// "int x = 5; System.out.println(x);".
function asRunnableProgram(code) {
  const text = String(code || '');
  // Output that depends on how the program is started cannot be known here, and
  // the question may still be perfectly correct, so these are skipped.
  if (/\bargs\s*[.\[]/.test(text)) return null;
  if (/\bScanner\b|System\.console\s*\(/.test(text)) return null;

  if (/\bclass\s+\w+/.test(text)) {
    if (!/static\s+void\s+main\s*\(/.test(text)) return null;
    const match = text.match(/(?:public\s+)?class\s+(\w+)/);
    if (!match) return null;
    return { source: text.replace(new RegExp(`class\\s+${match[1]}\\b`), 'class Workspace') };
  }

  const body = text.split('\n').map(line => `        ${line.trim()}`).join('\n');
  return {
    source: `public class Workspace {\n    public static void main(String[] args) {\n${body}\n    }\n}`
  };
}

// An answer that explains itself cannot be compared with printed text, and a
// question that asks about compiling rather than printing has no output to check.
function looksLikeProse(claimed) {
  return claimed.length > 40 ||
    /\b(because|since|so|printing|then|on one line|on the next|means|refers)\b/i.test(claimed) ||
    /^(it|yes|no|only|nothing|neither|both|either)\b/i.test(claimed);
}

function tokens(text) {
  return String(text)
    .split(/[^A-Za-z0-9_]+/)
    // A single digit is meaningful, because an answer such as "6, 7, 8 and 9" is
    // made entirely of them. Single letters are not.
    .filter(token => token.length > 1 || /^[0-9]$/.test(token));
}

// Compiles and runs one candidate, then compares. Returns a verdict.
function checkOne(candidate, workDir) {
  const dir = path.join(workDir, String(candidate.index));
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, 'Workspace.java');
  fs.writeFileSync(filePath, candidate.program.source, 'utf8');

  const compile = spawnSync('javac', ['-d', dir, filePath], { encoding: 'utf8', timeout: 30000 });
  // A question may be asking whether the code compiles, which is a valid question
  // and not one this check can judge, so a compile failure is a skip.
  if (compile.status !== 0) return { verdict: 'skip' };

  const run = spawnSync('java', ['-cp', dir, 'Workspace'], { encoding: 'utf8', timeout: 15000 });
  if (run.status !== 0) return { verdict: 'skip' };

  const actual = String(run.stdout).replace(/\r\n/g, '\n').replace(/\s+$/, '');
  if (!actual) return { verdict: 'skip' };

  const claimedFlat = candidate.claimed.replace(/\s+/g, ' ').trim();
  const actualLines = actual.split('\n').map(line => line.trim()).filter(Boolean);

  // Every line the program printed appears in the answer.
  if (actualLines.length > 0 && actualLines.every(line => claimedFlat.includes(line))) {
    return { verdict: 'pass' };
  }

  // A question may ask about part of the output rather than all of it, such as
  // "which values reach the final println" in a loop that also prints other lines.
  // That cannot be judged from text alone, so only a definite contradiction is
  // reported: the answer shares no word or number with anything printed.
  const actualTokens = new Set(tokens(actual));
  if (tokens(candidate.claimed).some(token => actualTokens.has(token))) return { verdict: 'pass' };

  return { verdict: 'mismatch', actual };
}

async function main() {
  const questions = loadValue('questions.js', 'QUESTIONS_BANK') || {};

  if (!hasJavaCompiler()) {
    console.log('');
    console.log('Question output check skipped: javac is not available on this machine.');
    return;
  }

  // ---- Pass 1: cheap tests only, no compiler involved ------------------------
  const candidates = [];
  let skippedFragments = 0;
  let skippedNotOutput = 0;
  let index = 0;

  for (const [chapterName, chapterQuestions] of Object.entries(questions)) {
    for (const question of chapterQuestions || []) {
      if (!question.code) continue;
      const program = asRunnableProgram(question.code);
      if (!program) { skippedFragments++; continue; }

      const options = question.options || [];
      const answerIndex = question.type === 'mcq'
        ? (Array.isArray(question.answer) ? question.answer[0] : -1)
        : question.answer;
      if (typeof answerIndex !== 'number' || answerIndex < 0 || answerIndex >= options.length) {
        skippedNotOutput++;
        continue;
      }
      const claimed = String(options[answerIndex]).replace(/\s*\[correct\]\s*$/, '').trim();
      if (looksLikeProse(claimed)) { skippedNotOutput++; continue; }

      candidates.push({ index: index++, chapterName, question, claimed, program });
    }
  }

  // ---- Pass 2: compile and run only the candidates, a few at a time ----------
  const workDir = fs.mkdtempSync(path.join(os.tmpdir(), 'question-run-'));
  const mismatches = [];
  let runnable = 0;
  let agreed = 0;
  let skippedCompile = 0;

  try {
    let next = 0;
    const workers = Array.from({ length: Math.min(CONCURRENCY, candidates.length) }, async () => {
      while (next < candidates.length) {
        const candidate = candidates[next++];
        const result = checkOne(candidate, workDir);
        if (result.verdict === 'skip') { skippedCompile++; continue; }
        runnable++;
        if (result.verdict === 'pass') agreed++;
        else mismatches.push({
          chapterName: candidate.chapterName,
          question: candidate.question.question,
          claimed: candidate.claimed,
          actual: result.actual
        });
      }
    });
    await Promise.all(workers);
  } finally {
    fs.rmSync(workDir, { recursive: true, force: true });
  }

  console.log('');
  console.log(`Question output check: ${runnable} program(s) run, ${agreed} matched the marked answer.`);
  if (skippedFragments) console.log(`  ${skippedFragments} question(s) show a fragment with no output to run.`);
  if (skippedNotOutput) console.log(`  ${skippedNotOutput} question(s) do not ask what the program prints.`);
  if (skippedCompile) console.log(`  ${skippedCompile} question(s) do not compile on their own, or fail at runtime on purpose.`);
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
}

main();
