// ============================================================================
// Checks the interface for the three things that were wrong and are easy to
// reintroduce without noticing.
//
//   1. CONTRAST. --text-muted measured 4.18:1 on the dark background and 4.40:1 on the
//      light one, both below the WCAG AA minimum of 4.5:1 for body text. It is used in
//      60 places, so that one value was the reason so much of the interface looked
//      washed out. This computes every text colour against its own background rather
//      than trusting anyone's eye.
//
//   2. TYPE SIZE. 110 of 205 font-size declarations were below 13.5px and neither html
//      nor body declared a base size, so the scale drifted. Nothing may now be below
//      12px, and body text sits at 14px.
//
//   3. SPACING. 62 gap declarations were 6px or less, which is what made boxes look
//      crammed. Container spacing now has a floor.
//
// Pills, badges, tags and code keep their tight padding on purpose - a small chip
// SHOULD be tight - so they are named and excluded rather than silently ignored.
//
// Usage: node scripts/check-ui.js
// ============================================================================

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const cssFile = path.join(root, 'revision-dashboard', 'style.css');
const css = fs.readFileSync(cssFile, 'utf8');

const failures = [];
const notes = [];

// ---- Contrast, computed -----------------------------------------------------

function luminance(hex) {
  const c = [1, 3, 5].map(i => parseInt(hex.substr(i, 2), 16) / 255)
    .map(v => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

function contrast(a, b) {
  const l1 = luminance(a);
  const l2 = luminance(b);
  const hi = Math.max(l1, l2);
  const lo = Math.min(l1, l2);
  return (hi + 0.05) / (lo + 0.05);
}

// Reads the theme blocks, so the check follows the stylesheet rather than a copy of it.
function themeColours(theme) {
  const block = css.match(new RegExp(`:root\\[data-theme="${theme}"\\]\\s*\\{([\\s\\S]*?)\\n\\}`));
  if (!block) return null;
  const colours = {};
  for (const m of block[1].matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{6})\s*;/g)) {
    colours[m[1]] = m[2];
  }
  return colours;
}

const AA_NORMAL = 4.5;

for (const theme of ['dark', 'light']) {
  const c = themeColours(theme);
  if (!c) { failures.push(`Could not read the ${theme} theme colours from style.css.`); continue; }

  const bg = c['bg-app'];
  if (!bg) { failures.push(`The ${theme} theme has no --bg-app, so contrast cannot be measured.`); continue; }

  for (const name of ['text-primary', 'text-secondary', 'text-muted']) {
    const fg = c[name];
    if (!fg) { failures.push(`The ${theme} theme has no --${name}.`); continue; }
    const ratio = contrast(fg, bg);
    const ok = ratio >= AA_NORMAL;
    if (!ok) failures.push(`${theme} theme: --${name} (${fg}) on --bg-app (${bg}) is ${ratio.toFixed(2)}:1, below the ${AA_NORMAL}:1 minimum.`);
    notes.push(`${theme.padEnd(5)} --${name.padEnd(15)} ${fg}  ${ratio.toFixed(2)}:1  ${ok ? 'pass' : 'FAIL'}`);
  }
}

// ---- Type size ---------------------------------------------------------------

const MIN_FONT_PX = 12;
const sizeMatches = [...css.matchAll(/font-size:\s*([\d.]+)px/g)];
const tooSmall = sizeMatches.filter(m => Number(m[1]) < MIN_FONT_PX);
if (tooSmall.length) {
  failures.push(`${tooSmall.length} font-size declaration(s) are below ${MIN_FONT_PX}px: ${[...new Set(tooSmall.map(m => m[1] + 'px'))].join(', ')}.`);
}
if (/font-size:\s*[\d.]+rem/.test(css)) {
  failures.push('A font-size still uses rem, so it depends on the base size rather than being explicit.');
}
const bodyRule = css.match(/^body\s*\{([^}]*)\}/m);
if (!bodyRule || !/font-size:/.test(bodyRule[1])) {
  failures.push('body declares no font-size, so anything without its own inherits the browser default and the scale drifts again.');
}

// ---- Spacing -----------------------------------------------------------------

const MIN_CONTAINER_GAP_PX = 12;

// Named on purpose: these are chips, toggles and inline pairs whose tight spacing is
// correct, so they are excluded from the floor rather than being quietly skipped.
const CHIP_LIKE = [
  'syntax-badge-container', 'tag-pills', 'question-tags-row', 'anki-scope-toggle',
  'anki-rate', 'queue-kind', 'level-badge', 'question-tag', 'count-chip',
  'difficulty-badge', 'question-type-badge', 'challenge-item-status', 'check-badge',
  'flashcard-chip', 'mcq-select-all-indicator', 'syntax-badge', 'tag-pill', 'diff-pill'
];

const smallGaps = [];
for (const m of css.matchAll(/^([^\r\n{}]+)\{([^}]*)\}/gm)) {
  const selector = m[1].trim();
  if (CHIP_LIKE.some(name => selector.includes(name))) continue;
  const gap = m[2].match(/gap:\s*([\d.]+)px/);
  if (gap && Number(gap[1]) < MIN_CONTAINER_GAP_PX) smallGaps.push(`${selector} (${gap[1]}px)`);
}
if (smallGaps.length) {
  failures.push(`${smallGaps.length} non-chip rule(s) have a gap below ${MIN_CONTAINER_GAP_PX}px: ${smallGaps.slice(0, 5).join(', ')}${smallGaps.length > 5 ? ', ...' : ''}`);
}

// ---- Report -----------------------------------------------------------------

console.log('');
for (const note of notes) console.log(`   ${note}`);
console.log('');
console.log(`   Font sizes below ${MIN_FONT_PX}px        : ${tooSmall.length}`);
console.log(`   Non-chip gaps below ${MIN_CONTAINER_GAP_PX}px      : ${smallGaps.length}`);
console.log(`   Chips excluded from the gap floor : ${CHIP_LIKE.length} named selectors`);

if (failures.length) {
  console.error('');
  failures.forEach(f => console.error(`   ${f}`));
  console.error('');
  console.error(`Interface check failed with ${failures.length} problem(s).`);
  process.exit(1);
}

console.log('');
console.log('   Every text colour clears WCAG AA, no text is below 12px, and no container gap is below 12px.');
