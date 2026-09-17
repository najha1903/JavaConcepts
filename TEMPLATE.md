# Revision Dashboard Template Guide

This repository can bootstrap the same notes-first revision dashboard for JavaScript, TypeScript, Cypress, Playwright, or Selenium projects. The Java project is the reference implementation.

## Create A Project

Run from the JavaConcepts project root:

```bash
node scripts/create-project.js <ProjectName> <technology>
```

Supported technologies:

- `javascript`
- `typescript`
- `cypress`
- `playwright`
- `selenium`

Useful options:

```bash
node scripts/create-project.js PlaywrightConcepts playwright
node scripts/create-project.js MyProject playwright --target "D:\Work\MyProject"
node scripts/create-project.js MyProject playwright --target "D:\Work\MyProject" --dashboard-only
node scripts/create-project.js --help
```

If the target already contains a project, the scaffolder updates the dashboard and parser while leaving the existing `src/` content untouched. The generated project includes a technology-specific parser, dashboard, `package.json`, `README.md`, and `rules.md`.

## Source-To-Portal Flow

The generated project follows this flow:

```text
Source files in src/
        |
        v
Parser extracts notes, code, quizzes, and challenges
        |
        v
Generated data files in revision-dashboard/
        |
        v
Interactive notes, quizzes, practice, and chapter PDF printing
```

After every source change, run:

```bash
npm run revise
```

The command should regenerate the data files, run the generated-content audit when available, and open the dashboard. Generated files must not be edited manually.

## Authoring Contract

The source comments are the core content, even when they are raw input. They should still contain the complete technical idea. The parser improves structure and common wording issues, adds supporting context, and preserves the original rules, examples, constraints, and expected behavior. It should not invent unrelated behavior or replace the author's explanation.

Overview comments belong before the first function, `describe`, class, interface, record, or export:

```javascript
// A locator identifies an element that a test wants to inspect or use.
// Prefer stable user-facing or test-specific selectors so the test survives layout changes.
// A selector that matches several elements can make a test act on the wrong target.
```

Inline comments belong beside important implementation lines:

```javascript
const submitButton = page.getByRole('button', { name: 'Submit' }); // Role-based locators express user-visible intent.
await submitButton.click(); // The click waits for the locator to resolve before interacting.
```

Write complete sentences with a clear subject, action, and consequence. Explain what the concept is, why it matters, how the example works, and which boundary cases can fail. Keep code examples separate from prose so the parser can render them as code blocks.

## Supported Markers

```javascript
// @quiz Why should a test use a stable locator?
// @answer A stable locator continues to identify the intended element when unrelated layout details change.
// @answer Prefer role, label, or test-id locators according to the technology's recommended practice.

// @challenge Build a reliable login workflow
// @desc Create a reusable page object with navigation, field entry, submission, and validation methods.
// @hint Keep locators together and wait on meaningful UI state rather than fixed time delays.
// @testcase login("valid@example.com", "secret") -> dashboard is visible
```

`@quiz` and `@answer` create quiz-bank entries. `@challenge`, `@desc`, `@hint`, and `@testcase` create deep coding problems. These marker lines are excluded from ordinary topic notes.

## Technology Focus

### Cypress

- `cy.get()` versus scoped queries such as `find()`.
- Why fixed `cy.wait(milliseconds)` calls are unreliable.
- Command chaining, assertions, and automatic retries.
- `beforeEach` versus `before`.
- Network interception with `cy.intercept()`.

### Playwright

- Locator priority: role, label, text, test id, then CSS when appropriate.
- Auto-waiting locators versus explicit waits.
- Pages, contexts, multiple tabs, and fixtures.
- `beforeAll`, `beforeEach`, and test isolation.

### JavaScript

- `var`, `let`, and `const` scope and hoisting.
- `==` versus `===` and coercion traps.
- Promises, `async`, and `await`.
- `map`, `filter`, `reduce`, and `forEach`.
- Closures and `this` binding.

### TypeScript

- `interface` versus `type`.
- `any`, `unknown`, and `never`.
- Generics and type guards.
- `readonly` versus `const`.

### Selenium With Java

- Implicit, explicit, and fluent waits.
- Page Object Model design.
- `findElement` versus `findElements`.
- Actions such as hover, drag-and-drop, and right-click.
- TestNG and JUnit lifecycle annotations.

## Quality Checklist

Before running the generator, check that each topic has:

- A meaningful overview before the main declaration.
- Readable inline explanations near important code.
- At least one expected result or concrete example.
- Parameter meaning, valid values, and boundary cases where applicable.
- One common mistake or technology-specific trap.
- Custom quiz answers written as complete explanations.

Then run `npm run revise` and inspect the generated topic in Notes, Quick Revision, Quiz, Practice, and PDF output as applicable.
