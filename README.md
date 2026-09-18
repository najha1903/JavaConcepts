# JavaConcepts

Java learning notes, runnable examples, interview preparation, OCJP-style questions, coding challenges, and deep problems powered by an interactive revision dashboard.

Live dashboard: https://najha1903.github.io/JavaConcepts/revision-dashboard/

## Quick Start

From the project root, run:

```bash
npm run revise
```

This command proposes the refresh, then opens it for review in your browser:

1. Scans every Java file under `src/`.
2. Extracts and organizes overview notes, inline explanations, code blocks, parameter notes, quizzes, and challenges.
3. Clarifies a small set of shorthand and joins wrapped sentences without changing the technical meaning of the source notes.
4. **Compares the result with the last approved version.** When notes, inline notes or `@quiz` markers changed, it writes a readable diff to `revision-dashboard/content-changes.md` and opens a review page in your browser that shows the same changes with **Apply** and **Discard** buttons. Nothing is written until you choose Apply; Discard leaves everything exactly as it was, so there is nothing to undo either way.
5. Applies the changes, regenerates the dashboard data files, and runs the generated-data audit.
6. Opens the dashboard in the browser.

Nothing about your notes is ever changed without that review. A Java code edit on its own is applied straight away, so everyday practice is not interrupted.

When a change is waiting and you already know you want it, apply it directly:

```bash
npm run approve
```

Open `revision-dashboard/index.html` directly when you only want to read the last generated version.

### Adding New Content

Write the file the way you write the rest of your notes and run `npm run revise`. Nothing regresses: every rule that shapes the notes lives in the parser, not in the generated files, so a file written next week is read with the same rules as one written today.

Three things are authored rather than generated, so a brand-new file has to supply them:

- A new **chapter** needs `@takeaway` and `@gotcha` lines for its Quick Revision panel. Without them the tool falls back to picking note lines, and if it finds nothing worth keeping the panel says so instead of showing junk.
- **Practice** only comes from files named `*Challenge*` or `*Problem*`.
- A **`void` method** can only be auto-checked if you give it a `@testcase` line, because it has no return value to compare. Use `\n` when it prints several lines: `@testcase countdown(5) -> 5\n4\n3\n2\n1`.

See [rules.md](rules.md#adding-new-content-tomorrow) for the detail.

## Project Structure

```text
src/
  Chapter_<N>_<TopicName>/
    Sub_Chapter_<N>_<TopicName>/
      ConceptOrChallenge.java
revision-dashboard/
  index.html              # Dashboard interface
  app.js                  # Navigation, notes, quizzes, practice, and PDF printing
  style.css               # Dashboard styling
  data.js                 # Generated notes and source code
  questions.js            # Generated quiz and Quick Revision data
  practice.js             # Generated coding challenges
  deep-challenges.js      # Generated deep problems
  content-changes.md      # Generated review report of pending note changes
  review.html             # Browser page for reviewing and applying those changes
scripts/
  parse-concepts.js       # Source-to-dashboard generator
  revise.js               # Runs the proposal and opens the review
  review-server.js        # Local server behind the review page
  audit-generated.js      # Generated-data and note-quality checks
  create-project.js       # Optional dashboard scaffolder
```

Generated files are disposable. Edit the Java source notes and then run `npm run revise`; do not edit generated dashboard files manually. Your source notes remain the core content: generation improves readability and adds supporting context without removing the original idea or examples.

## What The Portal Provides

- **Notes:** Readable overview explanations, inline takeaways, tables, parameter notes, and visible Java code examples.
- **Quick Revision:** Flashcards with mastery tracking, gotcha highlights, and comparison tables kept as real tables.
- **Revision Quizzes:** A menu instead of a single quiz, with the Grand Java Quiz, an OCJP-only quiz, a Tricky-only quiz, and every chapter and sub-chapter. Each question shows the chapter it came from, and the results screen breaks your score down chapter by chapter.
- **Quiz This Topic:** Starts a quiz for the single topic open in Notes.
- **Revision Bank:** One place for everything you have written notes for. Filter by chapter, free text, level and question type, read the notes, then start a quiz from exactly that selection.
- **Practice Lab:** Coding challenges with automatic checks where supported and self-check workflows for the rest. Every challenge is labelled **Auto-checked** or **Self-check**, and code the checker cannot run is reported as "could not be checked" rather than as a wrong answer.
- **Deep Problems:** Larger OOP and algorithm problems for deliberate practice.
- **Concept Review:** Relevant notes appear after an incorrect quiz answer.
- **Chapter PDF:** Select a chapter in Notes and print a readable chapter-wise PDF from the browser print dialog.

## Adding Notes

Add a `.java` file below `src/Chapter_<N>_<TopicName>/`. Put the main explanation before the class declaration and place short implementation insights beside the relevant code.

Good notes answer:

- What the concept is.
- Why it matters.
- How the code works.
- What input or parameters mean.
- What output or result to expect.
- Which boundary cases, mistakes, or interview traps deserve attention.

Use complete sentences. Keep one idea per bullet. Include a small code example when the idea is easier to understand by seeing the syntax. The generator preserves code-like comment lines as code blocks and keeps tables as tables.

## Custom Quiz And Challenge Tags

A written question, answered in your own words:

```java
// @quiz (INTERVIEW) Why is StringBuilder useful inside a loop?
// @answer StringBuilder changes one mutable buffer instead of creating a new String for every concatenation.
// @answer This usually reduces temporary objects and improves performance for repeated text changes.
```

An exam-style question with real options, which is what the Certified exam looks like. Mark the right choice with `[correct]`, and use `@why` to say why each wrong option is wrong:

```java
// @quiz (OCJP, MEDIUM) What is printed by this code?
// @code System.out.println("abc".substring(0, 0));
// @option abc
// @option An empty line            [correct]
// @option StringIndexOutOfBoundsException
// @option Compilation fails
// @explain substring(0, 0) is legal: beginIndex equals endIndex, so the range has length 0 and an empty String is printed.
// @why A: "abc" is the original String; substring cannot return more text than it was given.
// @why C: StringIndexOutOfBoundsException needs beginIndex > endIndex, or an index greater than length().
// @why D: it compiles, because substring(int, int) is a valid method.
```

A coding challenge:

```java
// @challenge Implement a queue using an array
// @desc Support enqueue, dequeue, peek, and isEmpty operations.
// @hint Track the front and rear positions carefully and define the empty-queue behavior.
// @testcase enqueue(4), enqueue(7), dequeue() -> 4
```

Supported markers are `@quiz`, `@answer`, `@code`, `@option`, `@explain`, `@why`, `@challenge`, `@desc`, `@hint`, and `@testcase`. These markers are intentionally kept out of ordinary topic notes and placed in their relevant dashboard features.

The tag in parentheses is optional, and so is a level. Write `(OCJP)`, `(INTERVIEW)`, `(INTERVIEW TRAP)`, or combine them as `(OCJP, HARD)`. The tag drives the quiz filter pills and the level drives the Easy, Medium and Hard pills. A question with no level is Medium, except a trap, which is Hard.

## Useful Commands

```bash
npm run revise   # propose changes, open them for review, then apply or discard
npm run revise:cli  # the same proposal with a yes/no question in the terminal
npm run approve  # apply the reviewed changes, audit, and open the dashboard
npm run generate # regenerate generated files without the review step
npm run audit    # validate the current generated files
npm run check:practice   # confirm no practice verifier rejects a correct solution
npm run check:questions  # run every code question and compare its real output
npm run check    # regenerate, validate, and run both checks above
```

See [rules.md](rules.md) for the complete authoring contract and [TEMPLATE.md](TEMPLATE.md) for the optional cross-technology dashboard template.
