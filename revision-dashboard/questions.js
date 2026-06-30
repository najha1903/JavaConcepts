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
      "type": "scq",
      "qid": "chapter-1-java-introduction_hello-world_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "question": "Which Java keyword correctly fills in the blank in this code from \"HelloWorld.java\"?\n\n___ class HelloWorld {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "predict",
      "qid": "chapter-1-java-introduction_hello-world_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "question": "What does this code print?",
      "code": "System.out.println(\"Hello World\");",
      "answer": [
        "Hello World"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-1-java-introduction_hello-world_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "question": "Explain the main ideas in Hello World.",
      "modelAnswer": "Java is a compiled and interpreted language. You write source code (.java), the compiler turns it into bytecode (.class), and the JVM (Java Virtual Machine) runs the bytecode on any platform. This \"write once, run anywhere\" principle is one of Java's greatest strengths. Java programs start execution from the main method — it is the entry point that the JVM looks for when running a program.",
      "keyPoints": [
        "Java is a compiled and interpreted language. You write source code (.java), the compiler turns it into bytecode (.class), and the JVM (Java Virtual Machine) runs the bytecode on any platform.",
        "This \"write once, run anywhere\" principle is one of Java's greatest strengths.",
        "Java programs start execution from the main method — it is the entry point that the JVM looks for when running a program."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between JVM, JRE, and JDK?",
      "modelAnswer": "JVM executes Java bytecode, JRE is the runtime package with the JVM and core libraries, and JDK adds tools like javac. In short, JDK is for development, JRE is for running programs, and JVM is the execution engine.",
      "keyPoints": [
        "JVM executes Java bytecode, JRE is the runtime package with the JVM and core libraries, and JDK adds tools like javac.",
        "In short, JDK is for development, JRE is for running programs, and JVM is the execution engine."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What does public static void main(String[] args) mean in Java?",
      "modelAnswer": "public lets the JVM access it, static lets it run without creating an object, and void means it returns no value. main is the entry-point method name, and String[] args holds command-line arguments.",
      "keyPoints": [
        "public lets the JVM access it, static lets it run without creating an object, and void means it returns no value.",
        "main is the entry-point method name, and String[] args holds command-line arguments."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Is Java compiled or interpreted?",
      "modelAnswer": "Java is both: javac compiles source code to bytecode, and the JVM interprets or JIT-compiles that bytecode at runtime. This two-step model is why Java can stay portable across platforms.",
      "keyPoints": [
        "Java is both: javac compiles source code to bytecode, and the JVM interprets or JIT-compiles that bytecode at runtime.",
        "This two-step model is why Java can stay portable across platforms."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Why is Java called platform-independent?",
      "modelAnswer": "Java source is compiled to bytecode, and any platform with a compatible JVM can run that bytecode. That is the basis of Java's \"write once, run anywhere\" idea.",
      "keyPoints": [
        "Java source is compiled to bytecode, and any platform with a compatible JVM can run that bytecode.",
        "That is the basis of Java's \"write once, run anywhere\" idea."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) What happens here: class A { public void main(String[] args) {} }?",
      "modelAnswer": "It compiles, but the JVM will not treat it as the entry point because main is not static. Running the class gives a main method not found error.",
      "keyPoints": [
        "It compiles, but the JVM will not treat it as the entry point because main is not static.",
        "Running the class gives a main method not found error."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) Is this a valid entry point: public static void main(String... args)?",
      "modelAnswer": "Yes. String... is varargs syntax, and it is treated as a String[] parameter by the JVM. This signature is a valid Java entry point.",
      "keyPoints": [
        "Yes. String... is varargs syntax, and it is treated as a String[] parameter by the JVM.",
        "This signature is a valid Java entry point."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-1-java-introduction_hello-world_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "question": "Which statement best describes Hello World?",
      "options": [
        "Java is a compiled and interpreted language. You write source code (.java), the compiler turns it into bytecode (.class), and the JVM (Java Virtual Machine) runs the bytecode on any platform.",
        "Deep Problem: Fibonacci Analysis — Generate the first N Fibonacci numbers using iteration and build a detector that determines whether a given number belongs to the Fibonacci sequence. The solution should be efficient, easy to trace, and demonstrate both sequence generation and membership checking.",
        "Challenge: Print your name, age, and developer status on separate lines using System.out.println.",
        "Challenge: Given a hardcoded Celsius temperature, calculate Fahrenheit using F = (C * 9/5) + 32."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Hello World.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-1-java-introduction_hello-world_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "question": "Which of the following are TRUE about Hello World? Select all that apply.",
      "options": [
        "This \"write once, run anywhere\" principle is one of Java's greatest strengths.",
        "Challenge: Print your name, age, and developer status on separate lines using System.out.println.",
        "Challenge: Given a hardcoded Celsius temperature, calculate Fahrenheit using F = (C * 9/5) + 32.",
        "Java is a compiled and interpreted language. You write source code (.java), the compiler turns it into bytecode (.class), and the JVM (Java Virtual Machine) runs the bytecode on any platform.",
        "Java programs start execution from the main method — it is the entry point that the JVM looks for when running a program."
      ],
      "answer": [
        0,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Hello World.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-1-java-introduction_hello-world_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "question": "Complete the blank: \"Java is a ___ and interpreted language. You write source code (.java), the compiler turns it into bytecode (.class), and the JVM (Java Virtual Machine) runs the bytecode on any platform.\"",
      "options": [
        "print",
        "Challenge",
        "compiled",
        "Given"
      ],
      "answer": 2,
      "explanation": "The missing word is 'compiled', from the notes for Hello World.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-1-java-introduction_hello-world-variation-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World Variation Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"HelloWorldVariationChallenge.java\"?\n\n___ class HelloWorldVariationChallenge {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-1-java-introduction_hello-world-variation-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World Variation Challenge",
      "question": "Explain the main ideas in Hello World Variation Challenge.",
      "modelAnswer": "Challenge: Print your name, age, and developer status on separate lines using System.out.println. Then print all three values on one line using string concatenation.",
      "keyPoints": [
        "Challenge: Print your name, age, and developer status on separate lines using System.out.println.",
        "Then print all three values on one line using string concatenation."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-1-java-introduction_hello-world-variation-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World Variation Challenge",
      "question": "Which statement best describes Hello World Variation Challenge?",
      "options": [
        "Challenge: Given a hardcoded Celsius temperature, calculate Fahrenheit using F = (C * 9/5) + 32.",
        "Challenge: Print your name, age, and developer status on separate lines using System.out.println.",
        "Deep Problem: Fibonacci Analysis — Generate the first N Fibonacci numbers using iteration and build a detector that determines whether a given number belongs to the Fibonacci sequence. The solution should be efficient, easy to trace, and demonstrate both sequence generation and membership checking.",
        "Java is a compiled and interpreted language. You write source code (.java), the compiler turns it into bytecode (.class), and the JVM (Java Virtual Machine) runs the bytecode on any platform."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Hello World Variation Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-1-java-introduction_hello-world-variation-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World Variation Challenge",
      "question": "Complete the blank: \"___: Print your name, age, and developer status on separate lines using System.out.println.\"",
      "options": [
        "write",
        "programs",
        "compiled",
        "Challenge"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Challenge', from the notes for Hello World Variation Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-1-java-introduction_temperature-converter-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Temperature Converter Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"TemperatureConverterChallenge.java\"?\n\npublic ___ double toFahrenheit(double celsius) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-1-java-introduction_temperature-converter-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Temperature Converter Challenge",
      "question": "Complete the missing keyword in this snippet from \"TemperatureConverterChallenge.java\".",
      "code": "        ___ (celsius * 9 / 5) + 32;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for TemperatureConverterChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-1-java-introduction_temperature-converter-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Temperature Converter Challenge",
      "question": "Explain the main ideas in Temperature Converter Challenge.",
      "modelAnswer": "Challenge: Given a hardcoded Celsius temperature, calculate Fahrenheit using F = (C * 9/5) + 32. Print the result in the format: \"25°C is 77.0°F\".",
      "keyPoints": [
        "Challenge: Given a hardcoded Celsius temperature, calculate Fahrenheit using F = (C * 9/5) + 32.",
        "Print the result in the format: \"25°C is 77.0°F\"."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-1-java-introduction_temperature-converter-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Temperature Converter Challenge",
      "question": "Which statement best describes Temperature Converter Challenge?",
      "options": [
        "Challenge: Print your name, age, and developer status on separate lines using System.out.println.",
        "Challenge: Given a hardcoded Celsius temperature, calculate Fahrenheit using F = (C * 9/5) + 32.",
        "Deep Problem: Fibonacci Analysis — Generate the first N Fibonacci numbers using iteration and build a detector that determines whether a given number belongs to the Fibonacci sequence. The solution should be efficient, easy to trace, and demonstrate both sequence generation and membership checking.",
        "Java is a compiled and interpreted language. You write source code (.java), the compiler turns it into bytecode (.class), and the JVM (Java Virtual Machine) runs the bytecode on any platform."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Temperature Converter Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-1-java-introduction_temperature-converter-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Temperature Converter Challenge",
      "question": "Complete the blank: \"___: Given a hardcoded Celsius temperature, calculate Fahrenheit using F = (C * 9/5) + 32.\"",
      "options": [
        "compiled",
        "programs",
        "write",
        "Challenge"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Challenge', from the notes for Temperature Converter Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-1-java-introduction_temperature-converter-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Temperature Converter Challenge",
      "question": "In TemperatureConverterChallenge.java, what does the method toFahrenheit() return?",
      "options": [
        "void",
        "int",
        "String",
        "double"
      ],
      "answer": 3,
      "explanation": "The method toFahrenheit() is declared with return type 'double' in TemperatureConverterChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-1-java-introduction_fibonacci-deep-problem_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Fibonacci Deep Problem",
      "question": "Which Java keyword correctly fills in the blank in this code from \"FibonacciDeepProblem.java\"?\n\npublic ___ long[] generateFibonacci(int count) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-1-java-introduction_fibonacci-deep-problem_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Fibonacci Deep Problem",
      "question": "Complete the missing keyword in this snippet from \"FibonacciDeepProblem.java\".",
      "code": "            return ___ long[0];\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for FibonacciDeepProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-1-java-introduction_fibonacci-deep-problem_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Fibonacci Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Fibonacci membership tests:\");",
      "answer": [
        "Fibonacci membership tests:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-1-java-introduction_fibonacci-deep-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Fibonacci Deep Problem",
      "question": "Explain the main ideas in Fibonacci Deep Problem.",
      "modelAnswer": "Deep Problem: Fibonacci Analysis — Generate the first N Fibonacci numbers using iteration and build a detector that determines whether a given number belongs to the Fibonacci sequence. The solution should be efficient, easy to trace, and demonstrate both sequence generation and membership checking.",
      "keyPoints": [
        "Deep Problem: Fibonacci Analysis — Generate the first N Fibonacci numbers using iteration and build a detector that determines whether a given number belongs to the Fibonacci sequence. The solution should be efficient, easy to trace, and demonstrate both sequence generation and membership checking."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-1-java-introduction_fibonacci-deep-problem_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Fibonacci Deep Problem",
      "question": "Which statement best describes Fibonacci Deep Problem?",
      "options": [
        "Java is a compiled and interpreted language. You write source code (.java), the compiler turns it into bytecode (.class), and the JVM (Java Virtual Machine) runs the bytecode on any platform.",
        "Challenge: Print your name, age, and developer status on separate lines using System.out.println.",
        "Challenge: Given a hardcoded Celsius temperature, calculate Fahrenheit using F = (C * 9/5) + 32.",
        "Deep Problem: Fibonacci Analysis — Generate the first N Fibonacci numbers using iteration and build a detector that determines whether a given number belongs to the Fibonacci sequence. The solution should be efficient, easy to trace, and demonstrate both sequence generation and membership checking."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Fibonacci Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-1-java-introduction_fibonacci-deep-problem_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Fibonacci Deep Problem",
      "question": "Complete the blank: \"Deep ___: Fibonacci Analysis — Generate the first N Fibonacci numbers using iteration and build a detector that determines whether a given number belongs to the Fibonacci sequence. The solution should be efficient, easy to trace, and demonstrate both sequence generation and membership checking.\"",
      "options": [
        "write",
        "compiled",
        "Problem",
        "programs"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Problem', from the notes for Fibonacci Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-1-java-introduction_fibonacci-deep-problem_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Fibonacci Deep Problem",
      "question": "In FibonacciDeepProblem.java, what does the method generateFibonacci() return?",
      "options": [
        "String",
        "int",
        "long[]",
        "void"
      ],
      "answer": 2,
      "explanation": "The method generateFibonacci() is declared with return type 'long[]' in FibonacciDeepProblem.java.",
      "tags": []
    }
  ],
  "Chapter 2: Primitive Types": [
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_string-example_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "question": "Which Java keyword correctly fills in the blank in this code from \"StringExample.java\"?\n\nmyString = myString  + \", and ___ is more.\";",
      "options": [
        "this",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'this'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-2-primitive-types_string-example_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "question": "Explain the main ideas in String Example.",
      "modelAnswer": "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment. A String is a sequence of characters of any length — from empty \"\" to thousands of characters long. Contrast: a 'char' can hold only ONE character. A String can hold many. char uses single quotes ('A'), String uses double quotes (\"Hello\").",
      "keyPoints": [
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "A String is a sequence of characters of any length — from empty \"\" to thousands of characters long.",
        "Contrast: a 'char' can hold only ONE character. A String can hold many. char uses single quotes ('A'), String uses double quotes (\"Hello\")."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Is String a primitive type or an object in Java?",
      "modelAnswer": "String is a class, so it is a reference type, not a primitive. It feels special because Java supports string literals like \"hello\", but it is still an object.",
      "keyPoints": [
        "String is a class, so it is a reference type, not a primitive.",
        "It feels special because Java supports string literals like \"hello\", but it is still an object."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Why is String immutable in Java?",
      "modelAnswer": "An immutable String cannot change after creation, which makes it safe for sharing, caching, and use in the string pool. Immutability also helps security and makes Strings naturally thread-safe.",
      "keyPoints": [
        "An immutable String cannot change after creation, which makes it safe for sharing, caching, and use in the string pool.",
        "Immutability also helps security and makes Strings naturally thread-safe."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the String pool, and what is the difference between == and .equals() for Strings?",
      "modelAnswer": "The string pool stores reused string literals so identical literals can share the same object. == compares references, while .equals() compares the actual character content.",
      "keyPoints": [
        "The string pool stores reused string literals so identical literals can share the same object.",
        "== compares references, while .equals() compares the actual character content."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Why is StringBuilder preferred over String concatenation in loops?",
      "modelAnswer": "Repeated String concatenation creates many temporary String objects because String is immutable. StringBuilder changes the same buffer, so it is usually faster and uses less memory in loops.",
      "keyPoints": [
        "Repeated String concatenation creates many temporary String objects because String is immutable.",
        "StringBuilder changes the same buffer, so it is usually faster and uses less memory in loops."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) What prints here: String s = \"a\" + \"b\"; String t = \"ab\"; System.out.println(s == t);?",
      "modelAnswer": "It prints true because both values are compile-time constants and refer to the same pooled String object. The concatenation is folded by the compiler into the literal \"ab\".",
      "keyPoints": [
        "It prints true because both values are compile-time constants and refer to the same pooled String object.",
        "The concatenation is folded by the compiler into the literal \"ab\"."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) What prints here: String s = new String(\"ab\"); String t = \"ab\"; System.out.println(s == t); System.out.println(s.equals(t));?",
      "modelAnswer": "It prints false and then true. new String(\"ab\") creates a different object, so == is false, but the contents are equal.",
      "keyPoints": [
        "It prints false and then true.",
        "new String(\"ab\") creates a different object, so == is false, but the contents are equal."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
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
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
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
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
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
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview",
        "tricky"
      ],
      "question": "(INTERVIEW TRAP) int a=10; int b=20; String c=\"Navneet\"; What is the output of: System.out.println(a + b + c);",
      "modelAnswer": "Output: 30Navneet Java evaluates + left to right: (a + b) is done first (both ints) giving 30, then 30 + \"Navneet\" triggers String concatenation giving \"30Navneet\". KEY RULE: if both operands of + are numeric, it is arithmetic. Once one operand is a String, + becomes concatenation for the rest of the expression.",
      "keyPoints": [
        "Output: 30Navneet",
        "Java evaluates + left to right: (a + b) is done first (both ints) giving 30, then 30 + \"Navneet\" triggers String concatenation giving \"30Navneet\".",
        "KEY RULE: if both operands of + are numeric, it is arithmetic. Once one operand is a String, + becomes concatenation for the rest of the expression."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview",
        "tricky"
      ],
      "question": "(INTERVIEW TRAP) int a=10; int b=20; String c=\"Navneet\"; What is the output of: System.out.println(c + a + b);",
      "modelAnswer": "Output: Navneet1020 Java evaluates + left to right: c+\"Navneet\" + a=10 gives \"Navneet10\", then \"Navneet10\" + b=20 gives \"Navneet1020\". Once the first operand is a String, ALL subsequent + operations become string concatenation — even int + int after it.",
      "keyPoints": [
        "Output: Navneet1020",
        "Java evaluates + left to right: c+\"Navneet\" + a=10 gives \"Navneet10\", then \"Navneet10\" + b=20 gives \"Navneet1020\".",
        "Once the first operand is a String, ALL subsequent + operations become string concatenation — even int + int after it."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview",
        "tricky"
      ],
      "question": "(INTERVIEW TRAP) What is the output of: System.out.println(\"Result: \" + 1 + 2);",
      "modelAnswer": "Output: Result: 12 (NOT Result: 3) Because + is left-to-right: \"Result: \" + 1 = \"Result: 1\", then \"Result: 1\" + 2 = \"Result: 12\". Both additions become concatenation once a String is involved. To get \"Result: 3\", use parentheses: \"Result: \" + (1 + 2). Parentheses force arithmetic first.",
      "keyPoints": [
        "Output: Result: 12 (NOT Result: 3)",
        "Because + is left-to-right: \"Result: \" + 1 = \"Result: 1\", then \"Result: 1\" + 2 = \"Result: 12\". Both additions become concatenation once a String is involved.",
        "To get \"Result: 3\", use parentheses: \"Result: \" + (1 + 2). Parentheses force arithmetic first."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview",
        "tricky"
      ],
      "question": "(INTERVIEW TRAP) What is the output of: System.out.println(1 + 2 + \"Result\");",
      "modelAnswer": "Output: 3Result Java evaluates left to right: 1 + 2 = 3 (both ints, arithmetic), then 3 + \"Result\" = \"3Result\" (String concat). Contrast: \"Result\" + 1 + 2 = \"Result12\". Order matters!",
      "keyPoints": [
        "Output: 3Result",
        "Java evaluates left to right: 1 + 2 = 3 (both ints, arithmetic), then 3 + \"Result\" = \"3Result\" (String concat).",
        "Contrast: \"Result\" + 1 + 2 = \"Result12\". Order matters!"
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview",
        "tricky"
      ],
      "question": "(INTERVIEW TRAP) What is the output of: System.out.println(\"Value: \" + (10 + 20) + \" done\");",
      "modelAnswer": "Output: Value: 30 done Parentheses (10 + 20) are evaluated first as arithmetic giving 30. Then \"Value: \" + 30 = \"Value: 30\", then + \" done\" = \"Value: 30 done\".",
      "keyPoints": [
        "Output: Value: 30 done",
        "Parentheses (10 + 20) are evaluated first as arithmetic giving 30. Then \"Value: \" + 30 = \"Value: 30\", then + \" done\" = \"Value: 30 done\"."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview",
        "tricky"
      ],
      "question": "(INTERVIEW TRAP) What is the output of: char ch = 'A'; System.out.println(ch + 1);",
      "modelAnswer": "Output: 66 (NOT A1) char in arithmetic context is treated as its Unicode/ASCII integer value. 'A' = 65. 65 + 1 = 66. Result is int 66, not a String. To get \"A1\", use: \"\" + ch + 1 OR String.valueOf(ch) + 1. Adding an empty String \"\" forces concatenation.",
      "keyPoints": [
        "Output: 66 (NOT A1)",
        "char in arithmetic context is treated as its Unicode/ASCII integer value. 'A' = 65. 65 + 1 = 66. Result is int 66, not a String.",
        "To get \"A1\", use: \"\" + ch + 1 OR String.valueOf(ch) + 1. Adding an empty String \"\" forces concatenation."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) How do you find the length of a String WITHOUT using the built-in .length() method?",
      "modelAnswer": "Use a for-each loop over toCharArray(): int count = 0; for (char ch : str.toCharArray()) { count++; } // count is the length. Another approach: convert to char array and use array.length — but that internally calls length anyway. Conceptually: iterate over each character and count. This is O(n) — which is what .length() avoids by caching the value internally.",
      "keyPoints": [
        "Use a for-each loop over toCharArray(): int count = 0; for (char ch : str.toCharArray()) { count++; } // count is the length.",
        "Another approach: convert to char array and use array.length — but that internally calls length anyway.",
        "Conceptually: iterate over each character and count. This is O(n) — which is what .length() avoids by caching the value internally."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the output of: String s = \"Java\"; s.concat(\" is fun\"); System.out.println(s);",
      "modelAnswer": "Output: Java Strings are immutable. concat() returns a NEW String but does NOT modify s. Since the return value is ignored, s is still \"Java\". Fix: s = s.concat(\" is fun\"); — you must assign the result back.",
      "keyPoints": [
        "Output: Java",
        "Strings are immutable. concat() returns a NEW String but does NOT modify s. Since the return value is ignored, s is still \"Java\".",
        "Fix: s = s.concat(\" is fun\"); — you must assign the result back."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview",
        "tricky"
      ],
      "question": "(INTERVIEW TRAP) int a=5; What is the output of: System.out.println(\"\" + a + a);",
      "modelAnswer": "Output: 55 (NOT 10) \"\" is an empty String. \"\" + a = \"5\" (String), then \"5\" + a = \"55\". Not arithmetic because the first operand is a String. To add them arithmetically: System.out.println(a + a + \"\") = \"10\"",
      "keyPoints": [
        "Output: 55 (NOT 10)",
        "\"\" is an empty String. \"\" + a = \"5\" (String), then \"5\" + a = \"55\". Not arithmetic because the first operand is a String.",
        "To add them arithmetically: System.out.println(a + a + \"\") = \"10\""
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) How do you REVERSE a String WITHOUT using StringBuilder.reverse() or any library?",
      "modelAnswer": "Iterate from the last index to 0 and build a new String: String rev = \"\"; for (int i = str.length()-1; i >= 0; i--) { rev += str.charAt(i); } Better for performance: use a char array — char[] arr = str.toCharArray(); then swap arr[0] with arr[n-1], arr[1] with arr[n-2], etc. Return new String(arr). Key insight: Strings are immutable so you can't modify in place — you must build a new result.",
      "keyPoints": [
        "Iterate from the last index to 0 and build a new String: String rev = \"\"; for (int i = str.length()-1; i >= 0; i--) { rev += str.charAt(i); }",
        "Better for performance: use a char array — char[] arr = str.toCharArray(); then swap arr[0] with arr[n-1], arr[1] with arr[n-2], etc. Return new String(arr).",
        "Key insight: Strings are immutable so you can't modify in place — you must build a new result."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) How do you check if a String is a PALINDROME without using any built-in reverse method?",
      "modelAnswer": "Use two pointers — one at the start, one at the end, move inward and compare: boolean isPalin = true; int l=0, r=str.length()-1; while(l<r){ if(str.charAt(l)!=str.charAt(r)){isPalin=false; break;} l++; r--; } Key insight: a palindrome reads the same forwards and backwards. \"madam\", \"racecar\", \"level\" are palindromes. You DON'T need to reverse the whole string — just compare from both ends. This is O(n/2) = O(n).",
      "keyPoints": [
        "Use two pointers — one at the start, one at the end, move inward and compare: boolean isPalin = true; int l=0, r=str.length()-1; while(l<r){ if(str.charAt(l)!=str.charAt(r)){isPalin=false; break;} l++; r--; }",
        "Key insight: a palindrome reads the same forwards and backwards. \"madam\", \"racecar\", \"level\" are palindromes.",
        "You DON'T need to reverse the whole string — just compare from both ends. This is O(n/2) = O(n)."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) How do you count occurrences of a specific character in a String WITHOUT using regex or library?",
      "modelAnswer": "Loop through each character and compare: int count = 0; for (int i = 0; i < str.length(); i++) { if (str.charAt(i) == target) count++; } Or with for-each: for (char ch : str.toCharArray()) { if (ch == target) count++; }",
      "keyPoints": [
        "Loop through each character and compare: int count = 0; for (int i = 0; i < str.length(); i++) { if (str.charAt(i) == target) count++; }",
        "Or with for-each: for (char ch : str.toCharArray()) { if (ch == target) count++; }"
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) How do you check if a String CONTAINS a substring WITHOUT using contains() or indexOf()?",
      "modelAnswer": "Use a sliding window: for each position i in str, check if str.substring(i, i+sub.length()).equals(sub). If any match, return true. Manual char-by-char: for each i, compare str.charAt(i+j) with sub.charAt(j) for j=0 to sub.length()-1. This is the essence of the brute-force string search algorithm.",
      "keyPoints": [
        "Use a sliding window: for each position i in str, check if str.substring(i, i+sub.length()).equals(sub). If any match, return true.",
        "Manual char-by-char: for each i, compare str.charAt(i+j) with sub.charAt(j) for j=0 to sub.length()-1. This is the essence of the brute-force string search algorithm."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) How do you convert a String to UPPERCASE WITHOUT using toUpperCase()?",
      "modelAnswer": "Each lowercase letter 'a'-'z' has ASCII value 97-122. Uppercase 'A'-'Z' is 65-90. Difference is 32. So: if (ch >= 'a' && ch <= 'z') ch = (char)(ch - 32); Loop through each char, apply the transformation, build result: StringBuilder sb = new StringBuilder(); for (char ch : str.toCharArray()) { if(ch>='a'&&ch<='z') sb.append((char)(ch-32)); else sb.append(ch); }",
      "keyPoints": [
        "Each lowercase letter 'a'-'z' has ASCII value 97-122. Uppercase 'A'-'Z' is 65-90. Difference is 32. So: if (ch >= 'a' && ch <= 'z') ch = (char)(ch - 32);",
        "Loop through each char, apply the transformation, build result: StringBuilder sb = new StringBuilder(); for (char ch : str.toCharArray()) { if(ch>='a'&&ch<='z') sb.append((char)(ch-32)); else sb.append(ch); }"
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) How do you COUNT VOWELS in a String WITHOUT using regex?",
      "modelAnswer": "Loop through each char and check if it's in the set {a,e,i,o,u,A,E,I,O,U}: int count=0; for(char ch: str.toCharArray()){ String v=\"aeiouAEIOU\"; if(v.indexOf(ch)!=-1) count++; } Simpler: use a switch or if-else chain: if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') count++;",
      "keyPoints": [
        "Loop through each char and check if it's in the set {a,e,i,o,u,A,E,I,O,U}: int count=0; for(char ch: str.toCharArray()){ String v=\"aeiouAEIOU\"; if(v.indexOf(ch)!=-1) count++; }",
        "Simpler: use a switch or if-else chain: if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') count++;"
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) How do you check if two Strings are ANAGRAMS WITHOUT using sort()?",
      "modelAnswer": "Count character frequencies: int[] freq = new int[256]; for(char c: s1.toCharArray()) freq[c]++; for(char c: s2.toCharArray()) freq[c]--; Check all freq[i]==0. If any freq entry is non-zero, strings are NOT anagrams. This is O(n) vs O(n log n) for sort-based approach. Example: \"listen\" and \"silent\" are anagrams — same characters, different order.",
      "keyPoints": [
        "Count character frequencies: int[] freq = new int[256]; for(char c: s1.toCharArray()) freq[c]++; for(char c: s2.toCharArray()) freq[c]--; Check all freq[i]==0.",
        "If any freq entry is non-zero, strings are NOT anagrams. This is O(n) vs O(n log n) for sort-based approach.",
        "Example: \"listen\" and \"silent\" are anagrams — same characters, different order."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) How do you REMOVE ALL SPACES from a String WITHOUT using replace() or replaceAll()?",
      "modelAnswer": "Loop and skip spaces: StringBuilder sb = new StringBuilder(); for(char ch: str.toCharArray()){ if(ch!=' ') sb.append(ch); } This builds a new String containing only non-space characters.",
      "keyPoints": [
        "Loop and skip spaces: StringBuilder sb = new StringBuilder(); for(char ch: str.toCharArray()){ if(ch!=' ') sb.append(ch); }",
        "This builds a new String containing only non-space characters."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) How do you COUNT WORDS in a String WITHOUT using split()?",
      "modelAnswer": "Track transitions from non-space to space: int count=0; boolean inWord=false; for(char ch:str.toCharArray()){ if(ch!=' '&&!inWord){count++;inWord=true;}else if(ch==' '){inWord=false;} } Key: count a word when you ENTER it (transition from space/start to non-space), not while you're in it.",
      "keyPoints": [
        "Track transitions from non-space to space: int count=0; boolean inWord=false; for(char ch:str.toCharArray()){ if(ch!=' '&&!inWord){count++;inWord=true;}else if(ch==' '){inWord=false;} }",
        "Key: count a word when you ENTER it (transition from space/start to non-space), not while you're in it."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) How do you find the FIRST NON-REPEATING CHARACTER in a String WITHOUT library methods?",
      "modelAnswer": "Two passes: first pass builds a frequency array (int[256]). Second pass returns the first char with frequency 1. int[] freq = new int[256]; for(char c:str.toCharArray()) freq[c]++; for(char c:str.toCharArray()) if(freq[c]==1) return c;",
      "keyPoints": [
        "Two passes: first pass builds a frequency array (int[256]). Second pass returns the first char with frequency 1.",
        "int[] freq = new int[256]; for(char c:str.toCharArray()) freq[c]++; for(char c:str.toCharArray()) if(freq[c]==1) return c;"
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) How do you REMOVE DUPLICATE CHARACTERS from a String WITHOUT using Set or distinct()?",
      "modelAnswer": "Use a boolean[] seen = new boolean[256]; Loop through chars — if not seen, append to result and mark seen[ch]=true. Example: \"programming\" → \"progamin\" (each character kept only on first occurrence).",
      "keyPoints": [
        "Use a boolean[] seen = new boolean[256]; Loop through chars — if not seen, append to result and mark seen[ch]=true.",
        "Example: \"programming\" → \"progamin\" (each character kept only on first occurrence)."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) How do you check if a String is NUMERIC (all digits) WITHOUT using parseInt() or regex?",
      "modelAnswer": "Loop through each char and check ch >= '0' && ch <= '9': boolean isNum=true; for(char ch:str.toCharArray()){ if(ch<'0'||ch>'9'){isNum=false;break;} } Handle edge cases: empty string should return false. Negative sign ('-' at index 0) may or may not count depending on requirement.",
      "keyPoints": [
        "Loop through each char and check ch >= '0' && ch <= '9': boolean isNum=true; for(char ch:str.toCharArray()){ if(ch<'0'||ch>'9'){isNum=false;break;} }",
        "Handle edge cases: empty string should return false. Negative sign ('-' at index 0) may or may not count depending on requirement."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between == and .equals() when comparing Strings in Java?",
      "modelAnswer": "== compares references, meaning whether both variables point to the exact same String object in memory. .equals() compares String content, so it checks whether the characters are the same. Example: String a = \"hello\"; String b = \"hello\"; gives a == b as true because both usually point to the same pooled literal object, but new String(\"hello\") compared with another new String(\"hello\") gives == as false because they are different heap objects. Interview rule: use .equals() when you want value comparison, because it works correctly whether Strings come from the pool or from new objects.",
      "keyPoints": [
        "== compares references, meaning whether both variables point to the exact same String object in memory.",
        ".equals() compares String content, so it checks whether the characters are the same.",
        "Example: String a = \"hello\"; String b = \"hello\"; gives a == b as true because both usually point to the same pooled literal object, but new String(\"hello\") compared with another new String(\"hello\") gives == as false because they are different heap objects.",
        "Interview rule: use .equals() when you want value comparison, because it works correctly whether Strings come from the pool or from new objects."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "tags": [
        "interview",
        "tricky"
      ],
      "question": "(INTERVIEW TRAP) What is the output of: Integer a = 127; Integer b = 127; System.out.println(a == b); then Integer x = 128; Integer y = 128; System.out.println(x == y);",
      "modelAnswer": "Output: true on the first line and false on the second line. Java caches Integer objects in the range -128 to 127, so autoboxing 127 reuses the same object reference. 128 is outside the default cache range, so autoboxing typically creates different Integer objects and == becomes false. Use .equals() for Integer value comparison too, because == on wrapper objects checks references, not numeric equality.",
      "keyPoints": [
        "Output: true on the first line and false on the second line.",
        "Java caches Integer objects in the range -128 to 127, so autoboxing 127 reuses the same object reference.",
        "128 is outside the default cache range, so autoboxing typically creates different Integer objects and == becomes false.",
        "Use .equals() for Integer value comparison too, because == on wrapper objects checks references, not numeric equality."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_string-example_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "question": "Which statement best describes String Example?",
      "options": [
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for String Example.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-2-primitive-types_string-example_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "question": "Which of the following are TRUE about String Example? Select all that apply.",
      "options": [
        "A String is a sequence of characters of any length — from empty \"\" to thousands of characters long.",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "Contrast: a 'char' can hold only ONE character. A String can hold many. char uses single quotes ('A'), String uses double quotes (\"Hello\").",
        "LOCAL VARIABLE SCOPE EXAMPLES"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for String Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_string-example_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "question": "Complete the blank: \"___ is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.\"",
      "options": [
        "String",
        "SCOPE",
        "LOCAL",
        "Variables"
      ],
      "answer": 0,
      "explanation": "The missing word is 'String', from the notes for String Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_string-example_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "question": "What is an important consideration when working with String Example?",
      "options": [
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects.",
        "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier."
      ],
      "answer": 2,
      "explanation": "This is a key gotcha or note taken directly from the source for String Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_local-variables-and-scope_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "question": "Which Java keyword correctly fills in the blank in this code from \"LocalVariablesAndScope.java\"?\n\n___ class LocalVariablesAndScope {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-2-primitive-types_local-variables-and-scope_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "question": "Explain the main ideas in Local Variables And Scope.",
      "modelAnswer": "LOCAL VARIABLE SCOPE EXAMPLES --- FOR LOOP SCOPE --- Variables declared inside the for loop init section are local to the loop only.",
      "keyPoints": [
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "--- FOR LOOP SCOPE ---",
        "Variables declared inside the for loop init section are local to the loop only."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_local-variables-and-scope_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "question": "Which statement best describes Local Variables And Scope?",
      "options": [
        "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.",
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "LOCAL VARIABLE SCOPE EXAMPLES"
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Local Variables And Scope.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-2-primitive-types_local-variables-and-scope_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "question": "Which of the following are TRUE about Local Variables And Scope? Select all that apply.",
      "options": [
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "Variables declared inside the for loop init section are local to the loop only.",
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "--- FOR LOOP SCOPE ---",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment."
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Local Variables And Scope.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_local-variables-and-scope_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "question": "Complete the blank: \"___ VARIABLE SCOPE EXAMPLES\"",
      "options": [
        "sequence",
        "Contrast",
        "String",
        "LOCAL"
      ],
      "answer": 3,
      "explanation": "The missing word is 'LOCAL', from the notes for Local Variables And Scope.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_variables_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Variables.java\"?\n\n___ class Variables {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-2-primitive-types_variables_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "question": "Explain the main ideas in Variables.",
      "modelAnswer": "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program. As the name suggests, a variable's value can vary — it can be updated or reassigned after it is first set. To declare a variable in Java, you must specify: (1) the data type, (2) a name (identifier), and optionally (3) an initial value.",
      "keyPoints": [
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "As the name suggests, a variable's value can vary — it can be updated or reassigned after it is first set.",
        "To declare a variable in Java, you must specify: (1) the data type, (2) a name (identifier), and optionally (3) an initial value."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What are Java's 8 primitive types and their sizes?",
      "modelAnswer": "byte=8 bits, short=16, int=32, long=64, char=16, float=32, double=64, and boolean stores true or false. boolean has no fixed JVM-wide bit size in memory, but conceptually it has only two possible values.",
      "keyPoints": [
        "byte=8 bits, short=16, int=32, long=64, char=16, float=32, double=64, and boolean stores true or false.",
        "boolean has no fixed JVM-wide bit size in memory, but conceptually it has only two possible values."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between a primitive type and a reference type?",
      "modelAnswer": "A primitive stores its actual value directly, while a reference type stores the address-like reference to an object. int, double, and boolean are primitives; String and arrays are reference types.",
      "keyPoints": [
        "A primitive stores its actual value directly, while a reference type stores the address-like reference to an object.",
        "int, double, and boolean are primitives; String and arrays are reference types."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the default value of a local variable in Java?",
      "modelAnswer": "Local variables do not get default values in Java. You must initialize a local variable before reading it, or the code will not compile.",
      "keyPoints": [
        "Local variables do not get default values in Java.",
        "You must initialize a local variable before reading it, or the code will not compile."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Do instance fields and local variables behave the same way for default values?",
      "modelAnswer": "No. Instance and static fields get default values like 0, false, or null, but local variables do not. That is why uninitialized locals cause compile-time errors while fields do not.",
      "keyPoints": [
        "No. Instance and static fields get default values like 0, false, or null, but local variables do not.",
        "That is why uninitialized locals cause compile-time errors while fields do not."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) What concept is shown here: Integer x = 10; int y = x;?",
      "modelAnswer": "int to Integer is autoboxing, and Integer to int is unboxing. Java inserts those conversions automatically when the types are compatible.",
      "keyPoints": [
        "int to Integer is autoboxing, and Integer to int is unboxing.",
        "Java inserts those conversions automatically when the types are compatible."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) What happens with: byte b = 128;?",
      "modelAnswer": "It does not compile because 128 is outside the byte range of -128 to 127. You need a smaller literal or an explicit cast, though a cast can still change the value.",
      "keyPoints": [
        "It does not compile because 128 is outside the byte range of -128 to 127.",
        "You need a smaller literal or an explicit cast, though a cast can still change the value."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_variables_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "question": "Which statement best describes Variables?",
      "options": [
        "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.",
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Variables.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-2-primitive-types_variables_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "question": "Which of the following are TRUE about Variables? Select all that apply.",
      "options": [
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "As the name suggests, a variable's value can vary — it can be updated or reassigned after it is first set.",
        "To declare a variable in Java, you must specify: (1) the data type, (2) a name (identifier), and optionally (3) an initial value.",
        "LOCAL VARIABLE SCOPE EXAMPLES"
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Variables.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_variables_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "question": "Complete the blank: \"A ___ is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.\"",
      "options": [
        "String",
        "sequence",
        "Contrast",
        "variable"
      ],
      "answer": 3,
      "explanation": "The missing word is 'variable', from the notes for Variables.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_key-words-and-expressions-in-java_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "question": "Which Java keyword correctly fills in the blank in this code from \"KeyWordsAndExpressionsInJava.java\"?\n\n___ class KeyWordsAndExpressionsInJava {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "predict",
      "qid": "chapter-2-primitive-types_key-words-and-expressions-in-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "question": "What does this code print?",
      "code": "System.out.println(\"You got the high score!\"); // You got the highscore! is a part of expression.",
      "answer": [
        "You got the high score!"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-2-primitive-types_key-words-and-expressions-in-java_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "question": "Explain the main ideas in Key Words And Expressions In Java.",
      "modelAnswer": "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier. Java has over 50 reserved keywords. Common examples: class, public, static, void, int, double, if, else, for, while, return, new, this, super, true, false, null. An expression in Java is any combination of variables, literals, operators, and method calls that evaluates to a single value.",
      "keyPoints": [
        "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.",
        "Java has over 50 reserved keywords. Common examples: class, public, static, void, int, double, if, else, for, while, return, new, this, super, true, false, null.",
        "An expression in Java is any combination of variables, literals, operators, and method calls that evaluates to a single value."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_key-words-and-expressions-in-java_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "question": "Which statement best describes Key Words And Expressions In Java?",
      "options": [
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.",
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Key Words And Expressions In Java.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-2-primitive-types_key-words-and-expressions-in-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "question": "Which of the following are TRUE about Key Words And Expressions In Java? Select all that apply.",
      "options": [
        "An expression in Java is any combination of variables, literals, operators, and method calls that evaluates to a single value.",
        "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.",
        "Java has over 50 reserved keywords. Common examples: class, public, static, void, int, double, if, else, for, while, return, new, this, super, true, false, null.",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "LOCAL VARIABLE SCOPE EXAMPLES"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for Key Words And Expressions In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_key-words-and-expressions-in-java_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "question": "Complete the blank: \"___ are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.\"",
      "options": [
        "String",
        "Contrast",
        "Keywords",
        "sequence"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Keywords', from the notes for Key Words And Expressions In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_key-words-and-expressions-in-java_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "question": "What is an important consideration when working with Key Words And Expressions In Java?",
      "options": [
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "Understanding what forms an expression vs a statement is important — a statement is a complete unit of execution (ends with ;), while an expression is the part that produces a value.",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment."
      ],
      "answer": 2,
      "explanation": "This is a key gotcha or note taken directly from the source for Key Words And Expressions In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_primitive-data-types_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PrimitiveDataTypes.java\"?\n\n___ class PrimitiveDataTypes {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-2-primitive-types_primitive-data-types_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "question": "Explain the main ideas in Primitive Data Types.",
      "modelAnswer": "Java has exactly 8 primitive data types — these are the most fundamental building blocks for storing data. Unlike objects, primitive types are stored directly in memory (not as references), making them fast and memory-efficient. The 8 Primitive Types:",
      "keyPoints": [
        "Java has exactly 8 primitive data types — these are the most fundamental building blocks for storing data.",
        "Unlike objects, primitive types are stored directly in memory (not as references), making them fast and memory-efficient.",
        "The 8 Primitive Types:"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between widening and narrowing casting in Java?",
      "modelAnswer": "Widening converts a smaller compatible type to a larger one, like int to long, and Java does it automatically. Narrowing converts a larger type to a smaller one, like double to int, and requires an explicit cast.",
      "keyPoints": [
        "Widening converts a smaller compatible type to a larger one, like int to long, and Java does it automatically.",
        "Narrowing converts a larger type to a smaller one, like double to int, and requires an explicit cast."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is integer overflow in Java?",
      "modelAnswer": "Integer overflow happens when a value goes past the type's range and wraps around to the opposite end. For example, Integer.MAX_VALUE + 1 becomes Integer.MIN_VALUE.",
      "keyPoints": [
        "Integer overflow happens when a value goes past the type's range and wraps around to the opposite end.",
        "For example, Integer.MAX_VALUE + 1 becomes Integer.MIN_VALUE."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Why does integer division drop the decimal part?",
      "modelAnswer": "When both operands are integer types, Java performs integer division and keeps only the whole-number result. So 1 / 2 is 0, while 1.0 / 2 uses floating-point division and keeps the fraction.",
      "keyPoints": [
        "When both operands are integer types, Java performs integer division and keeps only the whole-number result.",
        "So 1 / 2 is 0, while 1.0 / 2 uses floating-point division and keeps the fraction."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) What is the output of: System.out.println(1 / 2); System.out.println(1.0 / 2);?",
      "modelAnswer": "The output is 0 and 0.5. The first uses integer division, while the second uses double division.",
      "keyPoints": [
        "The output is 0 and 0.5.",
        "The first uses integer division, while the second uses double division."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) What happens here: long l = 10; int i = l;?",
      "modelAnswer": "It does not compile because assigning long to int is narrowing and may lose data. You need an explicit cast, such as int i = (int) l;.",
      "keyPoints": [
        "It does not compile because assigning long to int is narrowing and may lose data.",
        "You need an explicit cast, such as int i = (int) l;."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What are the default values of Java primitive fields and object references if you do not initialize them explicitly?",
      "modelAnswer": "Instance fields get type-specific defaults: int = 0, boolean = false, double = 0.0, and char = '\\u0000' which is the Unicode null character. Reference type fields default to null because they store no object reference yet. Local variables are different: Java does NOT give them default values, so you must initialize them before use.",
      "keyPoints": [
        "Instance fields get type-specific defaults: int = 0, boolean = false, double = 0.0, and char = '\\u0000' which is the Unicode null character.",
        "Reference type fields default to null because they store no object reference yet.",
        "Local variables are different: Java does NOT give them default values, so you must initialize them before use."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What happens in Java when you run: int x = Integer.MAX_VALUE; x++; ?",
      "modelAnswer": "Output/value: x becomes -2147483648, which is Integer.MIN_VALUE. int is a 32-bit signed two's-complement type, so incrementing the largest possible bit pattern wraps around to the smallest negative value. Java does not throw an exception for primitive integer overflow; the extra carry bit is discarded.",
      "keyPoints": [
        "Output/value: x becomes -2147483648, which is Integer.MIN_VALUE.",
        "int is a 32-bit signed two's-complement type, so incrementing the largest possible bit pattern wraps around to the smallest negative value.",
        "Java does not throw an exception for primitive integer overflow; the extra carry bit is discarded."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between widening and narrowing primitive conversions in Java?",
      "modelAnswer": "Widening means converting a smaller compatible type to a larger one, such as int to long. It is automatic because no information is lost. Narrowing means converting a larger type to a smaller one, such as double to int. It requires an explicit cast because precision or range can be lost. Example: double d = 9.8; int n = (int) d; gives 9 because the fractional part is truncated.",
      "keyPoints": [
        "Widening means converting a smaller compatible type to a larger one, such as int to long. It is automatic because no information is lost.",
        "Narrowing means converting a larger type to a smaller one, such as double to int. It requires an explicit cast because precision or range can be lost.",
        "Example: double d = 9.8; int n = (int) d; gives 9 because the fractional part is truncated."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Is this valid Java: int x = 1_000_000; and what is the purpose of the underscores?",
      "modelAnswer": "Yes, it is valid in Java 7 and later, and the value is still one million. Underscores in numeric literals are ignored by the compiler and exist only to improve human readability. They cannot be placed at the start or end of the literal, next to a decimal point, or right before a type suffix such as L or F.",
      "keyPoints": [
        "Yes, it is valid in Java 7 and later, and the value is still one million.",
        "Underscores in numeric literals are ignored by the compiler and exist only to improve human readability.",
        "They cannot be placed at the start or end of the literal, next to a decimal point, or right before a type suffix such as L or F."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_primitive-data-types_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "question": "Which statement best describes Primitive Data Types?",
      "options": [
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "Java has exactly 8 primitive data types — these are the most fundamental building blocks for storing data."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Primitive Data Types.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-2-primitive-types_primitive-data-types_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "question": "Which of the following are TRUE about Primitive Data Types? Select all that apply.",
      "options": [
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "Java has exactly 8 primitive data types — these are the most fundamental building blocks for storing data.",
        "The 8 Primitive Types:",
        "Unlike objects, primitive types are stored directly in memory (not as references), making them fast and memory-efficient."
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Primitive Data Types.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_primitive-data-types_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "question": "Complete the blank: \"Java has ___ 8 primitive data types — these are the most fundamental building blocks for storing data.\"",
      "options": [
        "sequence",
        "String",
        "Contrast",
        "exactly"
      ],
      "answer": 3,
      "explanation": "The missing word is 'exactly', from the notes for Primitive Data Types.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_primitive-data-types_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "question": "What is an important consideration when working with Primitive Data Types?",
      "options": [
        "Type     | Width  | Range / Notes boolean  | 1 bit  | Only two values: true or false byte     | 8 bits | -128 to 127 short    | 16 bits| -32,768 to 32,767 char     | 16 bits| A single Unicode character — written in single quotes: 'A' int      | 32 bits| -2,147,483,648 to 2,147,483,647 (default for whole numbers) long     | 64 bits| Very large whole numbers — add 'L' suffix: 100L float    | 32 bits| Single-precision decimal — add 'f' suffix: 3.14f (NOT for precise math) double   | 64 bits| Double-precision decimal — default for decimals, add 'd': 3.14d",
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program."
      ],
      "answer": 0,
      "explanation": "This is a key gotcha or note taken directly from the source for Primitive Data Types.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_data-type-limits-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Data Type Limits Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"DataTypeLimitsChallenge.java\"?\n\n___ class DataTypeLimitsChallenge {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-2-primitive-types_data-type-limits-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Data Type Limits Challenge",
      "question": "Explain the main ideas in Data Type Limits Challenge.",
      "modelAnswer": "Challenge: Declare all 8 primitive data types, assign useful values, and print each with a label. Also demonstrate integer overflow on a byte value.",
      "keyPoints": [
        "Challenge: Declare all 8 primitive data types, assign useful values, and print each with a label.",
        "Also demonstrate integer overflow on a byte value."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_data-type-limits-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Data Type Limits Challenge",
      "question": "Which statement best describes Data Type Limits Challenge?",
      "options": [
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "Challenge: Declare all 8 primitive data types, assign useful values, and print each with a label.",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "LOCAL VARIABLE SCOPE EXAMPLES"
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Data Type Limits Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_data-type-limits-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Data Type Limits Challenge",
      "question": "Complete the blank: \"___: Declare all 8 primitive data types, assign useful values, and print each with a label.\"",
      "options": [
        "Challenge",
        "sequence",
        "Contrast",
        "String"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Challenge', from the notes for Data Type Limits Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_string-concat-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Concat Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"StringConcatChallenge.java\"?\n\n___ class StringConcatChallenge {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-2-primitive-types_string-concat-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Concat Challenge",
      "question": "Explain the main ideas in String Concat Challenge.",
      "modelAnswer": "Challenge: Build strings using a first name, last name, age, and salary. Print the full name, a greeting, and a salary string formatted to 2 decimal places with String.format.",
      "keyPoints": [
        "Challenge: Build strings using a first name, last name, age, and salary.",
        "Print the full name, a greeting, and a salary string formatted to 2 decimal places with String.format."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_string-concat-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Concat Challenge",
      "question": "Which statement best describes String Concat Challenge?",
      "options": [
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "Challenge: Build strings using a first name, last name, age, and salary.",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "LOCAL VARIABLE SCOPE EXAMPLES"
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for String Concat Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_string-concat-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Concat Challenge",
      "question": "Complete the blank: \"___: Build strings using a first name, last name, age, and salary.\"",
      "options": [
        "String",
        "Contrast",
        "sequence",
        "Challenge"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Challenge', from the notes for String Concat Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_bitwise-operations-deep-problem_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Bitwise Operations Deep Problem",
      "question": "Which Java keyword correctly fills in the blank in this code from \"BitwiseOperationsDeepProblem.java\"?\n\npublic ___ boolean isOdd(int value) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-2-primitive-types_bitwise-operations-deep-problem_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Bitwise Operations Deep Problem",
      "question": "Complete the missing keyword in this snippet from \"BitwiseOperationsDeepProblem.java\".",
      "code": "        ___ (value & 1) == 1;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for BitwiseOperationsDeepProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-2-primitive-types_bitwise-operations-deep-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Bitwise Operations Deep Problem",
      "question": "Explain the main ideas in Bitwise Operations Deep Problem.",
      "modelAnswer": "Deep Problem: Bitwise Diagnostics — Given an integer, use bitwise operators to answer practical low-level questions: determine odd/even status, count the number of set bits, and swap two integers without a temporary variable by relying on XOR. The program should print a readable diagnostic report.",
      "keyPoints": [
        "Deep Problem: Bitwise Diagnostics — Given an integer, use bitwise operators to answer practical low-level questions: determine odd/even status, count the number of set bits, and swap two integers without a temporary variable by relying on XOR. The program should print a readable diagnostic report."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_bitwise-operations-deep-problem_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Bitwise Operations Deep Problem",
      "question": "Which statement best describes Bitwise Operations Deep Problem?",
      "options": [
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "Deep Problem: Bitwise Diagnostics — Given an integer, use bitwise operators to answer practical low-level questions: determine odd/even status, count the number of set bits, and swap two integers without a temporary variable by relying on XOR. The program should print a readable diagnostic report.",
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Bitwise Operations Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_bitwise-operations-deep-problem_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Bitwise Operations Deep Problem",
      "question": "Complete the blank: \"Deep ___: Bitwise Diagnostics — Given an integer, use bitwise operators to answer practical low-level questions: determine odd/even status, count the number of set bits, and swap two integers without a temporary variable by relying on XOR. The program should print a readable diagnostic report.\"",
      "options": [
        "Contrast",
        "Problem",
        "sequence",
        "String"
      ],
      "answer": 1,
      "explanation": "The missing word is 'Problem', from the notes for Bitwise Operations Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_bitwise-operations-deep-problem_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Bitwise Operations Deep Problem",
      "question": "In BitwiseOperationsDeepProblem.java, what does the method isOdd() return?",
      "options": [
        "String",
        "int",
        "void",
        "boolean"
      ],
      "answer": 3,
      "explanation": "The method isOdd() is declared with return type 'boolean' in BitwiseOperationsDeepProblem.java.",
      "tags": []
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
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    }
  ],
  "Chapter 3: Operators": [
    {
      "type": "scq",
      "qid": "chapter-3-operators_operators-operands-expressions_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "question": "Which Java keyword correctly fills in the blank in this code from \"OperatorsOperandsExpressions.java\"?\n\n___ class OperatorsOperandsExpressions {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-3-operators_operators-operands-expressions_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "question": "Explain the main ideas in Operators Operands Expressions.",
      "modelAnswer": "Summary of Operators 1) Operator --> (+) plus operator For Numeric types --> Addition",
      "keyPoints": [
        "Summary of Operators",
        "1) Operator --> (+) plus operator",
        "For Numeric types --> Addition"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview",
        "tricky"
      ],
      "question": "(INTERVIEW TRAP) What is the output of: System.out.println(10 + 20 + \"Java\");",
      "modelAnswer": "Output: 30Java + is left-to-right: 10 + 20 = 30 (arithmetic, both ints), then 30 + \"Java\" = \"30Java\" (String concat).",
      "keyPoints": [
        "Output: 30Java",
        "+ is left-to-right: 10 + 20 = 30 (arithmetic, both ints), then 30 + \"Java\" = \"30Java\" (String concat)."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview",
        "tricky"
      ],
      "question": "(INTERVIEW TRAP) What is the output of: System.out.println(\"Java\" + 10 + 20);",
      "modelAnswer": "Output: Java1020 (NOT Java30) \"Java\" + 10 = \"Java10\" (String concat), then \"Java10\" + 20 = \"Java1020\". Once a String is the left operand, all + after it are concatenation.",
      "keyPoints": [
        "Output: Java1020 (NOT Java30)",
        "\"Java\" + 10 = \"Java10\" (String concat), then \"Java10\" + 20 = \"Java1020\". Once a String is the left operand, all + after it are concatenation."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview",
        "tricky"
      ],
      "question": "(INTERVIEW TRAP) What is the output of: System.out.println(\"Java\" + (10 + 20));",
      "modelAnswer": "Output: Java30 Parentheses force (10 + 20) to be evaluated as arithmetic first = 30. Then \"Java\" + 30 = \"Java30\". This is the FIX when you want arithmetic inside a String expression: wrap with parentheses.",
      "keyPoints": [
        "Output: Java30",
        "Parentheses force (10 + 20) to be evaluated as arithmetic first = 30. Then \"Java\" + 30 = \"Java30\".",
        "This is the FIX when you want arithmetic inside a String expression: wrap with parentheses."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the golden rule for the + operator in Java when Strings are involved?",
      "modelAnswer": "Java evaluates + strictly left to right. If BOTH operands are numeric, + is arithmetic addition. The moment one operand is a String, + becomes String concatenation for that operation and all subsequent ones in the same expression. Use parentheses to control evaluation order: \"Score: \" + (a + b) gives arithmetic sum. \"Score: \" + a + b gives two separate concatenations.",
      "keyPoints": [
        "Java evaluates + strictly left to right. If BOTH operands are numeric, + is arithmetic addition. The moment one operand is a String, + becomes String concatenation for that operation and all subsequent ones in the same expression.",
        "Use parentheses to control evaluation order: \"Score: \" + (a + b) gives arithmetic sum. \"Score: \" + a + b gives two separate concatenations."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview",
        "tricky"
      ],
      "question": "(INTERVIEW TRAP) What is wrong with writing if (x = 5) instead of if (x == 5)?",
      "modelAnswer": "= is the assignment operator, while == is the equality comparison operator. With int x, if (x = 5) does not compare anything; it tries to assign 5 to x and causes a compile-time error because if requires a boolean expression, not an int. The correct comparison is if (x == 5), which evaluates to true only when x currently holds the value 5.",
      "keyPoints": [
        "= is the assignment operator, while == is the equality comparison operator.",
        "With int x, if (x = 5) does not compare anything; it tries to assign 5 to x and causes a compile-time error because if requires a boolean expression, not an int.",
        "The correct comparison is if (x == 5), which evaluates to true only when x currently holds the value 5."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview",
        "tricky"
      ],
      "question": "(INTERVIEW TRAP) What is the output of: int x = 10; String result = (x > 5) ? \"big\" : \"small\"; System.out.println(result);",
      "modelAnswer": "Output: big The ternary operator evaluates the condition x > 5. Since 10 > 5 is true, Java chooses the first expression, which is \"big\".",
      "keyPoints": [
        "Output: big",
        "The ternary operator evaluates the condition x > 5. Since 10 > 5 is true, Java chooses the first expression, which is \"big\"."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Why does byte b = 10; b += 5; compile, but b = b + 5; does not?",
      "modelAnswer": "b += 5 is a compound assignment, and Java automatically inserts an implicit cast back to byte after doing the addition. b = b + 5 does not compile because b + 5 is promoted to int, and Java will not assign that int back to byte without an explicit cast. After b += 5, the value of b becomes 15.",
      "keyPoints": [
        "b += 5 is a compound assignment, and Java automatically inserts an implicit cast back to byte after doing the addition.",
        "b = b + 5 does not compile because b + 5 is promoted to int, and Java will not assign that int back to byte without an explicit cast.",
        "After b += 5, the value of b becomes 15."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between & and && when used with boolean expressions?",
      "modelAnswer": "&& is the short-circuit logical AND. If the left side is false, Java skips evaluating the right side. & on booleans still performs AND, but it always evaluates BOTH sides even when the left side is false. This matters when the right side has side effects or could throw an exception, such as checking obj != null && obj.isReady().",
      "keyPoints": [
        "&& is the short-circuit logical AND. If the left side is false, Java skips evaluating the right side.",
        "& on booleans still performs AND, but it always evaluates BOTH sides even when the left side is false.",
        "This matters when the right side has side effects or could throw an exception, such as checking obj != null && obj.isReady()."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-3-operators_operators-operands-expressions_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "question": "Which statement best describes Operators Operands Expressions?",
      "options": [
        "Deep Problem: Expression Evaluator Utilities — Build core numeric helper methods without using Math library shortcuts. Compute powers using repeated multiplication, determine absolute value manually, find the maximum of three values, and classify a number's sign. The goal is to practice operator-driven problem solving.",
        "OPERATOR CHALLENGE",
        "immutable",
        "Summary of Operators"
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Operators Operands Expressions.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-3-operators_operators-operands-expressions_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "question": "Which of the following are TRUE about Operators Operands Expressions? Select all that apply.",
      "options": [
        "For Numeric types --> Addition",
        "OPERATOR CHALLENGE",
        "Summary of Operators",
        "1) Operator --> (+) plus operator",
        "Deep Problem: Expression Evaluator Utilities — Build core numeric helper methods without using Math library shortcuts. Compute powers using repeated multiplication, determine absolute value manually, find the maximum of three values, and classify a number's sign. The goal is to practice operator-driven problem solving."
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Operators Operands Expressions.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-3-operators_operators-operands-expressions_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "question": "Complete the blank: \"___ of Operators\"",
      "options": [
        "OPERATOR",
        "Summary",
        "Create",
        "second"
      ],
      "answer": 1,
      "explanation": "The missing word is 'Summary', from the notes for Operators Operands Expressions.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-3-operators_operator-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 3: Operators",
      "topic": "Operator Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"OperatorChallenge.java\"?\n\n___ class OperatorChallenge {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "predict",
      "qid": "chapter-3-operators_operator-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operator Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Got some remainder\");",
      "answer": [
        "Got some remainder"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-3-operators_operator-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operator Challenge",
      "question": "Explain the main ideas in Operator Challenge.",
      "modelAnswer": "OPERATOR CHALLENGE 1. Create a double variable with a value of 20.00 2. Create a second variable of type double with the value 80.00",
      "keyPoints": [
        "OPERATOR CHALLENGE",
        "1. Create a double variable with a value of 20.00",
        "2. Create a second variable of type double with the value 80.00"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-3-operators_operator-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 3: Operators",
      "topic": "Operator Challenge",
      "question": "Which statement best describes Operator Challenge?",
      "options": [
        "Summary of Operators",
        "OPERATOR CHALLENGE",
        "Deep Problem: Expression Evaluator Utilities — Build core numeric helper methods without using Math library shortcuts. Compute powers using repeated multiplication, determine absolute value manually, find the maximum of three values, and classify a number's sign. The goal is to practice operator-driven problem solving.",
        "immutable"
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Operator Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-3-operators_operator-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operator Challenge",
      "question": "Which of the following are TRUE about Operator Challenge? Select all that apply.",
      "options": [
        "Deep Problem: Expression Evaluator Utilities — Build core numeric helper methods without using Math library shortcuts. Compute powers using repeated multiplication, determine absolute value manually, find the maximum of three values, and classify a number's sign. The goal is to practice operator-driven problem solving.",
        "Summary of Operators",
        "2. Create a second variable of type double with the value 80.00",
        "OPERATOR CHALLENGE",
        "1. Create a double variable with a value of 20.00"
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Operator Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-3-operators_operator-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operator Challenge",
      "question": "Complete the blank: \"___ CHALLENGE\"",
      "options": [
        "OPERATOR",
        "Operator",
        "Numeric",
        "Summary"
      ],
      "answer": 0,
      "explanation": "The missing word is 'OPERATOR', from the notes for Operator Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-3-operators_expression-evaluator-deep-problem_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 3: Operators",
      "topic": "Expression Evaluator Deep Problem",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ExpressionEvaluatorDeepProblem.java\"?\n\npublic ___ long power(int base, int exponent) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-3-operators_expression-evaluator-deep-problem_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Expression Evaluator Deep Problem",
      "question": "Complete the missing keyword in this snippet from \"ExpressionEvaluatorDeepProblem.java\".",
      "code": "            throw ___ IllegalArgumentException(\"Exponent must be non-negative.\");\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for ExpressionEvaluatorDeepProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-3-operators_expression-evaluator-deep-problem_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Expression Evaluator Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Power calculations:\");",
      "answer": [
        "Power calculations:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-3-operators_expression-evaluator-deep-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Expression Evaluator Deep Problem",
      "question": "Explain the main ideas in Expression Evaluator Deep Problem.",
      "modelAnswer": "Deep Problem: Expression Evaluator Utilities — Build core numeric helper methods without using Math library shortcuts. Compute powers using repeated multiplication, determine absolute value manually, find the maximum of three values, and classify a number's sign. The goal is to practice operator-driven problem solving.",
      "keyPoints": [
        "Deep Problem: Expression Evaluator Utilities — Build core numeric helper methods without using Math library shortcuts. Compute powers using repeated multiplication, determine absolute value manually, find the maximum of three values, and classify a number's sign. The goal is to practice operator-driven problem solving."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-3-operators_expression-evaluator-deep-problem_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 3: Operators",
      "topic": "Expression Evaluator Deep Problem",
      "question": "Which statement best describes Expression Evaluator Deep Problem?",
      "options": [
        "Summary of Operators",
        "immutable",
        "OPERATOR CHALLENGE",
        "Deep Problem: Expression Evaluator Utilities — Build core numeric helper methods without using Math library shortcuts. Compute powers using repeated multiplication, determine absolute value manually, find the maximum of three values, and classify a number's sign. The goal is to practice operator-driven problem solving."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Expression Evaluator Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-3-operators_expression-evaluator-deep-problem_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Expression Evaluator Deep Problem",
      "question": "Complete the blank: \"Deep ___: Expression Evaluator Utilities — Build core numeric helper methods without using Math library shortcuts. Compute powers using repeated multiplication, determine absolute value manually, find the maximum of three values, and classify a number's sign. The goal is to practice operator-driven problem solving.\"",
      "options": [
        "Numeric",
        "Summary",
        "Operator",
        "Problem"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Problem', from the notes for Expression Evaluator Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-3-operators_expression-evaluator-deep-problem_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Expression Evaluator Deep Problem",
      "question": "In ExpressionEvaluatorDeepProblem.java, what does the method power() return?",
      "options": [
        "int",
        "void",
        "String",
        "long"
      ],
      "answer": 3,
      "explanation": "The method power() is declared with return type 'long' in ExpressionEvaluatorDeepProblem.java.",
      "tags": []
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
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    }
  ],
  "Chapter 5: Statements And Indentations": [
    {
      "type": "scq",
      "qid": "chapter-5-statements-and-indentations_statements-white-space-and-indentation_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "question": "Which Java keyword correctly fills in the blank in this code from \"StatementsWhiteSpaceAndIndentation.java\"?\n\n___ class StatementsWhiteSpaceAndIndentation {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "predict",
      "qid": "chapter-5-statements-and-indentations_statements-white-space-and-indentation_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "question": "What does this code print?",
      "code": "System.out.println(\"This is a test\"); // This also represents complete statement.",
      "answer": [
        "This is a test"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-5-statements-and-indentations_statements-white-space-and-indentation_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "question": "Explain the main ideas in Statements White Space And Indentation.",
      "modelAnswer": "A Java statement is a complete unit of execution. Most statements end with a semicolon (;). Types of statements: declaration statements (int x = 5;), assignment statements (x = 10;), method call statements (System.out.println(\"hi\");), and more. A single statement CAN span multiple lines — Java doesn't care about line breaks, only about the semicolon that ends the statement.",
      "keyPoints": [
        "A Java statement is a complete unit of execution. Most statements end with a semicolon (;).",
        "Types of statements: declaration statements (int x = 5;), assignment statements (x = 10;), method call statements (System.out.println(\"hi\");), and more.",
        "A single statement CAN span multiple lines — Java doesn't care about line breaks, only about the semicolon that ends the statement."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between a statement and an expression in Java?",
      "modelAnswer": "An expression produces a value, such as 2 + 3 or x > 5. A statement is a complete instruction, such as int x = 5; or System.out.println(x);.",
      "keyPoints": [
        "An expression produces a value, such as 2 + 3 or x > 5.",
        "A statement is a complete instruction, such as int x = 5; or System.out.println(x);."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Do whitespace and indentation affect Java compilation?",
      "modelAnswer": "No. Java mostly ignores extra spaces, tabs, and line breaks between tokens. They matter for readability, but not for the meaning of correctly separated code.",
      "keyPoints": [
        "No. Java mostly ignores extra spaces, tabs, and line breaks between tokens.",
        "They matter for readability, but not for the meaning of correctly separated code."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Can one statement span multiple lines or multiple statements share one line?",
      "modelAnswer": "Yes. A statement can span lines, and multiple statements can appear on one line if each is properly terminated. The semicolon ends most statements, not the line break.",
      "keyPoints": [
        "Yes. A statement can span lines, and multiple statements can appear on one line if each is properly terminated.",
        "The semicolon ends most statements, not the line break."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) Is int x = 5; a statement or an expression?",
      "modelAnswer": "It is a declaration statement. The whole line is not just an expression, even though it contains the assignment expression x = 5.",
      "keyPoints": [
        "It is a declaration statement.",
        "The whole line is not just an expression, even though it contains the assignment expression x = 5."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-5-statements-and-indentations_statements-white-space-and-indentation_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "question": "Which statement best describes Statements White Space And Indentation?",
      "options": [
        "Deep Problem: Multi-Domain Unit Converter — Implement a conversion utility that handles distance, weight, temperature, and volume. Each conversion must be isolated in its own method, and the program should generate readable tables for values 1 through 10 to simulate the kind of output a small engineering tool might need.",
        "A Java statement is a complete unit of execution. Most statements end with a semicolon (;).",
        "immutable",
        "Challenge: Use separate statements to calculate the area and perimeter of a rectangle, and the hypotenuse of a right triangle using Math.sqrt and Math.pow."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Statements White Space And Indentation.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-5-statements-and-indentations_statements-white-space-and-indentation_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "question": "Which of the following are TRUE about Statements White Space And Indentation? Select all that apply.",
      "options": [
        "A single statement CAN span multiple lines — Java doesn't care about line breaks, only about the semicolon that ends the statement.",
        "Deep Problem: Multi-Domain Unit Converter — Implement a conversion utility that handles distance, weight, temperature, and volume. Each conversion must be isolated in its own method, and the program should generate readable tables for values 1 through 10 to simulate the kind of output a small engineering tool might need.",
        "A Java statement is a complete unit of execution. Most statements end with a semicolon (;).",
        "Types of statements: declaration statements (int x = 5;), assignment statements (x = 10;), method call statements (System.out.println(\"hi\");), and more.",
        "Challenge: Use separate statements to calculate the area and perimeter of a rectangle, and the hypotenuse of a right triangle using Math.sqrt and Math.pow."
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Statements White Space And Indentation.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-5-statements-and-indentations_statements-white-space-and-indentation_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "question": "Complete the blank: \"A Java ___ is a complete unit of execution. Most statements end with a semicolon (;).\"",
      "options": [
        "statement",
        "Challenge",
        "Problem",
        "immutable"
      ],
      "answer": 0,
      "explanation": "The missing word is 'statement', from the notes for Statements White Space And Indentation.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-5-statements-and-indentations_expression-builder-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Expression Builder Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ExpressionBuilderChallenge.java\"?\n\n___ class ExpressionBuilderChallenge {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-5-statements-and-indentations_expression-builder-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Expression Builder Challenge",
      "question": "Explain the main ideas in Expression Builder Challenge.",
      "modelAnswer": "Challenge: Use separate statements to calculate the area and perimeter of a rectangle, and the hypotenuse of a right triangle using Math.sqrt and Math.pow.",
      "keyPoints": [
        "Challenge: Use separate statements to calculate the area and perimeter of a rectangle, and the hypotenuse of a right triangle using Math.sqrt and Math.pow."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-5-statements-and-indentations_expression-builder-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Expression Builder Challenge",
      "question": "Which statement best describes Expression Builder Challenge?",
      "options": [
        "Deep Problem: Multi-Domain Unit Converter — Implement a conversion utility that handles distance, weight, temperature, and volume. Each conversion must be isolated in its own method, and the program should generate readable tables for values 1 through 10 to simulate the kind of output a small engineering tool might need.",
        "Challenge: Use separate statements to calculate the area and perimeter of a rectangle, and the hypotenuse of a right triangle using Math.sqrt and Math.pow.",
        "immutable",
        "A Java statement is a complete unit of execution. Most statements end with a semicolon (;)."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Expression Builder Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-5-statements-and-indentations_expression-builder-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Expression Builder Challenge",
      "question": "Complete the blank: \"___: Use separate statements to calculate the area and perimeter of a rectangle, and the hypotenuse of a right triangle using Math.sqrt and Math.pow.\"",
      "options": [
        "statement",
        "single",
        "Challenge",
        "Types"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Challenge', from the notes for Expression Builder Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-5-statements-and-indentations_unit-converter-deep-problem_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Unit Converter Deep Problem",
      "question": "Which Java keyword correctly fills in the blank in this code from \"UnitConverterDeepProblem.java\"?\n\nprivate ___ final double KILOMETERS_TO_MILES = 0.621371;",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-5-statements-and-indentations_unit-converter-deep-problem_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Unit Converter Deep Problem",
      "question": "Complete the missing keyword in this snippet from \"UnitConverterDeepProblem.java\".",
      "code": "    private ___ final double KILOGRAMS_TO_POUNDS = 2.20462;\r",
      "answer": [
        "static"
      ],
      "explanation": "The missing keyword is 'static', taken from the parsed source for UnitConverterDeepProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-5-statements-and-indentations_unit-converter-deep-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Unit Converter Deep Problem",
      "question": "Explain the main ideas in Unit Converter Deep Problem.",
      "modelAnswer": "Deep Problem: Multi-Domain Unit Converter — Implement a conversion utility that handles distance, weight, temperature, and volume. Each conversion must be isolated in its own method, and the program should generate readable tables for values 1 through 10 to simulate the kind of output a small engineering tool might need.",
      "keyPoints": [
        "Deep Problem: Multi-Domain Unit Converter — Implement a conversion utility that handles distance, weight, temperature, and volume. Each conversion must be isolated in its own method, and the program should generate readable tables for values 1 through 10 to simulate the kind of output a small engineering tool might need."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-5-statements-and-indentations_unit-converter-deep-problem_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Unit Converter Deep Problem",
      "question": "Which statement best describes Unit Converter Deep Problem?",
      "options": [
        "A Java statement is a complete unit of execution. Most statements end with a semicolon (;).",
        "Challenge: Use separate statements to calculate the area and perimeter of a rectangle, and the hypotenuse of a right triangle using Math.sqrt and Math.pow.",
        "immutable",
        "Deep Problem: Multi-Domain Unit Converter — Implement a conversion utility that handles distance, weight, temperature, and volume. Each conversion must be isolated in its own method, and the program should generate readable tables for values 1 through 10 to simulate the kind of output a small engineering tool might need."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Unit Converter Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-5-statements-and-indentations_unit-converter-deep-problem_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Unit Converter Deep Problem",
      "question": "Complete the blank: \"Deep ___: Multi-Domain Unit Converter — Implement a conversion utility that handles distance, weight, temperature, and volume. Each conversion must be isolated in its own method, and the program should generate readable tables for values 1 through 10 to simulate the kind of output a small engineering tool might need.\"",
      "options": [
        "Types",
        "single",
        "statement",
        "Problem"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Problem', from the notes for Unit Converter Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-5-statements-and-indentations_unit-converter-deep-problem_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Unit Converter Deep Problem",
      "question": "In UnitConverterDeepProblem.java, what does the method kilometersToMiles() return?",
      "options": [
        "String",
        "int",
        "void",
        "double"
      ],
      "answer": 3,
      "explanation": "The method kilometersToMiles() is declared with return type 'double' in UnitConverterDeepProblem.java.",
      "tags": []
    },
    {
      "qid": "ocjp-chapter-5-statements-and-indentations-switch-fallthrough-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "int x = 2;\nswitch(x) {\n  case 1: System.out.println(\"one\");\n  case 2: System.out.println(\"two\");\n  case 3: System.out.println(\"three\");\n  default: System.out.println(\"default\");\n}",
      "answer": [
        "two\nthree\ndefault"
      ],
      "explanation": "Classic switch fall-through! Without break statements, execution falls through to every case below the match. case 2 matches, then falls to case 3, then default. Always add break unless fall-through is intentional.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    }
  ],
  "Chapter 6: If Else Statements": [
    {
      "type": "scq",
      "qid": "chapter-6-if-else-statements_if-example_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "question": "Which Java keyword correctly fills in the blank in this code from \"IfExample.java\"?\n\n___ class IfExample {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "predict",
      "qid": "chapter-6-if-else-statements_if-example_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "question": "What does this code print?",
      "code": "System.out.println(\"It is not an alien!\");",
      "answer": [
        "It is not an alien!"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-6-if-else-statements_if-example_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "question": "Explain the main ideas in If Example.",
      "modelAnswer": "Ternary Operator Example :- Operand one - ageOfClient == 20, in this case we are checking the condition. It will return either true or false. Operand two - true, is the value to be assigned to the variable isEighteenOrOver if the condition above is true.",
      "keyPoints": [
        "Ternary Operator Example :-",
        "Operand one - ageOfClient == 20, in this case we are checking the condition. It will return either true or false.",
        "Operand two - true, is the value to be assigned to the variable isEighteenOrOver if the condition above is true."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the dangling else problem in Java?",
      "modelAnswer": "A dangling else happens when nested if statements omit braces and it is unclear which if the else belongs to. In Java, else always matches the nearest unmatched if.",
      "keyPoints": [
        "A dangling else happens when nested if statements omit braces and it is unclear which if the else belongs to.",
        "In Java, else always matches the nearest unmatched if."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Can an if condition use non-boolean types in Java?",
      "modelAnswer": "No. Java requires the condition to be a boolean expression. Unlike C, Java does not allow numbers or object references directly as if conditions.",
      "keyPoints": [
        "No. Java requires the condition to be a boolean expression.",
        "Unlike C, Java does not allow numbers or object references directly as if conditions."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) When should you use the ternary operator instead of if-else?",
      "modelAnswer": "Use the ternary operator for short value-producing decisions, such as assigning one of two values. Use if-else when the logic is longer or you need multiple statements.",
      "keyPoints": [
        "Use the ternary operator for short value-producing decisions, such as assigning one of two values.",
        "Use if-else when the logic is longer or you need multiple statements."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Why are braces recommended even for a single if statement?",
      "modelAnswer": "Braces make the controlled block explicit and prevent bugs when more lines are added later. They also make nested conditions easier to read.",
      "keyPoints": [
        "Braces make the controlled block explicit and prevent bugs when more lines are added later.",
        "They also make nested conditions easier to read."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) What happens here: int x = 5; if (x = 5) { System.out.println(\"Hi\"); }?",
      "modelAnswer": "It does not compile because x = 5 is an int assignment expression, not a boolean condition. Java if conditions must evaluate to true or false.",
      "keyPoints": [
        "It does not compile because x = 5 is an int assignment expression, not a boolean condition.",
        "Java if conditions must evaluate to true or false."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) How many statements does if control here: if (true) System.out.println(\"A\"); System.out.println(\"B\");?",
      "modelAnswer": "Only the first statement after if is controlled by the condition. The second println is outside the if unless braces are used.",
      "keyPoints": [
        "Only the first statement after if is controlled by the condition.",
        "The second println is outside the if unless braces are used."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-6-if-else-statements_if-example_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "question": "Which statement best describes If Example?",
      "options": [
        "Deep Problem: Academic Result Classifier — Create a grading engine that converts numeric scores into fine-grained labels, determines pass/fail status, and maps results into broader academic bands such as Distinction and Merit. The main method should sweep through a range of scores to demonstrate how each rule behaves.",
        "Ternary Operator Example :-",
        "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.",
        "immutable"
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for If Example.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-6-if-else-statements_if-example_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "question": "Which of the following are TRUE about If Example? Select all that apply.",
      "options": [
        "Operand two - true, is the value to be assigned to the variable isEighteenOrOver if the condition above is true.",
        "Operand one - ageOfClient == 20, in this case we are checking the condition. It will return either true or false.",
        "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.",
        "Ternary Operator Example :-",
        "Deep Problem: Academic Result Classifier — Create a grading engine that converts numeric scores into fine-grained labels, determines pass/fail status, and maps results into broader academic bands such as Distinction and Merit. The main method should sweep through a range of scores to demonstrate how each rule behaves."
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for If Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-6-if-else-statements_if-example_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "question": "Complete the blank: \"___ Operator Example :-\"",
      "options": [
        "Ternary",
        "ifelse",
        "Structure",
        "block"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Ternary', from the notes for If Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-6-if-else-statements_if-example_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "question": "What is an important consideration when working with If Example?",
      "options": [
        "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.",
        "Deep Problem: Academic Result Classifier — Create a grading engine that converts numeric scores into fine-grained labels, determines pass/fail status, and maps results into broader academic bands such as Distinction and Merit. The main method should sweep through a range of scores to demonstrate how each rule behaves.",
        "Always initialize variables before use.",
        "IMPORTANT: Do NOT put a semicolon after if(condition) — that would end the statement before the code block, creating an empty if."
      ],
      "answer": 3,
      "explanation": "This is a key gotcha or note taken directly from the source for If Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-6-if-else-statements_code-blocks-if-then-else_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Code Blocks If Then Else",
      "question": "Which Java keyword correctly fills in the blank in this code from \"CodeBlocksIfThenElse.java\"?\n\nSystem.out.println(\"Your ___ score was \" + finalScore);",
      "options": [
        "final",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'final'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "predict",
      "qid": "chapter-6-if-else-statements_code-blocks-if-then-else_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Code Blocks If Then Else",
      "question": "What does this code print?",
      "code": "System.out.println(\"Your score was less than 5000 but greater than 1000\");",
      "answer": [
        "Your score was less than 5000 but greater than 1000"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-6-if-else-statements_code-blocks-if-then-else_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Code Blocks If Then Else",
      "question": "Explain the main ideas in Code Blocks If Then Else.",
      "modelAnswer": "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch. Structure: if(condition1) { ... } else if(condition2) { ... } else { ... } The 'else' block is the fallback — it runs only when ALL preceding conditions are false.",
      "keyPoints": [
        "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.",
        "Structure: if(condition1) { ... } else if(condition2) { ... } else { ... }",
        "The 'else' block is the fallback — it runs only when ALL preceding conditions are false."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-6-if-else-statements_code-blocks-if-then-else_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Code Blocks If Then Else",
      "question": "Which statement best describes Code Blocks If Then Else?",
      "options": [
        "Deep Problem: Academic Result Classifier — Create a grading engine that converts numeric scores into fine-grained labels, determines pass/fail status, and maps results into broader academic bands such as Distinction and Merit. The main method should sweep through a range of scores to demonstrate how each rule behaves.",
        "immutable",
        "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.",
        "Ternary Operator Example :-"
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Code Blocks If Then Else.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-6-if-else-statements_code-blocks-if-then-else_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Code Blocks If Then Else",
      "question": "Which of the following are TRUE about Code Blocks If Then Else? Select all that apply.",
      "options": [
        "Structure: if(condition1) { ... } else if(condition2) { ... } else { ... }",
        "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.",
        "Ternary Operator Example :-",
        "The 'else' block is the fallback — it runs only when ALL preceding conditions are false.",
        "Deep Problem: Academic Result Classifier — Create a grading engine that converts numeric scores into fine-grained labels, determines pass/fail status, and maps results into broader academic bands such as Distinction and Merit. The main method should sweep through a range of scores to demonstrate how each rule behaves."
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Code Blocks If Then Else.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-6-if-else-statements_code-blocks-if-then-else_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Code Blocks If Then Else",
      "question": "Complete the blank: \"___: if(condition1) { ... } else if(condition2) { ... } else { ... }\"",
      "options": [
        "Ternary",
        "value",
        "Structure",
        "Operand"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Structure', from the notes for Code Blocks If Then Else.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-6-if-else-statements_grade-classifier-deep-problem_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Grade Classifier Deep Problem",
      "question": "Which Java keyword correctly fills in the blank in this code from \"GradeClassifierDeepProblem.java\"?\n\npublic ___ String classify(int score) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-6-if-else-statements_grade-classifier-deep-problem_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Grade Classifier Deep Problem",
      "question": "Complete the missing keyword in this snippet from \"GradeClassifierDeepProblem.java\".",
      "code": "            ___ \"A+\";\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for GradeClassifierDeepProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-6-if-else-statements_grade-classifier-deep-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Grade Classifier Deep Problem",
      "question": "Explain the main ideas in Grade Classifier Deep Problem.",
      "modelAnswer": "Deep Problem: Academic Result Classifier — Create a grading engine that converts numeric scores into fine-grained labels, determines pass/fail status, and maps results into broader academic bands such as Distinction and Merit. The main method should sweep through a range of scores to demonstrate how each rule behaves.",
      "keyPoints": [
        "Deep Problem: Academic Result Classifier — Create a grading engine that converts numeric scores into fine-grained labels, determines pass/fail status, and maps results into broader academic bands such as Distinction and Merit. The main method should sweep through a range of scores to demonstrate how each rule behaves."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-6-if-else-statements_grade-classifier-deep-problem_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Grade Classifier Deep Problem",
      "question": "Which statement best describes Grade Classifier Deep Problem?",
      "options": [
        "Deep Problem: Academic Result Classifier — Create a grading engine that converts numeric scores into fine-grained labels, determines pass/fail status, and maps results into broader academic bands such as Distinction and Merit. The main method should sweep through a range of scores to demonstrate how each rule behaves.",
        "Ternary Operator Example :-",
        "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.",
        "immutable"
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Grade Classifier Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-6-if-else-statements_grade-classifier-deep-problem_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Grade Classifier Deep Problem",
      "question": "Complete the blank: \"Deep ___: Academic Result Classifier — Create a grading engine that converts numeric scores into fine-grained labels, determines pass/fail status, and maps results into broader academic bands such as Distinction and Merit. The main method should sweep through a range of scores to demonstrate how each rule behaves.\"",
      "options": [
        "value",
        "Problem",
        "Operand",
        "Ternary"
      ],
      "answer": 1,
      "explanation": "The missing word is 'Problem', from the notes for Grade Classifier Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-6-if-else-statements_grade-classifier-deep-problem_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Grade Classifier Deep Problem",
      "question": "In GradeClassifierDeepProblem.java, what does the method classify() return?",
      "options": [
        "String",
        "void",
        "boolean",
        "int"
      ],
      "answer": 0,
      "explanation": "The method classify() is declared with return type 'String' in GradeClassifierDeepProblem.java.",
      "tags": []
    },
    {
      "qid": "ocjp-chapter-6-if-else-statements-switch-fallthrough-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "int x = 2;\nswitch(x) {\n  case 1: System.out.println(\"one\");\n  case 2: System.out.println(\"two\");\n  case 3: System.out.println(\"three\");\n  default: System.out.println(\"default\");\n}",
      "answer": [
        "two\nthree\ndefault"
      ],
      "explanation": "Classic switch fall-through! Without break statements, execution falls through to every case below the match. case 2 matches, then falls to case 3, then default. Always add break unless fall-through is intentional.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    }
  ],
  "Chapter 7: Methods In Java": [
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_methods-in-java_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MethodsInJava.java\"?\n\nSystem.out.println(\"Your ___ score was \" + highScore);",
      "options": [
        "final",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'final'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_methods-in-java_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "question": "Complete the missing keyword in this snippet from \"MethodsInJava.java\".",
      "code": "        System.out.println(\"Your ___ score was \" + highScoreValue);\r",
      "answer": [
        "final"
      ],
      "explanation": "The missing keyword is 'final', taken from the parsed source for MethodsInJava.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_methods-in-java_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "question": "Explain the main ideas in Methods In Java.",
      "modelAnswer": "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed. Methods are the foundation of the DRY principle — Don't Repeat Yourself. They make code organized, readable, and maintainable. Method syntax: accessModifier static returnType methodName(paramType paramName, ...) { ... }",
      "keyPoints": [
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Methods are the foundation of the DRY principle — Don't Repeat Yourself. They make code organized, readable, and maintainable.",
        "Method syntax: accessModifier static returnType methodName(paramType paramName, ...) { ... }"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Is Java pass-by-value or pass-by-reference?",
      "modelAnswer": "Java is ALWAYS pass-by-value. For primitives, the actual value is copied into the method parameter, so changing the parameter does not change the caller's variable. For objects, the value being copied is the reference. That means the method receives a copy of the reference to the same object, so it can modify the object's fields, but reassigning the parameter to a new object does NOT change the caller's reference. Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "Java is ALWAYS pass-by-value.",
        "For primitives, the actual value is copied into the method parameter, so changing the parameter does not change the caller's variable.",
        "For objects, the value being copied is the reference. That means the method receives a copy of the reference to the same object, so it can modify the object's fields, but reassigning the parameter to a new object does NOT change the caller's reference.",
        "Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) How does Java choose between overloaded methods such as print(int x) and print(double x)?",
      "modelAnswer": "Java resolves overloads at compile time and chooses the most specific applicable method. Calling print(5) picks print(int) because the argument is already an int, so that overload is a better match than widening to double. If no exact match exists, Java may apply widening, boxing, or varargs in that general preference order.",
      "keyPoints": [
        "Java resolves overloads at compile time and chooses the most specific applicable method.",
        "Calling print(5) picks print(int) because the argument is already an int, so that overload is a better match than widening to double.",
        "If no exact match exists, Java may apply widening, boxing, or varargs in that general preference order."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between a void method and a method with a return type?",
      "modelAnswer": "A void method performs work but does not return a value to the caller. A method with a return type must return a value of that declared type on every valid execution path. You cannot write return 5; inside a void method, and you cannot use the result of calling a void method in an expression because there is no value to use.",
      "keyPoints": [
        "A void method performs work but does not return a value to the caller.",
        "A method with a return type must return a value of that declared type on every valid execution path.",
        "You cannot write return 5; inside a void method, and you cannot use the result of calling a void method in an expression because there is no value to use."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between a static method and an instance method in Java?",
      "modelAnswer": "A static method belongs to the class itself and is typically called with the class name, such as Math.max() or MyClass.doWork(). An instance method belongs to a specific object and is called on an object reference. Static methods cannot directly access instance fields or instance methods because they have no current object, but instance methods can access both instance and static members.",
      "keyPoints": [
        "A static method belongs to the class itself and is typically called with the class name, such as Math.max() or MyClass.doWork().",
        "An instance method belongs to a specific object and is called on an object reference.",
        "Static methods cannot directly access instance fields or instance methods because they have no current object, but instance methods can access both instance and static members."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_methods-in-java_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "question": "Which statement best describes Methods In Java?",
      "options": [
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method named area with one double parameter named radius.",
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Methods In Java.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_methods-in-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "question": "Which of the following are TRUE about Methods In Java? Select all that apply.",
      "options": [
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius.",
        "Method syntax: accessModifier static returnType methodName(paramType paramName, ...) { ... }",
        "Methods are the foundation of the DRY principle — Don't Repeat Yourself. They make code organized, readable, and maintainable."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Methods In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_methods-in-java_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "question": "Complete the blank: \"A ___ is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.\"",
      "options": [
        "parameter",
        "method",
        "Write",
        "needs"
      ],
      "answer": 1,
      "explanation": "The missing word is 'method', from the notes for Methods In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_methods-in-java_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "question": "In MethodsInJava.java, what does the method calculateScore() return?",
      "options": [
        "boolean",
        "String",
        "void",
        "int"
      ],
      "answer": 3,
      "explanation": "The method calculateScore() is declared with return type 'int' in MethodsInJava.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_area-calculator-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"AreaCalculatorCodingChallenge.java\"?\n\npublic ___ double area(double radius){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_area-calculator-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"AreaCalculatorCodingChallenge.java\".",
      "code": "        ___ area_of_circle;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for AreaCalculatorCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_area-calculator-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "Explain the main ideas in Area Calculator Coding Challenge.",
      "modelAnswer": "Write a method named area with one double parameter named radius. The method needs to return a double value that represents the area of a circle. If the parameter radius is negative then return -1.0 to represent an invalid value.",
      "keyPoints": [
        "Write a method named area with one double parameter named radius.",
        "The method needs to return a double value that represents the area of a circle.",
        "If the parameter radius is negative then return -1.0 to represent an invalid value."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_area-calculator-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "Which statement best describes Area Calculator Coding Challenge?",
      "options": [
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method named area with one double parameter named radius."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Area Calculator Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_area-calculator-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "Which of the following are TRUE about Area Calculator Coding Challenge? Select all that apply.",
      "options": [
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "The method needs to return a double value that represents the area of a circle.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "If the parameter radius is negative then return -1.0 to represent an invalid value."
      ],
      "answer": [
        0,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Area Calculator Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_area-calculator-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "Complete the blank: \"___ a method named area with one double parameter named radius.\"",
      "options": [
        "method",
        "Method",
        "Write",
        "Methods"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Write', from the notes for Area Calculator Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_area-calculator-coding-challenge_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "What is an important consideration when working with Area Calculator Coding Challenge?",
      "options": [
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course."
      ],
      "answer": 3,
      "explanation": "This is a key gotcha or note taken directly from the source for Area Calculator Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_area-calculator-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "In AreaCalculatorCodingChallenge.java, what does the method area() return?",
      "options": [
        "int",
        "String",
        "void",
        "double"
      ],
      "answer": 3,
      "explanation": "The method area() is declared with return type 'double' in AreaCalculatorCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_barking-dog-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"BarkingDogCodingChallenge.java\"?\n\npublic ___ boolean shouldWakeUp(boolean barking,int hourOfDay){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_barking-dog-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"BarkingDogCodingChallenge.java\".",
      "code": "        ___ wakeUp;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for BarkingDogCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_barking-dog-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "Explain the main ideas in Barking Dog Coding Challenge.",
      "modelAnswer": "We have a dog that likes to bark.  We need to wake up if the dog is barking at night! Write a method shouldWakeUp that has 2 parameters. 1st parameter should be of type boolean and be named barking it represents if our dog is currently barking.",
      "keyPoints": [
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method shouldWakeUp that has 2 parameters.",
        "1st parameter should be of type boolean and be named barking it represents if our dog is currently barking."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_barking-dog-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "Which statement best describes Barking Dog Coding Challenge?",
      "options": [
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method named area with one double parameter named radius.",
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Barking Dog Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_barking-dog-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "Which of the following are TRUE about Barking Dog Coding Challenge? Select all that apply.",
      "options": [
        "1st parameter should be of type boolean and be named barking it represents if our dog is currently barking.",
        "Write a method shouldWakeUp that has 2 parameters.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method named area with one double parameter named radius."
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Barking Dog Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_barking-dog-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "Complete the blank: \"We have a dog that ___ to bark.  We need to wake up if the dog is barking at night!\"",
      "options": [
        "method",
        "likes",
        "Method",
        "Methods"
      ],
      "answer": 1,
      "explanation": "The missing word is 'likes', from the notes for Barking Dog Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_barking-dog-coding-challenge_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "What is an important consideration when working with Barking Dog Coding Challenge?",
      "options": [
        "Write a method named area with one double parameter named radius.",
        "NOTE: The shouldWakeUp method  needs to be defined as public static like we have been doing so far in the course.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double."
      ],
      "answer": 1,
      "explanation": "This is a key gotcha or note taken directly from the source for Barking Dog Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_barking-dog-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "In BarkingDogCodingChallenge.java, what does the method shouldWakeUp() return?",
      "options": [
        "int",
        "boolean",
        "String",
        "void"
      ],
      "answer": 1,
      "explanation": "The method shouldWakeUp() is declared with return type 'boolean' in BarkingDogCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_decimal-comparator-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"DecimalComparatorCodingChallenge.java\"?\n\npublic ___ boolean areEqualByThreeDecimalPlaces(double firstNumber,double secondNumber){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_decimal-comparator-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"DecimalComparatorCodingChallenge.java\".",
      "code": "            ___ true;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for DecimalComparatorCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_decimal-comparator-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "Explain the main ideas in Decimal Comparator Coding Challenge.",
      "modelAnswer": "Write a method areEqualByThreeDecimalPlaces with two parameters of type double. The method should return boolean and it needs to return true if two double numbers are the same up to three decimal places. Otherwise, return false. EXAMPLES OF INPUT/OUTPUT:",
      "keyPoints": [
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double.",
        "The method should return boolean and it needs to return true if two double numbers are the same up to three decimal places. Otherwise, return false.",
        "EXAMPLES OF INPUT/OUTPUT:"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_decimal-comparator-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "Which statement best describes Decimal Comparator Coding Challenge?",
      "options": [
        "Write a method named area with one double parameter named radius.",
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Decimal Comparator Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_decimal-comparator-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "Which of the following are TRUE about Decimal Comparator Coding Challenge? Select all that apply.",
      "options": [
        "EXAMPLES OF INPUT/OUTPUT:",
        "The method should return boolean and it needs to return true if two double numbers are the same up to three decimal places. Otherwise, return false.",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double."
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Decimal Comparator Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_decimal-comparator-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "Complete the blank: \"___ a method areEqualByThreeDecimalPlaces with two parameters of type double.\"",
      "options": [
        "Methods",
        "method",
        "Write",
        "Method"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Write', from the notes for Decimal Comparator Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_decimal-comparator-coding-challenge_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "What is an important consideration when working with Decimal Comparator Coding Challenge?",
      "options": [
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "NOTE: The areEqualByThreeDecimalPlaces method  needs to be defined as public static like we have been doing so far in the course."
      ],
      "answer": 3,
      "explanation": "This is a key gotcha or note taken directly from the source for Decimal Comparator Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_decimal-comparator-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "In DecimalComparatorCodingChallenge.java, what does the method areEqualByThreeDecimalPlaces() return?",
      "options": [
        "void",
        "boolean",
        "int",
        "String"
      ],
      "answer": 1,
      "explanation": "The method areEqualByThreeDecimalPlaces() is declared with return type 'boolean' in DecimalComparatorCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_equality-printer-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equality Printer Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"EqualityPrinterCodingChallenge.java\"?\n\npublic ___ void printEqual(int firstNumber,int secondNumber,int thirdNumber){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_equality-printer-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equality Printer Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Invalid Value\");",
      "answer": [
        "Invalid Value"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_equality-printer-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equality Printer Coding Challenge",
      "question": "Explain the main ideas in Equality Printer Coding Challenge.",
      "modelAnswer": "Write a method printEqual with 3 parameters of type int. The method should not return anything (void). If one of the parameters is less than 0, print text \"Invalid Value\". If all numbers are equal print text \"All numbers are equal\"",
      "keyPoints": [
        "Write a method printEqual with 3 parameters of type int. The method should not return anything (void).",
        "If one of the parameters is less than 0, print text \"Invalid Value\".",
        "If all numbers are equal print text \"All numbers are equal\""
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_equality-printer-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equality Printer Coding Challenge",
      "question": "Which statement best describes Equality Printer Coding Challenge?",
      "options": [
        "Write a method printEqual with 3 parameters of type int. The method should not return anything (void).",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Equality Printer Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_equality-printer-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equality Printer Coding Challenge",
      "question": "Which of the following are TRUE about Equality Printer Coding Challenge? Select all that apply.",
      "options": [
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "If one of the parameters is less than 0, print text \"Invalid Value\".",
        "If all numbers are equal print text \"All numbers are equal\"",
        "Write a method named area with one double parameter named radius.",
        "Write a method printEqual with 3 parameters of type int. The method should not return anything (void)."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Equality Printer Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_equality-printer-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equality Printer Coding Challenge",
      "question": "Complete the blank: \"___ a method printEqual with 3 parameters of type int. The method should not return anything (void).\"",
      "options": [
        "method",
        "Methods",
        "Method",
        "Write"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Write', from the notes for Equality Printer Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_equality-printer-coding-challenge_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equality Printer Coding Challenge",
      "question": "What is an important consideration when working with Equality Printer Coding Challenge?",
      "options": [
        "Write a method named area with one double parameter named radius.",
        "TIP: Be extremely careful about spaces in the printed message.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!"
      ],
      "answer": 1,
      "explanation": "This is a key gotcha or note taken directly from the source for Equality Printer Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_equal-sum-checker-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"EqualSumCheckerCodingChallenge.java\"?\n\npublic ___ boolean hasEqualSum(int firstNumber,int secondNumber, int sum){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_equal-sum-checker-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"EqualSumCheckerCodingChallenge.java\".",
      "code": "            ___ true;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for EqualSumCheckerCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_equal-sum-checker-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "Explain the main ideas in Equal Sum Checker Coding Challenge.",
      "modelAnswer": "Write a method hasEqualSum with 3 parameters of type int. The method should return boolean and it needs to return true if the sum of the first and second parameter is equal to the third parameter. Otherwise, return false. EXAMPLES OF INPUT/OUTPUT:",
      "keyPoints": [
        "Write a method hasEqualSum with 3 parameters of type int.",
        "The method should return boolean and it needs to return true if the sum of the first and second parameter is equal to the third parameter. Otherwise, return false.",
        "EXAMPLES OF INPUT/OUTPUT:"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_equal-sum-checker-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "Which statement best describes Equal Sum Checker Coding Challenge?",
      "options": [
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method hasEqualSum with 3 parameters of type int."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Equal Sum Checker Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_equal-sum-checker-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "Which of the following are TRUE about Equal Sum Checker Coding Challenge? Select all that apply.",
      "options": [
        "Write a method hasEqualSum with 3 parameters of type int.",
        "The method should return boolean and it needs to return true if the sum of the first and second parameter is equal to the third parameter. Otherwise, return false.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius.",
        "EXAMPLES OF INPUT/OUTPUT:"
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Equal Sum Checker Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_equal-sum-checker-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "Complete the blank: \"___ a method hasEqualSum with 3 parameters of type int.\"",
      "options": [
        "method",
        "Methods",
        "Write",
        "Method"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Write', from the notes for Equal Sum Checker Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_equal-sum-checker-coding-challenge_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "What is an important consideration when working with Equal Sum Checker Coding Challenge?",
      "options": [
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method named area with one double parameter named radius.",
        "NOTE: The hasEqualSum method  needs to be defined as public static like we have been doing so far in the course."
      ],
      "answer": 3,
      "explanation": "This is a key gotcha or note taken directly from the source for Equal Sum Checker Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_equal-sum-checker-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "In EqualSumCheckerCodingChallenge.java, what does the method hasEqualSum() return?",
      "options": [
        "boolean",
        "String",
        "void",
        "int"
      ],
      "answer": 0,
      "explanation": "The method hasEqualSum() is declared with return type 'boolean' in EqualSumCheckerCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_leap-year-calculator-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"LeapYearCalculatorCodingChallenge.java\"?\n\npublic ___ boolean isLeapYear(int year) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_leap-year-calculator-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"LeapYearCalculatorCodingChallenge.java\".",
      "code": "        ___ isLeapYear;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for LeapYearCalculatorCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_leap-year-calculator-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "Explain the main ideas in Leap Year Calculator Coding Challenge.",
      "modelAnswer": "Write a method isLeapYear with a parameter of type int named year. The parameter needs to be greater than or equal to 1 and less than or equal to 9999. If the parameter is not in that range return false.",
      "keyPoints": [
        "Write a method isLeapYear with a parameter of type int named year.",
        "The parameter needs to be greater than or equal to 1 and less than or equal to 9999.",
        "If the parameter is not in that range return false."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_leap-year-calculator-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "Which statement best describes Leap Year Calculator Coding Challenge?",
      "options": [
        "Write a method isLeapYear with a parameter of type int named year.",
        "Write a method named area with one double parameter named radius.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Leap Year Calculator Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_leap-year-calculator-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "Which of the following are TRUE about Leap Year Calculator Coding Challenge? Select all that apply.",
      "options": [
        "If the parameter is not in that range return false.",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method isLeapYear with a parameter of type int named year.",
        "The parameter needs to be greater than or equal to 1 and less than or equal to 9999."
      ],
      "answer": [
        0,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Leap Year Calculator Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_leap-year-calculator-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "Complete the blank: \"___ a method isLeapYear with a parameter of type int named year.\"",
      "options": [
        "Method",
        "Methods",
        "method",
        "Write"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Write', from the notes for Leap Year Calculator Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_leap-year-calculator-coding-challenge_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "What is an important consideration when working with Leap Year Calculator Coding Challenge?",
      "options": [
        "NOTE: The method isLeapYear needs to be defined as public static like we have been doing so far in the course.",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!"
      ],
      "answer": 0,
      "explanation": "This is a key gotcha or note taken directly from the source for Leap Year Calculator Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_leap-year-calculator-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "In LeapYearCalculatorCodingChallenge.java, what does the method isLeapYear() return?",
      "options": [
        "boolean",
        "int",
        "void",
        "String"
      ],
      "answer": 0,
      "explanation": "The method isLeapYear() is declared with return type 'boolean' in LeapYearCalculatorCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_mega-bytes-converter-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Mega Bytes Converter Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MegaBytesConverterCodingChallenge.java\"?\n\npublic ___ void printMegaBytesAndKiloBytes(int kilobytes){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_mega-bytes-converter-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Mega Bytes Converter Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Invalid Value\");",
      "answer": [
        "Invalid Value"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_mega-bytes-converter-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Mega Bytes Converter Coding Challenge",
      "question": "Explain the main ideas in Mega Bytes Converter Coding Challenge.",
      "modelAnswer": "Write a method called printMegaBytesAndKiloBytes that has 1 parameter of type int with the name kiloBytes. The method should not return anything (void) and it needs to calculate the megabytes and remaining kilobytes from the kilobytes parameter. Then it needs to print a message in the format \"XX KB = YY MB and ZZ KB\".",
      "keyPoints": [
        "Write a method called printMegaBytesAndKiloBytes that has 1 parameter of type int with the name kiloBytes.",
        "The method should not return anything (void) and it needs to calculate the megabytes and remaining kilobytes from the kilobytes parameter.",
        "Then it needs to print a message in the format \"XX KB = YY MB and ZZ KB\"."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_mega-bytes-converter-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Mega Bytes Converter Coding Challenge",
      "question": "Which statement best describes Mega Bytes Converter Coding Challenge?",
      "options": [
        "Write a method named area with one double parameter named radius.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method called printMegaBytesAndKiloBytes that has 1 parameter of type int with the name kiloBytes."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Mega Bytes Converter Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_mega-bytes-converter-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Mega Bytes Converter Coding Challenge",
      "question": "Which of the following are TRUE about Mega Bytes Converter Coding Challenge? Select all that apply.",
      "options": [
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "The method should not return anything (void) and it needs to calculate the megabytes and remaining kilobytes from the kilobytes parameter.",
        "Write a method called printMegaBytesAndKiloBytes that has 1 parameter of type int with the name kiloBytes.",
        "Then it needs to print a message in the format \"XX KB = YY MB and ZZ KB\"."
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Mega Bytes Converter Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_mega-bytes-converter-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Mega Bytes Converter Coding Challenge",
      "question": "Complete the blank: \"___ a method called printMegaBytesAndKiloBytes that has 1 parameter of type int with the name kiloBytes.\"",
      "options": [
        "Methods",
        "Method",
        "method",
        "Write"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Write', from the notes for Mega Bytes Converter Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_mega-bytes-converter-coding-challenge_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Mega Bytes Converter Coding Challenge",
      "question": "What is an important consideration when working with Mega Bytes Converter Coding Challenge?",
      "options": [
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "TIP: Be extremely careful about spaces in the printed message.",
        "Write a method named area with one double parameter named radius."
      ],
      "answer": 2,
      "explanation": "This is a key gotcha or note taken directly from the source for Mega Bytes Converter Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_methods-challenge-problem_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods Challenge Problem",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MethodsChallengeProblem.java\"?\n\npublic ___ void displayHighScorePosition(String name, int position){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_methods-challenge-problem_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods Challenge Problem",
      "question": "Complete the missing keyword in this snippet from \"MethodsChallengeProblem.java\".",
      "code": "    public ___ int calculateHighScorePosition(int score){\r",
      "answer": [
        "static"
      ],
      "explanation": "The missing keyword is 'static', taken from the parsed source for MethodsChallengeProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_methods-challenge-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods Challenge Problem",
      "question": "Explain the main ideas in Methods Challenge Problem.",
      "modelAnswer": "Create a method called displayHighScorePosition. It should have player's name as a parameter, and a 2nd parameter as a position in the high score table. You should display the players name along with a message like \" managed to get into position \" and the position they got and a further message \" on the high score table \".",
      "keyPoints": [
        "Create a method called displayHighScorePosition. It should have player's name as a parameter, and a 2nd parameter as a position in the high score table.",
        "You should display the players name along with a message like \" managed to get into position \" and the position they got and a further message",
        "\" on the high score table \"."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_methods-challenge-problem_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods Challenge Problem",
      "question": "Which statement best describes Methods Challenge Problem?",
      "options": [
        "Create a method called displayHighScorePosition. It should have player's name as a parameter, and a 2nd parameter as a position in the high score table.",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!"
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Methods Challenge Problem.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_methods-challenge-problem_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods Challenge Problem",
      "question": "Which of the following are TRUE about Methods Challenge Problem? Select all that apply.",
      "options": [
        "Write a method named area with one double parameter named radius.",
        "You should display the players name along with a message like \" managed to get into position \" and the position they got and a further message",
        "Create a method called displayHighScorePosition. It should have player's name as a parameter, and a 2nd parameter as a position in the high score table.",
        "\" on the high score table \".",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Methods Challenge Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_methods-challenge-problem_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods Challenge Problem",
      "question": "Complete the blank: \"___ a method called displayHighScorePosition. It should have player's name as a parameter, and a 2nd parameter as a position in the high score table.\"",
      "options": [
        "method",
        "Method",
        "Methods",
        "Create"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Create', from the notes for Methods Challenge Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_methods-challenge-problem_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods Challenge Problem",
      "question": "In MethodsChallengeProblem.java, what does the method calculateHighScorePosition() return?",
      "options": [
        "void",
        "boolean",
        "String",
        "int"
      ],
      "answer": 3,
      "explanation": "The method calculateHighScorePosition() is declared with return type 'int' in MethodsChallengeProblem.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_minutes-to-years-and-days-calculator-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Minutes To Years And Days Calculator Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MinutesToYearsAndDaysCalculatorCodingChallenge.java\"?\n\npublic ___ void printYearsAndDays(long minutes){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_minutes-to-years-and-days-calculator-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Minutes To Years And Days Calculator Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Invalid value\");",
      "answer": [
        "Invalid value"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_minutes-to-years-and-days-calculator-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Minutes To Years And Days Calculator Coding Challenge",
      "question": "Explain the main ideas in Minutes To Years And Days Calculator Coding Challenge.",
      "modelAnswer": "Write a method printYearsAndDays with parameter of type long named minutes. The method should not return anything (void) and it needs to calculate the years and days from the minutes parameter. If the parameter is less than 0, print text \"Invalid Value\".",
      "keyPoints": [
        "Write a method printYearsAndDays with parameter of type long named minutes.",
        "The method should not return anything (void) and it needs to calculate the years and days from the minutes parameter.",
        "If the parameter is less than 0, print text \"Invalid Value\"."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_minutes-to-years-and-days-calculator-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Minutes To Years And Days Calculator Coding Challenge",
      "question": "Which statement best describes Minutes To Years And Days Calculator Coding Challenge?",
      "options": [
        "Write a method printYearsAndDays with parameter of type long named minutes.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!"
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Minutes To Years And Days Calculator Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_minutes-to-years-and-days-calculator-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Minutes To Years And Days Calculator Coding Challenge",
      "question": "Which of the following are TRUE about Minutes To Years And Days Calculator Coding Challenge? Select all that apply.",
      "options": [
        "The method should not return anything (void) and it needs to calculate the years and days from the minutes parameter.",
        "Write a method printYearsAndDays with parameter of type long named minutes.",
        "Write a method named area with one double parameter named radius.",
        "If the parameter is less than 0, print text \"Invalid Value\".",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Minutes To Years And Days Calculator Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_minutes-to-years-and-days-calculator-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Minutes To Years And Days Calculator Coding Challenge",
      "question": "Complete the blank: \"___ a method printYearsAndDays with parameter of type long named minutes.\"",
      "options": [
        "Methods",
        "Write",
        "method",
        "Method"
      ],
      "answer": 1,
      "explanation": "The missing word is 'Write', from the notes for Minutes To Years And Days Calculator Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_minutes-to-years-and-days-calculator-coding-challenge_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Minutes To Years And Days Calculator Coding Challenge",
      "question": "What is an important consideration when working with Minutes To Years And Days Calculator Coding Challenge?",
      "options": [
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "* Be extra careful about spaces in the printed message."
      ],
      "answer": 3,
      "explanation": "This is a key gotcha or note taken directly from the source for Minutes To Years And Days Calculator Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_playing-cat-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PlayingCatCodingChallenge.java\"?\n\npublic ___ boolean isCatPlaying(boolean isSummer,int temperature){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_playing-cat-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"PlayingCatCodingChallenge.java\".",
      "code": "        ___ isPlaying;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for PlayingCatCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_playing-cat-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "Explain the main ideas in Playing Cat Coding Challenge.",
      "modelAnswer": "The cats spend most of the day playing. In particular, they play if the temperature is between 25 and 35 (inclusive). Unless it is summer, then the upper limit is 45 (inclusive) instead of 35. Write a method isCatPlaying that has 2 parameters. Method needs to return true if the cat is playing, otherwise return false 1st parameter should be of type boolean and be named summer it represents if it is summer.",
      "keyPoints": [
        "The cats spend most of the day playing. In particular, they play if the temperature is between 25 and 35 (inclusive). Unless it is summer, then the upper limit is 45 (inclusive) instead of 35.",
        "Write a method isCatPlaying that has 2 parameters. Method needs to return true if the cat is playing, otherwise return false",
        "1st parameter should be of type boolean and be named summer it represents if it is summer."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_playing-cat-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "Which statement best describes Playing Cat Coding Challenge?",
      "options": [
        "The cats spend most of the day playing. In particular, they play if the temperature is between 25 and 35 (inclusive). Unless it is summer, then the upper limit is 45 (inclusive) instead of 35.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Playing Cat Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_playing-cat-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "Which of the following are TRUE about Playing Cat Coding Challenge? Select all that apply.",
      "options": [
        "1st parameter should be of type boolean and be named summer it represents if it is summer.",
        "Write a method named area with one double parameter named radius.",
        "Write a method isCatPlaying that has 2 parameters. Method needs to return true if the cat is playing, otherwise return false",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "The cats spend most of the day playing. In particular, they play if the temperature is between 25 and 35 (inclusive). Unless it is summer, then the upper limit is 45 (inclusive) instead of 35."
      ],
      "answer": [
        0,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Playing Cat Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_playing-cat-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "Complete the blank: \"The cats ___ most of the day playing. In particular, they play if the temperature is between 25 and 35 (inclusive). Unless it is summer, then the upper limit is 45 (inclusive) instead of 35.\"",
      "options": [
        "Method",
        "Methods",
        "spend",
        "method"
      ],
      "answer": 2,
      "explanation": "The missing word is 'spend', from the notes for Playing Cat Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_playing-cat-coding-challenge_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "What is an important consideration when working with Playing Cat Coding Challenge?",
      "options": [
        "NOTES",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!"
      ],
      "answer": 0,
      "explanation": "This is a key gotcha or note taken directly from the source for Playing Cat Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_playing-cat-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "In PlayingCatCodingChallenge.java, what does the method isCatPlaying() return?",
      "options": [
        "void",
        "boolean",
        "String",
        "int"
      ],
      "answer": 1,
      "explanation": "The method isCatPlaying() is declared with return type 'boolean' in PlayingCatCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_positive-negative-zero-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Positive Negative Zero Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PositiveNegativeZeroCodingChallenge.java\"?\n\npublic ___ void checkNumber(int number){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_positive-negative-zero-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Positive Negative Zero Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"positive\");",
      "answer": [
        "positive"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_positive-negative-zero-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Positive Negative Zero Coding Challenge",
      "question": "Explain the main ideas in Positive Negative Zero Coding Challenge.",
      "modelAnswer": "Positive, Negative or Zero Write a method called checkNumber with an int parameter named number. The method should not return any value, and it needs to print out:",
      "keyPoints": [
        "Positive, Negative or Zero",
        "Write a method called checkNumber with an int parameter named number.",
        "The method should not return any value, and it needs to print out:"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_positive-negative-zero-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Positive Negative Zero Coding Challenge",
      "question": "Which statement best describes Positive Negative Zero Coding Challenge?",
      "options": [
        "Positive, Negative or Zero",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!"
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Positive Negative Zero Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_positive-negative-zero-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Positive Negative Zero Coding Challenge",
      "question": "Which of the following are TRUE about Positive Negative Zero Coding Challenge? Select all that apply.",
      "options": [
        "Write a method named area with one double parameter named radius.",
        "Positive, Negative or Zero",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method called checkNumber with an int parameter named number.",
        "The method should not return any value, and it needs to print out:"
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Positive Negative Zero Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_positive-negative-zero-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Positive Negative Zero Coding Challenge",
      "question": "Complete the blank: \"___, Negative or Zero\"",
      "options": [
        "Positive",
        "Method",
        "Methods",
        "method"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Positive', from the notes for Positive Negative Zero Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_speed-converter-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SpeedConverterCodingChallenge.java\"?\n\npublic ___ long toMilesPerHour(double kilometersPerHour){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_speed-converter-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"SpeedConverterCodingChallenge.java\".",
      "code": "        ___ toMilesPerHour;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for SpeedConverterCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_speed-converter-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Invalid Value\");",
      "answer": [
        "Invalid Value"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_speed-converter-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "Explain the main ideas in Speed Converter Coding Challenge.",
      "modelAnswer": "Write a method called toMilesPerHour that has 1 parameter of type double with the name kilometersPerHour. This method needs to return the rounded value of the calculation of type long. If the parameter kilometersPerHour is less than 0, the method toMilesPerHour needs to return -1 to indicate an invalid value. Otherwise, if it is positive, calculate the value of miles per hour, round it and return it. For conversion and rounding, check the notes in the text below.",
      "keyPoints": [
        "Write a method called toMilesPerHour that has 1 parameter of type double with the name kilometersPerHour. This method needs to return the rounded value of the calculation of type long.",
        "If the parameter kilometersPerHour is less than 0, the method toMilesPerHour needs to return -1 to indicate an invalid value.",
        "Otherwise, if it is positive, calculate the value of miles per hour, round it and return it. For conversion and rounding, check the notes in the text below."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_speed-converter-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "Which statement best describes Speed Converter Coding Challenge?",
      "options": [
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method called toMilesPerHour that has 1 parameter of type double with the name kilometersPerHour. This method needs to return the rounded value of the calculation of type long.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Speed Converter Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_speed-converter-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "Which of the following are TRUE about Speed Converter Coding Challenge? Select all that apply.",
      "options": [
        "If the parameter kilometersPerHour is less than 0, the method toMilesPerHour needs to return -1 to indicate an invalid value.",
        "Write a method named area with one double parameter named radius.",
        "Write a method called toMilesPerHour that has 1 parameter of type double with the name kilometersPerHour. This method needs to return the rounded value of the calculation of type long.",
        "Otherwise, if it is positive, calculate the value of miles per hour, round it and return it. For conversion and rounding, check the notes in the text below.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Speed Converter Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_speed-converter-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "Complete the blank: \"___ a method called toMilesPerHour that has 1 parameter of type double with the name kilometersPerHour. This method needs to return the rounded value of the calculation of type long.\"",
      "options": [
        "Method",
        "Methods",
        "Write",
        "method"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Write', from the notes for Speed Converter Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_speed-converter-coding-challenge_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "What is an important consideration when working with Speed Converter Coding Challenge?",
      "options": [
        "Write a method named area with one double parameter named radius.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Otherwise, if it is positive, calculate the value of miles per hour, round it and return it. For conversion and rounding, check the notes in the text below.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": 2,
      "explanation": "This is a key gotcha or note taken directly from the source for Speed Converter Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_speed-converter-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "In SpeedConverterCodingChallenge.java, what does the method toMilesPerHour() return?",
      "options": [
        "long",
        "void",
        "String",
        "int"
      ],
      "answer": 0,
      "explanation": "The method toMilesPerHour() is declared with return type 'long' in SpeedConverterCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_teen-number-checker-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"TeenNumberCheckerCodingChallenge.java\"?\n\npublic ___ boolean hasTeen(int firstNumber, int secondNumber, int thirdNumber){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_teen-number-checker-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"TeenNumberCheckerCodingChallenge.java\".",
      "code": "           ___ true;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for TeenNumberCheckerCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_teen-number-checker-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "Explain the main ideas in Teen Number Checker Coding Challenge.",
      "modelAnswer": "We'll say that a number is \"teen\" if it is in the range 13 -19 (inclusive). Write a method named hasTeen with 3 parameters of type int. The method should return boolean and it needs to return true if one of the parameters is in range 13(inclusive) - 19 (inclusive). Otherwise return false.",
      "keyPoints": [
        "We'll say that a number is \"teen\" if it is in the range 13 -19 (inclusive).",
        "Write a method named hasTeen with 3 parameters of type int.",
        "The method should return boolean and it needs to return true if one of the parameters is in range 13(inclusive) - 19 (inclusive). Otherwise return false."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_teen-number-checker-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "Which statement best describes Teen Number Checker Coding Challenge?",
      "options": [
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius.",
        "We'll say that a number is \"teen\" if it is in the range 13 -19 (inclusive).",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!"
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Teen Number Checker Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_teen-number-checker-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "Which of the following are TRUE about Teen Number Checker Coding Challenge? Select all that apply.",
      "options": [
        "Write a method named hasTeen with 3 parameters of type int.",
        "The method should return boolean and it needs to return true if one of the parameters is in range 13(inclusive) - 19 (inclusive). Otherwise return false.",
        "We'll say that a number is \"teen\" if it is in the range 13 -19 (inclusive).",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for Teen Number Checker Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_teen-number-checker-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "Complete the blank: \"We'll say that a ___ is \"teen\" if it is in the range 13 -19 (inclusive).\"",
      "options": [
        "Methods",
        "method",
        "Method",
        "number"
      ],
      "answer": 3,
      "explanation": "The missing word is 'number', from the notes for Teen Number Checker Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_teen-number-checker-coding-challenge_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "What is an important consideration when working with Teen Number Checker Coding Challenge?",
      "options": [
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
        "Write a method named area with one double parameter named radius.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!"
      ],
      "answer": 1,
      "explanation": "This is a key gotcha or note taken directly from the source for Teen Number Checker Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_teen-number-checker-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "In TeenNumberCheckerCodingChallenge.java, what does the method hasTeen() return?",
      "options": [
        "void",
        "int",
        "boolean",
        "String"
      ],
      "answer": 2,
      "explanation": "The method hasTeen() is declared with return type 'boolean' in TeenNumberCheckerCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_recursion-deep-problem_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Recursion Deep Problem",
      "question": "Which Java keyword correctly fills in the blank in this code from \"RecursionDeepProblem.java\"?\n\npublic ___ long factorialRecursive(int number) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_recursion-deep-problem_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Recursion Deep Problem",
      "question": "Complete the missing keyword in this snippet from \"RecursionDeepProblem.java\".",
      "code": "            throw ___ IllegalArgumentException(\"Factorial is undefined for negative numbers.\");\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for RecursionDeepProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_recursion-deep-problem_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Recursion Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Factorial comparison:\");",
      "answer": [
        "Factorial comparison:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_recursion-deep-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Recursion Deep Problem",
      "question": "Explain the main ideas in Recursion Deep Problem.",
      "modelAnswer": "Deep Problem: Recursive Number Toolkit — Implement recursive solutions for factorial, Fibonacci, digit summation, and number reversal, while also comparing iterative and recursive factorial side by side. The challenge highlights where recursion is elegant and where iteration can be more direct.",
      "keyPoints": [
        "Deep Problem: Recursive Number Toolkit — Implement recursive solutions for factorial, Fibonacci, digit summation, and number reversal, while also comparing iterative and recursive factorial side by side. The challenge highlights where recursion is elegant and where iteration can be more direct."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_recursion-deep-problem_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Recursion Deep Problem",
      "question": "Which statement best describes Recursion Deep Problem?",
      "options": [
        "Deep Problem: Recursive Number Toolkit — Implement recursive solutions for factorial, Fibonacci, digit summation, and number reversal, while also comparing iterative and recursive factorial side by side. The challenge highlights where recursion is elegant and where iteration can be more direct.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Recursion Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_recursion-deep-problem_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Recursion Deep Problem",
      "question": "Complete the blank: \"Deep ___: Recursive Number Toolkit — Implement recursive solutions for factorial, Fibonacci, digit summation, and number reversal, while also comparing iterative and recursive factorial side by side. The challenge highlights where recursion is elegant and where iteration can be more direct.\"",
      "options": [
        "Problem",
        "method",
        "Method",
        "Methods"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Problem', from the notes for Recursion Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_recursion-deep-problem_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Recursion Deep Problem",
      "question": "In RecursionDeepProblem.java, what does the method factorialRecursive() return?",
      "options": [
        "void",
        "long",
        "String",
        "int"
      ],
      "answer": 1,
      "explanation": "The method factorialRecursive() is declared with return type 'long' in RecursionDeepProblem.java.",
      "tags": []
    },
    {
      "qid": "ocjp-chapter-7-methods-in-java-pass-by-value-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "static void change(int x) { x = 99; }\nint a = 5;\nchange(a);\nSystem.out.println(a);",
      "answer": [
        "5"
      ],
      "explanation": "Java is ALWAYS pass-by-value. The method gets a copy of a. Changing x inside the method has no effect on a. This is one of the most common OCJP traps.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-7-methods-in-java-overload-resolution-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    }
  ],
  "Chapter 8: Switch Statements": [
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-in-java_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SwitchStatementInJava.java\"?\n\npublic ___ void ifElseExample(int value){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-8-switch-statements_switch-statement-in-java_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "question": "Complete the missing keyword in this snippet from \"SwitchStatementInJava.java\".",
      "code": "    public ___ void switchCase(int value){\r",
      "answer": [
        "static"
      ],
      "explanation": "The missing keyword is 'static', taken from the parsed source for SwitchStatementInJava.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-8-switch-statements_switch-statement-in-java_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "question": "What does this code print?",
      "code": "System.out.println(\"Value is 1\");",
      "answer": [
        "Value is 1"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-8-switch-statements_switch-statement-in-java_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "question": "Explain the main ideas in Switch Statement In Java.",
      "modelAnswer": "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values. Switch is cleaner and more readable than nested if-else when you have many possible values to test. switch can be used with: byte, short, char, int (primitives), and String (since Java 7), as well as enum types.",
      "keyPoints": [
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "Switch is cleaner and more readable than nested if-else when you have many possible values to test.",
        "switch can be used with: byte, short, char, int (primitives), and String (since Java 7), as well as enum types."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What data types can be used in a traditional Java switch statement?",
      "modelAnswer": "switch supports byte, short, char, int, their wrapper types, enum types, and String. It does not support every type, so larger or unrelated types still need if-else logic.",
      "keyPoints": [
        "switch supports byte, short, char, int, their wrapper types, enum types, and String.",
        "It does not support every type, so larger or unrelated types still need if-else logic."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is fall-through in a switch statement, and when is it useful?",
      "modelAnswer": "Fall-through means execution continues into the next case when break is omitted. It is useful when multiple cases should share the same logic, but accidental fall-through is a common bug.",
      "keyPoints": [
        "Fall-through means execution continues into the next case when break is omitted.",
        "It is useful when multiple cases should share the same logic, but accidental fall-through is a common bug."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the default case in a switch statement, and is it required?",
      "modelAnswer": "default runs when no case label matches the switch value. It is optional, but it is often useful for invalid or unexpected values.",
      "keyPoints": [
        "default runs when no case label matches the switch value.",
        "It is optional, but it is often useful for invalid or unexpected values."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) When is switch usually preferred over a long if-else chain?",
      "modelAnswer": "switch is cleaner when one expression is compared against many fixed constant values. if-else is better when conditions are ranges, combinations, or more complex boolean expressions.",
      "keyPoints": [
        "switch is cleaner when one expression is compared against many fixed constant values.",
        "if-else is better when conditions are ranges, combinations, or more complex boolean expressions."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) What prints here: int x = 2; switch (x) { case 1: System.out.print(\"A\"); case 2: System.out.print(\"B\"); default: System.out.print(\"C\"); }?",
      "modelAnswer": "It prints BC. Execution starts at case 2 and falls through to default because there are no break statements.",
      "keyPoints": [
        "It prints BC.",
        "Execution starts at case 2 and falls through to default because there are no break statements."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) Can a traditional switch use long or boolean as the selector?",
      "modelAnswer": "No. long and boolean are not valid selector types for a traditional switch statement. For those cases, use if-else instead.",
      "keyPoints": [
        "No. long and boolean are not valid selector types for a traditional switch statement.",
        "For those cases, use if-else instead."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-in-java_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "question": "Which statement best describes Switch Statement In Java?",
      "options": [
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "Write a method called printNumberInWord.",
        "Write a method isLeapYear with a parameter of type int named year."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Switch Statement In Java.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-8-switch-statements_switch-statement-in-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "question": "Which of the following are TRUE about Switch Statement In Java? Select all that apply.",
      "options": [
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "Write a method isLeapYear with a parameter of type int named year.",
        "Switch is cleaner and more readable than nested if-else when you have many possible values to test.",
        "switch can be used with: byte, short, char, int (primitives), and String (since Java 7), as well as enum types."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Switch Statement In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-in-java_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "question": "Complete the blank: \"The ___ statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.\"",
      "options": [
        "arrow",
        "enhanced",
        "Traditional",
        "switch"
      ],
      "answer": 3,
      "explanation": "The missing word is 'switch', from the notes for Switch Statement In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-in-java_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "question": "In SwitchStatementInJava.java, what does the method getQuarter() return?",
      "options": [
        "int",
        "String",
        "boolean",
        "void"
      ],
      "answer": 1,
      "explanation": "The method getQuarter() is declared with return type 'String' in SwitchStatementInJava.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_enhanced-switch-statement-in-java_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "Which Java keyword correctly fills in the blank in this code from \"EnhancedSwitchStatementInJava.java\"?\n\npublic ___ String getQuarter(String month){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-8-switch-statements_enhanced-switch-statement-in-java_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "Complete the missing keyword in this snippet from \"EnhancedSwitchStatementInJava.java\".",
      "code": "        ___ switch (month) { // ___ keyword is used before the switch keyword\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for EnhancedSwitchStatementInJava.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-8-switch-statements_enhanced-switch-statement-in-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "What does this code print?",
      "code": "System.out.println(\"Value is 1\");",
      "answer": [
        "Value is 1"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-8-switch-statements_enhanced-switch-statement-in-java_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "Explain the main ideas in Enhanced Switch Statement In Java.",
      "modelAnswer": "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14. It uses the arrow (->) syntax instead of colon (:), eliminating fall-through by design — no 'break' needed. Traditional switch: case 1: ... break;   Enhanced switch: case 1 -> ...",
      "keyPoints": [
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "It uses the arrow (->) syntax instead of colon (:), eliminating fall-through by design — no 'break' needed.",
        "Traditional switch: case 1: ... break;   Enhanced switch: case 1 -> ..."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between a traditional switch statement and an enhanced switch expression?",
      "modelAnswer": "Traditional switch uses colon syntax and can fall through, while enhanced switch uses arrow syntax and does not fall through. Enhanced switch can also be used as an expression that directly returns a value.",
      "keyPoints": [
        "Traditional switch uses colon syntax and can fall through, while enhanced switch uses arrow syntax and does not fall through.",
        "Enhanced switch can also be used as an expression that directly returns a value."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Can an enhanced switch return a value?",
      "modelAnswer": "Yes. An enhanced switch can be used on the right side of an assignment or in a return statement. Each case provides the result with an expression or with yield inside a block.",
      "keyPoints": [
        "Yes. An enhanced switch can be used on the right side of an assignment or in a return statement.",
        "Each case provides the result with an expression or with yield inside a block."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the purpose of yield in an enhanced switch?",
      "modelAnswer": "yield returns a value from a case block when that case needs multiple statements. It is only used inside switch expressions, not ordinary methods.",
      "keyPoints": [
        "yield returns a value from a case block when that case needs multiple statements.",
        "It is only used inside switch expressions, not ordinary methods."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) Does an enhanced switch fall through here: switch (x) { case 1 -> System.out.println(\"A\"); case 2 -> System.out.println(\"B\"); default -> System.out.println(\"C\"); }?",
      "modelAnswer": "No. Each arrow case is isolated, so execution stops after the matching case. That is why enhanced switch does not need break statements.",
      "keyPoints": [
        "No. Each arrow case is isolated, so execution stops after the matching case.",
        "That is why enhanced switch does not need break statements."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_enhanced-switch-statement-in-java_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "Which statement best describes Enhanced Switch Statement In Java?",
      "options": [
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "Write a method called printNumberInWord.",
        "Write a method isLeapYear with a parameter of type int named year."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Enhanced Switch Statement In Java.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-8-switch-statements_enhanced-switch-statement-in-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "Which of the following are TRUE about Enhanced Switch Statement In Java? Select all that apply.",
      "options": [
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "It uses the arrow (->) syntax instead of colon (:), eliminating fall-through by design — no 'break' needed.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "Traditional switch: case 1: ... break;   Enhanced switch: case 1 -> ...",
        "Write a method isLeapYear with a parameter of type int named year."
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Enhanced Switch Statement In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_enhanced-switch-statement-in-java_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "Complete the blank: \"The ___ (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.\"",
      "options": [
        "enhanced",
        "Switch",
        "switch",
        "short"
      ],
      "answer": 0,
      "explanation": "The missing word is 'enhanced', from the notes for Enhanced Switch Statement In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_enhanced-switch-statement-in-java_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "In EnhancedSwitchStatementInJava.java, what does the method getQuarter() return?",
      "options": [
        "boolean",
        "void",
        "String",
        "int"
      ],
      "answer": 2,
      "explanation": "The method getQuarter() is declared with return type 'String' in EnhancedSwitchStatementInJava.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_number-of-days-in-a-month-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"NumberOfDaysInAMonthCodingChallenge.java\"?\n\npublic ___ boolean isLeapYear(int year){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-8-switch-statements_number-of-days-in-a-month-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"NumberOfDaysInAMonthCodingChallenge.java\".",
      "code": "            ___ false;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for NumberOfDaysInAMonthCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-8-switch-statements_number-of-days-in-a-month-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "Explain the main ideas in Number Of Days In A Month Coding Challenge.",
      "modelAnswer": "Write a method isLeapYear with a parameter of type int named year. The parameter needs to be greater than or equal to 1 and less than or equal to 9999. If the parameter is not in that range return false.",
      "keyPoints": [
        "Write a method isLeapYear with a parameter of type int named year.",
        "The parameter needs to be greater than or equal to 1 and less than or equal to 9999.",
        "If the parameter is not in that range return false."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_number-of-days-in-a-month-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "Which statement best describes Number Of Days In A Month Coding Challenge?",
      "options": [
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "Write a method called printNumberInWord.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "Write a method isLeapYear with a parameter of type int named year."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Number Of Days In A Month Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-8-switch-statements_number-of-days-in-a-month-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "Which of the following are TRUE about Number Of Days In A Month Coding Challenge? Select all that apply.",
      "options": [
        "Write a method isLeapYear with a parameter of type int named year.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "If the parameter is not in that range return false.",
        "The parameter needs to be greater than or equal to 1 and less than or equal to 9999."
      ],
      "answer": [
        0,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Number Of Days In A Month Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_number-of-days-in-a-month-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "Complete the blank: \"___ a method isLeapYear with a parameter of type int named year.\"",
      "options": [
        "Write",
        "short",
        "Switch",
        "switch"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Write', from the notes for Number Of Days In A Month Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_number-of-days-in-a-month-coding-challenge_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "What is an important consideration when working with Number Of Days In A Month Coding Challenge?",
      "options": [
        "NOTE:  The solution to the Leap Year coding exercise earlier in the course created the isLeapYear method. You can use that solution if you wish.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "Write a method called printNumberInWord."
      ],
      "answer": 0,
      "explanation": "This is a key gotcha or note taken directly from the source for Number Of Days In A Month Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_number-of-days-in-a-month-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "In NumberOfDaysInAMonthCodingChallenge.java, what does the method isLeapYear() return?",
      "options": [
        "void",
        "int",
        "String",
        "boolean"
      ],
      "answer": 3,
      "explanation": "The method isLeapYear() is declared with return type 'boolean' in NumberOfDaysInAMonthCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_print-number-in-a-world-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Print Number In A World Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PrintNumberInAWorldCodingChallenge.java\"?\n\npublic ___ String returnNumberInAWordUsingTraditionalSwitch(int number) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-8-switch-statements_print-number-in-a-world-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Print Number In A World Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"PrintNumberInAWorldCodingChallenge.java\".",
      "code": "                ___ \"ZERO\";\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for PrintNumberInAWorldCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-8-switch-statements_print-number-in-a-world-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Print Number In A World Coding Challenge",
      "question": "What does this code print?",
      "code": "case 3: System.out.println(\"THREE\");",
      "answer": [
        "THREE"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-8-switch-statements_print-number-in-a-world-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Print Number In A World Coding Challenge",
      "question": "Explain the main ideas in Print Number In A World Coding Challenge.",
      "modelAnswer": "Write a method called printNumberInWord. The method has one parameter number which is the whole number. The method needs to print \"ZERO\", \"ONE\", \"TWO\", ... \"NINE\", \"OTHER\" if the int parameter number is 0, 1, 2, .... 9 or other for any other number including negative numbers.",
      "keyPoints": [
        "Write a method called printNumberInWord.",
        "The method has one parameter number which is the whole number.",
        "The method needs to print \"ZERO\", \"ONE\", \"TWO\", ... \"NINE\", \"OTHER\" if the int parameter number is 0, 1, 2, .... 9 or other for any other number including negative numbers."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_print-number-in-a-world-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Print Number In A World Coding Challenge",
      "question": "Which statement best describes Print Number In A World Coding Challenge?",
      "options": [
        "Write a method called printNumberInWord.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "Write a method isLeapYear with a parameter of type int named year."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Print Number In A World Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-8-switch-statements_print-number-in-a-world-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Print Number In A World Coding Challenge",
      "question": "Which of the following are TRUE about Print Number In A World Coding Challenge? Select all that apply.",
      "options": [
        "The method has one parameter number which is the whole number.",
        "Write a method called printNumberInWord.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "The method needs to print \"ZERO\", \"ONE\", \"TWO\", ... \"NINE\", \"OTHER\" if the int parameter number is 0, 1, 2, .... 9 or other for any other number including negative numbers.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14."
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Print Number In A World Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_print-number-in-a-world-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Print Number In A World Coding Challenge",
      "question": "Complete the blank: \"___ a method called printNumberInWord.\"",
      "options": [
        "Switch",
        "switch",
        "Write",
        "short"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Write', from the notes for Print Number In A World Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_print-number-in-a-world-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Print Number In A World Coding Challenge",
      "question": "In PrintNumberInAWorldCodingChallenge.java, what does the method returnNumberInAWordUsingTraditionalSwitch() return?",
      "options": [
        "boolean",
        "String",
        "void",
        "int"
      ],
      "answer": 1,
      "explanation": "The method returnNumberInAWordUsingTraditionalSwitch() is declared with return type 'String' in PrintNumberInAWorldCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SwitchStatementChallenge.java\"?\n\npublic ___ void switchStatementUsingChar(char ch){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "predict",
      "qid": "chapter-8-switch-statements_switch-statement-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"A is found\");",
      "answer": [
        "A is found"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-8-switch-statements_switch-statement-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge",
      "question": "Explain the main ideas in Switch Statement Challenge.",
      "modelAnswer": "Create a new switch statement using char instead of int. Create a new char variable Create a switch statement testing for",
      "keyPoints": [
        "Create a new switch statement using char instead of int.",
        "Create a new char variable",
        "Create a switch statement testing for"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge",
      "question": "Which statement best describes Switch Statement Challenge?",
      "options": [
        "Create a new switch statement using char instead of int.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "Write a method isLeapYear with a parameter of type int named year."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Switch Statement Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-8-switch-statements_switch-statement-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge",
      "question": "Which of the following are TRUE about Switch Statement Challenge? Select all that apply.",
      "options": [
        "Create a new switch statement using char instead of int.",
        "Create a new char variable",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "Create a switch statement testing for"
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Switch Statement Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge",
      "question": "Complete the blank: \"___ a new switch statement using char instead of int.\"",
      "options": [
        "short",
        "Switch",
        "switch",
        "Create"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Create', from the notes for Switch Statement Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-challenge-return-day-of-the-week_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge Return Day Of The Week",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SwitchStatementChallengeReturnDayOfTheWeek.java\"?\n\npublic ___ void printDayOfWeek(int day) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-8-switch-statements_switch-statement-challenge-return-day-of-the-week_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge Return Day Of The Week",
      "question": "Complete the missing keyword in this snippet from \"SwitchStatementChallengeReturnDayOfTheWeek.java\".",
      "code": "    public ___ String returnDayOfWeek(int day) {\r",
      "answer": [
        "static"
      ],
      "explanation": "The missing keyword is 'static', taken from the parsed source for SwitchStatementChallengeReturnDayOfTheWeek.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-8-switch-statements_switch-statement-challenge-return-day-of-the-week_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge Return Day Of The Week",
      "question": "What does this code print?",
      "code": "case 0 -> System.out.println(\"Sunday\");",
      "answer": [
        "Sunday"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-8-switch-statements_switch-statement-challenge-return-day-of-the-week_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge Return Day Of The Week",
      "question": "Explain the main ideas in Switch Statement Challenge Return Day Of The Week.",
      "modelAnswer": "Use the enhanced switch statement as an expression, returning the result to a String named dayOfTheWeek. Print both the day variable  and the dayOfTheWeek variable. In the main method, call this method for the values 0 through 7. Challenge 1. Create a method called printDaysOfWeek, that takes an int parameter called day, but doesn't return any value",
      "keyPoints": [
        "Use the enhanced switch statement as an expression, returning the result to a String named dayOfTheWeek. Print both the day variable  and the dayOfTheWeek variable. In the main method, call this method for the values 0 through 7.",
        "Challenge",
        "1. Create a method called printDaysOfWeek, that takes an int parameter called day, but doesn't return any value"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-challenge-return-day-of-the-week_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge Return Day Of The Week",
      "question": "Which statement best describes Switch Statement Challenge Return Day Of The Week?",
      "options": [
        "Write a method isLeapYear with a parameter of type int named year.",
        "Use the enhanced switch statement as an expression, returning the result to a String named dayOfTheWeek. Print both the day variable  and the dayOfTheWeek variable. In the main method, call this method for the values 0 through 7.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Switch Statement Challenge Return Day Of The Week.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-challenge-return-day-of-the-week_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge Return Day Of The Week",
      "question": "Complete the blank: \"Use the ___ switch statement as an expression, returning the result to a String named dayOfTheWeek. Print both the day variable  and the dayOfTheWeek variable. In the main method, call this method for the values 0 through 7.\"",
      "options": [
        "Switch",
        "short",
        "switch",
        "enhanced"
      ],
      "answer": 3,
      "explanation": "The missing word is 'enhanced', from the notes for Switch Statement Challenge Return Day Of The Week.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-challenge-return-day-of-the-week_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge Return Day Of The Week",
      "question": "In SwitchStatementChallengeReturnDayOfTheWeek.java, what does the method returnDayOfWeek() return?",
      "options": [
        "String",
        "int",
        "void",
        "boolean"
      ],
      "answer": 0,
      "explanation": "The method returnDayOfWeek() is declared with return type 'String' in SwitchStatementChallengeReturnDayOfTheWeek.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-n-a-t-o-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement N A T O Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SwitchStatementNATOChallenge.java\"?\n\npublic ___ void returnNatoStringForGivenCharacter(char ch){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "predict",
      "qid": "chapter-8-switch-statements_switch-statement-n-a-t-o-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement N A T O Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"A is Able\");",
      "answer": [
        "A is Able"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-8-switch-statements_switch-statement-n-a-t-o-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement N A T O Challenge",
      "question": "Explain the main ideas in Switch Statement N A T O Challenge.",
      "modelAnswer": "In this challenge, we'll be using the NATO alphabet to replace a character or letter,with NATO's standardized word for that letter. 1) Create a new char variable. Use the traditional switch statement (with a colon in case labels)  that tests the value in the variable from Step 1. 2) Create cases for the characters, A, B, C, D, and E. Display a message in each case block,with the letter and the NATO word, then break.",
      "keyPoints": [
        "In this challenge, we'll be using the NATO alphabet to replace a character or letter,with NATO's standardized word for that letter.",
        "1) Create a new char variable. Use the traditional switch statement (with a colon in case labels)  that tests the value in the variable from Step 1.",
        "2) Create cases for the characters, A, B, C, D, and E. Display a message in each case block,with the letter and the NATO word, then break."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-n-a-t-o-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement N A T O Challenge",
      "question": "Which statement best describes Switch Statement N A T O Challenge?",
      "options": [
        "In this challenge, we'll be using the NATO alphabet to replace a character or letter,with NATO's standardized word for that letter.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "Write a method isLeapYear with a parameter of type int named year."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Switch Statement N A T O Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-8-switch-statements_switch-statement-n-a-t-o-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement N A T O Challenge",
      "question": "Which of the following are TRUE about Switch Statement N A T O Challenge? Select all that apply.",
      "options": [
        "2) Create cases for the characters, A, B, C, D, and E. Display a message in each case block,with the letter and the NATO word, then break.",
        "In this challenge, we'll be using the NATO alphabet to replace a character or letter,with NATO's standardized word for that letter.",
        "1) Create a new char variable. Use the traditional switch statement (with a colon in case labels)  that tests the value in the variable from Step 1.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for Switch Statement N A T O Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-n-a-t-o-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement N A T O Challenge",
      "question": "Complete the blank: \"In this ___, we'll be using the NATO alphabet to replace a character or letter,with NATO's standardized word for that letter.\"",
      "options": [
        "Switch",
        "switch",
        "challenge",
        "short"
      ],
      "answer": 2,
      "explanation": "The missing word is 'challenge', from the notes for Switch Statement N A T O Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_menu-driven-calculator-deep-problem_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Menu Driven Calculator Deep Problem",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MenuDrivenCalculatorDeepProblem.java\"?\n\npublic ___ String calculate(double first, double second, char operator) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-8-switch-statements_menu-driven-calculator-deep-problem_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Menu Driven Calculator Deep Problem",
      "question": "Complete the missing keyword in this snippet from \"MenuDrivenCalculatorDeepProblem.java\".",
      "code": "        ___ {\r",
      "answer": [
        "try"
      ],
      "explanation": "The missing keyword is 'try', taken from the parsed source for MenuDrivenCalculatorDeepProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-8-switch-statements_menu-driven-calculator-deep-problem_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Menu Driven Calculator Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Calculator tests:\");",
      "answer": [
        "Calculator tests:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-8-switch-statements_menu-driven-calculator-deep-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Menu Driven Calculator Deep Problem",
      "question": "Explain the main ideas in Menu Driven Calculator Deep Problem.",
      "modelAnswer": "Deep Problem: Menu-Driven Decision Engine — Build a calculator that evaluates arithmetic operations through an enhanced switch and a day classifier that categorizes weekday and weekend values. The program should also guard against invalid input such as division by zero or unknown day names.",
      "keyPoints": [
        "Deep Problem: Menu-Driven Decision Engine — Build a calculator that evaluates arithmetic operations through an enhanced switch and a day classifier that categorizes weekday and weekend values. The program should also guard against invalid input such as division by zero or unknown day names."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_menu-driven-calculator-deep-problem_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Menu Driven Calculator Deep Problem",
      "question": "Which statement best describes Menu Driven Calculator Deep Problem?",
      "options": [
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "Deep Problem: Menu-Driven Decision Engine — Build a calculator that evaluates arithmetic operations through an enhanced switch and a day classifier that categorizes weekday and weekend values. The program should also guard against invalid input such as division by zero or unknown day names.",
        "Write a method isLeapYear with a parameter of type int named year.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Menu Driven Calculator Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_menu-driven-calculator-deep-problem_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Menu Driven Calculator Deep Problem",
      "question": "Complete the blank: \"Deep ___: Menu-Driven Decision Engine — Build a calculator that evaluates arithmetic operations through an enhanced switch and a day classifier that categorizes weekday and weekend values. The program should also guard against invalid input such as division by zero or unknown day names.\"",
      "options": [
        "Switch",
        "switch",
        "Problem",
        "short"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Problem', from the notes for Menu Driven Calculator Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_menu-driven-calculator-deep-problem_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Menu Driven Calculator Deep Problem",
      "question": "In MenuDrivenCalculatorDeepProblem.java, what does the method calculate() return?",
      "options": [
        "String",
        "boolean",
        "int",
        "void"
      ],
      "answer": 0,
      "explanation": "The method calculate() is declared with return type 'String' in MenuDrivenCalculatorDeepProblem.java.",
      "tags": []
    },
    {
      "qid": "ocjp-chapter-8-switch-statements-switch-fallthrough-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "int x = 2;\nswitch(x) {\n  case 1: System.out.println(\"one\");\n  case 2: System.out.println(\"two\");\n  case 3: System.out.println(\"three\");\n  default: System.out.println(\"default\");\n}",
      "answer": [
        "two\nthree\ndefault"
      ],
      "explanation": "Classic switch fall-through! Without break statements, execution falls through to every case below the match. case 2 matches, then falls to case 3, then default. Always add break unless fall-through is intentional.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    }
  ],
  "Chapter 9: Java Looping Concepts": [
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_for-statement_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ForStatement.java\"?\n\npublic ___ double calculateInterest(double amount, double interestRate){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-9-java-looping-concepts_for-statement_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "question": "Complete the missing keyword in this snippet from \"ForStatement.java\".",
      "code": "        ___ (amount * (interestRate / 100));\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for ForStatement.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-9-java-looping-concepts_for-statement_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "question": "Explain the main ideas in For Statement.",
      "modelAnswer": "Looping :- Looping let us execute the code multiple number of times Java supports several statements for looping, or executing code repetitively for -->   The for loop is more complex to set up but is commonly used when you are iterating over set of values while --> The while loop executes until a specified condition becomes false do while --> The do while loop always executes at least one and continues until specified condition becomes false The for statement is often referred to as the for loop",
      "keyPoints": [
        "Looping :- Looping let us execute the code multiple number of times",
        "Java supports several statements for looping, or executing code repetitively for -->   The for loop is more complex to set up but is commonly used when you are iterating over set of values while --> The while loop executes until a specified condition becomes false do while --> The do while loop always executes at least one and continues until specified condition becomes false",
        "The for statement is often referred to as the for loop"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between for, while, and do-while loops in Java?",
      "modelAnswer": "for is best when initialization, condition, and update belong together, while while is better for condition-driven loops. do-while checks the condition after the body, so it runs at least once.",
      "keyPoints": [
        "for is best when initialization, condition, and update belong together, while while is better for condition-driven loops.",
        "do-while checks the condition after the body, so it runs at least once."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is an enhanced for-each loop, and when can you not use it?",
      "modelAnswer": "The enhanced for loop iterates over arrays or collections without managing an index manually. It is not suitable when you need the index, need to skip backward, or need structural modification during iteration.",
      "keyPoints": [
        "The enhanced for loop iterates over arrays or collections without managing an index manually.",
        "It is not suitable when you need the index, need to skip backward, or need structural modification during iteration."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Can you declare multiple variables in a for loop initializer?",
      "modelAnswer": "Yes, but they must be of the same declared type in that initializer. For example, for (int i = 0, j = 10; i < j; i++, j--) is valid.",
      "keyPoints": [
        "Yes, but they must be of the same declared type in that initializer.",
        "For example, for (int i = 0, j = 10; i < j; i++, j--) is valid."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) When is a for loop usually preferred over a while loop?",
      "modelAnswer": "A for loop is preferred when the loop count or iteration pattern is known up front. It keeps loop setup in one place and is often easier to read for counter-based logic.",
      "keyPoints": [
        "A for loop is preferred when the loop count or iteration pattern is known up front.",
        "It keeps loop setup in one place and is often easier to read for counter-based logic."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) What does for (;;) do in Java?",
      "modelAnswer": "It creates an infinite loop because all three sections are omitted. The loop stops only with break, return, an exception, or external termination.",
      "keyPoints": [
        "It creates an infinite loop because all three sections are omitted.",
        "The loop stops only with break, return, an exception, or external termination."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) What prints here: for (int i = 0; i < 3; i++) { i++; System.out.print(i); }?",
      "modelAnswer": "It prints 13. Modifying the loop variable inside the body is legal, but it changes the loop flow and can be tricky.",
      "keyPoints": [
        "It prints 13.",
        "Modifying the loop variable inside the body is legal, but it changes the loop flow and can be tricky."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_for-statement_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "question": "Which statement best describes For Statement?",
      "options": [
        "Looping :- Looping let us execute the code multiple number of times",
        "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.",
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for For Statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-9-java-looping-concepts_for-statement_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "question": "Which of the following are TRUE about For Statement? Select all that apply.",
      "options": [
        "Looping :- Looping let us execute the code multiple number of times",
        "Java supports several statements for looping, or executing code repetitively for -->   The for loop is more complex to set up but is commonly used when you are iterating over set of values while --> The while loop executes until a specified condition becomes false do while --> The do while loop always executes at least one and continues until specified condition becomes false",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "The for statement is often referred to as the for loop",
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5."
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for For Statement.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_for-statement_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "question": "Complete the blank: \"___ :- Looping let us execute the code multiple number of times\"",
      "options": [
        "number",
        "Create",
        "Looping",
        "statement"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Looping', from the notes for For Statement.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_for-statement_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "question": "What is an important consideration when working with For Statement?",
      "options": [
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Java supports several statements for looping, or executing code repetitively for -->   The for loop is more complex to set up but is commonly used when you are iterating over set of values while --> The while loop executes until a specified condition becomes false do while --> The do while loop always executes at least one and continues until specified condition becomes false",
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean."
      ],
      "answer": 1,
      "explanation": "This is a key gotcha or note taken directly from the source for For Statement.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_for-statement_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "question": "In ForStatement.java, what does the method calculateInterest() return?",
      "options": [
        "String",
        "int",
        "double",
        "void"
      ],
      "answer": 2,
      "explanation": "The method calculateInterest() is declared with return type 'double' in ForStatement.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_for-loop-prime-number-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Prime Number Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ForLoopPrimeNumberChallenge.java\"?\n\npublic ___ boolean isPrime(int number){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-9-java-looping-concepts_for-loop-prime-number-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Prime Number Challenge",
      "question": "Complete the missing keyword in this snippet from \"ForLoopPrimeNumberChallenge.java\".",
      "code": "            ___ true;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for ForLoopPrimeNumberChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-9-java-looping-concepts_for-loop-prime-number-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Prime Number Challenge",
      "question": "Explain the main ideas in For Loop Prime Number Challenge.",
      "modelAnswer": "Create a prime number counter variable, that will keep count of how many prime numbers were found. Create a for statement, using any range of numbers, where the maximum number is <= 1000. For each number in the range: Check to see if it's a prime number using the isPrime method. If the number is prime, print it out and increment the prime number counter variable. Once the prime number counter equals three, exit the loop (Hint, use the break statement to exit). Your challenge is to create a for statement, using any range of numbers, to determine if the numbers, are prime numbers.",
      "keyPoints": [
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Create a for statement, using any range of numbers, where the maximum number is <= 1000.",
        "For each number in the range: Check to see if it's a prime number using the isPrime method. If the number is prime, print it out and increment the prime number counter variable. Once the prime number counter equals three, exit the loop (Hint, use the break statement to exit). Your challenge is to create a for statement, using any range of numbers, to determine if the numbers, are prime numbers."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_for-loop-prime-number-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Prime Number Challenge",
      "question": "Which statement best describes For Loop Prime Number Challenge?",
      "options": [
        "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.",
        "Looping :- Looping let us execute the code multiple number of times",
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for For Loop Prime Number Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-9-java-looping-concepts_for-loop-prime-number-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Prime Number Challenge",
      "question": "Which of the following are TRUE about For Loop Prime Number Challenge? Select all that apply.",
      "options": [
        "For each number in the range: Check to see if it's a prime number using the isPrime method. If the number is prime, print it out and increment the prime number counter variable. Once the prime number counter equals three, exit the loop (Hint, use the break statement to exit). Your challenge is to create a for statement, using any range of numbers, to determine if the numbers, are prime numbers.",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Create a for statement, using any range of numbers, where the maximum number is <= 1000.",
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "Looping :- Looping let us execute the code multiple number of times"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for For Loop Prime Number Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_for-loop-prime-number-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Prime Number Challenge",
      "question": "Complete the blank: \"___ a prime number counter variable, that will keep count of how many prime numbers were found.\"",
      "options": [
        "Create",
        "statement",
        "supports",
        "Looping"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Create', from the notes for For Loop Prime Number Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_for-loop-prime-number-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Prime Number Challenge",
      "question": "In ForLoopPrimeNumberChallenge.java, what does the method isPrime() return?",
      "options": [
        "int",
        "String",
        "void",
        "boolean"
      ],
      "answer": 3,
      "explanation": "The method isPrime() is declared with return type 'boolean' in ForLoopPrimeNumberChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_for-loop-sum3and5-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Sum3and5 Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ForLoopSum3and5Challenge.java\"?\n\n___ class ForLoopSum3and5Challenge {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-9-java-looping-concepts_for-loop-sum3and5-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Sum3and5 Challenge",
      "question": "Explain the main ideas in For Loop Sum3and5 Challenge.",
      "modelAnswer": "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5. And for those numbers, that meet the above conditions, in other words, that are found to be divisible by both 3, and also divisible by 5, you want to print out that number. You also want to break out of the loop, once you find five numbers, that meet those above conditions.",
      "keyPoints": [
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "And for those numbers, that meet the above conditions, in other words, that are found to be divisible by both 3, and also divisible by 5, you want to print out that number.",
        "You also want to break out of the loop, once you find five numbers, that meet those above conditions."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_for-loop-sum3and5-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Sum3and5 Challenge",
      "question": "Which statement best describes For Loop Sum3and5 Challenge?",
      "options": [
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.",
        "Looping :- Looping let us execute the code multiple number of times",
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for For Loop Sum3and5 Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-9-java-looping-concepts_for-loop-sum3and5-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Sum3and5 Challenge",
      "question": "Which of the following are TRUE about For Loop Sum3and5 Challenge? Select all that apply.",
      "options": [
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "Looping :- Looping let us execute the code multiple number of times",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "And for those numbers, that meet the above conditions, in other words, that are found to be divisible by both 3, and also divisible by 5, you want to print out that number.",
        "You also want to break out of the loop, once you find five numbers, that meet those above conditions."
      ],
      "answer": [
        0,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for For Loop Sum3and5 Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_for-loop-sum3and5-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Sum3and5 Challenge",
      "question": "Complete the blank: \"This is the sum 3 and 5 ___. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.\"",
      "options": [
        "Looping",
        "supports",
        "challenge",
        "statement"
      ],
      "answer": 2,
      "explanation": "The missing word is 'challenge', from the notes for For Loop Sum3and5 Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_sum-odd-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Sum Odd Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SumOddChallenge.java\"?\n\npublic ___ boolean isOdd(int number){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-9-java-looping-concepts_sum-odd-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Sum Odd Challenge",
      "question": "Complete the missing keyword in this snippet from \"SumOddChallenge.java\".",
      "code": "                ___ false;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for SumOddChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-9-java-looping-concepts_sum-odd-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Sum Odd Challenge",
      "question": "Explain the main ideas in Sum Odd Challenge.",
      "modelAnswer": "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean. Check that number is > 0, if it is not return false. If number is odd return true, otherwise return false.",
      "keyPoints": [
        "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.",
        "Check that number is > 0, if it is not return false.",
        "If number is odd return true, otherwise return false."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_sum-odd-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Sum Odd Challenge",
      "question": "Which statement best describes Sum Odd Challenge?",
      "options": [
        "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "Looping :- Looping let us execute the code multiple number of times"
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Sum Odd Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-9-java-looping-concepts_sum-odd-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Sum Odd Challenge",
      "question": "Which of the following are TRUE about Sum Odd Challenge? Select all that apply.",
      "options": [
        "Check that number is > 0, if it is not return false.",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Looping :- Looping let us execute the code multiple number of times",
        "If number is odd return true, otherwise return false.",
        "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean."
      ],
      "answer": [
        0,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Sum Odd Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_sum-odd-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Sum Odd Challenge",
      "question": "Complete the blank: \"___ a method called isOdd with an int parameter and call it number. The method needs to return a boolean.\"",
      "options": [
        "statement",
        "Write",
        "Looping",
        "supports"
      ],
      "answer": 1,
      "explanation": "The missing word is 'Write', from the notes for Sum Odd Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_sum-odd-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Sum Odd Challenge",
      "question": "In SumOddChallenge.java, what does the method isOdd() return?",
      "options": [
        "boolean",
        "void",
        "String",
        "int"
      ],
      "answer": 0,
      "explanation": "The method isOdd() is declared with return type 'boolean' in SumOddChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_pattern-printer-deep-problem_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Pattern Printer Deep Problem",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PatternPrinterDeepProblem.java\"?\n\npublic ___ void printRightTriangle(int size) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-9-java-looping-concepts_pattern-printer-deep-problem_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Pattern Printer Deep Problem",
      "question": "Complete the missing keyword in this snippet from \"PatternPrinterDeepProblem.java\".",
      "code": "    public ___ void printInvertedRightTriangle(int size) {\r",
      "answer": [
        "static"
      ],
      "explanation": "The missing keyword is 'static', taken from the parsed source for PatternPrinterDeepProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-9-java-looping-concepts_pattern-printer-deep-problem_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Pattern Printer Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"1. Right-angle triangle:\");",
      "answer": [
        "1. Right-angle triangle:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-9-java-looping-concepts_pattern-printer-deep-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Pattern Printer Deep Problem",
      "question": "Explain the main ideas in Pattern Printer Deep Problem.",
      "modelAnswer": "Deep Problem: Pattern Rendering Engine — Use nested loops to generate multiple console-based patterns, including star triangles, a number pyramid, and a full multiplication table. The challenge mirrors the kind of structured output logic often needed in reporting and diagnostic tools.",
      "keyPoints": [
        "Deep Problem: Pattern Rendering Engine — Use nested loops to generate multiple console-based patterns, including star triangles, a number pyramid, and a full multiplication table. The challenge mirrors the kind of structured output logic often needed in reporting and diagnostic tools."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_pattern-printer-deep-problem_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Pattern Printer Deep Problem",
      "question": "Which statement best describes Pattern Printer Deep Problem?",
      "options": [
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Deep Problem: Pattern Rendering Engine — Use nested loops to generate multiple console-based patterns, including star triangles, a number pyramid, and a full multiplication table. The challenge mirrors the kind of structured output logic often needed in reporting and diagnostic tools.",
        "Looping :- Looping let us execute the code multiple number of times",
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Pattern Printer Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_pattern-printer-deep-problem_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Pattern Printer Deep Problem",
      "question": "Complete the blank: \"Deep ___: Pattern Rendering Engine — Use nested loops to generate multiple console-based patterns, including star triangles, a number pyramid, and a full multiplication table. The challenge mirrors the kind of structured output logic often needed in reporting and diagnostic tools.\"",
      "options": [
        "Looping",
        "supports",
        "Problem",
        "statement"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Problem', from the notes for Pattern Printer Deep Problem.",
      "tags": []
    },
    {
      "qid": "ocjp-chapter-9-java-looping-concepts-polymorphism-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "class Animal {\n  String type = \"Animal\";\n  void speak() { System.out.println(\"Animal\"); }\n}\nclass Dog extends Animal {\n  String type = \"Dog\";\n  void speak() { System.out.println(\"Dog\"); }\n}\nAnimal a = new Dog();\nSystem.out.println(a.type);\na.speak();",
      "answer": [
        "Animal\nDog"
      ],
      "explanation": "Method calls are resolved at runtime (dynamic dispatch) → a.speak() calls Dog.speak(). But field access is resolved at compile time (static binding) → a.type uses Animal's type. This is a critical OCJP polymorphism trap.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-9-java-looping-concepts-constructor-chain-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "class A {\n  A() { System.out.println(\"A\"); }\n}\nclass B extends A {\n  B() { System.out.println(\"B\"); }\n}\nclass C extends B {\n  C() { System.out.println(\"C\"); }\n}\nnew C();",
      "answer": [
        "A\nB\nC"
      ],
      "explanation": "Constructor chaining: the JVM always calls super() implicitly at the top of each constructor. So A() runs, then B(), then C(). Output is A, B, C — top to bottom in the hierarchy.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-9-java-looping-concepts-override-overload-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-9-java-looping-concepts-final-keyword-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-9-java-looping-concepts-static-hiding-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-9-java-looping-concepts-covariant-return-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-9-java-looping-concepts-access-modifier-override-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-9-java-looping-concepts-for-scope-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    }
  ],
  "Chapter 10: While And Do While Looping Concepts": [
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loops_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "question": "Which Java keyword correctly fills in the blank in this code from \"WhileLoops.java\"?\n\n___ class WhileLoops {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loops_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "question": "Explain the main ideas in While Loops.",
      "modelAnswer": "WHILE LOOPS The while loop repeatedly executes its body as long as a condition remains true. Unlike the for loop, the while loop does NOT have a built-in initialisation or update step in its declaration.",
      "keyPoints": [
        "WHILE LOOPS",
        "The while loop repeatedly executes its body as long as a condition remains true.",
        "Unlike the for loop, the while loop does NOT have a built-in initialisation or update step in its declaration."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between while and do-while in Java?",
      "modelAnswer": "while checks its condition before the body, so it may run zero times. do-while checks after the body, so it always runs at least once.",
      "keyPoints": [
        "while checks its condition before the body, so it may run zero times.",
        "do-while checks after the body, so it always runs at least once."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is an infinite loop, and how do you break out of one?",
      "modelAnswer": "An infinite loop is a loop whose condition never becomes false or that intentionally uses while(true). You exit it with break, return, an exception, or by changing the condition from inside the loop.",
      "keyPoints": [
        "An infinite loop is a loop whose condition never becomes false or that intentionally uses while(true).",
        "You exit it with break, return, an exception, or by changing the condition from inside the loop."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) When would you prefer while over for?",
      "modelAnswer": "Prefer while when the number of iterations is not known in advance and the loop depends on a changing condition. It is common for input-reading, waiting, and sentinel-controlled loops.",
      "keyPoints": [
        "Prefer while when the number of iterations is not known in advance and the loop depends on a changing condition.",
        "It is common for input-reading, waiting, and sentinel-controlled loops."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What do break and continue do inside a while loop?",
      "modelAnswer": "break exits the loop immediately, while continue skips the rest of the current iteration and reevaluates the condition. Both change control flow without waiting for the loop body to finish normally.",
      "keyPoints": [
        "break exits the loop immediately, while continue skips the rest of the current iteration and reevaluates the condition.",
        "Both change control flow without waiting for the loop body to finish normally."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) What prints here: int x = 0; do { x++; } while (x < 0); System.out.println(x);?",
      "modelAnswer": "It prints 1. A do-while loop always executes its body once before checking the condition.",
      "keyPoints": [
        "It prints 1.",
        "A do-while loop always executes its body once before checking the condition."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) Which is usually clearer: while (condition) { ... } or while (true) { if (condition) break; }?",
      "modelAnswer": "The explicit condition form is usually clearer when the exit rule is known up front. while (true) with break is fine when the exit depends on logic inside the loop body.",
      "keyPoints": [
        "The explicit condition form is usually clearer when the exit rule is known up front.",
        "while (true) with break is fine when the exit depends on logic inside the loop body."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loops_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "question": "Which statement best describes While Loops?",
      "options": [
        "Number Palindrome",
        "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int.",
        "WHILE LOOPS",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for While Loops.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loops_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "question": "Which of the following are TRUE about While Loops? Select all that apply.",
      "options": [
        "Unlike the for loop, the while loop does NOT have a built-in initialisation or update step in its declaration.",
        "WHILE LOOPS",
        "The while loop repeatedly executes its body as long as a condition remains true.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Number Palindrome"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for While Loops.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loops_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "question": "Complete the blank: \"The ___ loop repeatedly executes its body as long as a condition remains true.\"",
      "options": [
        "regular",
        "while",
        "dowhile",
        "makes"
      ],
      "answer": 1,
      "explanation": "The missing word is 'while', from the notes for While Loops.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loops_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "question": "What is an important consideration when working with While Loops?",
      "options": [
        "IMPORTANT: Always check your loop condition carefully.",
        "Number Palindrome",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int."
      ],
      "answer": 0,
      "explanation": "This is a key gotcha or note taken directly from the source for While Loops.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_do-while-loops_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "question": "Which Java keyword correctly fills in the blank in this code from \"DoWhileLoops.java\"?\n\n___ class DoWhileLoops {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_do-while-loops_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "question": "Explain the main ideas in Do While Loops.",
      "modelAnswer": "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once. In a regular while loop, if the condition is false from the start, the body NEVER runs. In a do-while, the body runs first, THEN the condition is checked. This makes do-while ideal for situations like \"ask the user for input at least once, then keep asking if the input is invalid.\"",
      "keyPoints": [
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "In a regular while loop, if the condition is false from the start, the body NEVER runs. In a do-while, the body runs first, THEN the condition is checked.",
        "This makes do-while ideal for situations like \"ask the user for input at least once, then keep asking if the input is invalid.\""
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_do-while-loops_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "question": "Which statement best describes Do While Loops?",
      "options": [
        "Number Palindrome",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "WHILE LOOPS",
        "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Do While Loops.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_do-while-loops_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "question": "Which of the following are TRUE about Do While Loops? Select all that apply.",
      "options": [
        "WHILE LOOPS",
        "This makes do-while ideal for situations like \"ask the user for input at least once, then keep asking if the input is invalid.\"",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Number Palindrome",
        "In a regular while loop, if the condition is false from the start, the body NEVER runs. In a do-while, the body runs first, THEN the condition is checked."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Do While Loops.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_do-while-loops_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "question": "Complete the blank: \"In a ___ while loop, if the condition is false from the start, the body NEVER runs. In a do-while, the body runs first, THEN the condition is checked.\"",
      "options": [
        "Unlike",
        "while",
        "regular",
        "WHILE"
      ],
      "answer": 2,
      "explanation": "The missing word is 'regular', from the notes for Do While Loops.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_do-while-loops_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "question": "What is an important consideration when working with Do While Loops?",
      "options": [
        "WHILE LOOPS",
        "Number Palindrome",
        "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": 3,
      "explanation": "This is a key gotcha or note taken directly from the source for Do While Loops.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_check-number-palindrome-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Check Number Palindrome Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"CheckNumberPalindromeCodingChallenge.java\"?\n\npublic ___ boolean checkIfNumberIsPalindrome(int number){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_check-number-palindrome-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Check Number Palindrome Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"CheckNumberPalindromeCodingChallenge.java\".",
      "code": "            ___ true;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for CheckNumberPalindromeCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_check-number-palindrome-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Check Number Palindrome Coding Challenge",
      "question": "Explain the main ideas in Check Number Palindrome Coding Challenge.",
      "modelAnswer": "Number Palindrome Write a method called isPalindrome with one int parameter called number. The method needs to return a boolean.",
      "keyPoints": [
        "Number Palindrome",
        "Write a method called isPalindrome with one int parameter called number.",
        "The method needs to return a boolean."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_check-number-palindrome-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Check Number Palindrome Coding Challenge",
      "question": "Which statement best describes Check Number Palindrome Coding Challenge?",
      "options": [
        "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int.",
        "WHILE LOOPS",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Number Palindrome"
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Check Number Palindrome Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_check-number-palindrome-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Check Number Palindrome Coding Challenge",
      "question": "Which of the following are TRUE about Check Number Palindrome Coding Challenge? Select all that apply.",
      "options": [
        "WHILE LOOPS",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Write a method called isPalindrome with one int parameter called number.",
        "The method needs to return a boolean.",
        "Number Palindrome"
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Check Number Palindrome Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_check-number-palindrome-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Check Number Palindrome Coding Challenge",
      "question": "Complete the blank: \"___ Palindrome\"",
      "options": [
        "WHILE",
        "while",
        "Unlike",
        "Number"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Number', from the notes for Check Number Palindrome Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_check-number-palindrome-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Check Number Palindrome Coding Challenge",
      "question": "In CheckNumberPalindromeCodingChallenge.java, what does the method checkIfNumberIsPalindrome() return?",
      "options": [
        "boolean",
        "String",
        "int",
        "void"
      ],
      "answer": 0,
      "explanation": "The method checkIfNumberIsPalindrome() is declared with return type 'boolean' in CheckNumberPalindromeCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_digit-sum-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Digit Sum Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"DigitSumCodingChallenge.java\"?\n\npublic ___ int sumDigits(int number){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_digit-sum-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Digit Sum Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"DigitSumCodingChallenge.java\".",
      "code": "            ___ sum;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for DigitSumCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_digit-sum-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Digit Sum Coding Challenge",
      "question": "Explain the main ideas in Digit Sum Coding Challenge.",
      "modelAnswer": "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int. The method should only take a number that is a positive number. If a negative number is passed, it should return -1, meaning, an invalid value was passed.",
      "keyPoints": [
        "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int.",
        "The method should only take a number that is a positive number.",
        "If a negative number is passed, it should return -1, meaning, an invalid value was passed."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_digit-sum-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Digit Sum Coding Challenge",
      "question": "Which statement best describes Digit Sum Coding Challenge?",
      "options": [
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int.",
        "WHILE LOOPS",
        "Number Palindrome"
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Digit Sum Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_digit-sum-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Digit Sum Coding Challenge",
      "question": "Which of the following are TRUE about Digit Sum Coding Challenge? Select all that apply.",
      "options": [
        "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int.",
        "WHILE LOOPS",
        "The method should only take a number that is a positive number.",
        "If a negative number is passed, it should return -1, meaning, an invalid value was passed.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Digit Sum Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_digit-sum-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Digit Sum Coding Challenge",
      "question": "Complete the blank: \"In this ___, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int.\"",
      "options": [
        "Unlike",
        "while",
        "challenge",
        "WHILE"
      ],
      "answer": 2,
      "explanation": "The missing word is 'challenge', from the notes for Digit Sum Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_digit-sum-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Digit Sum Coding Challenge",
      "question": "In DigitSumCodingChallenge.java, what does the method sumDigits() return?",
      "options": [
        "void",
        "boolean",
        "int",
        "String"
      ],
      "answer": 2,
      "explanation": "The method sumDigits() is declared with return type 'int' in DigitSumCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_even-digit-sum-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Even Digit Sum Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"EvenDigitSumCodingChallenge.java\"?\n\npublic ___ int getEvenDigitSum(int number){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_even-digit-sum-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Even Digit Sum Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"EvenDigitSumCodingChallenge.java\".",
      "code": "            ___ -1;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for EvenDigitSumCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_even-digit-sum-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Even Digit Sum Coding Challenge",
      "question": "Explain the main ideas in Even Digit Sum Coding Challenge.",
      "modelAnswer": "Even Digit Sum Write a method named getEvenDigitSum with one parameter of type int called number. The method should return the sum of the even digits within the number.",
      "keyPoints": [
        "Even Digit Sum",
        "Write a method named getEvenDigitSum with one parameter of type int called number.",
        "The method should return the sum of the even digits within the number."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_even-digit-sum-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Even Digit Sum Coding Challenge",
      "question": "Which statement best describes Even Digit Sum Coding Challenge?",
      "options": [
        "WHILE LOOPS",
        "Number Palindrome",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Even Digit Sum"
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Even Digit Sum Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_even-digit-sum-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Even Digit Sum Coding Challenge",
      "question": "Which of the following are TRUE about Even Digit Sum Coding Challenge? Select all that apply.",
      "options": [
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Write a method named getEvenDigitSum with one parameter of type int called number.",
        "WHILE LOOPS",
        "Even Digit Sum",
        "The method should return the sum of the even digits within the number."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Even Digit Sum Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_even-digit-sum-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Even Digit Sum Coding Challenge",
      "question": "Complete the blank: \"___ a method named getEvenDigitSum with one parameter of type int called number.\"",
      "options": [
        "Write",
        "WHILE",
        "Unlike",
        "while"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Write', from the notes for Even Digit Sum Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_even-digit-sum-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Even Digit Sum Coding Challenge",
      "question": "In EvenDigitSumCodingChallenge.java, what does the method getEvenDigitSum() return?",
      "options": [
        "void",
        "boolean",
        "int",
        "String"
      ],
      "answer": 2,
      "explanation": "The method getEvenDigitSum() is declared with return type 'int' in EvenDigitSumCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_factor-printer-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Factor Printer Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"FactorPrinterCodingChallenge.java\"?\n\npublic ___ void printFactors(int number){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_factor-printer-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Factor Printer Coding Challenge",
      "question": "Explain the main ideas in Factor Printer Coding Challenge.",
      "modelAnswer": "Factor Printer Challenge: A factor of a number N is any integer that divides N with no remainder. For example, the factors of 32 are: 1, 2, 4, 8, 16, 32 — each divides 32 evenly. The approach uses a while loop counting from 1 to N, checking if number % counter == 0 (i.e., divisible with no remainder).",
      "keyPoints": [
        "Factor Printer Challenge: A factor of a number N is any integer that divides N with no remainder.",
        "For example, the factors of 32 are: 1, 2, 4, 8, 16, 32 — each divides 32 evenly.",
        "The approach uses a while loop counting from 1 to N, checking if number % counter == 0 (i.e., divisible with no remainder)."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_factor-printer-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Factor Printer Coding Challenge",
      "question": "Which statement best describes Factor Printer Coding Challenge?",
      "options": [
        "Factor Printer Challenge: A factor of a number N is any integer that divides N with no remainder.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "WHILE LOOPS",
        "Number Palindrome"
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Factor Printer Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_factor-printer-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Factor Printer Coding Challenge",
      "question": "Which of the following are TRUE about Factor Printer Coding Challenge? Select all that apply.",
      "options": [
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "For example, the factors of 32 are: 1, 2, 4, 8, 16, 32 — each divides 32 evenly.",
        "WHILE LOOPS",
        "The approach uses a while loop counting from 1 to N, checking if number % counter == 0 (i.e., divisible with no remainder).",
        "Factor Printer Challenge: A factor of a number N is any integer that divides N with no remainder."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Factor Printer Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_factor-printer-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Factor Printer Coding Challenge",
      "question": "Complete the blank: \"___ Printer Challenge: A factor of a number N is any integer that divides N with no remainder.\"",
      "options": [
        "Factor",
        "Unlike",
        "while",
        "WHILE"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Factor', from the notes for Factor Printer Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_first-and-last-digit-sum-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "First And Last Digit Sum Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"FirstAndLastDigitSumCodingChallenge.java\"?\n\npublic ___ int sumFirstAndLastDigit(int number){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_first-and-last-digit-sum-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "First And Last Digit Sum Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"FirstAndLastDigitSumCodingChallenge.java\".",
      "code": "            ___ -1;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for FirstAndLastDigitSumCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_first-and-last-digit-sum-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "First And Last Digit Sum Coding Challenge",
      "question": "Explain the main ideas in First And Last Digit Sum Coding Challenge.",
      "modelAnswer": "First And Last Digit Sum Write a method named sumFirstAndLastDigit with one parameter of type int called number. The method needs to find the first and the last digit of the parameter number passed to the method, using a loop and return the sum of the first and the last digit of that number.",
      "keyPoints": [
        "First And Last Digit Sum",
        "Write a method named sumFirstAndLastDigit with one parameter of type int called number.",
        "The method needs to find the first and the last digit of the parameter number passed to the method, using a loop and return the sum of the first and the last digit of that number."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_first-and-last-digit-sum-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "First And Last Digit Sum Coding Challenge",
      "question": "Which statement best describes First And Last Digit Sum Coding Challenge?",
      "options": [
        "Number Palindrome",
        "WHILE LOOPS",
        "First And Last Digit Sum",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for First And Last Digit Sum Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_first-and-last-digit-sum-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "First And Last Digit Sum Coding Challenge",
      "question": "Which of the following are TRUE about First And Last Digit Sum Coding Challenge? Select all that apply.",
      "options": [
        "WHILE LOOPS",
        "The method needs to find the first and the last digit of the parameter number passed to the method, using a loop and return the sum of the first and the last digit of that number.",
        "Write a method named sumFirstAndLastDigit with one parameter of type int called number.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "First And Last Digit Sum"
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for First And Last Digit Sum Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_first-and-last-digit-sum-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "First And Last Digit Sum Coding Challenge",
      "question": "Complete the blank: \"First And Last ___ Sum\"",
      "options": [
        "Unlike",
        "Digit",
        "WHILE",
        "while"
      ],
      "answer": 1,
      "explanation": "The missing word is 'Digit', from the notes for First And Last Digit Sum Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_first-and-last-digit-sum-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "First And Last Digit Sum Coding Challenge",
      "question": "In FirstAndLastDigitSumCodingChallenge.java, what does the method sumFirstAndLastDigit() return?",
      "options": [
        "boolean",
        "String",
        "void",
        "int"
      ],
      "answer": 3,
      "explanation": "The method sumFirstAndLastDigit() is declared with return type 'int' in FirstAndLastDigitSumCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_floor-pack-problem-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Floor Pack Problem Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"FloorPackProblemCodingChallenge.java\"?\n\npublic ___ boolean canPack(int bigCount, int smallCount, int goal){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_floor-pack-problem-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Floor Pack Problem Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"FloorPackProblemCodingChallenge.java\".",
      "code": "            ___ false;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for FloorPackProblemCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_floor-pack-problem-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Floor Pack Problem Coding Challenge",
      "question": "Explain the main ideas in Floor Pack Problem Coding Challenge.",
      "modelAnswer": "Write a method named canPack with three parameters of type int named bigCount, smallCount, and goal. The parameter bigCount represents the count of big flour bags (5 kilos each). The parameter smallCount represents the count of small flour bags (1 kilo each).",
      "keyPoints": [
        "Write a method named canPack with three parameters of type int named bigCount, smallCount, and goal.",
        "The parameter bigCount represents the count of big flour bags (5 kilos each).",
        "The parameter smallCount represents the count of small flour bags (1 kilo each)."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_floor-pack-problem-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Floor Pack Problem Coding Challenge",
      "question": "Which statement best describes Floor Pack Problem Coding Challenge?",
      "options": [
        "WHILE LOOPS",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Number Palindrome",
        "Write a method named canPack with three parameters of type int named bigCount, smallCount, and goal."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Floor Pack Problem Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_floor-pack-problem-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Floor Pack Problem Coding Challenge",
      "question": "Which of the following are TRUE about Floor Pack Problem Coding Challenge? Select all that apply.",
      "options": [
        "The parameter bigCount represents the count of big flour bags (5 kilos each).",
        "The parameter smallCount represents the count of small flour bags (1 kilo each).",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "WHILE LOOPS",
        "Write a method named canPack with three parameters of type int named bigCount, smallCount, and goal."
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Floor Pack Problem Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_floor-pack-problem-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Floor Pack Problem Coding Challenge",
      "question": "Complete the blank: \"___ a method named canPack with three parameters of type int named bigCount, smallCount, and goal.\"",
      "options": [
        "WHILE",
        "Unlike",
        "Write",
        "while"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Write', from the notes for Floor Pack Problem Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_floor-pack-problem-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Floor Pack Problem Coding Challenge",
      "question": "In FloorPackProblemCodingChallenge.java, what does the method canPack() return?",
      "options": [
        "String",
        "void",
        "int",
        "boolean"
      ],
      "answer": 3,
      "explanation": "The method canPack() is declared with return type 'boolean' in FloorPackProblemCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_greatest-common-divisor-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Greatest Common Divisor Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"GreatestCommonDivisorCodingChallenge.java\"?\n\npublic ___ int getGreatestCommonDivisor(int number1, int number2){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_greatest-common-divisor-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Greatest Common Divisor Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"GreatestCommonDivisorCodingChallenge.java\".",
      "code": "            ___ -1;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for GreatestCommonDivisorCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_greatest-common-divisor-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Greatest Common Divisor Coding Challenge",
      "question": "Explain the main ideas in Greatest Common Divisor Coding Challenge.",
      "modelAnswer": "Greatest Common Divisor (GCD) Challenge: the GCD of two numbers is the largest integer that divides both without a remainder. For example, GCD(81, 153) = 27, since 27 is the largest number that divides both 81 and 153 evenly. The method iterates over all divisors of the smaller number and checks which ones also divide the larger number — the last common divisor found is the GCD.",
      "keyPoints": [
        "Greatest Common Divisor (GCD) Challenge: the GCD of two numbers is the largest integer that divides both without a remainder.",
        "For example, GCD(81, 153) = 27, since 27 is the largest number that divides both 81 and 153 evenly.",
        "The method iterates over all divisors of the smaller number and checks which ones also divide the larger number — the last common divisor found is the GCD."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_greatest-common-divisor-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Greatest Common Divisor Coding Challenge",
      "question": "Which statement best describes Greatest Common Divisor Coding Challenge?",
      "options": [
        "Greatest Common Divisor (GCD) Challenge: the GCD of two numbers is the largest integer that divides both without a remainder.",
        "Number Palindrome",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "WHILE LOOPS"
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Greatest Common Divisor Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_greatest-common-divisor-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Greatest Common Divisor Coding Challenge",
      "question": "Which of the following are TRUE about Greatest Common Divisor Coding Challenge? Select all that apply.",
      "options": [
        "Greatest Common Divisor (GCD) Challenge: the GCD of two numbers is the largest integer that divides both without a remainder.",
        "The method iterates over all divisors of the smaller number and checks which ones also divide the larger number — the last common divisor found is the GCD.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "For example, GCD(81, 153) = 27, since 27 is the largest number that divides both 81 and 153 evenly.",
        "WHILE LOOPS"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Greatest Common Divisor Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_greatest-common-divisor-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Greatest Common Divisor Coding Challenge",
      "question": "Complete the blank: \"___ Common Divisor (GCD) Challenge: the GCD of two numbers is the largest integer that divides both without a remainder.\"",
      "options": [
        "while",
        "Greatest",
        "Unlike",
        "WHILE"
      ],
      "answer": 1,
      "explanation": "The missing word is 'Greatest', from the notes for Greatest Common Divisor Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_greatest-common-divisor-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Greatest Common Divisor Coding Challenge",
      "question": "In GreatestCommonDivisorCodingChallenge.java, what does the method getGreatestCommonDivisor() return?",
      "options": [
        "void",
        "int",
        "boolean",
        "String"
      ],
      "answer": 1,
      "explanation": "The method getGreatestCommonDivisor() is declared with return type 'int' in GreatestCommonDivisorCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_largest-prime-factor-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Largest Prime Factor Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"LargestPrimeFactorCodingChallenge.java\"?\n\npublic ___ int getLargestPrime(int number){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_largest-prime-factor-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Largest Prime Factor Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"LargestPrimeFactorCodingChallenge.java\".",
      "code": "            ___ -1;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for LargestPrimeFactorCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_largest-prime-factor-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Largest Prime Factor Coding Challenge",
      "question": "Explain the main ideas in Largest Prime Factor Coding Challenge.",
      "modelAnswer": "Write a method named getLargestPrime with one parameter of type int named number. If the number is negative or does not have any prime numbers, the method should return -1 to indicate an invalid value. The method should calculate the largest prime factor of a given number and return it.",
      "keyPoints": [
        "Write a method named getLargestPrime with one parameter of type int named number.",
        "If the number is negative or does not have any prime numbers, the method should return -1 to indicate an invalid value.",
        "The method should calculate the largest prime factor of a given number and return it."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_largest-prime-factor-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Largest Prime Factor Coding Challenge",
      "question": "Which statement best describes Largest Prime Factor Coding Challenge?",
      "options": [
        "Write a method named getLargestPrime with one parameter of type int named number.",
        "WHILE LOOPS",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Number Palindrome"
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Largest Prime Factor Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_largest-prime-factor-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Largest Prime Factor Coding Challenge",
      "question": "Which of the following are TRUE about Largest Prime Factor Coding Challenge? Select all that apply.",
      "options": [
        "Write a method named getLargestPrime with one parameter of type int named number.",
        "If the number is negative or does not have any prime numbers, the method should return -1 to indicate an invalid value.",
        "WHILE LOOPS",
        "The method should calculate the largest prime factor of a given number and return it.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Largest Prime Factor Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_largest-prime-factor-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Largest Prime Factor Coding Challenge",
      "question": "Complete the blank: \"___ a method named getLargestPrime with one parameter of type int named number.\"",
      "options": [
        "Write",
        "while",
        "Unlike",
        "WHILE"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Write', from the notes for Largest Prime Factor Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_largest-prime-factor-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Largest Prime Factor Coding Challenge",
      "question": "In LargestPrimeFactorCodingChallenge.java, what does the method getLargestPrime() return?",
      "options": [
        "String",
        "int",
        "boolean",
        "void"
      ],
      "answer": 1,
      "explanation": "The method getLargestPrime() is declared with return type 'int' in LargestPrimeFactorCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_last-digit-checker-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Last Digit Checker Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"LastDigitCheckerCodingChallenge.java\"?\n\npublic ___ boolean isValid(int number){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_last-digit-checker-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Last Digit Checker Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"LastDigitCheckerCodingChallenge.java\".",
      "code": "            ___ true;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for LastDigitCheckerCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_last-digit-checker-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Last Digit Checker Coding Challenge",
      "question": "Explain the main ideas in Last Digit Checker Coding Challenge.",
      "modelAnswer": "Last Digit Checker Write a method named hasSameLastDigit with three parameters of type int. Each number should be within the range of 10 (inclusive) - 1000 (inclusive). If one of the numbers is not within the range, the method should return false.",
      "keyPoints": [
        "Last Digit Checker",
        "Write a method named hasSameLastDigit with three parameters of type int.",
        "Each number should be within the range of 10 (inclusive) - 1000 (inclusive). If one of the numbers is not within the range, the method should return false."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_last-digit-checker-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Last Digit Checker Coding Challenge",
      "question": "Which statement best describes Last Digit Checker Coding Challenge?",
      "options": [
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "WHILE LOOPS",
        "Last Digit Checker",
        "Number Palindrome"
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Last Digit Checker Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_last-digit-checker-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Last Digit Checker Coding Challenge",
      "question": "Which of the following are TRUE about Last Digit Checker Coding Challenge? Select all that apply.",
      "options": [
        "WHILE LOOPS",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Write a method named hasSameLastDigit with three parameters of type int.",
        "Each number should be within the range of 10 (inclusive) - 1000 (inclusive). If one of the numbers is not within the range, the method should return false.",
        "Last Digit Checker"
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Last Digit Checker Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_last-digit-checker-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Last Digit Checker Coding Challenge",
      "question": "Complete the blank: \"Last ___ Checker\"",
      "options": [
        "Digit",
        "Unlike",
        "while",
        "WHILE"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Digit', from the notes for Last Digit Checker Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_last-digit-checker-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Last Digit Checker Coding Challenge",
      "question": "In LastDigitCheckerCodingChallenge.java, what does the method isValid() return?",
      "options": [
        "boolean",
        "String",
        "int",
        "void"
      ],
      "answer": 0,
      "explanation": "The method isValid() is declared with return type 'boolean' in LastDigitCheckerCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-to-words-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number To Words Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"NumberToWordsCodingChallenge.java\"?\n\npublic ___ int getDigitCount(int number){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-to-words-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number To Words Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"NumberToWordsCodingChallenge.java\".",
      "code": "        ___ counter;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for NumberToWordsCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-to-words-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number To Words Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Invalid Value\");",
      "answer": [
        "Invalid Value"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-to-words-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number To Words Coding Challenge",
      "question": "Explain the main ideas in Number To Words Coding Challenge.",
      "modelAnswer": "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge. Review the class NumberToWordsCodingChallenge and understand its key responsibilities. This example defines 3 methods; trace method behavior step by step.",
      "keyPoints": [
        "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.",
        "Review the class NumberToWordsCodingChallenge and understand its key responsibilities.",
        "This example defines 3 methods; trace method behavior step by step."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-to-words-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number To Words Coding Challenge",
      "question": "Which statement best describes Number To Words Coding Challenge?",
      "options": [
        "Number Palindrome",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.",
        "WHILE LOOPS"
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Number To Words Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-to-words-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number To Words Coding Challenge",
      "question": "Which of the following are TRUE about Number To Words Coding Challenge? Select all that apply.",
      "options": [
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.",
        "Review the class NumberToWordsCodingChallenge and understand its key responsibilities.",
        "WHILE LOOPS",
        "This example defines 3 methods; trace method behavior step by step."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Number To Words Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-to-words-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number To Words Coding Challenge",
      "question": "Complete the blank: \"This ___ belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.\"",
      "options": [
        "topic",
        "while",
        "WHILE",
        "Unlike"
      ],
      "answer": 0,
      "explanation": "The missing word is 'topic', from the notes for Number To Words Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-to-words-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number To Words Coding Challenge",
      "question": "In NumberToWordsCodingChallenge.java, what does the method getDigitCount() return?",
      "options": [
        "int",
        "String",
        "boolean",
        "void"
      ],
      "answer": 0,
      "explanation": "The method getDigitCount() is declared with return type 'int' in NumberToWordsCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_perfect-number-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Perfect Number Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PerfectNumberCodingChallenge.java\"?\n\npublic ___ boolean isPerfectNumber(int number){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_perfect-number-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Perfect Number Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"PerfectNumberCodingChallenge.java\".",
      "code": "            ___ false;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for PerfectNumberCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_perfect-number-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Perfect Number Coding Challenge",
      "question": "Explain the main ideas in Perfect Number Coding Challenge.",
      "modelAnswer": "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge. Review the class PerfectNumberCodingChallenge and understand its key responsibilities. This example defines 2 methods; trace method behavior step by step.",
      "keyPoints": [
        "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.",
        "Review the class PerfectNumberCodingChallenge and understand its key responsibilities.",
        "This example defines 2 methods; trace method behavior step by step."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_perfect-number-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Perfect Number Coding Challenge",
      "question": "Which statement best describes Perfect Number Coding Challenge?",
      "options": [
        "WHILE LOOPS",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Number Palindrome",
        "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Perfect Number Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_perfect-number-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Perfect Number Coding Challenge",
      "question": "Which of the following are TRUE about Perfect Number Coding Challenge? Select all that apply.",
      "options": [
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "This example defines 2 methods; trace method behavior step by step.",
        "WHILE LOOPS",
        "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.",
        "Review the class PerfectNumberCodingChallenge and understand its key responsibilities."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Perfect Number Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_perfect-number-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Perfect Number Coding Challenge",
      "question": "Complete the blank: \"This ___ belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.\"",
      "options": [
        "topic",
        "Unlike",
        "while",
        "WHILE"
      ],
      "answer": 0,
      "explanation": "The missing word is 'topic', from the notes for Perfect Number Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_perfect-number-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Perfect Number Coding Challenge",
      "question": "In PerfectNumberCodingChallenge.java, what does the method isPerfectNumber() return?",
      "options": [
        "String",
        "int",
        "void",
        "boolean"
      ],
      "answer": 3,
      "explanation": "The method isPerfectNumber() is declared with return type 'boolean' in PerfectNumberCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_shared-digit-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Shared Digit Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SharedDigitCodingChallenge.java\"?\n\npublic ___ boolean hasSharedDigit(int number1, int number2){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_shared-digit-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Shared Digit Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"SharedDigitCodingChallenge.java\".",
      "code": "        ___ checkIfHasSharedDigit;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for SharedDigitCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_shared-digit-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Shared Digit Coding Challenge",
      "question": "Explain the main ideas in Shared Digit Coding Challenge.",
      "modelAnswer": "Shared Digit Write a method named hasSharedDigit with two parameters of type int. Each number should be within the range of 10 (inclusive) - 99 (inclusive). If one of the numbers is not within the range, the method should return false.",
      "keyPoints": [
        "Shared Digit",
        "Write a method named hasSharedDigit with two parameters of type int.",
        "Each number should be within the range of 10 (inclusive) - 99 (inclusive). If one of the numbers is not within the range, the method should return false."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_shared-digit-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Shared Digit Coding Challenge",
      "question": "Which statement best describes Shared Digit Coding Challenge?",
      "options": [
        "Number Palindrome",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Shared Digit",
        "WHILE LOOPS"
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Shared Digit Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_shared-digit-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Shared Digit Coding Challenge",
      "question": "Which of the following are TRUE about Shared Digit Coding Challenge? Select all that apply.",
      "options": [
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Shared Digit",
        "Write a method named hasSharedDigit with two parameters of type int.",
        "Each number should be within the range of 10 (inclusive) - 99 (inclusive). If one of the numbers is not within the range, the method should return false.",
        "WHILE LOOPS"
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Shared Digit Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_shared-digit-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Shared Digit Coding Challenge",
      "question": "Complete the blank: \"___ a method named hasSharedDigit with two parameters of type int.\"",
      "options": [
        "while",
        "WHILE",
        "Unlike",
        "Write"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Write', from the notes for Shared Digit Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_shared-digit-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Shared Digit Coding Challenge",
      "question": "In SharedDigitCodingChallenge.java, what does the method hasSharedDigit() return?",
      "options": [
        "void",
        "boolean",
        "int",
        "String"
      ],
      "answer": 1,
      "explanation": "The method hasSharedDigit() is declared with return type 'boolean' in SharedDigitCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"WhileLoopCodingChallenge.java\"?\n\npublic ___ boolean isEvenNumber(int number){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"WhileLoopCodingChallenge.java\".",
      "code": "       ___ isNumberEven;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for WhileLoopCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge",
      "question": "Explain the main ideas in While Loop Coding Challenge.",
      "modelAnswer": "Create a method called isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed to the method is an even number or not. Return true from the method if it's an even number; otherwise, return false. Next, use a while loop to test a range of numbers from 5 up to and including 20, but printing out only the even numbers determined by the call to the isEvenNumber method. Okay, so the challenge is to create a method called isEvenNumber, and it takes a parameter of type int. The purpose of the method is to determine whether the argument that's been passed to the method, the int, in other words, is an even number or not. If it's an even number, return true, otherwise, return false.",
      "keyPoints": [
        "Create a method called isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed to the method is an even number or not. Return true from the method if it's an even number; otherwise, return false. Next, use a while loop to test a range of numbers from 5 up to and including 20, but printing out only the even numbers determined by the call to the isEvenNumber method. Okay, so the challenge is to create a method called isEvenNumber, and it takes a parameter of type int.",
        "The purpose of the method is to determine whether the argument that's been passed to the method, the int, in other words, is an even number or not.",
        "If it's an even number, return true, otherwise, return false."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge",
      "question": "Which statement best describes While Loop Coding Challenge?",
      "options": [
        "WHILE LOOPS",
        "Create a method called isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed to the method is an even number or not. Return true from the method if it's an even number; otherwise, return false. Next, use a while loop to test a range of numbers from 5 up to and including 20, but printing out only the even numbers determined by the call to the isEvenNumber method. Okay, so the challenge is to create a method called isEvenNumber, and it takes a parameter of type int.",
        "Number Palindrome",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for While Loop Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge",
      "question": "Which of the following are TRUE about While Loop Coding Challenge? Select all that apply.",
      "options": [
        "If it's an even number, return true, otherwise, return false.",
        "WHILE LOOPS",
        "Create a method called isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed to the method is an even number or not. Return true from the method if it's an even number; otherwise, return false. Next, use a while loop to test a range of numbers from 5 up to and including 20, but printing out only the even numbers determined by the call to the isEvenNumber method. Okay, so the challenge is to create a method called isEvenNumber, and it takes a parameter of type int.",
        "The purpose of the method is to determine whether the argument that's been passed to the method, the int, in other words, is an even number or not.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for While Loop Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge",
      "question": "Complete the blank: \"___ a method called isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed to the method is an even number or not. Return true from the method if it's an even number; otherwise, return false. Next, use a while loop to test a range of numbers from 5 up to and including 20, but printing out only the even numbers determined by the call to the isEvenNumber method. Okay, so the challenge is to create a method called isEvenNumber, and it takes a parameter of type int.\"",
      "options": [
        "WHILE",
        "Unlike",
        "Create",
        "while"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Create', from the notes for While Loop Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge",
      "question": "In WhileLoopCodingChallenge.java, what does the method isEvenNumber() return?",
      "options": [
        "boolean",
        "int",
        "void",
        "String"
      ],
      "answer": 0,
      "explanation": "The method isEvenNumber() is declared with return type 'boolean' in WhileLoopCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge-part2_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge Part2",
      "question": "Which Java keyword correctly fills in the blank in this code from \"WhileLoopCodingChallengePart2.java\"?\n\npublic ___ boolean isEvenNumber(int number){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge-part2_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge Part2",
      "question": "Complete the missing keyword in this snippet from \"WhileLoopCodingChallengePart2.java\".",
      "code": "        ___ isNumberEven;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for WhileLoopCodingChallengePart2.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge-part2_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge Part2",
      "question": "Explain the main ideas in While Loop Coding Challenge Part2.",
      "modelAnswer": "Step 2 is to modify the while code. Make it also record the total number of even numbers it has found. Break out of the loop once 5 even numbers are found. Finally, display the total number of odd and even numbers found. Alright, so the challenge is to modify the while code above. So, you want to leave the existing functionality as it is, but make it so it also records the total number of even numbers, as well as odd numbers that it's found. And once five even numbers have been found, break out of the code and display the total number of even numbers.",
      "keyPoints": [
        "Step 2 is to modify the while code. Make it also record the total number of even numbers it has found. Break out of the loop once 5 even numbers are found. Finally, display the total number of odd and even numbers found. Alright, so the challenge is to modify the while code above. So, you want to leave the existing functionality as it is, but make it so it also records the total number of even numbers, as well as odd numbers that it's found. And once five even numbers have been found, break out of the code and display the total number of even numbers."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge-part2_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge Part2",
      "question": "Which statement best describes While Loop Coding Challenge Part2?",
      "options": [
        "Number Palindrome",
        "WHILE LOOPS",
        "Step 2 is to modify the while code. Make it also record the total number of even numbers it has found. Break out of the loop once 5 even numbers are found. Finally, display the total number of odd and even numbers found. Alright, so the challenge is to modify the while code above. So, you want to leave the existing functionality as it is, but make it so it also records the total number of even numbers, as well as odd numbers that it's found. And once five even numbers have been found, break out of the code and display the total number of even numbers.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for While Loop Coding Challenge Part2.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge-part2_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge Part2",
      "question": "Complete the blank: \"Step 2 is to ___ the while code. Make it also record the total number of even numbers it has found. Break out of the loop once 5 even numbers are found. Finally, display the total number of odd and even numbers found. Alright, so the challenge is to modify the while code above. So, you want to leave the existing functionality as it is, but make it so it also records the total number of even numbers, as well as odd numbers that it's found. And once five even numbers have been found, break out of the code and display the total number of even numbers.\"",
      "options": [
        "WHILE",
        "while",
        "Unlike",
        "modify"
      ],
      "answer": 3,
      "explanation": "The missing word is 'modify', from the notes for While Loop Coding Challenge Part2.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge-part2_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge Part2",
      "question": "In WhileLoopCodingChallengePart2.java, what does the method isEvenNumber() return?",
      "options": [
        "boolean",
        "void",
        "String",
        "int"
      ],
      "answer": 0,
      "explanation": "The method isEvenNumber() is declared with return type 'boolean' in WhileLoopCodingChallengePart2.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-guesser-deep-problem_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number Guesser Deep Problem",
      "question": "Which Java keyword correctly fills in the blank in this code from \"NumberGuesserDeepProblem.java\"?\n\npublic ___ void simulateGuessingGame(int secret) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-guesser-deep-problem_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number Guesser Deep Problem",
      "question": "Complete the missing keyword in this snippet from \"NumberGuesserDeepProblem.java\".",
      "code": "    private ___ int largestFibonacciStep(int limit) {\r",
      "answer": [
        "static"
      ],
      "explanation": "The missing keyword is 'static', taken from the parsed source for NumberGuesserDeepProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-guesser-deep-problem_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number Guesser Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Collatz sequence lengths for 1 to 20:\");",
      "answer": [
        "Collatz sequence lengths for 1 to 20:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-guesser-deep-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number Guesser Deep Problem",
      "question": "Explain the main ideas in Number Guesser Deep Problem.",
      "modelAnswer": "Deep Problem: Guided Search and Sequence Analysis — Simulate a non-interactive number guessing routine that advances toward a secret using Fibonacci-sized jumps, then analyze Collatz sequence lengths for a range of inputs to discover which starting value produces the longest run.",
      "keyPoints": [
        "Deep Problem: Guided Search and Sequence Analysis — Simulate a non-interactive number guessing routine that advances toward a secret using Fibonacci-sized jumps, then analyze Collatz sequence lengths for a range of inputs to discover which starting value produces the longest run."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-guesser-deep-problem_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number Guesser Deep Problem",
      "question": "Which statement best describes Number Guesser Deep Problem?",
      "options": [
        "Number Palindrome",
        "Deep Problem: Guided Search and Sequence Analysis — Simulate a non-interactive number guessing routine that advances toward a secret using Fibonacci-sized jumps, then analyze Collatz sequence lengths for a range of inputs to discover which starting value produces the longest run.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "WHILE LOOPS"
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Number Guesser Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-guesser-deep-problem_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number Guesser Deep Problem",
      "question": "Complete the blank: \"Deep ___: Guided Search and Sequence Analysis — Simulate a non-interactive number guessing routine that advances toward a secret using Fibonacci-sized jumps, then analyze Collatz sequence lengths for a range of inputs to discover which starting value produces the longest run.\"",
      "options": [
        "WHILE",
        "Unlike",
        "Problem",
        "while"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Problem', from the notes for Number Guesser Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-guesser-deep-problem_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number Guesser Deep Problem",
      "question": "In NumberGuesserDeepProblem.java, what does the method largestFibonacciStep() return?",
      "options": [
        "String",
        "void",
        "int",
        "boolean"
      ],
      "answer": 2,
      "explanation": "The method largestFibonacciStep() is declared with return type 'int' in NumberGuesserDeepProblem.java.",
      "tags": []
    },
    {
      "qid": "ocjp-chapter-10-while-and-do-while-looping-concepts-polymorphism-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "class Animal {\n  String type = \"Animal\";\n  void speak() { System.out.println(\"Animal\"); }\n}\nclass Dog extends Animal {\n  String type = \"Dog\";\n  void speak() { System.out.println(\"Dog\"); }\n}\nAnimal a = new Dog();\nSystem.out.println(a.type);\na.speak();",
      "answer": [
        "Animal\nDog"
      ],
      "explanation": "Method calls are resolved at runtime (dynamic dispatch) → a.speak() calls Dog.speak(). But field access is resolved at compile time (static binding) → a.type uses Animal's type. This is a critical OCJP polymorphism trap.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-10-while-and-do-while-looping-concepts-constructor-chain-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "class A {\n  A() { System.out.println(\"A\"); }\n}\nclass B extends A {\n  B() { System.out.println(\"B\"); }\n}\nclass C extends B {\n  C() { System.out.println(\"C\"); }\n}\nnew C();",
      "answer": [
        "A\nB\nC"
      ],
      "explanation": "Constructor chaining: the JVM always calls super() implicitly at the top of each constructor. So A() runs, then B(), then C(). Output is A, B, C — top to bottom in the hierarchy.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-10-while-and-do-while-looping-concepts-override-overload-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-10-while-and-do-while-looping-concepts-final-keyword-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-10-while-and-do-while-looping-concepts-static-hiding-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-10-while-and-do-while-looping-concepts-covariant-return-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-10-while-and-do-while-looping-concepts-access-modifier-override-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-10-while-and-do-while-looping-concepts-for-scope-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    }
  ],
  "Chapter 11: Class Object Static And Instance Fields": [
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_class-example_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ClassExample.java\"?\n\nString value = ___ String(\"Hello\"); // When we create an object, we can pass initial data to be associated with it in parentheses.",
      "options": [
        "new",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'new'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-11-class-object-static-and-instance-fields_class-example_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "question": "Explain the main ideas in Class Example.",
      "modelAnswer": "A class can be described as :- 1) A custom data type --> For Ex :- String 2) A special code block that contains methods",
      "keyPoints": [
        "A class can be described as :-",
        "1) A custom data type --> For Ex :- String",
        "2) A special code block that contains methods"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between a class and an object in Java?",
      "modelAnswer": "A class is a blueprint that defines fields and methods, while an object is a real instance created from that blueprint. Many objects can be created from one class, each with its own state.",
      "keyPoints": [
        "A class is a blueprint that defines fields and methods, while an object is a real instance created from that blueprint.",
        "Many objects can be created from one class, each with its own state."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between static fields and instance fields?",
      "modelAnswer": "A static field belongs to the class itself and is shared by all objects of that class. An instance field belongs to each object, so every object gets its own copy.",
      "keyPoints": [
        "A static field belongs to the class itself and is shared by all objects of that class.",
        "An instance field belongs to each object, so every object gets its own copy."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What are the default values of instance fields in Java?",
      "modelAnswer": "Numeric instance fields default to 0 or 0.0, boolean defaults to false, and reference fields default to null. These defaults apply to fields, not to local variables.",
      "keyPoints": [
        "Numeric instance fields default to 0 or 0.0, boolean defaults to false, and reference fields default to null.",
        "These defaults apply to fields, not to local variables."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) When would you make a field static?",
      "modelAnswer": "Use a static field when the value should be shared across all objects, such as a counter or constant-like class state. Do not use static when every object needs its own separate value.",
      "keyPoints": [
        "Use a static field when the value should be shared across all objects, such as a counter or constant-like class state.",
        "Do not use static when every object needs its own separate value."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) What prints here: class Counter { static int c = 0; } Counter a = new Counter(); Counter b = new Counter(); a.c = 5; System.out.println(b.c);?",
      "modelAnswer": "It prints 5. The field is static, so both references access the same shared class variable.",
      "keyPoints": [
        "It prints 5.",
        "The field is static, so both references access the same shared class variable."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) Can a static method directly access an instance field like int age; without an object?",
      "modelAnswer": "No. A static method has no current object, so direct access to an instance field causes a compile-time error. It must use an object reference or access a static field instead.",
      "keyPoints": [
        "No. A static method has no current object, so direct access to an instance field causes a compile-time error.",
        "It must use an object reference or access a static field instead."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_class-example_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "question": "Which statement best describes Class Example?",
      "options": [
        "Challenge: Create a BankAccount class with a shared static bankName field, instance fields for account holder and balance, plus deposit and withdraw methods.",
        "There are 2 ways to create fields on classes.",
        "A class can be described as :-",
        "Challenge: Create a Student class with a shared static schoolName field and instance fields for name, grade, and gpa. Create two students, print their details, and show static field behaviour."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Class Example.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-11-class-object-static-and-instance-fields_class-example_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "question": "Which of the following are TRUE about Class Example? Select all that apply.",
      "options": [
        "2) A special code block that contains methods",
        "There are 2 ways to create fields on classes.",
        "A class can be described as :-",
        "Challenge: Create a BankAccount class with a shared static bankName field, instance fields for account holder and balance, plus deposit and withdraw methods.",
        "1) A custom data type --> For Ex :- String"
      ],
      "answer": [
        0,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Class Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_class-example_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "question": "Complete the blank: \"A ___ can be described as :-\"",
      "options": [
        "Without",
        "static",
        "class",
        "create"
      ],
      "answer": 2,
      "explanation": "The missing word is 'class', from the notes for Class Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_create-field-on-classes_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "question": "Which Java keyword correctly fills in the blank in this code from \"CreateFieldOnClasses.java\"?\n\n___ String name = \"Navneet\" ;",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-11-class-object-static-and-instance-fields_create-field-on-classes_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "question": "Complete the missing keyword in this snippet from \"CreateFieldOnClasses.java\".",
      "code": "        CreateFieldOnClasses createFieldOnClasses = ___ CreateFieldOnClasses();\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for CreateFieldOnClasses.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-11-class-object-static-and-instance-fields_create-field-on-classes_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "question": "Explain the main ideas in Create Field On Classes.",
      "modelAnswer": "There are 2 ways to create fields on classes. 1) With static keyword 2) Without static keyword",
      "keyPoints": [
        "There are 2 ways to create fields on classes.",
        "1) With static keyword",
        "2) Without static keyword"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_create-field-on-classes_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "question": "Which statement best describes Create Field On Classes?",
      "options": [
        "A class can be described as :-",
        "Challenge: Create a Student class with a shared static schoolName field and instance fields for name, grade, and gpa. Create two students, print their details, and show static field behaviour.",
        "There are 2 ways to create fields on classes.",
        "Challenge: Create a BankAccount class with a shared static bankName field, instance fields for account holder and balance, plus deposit and withdraw methods."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Create Field On Classes.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-11-class-object-static-and-instance-fields_create-field-on-classes_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "question": "Which of the following are TRUE about Create Field On Classes? Select all that apply.",
      "options": [
        "A class can be described as :-",
        "1) With static keyword",
        "There are 2 ways to create fields on classes.",
        "Challenge: Create a BankAccount class with a shared static bankName field, instance fields for account holder and balance, plus deposit and withdraw methods.",
        "2) Without static keyword"
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Create Field On Classes.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_create-field-on-classes_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "question": "Complete the blank: \"There are 2 ways to ___ fields on classes.\"",
      "options": [
        "create",
        "custom",
        "class",
        "special"
      ],
      "answer": 0,
      "explanation": "The missing word is 'create', from the notes for Create Field On Classes.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_create-field-on-classes_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "question": "What is an important consideration when working with Create Field On Classes?",
      "options": [
        "Value of the field always stays with the class iii) Value is accessed by ClassName.fieldname",
        "Challenge: Create a Student class with a shared static schoolName field and instance fields for name, grade, and gpa. Create two students, print their details, and show static field behaviour.",
        "A class can be described as :-",
        "Challenge: Create a BankAccount class with a shared static bankName field, instance fields for account holder and balance, plus deposit and withdraw methods."
      ],
      "answer": 0,
      "explanation": "This is a key gotcha or note taken directly from the source for Create Field On Classes.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_bank-account-fields-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Bank Account Fields Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"BankAccountFieldsChallenge.java\"?\n\n___ String bankName = \"Java National Bank\";",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-11-class-object-static-and-instance-fields_bank-account-fields-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Bank Account Fields Challenge",
      "question": "Complete the missing keyword in this snippet from \"BankAccountFieldsChallenge.java\".",
      "code": "            ___.accountHolder = accountHolder;\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for BankAccountFieldsChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-11-class-object-static-and-instance-fields_bank-account-fields-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Bank Account Fields Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"After deposit:\");",
      "answer": [
        "After deposit:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-11-class-object-static-and-instance-fields_bank-account-fields-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Bank Account Fields Challenge",
      "question": "Explain the main ideas in Bank Account Fields Challenge.",
      "modelAnswer": "Challenge: Create a BankAccount class with a shared static bankName field, instance fields for account holder and balance, plus deposit and withdraw methods.",
      "keyPoints": [
        "Challenge: Create a BankAccount class with a shared static bankName field, instance fields for account holder and balance, plus deposit and withdraw methods."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_bank-account-fields-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Bank Account Fields Challenge",
      "question": "Which statement best describes Bank Account Fields Challenge?",
      "options": [
        "Challenge: Create a BankAccount class with a shared static bankName field, instance fields for account holder and balance, plus deposit and withdraw methods.",
        "There are 2 ways to create fields on classes.",
        "Challenge: Create a Student class with a shared static schoolName field and instance fields for name, grade, and gpa. Create two students, print their details, and show static field behaviour.",
        "A class can be described as :-"
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Bank Account Fields Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_bank-account-fields-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Bank Account Fields Challenge",
      "question": "Complete the blank: \"___: Create a BankAccount class with a shared static bankName field, instance fields for account holder and balance, plus deposit and withdraw methods.\"",
      "options": [
        "special",
        "Challenge",
        "custom",
        "class"
      ],
      "answer": 1,
      "explanation": "The missing word is 'Challenge', from the notes for Bank Account Fields Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_student-class-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Student Class Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"StudentClassChallenge.java\"?\n\n___ String schoolName = \"Greenwood High\";",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-11-class-object-static-and-instance-fields_student-class-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Student Class Challenge",
      "question": "Complete the missing keyword in this snippet from \"StudentClassChallenge.java\".",
      "code": "            ___.name = name;\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for StudentClassChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-11-class-object-static-and-instance-fields_student-class-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Student Class Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Updating school name through the first student...\");",
      "answer": [
        "Updating school name through the first student..."
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-11-class-object-static-and-instance-fields_student-class-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Student Class Challenge",
      "question": "Explain the main ideas in Student Class Challenge.",
      "modelAnswer": "Challenge: Create a Student class with a shared static schoolName field and instance fields for name, grade, and gpa. Create two students, print their details, and show static field behaviour.",
      "keyPoints": [
        "Challenge: Create a Student class with a shared static schoolName field and instance fields for name, grade, and gpa. Create two students, print their details, and show static field behaviour."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_student-class-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Student Class Challenge",
      "question": "Which statement best describes Student Class Challenge?",
      "options": [
        "There are 2 ways to create fields on classes.",
        "Challenge: Create a BankAccount class with a shared static bankName field, instance fields for account holder and balance, plus deposit and withdraw methods.",
        "A class can be described as :-",
        "Challenge: Create a Student class with a shared static schoolName field and instance fields for name, grade, and gpa. Create two students, print their details, and show static field behaviour."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Student Class Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_student-class-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Student Class Challenge",
      "question": "Complete the blank: \"___: Create a Student class with a shared static schoolName field and instance fields for name, grade, and gpa. Create two students, print their details, and show static field behaviour.\"",
      "options": [
        "class",
        "special",
        "Challenge",
        "custom"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Challenge', from the notes for Student Class Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_library-system-deep-problem_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Library System Deep Problem",
      "question": "Which Java keyword correctly fills in the blank in this code from \"LibrarySystemDeepProblem.java\"?\n\nprivate ___ int bookCount = 0;",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-11-class-object-static-and-instance-fields_library-system-deep-problem_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Library System Deep Problem",
      "question": "Complete the missing keyword in this snippet from \"LibrarySystemDeepProblem.java\".",
      "code": "        private ___ String title;\r",
      "answer": [
        "final"
      ],
      "explanation": "The missing keyword is 'final', taken from the parsed source for LibrarySystemDeepProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-11-class-object-static-and-instance-fields_library-system-deep-problem_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Library System Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Library status report:\");",
      "answer": [
        "Library status report:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-11-class-object-static-and-instance-fields_library-system-deep-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Library System Deep Problem",
      "question": "Explain the main ideas in Library System Deep Problem.",
      "modelAnswer": "Deep Problem: Library Inventory Tracker — Design a compact library system that models books as objects, tracks a shared total count through a static field, and supports checkout and return workflows. The solution should show how instance state and class-wide state interact in a realistic domain model.",
      "keyPoints": [
        "Deep Problem: Library Inventory Tracker — Design a compact library system that models books as objects, tracks a shared total count through a static field, and supports checkout and return workflows. The solution should show how instance state and class-wide state interact in a realistic domain model."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_library-system-deep-problem_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Library System Deep Problem",
      "question": "Which statement best describes Library System Deep Problem?",
      "options": [
        "Challenge: Create a BankAccount class with a shared static bankName field, instance fields for account holder and balance, plus deposit and withdraw methods.",
        "There are 2 ways to create fields on classes.",
        "Deep Problem: Library Inventory Tracker — Design a compact library system that models books as objects, tracks a shared total count through a static field, and supports checkout and return workflows. The solution should show how instance state and class-wide state interact in a realistic domain model.",
        "A class can be described as :-"
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Library System Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_library-system-deep-problem_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Library System Deep Problem",
      "question": "Complete the blank: \"Deep ___: Library Inventory Tracker — Design a compact library system that models books as objects, tracks a shared total count through a static field, and supports checkout and return workflows. The solution should show how instance state and class-wide state interact in a realistic domain model.\"",
      "options": [
        "Problem",
        "custom",
        "special",
        "class"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Problem', from the notes for Library System Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_library-system-deep-problem_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Library System Deep Problem",
      "question": "In LibrarySystemDeepProblem.java, what does the method checkOut() return?",
      "options": [
        "int",
        "void",
        "boolean",
        "String"
      ],
      "answer": 2,
      "explanation": "The method checkOut() is declared with return type 'boolean' in LibrarySystemDeepProblem.java.",
      "tags": []
    },
    {
      "qid": "ocjp-chapter-11-class-object-static-and-instance-fields-polymorphism-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "class Animal {\n  String type = \"Animal\";\n  void speak() { System.out.println(\"Animal\"); }\n}\nclass Dog extends Animal {\n  String type = \"Dog\";\n  void speak() { System.out.println(\"Dog\"); }\n}\nAnimal a = new Dog();\nSystem.out.println(a.type);\na.speak();",
      "answer": [
        "Animal\nDog"
      ],
      "explanation": "Method calls are resolved at runtime (dynamic dispatch) → a.speak() calls Dog.speak(). But field access is resolved at compile time (static binding) → a.type uses Animal's type. This is a critical OCJP polymorphism trap.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-11-class-object-static-and-instance-fields-constructor-chain-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "class A {\n  A() { System.out.println(\"A\"); }\n}\nclass B extends A {\n  B() { System.out.println(\"B\"); }\n}\nclass C extends B {\n  C() { System.out.println(\"C\"); }\n}\nnew C();",
      "answer": [
        "A\nB\nC"
      ],
      "explanation": "Constructor chaining: the JVM always calls super() implicitly at the top of each constructor. So A() runs, then B(), then C(). Output is A, B, C — top to bottom in the hierarchy.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-11-class-object-static-and-instance-fields-override-overload-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-11-class-object-static-and-instance-fields-final-keyword-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-11-class-object-static-and-instance-fields-static-hiding-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-11-class-object-static-and-instance-fields-covariant-return-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-11-class-object-static-and-instance-fields-access-modifier-override-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    }
  ],
  "Chapter 12: Parsing Values Reading Input": [
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_parsing-values-reading-input_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ParsingValuesReadingInput.java\"?\n\npublic ___ String getInputFromConsole(int currentYear) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-12-parsing-values-reading-input_parsing-values-reading-input_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "Complete the missing keyword in this snippet from \"ParsingValuesReadingInput.java\".",
      "code": "        ___ name + \"'s\" + \" age is \" + age;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for ParsingValuesReadingInput.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-12-parsing-values-reading-input_parsing-values-reading-input_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "What does this code print?",
      "code": "System.out.println(\"Enter the year of birth greater than 1895 and less than or equal to current year\");",
      "answer": [
        "Enter the year of birth greater than 1895 and less than or equal to current year"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-12-parsing-values-reading-input_parsing-values-reading-input_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "Explain the main ideas in Parsing Values Reading Input.",
      "modelAnswer": "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value. Reading Data From Console Technique              | Description",
      "keyPoints": [
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Reading Data From Console",
        "Technique              | Description"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What does Integer.parseInt() do, and what exception can it throw?",
      "modelAnswer": "Integer.parseInt() converts a numeric String like \"42\" into a primitive int. It throws NumberFormatException if the text is not a valid integer.",
      "keyPoints": [
        "Integer.parseInt() converts a numeric String like \"42\" into a primitive int.",
        "It throws NumberFormatException if the text is not a valid integer."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between Integer.parseInt() and Integer.valueOf()?",
      "modelAnswer": "parseInt() returns a primitive int, while valueOf() returns an Integer object. valueOf() is useful when you need the wrapper type instead of the primitive.",
      "keyPoints": [
        "parseInt() returns a primitive int, while valueOf() returns an Integer object.",
        "valueOf() is useful when you need the wrapper type instead of the primitive."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is Scanner, and how does it read input?",
      "modelAnswer": "Scanner is a utility class that reads tokens or lines from sources such as System.in. Methods like nextInt(), next(), and nextLine() parse different kinds of input.",
      "keyPoints": [
        "Scanner is a utility class that reads tokens or lines from sources such as System.in.",
        "Methods like nextInt(), next(), and nextLine() parse different kinds of input."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Why do Java programs often need parsing when reading console input?",
      "modelAnswer": "Console input arrives as text, so you must convert numeric text into number types before doing arithmetic. That is why parsing methods are common when reading user input.",
      "keyPoints": [
        "Console input arrives as text, so you must convert numeric text into number types before doing arithmetic.",
        "That is why parsing methods are common when reading user input."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) What happens with: Integer.parseInt(\"3.5\")?",
      "modelAnswer": "It throws NumberFormatException because parseInt accepts only valid integer text. Decimal text must be parsed with a floating-point parser instead.",
      "keyPoints": [
        "It throws NumberFormatException because parseInt accepts only valid integer text.",
        "Decimal text must be parsed with a floating-point parser instead."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) Why can nextLine() appear to skip input after nextInt() in Scanner?",
      "modelAnswer": "nextInt() leaves the trailing newline in the input buffer. The following nextLine() reads that leftover newline, so you often need an extra nextLine() to consume it first.",
      "keyPoints": [
        "nextInt() leaves the trailing newline in the input buffer.",
        "The following nextLine() reads that leftover newline, so you often need an extra nextLine() to consume it first."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_parsing-values-reading-input_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "Which statement best describes Parsing Values Reading Input?",
      "options": [
        "Input Calculator",
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Parsing Values Reading Input.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-12-parsing-values-reading-input_parsing-values-reading-input_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "Which of the following are TRUE about Parsing Values Reading Input? Select all that apply.",
      "options": [
        "Input Calculator",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Reading Data From Console",
        "Technique              | Description"
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Parsing Values Reading Input.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_parsing-values-reading-input_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "Complete the blank: \"When we read data in from ___ a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.\"",
      "options": [
        "Write",
        "Input",
        "method",
        "either"
      ],
      "answer": 3,
      "explanation": "The missing word is 'either', from the notes for Parsing Values Reading Input.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_parsing-values-reading-input_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "What is an important consideration when working with Parsing Values Reading Input?",
      "options": [
        "Input Calculator",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.",
        "Always close the Scanner when done: sc.close(); (or use try-with-resources)."
      ],
      "answer": 3,
      "explanation": "This is a key gotcha or note taken directly from the source for Parsing Values Reading Input.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_parsing-values-reading-input_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "In ParsingValuesReadingInput.java, what does the method getInputFromConsole() return?",
      "options": [
        "int",
        "void",
        "String",
        "boolean"
      ],
      "answer": 2,
      "explanation": "The method getInputFromConsole() is declared with return type 'String' in ParsingValuesReadingInput.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_input-calculator-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Calculator Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"InputCalculatorChallenge.java\"?\n\npublic ___ void inputThenPrintSumAndAverage(){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-12-parsing-values-reading-input_input-calculator-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Calculator Challenge",
      "question": "Complete the missing keyword in this snippet from \"InputCalculatorChallenge.java\".",
      "code": "            Scanner sc = ___ Scanner(System.in);\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for InputCalculatorChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-12-parsing-values-reading-input_input-calculator-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Calculator Challenge",
      "question": "Explain the main ideas in Input Calculator Challenge.",
      "modelAnswer": "Input Calculator Write a method called inputThenPrintSumAndAverage that does not have any parameters. The method should not return anything (void) and it needs to keep reading int numbers from the keyboard.",
      "keyPoints": [
        "Input Calculator",
        "Write a method called inputThenPrintSumAndAverage that does not have any parameters.",
        "The method should not return anything (void) and it needs to keep reading int numbers from the keyboard."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_input-calculator-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Calculator Challenge",
      "question": "Which statement best describes Input Calculator Challenge?",
      "options": [
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Input Calculator",
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Input Calculator Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-12-parsing-values-reading-input_input-calculator-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Calculator Challenge",
      "question": "Which of the following are TRUE about Input Calculator Challenge? Select all that apply.",
      "options": [
        "The method should not return anything (void) and it needs to keep reading int numbers from the keyboard.",
        "Write a method called inputThenPrintSumAndAverage that does not have any parameters.",
        "Input Calculator",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for Input Calculator Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_input-calculator-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Calculator Challenge",
      "question": "Complete the blank: \"___ Calculator\"",
      "options": [
        "Reading",
        "Technique",
        "Input",
        "either"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Input', from the notes for Input Calculator Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_input-calculator-challenge_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Calculator Challenge",
      "question": "What is an important consideration when working with Input Calculator Challenge?",
      "options": [
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "NOTE: Use the method Math.round to round the calculated average (double). The method round returns long.",
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area."
      ],
      "answer": 2,
      "explanation": "This is a key gotcha or note taken directly from the source for Input Calculator Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_min-max-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Min Max Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MinMaxCodingChallenge.java\"?\n\npublic ___ void printMinAndMaxFromUserInputs(){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-12-parsing-values-reading-input_min-max-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Min Max Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"MinMaxCodingChallenge.java\".",
      "code": "        Scanner sc = ___ Scanner(System.in);\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for MinMaxCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-12-parsing-values-reading-input_min-max-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Min Max Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Enter any number of your choice. To quit, press any character\");",
      "answer": [
        "Enter any number of your choice. To quit, press any character"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-12-parsing-values-reading-input_min-max-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Min Max Coding Challenge",
      "question": "Explain the main ideas in Min Max Coding Challenge.",
      "modelAnswer": "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered. If the user has previously entered a set of numbers (or even just one), display the minimum and maximum number that the user entered. So, you'll want to create a loop that continues to process until the user enters non-numeric data. You'll prompt the user to enter a number or type a character to quit each iteration. After the user enters some data, you'll read the input as a string, and then test if it can be parsed to a number. You can decide if you want the user to enter integers or decimal numbers.",
      "keyPoints": [
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "If the user has previously entered a set of numbers (or even just one), display the minimum and maximum number that the user entered. So, you'll want to create a loop that continues to process until the user enters non-numeric data. You'll prompt the user to enter a number or type a character to quit each iteration. After the user enters some data, you'll read the input as a string, and then test if it can be parsed to a number.",
        "You can decide if you want the user to enter integers or decimal numbers."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_min-max-coding-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Min Max Coding Challenge",
      "question": "Which statement best describes Min Max Coding Challenge?",
      "options": [
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Input Calculator",
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Min Max Coding Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-12-parsing-values-reading-input_min-max-coding-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Min Max Coding Challenge",
      "question": "Which of the following are TRUE about Min Max Coding Challenge? Select all that apply.",
      "options": [
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "Input Calculator",
        "You can decide if you want the user to enter integers or decimal numbers.",
        "If the user has previously entered a set of numbers (or even just one), display the minimum and maximum number that the user entered. So, you'll want to create a loop that continues to process until the user enters non-numeric data. You'll prompt the user to enter a number or type a character to quit each iteration. After the user enters some data, you'll read the input as a string, and then test if it can be parsed to a number.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value."
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Min Max Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_min-max-coding-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Min Max Coding Challenge",
      "question": "Complete the blank: \"If the user has ___ entered a set of numbers (or even just one), display the minimum and maximum number that the user entered. So, you'll want to create a loop that continues to process until the user enters non-numeric data. You'll prompt the user to enter a number or type a character to quit each iteration. After the user enters some data, you'll read the input as a string, and then test if it can be parsed to a number.\"",
      "options": [
        "previously",
        "Reading",
        "Technique",
        "either"
      ],
      "answer": 0,
      "explanation": "The missing word is 'previously', from the notes for Min Max Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_min-max-coding-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Min Max Coding Challenge",
      "question": "In MinMaxCodingChallenge.java, what does the method checkIfUserInputIsNumber() return?",
      "options": [
        "String",
        "boolean",
        "int",
        "void"
      ],
      "answer": 1,
      "explanation": "The method checkIfUserInputIsNumber() is declared with return type 'boolean' in MinMaxCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_paint-job-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PaintJobChallenge.java\"?\n\npublic ___ int getBucketCount(double width, double height, double areaOfBucket, int extraBuckets){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-12-parsing-values-reading-input_paint-job-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "Complete the missing keyword in this snippet from \"PaintJobChallenge.java\".",
      "code": "        ___ totalNofBucketsRequired;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for PaintJobChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-12-parsing-values-reading-input_paint-job-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "Explain the main ideas in Paint Job Challenge.",
      "modelAnswer": "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area. The wall area is calculated as width * height. Each bucket covers a fixed area (areaPerBucket). Math.ceil() is used to round up — you always need whole buckets, never a fraction.",
      "keyPoints": [
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.",
        "The wall area is calculated as width * height. Each bucket covers a fixed area (areaPerBucket).",
        "Math.ceil() is used to round up — you always need whole buckets, never a fraction."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_paint-job-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "Which statement best describes Paint Job Challenge?",
      "options": [
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "Input Calculator"
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Paint Job Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-12-parsing-values-reading-input_paint-job-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "Which of the following are TRUE about Paint Job Challenge? Select all that apply.",
      "options": [
        "Input Calculator",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.",
        "Math.ceil() is used to round up — you always need whole buckets, never a fraction.",
        "The wall area is calculated as width * height. Each bucket covers a fixed area (areaPerBucket)."
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Paint Job Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_paint-job-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "Complete the blank: \"___ Job Challenge: calculates how many paint buckets are required to cover a wall area.\"",
      "options": [
        "either",
        "Reading",
        "Paint",
        "Technique"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Paint', from the notes for Paint Job Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_paint-job-challenge_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "What is an important consideration when working with Paint Job Challenge?",
      "options": [
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "Input Calculator",
        "Math.ceil() is used to round up — you always need whole buckets, never a fraction.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value."
      ],
      "answer": 2,
      "explanation": "This is a key gotcha or note taken directly from the source for Paint Job Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_paint-job-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "In PaintJobChallenge.java, what does the method getBucketCount() return?",
      "options": [
        "int",
        "boolean",
        "String",
        "void"
      ],
      "answer": 0,
      "explanation": "The method getBucketCount() is declared with return type 'int' in PaintJobChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_reading-user-input-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ReadingUserInputChallenge.java\"?\n\npublic ___ int printSumOfNumbersEnteredByUserUsingWhileLoop(){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-12-parsing-values-reading-input_reading-user-input-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "Complete the missing keyword in this snippet from \"ReadingUserInputChallenge.java\".",
      "code": "        Scanner sc= ___ Scanner(System.in);\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for ReadingUserInputChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-12-parsing-values-reading-input_reading-user-input-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Invalid number\");",
      "answer": [
        "Invalid number"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-12-parsing-values-reading-input_reading-user-input-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "Explain the main ideas in Reading User Input Challenge.",
      "modelAnswer": "Reading User Input Challenge. In this challenge, you'll read 5 valid numbers from the console entered by the user and print the sum of those ten numbers. By valid numbers, I mean you need to check that the numbers entered are valid integers. If they are not, print out the message \"Invalid number\" to the console, but continue looping until you do have 5 valid numbers.",
      "keyPoints": [
        "Reading User Input Challenge.",
        "In this challenge, you'll read 5 valid numbers from the console entered by the user and print the sum of those ten numbers. By valid numbers, I mean you need to check that the numbers entered are valid integers. If they are not, print out the message",
        "\"Invalid number\" to the console, but continue looping until you do have 5 valid numbers."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_reading-user-input-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "Which statement best describes Reading User Input Challenge?",
      "options": [
        "Input Calculator",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "Reading User Input Challenge.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Reading User Input Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-12-parsing-values-reading-input_reading-user-input-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "Which of the following are TRUE about Reading User Input Challenge? Select all that apply.",
      "options": [
        "Input Calculator",
        "Reading User Input Challenge.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "\"Invalid number\" to the console, but continue looping until you do have 5 valid numbers.",
        "In this challenge, you'll read 5 valid numbers from the console entered by the user and print the sum of those ten numbers. By valid numbers, I mean you need to check that the numbers entered are valid integers. If they are not, print out the message"
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Reading User Input Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_reading-user-input-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "Complete the blank: \"___ User Input Challenge.\"",
      "options": [
        "Console",
        "Reading",
        "either",
        "Technique"
      ],
      "answer": 1,
      "explanation": "The missing word is 'Reading', from the notes for Reading User Input Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_reading-user-input-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "In ReadingUserInputChallenge.java, what does the method printSumOfNumbersEnteredByUserUsingWhileLoop() return?",
      "options": [
        "int",
        "String",
        "boolean",
        "void"
      ],
      "answer": 0,
      "explanation": "The method printSumOfNumbersEnteredByUserUsingWhileLoop() is declared with return type 'int' in ReadingUserInputChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_input-validator-deep-problem_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Validator Deep Problem",
      "question": "Which Java keyword correctly fills in the blank in this code from \"InputValidatorDeepProblem.java\"?\n\npublic ___ boolean isValidInt(String value) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-12-parsing-values-reading-input_input-validator-deep-problem_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Validator Deep Problem",
      "question": "Complete the missing keyword in this snippet from \"InputValidatorDeepProblem.java\".",
      "code": "        ___ {\r",
      "answer": [
        "try"
      ],
      "explanation": "The missing keyword is 'try', taken from the parsed source for InputValidatorDeepProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-12-parsing-values-reading-input_input-validator-deep-problem_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Validator Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Valid form test:\");",
      "answer": [
        "Valid form test:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-12-parsing-values-reading-input_input-validator-deep-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Validator Deep Problem",
      "question": "Explain the main ideas in Input Validator Deep Problem.",
      "modelAnswer": "Deep Problem: Form Validation Pipeline — Build reusable parsing and validation methods that verify integer and decimal fields, enforce numeric ranges, and aggregate multiple form errors into a single readable report. This mirrors the validation logic used in real business forms and APIs.",
      "keyPoints": [
        "Deep Problem: Form Validation Pipeline — Build reusable parsing and validation methods that verify integer and decimal fields, enforce numeric ranges, and aggregate multiple form errors into a single readable report. This mirrors the validation logic used in real business forms and APIs."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_input-validator-deep-problem_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Validator Deep Problem",
      "question": "Which statement best describes Input Validator Deep Problem?",
      "options": [
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "Input Calculator",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Deep Problem: Form Validation Pipeline — Build reusable parsing and validation methods that verify integer and decimal fields, enforce numeric ranges, and aggregate multiple form errors into a single readable report. This mirrors the validation logic used in real business forms and APIs."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Input Validator Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_input-validator-deep-problem_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Validator Deep Problem",
      "question": "Complete the blank: \"Deep ___: Form Validation Pipeline — Build reusable parsing and validation methods that verify integer and decimal fields, enforce numeric ranges, and aggregate multiple form errors into a single readable report. This mirrors the validation logic used in real business forms and APIs.\"",
      "options": [
        "Problem",
        "either",
        "Technique",
        "Reading"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Problem', from the notes for Input Validator Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_input-validator-deep-problem_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Validator Deep Problem",
      "question": "In InputValidatorDeepProblem.java, what does the method isValidInt() return?",
      "options": [
        "boolean",
        "int",
        "String",
        "void"
      ],
      "answer": 0,
      "explanation": "The method isValidInt() is declared with return type 'boolean' in InputValidatorDeepProblem.java.",
      "tags": []
    }
  ],
  "Chapter 13: Exception Handling": [
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_exception-handling-in-java_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ExceptionHandlingInJava.java\"?\n\n___{ // The ___ block wraps any code that might throw an exception at runtime.",
      "options": [
        "try",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'try'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-13-exception-handling_exception-handling-in-java_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "question": "Complete the missing keyword in this snippet from \"ExceptionHandlingInJava.java\".",
      "code": "        ___ (Exception e){  // The ___ parameter specifies which exception type to handle. 'Exception' is the base class that catches any exception.\r",
      "answer": [
        "catch"
      ],
      "explanation": "The missing keyword is 'catch', taken from the parsed source for ExceptionHandlingInJava.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-13-exception-handling_exception-handling-in-java_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "question": "What does this code print?",
      "code": "System.out.println(\"You are trying to access a null value\");",
      "answer": [
        "You are trying to access a null value"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-13-exception-handling_exception-handling-in-java_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "question": "Explain the main ideas in Exception Handling In Java.",
      "modelAnswer": "Exception An exception is an abnormal condition that disrupts the normal flow of the program. Exceptions can occur due to invalid input, null references, division by zero, file not found, etc.",
      "keyPoints": [
        "Exception",
        "An exception is an abnormal condition that disrupts the normal flow of the program.",
        "Exceptions can occur due to invalid input, null references, division by zero, file not found, etc."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview",
        "tricky"
      ],
      "question": "(INTERVIEW TRAP) Does a finally block always execute in Java, even if there is a return in try or catch?",
      "modelAnswer": "Yes. The finally block runs even when try or catch executes a return statement. Example: try { return 1; } finally { System.out.println(\"finally\"); } prints finally first and then returns 1. The main practical exception is System.exit(), which terminates the JVM before finally can run.",
      "keyPoints": [
        "Yes. The finally block runs even when try or catch executes a return statement.",
        "Example: try { return 1; } finally { System.out.println(\"finally\"); } prints finally first and then returns 1.",
        "The main practical exception is System.exit(), which terminates the JVM before finally can run."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between checked and unchecked exceptions in Java?",
      "modelAnswer": "Checked exceptions are exceptions the compiler forces you to handle with try-catch or declare with throws, such as IOException and SQLException. Unchecked exceptions are RuntimeException and its subclasses, such as NullPointerException and ArrayIndexOutOfBoundsException, and the compiler does not require you to declare or catch them. Checked exceptions represent recoverable conditions the API wants you to consider explicitly, while unchecked exceptions usually indicate programming bugs or invalid runtime state.",
      "keyPoints": [
        "Checked exceptions are exceptions the compiler forces you to handle with try-catch or declare with throws, such as IOException and SQLException.",
        "Unchecked exceptions are RuntimeException and its subclasses, such as NullPointerException and ArrayIndexOutOfBoundsException, and the compiler does not require you to declare or catch them.",
        "Checked exceptions represent recoverable conditions the API wants you to consider explicitly, while unchecked exceptions usually indicate programming bugs or invalid runtime state."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the basic exception hierarchy in Java?",
      "modelAnswer": "At the top is Throwable. Throwable has two major branches: Error and Exception. Error represents serious JVM-level problems such as OutOfMemoryError and is generally not something application code should try to catch and recover from. Exception contains checked exceptions and also RuntimeException, whose subclasses are the unchecked exceptions.",
      "keyPoints": [
        "At the top is Throwable.",
        "Throwable has two major branches: Error and Exception.",
        "Error represents serious JVM-level problems such as OutOfMemoryError and is generally not something application code should try to catch and recover from.",
        "Exception contains checked exceptions and also RuntimeException, whose subclasses are the unchecked exceptions."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is multi-catch in Java?",
      "modelAnswer": "Multi-catch lets you catch multiple exception types in one catch block using the pipe symbol, for example catch (IOException | SQLException e). It was added in Java 7 and is useful when the handling logic is the same for several exception types. The caught exception variable is effectively final, so you cannot reassign e inside that catch block.",
      "keyPoints": [
        "Multi-catch lets you catch multiple exception types in one catch block using the pipe symbol, for example catch (IOException | SQLException e).",
        "It was added in Java 7 and is useful when the handling logic is the same for several exception types.",
        "The caught exception variable is effectively final, so you cannot reassign e inside that catch block."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between throw and throws in Java?",
      "modelAnswer": "throw is used inside a method body to actually create or pass an exception object, such as throw new IllegalArgumentException(\"bad input\"). throws is used in the method signature to declare that the method may propagate certain checked exceptions to its caller. Think of throw as the action and throws as the declaration.",
      "keyPoints": [
        "throw is used inside a method body to actually create or pass an exception object, such as throw new IllegalArgumentException(\"bad input\").",
        "throws is used in the method signature to declare that the method may propagate certain checked exceptions to its caller.",
        "Think of throw as the action and throws as the declaration."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is a NullPointerException and when does it occur?",
      "modelAnswer": "A NullPointerException happens when you try to call a method, access a field, or otherwise use an object reference that is null. Example: String s = null; s.length(); throws NullPointerException because s does not point to any actual String object. It is one of the most common runtime exceptions in Java and usually indicates missing null checks or incorrect object initialization.",
      "keyPoints": [
        "A NullPointerException happens when you try to call a method, access a field, or otherwise use an object reference that is null.",
        "Example: String s = null; s.length(); throws NullPointerException because s does not point to any actual String object.",
        "It is one of the most common runtime exceptions in Java and usually indicates missing null checks or incorrect object initialization."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_exception-handling-in-java_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "question": "Complete the blank: \"An ___ is an abnormal condition that disrupts the normal flow of the program.\"",
      "options": [
        "Parse",
        "Write",
        "Challenge",
        "exception"
      ],
      "answer": 3,
      "explanation": "The missing word is 'exception', from the notes for Exception Handling In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_multi-catch-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Multi Catch Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MultiCatchChallenge.java\"?\n\npublic ___ void demonstrateException(String scenario) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-13-exception-handling_multi-catch-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Multi Catch Challenge",
      "question": "Complete the missing keyword in this snippet from \"MultiCatchChallenge.java\".",
      "code": "        ___ {\r",
      "answer": [
        "try"
      ],
      "explanation": "The missing keyword is 'try', taken from the parsed source for MultiCatchChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-13-exception-handling_multi-catch-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Multi Catch Challenge",
      "question": "Explain the main ideas in Multi Catch Challenge.",
      "modelAnswer": "Challenge: Demonstrate handling NullPointerException, ArrayIndexOutOfBoundsException, and NumberFormatException with separate catch blocks and a finally block.",
      "keyPoints": [
        "Challenge: Demonstrate handling NullPointerException, ArrayIndexOutOfBoundsException, and NumberFormatException with separate catch blocks and a finally block."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_multi-catch-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Multi Catch Challenge",
      "question": "Which statement best describes Multi Catch Challenge?",
      "options": [
        "Deep Problem: Fault-Tolerant Calculator — Build a calculator that performs standard arithmetic and square root operations while handling invalid expressions, divide-by-zero cases, negative square roots, and parsing errors gracefully. The solution should expose safe operation methods and a parser for simple text expressions.",
        "Challenge: Demonstrate handling NullPointerException, ArrayIndexOutOfBoundsException, and NumberFormatException with separate catch blocks and a finally block.",
        "Challenge: Write a safeDivide method that returns a / b and catches ArithmeticException when the divisor is zero, returning 0 instead.",
        "Challenge: Parse an age from a String using Integer.parseInt, catch NumberFormatException, and return -1 for invalid input."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Multi Catch Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_multi-catch-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Multi Catch Challenge",
      "question": "Complete the blank: \"___: Demonstrate handling NullPointerException, ArrayIndexOutOfBoundsException, and NumberFormatException with separate catch blocks and a finally block.\"",
      "options": [
        "exception",
        "Exception",
        "Challenge",
        "Exceptions"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Challenge', from the notes for Multi Catch Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_parse-and-handle-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Parse And Handle Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ParseAndHandleChallenge.java\"?\n\npublic ___ int parseAge(String input) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-13-exception-handling_parse-and-handle-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Parse And Handle Challenge",
      "question": "Complete the missing keyword in this snippet from \"ParseAndHandleChallenge.java\".",
      "code": "        ___ {\r",
      "answer": [
        "try"
      ],
      "explanation": "The missing keyword is 'try', taken from the parsed source for ParseAndHandleChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-13-exception-handling_parse-and-handle-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Parse And Handle Challenge",
      "question": "Explain the main ideas in Parse And Handle Challenge.",
      "modelAnswer": "Challenge: Parse an age from a String using Integer.parseInt, catch NumberFormatException, and return -1 for invalid input.",
      "keyPoints": [
        "Challenge: Parse an age from a String using Integer.parseInt, catch NumberFormatException, and return -1 for invalid input."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_parse-and-handle-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Parse And Handle Challenge",
      "question": "Which statement best describes Parse And Handle Challenge?",
      "options": [
        "Challenge: Parse an age from a String using Integer.parseInt, catch NumberFormatException, and return -1 for invalid input.",
        "Deep Problem: Fault-Tolerant Calculator — Build a calculator that performs standard arithmetic and square root operations while handling invalid expressions, divide-by-zero cases, negative square roots, and parsing errors gracefully. The solution should expose safe operation methods and a parser for simple text expressions.",
        "Challenge: Write a safeDivide method that returns a / b and catches ArithmeticException when the divisor is zero, returning 0 instead.",
        "Challenge: Demonstrate handling NullPointerException, ArrayIndexOutOfBoundsException, and NumberFormatException with separate catch blocks and a finally block."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Parse And Handle Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_parse-and-handle-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Parse And Handle Challenge",
      "question": "Complete the blank: \"___: Parse an age from a String using Integer.parseInt, catch NumberFormatException, and return -1 for invalid input.\"",
      "options": [
        "Challenge",
        "exception",
        "Exceptions",
        "Exception"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Challenge', from the notes for Parse And Handle Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_parse-and-handle-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Parse And Handle Challenge",
      "question": "In ParseAndHandleChallenge.java, what does the method parseAge() return?",
      "options": [
        "String",
        "int",
        "void",
        "boolean"
      ],
      "answer": 1,
      "explanation": "The method parseAge() is declared with return type 'int' in ParseAndHandleChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_safe-division-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Safe Division Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SafeDivisionChallenge.java\"?\n\npublic ___ int safeDivide(int a, int b) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-13-exception-handling_safe-division-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Safe Division Challenge",
      "question": "Complete the missing keyword in this snippet from \"SafeDivisionChallenge.java\".",
      "code": "        ___ {\r",
      "answer": [
        "try"
      ],
      "explanation": "The missing keyword is 'try', taken from the parsed source for SafeDivisionChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-13-exception-handling_safe-division-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Safe Division Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Cannot divide by zero. Returning 0.\");",
      "answer": [
        "Cannot divide by zero. Returning 0."
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-13-exception-handling_safe-division-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Safe Division Challenge",
      "question": "Explain the main ideas in Safe Division Challenge.",
      "modelAnswer": "Challenge: Write a safeDivide method that returns a / b and catches ArithmeticException when the divisor is zero, returning 0 instead.",
      "keyPoints": [
        "Challenge: Write a safeDivide method that returns a / b and catches ArithmeticException when the divisor is zero, returning 0 instead."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_safe-division-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Safe Division Challenge",
      "question": "Which statement best describes Safe Division Challenge?",
      "options": [
        "Challenge: Demonstrate handling NullPointerException, ArrayIndexOutOfBoundsException, and NumberFormatException with separate catch blocks and a finally block.",
        "Deep Problem: Fault-Tolerant Calculator — Build a calculator that performs standard arithmetic and square root operations while handling invalid expressions, divide-by-zero cases, negative square roots, and parsing errors gracefully. The solution should expose safe operation methods and a parser for simple text expressions.",
        "Challenge: Write a safeDivide method that returns a / b and catches ArithmeticException when the divisor is zero, returning 0 instead.",
        "Challenge: Parse an age from a String using Integer.parseInt, catch NumberFormatException, and return -1 for invalid input."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Safe Division Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_safe-division-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Safe Division Challenge",
      "question": "Complete the blank: \"___: Write a safeDivide method that returns a / b and catches ArithmeticException when the divisor is zero, returning 0 instead.\"",
      "options": [
        "Exceptions",
        "Challenge",
        "Exception",
        "exception"
      ],
      "answer": 1,
      "explanation": "The missing word is 'Challenge', from the notes for Safe Division Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_safe-division-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Safe Division Challenge",
      "question": "In SafeDivisionChallenge.java, what does the method safeDivide() return?",
      "options": [
        "void",
        "boolean",
        "String",
        "int"
      ],
      "answer": 3,
      "explanation": "The method safeDivide() is declared with return type 'int' in SafeDivisionChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_robust-calculator-deep-problem_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Robust Calculator Deep Problem",
      "question": "Which Java keyword correctly fills in the blank in this code from \"RobustCalculatorDeepProblem.java\"?\n\n___ String add(double first, double second) {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-13-exception-handling_robust-calculator-deep-problem_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Robust Calculator Deep Problem",
      "question": "Complete the missing keyword in this snippet from \"RobustCalculatorDeepProblem.java\".",
      "code": "        ___ formatBinaryResult(first, \"+\", second, first + second);\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for RobustCalculatorDeepProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-13-exception-handling_robust-calculator-deep-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Robust Calculator Deep Problem",
      "question": "Explain the main ideas in Robust Calculator Deep Problem.",
      "modelAnswer": "Deep Problem: Fault-Tolerant Calculator — Build a calculator that performs standard arithmetic and square root operations while handling invalid expressions, divide-by-zero cases, negative square roots, and parsing errors gracefully. The solution should expose safe operation methods and a parser for simple text expressions.",
      "keyPoints": [
        "Deep Problem: Fault-Tolerant Calculator — Build a calculator that performs standard arithmetic and square root operations while handling invalid expressions, divide-by-zero cases, negative square roots, and parsing errors gracefully. The solution should expose safe operation methods and a parser for simple text expressions."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_robust-calculator-deep-problem_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Robust Calculator Deep Problem",
      "question": "Which statement best describes Robust Calculator Deep Problem?",
      "options": [
        "Deep Problem: Fault-Tolerant Calculator — Build a calculator that performs standard arithmetic and square root operations while handling invalid expressions, divide-by-zero cases, negative square roots, and parsing errors gracefully. The solution should expose safe operation methods and a parser for simple text expressions.",
        "Challenge: Parse an age from a String using Integer.parseInt, catch NumberFormatException, and return -1 for invalid input.",
        "Challenge: Write a safeDivide method that returns a / b and catches ArithmeticException when the divisor is zero, returning 0 instead.",
        "Challenge: Demonstrate handling NullPointerException, ArrayIndexOutOfBoundsException, and NumberFormatException with separate catch blocks and a finally block."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Robust Calculator Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_robust-calculator-deep-problem_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Robust Calculator Deep Problem",
      "question": "Complete the blank: \"Deep ___: Fault-Tolerant Calculator — Build a calculator that performs standard arithmetic and square root operations while handling invalid expressions, divide-by-zero cases, negative square roots, and parsing errors gracefully. The solution should expose safe operation methods and a parser for simple text expressions.\"",
      "options": [
        "exception",
        "Problem",
        "Exceptions",
        "Exception"
      ],
      "answer": 1,
      "explanation": "The missing word is 'Problem', from the notes for Robust Calculator Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_robust-calculator-deep-problem_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Robust Calculator Deep Problem",
      "question": "In RobustCalculatorDeepProblem.java, what does the method add() return?",
      "options": [
        "void",
        "boolean",
        "int",
        "String"
      ],
      "answer": 3,
      "explanation": "The method add() is declared with return type 'String' in RobustCalculatorDeepProblem.java.",
      "tags": []
    },
    {
      "qid": "ocjp-chapter-13-exception-handling-finally-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "try {\n  System.out.println(\"try\");\n  return;\n} finally {\n  System.out.println(\"finally\");\n}",
      "answer": [
        "try\nfinally"
      ],
      "explanation": "finally ALWAYS executes — even after a return statement. The method only actually returns after finally completes. This is a top OCJP gotcha.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-13-exception-handling-checked-unchecked-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 13: Exception Handling",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    }
  ],
  "Chapter 14: OOP Concepts": [
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_classes-and-inheritance_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ClassesAndInheritance.java\"?\n\n___ class ClassesAndInheritance {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_classes-and-inheritance_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "question": "Explain the main ideas in Classes And Inheritance.",
      "modelAnswer": "Object-oriented programming is a way to model real world objects as software objects which contain both data and code OOP is sometimes called class-based programming. Class-based programming starts with classes which, become the blueprints for objects Modelling real-world objects, as software objects is a fundamental part of Object-Oriented Programming.",
      "keyPoints": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "OOP is sometimes called class-based programming. Class-based programming starts with classes which, become the blueprints for objects",
        "Modelling real-world objects, as software objects is a fundamental part of Object-Oriented Programming."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between an abstract class and an interface in Java?",
      "modelAnswer": "An abstract class can have constructors, instance fields, concrete methods, and abstract methods, so it is useful for sharing common state and behavior in a base class. An interface represents a contract or capability. It has no constructors and no instance state for objects, though Java 8+ allows default and static methods. A class can extend only ONE abstract class, but it can implement MULTIPLE interfaces. Use an abstract class when related classes share core implementation or state. Use an interface when you want unrelated classes to promise the same behavior, such as Comparable or Runnable.",
      "keyPoints": [
        "An abstract class can have constructors, instance fields, concrete methods, and abstract methods, so it is useful for sharing common state and behavior in a base class.",
        "An interface represents a contract or capability. It has no constructors and no instance state for objects, though Java 8+ allows default and static methods.",
        "A class can extend only ONE abstract class, but it can implement MULTIPLE interfaces.",
        "Use an abstract class when related classes share core implementation or state. Use an interface when you want unrelated classes to promise the same behavior, such as Comparable or Runnable."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What are the three common uses of the final keyword in Java?",
      "modelAnswer": "A final variable can be assigned only once after initialization, so its reference or primitive value cannot be reassigned. A final method cannot be overridden by subclasses. A final class cannot be extended, which is why classes like String and Integer cannot be subclassed.",
      "keyPoints": [
        "A final variable can be assigned only once after initialization, so its reference or primitive value cannot be reassigned.",
        "A final method cannot be overridden by subclasses.",
        "A final class cannot be extended, which is why classes like String and Integer cannot be subclassed."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the order of Java access modifiers from most restrictive to least restrictive?",
      "modelAnswer": "Order: private, default (package-private), protected, public. private means only inside the same class. default means only classes in the same package. protected means same package plus subclasses in other packages. public means accessible from everywhere.",
      "keyPoints": [
        "Order: private, default (package-private), protected, public.",
        "private means only inside the same class.",
        "default means only classes in the same package.",
        "protected means same package plus subclasses in other packages.",
        "public means accessible from everywhere."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between this and super in Java?",
      "modelAnswer": "this refers to the current object and is used to access current class fields, methods, or another constructor in the same class through this(). super refers to the parent-class part of the current object and is used to call the parent constructor with super() or access overridden parent methods and hidden parent fields. this resolves current-object context, while super explicitly moves one level up the inheritance chain.",
      "keyPoints": [
        "this refers to the current object and is used to access current class fields, methods, or another constructor in the same class through this().",
        "super refers to the parent-class part of the current object and is used to call the parent constructor with super() or access overridden parent methods and hidden parent fields.",
        "this resolves current-object context, while super explicitly moves one level up the inheritance chain."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is polymorphism in Java, and what is the difference between compile-time and runtime polymorphism?",
      "modelAnswer": "Compile-time polymorphism usually means method overloading, where the compiler decides which overloaded method signature matches the arguments. Runtime polymorphism usually means method overriding, where the JVM decides at runtime which overridden method to call based on the ACTUAL object type, not the reference type. Example: Animal a = new Dog(); a.sound(); calls Dog.sound() if sound() is overridden in Dog. This is dynamic dispatch.",
      "keyPoints": [
        "Compile-time polymorphism usually means method overloading, where the compiler decides which overloaded method signature matches the arguments.",
        "Runtime polymorphism usually means method overriding, where the JVM decides at runtime which overridden method to call based on the ACTUAL object type, not the reference type.",
        "Example: Animal a = new Dog(); a.sound(); calls Dog.sound() if sound() is overridden in Dog. This is dynamic dispatch."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_classes-and-inheritance_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "question": "Which statement best describes Classes And Inheritance?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Create a new class for a bank account."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Classes And Inheritance.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_classes-and-inheritance_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "question": "Which of the following are TRUE about Classes And Inheritance? Select all that apply.",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "OOP is sometimes called class-based programming. Class-based programming starts with classes which, become the blueprints for objects",
        "Modelling real-world objects, as software objects is a fundamental part of Object-Oriented Programming."
      ],
      "answer": [
        0,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Classes And Inheritance.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_classes-and-inheritance_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "question": "Complete the blank: \"OOP is ___ called class-based programming. Class-based programming starts with classes which, become the blueprints for objects\"",
      "options": [
        "writing",
        "access",
        "Unlike",
        "sometimes"
      ],
      "answer": 3,
      "explanation": "The missing word is 'sometimes', from the notes for Classes And Inheritance.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_car_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Car",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Car.java\"?\n\n___ boolean isConvertible() {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_car_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Car",
      "question": "Complete the missing keyword in this snippet from \"Car.java\".",
      "code": "        ___ convertible;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for Car.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_car_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Car",
      "question": "Explain the main ideas in Car.",
      "modelAnswer": "Unlike local variables, class variables should have some type of access modifier declared for it. If no access modifier is declared explicitly, Java declares the default one (package private), implicitly. When writing methods that use non-static fields, your method can't be declared static.",
      "keyPoints": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "If no access modifier is declared explicitly, Java declares the default one (package private), implicitly.",
        "When writing methods that use non-static fields, your method can't be declared static."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_car_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Car",
      "question": "Which statement best describes Car?",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Create a new class for a bank account."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Car.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_car_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Car",
      "question": "Which of the following are TRUE about Car? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "If no access modifier is declared explicitly, Java declares the default one (package private), implicitly.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "When writing methods that use non-static fields, your method can't be declared static.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Car.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_car_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Car",
      "question": "Complete the blank: \"___ local variables, class variables should have some type of access modifier declared for it.\"",
      "options": [
        "Objectoriented",
        "Modelling",
        "sometimes",
        "Unlike"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Unlike', from the notes for Car.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_car_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Car",
      "question": "In Car.java, what does the method isConvertible() return?",
      "options": [
        "void",
        "boolean",
        "String",
        "int"
      ],
      "answer": 1,
      "explanation": "The method isConvertible() is declared with return type 'boolean' in Car.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Main.java\"?\n\n___ class Main {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_main_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Explain the main ideas in Main.",
      "modelAnswer": "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods. Car car = null; — the variable car exists, but points to nothing. Calling car.describeCar() here causes a NullPointerException. When you create a class instance (Car car = new Car()), Java sets all un-initialised fields to their default values: Strings -> null, int -> 0, boolean -> false.",
      "keyPoints": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Car car = null; — the variable car exists, but points to nothing. Calling car.describeCar() here causes a NullPointerException.",
        "When you create a class instance (Car car = new Car()), Java sets all un-initialised fields to their default values: Strings -> null, int -> 0, boolean -> false."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which statement best describes Main?",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Create a new class for a bank account.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Main.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_main_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which of the following are TRUE about Main? Select all that apply.",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Car car = null; — the variable car exists, but points to nothing. Calling car.describeCar() here causes a NullPointerException.",
        "When you create a class instance (Car car = new Car()), Java sets all un-initialised fields to their default values: Strings -> null, int -> 0, boolean -> false.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Main.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the blank: \"This ___ demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.\"",
      "options": [
        "Objectoriented",
        "Modelling",
        "sometimes",
        "class"
      ],
      "answer": 3,
      "explanation": "The missing word is 'class', from the notes for Main.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_bank-account_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bank Account",
      "question": "Which Java keyword correctly fills in the blank in this code from \"BankAccount.java\"?\n\n___ String getAccountNumber() {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_bank-account_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bank Account",
      "question": "Complete the missing keyword in this snippet from \"BankAccount.java\".",
      "code": "        ___ accountNumber;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for BankAccount.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_bank-account_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bank Account",
      "question": "Explain the main ideas in Bank Account.",
      "modelAnswer": "Create a new class for a bank account. Create fields for account characteristics like: account number. account balance. customer name. email. and phone number.",
      "keyPoints": [
        "Create a new class for a bank account.",
        "Create fields for account characteristics like:",
        "account number. account balance. customer name. email. and phone number."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_bank-account_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bank Account",
      "question": "Which statement best describes Bank Account?",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Create a new class for a bank account.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Bank Account.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_bank-account_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bank Account",
      "question": "Which of the following are TRUE about Bank Account? Select all that apply.",
      "options": [
        "Create a new class for a bank account.",
        "account number. account balance. customer name. email. and phone number.",
        "Create fields for account characteristics like:",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for Bank Account.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_bank-account_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bank Account",
      "question": "Complete the blank: \"___ a new class for a bank account.\"",
      "options": [
        "sometimes",
        "Objectoriented",
        "Modelling",
        "Create"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Create', from the notes for Bank Account.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_bank-account_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bank Account",
      "question": "In BankAccount.java, what does the method getAccountNumber() return?",
      "options": [
        "boolean",
        "void",
        "int",
        "String"
      ],
      "answer": 3,
      "explanation": "The method getAccountNumber() is declared with return type 'String' in BankAccount.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Main.java\"?\n\nBankAccount bankAccount = ___ BankAccount();",
      "options": [
        "new",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'new'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_main_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Explain the main ideas in Main.",
      "modelAnswer": "This topic belongs to Chapter 14: OOP Concepts → Classes Challenge. Review the class Main and understand its key responsibilities. This example defines 1 method; trace method behavior step by step.",
      "keyPoints": [
        "This topic belongs to Chapter 14: OOP Concepts → Classes Challenge.",
        "Review the class Main and understand its key responsibilities.",
        "This example defines 1 method; trace method behavior step by step."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which statement best describes Main?",
      "options": [
        "This topic belongs to Chapter 14: OOP Concepts → Classes Challenge.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Main.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_main_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which of the following are TRUE about Main? Select all that apply.",
      "options": [
        "This example defines 1 method; trace method behavior step by step.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Review the class Main and understand its key responsibilities.",
        "This topic belongs to Chapter 14: OOP Concepts → Classes Challenge.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Main.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the blank: \"This ___ belongs to Chapter 14: OOP Concepts → Classes Challenge.\"",
      "options": [
        "Objectoriented",
        "Modelling",
        "topic",
        "sometimes"
      ],
      "answer": 2,
      "explanation": "The missing word is 'topic', from the notes for Main.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-over-loading-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MethodOverLoadingChallenge.java\"?\n\npublic ___ void calcFeetAndInchesToCentimeters(double feet, double inches){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_method-over-loading-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Challenge",
      "question": "Complete the missing keyword in this snippet from \"MethodOverLoadingChallenge.java\".",
      "code": "    public ___ void calcFeetAndInchesToCentimeters(double centimeters){\r",
      "answer": [
        "static"
      ],
      "explanation": "The missing keyword is 'static', taken from the parsed source for MethodOverLoadingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_method-over-loading-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Invalid value, please enter correct value\");",
      "answer": [
        "Invalid value, please enter correct value"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_method-over-loading-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Challenge",
      "question": "Explain the main ideas in Method Over Loading Challenge.",
      "modelAnswer": "Create two methods with the  same name: convertToCentimeters The first method has one parameter of type int,  which represents the entire height in inches. You'll convert inches to centimeters, in this  method, and pass back the number of centimeters, as a double. The second method has two parameters  of type int, one to represent height in feet, and one to represent the remaining height  in inches. So if a person is 5 foot, 8 inches, the values 5 for feet and 8 for  inches would be passed to this method.",
      "keyPoints": [
        "Create two methods with the  same name: convertToCentimeters",
        "The first method has one parameter of type int,  which represents the entire height in inches.",
        "You'll convert inches to centimeters, in this  method, and pass back the number of centimeters, as a double. The second method has two parameters  of type int, one to represent height in feet, and one to represent the remaining height  in inches. So if a person is 5 foot, 8 inches, the values 5 for feet and 8 for  inches would be passed to this method."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-over-loading-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Challenge",
      "question": "Which statement best describes Method Over Loading Challenge?",
      "options": [
        "Create two methods with the  same name: convertToCentimeters",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Method Over Loading Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_method-over-loading-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Challenge",
      "question": "Which of the following are TRUE about Method Over Loading Challenge? Select all that apply.",
      "options": [
        "Create two methods with the  same name: convertToCentimeters",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "You'll convert inches to centimeters, in this  method, and pass back the number of centimeters, as a double. The second method has two parameters  of type int, one to represent height in feet, and one to represent the remaining height  in inches. So if a person is 5 foot, 8 inches, the values 5 for feet and 8 for  inches would be passed to this method.",
        "The first method has one parameter of type int,  which represents the entire height in inches."
      ],
      "answer": [
        0,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Method Over Loading Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-over-loading-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Challenge",
      "question": "Complete the blank: \"___ two methods with the  same name: convertToCentimeters\"",
      "options": [
        "sometimes",
        "Objectoriented",
        "Modelling",
        "Create"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Create', from the notes for Method Over Loading Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-overloading-second-and-minutes-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MethodOverloadingSecondAndMinutesChallenge.java\"?\n\npublic ___ String getDurationString(int minutes, int seconds){",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_method-overloading-second-and-minutes-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "Complete the missing keyword in this snippet from \"MethodOverloadingSecondAndMinutesChallenge.java\".",
      "code": "        ___ duration;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for MethodOverloadingSecondAndMinutesChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_method-overloading-second-and-minutes-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "Explain the main ideas in Method Overloading Second And Minutes Challenge.",
      "modelAnswer": "Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds. You should validate that the first parameter minutes is >= 0. You should validate that the 2nd parameter seconds is >= 0 and <= 59.",
      "keyPoints": [
        "Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds.",
        "You should validate that the first parameter minutes is >= 0.",
        "You should validate that the 2nd parameter seconds is >= 0 and <= 59."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-overloading-second-and-minutes-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "Which statement best describes Method Overloading Second And Minutes Challenge?",
      "options": [
        "Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Method Overloading Second And Minutes Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_method-overloading-second-and-minutes-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "Which of the following are TRUE about Method Overloading Second And Minutes Challenge? Select all that apply.",
      "options": [
        "Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds.",
        "You should validate that the first parameter minutes is >= 0.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "You should validate that the 2nd parameter seconds is >= 0 and <= 59."
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Method Overloading Second And Minutes Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-overloading-second-and-minutes-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "Complete the blank: \"___ a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds.\"",
      "options": [
        "Create",
        "sometimes",
        "Modelling",
        "Objectoriented"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Create', from the notes for Method Overloading Second And Minutes Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-overloading-second-and-minutes-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "In MethodOverloadingSecondAndMinutesChallenge.java, what does the method getDurationString() return?",
      "options": [
        "boolean",
        "String",
        "void",
        "int"
      ],
      "answer": 1,
      "explanation": "The method getDurationString() is declared with return type 'String' in MethodOverloadingSecondAndMinutesChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_person-age-validation_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PersonAgeValidation.java\"?\n\n___ String getFirstName(){",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_person-age-validation_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "Complete the missing keyword in this snippet from \"PersonAgeValidation.java\".",
      "code": "        ___ firstName;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for PersonAgeValidation.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_person-age-validation_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "Explain the main ideas in Person Age Validation.",
      "modelAnswer": "Person Class and Age Validation Write a class with the name Person. The class needs three fields (instance variables) with the names firstName, lastName of type String and age of type int. Write the following methods (instance methods):",
      "keyPoints": [
        "Person Class and Age Validation",
        "Write a class with the name Person. The class needs three fields (instance variables) with the names firstName, lastName of type String and age of type int.",
        "Write the following methods (instance methods):"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_person-age-validation_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "Which statement best describes Person Age Validation?",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Person Class and Age Validation",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Person Age Validation.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_person-age-validation_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "Which of the following are TRUE about Person Age Validation? Select all that apply.",
      "options": [
        "Write a class with the name Person. The class needs three fields (instance variables) with the names firstName, lastName of type String and age of type int.",
        "Write the following methods (instance methods):",
        "Person Class and Age Validation",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for Person Age Validation.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_person-age-validation_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "Complete the blank: \"___ Class and Age Validation\"",
      "options": [
        "Person",
        "sometimes",
        "Modelling",
        "Objectoriented"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Person', from the notes for Person Age Validation.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_person-age-validation_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "What is an important consideration when working with Person Age Validation?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "NOTE: All methods should be defined as public NOT public static."
      ],
      "answer": 3,
      "explanation": "This is a key gotcha or note taken directly from the source for Person Age Validation.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_person-age-validation_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "In PersonAgeValidation.java, what does the method getFirstName() return?",
      "options": [
        "void",
        "boolean",
        "String",
        "int"
      ],
      "answer": 2,
      "explanation": "The method getFirstName() is declared with return type 'String' in PersonAgeValidation.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_sum-calculator-implementation-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SumCalculatorImplementationChallenge.java\"?\n\n___ double getFirstNumber(){",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_sum-calculator-implementation-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "Complete the missing keyword in this snippet from \"SumCalculatorImplementationChallenge.java\".",
      "code": "        ___ firstNumber;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for SumCalculatorImplementationChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_sum-calculator-implementation-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "Explain the main ideas in Sum Calculator Implementation Challenge.",
      "modelAnswer": "Sum Calculator Implementation Write a class with the name SimpleCalculator. The class needs two fields (instance variables) with names firstNumber and secondNumber both of type double. Write the following methods (instance methods):",
      "keyPoints": [
        "Sum Calculator Implementation",
        "Write a class with the name SimpleCalculator. The class needs two fields (instance variables) with names firstNumber and secondNumber both of type double.",
        "Write the following methods (instance methods):"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_sum-calculator-implementation-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "Which statement best describes Sum Calculator Implementation Challenge?",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Sum Calculator Implementation"
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Sum Calculator Implementation Challenge.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_sum-calculator-implementation-challenge_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "Which of the following are TRUE about Sum Calculator Implementation Challenge? Select all that apply.",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Sum Calculator Implementation",
        "Write a class with the name SimpleCalculator. The class needs two fields (instance variables) with names firstNumber and secondNumber both of type double.",
        "Write the following methods (instance methods):"
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Sum Calculator Implementation Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_sum-calculator-implementation-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "Complete the blank: \"Sum ___ Implementation\"",
      "options": [
        "Modelling",
        "Objectoriented",
        "sometimes",
        "Calculator"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Calculator', from the notes for Sum Calculator Implementation Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_sum-calculator-implementation-challenge_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "What is an important consideration when working with Sum Calculator Implementation Challenge?",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "NOTE: All methods should be defined as public NOT public static."
      ],
      "answer": 3,
      "explanation": "This is a key gotcha or note taken directly from the source for Sum Calculator Implementation Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_sum-calculator-implementation-challenge_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "In SumCalculatorImplementationChallenge.java, what does the method getFirstNumber() return?",
      "options": [
        "void",
        "String",
        "double",
        "int"
      ],
      "answer": 2,
      "explanation": "The method getFirstNumber() is declared with return type 'double' in SumCalculatorImplementationChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_constructor-concept_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ConstructorConcept.java\"?\n\n___ ConstructorConcept(String accountNumber,double accountBalance, String customerName, String email, String phoneNumber){",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_constructor-concept_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "Complete the missing keyword in this snippet from \"ConstructorConcept.java\".",
      "code": "        ___.accountNumber = accountNumber;\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for ConstructorConcept.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_constructor-concept_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "What does this code print?",
      "code": "System.out.println(\"Constructor with 5 arguments is called\");",
      "answer": [
        "Constructor with 5 arguments is called"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_constructor-concept_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "Explain the main ideas in Constructor Concept.",
      "modelAnswer": "A constructor is used in the creation of an object. It is a special type of code block that has a specific name and parameters, much like a method. It has the same name as the class itself, and it doesn't return any values.",
      "keyPoints": [
        "A constructor is used in the creation of an object.",
        "It is a special type of code block that has a specific name and parameters, much like a method.",
        "It has the same name as the class itself, and it doesn't return any values."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_constructor-concept_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "Which statement best describes Constructor Concept?",
      "options": [
        "A constructor is used in the creation of an object.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Constructor Concept.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_constructor-concept_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "Which of the following are TRUE about Constructor Concept? Select all that apply.",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "It is a special type of code block that has a specific name and parameters, much like a method.",
        "A constructor is used in the creation of an object.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "It has the same name as the class itself, and it doesn't return any values."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Constructor Concept.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_constructor-concept_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "Complete the blank: \"A ___ is used in the creation of an object.\"",
      "options": [
        "Objectoriented",
        "constructor",
        "Modelling",
        "sometimes"
      ],
      "answer": 1,
      "explanation": "The missing word is 'constructor', from the notes for Constructor Concept.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_constructor-concept_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "What is an important consideration when working with Constructor Concept?",
      "options": [
        "It should never include a return type from a constructor, not even void.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 0,
      "explanation": "This is a key gotcha or note taken directly from the source for Constructor Concept.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_constructor-concept_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "In ConstructorConcept.java, what does the method getAccountNumber() return?",
      "options": [
        "String",
        "int",
        "void",
        "boolean"
      ],
      "answer": 0,
      "explanation": "The method getAccountNumber() is declared with return type 'String' in ConstructorConcept.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_super-keyword-use-example_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SuperKeywordUseExample.java\"?\n\npublic ___ printMethod() {",
      "options": [
        "void",
        "static",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'void'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_super-keyword-use-example_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "question": "Complete the missing keyword in this snippet from \"SuperKeywordUseExample.java\".",
      "code": "    class SubClass ___ SuperKeywordUseExample{ // subclass also known as child class\r",
      "answer": [
        "extends"
      ],
      "explanation": "The missing keyword is 'extends', taken from the parsed source for SuperKeywordUseExample.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_super-keyword-use-example_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "question": "What does this code print?",
      "code": "System.out.println(\"Printed in SuperClass.\");",
      "answer": [
        "Printed in SuperClass."
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_super-keyword-use-example_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "question": "Explain the main ideas in Super Keyword Use Example.",
      "modelAnswer": "The keyword super is commonly used with method overriding when we call a method with the same name from the parent class.",
      "keyPoints": [
        "The keyword super is commonly used with method overriding when we call a method with the same name from the parent class."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_super-keyword-use-example_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "question": "Which statement best describes Super Keyword Use Example?",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "The keyword super is commonly used with method overriding when we call a method with the same name from the parent class.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Super Keyword Use Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_super-keyword-use-example_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "question": "Complete the blank: \"The ___ super is commonly used with method overriding when we call a method with the same name from the parent class.\"",
      "options": [
        "sometimes",
        "Objectoriented",
        "Modelling",
        "keyword"
      ],
      "answer": 3,
      "explanation": "The missing word is 'keyword', from the notes for Super Keyword Use Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_super-keyword-use-example_class-relation_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "question": "What does class SubClass extend?",
      "options": [
        "Comparable",
        "SuperKeywordUseExample",
        "Runnable",
        "Object"
      ],
      "answer": 1,
      "explanation": "SubClass extends SuperKeywordUseExample as declared in SuperKeywordUseExample.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_this-and-super_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This And Super",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ThisAndSuper.java\"?\n\n___ class ThisAndSuper {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_this-and-super_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This And Super",
      "question": "Explain the main ideas in This And Super.",
      "modelAnswer": "super keyword :- 1) The keyword super is used to access or call the parent class members (both variables and methods). this keyword :-",
      "keyPoints": [
        "super keyword :-",
        "1) The keyword super is used to access or call the parent class members (both variables and methods).",
        "this keyword :-"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_this-and-super_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This And Super",
      "question": "Which statement best describes This And Super?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "super keyword :-",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for This And Super.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_this-and-super_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This And Super",
      "question": "Which of the following are TRUE about This And Super? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "1) The keyword super is used to access or call the parent class members (both variables and methods).",
        "super keyword :-",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "this keyword :-"
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for This And Super.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_this-and-super_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This And Super",
      "question": "Complete the blank: \"___ keyword :-\"",
      "options": [
        "super",
        "Objectoriented",
        "Modelling",
        "sometimes"
      ],
      "answer": 0,
      "explanation": "The missing word is 'super', from the notes for This And Super.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_this-and-super_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This And Super",
      "question": "What is an important consideration when working with This And Super?",
      "options": [
        "NOTE: Both the keywords can be used anywhere in a class except for static elements such as a static method.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 0,
      "explanation": "This is a key gotcha or note taken directly from the source for This And Super.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_this-key-word-use-example_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ThisKeyWordUseExample.java\"?\n\n___ ThisKeyWordUseExample(String color){",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_this-key-word-use-example_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "Complete the missing keyword in this snippet from \"ThisKeyWordUseExample.java\".",
      "code": "        ___.color = color;\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for ThisKeyWordUseExample.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_this-key-word-use-example_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "Explain the main ideas in This Key Word Use Example.",
      "modelAnswer": "The keyword this is commonly used within constructors and setters and is optionally used within getters. In the getter, there are no parameters so there's no conflict. Therefore,the use of this keyword is optional there.",
      "keyPoints": [
        "The keyword this is commonly used within constructors and setters and is optionally used within getters.",
        "In the getter, there are no parameters so there's no conflict. Therefore,the use of this keyword is optional there."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_this-key-word-use-example_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "Which statement best describes This Key Word Use Example?",
      "options": [
        "The keyword this is commonly used within constructors and setters and is optionally used within getters.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for This Key Word Use Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_this-key-word-use-example_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "Complete the blank: \"The ___ this is commonly used within constructors and setters and is optionally used within getters.\"",
      "options": [
        "Objectoriented",
        "sometimes",
        "keyword",
        "Modelling"
      ],
      "answer": 2,
      "explanation": "The missing word is 'keyword', from the notes for This Key Word Use Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_this-key-word-use-example_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "In ThisKeyWordUseExample.java, what does the method getColor() return?",
      "options": [
        "boolean",
        "int",
        "void",
        "String"
      ],
      "answer": 3,
      "explanation": "The method getColor() is declared with return type 'String' in ThisKeyWordUseExample.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_good-constructor-super-call-example_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "question": "Which Java keyword correctly fills in the blank in this code from \"GoodConstructorSuperCallExample.java\"?\n\n___ GoodConstructorSuperCallExample(int x, int y){",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_good-constructor-super-call-example_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "question": "Complete the missing keyword in this snippet from \"GoodConstructorSuperCallExample.java\".",
      "code": "        ___.x = x;\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for GoodConstructorSuperCallExample.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_good-constructor-super-call-example_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "question": "Explain the main ideas in Good Constructor Super Call Example.",
      "modelAnswer": "The 1st constructor is calling the 2nd constructor. The 2nd constructor calls the parent constructor with parameters x and y. The parent constructor will initialize the x and y variables, while the 2nd Rectangle constructor will initialize the width and height variables. Here, as you can see in this code, Both the super() and this() calls are made, but in different constructors.",
      "keyPoints": [
        "The 1st constructor is calling the 2nd constructor.",
        "The 2nd constructor calls the parent constructor with parameters x and y.",
        "The parent constructor will initialize the x and y variables, while the 2nd Rectangle constructor will initialize the width and height variables. Here, as you can see in this code, Both the super() and this() calls are made, but in different constructors."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_good-constructor-super-call-example_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "question": "Which statement best describes Good Constructor Super Call Example?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "The 1st constructor is calling the 2nd constructor."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Good Constructor Super Call Example.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_good-constructor-super-call-example_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "question": "Which of the following are TRUE about Good Constructor Super Call Example? Select all that apply.",
      "options": [
        "The 1st constructor is calling the 2nd constructor.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "The parent constructor will initialize the x and y variables, while the 2nd Rectangle constructor will initialize the width and height variables. Here, as you can see in this code, Both the super() and this() calls are made, but in different constructors.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "The 2nd constructor calls the parent constructor with parameters x and y."
      ],
      "answer": [
        0,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Good Constructor Super Call Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_good-constructor-super-call-example_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "question": "Complete the blank: \"The 1st ___ is calling the 2nd constructor.\"",
      "options": [
        "Modelling",
        "Objectoriented",
        "constructor",
        "sometimes"
      ],
      "answer": 2,
      "explanation": "The missing word is 'constructor', from the notes for Good Constructor Super Call Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_good-constructor-super-call-example_class-relation_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "question": "What does class AnotherGoodConstructorSuperCallExample extend?",
      "options": [
        "Runnable",
        "GoodConstructorSuperCallExample",
        "Comparable",
        "Object"
      ],
      "answer": 1,
      "explanation": "AnotherGoodConstructorSuperCallExample extends GoodConstructorSuperCallExample as declared in GoodConstructorSuperCallExample.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_bad-constructor-this-call-example_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "question": "Which Java keyword correctly fills in the blank in this code from \"BadConstructorThisCallExample.java\"?\n\n___ BadConstructorThisCallExample() {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_bad-constructor-this-call-example_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "question": "Complete the missing keyword in this snippet from \"BadConstructorThisCallExample.java\".",
      "code": "        ___.x = 0;\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for BadConstructorThisCallExample.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_bad-constructor-this-call-example_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "question": "Explain the main ideas in Bad Constructor This Call Example.",
      "modelAnswer": "Here, there are three constructors. All three constructors initialize variables. But There's repeated code in each constructor, The variables are initialized in each constructor with some default values. This is a bad way to write constructors like this.",
      "keyPoints": [
        "Here, there are three constructors.",
        "All three constructors initialize variables. But There's repeated code in each constructor, The variables are initialized in each constructor with some default values.",
        "This is a bad way to write constructors like this."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_bad-constructor-this-call-example_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "question": "Which statement best describes Bad Constructor This Call Example?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Here, there are three constructors."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Bad Constructor This Call Example.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_bad-constructor-this-call-example_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "question": "Which of the following are TRUE about Bad Constructor This Call Example? Select all that apply.",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This is a bad way to write constructors like this.",
        "Here, there are three constructors.",
        "All three constructors initialize variables. But There's repeated code in each constructor, The variables are initialized in each constructor with some default values.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Bad Constructor This Call Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_bad-constructor-this-call-example_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "question": "Complete the blank: \"Here, there are ___ constructors.\"",
      "options": [
        "three",
        "Modelling",
        "Objectoriented",
        "sometimes"
      ],
      "answer": 0,
      "explanation": "The missing word is 'three', from the notes for Bad Constructor This Call Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_good-constructor-this-call-example_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "Which Java keyword correctly fills in the blank in this code from \"GoodConstructorThisCallExample.java\"?\n\n___ GoodConstructorThisCallExample() {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_good-constructor-this-call-example_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "Complete the missing keyword in this snippet from \"GoodConstructorThisCallExample.java\".",
      "code": "        ___(0,0);\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for GoodConstructorThisCallExample.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_good-constructor-this-call-example_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "Explain the main ideas in Good Constructor This Call Example.",
      "modelAnswer": "Here, the 1st constructor calls the 2nd constructor, the 2nd constructor calls the 3rd constructor, and then the 3rd constructor actually initializes the instance variables. In other words, The 3rd constructor does all the work. The variables will always be initialized in the 3rd constructor, and only there.",
      "keyPoints": [
        "Here, the 1st constructor calls the 2nd constructor, the 2nd constructor calls the 3rd constructor, and then the 3rd constructor actually initializes the instance variables.",
        "In other words, The 3rd constructor does all the work.",
        "The variables will always be initialized in the 3rd constructor, and only there."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_good-constructor-this-call-example_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "Which statement best describes Good Constructor This Call Example?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Here, the 1st constructor calls the 2nd constructor, the 2nd constructor calls the 3rd constructor, and then the 3rd constructor actually initializes the instance variables.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Good Constructor This Call Example.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_good-constructor-this-call-example_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "Which of the following are TRUE about Good Constructor This Call Example? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "In other words, The 3rd constructor does all the work.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Here, the 1st constructor calls the 2nd constructor, the 2nd constructor calls the 3rd constructor, and then the 3rd constructor actually initializes the instance variables.",
        "The variables will always be initialized in the 3rd constructor, and only there."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Good Constructor This Call Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_good-constructor-this-call-example_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "Complete the blank: \"Here, the 1st ___ calls the 2nd constructor, the 2nd constructor calls the 3rd constructor, and then the 3rd constructor actually initializes the instance variables.\"",
      "options": [
        "Modelling",
        "Objectoriented",
        "sometimes",
        "constructor"
      ],
      "answer": 3,
      "explanation": "The missing word is 'constructor', from the notes for Good Constructor This Call Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_good-constructor-this-call-example_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "What is an important consideration when working with Good Constructor This Call Example?",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "The variables will always be initialized in the 3rd constructor, and only there.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 2,
      "explanation": "This is a key gotcha or note taken directly from the source for Good Constructor This Call Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_customer_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Customer",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Customer.java\"?\n\n___ Customer() {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_customer_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Customer",
      "question": "Complete the missing keyword in this snippet from \"Customer.java\".",
      "code": "        ___(\"Navneet\", \"navneet.jha@gmail.com\");\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for Customer.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_customer_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Customer",
      "question": "Explain the main ideas in Customer.",
      "modelAnswer": "Create a new class, called Customer, with three fields: name. credit limit. and email address. Create the getter methods only for each field. You don't need to create the setters. Create three constructors for this class: First, create a constructor for all three fields which should assign the arguments directly to the instance fields. Second, create a no-args constructor that calls another constructor, passing some literal values for each argument. And lastly, create a constructor with just the name and email parameters, which also calls another constructor.",
      "keyPoints": [
        "Create a new class, called Customer, with three fields: name. credit limit. and email address.",
        "Create the getter methods only for each field. You don't need to create the setters.",
        "Create three constructors for this class: First, create a constructor for all three fields which should assign the arguments directly to the instance fields. Second, create a no-args constructor that calls another constructor, passing some literal values for each argument. And lastly, create a constructor with just the name and email parameters, which also calls another constructor."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_customer_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Customer",
      "question": "Which statement best describes Customer?",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Create a new class, called Customer, with three fields: name. credit limit. and email address.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Customer.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_customer_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Customer",
      "question": "Which of the following are TRUE about Customer? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Create a new class, called Customer, with three fields: name. credit limit. and email address.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Create the getter methods only for each field. You don't need to create the setters.",
        "Create three constructors for this class: First, create a constructor for all three fields which should assign the arguments directly to the instance fields. Second, create a no-args constructor that calls another constructor, passing some literal values for each argument. And lastly, create a constructor with just the name and email parameters, which also calls another constructor."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Customer.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_customer_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Customer",
      "question": "Complete the blank: \"___ a new class, called Customer, with three fields: name. credit limit. and email address.\"",
      "options": [
        "sometimes",
        "Create",
        "Objectoriented",
        "Modelling"
      ],
      "answer": 1,
      "explanation": "The missing word is 'Create', from the notes for Customer.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_customer_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Customer",
      "question": "In Customer.java, what does the method getName() return?",
      "options": [
        "void",
        "String",
        "boolean",
        "int"
      ],
      "answer": 1,
      "explanation": "The method getName() is declared with return type 'String' in Customer.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_house_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "House",
      "question": "Which Java keyword correctly fills in the blank in this code from \"House.java\"?\n\n___ String getColor() {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_house_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "House",
      "question": "Complete the missing keyword in this snippet from \"House.java\".",
      "code": "        ___ color;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for House.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_house_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "House",
      "question": "Explain the main ideas in House.",
      "modelAnswer": "This topic belongs to Chapter 14: OOP Concepts → Reference Object Instance. Review the class House and understand its key responsibilities. This example defines 2 methods; trace method behavior step by step.",
      "keyPoints": [
        "This topic belongs to Chapter 14: OOP Concepts → Reference Object Instance.",
        "Review the class House and understand its key responsibilities.",
        "This example defines 2 methods; trace method behavior step by step."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_house_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "House",
      "question": "Which statement best describes House?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This topic belongs to Chapter 14: OOP Concepts → Reference Object Instance."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for House.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_house_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "House",
      "question": "Which of the following are TRUE about House? Select all that apply.",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This topic belongs to Chapter 14: OOP Concepts → Reference Object Instance.",
        "This example defines 2 methods; trace method behavior step by step.",
        "Review the class House and understand its key responsibilities.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for House.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_house_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "House",
      "question": "Complete the blank: \"This ___ belongs to Chapter 14: OOP Concepts → Reference Object Instance.\"",
      "options": [
        "Modelling",
        "sometimes",
        "Objectoriented",
        "topic"
      ],
      "answer": 3,
      "explanation": "The missing word is 'topic', from the notes for House.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_house_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "House",
      "question": "In House.java, what does the method getColor() return?",
      "options": [
        "int",
        "void",
        "String",
        "boolean"
      ],
      "answer": 2,
      "explanation": "The method getColor() is declared with return type 'String' in House.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Main.java\"?\n\nHouse blueHouse = ___ House(\"blue\");",
      "options": [
        "new",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'new'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_main_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "        House greenHouse = ___ House(\"green\");\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for Main.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_main_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Explain the main ideas in Main.",
      "modelAnswer": "This topic covers Main. Refer to the source file for implementation details.",
      "keyPoints": [
        "This topic covers Main. Refer to the source file for implementation details."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_reference-objects-instance-class_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ReferenceObjectsInstanceClass.java\"?\n\n___ House(\"red\"); // house object gets created in the memory",
      "options": [
        "new",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'new'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_reference-objects-instance-class_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "question": "Complete the missing keyword in this snippet from \"ReferenceObjectsInstanceClass.java\".",
      "code": "        House myHouse = ___ House(\"beige\"); // house object gets created in the memory and it's location(reference) is assigned to myHouse;\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for ReferenceObjectsInstanceClass.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_reference-objects-instance-class_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "question": "Explain the main ideas in Reference Objects Instance Class.",
      "modelAnswer": "A Class is like a blueprint Using blueprint, we can create as many objects that we want This object can also be known as an instance.",
      "keyPoints": [
        "A Class is like a blueprint",
        "Using blueprint, we can create as many objects that we want",
        "This object can also be known as an instance."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_reference-objects-instance-class_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "question": "Which statement best describes Reference Objects Instance Class?",
      "options": [
        "A Class is like a blueprint",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Reference Objects Instance Class.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_reference-objects-instance-class_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "question": "Which of the following are TRUE about Reference Objects Instance Class? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Using blueprint, we can create as many objects that we want",
        "A Class is like a blueprint",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This object can also be known as an instance."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Reference Objects Instance Class.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_reference-objects-instance-class_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "question": "Complete the blank: \"A ___ is like a blueprint\"",
      "options": [
        "sometimes",
        "Objectoriented",
        "Class",
        "Modelling"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Class', from the notes for Reference Objects Instance Class.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_static-and-instance-methods_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Methods",
      "question": "Which Java keyword correctly fills in the blank in this code from \"StaticAndInstanceMethods.java\"?\n\nStaticAndInstanceMethods staticAndInstanceMethods = ___ StaticAndInstanceMethods();",
      "options": [
        "new",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'new'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_static-and-instance-methods_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Methods",
      "question": "Complete the missing keyword in this snippet from \"StaticAndInstanceMethods.java\".",
      "code": "    public ___ void printHello(){\r",
      "answer": [
        "static"
      ],
      "explanation": "The missing keyword is 'static', taken from the parsed source for StaticAndInstanceMethods.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_static-and-instance-methods_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Methods",
      "question": "What does this code print?",
      "code": "System.out.println(\"Hello\");",
      "answer": [
        "Hello"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_static-and-instance-methods_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Methods",
      "question": "Explain the main ideas in Static And Instance Methods.",
      "modelAnswer": "Static Methods 1) Static methods are declared using a static modifier and they belong to Class 2) Static methods can't access instance methods and instance variables directly.",
      "keyPoints": [
        "Static Methods",
        "1) Static methods are declared using a static modifier and they belong to Class",
        "2) Static methods can't access instance methods and instance variables directly."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_static-and-instance-methods_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Methods",
      "question": "Which statement best describes Static And Instance Methods?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Static Methods"
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Static And Instance Methods.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_static-and-instance-methods_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Methods",
      "question": "Which of the following are TRUE about Static And Instance Methods? Select all that apply.",
      "options": [
        "2) Static methods can't access instance methods and instance variables directly.",
        "1) Static methods are declared using a static modifier and they belong to Class",
        "Static Methods",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for Static And Instance Methods.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_static-and-instance-methods_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Methods",
      "question": "Complete the blank: \"1) ___ methods are declared using a static modifier and they belong to Class\"",
      "options": [
        "Objectoriented",
        "sometimes",
        "Static",
        "Modelling"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Static', from the notes for Static And Instance Methods.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_static-and-instance-methods_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Methods",
      "question": "What is an important consideration when working with Static And Instance Methods?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "5)  Whenever a method that doesn't use instance variables is declared, that method should probably be declared as a static method."
      ],
      "answer": 3,
      "explanation": "This is a key gotcha or note taken directly from the source for Static And Instance Methods.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_plain-old-java-object_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Plain Old Java Object",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PlainOldJavaObject.java\"?\n\n___ class PlainOldJavaObject {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_plain-old-java-object_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Plain Old Java Object",
      "question": "Explain the main ideas in Plain Old Java Object.",
      "modelAnswer": "POJO CONCEPTS i)   A plain old Java object acronym POJO is a class that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data ii)  It's used to house data and pass data between functional classes. iii) It usually has no other, or very few methods, other than getters and setters for the instance fields. iv)  Many database frameworks use POJO's to read data from, or to write data to databases,files or streams.",
      "keyPoints": [
        "POJO CONCEPTS i)   A plain old Java object acronym POJO is a class that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data ii)  It's used to house data and pass data between functional classes.",
        "iii) It usually has no other, or very few methods, other than getters and setters for the instance fields.",
        "iv)  Many database frameworks use POJO's to read data from, or to write data to databases,files or streams."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_plain-old-java-object_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Plain Old Java Object",
      "question": "Which statement best describes Plain Old Java Object?",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "POJO CONCEPTS i)   A plain old Java object acronym POJO is a class that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data ii)  It's used to house data and pass data between functional classes.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Plain Old Java Object.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_plain-old-java-object_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Plain Old Java Object",
      "question": "Which of the following are TRUE about Plain Old Java Object? Select all that apply.",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "POJO CONCEPTS i)   A plain old Java object acronym POJO is a class that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data ii)  It's used to house data and pass data between functional classes.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "iv)  Many database frameworks use POJO's to read data from, or to write data to databases,files or streams.",
        "iii) It usually has no other, or very few methods, other than getters and setters for the instance fields."
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Plain Old Java Object.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_plain-old-java-object_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Plain Old Java Object",
      "question": "Complete the blank: \"POJO ___ i)   A plain old Java object acronym POJO is a class that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data ii)  It's used to house data and pass data between functional classes.\"",
      "options": [
        "Objectoriented",
        "Modelling",
        "CONCEPTS",
        "sometimes"
      ],
      "answer": 2,
      "explanation": "The missing word is 'CONCEPTS', from the notes for Plain Old Java Object.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_plain-old-java-object_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Plain Old Java Object",
      "question": "What is an important consideration when working with Plain Old Java Object?",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Annotations (@Override, @SuppressWarnings, etc.) are metadata — they provide information to the compiler or tools. They do not change runtime behaviour."
      ],
      "answer": 3,
      "explanation": "This is a key gotcha or note taken directly from the source for Plain Old Java Object.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Main.java\"?\n\npublic ___ void createStudentObjectsUsingPojo() {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_main_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "        Student s1 = ___ Student(\"1\", \"Navneet\", \"19/03/1994\", \"Java MasterClass\");\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for Main.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_main_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "What does this code print?",
      "code": "System.out.println(\"*****************************************\");",
      "answer": [
        "*****************************************"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_main_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Explain the main ideas in Main.",
      "modelAnswer": "Output :- Output :- StudentRecord[id=1, name=Navneet, dateOfBirth=19/03/1994, classList=Java MasterClass]",
      "keyPoints": [
        "Output :-",
        "Output :-",
        "StudentRecord[id=1, name=Navneet, dateOfBirth=19/03/1994, classList=Java MasterClass]"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_student_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Student.java\"?\n\n___ Student(String id, String name, String dateOfBirth, String classList) {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_student_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student",
      "question": "Complete the missing keyword in this snippet from \"Student.java\".",
      "code": "        ___.id = id;\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for Student.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_student_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student",
      "question": "Explain the main ideas in Student.",
      "modelAnswer": "The toString() method is a special method in Java. The method called toString() will print out all the attributes(instance variables) of the instances(objects) in the class in a formatted way. The toString() method can be implemented in any class, and doing this helps to print out the current state of the object.",
      "keyPoints": [
        "The toString() method is a special method in Java.",
        "The method called toString() will print out all the attributes(instance variables) of the instances(objects) in the class in a formatted way.",
        "The toString() method can be implemented in any class, and doing this helps to print out the current state of the object."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_student_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student",
      "question": "Which statement best describes Student?",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "The toString() method is a special method in Java.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Student.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_student_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student",
      "question": "Which of the following are TRUE about Student? Select all that apply.",
      "options": [
        "The method called toString() will print out all the attributes(instance variables) of the instances(objects) in the class in a formatted way.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "The toString() method is a special method in Java.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "The toString() method can be implemented in any class, and doing this helps to print out the current state of the object."
      ],
      "answer": [
        0,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Student.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_student_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student",
      "question": "Complete the blank: \"The ___() method is a special method in Java.\"",
      "options": [
        "sometimes",
        "Modelling",
        "toString",
        "Objectoriented"
      ],
      "answer": 2,
      "explanation": "The missing word is 'toString', from the notes for Student.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_student_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student",
      "question": "In Student.java, what does the method getId() return?",
      "options": [
        "int",
        "String",
        "void",
        "boolean"
      ],
      "answer": 1,
      "explanation": "The method getId() is declared with return type 'String' in Student.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_static-and-instance-variables_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Variables",
      "question": "Which Java keyword correctly fills in the blank in this code from \"StaticAndInstanceVariables.java\"?\n\n___ String name = \"Bravo\";",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_static-and-instance-variables_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Variables",
      "question": "Complete the missing keyword in this snippet from \"StaticAndInstanceVariables.java\".",
      "code": "    ___ StaticAndInstanceVariables(String instanceName, int age) {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for StaticAndInstanceVariables.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_static-and-instance-variables_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Variables",
      "question": "Explain the main ideas in Static And Instance Variables.",
      "modelAnswer": "Static Variables 1) A static variable is Declared by using the keyword static. 2) Static variables are also known as static member variables. They belong to the class, not the instance",
      "keyPoints": [
        "Static Variables",
        "1) A static variable is Declared by using the keyword static.",
        "2) Static variables are also known as static member variables. They belong to the class, not the instance"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_static-and-instance-variables_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Variables",
      "question": "Which statement best describes Static And Instance Variables?",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Static Variables",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Static And Instance Variables.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_static-and-instance-variables_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Variables",
      "question": "Which of the following are TRUE about Static And Instance Variables? Select all that apply.",
      "options": [
        "1) A static variable is Declared by using the keyword static.",
        "Static Variables",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "2) Static variables are also known as static member variables. They belong to the class, not the instance",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Static And Instance Variables.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_static-and-instance-variables_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Variables",
      "question": "Complete the blank: \"___ Variables\"",
      "options": [
        "Objectoriented",
        "sometimes",
        "Static",
        "Modelling"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Static', from the notes for Static And Instance Variables.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_student-record_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student Record",
      "question": "Which Java keyword correctly fills in the blank in this code from \"StudentRecord.java\"?\n\n___ record StudentRecord(String id, String name, String dateOfBirth, String classList) {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_student-record_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student Record",
      "question": "Explain the main ideas in Student Record.",
      "modelAnswer": "The Record Type 1) The record was introduced in JDK 14 and became officially part of Java in JDK 16. 2) It's purpose is to replace the boilerplate code of the POJO but to be more restrictive.",
      "keyPoints": [
        "The Record Type",
        "1) The record was introduced in JDK 14 and became officially part of Java in JDK 16.",
        "2) It's purpose is to replace the boilerplate code of the POJO but to be more restrictive."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_student-record_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student Record",
      "question": "Which statement best describes Student Record?",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "The Record Type",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Student Record.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_student-record_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student Record",
      "question": "Which of the following are TRUE about Student Record? Select all that apply.",
      "options": [
        "2) It's purpose is to replace the boilerplate code of the POJO but to be more restrictive.",
        "The Record Type",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "1) The record was introduced in JDK 14 and became officially part of Java in JDK 16."
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Student Record.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_student-record_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student Record",
      "question": "Complete the blank: \"The ___ Type\"",
      "options": [
        "Modelling",
        "sometimes",
        "Record",
        "Objectoriented"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Record', from the notes for Student Record.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_point-class-distance-calculation_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PointClassDistanceCalculation.java\"?\n\n___ PointClassDistanceCalculation(){",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_point-class-distance-calculation_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "Complete the missing keyword in this snippet from \"PointClassDistanceCalculation.java\".",
      "code": "    ___ PointClassDistanceCalculation(int x, int y){\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for PointClassDistanceCalculation.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_point-class-distance-calculation_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "Explain the main ideas in Point Class Distance Calculation.",
      "modelAnswer": "Point Class and Distance Calculation You have to represent a point in 2D space. Write a class with the name Point. The class needs two fields (instance variables) with name x and y of type int. The class needs to have two constructors. The first constructor does not have any parameters (no-arg constructor). The second constructor has parameters x and y of type int and it needs to initialize the fields.",
      "keyPoints": [
        "Point Class and Distance Calculation",
        "You have to represent a point in 2D space. Write a class with the name Point. The class needs two fields (instance variables) with name x and y of type int.",
        "The class needs to have two constructors. The first constructor does not have any parameters (no-arg constructor). The second constructor has parameters x and y of type int and it needs to initialize the fields."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_point-class-distance-calculation_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "Which statement best describes Point Class Distance Calculation?",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Point Class and Distance Calculation",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Point Class Distance Calculation.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_point-class-distance-calculation_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "Which of the following are TRUE about Point Class Distance Calculation? Select all that apply.",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "You have to represent a point in 2D space. Write a class with the name Point. The class needs two fields (instance variables) with name x and y of type int.",
        "Point Class and Distance Calculation",
        "The class needs to have two constructors. The first constructor does not have any parameters (no-arg constructor). The second constructor has parameters x and y of type int and it needs to initialize the fields.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Point Class Distance Calculation.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_point-class-distance-calculation_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "Complete the blank: \"___ Class and Distance Calculation\"",
      "options": [
        "Point",
        "Modelling",
        "Objectoriented",
        "sometimes"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Point', from the notes for Point Class Distance Calculation.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_point-class-distance-calculation_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "In PointClassDistanceCalculation.java, what does the method getX() return?",
      "options": [
        "int",
        "void",
        "boolean",
        "String"
      ],
      "answer": 0,
      "explanation": "The method getX() is declared with return type 'int' in PointClassDistanceCalculation.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_wall-area-computation_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Wall Area Computation",
      "question": "Which Java keyword correctly fills in the blank in this code from \"WallAreaComputation.java\"?\n\n___ WallAreaComputation(){",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_wall-area-computation_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Wall Area Computation",
      "question": "Complete the missing keyword in this snippet from \"WallAreaComputation.java\".",
      "code": "    ___ WallAreaComputation(double width, double height){\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for WallAreaComputation.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_wall-area-computation_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Wall Area Computation",
      "question": "Explain the main ideas in Wall Area Computation.",
      "modelAnswer": "Wall Area Computation Write a class with the name Wall. The class needs two fields (instance variables) with name width and height of type double. The class needs to have two constructors:",
      "keyPoints": [
        "Wall Area Computation",
        "Write a class with the name Wall. The class needs two fields (instance variables) with name width and height of type double.",
        "The class needs to have two constructors:"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_wall-area-computation_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Wall Area Computation",
      "question": "Which statement best describes Wall Area Computation?",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Wall Area Computation"
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Wall Area Computation.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_wall-area-computation_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Wall Area Computation",
      "question": "Which of the following are TRUE about Wall Area Computation? Select all that apply.",
      "options": [
        "The class needs to have two constructors:",
        "Wall Area Computation",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Write a class with the name Wall. The class needs two fields (instance variables) with name width and height of type double."
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Wall Area Computation.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_wall-area-computation_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Wall Area Computation",
      "question": "Complete the blank: \"Wall Area ___\"",
      "options": [
        "Computation",
        "Objectoriented",
        "Modelling",
        "sometimes"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Computation', from the notes for Wall Area Computation.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_wall-area-computation_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Wall Area Computation",
      "question": "In WallAreaComputation.java, what does the method getWidth() return?",
      "options": [
        "String",
        "void",
        "int",
        "double"
      ],
      "answer": 3,
      "explanation": "The method getWidth() is declared with return type 'double' in WallAreaComputation.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_animal_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Animal",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Animal.java\"?\n\n___ Animal(){",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_animal_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Animal",
      "question": "Complete the missing keyword in this snippet from \"Animal.java\".",
      "code": "    ___ Animal(String type, String size, double weight) {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Animal.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_animal_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Animal",
      "question": "Explain the main ideas in Animal.",
      "modelAnswer": "This is a super class, aka top parent class. This class will contain all the attributes that all types of animal has. Also, the super class will have all the behaviour that animals have in common. Method Overriding",
      "keyPoints": [
        "This is a super class, aka top parent class. This class will contain all the attributes that all types of animal has.",
        "Also, the super class will have all the behaviour that animals have in common.",
        "Method Overriding"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_animal_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Animal",
      "question": "Which statement best describes Animal?",
      "options": [
        "This is a super class, aka top parent class. This class will contain all the attributes that all types of animal has.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Animal.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_animal_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Animal",
      "question": "Which of the following are TRUE about Animal? Select all that apply.",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Also, the super class will have all the behaviour that animals have in common.",
        "Method Overriding",
        "This is a super class, aka top parent class. This class will contain all the attributes that all types of animal has.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": [
        1,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Animal.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_animal_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Animal",
      "question": "Complete the blank: \"This is a ___ class, aka top parent class. This class will contain all the attributes that all types of animal has.\"",
      "options": [
        "super",
        "sometimes",
        "Modelling",
        "Objectoriented"
      ],
      "answer": 0,
      "explanation": "The missing word is 'super', from the notes for Animal.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_animal_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Animal",
      "question": "In Animal.java, what does the method toString() return?",
      "options": [
        "void",
        "int",
        "String",
        "boolean"
      ],
      "answer": 2,
      "explanation": "The method toString() is declared with return type 'String' in Animal.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_dog_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Dog.java\"?\n\n___ Dog(){",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_dog_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Complete the missing keyword in this snippet from \"Dog.java\".",
      "code": "___ class Dog extends Animal { // Using extends specifies the superclass ( or the parent class ) of the class that has been declatred\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Dog.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_dog_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "What does this code print?",
      "code": "System.out.println(\"Woof! \");",
      "answer": [
        "Woof! "
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_dog_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Explain the main ideas in Dog.",
      "modelAnswer": "Dog inherits from Animal Dog \"IS A\" a type of Animal Dog is a subclass or child class of Animal",
      "keyPoints": [
        "Dog inherits from Animal",
        "Dog \"IS A\" a type of Animal",
        "Dog is a subclass or child class of Animal"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_dog_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Which statement best describes Dog?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Dog inherits from Animal",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Dog.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_dog_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Which of the following are TRUE about Dog? Select all that apply.",
      "options": [
        "Dog \"IS A\" a type of Animal",
        "Dog is a subclass or child class of Animal",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Dog inherits from Animal",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Dog.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_dog_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Complete the blank: \"Dog ___ from Animal\"",
      "options": [
        "Objectoriented",
        "inherits",
        "Modelling",
        "sometimes"
      ],
      "answer": 1,
      "explanation": "The missing word is 'inherits', from the notes for Dog.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_dog_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "In Dog.java, what does the method toString() return?",
      "options": [
        "void",
        "String",
        "boolean",
        "int"
      ],
      "answer": 1,
      "explanation": "The method toString() is declared with return type 'String' in Dog.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_dog_class-relation_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "What does class Dog extend?",
      "options": [
        "Object",
        "Runnable",
        "Animal",
        "Comparable"
      ],
      "answer": 2,
      "explanation": "Dog extends Animal as declared in Dog.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_fish_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Fish",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Fish.java\"?\n\n___ Fish(String type,double weight,int gills, int fins){",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_fish_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Fish",
      "question": "Complete the missing keyword in this snippet from \"Fish.java\".",
      "code": "___ class Fish extends Animal{\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Fish.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_fish_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Fish",
      "question": "What does this code print?",
      "code": "System.out.println(\"muscle moving \");",
      "answer": [
        "muscle moving "
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_fish_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Fish",
      "question": "Explain the main ideas in Fish.",
      "modelAnswer": "This topic covers Fish. Refer to the source file for implementation details.",
      "keyPoints": [
        "This topic covers Fish. Refer to the source file for implementation details."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_fish_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Fish",
      "question": "In Fish.java, what does the method toString() return?",
      "options": [
        "String",
        "void",
        "boolean",
        "int"
      ],
      "answer": 0,
      "explanation": "The method toString() is declared with return type 'String' in Fish.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_fish_class-relation_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Fish",
      "question": "What does class Fish extend?",
      "options": [
        "Runnable",
        "Comparable",
        "Object",
        "Animal"
      ],
      "answer": 3,
      "explanation": "Fish extends Animal as declared in Fish.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_inheritance_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Inheritance",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Inheritance.java\"?\n\nAnimal animal = ___ Animal(\"Generic Animal\", \"Huge\", 400);",
      "options": [
        "new",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'new'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_inheritance_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Inheritance",
      "question": "Complete the missing keyword in this snippet from \"Inheritance.java\".",
      "code": "       Dog dog = ___ Dog();\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for Inheritance.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_inheritance_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Inheritance",
      "question": "What does this code print?",
      "code": "System.out.println(\"*************************************************************************************\");",
      "answer": [
        "*************************************************************************************"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_inheritance_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Inheritance",
      "question": "Explain the main ideas in Inheritance.",
      "modelAnswer": "Inheritance is basically a form of code reuse. It's a way to organize classes into a parent-child hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent. Animal (Base Class) Vertebrates (Sub Class of Animal)",
      "keyPoints": [
        "Inheritance is basically a form of code reuse. It's a way to organize classes into a parent-child hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent.",
        "Animal (Base Class)",
        "Vertebrates (Sub Class of Animal)"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_inheritance_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Inheritance",
      "question": "Which statement best describes Inheritance?",
      "options": [
        "Inheritance is basically a form of code reuse. It's a way to organize classes into a parent-child hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Inheritance.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_inheritance_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Inheritance",
      "question": "Which of the following are TRUE about Inheritance? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Inheritance is basically a form of code reuse. It's a way to organize classes into a parent-child hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent.",
        "Vertebrates (Sub Class of Animal)",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Animal (Base Class)"
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Inheritance.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_inheritance_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Inheritance",
      "question": "Complete the blank: \"___ is basically a form of code reuse. It's a way to organize classes into a parent-child hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent.\"",
      "options": [
        "Modelling",
        "sometimes",
        "Objectoriented",
        "Inheritance"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Inheritance', from the notes for Inheritance.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_inheritance_class-relation_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Inheritance",
      "question": "What does class Dog extend?",
      "options": [
        "Comparable",
        "Runnable",
        "Animal",
        "Object"
      ],
      "answer": 2,
      "explanation": "Dog extends Animal as declared in Inheritance.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Main.java\"?\n\nStudent s = ___ Student(\"Navneet\", 21);",
      "options": [
        "new",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'new'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_main_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "___ class Main extends Object{\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Main.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_main_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Explain the main ideas in Main.",
      "modelAnswer": "Every class created in Java extends a special Java class. That class is named Object, and it's in the java.lang package. Class Object is the root of the class hierarchy.",
      "keyPoints": [
        "Every class created in Java extends a special Java class.",
        "That class is named Object, and it's in the java.lang package.",
        "Class Object is the root of the class hierarchy."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which statement best describes Main?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Every class created in Java extends a special Java class.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Main.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_main_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which of the following are TRUE about Main? Select all that apply.",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "That class is named Object, and it's in the java.lang package.",
        "Every class created in Java extends a special Java class.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Class Object is the root of the class hierarchy."
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Main.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the blank: \"Every ___ created in Java extends a special Java class.\"",
      "options": [
        "Modelling",
        "sometimes",
        "class",
        "Objectoriented"
      ],
      "answer": 2,
      "explanation": "The missing word is 'class', from the notes for Main.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "In Main.java, what does the method toString() return?",
      "options": [
        "void",
        "int",
        "String",
        "boolean"
      ],
      "answer": 2,
      "explanation": "The method toString() is declared with return type 'String' in Main.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_class-relation_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "What does class Main extend?",
      "options": [
        "Comparable",
        "Object",
        "Serializable",
        "Runnable"
      ],
      "answer": 1,
      "explanation": "Main extends Object as declared in Main.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_employee_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Employee",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Employee.java\"?\n\nprivate ___ int employeeNumber = 1;",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_employee_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Employee",
      "question": "Complete the missing keyword in this snippet from \"Employee.java\".",
      "code": "___ class Employee extends Worker {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Employee.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_employee_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Employee",
      "question": "Explain the main ideas in Employee.",
      "modelAnswer": "Employee Class Extends the Worker Class",
      "keyPoints": [
        "Employee Class Extends the Worker Class"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_employee_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Employee",
      "question": "Which statement best describes Employee?",
      "options": [
        "Employee Class Extends the Worker Class",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Employee.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_employee_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Employee",
      "question": "Complete the blank: \"___ Class Extends the Worker Class\"",
      "options": [
        "Employee",
        "Objectoriented",
        "Modelling",
        "sometimes"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Employee', from the notes for Employee.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_employee_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Employee",
      "question": "In Employee.java, what does the method toString() return?",
      "options": [
        "void",
        "boolean",
        "String",
        "int"
      ],
      "answer": 2,
      "explanation": "The method toString() is declared with return type 'String' in Employee.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_employee_class-relation_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Employee",
      "question": "What does class Employee extend?",
      "options": [
        "Worker",
        "Runnable",
        "Comparable",
        "Object"
      ],
      "answer": 0,
      "explanation": "Employee extends Worker as declared in Employee.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_hourly-employee_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Hourly Employee",
      "question": "Which Java keyword correctly fills in the blank in this code from \"HourlyEmployee.java\"?\n\n___ HourlyEmployee(String name, String birthDate, String hireDate, double hourlyRate) {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_hourly-employee_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Hourly Employee",
      "question": "Complete the missing keyword in this snippet from \"HourlyEmployee.java\".",
      "code": "___ class HourlyEmployee extends Employee {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for HourlyEmployee.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_hourly-employee_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Hourly Employee",
      "question": "Explain the main ideas in Hourly Employee.",
      "modelAnswer": "The HourlyEmployee Class extends the Employee Class",
      "keyPoints": [
        "The HourlyEmployee Class extends the Employee Class"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_hourly-employee_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Hourly Employee",
      "question": "Which statement best describes Hourly Employee?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "The HourlyEmployee Class extends the Employee Class",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Hourly Employee.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_hourly-employee_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Hourly Employee",
      "question": "Complete the blank: \"The ___ Class extends the Employee Class\"",
      "options": [
        "Objectoriented",
        "Modelling",
        "sometimes",
        "HourlyEmployee"
      ],
      "answer": 3,
      "explanation": "The missing word is 'HourlyEmployee', from the notes for Hourly Employee.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_hourly-employee_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Hourly Employee",
      "question": "In HourlyEmployee.java, what does the method collectPay() return?",
      "options": [
        "int",
        "double",
        "void",
        "String"
      ],
      "answer": 1,
      "explanation": "The method collectPay() is declared with return type 'double' in HourlyEmployee.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_hourly-employee_class-relation_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Hourly Employee",
      "question": "What does class HourlyEmployee extend?",
      "options": [
        "Runnable",
        "Employee",
        "Comparable",
        "Object"
      ],
      "answer": 1,
      "explanation": "HourlyEmployee extends Employee as declared in HourlyEmployee.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Main.java\"?\n\nEmployee tim = ___ Employee(\"Tim\",\"11/11/1985\",\"01/01/2010\");",
      "options": [
        "new",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'new'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_main_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "        SalariedEmployee joe = ___ SalariedEmployee(\"Joe\",\"11/11/1990\",\"03/03/2020\",35000);\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for Main.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_main_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Explain the main ideas in Main.",
      "modelAnswer": "This is the Inheritance Coding Challenge demo: a Worker → Employee → SalariedEmployee/HourlyEmployee hierarchy. Worker is the base class. Employee extends Worker, adding employeeId and hireDate. SalariedEmployee and HourlyEmployee extend Employee. Each subclass overrides the collectPay() method to compute pay differently: salaried divides annual salary by 26, hourly multiplies rate by 40 hours.",
      "keyPoints": [
        "This is the Inheritance Coding Challenge demo: a Worker → Employee → SalariedEmployee/HourlyEmployee hierarchy.",
        "Worker is the base class. Employee extends Worker, adding employeeId and hireDate. SalariedEmployee and HourlyEmployee extend Employee.",
        "Each subclass overrides the collectPay() method to compute pay differently: salaried divides annual salary by 26, hourly multiplies rate by 40 hours."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which statement best describes Main?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "This is the Inheritance Coding Challenge demo: a Worker → Employee → SalariedEmployee/HourlyEmployee hierarchy.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Main.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_main_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which of the following are TRUE about Main? Select all that apply.",
      "options": [
        "This is the Inheritance Coding Challenge demo: a Worker → Employee → SalariedEmployee/HourlyEmployee hierarchy.",
        "Worker is the base class. Employee extends Worker, adding employeeId and hireDate. SalariedEmployee and HourlyEmployee extend Employee.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Each subclass overrides the collectPay() method to compute pay differently: salaried divides annual salary by 26, hourly multiplies rate by 40 hours."
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Main.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the blank: \"This is the ___ Coding Challenge demo: a Worker → Employee → SalariedEmployee/HourlyEmployee hierarchy.\"",
      "options": [
        "Inheritance",
        "Objectoriented",
        "sometimes",
        "Modelling"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Inheritance', from the notes for Main.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_salaried-employee_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Salaried Employee",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SalariedEmployee.java\"?\n\n___ SalariedEmployee(String name, String birthDate, String hireDate, double annualSalary) {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_salaried-employee_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Salaried Employee",
      "question": "Complete the missing keyword in this snippet from \"SalariedEmployee.java\".",
      "code": "___ class SalariedEmployee extends Employee {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for SalariedEmployee.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_salaried-employee_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Salaried Employee",
      "question": "Explain the main ideas in Salaried Employee.",
      "modelAnswer": "The salaried employee class, extends the Employee Class",
      "keyPoints": [
        "The salaried employee class, extends the Employee Class"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_salaried-employee_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Salaried Employee",
      "question": "Which statement best describes Salaried Employee?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "The salaried employee class, extends the Employee Class",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Salaried Employee.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_salaried-employee_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Salaried Employee",
      "question": "Complete the blank: \"The ___ employee class, extends the Employee Class\"",
      "options": [
        "Objectoriented",
        "salaried",
        "Modelling",
        "sometimes"
      ],
      "answer": 1,
      "explanation": "The missing word is 'salaried', from the notes for Salaried Employee.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_salaried-employee_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Salaried Employee",
      "question": "In SalariedEmployee.java, what does the method collectPay() return?",
      "options": [
        "String",
        "double",
        "void",
        "int"
      ],
      "answer": 1,
      "explanation": "The method collectPay() is declared with return type 'double' in SalariedEmployee.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_salaried-employee_class-relation_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Salaried Employee",
      "question": "What does class SalariedEmployee extend?",
      "options": [
        "Object",
        "Comparable",
        "Runnable",
        "Employee"
      ],
      "answer": 3,
      "explanation": "SalariedEmployee extends Employee as declared in SalariedEmployee.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_worker_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Worker",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Worker.java\"?\n\n___ Worker(String name, String birthDate) {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_worker_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Worker",
      "question": "Complete the missing keyword in this snippet from \"Worker.java\".",
      "code": "        ___.name = name;\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for Worker.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_worker_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Worker",
      "question": "Explain the main ideas in Worker.",
      "modelAnswer": "Inheritance Challenge Problem Create Worker Class -> This should be on top of the Hierarchy Create attributes :-",
      "keyPoints": [
        "Inheritance Challenge Problem",
        "Create Worker Class -> This should be on top of the Hierarchy",
        "Create attributes :-"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_worker_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Worker",
      "question": "Which statement best describes Worker?",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Inheritance Challenge Problem",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Worker.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_worker_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Worker",
      "question": "Which of the following are TRUE about Worker? Select all that apply.",
      "options": [
        "Create attributes :-",
        "Inheritance Challenge Problem",
        "Create Worker Class -> This should be on top of the Hierarchy",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for Worker.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_worker_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Worker",
      "question": "Complete the blank: \"___ Challenge Problem\"",
      "options": [
        "Objectoriented",
        "Modelling",
        "sometimes",
        "Inheritance"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Inheritance', from the notes for Worker.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_worker_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Worker",
      "question": "In Worker.java, what does the method getAge() return?",
      "options": [
        "boolean",
        "int",
        "String",
        "void"
      ],
      "answer": 1,
      "explanation": "The method getAge() is declared with return type 'int' in Worker.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_dog_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Dog.java\"?\n\npublic ___ bark(){",
      "options": [
        "void",
        "static",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'void'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_dog_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Complete the missing keyword in this snippet from \"Dog.java\".",
      "code": "    public ___ bark(int number){\r",
      "answer": [
        "void"
      ],
      "explanation": "The missing keyword is 'void', taken from the parsed source for Dog.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_dog_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Explain the main ideas in Dog.",
      "modelAnswer": "Bark method has same name but different parameters",
      "keyPoints": [
        "Bark method has same name but different parameters"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_dog_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Which statement best describes Dog?",
      "options": [
        "Bark method has same name but different parameters",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Dog.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_dog_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Complete the blank: \"Bark ___ has same name but different parameters\"",
      "options": [
        "Objectoriented",
        "method",
        "Modelling",
        "sometimes"
      ],
      "answer": 1,
      "explanation": "The missing word is 'method', from the notes for Dog.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-overloading-in-java_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MethodOverloadingInJava.java\"?\n\nSystem.out.println(\"Second ___ Score is \" + score);",
      "options": [
        "new",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'new'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_method-overloading-in-java_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "Complete the missing keyword in this snippet from \"MethodOverloadingInJava.java\".",
      "code": "    public ___ int calculateScore(String playerName, int score){\r",
      "answer": [
        "static"
      ],
      "explanation": "The missing keyword is 'static', taken from the parsed source for MethodOverloadingInJava.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_method-overloading-in-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "What does this code print?",
      "code": "System.out.println(\"a method invoked\");",
      "answer": [
        "a method invoked"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_method-overloading-in-java_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "Explain the main ideas in Method Overloading In Java.",
      "modelAnswer": "To the code calling an overloaded method, it looks like a single method can be called with different sets of arguments. In actuality, each call that's made with a different set of arguments is calling a separate method. Java developers often refer to method overloading, as compile-time polymorphism. This means the compiler is determining the right method to call, based on the method name and argument list. Usually overloading happens within a single class.",
      "keyPoints": [
        "To the code calling an overloaded method, it looks like a single method can be called with different sets of arguments. In actuality, each call that's made with a different set of arguments is calling a separate method.",
        "Java developers often refer to method overloading, as compile-time polymorphism.",
        "This means the compiler is determining the right method to call, based on the method name and argument list. Usually overloading happens within a single class."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-overloading-in-java_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "Which statement best describes Method Overloading In Java?",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "To the code calling an overloaded method, it looks like a single method can be called with different sets of arguments. In actuality, each call that's made with a different set of arguments is calling a separate method.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Method Overloading In Java.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_method-overloading-in-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "Which of the following are TRUE about Method Overloading In Java? Select all that apply.",
      "options": [
        "Java developers often refer to method overloading, as compile-time polymorphism.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "To the code calling an overloaded method, it looks like a single method can be called with different sets of arguments. In actuality, each call that's made with a different set of arguments is calling a separate method.",
        "This means the compiler is determining the right method to call, based on the method name and argument list. Usually overloading happens within a single class."
      ],
      "answer": [
        0,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Method Overloading In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-overloading-in-java_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "Complete the blank: \"To the code ___ an overloaded method, it looks like a single method can be called with different sets of arguments. In actuality, each call that's made with a different set of arguments is calling a separate method.\"",
      "options": [
        "calling",
        "Objectoriented",
        "sometimes",
        "Modelling"
      ],
      "answer": 0,
      "explanation": "The missing word is 'calling', from the notes for Method Overloading In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-overloading-in-java_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "In MethodOverloadingInJava.java, what does the method calculateScore() return?",
      "options": [
        "int",
        "void",
        "boolean",
        "String"
      ],
      "answer": 0,
      "explanation": "The method calculateScore() is declared with return type 'int' in MethodOverloadingInJava.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_covariant-return-type_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Covariant Return Type",
      "question": "Which Java keyword correctly fills in the blank in this code from \"CovariantReturnType.java\"?\n\nprotected Object clone() ___ CloneNotSupportedException {",
      "options": [
        "throws",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'throws'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_covariant-return-type_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Covariant Return Type",
      "question": "Complete the missing keyword in this snippet from \"CovariantReturnType.java\".",
      "code": "      return ___.clone();\r",
      "answer": [
        "super"
      ],
      "explanation": "The missing keyword is 'super', taken from the parsed source for CovariantReturnType.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_covariant-return-type_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Covariant Return Type",
      "question": "Explain the main ideas in Covariant Return Type.",
      "modelAnswer": "The return type of an overriden method can be the same type as the parent method's declaration, but it can also be a subclass. The term, covariant return type, can include types such as interfaces and generic types All classes ultimately have Object as a baseclass, so every class can be said to be a covariant of Object",
      "keyPoints": [
        "The return type of an overriden method can be the same type as the parent method's declaration, but it can also be a subclass.",
        "The term, covariant return type, can include types such as interfaces and generic types",
        "All classes ultimately have Object as a baseclass, so every class can be said to be a covariant of Object"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_covariant-return-type_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Covariant Return Type",
      "question": "Which statement best describes Covariant Return Type?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "The return type of an overriden method can be the same type as the parent method's declaration, but it can also be a subclass.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Covariant Return Type.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_covariant-return-type_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Covariant Return Type",
      "question": "Which of the following are TRUE about Covariant Return Type? Select all that apply.",
      "options": [
        "The return type of an overriden method can be the same type as the parent method's declaration, but it can also be a subclass.",
        "All classes ultimately have Object as a baseclass, so every class can be said to be a covariant of Object",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "The term, covariant return type, can include types such as interfaces and generic types"
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Covariant Return Type.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_covariant-return-type_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Covariant Return Type",
      "question": "Complete the blank: \"The ___ type of an overriden method can be the same type as the parent method's declaration, but it can also be a subclass.\"",
      "options": [
        "return",
        "sometimes",
        "Modelling",
        "Objectoriented"
      ],
      "answer": 0,
      "explanation": "The missing word is 'return', from the notes for Covariant Return Type.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_covariant-return-type_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Covariant Return Type",
      "question": "In CovariantReturnType.java, what does the method clone() return?",
      "options": [
        "Object",
        "int",
        "String",
        "void"
      ],
      "answer": 0,
      "explanation": "The method clone() is declared with return type 'Object' in CovariantReturnType.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_dog_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Dog.java\"?\n\npublic ___ bark(){",
      "options": [
        "void",
        "static",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'void'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_dog_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Complete the missing keyword in this snippet from \"Dog.java\".",
      "code": "class GermanShepherd ___ Dog {\r",
      "answer": [
        "extends"
      ],
      "explanation": "The missing keyword is 'extends', taken from the parsed source for Dog.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_dog_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "What does this code print?",
      "code": "System.out.println(\"woof woof woof\");",
      "answer": [
        "woof woof woof"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_dog_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Explain the main ideas in Dog.",
      "modelAnswer": "Bark method has same name and same parameters",
      "keyPoints": [
        "Bark method has same name and same parameters"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_dog_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Which statement best describes Dog?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Bark method has same name and same parameters",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Dog.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_dog_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Complete the blank: \"Bark ___ has same name and same parameters\"",
      "options": [
        "Objectoriented",
        "sometimes",
        "Modelling",
        "method"
      ],
      "answer": 3,
      "explanation": "The missing word is 'method', from the notes for Dog.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_dog_class-relation_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "What does class GermanShepherd extend?",
      "options": [
        "Comparable",
        "Object",
        "Dog",
        "Runnable"
      ],
      "answer": 2,
      "explanation": "GermanShepherd extends Dog as declared in Dog.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-overriding-in-java_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MethodOverridingInJava.java\"?\n\n___ class  MethodOverridingInJava {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_method-overriding-in-java_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "question": "Explain the main ideas in Method Overriding In Java.",
      "modelAnswer": "Method overriding, means defining a method in a child class that already exists in the parent class, with the same signature (In other words, the same name, and same parameters). By extending the parent class, the child class gets all the methods defined in the parent class. Those methods are also known as derived methods. Method overriding is also known as Runtime Polymorphism or Dynamic Method Dispatch because the method that is going to be called is decided at runtime by the Java virtual machine.",
      "keyPoints": [
        "Method overriding, means defining a method in a child class that already exists in the parent class, with the same signature (In other words, the same name, and same parameters).",
        "By extending the parent class, the child class gets all the methods defined in the parent class. Those methods are also known as derived methods.",
        "Method overriding is also known as Runtime Polymorphism or Dynamic Method Dispatch because the method that is going to be called is decided at runtime by the Java virtual machine."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is method overriding in Java?",
      "modelAnswer": "Defining a method in a child class with the SAME name, SAME parameters, and compatible return type as a method in the parent class. The child's version replaces the parent's version when called on a child object — this is Runtime Polymorphism (Dynamic Method Dispatch). The JVM decides at RUNTIME which version to call based on the actual object type, not the reference type.",
      "keyPoints": [
        "Defining a method in a child class with the SAME name, SAME parameters, and compatible return type as a method in the parent class.",
        "The child's version replaces the parent's version when called on a child object — this is Runtime Polymorphism (Dynamic Method Dispatch).",
        "The JVM decides at RUNTIME which version to call based on the actual object type, not the reference type."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between method overloading and method overriding?",
      "modelAnswer": "Overloading: SAME class, SAME name, DIFFERENT parameters. Resolved at COMPILE TIME (static polymorphism). Overriding: CHILD class, SAME name, SAME parameters. Resolved at RUNTIME (dynamic polymorphism). Key interview distinction: overloading = compile-time, overriding = runtime. Overloading changes the method signature; overriding keeps it identical.",
      "keyPoints": [
        "Overloading: SAME class, SAME name, DIFFERENT parameters. Resolved at COMPILE TIME (static polymorphism).",
        "Overriding: CHILD class, SAME name, SAME parameters. Resolved at RUNTIME (dynamic polymorphism).",
        "Key interview distinction: overloading = compile-time, overriding = runtime. Overloading changes the method signature; overriding keeps it identical."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What are the rules for method overriding in Java?",
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
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview",
        "tricky",
        "ocjp"
      ],
      "question": "(OCJP TRAP) What is the output? class Animal { void speak(){ System.out.println(\"Animal\"); } } class Dog extends Animal { void speak(){ System.out.println(\"Dog\"); } } Animal a = new Dog(); a.speak();",
      "modelAnswer": "Output: Dog Even though the reference type is Animal, the ACTUAL object is Dog. Java uses dynamic dispatch — the JVM calls Dog's speak() at runtime. This is the core of runtime polymorphism. TRAP: beginners think Animal's speak() is called because the reference is Animal. Wrong — it's always the actual object's method.",
      "keyPoints": [
        "Output: Dog",
        "Even though the reference type is Animal, the ACTUAL object is Dog. Java uses dynamic dispatch — the JVM calls Dog's speak() at runtime. This is the core of runtime polymorphism.",
        "TRAP: beginners think Animal's speak() is called because the reference is Animal. Wrong — it's always the actual object's method."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview",
        "tricky",
        "ocjp"
      ],
      "question": "(OCJP TRAP) Can you override a static method in Java?",
      "modelAnswer": "NO. Static methods belong to the class, not the object. You can declare a static method with the same name in a subclass, but this is called METHOD HIDING, not overriding. With hiding: the method called depends on the REFERENCE type (compile-time). With overriding: it depends on the OBJECT type (runtime). This is the key difference. @Override annotation on a static method causes a COMPILE ERROR.",
      "keyPoints": [
        "NO. Static methods belong to the class, not the object. You can declare a static method with the same name in a subclass, but this is called METHOD HIDING, not overriding.",
        "With hiding: the method called depends on the REFERENCE type (compile-time). With overriding: it depends on the OBJECT type (runtime). This is the key difference.",
        "@Override annotation on a static method causes a COMPILE ERROR."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview",
        "tricky",
        "ocjp"
      ],
      "question": "(OCJP TRAP) What is the output? class Parent { String name = \"Parent\"; void show() { System.out.println(\"Parent show\"); } } class Child extends Parent { String name = \"Child\"; void show() { System.out.println(\"Child show\"); } } Parent p = new Child(); System.out.println(p.name); p.show();",
      "modelAnswer": "Output: Parent (then) Child show Fields are resolved at COMPILE TIME based on reference type → p.name uses Parent's name field. Methods are resolved at RUNTIME based on object type → p.show() calls Child's show(). CRITICAL TRAP: fields are NOT polymorphic. Only methods are. Always remember: fields → compile-time (reference), methods → runtime (object).",
      "keyPoints": [
        "Output: Parent (then) Child show",
        "Fields are resolved at COMPILE TIME based on reference type → p.name uses Parent's name field.",
        "Methods are resolved at RUNTIME based on object type → p.show() calls Child's show().",
        "CRITICAL TRAP: fields are NOT polymorphic. Only methods are. Always remember: fields → compile-time (reference), methods → runtime (object)."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is covariant return type in method overriding?",
      "modelAnswer": "Java 5+ allows the overriding method to return a subtype of the parent method's return type. Example: Parent returns Animal, Child can override to return Dog (Dog IS-A Animal). This is valid. Why useful: allows more specific return types without breaking the contract.",
      "keyPoints": [
        "Java 5+ allows the overriding method to return a subtype of the parent method's return type.",
        "Example: Parent returns Animal, Child can override to return Dog (Dog IS-A Animal). This is valid.",
        "Why useful: allows more specific return types without breaking the contract."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the purpose of the @Override annotation?",
      "modelAnswer": "It tells the compiler you INTEND to override a method. If the signatures don't match (e.g., you made a typo), the compiler gives an error instead of silently creating an overloaded method. Best practice: ALWAYS use @Override when overriding — it's a safety net against bugs. Without @Override: if you accidentally write the wrong signature, Java silently treats it as a new overloaded method. You'd think you overrode, but you didn't.",
      "keyPoints": [
        "It tells the compiler you INTEND to override a method. If the signatures don't match (e.g., you made a typo), the compiler gives an error instead of silently creating an overloaded method.",
        "Best practice: ALWAYS use @Override when overriding — it's a safety net against bugs.",
        "Without @Override: if you accidentally write the wrong signature, Java silently treats it as a new overloaded method. You'd think you overrode, but you didn't."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Can a private method be overridden?",
      "modelAnswer": "NO. Private methods are not inherited — the child class cannot see them. If you define a method with the same name in the child class, it's a completely NEW method, not an override. @Override on a \"private method override\" will cause a compile error.",
      "keyPoints": [
        "NO. Private methods are not inherited — the child class cannot see them. If you define a method with the same name in the child class, it's a completely NEW method, not an override.",
        "@Override on a \"private method override\" will cause a compile error."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What happens when you call super.methodName() inside an overriding method?",
      "modelAnswer": "It explicitly calls the PARENT class's version of the method. This is used to extend (not replace) the parent's behaviour. Example: child's toString() calls super.toString() to include parent's fields in the output, then adds its own fields.",
      "keyPoints": [
        "It explicitly calls the PARENT class's version of the method. This is used to extend (not replace) the parent's behaviour.",
        "Example: child's toString() calls super.toString() to include parent's fields in the output, then adds its own fields."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Can a constructor be overridden?",
      "modelAnswer": "NO. Constructors are not inherited — they cannot be overridden. Each class has its own constructor(s). Constructors can be OVERLOADED (same class, different parameters) but not overridden.",
      "keyPoints": [
        "NO. Constructors are not inherited — they cannot be overridden. Each class has its own constructor(s).",
        "Constructors can be OVERLOADED (same class, different parameters) but not overridden."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-overriding-in-java_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "question": "Which statement best describes Method Overriding In Java?",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Method overriding, means defining a method in a child class that already exists in the parent class, with the same signature (In other words, the same name, and same parameters)."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Method Overriding In Java.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_method-overriding-in-java_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "question": "Which of the following are TRUE about Method Overriding In Java? Select all that apply.",
      "options": [
        "Method overriding, means defining a method in a child class that already exists in the parent class, with the same signature (In other words, the same name, and same parameters).",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "By extending the parent class, the child class gets all the methods defined in the parent class. Those methods are also known as derived methods.",
        "Method overriding is also known as Runtime Polymorphism or Dynamic Method Dispatch because the method that is going to be called is decided at runtime by the Java virtual machine.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Method Overriding In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-overriding-in-java_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "question": "Complete the blank: \"___ overriding, means defining a method in a child class that already exists in the parent class, with the same signature (In other words, the same name, and same parameters).\"",
      "options": [
        "Modelling",
        "Objectoriented",
        "Method",
        "sometimes"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Method', from the notes for Method Overriding In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-overriding-in-java_class-relation_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "question": "What does class Dog extend?",
      "options": [
        "Runnable",
        "Comparable",
        "Animal",
        "Object"
      ],
      "answer": 2,
      "explanation": "Dog extends Animal as declared in MethodOverridingInJava.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-over-loading-vs-method-overriding-difference_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Vs Method Overriding Difference",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MethodOverLoadingVsMethodOverridingDifference.java\"?\n\n___ class MethodOverLoadingVsMethodOverridingDifference {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_method-over-loading-vs-method-overriding-difference_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Vs Method Overriding Difference",
      "question": "Explain the main ideas in Method Over Loading Vs Method Overriding Difference.",
      "modelAnswer": "Method OverLoading 1) Provides functionality to reuse a method name with different parameters. 2) Usually in a single class but also can be used in a child class",
      "keyPoints": [
        "Method OverLoading",
        "1) Provides functionality to reuse a method name with different parameters.",
        "2) Usually in a single class but also can be used in a child class"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-over-loading-vs-method-overriding-difference_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Vs Method Overriding Difference",
      "question": "Which statement best describes Method Over Loading Vs Method Overriding Difference?",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Method OverLoading",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Method Over Loading Vs Method Overriding Difference.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_method-over-loading-vs-method-overriding-difference_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Vs Method Overriding Difference",
      "question": "Which of the following are TRUE about Method Over Loading Vs Method Overriding Difference? Select all that apply.",
      "options": [
        "1) Provides functionality to reuse a method name with different parameters.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Method OverLoading",
        "2) Usually in a single class but also can be used in a child class",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for Method Over Loading Vs Method Overriding Difference.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-over-loading-vs-method-overriding-difference_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Vs Method Overriding Difference",
      "question": "Complete the blank: \"___ OverLoading\"",
      "options": [
        "Objectoriented",
        "Method",
        "Modelling",
        "sometimes"
      ],
      "answer": 1,
      "explanation": "The missing word is 'Method', from the notes for Method Over Loading Vs Method Overriding Difference.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-over-loading-vs-method-overriding-difference_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Vs Method Overriding Difference",
      "question": "What is an important consideration when working with Method Over Loading Vs Method Overriding Difference?",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "2) Always in two classes that have a child parent or IS-A relationship",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 1,
      "explanation": "This is a key gotcha or note taken directly from the source for Method Over Loading Vs Method Overriding Difference.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_shape-hierarchy-deep-problem_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Shape Hierarchy Deep Problem",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ShapeHierarchyDeepProblem.java\"?\n\nprotected ___ String color;",
      "options": [
        "final",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'final'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_shape-hierarchy-deep-problem_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Shape Hierarchy Deep Problem",
      "question": "Complete the missing keyword in this snippet from \"ShapeHierarchyDeepProblem.java\".",
      "code": "        protected ___ String name;\r",
      "answer": [
        "final"
      ],
      "explanation": "The missing keyword is 'final', taken from the parsed source for ShapeHierarchyDeepProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_shape-hierarchy-deep-problem_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Shape Hierarchy Deep Problem",
      "question": "What does this code print?",
      "code": "System.out.println(\"Shape report using polymorphism:\");",
      "answer": [
        "Shape report using polymorphism:"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_shape-hierarchy-deep-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Shape Hierarchy Deep Problem",
      "question": "Explain the main ideas in Shape Hierarchy Deep Problem.",
      "modelAnswer": "Deep Problem: Shape Hierarchy and Polymorphic Reporting — Model a small geometry system with a base Shape type and specialized subclasses for circles, rectangles, and triangles. Each shape must compute its own area, while a shared reporting method uses instanceof checks and polymorphism to print detailed runtime information.",
      "keyPoints": [
        "Deep Problem: Shape Hierarchy and Polymorphic Reporting — Model a small geometry system with a base Shape type and specialized subclasses for circles, rectangles, and triangles. Each shape must compute its own area, while a shared reporting method uses instanceof checks and polymorphism to print detailed runtime information."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_shape-hierarchy-deep-problem_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Shape Hierarchy Deep Problem",
      "question": "Which statement best describes Shape Hierarchy Deep Problem?",
      "options": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Deep Problem: Shape Hierarchy and Polymorphic Reporting — Model a small geometry system with a base Shape type and specialized subclasses for circles, rectangles, and triangles. Each shape must compute its own area, while a shared reporting method uses instanceof checks and polymorphism to print detailed runtime information."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for Shape Hierarchy Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_shape-hierarchy-deep-problem_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Shape Hierarchy Deep Problem",
      "question": "Complete the blank: \"Deep ___: Shape Hierarchy and Polymorphic Reporting — Model a small geometry system with a base Shape type and specialized subclasses for circles, rectangles, and triangles. Each shape must compute its own area, while a shared reporting method uses instanceof checks and polymorphism to print detailed runtime information.\"",
      "options": [
        "Objectoriented",
        "Modelling",
        "sometimes",
        "Problem"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Problem', from the notes for Shape Hierarchy Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_shape-hierarchy-deep-problem_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Shape Hierarchy Deep Problem",
      "question": "In ShapeHierarchyDeepProblem.java, what does the method area() return?",
      "options": [
        "int",
        "String",
        "double",
        "void"
      ],
      "answer": 2,
      "explanation": "The method area() is declared with return type 'double' in ShapeHierarchyDeepProblem.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_shape-hierarchy-deep-problem_class-relation_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Shape Hierarchy Deep Problem",
      "question": "What does class Circle extend?",
      "options": [
        "Runnable",
        "Shape",
        "Comparable",
        "Object"
      ],
      "answer": 1,
      "explanation": "Circle extends Shape as declared in ShapeHierarchyDeepProblem.java.",
      "tags": []
    },
    {
      "qid": "ocjp-chapter-14-oop-concepts-polymorphism-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "class Animal {\n  String type = \"Animal\";\n  void speak() { System.out.println(\"Animal\"); }\n}\nclass Dog extends Animal {\n  String type = \"Dog\";\n  void speak() { System.out.println(\"Dog\"); }\n}\nAnimal a = new Dog();\nSystem.out.println(a.type);\na.speak();",
      "answer": [
        "Animal\nDog"
      ],
      "explanation": "Method calls are resolved at runtime (dynamic dispatch) → a.speak() calls Dog.speak(). But field access is resolved at compile time (static binding) → a.type uses Animal's type. This is a critical OCJP polymorphism trap.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-14-oop-concepts-constructor-chain-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "class A {\n  A() { System.out.println(\"A\"); }\n}\nclass B extends A {\n  B() { System.out.println(\"B\"); }\n}\nclass C extends B {\n  C() { System.out.println(\"C\"); }\n}\nnew C();",
      "answer": [
        "A\nB\nC"
      ],
      "explanation": "Constructor chaining: the JVM always calls super() implicitly at the top of each constructor. So A() runs, then B(), then C(). Output is A, B, C — top to bottom in the hierarchy.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-14-oop-concepts-override-overload-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-14-oop-concepts-final-keyword-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-14-oop-concepts-static-hiding-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-14-oop-concepts-covariant-return-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    },
    {
      "qid": "ocjp-chapter-14-oop-concepts-access-modifier-override-1",
      "type": "scq",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
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
      "tags": [
        "ocjp",
        "tricky"
      ]
    }
  ],
  "Chapter 15: Strings": [
    {
      "type": "scq",
      "qid": "chapter-15-strings_text-block-and-advanced-output-formatting_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 15: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "question": "Which Java keyword correctly fills in the blank in this code from \"TextBlockAndAdvancedOutputFormatting.java\"?\n\n___ class TextBlockAndAdvancedOutputFormatting {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-15-strings_text-block-and-advanced-output-formatting_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 15: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "question": "Explain the main ideas in Text Block And Advanced Output Formatting.",
      "modelAnswer": "Text Block 1) A Test block is just a special format for multi-line String literals 2) It's simply a String, with a new representation in the source code",
      "keyPoints": [
        "Text Block",
        "1) A Test block is just a special format for multi-line String literals",
        "2) It's simply a String, with a new representation in the source code"
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 15: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is a text block in Java, and which Java version introduced it?",
      "modelAnswer": "A text block is a multi-line String literal written with triple double quotes. It appeared as a preview in Java 13 and became a standard feature in Java 15.",
      "keyPoints": [
        "A text block is a multi-line String literal written with triple double quotes.",
        "It appeared as a preview in Java 13 and became a standard feature in Java 15."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 15: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What do common printf format specifiers like %d, %s, %f, and %n mean?",
      "modelAnswer": "%d formats integers, %s formats strings, %f formats floating-point numbers, and %n inserts a platform-safe newline. These specifiers are used by printf(), format(), and related formatting APIs.",
      "keyPoints": [
        "%d formats integers, %s formats strings, %f formats floating-point numbers, and %n inserts a platform-safe newline.",
        "These specifiers are used by printf(), format(), and related formatting APIs."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 15: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) What is the difference between String.format() and .formatted()?",
      "modelAnswer": "String.format() is a static utility method, while .formatted() is an instance method called on a format string. Both produce a formatted String instead of printing directly to the console.",
      "keyPoints": [
        "String.format() is a static utility method, while .formatted() is an instance method called on a format string.",
        "Both produce a formatted String instead of printing directly to the console."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 15: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "interview"
      ],
      "question": "(INTERVIEW) Why are text blocks useful compared with ordinary string literals?",
      "modelAnswer": "They make multi-line text easier to read and reduce the need for escape sequences and string concatenation. They are especially useful for JSON, SQL, XML, or formatted console output templates.",
      "keyPoints": [
        "They make multi-line text easier to read and reduce the need for escape sequences and string concatenation.",
        "They are especially useful for JSON, SQL, XML, or formatted console output templates."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 15: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) What happens with: System.out.printf(\"%f\", 10);?",
      "modelAnswer": "It throws IllegalFormatConversionException because %f expects a floating-point argument, not an int. Use 10.0 or a %d specifier instead.",
      "keyPoints": [
        "It throws IllegalFormatConversionException because %f expects a floating-point argument, not an int.",
        "Use 10.0 or a %d specifier instead."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "interview",
      "difficulty": "medium",
      "chapter": "Chapter 15: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "tags": [
        "interview",
        "ocjp"
      ],
      "question": "(OCJP) In a text block like String s = \"\"\"\\n    hi\\n    \"\"\";, what controls the incidental indentation?",
      "modelAnswer": "The position of the closing triple quotes helps determine how much leading whitespace is stripped. Moving the closing delimiter changes the resulting indentation in the String.",
      "keyPoints": [
        "The position of the closing triple quotes helps determine how much leading whitespace is stripped.",
        "Moving the closing delimiter changes the resulting indentation in the String."
      ],
      "explanation": "This question was authored directly in the source file using @quiz/@answer markers."
    },
    {
      "type": "scq",
      "qid": "chapter-15-strings_text-block-and-advanced-output-formatting_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 15: Strings",
      "topic": "Text Block And Advanced Output Formatting",
      "question": "Complete the blank: \"1) A Test ___ is just a special format for multi-line String literals\"",
      "options": [
        "Problem",
        "Challenge",
        "block",
        "Create"
      ],
      "answer": 2,
      "explanation": "The missing word is 'block', from the notes for Text Block And Advanced Output Formatting.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-15-strings_string-formatting-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 15: Strings",
      "topic": "String Formatting Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"StringFormattingChallenge.java\"?\n\n___ class StringFormattingChallenge {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-15-strings_string-formatting-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 15: Strings",
      "topic": "String Formatting Challenge",
      "question": "Explain the main ideas in String Formatting Challenge.",
      "modelAnswer": "Challenge: Use printf and String.format to print a formatted employee summary and a right-aligned table of names and numbers.",
      "keyPoints": [
        "Challenge: Use printf and String.format to print a formatted employee summary and a right-aligned table of names and numbers."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-15-strings_string-formatting-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 15: Strings",
      "topic": "String Formatting Challenge",
      "question": "Which statement best describes String Formatting Challenge?",
      "options": [
        "immutable",
        "Challenge: Create a JSON-like text block, build the same content with traditional string concatenation, print both, and compare them using equals().",
        "Challenge: Use printf and String.format to print a formatted employee summary and a right-aligned table of names and numbers.",
        "Deep Problem: Text Intelligence Analyzer — Create a utility that inspects sentences for palindrome behavior, word count, character frequency, and reversed word order, then combines the findings into a formatted report. The challenge reflects common string-processing tasks used in search, validation, and reporting systems."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for String Formatting Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-15-strings_string-formatting-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 15: Strings",
      "topic": "String Formatting Challenge",
      "question": "Complete the blank: \"___: Use printf and String.format to print a formatted employee summary and a right-aligned table of names and numbers.\"",
      "options": [
        "simply",
        "Block",
        "block",
        "Challenge"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Challenge', from the notes for String Formatting Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-15-strings_text-block-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 15: Strings",
      "topic": "Text Block Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"TextBlockChallenge.java\"?\n\n___ class TextBlockChallenge {",
      "options": [
        "public",
        "static",
        "void",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "interview",
      "qid": "chapter-15-strings_text-block-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 15: Strings",
      "topic": "Text Block Challenge",
      "question": "Explain the main ideas in Text Block Challenge.",
      "modelAnswer": "Challenge: Create a JSON-like text block, build the same content with traditional string concatenation, print both, and compare them using equals().",
      "keyPoints": [
        "Challenge: Create a JSON-like text block, build the same content with traditional string concatenation, print both, and compare them using equals()."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-15-strings_text-block-challenge_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 15: Strings",
      "topic": "Text Block Challenge",
      "question": "Which statement best describes Text Block Challenge?",
      "options": [
        "Challenge: Use printf and String.format to print a formatted employee summary and a right-aligned table of names and numbers.",
        "Challenge: Create a JSON-like text block, build the same content with traditional string concatenation, print both, and compare them using equals().",
        "Deep Problem: Text Intelligence Analyzer — Create a utility that inspects sentences for palindrome behavior, word count, character frequency, and reversed word order, then combines the findings into a formatted report. The challenge reflects common string-processing tasks used in search, validation, and reporting systems.",
        "immutable"
      ],
      "answer": 1,
      "explanation": "This is drawn directly from the notes for Text Block Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-15-strings_text-block-challenge_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 15: Strings",
      "topic": "Text Block Challenge",
      "question": "Complete the blank: \"___: Create a JSON-like text block, build the same content with traditional string concatenation, print both, and compare them using equals().\"",
      "options": [
        "Block",
        "block",
        "Challenge",
        "simply"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Challenge', from the notes for Text Block Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-15-strings_string-analyzer-deep-problem_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 15: Strings",
      "topic": "String Analyzer Deep Problem",
      "question": "Which Java keyword correctly fills in the blank in this code from \"StringAnalyzerDeepProblem.java\"?\n\npublic ___ boolean isPalindrome(String text) {",
      "options": [
        "static",
        "void",
        "public",
        "extends"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-15-strings_string-analyzer-deep-problem_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 15: Strings",
      "topic": "String Analyzer Deep Problem",
      "question": "Complete the missing keyword in this snippet from \"StringAnalyzerDeepProblem.java\".",
      "code": "                ___ false;\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for StringAnalyzerDeepProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-15-strings_string-analyzer-deep-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 15: Strings",
      "topic": "String Analyzer Deep Problem",
      "question": "Explain the main ideas in String Analyzer Deep Problem.",
      "modelAnswer": "Deep Problem: Text Intelligence Analyzer — Create a utility that inspects sentences for palindrome behavior, word count, character frequency, and reversed word order, then combines the findings into a formatted report. The challenge reflects common string-processing tasks used in search, validation, and reporting systems.",
      "keyPoints": [
        "Deep Problem: Text Intelligence Analyzer — Create a utility that inspects sentences for palindrome behavior, word count, character frequency, and reversed word order, then combines the findings into a formatted report. The challenge reflects common string-processing tasks used in search, validation, and reporting systems."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-15-strings_string-analyzer-deep-problem_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 15: Strings",
      "topic": "String Analyzer Deep Problem",
      "question": "Which statement best describes String Analyzer Deep Problem?",
      "options": [
        "immutable",
        "Challenge: Create a JSON-like text block, build the same content with traditional string concatenation, print both, and compare them using equals().",
        "Deep Problem: Text Intelligence Analyzer — Create a utility that inspects sentences for palindrome behavior, word count, character frequency, and reversed word order, then combines the findings into a formatted report. The challenge reflects common string-processing tasks used in search, validation, and reporting systems.",
        "Challenge: Use printf and String.format to print a formatted employee summary and a right-aligned table of names and numbers."
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for String Analyzer Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-15-strings_string-analyzer-deep-problem_fill-blank_5",
      "difficulty": "medium",
      "chapter": "Chapter 15: Strings",
      "topic": "String Analyzer Deep Problem",
      "question": "Complete the blank: \"Deep ___: Text Intelligence Analyzer — Create a utility that inspects sentences for palindrome behavior, word count, character frequency, and reversed word order, then combines the findings into a formatted report. The challenge reflects common string-processing tasks used in search, validation, and reporting systems.\"",
      "options": [
        "Block",
        "simply",
        "block",
        "Problem"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Problem', from the notes for String Analyzer Deep Problem.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-15-strings_string-analyzer-deep-problem_return-type_5",
      "difficulty": "medium",
      "chapter": "Chapter 15: Strings",
      "topic": "String Analyzer Deep Problem",
      "question": "In StringAnalyzerDeepProblem.java, what does the method isPalindrome() return?",
      "options": [
        "int",
        "boolean",
        "String",
        "void"
      ],
      "answer": 1,
      "explanation": "The method isPalindrome() is declared with return type 'boolean' in StringAnalyzerDeepProblem.java.",
      "tags": []
    },
    {
      "qid": "ocjp-chapter-15-strings-string-pool-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 15: Strings",
      "topic": "OCJP Tricky",
      "question": "What is the output of this code? (OCJP)",
      "code": "String a = \"hello\";\nString b = \"hello\";\nSystem.out.println(a == b);",
      "answer": [
        "true"
      ],
      "explanation": "String literals are stored in the String Pool. \"hello\" is the same pooled reference, so == returns true. This is a classic OCJP trap — always use .equals() for value comparison.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-15-strings-string-pool-2",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 15: Strings",
      "topic": "OCJP Tricky",
      "question": "What is the output of this code? (OCJP)",
      "code": "String a = new String(\"hello\");\nString b = new String(\"hello\");\nSystem.out.println(a == b);",
      "answer": [
        "false"
      ],
      "explanation": "new String() always creates a new heap object. a and b point to different objects, so == compares references and returns false. Always use .equals() to compare String values.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-15-strings-string-concat-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 15: Strings",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "String s = \"Java\";\ns.concat(\" is fun\");\nSystem.out.println(s);",
      "answer": [
        "Java"
      ],
      "explanation": "Strings are immutable. concat() returns a NEW String but does not modify s. Since the return value is ignored, s still holds \"Java\". This is a top OCJP gotcha.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    },
    {
      "qid": "ocjp-chapter-15-strings-int-cast-1",
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 15: Strings",
      "topic": "OCJP Tricky",
      "question": "What is the output? (OCJP)",
      "code": "int x = 5;\ndouble y = x / 2;\nSystem.out.println(y);",
      "answer": [
        "2.0"
      ],
      "explanation": "x and 2 are both int — integer division gives 2 (truncated). Then 2 is widened to 2.0 when assigned to double. To get 2.5, you need (double)x / 2.",
      "tags": [
        "ocjp",
        "tricky",
        "predict"
      ]
    }
  ]
};

const QUICK_REVISION_BANK = {
  "Chapter 1: Java Introduction": {
    "takeaways": [
      "Java is a compiled and interpreted language. You write source code (.java), the compiler turns it into bytecode (.class), and the JVM (Java Virtual Machine) runs the bytecode on any platform.",
      "This \"write once, run anywhere\" principle is one of Java's greatest strengths.",
      "Java programs start execution from the main method — it is the entry point that the JVM looks for when running a program.",
      "Keywords are reserved words in Java with predefined meanings. They are case-sensitive — 'class' is valid, 'Class' is not.",
      "The public keyword is an access modifier — it determines who can see/use this piece of code. 'public' means unrestricted access.",
      "The class keyword defines a class (a blueprint or template). The class name immediately follows. By convention, class names start with a capital letter."
    ],
    "gotchas": [
      "Always be aware of scope, type constraints, and compiler rules in this area."
    ],
    "syntax": "public class HelloWorld {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        System.out.println(\"Hello World\");\r\n    }\r\n\r\n}",
    "badges": [
      "main",
      "toFahrenheit",
      "isFibonacci",
      "printSequence"
    ]
  },
  "Chapter 2: Primitive Types": {
    "takeaways": [
      "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
      "A String is a sequence of characters of any length — from empty \"\" to thousands of characters long.",
      "Contrast: a 'char' can hold only ONE character. A String can hold many. char uses single quotes ('A'), String uses double quotes (\"Hello\").",
      "String immutability: once a String object is created, its value CANNOT be changed.",
      "When you \"modify\" a String (e.g., add to it), Java actually creates a brand NEW String object in memory.",
      "The original String object is discarded — it becomes eligible for garbage collection."
    ],
    "gotchas": [
      "Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects.",
      "Understanding what forms an expression vs a statement is important — a statement is a complete unit of execution (ends with ;), while an expression is the part that produces a value.",
      "Type     | Width  | Range / Notes boolean  | 1 bit  | Only two values: true or false byte     | 8 bits | -128 to 127 short    | 16 bits| -32,768 to 32,767 char     | 16 bits| A single Unicode character — written in single quotes: 'A' int      | 32 bits| -2,147,483,648 to 2,147,483,647 (default for whole numbers) long     | 64 bits| Very large whole numbers — add 'L' suffix: 100L float    | 32 bits| Single-precision decimal — add 'f' suffix: 3.14f (NOT for precise math) double   | 64 bits| Double-precision decimal — default for decimals, add 'd': 3.14d",
      "Overflow and Underflow: If you exceed the maximum value of a type, it wraps around (overflow)."
    ],
    "syntax": "public class StringExample {\n\r\n    public static void main(String[] args) {\r\n\r\n        String myString = \"This is a string\";\r\n        System.out.println(\"MyString is equal to \" + myString);\r\n        myString = myString  + \", and this is more.\";\r\n        System.out.println(\"myString is equal to \" + myString);\r\n        myString = myString + \" \\u00A9 2022\";\r\n        System.out.println(\"myString is equal to \" + myString);",
    "badges": [
      "main",
      "aMethod",
      "isOdd",
      "countSetBits"
    ]
  },
  "Chapter 3: Operators": {
    "takeaways": [
      "Summary of Operators",
      "1) Operator --> (+) plus operator",
      "For Numeric types --> Addition",
      "For char          --> Addition",
      "For boolean       --> Not Applicable",
      "For String        --> Concatenation"
    ],
    "gotchas": [
      "Always be aware of scope, type constraints, and compiler rules in this area."
    ],
    "syntax": "public class OperatorsOperandsExpressions {\n\r\n    public static void main(String[] args) {\r\n\r\n        int myVar = 15 + 12; // 15 and 12 are operands; + is the addition operator.\r\n        double hoursWorked = 9.5d;\r\n        double hourlyRate = 5d;\r\n        double mySalary = hoursWorked * hourlyRate; // hoursWorked and hourlyRate are operands; * is the multiplication operator.\r\n\r\n        // myVar = myVar + 1 is equivalent to myVar++ (increment by 1).",
    "badges": [
      "main",
      "power",
      "absolute",
      "maxOfThree",
      "sign"
    ]
  },
  "Chapter 5: Statements And Indentations": {
    "takeaways": [
      "A Java statement is a complete unit of execution. Most statements end with a semicolon (;).",
      "Types of statements: declaration statements (int x = 5;), assignment statements (x = 10;), method call statements (System.out.println(\"hi\");), and more.",
      "A single statement CAN span multiple lines — Java doesn't care about line breaks, only about the semicolon that ends the statement.",
      "Example: String s = \"Hello\" + \" World\" + \"!\"; — this is one statement split across multiple lines. It's still valid.",
      "Multiple statements CAN be placed on a single line, though it reduces readability.",
      "Whitespace (spaces, tabs, blank lines) between tokens is completely ignored by the Java compiler. It is for human readability only."
    ],
    "gotchas": [
      "Always be aware of scope, type constraints, and compiler rules in this area."
    ],
    "syntax": "public class StatementsWhiteSpaceAndIndentation {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        int myVariable = 50; // Statement represents the entire line. Adding datatype at the start of the expression and then finishing of with a semicolon we have made a valid Java Statement.\r\n        myVariable++; // This also represents complete statement\r\n        System.out.println(\"This is a test\"); // This also represents complete statement.\r\n\r\n        System.out.println(\"This is\" +\r\n                \" another\" +",
    "badges": [
      "main",
      "kilometersToMiles",
      "kilogramsToPounds",
      "celsiusToFahrenheit",
      "litersToGallons"
    ]
  },
  "Chapter 6: If Else Statements": {
    "takeaways": [
      "Ternary Operator Example :-",
      "Operand one - ageOfClient == 20, in this case we are checking the condition. It will return either true or false.",
      "Operand two - true, is the value to be assigned to the variable isEighteenOrOver if the condition above is true.",
      "Operand three - false. is the value to be assigned to the variable isEighteenOrOver if the condition above is false.",
      "Conditional logic (also called control flow) lets your program make decisions: execute different code depending on whether a condition is true or false.",
      "The if statement evaluates a boolean expression. If the expression is true, the code block runs. If false, it is skipped."
    ],
    "gotchas": [
      "IMPORTANT: Do NOT put a semicolon after if(condition) — that would end the statement before the code block, creating an empty if.",
      "Trying to use finalScore outside that if block would cause a compile error: \"Cannot resolve symbol 'finalScore'\"."
    ],
    "syntax": "public class IfExample {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        boolean isAlien = false;\r\n\r\n        // If keyword, takes what inside the parenthesis,and if(and only if), the result of expression is true, next line will be executed.\r\n        if(isAlien == false){ // condition check\r\n            System.out.println(\"It is not an alien!\");\r\n        } // Always uses code block, with if statement, it reduces confusion. It allows more than one statement to be executed.",
    "badges": [
      "main",
      "classify",
      "isPassing",
      "letterGrade"
    ]
  },
  "Chapter 7: Methods In Java": {
    "takeaways": [
      "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
      "Methods are the foundation of the DRY principle — Don't Repeat Yourself. They make code organized, readable, and maintainable.",
      "Method syntax: accessModifier static returnType methodName(paramType paramName, ...) { ... }",
      "The return type declares what type of value the method sends back to the caller. Use 'void' if the method returns nothing.",
      "If a method has a non-void return type, it MUST have a 'return statement' that returns a value of that type.",
      "Parameters are local variables automatically created when the method is called, holding the values (arguments) passed in. They are destroyed when the method returns."
    ],
    "gotchas": [
      "NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "NOTE: Do not add a main method to your solution code!",
      "NOTE: The shouldWakeUp method  needs to be defined as public static like we have been doing so far in the course.",
      "NOTE: Do not add a  main method to solution code."
    ],
    "syntax": "public class MethodsInJava {\n\r\n    public static void main(String[] args) {\r\n     calculateScore(); //method without any parameter\r\n     // calculateScore(true,800,5,100); // Calling the overloaded method with parameters\r\n        // The parameters should be passed in the same order as it is defined in the method.\r\n\r\n        int highScore = calculateScore(true,800,5,100); // The value returned by calculateScore function is now assigned to highScore variable.\r\n        System.out.println(\"Your final score was \" + highScore);",
    "badges": [
      "methodName",
      "main",
      "calculateScore",
      "area",
      "shouldWakeUp"
    ]
  },
  "Chapter 8: Switch Statements": {
    "takeaways": [
      "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
      "Switch is cleaner and more readable than nested if-else when you have many possible values to test.",
      "switch can be used with: byte, short, char, int (primitives), and String (since Java 7), as well as enum types.",
      "Structure: switch(variable) { case value1: code; break; case value2: code; break; default: code; }",
      "The 'break' statement is critical — without it, execution \"falls through\" to the next case and continues running (even if that case's value doesn't match).",
      "Fall-through can sometimes be useful (grouping multiple cases together), but is mostly a source of bugs if not intended."
    ],
    "gotchas": [
      "Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive.",
      "NOTE:  The solution to the Leap Year coding exercise earlier in the course created the isLeapYear method. You can use that solution if you wish.",
      "This method needs to return the number of days in the month. Be careful about leap years they have 29 days in month 2 (February)."
    ],
    "syntax": "public class SwitchStatementInJava {\r\n\r\n    public static void main(String[] args) {\r\n\r\n//        ifElseExample(3);\r\n//        switchCase(2);\r\n\r\n//        switchCaseWithoutUsingBreak(1);\r\n\r\n        String month = \"NOVEMBER\";",
    "badges": [
      "main",
      "ifElseExample",
      "switchCase",
      "switchCaseMultipleCasesTogether",
      "switchCaseWithoutUsingBreak"
    ]
  },
  "Chapter 9: Java Looping Concepts": {
    "takeaways": [
      "Looping :- Looping let us execute the code multiple number of times",
      "Java supports several statements for looping, or executing code repetitively for -->   The for loop is more complex to set up but is commonly used when you are iterating over set of values while --> The while loop executes until a specified condition becomes false do while --> The do while loop always executes at least one and continues until specified condition becomes false",
      "The for statement is often referred to as the for loop",
      "It repeatedly loops until a condition is satisfied",
      "The initialisation section declares or sets state, usually declaring and initialising a loop variable, before the loop begins processing.",
      "The expression section, once it becomes false, will end the loop processing."
    ],
    "gotchas": [
      "Always be aware of scope, type constraints, and compiler rules in this area."
    ],
    "syntax": "public class ForStatement {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        for(int counter = 1; counter <=5; counter++){ // counter is the variable that got initialised. It is then compared with the value less than equal to 5. If the counter is greater than 5, the loop will terminate. Lastly the loop is incremented, after the expression is tested.\r\n           // System.out.println(counter);\r\n        }\r\n\r\n        for(double rate = 2.0; rate<=5.0; rate++){\r\n           // System.out.println(calculateInterest(10000,rate));",
    "badges": [
      "main",
      "calculateInterest",
      "isPrime",
      "isOdd",
      "sumOdd"
    ]
  },
  "Chapter 10: While And Do While Looping Concepts": {
    "takeaways": [
      "WHILE LOOPS",
      "The while loop repeatedly executes its body as long as a condition remains true.",
      "Unlike the for loop, the while loop does NOT have a built-in initialisation or update step in its declaration.",
      "You must declare and initialise any counter variables BEFORE the loop, and update them INSIDE the loop body.",
      "Key difference from for loop:",
      "- for loop: initialisation, condition, and update are all in one line — ideal when you know the count upfront."
    ],
    "gotchas": [
      "IMPORTANT: Always check your loop condition carefully.",
      "} while (condition);  // NOTE: semicolon required after the closing parenthesis!",
      "The semicolon after while(condition); is MANDATORY — forgetting it is a syntax error."
    ],
    "syntax": "public class WhileLoops {\r\n\r\n    /* while loop simply has expression\r\n\r\n    While loop code format :-\r\n\r\n    while(expression)  {\r\n    // block of statements\r\n\r\n    } */",
    "badges": [
      "main",
      "checkIfNumberIsPalindrome",
      "sumDigits",
      "getEvenDigitSum",
      "printFactors"
    ]
  },
  "Chapter 11: Class Object Static And Instance Fields": {
    "takeaways": [
      "A class can be described as :-",
      "1) A custom data type --> For Ex :- String",
      "2) A special code block that contains methods",
      "A class is like an empty form that gets copied and handed out.",
      "For Example :- A form containing fields like Name and Address can be considered as an example of Class",
      "A class is like an empty form. It describes information or placeholders for data that'll be filled in, when that form is given to a unique individual."
    ],
    "gotchas": [
      "Always be aware of scope, type constraints, and compiler rules in this area."
    ],
    "syntax": "public class ClassExample {\r\n\r\n    public static void main(String[] args) {\r\n        //  We can create String using 2 ways\r\n\r\n         // 1) Literal form\r\n\r\n           String s = \"Hello\";  // s is a local variable on which the objects memory location also known as reference is assigned.\r\n\r\n        //  2) Using new keyword",
    "badges": [
      "main",
      "deposit",
      "withdraw",
      "printAccountDetails",
      "printDetails"
    ]
  },
  "Chapter 12: Parsing Values Reading Input": {
    "takeaways": [
      "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
      "Reading Data From Console",
      "Technique              | Description",
      "System.in              | Like System.out, Java provides System.in which can read input from the console or terminal.",
      "System.console         | This is Java's solution for easier support for reading a single line and prompting user for information",
      "Command Line Arguments | This is calling the Java program and specifying data in the call"
    ],
    "gotchas": [
      "You cannot do arithmetic on Strings — \"100\" - \"50\" is a compile error because - is not defined for Strings.",
      "NOTE: Use the method Math.round to round the calculated average (double). The method round returns long.",
      "NOTE: Be mindful of spaces in the printed message.",
      "NOTE: Be mindful of users who may type an invalid input right away (see example above)."
    ],
    "syntax": "public class ParsingValuesReadingInput {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        String currentYear = \"2024\";\r\n\r\n        String userDateOfBirth = \"1999\";\r\n\r\n        // System.out.println(\"Age = \" + (currentYear - userDateOfBirth));",
    "badges": [
      "main",
      "getInputFromConsole",
      "getInputFromScanner",
      "checkValidDOB",
      "inputThenPrintSumAndAverage"
    ]
  },
  "Chapter 13: Exception Handling": {
    "takeaways": [
      "An exception is an abnormal condition that disrupts the normal flow of the program.",
      "Exceptions can occur due to invalid input, null references, division by zero, file not found, etc.",
      "Catching an exception",
      "An exception is caught by wrapping the risky code inside a try-catch block.",
      "The code that might throw an exception goes inside the 'try' block.",
      "The try statement has 2 code blocks."
    ],
    "gotchas": [
      "An exception is a runtime error — an abnormal condition that occurs while the program is running and disrupts normal execution.",
      "Java uses try-catch blocks to handle exceptions gracefully, keeping the program running even when errors occur.",
      "Useful methods on the exception object: e.getMessage() -> the error message, e.printStackTrace() -> full call stack.",
      "Deep Problem: Fault-Tolerant Calculator — Build a calculator that performs standard arithmetic and square root operations while handling invalid expressions, divide-by-zero cases, negative square roots, and parsing errors gracefully. The solution should expose safe operation methods and a parser for simple text expressions."
    ],
    "syntax": "public class ExceptionHandlingInJava {\n    public static void main(String[] args) {\r\n\r\n        try{ // The try block wraps any code that might throw an exception at runtime.\r\n            // Place only the risky code here — keep try blocks as small as possible.\r\n        } // The try block ends here; the catch block immediately follows.\r\n        catch (Exception e){  // The catch parameter specifies which exception type to handle. 'Exception' is the base class that catches any exception.\r\n                              // The variable 'e' holds information about the exception, including its message and stack trace.\r\n                              // The catch block contains your error handling logic — log the error, show a message, or recover gracefully.\r\n        }",
    "badges": [
      "main",
      "demonstrateException",
      "parseAge",
      "safeDivide",
      "add"
    ]
  },
  "Chapter 14: OOP Concepts": {
    "takeaways": [
      "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
      "OOP is sometimes called class-based programming. Class-based programming starts with classes which, become the blueprints for objects",
      "Modelling real-world objects, as software objects is a fundamental part of Object-Oriented Programming.",
      "A software object stores its state in fields, which can also be called variables or attributes.",
      "Objects expose their behavior with methods.",
      "Class is basically a template or a blueprint for creating objects."
    ],
    "gotchas": [
      "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "NOTE: All methods should be defined as public NOT public static.",
      "NOTE: In total, you have to write 8 methods.",
      "NOTE: Do not add the main method to the solution code."
    ],
    "syntax": "public class ClassesAndInheritance {\n\r\n\r\n\r\n}",
    "badges": [
      "isConvertible",
      "setConvertible",
      "getDoors",
      "setDoors",
      "getColor"
    ]
  },
  "Chapter 15: Strings": {
    "takeaways": [
      "Text Block",
      "1) A Test block is just a special format for multi-line String literals",
      "2) It's simply a String, with a new representation in the source code",
      "Escape Sequences",
      "1) An escape sequence starts with a backslash.",
      "i)   \\t - Inserts a tab character ii)  \\n - Inserts a new line character iii) \\\" - Inserts a double quote character iv)  \\\\ - Inserts a backslash character"
    ],
    "gotchas": [
      "Always be aware of scope, type constraints, and compiler rules in this area."
    ],
    "syntax": "public class TextBlockAndAdvancedOutputFormatting {\r\n\r\n    /*\r\n\r\n    * Text Block\r\n    * 1) A Test block is just a special format for multi-line String literals\r\n    *\r\n    * 2) It's simply a String, with a new representation in the source code\r\n    *\r\n    * Escape Sequences",
    "badges": [
      "main",
      "isPalindrome",
      "wordCount",
      "mostFrequentChar",
      "reverseWords"
    ]
  }
};
