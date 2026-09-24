# JavaConcepts

Java learning notes and runnable examples with a notes-first revision dashboard.
The portal combines reading, revision questions, flashcards, practice, and study
history; it is not an official exam or a complete Java execution environment.

**Live dashboard:** https://najha1903.github.io/JavaConcepts/

## Everyday workflow

From the project root:

```powershell
npm run revise
```

**`npm run revise` is the single everyday entry point for future generation and
review.** Its orchestration lives in `scripts\lib\revision-workflow.js`;
`revise.js`, `generate.js`, and `approve.js` are adapters to that shared workflow.
Validation profiles are declared once in `scripts\lib\checks.js`; the full and
structural check entry points select from that registry rather than separate lists.
New content/generation rules belong in the shared pipeline, not a one-off command
or manual generated-file fix. This keeps command behavior aligned; it is not a
promise that future changes cannot introduce bugs.

1. Read the source notes and existing authored content into an isolated candidate.
2. Parse current notes before deriving code questions, then merge derived
   questions/expectations and refresh the ledger and suggestions. Derivation uses
   fresh staged notes, not the previous dashboard. The review page includes the
   candidate ledger; the published ledger stays with the approved dataset until
   Apply.
3. For reviewable changes, open the local browser review. Inspect the changes and
   choose **Apply** or **Discard**. Optional note insertions require selecting the
   specific suggestions; general approval does not select them for you.
4. Apply uses the same approval backend as `npm run approve`, validates the
   candidate, then publishes it. You do not need an extra approval command after
   clicking Apply.

Proposal generation does not rewrite your notes. Discard removes the proposal,
**not edits you made yourself**. Changed inputs or replaced proposals cause a
conflict rather than silently approving a different version. Review fingerprints
include consumed caches/baselines, and publication rechecks the input snapshot
before completing. Publication is
journaled and recoverable, not an atomic multi-file filesystem operation; recovery
stops if it would overwrite a newer edit. The workflow never restores the live
notes tree from its candidate snapshot. Uncommitted handwritten notes are allowed:
approval checks the exact reviewed bytes, not whether you committed first.
Repeating Apply for the same approved proposal does not publish it twice.

An interrupted publication is recovered on the next workflow command. This does
not guarantee crash immunity or simultaneous visibility of every output file.
If recovery reports newer edits, preserve the journal and reconcile the named
paths before retrying.

A code-only/no-review refresh can publish after structural checks. That is **not**
the same as a full native validation run. Use `npm run check` to run the full
candidate checks without publication.

### Commands

| Command | Behavior |
| --- | --- |
| `npm run revise` | Everyday candidate/review flow; opens review or the dashboard. |
| `npm run revise:cli` | Same proposal with an optional terminal approval prompt; noninteractive use does not answer yes automatically. |
| `npm run approve` | Explicitly approves through `scripts\approve.js` and the full shared validation/publication pipeline; does not open a browser. |
| `npm run generate` | Proposal mode without launching the browser; not an unchecked force-publish command. |
| `npm run check` | Full scratch candidate generation/validation; publishes no dashboard, source changes, or generated caches. |
| `npm run audit` | Audits the currently generated dataset; does not regenerate it or prove all Java behavior. |

`npm run revise -- --yes` is explicit noninteractive approval without optional
note insertions. Use it only when you intend to approve the current content.
Declining terminal approval leaves the candidate available for review.
To approve one specific pending review by id, pass it positionally:

```powershell
npm run approve -- <proposalId>
```

The id is in `revision-dashboard\content-changes.json` (or on the review page).
It is positional because npm consumes a space-separated `--proposal <id>` as its
own configuration, so that form never reaches the script.
Unknown or incomplete workflow flags fail rather than selecting a fallback mode.
Generation aliases such as `generate:all`, `derive:code`, and `fill:practice` also
use the shared staged engine, not raw workers. `npm run generate -- --force`
refreshes both derived-code questions and practice-expectation caches through
that same safe path.
For targeted maintenance checks, inspect the scripts in `package.json`.

Local commands need Node.js/npm and the repository dependencies; native Java
checks also need a compatible JDK (`java` and `javac`). They execute selected
repository snippets/methods locally: use trusted content. A child process or a
scratch directory is **not a security sandbox**.

## What is authored, generated, or checked?

The Java files under `src` are the author's notes. Existing authored question banks
and supporting metadata live under `data`. The CLI extracts and assembles these
inputs; **it does not autonomously research topics or call an AI author**.
Ask Copilot explicitly to investigate a documented gap and prepare reviewable
changes. Do not add filler to satisfy a question or chapter count.

| Capability | What it means |
| --- | --- |
| Notes and Revision Bank | Source-backed reading, topic/chapter filters, code, tables, and linked revision questions. |
| Quick Revision | Authored takeaways/gotchas and flashcards; missing material is not permission to invent a summary. |
| Objective quizzes | Scoring against recorded answers. Answer quality still requires source review and applicable checks. |
| Native Java validation | Selected supported snippets/cases compiled or executed locally; see check output for the actual scope and skipped/unsupported work. |
| Browser Practice Lab | **Run heuristic checks** uses a limited Java-to-JavaScript approximation in a bounded Web Worker, not a Java compiler/JVM. A match is not native correctness proof. |
| Self-check / interview answers | Learner assessment against an explanation or rubric, not objective execution evidence. |
| Deep Problems | Larger deliberate-practice tasks; not every problem has an executable verifier. |
| Mastery / Study confidence | At least three distinct eligible objective question IDs and 80% accuracy support a concept's confidence. Repeats cannot supply breadth; interview self-assessment and imported scores are excluded. |
| Chapter PDF | Browser print/PDF export of chapter notes. |

Expectations obtained by running the author's solution are regression examples,
not independent evidence that the solution meets its specification. Independent
cases need a separately reviewed expected result and appropriate native validation.
Neither the browser lab nor GitHub Pages runs Selenium, Playwright, Cypress,
REST Assured, or Karate.

Browser checks stop after a bounded timeout; unavailable workers or unsupported
code produce no execution result, with no main-page fallback. Verify Java in your
IDE. Objective text answers preserve case and spaces; only CRLF/LF line endings
and one final newline are normalized.

For current counts, exclusions, authoring gaps, and verification categories, use
the generated [published coverage ledger](https://najha1903.github.io/JavaConcepts/coverage.md)
and [suggestions](revision-dashboard/suggestions.md). The local ledger is
`revision-dashboard\coverage.md`; it is generated and gitignored, not a tracked
repository document. Published reports reflect the latest deployment, not a
pending local candidate. Counts are not hardcoded here.

## Keep your study data

Use **Local study data** on the dashboard:

- **Export study backup** downloads project-specific versioned JSON, including
  notes, quiz/flashcard history, resumable quiz state, and practice editor drafts.
- Import validates a JavaConcepts version-2 backup and previews its contents.
  **Confirm import and replace** replaces local state after making a local backup;
  it is not a merge. Imported scores remain history, not new confidence evidence.
- **Download previous backup** saves the local pre-import/reset backup.
  **Reset all progress** clears study data, including notes and drafts, after
  confirmation and a successful local backup.

Browser storage is origin/profile-specific: local files, localhost, and Pages do
not synchronize. Export files regularly; clearing browser data can remove both
progress and its local backup. Visible warnings report unavailable/full storage
or damaged data; in-memory changes can be lost when the tab closes. Compatible
question history migrates by identity; changed/retired evidence is archived, not
silently counted against new answers.

## Adding or improving notes

Keep the existing chapter/topic organization and the author's voice:

```text
src\
  Chapter_<N>_<TopicName>\
    Sub_Chapter_<N>_<TopicName>\
      Concept.java
      ExampleChallenge.java
```

Put an overview before the declaration and implementation insights beside the
relevant code. Explain what the concept does, important input constraints, expected
behavior, and meaningful boundary cases. Preserve useful code examples and tables.
Do not silently replace clear notes, invent parameter explanations, or create
material for unstudied chapters. Draft chapters remain readable without revision
content or readiness penalties. Reviewed status lives in
`data\chapter-status.json`; `@draft` overrides it. Add explicit entries for new
chapters rather than relying on the unlisted-chapter numbering fallback.

Optional authored markers include `@quiz`, `@answer`, `@code`, `@option`,
`@explain`, `@why`, `@challenge`, `@desc`, `@hint`, `@testcase`, `@takeaway`,
`@gotcha`, and `@snippet`. They are existing authoring formats, not a requirement
to fill every topic with annotations. See [rules.md](rules.md) for examples,
eligibility, review, identity, and verification rules.

Question records carry stable `qid`, migration aliases in `legacyQids`, and a
semantic `contentVersion`. For an authored question that must survive a move or
rename, assign a permanent `@quiz [id:...]` identifier before the move and keep it.
The pipeline maintains `data\question-identities.json`; do not manually renumber
records or treat the registry as an expendable cache.

## Repository map

| Location | Ownership |
| --- | --- |
| `src` | Authored Java notes and examples. |
| `data` | Authored banks/metadata plus explicitly generated caches/identity records. |
| `scripts` | Parsing, generation, shared approval, validation, and maintenance tools. |
| `revision-dashboard` | Static UI plus generated datasets, ledger, suggestions, and review artifacts. |
| `revision-dashboard\revision-state.json` | Generated record of the approved profile, content identity, and authored-input fingerprint. Committed with the approved content; it is what tells `npm run revise` that nothing needs review. |
| `.revision-work` | Ignored candidate workspaces, writer lock, and publication recovery journal. |
| `revision-portal-plans` | Portable future-framework implementation plans. |

Do not hand-edit generated datasets, `coverage.md`, or `suggestions.md`; fix their
source inputs or generators and refresh through the revision workflow.

### GitHub Pages deployment

The Pages workflow uses `npm run approve` to build and validate deployable
artifacts from the checked-out commit, then uploads `revision-dashboard`.
`npm run check` is deliberately scratch-only and cannot replace that publication
step. Relevant triggers include source, authored `data`, scripts, dashboard files,
package metadata/lockfile, and the workflow itself. This is CI validation of the
checkout, not an autonomous review or authoring service.

## Plans for other technologies

The [plans folder](revision-portal-plans/README.md) is the easy-access index:

- [Selenium with Java](revision-portal-plans/SELENIUM-JAVA-REVISION-PORTAL-PLAN.md)
- [REST Assured with Java](revision-portal-plans/REST-ASSURED-JAVA-REVISION-PORTAL-PLAN.md)
- [Karate DSL](revision-portal-plans/KARATE-DSL-REVISION-PORTAL-PLAN.md)
- [Cypress with JavaScript / TypeScript](revision-portal-plans/CYPRESS-JS-TS-REVISION-PORTAL-PLAN.md)
- [Playwright with JavaScript / TypeScript](revision-portal-plans/PLAYWRIGHT-JS-TS-REVISION-PORTAL-PLAN.md)

These are **future blueprints, not implemented framework portals**. Each file
works on its own when copied into its destination repository. Begin with discovery
and reviewed implementation, not blind copying of Java data. The old copy-based
scaffolder is retired; see [TEMPLATE.md](TEMPLATE.md) for the reuse boundary.
