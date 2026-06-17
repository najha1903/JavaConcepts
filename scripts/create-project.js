const fs = require('fs');
const path = require('path');

// ==========================================================================
// Technology configurations
// ==========================================================================
const TECH_CONFIG = {
  javascript: {
    label: 'JavaScript',
    fileExtensions: ['.js'],
    title: 'JavaScript Revision Dashboard',
    srcExampleFolder: 'Chapter_1_JavaScript_Basics',
    exampleFile: 'Variables.js',
    exampleContent: getJsExampleContent('javascript'),
    ocjpEquivalent: 'JavaScript Interview & W3Schools Quiz Style',
    classPattern: null
  },
  typescript: {
    label: 'TypeScript',
    fileExtensions: ['.ts'],
    title: 'TypeScript Revision Dashboard',
    srcExampleFolder: 'Chapter_1_TypeScript_Basics',
    exampleFile: 'TypeAnnotations.ts',
    exampleContent: getJsExampleContent('typescript'),
    ocjpEquivalent: 'TypeScript Certification & Interview Questions',
    classPattern: null
  },
  cypress: {
    label: 'Cypress',
    fileExtensions: ['.js', '.ts'],
    title: 'Cypress Testing Revision Dashboard',
    srcExampleFolder: 'Chapter_1_Cypress_Basics',
    exampleFile: 'CypressSelectors.js',
    exampleContent: getJsExampleContent('cypress'),
    ocjpEquivalent: 'Cypress Interview & Best Practices',
    classPattern: null
  },
  playwright: {
    label: 'Playwright',
    fileExtensions: ['.ts', '.js'],
    title: 'Playwright Testing Revision Dashboard',
    srcExampleFolder: 'Chapter_1_Playwright_Basics',
    exampleFile: 'PlaywrightBasics.ts',
    exampleContent: getJsExampleContent('playwright'),
    ocjpEquivalent: 'Playwright Interview & Microsoft Certification Style',
    classPattern: null
  },
  selenium: {
    label: 'Selenium with Java',
    fileExtensions: ['.java'],
    title: 'Selenium with Java Revision Dashboard',
    srcExampleFolder: 'Chapter_1_WebDriver_Basics',
    exampleFile: 'WebDriverSetup.java',
    exampleContent: getJsExampleContent('selenium'),
    ocjpEquivalent: 'Selenium WebDriver Interview Questions',
    classPattern: 'java'
  }
};

function getJsExampleContent(tech) {
  const examples = {
    javascript: `// Variables in JavaScript can be declared with var, let, or const.
// let and const are block-scoped; var is function-scoped — prefer let/const in modern JS.
// const does NOT mean immutable for objects/arrays — the reference is constant, but the value can change.
// Important: typeof null returns "object" — this is a famous JavaScript bug retained for compatibility.
// SDET note: Understanding variable scope is critical for writing reliable test helper functions.

// @quiz What is the difference between let, const, and var?
// @answer var is function-scoped and hoisted; let and const are block-scoped.
// @answer const prevents reassignment of the variable reference, but object properties can still change.

// @quiz What does typeof null return in JavaScript?
// @answer "object" — this is a well-known JavaScript quirk/bug kept for legacy compatibility.

const topic = "Variables";
const chapter = "JavaScript Basics";

let score = 95; // let allows reassignment
const PI = 3.14159; // const reference cannot be reassigned

const person = { name: "Alice" };
person.name = "Bob"; // This works — const protects the reference, not the object content

console.log(typeof null); // "object" — famous JS gotcha
console.log(typeof undefined); // "undefined"
`,
    typescript: `// TypeScript adds static typing to JavaScript — types are checked at compile time, not runtime.
// TypeScript is a superset of JavaScript — all valid JS is valid TS.
// Type annotations: let name: string = "Alice"; — compiler error if you assign a number.
// Interface vs Type: both define object shapes; interfaces are preferred for object contracts; types for unions/intersections.
// Important: TypeScript types are ERASED at runtime — they only exist during development/compilation.

// @quiz What is the difference between interface and type in TypeScript?
// @answer Both define object shapes. interface is preferred for object contracts and supports declaration merging. type is more flexible — supports unions, intersections, and mapped types.

// @quiz Are TypeScript types available at runtime?
// @answer No. TypeScript types are erased during compilation to JavaScript. typeof still refers to JS types, not TS types.

const greeting: string = "Hello TypeScript";
let count: number = 0;

interface User {
  name: string; // Required property
  age?: number; // Optional property (? makes it optional)
}

const user: User = { name: "Alice" }; // age is optional so this is valid
`,
    cypress: `// Cypress is a front-end testing tool that runs directly in the browser (unlike Selenium which is external).
// All Cypress commands are asynchronous and automatically retry until the assertion passes or times out.
// Best practice: use data-testid attributes for selectors — they don't break with UI/styling changes.
// Important: cy.get() searches the entire DOM; cy.find() searches within the current subject element.
// SDET note: Cypress automatically waits — never use cy.wait(1000); use cy.intercept() for network waits.

// @quiz Why is cy.wait(1000) considered bad practice in Cypress?
// @answer Fixed waits make tests slow and flaky. Use cy.intercept() to wait for specific network requests, or rely on Cypress automatic retry/assertion waiting.

// @quiz What is the difference between cy.get() and cy.find()?
// @answer cy.get() queries from the document root. cy.find() queries within the currently yielded subject element.

describe('Login Feature', () => {
  beforeEach(() => {
    cy.visit('/login'); // Navigate to login page before each test
  });

  it('should login with valid credentials', () => {
    cy.get('[data-testid="email-input"]').type('user@test.com'); // Use data-testid for stable selectors
    cy.get('[data-testid="password-input"]').type('password123');
    cy.get('[data-testid="login-btn"]').click();
    cy.url().should('include', '/dashboard'); // Assert URL changed
  });
});
`,
    playwright: `// Playwright is a cross-browser testing framework by Microsoft supporting Chromium, Firefox, and WebKit.
// Unlike Cypress, Playwright can test multiple browser contexts/tabs in the same test.
// Playwright uses auto-waiting — actions and assertions automatically wait for elements to be ready.
// Locator strategy priority: getByRole > getByLabel > getByText > getByTestId > CSS/XPath.
// Important: Playwright tests run in a separate process from the browser — unlike Cypress (in-browser).

// @quiz What is the recommended locator priority order in Playwright?
// @answer getByRole() → getByLabel() → getByText() → getByTestId() → CSS/XPath. Role-based locators are most resilient to UI changes and align with accessibility.

// @quiz Can Playwright test multiple browser tabs in the same test?
// @answer Yes. Playwright supports multiple browser contexts and pages. Cypress does not natively support multiple tabs.

import { test, expect } from '@playwright/test';

test('user can login', async ({ page }) => {
  await page.goto('/login'); // Navigate to login page
  await page.getByLabel('Email').fill('user@test.com'); // Use role/label locators (preferred)
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Login' }).click(); // Role-based selector
  await expect(page).toHaveURL('/dashboard'); // Assert URL
});
`,
    selenium: `// Selenium WebDriver is the industry standard for browser automation in Java/SDET.
// WebDriver communicates with browsers via the W3C WebDriver protocol.
// Always use Explicit Waits (WebDriverWait) — never Thread.sleep() in production tests.
// Page Object Model (POM) is the standard design pattern: each page = one class with locators + actions.
// Important: driver.findElement() throws NoSuchElementException immediately if element not found.
// SDET note: Use By.cssSelector() or By.id() for performance; avoid By.xpath() for complex selectors.

// @quiz What is the difference between Implicit Wait and Explicit Wait in Selenium?
// @answer Implicit Wait: sets a global timeout for all findElement() calls. Explicit Wait: waits for a specific condition (element visible, clickable) using WebDriverWait + ExpectedConditions. Explicit is preferred.

// @quiz What is the Page Object Model (POM)?
// @answer A design pattern where each web page has a corresponding class. Locators and actions for that page are encapsulated in the class. Reduces code duplication and makes tests maintainable.

public class WebDriverSetup {

    public static void main(String[] args) throws InterruptedException {

        WebDriver driver = new ChromeDriver(); // Initialize ChromeDriver
        driver.get("https://example.com"); // Navigate to URL

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10)); // Explicit wait
        WebElement loginBtn = wait.until(
            ExpectedConditions.elementToBeClickable(By.id("login-btn")) // Wait until clickable
        );
        loginBtn.click();

        driver.quit(); // Always close the browser in teardown
    }
}
`
  };
  return examples[tech] || examples.javascript;
}

// ==========================================================================
// Step 1: Copy revision-dashboard folder, adapting titles/branding
// ==========================================================================
function copyDashboard(srcDir, destDir, tech, config) {
  const dashSrc = path.join(srcDir, 'revision-dashboard');
  const dashDest = path.join(destDir, 'revision-dashboard');
  fs.mkdirSync(dashDest, { recursive: true });

  fs.readdirSync(dashSrc).forEach(file => {
    let content = fs.readFileSync(path.join(dashSrc, file), 'utf8');
    content = content.replace(/Java Concepts Revision Dashboard/g, config.title);
    content = content.replace(/JavaRevise/g, config.label + 'Revise');
    content = content.replace(/java-concepts/g, tech.toLowerCase() + '-concepts');
    fs.writeFileSync(path.join(dashDest, file), content, 'utf8');
  });
}

// ==========================================================================
// Step 2: Copy and adapt parse-concepts.js for the target technology
// ==========================================================================
function createParser(srcDir, destDir, tech, config) {
  let parser = fs.readFileSync(path.join(srcDir, 'scripts', 'parse-concepts.js'), 'utf8');

  const extensions = config.fileExtensions.map(e => `'${e}'`).join(', ');

  // Replace .java file filter with multi-extension check
  parser = parser.replace(
    "} else if (file.endsWith('.java')) {",
    `} else if ([${extensions}].some(ext => file.endsWith(ext))) {`
  );

  if (tech !== 'selenium') {
    // Replace Java class declaration regex with a multi-language equivalent
    parser = parser.replace(
      `const classDefRegex = /^\\s*(public\\s+)?(abstract\\s+|final\\s+)?(class|interface|record|enum)\\s+\\w+/m;`,
      `// Multi-language: detect first function/describe/export/class declaration
  const classDefRegex = /^\\s*(describe|it|test|export|function|class|const\\s+\\w+\\s*=\\s*(async\\s+)?function|const\\s+\\w+\\s*=\\s*async|import)\\b/m;`
    );

    // Replace Java-specific topic name derivation
    parser = parser.replace(
      `const topicName = fileName.replace('.java', '').replace(/([A-Z])/g, ' $1').trim();`,
      `const topicName = fileName.replace(/\\.(java|js|ts|jsx|tsx)$/, '').replace(/([A-Z])/g, ' $1').trim();`
    );
  }

  // Update auto-generated comment
  parser = parser.replace(
    `// Auto-generated. Do NOT edit manually — run 'npm run revise' to regenerate.`,
    `// Auto-generated for ${config.label}. Do NOT edit manually — run 'npm run revise' to regenerate.`
  );

  const scriptsDir = path.join(destDir, 'scripts');
  fs.mkdirSync(scriptsDir, { recursive: true });
  fs.writeFileSync(path.join(scriptsDir, 'parse-concepts.js'), parser, 'utf8');
}

// ==========================================================================
// Step 3: Create example source file for the technology
// ==========================================================================
function createSrcExample(destDir, tech, config) {
  const exDir = path.join(destDir, 'src', config.srcExampleFolder);
  fs.mkdirSync(exDir, { recursive: true });
  fs.writeFileSync(path.join(exDir, config.exampleFile), config.exampleContent, 'utf8');
}

// ==========================================================================
// Step 4: Create package.json with npm run revise command
// ==========================================================================
function createPackageJson(destDir, projectName, tech) {
  const pkg = {
    name: projectName.toLowerCase().replace(/\s+/g, '-'),
    version: '1.0.0',
    description: `${projectName} Revision Dashboard`,
    scripts: {
      revise: 'node scripts/parse-concepts.js && start revision-dashboard/index.html'
    },
    dependencies: {}
  };
  fs.writeFileSync(path.join(destDir, 'package.json'), JSON.stringify(pkg, null, 2), 'utf8');
}

// ==========================================================================
// Step 5: Create technology-adapted rules.md
// ==========================================================================
function createRules(destDir, tech, config) {
  const rules = `# ${config.label} Revision Dashboard — Authoring Rules

This is a plug-and-play SDET revision system based on the JavaConcepts template.
Run \`npm run revise\` to regenerate the dashboard from source files.

## Philosophy
Write to become a champion SDET, not just to pass a test.
Every note should explain: What? Why? How? Where does it go wrong?

## Comment structure (same as JavaConcepts)

### Overview notes → BEFORE first function/describe/class
\`\`\`${tech === 'selenium' ? 'java' : 'javascript'}
// What this concept is — one clear sentence
// Why it matters for SDET / real-world testing
// Best practice or SDET exam trap

${config.exampleContent.split('\n').slice(0, 8).join('\n')}
\`\`\`

## Gotcha keywords (flagged in Quick Revision)
important  note  pitfall  warning  caution  trap  remember  avoid

## Custom quiz questions
\`\`\`javascript
// @quiz Your question here
// @answer First answer point
// @answer Second answer point (optional)
\`\`\`

## Custom deep challenges
\`\`\`javascript
// @challenge Build a Page Object for the Login page
// @desc Create a LoginPage class with locators and action methods
// @hint Use By.id() for stable selectors; expose login(user, pass) method
// @testcase loginPage.login("valid@test.com", "pass") → navigates to dashboard
\`\`\`

## Folder naming
\`\`\`
src/
  Chapter_<N>_<TopicName>/
    Sub_Chapter_<N>_<SubTopicName>/   (optional)
      MyConceptFile.${config.fileExtensions[0].replace('.', '')}
\`\`\`

## Adding a new topic
1. Create a file under src/Chapter_N_.../
2. Add overview comments BEFORE the first function/describe/class
3. Add inline comments on key lines
4. Add @quiz/@answer pairs for tricky questions
5. Run: npm run revise
6. Open revision-dashboard/index.html

Everything is generated automatically.
`;
  fs.writeFileSync(path.join(destDir, 'rules.md'), rules, 'utf8');
}

// ==========================================================================
// Step 6: Create README.md with quick-start instructions
// ==========================================================================
function createReadme(destDir, projectName, tech, config) {
  const readme = `# ${projectName}

A revision dashboard for **${config.label}** — part of the SDET Champion mastery system.

## Quick Start

\`\`\`bash
npm run revise
\`\`\`

This scans all \`src/**/*${config.fileExtensions[0]}\` files, extracts notes and quizzes,
and opens the revision dashboard.

## Adding new topics

1. Create a \`src/Chapter_N_<Name>/<TopicFile>${config.fileExtensions[0]}\`
2. Add \`//\` comments before the first function (Overview)
3. Add inline \`//\` comments inside functions (Key Takeaways)
4. Use \`// @quiz\` / \`// @answer\` for custom questions
5. Run \`npm run revise\`

## What gets generated
- Study notes (Overview + Key Takeaways)
- Quick Revision flashcards
- 12+ quiz questions per topic with SDET-focused tricky questions
- Practice coding challenges
- Deep programming problems

## Based on
JavaConcepts SDET revision template — see rules.md for full authoring guide.
`;
  fs.writeFileSync(path.join(destDir, 'README.md'), readme, 'utf8');
}

// ==========================================================================
// Main entry point
// ==========================================================================
function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log('Usage: node scripts/create-project.js <ProjectName> <technology>');
    console.log('Technologies: javascript, typescript, cypress, playwright, selenium');
    process.exit(1);
  }

  const projectName = args[0];
  const tech = args[1].toLowerCase();
  const config = TECH_CONFIG[tech];

  if (!config) {
    console.error(`Unknown technology: ${tech}`);
    console.error('Supported: javascript, typescript, cypress, playwright, selenium');
    process.exit(1);
  }

  const srcDir = path.resolve(__dirname, '..');
  const destDir = path.resolve(__dirname, '..', '..', projectName);

  if (fs.existsSync(destDir)) {
    console.error(`Directory already exists: ${destDir}`);
    process.exit(1);
  }

  console.log(`\n🚀 Creating ${projectName} (${config.label}) at ${destDir}...\n`);

  fs.mkdirSync(destDir, { recursive: true });

  copyDashboard(srcDir, destDir, tech, config);
  console.log('✅ Dashboard copied');

  createParser(srcDir, destDir, tech, config);
  console.log('✅ Parser adapted for ' + config.label);

  createSrcExample(destDir, tech, config);
  console.log('✅ Example source file created');

  createPackageJson(destDir, projectName, tech);
  console.log('✅ package.json created');

  createRules(destDir, tech, config);
  console.log('✅ rules.md created');

  createReadme(destDir, projectName, tech, config);
  console.log('✅ README.md created');

  console.log(`\n🎉 Project created successfully!`);
  console.log(`\nNext steps:`);
  console.log(`  cd ..\\${projectName}`);
  console.log(`  npm run revise`);
  console.log(`\nAdd more topics to src/ following the rules in rules.md`);
}

main();
