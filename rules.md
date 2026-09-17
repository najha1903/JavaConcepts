# JavaConcepts Authoring Rules

This document defines the source-note format for the Java revision portal. Java files under `src/` are the source of truth. The dashboard files under `revision-dashboard/` are generated from them.

## The Project Contract

These rules come from the author and are binding for every change, by a person or by an assistant.

1. **The notes belong to the author.** They are written concept by concept so that they still make sense when revisited later. Their wording, tone and structure are the reference for everything else.
2. **Keep the theme constant.** Every chapter added later must look and read like the chapters that already exist. Read a few existing files before writing anything new in a different style.
3. **Polish, do not rewrite.** Improve clarity inside the existing theme. Do not restructure a topic, reorder sections, or reword sentences that are already clear, unless the author asks for it.
4. **Adding is allowed, replacing is not.** Missing points related to a chapter may be added, including things understood only in a later chapter. Existing notes must not be silently dropped or overwritten.
5. **Nothing lands without review.** See the approval gate below. Content changes are proposed first and applied only after the author approves.
6. **Never invent content for chapters the author has not written.** If a topic has no source file, nothing is generated for it. Never suggest, scaffold, or pre-fill notes for a topic that has not been studied.
7. **Anything generated must be identifiable as generated**, and must never overwrite the author's own words.

## The Required Workflow

The author reviews before anything is applied:

```bash
npm run revise     # PROPOSES changes, then asks: Apply these changes now? (y/N)
npm run approve    # APPLIES straight away, audits, and opens the dashboard
npm run revise -- --yes   # applies without asking (for scripted runs)
```

`npm run revise` compares a fresh parse against `revision-dashboard/data.js`, which is the baseline the author already approved.

- **Notes, inline notes, or `@quiz` markers changed** → the summary is printed, a report is written to `revision-dashboard/content-changes.md`, and the command asks `Apply these changes now? (y/N)`.
  - Press **y** → the changes are applied, the audit runs, and the dashboard opens.
  - Press **n** or Enter → nothing is applied, so there is nothing to undo. Run `npm run revise` again after editing the notes.
  - In a non-interactive run the answer defaults to **No**, so an automated run can never hang or apply silently.
- **Only Java code changed** (everyday practice) → applied straight away and recorded in the same report, so routine edits do not need an approval each time.
- **Nothing changed** → applied straight away, exactly as before.

`npm run approve` regenerates everything and opens the dashboard, without asking. The generated files are:

- `revision-dashboard/data.js`
- `revision-dashboard/questions.js`
- `revision-dashboard/practice.js`
- `revision-dashboard/deep-challenges.js`
- `revision-dashboard/content-changes.md` (the review report)

Never edit those generated files by hand. The next run will replace them.

## How The Note Converter Works

The parser keeps the core meaning of your comments and improves the reading experience in the generated portal. It:

- Joins wrapped lines when a sentence clearly continues onto the next line.
- Repairs a small set of known shorthand, such as `For Ex :-` to `For example:` and `can't` to `cannot`.
- Leaves the author's `:-` signposts alone. `Note :-`, `Output :-`, and `Pitfall :-` are his voice, and are never rewritten to a colon.
- Preserves Markdown-like inline code in readable form.
- Detects Java-like lines inside comments and renders them as code blocks.
- Preserves pipe-delimited tables as tables in Notes, Quick Revision, and PDF output.
- Separates overview notes, inline code explanations, parameter notes, quizzes, and challenges.
- Filters every marker it understands out of the notes, so tool syntax never appears as an authored note. New markers are registered in `MARKER_KEYWORDS` in `scripts/parse-concepts.js`, which is the single list all four filter sites read.

This is a clarity and structure pass, not permission to invent new behavior. Write the technical idea yourself, especially when a rule has important exceptions or boundary cases. Any added context should support the source note and should never contradict or overshadow it.

Parameter notes are written by the author, not generated. The parser used to invent a parameter entry from each method signature whenever it found a gap, which filled the notes with entries the author had not written. That generator is now switched off, and the entries it had already produced were removed.

## File And Folder Naming

```text
src/
  Chapter_<N>_<TopicName>/
    Sub_Chapter_<N>_<TopicName>/       # optional
      Concept.java
      ExampleChallenge.java
      LargerDeepProblem.java
```

The parser discovers `.java` files recursively. A file name becomes the topic name shown in the sidebar. Files whose names contain `Challenge` are eligible for the Practice Lab, and files whose names contain `DeepProblem` are included in deep-problem content where applicable.

## Overview Notes

Put the big-picture explanation before the first class, interface, record, or enum declaration. Use one clear idea per line or bullet.

```java
// StringBuilder is a mutable character sequence.
// Its append() method changes the existing buffer instead of creating a new String for every addition.
// It is usually the right choice for repeated text changes in single-threaded code.

public class StringBuilderExample {
    // implementation follows
}
```

A strong overview usually covers:

1. What the concept is.
2. Why it exists or when it is useful.
3. How the example works.
4. The important parameters and expected result.
5. A boundary case, common mistake, or interview trap.

## Inline Notes And Code

Place explanations beside the relevant code inside the class. Explain the reason or result, not only the variable name.

```java
int total = 10 + 20; // Both operands are int values, so + performs arithmetic addition.
String label = "Total: " + total; // Once a String participates, + concatenates the remaining value.
```

If a multi-line code example is placed inside a comment, keep it recognizably Java-like and separate it from prose:

```java
/*
 * Example:
 * StringBuilder builder = new StringBuilder("Java");
 * builder.append(" notes");
 * System.out.println(builder); // Java notes
 */
```

The dashboard displays recognized code blocks separately, so learners can see the syntax instead of reading it as prose.

## Sentence Quality Standard

Write for a learner seeing the concept for the first time. Every explanatory sentence should have a clear subject, action, and consequence.

Prefer:

```java
// String.format() returns a new formatted String; it does not print the result automatically.
```

Avoid:

```java
// String.format same as printf but returned
```

Use precise wording:

- Say “returns the completed String” instead of “does the same thing.”
- Say “the end index is exclusive” instead of “end does not count.”
- Say “the method accepts a percentage such as 7.5” instead of “pass interest.”
- Explain whether an operation mutates the existing object or returns a new object.
- Explain what happens for zero, negative, empty, null, maximum, and minimum inputs when those cases matter.
- Avoid unexplained pronouns such as “this,” “it,” or “that” when the reader cannot tell what they refer to.

The generator can repair common formatting and sentence-continuation mistakes, but it cannot reliably infer a missing technical explanation. A vague source note should be rewritten at the source.

## Parameter Notes

Add a parameter section when a method or constructor has important inputs. Explain both the meaning of the parameter and how a learner should choose or test it.

```java
// Parameter notes (what each argument means and how to choose it):
// - text (reverseWords(String text)): the sentence to process; choose normal text, multiple spaces, and an empty string to test the method's behavior.
// - fromIndex (indexOf(String value, int fromIndex)): the zero-based position where the search begins; choose 0 for the whole text or a later position to skip an earlier match.
```

Good parameter notes answer:

- What value does the parameter represent?
- What type and unit does it use?
- What values are valid?
- What boundary or invalid values should be tested?
- Does the method mutate the value or return a result?

The generator creates a parameter section from actual signatures only when relevant coverage is missing. It does not add boilerplate for a topic with no meaningful method or constructor parameters, and it does not add `main(String[] args)` unless you document it yourself.

## Tables And Examples

Use a pipe-delimited table when the learner needs to compare several related values.

```text
| Method | Behavior | Example |
| append | Adds text to the end | builder.append("!") |
| insert | Adds text at an index | builder.insert(0, ">> ") |
```

Keep examples close to the rule they demonstrate. State the expected output and explain why it occurs.

## Gotchas And Boundary Cases

Use a deliberate label when a point deserves attention. The dashboard highlights these in Quick Revision.

```java
// Important: integer division truncates the fractional part, so 5 / 2 evaluates to 2.
// Pitfall: StringBuilder does not compare character content with equals(); compare toString() values instead.
// OCJP trap: String literals may share the String pool, but new String("Java") creates a separate object.
```

Useful cases include:

- Empty strings and empty collections.
- Negative or zero values.
- Inclusive versus exclusive boundaries.
- Null references.
- Integer overflow and narrowing conversions.
- `break`, `continue`, and loop termination.
- Overloading versus overriding.
- Immutable versus mutable objects.
- Checked versus unchecked exceptions.

## Custom Quiz Questions

A written question, answered in your own words:

```java
// @quiz (INTERVIEW) Why is StringBuilder usually preferred for repeated concatenation in a loop?
// @answer StringBuilder changes one mutable buffer instead of creating a new String for every concatenation.
// @answer This usually reduces temporary objects and improves performance.
```

An exam-style question with real options, which is what the Certified exam looks like:

```java
// @quiz (OCJP, MEDIUM) What is the result?
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

Rules:

- Start with `@quiz` followed by the complete question.
- Use one or more `@answer` lines immediately after it.
- Each answer should be a complete, self-contained explanation.
- The tag in parentheses is optional, and so is a level. Write `(OCJP)`, `(INTERVIEW)`, `(INTERVIEW TRAP)`, or combine them as `(OCJP, HARD)`. The tag drives the quiz filter pills, and the level drives the Easy, Medium, and Hard pills.
- `@code` adds a code snippet to the question.
- `@option` adds one choice. Mark the correct choice with `[correct]`. One correct option makes a single-choice question; two or more make a "select all that apply" question.
- `@explain` says why the right answer is right.
- `@why` says why a wrong option is wrong. Start it with the option letter, such as `@why C: ...`, so there is no ambiguity. A `@why` line without a letter is given to the remaining wrong options in the order written.
- A question with `@option` lines appears as A, B, C, D in the quiz. When a learner picks a wrong option, the matching `@why` is shown, so the mistake is explained rather than just marked.
- Quiz markers are excluded from ordinary Notes and appear in the Quiz Bank.
- Every generated question receives a stable ID and source-topic identity for progress tracking and concept review.

## Section Markers

A `@section` line divides a file into groups of questions, so the file stays readable when it is opened. It is tool syntax, and is filtered out of the notes in exactly the same way as a quiz marker.

```java
// @section WITHOUT BUILT-IN METHOD — Classic Interview Series
```

Use it when one file holds two clearly different sets of questions. Never use it to introduce notes: anything that should be read as a note is an ordinary `//` line.

## Quiz Levels

A question's level must describe what the question asks. It is never taken from the position of the topic inside the chapter.

```java
// @quiz (OCJP, EASY) Which method returns true for a whitespace-only String?
// @quiz (INTERVIEW TRAP, HARD) What does "hello".concat(null) do?
```

| Level | What it tests | Example |
|---|---|---|
| Easy | recall a single fact | which keyword fits a code line |
| Medium | read and trace code | predict the output of a short snippet |
| Hard | exam style traps | pick the trap, or select every true statement |

An `@quiz` marker without a level is Medium, except a `(INTERVIEW TRAP)` marker, which is Hard.
Auto-generated questions take their level from their kind: keyword and definition questions are Easy, code tracing is Medium, and gotcha and OCJP trap questions are Hard.

## Coding Challenges And Deep Problems

```java
// @challenge Reverse each word in a sentence using StringBuilder
// @desc Given "Java is fun", return "avaJ si nuf" while preserving word order.
// @hint Use a StringBuilder for each word and append the results to one output builder.
// @testcase reverseEachWord("Java is fun") -> "avaJ si nuf"
```

Keep challenge descriptions complete. State the inputs, expected output, constraints, and at least one edge case. Use `@hint` for guidance without giving away every line of the solution. Use `@testcase` for concrete behavior.

## Dashboard Features

The generated portal provides:

- Notes with explanations, code blocks, tables, parameter notes, and inline annotations.
- Detailed Study and Quick Revision modes; comparison tables keep their grid in both.
- **Revision Bank**: one place for everything the author has written notes for. Filter by chapter, by free text, by level (Easy, Medium, Hard) and by type (OCJP, Tricky, Concept, Predict, Fill Blank, Written), read the notes, or start a quiz directly from the selection. It is built from `CONCEPTS_DATA`, so a chapter that has no source files can never appear in it.
- Chapter and grand quizzes with interview, OCJP, concept, code-completion, and output-prediction questions.
- **Revision Quizzes menu**: opens a choice instead of jumping straight into the Grand Quiz, with the Grand Quiz, an OCJP-only quiz, a Tricky-only quiz, a per-chapter list, and a link into the Revision Bank. Every question shows the chapter it came from.
- **Quiz This Topic** starts a quiz from the single topic open in the Notes view.
- Per-chapter score breakdown after a mixed quiz, weakest chapter first.
- **Practice Lab honesty**: every challenge is labelled **Auto-checked** (your method is run against the recorded expected values) or **Self-check** (no automatic verification, verify it yourself). Code the checker cannot run is reported as "could not be checked", never as a wrong answer.
- OCJP questions attached to the topic they belong to, so they can be revised topic by topic, chapter by chapter, or centrally from the Revision Bank.
- Wrong-answer concept review linked back to the exact source topic.
- Practice Lab and Deep Problems.
- Chapter-wise PDF printing from the Notes view.
- Local progress tracking in browser storage.

## Verification

Use these commands when troubleshooting:

```bash
npm run revise    # propose content changes, review them, then approve
npm run approve   # apply, audit, and open the dashboard
npm run generate  # regenerate the dashboard files without the review gate
npm run audit     # validate generated structure and note quality
npm run check     # regenerate and audit without opening the browser
```

The audit checks that topics, question IDs, question-to-topic links, answer shapes, challenges, and known incomplete-note patterns are valid. Java compilation should still be checked with your installed JDK after changing source code.
