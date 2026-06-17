# Java Revision Dashboard — Notes Authoring Rules

This file governs how comments in `src/**/*.java` should be written so that
`npm run revise` auto-generates rich, readable notes in the revision dashboard.

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

## Adding a new topic — step by step

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
  Chapter_<N>_<TopicName>/           ← required prefix
    Sub_Chapter_<N>_<SubTopicName>/  ← optional
      MyJavaFile.java
```

Examples:
- `Chapter_1_Java_Introduction/` → sidebar shows "Chapter 1: Java Introduction"
- `Chapter_15_Collections/Sub_Chapter_1_ArrayList/ArrayListDemo.java` → new chapter + sub-chapter + topic
- `Chapter_15_Collections/CollectionsOverview.java` → new chapter with single topic

The parser handles everything else automatically.
