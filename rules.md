# JavaConcepts authoring and revision rules

This is the current authoring contract. The Java files under `src` are the
author's notes; generated portal data is a representation, not permission to
rewrite them. Commands are defined by `package.json` and implemented under
`scripts`; future framework targets are documented separately in
[revision-portal-plans](revision-portal-plans/README.md).

## 1. The author's contract

1. **Keep the notes first.** Preserve the author's wording, voice, ordering,
   signposts, technical meaning, and examples. Read nearby topics before adding
   material. Polish unclear text without gratuitously rewriting clear sentences.
2. **Make changes reviewable.** Show corrections and additions explicitly.
   Generation does not edit live notes; optional suggested insertions need their
   own selection/approval. Never hide an authored change in generated output.
3. **Do not lose content.** A formatting pass must preserve rules, exceptions,
   examples, tables, code indentation, and meaningful parameter explanations.
   Do not invent prose or parameter notes to make empty sections look complete.
4. **Do not teach unstudied material.** Only real, studied source topics may
   produce revision content. A future-topic mention is not a new lesson.
   Draft chapters stay readable but are excluded from revision/gap scoring.
5. **Separate authorship from automation.** Copilot research and content drafting
   happen only as an explicit task. The installed CLI reads existing inputs,
   derives supported data, and reports gaps; it is not an autonomous AI author.
6. **Prefer useful content over quotas.** Missing examples/questions/cram points
   are authoring tasks. Never pad counts with duplicated sentences, fabricated
   facts, generic distractors, or unsolicited exercise files.

## 2. Everyday review and approval

```powershell
npm run revise       # candidate, browser review when needed, then study
npm run revise:cli   # optional terminal review/approval
npm run approve      # explicit approval through the shared backend
npm run check        # full candidate checks without publication
```

`npm run revise` remains the single everyday entry point for generation and
review, including future content. `scripts\lib\revision-workflow.js` owns common
orchestration; the revise/generate/approve scripts are adapters, not separate
implementations. Add future rules/checks there or in its shared helpers and
validate them through this workflow. Shared behavior prevents divergent command
paths by design; it does not justify a promise of no future bugs.

`scripts\lib\checks.js` is the single validator registry. `verify.js` selects the
full profile and `check-structure.js` the structural profile; add checks to this
registry rather than duplicating lists. Content identity/output-contract checks
run in both profiles, with native cases enabled for full validation. Independent
Java practice-contract execution belongs to the full profile.

- Candidates are built in ignored `.revision-work` workspaces from a snapshot of
  source, authored content, scripts, and dashboard inputs. The ledger and
  suggestions are refreshed for the candidate before review. The review includes
  its candidate ledger; published reports stay tied to the approved dataset until
  Apply.
- Compare against the approved dashboard, but derive questions only after parsing
  current notes into staged data. Merge derivations/expectations before refreshing
  reports and validating; do not derive from yesterday's dashboard.
- Browser Apply and `scripts\approve.js` use the same approval implementation.
  Apply validates the candidate before publishing. Selecting optional suggestions
  approves those specific source insertions, not an unrestricted rewrite.
- Discard removes pending review artifacts only. It never undoes the author's
  edits or previously approved source content.
- Never restore the live source tree from the candidate snapshot, including after
  a failed generation. Only explicitly approved, transaction-owned source
  insertions participate in publication recovery.
- Source/content/configuration fingerprints and proposal IDs detect stale reviews.
  If a file changes while revision is running, preserve the edit and regenerate a
  proposal rather than silently approving a different candidate. Reapplying the
  same approved proposal is idempotent. Uncommitted handwritten notes are valid
  inputs: exact reviewed bytes matter, not a clean worktree or a prior commit.
- Review fingerprints include consumed baselines and caches. Publication rechecks
  the complete input snapshot before completion and preserves edits on conflict.
- A writer lock and publication journal support recoverable multi-file publication.
  They are not a filesystem-wide atomic transaction. Recovery restores only
  transaction-owned bytes; a newer edit causes an explicit recovery conflict.
  Interrupted publication is recovered on the next workflow command, not through
  a guarantee of crash immunity or simultaneous multi-file reader visibility.
- If recovery reports a conflict, preserve both the edited files and
  `.revision-work\publication.json`, reconcile the named paths, and retry. Do not
  delete the journal or restore the entire source tree to force success.
- A no-review/code-only refresh uses structural validation; it must not be
  described as a full native check. `npm run check` and approval run the full
  configured candidate validators.
- `npm run check` applies no optional source patches and publishes no dashboard,
  source edits, or generated caches. Scratch validation is not a content approval.
- `npm run revise -- --yes` is deliberate approval for scripted use, without
  optional source insertions. Noninteractive `revise:cli` declines; a declined
  approval leaves the candidate available.
- `npm run generate` uses the same safe proposal path without opening a browser.
  `npm run approve` runs the full shared approval pipeline but does not open a
  browser; everyday browser navigation belongs to `npm run revise`. To approve one
  specific pending review, pass its id positionally: `npm run approve -- <proposalId>`.
  The id comes from `revision-dashboard\content-changes.json` or the review page. A
  space-separated `--proposal <id>` does not reach the script, because npm consumes
  it as its own configuration.
- `revision-dashboard\revision-state.json` records the approved profile, content
  identity, and authored-input fingerprint. It is deterministic, so it changes only
  when the approved content changes, and it is what lets `npm run revise` decide
  that nothing needs review.
- Unknown or incomplete workflow flags fail explicitly. CI uses the shared
  approval command to materialize validated dashboard artifacts from its checkout;
  scratch-only `check` does not produce artifacts for publication.
- `generate:all`, `derive:code`, and `fill:practice` are also shared-engine aliases,
  not raw-worker bypasses. Use `npm run generate -- --force` when intentionally
  refreshing both derived-code questions and practice-expectation caches.

Generated datasets, caches, identity records, ledger, and suggestions belong to
the pipeline. Do not hand-edit them to make a failing check pass. Fix the source
input, authored bank, or generator and rerun the appropriate workflow.

## 3. Notes and chapter eligibility

Keep the repository's `src\Chapter_<N>_<TopicName>` organization and optional
subchapters. Put overview notes before the class/interface/enum/record declaration
and short implementation insights beside the relevant code.

```java
// StringBuilder is a mutable character sequence.
// append() changes the existing buffer rather than creating a new String each time.
// Use a separate builder per independently modified value.
public class BuilderExample {
    public static void main(String[] args) {
        StringBuilder text = new StringBuilder("Java");
        text.append(" notes"); // The same builder now contains "Java notes".
    }
}
```

Explain the behavior, why it matters, input constraints, expected output, and
relevant boundaries. Keep code separate from prose and tables pipe-delimited.
Parameter notes are authored only when useful: give the argument's meaning,
type/unit, valid range, and a meaningful boundary example.

Formatting may join wrapped sentences and recognize code/tables; it cannot infer
a missing technical explanation reliably. Preserve contractions and the author's
`Note :-` / `Output :-` signposts. Do not turn a formatting pass into a rewrite.

Chapter status is declared in `data\chapter-status.json`:

```json
{
  "schemaVersion": 1,
  "chapters": { "<chapter-number>": "finished" }
}
```

Use a real chapter number/name as the key and `finished` or `draft` as the value.
`@draft` in a chapter's source overrides a finished declaration. Both all-finished
and all-draft manifests are supported. Unlisted chapters retain the legacy
compatibility rule: the highest numbered chapter is draft and lower numbered
chapters are finished; unnumbered chapters are finished unless marked draft.
Add explicit entries rather than relying on that fallback for new material.

Draft notes, including the author's own exercise notes, stay visible. Generated
quizzes, cram, practice, deep problems, suggestions, and readiness denominators
respect draft exclusions. An assistant must not add revision markers or exercise
scaffolds to an unfinished chapter to satisfy coverage, nor erase handwritten
exercise notes simply because their chapter is draft.

Exercise identification is shared in `scripts\lib\note-rules.js`: names containing
`Challenge`/`Problem` or a leading `Challenge:`/`Deep Problem:` note identify
exercises. Actual practice support also depends on extractable method signatures,
inputs, expectations, and verifier capability; a filename alone does not establish
executability. Do not create a challenge merely because a topic mentions an API.

## 4. Optional question and cram formats

Existing markers use `//` line comments. They are optional authoring input, kept
out of ordinary rendered prose; do not assume markers inside `/* ... */` parse.

```java
// @quiz (INTERVIEW) Why use a builder for repeated concatenation?
// @answer A builder can reuse a mutable buffer instead of repeatedly constructing Strings.

// @quiz (OCJP, MEDIUM) What does this print?
// @code System.out.println("abc".substring(0, 0));
// @option abc
// @option An empty line [correct]
// @option StringIndexOutOfBoundsException
// @explain Equal begin and end indexes select an empty range.
// @why A: No characters are selected, so the original text is not returned.
// @why C: The indexes are equal and within the valid range.
```

- `@quiz` starts a question; `@answer` supplies written feedback/self-assessment.
  Optional tags such as `INTERVIEW`, `OCJP`, and `TRAP`, and levels such as
  `EASY`, `MEDIUM`, or `HARD`, categorize it.
- `@code` supplies question code. Each `@option` is one choice; mark every correct
  one with `[correct]`. Multiple correct choices require the full correct set.
  `@explain` explains the answer; `@why A: ...` identifies a wrong choice's reason.
- Every distractor must actually be false under the prompt. A true fact from
  another topic is not a valid wrong option. Remove ambiguous topic-membership
  questions rather than manufacturing a distinction.
- Authored supplementary questions in `data\ocjp-bank.js` must remain original,
  source-backed practice material. Do not reproduce confidential/copyrighted exam
  questions or advertise these as official certification items.
- `@takeaway` and `@gotcha` supply concise authored revision points; `@snippet`
  supplies associated code. Aim for one speakable sentence, at most 160 characters
  and 26 words, and at most three displayed snippet lines. Preserve complete
  context elsewhere. Do not generate filler to meet a chapter-size target.
- Durable question identity is separate from display order. Semantic changes to
  answers, choices, or concepts must invalidate affected progress; legacy aliases
  must not transfer stale correctness to a different question.

The parser maintains `data\question-identities.json`, bootstrapped from the prior
published bank, and emits `qid`, `legacyQids`, and a SHA-256 `contentVersion`.
Preserve the registry through normal generation; do not manually renumber it.
For authored questions needing an identity independent of future moves/renames,
assign and approve a permanent ID **before** changing the source location:

```java
// @quiz [id:string-empty-range] (OCJP, HARD) What does this print?
```

Keep that ID thereafter. Without a permanent ID, changing source location or
question identity fields can create a new record; automatic migration is not a
promise that arbitrary rewrites preserve history. Changed semantic versions
archive incompatible evidence; they do not certify correctness.

## 5. Practice and evidence

`@challenge`, `@desc`, `@hint`, and `@testcase` can describe authored exercises.
An explicit testcase can supply a call and expected result:

```java
// @testcase toFahrenheit(25) -> 77.0
// @testcase countdown(3) -> 3\n2\n1
```

For a `void` method, the expectation describes printed output, not a return value.
Use literal `\n` within the comment for line breaks. Whether a case is supported
must be determined by the actual parser/checker, not promised from the tag alone.

Keep these forms of evidence distinct:

| Evidence | Meaning and limit |
| --- | --- |
| Authored expectation | A reviewed expected result; still needs suitable validation. |
| Source-derived expectation | Output obtained from the author's implementation; useful for regression, not an independent oracle. |
| Independent case | A separately specified expected behavior; stronger only when the actual solution is tested against it. |
| Native Java execution | A particular snippet/case compiled or ran with the local JDK; not proof of every input, full program, or browser solution. |
| Browser heuristic | A limited Java-to-JavaScript approximation; not native Java and not a correctness guarantee. |
| Self-check | Learner judgment against notes/rubric; not an objective pass. |

Generated practice metadata separates `evidence.execution`
(`browser-approximate` or `self-check`) from `evidence.expectation`
(`independent-contract`, `authored-note`, `solution-derived-smoke`, or `none`).
Per-case provenance identifies the source of the expected value. An independent
expectation label does not turn a browser check into native execution.

`data\practice-contracts.js` contains independently specified, representative
normal/boundary/invalid cases for selected methods and overloads. Native contract
checks test those finite cases against the reference source; they do not cover
every exercise, every corner case, or arbitrary learner/browser implementations.

Use exact expected values and type-sensitive grading. Do not accept output merely
because it contains the expected substring; distinguish strings, numbers,
booleans, lines, whitespace, compile errors, and runtime errors. Any normalization
must be explicit. Browser objective text grading preserves case and spaces,
normalizing CRLF to LF and one final newline only. Native exact-output contracts
normalize platform line endings; literal-MCQ contracts may explicitly ignore
terminal whitespace, whereas predict contracts normally allow one final newline.
Neither uses token/prefix matching. Missing dependencies, unsupported syntax, or infrastructure
failures are not wrong learner answers and are not passing negative tests.

Native scripts execute trusted repository code locally; scratch workspaces,
subprocesses, and browser workers are not general-purpose security sandboxes.
Do not run untrusted code or claim that Pages provides a JVM or framework runner.
The browser's **Run heuristic checks** uses `practice-runtime.js` /
`practice-worker.js` with a timeout. An unavailable worker, timeout, or unsupported
result is not a wrong answer; there is no main-thread execution fallback.

Use `npm run check` for the full scratch workflow. Targeted existing diagnostics
include `node scripts\check-content-engine.js --native` and
`node scripts\check-practice-contracts.js`; read their actual output for scope and
results rather than treating command names as complete Java verification.

## 6. Study history and honest reporting

Study confidence requires at least three **distinct eligible objective questions**
and 80% accuracy per concept. Repeating one question cannot satisfy breadth.
Interview self-assessment, answer reveals, draft topics, and unsupported practice
must not count as objective proof. Imported scores remain history only. Accuracy
weights each distinct question equally rather than letting a frequently repeated
question dominate. Unseen means unstudied, not weak.

Record each finalized session/question/version event once. Resume, repeated
clicks, duplicate pools, or imports must not add the same result twice. Preserve
drafts and compatible history; changed semantic content invalidates only affected
evidence. Mastery/readiness is a study heuristic, not an official score, a native
execution certificate, or guaranteed exam readiness.

Browser state belongs to its origin/profile. Local files, loopback addresses, and
GitHub Pages do not automatically share progress. `revision-dashboard\storage.js`
owns the project-specific version-2 envelope, validation, legacy migration, and
visible persistence warnings. `scoring.js` owns objective answer comparison;
`app.js` combines compatible history into study guidance.

Use **Local study data** to export JSON, preview/confirm a validated import, download
the previous backup, or reset after confirmation. Import **replaces**, not merges,
state and requires a local backup first; reset also backs up before clearing.
Backups include notes, drafts, quiz state/history, and flashcard schedules.
Imported scores are not trusted confidence evidence. Export a file before clearing
browser data: the local backup is stored in the same browser and can be lost too.
Damaged/unavailable storage produces a visible warning; preserved originals and
in-memory study do not replace a durable exported backup.

Read local `revision-dashboard\coverage.md` (generated/gitignored), the
[deployed ledger](https://najha1903.github.io/JavaConcepts/coverage.md),
[suggestions](revision-dashboard/suggestions.md), and actual validator output for
current scope. The deployed ledger reflects the deployment, not pending local
changes. Distinguish authored, generated,
checked, native-run, unsupported, skipped, and missing items. A parsed file or
passing schema check is not a verified exercise. Never replace those distinctions
with hardcoded totals, “nothing can regress,” or “everything is verified.”
