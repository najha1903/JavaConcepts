(function (root) {
  'use strict';
  let cancelActive = null;
  function cancel() {
    if (cancelActive) cancelActive();
  }
  function run(challenge, code, helpers, timeoutMs = 1500) {
    cancel();
    if (typeof root.Worker !== 'function') {
      return Promise.resolve({ unavailable: 'Web Workers are unavailable. Nothing was executed; run this Java in your IDE.' });
    }
    return new Promise(resolve => {
      let worker, timer, settled = false;
      function finish(result) {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        if (worker) worker.terminate();
        cancelActive = null;
        resolve(result);
      }
      cancelActive = () => finish({ unavailable: 'Check cancelled. No result was recorded.' });
      try {
        worker = new root.Worker('practice-worker.js');
        timer = setTimeout(() => finish({
          unavailable: `Check stopped after ${timeoutMs} ms. Possible infinite loop or unsupported code; no result was recorded.`
        }), timeoutMs);
        worker.onerror = () => finish({ unavailable: 'The worker could not run this code. Nothing was checked; use your Java IDE (serve this page over localhost if file access is blocked).' });
        worker.onmessage = event => finish(event.data);
        worker.postMessage({
          code,
          challenge: { id: challenge.id, verifyFnStr: challenge.verifyFnStr, testCases: challenge.testCases },
          helpers: Object.fromEntries(Object.entries(helpers).map(([name, fn]) => [name, fn.toString()]))
        });
      } catch (_) {
        finish({ unavailable: 'The isolated worker could not start. No main-page execution fallback is used; run Java in your IDE.' });
      }
    });
  }
  root.JavaRevRuntime = { run, cancel };
})(globalThis);
