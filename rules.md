# Java Revision Dashboard — Authoring & Mastery Rules

This file governs how to write Java source comments, how auto-generation works,
and the philosophy behind the note and question quality standard.
Read this before adding any new topic.

---

## Philosophy: Write to become a champion, not just to pass

> "Tell me and I forget. Teach me and I remember. Involve me and I learn." — Benjamin Franklin

The goal is **deep mastery**, not rote memorization. Every note should answer:
- **What** is this concept?
- **Why** does it exist?
- **How** is it used in practice?
- **Where** does it trip developers up? (gotchas)
- **How** is it tested in interviews / OCJP exams?

---

## Golden rule

> **Write for a student, not a compiler.**
> Every comment should explain *why* or *what it means*, not just *what the code says*.

---

## Where to put comments

### Overview / big-picture notes → BEFORE the class declaration

```java
// Java is a statically-typed, object-oriented language.
// Every program starts execution from the main() method.
// The JVM (Java Virtual Machine) compiles .java files to bytecode (.class).

public class HelloWorld {
    ...
}
```

Block comments also work:

```java
/*
 * Variables must be declared with a type before use.
 * Java is strongly typed — you cannot assign a String to an int.
 * Primitive types (int, double, boolean) live on the stack.
 */
public class VariablesInJava {
    ...
}
```

These become the **Overview** section in the dashboard.

---

### Key Takeaways → inline `//` comments INSIDE the class body

```java
public class OperatorsInJava {
    public static void main(String[] args) {
        int result = 15 + 12; // 15 and 12 are operands; + (plus) is the operator
        int myVar = 5;
        myVar += 10; // += is shorthand for myVar = myVar + 10
        myVar -= 3;  // -= is shorthand for myVar = myVar - 3
    }
}
```

These become **Key Takeaways & Annotations** bullets.

---

## Comment quality checklist

### DO
- [x] Use complete sentences with subject + verb + meaning
- [x] Explain WHY the concept matters, not just WHAT the code does
- [x] Mention gotchas and common mistakes (parser flags them as callouts)
- [x] Reference related concepts (e.g. "Unlike Python, Java requires explicit types")
- [x] Use `/* */` block comment before the class for multi-line overview
- [x] Keep each bullet to one clear, complete idea
- [x] Include real-world analogies where helpful (Head First Java style)
- [x] Note OCJP exam traps inline: "// OCJP trap: ..."

### DON'T
- [ ] Don't put bare method calls or signatures in comments
- [ ] Don't use decorative dividers (`---`, `***`) as standalone lines
- [ ] Don't write comments that just repeat the variable/method name
- [ ] Don't leave `// TODO`, `// FIXME`, or URL-only lines — they are skipped
- [ ] Don't leave `/* */` blocks that contain only code — filtered out

---

## Gotcha / warning keywords (auto-flagged in Quick Revision)

Lines containing these words become **gotcha callouts** (red highlight in dashboard):

```
gotcha  pitfall  warning  caution  note  remember
important  trick  overflow  avoid  careful  trap  ocjp
```

Use them intentionally:
```java
// Important: integer division truncates; use (double) cast to get decimal results
// Pitfall: String == String compares references, not values — use .equals() instead
// Warning: overflow occurs silently when an int exceeds 2,147,483,647
// OCJP trap: String.concat() returns a new String; the original is unchanged
```

---

## OCJP-style tricky notes to include per topic

The OCJP/OCP exam tests edge cases. For each topic, include at least one note about the
tricky exam-style behavior. Examples by chapter:

### Strings / Primitives
- `// OCJP trap: String literals share the String Pool — "hello" == "hello" is true, but new String("hello") == new String("hello") is false`
- `// OCJP trap: String.concat() and toUpperCase() return NEW Strings; the original is unchanged`
- `// OCJP trap: int division truncates — 5/2 = 2, not 2.5`
- `// OCJP trap: Integer cache — Integer a = 127; Integer b = 127; a == b is true (cached). But Integer a = 128; a == b is false (different heap objects)`

### Operators
- `// OCJP trap: a++ uses then increments; ++a increments then uses — in expressions this matters`
- `// OCJP trap: short-circuit — if left side of && is false, right side is NOT evaluated (no exception thrown)`

### OOP / Inheritance
- `// OCJP trap: method calls use runtime type (dynamic dispatch); field access uses compile-time (reference) type`
- `// OCJP trap: constructors chain upward — super() is called implicitly if not written explicitly`
- `// OCJP trap: overloading is resolved at compile time; overriding is resolved at runtime`
- `// OCJP trap: Java is always pass-by-value — passing an object passes the reference value, not the object itself`

### Exception Handling
- `// OCJP trap: finally ALWAYS runs — even after a return statement`
- `// OCJP trap: NullPointerException is unchecked (extends RuntimeException); IOException is checked`

### Switch
- `// OCJP trap: without break, execution falls through to the next case — classic switch pitfall`

### Loops
- `// OCJP trap: a variable declared in for(int i=...) is scoped to that loop only — not accessible outside`

---

## Adding custom quiz questions with @quiz / @answer

Write your own quiz questions directly in the Java source file.
They appear in the quiz bank alongside auto-generated questions.

```java
// @quiz (INTERVIEW) Is Java pass-by-value or pass-by-reference?
// @answer Java is ALWAYS pass-by-value.
// @answer For objects, the reference value is copied — not the object itself.

// @quiz (INTERVIEW TRAP) What prints: System.out.println(10 + 20 + "Java")?
// @answer 30Java — + is left-to-right: 10+20=30 (int), then 30+"Java"="30Java" (concat).

// @quiz (OCJP) What happens when byte b = 128?
// @answer Compile error — 128 exceeds byte's max value of 127.
// @answer Use int, short, or cast explicitly: byte b = (byte) 128; → gives -128 (overflow).
```

**Rules:**
- `// @quiz <question>` — one line, starts the question
- `// @answer <answer>` — one or more answer lines follow immediately
- Multiple `@answer` lines → checklist items in the self-evaluation panel
- `@quiz`/`@answer` lines are excluded from Notes/Key Takeaways — quiz bank only
- Use `(INTERVIEW)` for standard interview questions
- Use `(INTERVIEW TRAP)` for tricky gotcha-style questions
- Use `(OCJP)` prefix on the question for exam-style tricky questions

---

## OCJP questions — auto-generated by the system

The generator automatically adds OCJP-style tricky questions for chapters that cover:
- Primitive Types / Strings (string pool, immutability, type casting, integer cache)
- Operators (prefix/postfix, short-circuit evaluation)
- OOP / Classes / Inheritance (polymorphism, constructor chaining, overriding vs hiding)
- Exception Handling (finally, checked vs unchecked)
- Switch (fall-through without break)
- Loops (scope of loop variable)
- Methods (pass-by-value, overloading resolution)

These require no action from you — they appear automatically in the quiz bank.

---

## Wrong answer → Concept Review (auto feature)

When you answer a question **incorrectly**, the dashboard automatically shows:
- The relevant concept notes (up to 5 bullets from the topic's Overview)
- A highlighted review panel below the wrong answer feedback

This provides **immediate reinforcement** — you don't have to navigate away.
After reviewing, click Next Question to continue.

---

## Inspired by top Java resources

When writing notes, aim for the depth these resources bring:
- **Head First Java** — visual, analogy-based, story-driven explanations. Use analogies.
- **Effective Java (Bloch)** — focus on WHY, best practices, and what NOT to do. Add "prefer X over Y" notes.
- **Java: The Complete Reference (Schildt)** — precise, formal definitions. Keep accuracy high.
- **OCJP/OCP Study Guides** — tricky edge cases, operator precedence, scope, type promotion rules.
- **Baeldung / Oracle Docs** — practical examples; note API contract behaviours.

Format that channels these books:
```java
// Analogy (Head First style): Think of a variable as a cup — the type is the cup size,
// the value is what you pour into it. You can't pour a gallon into a teacup (int ≠ double without cast).

// Best practice (Effective Java style): Prefer StringBuilder over String concatenation in loops.
// Each + creates a new String object; StringBuilder modifies in place — far more efficient.

// OCJP trap: Integer cache covers -128 to 127. Outside this range, == on Integer objects is false.
```

---

## Adding a new topic — complete checklist

1. Create `.java` file under `src/Chapter_N_.../Sub_Chapter_1_.../`
2. Write overview comments BEFORE the class declaration:
   - What is this concept? (1-2 lines)
   - Why does it matter / real-world use?
   - At least one OCJP trap
3. Write inline comments on key lines inside the class body
4. Add `@quiz (INTERVIEW)` and `@quiz (OCJP)` pairs for tricky questions
5. Create `Sub_Chapter_2_CodingChallenge/` with beginner challenge files
6. Create `Sub_Chapter_3_DeepProblems/` with a `*DeepProblem.java` file
7. Run: `npm run revise`
8. Open `revision-dashboard/index.html` — your topic appears automatically with:
   - Notes (Overview + Key Takeaways)
   - Quick Revision flashcard (with gotchas highlighted)
   - ~12 auto-generated quiz questions
   - OCJP-style tricky questions (for matching chapter types)
   - Your custom `@quiz` questions filtered by `(INTERVIEW)`, `(INTERVIEW TRAP)`, `(OCJP)`
   - Inline concept review when you get answers wrong
   - Practice Lab entry (if filename has "Challenge")
   - Deep Problems entry (if filename has "DeepProblem")

---

## Adding a custom deep coding challenge with @challenge

For large programming problems (OOP design, algorithm challenges, multi-class systems):

```java
// @challenge Implement a Stack using an Array
// @desc Create a generic stack with: push(int value), pop() → int, peek() → int, isEmpty() → boolean
// @desc Stack should throw RuntimeException("Stack is empty") on pop/peek when empty
// @hint Use an int[] array and an int top pointer (index of last pushed element, starts at -1)
// @hint push: increment top, then assign. pop: return array[top], then decrement top
// @testcase push(5), push(3), peek() → 3 (stack unchanged)
// @testcase push(5), push(3), pop() → 3, then pop() → 5
// @testcase pop() on empty stack → RuntimeException

public class StackImplementation {
    ...
}
```

**Rules:**
- `// @challenge <title>` — one line, names the challenge
- `// @desc <line>` — one or more description lines (problem statement)
- `// @hint <line>` — optional implementation hints
- `// @testcase <input> → <expected>` — test cases shown in the Deep Problems panel
- All `@challenge` lines are excluded from Notes — only appear in the Deep Problems tab
- Deep challenges appear under the 🏆 Deep Problems tab in the Practice Lab

---

## Tag/Label system (quiz filters)

Every quiz question is automatically tagged. Use the filter pills in the quiz start screen:

| Tag | What it contains |
|---|---|
| 🎓 **OCJP** | 31+ OCJP exam-style questions — click to drill only these |
| 💼 **Interview** | 200+ open-ended technical questions |
| ⚡ **Tricky** | Gotcha/pitfall questions — edge cases that trip people up |
| 📚 **Concept** | Pure concept understanding (fill-blank, true/false) |
| 🔮 **Predict** | Predict the output questions |

**Combine with difficulty:** `OCJP` + `Hard` = only hard OCJP questions.

Each question also shows its tags as colour-coded badges during the quiz.

---

## Practice Lab overview

The Practice Lab has two tabs:

### ⌨ Coding Challenges
- 6 handcrafted challenges + 40 auto-generated from `*Challenge.java` files = 46 total
- Auto-verify: test cases run automatically in the browser (boolean/numeric return types)
- Self-check: void methods → you run in your IDE, then click "Mark as Completed"
- **Grows automatically**: every new `*Challenge.java` file → new coding challenge

### 🏆 Deep Problems
- 16 auto-generated large programming problems per chapter type
- Topics: BankAccount OOP, Shape Polymorphism, Custom Exceptions, Loop Algorithms, String Mastery, etc.
- Always self-check: implement in your IDE, verify test cases, mark done
- **Grows with `@challenge` annotations**: write a `// @challenge` in any Java file → appears here

```
src/
  Chapter_<N>_<TopicName>/           ← required prefix
    Sub_Chapter_<N>_<SubTopicName>/  ← optional
      MyJavaFile.java
```

Examples:
- `Chapter_15_Collections/Sub_Chapter_1_ArrayList/ArrayListDemo.java`
- `Chapter_16_Generics/GenericsBasics.java`

The parser handles everything else automatically.


---

## Golden rule

> **Write for a student, not a compiler.**
> Every comment should explain *why* or *what it means*, not just *what the code says*.

---

## Where to put comments

### Overview / big-picture notes → BEFORE the class declaration

```java
// Java is a statically-typed, object-oriented language.
// Every program starts execution from the main() method.
// The JVM (Java Virtual Machine) compiles .java files to bytecode (.class).

public class HelloWorld {
    ...
}
```

Block comments work too:

```java
/*
 * Variables must be declared with a type before use.
 * Java is strongly typed — you cannot assign a String to an int.
 * Primitive types (int, double, boolean) live on the stack.
 */
public class VariablesInJava {
    ...
}
```

These become the **Overview** section in the dashboard.

---

### Key Takeaways → inline `//` comments INSIDE the class body

```java
public class OperatorsInJava {
    public static void main(String[] args) {

        int result = 15 + 12; // 15 and 12 are operands; + (plus) is the operator
        // The result of addition is stored in the variable result

        int myVar = 5;
        myVar += 10; // += is shorthand for myVar = myVar + 10
        myVar -= 3;  // -= is shorthand for myVar = myVar - 3
    }
}
```

---

## Extending to other SDET projects

This entire system is plug-and-play. Use `scripts/create-project.js` to create a
mirror of this dashboard for Playwright, Cypress, JavaScript, TypeScript, or Selenium.

```bash
# New project (auto-placed as sibling of JavaConcepts):
node scripts/create-project.js PlaywrightConcepts playwright

# New project at any specific path:
node scripts/create-project.js PlaywrightConcepts playwright --target "D:\Work\PlaywrightConcepts"

# Add dashboard to an existing project (leaves src/ untouched):
node scripts/create-project.js MyProject playwright --target "D:\Work\MyProject" --dashboard-only

# See all options:
node scripts/create-project.js --help
```

Supported technologies: `javascript`, `typescript`, `cypress`, `playwright`, `selenium`

See `TEMPLATE.md` for the full bootstrap guide and technology-specific comment patterns.

These become **Key Takeaways & Annotations** bullets.

---

## Comment quality checklist

### DO
- [ ] Use complete sentences with subject + verb + meaning
- [ ] Explain WHY the concept matters, not just WHAT the code does
- [ ] Mention gotchas or common mistakes (parser treats these as special callouts)
- [ ] Reference related concepts (e.g. "Unlike Python, Java requires explicit types")
- [ ] Use `/* */` block comment before the class for multi-line overview concepts
- [ ] Keep bullet-level comments to one clear idea each

### DON'T
- [ ] Don't leave `/* */` blocks with only code inside them — these get filtered out
- [ ] Don't put bare method calls or signatures in comments (`bark();`, `void run() {`)
- [ ] Don't use decorative dividers (`---`, `***`, `===`) as standalone comment lines
- [ ] Don't write comments that just repeat the variable/method name
- [ ] Don't leave `// TODO`, `// FIXME`, or URL-only lines — they are skipped

---

## Gotcha / warning keywords (auto-flagged in Quick Revision)

The parser treats lines containing these words as **gotchas** (shown in red in the dashboard):

```
gotcha  pitfall  warning  caution  error  note  remember
important  trick  overflow  avoid  careful  trap
```

Use them intentionally:

```java
// Important: integer division truncates; use (double) cast to get decimal results
// Pitfall: String == String compares references, not values — use .equals() instead
// Warning: overflow occurs silently when an int exceeds 2,147,483,647
```

---

## Adding custom quiz questions with @quiz / @answer

You can write your own quiz questions directly in any Java source file.
They appear in the quiz bank alongside the 5 auto-generated questions.

```java
// @quiz What does "immutable" mean for Strings in Java?
// @answer A String cannot be changed after creation. Any modification creates a new String object.

// @quiz What is the difference between == and .equals() for Strings?
// @answer == compares object references in memory; .equals() compares the actual character content.
// @answer Always use .equals() when comparing String values — == will fail for non-literal Strings.
```

**Rules:**
- `// @quiz <your question>` — one line, starts the question
- `// @answer <answer text>` — one or more lines immediately follow
- Multiple `@answer` lines are joined as key points in the model answer checklist
- You can add as many `@quiz`/`@answer` pairs as you want per file
- `@quiz`/`@answer` lines are **excluded** from Notes/Key Takeaways — they only appear in the Quiz

---

1. Create a new `.java` file under `src/Chapter_N_.../(Sub_Chapter_N_.../)`
2. Write overview comments (as `//` lines or `/* */` block) BEFORE the class declaration
3. Write inline `//` comments on key lines inside the class body
4. Run: `npm run revise`
5. Open `revision-dashboard/index.html` in a browser — your new chapter/topic appears automatically

Everything is generated:
- Notes (Overview + Key Takeaways)
- Quick Revision flashcard
- Quiz questions (SCQ, MCQ, code-fill, predict-output, interview)
- Chapter sidebar entry
- Practice Lab entry

---

## Examples of good vs. bad comments

### BAD (too thin / code-repeating)
```java
// set value
int x = 10;
// add
int y = x + 5;
```

### GOOD (educational, meaningful)
```java
int x = 10; // x is an int variable storing the value 10
int y = x + 5; // Addition: x and 5 are operands; + is the operator; result stored in y
```

---

### BAD (overview that just names things)
```java
// OperatorsInJava class
public class OperatorsInJava {
```

### GOOD (overview that teaches)
```java
// Operators are special symbols that perform operations on operands (values/variables).
// Java supports arithmetic (+, -, *, /, %), assignment (=, +=, -=), comparison (==, !=, <, >),
// logical (&&, ||, !), and bitwise operators.
// The order of operations follows standard mathematical precedence (BODMAS/PEMDAS).
public class OperatorsInJava {
```

---

## Folder naming must follow the convention

```
src/
  Chapter_<N>_<TopicName>/               ← required prefix
    Sub_Chapter_1_<ConceptName>/         ← concept notes + @quiz tags
    Sub_Chapter_2_<CodingChallenge>/     ← beginner/intermediate challenge files
    Sub_Chapter_3_DeepProblems/          ← hard real-world problem files
      MyTopicDeepProblem.java            ← naming: *DeepProblem.java
```

Examples:
- `Chapter_1_Java_Introduction/` → sidebar shows "Chapter 1: Java Introduction"
- `Chapter_15_Collections/Sub_Chapter_1_ArrayList/ArrayListDemo.java` → new chapter + sub-chapter + topic
- `Chapter_15_Collections/CollectionsOverview.java` → new chapter with single topic

The parser handles everything else automatically.
