// Repairs text that was double-encoded by reading UTF-8 as Windows-1252 and writing it
// back as UTF-8.
//
// WHY THIS EXISTS
//
// Windows PowerShell 5.1's Get-Content uses the ANSI codepage (Windows-1252 here) when a
// file has no BOM. Reading a UTF-8 file that way turns every multi-byte character into
// several wrong ones, and writing it back with -Encoding UTF8 stores those wrong ones
// permanently. The three-byte em-dash (E2 80 94) becomes the three characters U+00E2,
// U+20AC, U+201D; a tick becomes U+00E2, U+0153, U+201C; an emoji becomes a run of them.
//
// The damage is exactly reversible because the wrong characters are all representable in
// Windows-1252, so encoding them back to 1252 recovers the original UTF-8 bytes.
//
// Bytes that Windows-1252 leaves undefined (81, 8D, 8F, 90, 9D) came through as the C1
// control characters of the same value, which is what makes the round trip complete.
//
// Usage:
//   node scripts/fix-encoding.js            report, and FAIL if damage is found
//   node scripts/fix-encoding.js --write    repair in place
// ============================================================================

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const write = process.argv.includes('--write');

// The Windows-1252 table, as the character each byte decodes to. Bytes 0x00-0x7F and
// 0xA0-0xFF are the same as Latin-1; the gaps below are where 1252 differs, and the
// undefined slots map to the C1 control character of the same value.
const CP1252_HIGH = {
  0x80: '\u20AC', 0x82: '\u201A', 0x83: '\u0192', 0x84: '\u201E', 0x85: '\u2026',
  0x86: '\u2020', 0x87: '\u2021', 0x88: '\u02C6', 0x89: '\u2030', 0x8A: '\u0160',
  0x8B: '\u2039', 0x8C: '\u0152', 0x8E: '\u017D', 0x91: '\u2018', 0x92: '\u2019',
  0x93: '\u201C', 0x94: '\u201D', 0x95: '\u2022', 0x96: '\u2013', 0x97: '\u2014',
  0x98: '\u02DC', 0x99: '\u2122', 0x9A: '\u0161', 0x9B: '\u203A', 0x9C: '\u0153',
  0x9E: '\u017E', 0x9F: '\u0178'
};

// character -> the byte Windows-1252 would have produced it from
const TO_BYTE = new Map();
for (let b = 0x00; b <= 0xFF; b++) {
  let ch;
  if (b < 0x80 || b >= 0xA0) ch = String.fromCharCode(b);
  else if (CP1252_HIGH[b]) ch = CP1252_HIGH[b];
  else ch = String.fromCharCode(b);   // undefined: the C1 control of the same value
  TO_BYTE.set(ch, b);
}

// The characters that only ever appear as a result of this damage. A file containing any
// of these is almost certainly double-encoded.
const DAMAGE = /[\u00C2-\u00EF][\u0080-\u00BF\u2013\u2014\u2018\u2019\u201C\u201D\u2020\u2021\u2022\u2026\u2030\u2039\u203A\u20AC\u2122\u0152\u0153\u0160\u0161\u0178\u017D\u017E\u0192\u02C6\u02DC]/;

function damagedSequences(text) {
  return [...new Set((text.match(new RegExp(DAMAGE.source, 'g')) || []))];
}

// Reverses the double-encoding: every character back to its 1252 byte, then those bytes
// read as UTF-8.
function repair(text) {
  const bytes = [];
  for (const ch of text) {
    const byte = TO_BYTE.get(ch);
    if (byte === undefined) {
      // A genuine non-ASCII character that was never damaged. Leave its UTF-8 bytes.
      for (const b of Buffer.from(ch, 'utf8')) bytes.push(b);
    } else {
      bytes.push(byte);
    }
  }
  return Buffer.from(bytes).toString('utf8');
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.git') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(css|js|html|md|json|java)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const files = walk(root);
const damaged = [];

for (const file of files) {
  const raw = fs.readFileSync(file);
  const text = raw.toString('utf8');
  const sequences = damagedSequences(text);
  if (!sequences.length) continue;

  const fixed = repair(text);
  // A repair that introduces the replacement character has destroyed something, so it is
  // refused rather than written.
  const lost = (fixed.match(/\uFFFD/g) || []).length;
  const remaining = damagedSequences(fixed);

  damaged.push({
    file: path.relative(root, file),
    sequences,
    before: sequences.length,
    lost,
    remaining: remaining.length
  });

  if (write && lost === 0 && remaining.length === 0) {
    fs.writeFileSync(file, fixed, 'utf8');
  }
}

if (!damaged.length) {
  console.log('No double-encoded text found.');
  process.exit(0);
}

console.log('');
console.log(`${damaged.length} file(s) contain double-encoded text:`);
for (const d of damaged) {
  console.log('');
  console.log(`  ${d.file}`);
  console.log(`    damaged sequences : ${d.before}`);
  console.log(`    ${d.sequences.slice(0, 8).map(s => JSON.stringify(s)).join(' ')}`);
  if (d.lost) console.log(`    WOULD LOSE ${d.lost} character(s) - refused`);
  if (d.remaining) console.log(`    WOULD REMAIN DAMAGED - refused`);
}

console.log('');
if (write) {
  const repaired = damaged.filter(d => !d.lost && !d.remaining).length;
  console.log(`Repaired ${repaired} file(s).`);
} else {
  console.log('Run with --write to repair. This is also a check: it fails the build while damage exists, so double-encoded text cannot slip in unnoticed again.');
  // Non-zero so `npm run verify` stops. The damage is silent in a browser - the characters
  // simply render wrong - which is exactly why it needs a check rather than vigilance.
  process.exit(1);
}
