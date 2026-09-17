// =============================================================================
// Java Revision Dashboard — Questions & Quick Revision Bank
// =============================================================================
// HOW THIS FILE IS MANAGED:
//   - QUICK_REVISION_BANK: Auto-generated from Java file comments. Regenerated
//     on every 'npm run revise'.
//   - QUESTIONS_BANK: Starter entries are auto-generated from current chapter
//     source files and regenerated on every 'npm run revise'.
//
// To update after adding new chapters: run  npm run revise
// =============================================================================

// Each question type:
//  'scq'       - Single-Choice Question (pick one)
//  'mcq'       - Multiple-Choice Question (select all that apply)
//  'codefill'  - Fill in the missing code/keyword
//  'predict'   - Predict the output (type exact output)
//  'interview' - Open-ended technical interview (self-evaluated with checklist)

const QUESTIONS_BANK = {
  "Chapter 1: Java Introduction": [
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "question": "What does this code print?",
      "code": "System.out.println(\"Hello World\");",
      "answer": [
        "Hello World"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_0-what-is-the-difference-between-jvm-jre-a",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between JVM, JRE, and JDK?",
      "modelAnswer": "JDK is for development (contains compiler javac), JRE is for running Java programs (libraries + JVM), and JVM is the execution engine.",
      "keyPoints": [
        "JDK is for development (contains compiler javac), JRE is for running Java programs (libraries + JVM), and JVM is the execution engine."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_1-why-is-java-called-platform-independent",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview"
      ],
      "question": "Why is Java called platform-independent?",
      "modelAnswer": "Java source code compiles to platform-neutral bytecode (.class), which runs on any system equipped with a compatible JVM.",
      "keyPoints": [
        "Java source code compiles to platform-neutral bytecode (.class), which runs on any system equipped with a compatible JVM."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_2-what-happens-if-the-main-method-is-decla",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What happens if the main method is declared without the `static` keyword?",
      "modelAnswer": "The code compiles cleanly, but running the class throws a runtime error indicating no entry-point main method was found.",
      "keyPoints": [
        "The code compiles cleanly, but running the class throws a runtime error indicating no entry-point main method was found."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_3-is-public-static-void-main-string-args-a",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Is `public static void main(String... args)` a valid Java entry point?",
      "modelAnswer": "Yes. Varargs syntax (`String...`) is treated as `String[]` by the JVM and is recognized as a valid main method signature.",
      "keyPoints": [
        "Yes. Varargs syntax (`String...`) is treated as `String[]` by the JVM and is recognized as a valid main method signature."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_4-which-statement-correctly-describes-how-",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview"
      ],
      "question": "Which statement correctly describes how JDK, JRE, and JVM relate to each other?",
      "options": [
        "The JDK contains the development tools and the JRE, and the JRE contains the core libraries and the JVM.",
        "The JVM contains the JRE and the core libraries.",
        "The JRE contains the JDK and the javac compiler.",
        "The three are unrelated components installed separately."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "the JVM is the innermost piece. The JRE contains the JVM, and the JVM does not contain the libraries.",
        "2": "it is the other way round. The JDK contains the JRE, and javac lives in the JDK, not the JRE.",
        "3": "they are nested, not independent. Installing a JDK also gives you a JRE and a JVM."
      },
      "explanation": "The nesting is JDK > JRE > JVM. The JDK adds development tools such as javac on top of the JRE, and the JRE provides the libraries and the JVM that runs a program.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_5-what-does-javac-produce-and-what-runs-it",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview"
      ],
      "question": "What does javac produce, and what runs it?",
      "options": [
        "It interprets the .java source line by line, leaving no intermediate file.",
        "It produces a stand-alone .exe that runs without a JVM.",
        "It compiles .java source straight into native machine code for the current operating system.",
        "It compiles .java source into platform-neutral bytecode in .class files, which the JVM executes."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "javac is a compiler, not an interpreter, and it does write .class files to disk.",
        "1": "a .class file is not an executable. It needs a JVM to run.",
        "2": "producing native code directly is not what javac does. Bytecode is the intermediate step, and that is exactly what makes the same .class file portable."
      },
      "explanation": "javac turns source into bytecode, and the JVM translates that bytecode into the native instructions of whatever machine it is running on.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_6-why-must-the-main-method-be-static",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview"
      ],
      "question": "Why must the main method be static?",
      "options": [
        "So that no subclass is able to override it.",
        "So that the method is not allowed to return a value.",
        "So that other classes are allowed to call it.",
        "So the JVM can call it on the class itself, without creating an object first."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "preventing overriding is the job of final, not static.",
        "1": "returning nothing is the job of void, not static.",
        "2": "being callable from other classes is the job of public, not static."
      },
      "explanation": "A program needs an entry point before any object exists, so main must be callable without an instance. That is what static provides.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_7-which-single-change-to-public-static-voi",
      "difficulty": "hard",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "ocjp"
      ],
      "question": "Which single change to `public static void main(String[] args)` still leaves a valid entry point?",
      "options": [
        "Adding final, as in `public static final void main(String[] args)`",
        "Removing static",
        "Removing public",
        "Changing the return type to int"
      ],
      "answer": 0,
      "whyByOption": {
        "1": "without static it becomes an instance method, so the launcher finds no entry point and the program fails at runtime.",
        "2": "the launcher requires main to be public, so removing public breaks it.",
        "3": "the return type must be void. A static int main compiles, but it is not accepted as the entry point."
      },
      "explanation": "The launcher requires a method named main that is public, static, and void, with one String[] parameter. Extra modifiers such as final are allowed, so the method is still a valid entry point.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_8-what-does-the-string-args-parameter-of-m",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview"
      ],
      "question": "What does the String[] args parameter of main actually receive?",
      "options": [
        "The list of methods declared in the class.",
        "The command-line arguments passed after the class name, each as a String.",
        "The name of the class that is being run.",
        "The lines of output the program has printed so far."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "args holds data values only. Reflection is the tool for inspecting methods.",
        "2": "the class name is used by the launcher to find the class; it is not placed inside args.",
        "3": "args is input to the program, not a record of its output."
      },
      "explanation": "args carries the values typed after the class name, for example `java HelloWorld Navneet 25` gives args[0] = \"Navneet\" and args[1] = \"25\". They are Strings, not numbers.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_9-what-actually-makes-write-once-run-anywh",
      "difficulty": "hard",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "ocjp"
      ],
      "question": "What actually makes \"Write Once, Run Anywhere\" possible?",
      "options": [
        "The JVM is a single build that runs on every operating system unchanged.",
        "Bytecode is already native machine code, so nothing has to be translated.",
        "The .java source file is copied to the new machine and compiled there by javac.",
        "The compiler produces platform-neutral bytecode, and each platform's own JVM translates it into that machine's instructions."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "the JVM itself is not portable in that sense; there is a different JVM implementation for each platform, and installing one is how a machine gains the ability to run Java.",
        "1": "bytecode is an intermediate form, not native code. Translating it is precisely what the JVM does.",
        "2": "copying source and recompiling is possible, but it is not the mechanism. The whole point is that the compiled .class file is already portable."
      },
      "explanation": "The portable artefact is the .class file. The JVM is platform-specific, and that is the piece that adapts the same bytecode to each operating system.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_10-the-program-below-is-run-with-java-hello",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview"
      ],
      "question": "The program below is run with:  java HelloWorld Java notes",
      "code": "public class HelloWorld {\npublic static void main(String[] args) {\nSystem.out.println(args.length);\nSystem.out.println(args[0]);\n}\n}",
      "options": [
        "It prints 2 and then notes.",
        "It does not compile, because args is never assigned a value.",
        "It prints 2 and then Java.",
        "It prints 1 and then Java."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "args[1] is \"notes\". Index 0 is always the first argument.",
        "1": "the JVM creates args and fills it in. You never assign it yourself.",
        "3": "the length counts every argument, and two were given."
      },
      "explanation": "args receives the words typed after the class name, in order. Two words were supplied, so the length is 2, and args[0] is the first one, \"Java\".",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_11-this-source-is-saved-and-you-run-javac-h",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview"
      ],
      "question": "This source is saved and you run javac HelloWorld.java. What happens?",
      "code": "public class HelloWorld {\npublic static void main(String[] args) {\nSystem.out.println(\"Hello\")   // semicolon missing\n}\n}",
      "options": [
        "javac reports a compile error, no .class file is produced, and nothing runs.",
        "The .class file is produced and the program runs, printing Hello.",
        "The compiler inserts the missing semicolon and compiles normally.",
        "javac still produces the .class file and the error appears only when you run it."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "the file never reaches the point of producing bytecode.",
        "2": "the compiler never repairs syntax. It reports the problem and stops.",
        "3": "javac only writes the .class when the whole file is valid, so the failure comes first."
      },
      "explanation": "Compilation is a separate stage that happens before anything runs. A syntax problem stops javac, so the bytecode is never created and there is nothing to execute.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_12-a-colleague-s-machine-has-the-jre-instal",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview"
      ],
      "question": "A colleague's machine has the JRE installed, but no JDK. Which task can they do?",
      "options": [
        "Neither, because the JVM is only installed with the JDK.",
        "Run an existing .class file, but not compile .java source.",
        "Compile .java source, but not run the result.",
        "Both compile and run, because the JVM ships in the JRE."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "the JVM is precisely what the JRE provides.",
        "2": "compiling needs javac, and javac is part of the JDK, not the JRE.",
        "3": "the JVM is present, but the compiler is not, so compiling is not possible."
      },
      "explanation": "The JRE contains the core libraries and the JVM, which is everything needed to run a program. The development tools, including javac, live in the JDK, which is the larger set that contains the JRE.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_13-you-compile-a-program-on-windows-then-co",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview"
      ],
      "question": "You compile a program on Windows, then copy only the .class files to a Mac. What happens when a Java program is started there?",
      "options": [
        "The Mac's JVM runs the same bytecode, because the JVM translates it for that machine.",
        "It fails, because the .class files were produced for Windows.",
        "It fails, because the .java source has to be copied as well.",
        "It runs only after javac is used again on the Mac."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "bytecode is platform-neutral. That is what makes the same file usable elsewhere.",
        "2": "the source is not needed to run. It is needed only to compile.",
        "3": "compiling again is unnecessary. That would defeat the purpose of bytecode."
      },
      "explanation": "The compiled .class file is the portable part. It contains bytecode, not machine code, and each platform's JVM turns that bytecode into instructions its own processor understands.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_14-the-class-below-compiles-successfully-wh",
      "difficulty": "hard",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "ocjp"
      ],
      "question": "The class below compiles successfully. What happens when you try to run it?",
      "code": "public class Start {\npublic static int main(String[] args) {\nreturn 42;\n}\n}",
      "options": [
        "It compiles but the launcher reports that no main method was found, because the return type must be void.",
        "It runs and ignores the returned value.",
        "It does not compile, because main may not return an int.",
        "It runs and prints 42."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "the method is never reached. The failure happens before it is invoked.",
        "2": "the compiler allows it. Only the launcher's rule rejects it.",
        "3": "nothing calls the method, so nothing prints, and the JVM stops before main runs."
      },
      "explanation": "A static int method named main is a perfectly legal Java method, so the compiler accepts it. The launcher, however, looks for public static void main with a single String[] parameter, so it finds no entry point and refuses to start.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_custom_15-you-change-a-message-inside-helloworld-j",
      "difficulty": "hard",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview"
      ],
      "question": "You change a message inside HelloWorld.java, then run `java HelloWorld` without running javac first. What is the effect of the change?",
      "options": [
        "It fails, because the JVM always compiles the source first.",
        "It fails, because the .class file becomes invalid once the source changes.",
        "The old .class file still runs, so the change does not appear yet.",
        "The new source is used automatically, so the change appears."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "the JVM executes bytecode. Compiling is javac's job, and it is a separate step.",
        "1": "the existing .class stays valid. It simply does not contain your change.",
        "3": "the source is not consulted at run time, so the new text cannot take effect."
      },
      "explanation": "java runs compiled bytecode; it does not read your .java file. Until javac produces a new .class, the JVM keeps running the previous version, which is why changing source without recompiling appears to do nothing.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-helloworld-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "question": "Which of the following are TRUE about Hello World? Select all that apply.",
      "options": [
        "Main Method Signature Breakdown (`public static void main(String[] args)`):",
        "Java is both a compiled and interpreted language.",
        "Print the result in the format: \"25°C is 77.0°F\".",
        "Then print all three values on one line using string concatenation.",
        "Core Concepts: Java Architecture & Execution Flow"
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Hello World.",
      "topicPath": "src/Chapter_1_Java_Introduction/HelloWorld.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-1-java-introduction_src-chapter-1-java-introduction-sub-chapter-3-deepproblems-fibonaccideepproblem-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Fibonacci Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Fibonacci membership tests:\");",
      "answer": [
        "Fibonacci membership tests:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_1_Java_Introduction/Sub_Chapter_3_DeepProblems/FibonacciDeepProblem.java",
      "tags": [
        "predict"
      ]
    }
  ],
  "Chapter 2: Primitive Types": [
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_0-is-string-a-primitive-type-or-an-object-",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "Is String a primitive type or an object in Java?",
      "modelAnswer": "String is a class, so it is a reference type, not a primitive. It feels special because Java supports string literals like \"hello\", but it is still an object.",
      "keyPoints": [
        "String is a class, so it is a reference type, not a primitive.",
        "It feels special because Java supports string literals like \"hello\", but it is still an object."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_1-why-is-string-immutable-in-java",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "Why is String immutable in Java?",
      "modelAnswer": "An immutable String cannot change after creation, which makes it safe for sharing, caching, and use in the string pool. Immutability also helps security and makes Strings naturally thread-safe.",
      "keyPoints": [
        "An immutable String cannot change after creation, which makes it safe for sharing, caching, and use in the string pool.",
        "Immutability also helps security and makes Strings naturally thread-safe."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_2-what-is-the-string-pool-and-what-is-the-",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "What is the String pool, and what is the difference between == and .equals() for Strings?",
      "modelAnswer": "The string pool stores reused string literals so identical literals can share the same object. == compares references, while .equals() compares the actual character content.",
      "keyPoints": [
        "The string pool stores reused string literals so identical literals can share the same object.",
        "== compares references, while .equals() compares the actual character content."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_3-why-is-stringbuilder-preferred-over-stri",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "Why is StringBuilder preferred over String concatenation in loops?",
      "modelAnswer": "Repeated String concatenation creates many temporary String objects because String is immutable. StringBuilder changes the same buffer, so it is usually faster and uses less memory in loops.",
      "keyPoints": [
        "Repeated String concatenation creates many temporary String objects because String is immutable.",
        "StringBuilder changes the same buffer, so it is usually faster and uses less memory in loops."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_4-what-prints-here-string-s-a-b-string-t-a",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What prints here: String s = \"a\" + \"b\"; String t = \"ab\"; System.out.println(s == t);?",
      "modelAnswer": "It prints true because both values are compile-time constants and refer to the same pooled String object. The concatenation is folded by the compiler into the literal \"ab\".",
      "keyPoints": [
        "It prints true because both values are compile-time constants and refer to the same pooled String object.",
        "The concatenation is folded by the compiler into the literal \"ab\"."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_5-what-prints-here-string-s-new-string-ab-",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What prints here: String s = new String(\"ab\"); String t = \"ab\"; System.out.println(s == t); System.out.println(s.equals(t));?",
      "modelAnswer": "It prints false and then true. new String(\"ab\") creates a different object, so == is false, but the contents are equal.",
      "keyPoints": [
        "It prints false and then true.",
        "new String(\"ab\") creates a different object, so == is false, but the contents are equal."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_6-what-does-it-mean-that-strings-are-immut",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "What does it mean that Strings are immutable in Java?",
      "modelAnswer": "Once a String is created, its value cannot be changed. Any modification creates a new String object. The original String is discarded and becomes eligible for garbage collection.",
      "keyPoints": [
        "Once a String is created, its value cannot be changed. Any modification creates a new String object.",
        "The original String is discarded and becomes eligible for garbage collection."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_7-what-is-the-difference-between-a-char-an",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between a char and a String in Java?",
      "modelAnswer": "char holds exactly ONE character and uses single quotes ('A'). String holds any number of characters and uses double quotes (\"Hello\").",
      "keyPoints": [
        "char holds exactly ONE character and uses single quotes ('A'). String holds any number of characters and uses double quotes (\"Hello\")."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_8-when-should-you-use-stringbuilder-instea",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "When should you use StringBuilder instead of String concatenation?",
      "modelAnswer": "When performing many concatenations, especially inside a loop. String + String creates a new object each time, which is wasteful. StringBuilder modifies the same object in place.",
      "keyPoints": [
        "When performing many concatenations, especially inside a loop. String + String creates a new object each time, which is wasteful. StringBuilder modifies the same object in place."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_9-int-a-10-int-b-20-string-c-navneet-what-",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "int a=10; int b=20; String c=\"Navneet\"; What is the output of: System.out.println(a + b + c);",
      "modelAnswer": "Output: 30Navneet Java evaluates + left to right: (a + b) is done first (both ints) giving 30, then 30 + \"Navneet\" triggers String concatenation giving \"30Navneet\". KEY RULE: if both operands of + are numeric, it is arithmetic. Once one operand is a String, + becomes concatenation for the rest of the expression.",
      "keyPoints": [
        "Output: 30Navneet",
        "Java evaluates + left to right: (a + b) is done first (both ints) giving 30, then 30 + \"Navneet\" triggers String concatenation giving \"30Navneet\".",
        "KEY RULE: if both operands of + are numeric, it is arithmetic. Once one operand is a String, + becomes concatenation for the rest of the expression."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_10-int-a-10-int-b-20-string-c-navneet-what-",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "int a=10; int b=20; String c=\"Navneet\"; What is the output of: System.out.println(c + a + b);",
      "modelAnswer": "Output: Navneet1020 Java evaluates + left to right: c+\"Navneet\" + a=10 gives \"Navneet10\", then \"Navneet10\" + b=20 gives \"Navneet1020\". Once the first operand is a String, ALL subsequent + operations become string concatenation — even int + int after it.",
      "keyPoints": [
        "Output: Navneet1020",
        "Java evaluates + left to right: c+\"Navneet\" + a=10 gives \"Navneet10\", then \"Navneet10\" + b=20 gives \"Navneet1020\".",
        "Once the first operand is a String, ALL subsequent + operations become string concatenation — even int + int after it."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_11-what-is-the-output-of-system-out-println",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the output of: System.out.println(\"Result: \" + 1 + 2);",
      "modelAnswer": "Output: Result: 12 (NOT Result: 3) Because + is left-to-right: \"Result: \" + 1 = \"Result: 1\", then \"Result: 1\" + 2 = \"Result: 12\". Both additions become concatenation once a String is involved. To get \"Result: 3\", use parentheses: \"Result: \" + (1 + 2). Parentheses force arithmetic first.",
      "keyPoints": [
        "Output: Result: 12 (NOT Result: 3)",
        "Because + is left-to-right: \"Result: \" + 1 = \"Result: 1\", then \"Result: 1\" + 2 = \"Result: 12\". Both additions become concatenation once a String is involved.",
        "To get \"Result: 3\", use parentheses: \"Result: \" + (1 + 2). Parentheses force arithmetic first."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_12-what-is-the-output-of-system-out-println",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the output of: System.out.println(1 + 2 + \"Result\");",
      "modelAnswer": "Output: 3Result Java evaluates left to right: 1 + 2 = 3 (both ints, arithmetic), then 3 + \"Result\" = \"3Result\" (String concat). Contrast: \"Result\" + 1 + 2 = \"Result12\". Order matters!",
      "keyPoints": [
        "Output: 3Result",
        "Java evaluates left to right: 1 + 2 = 3 (both ints, arithmetic), then 3 + \"Result\" = \"3Result\" (String concat).",
        "Contrast: \"Result\" + 1 + 2 = \"Result12\". Order matters!"
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_13-what-is-the-output-of-system-out-println",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the output of: System.out.println(\"Value: \" + (10 + 20) + \" done\");",
      "modelAnswer": "Output: Value: 30 done Parentheses (10 + 20) are evaluated first as arithmetic giving 30. Then \"Value: \" + 30 = \"Value: 30\", then + \" done\" = \"Value: 30 done\".",
      "keyPoints": [
        "Output: Value: 30 done",
        "Parentheses (10 + 20) are evaluated first as arithmetic giving 30. Then \"Value: \" + 30 = \"Value: 30\", then + \" done\" = \"Value: 30 done\"."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_14-what-is-the-output-of-char-ch-a-system-o",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the output of: char ch = 'A'; System.out.println(ch + 1);",
      "modelAnswer": "Output: 66 (NOT A1) char in arithmetic context is treated as its Unicode/ASCII integer value. 'A' = 65. 65 + 1 = 66. Result is int 66, not a String. To get \"A1\", use: \"\" + ch + 1 OR String.valueOf(ch) + 1. Adding an empty String \"\" forces concatenation.",
      "keyPoints": [
        "Output: 66 (NOT A1)",
        "char in arithmetic context is treated as its Unicode/ASCII integer value. 'A' = 65. 65 + 1 = 66. Result is int 66, not a String.",
        "To get \"A1\", use: \"\" + ch + 1 OR String.valueOf(ch) + 1. Adding an empty String \"\" forces concatenation."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_15-how-do-you-find-the-length-of-a-string-w",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "How do you find the length of a String WITHOUT using the built-in .length() method?",
      "modelAnswer": "Use a for-each loop over toCharArray(): int count = 0; for (char ch : str.toCharArray()) { count++; } // count is the length. Another approach: convert to char array and use array.length — but that internally calls length anyway. Conceptually: iterate over each character and count. This is O(n) — which is what .length() avoids by caching the value internally.",
      "keyPoints": [
        "Use a for-each loop over toCharArray(): int count = 0; for (char ch : str.toCharArray()) { count++; } // count is the length.",
        "Another approach: convert to char array and use array.length — but that internally calls length anyway.",
        "Conceptually: iterate over each character and count. This is O(n) — which is what .length() avoids by caching the value internally."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_16-what-is-the-output-of-string-s-java-s-co",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "What is the output of: String s = \"Java\"; s.concat(\" is fun\"); System.out.println(s);",
      "modelAnswer": "Output: Java Strings are immutable. concat() returns a NEW String but does NOT modify s. Since the return value is ignored, s is still \"Java\". Fix: s = s.concat(\" is fun\"); — you must assign the result back.",
      "keyPoints": [
        "Output: Java",
        "Strings are immutable. concat() returns a NEW String but does NOT modify s. Since the return value is ignored, s is still \"Java\".",
        "Fix: s = s.concat(\" is fun\"); — you must assign the result back."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_17-int-a-5-what-is-the-output-of-system-out",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "int a=5; What is the output of: System.out.println(\"\" + a + a);",
      "modelAnswer": "Output: 55 (NOT 10) \"\" is an empty String. \"\" + a = \"5\" (String), then \"5\" + a = \"55\". Not arithmetic because the first operand is a String. To add them arithmetically: System.out.println(a + a + \"\") = \"10\"",
      "keyPoints": [
        "Output: 55 (NOT 10)",
        "\"\" is an empty String. \"\" + a = \"5\" (String), then \"5\" + a = \"55\". Not arithmetic because the first operand is a String.",
        "To add them arithmetically: System.out.println(a + a + \"\") = \"10\""
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_18-how-do-you-reverse-a-string-without-usin",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "How do you REVERSE a String WITHOUT using StringBuilder.reverse() or any library?",
      "modelAnswer": "Iterate from the last index to 0 and build a new String: String rev = \"\"; for (int i = str.length()-1; i >= 0; i--) { rev += str.charAt(i); } Better for performance: use a char array — char[] arr = str.toCharArray(); then swap arr[0] with arr[n-1], arr[1] with arr[n-2], etc. Return new String(arr). Key insight: Strings are immutable so you can't modify in place — you must build a new result.",
      "keyPoints": [
        "Iterate from the last index to 0 and build a new String: String rev = \"\"; for (int i = str.length()-1; i >= 0; i--) { rev += str.charAt(i); }",
        "Better for performance: use a char array — char[] arr = str.toCharArray(); then swap arr[0] with arr[n-1], arr[1] with arr[n-2], etc. Return new String(arr).",
        "Key insight: Strings are immutable so you can't modify in place — you must build a new result."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_19-how-do-you-check-if-a-string-is-a-palind",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "How do you check if a String is a PALINDROME without using any built-in reverse method?",
      "modelAnswer": "Use two pointers — one at the start, one at the end, move inward and compare: boolean isPalin = true; int l=0, r=str.length()-1; while(l<r){ if(str.charAt(l)!=str.charAt(r)){isPalin=false; break;} l++; r--; } Key insight: a palindrome reads the same forwards and backwards. \"madam\", \"racecar\", \"level\" are palindromes. You DON'T need to reverse the whole string — just compare from both ends. This is O(n/2) = O(n).",
      "keyPoints": [
        "Use two pointers — one at the start, one at the end, move inward and compare: boolean isPalin = true; int l=0, r=str.length()-1; while(l<r){ if(str.charAt(l)!=str.charAt(r)){isPalin=false; break;} l++; r--; }",
        "Key insight: a palindrome reads the same forwards and backwards. \"madam\", \"racecar\", \"level\" are palindromes.",
        "You DON'T need to reverse the whole string — just compare from both ends. This is O(n/2) = O(n)."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_20-how-do-you-count-occurrences-of-a-specif",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "How do you count occurrences of a specific character in a String WITHOUT using regex or library?",
      "modelAnswer": "Loop through each character and compare: int count = 0; for (int i = 0; i < str.length(); i++) { if (str.charAt(i) == target) count++; } Or with for-each: for (char ch : str.toCharArray()) { if (ch == target) count++; }",
      "keyPoints": [
        "Loop through each character and compare: int count = 0; for (int i = 0; i < str.length(); i++) { if (str.charAt(i) == target) count++; }",
        "Or with for-each: for (char ch : str.toCharArray()) { if (ch == target) count++; }"
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_21-how-do-you-check-if-a-string-contains-a-",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "How do you check if a String CONTAINS a substring WITHOUT using contains() or indexOf()?",
      "modelAnswer": "Use a sliding window: for each position i in str, check if str.substring(i, i+sub.length()).equals(sub). If any match, return true. Manual char-by-char: for each i, compare str.charAt(i+j) with sub.charAt(j) for j=0 to sub.length()-1. This is the essence of the brute-force string search algorithm.",
      "keyPoints": [
        "Use a sliding window: for each position i in str, check if str.substring(i, i+sub.length()).equals(sub). If any match, return true.",
        "Manual char-by-char: for each i, compare str.charAt(i+j) with sub.charAt(j) for j=0 to sub.length()-1. This is the essence of the brute-force string search algorithm."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_22-how-do-you-convert-a-string-to-uppercase",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "How do you convert a String to UPPERCASE WITHOUT using toUpperCase()?",
      "modelAnswer": "Each lowercase letter 'a'-'z' has ASCII value 97-122. Uppercase 'A'-'Z' is 65-90. Difference is 32. So: if (ch >= 'a' && ch <= 'z') ch = (char)(ch - 32); Loop through each char, apply the transformation, build result: StringBuilder sb = new StringBuilder(); for (char ch : str.toCharArray()) { if(ch>='a'&&ch<='z') sb.append((char)(ch-32)); else sb.append(ch); }",
      "keyPoints": [
        "Each lowercase letter 'a'-'z' has ASCII value 97-122. Uppercase 'A'-'Z' is 65-90. Difference is 32. So: if (ch >= 'a' && ch <= 'z') ch = (char)(ch - 32);",
        "Loop through each char, apply the transformation, build result: StringBuilder sb = new StringBuilder(); for (char ch : str.toCharArray()) { if(ch>='a'&&ch<='z') sb.append((char)(ch-32)); else sb.append(ch); }"
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_23-how-do-you-count-vowels-in-a-string-with",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "How do you COUNT VOWELS in a String WITHOUT using regex?",
      "modelAnswer": "Loop through each char and check if it's in the set {a,e,i,o,u,A,E,I,O,U}: int count=0; for(char ch: str.toCharArray()){ String v=\"aeiouAEIOU\"; if(v.indexOf(ch)!=-1) count++; } Simpler: use a switch or if-else chain: if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') count++;",
      "keyPoints": [
        "Loop through each char and check if it's in the set {a,e,i,o,u,A,E,I,O,U}: int count=0; for(char ch: str.toCharArray()){ String v=\"aeiouAEIOU\"; if(v.indexOf(ch)!=-1) count++; }",
        "Simpler: use a switch or if-else chain: if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') count++;"
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_24-how-do-you-check-if-two-strings-are-anag",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "How do you check if two Strings are ANAGRAMS WITHOUT using sort()?",
      "modelAnswer": "Count character frequencies: int[] freq = new int[256]; for(char c: s1.toCharArray()) freq[c]++; for(char c: s2.toCharArray()) freq[c]--; Check all freq[i]==0. If any freq entry is non-zero, strings are NOT anagrams. This is O(n) vs O(n log n) for sort-based approach. Example: \"listen\" and \"silent\" are anagrams — same characters, different order.",
      "keyPoints": [
        "Count character frequencies: int[] freq = new int[256]; for(char c: s1.toCharArray()) freq[c]++; for(char c: s2.toCharArray()) freq[c]--; Check all freq[i]==0.",
        "If any freq entry is non-zero, strings are NOT anagrams. This is O(n) vs O(n log n) for sort-based approach.",
        "Example: \"listen\" and \"silent\" are anagrams — same characters, different order."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_25-how-do-you-remove-all-spaces-from-a-stri",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "How do you REMOVE ALL SPACES from a String WITHOUT using replace() or replaceAll()?",
      "modelAnswer": "Loop and skip spaces: StringBuilder sb = new StringBuilder(); for(char ch: str.toCharArray()){ if(ch!=' ') sb.append(ch); } This builds a new String containing only non-space characters.",
      "keyPoints": [
        "Loop and skip spaces: StringBuilder sb = new StringBuilder(); for(char ch: str.toCharArray()){ if(ch!=' ') sb.append(ch); }",
        "This builds a new String containing only non-space characters."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_26-how-do-you-count-words-in-a-string-witho",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "How do you COUNT WORDS in a String WITHOUT using split()?",
      "modelAnswer": "Track transitions from non-space to space: int count=0; boolean inWord=false; for(char ch:str.toCharArray()){ if(ch!=' '&&!inWord){count++;inWord=true;}else if(ch==' '){inWord=false;} } Key: count a word when you ENTER it (transition from space/start to non-space), not while you're in it.",
      "keyPoints": [
        "Track transitions from non-space to space: int count=0; boolean inWord=false; for(char ch:str.toCharArray()){ if(ch!=' '&&!inWord){count++;inWord=true;}else if(ch==' '){inWord=false;} }",
        "Key: count a word when you ENTER it (transition from space/start to non-space), not while you're in it."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_27-how-do-you-find-the-first-non-repeating-",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "How do you find the FIRST NON-REPEATING CHARACTER in a String WITHOUT library methods?",
      "modelAnswer": "Two passes: first pass builds a frequency array (int[256]). Second pass returns the first char with frequency 1. int[] freq = new int[256]; for(char c:str.toCharArray()) freq[c]++; for(char c:str.toCharArray()) if(freq[c]==1) return c;",
      "keyPoints": [
        "Two passes: first pass builds a frequency array (int[256]). Second pass returns the first char with frequency 1.",
        "int[] freq = new int[256]; for(char c:str.toCharArray()) freq[c]++; for(char c:str.toCharArray()) if(freq[c]==1) return c;"
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_28-how-do-you-remove-duplicate-characters-f",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "How do you REMOVE DUPLICATE CHARACTERS from a String WITHOUT using Set or distinct()?",
      "modelAnswer": "Use a boolean[] seen = new boolean[256]; Loop through chars — if not seen, append to result and mark seen[ch]=true. Example: \"programming\" → \"progamin\" (each character kept only on first occurrence).",
      "keyPoints": [
        "Use a boolean[] seen = new boolean[256]; Loop through chars — if not seen, append to result and mark seen[ch]=true.",
        "Example: \"programming\" → \"progamin\" (each character kept only on first occurrence)."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_29-how-do-you-check-if-a-string-is-numeric-",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "How do you check if a String is NUMERIC (all digits) WITHOUT using parseInt() or regex?",
      "modelAnswer": "Loop through each char and check ch >= '0' && ch <= '9': boolean isNum=true; for(char ch:str.toCharArray()){ if(ch<'0'||ch>'9'){isNum=false;break;} } Handle edge cases: empty string should return false. Negative sign ('-' at index 0) may or may not count depending on requirement.",
      "keyPoints": [
        "Loop through each char and check ch >= '0' && ch <= '9': boolean isNum=true; for(char ch:str.toCharArray()){ if(ch<'0'||ch>'9'){isNum=false;break;} }",
        "Handle edge cases: empty string should return false. Negative sign ('-' at index 0) may or may not count depending on requirement."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_30-what-is-the-difference-between-and-equal",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between == and .equals() when comparing Strings in Java?",
      "modelAnswer": "== compares references, meaning whether both variables point to the exact same String object in memory. .equals() compares String content, so it checks whether the characters are the same. Example: String a = \"hello\"; String b = \"hello\"; gives a == b as true because both usually point to the same pooled literal object, but new String(\"hello\") compared with another new String(\"hello\") gives == as false because they are different heap objects. Interview rule: use .equals() when you want value comparison, because it works correctly whether Strings come from the pool or from new objects.",
      "keyPoints": [
        "== compares references, meaning whether both variables point to the exact same String object in memory.",
        ".equals() compares String content, so it checks whether the characters are the same.",
        "Example: String a = \"hello\"; String b = \"hello\"; gives a == b as true because both usually point to the same pooled literal object, but new String(\"hello\") compared with another new String(\"hello\") gives == as false because they are different heap objects.",
        "Interview rule: use .equals() when you want value comparison, because it works correctly whether Strings come from the pool or from new objects."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_31-what-is-the-output-of-integer-a-127-inte",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the output of: Integer a = 127; Integer b = 127; System.out.println(a == b); then Integer x = 128; Integer y = 128; System.out.println(x == y);",
      "modelAnswer": "Output: true on the first line and false on the second line. Java caches Integer objects in the range -128 to 127, so autoboxing 127 reuses the same object reference. 128 is outside the default cache range, so autoboxing typically creates different Integer objects and == becomes false. Use .equals() for Integer value comparison too, because == on wrapper objects checks references, not numeric equality.",
      "keyPoints": [
        "Output: true on the first line and false on the second line.",
        "Java caches Integer objects in the range -128 to 127, so autoboxing 127 reuses the same object reference.",
        "128 is outside the default cache range, so autoboxing typically creates different Integer objects and == becomes false.",
        "Use .equals() for Integer value comparison too, because == on wrapper objects checks references, not numeric equality."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_32-in-system-out-println-mystring-is-equal-",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "In System.out.println(\"MyString is equal to \" + myString), what is the println parameter?",
      "modelAnswer": "The parameter is the completed String produced after concatenation, not the separate pieces; Java builds it first, then println prints it.",
      "keyPoints": [
        "The parameter is the completed String produced after concatenation, not the separate pieces; Java builds it first, then println prints it."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_33-if-s-concat-is-fun-receives-is-fun-as-it",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "If s.concat(\" is fun\") receives \" is fun\" as its parameter, why might printing s still show the old value?",
      "modelAnswer": "String is immutable, so concat returns a new String. If you avoid assigning the result back to s, the original reference still points to the old text.",
      "keyPoints": [
        "String is immutable, so concat returns a new String. If you avoid assigning the result back to s, the original reference still points to the old text."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_custom_34-what-should-you-remember-about-the-args-",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What should you remember about the args parameter when command-line input is numeric, such as 123?",
      "modelAnswer": "args stores every command-line value as a String, so \"123\" must be parsed before numeric arithmetic can be performed.",
      "keyPoints": [
        "args stores every command-line value as a String, so \"123\" must be parsed before numeric arithmetic can be performed."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-strings-stringexample-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "question": "Which of the following are TRUE about String Example? Select all that apply.",
      "options": [
        "Contrast: a 'char' can hold only ONE character. A String can hold many. char uses single quotes ('A'), String uses double quotes (\"Hello\").",
        "Variables declared inside the for loop init section are local to the loop only.",
        "Core Concepts: Java Variables & Initialization",
        "A String is a sequence of characters of any length — from empty \"\" to thousands of characters long.",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment."
      ],
      "answer": [
        0,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for String Example.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-1-variables-localvariablesandscope-java_custom_0-what-does-the-println-parameter-secondva",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "tags": [
        "interview"
      ],
      "question": "What does the println parameter secondVariable mean in this scope example?",
      "modelAnswer": "It is the local variable value currently in scope; println receives that int value and prints it on its own line.",
      "keyPoints": [
        "It is the local variable value currently in scope; println receives that int value and prints it on its own line."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_1_Variables/LocalVariablesAndScope.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-1-variables-localvariablesandscope-java_custom_1-can-system-out-println-thirdvariable-use",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Can System.out.println(thirdVariable) use thirdVariable as a parameter outside the if block?",
      "modelAnswer": "No. thirdVariable was declared inside the if block, so it is out of scope outside that block and cannot be passed to println there.",
      "keyPoints": [
        "No. thirdVariable was declared inside the if block, so it is out of scope outside that block and cannot be passed to println there."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_1_Variables/LocalVariablesAndScope.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-1-variables-localvariablesandscope-java_custom_2-what-must-the-parameter-inside-if-firstv",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What must the parameter inside if(firstVariable > 0) evaluate to?",
      "modelAnswer": "The if condition must evaluate to a boolean. firstVariable > 0 is valid because comparison produces true or false.",
      "keyPoints": [
        "The if condition must evaluate to a boolean. firstVariable > 0 is valid because comparison produces true or false."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_1_Variables/LocalVariablesAndScope.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-1-variables-localvariablesandscope-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "question": "Which of the following are TRUE about Local Variables And Scope? Select all that apply.",
      "options": [
        "--- SWITCH SCOPE (special rule!) ---",
        "Variables declared inside an if block are NOT accessible in else or outside the if.",
        "Variables declared inside the for loop init section are local to the loop only.",
        "Core Concepts: Java Variables & Initialization",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for Local Variables And Scope.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_1_Variables/LocalVariablesAndScope.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-1-variables-variables-java_custom_0-what-are-java-s-8-primitive-types-and-th",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "tags": [
        "interview"
      ],
      "question": "What are Java's 8 primitive types and their sizes?",
      "modelAnswer": "byte (8-bit), short (16-bit), int (32-bit), long (64-bit), char (16-bit Unicode), float (32-bit IEEE 754), double (64-bit IEEE 754), and boolean (true/false). Primitives store their actual raw values directly in stack memory, whereas reference types store object memory addresses.",
      "keyPoints": [
        "byte (8-bit), short (16-bit), int (32-bit), long (64-bit), char (16-bit Unicode), float (32-bit IEEE 754), double (64-bit IEEE 754), and boolean (true/false).",
        "Primitives store their actual raw values directly in stack memory, whereas reference types store object memory addresses."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_1_Variables/Variables.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-1-variables-variables-java_custom_1-do-local-variables-receive-default-value",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Do local variables receive default values in Java?",
      "modelAnswer": "No. Instance and static fields get default values (0, false, null), but local variables do not. An uninitialized local variable causes a compile-time error if read before assignment.",
      "keyPoints": [
        "No. Instance and static fields get default values (0, false, null), but local variables do not.",
        "An uninitialized local variable causes a compile-time error if read before assignment."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_1_Variables/Variables.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-1-variables-variables-java_custom_2-which-of-these-is-a-valid-java-variable-",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "tags": [
        "interview"
      ],
      "question": "Which of these is a valid Java variable identifier that also follows the usual naming convention?",
      "options": [
        "totalAccountBalance",
        "total-balance",
        "class",
        "2ndPlaceScore"
      ],
      "answer": 0,
      "whyByOption": {
        "1": "a hyphen is not allowed in an identifier; the compiler reads it as a subtraction.",
        "2": "class is a Java keyword and cannot be used as a variable name.",
        "3": "an identifier cannot begin with a digit."
      },
      "explanation": "An identifier must begin with a letter, an underscore, or a dollar sign, may not be a keyword, and by convention uses camelCase.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_1_Variables/Variables.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-1-variables-variables-java_custom_3-is-int-x-1-000-000-valid-java-and-what-d",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "tags": [
        "interview"
      ],
      "question": "Is `int x = 1_000_000;` valid Java, and what do the underscores do?",
      "options": [
        "It is valid from Java 7 onward, the value is one million, and the underscores are ignored by the compiler.",
        "It creates a String rather than a number.",
        "It is invalid, because underscores are not permitted in numeric literals.",
        "The underscores must appear after every third digit, or the code will not compile."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "it is still an int literal, and x holds the number 1000000.",
        "2": "Java 7 added underscores in numeric literals exactly for readability.",
        "3": "grouping in threes is only a convention. The real rules forbid an underscore at the very start or end, next to a decimal point, or directly before a suffix such as L or f."
      },
      "explanation": "Underscores exist purely to make long numbers easier for a human to read. The compiler strips them, so the value is unchanged.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_1_Variables/Variables.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-1-variables-variables-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "question": "Which of the following are TRUE about Variables? Select all that apply.",
      "options": [
        "In Java, variables are strongly typed: every variable must be declared with a specific data type before it can be used.",
        "Variables declared inside the for loop init section are local to the loop only.",
        "Core Concepts: Java Variables & Initialization",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "A variable is a named storage location in memory that holds a data value."
      ],
      "answer": [
        0,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Variables.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_1_Variables/Variables.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-2-keywords-and-expressions-keywordsandexpressionsinjava-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "question": "What does this code print?",
      "code": "System.out.println(\"You got the high score!\"); // You got the highscore! is a part of expression.",
      "answer": [
        "You got the high score!"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_2_KeyWords_And_Expressions/KeyWordsAndExpressionsInJava.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-2-keywords-and-expressions-keywordsandexpressionsinjava-java_custom_0-what-does-the-parameter-highscore-50-mea",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "tags": [
        "interview"
      ],
      "question": "What does the parameter highScore == 50 mean inside if(...)?",
      "modelAnswer": "It is the condition argument that controls the if block; the block runs only when the comparison evaluates to true.",
      "keyPoints": [
        "It is the condition argument that controls the if block; the block runs only when the comparison evaluates to true."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_2_KeyWords_And_Expressions/KeyWordsAndExpressionsInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-2-keywords-and-expressions-keywordsandexpressionsinjava-java_custom_1-why-is-if-highscore-50-not-the-right-par",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why is if(highScore = 50) not the right parameter for checking equality?",
      "modelAnswer": "= is assignment, not comparison. Use == when the condition should test whether highScore already equals 50.",
      "keyPoints": [
        "= is assignment, not comparison. Use == when the condition should test whether highScore already equals 50."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_2_KeyWords_And_Expressions/KeyWordsAndExpressionsInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-2-keywords-and-expressions-keywordsandexpressionsinjava-java_custom_2-in-system-out-println-you-got-the-high-s",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "tags": [
        "interview"
      ],
      "question": "In System.out.println(\"You got the high score!\"), what is the method parameter?",
      "modelAnswer": "The parameter is the String message to display; choose text that should appear when the surrounding condition is satisfied.",
      "keyPoints": [
        "The parameter is the String message to display; choose text that should appear when the surrounding condition is satisfied."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_2_KeyWords_And_Expressions/KeyWordsAndExpressionsInJava.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-2-keywords-and-expressions-keywordsandexpressionsinjava-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "question": "Which of the following are TRUE about Key Words And Expressions In Java? Select all that apply.",
      "options": [
        "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.",
        "Variables declared inside the for loop init section are local to the loop only.",
        "Java has over 50 reserved keywords. Common examples: class, public, static, void, int, double, if, else, for, while, return, new, this, super, true, false, null.",
        "An expression in Java is any combination of variables, literals, operators, and method calls that evaluates to a single value.",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment."
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Key Words And Expressions In Java.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_2_KeyWords_And_Expressions/KeyWordsAndExpressionsInJava.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_0-what-is-the-difference-between-widening-",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between widening and narrowing casting in Java?",
      "modelAnswer": "Widening converts a smaller compatible type to a larger one, like int to long, and Java does it automatically. Narrowing converts a larger type to a smaller one, like double to int, and requires an explicit cast.",
      "keyPoints": [
        "Widening converts a smaller compatible type to a larger one, like int to long, and Java does it automatically.",
        "Narrowing converts a larger type to a smaller one, like double to int, and requires an explicit cast."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_1-what-is-integer-overflow-in-java",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "What is integer overflow in Java?",
      "modelAnswer": "Integer overflow happens when a value goes past the type's range and wraps around to the opposite end. For example, Integer.MAX_VALUE + 1 becomes Integer.MIN_VALUE.",
      "keyPoints": [
        "Integer overflow happens when a value goes past the type's range and wraps around to the opposite end.",
        "For example, Integer.MAX_VALUE + 1 becomes Integer.MIN_VALUE."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_2-why-does-integer-division-drop-the-decim",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "Why does integer division drop the decimal part?",
      "modelAnswer": "When both operands are integer types, Java performs integer division and keeps only the whole-number result. So 1 / 2 is 0, while 1.0 / 2 uses floating-point division and keeps the fraction.",
      "keyPoints": [
        "When both operands are integer types, Java performs integer division and keeps only the whole-number result.",
        "So 1 / 2 is 0, while 1.0 / 2 uses floating-point division and keeps the fraction."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_3-what-is-the-output-of-system-out-println",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What is the output of: System.out.println(1 / 2); System.out.println(1.0 / 2);?",
      "modelAnswer": "The output is 0 and 0.5. The first uses integer division, while the second uses double division.",
      "keyPoints": [
        "The output is 0 and 0.5.",
        "The first uses integer division, while the second uses double division."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_4-what-happens-here-long-l-10-int-i-l",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What happens here: long l = 10; int i = l;?",
      "modelAnswer": "It does not compile because assigning long to int is narrowing and may lose data. You need an explicit cast, such as int i = (int) l;.",
      "keyPoints": [
        "It does not compile because assigning long to int is narrowing and may lose data.",
        "You need an explicit cast, such as int i = (int) l;."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_5-what-are-the-default-values-of-java-prim",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "What are the default values of Java primitive fields and object references if you do not initialize them explicitly?",
      "modelAnswer": "Instance fields get type-specific defaults: int = 0, boolean = false, double = 0.0, and char = '\\u0000' which is the Unicode null character. Reference type fields default to null because they store no object reference yet. Local variables are different: Java does NOT give them default values, so you must initialize them before use.",
      "keyPoints": [
        "Instance fields get type-specific defaults: int = 0, boolean = false, double = 0.0, and char = '\\u0000' which is the Unicode null character.",
        "Reference type fields default to null because they store no object reference yet.",
        "Local variables are different: Java does NOT give them default values, so you must initialize them before use."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_6-what-happens-in-java-when-you-run-int-x-",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "What happens in Java when you run: int x = Integer.MAX_VALUE; x++; ?",
      "modelAnswer": "Output/value: x becomes -2147483648, which is Integer.MIN_VALUE. int is a 32-bit signed two's-complement type, so incrementing the largest possible bit pattern wraps around to the smallest negative value. Java does not throw an exception for primitive integer overflow; the extra carry bit is discarded.",
      "keyPoints": [
        "Output/value: x becomes -2147483648, which is Integer.MIN_VALUE.",
        "int is a 32-bit signed two's-complement type, so incrementing the largest possible bit pattern wraps around to the smallest negative value.",
        "Java does not throw an exception for primitive integer overflow; the extra carry bit is discarded."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_7-what-is-the-difference-between-widening-",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between widening and narrowing primitive conversions in Java?",
      "modelAnswer": "Widening means converting a smaller compatible type to a larger one, such as int to long. It is automatic because no information is lost. Narrowing means converting a larger type to a smaller one, such as double to int. It requires an explicit cast because precision or range can be lost. Example: double d = 9.8; int n = (int) d; gives 9 because the fractional part is truncated.",
      "keyPoints": [
        "Widening means converting a smaller compatible type to a larger one, such as int to long. It is automatic because no information is lost.",
        "Narrowing means converting a larger type to a smaller one, such as double to int. It requires an explicit cast because precision or range can be lost.",
        "Example: double d = 9.8; int n = (int) d; gives 9 because the fractional part is truncated."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_8-is-this-valid-java-int-x-1-000-000-and-w",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "Is this valid Java: int x = 1_000_000; and what is the purpose of the underscores?",
      "modelAnswer": "Yes, it is valid in Java 7 and later, and the value is still one million. Underscores in numeric literals are ignored by the compiler and exist only to improve human readability. They cannot be placed at the start or end of the literal, next to a decimal point, or right before a type suffix such as L or F.",
      "keyPoints": [
        "Yes, it is valid in Java 7 and later, and the value is still one million.",
        "Underscores in numeric literals are ignored by the compiler and exist only to improve human readability.",
        "They cannot be placed at the start or end of the literal, next to a decimal point, or right before a type suffix such as L or F."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_9-which-statement-about-primitive-type-siz",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "Which statement about primitive type sizes and ranges is correct?",
      "options": [
        "long is 32-bit, the same width as int.",
        "byte is 8-bit, covering -128 to 128.",
        "short is 16-bit, covering -32,768 to 32,768.",
        "int is 32-bit, covering -2,147,483,648 to 2,147,483,647."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "long is 64-bit. int is 32-bit. That is why a literal such as 100L is written with the L suffix.",
        "1": "byte covers -128 to 127. The upper bound is 127, not 128, because 0 occupies one of the 256 values.",
        "2": "short covers -32,768 to 32,767. The upper bound is 32,767, not 32,768."
      },
      "explanation": "Java has exactly 8 primitive types, and their ranges are asymmetric because one bit is used for the sign. The largest positive value is one less than the magnitude of the smallest negative value.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_10-what-is-the-difference-between-widening-",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between widening and narrowing conversion?",
      "options": [
        "Narrowing never loses information because Java rounds the value.",
        "Widening requires a cast because the larger type needs more memory.",
        "Both directions are automatic, and Java truncates silently when needed.",
        "Widening goes from a smaller type to a larger compatible type and is automatic. Narrowing goes the other way and requires an explicit cast."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "narrowing can lose information. A cast truncates rather than rounds, so 9.8 becomes 9, not 10.",
        "1": "requiring a cast has nothing to do with memory size. Widening is automatic precisely because nothing is lost.",
        "2": "if both were automatic, Java could silently corrupt values, which is exactly what the compiler prevents."
      },
      "explanation": "Widening follows the chain byte -> short -> char -> int -> long -> float -> double and is applied for you. Narrowing converts back down and needs the cast to be written, because range or precision can be lost.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_11-what-is-printed-by-these-two-statements",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "ocjp"
      ],
      "question": "What is printed by these two statements?",
      "code": "System.out.println(5 / 2);\nSystem.out.println(5 / 2.0);",
      "options": [
        "3 and 2.5",
        "2.5 and 2.5",
        "2 and 2.5",
        "2 and 2"
      ],
      "answer": 2,
      "whyByOption": {
        "0": "integer division truncates towards zero, it does not round up. 5 / 2 is 2, never 3.",
        "1": "the first line has two int operands, so it cannot produce 2.5.",
        "3": "the second line has a double operand, so it cannot produce 2."
      },
      "explanation": "When both operands of / are integers, Java performs integer division and drops the fractional part. As soon as one operand is a floating-point value, floating-point division happens and the fraction is kept.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_12-what-is-the-value-of-x-after-this-code-r",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "ocjp"
      ],
      "question": "What is the value of x after this code runs?",
      "code": "int x = Integer.MAX_VALUE;\nx++;",
      "options": [
        "2147483648, because int is promoted to long automatically.",
        "It stays at 2147483647 and the increment is ignored.",
        "-2147483648, because the value wraps around to Integer.MIN_VALUE.",
        "It throws ArithmeticException."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "no promotion happens on overflow. The result is stored back into an int, so there is nowhere to hold 2147483648.",
        "1": "the value does change. The carry bit is discarded, which is what makes the value wrap to the opposite end of the range.",
        "3": "Java does not raise an exception for primitive integer overflow. Only integer division by zero throws ArithmeticException."
      },
      "explanation": "int is a 32-bit signed two's-complement type. Incrementing the largest bit pattern carries over into the sign bit, which produces the smallest negative value. Java discards the carry bit and throws nothing.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_13-which-statement-about-numeric-literal-su",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "Which statement about numeric literal suffixes is correct?",
      "options": [
        "The suffix d is compulsory for every double literal.",
        "100L creates a long, 3.14f creates a float, and a plain decimal literal such as 3.14 is a double.",
        "A decimal literal such as 3.14 is treated as a float by default.",
        "100L creates an int, and a plain decimal literal such as 3.14 is a float."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "double is the default for decimals, so the d suffix is optional. float is the type that needs a suffix.",
        "2": "decimals default to double. Writing float f = 3.14; fails to compile without the f suffix.",
        "3": "L means long, not int, and a decimal literal is double, not float."
      },
      "explanation": "Whole-number literals are int unless L is added. Decimal literals are double by default, so float needs the f suffix. The d suffix is allowed but never required.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_14-which-statement-about-default-values-in-",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "Which statement about default values in Java is correct?",
      "options": [
        "Local variables default to null.",
        "Only static fields receive default values.",
        "Instance and static fields receive type defaults such as 0 and false, while local variables must be assigned before they are read.",
        "Every variable, including a local variable, receives a default value."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "a local primitive is not set to null, and null is not even a valid value for a primitive. It simply has no value yet.",
        "1": "instance fields receive defaults too, not only static fields.",
        "3": "locals are the exception. Reading an unassigned local variable is a compile-time error."
      },
      "explanation": "Fields are zeroed as part of creating the object or class. Local variables live only as long as the method call, so Java refuses to guess a value and reports a compile error if you read one before assigning it.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_15-which-statement-about-char-is-correct",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "Which statement about char is correct?",
      "options": [
        "The escape written as backslash-u 0044 is the character 'D', because char is 16-bit and Unicode-based.",
        "The escape backslash-u 0044 is decimal 44, which is the comma character.",
        "char is 8-bit and holds one ASCII character.",
        "char uses double quotes, just like a String."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "the escape is hexadecimal, not decimal. 0x44 is 68, which is 'D'; decimal 44 is the comma.",
        "2": "char is 16-bit so it can represent Unicode, not just 8-bit ASCII.",
        "3": "double quotes create a String. A char literal always uses single quotes, as in 'D'."
      },
      "explanation": "A char is a single 16-bit Unicode code unit written in single quotes. The Unicode escape is written in hexadecimal, so the escape for 0044 is 0x44, which is decimal 68, the letter D.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_16-what-is-the-value-of-n",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "ocjp"
      ],
      "question": "What is the value of n?",
      "code": "double d = 9.8;\nint n = (int) d;",
      "options": [
        "9, because the cast truncates towards zero.",
        "It does not compile, because a double can never be converted to an int.",
        "10, because the cast rounds to the nearest whole number.",
        "9.8, because int keeps the fractional part."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "the conversion is legal once the explicit (int) cast is present. Without the cast it would fail to compile.",
        "2": "a cast truncates. To round 9.8 up to 10 you would need Math.round(d).",
        "3": "an int cannot hold a fraction at all, which is why precision is lost here."
      },
      "explanation": "Narrowing a decimal to an int discards the fractional part; it does not round it. Use Math.round when rounding is what you actually want.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_17-in-system-out-println-the-max-value-of-t",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "In System.out.println(\"The max Value of the integer is = \" + intMaxValue), what parameter is passed?",
      "modelAnswer": "The parameter is one final String formed by concatenating the label with intMaxValue; println receives that String and prints it.",
      "keyPoints": [
        "The parameter is one final String formed by concatenating the label with intMaxValue; println receives that String and prints it."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_18-what-does-the-byte-parameter-like-target",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What does the (byte) parameter-like target in (byte) (intMinValue / 2) tell Java?",
      "modelAnswer": "It tells Java to narrow the int result to byte. Be careful: narrowing can overflow or discard information.",
      "keyPoints": [
        "It tells Java to narrow the int result to byte. Be careful: narrowing can overflow or discard information."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_19-why-choose-5f-instead-of-5-in-floatvalue",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Why choose 5f instead of 5 in floatValue = (5f / 2f)?",
      "modelAnswer": "The f suffix makes each literal a float, so Java performs floating-point division and keeps the decimal result instead of integer division.",
      "keyPoints": [
        "The f suffix makes each literal a float, so Java performs floating-point division and keeps the decimal result instead of integer division."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_20-does-this-line-compile",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "Does this line compile?",
      "code": "byte b = 128;",
      "options": [
        "No. 128 is outside the byte range, so the compiler rejects the assignment.",
        "Yes, and b wraps around to -128.",
        "Yes, but only because 128 fits in a nibble.",
        "Yes, and b holds 128."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "the wrap-around happens only for a computed value at runtime, such as byte b = (byte) 128;. Here the compiler stops first.",
        "2": "the range is fixed by the type, and 127 is the largest byte.",
        "3": "128 is one past the maximum, so the value does not fit."
      },
      "explanation": "A byte is 8 bits and holds -128 to 127. A literal outside that range cannot be assigned to a byte without a cast. Wrapping happens with arithmetic at run time, not when the compiler can see the value is out of range.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_21-what-is-printed-by-these-two-statements",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "ocjp"
      ],
      "question": "What is printed by these two statements?",
      "code": "System.out.println(-7 / 2);\nSystem.out.println(-7 % 2);",
      "options": [
        "-3 and -1",
        "-4 and 1",
        "-4 and -1",
        "-3.5 and -1"
      ],
      "answer": 0,
      "whyByOption": {
        "1": "-7 / 2 truncates towards zero to -3, not away from it to -4.",
        "2": "the division result is -3, not -4.",
        "3": "both operands are int, so the result of / is an int and cannot be -3.5."
      },
      "explanation": "Integer division truncates towards zero, so -3.5 becomes -3. The remainder then has the same sign as the dividend, which makes -7 % 2 equal to -1.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_22-what-is-printed-by-this-code",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "ocjp"
      ],
      "question": "What is printed by this code?",
      "code": "System.out.println(0.1 + 0.2);\nSystem.out.println(0.1 + 0.2 == 0.3);",
      "options": [
        "0.3 and true",
        "0.30000000000000004 and false",
        "0.30000000000000004 and true",
        "0.3 and false"
      ],
      "answer": 1,
      "whyByOption": {
        "0": "the sum is not exactly 0.3, so the comparison cannot be true.",
        "2": "the two halves cannot both be right. If the sum differs from 0.3, the comparison is false.",
        "3": "the printed value shows the accumulated error rather than a clean 0.3."
      },
      "explanation": "double is a binary floating-point type, and 0.1 and 0.2 cannot be stored exactly in binary. The tiny errors add up, so the sum is slightly more than 0.3 and the exact comparison fails. This is why BigDecimal is used for money.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_23-does-this-code-compile",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "Does this code compile?",
      "code": "short s = 1;\ns = s + 1;",
      "options": [
        "Yes, because short and int are the same width.",
        "Yes, and s becomes 2.",
        "Yes, and s wraps around.",
        "No. s + 1 is promoted to int, and an int cannot be assigned back to a short without a cast."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "short is 16 bits and int is 32 bits, so they differ.",
        "1": "the promotion makes the assignment invalid, so it never reaches runtime.",
        "2": "nothing wraps here. The compiler rejects the type mismatch first."
      },
      "explanation": "Java promotes short and byte operands to int before arithmetic. The result of s + 1 is therefore an int, and narrowing it back to short needs an explicit cast such as s = (short)(s + 1).",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_custom_24-which-statement-about-boolean-in-java-is",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "ocjp"
      ],
      "question": "Which statement about boolean in Java is correct?",
      "options": [
        "boolean and byte are interchangeable because both are 8 bits.",
        "A boolean can be used directly as an if condition only after converting it to an int.",
        "true is equal to 1 and false is equal to 0, so int x = (int) true; is valid.",
        "boolean is not a numeric type, so it cannot be cast to or from an int."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "a boolean is not a number, so it is not interchangeable with any numeric type.",
        "1": "no conversion is needed or possible. A boolean is exactly what if requires.",
        "2": "that rule belongs to C and C++. Java does not allow the cast."
      },
      "explanation": "Java keeps boolean completely separate from the numeric types. Unlike C, there is no conversion between true and 1, and a boolean is already the only thing an if condition needs.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-2-primitive-types_src-chapter-2-primitivetypes-sub-chapter-3-primitive-data-types-primitivedatatypes-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "question": "Which of the following are TRUE about Primitive Data Types? Select all that apply.",
      "options": [
        "Wrapper Classes: Java provides a wrapper class for each primitive (e.g., int -> Integer, double -> Double).",
        "Variables declared inside the for loop init section are local to the loop only.",
        "Unlike objects, primitive types are stored directly in memory (not as references), making them fast and memory-efficient.",
        "Java has exactly 8 primitive data types — these are the most fundamental building blocks for storing data.",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment."
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Primitive Data Types.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java",
      "tags": [
        "concept"
      ]
    },
    {
      "qid": "ocjp-chapter-2-primitive-types-string-pool-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "OCJP Tricky",
      "question": "What is the output of this code? (OCJP)",
      "code": "String a = \"hello\";\nString b = \"hello\";\nSystem.out.println(a == b);",
      "answer": [
        "true"
      ],
      "explanation": "String literals are stored in the String Pool. \"hello\" is the same pooled reference, so == returns true. This is a classic OCJP trap — always use .equals() for value comparison.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-2-primitive-types-string-pool-2",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "OCJP Tricky",
      "question": "What is the output of this code? (OCJP)",
      "code": "String a = new String(\"hello\");\nString b = new String(\"hello\");\nSystem.out.println(a == b);",
      "answer": [
        "false"
      ],
      "explanation": "new String() always creates a new heap object. a and b point to different objects, so == compares references and returns false. Always use .equals() to compare String values.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_4_PrimitiveTypes_CodingChallenge/StringConcatChallenge.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-2-primitive-types-string-concat-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "String s = \"Java\";\ns.concat(\" is fun\");\nSystem.out.println(s);",
      "answer": [
        "Java"
      ],
      "explanation": "Strings are immutable. concat() returns a NEW String but does not modify s. Since the return value is ignored, s still holds \"Java\". This is a top OCJP gotcha.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Strings/StringExample.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-2-primitive-types-int-cast-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "int x = 5;\ndouble y = x / 2;\nSystem.out.println(y);",
      "answer": [
        "2.0"
      ],
      "explanation": "x and 2 are both int — integer division gives 2 (truncated). Then 2 is widened to 2.0 when assigned to double. To get 2.5, you need (double)x / 2.",
      "topicPath": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_3_Primitive_Data_Types/PrimitiveDataTypes.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    }
  ],
  "Chapter 3: Operators": [
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_0-what-is-the-output-of-system-out-println",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the output of: System.out.println(10 + 20 + \"Java\");",
      "modelAnswer": "Output: 30Java + is left-to-right: 10 + 20 = 30 (arithmetic, both ints), then 30 + \"Java\" = \"30Java\" (String concat).",
      "keyPoints": [
        "Output: 30Java",
        "+ is left-to-right: 10 + 20 = 30 (arithmetic, both ints), then 30 + \"Java\" = \"30Java\" (String concat)."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_1-what-is-the-output-of-system-out-println",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the output of: System.out.println(\"Java\" + 10 + 20);",
      "modelAnswer": "Output: Java1020 (NOT Java30) \"Java\" + 10 = \"Java10\" (String concat), then \"Java10\" + 20 = \"Java1020\". Once a String is the left operand, all + after it are concatenation.",
      "keyPoints": [
        "Output: Java1020 (NOT Java30)",
        "\"Java\" + 10 = \"Java10\" (String concat), then \"Java10\" + 20 = \"Java1020\". Once a String is the left operand, all + after it are concatenation."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_2-what-is-the-output-of-system-out-println",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the output of: System.out.println(\"Java\" + (10 + 20));",
      "modelAnswer": "Output: Java30 Parentheses force (10 + 20) to be evaluated as arithmetic first = 30. Then \"Java\" + 30 = \"Java30\". This is the FIX when you want arithmetic inside a String expression: wrap with parentheses.",
      "keyPoints": [
        "Output: Java30",
        "Parentheses force (10 + 20) to be evaluated as arithmetic first = 30. Then \"Java\" + 30 = \"Java30\".",
        "This is the FIX when you want arithmetic inside a String expression: wrap with parentheses."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_3-what-is-the-golden-rule-for-the-operator",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview"
      ],
      "question": "What is the golden rule for the + operator in Java when Strings are involved?",
      "modelAnswer": "Java evaluates + strictly left to right. If BOTH operands are numeric, + is arithmetic addition. The moment one operand is a String, + becomes String concatenation for that operation and all subsequent ones in the same expression. Use parentheses to control evaluation order: \"Score: \" + (a + b) gives arithmetic sum. \"Score: \" + a + b gives two separate concatenations.",
      "keyPoints": [
        "Java evaluates + strictly left to right. If BOTH operands are numeric, + is arithmetic addition. The moment one operand is a String, + becomes String concatenation for that operation and all subsequent ones in the same expression.",
        "Use parentheses to control evaluation order: \"Score: \" + (a + b) gives arithmetic sum. \"Score: \" + a + b gives two separate concatenations."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_4-what-is-wrong-with-writing-if-x-5-instea",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is wrong with writing if (x = 5) instead of if (x == 5)?",
      "modelAnswer": "= is the assignment operator, while == is the equality comparison operator. With int x, if (x = 5) does not compare anything; it tries to assign 5 to x and causes a compile-time error because if requires a boolean expression, not an int. The correct comparison is if (x == 5), which evaluates to true only when x currently holds the value 5.",
      "keyPoints": [
        "= is the assignment operator, while == is the equality comparison operator.",
        "With int x, if (x = 5) does not compare anything; it tries to assign 5 to x and causes a compile-time error because if requires a boolean expression, not an int.",
        "The correct comparison is if (x == 5), which evaluates to true only when x currently holds the value 5."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_5-what-is-the-output-of-int-x-10-string-re",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the output of: int x = 10; String result = (x > 5) ? \"big\" : \"small\"; System.out.println(result);",
      "modelAnswer": "Output: big The ternary operator evaluates the condition x > 5. Since 10 > 5 is true, Java chooses the first expression, which is \"big\".",
      "keyPoints": [
        "Output: big",
        "The ternary operator evaluates the condition x > 5. Since 10 > 5 is true, Java chooses the first expression, which is \"big\"."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_6-why-does-byte-b-10-b-5-compile-but-b-b-5",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview"
      ],
      "question": "Why does byte b = 10; b += 5; compile, but b = b + 5; does not?",
      "modelAnswer": "b += 5 is a compound assignment, and Java automatically inserts an implicit cast back to byte after doing the addition. b = b + 5 does not compile because b + 5 is promoted to int, and Java will not assign that int back to byte without an explicit cast. After b += 5, the value of b becomes 15.",
      "keyPoints": [
        "b += 5 is a compound assignment, and Java automatically inserts an implicit cast back to byte after doing the addition.",
        "b = b + 5 does not compile because b + 5 is promoted to int, and Java will not assign that int back to byte without an explicit cast.",
        "After b += 5, the value of b becomes 15."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_7-what-is-the-difference-between-and-when-",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between & and && when used with boolean expressions?",
      "modelAnswer": "&& is the short-circuit logical AND. If the left side is false, Java skips evaluating the right side. & on booleans still performs AND, but it always evaluates BOTH sides even when the left side is false. This matters when the right side has side effects or could throw an exception, such as checking obj != null && obj.isReady().",
      "keyPoints": [
        "&& is the short-circuit logical AND. If the left side is false, Java skips evaluating the right side.",
        "& on booleans still performs AND, but it always evaluates BOTH sides even when the left side is false.",
        "This matters when the right side has side effects or could throw an exception, such as checking obj != null && obj.isReady()."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_8-in-system-out-println-myvar-what-does-th",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview"
      ],
      "question": "In System.out.println(myVar), what does the println parameter show after myVar++?",
      "modelAnswer": "It shows the updated value of myVar, because myVar++ has already executed before println receives the variable's current int value.",
      "keyPoints": [
        "It shows the updated value of myVar, because myVar++ has already executed before println receives the variable's current int value."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_9-how-do-the-operands-you-choose-affect-th",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "How do the operands you choose affect the + operator?",
      "modelAnswer": "If both operands are numeric, + performs addition. If either operand is a String, + performs concatenation for that operation.",
      "keyPoints": [
        "If both operands are numeric, + performs addition. If either operand is a String, + performs concatenation for that operation."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_10-what-is-important-about-the-right-hand-v",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What is important about the right-hand value in myVar += 2?",
      "modelAnswer": "The right-hand value is the amount added before assigning back to myVar; compound assignment also performs an implicit cast when needed.",
      "keyPoints": [
        "The right-hand value is the amount added before assigning back to myVar; compound assignment also performs an implicit cast when needed."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_11-which-statement-correctly-defines-an-ope",
      "difficulty": "easy",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview"
      ],
      "question": "Which statement correctly defines an operator, an operand, and an expression?",
      "options": [
        "An operator is the value being calculated, and an operand is the symbol that calculates it.",
        "An operand is always a literal value and can never be a variable or a method call.",
        "An expression is any line of code that ends with a semicolon.",
        "An operator is the symbol that performs an operation, an operand is a value or variable it acts on, and an expression is a combination that evaluates to one value."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "the two are the other way round. The symbol is the operator and the values are the operands.",
        "1": "an operand may be a literal, a variable, or a whole sub-expression such as (a + b).",
        "2": "a line ending in a semicolon is a statement. An expression is defined by producing a value, not by the semicolon."
      },
      "explanation": "In 15 + 12, the + is the operator and 15 and 12 are the operands. The whole thing is an expression, because it evaluates to a single value, 27.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_12-reading-strictly-left-to-right-what-is-p",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Reading strictly left to right, what is printed by this statement?",
      "code": "System.out.println(10 + 20 + \"Java\");",
      "options": [
        "Java30",
        "1020Java",
        "It does not compile, because + cannot mix int and String.",
        "30Java"
      ],
      "answer": 3,
      "whyByOption": {
        "0": "the string is on the right here, so it cannot come out in front of the number.",
        "1": "1020Java is what you get when the String appears first, as in \"Java\" + 10 + 20.",
        "2": "+ with a String operand is legal. It concatenates rather than adding."
      },
      "explanation": "Java evaluates + strictly from left to right. 10 + 20 are both int, so that is arithmetic and gives 30. Then 30 + \"Java\" involves a String, so it becomes concatenation and produces 30Java.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_13-what-is-printed-when-the-string-operand-",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is printed when the String operand comes first?",
      "code": "System.out.println(\"Java\" + 10 + 20);",
      "options": [
        "30Java",
        "Java1020",
        "It does not compile.",
        "Java30"
      ],
      "answer": 1,
      "whyByOption": {
        "0": "the String is first, so the digits cannot appear before the word.",
        "2": "this is valid Java. It simply concatenates instead of adding.",
        "3": "to get Java30 the addition must be forced first with parentheses: \"Java\" + (10 + 20)."
      },
      "explanation": "Once the left operand is a String, every following + is concatenation. \"Java\" + 10 gives \"Java10\", and \"Java10\" + 20 gives \"Java1020\".",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_14-why-does-byte-b-10-b-5-compile-while-b-b",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "ocjp"
      ],
      "question": "Why does `byte b = 10; b += 5;` compile, while `b = b + 5;` does not?",
      "options": [
        "b + 5 is evaluated at runtime, so the compiler cannot check it.",
        "Compound assignment performs an implicit narrowing cast back to byte, while b + 5 is promoted to int and cannot be assigned to byte without a cast.",
        "The two forms are identical, and both compile.",
        "+= is only allowed on byte variables."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "the compiler resolves types at compile time, which is exactly why it rejects the plain addition.",
        "2": "only the compound form compiles. The plain form is a compile-time error unless you write b = (byte)(b + 5);",
        "3": "+= works on every numeric type, not only byte."
      },
      "explanation": "A compound assignment such as += is defined to perform the arithmetic and then cast the result back to the type of the left-hand variable. A plain addition promotes byte to int, and Java will not narrow back automatically.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_15-what-is-the-difference-between-and-for-b",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "ocjp"
      ],
      "question": "What is the difference between & and && for boolean expressions?",
      "options": [
        "&& can only be used with numbers, not with booleans.",
        "& short-circuits, and && always evaluates both sides.",
        "&& short-circuits, so the right side is skipped when the left side is false. & always evaluates both sides.",
        "Both short-circuit in exactly the same way."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "&& is a logical operator for booleans. The bitwise form & also works on integers, but that is a separate use.",
        "1": "the behaviour is the other way round. & is the non-short-circuiting form.",
        "3": "they differ precisely in whether the right operand is evaluated."
      },
      "explanation": "Short-circuiting is what makes a guard such as obj != null && obj.isReady() safe. With &, the right side would still run and could throw a NullPointerException.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_16-what-are-the-results-of-10-3-and-10-3",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview"
      ],
      "question": "What are the results of 10 / 3 and 10 % 3?",
      "options": [
        "3 and 0",
        "3 and 1",
        "3.33 and 1",
        "1 and 3"
      ],
      "answer": 1,
      "whyByOption": {
        "0": "the remainder is 1, not 0. 3 * 3 is 9, and 10 - 9 = 1.",
        "2": "10 / 3 cannot produce 3.33, because both operands are int.",
        "3": "the two results are swapped. / gives the whole part and % gives the remainder."
      },
      "explanation": "With two int operands, / is integer division and discards the remainder, so 10 / 3 is 3. The % operator returns that remainder, which is 1.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_17-what-happens-with-int-x-5-if-x-5",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "ocjp"
      ],
      "question": "What happens with `int x = 5; if (x = 5) { ... }`?",
      "options": [
        "It does not compile, because x = 5 is an int assignment and if requires a boolean condition.",
        "It compiles and the block always runs.",
        "It compiles and prints a warning only.",
        "It compiles but the block never runs."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "it never reaches runtime. The type error is found while compiling.",
        "2": "Java reports this as an error, not a warning.",
        "3": "the code does not compile at all, so nothing runs."
      },
      "explanation": "= assigns a value, while == compares. The assignment x = 5 has the type int, and a Java if requires a boolean, so the compiler rejects it. This is why the mistake is caught rather than silently misbehaving.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_18-what-is-printed-by-this-statement",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "ocjp"
      ],
      "question": "What is printed by this statement?",
      "code": "System.out.println(2 + 3 * 4);",
      "options": [
        "20, because + is evaluated first.",
        "It does not compile without parentheses.",
        "24, because the expression is read left to right.",
        "14, because * is evaluated before +."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "+ is lower precedence than *, so it cannot run first.",
        "1": "the expression is perfectly legal, and parentheses are only needed to change the order.",
        "2": "left-to-right order applies between operators of the same precedence, which these are not."
      },
      "explanation": "Java applies operator precedence: multiplication binds more tightly than addition. So 3 * 4 is worked out first, giving 12, and then 2 is added.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_19-does-this-condition-compile",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "ocjp"
      ],
      "question": "Does this condition compile?",
      "code": "int a = 5, b = 3, c = 1;\nif (a > b > c) { System.out.println(\"yes\"); }",
      "options": [
        "Yes, because Java compares all three values at once.",
        "No. a > b produces a boolean, and a boolean cannot be compared with c using >.",
        "Yes, and it prints nothing.",
        "Yes, and it prints yes."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "Java has no three-way comparison like that. You must chain with &&.",
        "2": "it never reaches runtime for the same reason.",
        "3": "the compiler rejects the expression, so nothing runs."
      },
      "explanation": "The > operator produces a boolean. The second > then tries to compare that boolean with the int c, and Java allows only numeric operands there. The intent has to be written as a > b && b > c.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_20-does-this-line-compile",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview"
      ],
      "question": "Does this line compile?",
      "code": "int x = true ? 1 : \"one\";",
      "options": [
        "Yes, and x becomes the text \"one\".",
        "Yes, because Java converts the String to a number.",
        "Yes, and x becomes 1.",
        "No. The two branches have incompatible types, int and String."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "the same type problem stops it, and \"one\" could never go into an int.",
        "1": "Java does not convert text to a number automatically. That is what Integer.parseInt is for.",
        "2": "it does not compile, so nothing is assigned."
      },
      "explanation": "The ternary operator produces one value, so both branches must have a compatible type. 1 is an int and \"one\" is a String, which means there is no common type for the result.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_21-what-is-printed-by-this-code",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "ocjp"
      ],
      "question": "What is printed by this code?",
      "code": "String s = \"Total: \";\ns += 10 + 20;\nSystem.out.println(s);",
      "options": [
        "It does not compile, because += cannot be used with a String.",
        "Total: 1020, because += concatenates everything.",
        "Total: 30, because 10 + 20 is worked out before the concatenation.",
        "Total: 30 is not possible, since += only concatenates text."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "+= with a String is legal and is one of the most common uses of compound assignment.",
        "1": "1020 would need the String to be involved in the addition, which it is not.",
        "3": "+= performs concatenation for a String, and the numeric part is already resolved."
      },
      "explanation": "The right-hand side is evaluated first. Both 10 and 20 are int, so that part is arithmetic and gives 30. Only then is 30 appended to the String, which is why the result is Total: 30.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-1-operators-operands-and-expressions-operatorsoperandsexpressions-java_custom_22-what-does-the-operator-do-and-what-is-pr",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview"
      ],
      "question": "What does the ! operator do, and what is printed?",
      "code": "boolean ready = false;\nSystem.out.println(!ready);",
      "options": [
        "false, because ! leaves the value unchanged.",
        "true, because ! inverts a boolean value.",
        "-1, because ! negates the value numerically.",
        "It does not compile, because ! needs a number."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "inversion is exactly what it does, so the value must change.",
        "2": "there is no numeric negation for boolean. For an int, the unary - is the operator that flips the sign.",
        "3": "! requires a boolean, and ready is one."
      },
      "explanation": "! is the logical NOT operator. It turns true into false and false into true, and it works only on boolean expressions.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java"
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-2-operatorschallenge-operatorchallenge-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operator Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Got some remainder\");",
      "answer": [
        "Got some remainder"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_2_OperatorsChallenge/OperatorChallenge.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-3-operators_src-chapter-3-operators-sub-chapter-3-deepproblems-expressionevaluatordeepproblem-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Expression Evaluator Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Power calculations:\");",
      "answer": [
        "Power calculations:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_3_DeepProblems/ExpressionEvaluatorDeepProblem.java",
      "tags": [
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-3-operators-prefix-postfix-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "int a = 5;\nint b = a++ + ++a;\nSystem.out.println(b);",
      "answer": [
        "12"
      ],
      "explanation": "a++ uses a (5) then increments to 6. ++a increments a to 7 then uses 7. So b = 5 + 7 = 12. Post-increment vs pre-increment is a classic OCJP trap.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_1_Operators_Operands_And_Expressions/OperatorsOperandsExpressions.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-3-operators-short-circuit-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "int x = 0;\nboolean r = (x != 0) && (10/x > 1);\nSystem.out.println(r);",
      "answer": [
        "false"
      ],
      "explanation": "Short-circuit evaluation: since (x != 0) is false, the right side (10/x) is never evaluated — no ArithmeticException. The result is false. This is a key OCJP concept.",
      "topicPath": "src/Chapter_3_Operators/Sub_Chapter_2_OperatorsChallenge/OperatorChallenge.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    }
  ],
  "Chapter 4: Statements And Indentations": [
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "question": "What does this code print?",
      "code": "System.out.println(\"This is a test\"); // This also represents complete statement.",
      "answer": [
        "This is a test"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_0-what-is-the-difference-between-a-stateme",
      "difficulty": "medium",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between a statement and an expression in Java?",
      "modelAnswer": "An expression produces a value, such as 2 + 3 or x > 5. A statement is a complete instruction, such as int x = 5; or System.out.println(x);.",
      "keyPoints": [
        "An expression produces a value, such as 2 + 3 or x > 5.",
        "A statement is a complete instruction, such as int x = 5; or System.out.println(x);."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_1-do-whitespace-and-indentation-affect-jav",
      "difficulty": "medium",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "interview"
      ],
      "question": "Do whitespace and indentation affect Java compilation?",
      "modelAnswer": "No. Java mostly ignores extra spaces, tabs, and line breaks between tokens. They matter for readability, but not for the meaning of correctly separated code.",
      "keyPoints": [
        "No. Java mostly ignores extra spaces, tabs, and line breaks between tokens.",
        "They matter for readability, but not for the meaning of correctly separated code."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_2-can-one-statement-span-multiple-lines-or",
      "difficulty": "medium",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "interview"
      ],
      "question": "Can one statement span multiple lines or multiple statements share one line?",
      "modelAnswer": "Yes. A statement can span lines, and multiple statements can appear on one line if each is properly terminated. The semicolon ends most statements, not the line break.",
      "keyPoints": [
        "Yes. A statement can span lines, and multiple statements can appear on one line if each is properly terminated.",
        "The semicolon ends most statements, not the line break."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_3-is-int-x-5-a-statement-or-an-expression",
      "difficulty": "medium",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Is int x = 5; a statement or an expression?",
      "modelAnswer": "It is a declaration statement. The whole line is not just an expression, even though it contains the assignment expression x = 5.",
      "keyPoints": [
        "It is a declaration statement.",
        "The whole line is not just an expression, even though it contains the assignment expression x = 5."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_4-in-a-multi-line-call-like-system-out-pri",
      "difficulty": "medium",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "interview"
      ],
      "question": "In a multi-line call like System.out.println(\"This is\" + \" another\" + \" still more.\"), what is the parameter?",
      "modelAnswer": "The parameter is the single combined String produced by the concatenation expression; line breaks in source code do not create separate parameters.",
      "keyPoints": [
        "The parameter is the single combined String produced by the concatenation expression; line breaks in source code do not create separate parameters."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_5-does-indentation-change-the-parameter-pa",
      "difficulty": "hard",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Does indentation change the parameter passed to println?",
      "modelAnswer": "No. Indentation and most whitespace are ignored by the compiler; the expression before the semicolon determines the parameter value.",
      "keyPoints": [
        "No. Indentation and most whitespace are ignored by the compiler; the expression before the semicolon determines the parameter value."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_6-what-tells-java-where-the-println-statem",
      "difficulty": "medium",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What tells Java where the println statement with its parameter ends?",
      "modelAnswer": "The semicolon ends the statement. A method call and its parameter can be split across multiple lines before that semicolon.",
      "keyPoints": [
        "The semicolon ends the statement. A method call and its parameter can be split across multiple lines before that semicolon."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_7-what-is-the-difference-between-a-stateme",
      "difficulty": "easy",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between a statement and an expression?",
      "options": [
        "They are two names for the same thing.",
        "An expression produces a value, such as 2 + 3, while a statement is a complete instruction, such as int x = 5;",
        "An expression is always a whole line, and a statement is always a fragment.",
        "A statement produces a value, while an expression is a complete instruction."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "int x = 5; contains the expression x = 5, but the whole declaration is a statement, so the two are not the same.",
        "2": "expressions can be fragments such as 2 + 3, and statements are the ones usually written as a line.",
        "3": "this is reversed. 2 + 3 yields a value, so it is an expression."
      },
      "explanation": "An expression evaluates to something. A statement is the complete unit of execution that the compiler acts on, and most statements end in a semicolon.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_8-do-whitespace-and-indentation-affect-whe",
      "difficulty": "medium",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "interview"
      ],
      "question": "Do whitespace and indentation affect whether Java code compiles?",
      "options": [
        "Yes, but only inside an if statement.",
        "Only tabs cause an error, not spaces.",
        "Yes. Incorrect indentation is a compile-time error.",
        "No. The compiler ignores extra spaces, tabs and line breaks between tokens, though they matter for readability."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "an if statement is not special in this respect.",
        "1": "neither tabs nor spaces change compilation. Mixing them only affects how the code looks.",
        "2": "Java has no rule requiring indentation. Unindented code still compiles."
      },
      "explanation": "Whitespace between tokens is discarded by the compiler. Indentation exists for humans, and it shows the nesting of code blocks.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_9-can-a-single-statement-be-spread-over-se",
      "difficulty": "medium",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "interview"
      ],
      "question": "Can a single statement be spread over several lines?",
      "options": [
        "Yes, but only for comments.",
        "Yes. What ends most statements is the semicolon, not the line break.",
        "No. Every statement must be written on exactly one line.",
        "Only if the statement is a method call."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "comments have their own rules, and this applies to ordinary statements.",
        "2": "line breaks are whitespace and carry no meaning between tokens.",
        "3": "any statement may be wrapped, including declarations and assignments."
      },
      "explanation": "Java does not treat a newline as a terminator. A concatenation or method call may be split over many lines and still be one statement, as long as it ends with a semicolon.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_10-what-decides-where-a-println-statement-a",
      "difficulty": "medium",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "ocjp"
      ],
      "question": "What decides where a println statement and its parameter end?",
      "options": [
        "The semicolon ends the statement. A method call and its arguments may be split across several lines before it.",
        "The newline character in the source file ends the statement.",
        "The indentation of the next line ends the statement.",
        "The closing parenthesis ends the statement."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "source line breaks are whitespace, so they end nothing.",
        "2": "indentation is for readability only.",
        "3": "the parenthesis closes the argument list, but the statement is not complete until the semicolon."
      },
      "explanation": "A method call is one statement that runs until the semicolon. Line breaks inside the parentheses are ignored, so a long concatenation can be formatted over several lines.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_11-which-of-these-is-not-one-of-the-common-",
      "difficulty": "easy",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "interview"
      ],
      "question": "Which of these is NOT one of the common statement types in Java?",
      "options": [
        "A method call statement, such as System.out.println(\"hi\");",
        "A comparison that evaluates to true or false but is never used, such as (x > 5) on its own line.",
        "A declaration statement, such as int x = 5;",
        "An assignment statement, such as x = 10;"
      ],
      "answer": 1,
      "whyByOption": {
        "0": "a method call followed by a semicolon is a statement.",
        "2": "int x = 5; is a declaration statement.",
        "3": "x = 10; is an assignment statement."
      },
      "explanation": "A bare comparison is an expression, not a complete statement, so the compiler rejects it. The other three are the everyday statement forms.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_12-does-this-code-compile",
      "difficulty": "medium",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "ocjp"
      ],
      "question": "Does this code compile?",
      "code": "public static void main(String[] args) {\nint x = 5\nSystem.out.println(x);\n}",
      "options": [
        "Yes, and it prints 5.",
        "Yes, because a line break ends the statement.",
        "Yes, because Java adds the semicolon for you.",
        "No. The missing semicolon after int x = 5 is a compile error."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "nothing runs, because the file never compiles.",
        "1": "this is the common misconception. The statement ends at the semicolon, and the line break is only whitespace.",
        "2": "Java never inserts missing punctuation."
      },
      "explanation": "A semicolon, not a line break, ends most statements. Without it the compiler cannot tell where the declaration stops, so it reports an error at that line.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_13-what-is-the-effect-of-the-semicolon-in-t",
      "difficulty": "medium",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "interview"
      ],
      "question": "What is the effect of the semicolon in this line?",
      "code": "int x = 5;;",
      "options": [
        "It compiles. The second semicolon is an empty statement that does nothing.",
        "It is a compile error, because only one semicolon is allowed.",
        "It creates a second variable named x.",
        "It sets x to 0."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "an empty statement is valid Java, which is exactly what makes the mistake so easy to miss.",
        "2": "declaring x twice with the same type in one scope would be an error, but that is not what this line does.",
        "3": "an empty statement performs no assignment."
      },
      "explanation": "A lone semicolon is a complete, empty statement. Java allows it, which is why a stray semicolon after an if condition is legal and silently changes the meaning of the code.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_14-which-of-these-is-a-single-valid-stateme",
      "difficulty": "easy",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "interview"
      ],
      "question": "Which of these is a single valid statement?",
      "options": [
        "x > 5",
        "int x = 5;",
        "5 + 3",
        "\"hello\""
      ],
      "answer": 1,
      "whyByOption": {
        "0": "x > 5 is an expression that produces a boolean. Alone, it is not a statement.",
        "2": "5 + 3 is an expression that produces 8. It has no effect on its own.",
        "3": "a String literal is an expression. Without a semicolon or a use for the value, it is not a statement."
      },
      "explanation": "A statement is a complete instruction. A declaration with a semicolon qualifies. The others are expressions, which produce a value, and on their own they are not complete instructions.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-4-statements-and-indentations_src-chapter-4-statements-and-indentations-statementswhitespaceandindentation-java_custom_15-where-can-the-variable-declared-here-be-",
      "difficulty": "medium",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "ocjp"
      ],
      "question": "Where can the variable declared here be used?",
      "code": "if (true) {\nint inner = 10;\n}\nSystem.out.println(inner);",
      "options": [
        "It compiles and prints 10.",
        "It compiles and prints 0, because inner loses its value.",
        "It does not compile, because inner is scoped to the block and is gone after the closing brace.",
        "It compiles only if inner is declared final."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "the name is out of scope at that point.",
        "1": "the variable is not reset, it is simply no longer visible.",
        "3": "final changes whether the value can be reassigned, not how long the variable lives."
      },
      "explanation": "A variable declared inside a block exists only inside that block. Once the closing brace is reached, inner no longer exists, so the println cannot refer to it.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java"
    },
    {
      "qid": "ocjp-chapter-4-statements-and-indentations-switch-fallthrough-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 4: Statements And Indentations",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "int x = 2;\nswitch(x) {\n  case 1: System.out.println(\"one\");\n  case 2: System.out.println(\"two\");\n  case 3: System.out.println(\"three\");\n  default: System.out.println(\"default\");\n}",
      "answer": [
        "two\nthree\ndefault"
      ],
      "explanation": "Classic switch fall-through! Without break statements, execution falls through to every case below the match. case 2 matches, then falls to case 3, then default. Always add break unless fall-through is intentional.",
      "topicPath": "src/Chapter_4_Statements_And_Indentations/StatementsWhiteSpaceAndIndentation.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    }
  ],
  "Chapter 5: If Else Statements": [
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "question": "What does this code print?",
      "code": "System.out.println(\"It is not an alien!\");",
      "answer": [
        "It is not an alien!"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_0-what-is-the-dangling-else-problem-in-jav",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview"
      ],
      "question": "What is the dangling else problem in Java?",
      "modelAnswer": "A dangling else happens when nested if statements omit braces and it is unclear which if the else belongs to. In Java, else always matches the nearest unmatched if.",
      "keyPoints": [
        "A dangling else happens when nested if statements omit braces and it is unclear which if the else belongs to.",
        "In Java, else always matches the nearest unmatched if."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_1-can-an-if-condition-use-non-boolean-type",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview"
      ],
      "question": "Can an if condition use non-boolean types in Java?",
      "modelAnswer": "No. Java requires the condition to be a boolean expression. Unlike C, Java does not allow numbers or object references directly as if conditions.",
      "keyPoints": [
        "No. Java requires the condition to be a boolean expression.",
        "Unlike C, Java does not allow numbers or object references directly as if conditions."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_2-when-should-you-use-the-ternary-operator",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview"
      ],
      "question": "When should you use the ternary operator instead of if-else?",
      "modelAnswer": "Use the ternary operator for short value-producing decisions, such as assigning one of two values. Use if-else when the logic is longer or you need multiple statements.",
      "keyPoints": [
        "Use the ternary operator for short value-producing decisions, such as assigning one of two values.",
        "Use if-else when the logic is longer or you need multiple statements."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_3-why-are-braces-recommended-even-for-a-si",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview"
      ],
      "question": "Why are braces recommended even for a single if statement?",
      "modelAnswer": "Braces make the controlled block explicit and prevent bugs when more lines are added later. They also make nested conditions easier to read.",
      "keyPoints": [
        "Braces make the controlled block explicit and prevent bugs when more lines are added later.",
        "They also make nested conditions easier to read."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_4-what-happens-here-int-x-5-if-x-5-system-",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What happens here: int x = 5; if (x = 5) { System.out.println(\"Hi\"); }?",
      "modelAnswer": "It does not compile because x = 5 is an int assignment expression, not a boolean condition. Java if conditions must evaluate to true or false.",
      "keyPoints": [
        "It does not compile because x = 5 is an int assignment expression, not a boolean condition.",
        "Java if conditions must evaluate to true or false."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_5-how-many-statements-does-if-control-here",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "How many statements does if control here: if (true) System.out.println(\"A\"); System.out.println(\"B\");?",
      "modelAnswer": "Only the first statement after if is controlled by the condition. The second println is outside the if unless braces are used.",
      "keyPoints": [
        "Only the first statement after if is controlled by the condition.",
        "The second println is outside the if unless braces are used."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_6-in-main-string-args-what-does-the-args-p",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview"
      ],
      "question": "In main(String[] args), what does the args parameter contain?",
      "modelAnswer": "It contains command-line arguments as a zero-based String array, in the same order the user supplied them when starting the program.",
      "keyPoints": [
        "It contains command-line arguments as a zero-based String array, in the same order the user supplied them when starting the program."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_7-what-parameter-value-does-system-out-pri",
      "difficulty": "hard",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What parameter value does System.out.println(null) print?",
      "modelAnswer": "It prints the literal text \"null\" followed by a newline; careful, it does not print an empty line.",
      "keyPoints": [
        "It prints the literal text \"null\" followed by a newline; careful, it does not print an empty line."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_8-in-condition-a-b-what-do-the-second-and-",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "In condition ? a : b, what do the second and third operands mean?",
      "modelAnswer": "The second operand is the value used when the condition is true, and the third operand is the value used when the condition is false.",
      "keyPoints": [
        "The second operand is the value used when the condition is true, and the third operand is the value used when the condition is false."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_9-what-does-this-code-print",
      "difficulty": "hard",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "ocjp"
      ],
      "question": "What does this code print?",
      "code": "int x = 5;\nif (x > 3) ; { System.out.println(\"Hello\"); }",
      "options": [
        "It does not compile.",
        "Hello, and it is printed even if the condition were false.",
        "Nothing at all.",
        "Hello, but only when x > 3 is true."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "it is legal Java, which is exactly what makes the mistake so easy to miss.",
        "2": "the block is no longer controlled by the if, so it does run.",
        "3": "the block is outside the if, so the condition no longer affects it."
      },
      "explanation": "The semicolon straight after the condition ends the if statement, creating an empty body. The braced block that follows is then a separate statement that always runs. This is why a semicolon must never be placed after if (condition).",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_10-why-is-it-recommended-to-always-use-brac",
      "difficulty": "easy",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview"
      ],
      "question": "Why is it recommended to always use braces with if, even for a single statement?",
      "options": [
        "Braces make the controlled block explicit and prevent bugs when more lines are added later.",
        "Braces are needed only when the condition is complex.",
        "Java requires braces, otherwise the code will not compile.",
        "Braces make the code run faster."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "the risk applies to simple conditions too.",
        "2": "braces are optional for a single statement, which is the reason the guidance exists.",
        "3": "braces have no effect on execution speed."
      },
      "explanation": "Without braces, only the single next statement belongs to the if. A later edit that adds a line is easy to get wrong, and the second line silently falls outside the condition.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_11-in-the-ternary-expression-condition-a-b-",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview"
      ],
      "question": "In the ternary expression condition ? a : b, what are the three parts?",
      "options": [
        "Two conditions and one value.",
        "An assignment, a variable, and a literal.",
        "A boolean condition, the value used when it is true, and the value used when it is false.",
        "A method call, its argument, and its return value."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "only the first part is a condition; the other two are the results.",
        "1": "there is no assignment in the operator itself.",
        "3": "it is an operator, not a method call."
      },
      "explanation": "The ternary operator is a compact if-else that produces a value. The condition must be boolean, and the two result expressions should be of compatible types.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_12-with-braces-omitted-which-if-does-an-els",
      "difficulty": "hard",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "ocjp"
      ],
      "question": "With braces omitted, which if does an else belong to?",
      "code": "if (a) if (b) x = 1; else x = 2;",
      "options": [
        "The outer if, because else always belongs to the first if.",
        "It does not compile without braces.",
        "The inner if, because else always binds to the nearest unmatched if.",
        "It is ambiguous and the compiler picks at random."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "binding to the outer if would change the meaning, and Java does not do that.",
        "1": "it compiles, and it compiles in a way that often surprises people.",
        "3": "the rule is fixed and deterministic, not random."
      },
      "explanation": "This is the dangling else problem. Java resolves it by binding else to the closest if that does not already have one, which is the inner if here. Braces remove the doubt.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_13-can-a-java-if-condition-use-a-number-or-",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "ocjp"
      ],
      "question": "Can a Java if condition use a number or an object reference directly?",
      "options": [
        "No. The condition must be a boolean expression, unlike C where a number can be tested.",
        "Yes, but only for int values.",
        "Yes, where null means false.",
        "Yes, where 0 means false and any other number means true."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "no numeric type is accepted, not even int.",
        "2": "an object reference cannot be used directly either. Write if (obj != null) instead.",
        "3": "that rule belongs to C and C++, not to Java."
      },
      "explanation": "Java is strict here. Something like if (1) is a compile-time error, and it must be written as a real comparison such as if (x != 0).",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_14-how-many-statements-does-the-if-control-",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "ocjp"
      ],
      "question": "How many statements does the if control here?",
      "code": "if (true) System.out.println(\"A\");\nSystem.out.println(\"B\");",
      "options": [
        "Only the first, so B is printed whatever the condition is.",
        "It does not compile without braces.",
        "Neither, because there are no braces.",
        "Both, because the condition is true."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "braces are optional for one statement.",
        "2": "an if with no braces still controls the single following statement.",
        "3": "braces would be needed to control both lines."
      },
      "explanation": "Without braces, an if controls exactly one statement, the one immediately after it. Everything after that is outside the condition.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_15-what-is-the-difference-between-and-in-a-",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between && and || in a condition?",
      "options": [
        "&& requires both sides to be true, while || requires at least one side to be true.",
        "&& works only with numbers, and || only with Strings.",
        "Both mean the same thing.",
        "&& requires at least one side to be true, while || requires both."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "both operators work on boolean expressions.",
        "2": "they differ, and swapping them changes when a block runs.",
        "3": "the two are swapped."
      },
      "explanation": "They are the logical AND and OR operators. Both also short-circuit, so the right side is skipped once the answer is already known.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_16-what-is-printed-by-this-code",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "ocjp"
      ],
      "question": "What is printed by this code?",
      "code": "int score = 75;\nif (score >= 90) { System.out.println(\"A\"); }\nelse if (score >= 70) { System.out.println(\"B\"); }\nelse if (score >= 50) { System.out.println(\"C\"); }",
      "options": [
        "B, because the first matching condition wins and the rest are skipped.",
        "A, because 75 is more than 50.",
        "B and C, because both conditions are true.",
        "C, because score is also at least 50."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "75 is less than 90, so the first condition is false.",
        "2": "only one branch of an if/else-if chain runs.",
        "3": "the C branch is never tested, because the chain already stopped."
      },
      "explanation": "An else-if chain is checked from the top and stops at the first true condition. 75 fails the >= 90 test and passes >= 70, so B is printed and the remaining branches are never reached.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_17-why-is-this-condition-safe-even-when-nam",
      "difficulty": "hard",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "ocjp"
      ],
      "question": "Why is this condition safe, even when name is null?",
      "code": "if (name != null && name.length() > 5) { ... }",
      "options": [
        "Java converts null to an empty String before the check.",
        "&& short-circuits, so the right side is skipped when name is null.",
        "&& always evaluates both sides, so it would throw a NullPointerException.",
        "The condition is not safe, and it always throws."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "null is not converted. Calling a method on it is what throws.",
        "2": "only the non-short-circuiting & evaluates both sides. That version would throw.",
        "3": "the guard exists precisely to prevent the exception."
      },
      "explanation": "Short-circuit evaluation stops as soon as the answer is known. When name is null the left side is false, so the length() call is never made and the exception cannot happen.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_18-what-is-printed-by-this-code",
      "difficulty": "hard",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "ocjp"
      ],
      "question": "What is printed by this code?",
      "code": "String a = \"hello\";\nString b = new String(\"hello\");\nif (a == b) { System.out.println(\"equal\"); }\nelse { System.out.println(\"not equal\"); }",
      "options": [
        "equal, because both strings contain the same characters.",
        "not equal, because == compares references and these are two different objects.",
        "equal, because == compares String content in Java.",
        "It does not compile, because Strings cannot be compared with ==."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "content is what equals compares, not ==.",
        "2": "== compares references. equals is the method that compares content.",
        "3": "it compiles for any reference type, which is why the bug is so easy to make."
      },
      "explanation": "The == operator on object references asks whether both point to the same object. new String always creates a fresh object, so the references differ even though the characters match. Use equals for content.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_19-what-does-this-code-print",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview"
      ],
      "question": "What does this code print?",
      "code": "int x = 10;\nif (x > 5); { System.out.println(\"big\"); }",
      "options": [
        "big, and it would print even if x were 1.",
        "nothing at all.",
        "big, but only when x > 5 is true.",
        "It does not compile, because of the semicolon."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "the block is unconditional, so it always prints.",
        "2": "the block is outside the if, so the condition cannot affect it.",
        "3": "it is legal Java, and that is what makes the mistake dangerous."
      },
      "explanation": "The semicolon right after the condition ends the if statement, giving it an empty body. The braced block is then a separate statement that always runs, so the condition no longer controls it.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-1-if-then-else-control-statement-ifexample-java_custom_20-what-is-the-value-of-result",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview"
      ],
      "question": "What is the value of result?",
      "code": "int result = (10 > 5) ? 1 : 2 + 3;",
      "options": [
        "1, because the condition is true and only that branch is used.",
        "4, because the ternary is evaluated after the addition.",
        "It does not compile, because the branches are different expressions.",
        "6, because the false branch is added."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "the branches of a ternary are alternatives, never combined.",
        "2": "both branches are int here, so the types are compatible.",
        "3": "the false branch is not used, and 2 + 3 is not added to the result."
      },
      "explanation": "The ternary evaluates only the branch it needs. 10 > 5 is true, so the value is the first branch, 1. The expression 2 + 3 on the other side is never evaluated.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java"
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-2-code-block-if-then-else-challenge-codeblocksifthenelse-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "Code Blocks If Then Else",
      "question": "What does this code print?",
      "code": "System.out.println(\"Your score was less than 5000 but greater than 1000\");",
      "answer": [
        "Your score was less than 5000 but greater than 1000"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_2_Code_Block_If_Then_Else_Challenge/CodeBlocksIfThenElse.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-2-code-block-if-then-else-challenge-codeblocksifthenelse-java_custom_0-what-single-argument-is-passed-to-system",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "Code Blocks If Then Else",
      "tags": [
        "interview"
      ],
      "question": "What single argument is passed to System.out.println(\"Your final score was \" + finalScore)?",
      "modelAnswer": "The concatenation expression is evaluated first, producing one String that println receives and prints with a newline.",
      "keyPoints": [
        "The concatenation expression is evaluated first, producing one String that println receives and prints with a newline."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_2_Code_Block_If_Then_Else_Challenge/CodeBlocksIfThenElse.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-2-code-block-if-then-else-challenge-codeblocksifthenelse-java_custom_1-in-an-if-else-if-chain-with-parameter-li",
      "difficulty": "hard",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "Code Blocks If Then Else",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "In an if/else-if chain with parameter-like conditions, what happens if two conditions could both be true?",
      "modelAnswer": "Only the first true branch executes; later branches are skipped, so order conditions carefully.",
      "keyPoints": [
        "Only the first true branch executes; later branches are skipped, so order conditions carefully."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_2_Code_Block_If_Then_Else_Challenge/CodeBlocksIfThenElse.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-5-if-else-statements_src-chapter-5-if-else-statements-sub-chapter-2-code-block-if-then-else-challenge-codeblocksifthenelse-java_custom_2-how-should-a-caller-choose-values-for-st",
      "difficulty": "medium",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "Code Blocks If Then Else",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "How should a caller choose values for String[] args in main?",
      "modelAnswer": "Provide command-line words after the class name; Java stores them as args[0], args[1], and so on, using zero-based indexing.",
      "keyPoints": [
        "Provide command-line words after the class name; Java stores them as args[0], args[1], and so on, using zero-based indexing."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_2_Code_Block_If_Then_Else_Challenge/CodeBlocksIfThenElse.java"
    },
    {
      "qid": "ocjp-chapter-5-if-else-statements-switch-fallthrough-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 5: If Else Statements",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "int x = 2;\nswitch(x) {\n  case 1: System.out.println(\"one\");\n  case 2: System.out.println(\"two\");\n  case 3: System.out.println(\"three\");\n  default: System.out.println(\"default\");\n}",
      "answer": [
        "two\nthree\ndefault"
      ],
      "explanation": "Classic switch fall-through! Without break statements, execution falls through to every case below the match. case 2 matches, then falls to case 3, then default. Always add break unless fall-through is intentional.",
      "topicPath": "src/Chapter_5_If_Else_Statements/Sub_Chapter_1_If_Then_Else_Control_Statement/IfExample.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    }
  ],
  "Chapter 6: Methods In Java": [
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_0-is-java-pass-by-value-or-pass-by-referen",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "interview"
      ],
      "question": "Is Java pass-by-value or pass-by-reference?",
      "modelAnswer": "Java is ALWAYS pass-by-value. For primitives, the actual value is copied into the method parameter, so changing the parameter does not change the caller's variable. For objects, the value being copied is the reference. That means the method receives a copy of the reference to the same object, so it can modify the object's fields, but reassigning the parameter to a new object does NOT change the caller's reference. Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "Java is ALWAYS pass-by-value.",
        "For primitives, the actual value is copied into the method parameter, so changing the parameter does not change the caller's variable.",
        "For objects, the value being copied is the reference. That means the method receives a copy of the reference to the same object, so it can modify the object's fields, but reassigning the parameter to a new object does NOT change the caller's reference.",
        "Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_1-how-does-java-choose-between-overloaded-",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "interview"
      ],
      "question": "How does Java choose between overloaded methods such as print(int x) and print(double x)?",
      "modelAnswer": "Java resolves overloads at compile time and chooses the most specific applicable method. Calling print(5) picks print(int) because the argument is already an int, so that overload is a better match than widening to double. If no exact match exists, Java may apply widening, boxing, or varargs in that general preference order.",
      "keyPoints": [
        "Java resolves overloads at compile time and chooses the most specific applicable method.",
        "Calling print(5) picks print(int) because the argument is already an int, so that overload is a better match than widening to double.",
        "If no exact match exists, Java may apply widening, boxing, or varargs in that general preference order."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_2-what-is-the-difference-between-a-void-me",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between a void method and a method with a return type?",
      "modelAnswer": "A void method performs work but does not return a value to the caller. A method with a return type must return a value of that declared type on every valid execution path. You cannot write return 5; inside a void method, and you cannot use the result of calling a void method in an expression because there is no value to use.",
      "keyPoints": [
        "A void method performs work but does not return a value to the caller.",
        "A method with a return type must return a value of that declared type on every valid execution path.",
        "You cannot write return 5; inside a void method, and you cannot use the result of calling a void method in an expression because there is no value to use."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_3-what-is-the-difference-between-a-static-",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between a static method and an instance method in Java?",
      "modelAnswer": "A static method belongs to the class itself and is typically called with the class name, such as Math.max() or MyClass.doWork(). An instance method belongs to a specific object and is called on an object reference. Static methods cannot directly access instance fields or instance methods because they have no current object, but instance methods can access both instance and static members.",
      "keyPoints": [
        "A static method belongs to the class itself and is typically called with the class name, such as Math.max() or MyClass.doWork().",
        "An instance method belongs to a specific object and is called on an object reference.",
        "Static methods cannot directly access instance fields or instance methods because they have no current object, but instance methods can access both instance and static members."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_4-what-does-the-gameover-parameter-of-calc",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "interview"
      ],
      "question": "What does the gameOver parameter of calculateScore control?",
      "modelAnswer": "It decides whether the method calculates and returns a final score; if false, the method returns -1 as a sentinel for no valid score.",
      "keyPoints": [
        "It decides whether the method calculates and returns a final score; if false, the method returns -1 as a sentinel for no valid score."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_5-how-should-a-caller-choose-levelcomplete",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "interview"
      ],
      "question": "How should a caller choose levelCompleted and bonus for calculateScore?",
      "modelAnswer": "levelCompleted should be the number of levels completed, and bonus should be the points per level; the method multiplies them together.",
      "keyPoints": [
        "levelCompleted should be the number of levels completed, and bonus should be the points per level; the method multiplies them together."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_6-does-calculatescore-gameover-score-level",
      "difficulty": "hard",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Does calculateScore(gameOver, score, levelCompleted, bonus) receive the caller's variables themselves?",
      "modelAnswer": "No. Java passes argument values by value; parameter variables receive copies of those values in the declared order.",
      "keyPoints": [
        "No. Java passes argument values by value; parameter variables receive copies of those values in the declared order."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_7-which-overload-is-called-by-calculatesco",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Which overload is called by calculateScore(true, 800, 5, 100)?",
      "modelAnswer": "The int-returning overload with parameters (boolean, int, int, int) is called because the argument count and types match that signature.",
      "keyPoints": [
        "The int-returning overload with parameters (boolean, int, int, int) is called because the argument count and types match that signature."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_8-which-statement-about-method-parameters-",
      "difficulty": "easy",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "interview"
      ],
      "question": "Which statement about method parameters in Java is correct?",
      "options": [
        "A parameter is a local variable that is created on each call, holds a copy of the argument value, and is destroyed when the method returns.",
        "A parameter keeps the value from the previous call, because Java reuses the same variable for the same method.",
        "A parameter must have exactly the same name as the variable that the caller passes in.",
        "A parameter is an alias for the caller's variable, so assigning a new value to the parameter also changes the caller's variable."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "Each call creates fresh parameters, and they are destroyed when the method returns, so nothing is retained.",
        "2": "The parameter name is local to the method; the caller's variable names have no effect on it.",
        "3": "Java always passes by value, so reassigning a parameter cannot affect the caller's variable."
      },
      "explanation": "Parameters are local variables that exist only for the duration of a call. They are initialised with copies of the argument values, which is why Java is described as pass-by-value.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_9-a-method-is-declared-as-public-static-in",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "interview"
      ],
      "question": "A method is declared as public static int calculateScore(boolean gameOver, int score, int levelCompleted, int bonus). What does the int return type require of this method?",
      "options": [
        "The method must return a double, because finalScore is increased by the constant 1000.",
        "Every valid execution path must return an int value, and this method uses -1 to signal that no valid score could be produced.",
        "The method may finish without returning a value, as long as it prints the result first.",
        "Nothing extra, because the int only documents the type of the value that is printed inside the method."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "finalScore is an int and the declared return type stays int; adding 1000 does not widen it.",
        "2": "Printing is not returning, so a method with a non-void return type must still return a value.",
        "3": "The return type describes the value sent back to the caller, not what is printed inside the method."
      },
      "explanation": "A non-void return type is a promise that the method sends back a value of that declared type on every path that finishes normally. Here the promise is kept by returning finalScore, or -1 as the sentinel when no score is valid.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_10-given-the-overloads-print-int-x-and-prin",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "ocjp"
      ],
      "question": "Given the overloads print(int x) and print(double x), which one runs for the call print(5)?",
      "options": [
        "Java decides at runtime, by asking the argument which parameter type it prefers.",
        "print(int), because the argument is already an int, so that overload is the most specific applicable one.",
        "print(double), because Java widens to double before it looks for an exact match.",
        "Neither, because the call is ambiguous and the code does not compile."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "Overload resolution is a compile-time decision based on the declared types of the arguments.",
        "2": "Widening is only considered when no more specific applicable overload exists, so the int version wins here.",
        "3": "The call is not ambiguous, because print(int) is strictly more specific than print(double)."
      },
      "explanation": "Overload resolution happens at compile time and picks the most specific applicable method. The argument is exactly an int, so print(int) is a better match than print(double).",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_11-a-classic-swap-int-a-int-b-method-exchan",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "A classic swap(int a, int b) method exchanges the values of its two parameters. What does the caller see afterwards?",
      "options": [
        "The caller's variables are unchanged, because the method swaps only its own copies of the two values.",
        "The code does not compile, because Java cannot pass an int value to a method.",
        "The caller's variables are swapped, because int arguments are passed by reference.",
        "The caller's variables are swapped, but only when the method is declared static."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "Passing int values to int parameters is completely legal; the values are simply copied.",
        "2": "Primitives are passed by value, so no link to the caller's variables is ever created.",
        "3": "Being static has no effect on argument passing; copies are made either way."
      },
      "explanation": "Java passes arguments by value, so a and b are copies. Swapping the copies leaves the caller's variables exactly as they were, which is the classic Java trap.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_12-which-statement-about-a-void-method-is-c",
      "difficulty": "easy",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "interview"
      ],
      "question": "Which statement about a void method is correct?",
      "options": [
        "A void method must still return a value, and the usual choice is to return 0 as a placeholder.",
        "A void method can be called as a statement but cannot be used inside an expression, because the call produces no value.",
        "A void method can be assigned to any variable, and that variable then holds null.",
        "A void method cannot declare parameters, because it has nothing to send back."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "A void method may finish without any return statement at all.",
        "2": "There is no value to assign, so a void method call cannot appear on the right-hand side of an assignment.",
        "3": "void describes only the return type; a void method may take as many parameters as it needs."
      },
      "explanation": "void means the method sends no value back to the caller. The call is therefore an action rather than an expression, so it cannot be used where a value is expected.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_13-which-statement-correctly-compares-a-sta",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "interview"
      ],
      "question": "Which statement correctly compares a static method with an instance method?",
      "options": [
        "An instance method cannot read static fields, because static members belong only to the class.",
        "A static method is called on an object, while an instance method is called with the class name.",
        "A static method belongs to each object separately, so every object gets its own copy of it.",
        "A static method has no current object, so it cannot directly access instance fields, while an instance method can access both instance and static members."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "An instance method can access static members as well as instance members.",
        "1": "It is the other way round: static members are used with the class name, and instance members with an object reference.",
        "2": "Static members belong to the class and are shared by all objects rather than copied for each object."
      },
      "explanation": "A static method belongs to the class itself and is called through the class name, such as Math.max(). It has no current object, so instance fields are out of reach, whereas an instance method has a current object and can use both kinds of member.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_14-what-is-the-value-of-result-after-this-c",
      "difficulty": "hard",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "ocjp"
      ],
      "question": "What is the value of result after this call?",
      "code": "int result = calculateScore(false, 800, 5, 100);",
      "options": [
        "-1, because gameOver is false, so the calculation is skipped and the sentinel value is returned.",
        "The code does not compile, because an if block without an else block cannot return an int on every path.",
        "2300, because 800 + (5 * 100) + 1000 is calculated from the arguments that were passed.",
        "0, because finalScore is still zero when the if block does not run."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "The return -1 after the if statement provides a value on every path, so the method compiles.",
        "2": "The arithmetic is never performed for a false gameOver, so 2300 cannot be returned here.",
        "3": "finalScore is declared inside the if block, so it does not exist at all when the block is skipped."
      },
      "explanation": "The whole calculation sits inside if(gameOver), so passing false skips it. Execution then reaches the final return -1, which is the documented sentinel meaning no valid score.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_custom_15-why-can-the-first-version-of-calculatesc",
      "difficulty": "easy",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "interview"
      ],
      "question": "Why can the first version of calculateScore be called as calculateScore() with no arguments?",
      "options": [
        "Because void methods are not allowed to declare parameters.",
        "Because that version declares an empty parameter list and hard-codes its own gameOver, score, levelCompleted and bonus values.",
        "Because the other overload has already stored the four values for it to use.",
        "Because Java fills in a default value for every argument that is left out."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "void methods can declare parameters, as the later versions of calculateScore show.",
        "2": "Overloading does not carry values between methods; the no-argument call simply matches the method with an empty parameter list.",
        "3": "Java never invents arguments; the argument count and types must match a declared parameter list."
      },
      "explanation": "A no-argument method declares no parameters, so it must supply its own values inside the body. That is exactly why the caller of this version has no way to change gameOver, score, levelCompleted or bonus.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-1-methods-in-java-methodsinjava-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods In Java",
      "question": "Which of the following are TRUE about Methods In Java? Select all that apply.",
      "options": [
        "This challenge uses method overloading to give the same method name two related meanings.",
        "Methods are the foundation of the DRY principle — Don't Repeat Yourself. They make code organized, readable, and maintainable.",
        "The return type declares what type of value the method sends back to the caller. Use 'void' if the method returns nothing.",
        "This challenge practices boolean logic with two inputs: whether barking is happening and what hour it is.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Methods In Java.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-2-methods-coding-challenge-areacalculatorcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "Which of the following are TRUE about Area Calculator Coding Challenge? Select all that apply.",
      "options": [
        "This challenge uses method overloading to give the same method name two related meanings.",
        "area(double x, double y) calculates the area of a rectangle with x * y.",
        "area(double radius) calculates the area of a circle with Math.PI * radius * radius.",
        "This challenge practices boolean logic with two inputs: whether barking is happening and what hour it is.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for Area Calculator Coding Challenge.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/AreaCalculatorCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-2-methods-coding-challenge-barkingdogcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "Which of the following are TRUE about Barking Dog Coding Challenge? Select all that apply.",
      "options": [
        "shouldWakeUp(boolean barking, int hourOfDay) returns true only when barking is true and the time is before 8 or after 22.",
        "This challenge uses method overloading to give the same method name two related meanings.",
        "The valid hour range is 0 through 23; any value outside that range returns false because the input itself is invalid.",
        "This challenge practices boolean logic with two inputs: whether barking is happening and what hour it is.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Barking Dog Coding Challenge.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/BarkingDogCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-2-methods-coding-challenge-decimalcomparatorcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "Which of the following are TRUE about Decimal Comparator Coding Challenge? Select all that apply.",
      "options": [
        "This challenge uses method overloading to give the same method name two related meanings.",
        "Multiplying by 1000 shifts the first three decimal places into the whole-number part of the value.",
        "This challenge compares two double values only up to three decimal places.",
        "Casting the shifted double to int truncates the remaining decimal portion instead of rounding it.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Decimal Comparator Coding Challenge.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/DecimalComparatorCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-2-methods-coding-challenge-equalityprintercodingchallenge-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Equality Printer Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Invalid Value\");",
      "answer": [
        "Invalid Value"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/EqualityPrinterCodingChallenge.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-2-methods-coding-challenge-equalityprintercodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Equality Printer Coding Challenge",
      "question": "Which of the following are TRUE about Equality Printer Coding Challenge? Select all that apply.",
      "options": [
        "This challenge uses method overloading to give the same method name two related meanings.",
        "This challenge classifies the relationship between three int values and prints one exact message.",
        "printEqual(int firstNumber, int secondNumber, int thirdNumber) is a void method because the visible output is the printed text.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Any negative input is invalid and must print \"Invalid Value\" before any equality checks."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Equality Printer Coding Challenge.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/EqualityPrinterCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-2-methods-coding-challenge-equalsumcheckercodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "Which of the following are TRUE about Equal Sum Checker Coding Challenge? Select all that apply.",
      "options": [
        "The method should return true for matching totals and false for all other totals.",
        "This challenge uses method overloading to give the same method name two related meanings.",
        "This challenge practices returning a boolean expression directly from a method.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "hasEqualSum(int firstNumber, int secondNumber, int sum) checks whether firstNumber + secondNumber equals sum."
      ],
      "answer": [
        0,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Equal Sum Checker Coding Challenge.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/EqualSumCheckerCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-2-methods-coding-challenge-leapyearcalculatorcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "Which of the following are TRUE about Leap Year Calculator Coding Challenge? Select all that apply.",
      "options": [
        "This challenge uses method overloading to give the same method name two related meanings.",
        "A valid year is a leap year when it is divisible by 4, except century years must also be divisible by 400.",
        "This challenge implements the leap-year rule as a clean boolean method.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "isLeapYear(int year) first validates that the year is between 1 and 9999, inclusive."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Leap Year Calculator Coding Challenge.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/LeapYearCalculatorCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-2-methods-coding-challenge-megabytesconvertercodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Mega Bytes Converter Coding Challenge",
      "question": "Which of the following are TRUE about Mega Bytes Converter Coding Challenge? Select all that apply.",
      "options": [
        "This challenge uses method overloading to give the same method name two related meanings.",
        "Integer division gives the whole megabytes: 2500 / 1024 is 2.",
        "This challenge converts a whole number of kilobytes into megabytes plus leftover kilobytes.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "printMegaBytesAndKiloBytes(int kiloBytes) is a void method because its job is to print a formatted result, not return one."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Mega Bytes Converter Coding Challenge.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/MegaBytesConverterCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-2-methods-coding-challenge-methodschallengeproblem-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Methods Challenge Problem",
      "question": "Which of the following are TRUE about Methods Challenge Problem? Select all that apply.",
      "options": [
        "This challenge separates calculation from display so each method has one clear responsibility.",
        "Scores of 1000 or more get position 1, scores of 500 to 999 get position 2, scores of 100 to 499 get position 3, and all lower scores get position 4.",
        "This challenge uses method overloading to give the same method name two related meanings.",
        "calculateHighScorePosition(int score) converts a player's score into a ranking position.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Methods Challenge Problem.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/MethodsChallengeProblem.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-2-methods-coding-challenge-minutestoyearsanddayscalculatorcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Minutes To Years And Days Calculator Coding Challenge",
      "question": "Which of the following are TRUE about Minutes To Years And Days Calculator Coding Challenge? Select all that apply.",
      "options": [
        "This challenge uses method overloading to give the same method name two related meanings.",
        "This challenge converts a long minute count into full years plus leftover days.",
        "The conversion uses fixed calendar assumptions: 60 minutes per hour, 24 hours per day, and 365 days per year.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "printYearsAndDays(long minutes) is a void method because it prints the formatted answer directly."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Minutes To Years And Days Calculator Coding Challenge.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/MinutesToYearsAndDaysCalculatorCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-2-methods-coding-challenge-playingcatcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "Which of the following are TRUE about Playing Cat Coding Challenge? Select all that apply.",
      "options": [
        "This challenge uses method overloading to give the same method name two related meanings.",
        "In normal weather, the allowed range is 25 through 35, inclusive.",
        "This challenge models a temperature rule that changes when the season changes.",
        "isCatPlaying(boolean isSummer, int temperature) returns true when the temperature is in the allowed range.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Playing Cat Coding Challenge.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/PlayingCatCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-2-methods-coding-challenge-positivenegativezerocodingchallenge-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Positive Negative Zero Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"positive\");",
      "answer": [
        "positive"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/PositiveNegativeZeroCodingChallenge.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-2-methods-coding-challenge-positivenegativezerocodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Positive Negative Zero Coding Challenge",
      "question": "Which of the following are TRUE about Positive Negative Zero Coding Challenge? Select all that apply.",
      "options": [
        "This challenge uses method overloading to give the same method name two related meanings.",
        "checkNumber(int number) classifies one integer and prints the matching label.",
        "This challenge practices simple branching with a void method.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "A value greater than 0 prints \"positive\", a value less than 0 prints \"negative\", and 0 prints \"zero\"."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Positive Negative Zero Coding Challenge.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/PositiveNegativeZeroCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-2-methods-coding-challenge-speedconvertercodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "Which of the following are TRUE about Speed Converter Coding Challenge? Select all that apply.",
      "options": [
        "This challenge uses method overloading to give the same method name two related meanings.",
        "A negative speed is invalid, so the method returns -1 as a sentinel value instead of a real conversion.",
        "This challenge converts speed from kilometers per hour to miles per hour using small, reusable static methods.",
        "toMilesPerHour(double kilometersPerHour) validates the input, converts kilometers to miles, rounds the answer, and returns it as a long.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Speed Converter Coding Challenge.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/SpeedConverterCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-2-methods-coding-challenge-teennumbercheckercodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "Which of the following are TRUE about Teen Number Checker Coding Challenge? Select all that apply.",
      "options": [
        "This challenge uses method overloading to give the same method name two related meanings.",
        "isTeen(int number) returns true when number is between 13 and 19, inclusive.",
        "hasTeen(int firstNumber, int secondNumber, int thirdNumber) returns true when at least one of its three arguments is a teen number.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "This challenge breaks a repeated age-range check into a helper method."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Teen Number Checker Coding Challenge.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/TeenNumberCheckerCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-6-methods-in-java_src-chapter-6-methods-in-java-sub-chapter-3-deepproblems-recursiondeepproblem-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "Recursion Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Factorial comparison:\");",
      "answer": [
        "Factorial comparison:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_3_DeepProblems/RecursionDeepProblem.java",
      "tags": [
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-6-methods-in-java-pass-by-value-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "static void change(int x) { x = 99; }\nint a = 5;\nchange(a);\nSystem.out.println(a);",
      "answer": [
        "5"
      ],
      "explanation": "Java is ALWAYS pass-by-value. The method gets a copy of a. Changing x inside the method has no effect on a. This is one of the most common OCJP traps.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-6-methods-in-java-overload-resolution-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 6: Methods In Java",
      "topic": "OCJP Tricky",
      "question": "When does method overloading resolution happen in Java? (OCJP)",
      "options": [
        "At runtime, based on the actual argument type",
        "At compile time, based on the declared (reference) type of arguments",
        "At runtime, based on the method name only",
        "At compile time, based on return type"
      ],
      "answer": 1,
      "explanation": "Overloading is resolved at COMPILE time based on the reference type of arguments (not actual type). Overriding is resolved at RUNTIME. This distinction is essential for OCJP.",
      "topicPath": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky"
      ]
    }
  ],
  "Chapter 7: Switch Statements": [
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "question": "What does this code print?",
      "code": "System.out.println(\"If-else example:\");",
      "answer": [
        "If-else example:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_0-what-data-types-can-be-used-in-a-traditi",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "What data types can be used in a traditional Java switch statement?",
      "modelAnswer": "switch supports byte, short, char, int, their wrapper types, enum types, and String. It does not support every type, so larger or unrelated types still need if-else logic.",
      "keyPoints": [
        "switch supports byte, short, char, int, their wrapper types, enum types, and String.",
        "It does not support every type, so larger or unrelated types still need if-else logic."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_1-what-is-fall-through-in-a-switch-stateme",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "What is fall-through in a switch statement, and when is it useful?",
      "modelAnswer": "Fall-through means execution continues into the next case when break is omitted. It is useful when multiple cases should share the same logic, but accidental fall-through is a common bug.",
      "keyPoints": [
        "Fall-through means execution continues into the next case when break is omitted.",
        "It is useful when multiple cases should share the same logic, but accidental fall-through is a common bug."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_2-what-is-the-default-case-in-a-switch-sta",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "What is the default case in a switch statement, and is it required?",
      "modelAnswer": "default runs when no case label matches the switch value. It is optional, but it is often useful for invalid or unexpected values.",
      "keyPoints": [
        "default runs when no case label matches the switch value.",
        "It is optional, but it is often useful for invalid or unexpected values."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_3-when-is-switch-usually-preferred-over-a-",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "When is switch usually preferred over a long if-else chain?",
      "modelAnswer": "switch is cleaner when one expression is compared against many fixed constant values. if-else is better when conditions are ranges, combinations, or more complex boolean expressions.",
      "keyPoints": [
        "switch is cleaner when one expression is compared against many fixed constant values.",
        "if-else is better when conditions are ranges, combinations, or more complex boolean expressions."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_4-what-prints-here-int-x-2-switch-x-case-1",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What prints here: int x = 2; switch (x) { case 1: System.out.print(\"A\"); case 2: System.out.print(\"B\"); default: System.out.print(\"C\"); }?",
      "modelAnswer": "It prints BC. Execution starts at case 2 and falls through to default because there are no break statements.",
      "keyPoints": [
        "It prints BC.",
        "Execution starts at case 2 and falls through to default because there are no break statements."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_5-can-a-traditional-switch-use-long-or-boo",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Can a traditional switch use long or boolean as the selector?",
      "modelAnswer": "No. long and boolean are not valid selector types for a traditional switch statement. For those cases, use if-else instead.",
      "keyPoints": [
        "No. long and boolean are not valid selector types for a traditional switch statement.",
        "For those cases, use if-else instead."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_6-what-values-should-be-passed-to-getquart",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "What values should be passed to getQuarter(String month)?",
      "modelAnswer": "Pass an exact uppercase month name like \"JANUARY\" or \"NOVEMBER\"; any unlisted spelling, case, or null fails to match the cases.",
      "keyPoints": [
        "Pass an exact uppercase month name like \"JANUARY\" or \"NOVEMBER\"; any unlisted spelling, case, or null fails to match the cases."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_7-what-is-dangerous-about-the-value-parame",
      "difficulty": "hard",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is dangerous about the value parameter in switchCaseWithoutUsingBreak?",
      "modelAnswer": "It selects the starting case only; without break statements, execution falls through and runs later cases too.",
      "keyPoints": [
        "It selects the starting case only; without break statements, execution falls through and runs later cases too."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_8-in-quartervalue-equals-invalid-month-wha",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "In quarterValue.equals(\"INVALID MONTH\"), what does the parameter represent?",
      "modelAnswer": "It is the value being compared to quarterValue; equals returns true only when the contents match exactly.",
      "keyPoints": [
        "It is the value being compared to quarterValue; equals returns true only when the contents match exactly."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_9-which-types-can-be-used-as-the-selector-",
      "difficulty": "easy",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "Which types can be used as the selector of a traditional switch statement?",
      "options": [
        "Only int and enum, because every case label must be an int constant.",
        "byte, short, char and int, plus their wrapper types, together with String and enum types.",
        "Every primitive type, including long, float, double and boolean.",
        "Any object type, because switch compares the selector with the case labels using equals."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "char, byte, short and String are all valid selectors, so limiting switch to int and enum is wrong.",
        "2": "long, float, double and boolean are primitives too, but none of them is a valid selector type, so such a switch would not compile.",
        "3": "switch does not call equals on arbitrary objects; String and enum are the only reference types it accepts."
      },
      "explanation": "A traditional switch accepts the smaller integral types byte, short, char and int, their wrapper classes, String from Java 7 onwards, and enum types. Nothing larger than int is allowed, and unrelated object types are not allowed either.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_10-what-does-this-code-print-when-x-is-2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "ocjp"
      ],
      "question": "What does this code print when x is 2?",
      "code": "switch (x) {\ncase 1: System.out.print(\"A\"); break;\ncase 2: System.out.print(\"B\");\ncase 3: System.out.print(\"C\"); break;\ndefault: System.out.print(\"D\");\n}",
      "options": [
        "B, because the matching case finishes as soon as its statement has run.",
        "The code does not compile, because case 2 has no break statement.",
        "BC, because execution starts at case 2 and falls through into case 3 before that break stops it.",
        "BCD, because the default case always runs after the matching case."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "B on its own would need a break straight after case 2; the missing break causes fall-through into case 3.",
        "1": "Omitting break is legal in a traditional switch; it causes fall-through rather than a compile error.",
        "3": "default runs only when no case label matches, and here case 2 matched."
      },
      "explanation": "The matching label is case 2, so B is printed. With no break there, execution falls through into the next case and prints C, and the break in case 3 then leaves the switch. default is never reached because a case did match.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_11-which-statement-about-the-default-label-",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "Which statement about the default label of a switch is correct?",
      "options": [
        "It is optional, and it runs when no case label matches the selector.",
        "It is mandatory, because a switch written without default does not compile.",
        "It must be written before the first case, so that it is checked first.",
        "It is needed only when the selector is a String."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "A switch compiles without default; it is recommended rather than required.",
        "2": "A case label is still matched first wherever default is written, so there is no rule that it must come first.",
        "3": "default is unrelated to the selector type; it applies to every form of switch."
      },
      "explanation": "default is the switch equivalent of the final else: it is chosen only when the selector matches none of the case labels. Java lets you leave it out, but including it handles unexpected values.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_12-which-of-these-types-cannot-be-used-as-t",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "ocjp"
      ],
      "question": "Which of these types cannot be used as the selector of a traditional switch statement?",
      "options": [
        "enum",
        "String",
        "char",
        "long"
      ],
      "answer": 3,
      "whyByOption": {
        "0": "enum types are valid selectors and are commonly combined with switch.",
        "1": "String has been allowed since Java 7, which is why the month lookup in this file works.",
        "2": "char is a valid selector type and has been since the earliest version of the language."
      },
      "explanation": "A traditional switch accepts byte, short, char, int and their wrapper types, plus String and enum types. long is not in that list, so a switch on a long would not compile, and the same is true of float, double and boolean.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_13-given-getquarter-string-month-what-does-",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Given getQuarter(String month), what does the call getQuarter(\"november\") return?",
      "options": [
        "\"INVALID MONTH\", because the case labels are uppercase and String matching in a switch is case-sensitive.",
        "null, because an unmatched switch with no default produces no value.",
        "\"4th Quarter\", because a switch comparison ignores the case of a String.",
        "The code does not compile, because getQuarter has no default label."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "Nothing returns null here; the statement after the switch always returns the literal \"INVALID MONTH\".",
        "2": "The comparison is case-sensitive, so the label \"NOVEMBER\" does not match the argument \"november\".",
        "3": "The code compiles without default, because the return statement after the switch provides a value on that path."
      },
      "explanation": "String matching in a switch is exact and case-sensitive, so lowercase \"november\" matches none of the uppercase labels. Execution falls past every case to the final return, which supplies the text \"INVALID MONTH\".",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_14-what-happens-when-a-return-statement-is-",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "What happens when a return statement is executed inside a case block?",
      "options": [
        "It exits both the switch and the method, so no break is needed after it.",
        "It is not allowed inside a switch, where only break may be used.",
        "It behaves like break but still needs a following break to stop fall-through.",
        "It exits only the switch, and the rest of the method continues to run."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "Returning from inside a case is legal and is used in getQuarter.",
        "2": "Once the method has returned, no later case can execute, so a following break would be unreachable.",
        "3": "return ends the whole method, not just the switch statement."
      },
      "explanation": "return leaves the method altogether, so control never comes back to the switch. That is why getQuarter can return from each group of cases without writing any break.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_15-in-switchcasemultiplecasestogether-what-",
      "difficulty": "easy",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "In switchCaseMultipleCasesTogether, what does a call with value 4 print?",
      "options": [
        "\"Value is 3 or 4 or 5\", because case 3, case 4 and case 5 share the same code block.",
        "Nothing, because only the first label of a group of cases can match.",
        "The code does not compile, because an empty case label is not allowed.",
        "\"Neither numbers are provided\", because case 4 has no statements of its own."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "Every label in the group is a real match, so 4 selects the shared block.",
        "2": "An empty case label is legal, and that is exactly how cases are grouped to share one block.",
        "3": "default is chosen only when no label matches, and case 4 does match here."
      },
      "explanation": "Labels written one after another share the single block that follows them, so any of 3, 4 or 5 starts the same message. The shared block ends with a break, so there is no fall-through beyond it.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_custom_16-what-does-switchcasewithoutusingbreak-4-",
      "difficulty": "hard",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "ocjp"
      ],
      "question": "What does switchCaseWithoutUsingBreak(4) print?",
      "options": [
        "Nothing, because a switch that contains no break statement cannot execute.",
        "\"Value is 3 or 4 or 5\" followed by \"Neither numbers are provided\".",
        "Only \"Value is 3 or 4 or 5\", because the switch stops once a matching case has run.",
        "\"Value is 1\", \"Value is 2\", \"Value is 3 or 4 or 5\" and \"Neither numbers are provided\", because every case runs when there is no break."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "A switch without break is legal; it falls through instead of failing.",
        "2": "Nothing stops the flow at the end of the matched block, so default also runs.",
        "3": "Execution starts at the label that matched, so the earlier messages for case 1 and case 2 are not printed."
      },
      "explanation": "With no break anywhere, execution starts at the matching label and then falls through every following label. Starting at the grouped case 3/4/5, it prints that message and then falls into default.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-1-switch-statement-switchstatementinjava-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement In Java",
      "question": "Which of the following are TRUE about Switch Statement In Java? Select all that apply.",
      "options": [
        "Write a method isLeapYear with a parameter of type int named year.",
        "Switch is cleaner and more readable than nested if-else when you have many possible values to test.",
        "switch can be used with: byte, short, char, int (primitives), and String (since Java 7), as well as enum types.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Switch Statement In Java.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-2-enhanced-switch-statement-enhancedswitchstatementinjava-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "What does this code print?",
      "code": "System.out.println(\"Value is 1\");",
      "answer": [
        "Value is 1"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_2_Enhanced_Switch_Statement/EnhancedSwitchStatementInJava.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-2-enhanced-switch-statement-enhancedswitchstatementinjava-java_custom_0-what-is-the-difference-between-a-traditi",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between a traditional switch statement and an enhanced switch expression?",
      "modelAnswer": "Traditional switch uses colon syntax and can fall through, while enhanced switch uses arrow syntax and does not fall through. Enhanced switch can also be used as an expression that directly returns a value.",
      "keyPoints": [
        "Traditional switch uses colon syntax and can fall through, while enhanced switch uses arrow syntax and does not fall through.",
        "Enhanced switch can also be used as an expression that directly returns a value."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_2_Enhanced_Switch_Statement/EnhancedSwitchStatementInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-2-enhanced-switch-statement-enhancedswitchstatementinjava-java_custom_1-can-an-enhanced-switch-return-a-value",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "Can an enhanced switch return a value?",
      "modelAnswer": "Yes. An enhanced switch can be used on the right side of an assignment or in a return statement. Each case provides the result with an expression or with yield inside a block.",
      "keyPoints": [
        "Yes. An enhanced switch can be used on the right side of an assignment or in a return statement.",
        "Each case provides the result with an expression or with yield inside a block."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_2_Enhanced_Switch_Statement/EnhancedSwitchStatementInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-2-enhanced-switch-statement-enhancedswitchstatementinjava-java_custom_2-what-is-the-purpose-of-yield-in-an-enhan",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "What is the purpose of yield in an enhanced switch?",
      "modelAnswer": "yield returns a value from a case block when that case needs multiple statements. It is only used inside switch expressions, not ordinary methods.",
      "keyPoints": [
        "yield returns a value from a case block when that case needs multiple statements.",
        "It is only used inside switch expressions, not ordinary methods."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_2_Enhanced_Switch_Statement/EnhancedSwitchStatementInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-2-enhanced-switch-statement-enhancedswitchstatementinjava-java_custom_3-does-an-enhanced-switch-fall-through-her",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Does an enhanced switch fall through here: switch (x) { case 1 -> System.out.println(\"A\"); case 2 -> System.out.println(\"B\"); default -> System.out.println(\"C\"); }?",
      "modelAnswer": "No. Each arrow case is isolated, so execution stops after the matching case. That is why enhanced switch does not need break statements.",
      "keyPoints": [
        "No. Each arrow case is isolated, so execution stops after the matching case.",
        "That is why enhanced switch does not need break statements."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_2_Enhanced_Switch_Statement/EnhancedSwitchStatementInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-2-enhanced-switch-statement-enhancedswitchstatementinjava-java_custom_4-how-should-the-month-parameter-be-chosen",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "How should the month parameter be chosen for getQuarterUsingYieldKeyword?",
      "modelAnswer": "Use an exact uppercase month name from the case labels, such as \"JANUARY\" or \"DECEMBER\"; otherwise the default branch yields \"INVALID MONTH\".",
      "keyPoints": [
        "Use an exact uppercase month name from the case labels, such as \"JANUARY\" or \"DECEMBER\"; otherwise the default branch yields \"INVALID MONTH\"."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_2_Enhanced_Switch_Statement/EnhancedSwitchStatementInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-2-enhanced-switch-statement-enhancedswitchstatementinjava-java_custom_5-why-is-equals-invalid-month-case-sensiti",
      "difficulty": "hard",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why is equals(\"INVALID MONTH\") case-sensitive?",
      "modelAnswer": "String.equals compares exact character content, so \"invalid month\" and \"INVALID MONTH\" are different argument values.",
      "keyPoints": [
        "String.equals compares exact character content, so \"invalid month\" and \"INVALID MONTH\" are different argument values."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_2_Enhanced_Switch_Statement/EnhancedSwitchStatementInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-2-enhanced-switch-statement-enhancedswitchstatementinjava-java_custom_6-what-parameter-like-value-does-switch-mo",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What parameter-like value does switch(month) use to choose a case?",
      "modelAnswer": "It uses the selector expression month and matches it exactly against each String case label.",
      "keyPoints": [
        "It uses the selector expression month and matches it exactly against each String case label."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_2_Enhanced_Switch_Statement/EnhancedSwitchStatementInJava.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-2-enhanced-switch-statement-enhancedswitchstatementinjava-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "Which of the following are TRUE about Enhanced Switch Statement In Java? Select all that apply.",
      "options": [
        "Write a method isLeapYear with a parameter of type int named year.",
        "It uses the arrow (->) syntax instead of colon (:), eliminating fall-through by design — no 'break' needed.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "Traditional switch: case 1: ... break; Enhanced switch: case 1 -> ...",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values."
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Enhanced Switch Statement In Java.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_2_Enhanced_Switch_Statement/EnhancedSwitchStatementInJava.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-3-codingchallenge-numberofdaysinamonthcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "Which of the following are TRUE about Number Of Days In A Month Coding Challenge? Select all that apply.",
      "options": [
        "Write a method isLeapYear with a parameter of type int named year.",
        "The parameter needs to be greater than or equal to 1 and less than or equal to 9999.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "If the parameter is not in that range return false.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values."
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Number Of Days In A Month Coding Challenge.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/NumberOfDaysInAMonthCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-3-codingchallenge-printnumberinaworldcodingchallenge-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Print Number In A World Coding Challenge",
      "question": "What does this code print?",
      "code": "case 3: System.out.println(\"THREE\");",
      "answer": [
        "THREE"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/PrintNumberInAWorldCodingChallenge.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-3-codingchallenge-printnumberinaworldcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Print Number In A World Coding Challenge",
      "question": "Which of the following are TRUE about Print Number In A World Coding Challenge? Select all that apply.",
      "options": [
        "Write a method called printNumberInWord.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "The method has one parameter number which is the whole number.",
        "The method needs to print \"ZERO\", \"ONE\", \"TWO\", ... \"NINE\", \"OTHER\" if the int parameter number is 0, 1, 2, .... 9 or other for any other number including negative numbers.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values."
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Print Number In A World Coding Challenge.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/PrintNumberInAWorldCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-3-codingchallenge-switchstatementchallenge-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"A is found\");",
      "answer": [
        "A is found"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/SwitchStatementChallenge.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-3-codingchallenge-switchstatementchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement Challenge",
      "question": "Which of the following are TRUE about Switch Statement Challenge? Select all that apply.",
      "options": [
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "Create a new switch statement using char instead of int.",
        "Create a new char variable",
        "Create a switch statement testing for A,B,C,D or E display a message if any of these are found and then break",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values."
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Switch Statement Challenge.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/SwitchStatementChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-3-codingchallenge-switchstatementnatochallenge-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement N A T O Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"A is Able\");",
      "answer": [
        "A is Able"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/SwitchStatementNATOChallenge.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-3-codingchallenge-switchstatementnatochallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Switch Statement N A T O Challenge",
      "question": "Which of the following are TRUE about Switch Statement N A T O Challenge? Select all that apply.",
      "options": [
        "In this challenge, we'll be using the NATO alphabet to replace a character or letter,with NATO's standardized word for that letter.",
        "1) Create a new char variable. Use the traditional switch statement (with a colon in case labels) that tests the value in the variable from Step 1.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "2) Create cases for the characters, A, B, C, D, and E. Display a message in each case block,with the letter and the NATO word, then break.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values."
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Switch Statement N A T O Challenge.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/SwitchStatementNATOChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-7-switch-statements_src-chapter-7-switch-statements-sub-chapter-4-deepproblems-menudrivencalculatordeepproblem-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "Menu Driven Calculator Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Calculator tests:\");",
      "answer": [
        "Calculator tests:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_4_DeepProblems/MenuDrivenCalculatorDeepProblem.java",
      "tags": [
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-7-switch-statements-switch-fallthrough-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 7: Switch Statements",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "int x = 2;\nswitch(x) {\n  case 1: System.out.println(\"one\");\n  case 2: System.out.println(\"two\");\n  case 3: System.out.println(\"three\");\n  default: System.out.println(\"default\");\n}",
      "answer": [
        "two\nthree\ndefault"
      ],
      "explanation": "Classic switch fall-through! Without break statements, execution falls through to every case below the match. case 2 matches, then falls to case 3, then default. Always add break unless fall-through is intentional.",
      "topicPath": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    }
  ],
  "Chapter 8: Java Looping Concepts": [
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-8-java-looping-concepts_src-chapter-8-java-looping-concepts-sub-chapter-1-for-statement-forstatement-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 8: Java Looping Concepts",
      "topic": "For Statement",
      "question": "What does this code print?",
      "code": "System.out.println(\"Counting from 1 to 5:\");",
      "answer": [
        "Counting from 1 to 5:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_1_For_Statement/ForStatement.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-8-java-looping-concepts_src-chapter-8-java-looping-concepts-sub-chapter-1-for-statement-forstatement-java_custom_0-in-what-order-does-java-execute-the-thre",
      "difficulty": "easy",
      "chapter": "Chapter 8: Java Looping Concepts",
      "topic": "For Statement",
      "tags": [
        "interview"
      ],
      "question": "In what order does Java execute the three parts of a for statement?",
      "options": [
        "Initialisation once before the loop starts, then the condition before each iteration, then the update after each iteration body.",
        "Initialisation, condition and update once each, all before the first iteration begins.",
        "The condition once, followed by the initialisation and the update on every iteration.",
        "The update first, then the condition, then the initialisation on every pass."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "Only the initialisation runs once; the condition and the update are repeated.",
        "2": "The condition is tested before every iteration, not just once.",
        "3": "The parts always run in the written order, with the update last."
      },
      "explanation": "The header reads for(initialisation; condition; update). The initialisation runs a single time, the condition is re-tested before every iteration, and the update runs after the body of each iteration.",
      "topicPath": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_1_For_Statement/ForStatement.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-8-java-looping-concepts_src-chapter-8-java-looping-concepts-sub-chapter-1-for-statement-forstatement-java_custom_1-what-is-the-result-of-this-code",
      "difficulty": "medium",
      "chapter": "Chapter 8: Java Looping Concepts",
      "topic": "For Statement",
      "tags": [
        "ocjp"
      ],
      "question": "What is the result of this code?",
      "code": "for (int i = 0; i < 3; i++) {\nSystem.out.println(i);\n}\nSystem.out.println(i);",
      "options": [
        "It prints 3, the value i held when the loop ended.",
        "It prints 0, because i is re-initialised once the loop has finished.",
        "It prints 2, because the update does not run after the final iteration.",
        "It does not compile, because a variable declared in the for initialiser is local to the loop and is not visible after it."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "The value 3 is never printed, because the name i is out of scope at that point.",
        "1": "There is no re-initialisation; the name is simply not declared in the enclosing block.",
        "2": "The update does run at the end of each completed iteration, but the real problem is scope rather than the value."
      },
      "explanation": "A variable declared in for(int i = ...) is scoped to the loop, so i no longer exists at the println after the closing brace. The value would have been 3 if the name were still in scope.",
      "topicPath": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_1_For_Statement/ForStatement.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-8-java-looping-concepts_src-chapter-8-java-looping-concepts-sub-chapter-1-for-statement-forstatement-java_custom_2-what-does-this-loop-print",
      "difficulty": "hard",
      "chapter": "Chapter 8: Java Looping Concepts",
      "topic": "For Statement",
      "tags": [
        "ocjp"
      ],
      "question": "What does this loop print?",
      "code": "for (int i = 0; i < 3; i++) {\ni++;\nSystem.out.print(i);\n}",
      "options": [
        "13",
        "012",
        "123",
        "It does not compile, because a loop variable may not be modified inside the body."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "The body increments i before printing, so 0 is never printed.",
        "2": "The first printed value is 1, but the second is 3, because i is incremented twice per iteration.",
        "3": "Java allows the loop variable to be modified inside the body; it is legal but confusing."
      },
      "explanation": "The body increments the loop variable as well as the update does, so the printed values are 1 and then 3, and the loop ends when i reaches 4. Modifying the loop variable inside the body is legal, but it changes the loop flow and is easy to get wrong.",
      "topicPath": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_1_For_Statement/ForStatement.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-8-java-looping-concepts_src-chapter-8-java-looping-concepts-sub-chapter-1-for-statement-forstatement-java_custom_3-what-does-for-do-in-java",
      "difficulty": "medium",
      "chapter": "Chapter 8: Java Looping Concepts",
      "topic": "For Statement",
      "tags": [
        "ocjp"
      ],
      "question": "What does for (;;) do in Java?",
      "options": [
        "It does not compile, because the header of a for statement may not be empty.",
        "It creates an infinite loop, because all three sections are omitted, and it stops only with break, return, an exception or external termination.",
        "It is an infinite loop that ignores any break statement inside its body.",
        "It runs its body exactly once, because a missing condition counts as false after the first pass."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "An empty header is legal Java and is a recognised way to write an infinite loop.",
        "2": "break, return and exceptions inside the body all end the loop as usual.",
        "3": "A missing condition is treated as permanently true, not as false after one pass."
      },
      "explanation": "Leaving the initialisation, condition and update empty gives a header that is always true, so the loop repeats until something inside it ends it. This is a deliberate way of writing \"loop until done\".",
      "topicPath": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_1_For_Statement/ForStatement.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-8-java-looping-concepts_src-chapter-8-java-looping-concepts-sub-chapter-1-for-statement-forstatement-java_custom_4-in-which-situation-is-the-enhanced-for-l",
      "difficulty": "easy",
      "chapter": "Chapter 8: Java Looping Concepts",
      "topic": "For Statement",
      "tags": [
        "interview"
      ],
      "question": "In which situation is the enhanced for loop unsuitable?",
      "options": [
        "When you need the element index, need to iterate backwards, or need to change the structure of the array or collection while iterating.",
        "When the array holds double values instead of int values.",
        "When the collection is declared as an interface rather than a class.",
        "When you only want to read the elements and not change them."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "The enhanced for loop works with arrays of any element type, including double.",
        "2": "It works with any array or collection, whether the variable is declared as an interface or a class.",
        "3": "Reading the elements without changing them is exactly what the enhanced for loop is designed for."
      },
      "explanation": "The enhanced for loop hides the index and always walks forward, so it cannot give you positions or move backwards, and it is not suitable when the structure is modified during iteration. A counted for loop is used for those tasks.",
      "topicPath": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_1_For_Statement/ForStatement.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-8-java-looping-concepts_src-chapter-8-java-looping-concepts-sub-chapter-1-for-statement-forstatement-java_custom_5-which-of-these-for-headers-is-valid-java",
      "difficulty": "medium",
      "chapter": "Chapter 8: Java Looping Concepts",
      "topic": "For Statement",
      "tags": [
        "ocjp"
      ],
      "question": "Which of these for headers is valid Java?",
      "options": [
        "for (int i = 0, j = 10; i < j; i++, j--)",
        "for (int i = 0, j = 10.0; i < j; i++, j--)",
        "for (int i = 0, double j = 10; i < j; i++, j--)",
        "for (int i = 0; j = 10; i < j; i++, j--)"
      ],
      "answer": 0,
      "whyByOption": {
        "1": "10.0 is a double literal, so it cannot initialise the int variable j in that declaration.",
        "2": "One declaration cannot mix types, so declaring int i and double j in the same initialiser does not compile.",
        "3": "A for header has exactly three sections separated by two semicolons, so the third semicolon is a syntax error."
      },
      "explanation": "The initialiser may declare several variables as long as they share the single declared type, and the update section may hold several comma-separated expressions. Here both i and j are int, and the loop runs while i is less than j.",
      "topicPath": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_1_For_Statement/ForStatement.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-8-java-looping-concepts_src-chapter-8-java-looping-concepts-sub-chapter-1-for-statement-forstatement-java_custom_6-why-should-a-caller-pass-7-5-rather-than",
      "difficulty": "medium",
      "chapter": "Chapter 8: Java Looping Concepts",
      "topic": "For Statement",
      "tags": [
        "interview"
      ],
      "question": "Why should a caller pass 7.5 rather than 0.075 to mean 7.5 percent to calculateInterest?",
      "options": [
        "Because the method expects a fraction and multiplies the parameter by 100 internally.",
        "Because the parameter is an int, so 0.075 would not compile.",
        "Because the method rounds every rate up to the nearest whole number.",
        "Because the parameter is treated as a percentage and the method divides it by 100 internally."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "The method divides by 100 and never multiplies by 100, so a fraction is the wrong scale.",
        "1": "The parameter is declared as double, so 0.075 compiles but produces a wrong, very small result.",
        "2": "There is no rounding anywhere, only a multiplication and a division."
      },
      "explanation": "calculateInterest computes amount * (interestRate / 100), so the parameter is a percent value. Passing 0.075 would divide twice and give a rate far too small.",
      "topicPath": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_1_For_Statement/ForStatement.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-8-java-looping-concepts_src-chapter-8-java-looping-concepts-sub-chapter-1-for-statement-forstatement-java_custom_7-this-loop-breaks-as-soon-as-the-interest",
      "difficulty": "hard",
      "chapter": "Chapter 8: Java Looping Concepts",
      "topic": "For Statement",
      "tags": [
        "ocjp"
      ],
      "question": "This loop breaks as soon as the interest is greater than 8.5. Which rate is the last one for which interest is printed?",
      "code": "for (double rate = 7.5; rate <= 10; rate += 0.25) {\ndouble interestAmount = calculateInterest(100.00, rate);\nif (interestAmount > 8.5) {\nbreak;\n}\nSystem.out.println(rate + \"% interest on 100 = \" + interestAmount);\n}",
      "options": [
        "8.25, because a rate of 8.5 counts as reaching the cutoff.",
        "No rate is printed, because the break runs on the very first iteration.",
        "10.0, because break only ends the loop after the last iteration.",
        "8.5, because the comparison is strictly greater than, so a rate of 8.5 is still printed."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "The cutoff is exclusive, so 8.25 is not the last printed rate; 8.5 is printed after it.",
        "1": "The first interest amount is 7.5, which is below the cutoff, so several rates are printed before the break.",
        "2": "break leaves the loop immediately, so rates above 8.5 are never reached."
      },
      "explanation": "calculateInterest(100, rate) is just rate, so the interest amount equals the rate. 8.5 is not greater than 8.5, so it is printed, and the next rate of 8.75 triggers the break.",
      "topicPath": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_1_For_Statement/ForStatement.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-8-java-looping-concepts_src-chapter-8-java-looping-concepts-sub-chapter-1-for-statement-forstatement-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Java Looping Concepts",
      "topic": "For Statement",
      "question": "Which of the following are TRUE about For Statement? Select all that apply.",
      "options": [
        "Java supports several looping statements for repetitive execution:",
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Loops let us execute the same block of code multiple times without writing that code again and again.",
        "- for --> best when you are iterating over a known range or set of values."
      ],
      "answer": [
        0,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for For Statement.",
      "topicPath": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_1_For_Statement/ForStatement.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-8-java-looping-concepts_src-chapter-8-java-looping-concepts-sub-chapter-2-for-loop-coding-challenge-forloopprimenumberchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Java Looping Concepts",
      "topic": "For Loop Prime Number Challenge",
      "question": "Which of the following are TRUE about For Loop Prime Number Challenge? Select all that apply.",
      "options": [
        "For each number in the range: Check to see if it's a prime number using the isPrime method. If the number is prime, print it out and increment the prime number counter variable. Once the prime number counter equals three, exit the loop (Hint, use the break statement to exit). Your challenge is to create a for statement, using any range of numbers, to determine if the numbers, are prime numbers.",
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Loops let us execute the same block of code multiple times without writing that code again and again.",
        "Create a for statement, using any range of numbers, where the maximum number is <= 1000."
      ],
      "answer": [
        0,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for For Loop Prime Number Challenge.",
      "topicPath": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_2_For_Loop_Coding_Challenge/ForLoopPrimeNumberChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-8-java-looping-concepts_src-chapter-8-java-looping-concepts-sub-chapter-2-for-loop-coding-challenge-forloopsum3and5challenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Java Looping Concepts",
      "topic": "For Loop Sum3and5 Challenge",
      "question": "Which of the following are TRUE about For Loop Sum3and5 Challenge? Select all that apply.",
      "options": [
        "And for those numbers, that meet the above conditions, in other words, that are found to be divisible by both 3, and also divisible by 5, you want to print out that number.",
        "You also want to break out of the loop, once you find five numbers, that meet those above conditions.",
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Loops let us execute the same block of code multiple times without writing that code again and again."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for For Loop Sum3and5 Challenge.",
      "topicPath": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_2_For_Loop_Coding_Challenge/ForLoopSum3and5Challenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-8-java-looping-concepts_src-chapter-8-java-looping-concepts-sub-chapter-2-for-loop-coding-challenge-sumoddchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Java Looping Concepts",
      "topic": "Sum Odd Challenge",
      "question": "Which of the following are TRUE about Sum Odd Challenge? Select all that apply.",
      "options": [
        "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Loops let us execute the same block of code multiple times without writing that code again and again.",
        "If number is odd return true, otherwise return false.",
        "Check that number is > 0, if it is not return false."
      ],
      "answer": [
        0,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Sum Odd Challenge.",
      "topicPath": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_2_For_Loop_Coding_Challenge/SumOddChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-8-java-looping-concepts_src-chapter-8-java-looping-concepts-sub-chapter-3-deepproblems-patternprinterdeepproblem-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 8: Java Looping Concepts",
      "topic": "Pattern Printer Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"1. Right-angle triangle:\");",
      "answer": [
        "1. Right-angle triangle:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_3_DeepProblems/PatternPrinterDeepProblem.java",
      "tags": [
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-8-java-looping-concepts-for-scope-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 8: Java Looping Concepts",
      "topic": "OCJP Tricky",
      "question": "Which statement about for-loop variable scope is correct? (OCJP)",
      "options": [
        "The loop variable (int i) is accessible after the loop ends",
        "The loop variable (int i) declared in for() is scoped only to the loop block",
        "You can reuse the same variable name in two nested for-loops",
        "The loop variable persists between method calls"
      ],
      "answer": 1,
      "explanation": "A variable declared in the for-loop initializer (for(int i=0;...)) is scoped to that loop only. It cannot be accessed after the loop. You CANNOT reuse the same name in an inner nested loop — that would shadow it and cause a compile error.",
      "topicPath": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_2_For_Loop_Coding_Challenge/ForLoopPrimeNumberChallenge.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky"
      ]
    }
  ],
  "Chapter 9: While And Do While Looping Concepts": [
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_0-what-is-the-difference-between-while-and",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between while and do-while in Java?",
      "modelAnswer": "while checks its condition before the body, so it may run zero times. do-while checks after the body, so it always runs at least once.",
      "keyPoints": [
        "while checks its condition before the body, so it may run zero times.",
        "do-while checks after the body, so it always runs at least once."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_1-what-is-an-infinite-loop-and-how-do-you-",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "interview"
      ],
      "question": "What is an infinite loop, and how do you break out of one?",
      "modelAnswer": "An infinite loop is a loop whose condition never becomes false or that intentionally uses while(true). You exit it with break, return, an exception, or by changing the condition from inside the loop.",
      "keyPoints": [
        "An infinite loop is a loop whose condition never becomes false or that intentionally uses while(true).",
        "You exit it with break, return, an exception, or by changing the condition from inside the loop."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_2-when-would-you-prefer-while-over-for",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "interview"
      ],
      "question": "When would you prefer while over for?",
      "modelAnswer": "Prefer while when the number of iterations is not known in advance and the loop depends on a changing condition. It is common for input-reading, waiting, and sentinel-controlled loops.",
      "keyPoints": [
        "Prefer while when the number of iterations is not known in advance and the loop depends on a changing condition.",
        "It is common for input-reading, waiting, and sentinel-controlled loops."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_3-what-do-break-and-continue-do-inside-a-w",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "interview"
      ],
      "question": "What do break and continue do inside a while loop?",
      "modelAnswer": "break exits the loop immediately, while continue skips the rest of the current iteration and reevaluates the condition. Both change control flow without waiting for the loop body to finish normally.",
      "keyPoints": [
        "break exits the loop immediately, while continue skips the rest of the current iteration and reevaluates the condition.",
        "Both change control flow without waiting for the loop body to finish normally."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_4-what-prints-here-int-x-0-do-x-while-x-0-",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What prints here: int x = 0; do { x++; } while (x < 0); System.out.println(x);?",
      "modelAnswer": "It prints 1. A do-while loop always executes its body once before checking the condition.",
      "keyPoints": [
        "It prints 1.",
        "A do-while loop always executes its body once before checking the condition."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_5-which-is-usually-clearer-while-condition",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Which is usually clearer: while (condition) { ... } or while (true) { if (condition) break; }?",
      "modelAnswer": "The explicit condition form is usually clearer when the exit rule is known up front. while (true) with break is fine when the exit depends on logic inside the loop body.",
      "keyPoints": [
        "The explicit condition form is usually clearer when the exit rule is known up front.",
        "while (true) with break is fine when the exit depends on logic inside the loop body."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_6-what-parameter-like-value-controls-when-",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "interview"
      ],
      "question": "What parameter-like value controls when while(number < 15) stops?",
      "modelAnswer": "The boolean condition number < 15 controls the loop; it stops when that expression becomes false.",
      "keyPoints": [
        "The boolean condition number < 15 controls the loop; it stops when that expression becomes false."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_7-in-if-number-5-is-5-skipped-or-printed",
      "difficulty": "hard",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "In if(number <= 5), is 5 skipped or printed?",
      "modelAnswer": "5 is skipped because <= is inclusive, and continue jumps to the next iteration before the plain number print.",
      "keyPoints": [
        "5 is skipped because <= is inclusive, and continue jumps to the next iteration before the plain number print."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_8-what-is-passed-to-println-in-system-out-",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What is passed to println in System.out.println(\"Skipping number \" + number)?",
      "modelAnswer": "The concatenation creates one String argument, such as \"Skipping number 6\", and println prints that String with a newline.",
      "keyPoints": [
        "The concatenation creates one String argument, such as \"Skipping number 6\", and println prints that String with a newline."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_9-where-do-the-declaration-and-the-update-",
      "difficulty": "easy",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "interview"
      ],
      "question": "Where do the declaration and the update of the counter go in a while loop?",
      "options": [
        "Java updates the counter automatically after each iteration.",
        "The counter is declared and initialised before the loop, and updated inside the loop body.",
        "The counter is declared in the while header, exactly as it would be in a for loop.",
        "The counter is updated inside the condition, for example while (j++ <= 5)."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "Java never updates loop variables automatically, which is exactly why a missing update causes an infinite loop.",
        "2": "There is no initialisation part in a while header; only the condition is written there.",
        "3": "The condition is a test, not the place for the required update; changing it there also changes the test itself."
      },
      "explanation": "A while header holds only a boolean condition, so unlike a for loop it has no initialisation or update section. The counter must be prepared before the loop and changed inside the body, otherwise the condition never becomes false.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_10-how-many-times-does-the-body-of-this-loo",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "ocjp"
      ],
      "question": "How many times does the body of this loop execute?",
      "code": "int j = 10;\nwhile (j <= 5) {\nSystem.out.println(j);\nj++;\n}",
      "options": [
        "The code does not compile, because j is declared outside the loop.",
        "Zero times, because the condition is tested before the body and is already false.",
        "Forever, because the condition is never tested again once j is above the bound.",
        "Once, because a while loop always runs its body at least once."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "Declaring the counter before the loop is exactly what a while loop requires.",
        "2": "The condition is re-tested every time, and it is false on the very first test.",
        "3": "Running the body at least once is the behaviour of a do-while loop, not a while loop."
      },
      "explanation": "A while loop tests its condition first, so when the condition is false from the start the body is skipped entirely and control continues after the loop. This is the \"never-executing loop\" case.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_11-which-statement-about-while-true-is-corr",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "interview"
      ],
      "question": "Which statement about while (true) is correct?",
      "options": [
        "It must contain a continue statement, otherwise it is a syntax error.",
        "It runs exactly one iteration, because true is only tested once.",
        "It repeats until something inside the body ends it, such as break, return or an exception.",
        "It does not compile, because the condition must be a variable rather than a literal."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "continue only skips the rest of the current iteration; the statements that actually end the loop are break and return.",
        "1": "The condition is re-tested before every iteration and stays true, so it does not stop after one pass.",
        "3": "A boolean literal is a valid condition, and while (true) compiles."
      },
      "explanation": "while (true) is a deliberate infinite loop whose condition never becomes false. It is a common \"loop until done\" pattern, and the exit has to come from inside the body.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_12-in-this-file-s-loop-is-the-value-5-print",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "In this file's loop, is the value 5 printed as a bare number?",
      "options": [
        "No, because continue exits the loop entirely before 5 is reached.",
        "Yes, because continue only applies to even numbers.",
        "Yes, because <= stops just below 5 and lets 5 through to the plain print.",
        "No, because the test number <= 5 includes 5, and continue skips the rest of that iteration."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "continue skips only the current iteration; it is break that leaves the loop.",
        "1": "There is no test on even or odd numbers here; every value up to and including 5 is skipped.",
        "2": "<= is inclusive, so 5 satisfies the condition and is skipped along with 1 to 4."
      },
      "explanation": "The test number <= 5 is inclusive, so 1 through 5 all take the continue branch and print the Skipping message instead of the bare number. The first bare number printed is 6.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_13-when-is-a-while-loop-usually-a-better-ch",
      "difficulty": "easy",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "interview"
      ],
      "question": "When is a while loop usually a better choice than a for loop?",
      "options": [
        "When the loop must run at least once whatever the condition says.",
        "When the counter needs to be initialised inside the loop header.",
        "When the exact number of iterations is known before the loop starts.",
        "When the number of iterations is not known in advance and the loop depends on a condition that changes."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "Running at least once regardless of the condition is the job of a do-while loop.",
        "1": "A while header holds only the condition, so there is nowhere to initialise a counter in it.",
        "2": "A known iteration count is the case where a for loop fits better, because its setup stays in one line."
      },
      "explanation": "A while loop keeps only the condition in its declaration, which suits sentinel-controlled and input-reading loops where the count is unknown. A for loop is preferred when the count is known up front.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_14-in-this-loop-which-values-reach-the-fina",
      "difficulty": "hard",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "ocjp"
      ],
      "question": "In this loop, which values reach the final System.out.println(number)?",
      "code": "int number = 0;\nwhile (number < 15) {\nnumber++;\nif (number <= 5) {\nSystem.out.println(\"Skipping number \" + number);\ncontinue;\n}\nif (number >= 10) {\nSystem.out.println(\"Skipping number \" + number);\nbreak;\n}\nSystem.out.println(number);\n}",
      "options": [
        "6, 7, 8 and 9",
        "6, 7, 8, 9 and 10",
        "1, 2, 3, 4 and 5",
        "5, 6, 7, 8, 9 and 10"
      ],
      "answer": 0,
      "whyByOption": {
        "1": "10 prints the Skipping message and then breaks, so it is not printed as a bare number.",
        "2": "Those values print the Skipping message and continue, so they never reach the bare print.",
        "3": "5 is skipped by the <= 5 test and 10 is stopped by break, so neither reaches the final print."
      },
      "explanation": "Values 1 to 5 are caught by the first test, print the Skipping message and continue, and 10 is caught by the second test and breaks. Only 6, 7, 8 and 9 fall through both tests to the plain println.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_15-which-loop-always-executes-its-body-at-l",
      "difficulty": "easy",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "interview"
      ],
      "question": "Which loop always executes its body at least once?",
      "options": [
        "do-while, because it tests the condition after the body.",
        "The enhanced for loop, because it visits each element in turn.",
        "while, because it re-tests the condition after every iteration.",
        "for, because its initialisation always runs before the condition."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "An enhanced for loop runs zero times when the array or collection is empty.",
        "2": "A while loop tests first, so a false condition means the body never runs.",
        "3": "The initialisation of a for loop runs once, but the body is still skipped when the condition is false."
      },
      "explanation": "A do-while loop checks its condition after the body has run, so the body executes once even when the condition is false from the start. while and for test before the body and may run it zero times.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_custom_16-what-happens-when-this-code-runs",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "ocjp"
      ],
      "question": "What happens when this code runs?",
      "code": "int j = 1;\nwhile (j <= 5) {\nSystem.out.println(j);\n}",
      "options": [
        "It prints 1, 2, 3, 4 and 5 and then stops normally.",
        "It prints 1 again and again and never stops, because the condition stays true.",
        "It does not compile, because the body must change the loop variable.",
        "It prints nothing, because the condition is false from the start."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "Nothing increments j, so the loop never reaches 5 and never ends.",
        "2": "Java does not require the body to modify the loop variable; the code compiles but loops for ever.",
        "3": "The condition is true when j is 1, so the body does run; it simply never stops."
      },
      "explanation": "The body never changes j, so j stays 1 and j <= 5 remains true for ever. Every while loop depends on the body updating its counter.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-1-while-loop-whileloops-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loops",
      "question": "Which of the following are TRUE about While Loops? Select all that apply.",
      "options": [
        "Write a method called isPalindrome with one int parameter called number.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Unlike the for loop, the while loop does NOT have a built-in initialisation or update step in its declaration.",
        "The while loop repeatedly executes its body as long as a condition remains true.",
        "You must declare and initialise any counter variables BEFORE the loop, and update them INSIDE the loop body."
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for While Loops.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_1_While_Loop/WhileLoops.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-2-do-while-loop-dowhileloops-java_custom_0-what-does-the-isready-value-control-in-d",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "tags": [
        "interview"
      ],
      "question": "What does the isReady value control in do { ... } while (isReady)?",
      "modelAnswer": "It controls whether another iteration starts after the body finishes; because it is checked after the body, the body runs at least once.",
      "keyPoints": [
        "It controls whether another iteration starts after the body finishes; because it is checked after the body, the body runs at least once."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_2_Do_While_Loop/DoWhileLoops.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-2-do-while-loop-dowhileloops-java_custom_1-if-isready-is-false-before-a-do-while-st",
      "difficulty": "hard",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "If isReady is false before a do-while starts, how many times does the body run?",
      "modelAnswer": "It still runs once, because do-while checks the condition after executing the body.",
      "keyPoints": [
        "It still runs once, because do-while checks the condition after executing the body."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_2_Do_While_Loop/DoWhileLoops.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-2-do-while-loop-dowhileloops-java_custom_2-in-if-j-5-does-the-loop-break-when-j-is-",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "In if(j > 5), does the loop break when j is exactly 5?",
      "modelAnswer": "No. The > operator is exclusive, so the break condition becomes true only when j is greater than 5.",
      "keyPoints": [
        "No. The > operator is exclusive, so the break condition becomes true only when j is greater than 5."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_2_Do_While_Loop/DoWhileLoops.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-2-do-while-loop-dowhileloops-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "question": "Which of the following are TRUE about Do While Loops? Select all that apply.",
      "options": [
        "Write a method called isPalindrome with one int parameter called number.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "The while loop repeatedly executes its body as long as a condition remains true.",
        "In a regular while loop, if the condition is false from the start, the body NEVER runs. In a do-while, the body runs first, THEN the condition is checked.",
        "This makes do-while ideal for situations like \"ask the user for input at least once, then keep asking if the input is invalid.\""
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Do While Loops.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_2_Do_While_Loop/DoWhileLoops.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-3-while-do-while-loop-codingchallenge-checknumberpalindromecodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "Check Number Palindrome Coding Challenge",
      "question": "Which of the following are TRUE about Check Number Palindrome Coding Challenge? Select all that apply.",
      "options": [
        "It should return true if the number is a palindrome number otherwise it should return false.",
        "Write a method called isPalindrome with one int parameter called number.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "The method needs to return a boolean.",
        "The while loop repeatedly executes its body as long as a condition remains true."
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Check Number Palindrome Coding Challenge.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/CheckNumberPalindromeCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-3-while-do-while-loop-codingchallenge-digitsumcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "Digit Sum Coding Challenge",
      "question": "Which of the following are TRUE about Digit Sum Coding Challenge? Select all that apply.",
      "options": [
        "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int.",
        "If a negative number is passed, it should return -1, meaning, an invalid value was passed.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "The while loop repeatedly executes its body as long as a condition remains true.",
        "The method should only take a number that is a positive number."
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Digit Sum Coding Challenge.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/DigitSumCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-3-while-do-while-loop-codingchallenge-evendigitsumcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "Even Digit Sum Coding Challenge",
      "question": "Which of the following are TRUE about Even Digit Sum Coding Challenge? Select all that apply.",
      "options": [
        "If the number is negative, the method should return -1 to indicate an invalid value.",
        "The method should return the sum of the even digits within the number.",
        "Write a method named getEvenDigitSum with one parameter of type int called number.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "The while loop repeatedly executes its body as long as a condition remains true."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for Even Digit Sum Coding Challenge.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/EvenDigitSumCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-3-while-do-while-loop-codingchallenge-factorprintercodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "Factor Printer Coding Challenge",
      "question": "Which of the following are TRUE about Factor Printer Coding Challenge? Select all that apply.",
      "options": [
        "The approach uses a while loop counting from 1 to N, checking if number % counter == 0 (i.e., divisible with no remainder).",
        "Factor Printer Challenge: A factor of a number N is any integer that divides N with no remainder.",
        "For example, the factors of 32 are: 1, 2, 4, 8, 16, 32 — each divides 32 evenly.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "The while loop repeatedly executes its body as long as a condition remains true."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for Factor Printer Coding Challenge.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/FactorPrinterCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-3-while-do-while-loop-codingchallenge-firstandlastdigitsumcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "First And Last Digit Sum Coding Challenge",
      "question": "Which of the following are TRUE about First And Last Digit Sum Coding Challenge? Select all that apply.",
      "options": [
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "The while loop repeatedly executes its body as long as a condition remains true.",
        "If the number is negative then the method needs to return -1 to indicate an invalid value.",
        "The method needs to find the first and the last digit of the parameter number passed to the method, using a loop and return the sum of the first and the last digit of that number.",
        "Write a method named sumFirstAndLastDigit with one parameter of type int called number."
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for First And Last Digit Sum Coding Challenge.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/FirstAndLastDigitSumCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-3-while-do-while-loop-codingchallenge-floorpackproblemcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "Floor Pack Problem Coding Challenge",
      "question": "Which of the following are TRUE about Floor Pack Problem Coding Challenge? Select all that apply.",
      "options": [
        "Write a method named canPack with three parameters of type int named bigCount, smallCount, and goal.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "The while loop repeatedly executes its body as long as a condition remains true.",
        "The parameter smallCount represents the count of small flour bags (1 kilo each).",
        "The parameter bigCount represents the count of big flour bags (5 kilos each)."
      ],
      "answer": [
        0,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Floor Pack Problem Coding Challenge.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/FloorPackProblemCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-3-while-do-while-loop-codingchallenge-greatestcommondivisorcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "Greatest Common Divisor Coding Challenge",
      "question": "Which of the following are TRUE about Greatest Common Divisor Coding Challenge? Select all that apply.",
      "options": [
        "Greatest Common Divisor (GCD) Challenge: the GCD of two numbers is the largest integer that divides both without a remainder.",
        "The method iterates over all divisors of the smaller number and checks which ones also divide the larger number — the last common divisor found is the GCD.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "The while loop repeatedly executes its body as long as a condition remains true.",
        "For example, GCD(81, 153) = 27, since 27 is the largest number that divides both 81 and 153 evenly."
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Greatest Common Divisor Coding Challenge.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/GreatestCommonDivisorCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-3-while-do-while-loop-codingchallenge-largestprimefactorcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "Largest Prime Factor Coding Challenge",
      "question": "Which of the following are TRUE about Largest Prime Factor Coding Challenge? Select all that apply.",
      "options": [
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "The method should calculate the largest prime factor of a given number and return it.",
        "The while loop repeatedly executes its body as long as a condition remains true.",
        "Write a method named getLargestPrime with one parameter of type int named number.",
        "If the number is negative or does not have any prime numbers, the method should return -1 to indicate an invalid value."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Largest Prime Factor Coding Challenge.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/LargestPrimeFactorCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-3-while-do-while-loop-codingchallenge-lastdigitcheckercodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "Last Digit Checker Coding Challenge",
      "question": "Which of the following are TRUE about Last Digit Checker Coding Challenge? Select all that apply.",
      "options": [
        "Each number should be within the range of 10 (inclusive) - 1000 (inclusive). If one of the numbers is not within the range, the method should return false.",
        "Write a method named hasSameLastDigit with three parameters of type int.",
        "The method should return true if at least two of the numbers share the same rightmost digit; otherwise, it should return false.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "The while loop repeatedly executes its body as long as a condition remains true."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for Last Digit Checker Coding Challenge.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/LastDigitCheckerCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-3-while-do-while-loop-codingchallenge-numbertowordscodingchallenge-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "Number To Words Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Invalid Value\");",
      "answer": [
        "Invalid Value"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/NumberToWordsCodingChallenge.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-3-while-do-while-loop-codingchallenge-shareddigitcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "Shared Digit Coding Challenge",
      "question": "Which of the following are TRUE about Shared Digit Coding Challenge? Select all that apply.",
      "options": [
        "Each number should be within the range of 10 (inclusive) - 99 (inclusive). If one of the numbers is not within the range, the method should return false.",
        "The method should return true if there is a digit that appears in both numbers, such as 2 in 12 and 23; otherwise, the method should return false.",
        "Write a method named hasSharedDigit with two parameters of type int.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "The while loop repeatedly executes its body as long as a condition remains true."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for Shared Digit Coding Challenge.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/SharedDigitCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-3-while-do-while-loop-codingchallenge-whileloopcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge",
      "question": "Which of the following are TRUE about While Loop Coding Challenge? Select all that apply.",
      "options": [
        "If it's an even number, return true, otherwise, return false.",
        "Create a method called isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed to the method is an even number or not. Return true from the method if it's an even number; otherwise, return false. Next, use a while loop to test a range of numbers from 5 up to and including 20, but printing out only the even numbers determined by the call to the isEvenNumber method. Okay, so the challenge is to create a method called isEvenNumber, and it takes a parameter of type int.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "The while loop repeatedly executes its body as long as a condition remains true.",
        "The purpose of the method is to determine whether the argument that's been passed to the method, the int, in other words, is an even number or not."
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for While Loop Coding Challenge.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/WhileLoopCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-9-while-and-do-while-looping-concepts_src-chapter-9-whileanddowhileloopingconcepts-sub-chapter-4-deepproblems-numberguesserdeepproblem-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 9: While And Do While Looping Concepts",
      "topic": "Number Guesser Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Collatz sequence lengths for 1 to 20:\");",
      "answer": [
        "Collatz sequence lengths for 1 to 20:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_4_DeepProblems/NumberGuesserDeepProblem.java",
      "tags": [
        "predict"
      ]
    }
  ],
  "Chapter 10: Class Object Static And Instance Fields": [
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-1-class-classexample-java_custom_0-what-is-the-difference-between-a-class-a",
      "difficulty": "easy",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between a class and an object?",
      "options": [
        "A class can only ever be used to create one object.",
        "An object is a copy of the class file stored on disk.",
        "A class is an instance of an object.",
        "A class is a blueprint that defines fields and methods, and an object is an instance created from that blueprint."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "a single class can create any number of objects, each with its own values.",
        "1": "an object is created in memory at runtime by the new keyword. It is not a copy of the source file.",
        "2": "the relationship is the other way round. An object is an instance of a class."
      },
      "explanation": "The class describes the data and behaviour; the object is the real thing in memory, created from that description. There is no limit on how many objects one class can produce.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-1-class-classexample-java_custom_1-how-is-an-object-created-from-a-class",
      "difficulty": "easy",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview"
      ],
      "question": "How is an object created from a class?",
      "options": [
        "By using the new keyword, as in ClassName obj = new ClassName();",
        "By declaring a variable of the class type on its own.",
        "By writing the class name with no keyword in front of it.",
        "Objects are created automatically when the source file is compiled."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "a declaration such as ClassName obj; creates a reference that is still null, not an object.",
        "2": "writing the class name alone is not valid syntax for creating an object.",
        "3": "compilation produces bytecode. Objects exist only while the program runs."
      },
      "explanation": "new performs the class instance creation expression. It allocates the object and gives you a reference to it. Declaring the variable only reserves a name; no object exists until new runs.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-1-class-classexample-java_custom_2-how-do-instance-fields-behave-across-sev",
      "difficulty": "medium",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview"
      ],
      "question": "How do instance fields behave across several objects of the same class?",
      "options": [
        "Instance fields are shared between objects, and static fields are per object.",
        "All objects share one copy of each instance field.",
        "Each object gets its own copy of the instance fields, so the values can differ between objects.",
        "Instance fields cannot hold different values in different objects at the same time."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "this is reversed. Static fields are the shared ones.",
        "1": "that describes a static field, not an instance field.",
        "3": "holding different values per object is exactly what instance fields are for."
      },
      "explanation": "An instance field belongs to the object. Two Car objects can have different colours at the same time, because each holds its own copy.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-1-class-classexample-java_custom_3-what-is-the-difference-between-a-static-",
      "difficulty": "medium",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between a static field and an instance field?",
      "options": [
        "A static field is created once for every object.",
        "A static field cannot be changed after it is set.",
        "An instance field is accessed through the class name.",
        "A static field belongs to the class and is shared by all objects, while an instance field belongs to each object."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "static means one per class, not one per object.",
        "1": "a static field can be changed unless it is also declared final.",
        "2": "an instance field is reached through an object reference, as in myCar.colour. ClassName.field is the static style."
      },
      "explanation": "A static field has one value for the whole class, so every object sees the same value. An instance field gives each object its own storage.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-1-class-classexample-java_custom_4-how-do-system-out-println-null-and-calli",
      "difficulty": "hard",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "How do System.out.println(null) and calling a method on a null String differ?",
      "options": [
        "Both handle null safely and print \"null\".",
        "println prints the text \"null\", while calling an instance method on a null reference throws NullPointerException.",
        "println(null) does not compile.",
        "Both throw NullPointerException."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "the method call does not survive a null reference.",
        "2": "println(null) compiles and prints the text null.",
        "3": "println(null) is safe. Only the method call fails."
      },
      "explanation": "println is built to accept a null argument and prints the word null. The danger is elsewhere: any instance method called on a null reference fails, because there is no object to run it on.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-1-class-classexample-java_custom_5-how-does-new-string-hello-differ-from-wr",
      "difficulty": "medium",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview"
      ],
      "question": "How does new String(\"Hello\") differ from writing the literal \"Hello\"?",
      "options": [
        "new String(\"Hello\") returns the pooled literal for you.",
        "The literal creates a new object every time it appears in the code.",
        "Both always produce the same object in memory.",
        "new String(\"Hello\") creates a distinct String object, while the literal \"Hello\" is reused from the String pool."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "if it returned the pooled literal, new would be pointless.",
        "1": "literals are pooled and reused, not recreated each time.",
        "2": "they are different objects, which is why == can be false for two equal Strings."
      },
      "explanation": "new always allocates a fresh object. A literal is looked up in the String pool and reused, which is why two identical literals usually share one object.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-1-class-classexample-java_custom_6-in-new-string-hello-what-does-the-hello-",
      "difficulty": "medium",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview"
      ],
      "question": "In new String(\"Hello\"), what does the \"Hello\" parameter provide?",
      "modelAnswer": "It provides the initial characters for the new String object; in normal code, prefer the literal \"Hello\" unless a separate object is deliberately needed.",
      "keyPoints": [
        "It provides the initial characters for the new String object; in normal code, prefer the literal \"Hello\" unless a separate object is deliberately needed."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-1-class-classexample-java_custom_7-what-does-the-args-parameter-in-public-s",
      "difficulty": "medium",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What does the args parameter in public static void main(String[] args) contain?",
      "modelAnswer": "It contains command-line arguments passed to the Java program, in order, as Strings.",
      "keyPoints": [
        "It contains command-line arguments passed to the Java program, in order, as Strings."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-1-class-classexample-java_custom_8-is-system-out-println-null-the-same-risk",
      "difficulty": "hard",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Is System.out.println(null) the same risk as calling a method on a null String reference?",
      "modelAnswer": "No. println can print null as the text \"null\", but calling an instance method on a null reference throws NullPointerException.",
      "keyPoints": [
        "No. println can print null as the text \"null\", but calling an instance method on a null reference throws NullPointerException."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-1-class-classexample-java_custom_9-what-is-the-difference-between-a-class-a",
      "difficulty": "medium",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between a class and an object in Java?",
      "modelAnswer": "A class is a blueprint that defines fields and methods, while an object is a real instance created from that blueprint. Many objects can be created from one class, each with its own state.",
      "keyPoints": [
        "A class is a blueprint that defines fields and methods, while an object is a real instance created from that blueprint.",
        "Many objects can be created from one class, each with its own state."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-1-class-classexample-java_custom_10-what-is-the-difference-between-static-fi",
      "difficulty": "medium",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between static fields and instance fields?",
      "modelAnswer": "A static field belongs to the class itself and is shared by all objects of that class. An instance field belongs to each object, so every object gets its own copy.",
      "keyPoints": [
        "A static field belongs to the class itself and is shared by all objects of that class.",
        "An instance field belongs to each object, so every object gets its own copy."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-1-class-classexample-java_custom_11-what-are-the-default-values-of-instance-",
      "difficulty": "medium",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview"
      ],
      "question": "What are the default values of instance fields in Java?",
      "modelAnswer": "Numeric instance fields default to 0 or 0.0, boolean defaults to false, and reference fields default to null. These defaults apply to fields, not to local variables.",
      "keyPoints": [
        "Numeric instance fields default to 0 or 0.0, boolean defaults to false, and reference fields default to null.",
        "These defaults apply to fields, not to local variables."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-1-class-classexample-java_custom_12-when-would-you-make-a-field-static",
      "difficulty": "medium",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview"
      ],
      "question": "When would you make a field static?",
      "modelAnswer": "Use a static field when the value should be shared across all objects, such as a counter or constant-like class state. Do not use static when every object needs its own separate value.",
      "keyPoints": [
        "Use a static field when the value should be shared across all objects, such as a counter or constant-like class state.",
        "Do not use static when every object needs its own separate value."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-1-class-classexample-java_custom_13-what-prints-here-class-counter-static-in",
      "difficulty": "medium",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What prints here: class Counter { static int c = 0; } Counter a = new Counter(); Counter b = new Counter(); a.c = 5; System.out.println(b.c);?",
      "modelAnswer": "It prints 5. The field is static, so both references access the same shared class variable.",
      "keyPoints": [
        "It prints 5.",
        "The field is static, so both references access the same shared class variable."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-1-class-classexample-java_custom_14-can-a-static-method-directly-access-an-i",
      "difficulty": "medium",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Can a static method directly access an instance field like int age; without an object?",
      "modelAnswer": "No. A static method has no current object, so direct access to an instance field causes a compile-time error. It must use an object reference or access a static field instead.",
      "keyPoints": [
        "No. A static method has no current object, so direct access to an instance field causes a compile-time error.",
        "It must use an object reference or access a static field instead."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_1_Class/ClassExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-2-create-field-on-classes-createfieldonclasses-java_custom_0-why-does-new-createfieldonclasses-not-ne",
      "difficulty": "medium",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "tags": [
        "interview"
      ],
      "question": "Why does new CreateFieldOnClasses() not need constructor arguments in this file?",
      "modelAnswer": "The class defines no parameterized constructor, so the default no-argument constructor is used and field initializers supply the values.",
      "keyPoints": [
        "The class defines no parameterized constructor, so the default no-argument constructor is used and field initializers supply the values."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_2_Create_Field_On_Classes/CreateFieldOnClasses.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-2-create-field-on-classes-createfieldonclasses-java_custom_1-in-system-out-println-a-b-how-many-argum",
      "difficulty": "hard",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "In System.out.println(a + \" \" + b), how many arguments are passed to println?",
      "modelAnswer": "One argument is passed: the concatenated String expression produced before println receives it.",
      "keyPoints": [
        "One argument is passed: the concatenated String expression produced before println receives it."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_2_Create_Field_On_Classes/CreateFieldOnClasses.java"
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-3-class-fields-codingchallenge-bankaccountfieldschallenge-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Bank Account Fields Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"After deposit:\");",
      "answer": [
        "After deposit:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_3_Class_Fields_CodingChallenge/BankAccountFieldsChallenge.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-3-class-fields-codingchallenge-studentclasschallenge-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Student Class Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Updating school name through the first student...\");",
      "answer": [
        "Updating school name through the first student..."
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_3_Class_Fields_CodingChallenge/StudentClassChallenge.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-10-class-object-static-and-instance-fields_src-chapter-10-class-object-static-and-instance-fields-sub-chapter-4-deepproblems-librarysystemdeepproblem-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: Class Object Static And Instance Fields",
      "topic": "Library System Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Library status report:\");",
      "answer": [
        "Library status report:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_4_DeepProblems/LibrarySystemDeepProblem.java",
      "tags": [
        "predict"
      ]
    }
  ],
  "Chapter 11: Parsing Values Reading Input": [
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "What does this code print?",
      "code": "System.out.println(\"Enter the year of birth greater than 1895 and less than or equal to current year\");",
      "answer": [
        "Enter the year of birth greater than 1895 and less than or equal to current year"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_0-what-does-integer-parseint-do-and-what-c",
      "difficulty": "easy",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "What does Integer.parseInt() do, and what can go wrong?",
      "options": [
        "It converts numeric text such as \"42\" into a primitive int, and throws NumberFormatException if the text is not a valid integer.",
        "It converts a number into text.",
        "It returns null when the text is not numeric.",
        "It rounds a decimal value to the nearest whole number."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "that is the opposite direction, done by String.valueOf or Integer.toString.",
        "2": "it does not return a value on failure. It throws.",
        "3": "parseInt rejects decimals such as \"22.5\" rather than rounding them."
      },
      "explanation": "parseInt is a conversion from text to a number. It only accepts valid integer text, so a decimal point, letters, or a blank string cause NumberFormatException at runtime.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_1-what-happens-when-integer-parseint-22-5-",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "ocjp"
      ],
      "question": "What happens when Integer.parseInt(\"22.5\") is called?",
      "options": [
        "It returns 0 and prints a warning.",
        "It returns 22.5 as a double.",
        "It returns 22 by trimming the decimal part.",
        "It throws NumberFormatException, because \"22.5\" is not valid integer text."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "there is no warning path. The method throws an exception.",
        "1": "the return type is int, so it can never hand back a double.",
        "2": "it does not truncate. Use Double.parseDouble(\"22.5\") when decimals are expected."
      },
      "explanation": "parseInt expects whole-number text. The decimal point makes the input invalid, so the method throws rather than guessing what you meant.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_2-in-integer-parseint-1010-2-what-does-the",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "ocjp"
      ],
      "question": "In Integer.parseInt(\"1010\", 2), what does the second argument mean?",
      "options": [
        "It is a rounding mode.",
        "It is the maximum value allowed.",
        "It is the number of digits to read.",
        "It is the radix, so \"1010\" is read as binary and the method returns the decimal value 10."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "rounding is not involved in parsing an integer.",
        "1": "radix controls the base, not a limit.",
        "2": "the whole string is parsed. The second argument never limits how many characters are used."
      },
      "explanation": "The radix selects the number base used to interpret the text. Base 2 means binary, so the digits 1010 represent 8 + 0 + 2 + 0, which is 10.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_3-why-is-mixing-scanner-nextint-and-scanne",
      "difficulty": "hard",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why is mixing Scanner.nextInt() and Scanner.nextLine() a common bug?",
      "options": [
        "nextInt() reads the number but leaves the newline in the input, so the next nextLine() returns an empty string unless the leftover line is consumed first.",
        "nextInt() consumes the newline automatically, so the two can be mixed freely.",
        "nextLine() does not compile after nextInt().",
        "You must always use next() instead of nextLine()."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "if the newline were consumed, this bug would not exist.",
        "2": "it compiles. The problem appears at runtime as an unexpectedly empty string.",
        "3": "next() and nextLine() both have their uses; the issue is the leftover newline, not the choice of method."
      },
      "explanation": "Token methods such as nextInt read up to the number and stop. The line break is still waiting, so the following nextLine call sees an empty line. Reading one extra line first clears it.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_4-when-is-double-parsedouble-the-right-cho",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "When is Double.parseDouble the right choice?",
      "options": [
        "Only when the value is guaranteed to be a whole number.",
        "Whenever the input might contain letters.",
        "When decimal values are expected, such as \"22.5\", because parseInt would reject the decimal point.",
        "When you want an int result from decimal text."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "a whole number works with parseInt too. Decimals are the reason to prefer parseDouble.",
        "1": "letters fail in both methods. The choice is about decimals, not letters.",
        "3": "parseDouble returns a double. Use parseInt for an int result from whole-number text."
      },
      "explanation": "Choose the parse method that matches the text you expect. Any input can still fail with NumberFormatException, so letters remain a problem for both methods.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_5-why-does-100-50-give-10050-rather-than-1",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "Why does \"100\" + \"50\" give \"10050\" rather than 150?",
      "options": [
        "Because Java converts the Strings to numbers before adding.",
        "Because the compiler reports an error and this never runs.",
        "Because + on Strings performs concatenation, so the two pieces are joined into one text value.",
        "Because Java always treats + as addition when it sees digits."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "no automatic conversion happens. That is why parse methods exist.",
        "1": "it compiles and runs, producing \"10050\".",
        "3": "+ does arithmetic only when both operands are numeric."
      },
      "explanation": "The + operator is defined for text as concatenation. The type of the operands decides the meaning, so two Strings produce one longer String. To add them you must parse them first.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_6-why-can-system-console-be-a-problem-in-s",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "Why can System.console() be a problem in some development environments?",
      "options": [
        "It is another name for System.out.",
        "It always returns a valid Console object, so no check is needed.",
        "It can only be used to write output, never to read input.",
        "It returns null when there is no console attached, which happens in some IDEs, so the result must be null-checked."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "System.out is an output stream. Console offers both reading and a prompt.",
        "1": "returning null is exactly the risk, so the check matters.",
        "2": "Console is mainly used for reading input with a prompt."
      },
      "explanation": "Console is a convenient way to read a line and show a prompt, but it is not always available. When the JVM is not connected to a terminal, console() returns null and calling a method on it would throw.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_7-what-does-the-parameter-to-new-scanner-s",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "What does the parameter to new Scanner(System.in) decide?",
      "modelAnswer": "It decides the input source. System.in means read from keyboard/stdin; use another source, such as a File, when input should come from elsewhere.",
      "keyPoints": [
        "It decides the input source. System.in means read from keyboard/stdin; use another source, such as a File, when input should come from elsewhere."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_8-what-must-be-true-about-the-string-passe",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "What must be true about the String passed to Integer.parseInt(String s)?",
      "modelAnswer": "It must contain valid integer text for the expected radix, with no decimal point or non-numeric characters except a valid sign.",
      "keyPoints": [
        "It must contain valid integer text for the expected radix, with no decimal point or non-numeric characters except a valid sign."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_9-what-happens-if-integer-parseint-22-5-is",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What happens if Integer.parseInt(\"22.5\") is called?",
      "modelAnswer": "It throws NumberFormatException because \"22.5\" is not valid integer text.",
      "keyPoints": [
        "It throws NumberFormatException because \"22.5\" is not valid integer text."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_10-when-would-you-choose-double-parsedouble",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "When would you choose Double.parseDouble(userInput) instead of Integer.parseInt(userInput)?",
      "modelAnswer": "Choose Double.parseDouble when decimal values are allowed or expected, such as \"22.5\".",
      "keyPoints": [
        "Choose Double.parseDouble when decimal values are allowed or expected, such as \"22.5\"."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_11-in-checkvaliddob-currentyear-yearofbirth",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "In checkValidDOB(currentYear, yearOfBirth), why are both parameters needed?",
      "modelAnswer": "currentYear sets the upper validation limit, while yearOfBirth supplies the user text that must be parsed and checked against the allowed range.",
      "keyPoints": [
        "currentYear sets the upper validation limit, while yearOfBirth supplies the user text that must be parsed and checked against the allowed range."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_12-why-should-the-catch-parameter-often-be-",
      "difficulty": "hard",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why should the catch parameter often be NumberFormatException instead of plain Exception here?",
      "modelAnswer": "NumberFormatException is specific to parsing failures, so it avoids accidentally hiding unrelated bugs that a broad Exception catch would also catch.",
      "keyPoints": [
        "NumberFormatException is specific to parsing failures, so it avoids accidentally hiding unrelated bugs that a broad Exception catch would also catch."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_13-in-integer-parseint-1010-2-what-does-the",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "In Integer.parseInt(\"1010\", 2), what does the second parameter mean?",
      "modelAnswer": "The second parameter is the radix/base; 2 means interpret \"1010\" as binary, producing decimal 10.",
      "keyPoints": [
        "The second parameter is the radix/base; 2 means interpret \"1010\" as binary, producing decimal 10."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_14-what-is-the-purpose-of-the-prompt-parame",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "What is the purpose of the prompt parameter in System.console().readLine(\"Question\")?",
      "modelAnswer": "It displays a clear question before reading the user's line, so choose wording that tells the user exactly what value to enter.",
      "keyPoints": [
        "It displays a clear question before reading the user's line, so choose wording that tells the user exactly what value to enter."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_15-what-does-integer-parseint-do-and-what-e",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "What does Integer.parseInt() do, and what exception can it throw?",
      "modelAnswer": "Integer.parseInt() converts a numeric String like \"42\" into a primitive int. It throws NumberFormatException if the text is not a valid integer.",
      "keyPoints": [
        "Integer.parseInt() converts a numeric String like \"42\" into a primitive int.",
        "It throws NumberFormatException if the text is not a valid integer."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_16-what-is-the-difference-between-integer-p",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between Integer.parseInt() and Integer.valueOf()?",
      "modelAnswer": "parseInt() returns a primitive int, while valueOf() returns an Integer object. valueOf() is useful when you need the wrapper type instead of the primitive.",
      "keyPoints": [
        "parseInt() returns a primitive int, while valueOf() returns an Integer object.",
        "valueOf() is useful when you need the wrapper type instead of the primitive."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_17-what-is-scanner-and-how-does-it-read-inp",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "What is Scanner, and how does it read input?",
      "modelAnswer": "Scanner is a utility class that reads tokens or lines from sources such as System.in. Methods like nextInt(), next(), and nextLine() parse different kinds of input.",
      "keyPoints": [
        "Scanner is a utility class that reads tokens or lines from sources such as System.in.",
        "Methods like nextInt(), next(), and nextLine() parse different kinds of input."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_18-why-do-java-programs-often-need-parsing-",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "Why do Java programs often need parsing when reading console input?",
      "modelAnswer": "Console input arrives as text, so you must convert numeric text into number types before doing arithmetic. That is why parsing methods are common when reading user input.",
      "keyPoints": [
        "Console input arrives as text, so you must convert numeric text into number types before doing arithmetic.",
        "That is why parsing methods are common when reading user input."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_19-what-happens-with-integer-parseint-3-5",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What happens with: Integer.parseInt(\"3.5\")?",
      "modelAnswer": "It throws NumberFormatException because parseInt accepts only valid integer text. Decimal text must be parsed with a floating-point parser instead.",
      "keyPoints": [
        "It throws NumberFormatException because parseInt accepts only valid integer text.",
        "Decimal text must be parsed with a floating-point parser instead."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_custom_20-why-can-nextline-appear-to-skip-input-af",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Why can nextLine() appear to skip input after nextInt() in Scanner?",
      "modelAnswer": "nextInt() leaves the trailing newline in the input buffer. The following nextLine() reads that leftover newline, so you often need an extra nextLine() to consume it first.",
      "keyPoints": [
        "nextInt() leaves the trailing newline in the input buffer.",
        "The following nextLine() reads that leftover newline, so you often need an extra nextLine() to consume it first."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-1-parsing-values-and-reading-input-parsingvaluesreadinginput-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "Which of the following are TRUE about Parsing Values Reading Input? Select all that apply.",
      "options": [
        "@option It converts numeric text such as \"42\" into a primitive int, and throws NumberFormatException if the text is not a valid integer. [correct]",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "Reading Data From Console",
        "Write a method called inputThenPrintSumAndAverage that does not have any parameters."
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Parsing Values Reading Input.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_1_Parsing_Values_And_Reading_input/ParsingValuesReadingInput.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-2-parsing-values-coding-challenge-inputcalculatorchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Input Calculator Challenge",
      "question": "Which of the following are TRUE about Input Calculator Challenge? Select all that apply.",
      "options": [
        "When the user enters something that is not an int then it needs to print a message in the format \"SUM = XX AVG = YY\".",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "The method should not return anything (void) and it needs to keep reading int numbers from the keyboard.",
        "Write a method called inputThenPrintSumAndAverage that does not have any parameters."
      ],
      "answer": [
        0,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Input Calculator Challenge.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_2_Parsing_Values_Coding_Challenge/InputCalculatorChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-2-parsing-values-coding-challenge-minmaxcodingchallenge-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Min Max Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Enter any number of your choice. To quit, press any character\");",
      "answer": [
        "Enter any number of your choice. To quit, press any character"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_2_Parsing_Values_Coding_Challenge/MinMaxCodingChallenge.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-2-parsing-values-coding-challenge-minmaxcodingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Min Max Coding Challenge",
      "question": "Which of the following are TRUE about Min Max Coding Challenge? Select all that apply.",
      "options": [
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "You can decide if you want the user to enter integers or decimal numbers.",
        "Write a method called inputThenPrintSumAndAverage that does not have any parameters.",
        "If the user has previously entered a set of numbers (or even just one), display the minimum and maximum number that the user entered. So, you'll want to create a loop that continues to process until the user enters non-numeric data. You'll prompt the user to enter a number or type a character to quit each iteration. After the user enters some data, you'll read the input as a string, and then test if it can be parsed to a number."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Min Max Coding Challenge.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_2_Parsing_Values_Coding_Challenge/MinMaxCodingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-2-parsing-values-coding-challenge-paintjobchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "Which of the following are TRUE about Paint Job Challenge? Select all that apply.",
      "options": [
        "Math.ceil() is used to round up — you always need whole buckets, never a fraction.",
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Write a method called inputThenPrintSumAndAverage that does not have any parameters.",
        "The wall area is calculated as width * height. Each bucket covers a fixed area (areaPerBucket)."
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Paint Job Challenge.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_2_Parsing_Values_Coding_Challenge/PaintJobChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-2-parsing-values-coding-challenge-readinguserinputchallenge-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Invalid number\");",
      "answer": [
        "Invalid number"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_2_Parsing_Values_Coding_Challenge/ReadingUserInputChallenge.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-2-parsing-values-coding-challenge-readinguserinputchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "Which of the following are TRUE about Reading User Input Challenge? Select all that apply.",
      "options": [
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Reading User Input Challenge.",
        "\"Invalid number\" to the console, but continue looping until you do have 5 valid numbers.",
        "Write a method called inputThenPrintSumAndAverage that does not have any parameters.",
        "In this challenge, you'll read 5 valid numbers from the console entered by the user and print the sum of those five numbers. By valid numbers, I mean you need to check that the numbers entered are valid integers. If they are not, print out the message"
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Reading User Input Challenge.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_2_Parsing_Values_Coding_Challenge/ReadingUserInputChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-11-parsing-values-reading-input_src-chapter-11-parsing-values-reading-input-sub-chapter-3-deepproblems-inputvalidatordeepproblem-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 11: Parsing Values Reading Input",
      "topic": "Input Validator Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Valid form test:\");",
      "answer": [
        "Valid form test:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_3_DeepProblems/InputValidatorDeepProblem.java",
      "tags": [
        "predict"
      ]
    }
  ],
  "Chapter 12: Exception Handling": [
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-exceptionhandlinginjava-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Exception Handling In Java",
      "question": "What does this code print?",
      "code": "System.out.println(\"You are trying to access a null value.\");",
      "answer": [
        "You are trying to access a null value."
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-exceptionhandlinginjava-java_custom_0-what-is-the-difference-between-checked-a",
      "difficulty": "medium",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between checked and unchecked exceptions?",
      "modelAnswer": "Checked exceptions (subclasses of Exception excluding RuntimeException) are checked at compile-time and must be caught or declared with `throws`. Unchecked exceptions (subclasses of RuntimeException) occur at runtime due to logic bugs and do not require explicit compiler handling.",
      "keyPoints": [
        "Checked exceptions (subclasses of Exception excluding RuntimeException) are checked at compile-time and must be caught or declared with `throws`.",
        "Unchecked exceptions (subclasses of RuntimeException) occur at runtime due to logic bugs and do not require explicit compiler handling."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-exceptionhandlinginjava-java_custom_1-does-a-finally-block-execute-if-the-try-",
      "difficulty": "hard",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Does a `finally` block execute if the `try` block contains a `return` statement?",
      "modelAnswer": "Yes. The `finally` block executes before the method returns. The main exception is if `System.exit()` is called, terminating the JVM.",
      "keyPoints": [
        "Yes. The `finally` block executes before the method returns. The main exception is if `System.exit()` is called, terminating the JVM."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-exceptionhandlinginjava-java_custom_2-does-a-finally-block-always-execute-in-j",
      "difficulty": "hard",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Does a finally block always execute in Java, even if there is a return in try or catch?",
      "modelAnswer": "Yes. The finally block runs even when try or catch executes a return statement. Example: try { return 1; } finally { System.out.println(\"finally\"); } prints finally first and then returns 1. The main practical exception is System.exit(), which terminates the JVM before finally can run.",
      "keyPoints": [
        "Yes. The finally block runs even when try or catch executes a return statement.",
        "Example: try { return 1; } finally { System.out.println(\"finally\"); } prints finally first and then returns 1.",
        "The main practical exception is System.exit(), which terminates the JVM before finally can run."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-exceptionhandlinginjava-java_custom_3-what-is-the-difference-between-checked-a",
      "difficulty": "medium",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between checked and unchecked exceptions in Java?",
      "modelAnswer": "Checked exceptions are exceptions the compiler forces you to handle with try-catch or declare with throws, such as IOException and SQLException. Unchecked exceptions are RuntimeException and its subclasses, such as NullPointerException and ArrayIndexOutOfBoundsException, and the compiler does not require you to declare or catch them. Checked exceptions represent recoverable conditions the API wants you to consider explicitly, while unchecked exceptions usually indicate programming bugs or invalid runtime state.",
      "keyPoints": [
        "Checked exceptions are exceptions the compiler forces you to handle with try-catch or declare with throws, such as IOException and SQLException.",
        "Unchecked exceptions are RuntimeException and its subclasses, such as NullPointerException and ArrayIndexOutOfBoundsException, and the compiler does not require you to declare or catch them.",
        "Checked exceptions represent recoverable conditions the API wants you to consider explicitly, while unchecked exceptions usually indicate programming bugs or invalid runtime state."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-exceptionhandlinginjava-java_custom_4-what-is-the-basic-exception-hierarchy-in",
      "difficulty": "medium",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview"
      ],
      "question": "What is the basic exception hierarchy in Java?",
      "modelAnswer": "At the top is Throwable. Throwable has two major branches: Error and Exception. Error represents serious JVM-level problems such as OutOfMemoryError and is generally not something application code should try to catch and recover from. Exception contains checked exceptions and also RuntimeException, whose subclasses are the unchecked exceptions.",
      "keyPoints": [
        "At the top is Throwable.",
        "Throwable has two major branches: Error and Exception.",
        "Error represents serious JVM-level problems such as OutOfMemoryError and is generally not something application code should try to catch and recover from.",
        "Exception contains checked exceptions and also RuntimeException, whose subclasses are the unchecked exceptions."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-exceptionhandlinginjava-java_custom_5-what-is-multi-catch-in-java",
      "difficulty": "medium",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview"
      ],
      "question": "What is multi-catch in Java?",
      "modelAnswer": "Multi-catch lets you catch multiple exception types in one catch block using the pipe symbol, for example catch (IOException | SQLException e). It was added in Java 7 and is useful when the handling logic is the same for several exception types. The caught exception variable is effectively final, so you cannot reassign e inside that catch block.",
      "keyPoints": [
        "Multi-catch lets you catch multiple exception types in one catch block using the pipe symbol, for example catch (IOException | SQLException e).",
        "It was added in Java 7 and is useful when the handling logic is the same for several exception types.",
        "The caught exception variable is effectively final, so you cannot reassign e inside that catch block."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-exceptionhandlinginjava-java_custom_6-what-is-the-difference-between-throw-and",
      "difficulty": "medium",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between throw and throws in Java?",
      "modelAnswer": "throw is used inside a method body to actually create or pass an exception object, such as throw new IllegalArgumentException(\"bad input\"). throws is used in the method signature to declare that the method may propagate certain checked exceptions to its caller. Think of throw as the action and throws as the declaration.",
      "keyPoints": [
        "throw is used inside a method body to actually create or pass an exception object, such as throw new IllegalArgumentException(\"bad input\").",
        "throws is used in the method signature to declare that the method may propagate certain checked exceptions to its caller.",
        "Think of throw as the action and throws as the declaration."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-exceptionhandlinginjava-java_custom_7-what-is-a-nullpointerexception-and-when-",
      "difficulty": "medium",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview"
      ],
      "question": "What is a NullPointerException and when does it occur?",
      "modelAnswer": "A NullPointerException happens when you try to call a method, access a field, or otherwise use an object reference that is null. Example: String s = null; s.length(); throws NullPointerException because s does not point to any actual String object. It is one of the most common runtime exceptions in Java and usually indicates missing null checks or incorrect object initialization.",
      "keyPoints": [
        "A NullPointerException happens when you try to call a method, access a field, or otherwise use an object reference that is null.",
        "Example: String s = null; s.length(); throws NullPointerException because s does not point to any actual String object.",
        "It is one of the most common runtime exceptions in Java and usually indicates missing null checks or incorrect object initialization."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-exceptionhandlinginjava-java_custom_8-what-is-the-basic-structure-of-the-excep",
      "difficulty": "easy",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview"
      ],
      "question": "What is the basic structure of the exception hierarchy in Java?",
      "options": [
        "Throwable is the root, splitting into Error, which applications should not catch, and Exception, which includes RuntimeException and the checked exceptions.",
        "Error and RuntimeException are the same branch of the hierarchy.",
        "RuntimeException is a checked exception.",
        "Exception is the root of every throwable type."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "Error and RuntimeException sit on different branches, because Error is not something application code recovers from.",
        "2": "RuntimeException and its subclasses are the unchecked exceptions.",
        "3": "Throwable is the root. Exception is one of its two main branches."
      },
      "explanation": "Everything throwable descends from Throwable. Error covers serious JVM-level problems such as OutOfMemoryError. Exception covers the conditions your code is expected to handle.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-exceptionhandlinginjava-java_custom_9-what-is-printed-by-this-code",
      "difficulty": "hard",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is printed by this code?",
      "code": "try { return 1; } finally { System.out.println(\"finally\"); }",
      "options": [
        "Nothing is printed, because return skips the finally block.",
        "It does not compile, because return is not allowed inside try.",
        "finally runs only when an exception is thrown.",
        "finally is printed, and then the method returns 1."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "finally is designed to run even on the way out through a return.",
        "1": "return inside try is perfectly legal.",
        "2": "finally runs whether or not an exception occurred. The practical exception is System.exit, which ends the JVM."
      },
      "explanation": "A finally block runs before control leaves the try statement, including when a return is on its way out. The return value is settled after finally completes.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-exceptionhandlinginjava-java_custom_10-what-is-the-difference-between-throw-and",
      "difficulty": "medium",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between throw and throws?",
      "options": [
        "Both are written in the method signature.",
        "throws is used inside the body to raise an exception.",
        "throw can be used only with unchecked exceptions.",
        "throw raises an exception inside a method body, while throws declares in the signature which checked exceptions may propagate."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "throw belongs in the body, not the signature.",
        "1": "raises is throw's job; throws only declares.",
        "2": "throw works with any Throwable, including checked exceptions."
      },
      "explanation": "Think of throw as the action and throws as the declaration. throw new IllegalArgumentException(\"bad\") creates and passes an exception now; throws warns the caller that a checked exception may arrive.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-exceptionhandlinginjava-java_custom_11-when-does-a-nullpointerexception-occur",
      "difficulty": "medium",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview"
      ],
      "question": "When does a NullPointerException occur?",
      "options": [
        "When a method or field is used through a reference that is null, such as String s = null; s.length();",
        "When null is assigned to a variable.",
        "It is a checked exception that must be caught.",
        "It occurs at compile time."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "the assignment itself is fine, and local variables must simply be assigned before use.",
        "2": "NullPointerException extends RuntimeException, so it is unchecked.",
        "3": "the compiler cannot know whether a reference will be null, so this is a runtime failure."
      },
      "explanation": "Assigning null is harmless. The failure comes later, when you try to use the reference as though it pointed at a real object, and there is nothing there to run the method on.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-exceptionhandlinginjava-java_custom_12-why-is-a-broad-catch-exception-e-usually",
      "difficulty": "medium",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why is a broad catch (Exception e) usually a poor choice?",
      "options": [
        "It is always the recommended practice.",
        "It can swallow unrelated bugs, so it is better to catch the specific exception you expect.",
        "You must always catch Throwable instead.",
        "Specific catch blocks must come after the general one."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "the general guidance is the opposite, unless you genuinely intend to handle everything.",
        "2": "catching Throwable is even broader, and it would also catch Error.",
        "3": "this is reversed. A more specific catch must come first, because a general one would otherwise capture the exception before the specific block is reached."
      },
      "explanation": "A broad catch treats every failure as the one you anticipated, which hides the problems you did not. Catching the specific type keeps the handler honest about what it can actually deal with.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-exceptionhandlinginjava-java_custom_13-what-do-getmessage-and-printstacktrace-d",
      "difficulty": "easy",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview"
      ],
      "question": "What do getMessage() and printStackTrace() do?",
      "options": [
        "getMessage() returns the description of the exception, and printStackTrace() writes the trace to standard error.",
        "getMessage() prints the trace to standard error.",
        "printStackTrace() returns a String that you must print yourself.",
        "Both are fields rather than methods."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "that is what printStackTrace does. getMessage only returns the text.",
        "2": "it writes the trace itself and returns nothing, which is why you cannot capture it directly.",
        "3": "they are methods, called with parentheses."
      },
      "explanation": "These are the two diagnostic tools you reach for first. The message explains what went wrong, and the trace shows where it happened by listing the call chain.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java"
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-12-exception-handling_src-chapter-12-exception-handling-sub-chapter-2-exception-handling-codingchallenge-safedivisionchallenge-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "Safe Division Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Cannot divide by zero. Returning 0.\");",
      "answer": [
        "Cannot divide by zero. Returning 0."
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_12_Exception_Handling/Sub_Chapter_2_Exception_Handling_CodingChallenge/SafeDivisionChallenge.java",
      "tags": [
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-12-exception-handling-finally-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "try {\n  System.out.println(\"try\");\n  return;\n} finally {\n  System.out.println(\"finally\");\n}",
      "answer": [
        "try\nfinally"
      ],
      "explanation": "finally ALWAYS executes — even after a return statement. The method only actually returns after finally completes. This is a top OCJP gotcha.",
      "topicPath": "src/Chapter_12_Exception_Handling/ExceptionHandlingInJava.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-12-exception-handling-checked-unchecked-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 12: Exception Handling",
      "topic": "OCJP Tricky",
      "question": "Which of these is an UNCHECKED exception in Java? (OCJP)",
      "options": [
        "IOException",
        "SQLException",
        "NullPointerException",
        "FileNotFoundException"
      ],
      "answer": 2,
      "explanation": "NullPointerException extends RuntimeException → unchecked (compiler does not force you to handle it). IOException, SQLException, FileNotFoundException extend Exception directly → checked (must be caught or declared).",
      "topicPath": "src/Chapter_12_Exception_Handling/Sub_Chapter_2_Exception_Handling_CodingChallenge/MultiCatchChallenge.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky"
      ]
    }
  ],
  "Chapter 13: OOP Concepts": [
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-1-classes-and-inheritance-classesandinheritance-java_custom_0-what-is-the-difference-between-an-abstra",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between an abstract class and an interface in Java?",
      "modelAnswer": "An abstract class can have constructors, instance fields, concrete methods, and abstract methods, so it is useful for sharing common state and behavior in a base class. An interface represents a contract or capability. It has no constructors and no instance state for objects, though Java 8+ allows default and static methods. A class can extend only ONE abstract class, but it can implement MULTIPLE interfaces. Use an abstract class when related classes share core implementation or state. Use an interface when you want unrelated classes to promise the same behavior, such as Comparable or Runnable.",
      "keyPoints": [
        "An abstract class can have constructors, instance fields, concrete methods, and abstract methods, so it is useful for sharing common state and behavior in a base class.",
        "An interface represents a contract or capability. It has no constructors and no instance state for objects, though Java 8+ allows default and static methods.",
        "A class can extend only ONE abstract class, but it can implement MULTIPLE interfaces.",
        "Use an abstract class when related classes share core implementation or state. Use an interface when you want unrelated classes to promise the same behavior, such as Comparable or Runnable."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-1-classes-and-inheritance-classesandinheritance-java_custom_1-what-are-the-three-common-uses-of-the-fi",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "interview"
      ],
      "question": "What are the three common uses of the final keyword in Java?",
      "modelAnswer": "A final variable can be assigned only once after initialization, so its reference or primitive value cannot be reassigned. A final method cannot be overridden by subclasses. A final class cannot be extended, which is why classes like String and Integer cannot be subclassed.",
      "keyPoints": [
        "A final variable can be assigned only once after initialization, so its reference or primitive value cannot be reassigned.",
        "A final method cannot be overridden by subclasses.",
        "A final class cannot be extended, which is why classes like String and Integer cannot be subclassed."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-1-classes-and-inheritance-classesandinheritance-java_custom_2-what-is-the-order-of-java-access-modifie",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "interview"
      ],
      "question": "What is the order of Java access modifiers from most restrictive to least restrictive?",
      "modelAnswer": "Order: private, default (package-private), protected, public. private means only inside the same class. default means only classes in the same package. protected means same package plus subclasses in other packages. public means accessible from everywhere.",
      "keyPoints": [
        "Order: private, default (package-private), protected, public.",
        "private means only inside the same class.",
        "default means only classes in the same package.",
        "protected means same package plus subclasses in other packages.",
        "public means accessible from everywhere."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-1-classes-and-inheritance-classesandinheritance-java_custom_3-what-is-the-difference-between-this-and-",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between this and super in Java?",
      "modelAnswer": "this refers to the current object and is used to access current class fields, methods, or another constructor in the same class through this(). super refers to the parent-class part of the current object and is used to call the parent constructor with super() or access overridden parent methods and hidden parent fields. this resolves current-object context, while super explicitly moves one level up the inheritance chain.",
      "keyPoints": [
        "this refers to the current object and is used to access current class fields, methods, or another constructor in the same class through this().",
        "super refers to the parent-class part of the current object and is used to call the parent constructor with super() or access overridden parent methods and hidden parent fields.",
        "this resolves current-object context, while super explicitly moves one level up the inheritance chain."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-1-classes-and-inheritance-classesandinheritance-java_custom_4-what-is-polymorphism-in-java-and-what-is",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "interview"
      ],
      "question": "What is polymorphism in Java, and what is the difference between compile-time and runtime polymorphism?",
      "modelAnswer": "Compile-time polymorphism usually means method overloading, where the compiler decides which overloaded method signature matches the arguments. Runtime polymorphism usually means method overriding, where the JVM decides at runtime which overridden method to call based on the ACTUAL object type, not the reference type. Example: Animal a = new Dog(); a.sound(); calls Dog.sound() if sound() is overridden in Dog. This is dynamic dispatch.",
      "keyPoints": [
        "Compile-time polymorphism usually means method overloading, where the compiler decides which overloaded method signature matches the arguments.",
        "Runtime polymorphism usually means method overriding, where the JVM decides at runtime which overridden method to call based on the ACTUAL object type, not the reference type.",
        "Example: Animal a = new Dog(); a.sound(); calls Dog.sound() if sound() is overridden in Dog. This is dynamic dispatch."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-1-classes-and-inheritance-classesandinheritance-java_custom_5-when-a-constructor-parameter-has-the-sam",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "interview"
      ],
      "question": "When a constructor parameter has the same name as an instance field, what does this.field = field mean?",
      "modelAnswer": "The bare name field is the parameter, while this.field is the current object's instance field; the assignment stores the caller's argument in the object.",
      "keyPoints": [
        "The bare name field is the parameter, while this.field is the current object's instance field; the assignment stores the caller's argument in the object."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-1-classes-and-inheritance-classesandinheritance-java_custom_6-how-does-java-choose-between-overloaded-",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "How does Java choose between overloaded methods or constructors that take parameters?",
      "modelAnswer": "Java matches the argument list at compile time by number, compatible types, and order, so passing arguments in the wrong order can call a different overload or fail to compile.",
      "keyPoints": [
        "Java matches the argument list at compile time by number, compatible types, and order, so passing arguments in the wrong order can call a different overload or fail to compile."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-1-classes-and-inheritance-classesandinheritance-java_custom_7-what-are-the-four-pillars-of-object-orie",
      "difficulty": "easy",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "interview"
      ],
      "question": "What are the four pillars of Object-Oriented Programming?",
      "options": [
        "Classes, objects, methods and fields.",
        "Encapsulation, inheritance, polymorphism and abstraction.",
        "Compilation, interpretation, bytecode and the JVM.",
        "Overloading, overriding, hiding and shadowing."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "those are the basic building blocks of a class, not the four design pillars.",
        "2": "those belong to how Java code is built and run, not to OOP design.",
        "3": "those are features of how methods and fields behave, not the pillars."
      },
      "explanation": "The four pillars describe the design principles of OOP. Classes, objects, methods and fields are the building blocks you use to apply them, not the pillars themselves.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-1-classes-and-inheritance-classesandinheritance-java_custom_8-what-are-the-members-of-a-class",
      "difficulty": "easy",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "interview"
      ],
      "question": "What are the members of a class?",
      "options": [
        "Its fields, which hold data, and its methods, which define behaviour.",
        "Only the objects created from it.",
        "The packages it belongs to.",
        "Only its methods."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "objects are instances of the class, not members of it.",
        "2": "a package groups related classes. It is not a member of a class.",
        "3": "methods are only half of it. The fields that hold the state are members too."
      },
      "explanation": "A class describes the data it holds and what it can do. Fields store the state, methods provide the behaviour, and together they are called class members.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-1-classes-and-inheritance-classesandinheritance-java_custom_9-how-does-a-static-field-differ-from-an-i",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "interview"
      ],
      "question": "How does a static field differ from an instance field?",
      "options": [
        "A static field has one copy per object, and an instance field is shared.",
        "A static field has one copy shared by the whole class, while an instance field has one copy per object.",
        "A static field cannot be read outside its own class.",
        "Both have one copy per object."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "this is the reverse. Static is the shared one.",
        "2": "visibility is controlled by the access modifier, such as public or private, not by static.",
        "3": "instance fields are per object, but a static field is not."
      },
      "explanation": "Static means it belongs to the class itself, so every object sees the same value. Instance fields belong to the object, so different objects can hold different values at the same time.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-1-classes-and-inheritance-classesandinheritance-java_custom_10-why-can-a-static-method-not-use-instance",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "interview"
      ],
      "question": "Why can a static method not use instance data?",
      "options": [
        "Because static methods run before the class is loaded.",
        "Because static methods are always private.",
        "Because a static method belongs to the class and may run when no object exists, so there is no instance state to read.",
        "Because instance fields are private by definition."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "the class must be loaded before anything in it runs, including static methods.",
        "1": "a static method can be public, and the restriction on instance data applies either way.",
        "3": "instance fields can have any access modifier."
      },
      "explanation": "A static method is called on the class, so it has no object to take state from. That is why it cannot reference instance fields directly, while an instance method can use both static and instance data.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-1-classes-and-inheritance-classesandinheritance-java_custom_11-what-access-modifiers-may-a-top-level-cl",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "ocjp"
      ],
      "question": "What access modifiers may a top-level class have?",
      "options": [
        "public, protected or private, just like a field.",
        "private only, because a class is used by its own file.",
        "Any access modifier at all.",
        "Only public or none, where none means package-private access."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "protected and private are valid for members, not for a top-level class.",
        "1": "a private top-level class would be unreachable, and Java does not allow it.",
        "2": "only two options apply to a top-level class."
      },
      "explanation": "A top-level class can be public or package-private. protected and private describe access relative to a class, so they make sense for members, not for the top-level class itself.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-1-classes-and-inheritance-classesandinheritance-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Classes And Inheritance",
      "question": "Which of the following are TRUE about Classes And Inheritance? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Modelling real-world objects, as software objects is a fundamental part of Object-Oriented Programming.",
        "OOP is sometimes called class-based programming. Class-based programming starts with classes which, become the blueprints for objects",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Classes And Inheritance.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-2-getters-encapsulation-object-access-car-java_custom_0-what-should-you-pass-to-setmake-string-m",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Car",
      "tags": [
        "interview"
      ],
      "question": "What should you pass to setMake(String make), and what happens for null or unsupported values?",
      "modelAnswer": "Pass the manufacturer name; null is changed to \"Unknown\", accepted values are holden, porsche, and tesla, and any other value stores \"Unsupported\".",
      "keyPoints": [
        "Pass the manufacturer name; null is changed to \"Unknown\", accepted values are holden, porsche, and tesla, and any other value stores \"Unsupported\"."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_2_Getters_Encapsulation_Object_Access/Car.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-2-getters-encapsulation-object-access-car-java_custom_1-why-does-setdoors-int-doors-need-a-sensi",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Car",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why does setDoors(int doors) need a sensible caller-provided value even though it accepts any int?",
      "modelAnswer": "The setter directly assigns the parameter with no validation, so invalid values like negative door counts would still be stored.",
      "keyPoints": [
        "The setter directly assigns the parameter with no validation, so invalid values like negative door counts would still be stored."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_2_Getters_Encapsulation_Object_Access/Car.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-2-getters-encapsulation-object-access-car-java_custom_2-in-this-convertible-convertible-which-si",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Car",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "In this.convertible = convertible, which side is the field and which side is the parameter?",
      "modelAnswer": "this.convertible is the current object's field; convertible without this is the method parameter supplied by the caller.",
      "keyPoints": [
        "this.convertible is the current object's field; convertible without this is the method parameter supplied by the caller."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_2_Getters_Encapsulation_Object_Access/Car.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-2-getters-encapsulation-object-access-car-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Car",
      "question": "Which of the following are TRUE about Car? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "When writing methods that use non-static fields, your method cannot be declared static.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "If no access modifier is declared explicitly, Java declares the default one (package private), implicitly."
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Car.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_2_Getters_Encapsulation_Object_Access/Car.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-2-getters-encapsulation-object-access-main-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Getters Encapsulation Object Access)",
      "question": "What does this code print?",
      "code": "System.out.println(\"car = null -> calling describeCar() now would throw NullPointerException.\");",
      "answer": [
        "car = null -> calling describeCar() now would throw NullPointerException."
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_2_Getters_Encapsulation_Object_Access/Main.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-2-getters-encapsulation-object-access-main-java_custom_0-why-will-car-setmodel-carrera-fail-here-",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Getters Encapsulation Object Access)",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why will car.setModel(\"Carrera\") fail here if car is still null?",
      "modelAnswer": "A parameterized method call needs a real target object; null has no object to receive the \"Carrera\" argument, so Java throws NullPointerException.",
      "keyPoints": [
        "A parameterized method call needs a real target object; null has no object to receive the \"Carrera\" argument, so Java throws NullPointerException."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_2_Getters_Encapsulation_Object_Access/Main.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-2-getters-encapsulation-object-access-main-java_custom_1-what-does-the-argument-true-mean-in-car-",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Getters Encapsulation Object Access)",
      "tags": [
        "interview"
      ],
      "question": "What does the argument true mean in car.setConvertible(true)?",
      "modelAnswer": "It tells the Car object to store convertible as true; pass false for a non-convertible car.",
      "keyPoints": [
        "It tells the Car object to store convertible as true; pass false for a non-convertible car."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_2_Getters_Encapsulation_Object_Access/Main.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-2-getters-encapsulation-object-access-main-java_custom_2-what-is-the-purpose-of-the-string-args-p",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Getters Encapsulation Object Access)",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What is the purpose of the String[] args parameter in main(String[] args)?",
      "modelAnswer": "It receives command-line arguments from the JVM, although this program does not use them.",
      "keyPoints": [
        "It receives command-line arguments from the JVM, although this program does not use them."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_2_Getters_Encapsulation_Object_Access/Main.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-2-getters-encapsulation-object-access-main-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Getters Encapsulation Object Access)",
      "question": "Which of the following are TRUE about Main (Getters Encapsulation Object Access)? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "When you create a class instance (Car car = new Car()), Java sets all un-initialised fields to their default values: Strings -> null, int -> 0, boolean -> false."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Main (Getters Encapsulation Object Access).",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_2_Getters_Encapsulation_Object_Access/Main.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-3-classes-challenge-bankaccountchallenge-bankaccount-java_custom_0-what-does-the-withdrawalamount-parameter",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Bank Account",
      "tags": [
        "interview"
      ],
      "question": "What does the withdrawalAmount parameter control in withdrawFunds(double withdrawalAmount)?",
      "modelAnswer": "It is the amount requested for withdrawal; the method subtracts it only if it is less than or equal to the current accountBalance.",
      "keyPoints": [
        "It is the amount requested for withdrawal; the method subtracts it only if it is less than or equal to the current accountBalance."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/BankAccountChallenge/BankAccount.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-3-classes-challenge-bankaccountchallenge-bankaccount-java_custom_1-why-is-passing-a-negative-depositamount-",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Bank Account",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why is passing a negative depositAmount a pitfall in this implementation?",
      "modelAnswer": "depositFunds directly adds the parameter without validation, so a negative value would reduce the balance instead of behaving like a normal deposit.",
      "keyPoints": [
        "depositFunds directly adds the parameter without validation, so a negative value would reduce the balance instead of behaving like a normal deposit."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/BankAccountChallenge/BankAccount.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-3-classes-challenge-bankaccountchallenge-bankaccount-java_custom_2-in-setcustomername-string-customername-w",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Bank Account",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "In setCustomerName(String customerName), why is this.customerName = customerName used?",
      "modelAnswer": "The parameter shadows the field; this.customerName selects the instance field and the bare customerName selects the incoming argument.",
      "keyPoints": [
        "The parameter shadows the field; this.customerName selects the instance field and the bare customerName selects the incoming argument."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/BankAccountChallenge/BankAccount.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-3-classes-challenge-bankaccountchallenge-bankaccount-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Bank Account",
      "question": "Which of the following are TRUE about Bank Account? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Create getters and setters for each field. Create two additional methods:",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Create a new class for a bank account.",
        "account number. account balance. customer name. email. and phone number."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Bank Account.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/BankAccountChallenge/BankAccount.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-3-classes-challenge-bankaccountchallenge-main-java_custom_0-what-does-the-argument-1000-0-mean-in-ba",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Classes Challenge)",
      "tags": [
        "interview"
      ],
      "question": "What does the argument 1000.0 mean in bankAccount.setAccountBalance(1000.0)?",
      "modelAnswer": "It becomes the account's starting/replacement balance before deposits and withdrawals are tested.",
      "keyPoints": [
        "It becomes the account's starting/replacement balance before deposits and withdrawals are tested."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/BankAccountChallenge/Main.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-3-classes-challenge-bankaccountchallenge-main-java_custom_1-why-should-callers-avoid-passing-negativ",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Classes Challenge)",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why should callers avoid passing negative amounts to depositFunds or withdrawFunds in this demo?",
      "modelAnswer": "The methods do not fully validate negative amounts, so negative deposits can reduce the balance and negative withdrawals can increase it.",
      "keyPoints": [
        "The methods do not fully validate negative amounts, so negative deposits can reduce the balance and negative withdrawals can increase it."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/BankAccountChallenge/Main.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-3-classes-challenge-bankaccountchallenge-main-java_custom_2-does-new-bankaccount-pass-any-constructo",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Classes Challenge)",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Does new BankAccount() pass any constructor arguments?",
      "modelAnswer": "No. It calls a no-argument constructor, so the object fields keep default values until setter methods receive arguments.",
      "keyPoints": [
        "No. It calls a no-argument constructor, so the object fields keep default values until setter methods receive arguments."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/BankAccountChallenge/Main.java"
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-3-classes-challenge-methodoverloadingchallenge-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Over Loading Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Invalid value, please enter correct value\");",
      "answer": [
        "Invalid value, please enter correct value"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/MethodOverLoadingChallenge.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-3-classes-challenge-methodoverloadingchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Over Loading Challenge",
      "question": "Which of the following are TRUE about Method Over Loading Challenge? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Create two methods with the same name: convertToCentimeters",
        "You'll convert inches to centimeters, in this method, and pass back the number of centimeters, as a double. The second method has two parameters of type int, one to represent height in feet, and one to represent the remaining height in inches. So if a person is 5 foot, 8 inches, the values 5 for feet and 8 for inches would be passed to this method.",
        "The first method has one parameter of type int, which represents the entire height in inches."
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Method Over Loading Challenge.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/MethodOverLoadingChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-3-classes-challenge-methodoverloadingsecondandminuteschallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "Which of the following are TRUE about Method Overloading Second And Minutes Challenge? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "You should validate that the 2nd parameter seconds is >= 0 and <= 59.",
        "You should validate that the first parameter minutes is >= 0.",
        "Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Method Overloading Second And Minutes Challenge.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/MethodOverloadingSecondAndMinutesChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-3-classes-challenge-personagevalidation-java_custom_0-what-values-should-be-passed-to-setage-i",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Person Age Validation",
      "tags": [
        "interview"
      ],
      "question": "What values should be passed to setAge(int age), and what happens outside the valid range?",
      "modelAnswer": "Pass an age from 0 to 100 inclusive; values less than 0 or greater than 100 cause the field to be set to 0.",
      "keyPoints": [
        "Pass an age from 0 to 100 inclusive; values less than 0 or greater than 100 cause the field to be set to 0."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/PersonAgeValidation.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-3-classes-challenge-personagevalidation-java_custom_1-why-is-passing-null-to-setfirstname-stri",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Person Age Validation",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why is passing null to setFirstName(String firstName) or setLastName(String lastName) dangerous here?",
      "modelAnswer": "getFullName() calls isEmpty() on the stored names, and calling isEmpty() on null would throw NullPointerException.",
      "keyPoints": [
        "getFullName() calls isEmpty() on the stored names, and calling isEmpty() on null would throw NullPointerException."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/PersonAgeValidation.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-3-classes-challenge-personagevalidation-java_custom_2-in-this-age-age-what-does-the-age-on-the",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Person Age Validation",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "In this.age = age, what does the age on the right side refer to?",
      "modelAnswer": "The right-side age is the setter parameter, while this.age is the instance field being updated.",
      "keyPoints": [
        "The right-side age is the setter parameter, while this.age is the instance field being updated."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/PersonAgeValidation.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-3-classes-challenge-personagevalidation-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "Which of the following are TRUE about Person Age Validation? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Method named getFirstName without any parameters, it needs to return the value of the firstName field.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Person Class and Age Validation",
        "Write a class with the name Person. The class needs three fields (instance variables) with the names firstName, lastName of type String and age of type int."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Person Age Validation.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/PersonAgeValidation.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-3-classes-challenge-sumcalculatorimplementationchallenge-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "Which of the following are TRUE about Sum Calculator Implementation Challenge? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Sum Calculator Implementation",
        "Method named getFirstNumber without any parameters, it needs to return the value of firstNumber field.",
        "Write a class with the name SimpleCalculator. The class needs two fields (instance variables) with names firstNumber and secondNumber both of type double."
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Sum Calculator Implementation Challenge.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/SumCalculatorImplementationChallenge.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-1-constructorconcept-constructorconcept-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "What does this code print?",
      "code": "System.out.println(\"Constructor with 5 arguments is called\");",
      "answer": [
        "Constructor with 5 arguments is called"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_1_ConstructorConcept/ConstructorConcept.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-1-constructorconcept-constructorconcept-java_custom_0-what-does-the-accountbalance-argument-re",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Constructor Concept",
      "tags": [
        "interview"
      ],
      "question": "What does the accountBalance argument represent in the 5-argument ConstructorConcept constructor?",
      "modelAnswer": "It is the initial balance copied into the accountBalance field when the object is created.",
      "keyPoints": [
        "It is the initial balance copied into the accountBalance field when the object is created."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_1_ConstructorConcept/ConstructorConcept.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-1-constructorconcept-constructorconcept-java_custom_1-why-can-swapping-email-and-phonenumber-a",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Constructor Concept",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why can swapping email and phoneNumber arguments be a subtle bug in this constructor?",
      "modelAnswer": "Both parameters are Strings, so the code can compile even though the values are stored in the wrong fields.",
      "keyPoints": [
        "Both parameters are Strings, so the code can compile even though the values are stored in the wrong fields."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_1_ConstructorConcept/ConstructorConcept.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-1-constructorconcept-constructorconcept-java_custom_2-where-must-the-this-accountnumber-100-00",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Constructor Concept",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Where must the this(accountNumber, 100.00, customerName, email, phoneNumber) call appear?",
      "modelAnswer": "A this(...) constructor call must be the first executable statement in the constructor body.",
      "keyPoints": [
        "A this(...) constructor call must be the first executable statement in the constructor body."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_1_ConstructorConcept/ConstructorConcept.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-1-constructorconcept-constructorconcept-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "Which of the following are TRUE about Constructor Concept? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "It is a special type of code block that has a specific name and parameters, much like a method.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "It has the same name as the class, and it does not return any values.",
        "A constructor is used in the creation of an object."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Constructor Concept.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_1_ConstructorConcept/ConstructorConcept.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-2-this-and-super-superkeyworduseexample-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "question": "What does this code print?",
      "code": "System.out.println(\"Printed in SuperClass.\");",
      "answer": [
        "Printed in SuperClass."
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/SuperKeywordUseExample.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-2-this-and-super-superkeyworduseexample-java_custom_0-what-does-super-printmethod-pass-as-argu",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "tags": [
        "interview"
      ],
      "question": "What does super.printMethod() pass as arguments, and which method body does it select?",
      "modelAnswer": "It passes no arguments and explicitly selects the parent class printMethod() implementation.",
      "keyPoints": [
        "It passes no arguments and explicitly selects the parent class printMethod() implementation."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/SuperKeywordUseExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-2-this-and-super-superkeyworduseexample-java_custom_1-why-is-super-important-in-the-overriding",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why is super important in the overriding printMethod() even though there are no parameters?",
      "modelAnswer": "Without super, a call to printMethod() from inside the override would call itself recursively instead of the parent method.",
      "keyPoints": [
        "Without super, a call to printMethod() from inside the override would call itself recursively instead of the parent method."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/SuperKeywordUseExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-2-this-and-super-superkeyworduseexample-java_custom_2-what-is-stored-in-the-args-parameter-of-",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What is stored in the args parameter of main(String[] args)?",
      "modelAnswer": "The JVM stores command-line arguments in args, though this example ignores them.",
      "keyPoints": [
        "The JVM stores command-line arguments in args, though this example ignores them."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/SuperKeywordUseExample.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-2-this-and-super-superkeyworduseexample-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "question": "Which of the following are TRUE about Super Keyword Use Example? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "- printMethod() in both parent and child takes no parameters; the important call here is super.printMethod(), which passes no arguments but chooses the parent implementation.",
        "- trap: writing printMethod() instead of super.printMethod() inside the override would call the overriding method again with the same no-argument list.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "The keyword super is commonly used with method overriding when we call a method with the same name from the parent class."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Super Keyword Use Example.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/SuperKeywordUseExample.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-2-this-and-super-thisandsuper-java_custom_0-what-is-the-difference-between-passing-a",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "This And Super",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between passing arguments to this(args) and super(args)?",
      "modelAnswer": "this(args) calls another constructor in the same class, while super(args) calls a constructor in the parent class.",
      "keyPoints": [
        "this(args) calls another constructor in the same class, while super(args) calls a constructor in the parent class."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/ThisAndSuper.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-2-this-and-super-thisandsuper-java_custom_1-why-can-t-a-constructor-call-both-this-a",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "This And Super",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Why can't a constructor call both this(args) and super(args)?",
      "modelAnswer": "Each constructor call must be the first statement, and only one statement can be first.",
      "keyPoints": [
        "Each constructor call must be the first statement, and only one statement can be first."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/ThisAndSuper.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-2-this-and-super-thisandsuper-java_custom_2-are-this-args-and-super-args-available-i",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "This And Super",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Are this(args) and super(args) available inside static methods?",
      "modelAnswer": "No. They require constructor/object context and cannot be used from static methods.",
      "keyPoints": [
        "No. They require constructor/object context and cannot be used from static methods."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/ThisAndSuper.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-2-this-and-super-thisandsuper-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "This And Super",
      "question": "Which of the following are TRUE about This And Super? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "1) The keyword super is used to access or call the parent class members (both variables and methods).",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "2) this keyword is required when we have a parameter with the same name as an instance variable or field.",
        "1) The keyword this, is used to call the current class members (both variables and methods)."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for This And Super.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/ThisAndSuper.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-2-this-and-super-thiskeyworduseexample-java_custom_0-what-does-the-color-parameter-mean-in-th",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "This Key Word Use Example",
      "tags": [
        "interview"
      ],
      "question": "What does the color parameter mean in ThisKeyWordUseExample(String color)?",
      "modelAnswer": "It is the initial value copied into the object's color field during construction.",
      "keyPoints": [
        "It is the initial value copied into the object's color field during construction."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/ThisKeyWordUseExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-2-this-and-super-thiskeyworduseexample-java_custom_1-why-is-this-color-needed-in-this-color-c",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "This Key Word Use Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why is this.color needed in this.color = color?",
      "modelAnswer": "The parameter shadows the field, so this.color identifies the instance field and color identifies the constructor or setter parameter.",
      "keyPoints": [
        "The parameter shadows the field, so this.color identifies the instance field and color identifies the constructor or setter parameter."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/ThisKeyWordUseExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-2-this-and-super-thiskeyworduseexample-java_custom_2-does-getcolor-need-a-parameter-to-return",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "This Key Word Use Example",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Does getColor() need a parameter to return the color?",
      "modelAnswer": "No. It returns the color already stored in the current object.",
      "keyPoints": [
        "No. It returns the color already stored in the current object."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/ThisKeyWordUseExample.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-2-this-and-super-thiskeyworduseexample-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "Which of the following are TRUE about This Key Word Use Example? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "The keyword this is commonly used within constructors and setters and is optionally used within getters.",
        "In the getter, there are no parameters so there's no conflict. Therefore,the use of this keyword is optional there.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "- this.color = color copies the parameter into the instance field; the parameter name shadows the field name."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for This Key Word Use Example.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_2_This_And_Super/ThisKeyWordUseExample.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-3-constructor-good-practices-super-call-example-goodconstructorsupercallexample-java_custom_0-what-do-the-x-and-y-arguments-passed-to-",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "tags": [
        "interview"
      ],
      "question": "What do the x and y arguments passed to super(x, y) represent?",
      "modelAnswer": "They are position coordinates forwarded to the parent constructor so the parent fields can be initialized.",
      "keyPoints": [
        "They are position coordinates forwarded to the parent constructor so the parent fields can be initialized."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_3_Constructor_Good_Practices/Super_Call_Example/GoodConstructorSuperCallExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-3-constructor-good-practices-super-call-example-goodconstructorsupercallexample-java_custom_1-why-is-swapping-width-and-height-easy-to",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why is swapping width and height easy to miss in this example?",
      "modelAnswer": "Both parameters are ints, so swapped values still compile but store the wrong dimensions.",
      "keyPoints": [
        "Both parameters are ints, so swapped values still compile but store the wrong dimensions."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_3_Constructor_Good_Practices/Super_Call_Example/GoodConstructorSuperCallExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-3-constructor-good-practices-super-call-example-goodconstructorsupercallexample-java_custom_2-where-must-super-x-y-appear-in-the-child",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Where must super(x, y) appear in the child constructor?",
      "modelAnswer": "It must be the first statement in the constructor body before child-field assignments.",
      "keyPoints": [
        "It must be the first statement in the constructor body before child-field assignments."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_3_Constructor_Good_Practices/Super_Call_Example/GoodConstructorSuperCallExample.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-3-constructor-good-practices-super-call-example-goodconstructorsupercallexample-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "question": "Which of the following are TRUE about Good Constructor Super Call Example? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "The 1st constructor is calling the 2nd constructor.",
        "The 2nd constructor calls the parent constructor with parameters x and y.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "The parent constructor will initialize the x and y variables, while the 2nd Rectangle constructor will initialize the width and height variables. Here, as you can see in this code, Both the super() and this() calls are made, but in different constructors."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Good Constructor Super Call Example.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_3_Constructor_Good_Practices/Super_Call_Example/GoodConstructorSuperCallExample.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-3-constructor-good-practices-this-call-example-badconstructorthiscallexample-java_custom_0-what-do-width-and-height-mean-in-badcons",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "tags": [
        "interview"
      ],
      "question": "What do width and height mean in BadConstructorThisCallExample(int width, int height)?",
      "modelAnswer": "They are the object's dimensions; the constructor stores them while defaulting x and y to 0.",
      "keyPoints": [
        "They are the object's dimensions; the constructor stores them while defaulting x and y to 0."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_3_Constructor_Good_Practices/This_Call_Example/BadConstructorThisCallExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-3-constructor-good-practices-this-call-example-badconstructorthiscallexample-java_custom_1-why-is-parameter-order-especially-import",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why is parameter order especially important in the 4-argument constructor?",
      "modelAnswer": "All four parameters are ints, so wrong ordering still compiles but assigns coordinates and dimensions incorrectly.",
      "keyPoints": [
        "All four parameters are ints, so wrong ordering still compiles but assigns coordinates and dimensions incorrectly."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_3_Constructor_Good_Practices/This_Call_Example/BadConstructorThisCallExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-3-constructor-good-practices-this-call-example-badconstructorthiscallexample-java_custom_2-what-constructor-call-could-reduce-dupli",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What constructor call could reduce duplicate initialization in this class?",
      "modelAnswer": "A this(...) call from simpler constructors to the most complete constructor could centralize field assignment.",
      "keyPoints": [
        "A this(...) call from simpler constructors to the most complete constructor could centralize field assignment."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_3_Constructor_Good_Practices/This_Call_Example/BadConstructorThisCallExample.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-3-constructor-good-practices-this-call-example-badconstructorthiscallexample-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "question": "Which of the following are TRUE about Bad Constructor This Call Example? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This is a bad way to write constructors like this.",
        "Here, there are three constructors.",
        "All three constructors initialize variables. But There's repeated code in each constructor, The variables are initialized in each constructor with some default values."
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Bad Constructor This Call Example.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_3_Constructor_Good_Practices/This_Call_Example/BadConstructorThisCallExample.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-3-constructor-good-practices-this-call-example-goodconstructorthiscallexample-java_custom_0-in-this-0-0-width-height-which-arguments",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "tags": [
        "interview"
      ],
      "question": "In this(0, 0, width, height), which arguments are defaults and which come from the caller?",
      "modelAnswer": "The first two arguments, 0 and 0, default x and y; width and height are the caller's parameters forwarded to the master constructor.",
      "keyPoints": [
        "The first two arguments, 0 and 0, default x and y; width and height are the caller's parameters forwarded to the master constructor."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_3_Constructor_Good_Practices/This_Call_Example/GoodConstructorThisCallExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-3-constructor-good-practices-this-call-example-goodconstructorthiscallexample-java_custom_1-why-must-callers-be-careful-with-the-4-i",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why must callers be careful with the 4-int constructor argument order?",
      "modelAnswer": "Since every parameter is int, swapped values can compile while assigning coordinates and dimensions to the wrong fields.",
      "keyPoints": [
        "Since every parameter is int, swapped values can compile while assigning coordinates and dimensions to the wrong fields."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_3_Constructor_Good_Practices/This_Call_Example/GoodConstructorThisCallExample.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-3-constructor-good-practices-this-call-example-goodconstructorthiscallexample-java_custom_2-where-must-this-0-0-appear-in-the-no-arg",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Where must this(0, 0) appear in the no-argument constructor?",
      "modelAnswer": "It must be the first statement in the constructor body.",
      "keyPoints": [
        "It must be the first statement in the constructor body."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_3_Constructor_Good_Practices/This_Call_Example/GoodConstructorThisCallExample.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-4-constructors-sub-chapter-3-constructor-good-practices-this-call-example-goodconstructorthiscallexample-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "Which of the following are TRUE about Good Constructor This Call Example? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "In other words, The 3rd constructor does all the work.",
        "Here, the 1st constructor calls the 2nd constructor, the 2nd constructor calls the 3rd constructor, and then the 3rd constructor actually initializes the instance variables.",
        "The variables will always be initialized in the 3rd constructor, and only there.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Good Constructor This Call Example.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_3_Constructor_Good_Practices/This_Call_Example/GoodConstructorThisCallExample.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-5-constructors-challenge-customer-java_custom_0-in-customer-string-name-double-creditlim",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Customer",
      "tags": [
        "interview"
      ],
      "question": "In Customer(String name, double creditLimit, String emailAddress), what does each parameter initialize?",
      "modelAnswer": "name initializes the name field, creditLimit initializes the creditLimit field, and emailAddress initializes the emailAddress field.",
      "keyPoints": [
        "name initializes the name field, creditLimit initializes the creditLimit field, and emailAddress initializes the emailAddress field."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_5_Constructors_Challenge/Customer.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-5-constructors-challenge-customer-java_custom_1-what-is-the-important-effect-of-customer",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Customer",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the important effect of Customer() calling this(\"Navneet\", \"navneet.jha@gmail.com\")?",
      "modelAnswer": "The no-args constructor does not set fields directly; it reuses the two-parameter constructor, which then supplies the default credit limit and delegates to the three-parameter constructor.",
      "keyPoints": [
        "The no-args constructor does not set fields directly; it reuses the two-parameter constructor, which then supplies the default credit limit and delegates to the three-parameter constructor."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_5_Constructors_Challenge/Customer.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-5-constructors-challenge-customer-java_custom_2-why-does-this-name-name-use-this-name-on",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Customer",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Why does this.name = name use this.name on the left side?",
      "modelAnswer": "The parameter name shadows the field name, so this.name explicitly means the current object's field while name means the constructor parameter.",
      "keyPoints": [
        "The parameter name shadows the field name, so this.name explicitly means the current object's field while name means the constructor parameter."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_5_Constructors_Challenge/Customer.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-5-constructors-challenge-customer-java_custom_3-how-should-a-caller-choose-the-creditlim",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Customer",
      "tags": [
        "interview"
      ],
      "question": "How should a caller choose the creditLimit argument?",
      "modelAnswer": "Pass the numeric credit amount the Customer should start with, usually a non-negative business value, because this constructor stores it directly without validation.",
      "keyPoints": [
        "Pass the numeric credit amount the Customer should start with, usually a non-negative business value, because this constructor stores it directly without validation."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_5_Constructors_Challenge/Customer.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-5-constructors-challenge-customer-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Customer",
      "question": "Which of the following are TRUE about Customer? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Create the getter methods only for each field. You don't need to create the setters.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Create three constructors for this class: First, create a constructor for all three fields which should assign the arguments directly to the instance fields. Second, create a no-args constructor that calls another constructor, passing some literal values for each argument. And lastly, create a constructor with just the name and email parameters, which also calls another constructor.",
        "Create a new class, called Customer, with three fields: name. credit limit. and email address."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Customer.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_5_Constructors_Challenge/Customer.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-6-reference-object-instance-example-house-java_custom_0-what-does-the-color-parameter-mean-in-ne",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "House",
      "tags": [
        "interview"
      ],
      "question": "What does the color parameter mean in new House(\"blue\")?",
      "modelAnswer": "It is the initial value copied into the new House object's color field.",
      "keyPoints": [
        "It is the initial value copied into the new House object's color field."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_6_Reference_Object_Instance/Example/House.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-6-reference-object-instance-example-house-java_custom_1-if-two-references-point-to-the-same-hous",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "House",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "If two references point to the same House and one calls setColor(\"red\"), what will the other reference see?",
      "modelAnswer": "It will see red too, because setColor changes the shared object, not just one reference variable.",
      "keyPoints": [
        "It will see red too, because setColor changes the shared object, not just one reference variable."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_6_Reference_Object_Instance/Example/House.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-6-reference-object-instance-example-house-java_custom_2-in-this-color-color-which-color-is-the-f",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "House",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "In this.color = color, which color is the field and which is the parameter?",
      "modelAnswer": "this.color is the instance field of the current object; color without this is the method or constructor parameter.",
      "keyPoints": [
        "this.color is the instance field of the current object; color without this is the method or constructor parameter."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_6_Reference_Object_Instance/Example/House.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-6-reference-object-instance-example-main-java_custom_0-in-house-bluehouse-new-house-blue-what-d",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Reference Object Instance)",
      "tags": [
        "interview"
      ],
      "question": "In House blueHouse = new House(\"blue\"), what does the \"blue\" argument choose?",
      "modelAnswer": "It chooses the initial color field value for the new House object referenced by blueHouse.",
      "keyPoints": [
        "It chooses the initial color field value for the new House object referenced by blueHouse."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_6_Reference_Object_Instance/Example/Main.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-6-reference-object-instance-example-main-java_custom_1-why-does-anotherhouse-setcolor-red-affec",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Reference Object Instance)",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why does anotherHouse.setColor(\"red\") affect blueHouse.getColor() at first?",
      "modelAnswer": "anotherHouse and blueHouse are two references to the same House object, so the setColor parameter updates that shared object's field.",
      "keyPoints": [
        "anotherHouse and blueHouse are two references to the same House object, so the setColor parameter updates that shared object's field."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_6_Reference_Object_Instance/Example/Main.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-6-reference-object-instance-example-main-java_custom_2-after-anotherhouse-greenhouse-does-passi",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Reference Object Instance)",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "After anotherHouse = greenHouse, does passing \"green\" to the constructor change the old red object?",
      "modelAnswer": "No. The \"green\" argument initialized a separate new House object; reassignment changes the reference, not the old object's color.",
      "keyPoints": [
        "No. The \"green\" argument initialized a separate new House object; reassignment changes the reference, not the old object's color."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_6_Reference_Object_Instance/Example/Main.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-6-reference-object-instance-referenceobjectsinstanceclass-java_custom_0-what-does-the-beige-argument-do-in-house",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "tags": [
        "interview"
      ],
      "question": "What does the \"beige\" argument do in House myHouse = new House(\"beige\")?",
      "modelAnswer": "It is passed to the House constructor and copied into the new object's color field.",
      "keyPoints": [
        "It is passed to the House constructor and copied into the new object's color field."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_6_Reference_Object_Instance/ReferenceObjectsInstanceClass.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-6-reference-object-instance-referenceobjectsinstanceclass-java_custom_1-what-is-the-pitfall-of-calling-new-house",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the pitfall of calling new House(\"red\") without assigning the result to a reference?",
      "modelAnswer": "The color parameter still initializes an object, but no reference is kept, so the program cannot access that object after the statement completes.",
      "keyPoints": [
        "The color parameter still initializes an object, but no reference is kept, so the program cannot access that object after the statement completes."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_6_Reference_Object_Instance/ReferenceObjectsInstanceClass.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-6-reference-object-instance-referenceobjectsinstanceclass-java_custom_2-are-the-two-calls-new-house-red-guarante",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Are the two calls new House(\"red\") guaranteed to refer to the same object because their parameter values match?",
      "modelAnswer": "No. Each new expression creates a separate object; matching constructor arguments do not make references point to the same object.",
      "keyPoints": [
        "No. Each new expression creates a separate object; matching constructor arguments do not make references point to the same object."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_6_Reference_Object_Instance/ReferenceObjectsInstanceClass.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-6-reference-object-instance-referenceobjectsinstanceclass-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "question": "Which of the following are TRUE about Reference Objects Instance Class? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Using one class blueprint, a program can create as many objects as it needs.",
        "This object can also be known as an instance.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "A class is a blueprint that defines the fields and methods available on its objects."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Reference Objects Instance Class.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_6_Reference_Object_Instance/ReferenceObjectsInstanceClass.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-7-static-and-instance-methods-staticandinstancemethods-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Static And Instance Methods",
      "question": "What does this code print?",
      "code": "System.out.println(\"Hello\");",
      "answer": [
        "Hello"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_7_Static_And_Instance_Methods/StaticAndInstanceMethods.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-7-static-and-instance-methods-staticandinstancemethods-java_custom_0-what-do-a-and-b-mean-in-printsum-int-a-i",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Static And Instance Methods",
      "tags": [
        "interview"
      ],
      "question": "What do a and b mean in printSum(int a, int b)?",
      "modelAnswer": "They are the two integer operands that the method adds and prints.",
      "keyPoints": [
        "They are the two integer operands that the method adds and prints."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_7_Static_And_Instance_Methods/StaticAndInstanceMethods.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-7-static-and-instance-methods-staticandinstancemethods-java_custom_1-does-printname-string-name-become-static",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Static And Instance Methods",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Does printName(String name) become static just because its parameter is independent of object fields?",
      "modelAnswer": "No. It is declared without static, so it is an instance method and must be called on an object reference.",
      "keyPoints": [
        "No. It is declared without static, so it is an instance method and must be called on an object reference."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_7_Static_And_Instance_Methods/StaticAndInstanceMethods.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-7-static-and-instance-methods-staticandinstancemethods-java_custom_2-in-printsum-2-3-which-parameter-receives",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Static And Instance Methods",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "In printSum(2, 3), which parameter receives 3?",
      "modelAnswer": "b receives 3 because Java matches method arguments to parameters by position.",
      "keyPoints": [
        "b receives 3 because Java matches method arguments to parameters by position."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_7_Static_And_Instance_Methods/StaticAndInstanceMethods.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-7-static-and-instance-methods-staticandinstancemethods-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Static And Instance Methods",
      "question": "Which of the following are TRUE about Static And Instance Methods? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "1) Static methods are declared using a static modifier and they belong to the class",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "3) They're usually used for operations that don't require any data from an instance of the class (from this)",
        "2) Static methods cannot access instance methods and instance variables directly."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Static And Instance Methods.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_7_Static_And_Instance_Methods/StaticAndInstanceMethods.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-plain-old-java-objects-plainoldjavaobject-java_custom_0-in-a-typical-pojo-constructor-with-one-p",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Plain Old Java Object",
      "tags": [
        "interview"
      ],
      "question": "In a typical POJO constructor with one parameter per field, how should a caller choose each argument?",
      "modelAnswer": "Choose values that represent the initial state of the object, matching the constructor parameter order and types.",
      "keyPoints": [
        "Choose values that represent the initial state of the object, matching the constructor parameter order and types."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Plain_Old_Java_Objects/PlainOldJavaObject.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-plain-old-java-objects-plainoldjavaobject-java_custom_1-if-a-pojo-setter-has-no-validation-what-",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Plain Old Java Object",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "If a POJO setter has no validation, what warning applies to its parameter?",
      "modelAnswer": "The setter will usually store the argument directly, so callers must avoid invalid, null, or inconsistent values themselves.",
      "keyPoints": [
        "The setter will usually store the argument directly, so callers must avoid invalid, null, or inconsistent values themselves."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Plain_Old_Java_Objects/PlainOldJavaObject.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-plain-old-java-objects-plainoldjavaobject-java_custom_2-why-does-a-pojo-getter-usually-take-no-p",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Plain Old Java Object",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Why does a POJO getter usually take no parameters?",
      "modelAnswer": "A getter reads an existing field from the current object, so the object reference already identifies what data to return.",
      "keyPoints": [
        "A getter reads an existing field from the current object, so the object reference already identifies what data to return."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Plain_Old_Java_Objects/PlainOldJavaObject.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-plain-old-java-objects-plainoldjavaobject-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Plain Old Java Object",
      "question": "Which of the following are TRUE about Plain Old Java Object? Select all that apply.",
      "options": [
        "iii) It usually has no other, or very few methods, other than getters and setters for the instance fields.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "iv) Many database frameworks use POJO's to read data from, or to write data to databases,files or streams.",
        "POJO CONCEPTS i) A plain old Java object acronym POJO is a class that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data ii) It's used to house data and pass data between functional classes.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Plain Old Java Object.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Plain_Old_Java_Objects/PlainOldJavaObject.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-plain-old-java-objects-pojoexample-main-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Plain Old Java Objects)",
      "question": "What does this code print?",
      "code": "System.out.println(\"*****************************************\");",
      "answer": [
        "*****************************************"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Plain_Old_Java_Objects/POJOExample/Main.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-plain-old-java-objects-pojoexample-main-java_custom_0-in-new-student-1-navneet-19-03-1994-java",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Plain Old Java Objects)",
      "tags": [
        "interview"
      ],
      "question": "In new Student(\"1\", \"Navneet\", \"19/03/1994\", \"Java MasterClass\"), what does the fourth argument mean?",
      "modelAnswer": "It is the classList value, describing the course or list of courses for that Student.",
      "keyPoints": [
        "It is the classList value, describing the course or list of courses for that Student."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Plain_Old_Java_Objects/POJOExample/Main.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-plain-old-java-objects-pojoexample-main-java_custom_1-why-is-argument-order-important-when-cre",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Plain Old Java Objects)",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why is argument order important when creating Student and StudentRecord objects?",
      "modelAnswer": "Java assigns arguments by position, so swapping two String values may compile but store data in the wrong fields or components.",
      "keyPoints": [
        "Java assigns arguments by position, so swapping two String values may compile but store data in the wrong fields or components."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Plain_Old_Java_Objects/POJOExample/Main.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-plain-old-java-objects-pojoexample-main-java_custom_2-what-parameter-would-setclasslist-receiv",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Plain Old Java Objects)",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What parameter would setClassList receive if called with s1.getClassList() + \", Java OCJP Exam 829\"?",
      "modelAnswer": "It would receive one replacement String containing the previous classList text plus the added course text.",
      "keyPoints": [
        "It would receive one replacement String containing the previous classList text plus the added course text."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Plain_Old_Java_Objects/POJOExample/Main.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-plain-old-java-objects-pojoexample-student-java_custom_0-what-are-the-four-constructor-parameters",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Student",
      "tags": [
        "interview"
      ],
      "question": "What are the four constructor parameters of Student used for?",
      "modelAnswer": "id, name, dateOfBirth, and classList initialize the matching fields of the new Student object.",
      "keyPoints": [
        "id, name, dateOfBirth, and classList initialize the matching fields of the new Student object."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Plain_Old_Java_Objects/POJOExample/Student.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-plain-old-java-objects-pojoexample-student-java_custom_1-what-is-the-warning-when-calling-setclas",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Student",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the warning when calling setClassList(String classList)?",
      "modelAnswer": "The parameter replaces the whole classList field; it does not automatically append to the existing value.",
      "keyPoints": [
        "The parameter replaces the whole classList field; it does not automatically append to the existing value."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Plain_Old_Java_Objects/POJOExample/Student.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-plain-old-java-objects-pojoexample-student-java_custom_2-why-is-this-id-required-in-this-id-id",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Student",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Why is this.id required in this.id = id?",
      "modelAnswer": "The parameter id shadows the field id, so this.id identifies the instance field while id identifies the parameter.",
      "keyPoints": [
        "The parameter id shadows the field id, so this.id identifies the instance field while id identifies the parameter."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Plain_Old_Java_Objects/POJOExample/Student.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-plain-old-java-objects-pojoexample-student-java_custom_3-how-should-a-caller-choose-the-dateofbir",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Student",
      "tags": [
        "interview"
      ],
      "question": "How should a caller choose the dateOfBirth parameter?",
      "modelAnswer": "Pass the birth-date text in the format the application expects, because this class stores it as a String without validation or conversion.",
      "keyPoints": [
        "Pass the birth-date text in the format the application expects, because this class stores it as a String without validation or conversion."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Plain_Old_Java_Objects/POJOExample/Student.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-static-and-instance-variables-staticandinstancevariables-java_custom_0-what-is-the-difference-between-the-name-",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Static And Instance Variables",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between the name parameter and the instanceName parameter in the two constructors?",
      "modelAnswer": "name updates the shared static class variable, while instanceName initializes a separate instance field for one object.",
      "keyPoints": [
        "name updates the shared static class variable, while instanceName initializes a separate instance field for one object."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Static_And_Instance_Variables/StaticAndInstanceVariables.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-static-and-instance-variables-staticandinstancevariables-java_custom_1-what-is-the-pitfall-of-calling-new-stati",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Static And Instance Variables",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the pitfall of calling new StaticAndInstanceVariables(\"Fluffy\") after new StaticAndInstanceVariables(\"Rex\")?",
      "modelAnswer": "The second call overwrites the shared static name, so all instances that read the static variable see Fluffy.",
      "keyPoints": [
        "The second call overwrites the shared static name, so all instances that read the static variable see Fluffy."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Static_And_Instance_Variables/StaticAndInstanceVariables.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-static-and-instance-variables-staticandinstancevariables-java_custom_2-in-new-staticandinstancevariables-rex-4-",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Static And Instance Variables",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "In new StaticAndInstanceVariables(\"Rex\", 4), which parameter receives 4?",
      "modelAnswer": "age receives 4 because it is the second parameter in the (String instanceName, int age) constructor.",
      "keyPoints": [
        "age receives 4 because it is the second parameter in the (String instanceName, int age) constructor."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Static_And_Instance_Variables/StaticAndInstanceVariables.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-8-static-and-instance-variables-staticandinstancevariables-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Static And Instance Variables",
      "question": "Which of the following are TRUE about Static And Instance Variables? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "3) Every instance of the class shares the same static variable.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "1) A static variable is Declared by using the keyword static.",
        "2) Static variables are also known as static member variables. They belong to the class, not the instance"
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Static And Instance Variables.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_8_Static_And_Instance_Variables/StaticAndInstanceVariables.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-9-javarecords-studentrecord-java_custom_0-in-record-studentrecord-string-id-string",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Student Record",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "In record StudentRecord(String id, String name, String dateOfBirth, String classList), what does each component generate automatically?",
      "modelAnswer": "Each component becomes a canonical constructor parameter, a private final field, and a public accessor method with the same name.",
      "keyPoints": [
        "Each component becomes a canonical constructor parameter, a private final field, and a public accessor method with the same name."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_9_JavaRecords/StudentRecord.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-9-javarecords-studentrecord-java_custom_1-how-should-a-caller-choose-the-classlist",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Student Record",
      "tags": [
        "interview"
      ],
      "question": "How should a caller choose the classList component value for a StudentRecord?",
      "modelAnswer": "Pass the complete course-list String the record should keep, because records are immutable and provide no setter to change it later.",
      "keyPoints": [
        "Pass the complete course-list String the record should keep, because records are immutable and provide no setter to change it later."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_9_JavaRecords/StudentRecord.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-9-javarecords-studentrecord-java_custom_2-why-is-swapping-name-and-dateofbirth-a-d",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Student Record",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why is swapping name and dateOfBirth a dangerous trap in new StudentRecord(...)?",
      "modelAnswer": "Both are Strings, so the code may still compile, but the record will store the student's name in the dateOfBirth component and the date in the name component.",
      "keyPoints": [
        "Both are Strings, so the code may still compile, but the record will store the student's name in the dateOfBirth component and the date in the name component."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_9_JavaRecords/StudentRecord.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-9-javarecords-studentrecord-java_custom_3-what-is-the-accessor-method-for-the-name",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Student Record",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What is the accessor method for the name component?",
      "modelAnswer": "The accessor is name(), not getName().",
      "keyPoints": [
        "The accessor is name(), not getName()."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_9_JavaRecords/StudentRecord.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-9-javarecords-studentrecord-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Student Record",
      "question": "Which of the following are TRUE about Student Record? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "1) The record was introduced in JDK 14 and became officially part of Java in JDK 16.",
        "2) It's purpose is to replace the boilerplate code of the POJO but to be more restrictive.",
        "Java calls them \"plain data carriers\".",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Student Record.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_9_JavaRecords/StudentRecord.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-10-constructors-coding-challenge-pointclassdistancecalculation-java_custom_0-in-pointclassdistancecalculation-int-x-i",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "tags": [
        "interview"
      ],
      "question": "In PointClassDistanceCalculation(int x, int y), what do x and y represent?",
      "modelAnswer": "x is the horizontal coordinate and y is the vertical coordinate used to initialize the point's fields.",
      "keyPoints": [
        "x is the horizontal coordinate and y is the vertical coordinate used to initialize the point's fields."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_10_Constructors_Coding_Challenge/PointClassDistanceCalculation.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-10-constructors-coding-challenge-pointclassdistancecalculation-java_custom_1-what-is-the-pitfall-in-calling-distance-",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the pitfall in calling distance(Point a) with a null argument?",
      "modelAnswer": "It causes a NullPointerException because the method reads a.getX() and a.getY().",
      "keyPoints": [
        "It causes a NullPointerException because the method reads a.getX() and a.getY()."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_10_Constructors_Coding_Challenge/PointClassDistanceCalculation.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-10-constructors-coding-challenge-pointclassdistancecalculation-java_custom_2-in-distance-int-a-int-b-why-is-parameter",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "In distance(int a, int b), why is parameter order important?",
      "modelAnswer": "The first int is treated as the target x-coordinate and the second int as the target y-coordinate.",
      "keyPoints": [
        "The first int is treated as the target x-coordinate and the second int as the target y-coordinate."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_10_Constructors_Coding_Challenge/PointClassDistanceCalculation.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-10-constructors-coding-challenge-pointclassdistancecalculation-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "Which of the following are TRUE about Point Class Distance Calculation? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "The class needs to have two constructors. The first constructor does not have any parameters (no-arg constructor). The second constructor has parameters x and y of type int and it needs to initialize the fields.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "You have to represent a point in 2D space. Write a class with the name Point. The class needs two fields (instance variables) with name x and y of type int.",
        "Point Class and Distance Calculation"
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Point Class Distance Calculation.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_10_Constructors_Coding_Challenge/PointClassDistanceCalculation.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-10-constructors-coding-challenge-wallareacomputation-java_custom_0-what-do-width-and-height-mean-in-wallare",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Wall Area Computation",
      "tags": [
        "interview"
      ],
      "question": "What do width and height mean in WallAreaComputation(double width, double height)?",
      "modelAnswer": "They are the wall's two dimensions, and callers should choose non-negative values in the same unit.",
      "keyPoints": [
        "They are the wall's two dimensions, and callers should choose non-negative values in the same unit."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_10_Constructors_Coding_Challenge/WallAreaComputation.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-10-constructors-coding-challenge-wallareacomputation-java_custom_1-what-happens-if-setwidth-double-width-re",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Wall Area Computation",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What happens if setWidth(double width) receives a negative value?",
      "modelAnswer": "The width field is set to 0, so the negative input is not stored.",
      "keyPoints": [
        "The width field is set to 0, so the negative input is not stored."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_10_Constructors_Coding_Challenge/WallAreaComputation.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-10-constructors-coding-challenge-wallareacomputation-java_custom_2-why-does-getarea-not-need-width-and-heig",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Wall Area Computation",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Why does getArea() not need width and height parameters?",
      "modelAnswer": "It multiplies the object's current width and height fields, which were set by the constructor or setters.",
      "keyPoints": [
        "It multiplies the object's current width and height fields, which were set by the constructor or setters."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_10_Constructors_Coding_Challenge/WallAreaComputation.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-10-constructors-coding-challenge-wallareacomputation-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Wall Area Computation",
      "question": "Which of the following are TRUE about Wall Area Computation? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "The first constructor does not have any parameters (no-args constructor).",
        "Write a class with the name Wall. The class needs two fields (instance variables) with name width and height of type double.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "The second constructor has parameters width and height of type double and it needs to initialize the fields."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Wall Area Computation.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_10_Constructors_Coding_Challenge/WallAreaComputation.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-animal-java_custom_0-in-animal-string-type-string-size-double",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Animal",
      "tags": [
        "interview"
      ],
      "question": "In Animal(String type, String size, double weight), how should the three arguments be chosen?",
      "modelAnswer": "Choose a type name, a size label, and a numeric weight for the animal, in that exact order.",
      "keyPoints": [
        "Choose a type name, a size label, and a numeric weight for the animal, in that exact order."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Animal.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-animal-java_custom_1-what-important-detail-should-you-remembe",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Animal",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What important detail should you remember about Animal(String type, double weight)?",
      "modelAnswer": "It uses the same weight argument for two jobs: storing the numeric weight and deriving the size label.",
      "keyPoints": [
        "It uses the same weight argument for two jobs: storing the numeric weight and deriving the size label."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Animal.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-animal-java_custom_2-in-move-string-speed-what-does-the-speed",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Animal",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "In move(String speed), what does the speed parameter control?",
      "modelAnswer": "It supplies the movement description printed by the method and may be used by overriding subclass methods.",
      "keyPoints": [
        "It supplies the movement description printed by the method and may be used by overriding subclass methods."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Animal.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-animal-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Animal",
      "question": "Which of the following are TRUE about Animal? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Also, the super class will have all the behaviour that animals have in common.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This is a super class, aka top parent class. This class will contain all the attributes that all types of animal has.",
        "Overriding a method is when you create a method on a subclass, which has the same signature as a method on a super class."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Animal.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Animal.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-dog-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Dog (Inheritance)",
      "question": "What does this code print?",
      "code": "System.out.println(\"Woof! \");",
      "answer": [
        "Woof! "
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Dog.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-dog-java_custom_0-in-dog-string-type-double-weight-string-",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Dog (Inheritance)",
      "tags": [
        "interview"
      ],
      "question": "In Dog(String type, double weight, String earShape, String tailShape), which arguments go to Animal and which stay in Dog?",
      "modelAnswer": "type and weight are passed to the Animal constructor with super(type, weight); earShape and tailShape initialize Dog fields.",
      "keyPoints": [
        "type and weight are passed to the Animal constructor with super(type, weight); earShape and tailShape initialize Dog fields."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Dog.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-dog-java_custom_1-what-is-the-pitfall-of-dog-string-type-d",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Dog (Inheritance)",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the pitfall of Dog(String type, double weight) calling this(type, weight, \"Perky\", \"Curled\")?",
      "modelAnswer": "The two-argument constructor chooses default earShape and tailShape, so callers cannot customize those values through that overload.",
      "keyPoints": [
        "The two-argument constructor chooses default earShape and tailShape, so callers cannot customize those values through that overload."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Dog.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-dog-java_custom_2-why-must-super-or-this-be-the-first-stat",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Dog (Inheritance)",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Why must super(...) or this(...) be the first statement in a constructor?",
      "modelAnswer": "Java must initialize the parent or chained constructor before the rest of the current constructor body runs.",
      "keyPoints": [
        "Java must initialize the parent or chained constructor before the rest of the current constructor body runs."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Dog.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-dog-java_custom_3-what-is-special-about-passing-slow-to-mo",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Dog (Inheritance)",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is special about passing \"slow\" to move(String speed) in this code?",
      "modelAnswer": "This implementation checks the text case-insensitively, so \"slow\" triggers walk() and wagTail(), while other values trigger run().",
      "keyPoints": [
        "This implementation checks the text case-insensitively, so \"slow\" triggers walk() and wagTail(), while other values trigger run()."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Dog.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-dog-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Dog (Inheritance)",
      "question": "Which of the following are TRUE about Dog (Inheritance)? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Animal is a parent or super class of Dog",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Dog \"IS A\" a type of Animal",
        "Dog is a subclass or child class of Animal"
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Dog (Inheritance).",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Dog.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-fish-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Fish",
      "question": "What does this code print?",
      "code": "System.out.println(\"muscle moving \");",
      "answer": [
        "muscle moving "
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Fish.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-fish-java_custom_0-in-fish-string-type-double-weight-int-gi",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Fish",
      "tags": [
        "interview"
      ],
      "question": "In Fish(String type, double weight, int gills, int fins), what does super(type, \"small\", weight) do?",
      "modelAnswer": "It invokes Animal(String, String, double), passing the fish type, hard-coding size to \"small\", and passing the fish weight.",
      "keyPoints": [
        "It invokes Animal(String, String, double), passing the fish type, hard-coding size to \"small\", and passing the fish weight."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Fish.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-fish-java_custom_1-how-should-callers-choose-gills-and-fins",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Fish",
      "tags": [
        "interview"
      ],
      "question": "How should callers choose gills and fins?",
      "modelAnswer": "They should pass int counts that describe the fish, usually non-negative values.",
      "keyPoints": [
        "They should pass int counts that describe the fish, usually non-negative values."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Fish.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-fish-java_custom_2-what-is-the-warning-about-move-string-sp",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Fish",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the warning about move(String speed) checking for \"fast\"?",
      "modelAnswer": "Only the text \"fast\" triggers moveBackFin(); other speed values still move the fish, but without the extra back-fin output.",
      "keyPoints": [
        "Only the text \"fast\" triggers moveBackFin(); other speed values still move the fish, but without the extra back-fin output."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Fish.java"
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-inheritance-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Inheritance",
      "question": "What does this code print?",
      "code": "System.out.println(\"*************************************************************************************\");",
      "answer": [
        "*************************************************************************************"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Inheritance.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-inheritance-java_custom_0-in-doanimalstuff-animal-animal-string-sp",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Inheritance",
      "tags": [
        "interview"
      ],
      "question": "In doAnimalStuff(Animal animal, String speed), why can a Dog or Fish be passed as the animal argument?",
      "modelAnswer": "Dog and Fish extend Animal, so they satisfy the Animal parameter type and Java dispatches overridden methods at runtime.",
      "keyPoints": [
        "Dog and Fish extend Animal, so they satisfy the Animal parameter type and Java dispatches overridden methods at runtime."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Inheritance.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-inheritance-java_custom_1-what-do-the-arguments-in-new-fish-goldfi",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Inheritance",
      "tags": [
        "interview"
      ],
      "question": "What do the arguments in new Fish(\"GoldFish\", 0.25, 2, 5) represent?",
      "modelAnswer": "They are type, weight, number of gills, and number of fins, in that order.",
      "keyPoints": [
        "They are type, weight, number of gills, and number of fins, in that order."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Inheritance.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-inheritance-java_custom_2-what-is-the-pitfall-of-passing-null-as-t",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Inheritance",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the pitfall of passing null as the animal argument to doAnimalStuff?",
      "modelAnswer": "The method calls animal.makeNoise(), animal.move(speed), and println(animal), so null would cause a NullPointerException before useful polymorphism occurs.",
      "keyPoints": [
        "The method calls animal.makeNoise(), animal.move(speed), and println(animal), so null would cause a NullPointerException before useful polymorphism occurs."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Inheritance.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-inheritance-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Inheritance",
      "question": "Which of the following are TRUE about Inheritance? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Vertebrates (Sub Class of Animal)",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Inheritance is basically a form of code reuse. It's a way to organize classes into a parent-child hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent.",
        "Warm Blooded Cold Blooded"
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Inheritance.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Inheritance.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-objectclass-main-java_custom_0-in-primaryschoolstudent-string-name-int-",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Inheritance)",
      "tags": [
        "interview"
      ],
      "question": "In PrimarySchoolStudent(String name, int age, String parentName), which parameters are passed to super?",
      "modelAnswer": "name and age are passed to Student(String, int); parentName is stored in the PrimarySchoolStudent field.",
      "keyPoints": [
        "name and age are passed to Student(String, int); parentName is stored in the PrimarySchoolStudent field."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/ObjectClass/Main.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-objectclass-main-java_custom_1-what-should-callers-avoid-when-choosing-",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Inheritance)",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What should callers avoid when choosing the age parameter for Student(String name, int age)?",
      "modelAnswer": "Avoid invalid values such as negative ages, because the constructor stores the int directly without validation.",
      "keyPoints": [
        "Avoid invalid values such as negative ages, because the constructor stores the int directly without validation."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/ObjectClass/Main.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-objectclass-main-java_custom_2-what-does-main-string-args-receive",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Inheritance)",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What does main(String[] args) receive?",
      "modelAnswer": "It receives command-line arguments as a String array, although this program does not use them.",
      "keyPoints": [
        "It receives command-line arguments as a String array, although this program does not use them."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/ObjectClass/Main.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-11-inheritance-animalinheritanceexample-objectclass-main-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Inheritance)",
      "question": "Which of the following are TRUE about Main (Inheritance)? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "That class is named Object, and it's in the java.lang package.",
        "Class Object is the root of the class hierarchy.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Every class created in Java extends a special Java class."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Main (Inheritance).",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/ObjectClass/Main.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-employee-java_custom_0-in-employee-string-name-string-birthdate",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Employee",
      "tags": [
        "interview"
      ],
      "question": "In Employee(String name, String birthDate, String hireDate), what does super(name, birthDate) initialize?",
      "modelAnswer": "It invokes Worker(String, String), setting the Worker name and birthDate fields for the Employee object.",
      "keyPoints": [
        "It invokes Worker(String, String), setting the Worker name and birthDate fields for the Employee object."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/Employee.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-employee-java_custom_1-why-is-birthdate-format-important-when-c",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Employee",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why is birthDate format important when creating an Employee?",
      "modelAnswer": "Worker.getAge() uses birthDate.substring(6), so the year must start at index 6 or age calculation can fail or be wrong.",
      "keyPoints": [
        "Worker.getAge() uses birthDate.substring(6), so the year must start at index 6 or age calculation can fail or be wrong."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/Employee.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-employee-java_custom_2-is-employeeid-chosen-by-the-employee-con",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Employee",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Is employeeId chosen by the Employee constructor caller?",
      "modelAnswer": "No, the caller passes name, birthDate, and hireDate; employeeId is assigned automatically from the static counter.",
      "keyPoints": [
        "No, the caller passes name, birthDate, and hireDate; employeeId is assigned automatically from the static counter."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/Employee.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-employee-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Employee",
      "question": "Which of the following are TRUE about Employee? Select all that apply.",
      "options": [
        "- super(name, birthDate) passes the shared Worker data up to Worker(String, String); hireDate remains in Employee.",
        "Employee Class Extends the Worker Class",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "- Choose birthDate in the expected dd/MM/yyyy-like format because Worker.getAge() later reads substring(6) as the birth year.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Employee.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/Employee.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-hourlyemployee-java_custom_0-in-hourlyemployee-string-name-string-bir",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Hourly Employee",
      "tags": [
        "interview"
      ],
      "question": "In HourlyEmployee(String name, String birthDate, String hireDate, double hourlyRate), what does hourlyRate control?",
      "modelAnswer": "It controls weekly pay because collectPay() returns 40 multiplied by hourlyRate.",
      "keyPoints": [
        "It controls weekly pay because collectPay() returns 40 multiplied by hourlyRate."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/HourlyEmployee.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-hourlyemployee-java_custom_1-what-happens-to-name-birthdate-and-hired",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Hourly Employee",
      "tags": [
        "interview"
      ],
      "question": "What happens to name, birthDate, and hireDate when super(name, birthDate, hireDate) is called?",
      "modelAnswer": "They are passed to the Employee constructor; Employee stores hireDate and passes name and birthDate to Worker.",
      "keyPoints": [
        "They are passed to the Employee constructor; Employee stores hireDate and passes name and birthDate to Worker."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/HourlyEmployee.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-hourlyemployee-java_custom_2-why-should-callers-avoid-a-negative-hour",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Hourly Employee",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why should callers avoid a negative hourlyRate?",
      "modelAnswer": "The constructor stores it directly, so collectPay() would produce a negative paycheck.",
      "keyPoints": [
        "The constructor stores it directly, so collectPay() would produce a negative paycheck."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/HourlyEmployee.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-hourlyemployee-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Hourly Employee",
      "question": "Which of the following are TRUE about Hourly Employee? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "- Choose hourlyRate as a non-negative money amount per hour; collectPay() multiplies it by 40 hours.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "- getDoublePay() takes no parameters because it doubles the current collectPay() result using the stored hourlyRate.",
        "- super(name, birthDate, hireDate) passes employee identity and dates to Employee, which then passes name and birthDate up to Worker."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Hourly Employee.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/HourlyEmployee.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-main-java_custom_0-what-do-the-four-arguments-in-new-salari",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Inheritance Coding Challenge)",
      "tags": [
        "interview"
      ],
      "question": "What do the four arguments in new SalariedEmployee(\"Joe\", \"11/11/1990\", \"03/03/2020\", 35000) represent?",
      "modelAnswer": "They are name, birthDate, hireDate, and annualSalary, in that order.",
      "keyPoints": [
        "They are name, birthDate, hireDate, and annualSalary, in that order."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/Main.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-main-java_custom_1-how-does-new-hourlyemployee-mary-05-05-1",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Inheritance Coding Challenge)",
      "tags": [
        "interview"
      ],
      "question": "How does new HourlyEmployee(\"Mary\", \"05/05/1984\", \"05/06/2009\", 20) use the 20 argument?",
      "modelAnswer": "It becomes hourlyRate, so collectPay() returns 40 times 20.",
      "keyPoints": [
        "It becomes hourlyRate, so collectPay() returns 40 times 20."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/Main.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-main-java_custom_2-why-is-the-birthdate-argument-format-a-c",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Inheritance Coding Challenge)",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why is the birthDate argument format a careful choice in this demo?",
      "modelAnswer": "Worker.getAge() extracts the year with substring(6), so the date string must put the year at that position.",
      "keyPoints": [
        "Worker.getAge() extracts the year with substring(6), so the date string must put the year at that position."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/Main.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-main-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Main (Inheritance Coding Challenge)",
      "question": "Which of the following are TRUE about Main (Inheritance Coding Challenge)? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This is the Inheritance Coding Challenge demo: a Worker → Employee → SalariedEmployee/HourlyEmployee hierarchy.",
        "Each subclass overrides the collectPay() method to compute pay differently: salaried divides annual salary by 26, hourly multiplies rate by 40 hours.",
        "Worker is the base class. Employee extends Worker, adding employeeId and hireDate. SalariedEmployee and HourlyEmployee extend Employee."
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Main (Inheritance Coding Challenge).",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/Main.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-salariedemployee-java_custom_0-in-salariedemployee-string-name-string-b",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Salaried Employee",
      "tags": [
        "interview"
      ],
      "question": "In SalariedEmployee(String name, String birthDate, String hireDate, double annualSalary), what does annualSalary represent?",
      "modelAnswer": "It is the yearly salary amount used by collectPay(), which divides it by 26.",
      "keyPoints": [
        "It is the yearly salary amount used by collectPay(), which divides it by 26."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/SalariedEmployee.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-salariedemployee-java_custom_1-what-do-the-arguments-in-super-name-birt",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Salaried Employee",
      "tags": [
        "interview"
      ],
      "question": "What do the arguments in super(name, birthDate, hireDate) do?",
      "modelAnswer": "They call Employee(String, String, String), passing identity and dates up the inheritance chain.",
      "keyPoints": [
        "They call Employee(String, String, String), passing identity and dates up the inheritance chain."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/SalariedEmployee.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-salariedemployee-java_custom_2-what-does-the-12-12-2025-argument-in-ter",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Salaried Employee",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What does the \"12/12/2025\" argument in terminate(\"12/12/2025\") mean?",
      "modelAnswer": "It is the endDate String stored by Worker.terminate(), and it is hard-coded by retire().",
      "keyPoints": [
        "It is the endDate String stored by Worker.terminate(), and it is hard-coded by retire()."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/SalariedEmployee.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-salariedemployee-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Salaried Employee",
      "question": "Which of the following are TRUE about Salaried Employee? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "- super(name, birthDate, hireDate) passes common employee data to Employee, which chains name and birthDate up to Worker.",
        "- retire() takes no parameters, but it calls terminate(\"12/12/2025\"); that String argument becomes the inherited endDate.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "- Choose annualSalary as a non-negative yearly amount; collectPay() divides it by 26 pay periods."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Salaried Employee.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/SalariedEmployee.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-worker-java_custom_0-in-worker-string-name-string-birthdate-h",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Worker",
      "tags": [
        "interview"
      ],
      "question": "In Worker(String name, String birthDate), how is birthDate later used?",
      "modelAnswer": "getAge() extracts the year with substring(6), parses it, and subtracts it from the current year.",
      "keyPoints": [
        "getAge() extracts the year with substring(6), parses it, and subtracts it from the current year."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/Worker.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-worker-java_custom_1-what-is-the-pitfall-of-passing-birthdate",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Worker",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the pitfall of passing birthDate in the wrong format?",
      "modelAnswer": "substring(6) or Integer.parseInt(...) can fail, or the calculated age can be incorrect.",
      "keyPoints": [
        "substring(6) or Integer.parseInt(...) can fail, or the calculated age can be incorrect."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/Worker.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-worker-java_custom_2-what-does-terminate-string-enddate-do-wi",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Worker",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What does terminate(String endDate) do with its parameter?",
      "modelAnswer": "It stores the provided endDate String in the protected endDate field.",
      "keyPoints": [
        "It stores the provided endDate String in the protected endDate field."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/Worker.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-12-inheritance-coding-challenge-worker-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Worker",
      "question": "Which of the following are TRUE about Worker? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Inheritance Challenge Problem",
        "name : String birthDate : String endDate : String intGetAge() double collectPay() terminate(String endDate)",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Create Worker Class -> This should be on top of the Hierarchy"
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Worker.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_12_Inheritance_Coding_Challenge/Worker.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-13-method-overloading-in-java-methodoverloadingexample-dog-java_custom_0-what-does-the-number-parameter-in-bark-i",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Dog (Method Over Loading In Java)",
      "tags": [
        "interview"
      ],
      "question": "What does the number parameter in bark(int number) control?",
      "modelAnswer": "It controls how many times the loop prints \"woof\"; pass a positive int when you want repeated barking.",
      "keyPoints": [
        "It controls how many times the loop prints \"woof\"; pass a positive int when you want repeated barking."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_13_Method_OverLoading_In_Java/MethodOverloadingExample/Dog.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-13-method-overloading-in-java-methodoverloadingexample-dog-java_custom_1-why-are-bark-and-bark-int-number-overloa",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Dog (Method Over Loading In Java)",
      "tags": [
        "interview"
      ],
      "question": "Why are bark() and bark(int number) overloads?",
      "modelAnswer": "They have the same method name but different parameter counts: zero parameters versus one int parameter.",
      "keyPoints": [
        "They have the same method name but different parameter counts: zero parameters versus one int parameter."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_13_Method_OverLoading_In_Java/MethodOverloadingExample/Dog.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-13-method-overloading-in-java-methodoverloadingexample-dog-java_custom_2-would-bark-int-number-and-int-bark-int-n",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Dog (Method Over Loading In Java)",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Would bark(int number) and int bark(int number) be valid overloads?",
      "modelAnswer": "No. A return type change alone is not enough; overloading requires a different parameter list.",
      "keyPoints": [
        "No. A return type change alone is not enough; overloading requires a different parameter list."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_13_Method_OverLoading_In_Java/MethodOverloadingExample/Dog.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-13-method-overloading-in-java-methodoverloadingexample-dog-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Dog (Method Over Loading In Java)",
      "question": "Which of the following are TRUE about Dog (Method Over Loading In Java)? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "important: bark() and bark(int number) are OVERLOADS because the parameter COUNT is different.",
        "- bark(int number) uses number as the repeat count; choose a positive whole number for how many \"woof\" lines you want.",
        "- bark() has an empty parameter list, so it means \"bark once\" with no caller-controlled repeat count.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Dog (Method Over Loading In Java).",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_13_Method_OverLoading_In_Java/MethodOverloadingExample/Dog.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-13-method-overloading-in-java-methodoverloadinginjava-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "What does this code print?",
      "code": "System.out.println(\"a method invoked\");",
      "answer": [
        "a method invoked"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_13_Method_OverLoading_In_Java/MethodOverloadingInJava.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-13-method-overloading-in-java-methodoverloadinginjava-java_custom_0-which-calculatescore-overload-is-called-",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overloading In Java",
      "tags": [
        "interview"
      ],
      "question": "Which calculateScore overload is called by calculateScore(\"Navneet\", 1000), and why?",
      "modelAnswer": "calculateScore(String, int) is called because the argument list has a String followed by an int.",
      "keyPoints": [
        "calculateScore(String, int) is called because the argument list has a String followed by an int."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_13_Method_OverLoading_In_Java/MethodOverloadingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-13-method-overloading-in-java-methodoverloadinginjava-java_custom_1-which-calculatescore-overload-is-called-",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overloading In Java",
      "tags": [
        "interview"
      ],
      "question": "Which calculateScore overload is called by calculateScore(75), and what does the score parameter mean?",
      "modelAnswer": "calculateScore(int) is called; score is the unnamed player's points value before multiplying by 1000.",
      "keyPoints": [
        "calculateScore(int) is called; score is the unnamed player's points value before multiplying by 1000."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_13_Method_OverLoading_In_Java/MethodOverloadingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-13-method-overloading-in-java-methodoverloadinginjava-java_custom_2-why-does-sum-1-2-call-sum-int-a-long-b-i",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overloading In Java",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Why does sum(1, 2) call sum(int a, long b) in this file?",
      "modelAnswer": "There is no exact sum(int, int), so the second int argument can widen to long and match sum(int, long).",
      "keyPoints": [
        "There is no exact sum(int, int), so the second int argument can widen to long and match sum(int, long)."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_13_Method_OverLoading_In_Java/MethodOverloadingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-13-method-overloading-in-java-methodoverloadinginjava-java_custom_3-why-is-performingsum-1-3-ambiguous-here",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overloading In Java",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Why is performingSum(1, 3) ambiguous here?",
      "modelAnswer": "Both performingSum(int, long) and performingSum(long, int) need one int-to-long widening conversion, so neither overload is more specific.",
      "keyPoints": [
        "Both performingSum(int, long) and performingSum(long, int) need one int-to-long widening conversion, so neither overload is more specific."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_13_Method_OverLoading_In_Java/MethodOverloadingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-13-method-overloading-in-java-methodoverloadinginjava-java_custom_4-if-performingsumagain-20-20-is-called-wh",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overloading In Java",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "If performingSumAgain(20, 20) is called, why is the int,int overload chosen?",
      "modelAnswer": "Java prefers the exact parameter match performingSumAgain(int, int) before widening both arguments to long.",
      "keyPoints": [
        "Java prefers the exact parameter match performingSumAgain(int, int) before widening both arguments to long."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_13_Method_OverLoading_In_Java/MethodOverloadingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-13-method-overloading-in-java-methodoverloadinginjava-java_custom_5-can-changing-only-the-return-type-create",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overloading In Java",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Can changing only the return type create another calculateScore overload?",
      "modelAnswer": "No. Overloading requires a different parameter list; the return type alone cannot distinguish methods.",
      "keyPoints": [
        "No. Overloading requires a different parameter list; the return type alone cannot distinguish methods."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_13_Method_OverLoading_In_Java/MethodOverloadingInJava.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-13-method-overloading-in-java-methodoverloadinginjava-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "Which of the following are TRUE about Method Overloading In Java? Select all that apply.",
      "options": [
        "important: calculateScore(String, int) and calculateScore(int) are OVERLOADS because their parameter counts and types differ.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "warning: type promotion can help choose an overload, but symmetric widening choices can make the call ambiguous at compile time.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "remember: overloading is compile-time selection based on method name plus parameter list; return type is not part of the overload key."
      ],
      "answer": [
        0,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Method Overloading In Java.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_13_Method_OverLoading_In_Java/MethodOverloadingInJava.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridingexample-covariantreturntype-covariantreturntype-java_custom_0-what-do-the-name-and-birthdate-parameter",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Covariant Return Type",
      "tags": [
        "interview"
      ],
      "question": "What do the name and birthDate parameters in Person(String name, String birthDate) represent?",
      "modelAnswer": "name is the person's stored name, and birthDate is the stored birth-date text copied into the new Person.",
      "keyPoints": [
        "name is the person's stored name, and birthDate is the stored birth-date text copied into the new Person."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingExample/CovariantReturnType/CovariantReturnType.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridingexample-covariantreturntype-covariantreturntype-java_custom_1-can-person-string-name-string-birthdate-",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Covariant Return Type",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Can Person(String name, String birthDate) override a constructor from another class?",
      "modelAnswer": "No. Constructors are not inherited, so they can be overloaded but never overridden.",
      "keyPoints": [
        "No. Constructors are not inherited, so they can be overloaded but never overridden."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingExample/CovariantReturnType/CovariantReturnType.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridingexample-covariantreturntype-covariantreturntype-java_custom_2-why-is-public-person-clone-a-valid-overr",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Covariant Return Type",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Why is public Person clone() a valid override of Object clone() even though the return type differs?",
      "modelAnswer": "The parameter list is identical and Person is a covariant return type, meaning it is more specific than Object.",
      "keyPoints": [
        "The parameter list is identical and Person is a covariant return type, meaning it is more specific than Object."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingExample/CovariantReturnType/CovariantReturnType.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridingexample-covariantreturntype-covariantreturntype-java_custom_3-would-clone-string-name-override-object-",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Covariant Return Type",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Would clone(String name) override Object's clone()?",
      "modelAnswer": "No. Changing the parameter list makes it a different overloaded method, not an override.",
      "keyPoints": [
        "No. Changing the parameter list makes it a different overloaded method, not an override."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingExample/CovariantReturnType/CovariantReturnType.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridingexample-covariantreturntype-covariantreturntype-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Covariant Return Type",
      "question": "Which of the following are TRUE about Covariant Return Type? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "All classes ultimately have Object as a baseclass, so every class can be said to be a covariant of Object",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "The term, covariant return type, can include types such as interfaces and generic types",
        "The return type of an overriden method can be the same type as the parent method's declaration, but it can also be a subclass."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Covariant Return Type.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingExample/CovariantReturnType/CovariantReturnType.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridingexample-dog-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Dog (Method Overriding In Java)",
      "question": "What does this code print?",
      "code": "System.out.println(\"woof woof woof\");",
      "answer": [
        "woof woof woof"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingExample/Dog.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridingexample-dog-java_custom_0-why-does-germanshepherd-bark-override-do",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Dog (Method Overriding In Java)",
      "tags": [
        "interview"
      ],
      "question": "Why does GermanShepherd.bark() override Dog.bark()?",
      "modelAnswer": "It has the same method name and the identical empty parameter list in a child class.",
      "keyPoints": [
        "It has the same method name and the identical empty parameter list in a child class."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingExample/Dog.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridingexample-dog-java_custom_1-what-would-germanshepherd-bark-int-numbe",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Dog (Method Overriding In Java)",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What would GermanShepherd.bark(int number) be in this example?",
      "modelAnswer": "It would be an overload, not an override, because the parameter count differs from Dog.bark().",
      "keyPoints": [
        "It would be an overload, not an override, because the parameter count differs from Dog.bark()."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingExample/Dog.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridingexample-dog-java_custom_2-what-parameter-list-must-an-overriding-b",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Dog (Method Overriding In Java)",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What parameter list must an overriding bark method use here?",
      "modelAnswer": "It must use the identical empty parameter list: bark().",
      "keyPoints": [
        "It must use the identical empty parameter list: bark()."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingExample/Dog.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridingexample-dog-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Dog (Method Overriding In Java)",
      "question": "Which of the following are TRUE about Dog (Method Overriding In Java)? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "- GermanShepherd.bark() also has an empty parameter list, matching Dog.bark() exactly.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "- Dog.bark() has an empty parameter list, so callers pass no values and the method always prints one default bark.",
        "important: this is OVERRIDING because the child method keeps the same name and identical parameter list as the parent method."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Dog (Method Overriding In Java).",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingExample/Dog.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_0-what-is-method-overriding-in-java",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "What is method overriding in Java?",
      "modelAnswer": "Defining a method in a child class with the SAME name, SAME parameters, and compatible return type as a method in the parent class. The child's version replaces the parent's version when called on a child object — this is Runtime Polymorphism (Dynamic Method Dispatch). The JVM decides at RUNTIME which version to call based on the actual object type, not the reference type.",
      "keyPoints": [
        "Defining a method in a child class with the SAME name, SAME parameters, and compatible return type as a method in the parent class.",
        "The child's version replaces the parent's version when called on a child object — this is Runtime Polymorphism (Dynamic Method Dispatch).",
        "The JVM decides at RUNTIME which version to call based on the actual object type, not the reference type."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_1-what-is-the-difference-between-method-ov",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between method overloading and method overriding?",
      "modelAnswer": "Overloading: SAME class, SAME name, DIFFERENT parameters. Resolved at COMPILE TIME (static polymorphism). Overriding: CHILD class, SAME name, SAME parameters. Resolved at RUNTIME (dynamic polymorphism). Key interview distinction: overloading = compile-time, overriding = runtime. Overloading changes the method signature; overriding keeps it identical.",
      "keyPoints": [
        "Overloading: SAME class, SAME name, DIFFERENT parameters. Resolved at COMPILE TIME (static polymorphism).",
        "Overriding: CHILD class, SAME name, SAME parameters. Resolved at RUNTIME (dynamic polymorphism).",
        "Key interview distinction: overloading = compile-time, overriding = runtime. Overloading changes the method signature; overriding keeps it identical."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_2-what-are-the-rules-for-method-overriding",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "What are the rules for method overriding in Java?",
      "modelAnswer": "1) Same method name and same parameters (signature must match exactly). 2) Return type must be the same OR a subclass (covariant return type — Java 5+). 3) Access modifier cannot be MORE restrictive (public > protected > default > private). Can be less restrictive. 4) Only inherited (non-private, non-static, non-final) methods can be overridden. 5) Constructors and private methods CANNOT be overridden. 6) final methods CANNOT be overridden — compiler error. 7) static methods CANNOT be overridden — they are hidden (method hiding), not overridden.",
      "keyPoints": [
        "1) Same method name and same parameters (signature must match exactly).",
        "2) Return type must be the same OR a subclass (covariant return type — Java 5+).",
        "3) Access modifier cannot be MORE restrictive (public > protected > default > private). Can be less restrictive.",
        "4) Only inherited (non-private, non-static, non-final) methods can be overridden.",
        "5) Constructors and private methods CANNOT be overridden.",
        "6) final methods CANNOT be overridden — compiler error.",
        "7) static methods CANNOT be overridden — they are hidden (method hiding), not overridden."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_3-what-is-the-output-class-animal-void-spe",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "ocjp",
        "tricky",
        "interview"
      ],
      "question": "What is the output? class Animal { void speak(){ System.out.println(\"Animal\"); } } class Dog extends Animal { void speak(){ System.out.println(\"Dog\"); } } Animal a = new Dog(); a.speak();",
      "modelAnswer": "Output: Dog Even though the reference type is Animal, the ACTUAL object is Dog. Java uses dynamic dispatch — the JVM calls Dog's speak() at runtime. This is the core of runtime polymorphism. TRAP: beginners think Animal's speak() is called because the reference is Animal. Wrong — it's always the actual object's method.",
      "keyPoints": [
        "Output: Dog",
        "Even though the reference type is Animal, the ACTUAL object is Dog. Java uses dynamic dispatch — the JVM calls Dog's speak() at runtime. This is the core of runtime polymorphism.",
        "TRAP: beginners think Animal's speak() is called because the reference is Animal. Wrong — it's always the actual object's method."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_4-can-you-override-a-static-method-in-java",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "ocjp",
        "tricky",
        "interview"
      ],
      "question": "Can you override a static method in Java?",
      "modelAnswer": "NO. Static methods belong to the class, not the object. You can declare a static method with the same name in a subclass, but this is called METHOD HIDING, not overriding. With hiding: the method called depends on the REFERENCE type (compile-time). With overriding: it depends on the OBJECT type (runtime). This is the key difference. @Override annotation on a static method causes a COMPILE ERROR.",
      "keyPoints": [
        "NO. Static methods belong to the class, not the object. You can declare a static method with the same name in a subclass, but this is called METHOD HIDING, not overriding.",
        "With hiding: the method called depends on the REFERENCE type (compile-time). With overriding: it depends on the OBJECT type (runtime). This is the key difference.",
        "@Override annotation on a static method causes a COMPILE ERROR."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_5-what-is-the-output-class-parent-string-n",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "ocjp",
        "tricky",
        "interview"
      ],
      "question": "What is the output? class Parent { String name = \"Parent\"; void show() { System.out.println(\"Parent show\"); } } class Child extends Parent { String name = \"Child\"; void show() { System.out.println(\"Child show\"); } } Parent p = new Child(); System.out.println(p.name); p.show();",
      "modelAnswer": "Output: Parent (then) Child show Fields are resolved at COMPILE TIME based on reference type → p.name uses Parent's name field. Methods are resolved at RUNTIME based on object type → p.show() calls Child's show(). CRITICAL TRAP: fields are NOT polymorphic. Only methods are. Always remember: fields → compile-time (reference), methods → runtime (object).",
      "keyPoints": [
        "Output: Parent (then) Child show",
        "Fields are resolved at COMPILE TIME based on reference type → p.name uses Parent's name field.",
        "Methods are resolved at RUNTIME based on object type → p.show() calls Child's show().",
        "CRITICAL TRAP: fields are NOT polymorphic. Only methods are. Always remember: fields → compile-time (reference), methods → runtime (object)."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_6-what-is-covariant-return-type-in-method-",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "What is covariant return type in method overriding?",
      "modelAnswer": "Java 5+ allows the overriding method to return a subtype of the parent method's return type. Example: Parent returns Animal, Child can override to return Dog (Dog IS-A Animal). This is valid. Why useful: allows more specific return types without breaking the contract.",
      "keyPoints": [
        "Java 5+ allows the overriding method to return a subtype of the parent method's return type.",
        "Example: Parent returns Animal, Child can override to return Dog (Dog IS-A Animal). This is valid.",
        "Why useful: allows more specific return types without breaking the contract."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_7-what-is-the-purpose-of-the-override-anno",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "What is the purpose of the @Override annotation?",
      "modelAnswer": "It tells the compiler you INTEND to override a method. If the signatures don't match (e.g., you made a typo), the compiler gives an error instead of silently creating an overloaded method. Best practice: ALWAYS use @Override when overriding — it's a safety net against bugs. Without @Override: if you accidentally write the wrong signature, Java silently treats it as a new overloaded method. You'd think you overrode, but you didn't.",
      "keyPoints": [
        "It tells the compiler you INTEND to override a method. If the signatures don't match (e.g., you made a typo), the compiler gives an error instead of silently creating an overloaded method.",
        "Best practice: ALWAYS use @Override when overriding — it's a safety net against bugs.",
        "Without @Override: if you accidentally write the wrong signature, Java silently treats it as a new overloaded method. You'd think you overrode, but you didn't."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_8-can-a-private-method-be-overridden",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "Can a private method be overridden?",
      "modelAnswer": "NO. Private methods are not inherited — the child class cannot see them. If you define a method with the same name in the child class, it's a completely NEW method, not an override. @Override on a \"private method override\" will cause a compile error.",
      "keyPoints": [
        "NO. Private methods are not inherited — the child class cannot see them. If you define a method with the same name in the child class, it's a completely NEW method, not an override.",
        "@Override on a \"private method override\" will cause a compile error."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_9-what-happens-when-you-call-super-methodn",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "What happens when you call super.methodName() inside an overriding method?",
      "modelAnswer": "It explicitly calls the PARENT class's version of the method. This is used to extend (not replace) the parent's behaviour. Example: child's toString() calls super.toString() to include parent's fields in the output, then adds its own fields.",
      "keyPoints": [
        "It explicitly calls the PARENT class's version of the method. This is used to extend (not replace) the parent's behaviour.",
        "Example: child's toString() calls super.toString() to include parent's fields in the output, then adds its own fields."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_10-can-a-constructor-be-overridden",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "Can a constructor be overridden?",
      "modelAnswer": "NO. Constructors are not inherited — they cannot be overridden. Each class has its own constructor(s). Constructors can be OVERLOADED (same class, different parameters) but not overridden.",
      "keyPoints": [
        "NO. Constructors are not inherited — they cannot be overridden. Each class has its own constructor(s).",
        "Constructors can be OVERLOADED (same class, different parameters) but not overridden."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_11-for-a-child-method-to-override-a-parent-",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "For a child method to override a parent method, what must be true about its parameters?",
      "modelAnswer": "The parameter list must be identical: same count, same types, and same order.",
      "keyPoints": [
        "The parameter list must be identical: same count, same types, and same order."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_12-does-processpayment-int-amount-override-",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Does processPayment(int amount) override processPayment(double amount)?",
      "modelAnswer": "No. int and double are different parameter types, so this creates an overload instead of an override.",
      "keyPoints": [
        "No. int and double are different parameter types, so this creates an overload instead of an override."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_13-when-is-an-overloaded-method-selected-ve",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "When is an overloaded method selected versus an overridden method selected?",
      "modelAnswer": "Overloading is selected at compile time by the argument list; overriding is selected at runtime by the actual object type.",
      "keyPoints": [
        "Overloading is selected at compile time by the argument list; overriding is selected at runtime by the actual object type."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_14-can-override-catch-a-parameter-list-mism",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Can @Override catch a parameter-list mismatch?",
      "modelAnswer": "Yes. If the child method's parameters do not exactly match an inherited method, @Override causes a compile-time error.",
      "keyPoints": [
        "Yes. If the child method's parameters do not exactly match an inherited method, @Override causes a compile-time error."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_15-what-is-method-overriding-and-when-is-th",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "What is method overriding, and when is the choice of method made?",
      "options": [
        "Replacing a method in the same class so the old one no longer exists.",
        "Choosing the method at compile time, based on the reference type.",
        "Defining a method in a child class with the same name and parameters as the parent's, with the version chosen at runtime.",
        "Defining two methods with the same name but different parameters in one class."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "you cannot replace a method in the same class. Overriding happens in a child class.",
        "1": "compile-time resolution based on the reference type describes overloading.",
        "3": "same name and different parameters in one class is overloading."
      },
      "explanation": "Overriding is runtime polymorphism, also called dynamic method dispatch. The JVM looks at the actual object, not the declared type of the reference, when deciding which version to run.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_16-what-is-the-key-difference-between-overl",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "What is the key difference between overloading and overriding?",
      "options": [
        "Overloading is resolved at runtime, and overriding at compile time.",
        "Overloading is in the same class with different parameters and is resolved at compile time. Overriding is in a child class with the same parameters and is resolved at runtime.",
        "They are the same thing with different names.",
        "Overloading happens in a child class, and overriding happens in the same class."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "this is also reversed. Overloading is the compile-time one.",
        "2": "they differ in where they happen, in their parameters, and in when they are resolved.",
        "3": "this is reversed. Overloading stays within one class."
      },
      "explanation": "The distinction interviewers look for is which one the compiler decides and which one the JVM decides. Changing the parameters means a new overload; keeping them identical means an override.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_17-a-parent-method-is-declared-protected-wh",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "ocjp"
      ],
      "question": "A parent method is declared protected. Which access modifier in the overriding child method is invalid?",
      "options": [
        "private, because an override cannot be more restrictive than the method it overrides.",
        "public, because it is more accessible.",
        "protected, because it is identical.",
        "No modifier at all, because that gives package access."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "public is allowed, because it is less restrictive.",
        "2": "the same modifier is always allowed.",
        "3": "package-private is more restrictive than protected, so it is not allowed here either, but private is the clearly invalid one being asked for."
      },
      "explanation": "An override may widen access but never narrow it. protected can become public, but it cannot become private, because callers that could reach the parent's method would suddenly be locked out.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_18-what-is-printed",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "ocjp"
      ],
      "question": "What is printed?",
      "code": "class Animal { void speak() { System.out.println(\"Animal\"); } }\nclass Dog extends Animal { void speak() { System.out.println(\"Dog\"); } }\nAnimal a = new Dog();\na.speak();",
      "options": [
        "It does not compile, because the types do not match.",
        "Dog, because the JVM uses the actual object type at runtime.",
        "Animal, because the reference is declared as Animal.",
        "Both lines, Animal then Dog."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "the assignment is allowed, because Dog extends Animal.",
        "2": "this is the classic trap. The reference type does not choose the method at runtime.",
        "3": "only one version runs, not both."
      },
      "explanation": "This is the heart of runtime polymorphism. The reference type only decides what you are allowed to call; the object type decides which version actually runs. Assigning a Dog to an Animal reference is legal because a Dog is an Animal.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_19-which-methods-can-not-be-overridden",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "ocjp"
      ],
      "question": "Which methods can NOT be overridden?",
      "options": [
        "static methods, private methods, final methods and constructors.",
        "Any method that returns void.",
        "Any method that takes parameters.",
        "Only final methods."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "a void return type has no bearing on whether a method can be overridden.",
        "2": "overridden methods have parameters all the time. The signature simply has to match the parent's.",
        "3": "final is only one of several cases."
      },
      "explanation": "static methods are hidden rather than overridden, private methods are not inherited at all, final methods are locked down by the compiler, and constructors are not inherited methods. A method must be inheritable before it can be overridden.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_20-why-is-override-recommended-even-though-",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "Why is @Override recommended, even though it is optional?",
      "options": [
        "It marks the method as final.",
        "It is required for runtime polymorphism to work.",
        "It makes the compiler flag the method if it does not actually override anything, which catches a mistyped signature.",
        "It makes the method run faster."
      ],
      "answer": 2,
      "whyByOption": {
        "0": "final does the opposite, preventing further overrides.",
        "1": "polymorphism works without it. The annotation is a safety check.",
        "3": "the annotation has no effect on performance."
      },
      "explanation": "The annotation is a promise to the compiler. If the signature does not match a parent method, the compiler reports an error instead of silently creating a new method that never gets called.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_custom_21-what-is-a-covariant-return-type-in-an-ov",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "What is a covariant return type in an overriding method?",
      "options": [
        "The overriding method may return a subclass of the return type declared by the parent.",
        "The overriding method must change the return type.",
        "The return type must always match exactly, with no exceptions.",
        "The overriding method may return a supertype of the parent's return type."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "the return type may stay exactly the same. Changing it is optional.",
        "2": "an exact match is always allowed, but it is not the only option.",
        "3": "widening to a supertype would break callers who expect the narrower type."
      },
      "explanation": "Covariance lets an override narrow the return type, which is more specific and therefore safe. If the parent returns Animal, the child may return Dog, because a Dog is an Animal.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-14-method-overriding-in-java-methodoverridinginjava-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Overriding In Java",
      "question": "Which of the following are TRUE about Method Overriding In Java? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Method overriding is also known as Runtime Polymorphism or Dynamic Method Dispatch because the method that is going to be called is decided at runtime by the Java virtual machine.",
        "Method overriding, means defining a method in a child class that already exists in the parent class, with the same signature (In other words, the same name, and same parameters).",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "By extending the parent class, the child class gets all the methods defined in the parent class. Those methods are also known as derived methods."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Method Overriding In Java.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_14_Method_Overriding_In_Java/MethodOverridingInJava.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-15-method-overloading-vs-method-overriding-methodoverloadingvsmethodoverridingdifference-java_custom_0-what-parameter-list-changes-can-create-m",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Over Loading Vs Method Overriding Difference",
      "tags": [
        "interview"
      ],
      "question": "What parameter-list changes can create method overloading?",
      "modelAnswer": "Different parameter count, different parameter types, or different parameter order can create overloads.",
      "keyPoints": [
        "Different parameter count, different parameter types, or different parameter order can create overloads."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_15_Method_Overloading_Vs_Method_Overriding/MethodOverLoadingVsMethodOverridingDifference.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-15-method-overloading-vs-method-overriding-methodoverloadingvsmethodoverridingdifference-java_custom_1-can-return-type-alone-distinguish-overlo",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Over Loading Vs Method Overriding Difference",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "Can return type alone distinguish overloaded methods?",
      "modelAnswer": "No. The parameter list must differ; return type alone is not enough.",
      "keyPoints": [
        "No. The parameter list must differ; return type alone is not enough."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_15_Method_Overloading_Vs_Method_Overriding/MethodOverLoadingVsMethodOverridingDifference.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-15-method-overloading-vs-method-overriding-methodoverloadingvsmethodoverridingdifference-java_custom_2-what-must-happen-to-the-parameter-list-d",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Over Loading Vs Method Overriding Difference",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What must happen to the parameter list during method overriding?",
      "modelAnswer": "It must stay identical to the parent method's parameter list: same count, types, and order.",
      "keyPoints": [
        "It must stay identical to the parent method's parameter list: same count, types, and order."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_15_Method_Overloading_Vs_Method_Overriding/MethodOverLoadingVsMethodOverridingDifference.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-15-method-overloading-vs-method-overriding-methodoverloadingvsmethodoverridingdifference-java_custom_3-how-do-parameter-lists-affect-compile-ti",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Over Loading Vs Method Overriding Difference",
      "tags": [
        "interview"
      ],
      "question": "How do parameter lists affect compile-time versus runtime polymorphism?",
      "modelAnswer": "Overloading uses parameter lists for compile-time selection; overriding uses an identical parameter list and runtime dispatch by actual object type.",
      "keyPoints": [
        "Overloading uses parameter lists for compile-time selection; overriding uses an identical parameter list and runtime dispatch by actual object type."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_15_Method_Overloading_Vs_Method_Overriding/MethodOverLoadingVsMethodOverridingDifference.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-15-method-overloading-vs-method-overriding-methodoverloadingvsmethodoverridingdifference-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Method Over Loading Vs Method Overriding Difference",
      "question": "Which of the following are TRUE about Method Over Loading Vs Method Overriding Difference? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "- Different parameter COUNT means examples like area(int side) versus area(int length, int width).",
        "- Method overloading reuses one method name with different parameter lists, so callers choose values by the operation shape they need.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "- Different parameter TYPE means examples like print(int value) versus print(String value)."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Method Over Loading Vs Method Overriding Difference.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_15_Method_Overloading_Vs_Method_Overriding/MethodOverLoadingVsMethodOverridingDifference.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-13-oop-concepts_src-chapter-13-oopsconcepts-sub-chapter-16-deepproblems-shapehierarchydeepproblem-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "Shape Hierarchy Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Shape report using polymorphism:\");",
      "answer": [
        "Shape report using polymorphism:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_16_DeepProblems/ShapeHierarchyDeepProblem.java",
      "tags": [
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-13-oop-concepts-polymorphism-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "class Animal {\n  String type = \"Animal\";\n  void speak() { System.out.println(\"Animal\"); }\n}\nclass Dog extends Animal {\n  String type = \"Dog\";\n  void speak() { System.out.println(\"Dog\"); }\n}\nAnimal a = new Dog();\nSystem.out.println(a.type);\na.speak();",
      "answer": [
        "Animal\nDog"
      ],
      "explanation": "Method calls are resolved at runtime (dynamic dispatch) → a.speak() calls Dog.speak(). But field access is resolved at compile time (static binding) → a.type uses Animal's type. This is a critical OCJP polymorphism trap.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-13-oop-concepts-constructor-chain-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "class A {\n  A() { System.out.println(\"A\"); }\n}\nclass B extends A {\n  B() { System.out.println(\"B\"); }\n}\nclass C extends B {\n  C() { System.out.println(\"C\"); }\n}\nnew C();",
      "answer": [
        "A\nB\nC"
      ],
      "explanation": "Constructor chaining: the JVM always calls super() implicitly at the top of each constructor. So A() runs, then B(), then C(). Output is A, B, C — top to bottom in the hierarchy.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_4_Constructors/Sub_Chapter_1_ConstructorConcept/ConstructorConcept.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-13-oop-concepts-override-overload-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "OCJP Tricky",
      "question": "Which is true about method overriding in Java? (OCJP)",
      "options": [
        "Overriding is resolved at compile time based on the reference type",
        "Overriding is resolved at runtime based on the actual object type (dynamic dispatch)",
        "A private method can be overridden in a subclass",
        "A static method can be overridden to behave polymorphically"
      ],
      "answer": 1,
      "explanation": "Overriding is resolved at RUNTIME — the JVM looks at the actual object, not the reference type. Private methods are not inherited and cannot be overridden. Static methods are hidden, not overridden.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_15_Method_Overloading_Vs_Method_Overriding/MethodOverLoadingVsMethodOverridingDifference.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-13-oop-concepts-final-keyword-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "OCJP Tricky",
      "question": "What does marking a method as final mean in Java? (OCJP)",
      "options": [
        "The method cannot be called more than once",
        "The method cannot be overridden by any subclass",
        "The method must return a non-null value",
        "The method is automatically made static"
      ],
      "answer": 1,
      "explanation": "final on a method means no subclass can override it. final on a class means no class can extend it. final on a variable means it can only be assigned once.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-13-oop-concepts-static-hiding-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "OCJP Tricky",
      "question": "What happens when you define a static method with the same name in a subclass? (OCJP)",
      "options": [
        "It overrides the parent static method — dynamic dispatch applies",
        "It hides the parent static method — method called depends on reference type, not object type",
        "It causes a compile-time error",
        "It calls both parent and child static methods"
      ],
      "answer": 1,
      "explanation": "Static methods are HIDDEN, not overridden. With hiding, which method is called depends on the REFERENCE type at compile time. With overriding, it depends on the OBJECT type at runtime. @Override on a static method causes a compile error.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_1_Classes_And_Inheritance/ClassesAndInheritance.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-13-oop-concepts-covariant-return-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "OCJP Tricky",
      "question": "Which return type change is VALID when overriding a method that returns Animal? (OCJP)",
      "options": [
        "Return Object (supertype of Animal)",
        "Return Dog (subtype of Animal — covariant return)",
        "Return String (unrelated type)",
        "Return void"
      ],
      "answer": 1,
      "explanation": "Covariant return type (Java 5+): the overriding method can return a subtype of the declared return type. Dog IS-A Animal, so returning Dog is valid. Returning a supertype (Object) or unrelated type is NOT valid.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_11_Inheritance/AnimalInheritanceExample/Animal.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-13-oop-concepts-access-modifier-override-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 13: OOP Concepts",
      "topic": "OCJP Tricky",
      "question": "Parent has: protected void show(). Which access modifier is INVALID in the overriding method? (OCJP)",
      "options": [
        "public void show() — more accessible, allowed",
        "protected void show() — same, allowed",
        "private void show() — more restrictive, NOT allowed",
        "default (package) void show() — less accessible than protected in some cases"
      ],
      "answer": 2,
      "explanation": "Overriding cannot make the method MORE restrictive. protected → private is not allowed (private is more restrictive). protected → public is fine (more accessible). This is rule 3 of method overriding.",
      "topicPath": "src/Chapter_13_OOPSConcepts/Sub_Chapter_2_Getters_Encapsulation_Object_Access/Car.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky"
      ]
    }
  ],
  "Chapter 14: Strings": [
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-1-text-block-and-advanced-formatting-textblockandadvancedoutputformatting-java_custom_0-in-system-out-printf-age-d-age-what-does",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "interview"
      ],
      "question": "In System.out.printf(\"Age = %d\", age), what does the first parameter control?",
      "modelAnswer": "The first parameter is the format string; it controls the literal text and placeholders that later arguments fill.",
      "keyPoints": [
        "The first parameter is the format string; it controls the literal text and placeholders that later arguments fill."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_1_Text_Block_And_Advanced_Formatting/TextBlockAndAdvancedOutputFormatting.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-1-text-block-and-advanced-formatting-textblockandadvancedoutputformatting-java_custom_1-what-happens-if-printf-uses-f-but-the-ma",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What happens if printf uses \"%f\" but the matching argument is an int?",
      "modelAnswer": "It throws IllegalFormatConversionException because %f expects a floating-point value.",
      "keyPoints": [
        "It throws IllegalFormatConversionException because %f expects a floating-point value."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_1_Text_Block_And_Advanced_Formatting/TextBlockAndAdvancedOutputFormatting.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-1-text-block-and-advanced-formatting-textblockandadvancedoutputformatting-java_custom_2-in-6d-what-does-the-6-parameter-like-val",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "interview"
      ],
      "question": "In \"%6d\", what does the 6 parameter-like value mean?",
      "modelAnswer": "It is the minimum output width, used to pad the integer for alignment if the printed value is shorter.",
      "keyPoints": [
        "It is the minimum output width, used to pad the integer for alignment if the printed value is shorter."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_1_Text_Block_And_Advanced_Formatting/TextBlockAndAdvancedOutputFormatting.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-1-text-block-and-advanced-formatting-textblockandadvancedoutputformatting-java_custom_3-how-do-string-format-hi-s-name-parameter",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "interview"
      ],
      "question": "How do String.format(\"Hi %s\", name) parameters differ from System.out.printf(\"Hi %s\", name)?",
      "modelAnswer": "They use the same format and argument rules, but String.format returns the formatted String while printf prints it.",
      "keyPoints": [
        "They use the same format and argument rules, but String.format returns the formatted String while printf prints it."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_1_Text_Block_And_Advanced_Formatting/TextBlockAndAdvancedOutputFormatting.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-1-text-block-and-advanced-formatting-textblockandadvancedoutputformatting-java_custom_4-what-is-a-text-block-in-java-and-which-j",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "interview"
      ],
      "question": "What is a text block in Java, and which Java version introduced it?",
      "modelAnswer": "A text block is a multi-line String literal written with triple double quotes. It appeared as a preview in Java 13 and became a standard feature in Java 15.",
      "keyPoints": [
        "A text block is a multi-line String literal written with triple double quotes.",
        "It appeared as a preview in Java 13 and became a standard feature in Java 15."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_1_Text_Block_And_Advanced_Formatting/TextBlockAndAdvancedOutputFormatting.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-1-text-block-and-advanced-formatting-textblockandadvancedoutputformatting-java_custom_5-what-do-common-printf-format-specifiers-",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "interview"
      ],
      "question": "What do common printf format specifiers like %d, %s, %f, and %n mean?",
      "modelAnswer": "%d formats integers, %s formats strings, %f formats floating-point numbers, and %n inserts a platform-safe newline. These specifiers are used by printf(), format(), and related formatting APIs.",
      "keyPoints": [
        "%d formats integers, %s formats strings, %f formats floating-point numbers, and %n inserts a platform-safe newline.",
        "These specifiers are used by printf(), format(), and related formatting APIs."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_1_Text_Block_And_Advanced_Formatting/TextBlockAndAdvancedOutputFormatting.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-1-text-block-and-advanced-formatting-textblockandadvancedoutputformatting-java_custom_6-what-is-the-difference-between-string-fo",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between String.format() and .formatted()?",
      "modelAnswer": "String.format() is a static utility method, while .formatted() is an instance method called on a format string. Both produce a formatted String instead of printing directly to the console.",
      "keyPoints": [
        "String.format() is a static utility method, while .formatted() is an instance method called on a format string.",
        "Both produce a formatted String instead of printing directly to the console."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_1_Text_Block_And_Advanced_Formatting/TextBlockAndAdvancedOutputFormatting.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-1-text-block-and-advanced-formatting-textblockandadvancedoutputformatting-java_custom_7-why-are-text-blocks-useful-compared-with",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "interview"
      ],
      "question": "Why are text blocks useful compared with ordinary string literals?",
      "modelAnswer": "They make multi-line text easier to read and reduce the need for escape sequences and string concatenation. They are especially useful for JSON, SQL, XML, or formatted console output templates.",
      "keyPoints": [
        "They make multi-line text easier to read and reduce the need for escape sequences and string concatenation.",
        "They are especially useful for JSON, SQL, XML, or formatted console output templates."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_1_Text_Block_And_Advanced_Formatting/TextBlockAndAdvancedOutputFormatting.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-1-text-block-and-advanced-formatting-textblockandadvancedoutputformatting-java_custom_8-what-happens-with-system-out-printf-f-10",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What happens with: System.out.printf(\"%f\", 10);?",
      "modelAnswer": "It throws IllegalFormatConversionException because %f expects a floating-point argument, not an int. Use 10.0 or a %d specifier instead.",
      "keyPoints": [
        "It throws IllegalFormatConversionException because %f expects a floating-point argument, not an int.",
        "Use 10.0 or a %d specifier instead."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_1_Text_Block_And_Advanced_Formatting/TextBlockAndAdvancedOutputFormatting.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-1-text-block-and-advanced-formatting-textblockandadvancedoutputformatting-java_custom_9-in-a-text-block-like-string-s-n-hi-n-wha",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "In a text block like String s = \"\"\"\\n    hi\\n    \"\"\";, what controls the incidental indentation?",
      "modelAnswer": "The position of the closing triple quotes helps determine how much leading whitespace is stripped. Moving the closing delimiter changes the resulting indentation in the String.",
      "keyPoints": [
        "The position of the closing triple quotes helps determine how much leading whitespace is stripped.",
        "Moving the closing delimiter changes the resulting indentation in the String."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_1_Text_Block_And_Advanced_Formatting/TextBlockAndAdvancedOutputFormatting.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-1-text-block-and-advanced-formatting-textblockandadvancedoutputformatting-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "question": "Which of the following are TRUE about Text Block And Advanced Output Formatting? Select all that apply.",
      "options": [
        "- In printf(\"%d\", age), %d requires an integral argument; using %f with an int is a trap and throws IllegalFormatConversionException.",
        "- In printf(\"%6d\", i), 6 is the minimum field width; choose it to align columns, knowing larger values are not truncated.",
        "String -> immutable; each method call returns a NEW String instance.",
        "String is a sequence of characters, which means its characters are ordered and indexed.",
        "- In printf(\"%.2f\", value), .2 is the precision for floating-point output; choose it based on required decimal places, such as money or measurements."
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Text Block And Advanced Output Formatting.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_1_Text_Block_And_Advanced_Formatting/TextBlockAndAdvancedOutputFormatting.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-2-string-methods-and-best-practices-stringmethodandbestpractices-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Method And Best Practices",
      "question": "What does this code print?",
      "code": "System.out.println(\"=== 1. STRING INSPECTION METHODS ===\");",
      "answer": [
        "=== 1. STRING INSPECTION METHODS ==="
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_2_String_Methods_And_Best_Practices/StringMethodAndBestPractices.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-2-string-methods-and-best-practices-stringmethodandbestpractices-java_custom_0-what-range-is-valid-for-the-index-parame",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Method And Best Practices",
      "tags": [
        "interview"
      ],
      "question": "What range is valid for the index parameter in text.charAt(index)?",
      "modelAnswer": "The valid range is 0 to length() - 1. Any index outside that range throws StringIndexOutOfBoundsException.",
      "keyPoints": [
        "The valid range is 0 to length() - 1. Any index outside that range throws StringIndexOutOfBoundsException."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_2_String_Methods_And_Best_Practices/StringMethodAndBestPractices.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-2-string-methods-and-best-practices-stringmethodandbestpractices-java_custom_1-in-text-indexof-l-3-what-does-the-3-para",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Method And Best Practices",
      "tags": [
        "interview"
      ],
      "question": "In text.indexOf(\"l\", 3), what does the 3 parameter do?",
      "modelAnswer": "It tells indexOf to start the search at index 3, which is useful to skip the earlier matches.",
      "keyPoints": [
        "It tells indexOf to start the search at index 3, which is useful to skip the earlier matches."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_2_String_Methods_And_Best_Practices/StringMethodAndBestPractices.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-2-string-methods-and-best-practices-stringmethodandbestpractices-java_custom_2-in-substring-3-5-which-index-is-included",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Method And Best Practices",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "In substring(3, 5), which index is included and which one is excluded?",
      "modelAnswer": "The index 3 (beginIndex) is included and the index 5 (endIndex) is excluded, so the result has 2 characters.",
      "keyPoints": [
        "The index 3 (beginIndex) is included and the index 5 (endIndex) is excluded, so the result has 2 characters."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_2_String_Methods_And_Best_Practices/StringMethodAndBestPractices.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-2-string-methods-and-best-practices-stringmethodandbestpractices-java_custom_3-what-does-hello-substring-5-return",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Method And Best Practices",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What does \"Hello\".substring(5) return?",
      "modelAnswer": "It returns \"\" (an empty String). An index equal to length() is valid, so no exception is thrown.",
      "keyPoints": [
        "It returns \"\" (an empty String). An index equal to length() is valid, so no exception is thrown."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_2_String_Methods_And_Best_Practices/StringMethodAndBestPractices.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-2-string-methods-and-best-practices-stringmethodandbestpractices-java_custom_4-does-abc-substring-0-0-throw-an-exceptio",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Method And Best Practices",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Does \"abc\".substring(0, 0) throw an exception?",
      "modelAnswer": "It does not throw an exception. It returns \"\" (an empty String), because beginIndex and endIndex are the same, so the range has 0 length.",
      "keyPoints": [
        "It does not throw an exception. It returns \"\" (an empty String), because beginIndex and endIndex are the same, so the range has 0 length."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_2_String_Methods_And_Best_Practices/StringMethodAndBestPractices.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-2-string-methods-and-best-practices-stringmethodandbestpractices-java_custom_5-what-is-the-output-of-string-s-123-456-s",
      "difficulty": "hard",
      "chapter": "Chapter 14: Strings",
      "topic": "String Method And Best Practices",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What is the output of: String s = \"123.456\"; s.replaceAll(\".\", \"X\")?",
      "modelAnswer": "The output is XXXXXXX, 7 X characters, because \".\" in a Regular Expression matches ANY single character. To replace only the dots, use replaceAll(\"\\\\.\", \"X\") or replace(\".\", \"X\").",
      "keyPoints": [
        "The output is XXXXXXX, 7 X characters, because \".\" in a Regular Expression matches ANY single character. To replace only the dots, use replaceAll(\"\\\\.\", \"X\") or replace(\".\", \"X\")."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_2_String_Methods_And_Best_Practices/StringMethodAndBestPractices.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-2-string-methods-and-best-practices-stringmethodandbestpractices-java_custom_6-what-happens-when-abc-repeat-1-is-called",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Method And Best Practices",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What happens when \"ABC\".repeat(-1) is called?",
      "modelAnswer": "It throws IllegalArgumentException, because the repeat count cannot be negative.",
      "keyPoints": [
        "It throws IllegalArgumentException, because the repeat count cannot be negative."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_2_String_Methods_And_Best_Practices/StringMethodAndBestPractices.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-2-string-methods-and-best-practices-stringmethodandbestpractices-java_custom_7-what-happens-when-hello-concat-null-is-c",
      "difficulty": "hard",
      "chapter": "Chapter 14: Strings",
      "topic": "String Method And Best Practices",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What happens when \"hello\".concat(null) is called?",
      "modelAnswer": "It throws NullPointerException, because concat() does not accept null. In contrast, \"hello\" + null gives \"hellonull\", because the + operator converts null to the text \"null\".",
      "keyPoints": [
        "It throws NullPointerException, because concat() does not accept null. In contrast, \"hello\" + null gives \"hellonull\", because the + operator converts null to the text \"null\"."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_2_String_Methods_And_Best_Practices/StringMethodAndBestPractices.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-2-string-methods-and-best-practices-stringmethodandbestpractices-java_custom_8-what-is-the-difference-between-isempty-a",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Method And Best Practices",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between isEmpty() and isBlank()?",
      "modelAnswer": "isEmpty() returns true only when the length is 0. isBlank() returns true when the length is 0 or when the String has only whitespace characters. Use isBlank() for user input validation.",
      "keyPoints": [
        "isEmpty() returns true only when the length is 0. isBlank() returns true when the length is 0 or when the String has only whitespace characters. Use isBlank() for user input validation."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_2_String_Methods_And_Best_Practices/StringMethodAndBestPractices.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-2-string-methods-and-best-practices-stringmethodandbestpractices-java_custom_9-how-does-strip-differ-from-trim",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Method And Best Practices",
      "tags": [
        "interview"
      ],
      "question": "How does strip() differ from trim()?",
      "modelAnswer": "trim() removes only ASCII whitespace, which means characters with a codepoint of 32 or less. strip() uses Character.isWhitespace(), so it also removes Unicode whitespace such as \\u2000. Prefer strip() in JDK 11 or above.",
      "keyPoints": [
        "trim() removes only ASCII whitespace, which means characters with a codepoint of 32 or less. strip() uses Character.isWhitespace(), so it also removes Unicode whitespace such as \\u2000. Prefer strip() in JDK 11 or above."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_2_String_Methods_And_Best_Practices/StringMethodAndBestPractices.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-2-string-methods-and-best-practices-stringmethodandbestpractices-java_custom_10-what-is-the-difference-between-equals-an",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Method And Best Practices",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between equals() and contentEquals()?",
      "modelAnswer": "equals() returns true only when the other object is also a String. contentEquals() accepts any CharSequence, such as StringBuilder or StringBuffer, so it avoids calling toString() and creating a temporary String.",
      "keyPoints": [
        "equals() returns true only when the other object is also a String. contentEquals() accepts any CharSequence, such as StringBuilder or StringBuffer, so it avoids calling toString() and creating a temporary String."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_2_String_Methods_And_Best_Practices/StringMethodAndBestPractices.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-2-string-methods-and-best-practices-stringmethodandbestpractices-java_custom_11-when-should-replace-be-used-instead-of-r",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Method And Best Practices",
      "tags": [
        "interview"
      ],
      "question": "When should replace() be used instead of replaceAll()?",
      "modelAnswer": "Use replace() when the target is a literal value, because it does not compile a Regular Expression and is faster. Use replaceAll() only when the target is really meant to be a pattern.",
      "keyPoints": [
        "Use replace() when the target is a literal value, because it does not compile a Regular Expression and is faster. Use replaceAll() only when the target is really meant to be a pattern."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_2_String_Methods_And_Best_Practices/StringMethodAndBestPractices.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-2-string-methods-and-best-practices-stringmethodandbestpractices-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Method And Best Practices",
      "question": "Which of the following are TRUE about String Method And Best Practices? Select all that apply.",
      "options": [
        "- In printf(\"%d\", age), %d requires an integral argument; using %f with an int is a trap and throws IllegalFormatConversionException.",
        "String -> immutable; each method call returns a NEW String instance.",
        "1) String Inspection Methods: These give information about the String, such as its length or the position of a character. For example: length(), isEmpty(), isBlank(), charAt(), indexOf(), lastIndexOf().",
        "String indexing is 0 - based, so the first character is at index 0 and the last one is at length() - 1.",
        "String is a sequence of characters, which means its characters are ordered and indexed."
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for String Method And Best Practices.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_2_String_Methods_And_Best_Practices/StringMethodAndBestPractices.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_0-what-is-the-core-difference-between-stri",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "interview"
      ],
      "question": "What is the core difference between String and StringBuilder?",
      "modelAnswer": "String is immutable, so every modification creates a new object. StringBuilder is mutable and edits its internal buffer in place, which is far more efficient for repeated changes.",
      "keyPoints": [
        "String is immutable, so every modification creates a new object.",
        "StringBuilder is mutable and edits its internal buffer in place, which is far more efficient for repeated changes."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_1-when-should-you-prefer-stringbuilder-ove",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "interview"
      ],
      "question": "When should you prefer StringBuilder over String concatenation?",
      "modelAnswer": "When building text incrementally, especially inside loops. String + in a loop creates a new object each iteration (O(n^2) work); StringBuilder appends in place (O(n)).",
      "keyPoints": [
        "When building text incrementally, especially inside loops.",
        "String + in a loop creates a new object each iteration (O(n^2) work); StringBuilder appends in place (O(n))."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_2-what-is-the-difference-between-stringbui",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between StringBuilder and StringBuffer?",
      "modelAnswer": "StringBuffer is synchronized (thread-safe) but slower; StringBuilder is not synchronized but faster. Use StringBuilder by default in single-threaded code; use StringBuffer only when multiple threads share the buffer.",
      "keyPoints": [
        "StringBuffer is synchronized (thread-safe) but slower; StringBuilder is not synchronized but faster.",
        "Use StringBuilder by default in single-threaded code; use StringBuffer only when multiple threads share the buffer."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_3-why-can-you-chain-calls-like-sb-append-a",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "interview"
      ],
      "question": "Why can you chain calls like sb.append(\"a\").append(\"b\")?",
      "modelAnswer": "Because append() returns the same StringBuilder instance, enabling a fluent builder-style API.",
      "keyPoints": [
        "Because append() returns the same StringBuilder instance, enabling a fluent builder-style API."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_4-what-does-new-stringbuilder-20-create",
      "difficulty": "hard",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What does new StringBuilder(20) create?",
      "modelAnswer": "An EMPTY StringBuilder with an initial capacity of 20 characters, NOT the text \"20\". length() is 0; capacity() is 20. An int argument sets capacity, not content.",
      "keyPoints": [
        "An EMPTY StringBuilder with an initial capacity of 20 characters, NOT the text \"20\".",
        "length() is 0; capacity() is 20. An int argument sets capacity, not content."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_5-what-does-sb1-equals-sb2-compare-for-two",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What does sb1.equals(sb2) compare for two StringBuilder objects with identical text?",
      "modelAnswer": "It returns false unless they are the same reference, because StringBuilder does not override equals(). Compare content with sb1.toString().equals(sb2.toString()) instead.",
      "keyPoints": [
        "It returns false unless they are the same reference, because StringBuilder does not override equals().",
        "Compare content with sb1.toString().equals(sb2.toString()) instead."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_6-what-is-the-default-capacity-of-new-stri",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What is the default capacity of new StringBuilder() and how does it grow?",
      "modelAnswer": "The default capacity is 16 characters. When exceeded, the buffer grows to (oldCapacity * 2) + 2, so from 16 the sequence is 16 -> 34 -> 70.",
      "keyPoints": [
        "The default capacity is 16 characters.",
        "When exceeded, the buffer grows to (oldCapacity * 2) + 2, so from 16 the sequence is 16 -> 34 -> 70."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_7-what-is-the-capacity-of-new-stringbuilde",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "What is the capacity of new StringBuilder(\"Hello\")?",
      "modelAnswer": "21 -- the String constructor uses 16 + the length of the initial text (16 + 5). It is NOT 16; only new StringBuilder() with no argument gives capacity 16.",
      "keyPoints": [
        "21 -- the String constructor uses 16 + the length of the initial text (16 + 5).",
        "It is NOT 16; only new StringBuilder() with no argument gives capacity 16."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_8-for-new-stringbuilder-then-append-a-repe",
      "difficulty": "hard",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "For new StringBuilder() then append(\"a\".repeat(17)), what are length() and capacity()?",
      "modelAnswer": "length() is 17 (the 17 appended characters) and capacity() is 34. The buffer starts at the default capacity 16; appending 17 chars overflows it, so it grows to (16 * 2) + 2 = 34.",
      "keyPoints": [
        "length() is 17 (the 17 appended characters) and capacity() is 34.",
        "The buffer starts at the default capacity 16; appending 17 chars overflows it, so it grows to (16 * 2) + 2 = 34."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_9-for-new-stringbuilder-32-then-append-a-r",
      "difficulty": "hard",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "For new StringBuilder(32) then append(\"a\".repeat(17)), what are length() and capacity()?",
      "modelAnswer": "length() is 17 and capacity() stays 32. 17 fits inside the pre-allocated capacity 32, so no growth happens; capacity only changes when the content exceeds it.",
      "keyPoints": [
        "length() is 17 and capacity() stays 32.",
        "17 fits inside the pre-allocated capacity 32, so no growth happens; capacity only changes when the content exceeds it."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_10-how-do-you-repeat-text-with-a-stringbuil",
      "difficulty": "hard",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "How do you repeat text with a StringBuilder on Java 17, and does StringBuilder have a repeat() method?",
      "modelAnswer": "On Java 17 StringBuilder has no repeat() method (that arrived in Java 21), so you append inside a loop. For a plain repeated String use String.repeat(int) from Java 11, e.g. \"ab\".repeat(3) returns \"ababab\".",
      "keyPoints": [
        "On Java 17 StringBuilder has no repeat() method (that arrived in Java 21), so you append inside a loop.",
        "For a plain repeated String use String.repeat(int) from Java 11, e.g. \"ab\".repeat(3) returns \"ababab\"."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_11-for-sb-new-stringbuilder-hello-what-does",
      "difficulty": "hard",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "For sb = new StringBuilder(\"Hello\"), what does sb.delete(1, 3) produce?",
      "modelAnswer": "\"Hlo\" -- delete uses a half-open range [start, end), so it removes indexes 1 and 2 ('e' and 'l'), not index 3. The end index is EXCLUSIVE; delete(1, 3) removes 2 characters, not 3.",
      "keyPoints": [
        "\"Hlo\" -- delete uses a half-open range [start, end), so it removes indexes 1 and 2 ('e' and 'l'), not index 3.",
        "The end index is EXCLUSIVE; delete(1, 3) removes 2 characters, not 3."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_12-what-is-the-difference-between-delete-st",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between delete(start, end) and deleteCharAt(index)?",
      "modelAnswer": "delete(start, end) removes a RANGE of characters in [start, end) (end exclusive). deleteCharAt(index) removes exactly ONE character at the given index.",
      "keyPoints": [
        "delete(start, end) removes a RANGE of characters in [start, end) (end exclusive).",
        "deleteCharAt(index) removes exactly ONE character at the given index."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_13-what-does-setlength-do-when-the-new-leng",
      "difficulty": "hard",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What does setLength do when the new length is LARGER than the current length?",
      "modelAnswer": "It pads the extra positions with the null character '\\u0000', it does not pad with spaces. If the new length is smaller, it truncates. setLength(0) is a common way to clear and reuse a StringBuilder.",
      "keyPoints": [
        "It pads the extra positions with the null character '\\u0000', it does not pad with spaces.",
        "If the new length is smaller, it truncates. setLength(0) is a common way to clear and reuse a StringBuilder."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_14-does-insert-offset-x-allow-offset-to-equ",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "ocjp",
        "interview"
      ],
      "question": "Does insert(offset, x) allow offset to equal the current length()?",
      "modelAnswer": "Yes -- inserting at offset == length() appends at the end. Any offset outside 0..length() throws StringIndexOutOfBoundsException.",
      "keyPoints": [
        "Yes -- inserting at offset == length() appends at the end. Any offset outside 0..length() throws StringIndexOutOfBoundsException."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged OCJP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_15-in-stringbuilder-methods-what-is-the-off",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "interview"
      ],
      "question": "In StringBuilder methods, what is the \"offset\" parameter and how do you choose its value?",
      "modelAnswer": "offset is the 0-based index where insertion happens; the existing character at that index and everything after shift right. Use offset = 0 to insert at the start and offset = length() to append at the end; valid range is 0..length().",
      "keyPoints": [
        "offset is the 0-based index where insertion happens; the existing character at that index and everything after shift right.",
        "Use offset = 0 to insert at the start and offset = length() to append at the end; valid range is 0..length()."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_16-in-delete-start-end-what-do-start-and-en",
      "difficulty": "hard",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "In delete(start, end), what do start and end mean and how many characters are removed?",
      "modelAnswer": "start is the inclusive begin index and end is the exclusive stop index, so characters at start..end-1 are removed. The number of characters removed is (end - start), which is why delete(2, 5) removes 3 characters.",
      "keyPoints": [
        "start is the inclusive begin index and end is the exclusive stop index, so characters at start..end-1 are removed.",
        "The number of characters removed is (end - start), which is why delete(2, 5) removes 3 characters."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW TRAP.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "interview",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_17-what-does-the-int-argument-to-the-constr",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "interview"
      ],
      "question": "What does the int argument to the constructor new StringBuilder(int) represent?",
      "modelAnswer": "It sets the initial CAPACITY (buffer size), not the length or content. length() stays 0. Choose it when you can estimate the final size, to avoid repeated buffer re-allocation as the builder grows.",
      "keyPoints": [
        "It sets the initial CAPACITY (buffer size), not the length or content. length() stays 0.",
        "Choose it when you can estimate the final size, to avoid repeated buffer re-allocation as the builder grows."
      ],
      "explanation": "This question was authored directly in the source file with the @quiz marker, tagged INTERVIEW.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_18-what-is-the-key-difference-between-strin",
      "difficulty": "easy",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "interview"
      ],
      "question": "What is the key difference between String and StringBuilder?",
      "options": [
        "String is immutable, so every change creates a new object, while StringBuilder modifies its own character buffer in place.",
        "Both are immutable, and StringBuilder is only faster to type.",
        "StringBuilder is immutable, while String is mutable.",
        "StringBuilder always stores fewer characters than String."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "mutability is the whole reason StringBuilder exists.",
        "2": "this is reversed. StringBuilder is the mutable one.",
        "3": "they can hold the same text. The difference is how changes are performed, not how much fits."
      },
      "explanation": "String never changes once created. StringBuilder edits one internal buffer, which is why repeated appends are far cheaper than building the same text with +.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_19-what-is-the-difference-between-length-an",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "interview"
      ],
      "question": "What is the difference between length() and capacity() on a StringBuilder?",
      "options": [
        "length() is the buffer size, and capacity() is the number of characters stored.",
        "length() is how many characters are currently stored, and capacity() is how much the buffer can hold before it must grow.",
        "They always return the same number.",
        "capacity() is the maximum number of characters a StringBuilder can ever hold."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "this is the reverse of the actual meaning.",
        "2": "they are equal only when the buffer happens to be exactly full.",
        "3": "capacity is not a fixed limit. The buffer grows when it overflows."
      },
      "explanation": "Capacity is the size of the internal storage and length is what is actually used. A new StringBuilder() has length 0 but capacity 16, because the buffer is already reserved.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_20-what-does-this-code-print",
      "difficulty": "hard",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "ocjp"
      ],
      "question": "What does this code print?",
      "code": "StringBuilder sb = new StringBuilder(\"abc\");\nStringBuilder same = sb.reverse();\nSystem.out.println(sb + \" \" + (sb == same));",
      "options": [
        "abc false, because reverse() returns a new StringBuilder and leaves sb untouched.",
        "It does not compile, because reverse() returns void.",
        "cba false, because reverse() returns a copy.",
        "cba true, because reverse() reverses in place and returns the same object."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "reverse() does change the original, so sb is no longer \"abc\".",
        "1": "capacity grows with the text, it does not shrink.",
        "2": "no copy is made. Returning the same object is what allows chaining."
      },
      "explanation": "reverse() mutates the buffer and returns the same instance, which is why sb and same refer to one object and the identity check prints true.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_21-why-does-sb1-equals-sb2-return-false-for",
      "difficulty": "hard",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "ocjp"
      ],
      "question": "Why does sb1.equals(sb2) return false for two StringBuilders holding the same text?",
      "options": [
        "equals() on StringBuilder compares only the first character.",
        "It returns true, because the text is the same.",
        "StringBuilders can never be compared at all.",
        "StringBuilder does not override equals(), so it compares references rather than contents."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "no content comparison happens at all.",
        "1": "identical text does not help, because equals is not looking at the text.",
        "2": "the comparison compiles and runs, but it answers the wrong question."
      },
      "explanation": "Without an override, equals() falls back to the version inherited from Object, which compares identity. Two different objects are therefore unequal even when they hold identical characters.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_22-when-a-stringbuilder-buffer-overflows-ho",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "interview"
      ],
      "question": "When a StringBuilder buffer overflows, how does it grow?",
      "options": [
        "It grows to (oldCapacity * 2) + 2, so from 16 the sequence is 16, then 34, then 70.",
        "It grows by exactly one character each time.",
        "It does not grow. Adding more text throws an exception.",
        "It doubles to 32, then 64, then 128."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "growing one character at a time would make appending very slow.",
        "2": "the buffer grows automatically. It does not fail.",
        "3": "the rule adds 2 as well, so 16 becomes 34 rather than 32."
      },
      "explanation": "The growth rule doubles the old capacity and adds 2. Knowing this is why presizing with new StringBuilder(int) is worthwhile when the final size is known.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_23-what-does-delete-0-1-remove-from-a-strin",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "tricky",
        "interview"
      ],
      "question": "What does delete(0, 1) remove from a StringBuilder?",
      "options": [
        "One character, because the end index is exclusive.",
        "Nothing, because the range is empty.",
        "Two characters, because the range is 0 to 1.",
        "Everything, because 0 is the start."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "the range contains index 0, so one character is removed.",
        "2": "the end index is not affected, so only index 0 is removed.",
        "3": "clearing everything needs the end index to be length(), not 1."
      },
      "explanation": "The range is half-open: start is included and end is excluded. So delete(0, 1) affects index 0 only, while delete(0, sb.length()) clears the whole buffer.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_24-what-does-setlength-0-do-and-how-does-it",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "interview"
      ],
      "question": "What does setLength(0) do, and how does it differ from the other mutation methods?",
      "options": [
        "It clears the buffer by truncating to length 0, and unlike the others it returns void rather than the same instance.",
        "It does nothing, because 0 is not a valid length.",
        "It returns a String containing the removed characters.",
        "It creates a brand new empty StringBuilder and returns it."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "0 is valid and truncates everything.",
        "2": "it returns nothing at all.",
        "3": "the same object is reused, which is the point of the idiom."
      },
      "explanation": "A smaller length truncates the buffer, and 0 therefore clears it. This is a common way to reuse a StringBuilder without allocating a new one. Its void return means it cannot be chained.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_custom_25-why-can-calls-like-sb-append-a-append-b-",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "tags": [
        "interview"
      ],
      "question": "Why can calls like sb.append(\"a\").append(\"b\").append(1) be chained?",
      "options": [
        "Because Java automatically joins statements that end with a dot.",
        "Because each append() returns a new StringBuilder.",
        "Because append() is a static method.",
        "Because append() returns the same StringBuilder instance, which allows fluent chaining."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "chaining is ordinary method-call syntax, not a compiler trick.",
        "1": "returning a new instance each time would defeat the efficiency of StringBuilder.",
        "2": "append is an instance method, called on the builder."
      },
      "explanation": "Returning the same instance is what makes chaining work. Because it is the same object, every call writes into one buffer. Call toString() when you finally need an immutable String.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringbuilderconcepts-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Builder Concepts",
      "question": "Which of the following are TRUE about String Builder Concepts? Select all that apply.",
      "options": [
        "- In printf(\"%d\", age), %d requires an integral argument; using %f with an int is a trap and throws IllegalFormatConversionException.",
        "StringBuilder -> mutable class that lets us change its text value in place.",
        "String -> immutable; each method call returns a NEW String instance.",
        "Instantiating String Objects",
        "String is a sequence of characters, which means its characters are ordered and indexed."
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for String Builder Concepts.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-14-strings_src-chapter-14-strings-sub-chapter-3-stringbuilder-stringvsstringbuffervsstringbuilder-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: Strings",
      "topic": "String Vs String Buffer Vs String Builder",
      "question": "Which of the following are TRUE about String Vs String Buffer Vs String Builder? Select all that apply.",
      "options": [
        "- In printf(\"%d\", age), %d requires an integral argument; using %f with an int is a trap and throws IllegalFormatConversionException.",
        "StringBuilder is mutable. Its append(), insert(), delete(), and replace() methods update the same character buffer and return the same builder object, which makes method chaining possible. This avoids creating a new String for every intermediate change and is usually the best choice for text built by one thread, especially inside a loop.",
        "String is immutable. Once a String object has been created, its character contents cannot be changed. An operation such as concat() creates and returns a new String; it does not change the original String. If the result is not assigned to a variable, the original value remains unchanged.",
        "String, StringBuilder, and StringBuffer all represent text, but they are designed for different situations.",
        "String is a sequence of characters, which means its characters are ordered and indexed."
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for String Vs String Buffer Vs String Builder.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringVsStringBufferVsStringBuilder.java",
      "tags": [
        "concept"
      ]
    },
    {
      "qid": "ocjp-chapter-14-strings-string-pool-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 14: Strings",
      "topic": "OCJP Tricky",
      "question": "What is the output of this code? (OCJP)",
      "code": "String a = \"hello\";\nString b = \"hello\";\nSystem.out.println(a == b);",
      "answer": [
        "true"
      ],
      "explanation": "String literals are stored in the String Pool. \"hello\" is the same pooled reference, so == returns true. This is a classic OCJP trap — always use .equals() for value comparison.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_2_String_Methods_And_Best_Practices/StringMethodAndBestPractices.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-14-strings-string-pool-2",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 14: Strings",
      "topic": "OCJP Tricky",
      "question": "What is the output of this code? (OCJP)",
      "code": "String a = new String(\"hello\");\nString b = new String(\"hello\");\nSystem.out.println(a == b);",
      "answer": [
        "false"
      ],
      "explanation": "new String() always creates a new heap object. a and b point to different objects, so == compares references and returns false. Always use .equals() to compare String values.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringBuilderConcepts.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-14-strings-string-concat-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 14: Strings",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "String s = \"Java\";\ns.concat(\" is fun\");\nSystem.out.println(s);",
      "answer": [
        "Java"
      ],
      "explanation": "Strings are immutable. concat() returns a NEW String but does not modify s. Since the return value is ignored, s still holds \"Java\". This is a top OCJP gotcha.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringVsStringBufferVsStringBuilder.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-14-strings-int-cast-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 14: Strings",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "int x = 5;\ndouble y = x / 2;\nSystem.out.println(y);",
      "answer": [
        "2.0"
      ],
      "explanation": "x and 2 are both int — integer division gives 2 (truncated). Then 2 is widened to 2.0 when assigned to double. To get 2.5, you need (double)x / 2.",
      "topicPath": "src/Chapter_14_Strings/Sub_Chapter_3_StringBuilder/StringVsStringBufferVsStringBuilder.java",
      "kind": "ocjp-tricky",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    }
  ],
  "Chapter 15: Composition": [
    {
      "type": "predict",
      "kind": "predict",
      "qid": "chapter-15-composition_src-chapter-15-composition-sub-chapter-1-composition-example-computer-package-computercase-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 15: Composition",
      "topic": "Computer Case",
      "question": "What does this code print?",
      "code": "System.out.println(\"Power button pressed\");",
      "answer": [
        "Power button pressed"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "topicPath": "src/Chapter_15_Composition/Sub_Chapter_1_Composition_Example_Computer_Package/ComputerCase.java",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-15-composition_src-chapter-15-composition-sub-chapter-1-composition-example-computer-package-main-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 15: Composition",
      "topic": "Main",
      "question": "Which of the following are TRUE about Main? Select all that apply.",
      "options": [
        "Inheritence is a way to reuse functionality and attributes",
        "Review the class Main and understand its key responsibilities.",
        "Product is the base Class",
        "This example defines 1 method; trace method behavior step by step.",
        "This topic belongs to Chapter 15: Composition → Composition Example Computer Package."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Main.",
      "topicPath": "src/Chapter_15_Composition/Sub_Chapter_1_Composition_Example_Computer_Package/Main.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-15-composition_src-chapter-15-composition-sub-chapter-1-composition-example-computer-package-product-java_custom_0-what-do-is-a-and-has-a-mean-in-java",
      "difficulty": "easy",
      "chapter": "Chapter 15: Composition",
      "topic": "Product",
      "tags": [
        "interview"
      ],
      "question": "What do IS-A and HAS-A mean in Java?",
      "options": [
        "Inheritance defines a HAS-A relationship, and composition defines an IS-A relationship.",
        "Inheritance defines an IS-A relationship, and composition defines a HAS-A relationship.",
        "IS-A means an object stores another object as a field.",
        "Both describe the same relationship."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "the two are the other way round.",
        "2": "storing another object as a field is HAS-A, which is composition.",
        "3": "they describe different relationships, and choosing between them is a design decision."
      },
      "explanation": "A Monitor IS-A Product, which is inheritance. A PersonalComputer HAS-A Monitor, which is composition, because the computer holds a Monitor as one of its parts.",
      "topicPath": "src/Chapter_15_Composition/Sub_Chapter_1_Composition_Example_Computer_Package/Product.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-15-composition_src-chapter-15-composition-sub-chapter-1-composition-example-computer-package-product-java_custom_1-in-this-design-why-is-personalcomputer-h",
      "difficulty": "medium",
      "chapter": "Chapter 15: Composition",
      "topic": "Product",
      "tags": [
        "interview"
      ],
      "question": "In this design, why is PersonalComputer HAS-A Monitor an example of composition?",
      "options": [
        "Because the computer is built from other objects held as its parts, rather than inheriting from them.",
        "Because Monitor and PersonalComputer share the same fields.",
        "Because composition always requires an interface.",
        "Because PersonalComputer extends Monitor."
      ],
      "answer": 0,
      "whyByOption": {
        "1": "sharing fields is not what composition means.",
        "2": "composition works with concrete classes too. Interfaces are optional.",
        "3": "extending Monitor would make the computer a kind of monitor, which is not what the design says. They both extend Product instead."
      },
      "explanation": "Composition means one object is made up of others. A PersonalComputer contains a Monitor, a MotherBoard and a ComputerCase, so those are parts of it rather than parents of it.",
      "topicPath": "src/Chapter_15_Composition/Sub_Chapter_1_Composition_Example_Computer_Package/Product.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-15-composition_src-chapter-15-composition-sub-chapter-1-composition-example-computer-package-product-java_custom_2-all-of-monitor-motherboard-computercase-",
      "difficulty": "medium",
      "chapter": "Chapter 15: Composition",
      "topic": "Product",
      "tags": [
        "interview"
      ],
      "question": "All of Monitor, MotherBoard, ComputerCase and PersonalComputer extend Product. What does that inheritance give them?",
      "options": [
        "It makes them all the same type at runtime.",
        "It prevents them from adding their own fields.",
        "Each of them gets its own separate copy of the Product class file.",
        "They all inherit Product's common attributes, such as model and manufacturer, without repeating that code."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "they remain distinct types, which is what allows each to have its own behaviour.",
        "1": "subclasses can add their own fields freely, such as ramSlots on MotherBoard.",
        "2": "there is one Product class. The subclasses share its definition."
      },
      "explanation": "Inheritance is a form of code reuse. The shared attributes live once in Product, and every subclass inherits them while still being free to add its own fields and behaviour.",
      "topicPath": "src/Chapter_15_Composition/Sub_Chapter_1_Composition_Example_Computer_Package/Product.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-15-composition_src-chapter-15-composition-sub-chapter-1-composition-example-computer-package-product-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 15: Composition",
      "topic": "Product",
      "question": "Which of the following are TRUE about Product? Select all that apply.",
      "options": [
        "Inheritence is a way to reuse functionality and attributes",
        "Product is the base Class",
        "All of the base parts will have set of attributes names manufacturer, model and dimensions ( width, height and depth )",
        "This topic belongs to Chapter 15: Composition → Composition Example Computer Package.",
        "All of the computer parts are going to be inherited from Product"
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Product.",
      "topicPath": "src/Chapter_15_Composition/Sub_Chapter_1_Composition_Example_Computer_Package/Product.java",
      "tags": [
        "concept"
      ]
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-15-composition_src-chapter-15-composition-sub-chapter-2-inheritence-vs-composition-inheritencevscomposition-java_custom_0-how-is-inheritance-described-in-these-no",
      "difficulty": "medium",
      "chapter": "Chapter 15: Composition",
      "topic": "Inheritence Vs Composition",
      "tags": [
        "interview"
      ],
      "question": "How is inheritance described in these notes?",
      "options": [
        "Inheritance means copying the source code of one class into another.",
        "Inheritance is a way to make several objects act as one.",
        "Inheritance is only possible between classes in the same package.",
        "Inheritance is a way to reuse functionality and attributes from a parent class."
      ],
      "answer": 3,
      "whyByOption": {
        "0": "the subclass reuses the parent's definition. Nothing is copied into the file.",
        "1": "making a combination of classes act as one coherent object is the description of composition.",
        "2": "a subclass may extend a class from another package, provided the class is visible."
      },
      "explanation": "Inheritance lets a subclass reuse what the parent already defines, and then add to it or change it. It is reuse through a parent-child relationship, not copying.",
      "topicPath": "src/Chapter_15_Composition/Sub_Chapter_2_Inheritence_Vs_Composition/InheritenceVsComposition.java"
    },
    {
      "type": "scq",
      "kind": "custom",
      "qid": "chapter-15-composition_src-chapter-15-composition-sub-chapter-2-inheritence-vs-composition-inheritencevscomposition-java_custom_1-how-is-composition-described-in-these-no",
      "difficulty": "medium",
      "chapter": "Chapter 15: Composition",
      "topic": "Inheritence Vs Composition",
      "tags": [
        "interview"
      ],
      "question": "How is composition described in these notes?",
      "options": [
        "Composition means one class can have only one field.",
        "Composition is a way to make a combination of classes act like a single coherent object.",
        "Composition is another word for inheritance.",
        "Composition is a way to reuse attributes through a parent-child hierarchy."
      ],
      "answer": 1,
      "whyByOption": {
        "0": "a composed class can hold as many parts as it needs.",
        "2": "they are different approaches, which is why this topic compares them.",
        "3": "reusing attributes through a parent-child hierarchy is inheritance."
      },
      "explanation": "Composition is about building one thing out of others and presenting the result as a single object. The containing class delegates work to the parts it holds.",
      "topicPath": "src/Chapter_15_Composition/Sub_Chapter_2_Inheritence_Vs_Composition/InheritenceVsComposition.java"
    },
    {
      "type": "mcq",
      "kind": "true-false",
      "qid": "chapter-15-composition_src-chapter-15-composition-sub-chapter-2-inheritence-vs-composition-inheritencevscomposition-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 15: Composition",
      "topic": "Inheritence Vs Composition",
      "question": "Which of the following are TRUE about Inheritence Vs Composition? Select all that apply.",
      "options": [
        "Composition is a way to make the combination of classes act like a single coherent object",
        "Inheritence is a way to reuse functionality and attributes",
        "Product is the base Class",
        "This topic belongs to Chapter 15: Composition → Composition Example Computer Package.",
        "@option Inheritance is a way to reuse functionality and attributes from a parent class. [correct]"
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Inheritence Vs Composition.",
      "topicPath": "src/Chapter_15_Composition/Sub_Chapter_2_Inheritence_Vs_Composition/InheritenceVsComposition.java",
      "tags": [
        "concept"
      ]
    }
  ]
};

const QUICK_REVISION_BANK = {
  "Chapter 1: Java Introduction": {
    "takeaways": [
      "Core Concepts: Java Architecture & Execution Flow",
      "Challenge: Print your name, age, and developer status on separate lines using System.out.println.",
      "Challenge: Given a hardcoded Celsius temperature, calculate Fahrenheit using F = (C * 9/5) + 32.",
      "Deep Problem: Fibonacci Analysis — Generate the first N Fibonacci numbers using iteration and build a detector that determines whether a given number belongs to the Fibonacci sequence. The solution should be efficient, easy to trace, and demonstrate both sequence generation and membership checking.",
      "Java is both a compiled and interpreted language.",
      "Then print all three values on one line using string concatenation."
    ],
    "gotchas": [
      "Parameter notes (what each argument means and how to choose it):",
      "@option It prints 2 and then notes.",
      "@why B: args[1] is \"notes\". Index 0 is always the first argument.",
      "@option javac reports a compile error, no .class file is produced, and nothing runs. [correct]"
    ],
    "syntax": "public class HelloWorld {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(\"Hello World\");\r\n    }\r\n\r\n}",
    "badges": [
      "main",
      "toFahrenheit",
      "isFibonacci",
      "printSequence"
    ],
    "tables": []
  },
  "Chapter 2: Primitive Types": {
    "takeaways": [
      "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
      "Variables declared inside the for loop init section are local to the loop only.",
      "Core Concepts: Java Variables & Initialization",
      "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.",
      "Java has exactly 8 primitive data types — these are the most fundamental building blocks for storing data.",
      "Challenge: Declare all 8 primitive data types, assign useful values, and print each with a label."
    ],
    "gotchas": [
      "Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects.",
      "Parameter notes (important method parameters and how to choose them):",
      "- Warning: You MUST initialize a local variable before reading or referencing it, otherwise the code will fail to compile.",
      "Understanding what forms an expression vs a statement is important — a statement is a complete unit of execution (ends with ;), while an expression is the part that produces a value."
    ],
    "syntax": "public class StringExample {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        String myString = \"This is a string\";\r\n        System.out.println(\"MyString is equal to \" + myString);\r\n        myString = myString  + \", and this is more.\";\r\n        System.out.println(\"myString is equal to \" + myString);\r\n        myString = myString + \" \\u00A9 2022\";\r\n        System.out.println(\"myString is equal to \" + myString);",
    "badges": [
      "main",
      "aMethod",
      "isOdd",
      "countSetBits"
    ],
    "tables": [
      {
        "headers": [
          "Type",
          "Width",
          "Range / Notes"
        ],
        "rows": [
          [
            "boolean",
            "1 bit",
            "Only two values: true or false"
          ],
          [
            "byte",
            "8 bits",
            "-128 to 127"
          ],
          [
            "short",
            "16 bits",
            "-32,768 to 32,767"
          ],
          [
            "char",
            "16 bits",
            "A single Unicode character — written in single quotes: 'A'"
          ],
          [
            "int",
            "32 bits",
            "-2,147,483,648 to 2,147,483,647 (default for whole numbers)"
          ],
          [
            "long",
            "64 bits",
            "Very large whole numbers — add 'L' suffix: 100L"
          ],
          [
            "float",
            "32 bits",
            "Single-precision decimal — add 'f' suffix: 3.14f (NOT for precise math)"
          ],
          [
            "double",
            "64 bits",
            "Double-precision decimal — default for decimals, add 'd': 3.14d"
          ]
        ]
      }
    ]
  },
  "Chapter 3: Operators": {
    "takeaways": [
      "Core Concepts: Operators, Operands & Expression Evaluation",
      "1. Create a double variable with a value of 20.00",
      "Deep Problem: Expression Evaluator Utilities — Build core numeric helper methods without using Math library shortcuts. Compute powers using repeated multiplication, determine absolute value manually, find the maximum of three values, and classify a number's sign. The goal is to practice operator-driven problem solving.",
      "- Operator: A special symbol that performs operations on one or more operands and evaluates to a result.",
      "2. Create a second variable of type double with the value 80.00",
      "- Operand: A value, variable, or sub-expression acted upon by an operator (e.g. in `15 + 12`, `15` and `12` are operands)."
    ],
    "gotchas": [
      "Critical Gotchas & Precedence Rules:",
      "Parameter notes (important method parameters and how to choose them):",
      "@option It compiles and prints a warning only.",
      "@why B: it never reaches runtime. The type error is found while compiling."
    ],
    "syntax": "public class OperatorsOperandsExpressions {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        int myVar = 15 + 12; // 15 and 12 are operands; + is the addition operator.\r\n        double hoursWorked = 9.5d;\r\n        double hourlyRate = 5d;\r\n        double mySalary = hoursWorked * hourlyRate; // hoursWorked and hourlyRate are operands; * is the multiplication operator.\r\n        System.out.println(mySalary);",
    "badges": [
      "main",
      "power",
      "absolute",
      "maxOfThree",
      "sign"
    ],
    "tables": [
      {
        "headers": [
          "Operator",
          "Target Type",
          "Behavior",
          "Code Example"
        ],
        "rows": [
          [
            "`+`",
            "Numeric / String",
            "Addition for numbers, Concatenation if any operand is String",
            "`10 + 20` -> `30`, `\"Score: \" + 10` -> `\"Score: 10\"`"
          ],
          [
            "`-`",
            "Numeric",
            "Subtraction",
            "`20 - 5` -> `15`"
          ],
          [
            "`*`",
            "Numeric",
            "Multiplication",
            "`4 * 5` -> `20`"
          ],
          [
            "`/`",
            "Numeric",
            "Division (integer division truncates decimal part)",
            "`10 / 3` -> `3`"
          ],
          [
            "`%`",
            "Numeric",
            "Modulus (returns division remainder)",
            "`10 % 3` -> `1`"
          ]
        ]
      }
    ]
  },
  "Chapter 4: Statements And Indentations": {
    "takeaways": [
      "A Java statement is a complete unit of execution. Most statements end with a semicolon (;).",
      "Challenge: Use separate statements to calculate the area and perimeter of a rectangle, and the hypotenuse of a right triangle using Math.sqrt and Math.pow.",
      "Deep Problem: Multi-Domain Unit Converter — Implement a conversion utility that handles distance, weight, temperature, and volume. Each conversion must be isolated in its own method, and the program should generate readable tables for values 1 through 10 to simulate the kind of output a small engineering tool might need.",
      "Types of statements: declaration statements (int x = 5;), assignment statements (x = 10;), method call statements (System.out.println(\"hi\");), and more.",
      "A single statement CAN span multiple lines — Java does not care about line breaks, only about the semicolon that ends the statement.",
      "Example: String s = \"Hello\" + \" World\" + \"!\"; — this is one statement split across multiple lines. It's still valid."
    ],
    "gotchas": [
      "Parameter notes (important method parameters and how to choose them):",
      "- pieces in String concatenation: each quoted literal around + is an operand used to build the final println parameter. Choose pieces for readability, but remember the runtime receives one combined String.",
      "@option Yes. Incorrect indentation is a compile-time error.",
      "@option Only tabs cause an error, not spaces."
    ],
    "syntax": "public class StatementsWhiteSpaceAndIndentation {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        int myVariable = 50; // Statement represents the entire line. Adding datatype at the start of the expression and then finishing of with a semicolon we have made a valid Java Statement.\r\n        myVariable++; // This also represents complete statement\r\n        System.out.println(myVariable); // Shows the incremented value: 51\r\n        System.out.println(\"This is a test\"); // This also represents complete statement.\r\n\r\n        System.out.println(\"This is\" +",
    "badges": [
      "main",
      "kilometersToMiles",
      "kilogramsToPounds",
      "celsiusToFahrenheit",
      "litersToGallons"
    ],
    "tables": []
  },
  "Chapter 5: If Else Statements": {
    "takeaways": [
      "Ternary Operator Example:",
      "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.",
      "Deep Problem: Academic Result Classifier — Create a grading engine that converts numeric scores into fine-grained labels, determines pass/fail status, and maps results into broader academic bands such as Distinction and Merit. The main method should sweep through a range of scores to demonstrate how each rule behaves.",
      "Operand one - ageOfClient == 20, in this case we are checking the condition. It will return either true or false.",
      "The 'else' block is the fallback — it runs only when ALL preceding conditions are false.",
      "Operand two - true, is the value to be assigned to the variable isEighteenOrOver if the condition above is true."
    ],
    "gotchas": [
      "IMPORTANT: Do NOT put a semicolon after if(condition) — that would end the statement before the code block, creating an empty if.",
      "Trying to use finalScore outside that if block would cause a compile error: \"Cannot resolve symbol 'finalScore'\".",
      "Parameter notes (what each method/constructor argument means and how to choose it):",
      "Parameter notes (what each method/constructor argument means and how to choose it):"
    ],
    "syntax": "public class IfExample {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        boolean isAlien = false;\r\n\r\n        // If keyword, takes what inside the parenthesis,and if(and only if), the result of expression is true, next line will be executed.\r\n        if(isAlien == false){ // condition check\r\n            System.out.println(\"It is not an alien!\");\r\n        } // Always uses code block, with if statement, it reduces confusion. It allows more than one statement to be executed.",
    "badges": [
      "main",
      "classify",
      "isPassing",
      "letterGrade"
    ],
    "tables": [
      {
        "headers": [
          "@option && requires both sides to be true, while",
          "",
          "requires at least one side to be true. [correct]"
        ],
        "rows": [
          [
            "@option && requires at least one side to be true, while",
            "",
            "requires both."
          ]
        ]
      }
    ]
  },
  "Chapter 6: Methods In Java": {
    "takeaways": [
      "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
      "This challenge uses method overloading to give the same method name two related meanings.",
      "This challenge practices boolean logic with two inputs: whether barking is happening and what hour it is.",
      "This challenge compares two double values only up to three decimal places.",
      "This challenge classifies the relationship between three int values and prints one exact message.",
      "This challenge practices returning a boolean expression directly from a method."
    ],
    "gotchas": [
      "Parameter notes (what each method/constructor argument means and how to choose it):",
      "Important: combine conditions carefully so invalid hours never accidentally produce a true result.",
      "Important: this exercise intentionally uses casting and truncation, so it is checking decimal-place equality rather than true mathematical closeness.",
      "Important: exact output text matters in coding challenge platforms, including capitalization and spaces."
    ],
    "syntax": "public class MethodsInJava {\r\n\r\n    public static void main(String[] args) {\r\n     calculateScore(); //method without any parameter\r\n     // calculateScore(true,800,5,100); // Calling the overloaded method with parameters\r\n        // The parameters should be passed in the same order as it is defined in the method.\r\n\r\n        int highScore = calculateScore(true,800,5,100); // The value returned by calculateScore function is now assigned to highScore variable.\r\n        System.out.println(\"Your final score was \" + highScore);",
    "badges": [
      "methodName",
      "main",
      "calculateScore",
      "area",
      "shouldWakeUp"
    ],
    "tables": []
  },
  "Chapter 7: Switch Statements": {
    "takeaways": [
      "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
      "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
      "Write a method isLeapYear with a parameter of type int named year.",
      "Write a method called printNumberInWord.",
      "Create a new switch statement using char instead of int.",
      "Use the enhanced switch statement as an expression, returning the result to a String named dayOfTheWeek. Print both the day variable and the dayOfTheWeek variable. In the main method, call this method for the values 0 through 7."
    ],
    "gotchas": [
      "Parameter notes (what each method/constructor argument means and how to choose it):",
      "Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive.",
      "NOTE: The solution to the Leap Year coding exercise earlier in the course created the isLeapYear method. You can use that solution if you wish.",
      "@why D: Omitting break is legal in a traditional switch; it causes fall-through rather than a compile error."
    ],
    "syntax": "public class SwitchStatementInJava {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(\"If-else example:\");\r\n        ifElseExample(3);\r\n\r\n        System.out.println();\r\n        System.out.println(\"Traditional switch example:\");\r\n        switchCase(2);",
    "badges": [
      "main",
      "ifElseExample",
      "switchCase",
      "switchCaseMultipleCasesTogether",
      "switchCaseWithoutUsingBreak"
    ],
    "tables": []
  },
  "Chapter 8: Java Looping Concepts": {
    "takeaways": [
      "Loops let us execute the same block of code multiple times without writing that code again and again.",
      "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
      "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
      "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.",
      "Deep Problem: Pattern Rendering Engine — Use nested loops to generate multiple console-based patterns, including star triangles, a number pyramid, and a full multiplication table. The challenge mirrors the kind of structured output logic often needed in reporting and diagnostic tools.",
      "Java supports several looping statements for repetitive execution:"
    ],
    "gotchas": [
      "@why D: A for header has exactly three sections separated by two semicolons, so the third semicolon is a syntax error."
    ],
    "syntax": "public class ForStatement {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(\"Counting from 1 to 5:\");\r\n        for(int counter = 1; counter <=5; counter++){ // counter is the variable that got initialised. It is then compared with the value less than equal to 5. If the counter is greater than 5, the loop will terminate. Lastly the loop is incremented, after the expression is tested.\r\n           System.out.println(counter);\r\n        }\r\n\r\n        System.out.println();",
    "badges": [
      "main",
      "calculateInterest",
      "isPrime",
      "isOdd",
      "sumOdd"
    ],
    "tables": []
  },
  "Chapter 9: While And Do While Looping Concepts": {
    "takeaways": [
      "The while loop repeatedly executes its body as long as a condition remains true.",
      "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
      "Number Palindrome",
      "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int.",
      "Even Digit Sum",
      "Factor Printer Challenge: A factor of a number N is any integer that divides N with no remainder."
    ],
    "gotchas": [
      "IMPORTANT: Always check your loop condition carefully.",
      "The semicolon after while(condition); is MANDATORY — forgetting it is a syntax error.",
      "@option It must contain a continue statement, otherwise it is a syntax error.",
      "Parameter notes (what each method/constructor argument means and how to choose it):"
    ],
    "syntax": "public class WhileLoops {\r\n\r\n    /* while loop simply has expression\r\n\r\n    While loop code format :-\r\n\r\n    while(expression)  {\r\n    // block of statements\r\n\r\n    } */",
    "badges": [
      "main",
      "checkIfNumberIsPalindrome",
      "sumDigits",
      "getEvenDigitSum",
      "printFactors"
    ],
    "tables": []
  },
  "Chapter 10: Class Object Static And Instance Fields": {
    "takeaways": [
      "A class is a blueprint that defines the data and behavior that its objects will have.",
      "There are 2 ways to create fields on classes.",
      "Challenge: Create a BankAccount class with a shared static bankName field, instance fields for account holder and balance, plus deposit and withdraw methods.",
      "Challenge: Create a Student class with a shared static schoolName field and instance fields for name, grade, and gpa. Create two students, print their details, and show static field behaviour.",
      "Deep Problem: Library Inventory Tracker — Design a compact library system that models books as objects, tracks a shared total count through a static field, and supports checkout and return workflows. The solution should show how instance state and class-wide state interact in a realistic domain model.",
      "1) A custom data type --> For example: String"
    ],
    "gotchas": [
      "Parameter notes (what each argument means and how to choose it):",
      "- Important pitfall: passing null to println is safe and prints \"null\", but many String constructors or methods may reject null."
    ],
    "syntax": "public class ClassExample {\n\n    public static void main(String[] args) {\n        //  We can create String using 2 ways\n\n         // 1) Literal form\n\n           String s = \"Hello\";  // s is a local variable on which the objects memory location also known as reference is assigned.\n           System.out.println(\"Literal String = \" + s);",
    "badges": [
      "main",
      "deposit",
      "withdraw",
      "printAccountDetails",
      "printDetails"
    ],
    "tables": []
  },
  "Chapter 11: Parsing Values Reading Input": {
    "takeaways": [
      "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
      "Input Calculator",
      "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
      "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.",
      "Reading User Input Challenge.",
      "Reading Data From Console"
    ],
    "gotchas": [
      "@option It returns 0 and prints a warning.",
      "NOTE: Use the method Math.round to round the calculated average (double). The method round returns long.",
      "Deep Problem: Form Validation Pipeline — Build reusable parsing and validation methods that verify integer and decimal fields, enforce numeric ranges, and aggregate multiple form errors into a single readable report. This mirrors the validation logic used in real business forms and APIs.",
      "@why D: there is no warning path. The method throws an exception."
    ],
    "syntax": "public class ParsingValuesReadingInput {\n\n    public static void main(String[] args) {\n\n        String currentYear = \"2024\";\n\n        String userDateOfBirth = \"1999\";\n\n        // System.out.println(\"Age = \" + (currentYear - userDateOfBirth));",
    "badges": [
      "main",
      "getInputFromConsole",
      "checkValidDOB",
      "getInputFromScanner",
      "inputThenPrintSumAndAverage"
    ],
    "tables": [
      {
        "headers": [
          "Technique",
          "Description"
        ],
        "rows": [
          [
            "System.in",
            "Like System.out, Java provides System.in which can read input from the console or terminal."
          ],
          [
            "System.console",
            "This is Java's solution for easier support for reading a single line and prompting user for information"
          ],
          [
            "Command Line Arguments",
            "This is calling the Java program and specifying data in the call"
          ],
          [
            "Scanner",
            "The scanner class was built to be a common way to read input either using System.in or a file."
          ]
        ]
      }
    ]
  },
  "Chapter 12: Exception Handling": {
    "takeaways": [
      "Core Concepts: Exception Handling in Java",
      "Challenge: Demonstrate handling NullPointerException, ArrayIndexOutOfBoundsException, and NumberFormatException with separate catch blocks and a finally block.",
      "Challenge: Parse an age from a String using Integer.parseInt, catch NumberFormatException, and return -1 for invalid input.",
      "Challenge: Write a safeDivide method that returns a / b and catches ArithmeticException when the divisor is zero, returning 0 instead.",
      "Without handling, an exception immediately terminates execution and prints a stack trace.",
      "Exception Hierarchy Overview:"
    ],
    "gotchas": [
      "An exception is an abnormal condition or runtime error that occurs during program execution and disrupts normal control flow.",
      "Deep Problem: Fault-Tolerant Calculator — Build a calculator that performs standard arithmetic and square root operations while handling invalid expressions, divide-by-zero cases, negative square roots, and parsing errors gracefully. The solution should expose safe operation methods and a parser for simple text expressions.",
      "- `Throwable`: Root class for all errors and exceptions.",
      "- `Error`: Serious problems (e.g. `OutOfMemoryError`) that applications should NOT attempt to catch."
    ],
    "syntax": "public class ExceptionHandlingInJava {\n    public static void main(String[] args) {\n\n        try{ // The try block wraps any code that might throw an exception at runtime.\n            // Place only the risky code here — keep try blocks as small as possible.\n        } // The try block ends here; the catch block immediately follows.\n        catch (Exception e){  // The catch parameter specifies which exception type to handle. 'Exception' is the base class that catches any exception.\n                              // The variable 'e' holds information about the exception, including its message and stack trace.\n                              // The catch block contains your error handling logic — log the error, show a message, or recover gracefully.\n        }",
    "badges": [
      "main",
      "demonstrateException",
      "parseAge",
      "safeDivide",
      "add"
    ],
    "tables": []
  },
  "Chapter 13: OOP Concepts": {
    "takeaways": [
      "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
      "Unlike local variables, class variables should have some type of access modifier declared for it.",
      "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
      "Create a new class for a bank account.",
      "Create two methods with the same name: convertToCentimeters",
      "Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds."
    ],
    "gotchas": [
      "Parameter notes (what each constructor/method argument means and how to choose it):",
      "Parameter notes (what each constructor/method argument means and how to choose it):",
      "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "Parameter notes (what each constructor/method argument means and how to choose it):"
    ],
    "syntax": "public class ClassesAndInheritance {\n\n\n\n}",
    "badges": [
      "isConvertible",
      "setConvertible",
      "getDoors",
      "setDoors",
      "getColor"
    ],
    "tables": []
  },
  "Chapter 14: Strings": {
    "takeaways": [
      "String is a sequence of characters, which means its characters are ordered and indexed.",
      "String -> immutable; each method call returns a NEW String instance.",
      "String, StringBuilder, and StringBuffer all represent text, but they are designed for different situations.",
      "Challenge: Use printf and String.format to print a formatted employee summary and a right-aligned table of names and numbers.",
      "Challenge: Create a JSON-like text block, build the same content with traditional string concatenation, print both, and compare them using equals().",
      "Deep Problem: Text Intelligence Analyzer — Create a utility that inspects sentences for palindrome behavior, word count, character frequency, and reversed word order, then combines the findings into a formatted report. The challenge reflects common string-processing tasks used in search, validation, and reporting systems."
    ],
    "gotchas": [
      "Note: %n works only inside a format string. System.out.println(\"Hello %n\") prints Hello %n as it is.",
      "Note: the original String is never changed, because String is immutable. Every method of the String class returns a new String instead of changing the existing one.",
      "note: new StringBuilder(String) starts with capacity 16 + the text length, so new StringBuilder(\"Hello\") has capacity 21 (16 + 5), not 16. new StringBuilder(int n) starts with capacity exactly n.",
      "StringBuilder is mutable. Its append(), insert(), delete(), and replace() methods update the same character buffer and return the same builder object, which makes method chaining possible. This avoids creating a new String for every intermediate change and is usually the best choice for text built by one thread, especially inside a loop."
    ],
    "syntax": "public class TextBlockAndAdvancedOutputFormatting {\r\n\r\n    /*\r\n\r\n    * Text Block\r\n    * 1) A text block is just a special format for multi-line String literals\r\n    *\r\n    * 2) It's simply a String, with a new representation in the source code\r\n    *\r\n    * Escape Sequences",
    "badges": [
      "main",
      "StringInspectionMethods",
      "StringComparisonMethods",
      "StringManipulationMethods",
      "isPalindrome"
    ],
    "tables": [
      {
        "headers": [
          "New line",
          "What it is",
          "Where it works",
          "What it gives"
        ],
        "rows": [
          [
            "`\\n`",
            "Escape sequence, put into the String while compiling",
            "Any String",
            "Always the LF character, on every OS"
          ],
          [
            "`%n`",
            "Format specifier, converted by the Formatter at run time",
            "Only a format string",
            "Line separator of the platform: \\r\\n on Windows, \\n on Linux or macOS"
          ]
        ]
      }
    ]
  },
  "Chapter 15: Composition": {
    "takeaways": [
      "Product is the base Class",
      "Inheritence is a way to reuse functionality and attributes",
      "All of the computer parts are going to be inherited from Product",
      "Composition is a way to make the combination of classes act like a single coherent object",
      "All of the base parts will have set of attributes names manufacturer, model and dimensions ( width, height and depth )",
      "@option Inheritance is a way to reuse functionality and attributes from a parent class. [correct]"
    ],
    "gotchas": [
      "Always be aware of scope, type constraints, and compiler rules in this area."
    ],
    "syntax": "public class ComputerCase extends Product{\r\n\r\n    private String powerSupply;\r\n\r\n    public ComputerCase(String model, String manufacturer){\r\n        super(model,manufacturer);\r\n    }\r\n\r\n    public ComputerCase(String model, String manufacturer, String powerSupply){\r\n        super(model,manufacturer);",
    "badges": [
      "ComputerCase",
      "pressPowerButton",
      "main",
      "Monitor",
      "drawPixelAt"
    ],
    "tables": []
  }
};
