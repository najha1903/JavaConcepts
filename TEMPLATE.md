# Reusing the revision-portal design

JavaConcepts is a Java learning portal, **not a plug-and-play framework template**.
The former copy-based `scripts\create-project.js` scaffolder is retired. It prints
plan guidance instead of creating or overwriting a destination project:

```powershell
node scripts\create-project.js --help
```

Help (`--help` or `-h`) exits successfully; other invocations return a nonzero exit
code after the guidance. No invocation creates or overwrites destination files.

Do not copy generated Java datasets, rename extensions, or adapt the Java parser
through string replacement and call the result a working framework portal.

## Choose a standalone plan

All plans are in [revision-portal-plans](revision-portal-plans/README.md):

| Destination | Self-contained blueprint |
| --- | --- |
| Selenium with Java | [Selenium](revision-portal-plans/SELENIUM-JAVA-REVISION-PORTAL-PLAN.md) |
| REST Assured with Java | [REST Assured](revision-portal-plans/REST-ASSURED-JAVA-REVISION-PORTAL-PLAN.md) |
| Karate DSL | [Karate](revision-portal-plans/KARATE-DSL-REVISION-PORTAL-PLAN.md) |
| Cypress with JavaScript / TypeScript | [Cypress](revision-portal-plans/CYPRESS-JS-TS-REVISION-PORTAL-PLAN.md) |
| Playwright with JavaScript / TypeScript | [Playwright](revision-portal-plans/PLAYWRIGHT-JS-TS-REVISION-PORTAL-PLAN.md) |

Copy the relevant plan into its learning repository and ask Copilot:

> Implement this plan, beginning with discovery. Preserve my notes, existing
> application/tests, build tooling, and source organization. Report actual
> validation evidence and any blocked capabilities.

These plans specify **future target behavior**. They do not mean that this
repository implements native framework practice, portable adapters, or a shared
multi-project backend.

## Discover before building

1. Inspect actual note roots, chapter boundaries, draft/finished status, languages,
   package/build files, installed versions, and existing tests without running
   environment suites.
2. Record stable project/topic identities and explicit status mapping. Do not
   import Java chapter names or assume the highest-numbered folder is unfinished.
3. Choose technology-aware extraction and reviewed supplementary content. Preserve
   ordinary notes; quiz/snippet markers are optional compatibility input, not an
   obligation on the learner.
4. Inventory the complete dependency graph of any UI assets reused, including
   styles, data loaders, storage, and licenses. Build destination content afresh.
5. Separate deterministic generation, explicit Copilot authoring, local review,
   static study, and opt-in native execution.

## Contracts worth preserving

- **Notes first:** preserve wording and examples; only explicitly accepted source
  patches can insert or correct notes. No unstudied content or filler quotas.
- **One approval backend:** browser Apply and CLI approval share staging,
  validation, input/proposal conflicts, fresh reports, and journaled recovery.
  Concurrent human edits must never be restored from an unrelated backup.
- **One everyday workflow:** `npm run revise` remains the source of truth for
  generation/review as new content is added. Keep generate/approve commands as
  adapters to shared orchestration, not competing pipelines. Validate future
  changes rather than promising that shared code can never regress.
- **Truthful learning evidence:** exact, type-sensitive grading; genuinely false
  distractors; expectation provenance; independent cases for independent claims.
- **Durable progress:** stable IDs, legacy aliases, semantic content versions,
  idempotent per-question events, drafts, backups, validated import, and recovery.
- **Study confidence, not certification:** at least three distinct eligible
  objective questions and 80% accuracy for the default concept threshold.
  Repetition and interview self-assessment cannot manufacture breadth.
- **Honest native boundaries:** use dedicated deterministic local fixtures and an
  actual supported runtime. A JavaScript approximation, subprocess, or container
  label alone establishes neither framework correctness nor secure isolation.
- **Static hosting:** GitHub Pages serves study content; it does not run a native
  local test service or grant write access to a repository.

## Handoff acceptance

Use the chosen plan's acceptance matrix, adapted to the discovered project.
Demonstrate an ordinary notes → revise → review/Apply → study cycle, scratch-only
validation, stale/concurrent edit handling, failed publication recovery, and
progress export/import. Verify native fixtures separately against independent
oracles and known incorrect implementations.

Document commands from the **implemented package scripts**, not this Java
repository's historical aliases. Report unsupported tooling, missing authoring,
skipped checks, and execution limitations explicitly. Current Java behavior is
documented in [README.md](README.md) and [rules.md](rules.md).
