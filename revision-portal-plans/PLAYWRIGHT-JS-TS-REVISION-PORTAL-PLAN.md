# Playwright with JavaScript / TypeScript: Revision Portal Implementation Plan

**Status: future implementation blueprint.** This document specifies a destination
portal; it does not claim that a Playwright portal or native runner exists in
JavaConcepts. Copy this file alone to the destination and begin with discovery.

## 1. Purpose and handoff

Move this file into the Playwright project and give it to Copilot with:
**"Implement this revision portal plan in this repository, starting with discovery.
Preserve my existing notes, application, tests, and configuration."**

Build a portal **for studying Playwright**, not merely a set of Playwright tests
against a generic website. JavaScript and TypeScript lessons must both work.
The dashboard itself can be a static HTML/CSS/JavaScript application.
This document is an implementation blueprint, not an assertion that the destination
already has any of the proposed files or capabilities.

The reference is [JavaConcepts](https://github.com/najha1903/JavaConcepts),
reviewed at commit `cce27d16733b10766a867ffc46ff41c6d10db59f`.
This document is self-contained: implementation must not require this conversation,
the other four technology plans, or a JavaConcepts checkout.

### Approved authoring and execution contract

- The user writes ordinary learning notes. They need not write quizzes, cram
  markers, expected-output metadata, or test harnesses.
- Copilot prepares missing revision material in separate, reviewed content files.
  Preserve the user's original wording, ordering, examples, and code.
- A missing explanation may be proposed as an insertion into the original notes.
  Only explicit approval of that particular patch permits the insertion.
- `npm run revise` is the everyday command. Apply in the browser invokes approval;
  the user does not also need to type `npm run approve`.
- Chapters still being studied show notes only. Finished chapters receive revision
  material and coverage assessment. Never invent lessons for unstudied topics.
- Native Playwright execution targets dedicated **local demo pages/mock APIs only**.
  Do not run the project's real application tests, production URLs, or authenticated
  test environments as a side effect of revising notes.
- There is no external compiler, AI API, cloud runner, telemetry, or account requirement.

### What to reuse, and what not to copy

The reference provides Notes, Quick Revision, one Revision Bank, quiz sessions,
Practice Lab, Deep Problems, Mastery, a coverage ledger, and browser approval.
Its useful implementation roles are `scripts\generate.js`, `scripts\revise.js`,
`scripts\approve.js`, `scripts\review-server.js`, `scripts\lib\note-rules.js`,
`scripts\coverage.js`, and `revision-dashboard\app.js`.

The pinned reference is historical evidence, not a description of current
JavaConcepts. Its old copy-based scaffolder did not provide a complete framework
portal. Inspect current code/package wiring before reuse, but implement this
destination contract rather than copying Java datasets. All approval routes must
share staged validation, fresh reports, conflict checks, and journaled publication.
The reference's limited Java-to-JavaScript practice approximation is **not** a
Playwright runtime. Copying labels or changing extensions cannot supply one.

If reference UI assets are reused, record their source revision, preserve applicable
license/attribution notices, review their imports, and discard Java lesson data,
OCJP labels, hardcoded storage keys, and old generated reports.

## 2. Destination discovery before editing

Produce a short discovery report and adapt this plan to actual findings.

| Inspect | Decision to record |
|---|---|
| `package.json`, lockfile, Node version, workspace configuration | Package manager, module mode, existing commands, supported runtime |
| `playwright.config.*`, projects, fixtures, global setup, reporters | Installed Playwright version and potentially external side effects |
| `tests`, `e2e`, page objects, support files, lesson/docs folders | Explicit note roots and lesson-to-source mapping |
| `.js`, `.ts`, `.mjs`, `.cjs`, `.mts`, `.cts` files | Extensions supported by this project's installed tooling |
| `tsconfig.*`, aliases, custom fixtures, imported helpers | Separate type-check and module-resolution requirements |
| Existing chapter conventions and progress markers | Chapter order, stable IDs, draft/finished status |
| Existing CI, tests, formatting, dependency policy | Reuse tools; do not replace working project infrastructure |

Do not move tests into `src` just to resemble the reference. Configure actual source
roots. Include authored Markdown lessons only through an explicit allowlist; exclude
this plan, generated reports, lockfiles, build output, traces, screenshots, secrets,
dependency folders, and fixture-only resources from lesson discovery.

Support JS-only, TS-only, and mixed repositories without translating the user's
lessons from one language to another. Ask about ambiguous chapter boundaries or
missing status information rather than silently treating a test directory as a course.
An explicit chapter-status manifest should support all-finished, all-draft, and mixed
states. The reference's "a later-numbered folder means finished" rule may be an
explicitly requested legacy compatibility mode, not a universal assumption.

## 3. Architecture and file responsibilities

Use small modules within this repository; a shared multi-project service is not needed.
Names below are proposed locations and may be adjusted to avoid existing-name collisions.

```text
revision.config.cjs
revision-content\
  chapters.json
  concepts.json
  questions.json
  cram.json
  exercises.json
  suggestions-state.json
scripts\revision\
  revise.cjs                 # Orchestrates the ordinary workflow
  core\                     # Model, IDs, provenance, shared eligibility rules
  extract\                  # JS/TS comments and opt-in Markdown
  generate.cjs
  review-server.cjs
  approve.cjs
  ledger.cjs
  validate.cjs
  adapters\playwright.cjs
revision-fixtures\
  app\                      # Small local UI with deterministic states
  api\                      # Local mock API and request journal
  specs\                    # Dedicated exercise oracles/harnesses
  playwright.config.*       # Never implicitly loads the real project's setup
revision-dashboard\
  index.html
  review.html
  assets\                   # Locally bundled styles/scripts/highlighting
  data\                     # Generated versioned JSON, not authored content
  coverage.md               # Generated human-readable ledger
.revision-work\              # Ignored candidates, job directories, temporary evidence
```

`revision-content` is durable authored input, including Copilot-authored material.
`revision-dashboard\data` is disposable output. Source comments remain original
notes. Generation must never overwrite either authored input category.

Serve locally over HTTP through the revision command so JSON fetching and storage
have a predictable origin. The study dashboard must also work as static Pages
content without a backend. Local review and native execution are separate capabilities,
not prerequisites for reading notes or using quizzes on the hosted site.

### Normalized content contract

Use a schema version and validate all inputs before rendering or execution.

| Entity | Minimum fields |
|---|---|
| Project | `schemaVersion`, unique `projectId`, technology, installed runtime/framework versions, capabilities |
| Chapter/topic | Stable ID, title, order, status, source paths/spans, content fingerprint, concept IDs |
| Note block | Kind: prose/code/table/parameters; source span, exact text or rows, language, provenance |
| Question | ID, content version, kind, level, prompt/code, choice IDs, correct IDs, explanation, wrong-choice reasons, concepts, source topic |
| Cram point | ID, short `say`, optional display code, language, harness/context ID, explicit expectation |
| Exercise | ID, starter files, constraints, hints, rubric, source links, fixture ID, runner capability, expected observations |
| Suggestion | ID, source hash, reason/evidence, proposed addition, target span, approval state |
| Evidence | Result status, tool version, source/harness/fixture hashes, observations, diagnostics |

Keep content identity separate from display names, array positions, and answer text.
Renaming a file needs an explicit ID mapping so progress can survive. Cosmetic
changes should not erase history; changed answers or behavior invalidate old proof.
Retain legacy question IDs as explicit aliases (for example `legacyQids`) and back
up state before migrations; semantic `contentVersion` changes invalidate only
affected evidence. Wrong choices must be false under their exact prompt, not true
facts borrowed from another topic. Remove ambiguous topic-membership MCQs.
Grade choice IDs by exact set and output by type-sensitive full comparison:
preserve strings, booleans, number semantics, declared whitespace/lines, and error
kinds. Never accept substrings or silently coerce types; declare normalization.
Record whether an item is source-authored, Copilot-authored, or mechanically derived.
When a source or framework fingerprint changes, mark affected supplements/evidence
stale and queue review. Never silently overwrite reviewed sidecars or count their
old answers as current proof.

An expectation is structured data, not a guess extracted from a comment:

```json
{
  "id": "pw-retry-status",
  "contentVersion": 1,
  "topicId": "pw-web-assertions",
  "language": "typescript",
  "say": "Await locator assertions so Playwright can retry until the UI matches.",
  "code": "await expect(page.getByRole('status')).toHaveText('Saved');",
  "contextId": "local-delayed-status",
  "expectation": { "kind": "test-pass", "assertions": ["status-is-saved"] },
  "provenance": { "kind": "copilot-authored", "reviewState": "approved" }
}
```

The context supplies imports, the `test` fixture, navigation, and cleanup. A short
display snippet is not falsely described as a complete standalone program.
Represent expected output, expected compiler diagnostics, expected runtime errors,
and expected assertion outcomes as distinct expectation kinds. A compiler crash,
missing import, or unrelated timeout cannot satisfy an intentional-failure example.

## 4. JS/TS-aware extraction

Use language-aware comment/token boundaries rather than adapting a Java class regex.
Reuse an existing parser when suitable; add a parser dependency only if necessary.
Never import or execute lesson files merely to discover their notes.

Preserve overview comments, comments beside relevant statements, fenced examples,
parameter explanations, tables, and source links. Imports are not automatically the
end of the overview. Understand comments around `test`, `test.describe`, hooks,
custom `test.extend` fixtures, classes, exported functions, and arrow functions.

The following must not confuse extraction: URLs containing `//`, regex literals,
strings containing comment delimiters, multiline template strings, nested braces,
generic types, destructuring, and CRLF/UTF-8 input. JSX/TSX requires an explicit
supported adapter when such lessons exist; do not silently misparse it.

Illustrative ordinary user notes:

```typescript
// A locator describes how to find an element when it is needed.
// Await web-first assertions because the page may update after an action.
test('save confirms completion', async ({ page }) => {
  await page.goto('/editor');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await expect(page.getByRole('status')).toHaveText('Saved');
});
```

This fragment assumes the lesson's imports and configured local fixture. Copilot
creates its quiz/cram material separately; no extra markers are required here.
Legacy markers may be imported if present, using one marker registry across
extraction, display, review, and audits.

## 5. Authorship and the everyday workflow

**A shell command is not an autonomous author.** Copilot researches/writes original
supplements during an explicit assistant task. The deterministic CLI incorporates
approved supplements and derives only claims supported by the notes or local
execution evidence. Missing material appears as `needs-authoring` in the ledger,
with the relevant source topic and an actionable task for Copilot.
Do not substitute copied sentences or random distractors for good revision material.

Keep `npm run revise` the single source of truth for future generation/review.
Thin revise/generate/approve adapters call one shared workflow core; new rules
and validation belong there, not in command-specific bypasses or manual
generated-file fixes. Shared behavior is a design contract, not a guarantee
against future bugs.
Derive supplements from freshly extracted staged notes, not the last published
dataset. Maintenance/force-refresh aliases use the same core; review binds consumed
caches/baselines and publication rechecks inputs, preserving concurrent edits.

1. `npm run revise` discovers configured sources and computes fingerprints without
   changing them. It builds a complete candidate, including fresh suggestions and
   the ledger, even when only supplementary content changed.
2. Unchanged input opens the existing local dashboard. Changes to notes,
   supplements, or proposed note insertions open a review with distinct provenance.
   An unsupported parse produces a diagnostic rather than silently losing the file.
3. Apply runs the same approval function used by the optional terminal command.
   Only individually selected note-addition patches may modify source notes.
   Discard removes the proposal, not the user's own edits.
4. Recheck source hashes before applying. Reject stale proposals and concurrent
   approvals instead of overwriting edits made while review was open.
5. Validate the candidate and trusted changed harnesses. Publish data, ledger,
   accepted patches, supplementary state, caches, and metadata as one transaction.
   Failure leaves the last approved dashboard and unrelated user changes intact.
   Use staged immutable generations and an active-generation pointer for generated
   artifacts. Source patches outside that generation need journaled recovery:
   restore only transaction-owned bytes, preserve later human edits, and report
   conflicts. Do not claim an atomic multi-file filesystem write.
6. A permitted code-only automatic refresh must pass its applicable checks before
   publication. It must never automatically execute arbitrary discovered tests.
7. Keep the local server lifecycle explicit; provide a close/stop control and clean
   shutdown. Repeated revise/apply must be idempotent.

`npm run check` uses the same generator/validators non-interactively in scratch
staging, never publishes or accepts source patches, and returns a failing exit code
for required missing tools or checks.
Headless CI validates the checked-in approved inputs, not an interactive proposal.
Fast schema/source/UI checks and costlier native checks can have separate selectors,
but freshness must include source, harness, fixture, framework, and validator versions.
Skipped work must be reported and must not masquerade as current evidence.

## 6. Full study experience

| Area | Required behavior |
|---|---|
| Notes | Chapter/topic navigation, search, original prose, tables, parameters, expandable code, source provenance, revised/bookmark state, chapter print/PDF |
| Quick Revision | Short say-it-out-loud points, pitfalls, optional snippets, real comparison tables, browse and spaced flashcard modes |
| Revision Bank | One chooser filtered by chapter, topic, concept, language, difficulty, kind, and text |
| Presets | Everything, Interview, Tricky, Concept drill, Playwright scenarios; presets only set existing filters |
| Quizzes | Single/multiple choice, justified true/false, fill-code, predict behavior, written self-assessment; topic quiz and mixed quiz |
| Sessions | 10/20/40/all, deduplicated actual question pool, close/save/resume, progress, results by chapter, source-linked wrong-answer explanations |
| Practice Lab | Starter files, hints, run/check capability, native outcome evidence, unsupported/self-check state, local exercise export |
| Deep Problems | Larger studied-topic tasks with milestones, rubrics, solutions after reveal, and meaningful local scenarios |
| Mastery | History-backed weak concepts, attempted/untried distinction, due queue, next action, level guidance, example gaps and suggestions |

Do not derive quiz candidates from the bank's reading-card list; those are different
collections. An empty scoped quiz/practice view must stay empty with an explanation,
not fall back to another chapter. Deduplicate by stable identity/content semantics,
not by index or randomized sample luck.

Use a 160-character/26-word cram target and three-line display snippet limit.
Keep full runnable setup in a linked harness. Author only useful source-backed
points, without chapter count quotas or filler. Do not truncate code silently.

Mastery is a configurable study-confidence heuristic: at least three DISTINCT
eligible objective question IDs and 80% accuracy per concept. Repeating one
question cannot satisfy breadth; exclude interview self-assessment and reveals.
Score each finalized session/question/version once, including after resume,
repeated clicks, and imports; preserve compatible drafts. Show evidence counts
and unique coverage, never official proof or certification. A readiness
summary may weight accuracy 35%, attempted coverage 20%, and concept proof 45%.
Label it **study readiness**, not an official Playwright exam score.
Define accuracy as correct/valid scored responses, coverage as unique eligible
questions attempted/available, and proof as eligible concepts meeting the stated
threshold/eligible concepts. Display denominators and any unavailable component.
Track native practice evidence separately, not as a substitute for quiz confidence.

Unseen concepts are not labelled weak. Level guidance is not a lock. Combine due
questions and flashcards into one review queue; suggest overdue work, then weak
concepts, then untried work. Mastery drills configure the same Revision Bank.
Only precisely mapped exercises qualify as concept-specific practice.

## 7. Progress, safety, and publishing

Use a namespace such as `revision:<projectId>:v1`, not `javarev_*`.
Store topic progress, bookmarks, quiz sessions/history, question evidence, card
scheduling, practice state, and settings. Never store application credentials,
authentication-state files, or environment tokens in portal progress.

Provide versioned JSON export/import with project identity, schema validation,
preview, merge/replace confirmation, unknown-ID reporting, and a backup before
replacement/reset. Recompute Mastery from evidence rather than trusting imported
aggregates. A self-check must remain distinguishable from a native verified pass.
Content versions invalidate stale answers without discarding unrelated progress.

Browser storage is origin-specific: localhost and GitHub Pages do not share it.
Explain export/import rather than promising automatic synchronization.
Unavailable storage or corrupt imports must produce clear recoverable messages.
Imported native claims without verifiable local evidence remain historical/unverified;
do not silently promote imported self-checks or edited JSON to trusted native passes.

Bundle assets locally for offline study after setup. Escape source text and code;
sanitize allowed Markdown/HTML and URL schemes. Do not execute example scripts from
rendered notes. Preserve theme contrast, keyboard navigation, focus, readable sizing,
mobile layout, and print layout with unclipped code/tables.

Publish only reviewed, explicitly publishable dashboard artifacts. Notes may contain
private URLs, proprietary code, or credentials: exclude/redact them before generating
public content; never modify original source as a side effect of redaction.
Raw traces, screenshots, storage-state files, job directories, and runner logs are
not automatically public artifacts.

## 8. Native Playwright runner and local fixtures

Use the project's installed Playwright Test runtime in a **dedicated revision
configuration**. Plain Node execution, a DOM simulator, or string matching cannot
verify Playwright fixture and browser behavior.

Illustrative commands, valid only after creating the named configuration:

```text
npx --no-install playwright test --config revision-fixtures\playwright.config.ts
npx --no-install tsc --noEmit -p revision-fixtures\tsconfig.json
```

Use the actual JS/TS config extension and module mode discovered in this project.
Playwright transforms TypeScript but does not provide full type checking; the second
check is separate and required for applicable TS examples. Do not impose TypeScript
on a JS-only project. Honor aliases and custom fixture types without loading
unrelated real-environment setup.

### Runner protocol

- Explicitly enable the local runner. The browser submits an exercise ID, fixture
  ID, content version, and bounded learner files; never an arbitrary shell command,
  executable path, destination URL, or privileged filesystem path.
- Bind to loopback; validate host/origin, a session token, request size, and permitted
  actions. Hosted Pages must not silently contact a privileged localhost runner.
- Execute jobs in isolated temporary directories with allowlisted dependencies,
  bounded timeouts/output, one worker initially, and cleanup of owned processes only.
- A subprocess is not a security sandbox. Arbitrary learner code requires an
  appropriately restricted filesystem/network worker and a secret-free environment.
  If those restrictions cannot be enforced, block that execution capability.
- Enforce local fixture targets for browser requests, redirects, subresources,
  workers, `APIRequestContext`, and Node-side helper traffic. Setting `baseURL` or
  installing `page.route` alone is not a complete networking boundary.
- Install compatible browser binaries/dependencies during explicit setup. Do not
  download browsers or change dependencies on every revise run.

Return `passed`, `failed`, `unsupported`, `blocked`, `timeout`, or `error`, with
diagnostics and evidence. Missing browser binaries, unavailable isolation, and a
crashed harness are not wrong learner answers. Zero executed tests is not a pass.
Expected-failure examples must match the intended assertion/error, not any failure.

Parse structured Playwright reports; verify expected tests/assertions actually ran.
Use exact typed outcomes where appropriate, not output-prefix comparisons.
Expected results come from independent fixture contracts and reviewed requirements,
not simply from executing the user's current solution.

### Required deterministic demos

Build a local UI and API that expose a delayed status update, accessible login
controls with dummy credentials, duplicate button labels, a replaceable DOM element,
local popup/iframe, and a small resettable item list. Readiness comes from observable
state, not arbitrary sleeps. Tests get a fresh context and reset fixture state.

Start with one installed supported browser. Add browser projects only when their
binaries and evidence are available. Do not claim cross-browser coverage from one run.
Capture useful traces on failures while keeping artifacts local and redacted.

On the static hosted portal, notes/quizzes/Mastery still work. Native Run should
explain that the local portal is required or export the exercise for local execution;
never present an unexecuted action as a verified success.

## 9. Playwright learning map and seed scenarios

This map classifies material already studied; it is not permission to prefill lessons.

| Concept group | Important distinctions |
|---|---|
| Locators | Role/label/text/test-id/CSS in context; strictness, exact names, scoped locators, re-resolution |
| Actions and assertions | Actionability vs business readiness; awaited web assertions vs non-retrying value assertions |
| Async JavaScript | Promises, missing `await`, loop sequencing, browser execution vs test-process variables |
| Fixtures and isolation | Test/worker scope, `test.extend`, hooks, context/page lifecycle, authentication state |
| Network/API | Register waits/routes before the trigger; request vs response; mocked vs real local API checks |
| Navigation and contexts | Popups, tabs, frames, dialogs, downloads, context isolation |
| Configuration | Projects, retries, timeouts, reporters, traces, supported browser/version matrix |
| TypeScript | Fixture types, aliases, erased types, type-checking separate from transpilation |
| Design | Page objects, reusable fixtures, deterministic data, parallel-safe state |

Avoid blanket statements such as "every assertion retries", "auto-waiting waits for
all network activity", or "retrying a flaky test makes it correct".
Do not invent a mandatory selector ranking or an official Playwright certification.

| Seed | Expected learning and independent evidence |
|---|---|
| Quiz: `await expect(locator).toHaveText(...)` versus a captured `textContent()` value | Explain retrying locator assertions versus checking an already-read value; demonstrate a delayed local update |
| Quiz: two matching Save buttons | Explain strictness and scope the intended panel; do not quietly fix with `.first()` without a requirement |
| Practice: reliable Save confirmation | Learner clicks the correct local control and awaits visible status; oracle verifies the action and resulting DOM |
| Practice: wait for a local create request | Register response wait before click; validate method, path, payload, response, and rendered row |
| Practice: typed custom fixture | Preserve fixture lifecycle, demonstrate the JS equivalent, and type-check the TS variant separately |
| Deep problem: local inventory suite | Page object, per-test data, API setup, create/edit/delete, failure trace, fresh-context rerun; assess isolation and outcomes |

Questions require original explanations and plausible wrong answers with reasons.
Link each item to the exact notes and applicable official documentation/version.

## 10. Implementation phases

| Phase | Depends on | Output and completion condition |
|---|---|---|
| 1. Discover | Nothing | Recorded roots/versions/module mode/status mapping; no source reorganization |
| 2. Model and extract | 1 | Config, schema, stable IDs, JS/TS parser, draft rules; fixture corpus preserves every note block |
| 3. Static Notes | 2 | Real destination notes render, search and print correctly; empty states are honest |
| 4. Content and review | 2-3 | Sidecars, Copilot work queue, fresh ledger, common revise/approve/check, staged atomic apply |
| 5. Native evidence | 1-4 | Dedicated local fixtures, JS and applicable TS harnesses, network boundary, structured results |
| 6. Revision experience | 4-5 | Bank/quizzes/cram/cards/practice/deep problems from actual studied topics; no template-only completion |
| 7. Mastery and persistence | 6 | Evidence-based queues/readiness, stable progress, export/import/reset, project isolation |
| 8. Regression and delivery | 1-7 | Clean install, Windows/Linux workflow, local/Pages behavior, accurate README/rules/ledger |

Reuse existing test tooling. Parser/core checks can use the repository's current
Node test runner. Playwright is suitable for browser regression checks, but native
exercise tests and portal UI tests must remain separately scoped.
Do not stop after copying a dashboard shell or rendering sample data.

## 11. Acceptance matrix

| Case | Required result |
|---|---|
| Ordinary notes, no markers | Notes render; approved supplements appear; missing supplements create explicit Copilot tasks |
| Extract tricky JS/TS syntax | URLs, regex/templates, comments, generics, CRLF and Unicode survive without code execution |
| Draft chapter | Notes visible; no questions/cram/exercises/gap work; excluded from readiness denominators |
| All chapters finished | Valid configuration; no forced fake draft chapter |
| New finished chapter/topic | Discovered without editing UI arrays; existing IDs and progress remain stable |
| Revise/Discard | Source bytes unchanged; Discard does not undo the user's edits |
| Approved note insertion | Only the selected insertion is applied; provenance remains distinct |
| Stale or concurrent review | Conflict is reported; no overwriting later user edits |
| Failed apply at any stage | Dashboard, ledger, caches and approved state remain coherent; no half-applied source patch |
| Same inputs twice | Same content IDs and semantic output; no repeated suggestions or evidence churn |
| Browser Apply vs terminal approval | Same implementation, validation, and final artifacts |
| One-line and contextual snippets | Compile/run/expected-error claims checked in the right context, not accepted merely because comments exist |
| Missing tool/browser or zero tests | Blocked/failing required check, never a learner failure or green native result |
| Broken learner implementation | Known negative mutation fails the independent oracle; reference implementation passes |
| TS type error | Type check catches it even if Playwright could transpile/run it |
| Native runtime distinction | `page`, fixtures and retry assertions execute in Playwright, not a Node VM imitation |
| Nonlocal request/redirect/helper | Rejected by enforced execution policy; no real service is contacted |
| Timeout/cancel | Honest status and cleanup of owned browser/server/job resources |
| Quiz pool deliberately doubled | No repeated question; filter count and actual playable pool agree |
| Empty chapter scope | No accidental fallback to unrelated questions or practice |
| Mastery and due queue | Three repeats of one question cannot meet distinct-question breadth; self-assessment is excluded; repeated clicks/resume/import cannot double-score |
| Exact grading and distractors | Reject output prefixes/suffixes and type coercions; preserve declared line structure; every wrong choice is false under its prompt |
| Reload/export/import/reset | Resume works; wrong-project/corrupt data handled; backup and reset confirmation work |
| Hostile note markup | Rendered as safe content; no injected script or unsafe URL execution |
| Mobile/themes/print | Keyboard/focus/contrast and readable, unclipped code/table output |
| Hosted/offline study | Static study works; native execution limitation is visible |
| Clean clone and CI | Locked install, declared tools, strict relevant checks; artifact contains publishable static files only |

CI should use the destination's locked package-manager install and explicitly
provision compatible browsers for selected checks. Trigger on notes, supplementary
content, fixture/harness code, parser/UI/config, manifests, **lockfiles**, and workflow
changes. Never run the real project's external test suite just to publish revision
notes. Deployment failure must leave the previous published version available.

## 12. Documentation and completion

Write a destination README showing one everyday flow: `npm run revise`, review if
needed, Apply, study. Document setup, draft completion, Copilot authoring tasks,
local-native versus hosted capabilities, progress portability, and supported JS/TS
versions. Keep exact scripts and failure semantics synchronized with implementation.
List unsupported capabilities explicitly; do not silently omit full-portal features.

Official sources to consult for the **installed version**, not an assumed latest release:

- [Playwright documentation](https://playwright.dev/docs/intro)
- [Assertions and retry behavior](https://playwright.dev/docs/test-assertions)
- [TypeScript support and separate type checking](https://playwright.dev/docs/test-typescript)
- [Fixtures](https://playwright.dev/docs/test-fixtures)
- [Locators](https://playwright.dev/docs/locators)
- [Network interception](https://playwright.dev/docs/network)

Completion means the destination's own notes drive the complete portal, every
promised automatic capability has reproducible evidence, unsupported cases are
honest, and the user can maintain it by writing notes rather than editing generators.
