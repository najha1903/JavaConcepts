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
npm run revise      # PROPOSES changes and opens the review in the browser
npm run revise:cli  # the same proposal with a yes/no question in the terminal
npm run approve     # APPLIES straight away, audits, and opens the dashboard
npm run revise -- --yes   # applies without asking (for scripted runs)
```

`npm run revise` compares a fresh parse against `revision-dashboard/data.js`, which is the baseline the author already approved.

- **Notes, inline notes, or `@quiz` markers changed** → the summary is printed, a report is written to `revision-dashboard/content-changes.md`, and a review page opens in the browser with the same changes and two buttons.
  - **Apply** → the changes are generated and every check is run. If all pass, the page opens the dashboard. If any fails, the generated files are rolled back, the page shows what failed, and your last approved version stays in place.
  - **Discard** → nothing is applied, so there is nothing to undo. Run `npm run revise` again after editing the notes.
  - The review is served by a small local server (`scripts/review-server.js`) on the loopback interface. It exists only while the review is open, and the approve step it runs is the same path `npm run approve` takes, so the two can never drift apart.
  - When the author prefers the terminal, `npm run revise:cli` asks `Apply these changes now? (y/N)`. In a non-interactive run the answer defaults to **No**, so an automated run can never hang or apply silently.
- **Only Java code changed** (everyday practice) → applied straight away and recorded in the same report, so routine edits do not need an approval each time.
- **Nothing changed** → applied straight away, exactly as before, and the dashboard opens.

`npm run approve` regenerates everything, runs every check, and opens the dashboard. It is **all or nothing**: the generated files are copied first, and if any check fails they are put back, so the dashboard keeps your last approved version and the message "nothing was applied" is literally true.

`npm run approve` runs, in order:

1. `parse-concepts.js` — regenerate everything from your notes
2. `audit-generated.js` — the shape of the data: ids, paths, answer shapes, a marker left outside a comment, a note line that never reached the page
3. `check-practice.js` — every auto-checked challenge runs against the solution in its own file, so none can reject correct code
4. `check-questions.js` — every question about output is compiled and run, and the real output compared with the answer it marks correct

The whole sequence takes about fifteen seconds. The first failure stops it and rolls the generated files back.

The generated files are:

- `revision-dashboard/data.js`
- `revision-dashboard/questions.js`
- `revision-dashboard/practice.js`
- `revision-dashboard/deep-challenges.js`
- `revision-dashboard/content-changes.md` (the review report)

Never edit those generated files by hand. The next run will replace them.

## Adding New Content Tomorrow

**Nothing regresses.** Every rule that shapes the notes lives in `scripts/parse-concepts.js`, not in the generated files, so a file written next week is parsed with the same rules as the ones written today. `npm run revise` reads the source again from scratch each time; it does not carry the old format forward.

Verified by adding a new chapter with notes, a quiz and a challenge, running the full revise → review → apply cycle, and confirming that the `:-` signposts survived, the contractions were not rewritten, no parameter section was invented, no marker leaked into the notes, the code sample kept its indentation, the quiz parsed, and the challenge became auto-checked.

Three things a new file does NOT inherit, because they are authored rather than generated:

### 1. A new chapter's key points are written for you, and `@takeaway` refines them

The Quick Revision panel is built automatically. It scores every statement in the chapter's notes and keeps the best ones: a rule ("must", "cannot", "throws", "does not compile") scores high, a definition or an explanation scores well, and a line that talks about *this file* or *this example*, or that asks a question, is passed over. Exercise files score lower than concept files, because their lines describe a task. The pick then moves round the topics, so one long topic cannot fill the whole list.

This means a new chapter arrives with usable key points and no work from you. Verified by removing the `@takeaway` lines from Chapter 12 and regenerating: the derived list was

```text
Without handling, an exception immediately terminates execution and prints a stack trace.
Checked, such as IOException: the compiler insists you either catch it or declare it with throws.
`finally` block: Guarantees execution regardless of whether an exception was thrown or caught.
```

against the authored *"An exception interrupts the normal flow of a program. Without handling it, the program stops and prints a stack trace."* Close, and all five derived gotchas were the authored ones.

Write `@takeaway` and `@gotcha` lines when you want the point phrased your way, or when you want to state something the notes do not already say. Yours are used verbatim and the derived ones are not shown at all. If a chapter has nothing worth deriving, the panel says so rather than showing junk:

```text
No key points are written for Chapter 16 yet. Add // @takeaway lines to state them,
and they will appear here instead of this note.
```

See [Key Takeaways And Gotchas](#key-takeaways-and-gotchas) for how to write one.

### 2. Practice only comes from files named `*Challenge*` or `*Problem*`

A file called `Loops.java` contributes notes and quiz questions but no practice challenge. Name the exercise file `LoopsChallenge.java` or `LoopsDeepProblem.java` and it appears in the Practice Lab.

### 3. A `void` challenge needs `@testcase`, and multi-line output uses `\n`

A method that returns a value is checked automatically from its `@testcase` line. A method that PRINTS has no return value to compare, so its printed output is what gets checked, and only an explicit `@testcase` can supply it:

```java
// @testcase countdown(5) -> 5\n4\n3\n2\n1
// @testcase printEqual(1, 2, 3) -> All numbers are different
// @testcase printMegaBytesAndKiloBytes(-1024) -> Invalid Value
```

`\n` in the expectation becomes a real newline, so a method that prints several lines can be checked. Without a `@testcase` the challenge is offered as **Self-check**, which the lab labels clearly.

## How The Note Converter Works

The parser keeps the core meaning of your comments and improves the reading experience in the generated portal. It:

- Joins wrapped lines when a sentence clearly continues onto the next line, and keeps a run of complete entries (such as a list of test cases) on separate lines rather than merging them into one paragraph.
- Repairs exactly three pieces of shorthand: `For Ex :-`, `For ex :-` and `Ex:-` become `For example:` and `Example: `. Nothing else is rewritten.
- Leaves the author's `:-` signposts alone. `Note :-`, `Output :-`, and `Pitfall :-` are his voice, and are never rewritten to a colon.
- Never expands a contraction. `doesn't`, `can't` and `won't` are written that way in the source and appear that way in the notes.
- Never replaces a sentence with a rewritten version of itself. A previous version did, which quietly reworded the author's own headings and explanations.
- Preserves Markdown-like inline code in readable form.
- Detects Java-like lines inside comments and renders them as code blocks, keeping the indentation of a wrapped statement and of an ASCII diagram intact.
- Preserves pipe-delimited tables as tables in Notes, Quick Revision, and PDF output.
- Separates overview notes, inline code explanations, parameter notes, quizzes, and challenges.
- Never invents parameter notes. The section is written by the author or it does not exist.
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

Write these only for the parameters that are worth explaining. A no-argument method, or an argument whose meaning is obvious from its name, does not need an entry, and covering every signature in a file turns the section into a list rather than an explanation.

The generator never writes parameter notes. It used to build a section from the method and constructor signatures in each file, which added entries for every parameter, including `main(String[] args)` and calls with no arguments, in a lecturing voice. Those entries now read as notes the author had written when he had not, so the feature was removed along with the entries it had already produced. A parameter section in a file is the author's writing.

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

## The Researched OCJP Bank

The `@quiz` markers above are for questions you write yourself, in your own file. There is a second place for questions: `data/ocjp-bank.js`, which holds exam questions researched and written by hand.

**Why it is separate.** A question generated from your notes tests what you wrote. It cannot be exam-grade, because the tool can only reformat your sentences. An exam question needs a distractor that is wrong for a reason an examiner would test — the field that is not polymorphic, the catch block that can never run, the overload that loses to widening. That has to be researched, so it lives in its own file and is never invented at runtime.

**You do not need to touch it.** It is merged into the quiz automatically on every `npm run revise`, tagged `ocjp`, and attached to the topic that matches its concepts. It shows up in the Quiz Bank, the OCJP quiz, the Revision Bank, and the concept filter like any other question.

The file explains the shape of an entry at the top. Two rules matter when adding one:

- Every wrong option needs a `why`, because a distractor with no explanation teaches nothing.
- The stated answer must be the real one. `scripts/check-bank.js` verifies that the quiz marks the answer the bank intends, and that every distractor has a reason; it runs as part of `npm run revise`. Snippets are verified by compiling and running them.

The questions are original and written against the published objectives for Oracle's 1Z0-819 exam, which are public syllabus. Oracle's actual exam questions are copyrighted and covered by an exam NDA, and this repository is public, so none of them are reproduced.

## Section Markers

A `@section` line divides a file into groups of questions, so the file stays readable when it is opened. It is tool syntax, and is filtered out of the notes in exactly the same way as a quiz marker.

```java
// @section WITHOUT BUILT-IN METHOD — Classic Interview Series
```

Use it when one file holds two clearly different sets of questions. Never use it to introduce notes: anything that should be read as a note is an ordinary `//` line.

## Key Takeaways And Gotchas

`@takeaway` and `@gotcha` state a chapter's key points in the author's own words. They feed the Quick Revision panel and the cloze cards.

```java
// @takeaway A String cannot be changed after it is created, so concat, trim and substring all return a NEW String and the result has to be stored to be seen.
// @gotcha `"Java" + 10 + 20` gives Java1020 rather than Java30, because + starts joining as soon as one side is text.
```

A chapter with no authored lines falls back to a round-robin pick of its note lines, which is why challenge instructions and bare headings used to appear as "key points". Authoring them is what removes that.

### How To Write One

A takeaway is there to help you understand the concept, not to remind you of a rule you already understand. Write it as if explaining the idea to yourself next month.

- Explain the idea in plain words first, then use the term.
- Give one concrete example with its real output, such as `5 / 2` is 2.
- Say why it matters, or what goes wrong without it.
- Two or three sentences is the right length. One dense line is not.

Compare:

```text
Cryptic     : Division and modulus differ in that integer division truncates while modulus yields the remainder.
Explained   : Dividing two whole numbers throws the fraction away, so 10 / 3 is 3 and not 3.33. The % operator hands you that thrown-away remainder instead, which makes 10 % 3 equal 1.
```

A gotcha is for the mistake that is easy to make and easy to miss. Name the mistake, show the wrong code, and say what actually happens. Do not restate the rule in the negative.

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

### What The Practice Lab Can Check

A challenge that returns a value is checked by running the method and comparing what comes back:

```java
// @testcase sumOdd(1, 100) -> 2500
```

A challenge whose method is `void` is checked by what it PRINTS. Write the expected output after the arrow, exactly as the console would show it, because a space or a capital letter is part of the answer:

```java
// @testcase printMegaBytesAndKiloBytes(2500) -> 2500 KB = 2 MB and 452 KB
// @testcase printMegaBytesAndKiloBytes(-1024) -> Invalid Value
// @testcase printEqual(1, 2, 3) -> All numbers are different
```

A void method outputs nothing else, so only an explicit `@testcase` line can make it checkable. Its printed result is never guessed from prose, because a guess can mark correct code as wrong. A challenge with no `@testcase` is offered as **Self-check**, which the lab labels clearly.

`npm run check:practice` runs every auto-checked challenge against the solution in its own source file and fails if any verifier rejects that solution. It exists because the worst thing the lab can do is tell a learner their correct code is wrong.

`npm run check:questions` compiles and runs every question whose code is a complete program, and compares the real output with the answer the question marks as correct. A question about output is only correct if the program really prints it, and agreeing with the code by eye is not the same as running it. Questions written with an explanatory answer, such as "6, printing 0 to 5", or asking something other than output, are skipped and counted rather than reported.

## Dashboard Features

The generated portal provides:

- Notes with explanations, code blocks, tables and parameter notes.
- **Key Takeaways & Annotations**: for each file, the `@takeaway` and `@gotcha` lines written in that file, followed by the annotations found inside its code. Only comments from inside the class declaration are listed, so the overview notes are not repeated, and only comments that read as a complete sentence are kept, so a fragment such as "condition" or "block of statements" never appears without the line it belonged to.
- Detailed Study and Quick Revision modes; comparison tables keep their grid in both.
- **Revision Bank**: one place for everything the author has written notes for. Filter by chapter, by free text, by level (Easy, Medium, Hard), by type (OCJP, Tricky, Concept, Predict, Fill Blank, Written) and by concept, read the notes, or start a quiz directly from the selection. It is built from `CONCEPTS_DATA`, so a chapter that has no source files can never appear in it.
- **Concept filter**: questions are tagged with the concepts of the topic file they came from, so inside Strings the StringBuilder questions and the equals/== questions can be told apart. The dropdown lists only concepts that can match the current chapter, with a count.
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

`npm run revise` and `npm run approve` run every check, in order, and refuse to apply if any fails. They are:

| Check | What it guarantees |
|---|---|
| `audit-generated.js` | The shape of the data: ids, topic paths, answer shapes, no marker leaked into the notes, no note line lost. |
| `check-practice.js` | Every auto-checked challenge runs against your own solution, so none can reject correct code. |
| `check-questions.js` | Every question about output is compiled and run, and the real output is compared with the answer marked correct. |
| `check-bank.js` | Every hand-researched OCJP question marks the answer the bank intends, and every wrong option says why it is wrong. |
| `coverage.js --check` | Fails on a chapter with no questions, no easy question, no hard question, or no takeaways. Reports the finer gaps as warnings. |
