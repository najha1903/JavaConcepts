'use strict';
// This worker is a bounded JavaScript approximation, not a JVM or a security sandbox.
// It never accesses the page or local study storage. The page terminates it on timeout.
self.onmessage = event => {
  const { challenge, code, helpers } = event.data;
  try {
    for (const [name, source] of Object.entries(helpers)) {
      self[name] = new Function(`return (${source});`)();
    }
    const verify = new Function(`return (${challenge.verifyFnStr});`)();
    const outcomes = [];
    for (const testCase of challenge.testCases) {
      try {
        const outcome = verify.call(challenge, code, testCase);
        outcomes.push(outcome === true ? 'match' : outcome === false ? 'mismatch' : 'unsupported');
      } catch (_) { outcomes.push('unsupported'); }
    }
    self.postMessage({ outcomes });
  } catch (_) {
    self.postMessage({ unavailable: 'Unsupported verifier or syntax. Nothing was checked; use your Java IDE.' });
  }
};
