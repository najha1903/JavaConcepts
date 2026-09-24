# Selenium + Java Revision Portal — Standalone Implementation Plan

**Status: future implementation blueprint.** This document specifies a destination
portal; it does not claim that a Selenium portal or native runner exists in
JavaConcepts. Copy this file alone to the destination and begin with discovery.

## 1. Purpose and approved scope
- Build a revision portal **for studying Selenium with Java**, not a portal implemented with Selenium and not a new Java application backend.
- Deliver a static browser dashboard, dependency-light local Node orchestration, and opt-in native Java exercises against dedicated local browser fixtures.
- Preserve full portal scope: Notes; Quick Revision browse and spaced flashcards; one Revision Bank; Practice Lab and Deep Problems; Mastery; coverage ledger; review and approval.
- The learner writes ordinary notes only. Copilot authors missing questions, cram points, explanations, examples, and exercises in a separate, reviewable content workflow.
- Store supplementary authored content under versioned `revision-content`; never require quiz markers, snippet tags, or rewritten lesson formatting.
- Insert a missing explanation into original notes only after explicit approval of that individual source patch; preserve the exact existing wording outside its approved span.
- `npm run revise` is a deterministic CLI, **not an AI service**: extract, merge already authored content, build candidates, and report `needs-authoring` where material is absent.
- No external AI service, remote compilation service, automatic research, live-site testing, certification claims, generic Java exam catalog, or speculative future lessons.
- Draft/current chapters remain visible as notes only; exclude them from generated questions, cram points, exercises, gap metrics, and readiness denominators.
- Preserve the destination's existing organization, build files, tests, and naming; add explicit configuration instead of restructuring its lessons.

## 2. How to use this document with Copilot
- Move this file into the destination Selenium learning repository and ask Copilot to implement it in the ordered phases below.
- The file is the complete implementation contract; no sibling plan, conversation, session directory, or reference checkout is required.
- Begin with discovery and a proposed repository mapping, not scaffolding. Ask the destination user about ambiguous lesson boundaries and draft/finished status.
- Do not invent chapter names or silently assume that the highest-numbered folder is the current chapter.
- Separate two roles: Copilot reads finished notes and authors reviewed supplements; the installed CLI processes those files without needing Copilot.
- Have Copilot report each phase's changed files, exercised checks, unresolved authoring tasks, and explicit blocked capabilities before proceeding.
- Execute only dedicated revision fixtures. Existing tests that visit external services remain outside all revision commands, even if the project default test task runs them.
- This document authorizes the planned design; actual destination source insertions, dependency provisioning, and native-code execution retain their explicit approval gates.

## 3. Reference evidence and reuse limits
- Behavioral reference: [JavaConcepts at the reviewed commit](https://github.com/najha1903/JavaConcepts/tree/cce27d16733b10766a867ffc46ff41c6d10db59f), commit `cce27d16733b10766a867ffc46ff41c6d10db59f`.
- Reviewed documentation included `README.md`, `rules.md`, `TEMPLATE.md`, `coverage.md`, and `suggestions.md`; implementation review covered parsing, generation, approval, review serving, suggestions, coverage, UI/checks, and scaffolding/configuration.
- The pinned reference is historical evidence, not a statement of the current JavaConcepts implementation. Inspect current code/package wiring before reusing it; use this plan as the destination contract.
- All destination approval paths must use one implementation for staged validation, fresh ledger/suggestions, conflict detection, and journaled publication.
- Existing globals provide useful roles: `CONCEPTS_DATA`, `QUESTIONS_BANK`/`QUICK_REVISION_BANK`, `GENERATED_PRACTICE_CHALLENGES`, `DEEP_CHALLENGES`, `COVERAGE_DATA`, and `SUGGESTIONS`.
- Preserve those capabilities, not their exact JavaScript shapes: publish normalized, versioned JSON fetched by a static dashboard over local HTTP or GitHub Pages.
- The old browser lab approximates limited Java with JavaScript; it cannot validate WebDriver behavior and must be replaced with genuine native Selenium execution.
- The historical copy-based scaffold did not supply a complete dependency graph or framework implementation; it is not a working Selenium bootstrap.
- Never run `create-project.js` blindly. Optional reuse is limited to owned UI assets with provenance, license, and attribution respected; rebuild all Selenium catalogs and generated data.
- Audit every imported asset's complete dependency graph, including scripts, styles, icons, fonts, and data references; copy no Java lesson samples or generated Java quiz payloads.
- Verify storage migration, backup, recovery, and actual check execution independently; neither historical limitations nor current Java features establish destination parity.

## 4. Destination discovery and decisions
- Inventory configured roots: `src\test\java`, `src\main\java`, authored `notes`/`docs`, root-level lessons, and other existing chapter layouts.
- Include `.md` only through an opt-in authored-lesson allowlist; exclude this plan, generated documentation, dependency trees, build outputs, and dashboard files.
- Detect Maven or Gradle, wrappers, multi-module structure, JDK/toolchain, Selenium dependencies, JUnit/TestNG, plugins, test selection, and browser provisioning.
- Inspect configured URLs, Grid settings, environment reads, and integration-test profiles without contacting them or printing secrets.
- Reuse the repository's configured ecosystem and existing runner when safe; never replace its POM/build manifest or reorder existing tests and notes.
- Establish dedicated revision source roots and fixture test selection through an isolated module, source set, or opt-in profile that cannot inherit external suites.
- Choose the smallest safe isolation boundary; if default lifecycle hooks contact external services, use a standalone revision module with its own explicitly reviewed build.
- Configure `projectId`, technology/version declarations, lesson roots, exclusions, chapter/topic mappings, source language, fixture roots, ports, and capability requirements.
- Prefer an explicit chapter manifest with stable ID, display label, source globs, order, and `draft`/`finished`; missing status is unresolved, not finished.
- If all chapters are finished, include all of them; never create a phantom current chapter or infer future topics from numbering gaps.
- Record detected versions and compatibility decisions; pin Selenium 4, JDK, test framework, build plugins, driver/browser strategy, and supported browser versions after discovery.
- Identify platform constraints, browser binaries, network restrictions, Pages publishing scope, and whether a genuinely restricted worker is available.
- Discovery deliverable: reviewed mapping/configuration, safe build invocation, capability report, and unresolved questions; no generated exercises before mapping is trustworthy.

## 5. Architecture and ownership
```text
revision.config.json                  Project identity, roots, status, policies, capabilities
revision-content\catalog.json         Stable chapter/topic/concept identities
revision-content\<topic-id>\*.json    Reviewed questions, cram, examples, exercises, provenance
scripts\revision\cli.*                Thin command entry points and argument handling
scripts\revision\core\extract.*       Read-only source extraction and source maps
scripts\revision\core\model.*         Versioned schema, IDs, fingerprints, migrations
scripts\revision\core\rules.*         Shared eligibility, coverage, deduplication, scoring rules
scripts\revision\core\generate.*      Deterministic candidate generation
scripts\revision\core\review.*        Candidate diffs and review-server routes
scripts\revision\core\approve.*       Shared CLI/UI approval transaction
scripts\revision\core\ledger.*        Coverage and actionable authoring tasks
scripts\revision\core\validate.*      Candidate checks and validation profiles
scripts\revision\native\selenium.*    Allowlisted job adapter and structured test results
revision-fixtures\                   Local deterministic DOM demo and Java harness module
revision-dashboard\                  Static HTML/CSS/JS and published versioned data
.revision-work\                      Ignored candidates, locks, journals, job artifacts
```
- Use one dependency-light core **inside this destination**, imported by every command path; no runtime dependence on a central monorepo.
- Java fixtures belong under the chosen module's proper `src\test\java`/resources roots or configured Gradle source set; never scatter unconfigured Java files beside the UI.
- Reserve `revise`, `check`, and optional `approve` package scripts only when free; if names already exist, agree on documented aliases such as `revision:check` without overwriting them.
- Add explicit `revision:serve`, `revision:setup`, and `revision:check:native` commands where needed; setup provisions dependencies/browsers only with user initiation.
- Track reviewed sidecars, schemas, fixture sources, and release-ready static artifacts per repository policy; ignore execution logs, workspaces, tokens, locks, and machine paths.

## 6. Versioned content and execution contracts
- Every published dataset carries `schemaVersion`, `projectId`, `technology`, detected/pinned `versions`, and an approved snapshot fingerprint.
- Chapter/topic/concept IDs are durable identities, separate from display titles, sort order, source paths, and source spans; retain aliases for intentional migrations.
- Source references include repository-relative path, block/span coordinates, source hash, extraction version, and chapter/topic association.
- Source blocks retain `kind: prose|code|table|params`, language, exact text, and structured table/parameter metadata without losing original rendering.
- Question records include stable `id`, `contentVersion`, prompt, kind, level, choices with stable IDs, `correctIds`, explanation, per-wrong-option reasons, concept IDs, topic ID, source references, provenance, and review status.
- Never derive identity from array position, short answer text, or current display order; choice shuffling must not alter grading or saved answers.
- Retain legacy IDs as explicit aliases (for example `legacyQids`) and version semantic changes with `contentVersion`; back up state before migrations and never transfer obsolete correctness to a changed answer.
- A distractor must be false under the exact prompt, not merely a true statement from another topic. Remove ambiguous topic-membership MCQs rather than teaching a false distinction.
- Grade choice IDs by exact set; grade output with type-sensitive expectations, preserving spaces, lines, boolean values, string literals, and errors. Never accept an output substring or coerce `"false"` to `false`; declare any permitted normalization.
- Maintain a grading/evidence fingerprint: changed answers, semantic choices, tested concepts, or rubric invalidate affected mastery evidence; cosmetic edits do not.
- Cram records include a concise point, code context, expectation, source/provenance, concept links, review state, and a card identity/version.
- Model output, compile diagnostics, runtime errors, and assertion outcomes as distinct expectation kinds; missing dependencies or an unrelated failure cannot satisfy an intentional-error example.
- Source/framework fingerprint changes mark affected supplements and execution evidence stale and queue review; never overwrite reviewed sidecars or retain stale answers as current proof.
- Exercises include starter files, hints, rubric, `fixtureId`, allowlisted `runId`, runner capability, expected observations, source links, difficulty, and content/evidence versions.
- Suggestions include stable ID, reason/rule ID, target source hash, exact proposed patch or sidecar change, provenance, and `open|accepted|rejected|superseded|conflict` state.
- Execution records use `pass|fail|unsupported|blocked|timeout|error`, capability/version metadata, structured evidence, duration, job ID, and solution/fixture/test/environment fingerprints.
- Preserve the difference between learner assertion failure, infrastructure error, unavailable capability, and blocked policy; never convert all of them into a wrong answer.
- Author provenance records human/Copilot origin, reviewed source references, authoring tool/version when available, and approval; do not pretend the CLI authored the material.
```json
{
  "schemaVersion": 1, "projectId": "selenium-study", "technology": "selenium-java",
  "versions": {"selenium": "<detected-and-pinned>", "jdk": "<detected>"},
  "snapshotFingerprint": "<approved-input-hash>",
  "question": {
    "id": "q.wait.click-ready", "contentVersion": 1, "evidenceVersion": 1,
    "kind": "concept", "level": "foundation", "topicId": "topic.waits",
    "prompt": "What does ExpectedConditions.elementToBeClickable check?",
    "conceptIds": ["concept.wait.click-ready"],
    "choices": [{"id": "a", "text": "Presence alone"}, {"id": "b", "text": "Visible and enabled"}],
    "correctIds": ["b"], "explanation": "Presence alone does not establish interactability.",
    "wrongReasons": {"a": "The located element may still be hidden or disabled."},
    "sourceRefs": [{"path": "notes/waits.md", "span": [12, 20], "hash": "<source-hash>"}],
    "provenance": {"origin": "copilot-authored", "reviewed": true}, "status": "approved"
  }
}
```
- This is an illustrative shape, not an invented destination chapter; its clickability explanation must also state that visible/enabled does not guarantee an unobscured click.
- Prefer JSON fetching and DOM `textContent`; safely encode any unavoidable embedded JSON/script output, including `</script>`, HTML, quotes, and Unicode separators.

## 7. Extraction, authoring, and publishing workflow
- Extract ordinary Java comments/Javadoc and configured authored documents without executing code; preserve prose, fenced code, tables, parameter lists, URLs, escaped comments, encoding, and CRLF.
- Use source-aware lexical/block parsing rather than keyword scraping; distinguish a mention, an example, an exercise, and a future-topic reference.
- Sidecar matching uses configured IDs plus source provenance; ambiguous mapping becomes an authoring task instead of a fabricated concept or automatic reassignment.
- Copilot authors against actual finished material and official sources, writes supplements separately, and presents reviewable evidence for each question/example/exercise.
- `npm run revise` performs read-only discovery/extraction → normalized input model → deterministic candidate → fresh candidate ledger and suggestions → validation summary → local review.
- Build the ledger and authoring tasks before opening review; absent supplements yield `needs-authoring`, not invented questions or silently empty success.
- On unchanged inputs and generator version, open the existing approved dashboard or pending review without regenerating identities, timestamps, or duplicate proposals.
- Review displays source-note changes separately from supplementary-content changes, includes rendered/raw diffs and provenance, and supports Apply/Discard per item or approved batch.
- Source-note proposals require an explicit per-item source-edit approval even inside a batch; general Apply must not grant blanket permission to insert explanations.
- UI Apply and optional `npm run approve` call the same approval module with the same candidate ID, validation, fingerprint, and transaction rules.
- Recheck source/sidecar/config fingerprints and candidate validity immediately before acceptance; stale proposals become conflicts and must be regenerated or reviewed again.
- Take a project-scoped writer lock; readers use the last published snapshot. Detect stale locks using owned process identity rather than deleting a live writer's lock.
- Stage a complete immutable generation: dashboard data, caches, ledger, suggestions/proposal state, accepted sidecars, and any explicitly approved source patches.
- Publish through one atomic snapshot-pointer switch after checks; source files outside that snapshot require a journaled recoverable transaction, not a false claim of multi-file filesystem atomicity.
- Journal preimages and expected written bytes for all touched outputs; on failure retain/restore the last good snapshot and restore only transaction-owned unchanged bytes.
- If a human edits a touched file during recovery, preserve their bytes, flag recovery conflict, and refuse further publication until reconciled; never overwrite user edits with a blanket rollback.
- Repeating Apply is idempotent; Discard changes only proposal state/work files and never reverses manually edited notes or previously approved content.
- Code-only refresh may auto-publish only when eligibility/content semantics are unchanged and relevant structural plus required fixture checks pass under the trusted-fixture policy.
- Parsing never provisions browsers, downloads drivers, or runs network code. Missing authoring is `needs-authoring`; missing required tooling/skills is explicitly `blocked`.
- `npm run check` calls the same candidate validator noninteractively in scratch staging, publishes no dashboard/caches/source patches, and fails for missing mandatory content or required runner/no-tests conditions.
- The normal daily entry is `npm run revise`; `approve` is an optional automation/manual entry, not an extra command the learner must run every day.
- Keep `npm run revise` the single source of truth for future generation/review: thin revise/generate/approve adapters call one shared workflow core. New rules and validation belong there, not in command-specific bypasses or manual generated-file fixes. Shared behavior is a design contract, not a guarantee against future bugs.
- Derive supplements from freshly extracted staged notes, not the last published dataset. Maintenance/force-refresh aliases use the same core; review binds consumed caches/baselines and publication rechecks the input snapshot, preserving concurrent edits.

## 8. Dashboard behavior and navigation
- Notes: chapter/topic navigation, full-text search, draft badges, source provenance, exact source links, bookmarks/revised markers, and collapsible code, tables, and parameters with accessible controls.
- Quick Revision Browse presents approved cram points by topic/concept; Flashcards uses the same reviewed content with reveal, rating, due date, and spaced scheduling.
- Target at most 160 characters and 26 words per cram point, with at most three displayed code lines and complete setup in a linked harness. Author only useful source-backed points, with no chapter count quotas; never truncate code silently.
- Render comparison tables as real tables and provide chapter print/PDF with expanded, unclipped notes and code. Support mobile layout, keyboard/focus behavior, readable typography, and accessible light/dark themes.
- Use **one** Revision Bank selector; reconcile any legacy pools by stable ID/evidence version, never expose duplicate quizzes because of two source arrays.
- Filters combine chapter, topic, concept, kind, level, and search; presets are Everything, Interview, Tricky, Concept, and Local Scenario.
- Session sizes are 10/20/40/all, capped honestly to available unique items; no padding, repeated questions, hidden chapter leakage, or mandatory content quotas.
- A topic's Start Quiz routes into the bank with its filter; selection is source-unique and stable for a saved session, with randomized presentation stored separately.
- Empty scoped quizzes or practice views show the missing content/capability explicitly; never substitute another chapter's questions or unrelated exercises.
- Support start, pause/resume, close with save/discard confirmation, answer review, and results broken down by topic/concept/kind/level.
- Include chapter breakdowns for mixed quizzes, plus single/multiple-choice, true/false, fill-code, predict-behavior, and written self-assessment where content supports them; ungraded written answers are not automatic proof.
- Each wrong-answer view explains the chosen distractor and links to the exact note block and relevant approved explanation, not merely the chapter top.
- Practice Lab offers focused fixture-backed exercises with starter, hints, reset, execution evidence, and direct concept links; general drill buttons route to Revision Bank.
- Deep Problems are purposeful multi-step tasks tied to studied concepts, not automatically generated for every keyword or forced into coverage quotas.
- Mastery is a study-confidence heuristic: require at least three DISTINCT eligible objective question IDs and 80% accuracy per concept. Repeating one question cannot satisfy breadth; exclude interview self-assessment, reveals, and unsupported practice. Display thresholds/evidence, not official proof or certification.
- Score each finalized session/question/version event once; resume, repeated clicks, imports, and duplicate pools cannot award extra evidence. Preserve drafts and prior events through compatible migrations.
- Track native practice proof separately; require it for a concept only when an approved rule explicitly declares a supported fixture requirement.
- Readiness defaults to configurable weights of 35% scored accuracy + 20% attempted-question coverage + 45% concept proof; show weights, definitions, denominator, and evidence window.
- Accuracy is correct/valid scored responses; attempted coverage is unique approved eligible questions attempted/available; concept proof is eligible concepts meeting the declared evidence rule/eligible concepts.
- Missing authored evidence makes readiness provisional with unknown components; an untouched concept is unstudied, not weak, and draft topics never enter a denominator.
- Due Questions and Due Cards share a study queue but retain separate scheduling/evidence; Study Next explains why it recommends an item and allows unrestricted navigation.
- Prioritize overdue work, then weak evidenced concepts, then untried material. Show example gaps and suggestions read-only in Mastery; acceptance stays in the review flow.
- No hard progression locks. Unsupported practice and ungraded self-checks cannot earn native mastery, lower accuracy, or masquerade as successful executions.

## 9. Local state, portability, and backup
- Namespace every storage record under `revision:<projectId>:v1`; store schema/content versions and stable entity IDs rather than positions or source filenames alone.
- Persist theme, bookmarks/revised markers, quiz/resume/history, card schedule, practice drafts/results, and preferences; keep derivable mastery/readiness as recomputable views.
- Explain that Pages and loopback URLs have distinct origins and therefore separate storage; transfer is explicit, not automatic synchronization.
- Provide versioned JSON export/import, backup download before reset, import preview, and explicit confirmation before reset or destructive replacement.
- Report unavailable/full storage and corrupt imports without wiping valid history; allow temporary in-memory study with a visible persistence warning and export.
- Validate project/schema/version, migrate known IDs through aliases, quarantine unknown entities, and resolve history conflicts by event ID/fingerprint rather than duplicate counting.
- On cross-project import require explicit mapping or reject; do not merge identical short IDs from unrelated projects.
- Recompute mastery from compatible evidence, never trust an imported aggregate. Imported native claims lacking verifiable local artifacts remain historical/unverified until rerun.
- Store no credentials, runner tokens, browser cookies, live-target secrets, or unredacted process logs in localStorage or exported backups.
- Local convenience tokens are ephemeral server memory only; exported study data and static Pages artifacts must not include machine paths or private note sources unintentionally.

## 10. Coverage ledger and authoring tasks
- One shared rules helper determines finished eligibility, concept identity, provenance validity, question uniqueness, practice support, evidence freshness, and scoring across all commands/UI.
- Report finished-only source/content totals, concepts, approved question counts by kind/level, cram/example presence, practice counts, and selective deep-problem links.
- Separate verification totals for parsed, schema-checked, fixture-tested, failed, blocked, unsupported, and not-run items; a file count is not a test count.
- Show `needs-authoring`, missing explanations/examples, unsupported capabilities, stale provenance, and actionable suggestions with stable IDs and concrete source references.
- Each gap produces an explicit task stating the missing artifact, relevant finished topic, evidence requirement, and acceptance condition; no empty placeholder lesson is counted as coverage.
- Distinguish unknown mapping/content from unstudied learning history, and declared unsupported practice from authored practice that has not yet been run.
- A prose mention of “Grid later” does not create a Grid chapter, exercise, or gap; code snippets and future-topic names do not imply practice completion.
- Draft exclusions apply consistently to content generation, gap/readiness calculations, queues, and suggestions; draft notes remain searchable with their status.
- Per-item suppression/rejection records retain rule/provenance fingerprints so changed source can reopen a relevant task without repeating unchanged rejected suggestions.

## 11. Selenium learning and fixture design
- Build the taxonomy only from studied notes: locators, waits, stale elements, frames/windows, actions, selects, alerts, uploads/downloads, POM, and driver lifecycle.
- Parallel execution and Grid belong only where already studied and where a safe local capability exists; otherwise expose supported study content without pretending remote execution works.
- Teach `findElement` versus `findElements`, exception versus empty collection, and implicit-wait effects; neither lookup is universally “immediate.”
- Use zero implicit wait in the primary explicit-wait fixture; a separate documented fixture may demonstrate implicit waits without mixing timing policies.
- Distinguish presence, visibility, enabled state, and actual click outcome; do not teach `elementToBeClickable` as a guarantee against overlays or interception.
- Serve a deterministic local DOM with controllable delayed insertion, hidden/disabled transitions, element replacement/staleness, an iframe, and a child window.
- Include target-specific fixture controls, event/state observations, seeded data, and bounded timings; avoid nondeterministic sleeps and timing races as the grading oracle.
- POM instances receive a driver per test; no shared static driver. Use JUnit/TestNG lifecycle according to the detected stack and always quit in teardown/finally, even after failed setup.
- Resolve imports/classpath through the configured Maven/Gradle build, never bare `javac` or Java-to-JavaScript simulation.
- Selenium Manager may require network access to discover/download drivers or browsers; provision explicitly and record browser/driver/manager versions rather than claiming it always works offline.
- The runtime fixture uses preprovisioned compatible binaries; no implicit driver download during revise/check or an unapproved practice execution.
- Uploads use fixture-owned files; downloads go only to dedicated per-job directories with cleanup and policy checks, never the learner's normal downloads folder.

## 12. Target-specific authoring and learning examples
- Ordinary source note example, written without machine-specific quiz/snippet markers:
```java
/**
 * Explicit waits poll for a condition instead of sleeping for a fixed duration.
 * Presence only means an element was found; a checkout button may still be disabled.
 * After the application replaces a node, locate it again rather than reuse a stale reference.
 */
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(3));
wait.until(ExpectedConditions.elementToBeClickable(By.id("checkout"))).click();
```
- Copilot may author a sidecar question from this note; include `java.time.Duration`, Selenium/WebDriverWait/ExpectedConditions/By imports in any runnable exercise starter.
- **Quiz — wait semantics:** “The button exists but is disabled until local validation completes. Is presence sufficient?” Correct: no; explain visibility/enabled and independently verify the click's resulting DOM state.
- **Quiz — lookup behavior:** “With a configured implicit wait and no matches, how do `findElement` and `findElements` finish?” Explain bounded waiting, then exception versus empty list; avoid the false blanket answer “findElements returns immediately.”
- **Practice — implement a wait-aware page object:** learner implements `CheckoutPage.confirm()` using a per-test driver; fixed harness varies insertion/enabling order and asserts one receipt plus the correct fixture event.
- Hints progress from identifying the transition to selecting a locator/condition; rubric requires observable outcome, bounded completion, and no reuse of a replaced element.
- The seed harness must invoke the learner method, not a canned correct helper; independent tests drive delayed insertion and replacement and assert the DOM/event outcome.
- **Practice — context restoration:** learner reads a value in the fixture iframe, opens a child window, returns to the original handle, and clicks its button; oracle checks handle/context and event log.
- **Deep problem — resilient local checkout:** combine delayed DOM, node replacement, frame content, and a child confirmation window behind a POM; implement correct waits and restore context on failure.
- Its rubric separately scores the observable checkout state, absence of leaked browser windows/processes, teardown after assertion failure, and fixture isolation across repetitions.
- Do not reward `Thread.sleep` merely because one run passes; vary approved fixture conditions and inspect the declared rubric without introducing arbitrary timing-performance thresholds.
- These are seed patterns, not prefilled destination curriculum. Publish only examples supported by finished notes and explicitly approved concept mappings.

## 13. Native execution, job protocol, and safety
- Native practice is explicitly enabled and user-triggered; automatic native validation runs only approved, trusted revision fixtures under the configured validation policy.
- Submit `fixtureId`, allowlisted `runId`, solution file map, snapshot/evidence fingerprint, and capability request; accept no raw command, arbitrary class name, shell path, or build flags.
- Resolve run IDs to fixed wrapper invocations, fixed test selectors, and allowlisted repository fixture imports; reject traversal, symlinks/reparse escapes, unexpected files, and unreviewed build plugins.
- Use isolated per-job directories under ignored `.revision-work`, bounded input/output, concurrency one initially, deadlines, cancellation, and finally-based cleanup of owned resources.
- Track job states `queued|running|finished|cancelled` separately from result status; poll structured results, preserve bounded diagnostic evidence, and identify each owned child PID.
- Kill only the job's owned process tree on timeout; always quit WebDriver and close its fixture server, then verify cleanup rather than stopping unrelated Java/browser processes.
- Bind orchestration to loopback; require same-origin requests plus an ephemeral token, validate Origin/Host, and deny permissive CORS and remote binding.
- Serve study assets independently from mutation/execution endpoints; hosted/static mode must expose neither approval nor execution capabilities.
- A child process is **not a sandbox**. Learner Java is arbitrary native code; never execute it with unrestricted home-directory, repository-secret, filesystem, or network access.
- Require a restricted secret-free worker/container/VM with minimal mounted files, read-only fixture inputs, bounded writable job space, process limits, and no host credentials.
- A container label alone is insufficient: verify its actual network/filesystem restrictions. If this isolation is unavailable, return `blocked` and offer export or self-check, not unsafe execution.
- Enforce network allowlisting at the worker boundary for both browser and Java traffic: only dedicated local fixture addresses/ports, no external DNS/egress or other loopback services.
- Separately allowlist the harness-owned local WebDriver control endpoint; browser content traffic remains restricted to demo endpoints, never an arbitrary Grid address.
- Cover redirects, embedded images/scripts/frames, fetch/WebSockets, popup navigation, IPv4/IPv6 aliases, and direct Java HTTP/socket calls; `baseUrl` is convenience, not enforcement.
- Use the worker's isolated network namespace or equivalent verified platform policy; local demo access must not grant arbitrary access to the host or metadata services.
- Fixed independent fixture oracles assert browser state and observable outcomes against the declared contract; never generate expected answers by running the learner's implementation.
- Capture structured JUnit/TestNG/native reports, expected test identities/counts, assertion failures, browser/driver versions, and bounded redacted artifacts; missing reports or zero expected tests is not pass.
- A learner failure is `fail`; unavailable adapter is `unsupported`; absent required dependency is `blocked`; infrastructure exception is `error`; deadline expiry is `timeout`.
- Dependency/browser provisioning is an explicit setup phase, not per revise. Do not silently fetch binaries or run the destination's default external suites.
- GitHub Pages can browse notes, cards, quizzes, history, and exported practice; it cannot start a local native runner. Offer download/export for local execution or clearly ungraded self-check.

## 14. Ordered delivery phases
1. **Discover and map:** read destination sources/builds; deliver approved roots, statuses, capability inventory, privacy boundary, and isolated runner choice.
2. **Define shared contracts:** depends on phase 1; implement schemas, durable IDs, source maps, central eligibility/scoring rules, version policies, and configuration validation.
3. **Extract and author:** depends on phase 2; preserve ordinary notes, create reviewed finished-topic sidecars, and produce explicit `needs-authoring` tasks without changing sources.
4. **Candidate and ledger pipeline:** depends on phase 3; implement deterministic generation, fresh ledger/suggestions, structural validation, and repeat/no-change behavior.
5. **Review transactions:** depends on phase 4; deliver separate diffs, per-item source approval, shared CLI/UI Apply, locks, fingerprint conflicts, journaled rollback, and recoverable publication.
6. **Static dashboard parity:** depends on approved schemas/snapshots; implement all pages/filters, unique sessions, note links, history, due queues, namespaced storage, export/import, and accessible navigation.
7. **Fixture and native capability:** depends on phases 1–3 plus verified isolation; provision pinned browser stack explicitly and deliver fixed harnesses, safe job protocol, independent oracles, and structured evidence.
8. **Integrate and validate:** depends on phases 5–7; connect practice proof without crediting unsupported results, exercise the acceptance matrix, and document exact setup/local/Pages commands.
9. **Release and handoff:** depends on all required checks; publish only approved static artifacts, demonstrate a clean-clone workflow, and list remaining unsupported capabilities and authoring tasks honestly.

## 15. Validation policy and acceptance matrix
- Reuse the destination's existing appropriate test tools; add focused tests to that runner instead of adding a parallel framework. Record actually executed checks and counts, never assumed passes.
- Fast CLI checks validate extraction, schema, provenance, IDs, links, rules, deterministic outputs, and transactional behavior; relevant changed approved fixtures receive full native validation.
- Strict CI checks require declared runners and expected test discovery; cached native evidence is reusable only when solution, fixture, tests, toolchain, browser, policy, and configuration fingerprints match.
- CI includes locked Node installation and the reviewed Java/browser setup, triggering on notes, sidecars, fixtures, scripts/UI, configuration, manifests, lockfiles, and workflow changes. Publish only allowlisted static dashboard artifacts after required checks pass; retain the previous deployment on failure.
- Keep execution opt-in locally and trusted in CI; no validation path may bypass network isolation, run draft learner code automatically, or contact external suites.

| Scenario | Measurable acceptance |
| --- | --- |
| Ordinary notes and separate supplements | Revise changes no source bytes; missing content appears as an authoring task; only per-item approval inserts text. |
| Draft/current versus all-finished | Draft notes display only; all-finished includes every mapped chapter without a phantom draft or invented future lesson. |
| First Apply and unchanged repeat | Fresh ledger precedes review; approved snapshot includes every output; second run changes no IDs or duplicate proposals. |
| Stale proposal and concurrent writer | Source edit causes fingerprint conflict; a second writer cannot apply; manual edits survive both outcomes. |
| Discard and failure/recovery | Discard never reverts notes; injected publication failure retains last good snapshot and preserves concurrently edited files. |
| Extraction fidelity and escaping | URLs, escaped comments, HTML/script-like text, code/tables/params, Unicode, and CRLF render faithfully without execution. |
| Stable IDs and semantic changes | Reordering/renaming keeps history; changed correct answer/rubric invalidates affected proof while cosmetic edits do not. |
| Duplicate pools and quiz lifecycle | Duplicate source identities count once; filters, 10/20/40/all, resume, close, results, and exact wrong-answer links work. |
| Mastery and review queues | Unseen is not weak; three repeats of one question cannot meet the distinct-question threshold; self-assessment is excluded; due queues work without hard locks. |
| Exact grading and distractors | Reject output prefixes/suffixes and type coercions; preserve specified line structure; every wrong choice is false under the actual prompt. |
| Backup, origins, and migrations | Export/import works across local/Pages origins; conflicts are previewed, unknown IDs quarantined, and mastery recomputed. |
| No phantom coverage | Mentions/snippets/future topics create no fake exercises; ledger distinguishes unknown, unstudied, unsupported, and not-run. |
| Genuine native learner execution | Incorrect learner implementation fails independent DOM assertions; correct implementation passes expected discovered tests. |
| Unsupported and self-check | Neither is scored as wrong or credited as native mastery; UI identifies the missing capability. |
| Browser lifecycle and context | Delays, replacement, iframe/window restoration, and failed-test teardown are verified against the local deterministic fixture. |
| Timeout and missing reports | Deadline kills owned processes only; no tests/report is not pass; server/driver cleanup is confirmed. |
| Missing dependency or browser | Required native check fails explicitly with setup guidance; revise neither downloads binaries nor silently claims success. |
| Nonlocal redirect and embedded resource | External redirect, subresource, popup, Java request, and nonfixture loopback target are denied by enforced policy. |
| Filesystem/secrets and exfiltration | Worker cannot read host secrets or send canary data externally; artifacts/logs/backups contain no credentials. |
| Clean clone and crash locks | Declared setup plus strict CI reproduces results; active/stale locks and interrupted journals recover without data loss. |
| Static deployment privacy | Pages study works without Node/native service; published artifact allowlist excludes private notes, workspaces, tokens, and secrets. |
| Accessible study and print | Keyboard/focus and light/dark contrast work on desktop/mobile; chapter PDF preserves long code and tables without clipping. |
| Windows and Linux | Wrapper arguments, CRLF, ports, browser setup, owned-PID cleanup, and supported isolation are validated on both; unavailable platforms report blocked. |
| Plan portability | A destination implementer can use this file alone; no reference checkout, session artifact, or sibling plan is required. |

## 16. Authoritative sources and handoff
- Selenium explicit/implicit waits: https://www.selenium.dev/documentation/webdriver/waits/
- Selenium Manager provisioning and behavior: https://www.selenium.dev/documentation/selenium_manager/
- Selenium WebDriver documentation: https://www.selenium.dev/documentation/webdriver/
- Reference code permalink: https://github.com/najha1903/JavaConcepts/tree/cce27d16733b10766a867ffc46ff41c6d10db59f
- Resolve compatible dependency/browser versions from destination discovery and official release documentation; do not invent a “latest” version in generated guidance.
- Handoff includes configuration mapping, authored/reviewed content, actual validation evidence, exact recovery/backup/setup instructions, and a clear list of blocked or unimplemented capabilities.
- Write the destination README and authoring rules from the implemented command flow: ordinary notes, `npm run revise`, review/Apply if needed, then study. Keep the ledger and capability descriptions current rather than copying reference counts or timings.
