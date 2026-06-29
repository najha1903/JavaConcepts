# JavaConcepts

A structured Java learning repository with concept notes, interview preparation, OCJP exam questions, coding challenges, and deep coding problems — all powering an interactive revision dashboard.

---

## Project Structure

```
src/
  Chapter_1_Java_Introduction/
  Chapter_2_PrimitiveTypes/
  Chapter_3_Operators/
  Chapter_5_Statements_And_Indentations/
  Chapter_6_If_Else_Statements/
  Chapter_7_Methods_In_Java/
  Chapter_8_Switch_Statements/
  Chapter_9_Java_Looping_Concepts/
  Chapter_10_WhileAndDoWhileLoopingConcepts/
  Chapter_11_Class_Object_Static_And_Instance_Fields/
  Chapter_12_Parsing_Values_Reading_Input/
  Chapter_13_Exception_Handling/
  Chapter_14_OOPSConcepts/
  Chapter_15_Strings/
revision-dashboard/     ← interactive quiz + practice dashboard
scripts/                ← auto-generates dashboard data from src/
```

Each chapter follows this sub-chapter pattern:
```
Chapter_N_TopicName/
  Sub_Chapter_1_ConceptFile/        ← concept notes + @quiz tags
  Sub_Chapter_2_CodingChallenge/    ← beginner/intermediate challenges
  Sub_Chapter_3_DeepProblems/       ← hard real-world problems
```

---

## What's Inside Each Chapter

| Layer | What it contains |
|---|---|
| **Concept file** | Inline `//` notes, block comments, `@quiz (INTERVIEW)`, `@quiz (OCJP)` tags |
| **Coding Challenges** | Standalone `.java` files — one problem per file, working solution included |
| **Deep Problems** | Harder real-world problems (e.g. shape hierarchy, library system, robust calculator) |

---

## Quiz Tag Format

Write quiz questions directly in any `.java` file:

```java
// @quiz (INTERVIEW) Is Java pass-by-value or pass-by-reference?
// @answer Java is ALWAYS pass-by-value.
// @answer For objects, the reference value is copied — not the object itself.

// @quiz (INTERVIEW TRAP) What prints: System.out.println(10 + 20 + "Java")?
// @answer 30Java — + is left-to-right, so 10+20=30, then 30+"Java"="30Java".

// @quiz (OCJP) What happens when byte b = 128?
// @answer Compile error — 128 exceeds byte's max value of 127.
```

Tags: `(INTERVIEW)`, `(INTERVIEW TRAP)`, `(OCJP)` — all appear in the quiz bank filtered by type.

---

## Revision Dashboard

```bash
npm run revise
```

Then open `revision-dashboard/index.html`. The dashboard auto-generates:
- **Notes** — Overview + Key Takeaways from source comments
- **Quiz Bank** — Interview, OCJP, tricky questions from `@quiz` tags
- **Practice Lab** — All `*Challenge.java` files become coding challenges
- **Deep Problems** — All `*DeepProblem.java` files appear under 🏆 Deep Problems

---

## Authoring Guide

See [`rules.md`](rules.md) for the full guide on:
- Where to put comments (overview vs inline)
- Comment quality checklist (DO / DON'T)
- Gotcha keywords that get highlighted in the dashboard
- `@quiz` / `@answer` / `@challenge` tag rules
- OCJP-style notes to include per topic

---

## Adding a New Chapter — Quick Checklist

1. Create `src/Chapter_N_TopicName/Sub_Chapter_1_Concept/MyFile.java`
2. Write overview comments **before** the `public class` line
3. Add `// @quiz (INTERVIEW)` and `// @quiz (OCJP)` tags
4. Create `Sub_Chapter_2_CodingChallenge/` with challenge files
5. Create `Sub_Chapter_3_DeepProblems/` with a deep problem file
6. Run `npm run revise` — everything appears in the dashboard automatically
