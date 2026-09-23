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

This means a chapter arrives with usable key points and no work from you — **once it is finished.** The chapter you are currently writing is the exception: it has none of this until you start the next one. See [A Chapter You Are Still Writing](#a-chapter-you-are-still-writing). Verified by removing the `@takeaway` lines from Chapter 12 and regenerating: the derived list was

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

**The tool never writes a marker into your notes.** It reads `@quiz`, `@takeaway`, `@gotcha` and `@testcase`, and it produces content from them, but it does not insert them. Every marker in `src/` was put there by hand, which is why the guard in `generate.js` compares `src/` byte for byte around every run and refuses if a generator changed anything. Earlier rounds broke this rule — 652 `@quiz` markers and a whole exercise file were committed into the notes, most of them into a chapter that was still being written — and nothing could remove them afterwards, because content in your notes is not generated.

**Why it is separate.** A question generated from your notes tests what you wrote. It cannot be exam-grade, because the tool can only reformat your sentences. An exam question needs a distractor that is wrong for a reason an examiner would test — the field that is not polymorphic, the catch block that can never run, the overload that loses to widening. That has to be researched, so it lives in its own file and is never invented at runtime.

**You do not need to touch it.** It is merged into the quiz automatically on every `npm run revise`, tagged `ocjp`, and attached to the topic that matches its concepts. It shows up in the Quiz Bank, the OCJP quiz, the Revision Bank, and the concept filter like any other question.

The file explains the shape of an entry at the top. Two rules matter when adding one:

- Every wrong option needs a `why`, because a distractor with no explanation teaches nothing.
- The stated answer must be the real one. `scripts/check-bank.js` verifies that the quiz marks the answer the bank intends, and that every distractor has a reason; it runs as part of `npm run revise`. Snippets are verified by compiling and running them.

The questions are original and written against the published objectives for Oracle's 1Z0-819 exam, which are public syllabus. Oracle's actual exam questions are copyrighted and covered by an exam NDA, and this repository is public, so none of them are reproduced.

## Questions Derived From Real Code

Alongside the questions generated from your note text and the ones you write with `@quiz`, the tool derives "what does this print?" questions from the **real code blocks in your notes**.

It works like this. Most of your code blocks already carry the answer in a comment:

```java
int a = 1; int b = 2; System.out.println(a + b);   // prints 3
```

The tool compiles and runs the block, and takes **the output the JVM actually produced** as the answer. It is not inferred or guessed. It then strips that comment from the code the question shows, so the question does not give itself away, and keeps your comment as the explanation, in your words.

That is why these are trustworthy where a generated question is not: the answer was executed, not reasoned about. `npm run revise` re-runs every one of them, so if a derived answer ever stops matching the code, the build fails.

Nothing needs to be authored for this, but it only finds questions where your code actually prints something and you noted the result. To get more, add a `// prints ...` comment beside a block that prints.

The result is cached against a fingerprint of your code blocks, so it only recompiles when a block changes. Use `npm run derive:code -- --force` to rebuild it from scratch.

## Practice Challenges And How They Get Checked

A practice challenge comes from a file whose name contains `Challenge` or `Problem`. A file that is not an exercise is used too, but only when it holds a **non-void public static method** that takes at least one argument — a method a challenge can actually check. A method that reads console input is skipped, because its result cannot be known without a person at the keyboard.

Each challenge is labelled in the lab:

- **Auto-checked** — your method is run and compared with a recorded expected value.
- **Self-check** — there is no expected value, so you verify it yourself.

The tool raises as many challenges to auto-checked as it honestly can. For a challenge with no recorded expectation it calls **your own method** with generated arguments and records what it returned, so the expected value is your answer rather than a guess. Arguments are generated only for numeric and boolean parameters, because for those any in-range value is meaningful; a `String` parameter is left alone, since choosing the value would be a guess about your domain.

Before an expectation is written, the **practice lab's own verifier** is run against your source. If it disagrees, the expectation is discarded and the challenge stays self-check. That check exists because the lab translates Java into JavaScript, and the translation has limits: writing a value it rejects would make the lab tell you your correct code is wrong, which is the worst thing it can do.

**To make a challenge auto-checked by hand**, add an `@testcase` line:

```java
// @testcase toFahrenheit(25) -> 77.0
```

That is the reliable route for a `String` or `char` parameter, where the tool deliberately will not guess.

## Mastery: What You Are Weak At, And What To Do Next

The **Mastery** view answers the one question that matters for revision: which concepts am I bad at. Everything on it is computed from the answers you have already given, so it works on history that already exists.

**Concepts, weakest first.** Every concept shows your accuracy, how many answers it is based on, and how long since you last got one right. The list is sorted weakest first, so the top of the screen is always what to work on. A concept you have not tried sorts *after* the ones you have — not-started is not the same as weak. A concept counts as **proved** at 80% or better over at least 3 answers.

**Exam readiness, one honest number.** It is built from three things, and each asks a different question:

| Part | Weight | What it asks |
|---|---|---|
| Accuracy | 35% | How often you are right when you answer |
| Coverage | 20% | How much of the material you have actually attempted |
| Proof | 45% | How many concepts you have answered well, repeatedly |

Proof carries the most weight because it is the only part that cannot be reached by luck. A number built on accuracy alone would read 72% on a history that scores 32 — that is why the three parts are shown beneath it.

**Levels.** Easy is always open. Medium opens when easy is proved, hard when medium is. This is a **nudge, never a lock**: every level stays reachable, and a level you have already proved is never shown as locked.

**One review queue.** Questions and flashcards used to be scheduled separately: flashcards had real due dates, questions had only a weight, so a question you got wrong was merely *more likely* to reappear rather than guaranteed to come back. Questions now get a real due date too — wrong means again in this session, right means tomorrow and then further out each time — and both kinds are merged into a single list ordered by due date.

**Study next.** The dashboard opens on one action chosen from your data, not three generic buttons. The priority is: something overdue, then your weakest concept, then untried material.

**Notes that could use an example.** The rules in your notes that state a constraint — "must", "cannot", "throws", "does not compile" — with no code sample beside them, grouped by chapter and then by file, each file name a button that opens it in the Notes view. Detection is reliable because it is structural: it asks whether a code block sits next to the line, not whether two lines are about the same subject. Keyword matching cannot tell what a line is *about* from what it merely mentions, which is why the tool can find these but cannot write the example. It was 128 of 246 at the time of writing.

**Suggested additions.** Gaps where your code uses a construct or an API your notes never explain. Listed here read-only, deliberately: accepting one writes to your files, and that stays in the review page, which is the one place in this project that writes to your notes. Exercise files are excluded entirely, because using the construct is the exercise — a loop challenge in the Looping chapter contains a loop, and "the notes never explain it" is true and meaningless. That exclusion took the list from 50 to 8.

## A Chapter You Are Still Writing

A chapter you are still working on is **not judged, and nothing is generated for it.**

The rule: a chapter counts as **finished** once a higher-numbered chapter exists. `@draft` in any file marks a chapter as unfinished even if a higher one exists.

While a chapter is unfinished, **nothing of the tool's exists for it, in the generated content or in your notes:**

| | What happens |
|---|---|
| **Your notes** | Shown exactly as written — and they contain **only your writing** |
| **Quiz markers (`@quiz` and its `@option`/`@explain`/`@why` lines)** | **None.** A chapter being written carries no quiz content at all |
| **`@takeaway`, `@gotcha`, `@testcase`** | **None** — these are the tool's markers, and the tool does not write into a chapter you have not finished |
| **Exercise files (`*Challenge*`, `*Problem*`, a `DeepProblems` folder)** | **None** — an exercise file in the chapter you are writing is read as one of your topics, so it appears in your notes as a topic you never wrote |
| **Generated questions** | **None** — no true/false, no output-prediction, no OCJP-trap, no researched bank questions |
| **Takeaways, gotchas, badges, syntax snippet, tables** | **None.** The panel says the chapter is still being written, and that sentence lives in the interface rather than in the generated data, so no content is stored as revision material |
| **Practice challenges** | **None** — the tool would derive test cases from a file you are still editing |
| **Deep challenges** | **None** |
| **The ledger** | Lists the chapter as *still being written*, with no "needs work" flag |
| **`npm run verify`** | Does not fail on anything this chapter lacks |
| **Suggestions** | None |
| **Code Practice, scoped to it** | Says *"No practice challenge here yet"* rather than showing another chapter's challenge |
| **Starting a quiz on it** | Says the chapter is still being written, rather than quietly redirecting you to the Grand Quiz |

### A correction worth recording, twice over

This section first said the `@quiz` questions were "your own". That was wrong. There are **652 `@quiz` markers** in the Java files, and the commits that added most of them are `Co-authored-by: Copilot`. In Chapter 15, `git blame` attributes all 13 to three of those commits.

It was then corrected to say the markers are kept "because they are fixed text rather than derived". That was also wrong, in a way that mattered more, because it sounded like a reason. It answers *"will this go stale?"* when the question is *"did the author write this?"* — and the answer for Chapter 15 was no. So the check passed while a chapter being studied showed 13 quizzes, a topic called "Composition Deep Problem", five key takeaways and two gotchas.

The lesson: **a rule about what a chapter may contain cannot be enforced by looking only at what the tool generates.** Content written into your notes by hand is not generated, so no generator gate can ever see it or remove it. That is why the rule is now checked on both sides, and why the pipeline is watched as well.

### How the rule is enforced

| Where | What it does |
|---|---|
| `parse-concepts.js` | Produces nothing for an unfinished chapter: no questions, no takeaways, no gotchas, no badges, no snippet, no practice, no deep challenges |
| `coverage.js` | Does not judge it, does not flag it as needing work, and does not put it in the work list or the OCJP list — all four were needed, and the last two were missing for a long time |
| `suggest.js` | Skips it |
| `check-in-progress.js` | Enumerates the generated output **and** the notes. It fails if any generated entry, quiz marker, key-point marker or exercise file belongs to the chapter being written |
| `generate.js` | Compares `src/` byte for byte around every run. If a generator changes a single byte of your notes, the run fails and everything is rolled back |
| `scripts/githooks/pre-commit` | Runs the in-progress check, so it cannot be committed either |

The last three exist because the first three were not enough. Gating the generators was correct and stayed correct, and the content still reached the dashboard, because it was never generated in the first place.

Two reasons the rule is worth all that:

1. **Flagging a half-written chapter is double work.** You may cover the gap in your next session, so being told about it now just creates a list you will ignore.
2. **Anything generated may become wrong immediately.** The moment you edit the notes, generated content can contradict them.

**Everything arrives the moment you start the next chapter.** At that point the chapter is finished, and it gets its generated questions, derived takeaways, ledger flags and suggestions all at once.

## The Revision Bank

The bank shows your notes **organised by their own shape**. It is not a filter and it is not a summary: every line you wrote appears.

**A line's shape decides how it is drawn, never whether it is shown:**

| Shape | How it is recognised | How it is drawn |
|---|---|---|
| heading | ends with `:`, or is short and ALL CAPS, or is a short title with no sentence-ending punctuation | a small uppercase label |
| bullet | starts with `-`, `*`, a bullet dot, or `1.` / `1)` / `i)` | an indented bullet |
| prose | everything else | a paragraph |
| code | the parser already separates it | a collapsed block, one click to open |
| table | the parser already separates it | a real table |

Nothing is ever discarded. There is no "is this line good enough" test anywhere, because a blocklist cannot tell a heading from a claim — that approach was measured as unreliable twice in this project and both attempts were deleted.

**Exercises are not listed here.** A file is practice when its name ends in `Challenge`/`Problem`, or its notes open with `Challenge:` / `Deep Problem:`. Those are shown as one line per chapter pointing at the Practice Lab, instead of a card each. That is 70 of the 142 files.

**Code is collapsed, not hidden.** In these notes the code *is* the explanation — the prose says a variable is out of scope and the code shows exactly where. Each block shows a preview saying what it is and how long, and a card-level `Show code` opens every block at once.

**A supporting class** such as `Monitor` or `House` has no notes above its declaration, so its notes from inside the class body are shown instead. If it has none at all, the card says so plainly rather than showing an empty box.

### One rule, one place

The rules the scripts share — *is this an exercise*, *is this chapter finished*, *is this line code*, *does this topic have notes of its own* — live in `scripts/lib/note-rules.js`, used by `parse-concepts.js`, `coverage.js` and `suggest.js`.

They used to be copied into each file and kept in step by hand, and they had already drifted: "is this an exercise?" matched by **filename** in the parser and by **note content** in the ledger, so the two reported different numbers for the same project. `npm run revise` now guarantees they agree.

## What A New Chapter Inherits

Write a chapter the way you normally do — notes, maybe a `@quiz`, maybe a challenge file — and run `npm run revise`. Nothing else is needed. Proven by adding a chapter, running the real pipeline, and checking every one of these, then removing it again.

| | A new chapter gets |
|---|---|
| **Contrast** | The current text colours, clearing WCAG AA in both themes |
| **Type** | The 12px floor and 14px body text, with no work |
| **Spacing** | The container minimums |
| **A quiz** | Its own `@quiz` questions, kept exactly as written |
| **Closing a quiz** | The close control, save and resume |
| **A practice challenge** | Generated from its `*Challenge*` / `*Problem*` files, carrying `chapter` and `concepts` |
| **Mastery** | Its concepts appear in the list, and "Practise in code" where a challenge genuinely teaches one |
| **The lab's ordering** | Its challenge takes part in the weakest-first order |
| **The nav and the Overview** | Both already generic |

**And while it is the chapter you are writing, none of it is generated yet.** See *A Chapter You Are Still Writing* above: it is not judged, nothing is generated for it, and everything arrives when you start the next chapter.

### Two things worth knowing

**Quiz markers must start with `//`.** A `@quiz` inside a `/* */` block comment is not recognised, because the marker reader looks for line comments. Found by writing a probe chapter with the wrong style and seeing its question silently not appear.

**`concepts` on a challenge can be precise or chapter-wide.** The parser records which in `conceptsSource`:

- `topic` — narrowed from that file's own notes, so a match is precise. **10 of 69 today.**
- `chapter` — fell back to the whole chapter's list, so a match only means the chapter teaches it. **59 of 69.**

Only a `topic` match is offered as "Practise in code", because a chapter-wide match would promise a challenge about one concept and deliver another. The number grows by itself as your challenge files get clearer notes.

### The rules that hold, and where

Four rules live in one place, `scripts/lib/note-rules.js`, so the scripts cannot disagree: **is this an exercise**, **is this chapter finished**, **is this line code**, and **does this topic have notes of its own**. They used to be copied into each script and had already drifted — "is this an exercise" matched by filename in one place and by note content in another, so two reports of the same project disagreed.

**The tool never writes notes.** It reads them, re-organises them and generates questions from them, but it does not put words into your files or into your notes. The one exception used to be a short block of the tool's own prose written for any file with no notes at all, so the interface had something to show. It was a mistake three times over — it was displayed as your writing, it was used as the correct answers to a quiz question, and it made a file with no notes pass a check that a file with two of your sentences failed. It is gone. A file with no notes now says so, in the interface, in its own words.

Five more are enforced by checks that fail the build, rather than by this document:

- every practice challenge must carry `chapter` and at least one `concept` (`audit-generated.js`)
- every text colour must clear WCAG AA, no text below 12px, no container gap below 12px (`check-ui.js`)
- no file may contain double-encoded text or invalid UTF-8 (`fix-encoding.js`, also a pre-commit hook)
- nothing exists for a chapter that is still being written — **neither in the generated content nor in your notes** (`check-in-progress.js`, which checks both, and `generate.js`, which compares `src/` byte for byte)
- the generated content has a valid shape (`audit-generated.js`)

A rule that lives only in a document gets forgotten. A rule that fails the build cannot be.

### Where the checks run, and why it matters

There are two ways the dashboard gets regenerated, and for a long time **only one of them was checked**.

| Path | What runs |
|---|---|
| **`npm run revise`** | `generate.js` → generate → **`check-structure.js`** (the fast checks, about a second) → **rolls back and refuses to continue** if anything fails |
| **Click Apply** | `approve.js` → generate → **`verify.js`** (everything, including the checks that compile and run Java) → rolls back if anything fails |

The split is deliberate: the fast checks run every time, the Java-compiling ones run on approve.

**The gap that made the in-progress rule unreliable:** `npm run revise` runs `generate.js` with `--propose`, which **writes the generated files and then opens the dashboard**. It never ran a check. So a generator that emitted content for the chapter being written left that content on disk and live in the dashboard, and nothing said a word. Apply was protected; the everyday path was not.

Proven by breaking a generator on purpose: with the gate removed, `npm run revise` now reports the failure, **restores all six generated files byte for byte**, and refuses to open anything. The rollback covers `data/practice-expectations.js` too — it is written by the fill step and read by the next run, so leaving it out meant a rollback restored the challenges but kept a fingerprint computed from the rejected version.

**And the checks only judge what was just produced.** When `--propose` finds authored content waiting, it reports it and exits **without writing anything**, so the files on disk are your last *approved* version. Checking those means checking history, and it deadlocks: the check fails on the old content, so the review page never opens, so you can never Apply the change that would make it pass. So `generate.js` compares the generated files against their pre-run bytes and, when nothing was rewritten, says so and stops. That is also the honest answer to "I ran revise and nothing changed" — there was nothing new to check.

### The guard that watches your notes

One more, added because the in-progress rule kept failing in a way no output check could see.

`generate.js` takes a **byte-for-byte copy of `src/`** before it runs and compares it after. If a generator changes a single byte of your notes, the run fails, **puts your notes back**, and refuses. Proven by making a generator write one file into `src/`: the run named it, deleted it, restored the generated files, and exited non-zero.

This is the one that closes the mechanism rather than the symptom. A generator that writes prose, a marker, an exercise file, or something nobody has thought of yet is caught identically, because the question is *"did any byte here change?"* rather than *"does this look like something I would generate?"*. The second question is the one that produced several confident, wrong features earlier in this project.

**What it cannot catch, said plainly:** plain prose written into your notes by hand has no marker, so a paragraph I wrote and a paragraph you wrote are indistinguishable to a machine, and keyword matching is exactly the unreliable approach already measured and rejected twice here. So the marker half is checked by `check-in-progress.js` and the pre-commit hook, and prose is covered by the rule that the tool never writes into `src/` — which the byte comparison now enforces.

### Why the last one exists, and what it taught

The in-progress rule was introduced correctly and applied badly: it was added at the **two call sites** being looked at, and there are **seven generators** that produce chapter-scoped content. Five were covered by accident, because they feed one array that happens to be filtered by a single flag. Two were not covered at all, so the chapter being written shipped a generated challenge.

Three things follow, and they are worth remembering:

1. **A cross-cutting rule applied by hand at some call sites and not others will be applied incompletely.** The fix is a choke point or a check, not more care.
2. **Documentation written from the implementation inherits the implementation's gaps.** This section originally listed questions and takeaways and not challenges, because it was written by reading the code I had just written. It could not have revealed the bug. A document derived from an implementation cannot audit that implementation.
3. **An assumption that has always held is untested.** The scoping fallback `scoped.length > 0 ? scoped : all` was written when every chapter happened to have a challenge. Removing the in-progress chapter's challenge exposed it: the lab said "Chapter 15: Composition" and displayed a Chapter 2 challenge. Removing a thing can break the assumptions built on it.

So the check enumerates the **output** rather than trusting the code. It discovers every chapter-scoped array and every chapter-keyed object in the generated files, and fails if any entry belongs to a chapter still being written. A generator added tomorrow is covered automatically. It also fails when it finds *no* in-progress chapter, because that means the rule changed and the check has quietly stopped testing anything.

## Editing These Files: Watch The Encoding

**Windows PowerShell 5.1's `Get-Content` reads a file with no BOM as Windows-1252, not UTF-8.** Read a UTF-8 file that way, write it back with `Set-Content -Encoding UTF8`, and every multi-byte character is stored permanently wrong: one em-dash becomes three wrong characters, a tick becomes three, an emoji becomes a run of them. What you see is a run of accented letters and symbols where a dash or a tick should be — the character U+00E2 followed by U+20AC followed by U+201D, in place of a single em-dash.

This happened to `app.js`, `index.html` and `style.css`, in 76 places, and was fixed by `npm run fix:encoding`.

**To edit these files safely, use one of these:**

| | |
|---|---|
| The editor or the `edit` tool | reads and writes UTF-8 correctly |
| `[System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)` | when a script must do it |
| `Set-Content -Encoding UTF8` | safe to write, but only if the read was correct |
| **`Get-Content -Raw` alone** | **not safe** on a file without a BOM |

**`npm run check:encoding` catches it**, and it now runs in **two** places:

1. Inside `npm run revise`, with the other checks.
2. **As a git pre-commit hook**, which is the one that matters. A guard that depends on remembering to run it is not a guard — proven, not assumed: a file with 76 double-encoded characters was committed straight through because the check was never invoked. The hook is version-controlled in `scripts/githooks/pre-commit` and installed with `git config core.hooksPath scripts/githooks`.

The hook checks only the cheap, unambiguous things, so it takes under a second and is never worth bypassing. The full suite stays in `npm run verify`, because it compiles Java and belongs with a deliberate action.

**It catches two different kinds of damage**, because they have different causes and one used to hide behind the other:

| | |
|---|---|
| **double-encoded** | Text read with the wrong codepage and written back. The characters are all valid, which is why it renders as odd letters rather than boxes. **Repairable** with `npm run fix:encoding`. |
| **invalid UTF-8** | Bytes that are not valid UTF-8 at all, shown as `U+FFFD`. Not repairable automatically. Measured: a file with a stray `0xE2` byte passed the double-encoding check silently, which is why this second check exists. |

It also reports C1 control characters (`U+0080`–`U+009F`), which are never valid in source.

If it fires: `npm run fix:encoding` reverses the double-encoding exactly, because the wrong characters are all representable in Windows-1252, so encoding them back recovers the original bytes. It **refuses to write** if a repair would lose a character or leave damage behind — which is what protected `rules.md` when a stray example tripped the check.

**What is still not protected, honestly:**

- `git commit --no-verify` bypasses the hook. Nothing can stop that.
- A file edited and left uncommitted can hold damage until the next check runs.
- The double-encoding pattern is specific to **Windows-1252**. If this machine's ANSI codepage were something else, the wrong characters would differ. The invalid-UTF-8 check is codepage-independent and would still catch the worst cases.

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
- **Comparison tables are your content.** A markdown table in your notes becomes a real table in Quick Revision. None is generated, because writing one would mean putting the tool's words into your notes. The ledger tells you which chapters have none; add one only where a comparison is genuinely worth keeping.
- **Revision Bank**: one place for everything the author has written notes for. Filter by chapter, by free text, by level (Easy, Medium, Hard), by type (OCJP, Tricky, Concept, Predict, Fill Blank, Written) and by concept, read the notes, or start a quiz directly from the selection. It is built from `CONCEPTS_DATA`, so a chapter that has no source files can never appear in it.
- **Concept filter**: questions are tagged with the concepts of the topic file they came from, so inside Strings the StringBuilder questions and the equals/== questions can be told apart. The dropdown lists only concepts that can match the current chapter, with a count.
- Chapter and grand quizzes with interview, OCJP, concept, code-completion, and output-prediction questions.
- **The Revision Bank is the one place you choose what to be tested on.** It has five ready-made presets at the top — Everything, OCJP only, Tricky only, Interview, Concept drill — and below them the filters that express everything else: chapter, free text, concept, level and type. A preset just sets those filters, so what you see listed is what you are tested on. There used to be a separate Revision Quizzes screen with the same four quizzes as cards and a fifth card that was a button into this one; its filters were also duplicated on the quiz start page as 11 pills. Both are gone. The start page is now the confirmation: how many questions, how long, and Start.
- A **Questions** choice beside the Start button: 10, 20, 40 or all.
- **Quiz This Topic** starts a quiz from the single topic open in the Notes view.
- Per-chapter score breakdown after a mixed quiz, weakest chapter first.
- **Practice Lab honesty**: every challenge is labelled **Auto-checked** (your method is run against the recorded expected values) or **Self-check** (no automatic verification, verify it yourself). Code the checker cannot run is reported as "could not be checked", never as a wrong answer.
- OCJP questions attached to the topic they belong to, so they can be revised topic by topic, chapter by chapter, or centrally from the Revision Bank.
- Wrong-answer concept review linked back to the exact source topic.
- **Mastery view**: what you are weak at, weakest concept first, with exam readiness, level unlocking, one merged review queue and a "study next" nudge. Built entirely from the answers you have already given, so it works on existing history. It also carries the two things the retired Coverage screen was for: **Notes that could use an example** — the rules in your notes that state a constraint with no code sample beside them, grouped by chapter and file, each file name a button that opens it — and **Suggested additions**, listed read-only, because accepting one writes to your files and that stays in the review page.
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

`npm run revise` and `npm run approve` both run `scripts/generate.js`, which regenerates everything in the order it has to happen:

1. `derive-code-questions.js` — compiles your note code blocks and records what they print. Cached against a fingerprint of the blocks, so it is a no-op when nothing changed.
2. `parse-concepts.js` — writes `data.js`, `questions.js`, `practice.js` and `deep-challenges.js` from your notes.
3. `fill-practice-expectations.js` — reads the challenges step 2 just wrote, computes the expected value by calling your own method, and validates it against the practice lab's verifier.
4. `parse-concepts.js` again — only when step 3 produced a new value, so the dashboard picks it up.
5. `coverage.js` — recomputes the ledger and writes `coverage.md` and `coverage-data.js`.

They then run every check, in order, and refuse to apply if any fails:

| Check | What it guarantees |
|---|---|
| `audit-generated.js` | The shape of the data: ids, topic paths, answer shapes, no marker leaked into the notes, no note line lost. |
| `check-practice.js` | Every auto-checked challenge runs against your own solution, so none can reject correct code. |
| `check-questions.js` | Every question about output is compiled and run, and the real output is compared with the answer marked correct. |
| `check-bank.js` | Every hand-researched OCJP question marks the answer the bank intends, and every wrong option says why it is wrong. |
| `check-quality.js` | Every question gives feedback on a wrong choice, and none gives the answer away without reasoning. |
| `check-ui.js` | Every text colour clears WCAG AA against its own theme background, no `font-size` is below 12px, and no container gap is below 12px. Chips, badges and tags are excluded on purpose. |
| `coverage.js --check` | **Fails** on a chapter with no questions, no easy question, no hard question, or no takeaways; on a Quick Revision syntax snippet or badge that is not the chapter's own; and on a concept your notes cover that no question tests. **Warns** when a topic has no question of its own, and when a chapter is short of the OCJP target. |

The two tiers are deliberate. A **failure** is a defect: something a learner could not revise. A **warning** is a target, or something you write rather than something the tool generates, so it tells you what to write next without blocking you.

A topic with no question was a **failure** for a while, and moving it to a warning is worth explaining, because the reason it was wrong is instructive. The parser used to invent three sentences of its own prose for any file with no notes, and the question generator collected every note line except tables — so the tool wrote three sentences about a class and then asked you *"Which of the following are TRUE about Computer Case?"* with those sentences as the correct options. The check therefore **passed for a file with nothing in it** and **failed for a file with two of your own sentences**, because the generator needs three. It was measuring the generator's output, not your notes. With the invented text gone, "this topic has no question" is a true and useful statement about what to write next, so it is a warning.

The coverage check reports **"every topic is covered"** when every topic of a finished chapter has material of its own. A topic counts as covered when it has a question, a generated practice challenge, or — for a file whose notes open with `Challenge:` or `Deep Problem:` — is an exercise you wrote and solved yourself. Those exercise files are listed separately, because there is nothing for the tool to generate for them.

**The work list and the OCJP list cover finished chapters only.** They did not, for a long time: the flags and the totals were filtered by the in-progress rule and these two were not, so the ledger told the author to go and write notes and practice for the chapter he was sitting in front of. Both are filtered now, and the chapter being written gets its own line — *"still being written, not judged, nothing generated"*.

## Where the ledger lives

There is no Coverage screen any more. It was a ninth view, and almost everything it reported was a false alarm: its work list and its OCJP list were entirely the chapter being written, its "needs work" flags were your own content, and 42 of its 50 suggestions were complaints that an exercise file used the thing it was an exercise in. A page of false alarms teaches you to ignore it.

The ledger itself is kept, and it is what you read:

| | |
|---|---|
| `revision-dashboard/coverage.md` | The full ledger, written on every run |
| The terminal | The same, printed by `npm run revise` and `npm run verify` |
| `coverage.js --check` | The enforcement, run inside `npm run verify` and `npm run revise` |
| **Mastery → Notes that could use an example** | The one part that had nowhere else to go: the rules with no example beside them, as the lines themselves, grouped by chapter and file |

`coverage-data.js` used to carry the whole ledger — every chapter, a row per topic, the work list, the OCJP list, the exercise list, the Quick Revision counts — because the screen rendered all of it. It now carries only what Mastery reads: the rules without an example, their counts, the concept summary, and which chapter is still being written. That took it from 3,267 lines to 900.
