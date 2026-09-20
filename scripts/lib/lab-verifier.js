// ============================================================================
// The practice lab's verifier, in one place.
//
// The lab checks a learner's method by translating the Java body into JavaScript and
// comparing the result with an expected value. Two scripts need that verifier:
//
//   parse-concepts.js              stores it on each challenge for the browser
//   fill-practice-expectations.js  must run it, so it never writes an expectation
//                                  the lab will reject
//
// It lives here so those two can never drift apart. That matters because the failure
// mode is silent and harmful: if the verifier disagrees with a correct solution, the
// lab tells a learner their CORRECT code is wrong.
//
// The source is returned as a STRING, because the browser evaluates it with eval and
// it has to be serialisable into practice.js.
// ============================================================================

// Builds the verifier for one challenge. `capturesOutput` is true for a void method,
// whose only observable result is what it prints.
function buildVerifySource({ methodName, paramNames, capturesOutput }) {
  if (!paramNames || paramNames.length === 0) return null;
  const argAccess = paramNames.map((_, i) => `testCase.args[${i}]`).join(', ');
  const paramQuoted = paramNames.map(p => `"${p}"`).join(', ');

  if (capturesOutput) {
    // print and println are routed to two helpers so the newline a println adds is
    // captured exactly, and the comparison is then against the text the author wrote.
    //
    // A bare println() pushes an empty line rather than the text "undefined". Without
    // that, a method that prints a blank line could never match its own expected
    // output, and correct code would be marked wrong.
    return `function(userCode, testCase) {
        try {
          if (typeof prepareJavaBody !== "function") return null;
          const body = extractMethodBody(userCode, "${methodName}");
          const prepared = prepareJavaBody(body, true);
          const out = [];
          const __print = (v) => { out.push(v === undefined ? "" : String(v)); };
          const __printLn = (v) => { out.push((v === undefined ? "" : String(v)) + "\\n"); };
          const fn = new Function("__print", "__printLn", ${paramQuoted}, prepared);
          fn(__print, __printLn, ${argAccess});
          const actual = out.join("").replace(/\\s+$/, "");
          const expected = String(testCase.expected).replace(/\\s+$/, "");
          return actual === expected;
        } catch(e) { return null; }
      }`;
  }

  return `function(userCode, testCase) {
        try {
          const body = extractMethodBody(userCode, "${methodName}");
          const prepared = (typeof prepareJavaBody === "function") ? prepareJavaBody(body) : body;
          const fn = new Function(${paramQuoted}, prepared);
          const result = fn(${argAccess});
          const expected = testCase.expected;
          // Floating point results are compared with a small tolerance, because a
          // note such as "returns about 78.53975" is a rounded value.
          if (typeof result === "number" && typeof expected === "number") {
            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);
            return Math.abs(result - expected) <= tolerance;
          }
          return result === expected;
        } catch(e) { return null; }
      }`;
}

module.exports = { buildVerifySource };
