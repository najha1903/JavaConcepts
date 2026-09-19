// ============================================================================
// The OCJP question bank — researched and written by hand.
//
// WHY THIS FILE EXISTS, SEPARATELY FROM THE NOTES
//
// The questions generated from the notes are worth having: they test what the
// author actually wrote. They cannot be exam-grade, because a generator can only
// reformat his sentences. An exam question needs a distractor that is wrong for a
// REASON an examiner would test - the field that is not polymorphic, the catch
// block that can never run, the overload that loses to widening. That has to be
// researched and written, so it lives here rather than being invented at runtime.
//
// The questions are original. They are written against the published objectives
// for Oracle's 1Z0-819 exam, which are public syllabus. Oracle's actual exam
// questions are copyrighted and covered by an exam NDA, and this repository is
// public, so none of them are reproduced here.
//
// HOW TO ADD ONE
//
//   {
//     id: 'ch15-parent-constructor',        unique, kebab-case, never reused
//     chapter: 'Chapter 15: Composition',   must match a chapter name exactly
//     concepts: ['constructors'],           tags it for the concept filter
//     difficulty: 'easy' | 'medium' | 'hard'
//     question: '...',                      the stem
//     code: `...`,                          optional, a real compiling snippet
//     options: [{ text, correct?, why? }],  `why` explains that wrong option
//     explanation: '...'                    why the right answer is right
//   }
//
// Every snippet in here must COMPILE and RUN as written, and the stated answer
// must be the real one. `npm run revise` checks the ones that can be executed.
//
// A question is written for one chapter. `concepts` is what makes it findable:
// the concept filter and the coverage ledger both key on it, so when a later
// chapter covers the same concept the question can be moved to it rather than
// rewritten.
// ============================================================================

const OCJP_BANK = [

  // ── Chapter 1: Java Introduction ─────────────────────────────────────────
  {
    id: 'ch01-main-signature',
    chapter: 'Chapter 1: Java Introduction',
    concepts: ['statements'],
    difficulty: 'easy',
    question: 'Which of these methods is a valid entry point that the JVM will run when the class is started?',
    options: [
      { text: 'public static void main(String[] args)', correct: true },
      { text: 'public static void main(String args)', why: 'The parameter must be an array. `String args` is a single String, so this is a different signature and the JVM ignores it.' },
      { text: 'public static int main(String[] args)', why: 'The return type must be void. A main that returns int is not an entry point, so the class starts and the JVM reports that no main method was found.' },
      { text: 'public void main(String[] args)', why: 'The method must be static. Without static there is no instance to call it on, so the JVM cannot invoke it.' }
    ],
    explanation: 'The entry point must be public, static and void, and take a String array. `String[] args` and `String args[]` are the same signature; `String args` is not. Note that a class can hold several methods called main as long as their parameters differ, and only the one matching this signature is the entry point.'
  },
  {
    id: 'ch01-file-name-must-match',
    chapter: 'Chapter 1: Java Introduction',
    concepts: ['statements'],
    difficulty: 'medium',
    question: 'A file is named Demo.java and contains exactly this. What does javac Demo.java do?\n\npublic class Test { }',
    options: [
      { text: 'Fails to compile: a public class must be declared in a file with the same name', correct: true },
      { text: 'Compiles and writes Test.class', why: 'The compiler never reaches the point of producing a class file. The file name rule is checked first.' },
      { text: 'Compiles, but writes Demo.class', why: 'The class file is named after the class, not the file, but this never gets that far.' },
      { text: 'Compiles only if Test is changed to non-public', why: 'This is the fix, not what happens. As written, with public, it is a compile error.' }
    ],
    explanation: 'A public class must live in a file whose name matches it exactly, including case. Removing `public` makes the same file legal, and then the class file is still named after the class, so Test.class is produced.'
  },
  {
    id: 'ch01-compile-then-run',
    chapter: 'Chapter 1: Java Introduction',
    concepts: ['statements'],
    difficulty: 'medium',
    question: 'You have written HelloWorld.java and it compiles without error. Which command runs it?',
    options: [
      { text: 'java HelloWorld', correct: true },
      { text: 'java HelloWorld.class', why: 'This is the single most common beginner mistake. The argument to java is a class NAME, and only javac takes a file name. Writing .class makes java look for a class called HelloWorld.class, which does not exist.' },
      { text: 'java HelloWorld.java', why: 'java runs a compiled class, not a source file. Passing the source name makes it look for a class called HelloWorld.java.' },
      { text: 'javac HelloWorld', why: 'javac compiles. It also needs the extension, so this fails to find the file as well as doing the wrong job.' }
    ],
    explanation: 'javac takes a file name and writes a class file. java takes a class name, which is the file name without the extension, and finds the class on the classpath. That is why `javac HelloWorld.java` is followed by `java HelloWorld`.'
  },
  {
    id: 'ch01-one-public-class',
    chapter: 'Chapter 1: Java Introduction',
    concepts: ['statements'],
    difficulty: 'hard',
    question: 'Demo.java contains exactly these two classes. What happens when it is compiled?\n\nclass Helper { }\npublic class Demo { }',
    options: [
      { text: 'It compiles, and two class files are produced: Demo.class and Helper.class', correct: true },
      { text: 'It fails to compile: only one class is allowed per file', why: 'Java allows any number of classes in one file. What it restricts is how many may be public.' },
      { text: 'It compiles, but Helper.class is not produced because Helper is not public', why: 'Every class that is used gets a class file. Being non-public affects who can see it, not whether it is compiled.' },
      { text: 'It fails to compile because Helper must also be public', why: 'Making Helper public here would actually be the error: two public classes in one file is not allowed, and a public Helper would need its own file.' }
    ],
    explanation: 'A file may hold any number of classes, but at most one may be public, and that one must match the file name. javac compiles every class it finds, so one source file can produce several class files. This is how a file can hold a public class plus the small helper classes only it needs.'
  },

  // ── Chapter 6: Methods In Java ───────────────────────────────────────────
  {
    id: 'ch06-widening-beats-boxing',
    chapter: 'Chapter 6: Methods In Java',
    concepts: ['overloading', 'casting', 'wrappers'],
    difficulty: 'hard',
    question: 'What does this print?\n\npublic class Demo {\n    static void show(long n) { System.out.print("long"); }\n    static void show(Integer n) { System.out.print("Integer"); }\n\n    public static void main(String[] args) {\n        int x = 5;\n        show(x);\n    }\n}',
    options: [
      { text: 'long', correct: true },
      { text: 'Integer', why: 'Reaching the Integer overload needs boxing, which Java tries only in a later phase. Widening to long succeeds in the earlier phase, so that overload wins before boxing is ever considered.' },
      { text: 'It fails to compile: the call is ambiguous', why: 'The two overloads are not equally good. Overload resolution works in phases, and the phase that allows widening succeeds, so there is no ambiguity to report.' },
      { text: 'It fails to compile: int cannot be converted to Integer', why: 'int converts to Integer by autoboxing, and to long by widening. Both are legal; the question is only which is chosen.' }
    ],
    explanation: 'Overload resolution runs in phases. Phase 1 allows widening but not boxing, so `int` to `long` is applicable and `show(long)` is chosen. Boxing is only tried in phase 2, so `show(Integer)` never gets a look. This is a favourite exam trap because the boxing overload often looks like the better match.'
  },

  // ── Chapter 10: Class, Object, Static And Instance Fields ────────────────
  {
    id: 'ch10-static-field-is-shared',
    chapter: 'Chapter 10: Class Object Static And Instance Fields',
    concepts: ['static', 'classes'],
    difficulty: 'medium',
    question: 'What does this print?\n\npublic class Demo {\n    static int count = 0;\n\n    Demo() { count++; }\n\n    public static void main(String[] args) {\n        new Demo();\n        new Demo();\n        new Demo();\n        System.out.println(Demo.count);\n    }\n}',
    options: [
      { text: '3', correct: true },
      { text: '0', why: '0 is the value the field starts at. Each constructor increments it, and the field is shared, so the increments are all visible through the same field.' },
      { text: '1', why: 'This would be the answer if count were an instance field, because each object would have its own copy starting at 0 and then incremented once.' },
      { text: 'It fails to compile: count is accessed as Demo.count', why: 'Reaching a static field through the class name is the recommended way to do it, so this compiles.' }
    ],
    explanation: 'A static field belongs to the class, not to any object. There is exactly one copy, so every constructor call increments the same variable. Making count a plain instance field instead would give each object its own copy, and printing one object\'s count would give 1.'
  },
  {
    id: 'ch10-initialisation-order',
    chapter: 'Chapter 10: Class Object Static And Instance Fields',
    concepts: ['static', 'classes'],
    difficulty: 'hard',
    question: 'What does this print?\n\npublic class Demo {\n    static int a = mark("static field");\n    int b = mark("instance field");\n\n    static { mark("static block"); }\n\n    Demo() { mark("constructor"); }\n\n    static int mark(String label) {\n        System.out.print(label + ";");\n        return 1;\n    }\n\n    public static void main(String[] args) {\n        System.out.print("main;");\n        new Demo();\n    }\n}',
    options: [
      { text: 'static field;static block;main;instance field;constructor;', correct: true },
      { text: 'main;static field;static block;instance field;constructor;', why: 'Static initialisers run when the class is first loaded, which is before main is entered. By the time main prints, the static field and static block have already run.' },
      { text: 'static field;instance field;static block;constructor;main;', why: 'Instance initialisers run per object, at construction, which is after main starts. Only the static parts run at class load.' },
      { text: 'static block;static field;main;constructor;instance field;', why: 'Static fields and static blocks run in the order they are written in the source, and instance fields are initialised before the constructor body, not after.' }
    ],
    explanation: 'Class loading runs the static fields and static blocks once, in source order, before anything else - before main is entered. Then main runs. Each `new` then runs the instance field initialisers, in source order, before the constructor body. The two rules are worth holding separately: static parts once per class load, instance parts once per object.'
  },
  {
    id: 'ch10-why-private',
    chapter: 'Chapter 10: Class Object Static And Instance Fields',
    concepts: ['encapsulation'],
    difficulty: 'medium',
    question: 'This class stores its balance in a private field and only lets it be set through setBalance. Why is the field private rather than public?\n\npublic class Account {\n    private double balance;\n\n    public void setBalance(double amount) {\n        if (amount < 0) throw new IllegalArgumentException("negative");\n        balance = amount;\n    }\n\n    public double getBalance() { return balance; }\n}',
    options: [
      { text: 'So the validation in setBalance cannot be bypassed by assigning to the field directly', correct: true },
      { text: 'Because private fields take less memory than public ones', why: 'The access modifier affects who can see the field, not how it is stored. The memory used is identical.' },
      { text: 'Because a private field cannot be read from outside the class at all', why: 'It cannot be read DIRECTLY from outside, but getBalance reads it and returns the value, so the value is available. That is the point of the getter.' },
      { text: 'Because Java does not allow public fields', why: 'Public fields are perfectly legal. They are avoided because they give up control over the value, not because they are forbidden.' }
    ],
    explanation: 'The private field plus the two accessors is encapsulation: the class decides what a valid value is, and every change goes through that decision. A public field would let any caller set a negative balance, and the check in setBalance would mean nothing because it could be skipped.'
  },

  // ── Chapter 12: Exception Handling ───────────────────────────────────────
  {
    id: 'ch12-unreachable-catch',
    chapter: 'Chapter 12: Exception Handling',
    concepts: ['exceptions', 'checked-unchecked', 'multi-catch'],
    difficulty: 'hard',
    question: 'What happens when this is compiled?\n\ntry {\n    throw new RuntimeException("boom");\n} catch (Exception e) {\n    System.out.print("Exception");\n} catch (RuntimeException e) {\n    System.out.print("RuntimeException");\n}',
    options: [
      { text: 'It fails to compile: RuntimeException has already been caught', correct: true },
      { text: 'It prints Exception', why: 'It never compiles, so nothing is printed. If the catches were reordered it would print Exception, because the first matching catch wins.' },
      { text: 'It prints RuntimeException', why: 'This is what the code looks like it is trying to do, but the compiler rejects the file before any of it can run.' },
      { text: 'It fails to compile: an unchecked exception cannot be caught', why: 'Unchecked exceptions can be caught perfectly well. The error here is about the ORDER of the catch blocks, not about RuntimeException being unchecked.' }
    ],
    explanation: 'A catch block is unreachable when a previous catch block already handles that type or a supertype of it. RuntimeException is a subclass of Exception, so the second catch can never run and the compiler rejects it. The rule is: catch from the most specific type to the most general.'
  },
  {
    id: 'ch12-finally-overrides-return',
    chapter: 'Chapter 12: Exception Handling',
    concepts: ['exceptions'],
    difficulty: 'medium',
    question: 'What does this method return?\n\nstatic int get() {\n    try {\n        return 1;\n    } finally {\n        return 2;\n    }\n}',
    options: [
      { text: '2', correct: true },
      { text: '1', why: 'The try return is evaluated first, but it is held while the finally block runs. The finally block then returns 2, and that is what the caller receives.' },
      { text: 'It fails to compile: finally cannot contain return', why: 'A return inside finally is legal. It is discouraged, precisely because it silently discards whatever the try block was returning.' },
      { text: 'It throws an exception', why: 'Nothing here throws. The confusing part is that the answer is not the value the try block appears to return.' }
    ],
    explanation: 'finally always runs, including when the try block is returning. A return in finally replaces the pending return, so the caller sees 2 and the 1 is discarded with no warning. This is why a return inside finally is treated as a defect: it hides the real result and makes the method hard to reason about.'
  },

  // ── Chapter 15: Composition ──────────────────────────────────────────────
  {
    id: 'ch15-has-a-not-is-a',
    chapter: 'Chapter 15: Composition',
    concepts: ['composition', 'inheritance', 'classes'],
    difficulty: 'easy',
    question: 'A Car class has a private Engine field. Which statement describes that relationship?',
    options: [
      { text: 'Car HAS-A Engine: the Car holds a reference to an Engine it can use', correct: true },
      { text: 'Car IS-A Engine: the field makes Car a kind of Engine', why: 'A field is not a type relationship. IS-A is created only by extends or implements, which make one type substitutable for another.' },
      { text: 'Car IS-A Engine, because Car depends on Engine', why: 'Depending on a type is not the same as being a type. Car cannot be used anywhere an Engine is expected, which is what IS-A would mean.' },
      { text: 'Car HAS-A Engine, which means Car extends Engine', why: 'These are opposites. HAS-A is composition, holding an object. extends is inheritance and creates IS-A.' }
    ],
    explanation: 'HAS-A means one object holds a reference to another and uses it, which is composition. IS-A means one type is a subtype of another, which is what extends and implements create. The test is substitutability: a Car cannot be passed where an Engine is required, so the relationship is HAS-A.'
  },
  {
    id: 'ch15-delegation-output',
    chapter: 'Chapter 15: Composition',
    concepts: ['composition'],
    difficulty: 'medium',
    question: 'What does this print?\n\nclass Engine {\n    int power() { return 100; }\n}\n\nclass Car {\n    private Engine engine = new Engine();\n    int power() { return engine.power() + 50; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Car().power());\n    }\n}',
    options: [
      { text: '150', correct: true },
      { text: '100', why: '100 is what the Engine alone reports. Car adds 50 to that value before returning, so the caller sees the total.' },
      { text: '50', why: '50 is only the part Car adds. The value returned is the Engine\'s 100 plus this 50.' },
      { text: 'It fails to compile: Car has no power field', why: 'Car declares its own power method, which calls the Engine\'s method. A method calling another object\'s method is exactly what delegation is.' }
    ],
    explanation: 'Car does not inherit from Engine. It holds one and forwards the call, then adds to the result. This is delegation: the work is done by the object that owns the behaviour, and the outer class decides how to present or adjust it.'
  },
  {
    id: 'ch15-fields-are-not-polymorphic',
    chapter: 'Chapter 15: Composition',
    concepts: ['inheritance', 'polymorphism', 'classes'],
    difficulty: 'hard',
    question: 'What does this print?\n\nclass Parent {\n    String name = "parent";\n    String getName() { return name; }\n}\n\nclass Child extends Parent {\n    String name = "child";\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        System.out.println(p.getName());\n    }\n}',
    options: [
      { text: 'parent', correct: true },
      { text: 'child', why: 'This is the trap. getName is declared in Parent, so the name it reads is Parent\'s field. Field access is resolved from the type the code is compiled in, not from the object\'s runtime type.' },
      { text: 'null', why: 'Both fields are initialised. Parent\'s name is "parent" and Child\'s name is "child", so no field is null.' },
      { text: 'It fails to compile: name is declared twice', why: 'A subclass may declare a field with the same name as a superclass field. It is legal; it simply hides the superclass field rather than replacing it.' }
    ],
    explanation: 'Methods are polymorphic, fields are not. getName is declared only in Parent, so its body was compiled against Parent, where name means Parent.name. Child declaring its own name field hides the other one but does not replace it, and since nothing overrides getName, the Parent version runs and reads the Parent field. This is one reason to keep fields private and reach them through methods.'
  },
  {
    id: 'ch15-this-then-super-order',
    chapter: 'Chapter 15: Composition',
    concepts: ['constructors', 'inheritance'],
    difficulty: 'hard',
    question: 'What does this print?\n\nclass A {\n    A() { System.out.print("A"); }\n}\n\nclass B extends A {\n    B() { System.out.print("B"); }\n    B(int n) { this(); System.out.print(n); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        new B(5);\n    }\n}',
    options: [
      { text: 'AB5', correct: true },
      { text: 'BA5', why: 'A superclass constructor always completes before the subclass body runs, and this() runs B\'s no-arg constructor first, which itself calls super() before printing B.' },
      { text: 'B5A', why: 'A is printed when the superclass constructor runs, which is at the very start of the chain, not at the end.' },
      { text: 'A5B', why: 'The this() call happens before the print of 5, so B is printed before the 5.' }
    ],
    explanation: 'The chain runs: new B(5) enters B(int), which calls this(), entering B(), which calls super() implicitly, entering A() and printing A. B() then prints B, and control returns to B(int), which prints 5. A superclass constructor always finishes before the subclass body continues, and this() must be the first statement when it is used.'
  },
  {
    id: 'ch15-parent-constructor-must-be-called',
    chapter: 'Chapter 15: Composition',
    concepts: ['constructors', 'inheritance'],
    difficulty: 'hard',
    question: 'Class A declares only this constructor. What happens if class B extends A and its constructor does not call super?\n\nclass A {\n    A(int n) { System.out.print("A" + n); }\n}',
    options: [
      { text: 'It fails to compile: A has no no-argument constructor for B to call implicitly', correct: true },
      { text: 'It compiles and calls A(int) with 0', why: 'Java never invents an argument. If a superclass has no no-argument constructor, the subclass must name which one to call.' },
      { text: 'It compiles and A\'s constructor is skipped', why: 'A superclass constructor always runs. Skipping it would leave the inherited part of the object uninitialised.' },
      { text: 'It fails to compile only if B also declares its own fields', why: 'Whether B has fields makes no difference. The requirement comes from A having no constructor that can be called with no arguments.' }
    ],
    explanation: 'When a constructor does not start with this() or super(), the compiler inserts super() with no arguments. Writing a constructor of your own removes the default one, so A here has no no-argument constructor, and the inserted call has nothing to match. B must call super with an argument, for example super(1). If A had declared both A() and A(int), B could call either one.'
  },
  {
    id: 'ch15-composition-over-inheritance',
    chapter: 'Chapter 15: Composition',
    concepts: ['composition', 'inheritance', 'encapsulation'],
    difficulty: 'medium',
    question: 'You need a Stack that stores its elements in an ArrayList, but callers must be able to use only push, pop and size. Which approach meets that requirement?',
    options: [
      { text: 'Hold a private ArrayList and expose only push, pop and size', correct: true },
      { text: 'Extend ArrayList and override get and add to throw an exception', why: 'Overriding does not remove a method. Callers can still reach every ArrayList method by treating the Stack as an ArrayList, and a subtype that refuses behaviour its supertype promises breaks the substitutability that inheritance exists to provide.' },
      { text: 'Extend ArrayList and leave the extra methods available', why: 'Then callers can call get and add, which is exactly what the requirement says must not be possible.' },
      { text: 'Hold the ArrayList in a public field so callers can reach it', why: 'This exposes the whole ArrayList to every caller, so the requirement fails for the same reason as inheriting from it.' }
    ],
    explanation: 'Inheritance publishes the superclass API as part of your type: a Stack that extends ArrayList IS an ArrayList, and every method comes with it. Overriding to throw does not help, because a caller holding an ArrayList reference can still call the real method. Composition keeps the ArrayList private and exposes only the methods you choose, which is why it is the default when the relationship is HAS-A rather than IS-A.'
  }

];

module.exports = { OCJP_BANK };
