# SDET Champion Revision Dashboard — Template Guide

This document tells Copilot how to bootstrap a new SDET revision dashboard project
from the JavaConcepts template.

## Quick scaffold (automated)

```bash
node scripts/create-project.js <ProjectName> <technology>
```

Technologies: `javascript`, `typescript`, `cypress`, `playwright`, `selenium`

Example:
```bash
node scripts/create-project.js CypressConcepts cypress
node scripts/create-project.js JavaScriptConcepts javascript
node scripts/create-project.js PlaywrightConcepts playwright
```

## What gets created

```
<ProjectName>/
  src/
    Chapter_1_<Tech>_Basics/
      <ExampleFile>        ← starter concept file with example notes
  scripts/
    parse-concepts.js      ← parser adapted for the technology's file types
  revision-dashboard/
    index.html             ← dashboard (title updated for technology)
    app.js                 ← full quiz engine (unchanged)
    style.css              ← styles (unchanged)
    data.js                ← GENERATED
    questions.js           ← GENERATED
    practice.js            ← GENERATED
    deep-challenges.js     ← GENERATED
  package.json             ← npm run revise command
  rules.md                 ← technology-specific authoring guide
  README.md                ← quick-start instructions
```

## Comment format (same for ALL technologies)

### Overview → before first function/describe/class/export
```javascript
// What this concept is — one clear sentence
// Why it matters for SDET work
// Best practice or common interview trap

function myExample() { ... }
```

### Key Takeaways → inline comments inside functions
```javascript
function example() {
  const selector = '[data-testid="btn"]'; // Use data-testid for stable selectors
  cy.get(selector).click(); // cy.get() searches entire DOM
}
```

### Custom quiz questions
```javascript
// @quiz What does cy.intercept() do?
// @answer Stubs/spies on network requests before they reach the server.
// @answer Use it instead of cy.wait(ms) for reliable async test handling.
```

### Deep coding challenges
```javascript
// @challenge Implement a Page Object for a Login page
// @desc Create a LoginPage class with: navigate(), enterEmail(email), enterPassword(pass), submit()
// @hint Use By.id() or data-testid selectors; keep all locators as class fields
// @testcase loginPage.login("valid@test.com", "pass") → navigates to /dashboard
```

## SDET-specific notes to include per technology

### Cypress
- Difference between cy.get() and cy.find()
- Why NOT to use cy.wait(ms) — use cy.intercept() instead
- Difference between commands and assertions
- How Cypress auto-retries work
- beforeEach vs before hooks

### Playwright
- Locator priority: getByRole > getByLabel > getByText > getByTestId > CSS
- Difference from Cypress: multiple tabs/contexts, cross-browser, external process
- page.waitForSelector() vs auto-waiting locators
- fixtures, test.beforeAll, test.afterAll

### JavaScript
- var vs let vs const (hoisting, scope)
- == vs === (type coercion traps)
- async/await vs Promises
- Array methods: map, filter, reduce, forEach
- Closures and this binding

### TypeScript
- interface vs type
- any vs unknown vs never
- Generics
- Type guards (typeof, instanceof, in)
- readonly vs const

### Selenium with Java
- Implicit vs Explicit vs Fluent Wait
- Page Object Model (POM) design pattern
- findElement vs findElements (exception vs empty list)
- Actions class (hover, drag-drop, right-click)
- TestNG vs JUnit annotations

## When to run npm run revise

After EVERY change to source files. The dashboard is always a regeneration away.
