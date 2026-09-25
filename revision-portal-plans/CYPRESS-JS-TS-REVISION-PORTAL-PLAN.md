# Cypress JavaScript/TypeScript Revision Portal — Implementation Plan

**Status: future implementation blueprint.** This document specifies a destination
portal; it does not claim that a Cypress portal or native runner exists in
JavaConcepts. Copy this file alone to the destination and begin with discovery.

## 1. Purpose and boundaries
- Build a revision portal **teaching Cypress**, with a static browser dashboard, a local Node content workflow, and an optional native Cypress exercise adapter.
- Deliver Notes, QuickRevision flashcards and cram, one RevisionBank, PracticeLab, DeepProblems, Mastery, a coverage ledger, and reviewed content updates.
- Users write ordinary source notes; Copilot drafts missing supplemental material. Approved supplements live in `revision-content`, not silently inside source notes.
- This document is standalone after copying into another repository. Its destination, module layout, installed versions, and existing commands remain unknown until discovery.
- Do not implement a backend using Cypress; keep review in the local Node workflow and native execution in the optional local exercise adapter.
- Do not integrate cloud AI, remote compilers, or external execution/upload services; Copilot authoring is a separate user-directed workflow.
- Preserve existing tests, manifests, configurations, lesson wording, and source organization; introduce only reviewed, additive implementation changes.
- Reference: https://github.com/najha1903/JavaConcepts at `cce27d16733b10766a867ffc46ff41c6d10db59f`; implementation must not depend on that checkout.
- Reuse reference UI behavior and module responsibilities, not generated Java banks, OCJP branding, old counters, or unsupported framework execution claims.
- The pinned reference is historical evidence, not a description of current JavaConcepts. Inspect current code/package wiring before reuse; the destination must implement shared approval, complete staged validation, and fresh reports.
- The historical copy-based scaffolder was incomplete; it is not a Cypress implementation. Discover the destination and implement this contract instead of copying Java datasets.
- Any reused optional assets require provenance and compatible license attribution; write original study questions, not vendor exams or borrowed copyrighted banks.

## 2. Using this plan after moving it
- Ask Copilot: “Implement this plan in this repository; discover the installed stack first, preserve existing behavior, and implement every milestone and acceptance case.”
- Copilot first reports discovered roots, versions, module boundaries, source examples, existing test tools, and proposed additions before changing implementation files.
- Treat commands below as illustrative, gated discovery instructions; this plan does not authorize running existing environment suites or downloading dependencies.
- On Windows, inspect the checkout and manifests with commands such as:
```powershell
Get-ChildItem -Force
git --no-pager status --short
Get-ChildItem -Recurse -File -Include package.json,package-lock.json,pnpm-lock.yaml,yarn.lock,tsconfig*.json,cypress.config.* |
  Where-Object { $_.FullName -notmatch '\\(node_modules|\.git|dist|build)\\' } |
  Select-Object FullName
Get-Content .\package.json
node --version
npm --version
npm ls cypress typescript --depth=0
```
- Run each command only where its file or tool exists; missing packages are findings, not permission to install or auto-fetch them.
- Inventory package scripts, workspace ownership, `type`, Cypress plugins/tasks, TS settings, browser binaries, and existing CI without invoking tests.
- Discover the installed Cypress version from manifests, lockfiles, and local package metadata; inspect the installed binary only after explicit setup.
- Automatically detect JS and TS sources; accept `.js`, `.cjs`, `.mjs`, `.ts`, `.cts`, and `.mts` only where the installed tools support their actual role.
- Do not force TS conversion, change module formats, or assume an extension supported for specs also works for Cypress configuration.
- Use existing package-manager and lockfile conventions; if npm is not the owner, document an `npm run revise` compatibility route without creating competing lockfiles.
- If a new Node workspace is necessary, propose its minimal manifest and exact pinned dependencies as a reviewed setup step.
- Map chapters explicitly to `draft` or `finished`; do not infer draft status from the numerically highest chapter in non-course repositories.
- Confirm local fixture topics against studied source before drafting exercises; unfamiliar Cypress features must not become unsolicited curriculum.

## 3. Modular repository layout and configuration
- `revision.config.*`: validated configuration in a format compatible with the discovered Node/module setup.
- Required configuration: unique `projectId`, source roots/globs, opt-in documentation roots, exclusions, chapter/status mapping, schema version, and adapter/version requirements.
- Also configure local fixture roots, target browser, runner capability policy, quality thresholds, question sizes, and project-specific storage migration rules.
- `revision-content`: durable reviewed question, cram, card, exercise, explanation, and suggestion-disposition sidecars with source links.
- `scripts\revision\extract`: source parsing and source-span capture, independent of UI rendering.
- `scripts\revision\model`: normalized schemas, stable identity allocation, versioning, and migrations.
- `scripts\revision\sharedrules`: source-faithfulness, eligibility, status, scoring, and coverage rules reused everywhere.
- `scripts\revision\generate`: deterministic model assembly, static data output, and staged generation manifests.
- `scripts\revision\review` and `approve`: proposals, diffs, stale checks, locks, transaction journals, and the shared approval entry point.
- `scripts\revision\ledger` and `validate`: exact accounting, diagnostics, evidence verification, and Copilot authoring tasks.
- `scripts\revision\adapters`: Cypress capability detection and native job/report translation; keep runner policy separate from parsing.
- `scripts\revision\storage` and colocated tests: browser-state schemas, import/export migrations, and fixtures for the existing test runner.
- `revision-fixtures`: dedicated local demo app, mock API, seed/reset data, exercise harnesses, and isolated Cypress configuration.
- `revision-dashboard`: deployable static HTML, modules, styles, assets, and generated revision data only.
- `.revision-work`: ignored proposals, staging generations, locks, disposable job workspaces, and local reports; never the only home of approved content.
- Ignore caches, sensitive logs, runner artifacts, and local state according to repository conventions; do not ignore approved sidecars or required lockfiles.
- Serve the dashboard by local HTTP by default to avoid `file://` fetch/storage behavior; its study features require no running exercise service.
- GitHub Pages uses the same static content with a correct base path and no privileged runner bridge.

## 4. Normalized, versioned content contract
- Every dataset declares `schemaVersion`, `projectId`, generation ID, and relevant source/content fingerprints; loaders reject mixed generations.
- Chapters/topics have stable IDs independent of array positions, labels, ordering, and paths; record labels, status, source paths, spans, and fingerprints separately.
- Allocate IDs in a durable manifest or sidecar registry; moves and renames retain identity through reviewed mappings, while genuine new topics receive new IDs.
- Source blocks distinguish prose, code, tables, and parameter documentation; retain ordering, languages, source spans, and original text.
- Parameters preserve names, types, optionality, defaults, and descriptions rather than flattening all JSDoc into undifferentiated prose.
- Questions require `id`, `contentVersion`, kind, difficulty, prompt, options, `correctIds`, concepts, chapter/topic references, and source provenance.
- Option IDs are stable opaque IDs; never use answer prefixes, array offsets, or positional letters as the persistent answer key.
- Retain old question IDs as explicit migration aliases (for example `legacyQids`), back up browser state before migration, and exclude evidence invalidated by a semantic `contentVersion` change.
- Every wrong option needs its own reason; every question needs a sourced explanation and, where useful, a correct-answer rationale.
- Wrong choices must actually be false under the prompt. A true statement from another topic is not a valid distractor; remove ambiguous topic-membership questions.
- Distinguish single-choice, multiple-choice, trace, concept, and scenario questions; declare exact-set scoring and supported interaction types.
- Use type-sensitive exact expected values and full output comparison, not substrings or coercion between strings/booleans/numbers. Preserve declared whitespace/lines and error kinds; document any allowed normalization.
- Separate semantic `contentVersion` from presentation fingerprints: changed answers, options' meaning, or rubrics invalidate old mastery; cosmetic edits do not.
- Cards include prompt, concise answer, concept links, content version, and scheduling identity.
- Cram entries include `say`, code, code language, context, and expected observations tagged as output, assertion, error, or behavior.
- Keep expected output, type/compiler diagnostics, runtime exceptions, and assertion outcomes distinct; an infrastructure crash or unrelated failure cannot satisfy a negative example.
- Exercises include starter code, progressive hints, rubric, fixture ID, runner capability, expected observations, source concepts, and content version.
- Keep the short displayed snippet separate from the complete runnable harness and fixture contract.
- Supplements record provenance type, author/reviewer, approved state, version, source links, and any external documentation version/license attribution.
- Changed source/framework fingerprints mark affected supplements/evidence stale and queue review; never overwrite reviewed sidecars automatically or count outdated answers as current proof.
- Suggestions require ID, reason, source hash, target span, proposed insertion patch, and `pending`, `accepted`, `rejected`, or `stale` status.
- Rejected suggestion fingerprints persist with their concept/source scope; material concept changes can requeue a new suggestion.
- Execution records use `passed`, `failed`, `unsupported`, `blocked`, `timeout`, or `error`, always with reason and available evidence.
- Record runner name/version, browser, exercise/content version, source hash, fixture hash, harness hash, executed-case count, and report references.
- Native proof is valid only for matching inputs and an independent oracle; self-checks and unsupported execution never masquerade as native passes.
- Use deterministic serialization and stable sorting; wall-clock timestamps must not create meaningless regeneration diffs.
- Validate references, duplicate IDs, option keys, chapter eligibility, languages, versions, and malformed sidecars before publication.

## 5. Cypress source extraction and curriculum fidelity
- Discover `cypress\e2e`, `cypress\support`, `cypress\fixtures`, and configured notes/test roots without assuming every file is a lesson.
- Support files and custom commands are reusable source context, not independent chapters by default; fixture-only resources do not become lesson topics.
- Include Markdown lessons only through explicit opt-in; exclude implementation plans, generated reports, copied documentation, and dependency directories.
- Parse `//`, `/* ... */`, and JSDoc with a tokenizer/parser compatible with the discovered syntax, not global regular-expression comment stripping.
- Preserve strings, URLs, regex literals, template literals, embedded braces, and JSX where the target actually supports it.
- Preserve literal code and authored prose; do not turn test titles, command names, or inferred behavior into invented explanations.
- Capture JSDoc tables/parameters and fenced examples accurately, including code appearing inside comments.
- Maintain source maps sufficient for exact source links and optional byte-preserving accepted insertions; retain encoding, BOM, and line endings.
- Detect JS/TS per file and module context; unsupported syntax yields a clear diagnostic rather than silently dropped notes.
- Scope Cypress TypeScript types to a dedicated TS configuration; avoid contaminating Playwright, Jest, Mocha, or other globals in the host project.
- Reuse compatible module settings instead of rewriting the host `tsconfig`; transpilation and a separate TS type-check result are different capabilities.
- Teach the Cypress command queue and yielded subjects: commands are not ordinary promises, and `await cy.*` is not a substitute for Cypress chaining.
- Explain retryable linked queries/assertions versus non-query commands that run once, using behavior verified for the installed version.
- Contrast `.should()` callback retry behavior with `.then()` execution and subject handling; keep retry callbacks free of repeated side effects.
- Teach intercept registration before the triggering action, named aliases, response assertions, and deterministic fixture resets.
- Explain that `cy.request()` bypasses `cy.intercept()`; its exercises require the real dedicated local mock API.
- Explain that `cy.task()` executes Node-side code; expose only explicitly permitted task names and validated payloads.
- Cover selectors, actionability, rerenders, asynchronous UI, network timing, fixtures, and configuration only where the source studies them.
- Distinguish `before` from `beforeEach`, test isolation, and `cy.session()` cache scope and validation under the discovered version.
- Use `cy.origin()` only for a supported, explicitly configured second local origin; do not imply arbitrary cross-origin or multiple-tab support.
- Compare each lesson with its own code and sibling explanations before proposing gaps; keyword occurrence alone is insufficient evidence.
- Exclude exercise starters/harnesses and generated supplements from feedback loops that would make the source appear to contain new taught concepts.
- Conflicting source claims become reviewed diagnostics or optional correction proposals, never unannounced rewrites.

## 6. Deterministic revision, review, and publication
- The routine user command is `npm run revise`; it parses, merges, stages, validates, and reports work, but performs no automatic AI research.
- Keep `npm run revise` the single source of truth for future generation/review: thin revise/generate/approve adapters call one shared workflow core. New rules and validation belong there, not in command-specific bypasses or manual generated-file fixes. Shared behavior is a design contract, not a guarantee against future bugs.
- Derive supplements from freshly extracted staged notes, not the last published dataset. Maintenance/force-refresh aliases use the same core; review binds consumed caches/baselines and publication rechecks the input snapshot, preserving concurrent edits.
- Read source as immutable input, load approved sidecars, and build a complete candidate under `.revision-work`.
- Generate **fresh suggestions and the ledger before review**, including when only suggestion status/content changes and dashboard data is otherwise identical.
- Show changed notes, supplemental additions, removals, eligibility changes, diagnostics, source hashes, and exact optional source patches.
- Missing supplemental explanations/questions/cards/exercises produce explicit `needs-authoring` tasks; users need not add annotation markers.
- Copilot authoring is a separate intentional action: read the work queue, inspect source/context and appropriate official docs, then draft candidate sidecars.
- Review Apply/Discard operates on a proposal ID; applying supplements does not implicitly approve source edits.
- Source insertion patches require explicit reviewed acceptance, preserve existing wording, and are independently visible and deselectable.
- All entry points call one `approveCandidate` implementation: browser Apply, CLI review, optional npm approve alias, and automation.
- Local browser Apply uses an authenticated, same-origin review bridge started by the Node workflow; Pages review is read-only/export, never repository writes.
- Approval rechecks proposal/source hashes, acquires a project lock, stages all outputs, regenerates the candidate, and validates it before publishing.
- Reject stale proposals instead of overwriting subsequent user edits; propose regeneration with preserved review dispositions.
- Transaction scope includes dashboard data/assets when changed, manifests, caches, approved sidecars, suggestions, ledger, and explicitly accepted source patches.
- Use staged generation directories, a write-ahead journal/backups, and an active-generation pointer published last so readers never combine generations.
- For files outside that pointer, journal every write and recover transaction-owned changes on failure; never overwrite newer user edits during recovery.
- Keep the previous dashboard generation usable after any failure; report recovery conflicts and retain evidence rather than claiming successful rollback.
- Make repeated approval of the same candidate idempotent; serialize concurrent revisions/approvals and clean up only owned locks/workspaces.
- Discard removes pending candidate work only; it never reverses handwritten source edits or previously approved content.
- Code-only dashboard refreshes still stage and pass shared validation before publication; no “fast” route may bypass checks.
- `npm run check` uses the same generation/validation core noninteractively in scratch staging, with no publication of dashboard/caches or source mutation. Run fast structural/UI checks and the required approved native fixture checks for the selected validation profile; never run arbitrary discovered source tests.
- Strict checks fail for missing required native tools/capabilities and stale required evidence; ordinary static study remains available without those tools.
- Refresh changed required evidence through the approved local harness before Apply; reuse only matching source/solution, fixture/oracle, toolchain, configuration, and validator fingerprints. An explicitly named static-only profile reports native work as not run and cannot satisfy a required native publication gate.
- Optional `npm run approve` is an alias, not an additional routine user command; never hide a Windows `start` shortcut behind approval semantics.
- Setup/install, Copilot authoring, and learner-triggered native exercise execution are separate documented actions. Pure extraction/generation never executes lessons; validation may execute only approved revision harnesses under the local-only policy.

## 7. Authoring quality and the coverage ledger
- Approved sidecars are durable learning content; pending Copilot drafts remain reviewable and are not counted as available material.
- Supplemental explanations may clarify source, but must link to the studied concept and declare their provenance rather than pretending to be original notes.
- Only finished chapters contribute quizzes, cards, cram, practice, deep problems, mastery coverage, and readiness denominators.
- Draft chapters remain readable/searchable notes only; an explicit all-finished project is valid, and a draft-only project has honest zero supplemental counts.
- Ledger rows show chapter/topic status, source counts, question totals by kind/difficulty, cards/cram, and practice/deep-problem coverage.
- Distinguish native-verified exercises, supported-but-unverified exercises, unknown capability, blocked/unsupported exercises, and draft exclusions.
- Count unique IDs, not repeated references, aliases, options, fixture files, or test retries; UI and ledger use the same eligible pool.
- Report source-faithfulness/schema/security errors separately from warnings, optional improvements, and `needs-authoring` queue items.
- Missing content is never replaced with phantom prose, generic distractors, or unstudied topics; do not display a green completeness claim over authoring gaps.
- Configure which missing finished-topic essentials block publication; always expose nonblocking authoring gaps clearly.
- Gap analysis compares source prose, the chapter's own code, and sibling explanations; justify each finding with concrete spans and concept relationships.
- Suggested examples and deep problems must use studied concepts; external references can verify facts but cannot silently expand the syllabus.
- Store rejected fingerprints so repeated unchanged suggestions stay dismissed while newly changed concepts can produce fresh review items.
- Validate explanations and wrong-option reasons against the source and fixture contract, not just keyword presence or question count targets.
- Distinguish official-document verification from native runtime evidence; a citation does not certify an exercise passed.
- Ledger updates accompany every candidate, including suggestion-only and status-only revisions.

## 8. Complete static dashboard behavior
- Notes preserve source order, prose, highlighted code, tables, parameters, chapter/topic anchors, and source links.
- Provide global/scoped search, bookmarks, revised markers, theme controls, and a chapter reading list distinct from the quiz question pool.
- Print/PDF uses browser print styles with expanded content, readable page breaks, and wrapping or paginated code without clipped lines.
- QuickRevision supports browsing, flashcards, reveal, due review, and a compact cram view; no legacy separate quiz menus.
- Cram-point text targets at most 160 characters and 26 words; displayed code is at most three lines, with full context/harness available separately. Longer explanatory quiz answers remain available in Notes and feedback.
- Never arbitrarily truncate semantic content: warn on oversize/context loss, require reviewed rewriting or a different view, and reject invalid compact cards.
- Author useful source-backed points without chapter count quotas; a missing learning artifact is an authoring task, not permission to manufacture filler.
- RevisionBank is the only quiz engine, with scope, topic, concept, kind, difficulty/level, and search filters.
- Presets are Everything, Interview, Tricky, Concept, and Scenario; describe them as study presets rather than vendor exam modes.
- Support single/multiple choice, true/false, fill-code, behavior prediction, and written self-assessment when appropriate. Preserve comparison tables as real tables; ungraded written answers do not count as automatic proof.
- Offer 10, 20, 40, or all questions, capped by the unique eligible content pool with the actual available count shown.
- Deduplicate before sampling; passing the same pool twice must not double totals or repeat a question within a session.
- `QuizThisTopic` and review shortcuts enter the same RevisionBank with explicit scope; empty scopes display zero, never a fallback to unrelated chapters.
- Support close, resume, restart, answer review, and saved results; do not score unanswered questions as previously attempted evidence.
- Results show chapter breakdowns, wrong answers, every distractor explanation, concept links, and jumps back to source notes.
- PracticeLab offers starters, progressive hints, rubric, expected observations, local native execution where allowed, and explicit self-check fallback.
- DeepProblems combine studied concepts into larger tasks without unlocking gates or inventing advanced prerequisite topics.
- Display native execution status, runner/version, observation evidence, fixture freshness, and any unsupported or blocked reason.
- Hosted/offline study can export exercise bundles and record self-check observations; label them differently from native proof.
- Mastery is study confidence, requiring at least three DISTINCT eligible objective question IDs and 80% accuracy per concept by default; make thresholds and the scored-history window explicit.
- Repeating one question cannot satisfy breadth. Exclude interview self-assessment and answer reveals; score each finalized session/question/version once, including after resume/import or repeated clicks.
- Label unattempted concepts unseen, not weak; show thin evidence separately from demonstrated weakness.
- Readiness is a study indicator, not certification: default weights are 35% scored accuracy, 20% attempted-question coverage, and 45% concept proof.
- Normalize components to 0-100: accuracy is correct/valid objective responses; coverage is unique eligible questions attempted/available; concept confidence is eligible concepts meeting the 80%-and-three-distinct-questions rule/eligible concepts. Neither metric is official proof.
- Show native exercise evidence separately from quiz-based concept proof. Self-checks, unsupported execution, and infrastructure failures neither count as native passes nor lower quiz accuracy.
- If a denominator is zero, show its component as not available and leave the total unavailable with reasons rather than fabricating readiness.
- Keep quiz/card/practice evidence inspectable; changing an answer's meaning invalidates affected mastery without destroying the historical record.
- Merge due cards and questions into one review queue and next-action selector: overdue first, then weakest evidenced concept, then untried.
- Card actions open that card; quiz and weak-concept drills open the same scoped RevisionBank, with deterministic tie-breaking.
- Mastery gaps, example recommendations, and suggestions are read-only views; editing/acceptance belongs to the review workflow.
- All study and practice navigation remains available regardless of mastery score; no artificial progression gates.
- Preserve keyboard access, visible focus, readable typography, light/dark contrast, and responsive mobile layouts; avoid adding duplicate quiz menus to supply missing navigation.
- Render source/imported content as text or safely sanitized markup; never execute notes, imported HTML, or examples inside the dashboard.

## 9. Browser persistence and portability
- Namespace storage as `revision:<projectId>:v1`; never reuse a global prefix such as `javarev_*` across projects.
- Persist theme, bookmarks, revised flags, reading/progress state, question attempts, card scheduling, practice evidence, and resumable sessions.
- Persist content versions and generation references with evidence; derive mastery/readiness from valid events rather than storing authoritative summaries.
- Browser storage is origin-specific: local HTTP ports, Pages domains, and `file://` do not automatically share progress.
- Provide JSON export/import with schema version, project identity, content-version metadata, and a user-visible preview before any write.
- Provide explicit reset confirmation and a backup/export option before clearing project-scoped progress; never clear another portal's storage.
- Export backups before migrations/imports; reject a different project identity unless a deliberate reviewed migration maps it.
- Validate sizes, types, IDs, versions, dates, and execution statuses; skip/report unknown IDs and corrupt entries without wiping valid existing state.
- Preview conflicts and support keep-existing/merge choices; deduplicate events by stable IDs and never silently overwrite newer local progress.
- Migrate known schema versions explicitly; unsupported future versions are rejected with a readable explanation.
- Recompute mastery after import; invalidate stale semantic versions and never trust imported summary scores.
- Mark imported native evidence as externally supplied unless its report provenance can be verified locally; do not promote a self-check to native proof.
- Preserve historical attempts for display while excluding invalidated answers or outdated fixtures from current mastery/proof.
- Handle unavailable/quota-limited storage with visible warnings and export options, not silent reset.
- Store no secrets, credentials, sensitive application responses, or unredacted environment logs; no cloud synchronization.

## 10. Native runner trust boundary and lifecycle
- Native learner execution is explicitly enabled, user-triggered, and local. Reading and pure generation never execute examples; the validation stage may run only the approved trusted revision harnesses selected by its profile.
- A user-enabled service may bind only to loopback and serve the local dashboard from the same origin with authenticated session-bound requests.
- Validate Origin, CSRF protection, request sizes, and authorization; do not expose permissive CORS or reusable tokens in URLs/static artifacts.
- Accept allowlisted fixture IDs, runner IDs, exercise IDs, and bounded submitted source, never arbitrary shell commands, host paths, or executable arguments.
- Use separate job directories and isolated configuration; never run the host project's real Cypress suites, hooks, plugins, or secret-bearing setup.
- Enforce concurrency one, bounded timeouts/output sizes, cancellation, and cleanup of owned process trees using exact owned PIDs.
- Shutdown stops only owned jobs/services and removes only their workspaces; preserve compact redacted evidence required for review.
- A subprocess is **not a sandbox**: arbitrary student JS/TS needs OS/container-enforced filesystem and network restrictions plus a secret-free environment.
- Without enforceable isolation, block arbitrary native execution with a clear reason; offer bundle export or self-check, not a safety promise.
- Mount/copy only required fixtures and supported runtime assets; deny host home directories, credentials, unrelated source, and unrestricted filesystem writes.
- Default-deny egress at the enforcement boundary, allowing only designated demo/mock endpoints and explicit local origins.
- Apply network policy to browser requests, redirects, embedded resources, `cy.request`, Node tasks/plugins, child processes, and server-side requests.
- A runner-side URL check alone is insufficient; test redirect and embedded-request escapes against the actual isolation boundary.
- Permit only reviewed `cy.task` implementations with strict payload validation; never expose a generic command/file/network task.
- Start local demo/mock services under runner ownership, verify health and binding, seed fixtures, then launch only the dedicated native suite.
- Install tools/browser binaries only during an explicitly approved setup step; `revise`, `check`, and exercise runs must not auto-download dependencies.
- Preflight verifies required runtime/browser caches and dependencies before launch; a missing cached component is blocked, not fetched on demand.
- Hosted Pages must never access a privileged localhost service or provide remote execution; use disabled runner controls and export/self-check there.
- Runner reports use independent fixture contracts/oracles; the student's own output or assertions alone are not the expected truth.
- Require structured results and a positive executed-case count; missing dependencies or zero executed tests are blocked, not passed.
- Assertion mismatches are failed; process/setup/report faults are error; enforced job expiry is timeout, each retaining bounded diagnostic evidence.

## 11. Dedicated Cypress adapter and local examples
- Invoke the **installed version's** native `cypress run` with a dedicated config, explicit spec pattern, supported headless browser, and structured reporter.
- Illustrative command, only after implementing and verifying the isolated config and enforcing the runner boundary:
```powershell
.\node_modules\.bin\cypress.cmd run --config-file .\revision-fixtures\cypress.config.ts --browser electron --headless
```
- That filename/browser is conditional on discovered support; use a compatible JS/config extension and installed browser rather than forcing this example.
- Never run `cy.*` in a Node VM, translate it into JavaScript simulations, or reuse the reference Java browser translator as native execution.
- TypeScript transpilation does not prove type correctness; expose a separate scoped installed-compiler check without claiming it executes Cypress behavior.
- Configure explicit fixture/support roots, safe task registration, report paths, test selection, retries, and test isolation for the installed version.
- Build an asynchronous local UI with rerendering lists, dummy login/session validation, and CRUD requests to a real local mock API.
- Reset seed data per test and verify request captures; use a fixed contract with two seeded items for this illustrative studied-topic exercise:
```javascript
// Register the request spy before the page can send the request.
// Wait for that named request rather than sleeping for an arbitrary duration.
it('loads the seeded items through the local API', () => {
  cy.intercept('GET', '/api/items').as('items');
  cy.visit('/');
  cy.wait('@items').its('response.statusCode').should('eq', 200);
  cy.get('[data-cy=item-row]').should('have.length', 2);
});
```
- `baseUrl`, server lifecycle, and fixture reset belong to the dedicated harness; the snippet alone is not a complete reliable exercise.
- The oracle also verifies the local request and seeded UI state; a student deleting assertions or faking the expected output must fail.
- For test-authoring tasks, run trusted good/broken fixture variants: require a pass for good data and an expected assertion failure for bad data; missing assertions fail the exercise-level oracle.
- Explicit exercises distinguish retryable absence, genuine HTTP error responses, command failures, and harness timeout; don't collapse these statuses.
- Verify behavior against https://docs.cypress.io/app/core-concepts/retry-ability and https://docs.cypress.io/api/commands/intercept.
- Check installed-version compatibility using https://docs.cypress.io/app/tooling/typescript-support and https://docs.cypress.io/app/references/configuration.

## 12. Concrete learning content and deeper practice
- Queue-trace quiz: ask when a variable assigned inside `.then()` becomes available; reject “`cy.get` immediately returns the DOM value” and explain why.
- Queue exercise: repair an ordinary-value/queued-command mistake; require the expected yielded value and a real assertion observed by the harness.
- Reliable-intercept quiz: choose intercept-before-action plus alias wait; explain why registration afterward and fixed sleeps are unreliable.
- Network exercise: fix a local loading-list race; independently verify GET capture, response status, seeded rows, and behavior under delayed responses.
- Custom-command/POM quiz: distinguish returning a Cypress chain from exposing an immediate primitive; explain misleading async/await alternatives.
- Local abstraction exercise: implement a studied page helper/custom command with stable selectors and preserved subject flow; test rerenders and missing elements.
- Isolation/session quiz or exercise: compare `beforeEach` resets and validated session reuse without relying on another test's state.
- Include each exercise's starter, hints, rubric, capability, oracle contract, and expected failed/passed observations in reviewed sidecars.
- DeepProblem: a local dummy-login and CRUD mini-suite combining studied selectors, aliases, state reset, retry behavior, and a reusable helper.
- Its independent harness checks create/read/update/delete effects and test-order independence; failures must remain visible even if assertions are removed.
- Add negative mutations: late intercept, brittle sleep, stale DOM subject, wrong endpoint, missing reset, and unchecked session reuse.
- Supply coherent explanations for each wrong choice/mutation, with source-note links and optional version-matched official references.

## 13. Ordered implementation milestones
| Milestone | Deliverables and dependencies | Done criteria |
| --- | --- | --- |
| 1. Discovery | Inventory roots, installed versions, module/TS settings, scripts, fixtures, licenses, and destination assumptions. | Reviewed compatibility map; no existing suites executed or manifests rewritten. |
| 2. Config/schema/extractor | Depends on 1; explicit statuses, stable IDs, schema validators, JS/TS comment/block extraction. | Fixture parsing preserves source bytes and distinguishes lessons from support/resources. |
| 3. Core static Notes | Depends on 2; dashboard shell, faithful blocks, search, source links, print, HTTP/Pages base paths. | Finished and draft notes render safely with no exercise service. |
| 4. Review/content/ledger | Depends on 2–3; deterministic revise/check, Copilot queue, durable sidecars, fresh proposals, shared transactional approval. | Suggestion-only changes review correctly; stale/failing approvals preserve the last generation. |
| 5. Native harness | Depends on 1–2 and fixture policy; dedicated Cypress config, local UI/API, isolated jobs, structured evidence. | Real passes/failures and blocked/timeout/error cases distinguished; negative mutations fail. |
| 6. Quiz/cram/practice | Depends on 3–5; single bank, cards/cram, PracticeLab, studied DeepProblems, authored explanations. | Full filters, empty scopes, resumable results, compact-content rules, and native/fallback states work. |
| 7. Mastery/storage/review | Depends on 4–6; versioned evidence, thresholds, next actions, namespaced backups/imports. | Stale evidence excluded, unseen distinct, review routing correct, corrupt imports non-destructive. |
| 8. CI/docs/release | Depends on all earlier milestones; targeted tests, reproducible setup, static artifact, exact usage docs. | Acceptance matrix passes; every required feature is delivered, not deferred after the Notes milestone. |

## 14. Acceptance matrix
| Case | Action and expected result |
| --- | --- |
| Source immutability | Hash raw source before/after revise, check, supplement approval, and discard; bytes remain identical. |
| Explicit insertion | Accept one explanation patch; only its reviewed insertion changes source, preserving wording, encoding, and newline style. |
| Stale proposal | Edit source after staging, then Apply; reject the old hash without overwriting the edit. |
| Transaction failure | Inject a failure after staged ledger/cache/source preparation and during publication; old generation remains coherent and recovery respects later edits. |
| Concurrency/idempotency | Approve twice and race two approvals; one consistent generation results, with no duplicated content or state. |
| Suggestion-only change | Alter a rejection or gap suggestion without changing notes; the fresh proposal/ledger still appears before Apply. |
| Parser boundaries | Parse comments containing URLs, braces, regexes, templates, JSDoc tables/params, and supported JSX; preserve strings and exact spans. |
| Syntax/version boundary | Exercise supported mixed JS/TS extensions and an unsupported target syntax; support is explicit and unsupported input is diagnosed. |
| Status mapping | Finish every chapter, then test a draft-only project; zero draft chapters is valid and draft-only supplemental totals are zero. |
| Draft isolation | Keep draft notes readable while excluding their questions/cards/practice from bank, ledger coverage, mastery, and next actions. |
| Stable identity | Add the next chapter and rename/reorder an existing topic; existing IDs/progress survive and new content gets new IDs. |
| Missing tools/zero tests | Remove a required runner/browser or select no cases; strict check fails preflight and native result is blocked, never passed. |
| Failure taxonomy | Trigger a real assertion failure, process crash, malformed report, and deadline expiry; record failed/error/error/timeout with evidence. |
| Native semantics | Run queue, retry, intercept, `cy.request`, and task-policy fixtures natively; typecheck/transpile results never substitute for execution. |
| Independent oracle | Delete assertions or mutate endpoint/reset logic in a student solution; the harness fails despite an otherwise green student spec. |
| Local-only boundary | Attempt redirects, embedded fetches, Node tasks, child processes, and filesystem escape; enforce denial or block execution when isolation is unavailable. |
| Pool deduplication | Feed the same question pool twice; sizes 10/20/40/all use unique eligible IDs and correct available totals. |
| Empty scope | Select a blank/draft topic and start QuizThisTopic; show an empty state, never another chapter's questions. |
| Scores/results | Close/resume a quiz, reload, and review wrong answers; scores persist once, chapter totals agree, and source links resolve. |
| Answer versioning | Change a correct answer, then only punctuation; the former invalidates mastery and the latter preserves it. |
| Cards/next action | Reject an oversized compact card; overdue cards/questions outrank weakness and untried work with correct destination routing. |
| Mastery/confidence | Compare unseen, repeated-one-question, three-distinct-question 80%+, self-assessment, unsupported, and native evidence; repeated clicks/resume/import cannot double-score. |
| Exact grading and distractors | Reject output prefixes/suffixes and type coercions; preserve declared line structure; every wrong choice is false under its prompt. |
| Import safety | Import malformed JSON, future schema, foreign project, unknown IDs, duplicate events, and stale versions; preview/backup and preserve valid state. |
| Origin/project separation | Open two project IDs and two origins; no collisions occur, and export/import explains portability. |
| Static/offline behavior | Serve the generated artifact locally and on a Pages-like base path; study works without a runner and hosted pages cannot invoke localhost. |
| XSS/print/accessibility | Render script-like notes/import data and print long code/tables; nothing executes and no code is clipped. Check keyboard/focus behavior, mobile layout, readable type, and light/dark contrast. |
| Clean environments | On supported Windows/Linux, use explicit clean locked setup and targeted tests; no revise/check auto-install or host-suite execution occurs. |
| Documentation/count parity | Compare documented commands, UI totals, generated ledger, and fixture capabilities; reject stale menus, counters, and claimed tools. |

## 15. Validation, CI, and handoff
- Reuse the destination's existing testing tools; test extraction, schemas, transactions, storage, scoring, and adapters with focused fixtures before broader suites.
- Cypress may UI-test its own portal through the dedicated local fixture configuration; this is not permission to run the repository's real environment suite.
- CI uses the shared `npm run check` orchestration for candidate validation, targeted implementation tests, and required isolated native fixture checks. Expose focused selectors without a bypass around publication requirements; no real-environment host suite runs.
- Trigger relevant CI on authored notes, sidecars, schemas, UI, harnesses/fixtures, configuration, manifests, lockfiles, and workflow changes; a failed check must prevent replacing the last published portal.
- Gate setup with the chosen package manager's lockfile-based clean install; pin reviewed compatible versions and document Windows/Linux command differences.
- Publish **only `revision-dashboard`** as the Pages artifact; exclude `.revision-work`, source secrets, reports, environment dumps, traces, and browser credentials.
- Scrub retained logs/requests and inspect artifacts for sensitive data; never send private source, submitted exercises, compiler jobs, or logs to external services.
- Document first setup, local HTTP study, ordinary-note editing, revise/review/Apply/Discard, Copilot authoring, native execution, backups, and recovery.
- Handoff reports the discovered target assumptions and unresolved capability limits explicitly; no unverified version, vendor-readiness, or sandbox guarantee.


## 16. Verification and wording lessons from the reference

The reference portal reached a working state and then needed these additions. Each
one exists because something failed first. Adopt them deliberately rather than
rediscovering the gap.

### Wording improvements are proposals from an authored catalogue

Do not let the tool rewrite prose on its own judgement. That is how fabricated
content entered the reference notes, and it could not be removed afterwards,
because content written into the author's files is no longer generated content.

- A separate catalogue holds rules. Each rule is an exact `before` line, an `after`
  replacement, a reason, and a category.
- A rule applies only when its `before` matches one note line exactly, occurs exactly
  once in the file, and its replacement cannot change executable code.
- Every finished topic is scanned on every run, but only sentences that have a rule
  can be *proposed*. The tool cannot discover vague prose by itself: keyword matching
  cannot tell what a line is about from what it merely mentions.
- Each proposal is accepted or rejected on its own. An accepted proposal stops
  matching, so the list shrinks as the author works through it.
- Derive the proposal key from the `before` text, so correcting the replacement
  wording later does not disturb a previous rejection.
- Never invent a method, field or example the destination file does not have. A
  helpful-looking example from a different domain is worse than no example.
- "0 proposals" means the catalogue is empty or stale, not that the notes are
  perfect. Report that distinction honestly, and never pad the catalogue to look
  thorough.

### Layout and journeys need a real browser

A DOM-only harness has no viewport and no box model. It can prove that a view
renders without throwing while the same view pushes content off a phone screen. The
reference shipped a practice editor that overflowed on mobile, and no DOM check
could see it.

- Add a real-browser check at phone and tablet widths: no view may make the document
  wider than the viewport, the code editor must stay inside it, and the closed drawer
  must be off-screen.
- Add a journey check. A first run with empty storage must offer a starting point and
  render every view. A returning run must show that progress survived a reload, that
  the mastery view reflects it, and that a next action is offered.
- Seed progress through the application's own API rather than by writing storage by
  hand, so the check cannot pass against a format the application would never produce.
- Serve the page over http, never `file://`. An opaque origin changes how browser
  storage behaves, so the check would be testing a different page.
- Missing browser tooling fails the check. A skipped check is not a passing check.

### Validate on pull requests, separately from deployment

Deploying on push to the main branch catches a broken change only after it has landed
on the publishing branch. Add a read-only verification workflow on pull requests that
runs the full check and publishes nothing. Keep deployment in its own workflow, and
never give a pull-request workflow write access to the repository or to Pages.

### Keep one validator list

Declare every check once, together with the profiles it belongs to, and make the
profile entry points thin adapters over that list. Two hand-maintained lists drift,
and the check added to one but not the other is the one that silently stops running.