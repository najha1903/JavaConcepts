# Revision portal plans

These are **future implementation blueprints**, not installed framework portals.
Each technology plan is self-contained: copy the relevant file into its learning
repository and ask Copilot to begin with destination discovery.

| Technology | Standalone plan |
| --- | --- |
| Selenium with Java | [Selenium plan](SELENIUM-JAVA-REVISION-PORTAL-PLAN.md) |
| REST Assured with Java | [REST Assured plan](REST-ASSURED-JAVA-REVISION-PORTAL-PLAN.md) |
| Karate DSL | [Karate plan](KARATE-DSL-REVISION-PORTAL-PLAN.md) |
| Cypress with JavaScript / TypeScript | [Cypress plan](CYPRESS-JS-TS-REVISION-PORTAL-PLAN.md) |
| Playwright with JavaScript / TypeScript | [Playwright plan](PLAYWRIGHT-JS-TS-REVISION-PORTAL-PLAN.md) |

Preserve existing notes and build tooling. Copilot authoring is explicit and
reviewable; installed revision commands do not perform autonomous AI research.
Do not copy Java datasets or assume browser approximations can run a framework.
Native exercises require dedicated local fixtures and verified execution controls.

## Lessons each plan ends with

Every plan closes with a section on **verification and wording lessons from the
reference**. Each item exists because something failed in this repository first:

- **Wording improvements are proposals from an authored catalogue.** The tool scans
  every topic but can only propose sentences that have a rule. It cannot discover
  vague prose by itself, and it must never invent a method or example a file does not
  contain.
- **Layout and journeys need a real browser.** A DOM-only harness has no viewport, so
  it cannot see content pushed off a phone screen.
- **Validate on pull requests, separately from deployment**, with read-only
  permissions.
- **Keep one validator list**, with profile entry points as thin adapters, so a check
  cannot be added to one list and silently missing from the other.

For this repository's implemented behavior, see the [root README](../README.md)
and [authoring rules](../rules.md), not the target capabilities in these plans.
