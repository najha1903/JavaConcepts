# Notes Review Queue

Generated from the current notes. Proposals are optional, preserve executable Java, and require individual approval.
This is a conservative scan, not a guarantee that every sentence is clear or correct. Unrecognized wording needs editorial review.

Topics scanned: 134. Wording proposals: 6. Review findings: 5.

## Chapter 6: Methods In Java: Methods Challenge Problem

clarification: "Much better way" does not say what is better. The improvement is the default set once and the single exit point.

Before:
```text
Alternative and much better way to return position value
```
After:
```text
Alternative: set the default position once and let each condition override it, so the method has a single return at the end.
```

## Chapter 13: OOP Concepts: Car

clarification: "Derived in some way" does not say what is derived or from what. Naming the calculation makes the point usable.

Before:
```text
There could be getter methods for fields that are not really declared on your class but that are derived in some way.
```
After:
```text
A getter can also return a value that is not a stored field at all. For example, a getTotal() method could return quantity * price, working the value out each time instead of storing it.
```

## Chapter 13: OOP Concepts: Constructor Concept

clarification: "A good way of doing things" names neither the practice nor the benefit. The sentence continues on the next line, so the replacement joins it grammatically.

Before:
```text
That's a good way of doing things, and it often leads to good coding because it avoids
```
After:
```text
Keeping the initialization in one constructor is better because it avoids
```

## Chapter 13: OOP Concepts: Super Keyword Use Example

accuracy: "Memory is fully used" describes running out of heap, not the stack. Unbounded recursion exhausts the call stack and throws StackOverflowError.

Before:
```text
What that means is that the method would call itself forever, or until memory is fully used, crashing the program. That's why we need the super keyword - so that we can call a method with the same name from a parent class.
```
After:
```text
What that means is that the method would call itself forever, until the call stack runs out of space and Java throws StackOverflowError. That's why we need the super keyword - so that we can call a method with the same name from a parent class.
```

## Chapter 13: OOP Concepts: Plain Old Java Object

clarification: "Some extra rules" names nothing. Listing the conventions makes the distinction from a plain POJO usable.

Before:
```text
ii)  A JavaBean is just a POJO with some extra rules applied to it.
```
After:
```text
ii)  A JavaBean is a POJO with extra conventions: private fields, a public no-argument constructor, and public getter and setter methods for its properties.
```

## Chapter 13: OOP Concepts: Student Record

clarification: "Any kind of" is filler that carries no meaning, and the sentence continues on the next line so the replacement has to join it.

Before:
```text
This method has the same name and type of the component, but it doesn't have any kind of special
```
After:
```text
This method has the same name and type as the component, and it has no special
```

- Chapter 9: While And Do While Looping Concepts / Number To Words Coding Challenge (explanation): Code-only topic Review whether the parent lesson explains this supporting class; add a local explanation only if needed.
- Chapter 9: While And Do While Looping Concepts / Perfect Number Coding Challenge (explanation): Code-only topic Review whether the parent lesson explains this supporting class; add a local explanation only if needed.
- Chapter 13: OOP Concepts / Main (explanation): Code-only topic Review whether the parent lesson explains this supporting class; add a local explanation only if needed.
- Chapter 13: OOP Concepts / Constructor Concept (clarity): That's a good way of doing things, and it often leads to good coding because it avoids having to duplicate code by duplicating initialization in more than one place. Name the behavior, conditions, and result explicitly. Check nearby notes before adding an example.
- Chapter 13: OOP Concepts / House (explanation): Code-only topic Review whether the parent lesson explains this supporting class; add a local explanation only if needed.
