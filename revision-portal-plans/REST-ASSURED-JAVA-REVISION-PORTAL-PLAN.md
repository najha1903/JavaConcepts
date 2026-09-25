# REST Assured + Java Revision Portal — Standalone Implementation Plan

**Status: future implementation blueprint.** This document specifies a destination
portal; it does not claim that a REST Assured portal or native runner exists in
JavaConcepts. Copy this file alone to the destination and begin with discovery.

## 1. Purpose and approved scope
- Build a revision portal **for studying REST Assured with Java**, not an API backend for the portal and not a portal implemented using REST Assured.
- Deliver a static browser dashboard, dependency-light local Node orchestration, and opt-in native Java exercises against a dedicated local mock API.
- Preserve full portal scope: Notes; Quick Revision browse and spaced flashcards; one Revision Bank; Practice Lab and Deep Problems; Mastery; coverage ledger; review and approval.
- The learner writes ordinary notes only. Copilot authors missing questions, cram points, explanations, examples, and exercises as reviewed supplementary material.
- Keep versioned supplementary artifacts in `revision-content`; no required manual quiz/snippet markers and no rewriting original notes to fit a parser.
- Original notes may receive an accepted missing explanation only through explicit per-item source-patch approval, preserving exact wording outside the approved insertion.
- `npm run revise` is a deterministic CLI, **not an AI service**: it extracts and merges already authored material, rebuilds candidates, and reports `needs-authoring`.
- Do not claim the CLI researches documentation, calls an AI model, or autonomously writes missing quizzes. Authoring is a separate Copilot-assisted activity.
- No external AI/execution service, real API credentials, live-service exercises, invented certification syllabus, generic Java exam catalog, or prefilled future lessons.
- Draft/current chapters remain notes-only, excluded from generated questions, cram points, exercises, gaps, and readiness denominators.
- Preserve the destination's source organization, names, tests, and build configuration; isolate revision execution rather than changing its existing integration-test behavior.

## 2. How to use this document with Copilot
- Move this file to the destination REST Assured learning repository and ask Copilot to implement its ordered phases.
- This is a standalone contract; it needs no sibling plan, conversation context, session directory, local reference checkout, or remote authoring service.
- Start with repository discovery and a proposed mapping, not a scaffolder. Ask the destination user when chapter boundaries, source ownership, or completion status are unknown.
- Do not infer that the highest-numbered folder is always draft or invent missing chapters from the reference project's Java catalog.
- Copilot reads finished notes and authors sidecars with provenance; the installed daily CLI consumes the files deterministically without needing Copilot.
- Require phase-by-phase deliverables, actual validation evidence, and explicit unresolved authoring/capability reports rather than a claim of parity based on page labels.
- Run revision exercises only against dedicated local mock fixtures, never the existing project's external integration tests, staging APIs, or production services.
- The planned design is approved; destination note insertions, dependency provisioning, and native learner-code execution remain separately gated actions.

## 3. Reference evidence and safe reuse
- Behavioral reference: [JavaConcepts at the reviewed commit](https://github.com/najha1903/JavaConcepts/tree/cce27d16733b10766a867ffc46ff41c6d10db59f), commit `cce27d16733b10766a867ffc46ff41c6d10db59f`.
- Review included `README.md`, `rules.md`, `TEMPLATE.md`, `coverage.md`, `suggestions.md`, parser/generator, approval/review server, coverage/suggestions, dashboard/checks, and scaffolding/configuration.
- The pinned reference is historical evidence, not a statement of the current JavaConcepts implementation. Inspect current code/package wiring before reuse; use this plan as the destination contract.
- All destination approval paths must use one implementation for staged validation, fresh ledger/suggestions, conflict detection, and journaled publication.
- Useful reference roles are `CONCEPTS_DATA`, `QUESTIONS_BANK`/`QUICK_REVISION_BANK`, `GENERATED_PRACTICE_CHALLENGES`, `DEEP_CHALLENGES`, `COVERAGE_DATA`, and `SUGGESTIONS`.
- Prefer normalized versioned JSON served with static assets locally or on Pages, rather than preserving legacy JavaScript global names and incompatible data shapes.
- The reference browser lab approximates a small Java subset with JavaScript; it cannot execute REST Assured's DSL or validate real HTTP interactions.
- The historical copy-based scaffold did not supply a complete dependency graph or framework implementation; it is not a working REST Assured bootstrap.
- Never run `create-project.js` blindly. Reuse only owned UI assets with provenance, licensing, and attribution respected; create the REST Assured catalog and all generated content afresh.
- Inspect the complete imported dependency graph, including scripts, CSS, icons/fonts, and data dependencies; copy no generated Java questions, examples, or learning-state defaults.
- Verify storage migration, backup, recovery, and actual check execution independently; neither historical limitations nor current Java features establish destination parity.

## 4. Destination discovery and explicit mapping
- Inventory `src\test\java`, `src\main\java`, authored `notes`/`docs`, root-level lessons, and custom roots through configurable includes/excludes.
- Opt in `.md` only for authored lessons; exclude this plan, generated documentation, dependency directories, build outputs, and dashboard assets.
- Detect Maven/Gradle and wrappers, modules, JDK/toolchain, REST Assured version, JUnit/TestNG, Hamcrest, JSON mapping dependencies, schema module, plugins, and test discovery.
- Inspect external hosts, proxy settings, auth/environment variables, request-spec defaults, and integration profiles without contacting services or printing credential values.
- Preserve existing manifests and test order. Reuse the configured ecosystem with narrowly selected revision tests rather than replacing its build.
- Create a dedicated fixture module/profile/source set with an explicit test allowlist and environment; revision commands must not invoke the project's default external suites.
- If default lifecycle hooks or inherited plugins contact external systems, isolate revision in a separately reviewed module/build instead of relying only on a test-name filter.
- Configure `projectId`, technology/version metadata, lesson roots, chapter/topic IDs, source languages, fixture roots, runner capabilities, local endpoints, and privacy exclusions.
- Use an explicit chapter manifest containing stable ID, display title, sources, order, and `draft`/`finished`; unknown status remains unresolved until clarified.
- All-finished repositories include every mapped chapter; no phantom draft chapter, inferred future topic, or mandatory chapter template is allowed.
- Pin compatible versions after discovery, including REST Assured, JDK, test framework, Hamcrest, mapping/schema modules, and build plugins; never invent a latest release.
- Determine supported operating systems, worker isolation, network restrictions, Pages publication scope, and whether local dependency caches support offline runtime.
- Discovery output is a reviewed source/status map, isolated build invocation, capability inventory, and unresolved decisions; do not author against an invented catalog.

## 5. Architecture and module boundaries
```text
revision.config.json                   Identity, source/status mapping, policies, capabilities
revision-content\catalog.json          Durable chapter/topic/concept IDs
revision-content\<topic-id>\*.json     Reviewed questions, cram, examples, exercises, provenance
scripts\revision\cli.*                 Thin command entry points
scripts\revision\core\extract.*        Read-only extraction with exact source mapping
scripts\revision\core\model.*          Schemas, stable IDs, versions, migrations
scripts\revision\core\rules.*          Shared eligibility, deduplication, coverage, scoring
scripts\revision\core\generate.*       Deterministic candidate generation
scripts\revision\core\review.*         Diffs, candidate views, review-server routes
scripts\revision\core\approve.*        One approval transaction used by CLI and UI
scripts\revision\core\ledger.*         Coverage, verification, authoring tasks
scripts\revision\core\validate.*       Candidate validator and validation profiles
scripts\revision\native\rest-assured.* Allowlisted native test adapter
revision-fixtures\                    Local mock API, contracts, captures, Java harness module
revision-dashboard\                   Static HTML/CSS/JS and versioned JSON data
.revision-work\                       Ignored candidates, journals, locks, execution workspaces
```
- Keep one dependency-light core within this repository; all command paths import it, with no runtime dependency on a central monorepo or reference checkout.
- Put fixture Java/resources under the selected module's proper Maven `src\test\java`/resources roots or an explicit Gradle source set.
- The mock API is a local test fixture with a fixed contract, not the portal's application backend, a deployed product API, or an excuse for an unrelated Java service.
- Add `revise`, `check`, and optional `approve` scripts only if available; negotiate documented aliases such as `revision:check` for collisions rather than overwriting existing scripts.
- Provide explicit `revision:serve`, `revision:setup`, and `revision:check:native` entry points as required; dependency provisioning belongs to setup, not every revision run.
- Version reviewed content, schemas, fixture contracts, and intended static release artifacts; ignore job logs, credentials, tokens, lockfiles for live jobs, and machine-specific paths.

## 6. Data, provenance, and execution schemas
- Every dataset identifies `schemaVersion`, `projectId`, `technology`, detected/pinned `versions`, and approved snapshot fingerprint.
- Chapter/topic/concept identity is independent of display labels, array positions, source path, and sort order; maintain aliases for deliberate content migrations.
- Source references retain repository-relative path, span/block coordinates, hash, extraction version, and chapter/topic association.
- Blocks preserve `kind: prose|code|table|params`, language, exact text, and structured table/parameter metadata; extraction must not paraphrase the learner's notes.
- Questions require stable `id`, `contentVersion`, prompt, kind, level, choices with IDs, `correctIds`, explanations, a reason for each wrong option, concept/topic IDs, source references, provenance, and review status.
- IDs must not be answer-text hashes or positions. Reordering choices cannot change grading, session history, or question identity.
- Retain legacy IDs as explicit aliases (for example `legacyQids`) and version semantic changes with `contentVersion`; back up state before migrations and never transfer obsolete correctness to a changed answer.
- A distractor must be false under the exact prompt, not merely a true statement from another topic. Remove ambiguous topic-membership MCQs rather than teaching a false distinction.
- Grade choice IDs by exact set and outputs by type-sensitive expectations. Preserve strings, booleans, number semantics, line structure, and declared errors; no substring passes or implicit type coercion. Document any JSON/numeric normalization explicitly.
- Track evidence versions/fingerprints separately from display revisions: answer, semantic choice, rubric, or concept-assignment changes invalidate relevant proof; cosmetic edits do not.
- Cram points contain concise prose, code context, expected observation, source/concept links, provenance, review status, and a stable flashcard identity/version.
- Model output, compile diagnostics, runtime errors, and assertion outcomes as distinct expectation kinds; missing dependencies or an unrelated failure cannot satisfy an intentional-error example.
- Source/framework fingerprint changes mark affected supplements and execution evidence stale and queue review; never overwrite reviewed sidecars or retain stale answers as current proof.
- Exercises include starter files, hints, rubric, `fixtureId`, allowlisted `runId`, required runner capability, expected observations, source/provenance, and content/evidence versions.
- Suggestions require ID, reason/rule ID, target source hash, exact proposed source patch or sidecar change, provenance, and `open|accepted|rejected|superseded|conflict` state.
- Results use `pass|fail|unsupported|blocked|timeout|error` plus job ID, duration, capability/tool versions, structured evidence, and solution/fixture/test/environment fingerprints.
- Learner assertion failures, unsupported DSL/module capabilities, policy blocks, missing setup, and infrastructure errors are distinct outcomes, not interchangeable wrong answers.
- Record human/Copilot authorship, reviewed source references, authoring tool/version when known, and approval state; never attribute authored questions to a non-AI CLI.
```json
{
  "schemaVersion": 1, "projectId": "rest-assured-study", "technology": "rest-assured-java",
  "versions": {"restAssured": "<detected-and-pinned>", "jdk": "<detected>"},
  "snapshotFingerprint": "<approved-input-hash>",
  "question": {
    "id": "q.http.missing-token", "contentVersion": 1, "evidenceVersion": 1,
    "kind": "local-scenario", "level": "foundation", "topicId": "topic.auth",
    "prompt": "How should a missing-token test treat the fixture's required 401 response?",
    "conceptIds": ["concept.auth.negative-case"],
    "choices": [{"id": "a", "text": "Every 4xx means test failure"}, {"id": "b", "text": "Assert the specified 401 contract"}],
    "correctIds": ["b"], "explanation": "An expected rejection is a successful negative test.",
    "wrongReasons": {"a": "A test passes when actual behavior matches its intended contract."},
    "sourceRefs": [{"path": "notes/auth.md", "span": [8, 17], "hash": "<source-hash>"}],
    "provenance": {"origin": "copilot-authored", "reviewed": true}, "status": "approved"
  }
}
```
- The shape is illustrative, not a destination chapter to precreate; source paths/concepts must resolve to actual finished material before publication.
- Serve JSON and render text safely; escape HTML and any unavoidable generated script embedding, including `</script>`, quotes, and Unicode separators.

## 7. Extraction, Copilot authoring, and review workflow
- Parse ordinary Java comments/Javadoc and configured lesson documents without executing code; preserve prose, escaped comments, URLs, code, tables, parameters, Unicode, and CRLF.
- Prefer source-aware lexical/block extraction to keyword heuristics; a mention of OAuth, an example request, and an executable exercise are different entities.
- Bind sidecars through configured stable IDs and source references; ambiguous mappings are actionable authoring tasks, not silently created chapters or concepts.
- Copilot authors missing supplements from finished notes and official documentation, submits evidence and explanations, and requests review before they become eligible learning content.
- `npm run revise` runs read-only discovery/extraction → normalized model → deterministic candidate → fresh candidate ledger/suggestions → validation summary → review.
- Missing supplements are reported as `needs-authoring` before the review UI opens; notes-only publication may be reviewed, but absent quizzes never count as complete coverage.
- If inputs and generator version are unchanged, open the existing approved dashboard or pending proposal; avoid timestamp churn, duplicated suggestions, or unstable IDs.
- Separate source-note diffs from supplementary-content diffs, with provenance, rendered/raw previews, and Apply/Discard controls.
- Accepting a supplement does not authorize editing the original note; each source insertion requires its own explicit approval, even inside a batch.
- Both UI Apply and optional `npm run approve` invoke the same approval module with candidate identity, expected hashes, validation, and transaction policy.
- Before acceptance, recheck sources, sidecars, configuration, and candidate fingerprints; changed input causes conflict instead of overwriting a newer note.
- Serialize writers with a project lock while readers continue using the last good snapshot; confirm process ownership before recovering a stale lock.
- Stage all outputs together: normalized data, caches, coverage ledger, suggestions/proposal state, accepted sidecars, and explicitly approved source patches.
- Publish an immutable generation using an atomic snapshot-pointer switch; source files outside that generation need a recoverable transaction journal, not a claim of multi-file atomic filesystem writes.
- Journal preimages and expected written bytes for every touched output. A failed Apply leaves the prior published snapshot available and restores only untouched transaction-owned changes.
- If a human concurrently edits a transaction target, preserve their bytes, flag recovery conflict, and block further publication until reconciled instead of force-restoring a backup.
- Repeated Apply is idempotent; Discard affects only proposals/workspace state and never undoes manual note edits or previously accepted explanations.
- Code-only auto-refresh is allowed only when eligibility and content semantics are unchanged and relevant structural/native fixture checks pass under the trusted-fixture policy.
- Parsing makes no requests and runs no tests; absent authoring remains `needs-authoring`, and missing required tooling/skills is explicitly `blocked`.
- `npm run check` uses the same candidate validator noninteractively in scratch staging without publishing dashboard/caches/source patches; strict requirements fail for missing authored essentials, required runners, or zero discovered tests.
- `npm run revise` remains the daily command. `approve` is optional for deliberate CLI use/automation, not an additional daily prerequisite.
- Keep `npm run revise` the single source of truth for future generation/review: thin revise/generate/approve adapters call one shared workflow core. New rules and validation belong there, not in command-specific bypasses or manual generated-file fixes. Shared behavior is a design contract, not a guarantee against future bugs.
- Derive supplements from freshly extracted staged notes, not the last published dataset. Maintenance/force-refresh aliases use the same core; review binds consumed caches/baselines and publication rechecks the input snapshot, preserving concurrent edits.

## 8. Full dashboard behavior
- Notes supports chapter/topic navigation, search, draft labels, bookmarks/revised markers, exact source provenance, and collapsible code, tables, and parameters with accessible keyboard controls.
- Quick Revision Browse shows approved concise points by topic/concept; Flashcards reveals the same content with ratings, due dates, and spaced repetition.
- Target at most 160 characters and 26 words per cram point, with at most three displayed code lines and complete setup in a linked harness. Author only useful source-backed points, with no chapter count quotas; never truncate code silently.
- Render comparison tables as real tables and provide chapter print/PDF with expanded, unclipped notes and code. Support mobile layout, keyboard/focus behavior, readable typography, and accessible light/dark themes.
- Revision Bank is one selector, not separate competing quiz pages; reconcile legacy pools by stable identity/evidence version and reject conflicting duplicates.
- Combine chapter, topic, concept, kind, level, and search filters; provide Everything, Interview, Tricky, Concept, and Local Scenario presets.
- Offer 10/20/40/all sizes, cap to actual unique availability, and never pad with repeats, draft material, generic Java trivia, or fabricated questions.
- Topic quiz actions open the bank with preselected filters; persist a source-unique selection and its shuffled order independently from entity identity.
- Empty scoped quizzes or practice views show the missing content/capability explicitly; never substitute another chapter's questions or unrelated exercises.
- Provide start, pause/resume, close with save/discard confirmation, review, and results breakdown by topic, concept, kind, and level.
- Include chapter breakdowns for mixed quizzes, plus single/multiple-choice, true/false, fill-code, predict-behavior, and written self-assessment where content supports them; ungraded written answers are not automatic proof.
- Wrong answers explain the chosen option and link to the exact note block plus reviewed supplemental explanation, not only a generic chapter heading.
- Practice Lab contains native fixture-backed exercises, starter/hints/reset, capability status, and structured request/assertion evidence; concept practice links target the precise supported exercise.
- General drills route to the bank. Deep Problems are selective multi-step tasks supported by studied concepts, not mandatory generated content for every topic.
- Mastery is a study-confidence heuristic: require at least three DISTINCT eligible objective question IDs and 80% accuracy per concept. Repeating one question cannot satisfy breadth; exclude interview self-assessment, reveals, and unsupported practice. Display thresholds/evidence, not official proof or certification.
- Score each finalized session/question/version event once; resume, repeated clicks, imports, and duplicate pools cannot award extra evidence. Preserve drafts and prior events through compatible migrations.
- Keep native practice proof distinct; a concept needs native evidence only if an approved rule declares that supported requirement.
- Readiness has configurable default weights of 35% scored accuracy + 20% attempted-question coverage + 45% concept proof; display weights, formulas, eligible denominators, and evidence window.
- Accuracy uses correct/valid scored responses; attempted coverage uses unique approved eligible questions attempted/available; concept proof uses concepts meeting declared evidence rules/eligible concepts.
- Missing authored evidence makes readiness provisional/unknown where appropriate; unseen means unstudied, not weak. Exclude draft concepts from all denominators.
- Due Questions and Due Cards feed a unified study queue with separate scheduling rules; Study Next explains its recommendation without preventing free navigation.
- Prioritize overdue work, then weak evidenced concepts, then untried material. Show example gaps and suggestions read-only in Mastery; acceptance stays in the review flow.
- Unsupported or ungraded self-check practice neither counts as native mastery nor lowers scored accuracy; no hard progression locks.

## 9. State, export/import, and privacy
- Namespace browser storage as `revision:<projectId>:v1`, with schema/content versions and stable IDs for theme, bookmarks/revised markers, quiz/history/resume, cards, practice drafts/results, and preferences.
- Mastery/readiness are derived from compatible evidence; never store an aggregate as the authoritative truth.
- Pages and local loopback have different origins and separate localStorage; document explicit backup transfer rather than implying automatic synchronization.
- Provide versioned export/import, preview before merging, backup download before reset, and confirmation before reset or destructive replacement.
- Report unavailable/full storage and corrupt imports without wiping valid history; allow temporary in-memory study with a visible persistence warning and export.
- Validate project/schema/version; migrate known aliases, quarantine missing/stale identities, and resolve event conflicts by event ID/fingerprint without double-crediting attempts.
- Reject cross-project imports unless an explicit mapping is approved; identical question IDs in different projects do not imply shared evidence.
- Recompute mastery after import. Imported native claims without verifiable local artifacts remain unverified history and require rerun for trusted native proof.
- Never persist actual credentials, cookies, bearer tokens, runner tokens, private headers, or unredacted request/response logs in browser state or backups.
- Keep the local server token ephemeral in memory; use only dummy fixture auth and redact headers/bodies according to policy before evidence reaches UI or disk.
- Allowlist static publication inputs to prevent private source documents, machine paths, and execution artifacts from leaking to Pages.

## 10. Coverage ledger and actionable gaps
- Use one shared rules helper for finished eligibility, IDs, provenance validity, question deduplication, practice support, evidence freshness, and scoring across CLI/review/dashboard.
- Count finished-only source blocks/content, concepts, approved questions by kind/level, cram points, examples, supported practice, and selectively authored deep problems.
- Report verification separately: parsed, schema-checked, fixture-tested, failed, blocked, unsupported, and not-run; number of files is not number of executed tests.
- Show `needs-authoring`, example/explanation gaps, stale references, unknown mappings, and missing capabilities with stable task IDs and exact source links.
- Each task names the missing artifact, finished-topic scope, authoring evidence needed, and measurable acceptance condition; no phantom note or placeholder earns coverage.
- Distinguish unknown content/mapping from unstudied learner history and from a known exercise whose runner is unsupported.
- Mentions such as “schema validation later” do not create lessons, exercises, or gaps; keyword detection cannot establish that a runnable native exercise exists.
- Draft notes remain visible, while draft questions/cram/exercises, authoring gaps, queues, and readiness contributions are excluded consistently.
- Preserve rejected/suppressed suggestions with rule/source fingerprints so unchanged advice does not recur, but materially changed source can reopen a justified task.

## 11. REST Assured curriculum and native fixtures
- Derive taxonomy from studied material: HTTP methods, path/query/form parameters, status, headers/cookies, auth, assertions, extraction, schema, GPath, object mapping, filters, and specifications.
- Teach `given`/`when`/`then` with explicit REST Assured and Hamcrest static imports; use the detected JUnit/TestNG lifecycle rather than inventing REST Assured test annotations.
- REST Assured JSON-path expressions follow Groovy GPath behavior, not every generic JSONPath dialect; author examples and explanations for the actual API/version in use.
- Address Java/JSON numeric types: matcher expectations for floats/doubles and configured number return types must agree; avoid brittle cross-type equality claims.
- Separate path, query, form, body, and content-type semantics; explain serialization/deserialization only when the required mapper dependency is present and configured.
- Detect the optional JSON-schema-validator module and its imports; unsupported schema execution must be explicit, not silently simulated or supplied by an undeclared dependency.
- A 4xx response can be the correct result of a negative test; passing depends on the declared contract, not a universal “2xx passes” rule.
- Do not grade an arbitrary response-time threshold as functional correctness; only use a justified, explicitly authored performance requirement with controlled evidence if actually studied.
- The local mock API supplies deterministic create/read/update/delete, resettable isolated data, pagination, dummy auth, invalid/missing payload behavior, and intentional schema failures.
- Maintain a versioned fixture contract with seeded records, stable error shapes, IDs, and request capture; each job gets independent state and can reset without affecting another exercise.
- Independent oracles check method/path, query, headers, content type/body, expected status, and persisted mock state; the learner's own assertions alone do not prove the required request happened.
- For assertion-authoring tasks, run known-good and deliberately faulty response variants: require success on the good contract and the intended assertion failure on each targeted defect, rejecting assertion-free tests.
- Build fresh per-test/per-job request/response specifications; avoid mutable static `RestAssured` defaults or shared specs leaking auth/base URI/config across runs.
- Use configured Maven/Gradle native test execution with correct imports/classpath; the fluent DSL commonly returns `void` from tests, so grading must be test/request driven, not return-value driven.
- No real credentials or existing services. Redact auth/cookies and configured sensitive fields in logs; fixture dummy values must be unmistakably nonproduction.

## 12. Target-specific authoring and learning examples
- Ordinary lesson content needs no portal-specific markers; this example's `fixtureBaseUri` is supplied by the fixed native harness:
```java
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

// A negative test passes when the API returns the rejection required by its contract.
given()
    .baseUri(fixtureBaseUri)
    .queryParam("page", 1)
.when()
    .get("/items")
.then()
    .statusCode(401)
    .body("error.code", equalTo("AUTH_REQUIRED"));
```
- Copilot can author reviewed questions from this ordinary comment/example; runnable starters also use the destination's detected JUnit/TestNG imports and fixture lifecycle.
- **Quiz — expected rejection:** “The local contract requires 401 for missing auth. Does asserting 401 make this a failing test?” Correct: no; explain contract-based negative testing and why “all 4xx fail” is wrong.
- **Quiz — GPath:** for `{"items":[{"id":1,"active":true},{"id":2,"active":false}]}`, `items.findAll { it.active }.id` yields `[1]`; explain why this is a Groovy GPath expression rather than a universal JSONPath syntax.
- **Quiz — numeric matchers:** if the configured result is `Float`, `equalTo(12.5f)` matches its type whereas `equalTo(12.5d)` expects `Double`; select the matcher according to actual number-return configuration.
- **Practice — captured paginated request:** learner writes a void REST Assured test sending dummy auth, `page`/`limit`, and a path segment; oracle validates captured request plus expected response assertions.
- The harness invokes learner code and runs independent checks; missing requests, wrong query/header/body, or a test that asserts nothing useful must not pass merely by exiting successfully.
- **Practice — CRUD isolation:** create an item with JSON content type, extract its ID, update it, verify persisted state, then delete; fixed oracle checks capture sequence and final dataset.
- Hints progress from contract reading to specification construction/extraction; rubric checks correct request semantics, assertions, and cleanup rather than matching one exact coding style.
- **Deep problem — contract drift investigation:** a local endpoint returns an intentional wrong-type field and a pagination boundary defect; implement assertions that expose each contract violation with useful diagnostics.
- Grade that problem by expected detection of known fixture defects, not by requiring every learner assertion to pass against intentionally broken responses; report expected negative outcomes explicitly.
- Include missing/invalid auth and invalid payload cases only when studied, and schema-based checks only if the declared module is available; no live OAuth/token acquisition.
- These are seed patterns, not precreated destination chapters or mandatory quotas. Adopt only those with finished-source support and approved concept mappings.

## 13. Local job protocol and execution safety
- Enable native execution explicitly and launch learner practice only on user action; automatic native checks are limited to approved trusted revision fixtures.
- Jobs contain allowlisted `fixtureId`/`runId`, solution file map, capability requirement, and snapshot/evidence fingerprint; accept no raw commands, arbitrary shell paths, classes, or build arguments.
- Resolve run IDs to fixed wrapper commands and fixed test selectors; imports are limited to approved fixture sources/dependencies, with traversal/symlink/reparse escapes rejected.
- Create per-job workspaces under ignored `.revision-work`; use bounded files/output, deadlines, cancellation, and concurrency one initially.
- Track `queued|running|finished|cancelled` separately from result status; expose structured polling/results with owned PID metadata and bounded redacted evidence.
- Finally blocks stop only owned Java/mock-server processes, clean dedicated data/files, and verify cleanup; timeouts never trigger blanket killing of unrelated Java or Node processes.
- Bind local endpoints to loopback, require same-origin requests and an ephemeral token, validate Origin/Host, and deny permissive CORS or remote binding.
- Keep static study serving separate from approval/execution routes; a hosted dashboard must not expose privileged mutation capabilities.
- Native learner Java is arbitrary code. A child process is **not a sandbox** and must not inherit unrestricted filesystem access, environment secrets, credentials, or host networking.
- Require a verified restricted secret-free worker/container/VM with minimal mounts, read-only fixture inputs, bounded writable workspace, process limits, and explicit network policy.
- Verify actual isolation rather than trusting the word “container.” If required network/filesystem restrictions are unavailable, return `blocked`; offer export/self-check instead of unsafe execution.
- At the worker boundary, allow only the dedicated mock API address/port; block external DNS/egress, metadata addresses, unrelated loopback services, and direct Java socket/HTTP clients.
- Enforce policy for redirects, alternate hostnames, IPv4/IPv6, proxy overrides, and library/client calls; setting REST Assured `baseURI` does not prevent arbitrary networking.
- Prevent embedded-resource fetches or auxiliary tools from bypassing policy if added later; use an isolated network namespace or equivalent validated platform restriction.
- Dependency resolution is an explicit reviewed setup step outside secret-bearing contexts; runtime uses preprovisioned dependencies, not network-enabled build downloads per job.
- An independent fixture contract/oracle is authored before the solution; never derive expected headers, statuses, bodies, or state by executing the learner's implementation.
- Capture structured JUnit/TestNG reports and expected test identities/counts, request capture, assertions, fixture state, and tool versions; zero tests, absent output, or no required interaction cannot pass.
- Learner assertion failure is `fail`; unsupported module/adapter is `unsupported`; missing required dependency or isolation is `blocked`; harness failure is `error`; deadline is `timeout`.
- Request captures are bounded/redacted and never contain live credentials; fixtures cannot call existing project external services, even through inherited setup or filters.
- GitHub Pages supports static study, quizzes/cards/history, and practice export/download; it cannot start a local native runner. Self-check stays explicitly ungraded and earns no native proof.

## 14. Ordered implementation phases
1. **Discover and map:** inspect notes, build/test stack, external targets, statuses, isolation, and privacy; deliver an approved mapping and safe revision-only invocation.
2. **Define shared contracts:** depends on phase 1; implement schemas, IDs, source references, version migration, central rules, configuration, and grading fingerprints.
3. **Extract and author:** depends on phase 2; preserve ordinary notes, author reviewed finished-topic sidecars, and report missing material without editing source.
4. **Generate candidates and ledger:** depends on phase 3; deliver deterministic outputs, fresh pre-review ledger/suggestions, shared validation, and no-change behavior.
5. **Review and publish safely:** depends on phase 4; implement separate diffs, explicit source-patch approval, shared CLI/UI Apply, locks, stale detection, journals, and snapshot publication.
6. **Deliver static dashboard parity:** depends on approved contracts; implement all pages, one bank, exact-note links, state/history, due queues, backup/import, and accessibility.
7. **Build mock and native harness:** depends on phases 1–3 plus verified worker restrictions; deliver versioned independent contracts, isolated CRUD/auth/error data, request capture, and allowlisted native jobs.
8. **Integrate evidence and validate:** depends on phases 5–7; connect honest practice proof/readiness, run acceptance scenarios, and document exact setup/check/local/Pages behavior.
9. **Release and handoff:** depends on actual required checks; demonstrate clean-clone operation, publish only approved static artifacts, and list authoring tasks and blocked capabilities.

## 15. Validation policy and acceptance matrix
- Reuse appropriate test tooling already present in the destination; add focused cases to it rather than introducing an unrelated runner. Report executed check names and actual counts.
- Fast validation covers extraction, schema, source provenance, IDs, links, shared rules, deterministic generation, and transactions; full native validation covers relevant changed approved fixtures.
- Strict CI requires declared runners and expected tests; cached native evidence is valid only when solution, fixture, oracle/tests, dependencies/JDK, policy, and configuration fingerprints match.
- CI includes locked Node installation and the reviewed Java/build setup, triggering on notes, sidecars, fixtures, scripts/UI, configuration, manifests, lockfiles, and workflow changes. Publish only allowlisted static dashboard artifacts after required checks pass; retain the previous deployment on failure.
- Local learner execution stays opt-in; trusted CI/native checks must not bypass isolation, execute draft learner code automatically, or touch external project suites.

| Scenario | Measurable acceptance |
| --- | --- |
| Notes unchanged and separate sidecars | Revise preserves source bytes; missing material becomes a task; only individually approved explanation patches alter notes. |
| Draft/current and all-finished | Draft notes are visible only; all-finished includes all mapped chapters without phantom drafts, topics, or gaps. |
| First Apply and repeated run | Fresh ledger exists before review; all outputs publish together; unchanged rerun creates no new IDs or duplicate suggestions. |
| Stale proposal and writer concurrency | Modified input causes conflict; concurrent Apply is locked; human edits remain intact. |
| Discard and rollback/recovery | Discard never reverts notes; injected failure retains last good snapshot; concurrent manual edits survive recovery. |
| Source fidelity and safe rendering | Comments, escapes, URLs, JSON, code/tables/params, Unicode, CRLF, and script-like strings survive without code execution. |
| Stable identity and evidence invalidation | Reorder/rename retains history; changed answers or rubric invalidate affected proof; cosmetic edits do not. |
| Double-pool dedup and quiz sessions | Unique source items only; filters, sizes, resume/close, breakdown, and exact-note wrong-answer links work. |
| Mastery, readiness, and due study | Three repeats of one question cannot satisfy distinct-question breadth; self-assessment is excluded; thresholds and provisional state remain visible without hard locks. |
| Exact grading and distractors | Reject output prefixes/suffixes and type coercions; preserve the declared JSON/number contract; every wrong choice is false under the actual prompt. |
| Export/import and distinct origins | Local/Pages transfer previews conflicts, quarantines unknown IDs, avoids double counting, and recomputes mastery. |
| Genuine coverage | Future mentions/snippets earn no practice coverage; unknown/unstudied/unsupported/not-run and authoring tasks remain distinct. |
| Correct and failing learner requests | Native harness invokes the learner; independent capture/state assertions reject wrong requests and accept correct contract behavior. |
| Unsupported/self-check versus wrong | Unavailable module and self-check earn no native proof and do not count as learner failure. |
| DSL, negative cases, and isolation | Void tests run; expected 4xx is not inherently failure; CRUD/auth datasets reset and specifications do not leak across jobs. |
| Numeric/GPath/schema behavior | Authored examples match actual GPath and configured number types; schema requires declared dependency and reports intentional failures correctly. |
| Timeout, empty suite, and missing reports | Owned job processes stop; missing/zero expected tests or interaction cannot pass; mock/data cleanup is verified. |
| Missing dependency | Required check fails with setup guidance; revise neither installs dependencies nor reports native success without execution. |
| Nonlocal redirect and bypass attempt | Redirects, Java clients, proxies, alternate IP families, and unrelated loopback targets are blocked at the worker boundary. |
| Secrets/filesystem and exfiltration | Worker cannot read host secrets or send canary data externally; captures, logs, static artifacts, and exports are redacted/allowlisted. |
| Clean-clone CI and crashed locks | Declared setup plus strict CI reproduces results; live locks are respected and interrupted journals recover without losing edits. |
| Pages without native services | Static study works; native execution is unavailable with export/self-check options; private notes and workspaces are absent from deployment. |
| Accessible study and print | Keyboard/focus and light/dark contrast work on desktop/mobile; chapter PDF preserves long code and tables without clipping. |
| Windows and Linux | Wrapper quoting, source paths/CRLF, ports, owned-PID cleanup, and isolation are verified; unsupported platform capability is blocked explicitly. |
| Portable plan only | Destination implementation can proceed from this document without session artifacts, sibling plans, or a reference checkout. |

## 16. Authoritative sources and handoff
- REST Assured official usage documentation: https://github.com/rest-assured/rest-assured/wiki/Usage
- Raw official usage documentation for authoring review: https://raw.githubusercontent.com/wiki/rest-assured/rest-assured/Usage.md
- REST Assured project and dependency/module documentation: https://github.com/rest-assured/rest-assured
- Reference code permalink: https://github.com/najha1903/JavaConcepts/tree/cce27d16733b10766a867ffc46ff41c6d10db59f
- Resolve versions from destination dependencies and official compatibility/release information; do not label an invented version as current or silently upgrade the learning project.
- Handoff includes approved mapping, reviewed content, real check evidence, setup/local/Pages/recovery/backup instructions, and an honest list of blocked capabilities and remaining authoring work.
- Write the destination README and authoring rules from the implemented command flow: ordinary notes, `npm run revise`, review/Apply if needed, then study. Keep the ledger and capability descriptions current rather than copying reference counts or timings.


## 17. Verification and wording lessons from the reference

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