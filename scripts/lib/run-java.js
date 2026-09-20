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
const { spawn } = require('child_process');

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
    const finish = (status) => {
      if (settled) return;
      settled = true;
      resolve({ status, stdout, stderr });
    };
    let child;
    try {
      child = spawn(command, args, { windowsHide: true });
    } catch {
      finish(-1);
      return;
    }
    const timer = setTimeout(() => { try { child.kill(); } catch (e) {} finish(-1); }, options.timeout || 30000);
    child.stdout.on('data', d => { stdout += d; });
    child.stderr.on('data', d => { stderr += d; });
    child.on('error', () => { clearTimeout(timer); finish(-1); });
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

module.exports = { runProcess, mapWithConcurrency, availableConcurrency };
