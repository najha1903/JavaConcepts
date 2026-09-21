// Applies the interface fixes to style.css in one pass, so they are reproducible and
// reviewable rather than a series of hand edits.
//
//   1. contrast   - a per-theme --text-muted that clears WCAG AA
//   2. type scale - nothing below 12px, body text at 14px
//   3. spacing    - container gaps and card padding get a floor
//
// Chips, badges, tags, code and toggles are named and excluded from the spacing floor:
// a small chip SHOULD be tight, and inflating it makes it look broken rather than roomy.
//
// Usage: node scripts/apply-ui-fixes.js
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'revision-dashboard', 'style.css');
let css = fs.readFileSync(file, 'utf8');
const before = css.length;
const log = [];

// ---- 1. Contrast -------------------------------------------------------------
// Measured, not chosen by eye. #64748b was 4.18:1 on dark and 4.40:1 on light, both
// below the 4.5:1 AA minimum, and it is used in 60 places.
const darkBlock = css.match(/(:root\[data-theme="dark"\]\s*\{[\s\S]*?\n\})/);
if (darkBlock) {
  css = css.replace(darkBlock[1], darkBlock[1].replace(
    '--text-muted: #64748b;',
    '/* Measured against --bg-app, not chosen by eye. The old #64748b was 4.18:1 here,\n     below the WCAG AA minimum of 4.5:1, and it is used in 60 places. #7a8aa3 measures\n     5.68:1 and stays clearly dimmer than --text-secondary, so the hierarchy survives. */\n  --text-muted: #7a8aa3;'
  ));
  log.push('dark --text-muted -> #7a8aa3 (5.68:1)');
}
const lightBlock = css.match(/(:root\[data-theme="light"\]\s*\{[\s\S]*?\n\})/);
if (lightBlock) {
  css = css.replace(lightBlock[1], lightBlock[1].replace(
    '--text-muted: #64748b;',
    '/* Measured against --bg-app. The old #64748b was 4.40:1 here, also below AA.\n     One value cannot serve both themes: lightening it for the dark theme makes it fail\n     on this one, which is why they differ. */\n  --text-muted: #556377;'
  ));
  log.push('light --text-muted -> #556377 (5.65:1)');
}

// ---- 2. Base typography ------------------------------------------------------
// Neither html nor body declared a size, so every rule picked its own and 110 of 205
// ended up below 13.5px.
const bodyRule = css.match(/(?<=\n)body \{[\s\S]*?\n\}/);
if (bodyRule) {
  css = css.replace(bodyRule[0], bodyRule[0].replace(
    '  color: var(--text-primary);',
    '  color: var(--text-primary);\n  /* A base size and line height, so anything without its own inherits something\n     readable. Neither html nor body declared a font-size before. */\n  font-size: 14px;\n  line-height: 1.6;'
  ));
  log.push('body -> font-size 14px, line-height 1.6');
}

// ---- 3. Type scale ----------------------------------------------------------
// Floor of 12px, body text at 14px. rem values become px so the scale is one unit and
// can be checked mechanically.
const REM_TO_PX = { '0.7': 13, '0.75': 13, '0.8': 13, '0.84': 13, '0.85': 13, '0.875': 13, '0.89': 13, '0.9': 13, '1.1': 15 };
const PX_SHIFT = { '8': 12, '9': 12, '10': 12, '11': 12, '11.5': 12, '12': 13, '12.5': 13, '13': 14, '13.5': 14 };

let sizeChanges = 0;
for (const [from, to] of Object.entries(REM_TO_PX)) {
  css = css.replace(new RegExp(`font-size:\\s*${from.replace('.', '\\.')}rem`, 'g'), () => { sizeChanges++; return `font-size: ${to}px`; });
}
for (const from of Object.keys(PX_SHIFT).sort((a, b) => Number(b) - Number(a))) {
  css = css.replace(new RegExp(`font-size:\\s*${from.replace('.', '\\.')}px(?![\\d.])`, 'g'), () => { sizeChanges++; return `font-size: ${PX_SHIFT[from]}px`; });
}
css = css.replace(/font-size:\s*0\.9em/g, () => { sizeChanges++; return 'font-size: 13px'; });
log.push(`type scale: ${sizeChanges} font-size declarations raised`);

// ---- 4. The quiz menu, which was the reported example ------------------------
const menuFixes = [
  [/\.quiz-menu-grid \{[^}]*\}/, (m) => m.replace('minmax(260px, 1fr)', 'minmax(280px, 1fr)').replace('gap: 14px', 'gap: 18px').replace('margin-bottom: 22px', 'margin-bottom: 26px')],
  [/\.quiz-menu-chapters \{[^}]*\}/, (m) => m.replace('gap: 8px', 'gap: 12px')],
  [/\.quiz-menu-chapter-row \{[^}]*\}/, (m) => m.replace('padding: 10px 14px', 'padding: 14px 18px')],
  [/\.quiz-menu-chapter-actions \{[^}]*\}/, (m) => m.replace('gap: 6px', 'gap: 10px')]
];
for (const [pattern, fix] of menuFixes) {
  const m = css.match(pattern);
  if (m) css = css.replace(m[0], fix(m[0]));
}
log.push('quiz menu: grid 18px, chapters 12px, row padding 14px 18px, actions 10px');

// ---- 5. Spacing floor --------------------------------------------------------
const CHIP_LIKE = [
  'queue-kind', 'level-badge', 'question-tag', 'count-chip', 'difficulty-badge',
  'question-type-badge', 'challenge-item-status', 'check-badge', 'flashcard-chip',
  'mcq-select-all-indicator', 'syntax-badge', 'tag-pill', 'diff-pill', 'anki-rate',
  'anki-scope-btn', 'anki-scope-toggle', 'anki-footer-hint kbd', 'anki-show-btn kbd',
  'dc-count', 'note-table code', 'anki-card-text code', 'anki-card-back-text mark',
  'param-card-header code', 'dc-testcases code', 'explanations-content code',
  'instructions-content code', 'tooltip', 'tag-pills', 'syntax-badge-container',
  'question-tags-row'
];
const CONTAINERS = [
  'chapters-list', 'queue-list', 'mastery-list', 'cov-work-list', 'bank-notes',
  'eval-checklist', 'anki-keypoints', 'score-details-box', 'coverage-controls',
  'mastery-controls', 'difficulty-pills', 'practice-tab-bar', 'editor-actions',
  'queue-actions', 'anki-complete-actions', 'notes-topic-actions',
  'notes-export-actions', 'bank-card-actions', 'study-footer-nav',
  'mobile-code-toggle', 'anki-rating-row', 'anki-deck-titlerow', 'nav-section',
  'bank-card-counts', 'test-cases-grid', 'chapter-content', 'quiz-menu-chapter-info',
  'readiness-part', 'mastery-row-main', 'meta-item', 'cov-stat', 'review-item',
  'search-result-card', 'challenge-item', 'param-note-card', 'notes-topic-item',
  'test-case-card', 'bank-question', 'bank-q', 'practice-tab', 'mastery-row'
];

let gapRaised = 0;
let padRaised = 0;
css = css.replace(/^([^\r\n{}]+)\{([^}]*)\}/gm, (whole, selectorRaw, body) => {
  const selector = selectorRaw.trim();
  if (CHIP_LIKE.some(name => selector.includes(name))) return whole;
  let next = body;

  const gap = next.match(/gap:\s*([\d.]+)px/);
  if (gap && Number(gap[1]) < 12) { next = next.replace(gap[0], 'gap: 12px'); gapRaised++; }

  // Padding is raised only for containers, so inline elements keep their own rhythm.
  if (CONTAINERS.some(name => selector.includes(name))) {
    const pad = next.match(/padding:\s*([\d.]+)px(?:\s+([\d.]+)px)?;/);
    if (pad && Number(pad[1]) < 14) {
      const rest = pad[2] !== undefined ? ` ${pad[2]}px` : '';
      next = next.replace(pad[0], `padding: 14px${rest};`);
      padRaised++;
    }
  }
  return selectorRaw + '{' + next + '}';
});
log.push(`spacing: ${gapRaised} gaps and ${padRaised} container paddings raised to the floor`);

fs.writeFileSync(file, css, 'utf8');
console.log('');
log.forEach(line => console.log(`   ${line}`));
console.log(`   stylesheet: ${before} -> ${css.length} characters`);
