// Direct runner regressions; never generates practice/dashboard artifacts.
const assert = require('assert');
const fs = require('fs');
const { test } = require('node:test');
const { PRACTICE_CONTRACTS } = require('../data/practice-contracts.js');
const { literal, validateContract, matchesExpected, checkContract } = require('./check-practice-contracts.js');
const { requireJava, createWorkDir } = require('./lib/run-java.js');

test('Java literals preserve small doubles and reject lossy integer inputs', () => {
  assert.strictEqual(literal(1e-13, 'double'), '1e-13d');
  assert.strictEqual(literal(-0, 'double'), '-0.0d');
  assert.strictEqual(literal(2971215073, 'long'), '2971215073L');
  for (const value of [NaN, Infinity, -Infinity]) assert.throws(() => literal(value, 'double'));
  assert.throws(() => literal(9007199254740992, 'long'));
  assert.throws(() => literal(2147483648, 'int'));
  assert.throws(() => literal(1.5, 'int'));
  assert.throws(() => literal(1, 'boolean'));
  assert.throws(() => literal('0); System.exit(0);', 'int'));
});

test('typed comparison rejects truncated arrays, malformed scalars and precision loss', () => {
  assert(matchesExpected('[]', [], 'long[]'));
  assert(matchesExpected('[0, 1, 1, 2]', [0, 1, 1, 2], 'long[]'));
  assert(!matchesExpected('[0, 1, 2, 1]', [0, 1, 1, 2], 'long[]'));
  assert(!matchesExpected('[0, 1]', [0, 1, 1], 'long[]'));
  assert(!matchesExpected('[0, 1, 1, 2]', [0, 1, 1], 'long[]'));
  assert(!matchesExpected('null', [], 'long[]'));
  assert(!matchesExpected('9007199254740992', 9007199254740991, 'long'));
  assert(matchesExpected('2971215073', 2971215073, 'long'));
  for (const output of ['', ' ', '0x10', 'NaN', 'Infinity', '0 junk']) {
    assert(!matchesExpected(output, 0, 'double'));
    assert(!matchesExpected(output, 0, 'int'));
  }
  assert(matchesExpected('3.141592653589793', Math.PI, 'double', 1e-12));
  assert(!matchesExpected('3.15', Math.PI, 'double', 1e-12));
  assert(matchesExpected('1.0E-13', 1e-13, 'double'));
  assert(!matchesExpected('True', true, 'boolean'));
});

test('contract validation requires normal, boundary and justified invalid-input coverage', () => {
  for (const contract of PRACTICE_CONTRACTS) validateContract(contract);
  const teen = PRACTICE_CONTRACTS.find(c => c.id === 'inclusive-teen-range');
  assert.throws(() => validateContract({ ...teen, invalidCasesNotApplicable: undefined }), /missing invalid/);
  assert.throws(() => validateContract({ ...teen, cases: teen.cases.filter(c => c.category !== 'boundary') }), /missing boundary/);
  assert.throws(() => validateContract({ ...teen, cases: teen.cases.filter(c => c.category !== 'normal') }), /missing normal/);
  assert.throws(() => validateContract({ ...teen, tolerance: 1 }), /Tolerance requires/);
  const malformed = { ...teen, cases: teen.cases.map((c, i) => i ? c : { ...c, args: [] }) };
  assert.throws(() => validateContract(malformed), /argument count/);
});

test('native runner checks arrays and reports every mismatch with partial pass counts', async () => {
  requireJava();
  const work = createWorkDir('contract-runner-test');
  try {
    const fibonacci = PRACTICE_CONTRACTS.find(c => c.id === 'fibonacci-sequence');
    assert.strictEqual(await checkContract(fibonacci, work, 0), fibonacci.cases.length);
    const wrong = {
      ...fibonacci,
      cases: fibonacci.cases.map((c, i) => i < 2 ? { ...c, expected: [99] } : c)
    };
    await assert.rejects(checkContract(wrong, work, 1), error => {
      assert.strictEqual(error.failedCases, 2);
      assert.strictEqual(error.passedCases, fibonacci.cases.length - 2);
      assert.match(error.message, /normal \[6\]/);
      assert.match(error.message, /normal \[12\]/);
      return true;
    });
    // A sub-picounit input must not be rounded down to zero by the harness.
    const area = PRACTICE_CONTRACTS.find(c => c.id === 'rectangle-area');
    const tiny = { ...area, cases: area.cases.map(c => ({ ...c })) };
    tiny.cases.push({ category: 'normal', args: [1e-13, 1], expected: 1e-13,
      provenance: { kind: 'independent-contract', file: 'scripts/test-practice-contracts.js' } });
    assert.strictEqual(await checkContract(tiny, work, 2), tiny.cases.length);
  } finally {
    fs.rmSync(work, { recursive: true, force: true });
  }
});
