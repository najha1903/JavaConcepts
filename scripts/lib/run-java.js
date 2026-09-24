// ============================================================================
// Running Java from Node, in parallel, without blocking.
//
// Three scripts compile and run Java: check-questions (verifying answers),
// derive-code-questions (recording what a block prints) and
// fill-practice-expectations (calling a method to find its result).
//
// All three used execFileSync in a loop. That BLOCKS the event loop, so any
// "concurrency" written around it was an illusion - the work ran strictly one at a
// time. Measured: check-questions took 28s for 59 programs with six supposed
// workers, and dropped to 9s once the processes were genuinely started in parallel.
//
// Nearly all of the cost is JVM startup, so the concurrency is what decides the
// runtime. One process per core, capped, so a small machine is not swamped and a
// large one is used properly.
// ============================================================================

const os = require('os');
const { spawn, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const JAVA_RELEASE = 21;
let detectedToolchain;

function compileArguments(args) {
  const releaseIndex = args.indexOf('--release');
  const releaseOption = args.find(arg => arg.startsWith('--release='));
  const requested = releaseIndex >= 0 ? args[releaseIndex + 1] : releaseOption ? releaseOption.slice(10) : null;
  if (requested !== null && String(requested) !== String(JAVA_RELEASE)) throw new Error(`Native content checks require --release ${JAVA_RELEASE}, not ${requested}.`);
  if (args.includes('--enable-preview')) throw new Error('Native content checks target non-preview Java 21.');
  return [...(requested === null ? ['--release', String(JAVA_RELEASE)] : []),
    ...(args.includes('-encoding') ? [] : ['-encoding', 'UTF-8']), ...args];
}

function requireJava() {
  if (detectedToolchain) return detectedToolchain;
  const versions = {};
  for (const command of ['javac', 'java']) {
    const result = spawnSync(command, ['-version'], { encoding: 'utf8', windowsHide: true, timeout: 15000 });
    if (result.status !== 0 || result.error) throw new Error(`Required native check cannot run: ${command} is unavailable (${result.error ? result.error.message : result.stderr}).`);
    versions[command] = `${result.stdout || ''}${result.stderr || ''}`.replace(/\r\n?/g, '\n').trim();
  }
  detectedToolchain = Object.freeze({
    release: JAVA_RELEASE,
    preview: false,
    compilerVersion: versions.javac,
    runtimeVersion: versions.java,
    runtimeEvidence: 'observed-on-recorded-runtime; --release constrains language/API, not runtime behavior'
  });
  return detectedToolchain;
}

function nativeValidation(validator, validatorFingerprint) {
  return { ...requireJava(), validator, validatorFingerprint };
}

function createWorkDir(label) {
  return fs.mkdtempSync(path.join(path.resolve(__dirname, '..', '..'), `.content-check-${label}-`));
}

// One process per core, at least two, at most eight. More than eight gains little
// because the work is mostly JVM startup, and it starts to hurt on a small machine.
function availableConcurrency() {
  return Math.max(2, Math.min(8, (os.cpus() || [1]).length));
}

// Starts a process and resolves when it exits. Never rejects: a non-zero status or a
// missing executable is reported in the result, because every caller treats failure
// as data rather than as an exception.
function runProcess(command, args, options = {}) {
  return new Promise(resolve => {
    let stdout = '';
    let stderr = '';
    let settled = false;
    const finish = (status, failureKind = null, error = null) => {
      if (settled) return;
      settled = true;
      resolve({ status, stdout, stderr, failureKind, error });
    };
    let child;
    try {
      const invocation = /^javac(?:\.exe)?$/i.test(path.basename(command)) ? compileArguments(args) : args;
      child = spawn(command, invocation, { cwd: options.cwd, env: options.env || process.env, windowsHide: true });
    } catch (error) {
      finish(-1, 'infrastructure', error.message);
      return;
    }
    const timer = setTimeout(() => { try { child.kill(); } catch (e) {} finish(-1, 'timeout'); }, options.timeout || 30000);
    child.stdout.on('data', d => { stdout += d; });
    child.stderr.on('data', d => { stderr += d; });
    child.on('error', error => { clearTimeout(timer); finish(-1, 'infrastructure', error.message); });
    child.on('close', status => { clearTimeout(timer); finish(status); });
  });
}

// Runs `worker` over `items`, at most `limit` at a time, keeping the results in the
// order the items were given. Results are collected rather than streamed, because
// every caller needs the whole set before it can decide anything.
async function mapWithConcurrency(items, limit, worker) {
  const results = new Array(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, async () => {
    while (true) {
      const index = next++;
      if (index >= items.length) return;
      results[index] = await worker(items[index], index);
    }
  });
  await Promise.all(workers);
  return results;
}

module.exports = { runProcess, mapWithConcurrency, availableConcurrency, requireJava, createWorkDir, JAVA_RELEASE, compileArguments, nativeValidation };
