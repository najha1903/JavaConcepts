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
      "type": "mcq",
      "qid": "chapter-1-java-introduction_hello-world_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "question": "Which of the following statements about Hello World are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Java Introduction.",
        "Its source file is HelloWorld.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for HelloWorld.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-1-java-introduction_hello-world_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "question": "Complete the missing keyword in this snippet from \"HelloWorld.java\".",
      "code": "___ class HelloWorld {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for HelloWorld.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-1-java-introduction_hello-world_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "question": "What does this code print?",
      "code": "System.out.println(\"Java Introduction - Hello World\");",
      "answer": [
        "Java Introduction - Hello World"
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
      "modelAnswer": "Java is a compiled and interpreted language. You write source code (.java), the compiler turns it into bytecode (.class), and the JVM (Java Virtual Machine) runs the bytecode on any platform. This \"write once, run anywhere\" principle is one of Java's greatest strengths. Always be aware of scope, type constraints, and compiler rules in this area.",
      "keyPoints": [
        "Java is a compiled and interpreted language. You write source code (.java), the compiler turns it into bytecode (.class), and the JVM (Java Virtual Machine) runs the bytecode on any platform.",
        "This \"write once, run anywhere\" principle is one of Java's greatest strengths.",
        "Always be aware of scope, type constraints, and compiler rules in this area."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
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
        "null",
        "void",
        "Object"
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Hello World.",
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
        "Object",
        "String",
        "compiled",
        "Integer"
      ],
      "answer": 2,
      "explanation": "The missing word is 'compiled', from the notes for Hello World.",
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"StringExample.java\"?\n\n___ class StringExample {",
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
      "type": "mcq",
      "qid": "chapter-2-primitive-types_string-example_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "question": "Which of the following statements about String Example are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Primitive Types.",
        "Its source file is StringExample.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for StringExample.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-2-primitive-types_string-example_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "question": "Complete the missing keyword in this snippet from \"StringExample.java\".",
      "code": "___ class StringExample {",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for StringExample.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-2-primitive-types_string-example_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "question": "What does this code print?",
      "code": "// @quiz (INTERVIEW TRAP) int a=10; int b=20; String c=\"Navneet\"; What is the output of: System.out.println(a + b + c);",
      "answer": [
        "Navneet"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-2-primitive-types_string-example_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "question": "Explain the main ideas in String Example.",
      "modelAnswer": "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment. A String is a sequence of characters of any length — from empty \"\" to thousands of characters long. Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects.",
      "keyPoints": [
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "A String is a sequence of characters of any length — from empty \"\" to thousands of characters long.",
        "Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects."
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
        "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program."
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
        "Contrast: a 'char' can hold only ONE character. A String can hold many. char uses single quotes ('A'), String uses double quotes (\"Hello\").",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "A String is a sequence of characters of any length — from empty \"\" to thousands of characters long.",
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program."
      ],
      "answer": [
        0,
        1,
        2
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
        "Variables",
        "String",
        "LOCAL",
        "SCOPE"
      ],
      "answer": 1,
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
        "Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects.",
        "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.",
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "LOCAL VARIABLE SCOPE EXAMPLES"
      ],
      "answer": 0,
      "explanation": "This is a key gotcha or note taken directly from the source for String Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_local-variables-and-scope_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "question": "Which Java keyword correctly fills in the blank in this code from \"LocalVariablesAndScope.java\"?\n\npublic ___ void aMethod(int counter) {",
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
      "type": "mcq",
      "qid": "chapter-2-primitive-types_local-variables-and-scope_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "question": "Which of the following statements about Local Variables And Scope are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Primitive Types.",
        "Its source file is LocalVariablesAndScope.java.",
        "This topic has 20 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for LocalVariablesAndScope.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-2-primitive-types_local-variables-and-scope_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "question": "Complete the missing keyword in this snippet from \"LocalVariablesAndScope.java\".",
      "code": "  public ___ void aMethod(int counter) {",
      "answer": [
        "static"
      ],
      "explanation": "The missing keyword is 'static', taken from the parsed source for LocalVariablesAndScope.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-2-primitive-types_local-variables-and-scope_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "question": "What does this code print?",
      "code": "System.out.println(\"Primitive Types - Local Variables And Scope\");",
      "answer": [
        "Primitive Types - Local Variables And Scope"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-2-primitive-types_local-variables-and-scope_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "question": "Explain the main ideas in Local Variables And Scope.",
      "modelAnswer": "LOCAL VARIABLE SCOPE EXAMPLES --- FOR LOOP SCOPE --- Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects.",
      "keyPoints": [
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "--- FOR LOOP SCOPE ---",
        "Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects."
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
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment."
      ],
      "answer": 2,
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
        "--- FOR LOOP SCOPE ---",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "Variables declared inside the for loop init section are local to the loop only.",
        "LOCAL VARIABLE SCOPE EXAMPLES"
      ],
      "answer": [
        1,
        3,
        4
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
      "type": "mcq",
      "qid": "chapter-2-primitive-types_variables_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "question": "Which of the following statements about Variables are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Primitive Types.",
        "Its source file is Variables.java.",
        "This topic has 1 inline annotation.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Variables.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-2-primitive-types_variables_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "question": "Complete the missing keyword in this snippet from \"Variables.java\".",
      "code": "___ class Variables {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Variables.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-2-primitive-types_variables_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "question": "What does this code print?",
      "code": "System.out.println(\"Primitive Types - Variables\");",
      "answer": [
        "Primitive Types - Variables"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-2-primitive-types_variables_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "question": "Explain the main ideas in Variables.",
      "modelAnswer": "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program. As the name suggests, a variable's value can vary — it can be updated or reassigned after it is first set. Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects.",
      "keyPoints": [
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "As the name suggests, a variable's value can vary — it can be updated or reassigned after it is first set.",
        "Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-2-primitive-types_variables_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "question": "Which statement best describes Variables?",
      "options": [
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier."
      ],
      "answer": 1,
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
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "To declare a variable in Java, you must specify: (1) the data type, (2) a name (identifier), and optionally (3) an initial value.",
        "As the name suggests, a variable's value can vary — it can be updated or reassigned after it is first set.",
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "LOCAL VARIABLE SCOPE EXAMPLES"
      ],
      "answer": [
        1,
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
        "sequence",
        "String",
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
      "type": "mcq",
      "qid": "chapter-2-primitive-types_key-words-and-expressions-in-java_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "question": "Which of the following statements about Key Words And Expressions In Java are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Primitive Types.",
        "Its source file is KeyWordsAndExpressionsInJava.java.",
        "This topic has 1 inline annotation.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for KeyWordsAndExpressionsInJava.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-2-primitive-types_key-words-and-expressions-in-java_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "question": "Complete the missing keyword in this snippet from \"KeyWordsAndExpressionsInJava.java\".",
      "code": "___ class KeyWordsAndExpressionsInJava {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for KeyWordsAndExpressionsInJava.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-2-primitive-types_key-words-and-expressions-in-java_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "question": "What does this code print?",
      "code": "            System.out.println(\"You got the high score!\"); // You got the highscore! is a part of expression.\r",
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
      "modelAnswer": "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier. Java has over 50 reserved keywords. Common examples: class, public, static, void, int, double, if, else, for, while, return, new, this, super, true, false, null. Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects.",
      "keyPoints": [
        "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.",
        "Java has over 50 reserved keywords. Common examples: class, public, static, void, int, double, if, else, for, while, return, new, this, super, true, false, null.",
        "Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects."
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
        "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.",
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment."
      ],
      "answer": 0,
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
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "Keywords are reserved words in Java that have predefined meanings. They cannot be used as variable names, class names, or any other identifier.",
        "Java has over 50 reserved keywords. Common examples: class, public, static, void, int, double, if, else, for, while, return, new, this, super, true, false, null.",
        "An expression in Java is any combination of variables, literals, operators, and method calls that evaluates to a single value.",
        "LOCAL VARIABLE SCOPE EXAMPLES"
      ],
      "answer": [
        1,
        2,
        3
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
        "sequence",
        "String",
        "Keywords",
        "Contrast"
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
      "type": "mcq",
      "qid": "chapter-2-primitive-types_primitive-data-types_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "question": "Which of the following statements about Primitive Data Types are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Primitive Types.",
        "Its source file is PrimitiveDataTypes.java.",
        "This topic has 4 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for PrimitiveDataTypes.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-2-primitive-types_primitive-data-types_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "question": "Complete the missing keyword in this snippet from \"PrimitiveDataTypes.java\".",
      "code": "___ class PrimitiveDataTypes {",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for PrimitiveDataTypes.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-2-primitive-types_primitive-data-types_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "question": "What does this code print?",
      "code": "        System.out.println(\"The max Value of the integer is = \" + intMaxValue); //The max Value of the integer is = 2147483647\r",
      "answer": [
        "The max Value of the integer is = "
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-2-primitive-types_primitive-data-types_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "question": "Explain the main ideas in Primitive Data Types.",
      "modelAnswer": "Java has exactly 8 primitive data types — these are the most fundamental building blocks for storing data. Unlike objects, primitive types are stored directly in memory (not as references), making them fast and memory-efficient. Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects.",
      "keyPoints": [
        "Java has exactly 8 primitive data types — these are the most fundamental building blocks for storing data.",
        "Unlike objects, primitive types are stored directly in memory (not as references), making them fast and memory-efficient.",
        "Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects."
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
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "LOCAL VARIABLE SCOPE EXAMPLES",
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
        "The 8 Primitive Types:",
        "LOCAL VARIABLE SCOPE EXAMPLES",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.",
        "Unlike objects, primitive types are stored directly in memory (not as references), making them fast and memory-efficient.",
        "Java has exactly 8 primitive data types — these are the most fundamental building blocks for storing data."
      ],
      "answer": [
        0,
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
        "exactly",
        "sequence",
        "String",
        "Contrast"
      ],
      "answer": 0,
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
        "A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.",
        "String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment."
      ],
      "answer": 0,
      "explanation": "This is a key gotcha or note taken directly from the source for Primitive Data Types.",
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
      "type": "mcq",
      "qid": "chapter-3-operators_operators-operands-expressions_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "question": "Which of the following statements about Operators Operands Expressions are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Operators.",
        "Its source file is OperatorsOperandsExpressions.java.",
        "This topic has 6 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for OperatorsOperandsExpressions.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-3-operators_operators-operands-expressions_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "question": "Complete the missing keyword in this snippet from \"OperatorsOperandsExpressions.java\".",
      "code": "___ class OperatorsOperandsExpressions {",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for OperatorsOperandsExpressions.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-3-operators_operators-operands-expressions_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "question": "What does this code print?",
      "code": "// @quiz (INTERVIEW TRAP) What is the output of: System.out.println(10 + 20 + \"Java\");",
      "answer": [
        "Java"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-3-operators_operators-operands-expressions_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "question": "Explain the main ideas in Operators Operands Expressions.",
      "modelAnswer": "Summary of Operators 1) Operator --> (+) plus operator @quiz (INTERVIEW TRAP) What is the output of: System.out.println(10 + 20 + \"Java\");",
      "keyPoints": [
        "Summary of Operators",
        "1) Operator --> (+) plus operator",
        "@quiz (INTERVIEW TRAP) What is the output of: System.out.println(10 + 20 + \"Java\");"
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
        "Summary of Operators",
        "null",
        "Object",
        "OPERATOR CHALLENGE"
      ],
      "answer": 0,
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
        "1) Operator --> (+) plus operator",
        "OPERATOR CHALLENGE",
        "For Numeric types --> Addition",
        "Summary of Operators"
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
        "Create",
        "Summary",
        "OPERATOR",
        "second"
      ],
      "answer": 1,
      "explanation": "The missing word is 'Summary', from the notes for Operators Operands Expressions.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-3-operators_operators-operands-expressions_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "question": "What is an important consideration when working with Operators Operands Expressions?",
      "options": [
        "Be careful with null references.",
        "OPERATOR CHALLENGE",
        "@answer & on booleans still performs AND, but it always evaluates BOTH sides even when the left side is false.",
        "Always initialize variables before use."
      ],
      "answer": 2,
      "explanation": "This is a key gotcha or note taken directly from the source for Operators Operands Expressions.",
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
      "type": "mcq",
      "qid": "chapter-3-operators_operator-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 3: Operators",
      "topic": "Operator Challenge",
      "question": "Which of the following statements about Operator Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Operators.",
        "Its source file is OperatorChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for OperatorChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-3-operators_operator-challenge_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operator Challenge",
      "question": "Complete the missing keyword in this snippet from \"OperatorChallenge.java\".",
      "code": "___ class OperatorChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for OperatorChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-3-operators_operator-challenge_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operator Challenge",
      "question": "What does this code print?",
      "code": "        System.out.println(\"Remainder check is :-  \" + checkRemainder);\r",
      "answer": [
        "Remainder check is :-  "
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
      "modelAnswer": "OPERATOR CHALLENGE 1. Create a double variable with a value of 20.00 @quiz (INTERVIEW TRAP) What is the output of: System.out.println(10 + 20 + \"Java\");",
      "keyPoints": [
        "OPERATOR CHALLENGE",
        "1. Create a double variable with a value of 20.00",
        "@quiz (INTERVIEW TRAP) What is the output of: System.out.println(10 + 20 + \"Java\");"
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
        "null",
        "OPERATOR CHALLENGE",
        "Object",
        "Summary of Operators"
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
        "Summary of Operators",
        "2. Create a second variable of type double with the value 80.00",
        "1. Create a double variable with a value of 20.00",
        "OPERATOR CHALLENGE"
      ],
      "answer": [
        1,
        2,
        3
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
        "Numeric",
        "Operator",
        "Summary"
      ],
      "answer": 0,
      "explanation": "The missing word is 'OPERATOR', from the notes for Operator Challenge.",
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
      "type": "mcq",
      "qid": "chapter-5-statements-and-indentations_statements-white-space-and-indentation_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "question": "Which of the following statements about Statements White Space And Indentation are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Statements And Indentations.",
        "Its source file is StatementsWhiteSpaceAndIndentation.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for StatementsWhiteSpaceAndIndentation.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-5-statements-and-indentations_statements-white-space-and-indentation_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "question": "Complete the missing keyword in this snippet from \"StatementsWhiteSpaceAndIndentation.java\".",
      "code": "___ class StatementsWhiteSpaceAndIndentation {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for StatementsWhiteSpaceAndIndentation.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-5-statements-and-indentations_statements-white-space-and-indentation_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "question": "What does this code print?",
      "code": "// Types of statements: declaration statements (int x = 5;), assignment statements (x = 10;), method call statements (System.out.println(\"hi\");), and more.",
      "answer": [
        "hi"
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
      "modelAnswer": "A Java statement is a complete unit of execution. Most statements end with a semicolon (;). Types of statements: declaration statements (int x = 5;), assignment statements (x = 10;), method call statements (System.out.println(\"hi\");), and more. Always be aware of scope, type constraints, and compiler rules in this area.",
      "keyPoints": [
        "A Java statement is a complete unit of execution. Most statements end with a semicolon (;).",
        "Types of statements: declaration statements (int x = 5;), assignment statements (x = 10;), method call statements (System.out.println(\"hi\");), and more.",
        "Always be aware of scope, type constraints, and compiler rules in this area."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-5-statements-and-indentations_statements-white-space-and-indentation_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "question": "Which statement best describes Statements White Space And Indentation?",
      "options": [
        "void",
        "Object",
        "A Java statement is a complete unit of execution. Most statements end with a semicolon (;).",
        "null"
      ],
      "answer": 2,
      "explanation": "This is drawn directly from the notes for Statements White Space And Indentation.",
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
        "String",
        "statement",
        "Object",
        "Integer"
      ],
      "answer": 1,
      "explanation": "The missing word is 'statement', from the notes for Statements White Space And Indentation.",
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"IfExample.java\"?\n\nOperand one - ageOfClient == 20, in ___ case we are checking the condition. It will return either true or false.",
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
      "type": "mcq",
      "qid": "chapter-6-if-else-statements_if-example_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "question": "Which of the following statements about If Example are correct? (Select all that apply)",
      "options": [
        "This topic belongs to If Else Statements.",
        "Its source file is IfExample.java.",
        "This topic has 1 inline annotation.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for IfExample.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-6-if-else-statements_if-example_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "question": "Complete the missing keyword in this snippet from \"IfExample.java\".",
      "code": "    Operand one - ageOfClient == 20, in ___ case we are checking the condition. It will return either true or false.\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for IfExample.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-6-if-else-statements_if-example_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "question": "What does this code print?",
      "code": "            System.out.println(\"It is not an alien!\");\r",
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
      "modelAnswer": "Ternary Operator Example :- Operand one - ageOfClient == 20, in this case we are checking the condition. It will return either true or false. IMPORTANT: Do NOT put a semicolon after if(condition) — that would end the statement before the code block, creating an empty if.",
      "keyPoints": [
        "Ternary Operator Example :-",
        "Operand one - ageOfClient == 20, in this case we are checking the condition. It will return either true or false.",
        "IMPORTANT: Do NOT put a semicolon after if(condition) — that would end the statement before the code block, creating an empty if."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-6-if-else-statements_if-example_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "question": "Which statement best describes If Example?",
      "options": [
        "Ternary Operator Example :-",
        "null",
        "Object",
        "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch."
      ],
      "answer": 0,
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
        "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.",
        "Operand two - true, is the value to be assigned to the variable isEighteenOrOver if the condition above is true.",
        "Operand one - ageOfClient == 20, in this case we are checking the condition. It will return either true or false.",
        "Ternary Operator Example :-"
      ],
      "answer": [
        1,
        2,
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
        "block",
        "Ternary",
        "ifelse",
        "Structure"
      ],
      "answer": 1,
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
        "Always initialize variables before use.",
        "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.",
        "Be careful with null references.",
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"CodeBlocksIfThenElse.java\"?\n\n___ class CodeBlocksIfThenElse {",
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
      "type": "mcq",
      "qid": "chapter-6-if-else-statements_code-blocks-if-then-else_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Code Blocks If Then Else",
      "question": "Which of the following statements about Code Blocks If Then Else are correct? (Select all that apply)",
      "options": [
        "This topic belongs to If Else Statements.",
        "Its source file is CodeBlocksIfThenElse.java.",
        "This topic has 1 inline annotation.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for CodeBlocksIfThenElse.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-6-if-else-statements_code-blocks-if-then-else_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Code Blocks If Then Else",
      "question": "Complete the missing keyword in this snippet from \"CodeBlocksIfThenElse.java\".",
      "code": "___ class CodeBlocksIfThenElse {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for CodeBlocksIfThenElse.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-6-if-else-statements_code-blocks-if-then-else_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Code Blocks If Then Else",
      "question": "What does this code print?",
      "code": "            System.out.println(\"Your score was less than 5000 but greater than 1000\");\r",
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
      "modelAnswer": "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch. Structure: if(condition1) { ... } else if(condition2) { ... } else { ... } IMPORTANT: Do NOT put a semicolon after if(condition) — that would end the statement before the code block, creating an empty if.",
      "keyPoints": [
        "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.",
        "Structure: if(condition1) { ... } else if(condition2) { ... } else { ... }",
        "IMPORTANT: Do NOT put a semicolon after if(condition) — that would end the statement before the code block, creating an empty if."
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
        "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.",
        "Ternary Operator Example :-",
        "Object",
        "null"
      ],
      "answer": 0,
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
        "The 'else' block is the fallback — it runs only when ALL preceding conditions are false.",
        "Ternary Operator Example :-",
        "An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.",
        "Structure: if(condition1) { ... } else if(condition2) { ... } else { ... }"
      ],
      "answer": [
        0,
        2,
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
        "Structure",
        "value",
        "Operand",
        "Ternary"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Structure', from the notes for Code Blocks If Then Else.",
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"MethodsInJava.java\"?\n\n___ class MethodsInJava {",
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
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_methods-in-java_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "question": "Which of the following statements about Methods In Java are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Methods In Java.",
        "Its source file is MethodsInJava.java.",
        "This topic has 7 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for MethodsInJava.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_methods-in-java_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "question": "Complete the missing keyword in this snippet from \"MethodsInJava.java\".",
      "code": "___ class MethodsInJava {",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for MethodsInJava.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_methods-in-java_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "question": "What does this code print?",
      "code": "        System.out.println(\"Your final score was \" + highScore);\r",
      "answer": [
        "Your final score was "
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_methods-in-java_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "question": "Explain the main ideas in Methods In Java.",
      "modelAnswer": "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed. Methods are the foundation of the DRY principle — Don't Repeat Yourself. They make code organized, readable, and maintainable. @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Methods are the foundation of the DRY principle — Don't Repeat Yourself. They make code organized, readable, and maintainable.",
        "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
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
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius."
      ],
      "answer": 2,
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
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method named area with one double parameter named radius.",
        "Method syntax: accessModifier static returnType methodName(paramType paramName, ...) { ... }",
        "Methods are the foundation of the DRY principle — Don't Repeat Yourself. They make code organized, readable, and maintainable."
      ],
      "answer": [
        0,
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
        "needs",
        "Write",
        "method",
        "parameter"
      ],
      "answer": 2,
      "explanation": "The missing word is 'method', from the notes for Methods In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_methods-in-java_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "question": "What is an important consideration when working with Methods In Java?",
      "options": [
        "Write a method named area with one double parameter named radius.",
        "@answer Java is ALWAYS pass-by-value.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double."
      ],
      "answer": 1,
      "explanation": "This is a key gotcha or note taken directly from the source for Methods In Java.",
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
        "void",
        "int",
        "String"
      ],
      "answer": 2,
      "explanation": "The method calculateScore() is declared with return type 'int' in MethodsInJava.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_area-calculator-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"AreaCalculatorCodingChallenge.java\"?\n\n___ class AreaCalculatorCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_area-calculator-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "Which of the following statements about Area Calculator Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Methods In Java.",
        "Its source file is AreaCalculatorCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for AreaCalculatorCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_area-calculator-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"AreaCalculatorCodingChallenge.java\".",
      "code": "___ class AreaCalculatorCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for AreaCalculatorCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_area-calculator-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Methods In Java - Area Calculator Coding Challenge\");",
      "answer": [
        "Methods In Java - Area Calculator Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_area-calculator-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "Explain the main ideas in Area Calculator Coding Challenge.",
      "modelAnswer": "Write a method named area with one double parameter named radius. The method needs to return a double value that represents the area of a circle. @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "Write a method named area with one double parameter named radius.",
        "The method needs to return a double value that represents the area of a circle.",
        "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
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
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double.",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": 2,
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
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "The method needs to return a double value that represents the area of a circle.",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "If the parameter radius is negative then return -1.0 to represent an invalid value."
      ],
      "answer": [
        1,
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
        "Method",
        "Methods",
        "method",
        "Write"
      ],
      "answer": 3,
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
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double.",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!"
      ],
      "answer": 2,
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
        "double",
        "void",
        "String",
        "int"
      ],
      "answer": 0,
      "explanation": "The method area() is declared with return type 'double' in AreaCalculatorCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_barking-dog-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"BarkingDogCodingChallenge.java\"?\n\n___ class BarkingDogCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_barking-dog-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "Which of the following statements about Barking Dog Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Methods In Java.",
        "Its source file is BarkingDogCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for BarkingDogCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_barking-dog-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"BarkingDogCodingChallenge.java\".",
      "code": "___ class BarkingDogCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for BarkingDogCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_barking-dog-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Methods In Java - Barking Dog Coding Challenge\");",
      "answer": [
        "Methods In Java - Barking Dog Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_barking-dog-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "Explain the main ideas in Barking Dog Coding Challenge.",
      "modelAnswer": "We have a dog that likes to bark.  We need to wake up if the dog is barking at night! Write a method shouldWakeUp that has 2 parameters. @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method shouldWakeUp that has 2 parameters.",
        "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
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
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double."
      ],
      "answer": 2,
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
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method shouldWakeUp that has 2 parameters."
      ],
      "answer": [
        0,
        3,
        4
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
        "Method",
        "likes",
        "Methods"
      ],
      "answer": 2,
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
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius.",
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double.",
        "NOTE: The shouldWakeUp method  needs to be defined as public static like we have been doing so far in the course."
      ],
      "answer": 3,
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
        "void",
        "boolean",
        "String",
        "int"
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"DecimalComparatorCodingChallenge.java\"?\n\n___ class DecimalComparatorCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_decimal-comparator-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "Which of the following statements about Decimal Comparator Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Methods In Java.",
        "Its source file is DecimalComparatorCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for DecimalComparatorCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_decimal-comparator-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"DecimalComparatorCodingChallenge.java\".",
      "code": "___ class DecimalComparatorCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for DecimalComparatorCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_decimal-comparator-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Methods In Java - Decimal Comparator Coding Challenge\");",
      "answer": [
        "Methods In Java - Decimal Comparator Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_decimal-comparator-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "Explain the main ideas in Decimal Comparator Coding Challenge.",
      "modelAnswer": "Write a method areEqualByThreeDecimalPlaces with two parameters of type double. The method should return boolean and it needs to return true if two double numbers are the same up to three decimal places. Otherwise, return false. @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double.",
        "The method should return boolean and it needs to return true if two double numbers are the same up to three decimal places. Otherwise, return false.",
        "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
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
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double.",
        "Write a method named area with one double parameter named radius.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": 0,
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
        "The method should return boolean and it needs to return true if two double numbers are the same up to three decimal places. Otherwise, return false.",
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double.",
        "EXAMPLES OF INPUT/OUTPUT:",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": [
        0,
        1,
        2
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
        "method",
        "Write",
        "Methods",
        "Method"
      ],
      "answer": 1,
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
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius.",
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
        "String",
        "boolean",
        "int",
        "void"
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"EqualityPrinterCodingChallenge.java\"?\n\n___ class EqualityPrinterCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_equality-printer-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equality Printer Coding Challenge",
      "question": "Which of the following statements about Equality Printer Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Methods In Java.",
        "Its source file is EqualityPrinterCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for EqualityPrinterCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_equality-printer-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equality Printer Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"EqualityPrinterCodingChallenge.java\".",
      "code": "___ class EqualityPrinterCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for EqualityPrinterCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_equality-printer-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equality Printer Coding Challenge",
      "question": "What does this code print?",
      "code": "            System.out.println(\"Invalid Value\");\r",
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
      "modelAnswer": "Write a method printEqual with 3 parameters of type int. The method should not return anything (void). If one of the parameters is less than 0, print text \"Invalid Value\". @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "Write a method printEqual with 3 parameters of type int. The method should not return anything (void).",
        "If one of the parameters is less than 0, print text \"Invalid Value\".",
        "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
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
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method printEqual with 3 parameters of type int. The method should not return anything (void).",
        "Write a method named area with one double parameter named radius.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!"
      ],
      "answer": 1,
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
        "If all numbers are equal print text \"All numbers are equal\"",
        "If one of the parameters is less than 0, print text \"Invalid Value\".",
        "Write a method printEqual with 3 parameters of type int. The method should not return anything (void).",
        "Write a method named area with one double parameter named radius."
      ],
      "answer": [
        1,
        2,
        3
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
        "Method",
        "Write",
        "method",
        "Methods"
      ],
      "answer": 1,
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
        "TIP: Be extremely careful about spaces in the printed message.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": 0,
      "explanation": "This is a key gotcha or note taken directly from the source for Equality Printer Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_equal-sum-checker-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"EqualSumCheckerCodingChallenge.java\"?\n\n___ class EqualSumCheckerCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_equal-sum-checker-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "Which of the following statements about Equal Sum Checker Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Methods In Java.",
        "Its source file is EqualSumCheckerCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for EqualSumCheckerCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_equal-sum-checker-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"EqualSumCheckerCodingChallenge.java\".",
      "code": "___ class EqualSumCheckerCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for EqualSumCheckerCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_equal-sum-checker-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Methods In Java - Equal Sum Checker Coding Challenge\");",
      "answer": [
        "Methods In Java - Equal Sum Checker Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_equal-sum-checker-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "Explain the main ideas in Equal Sum Checker Coding Challenge.",
      "modelAnswer": "Write a method hasEqualSum with 3 parameters of type int. The method should return boolean and it needs to return true if the sum of the first and second parameter is equal to the third parameter. Otherwise, return false. @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "Write a method hasEqualSum with 3 parameters of type int.",
        "The method should return boolean and it needs to return true if the sum of the first and second parameter is equal to the third parameter. Otherwise, return false.",
        "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
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
        "Write a method named area with one double parameter named radius.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
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
        "The method should return boolean and it needs to return true if the sum of the first and second parameter is equal to the third parameter. Otherwise, return false.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method hasEqualSum with 3 parameters of type int.",
        "EXAMPLES OF INPUT/OUTPUT:",
        "Write a method named area with one double parameter named radius."
      ],
      "answer": [
        0,
        2,
        3
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
        "Method",
        "Write",
        "Methods",
        "method"
      ],
      "answer": 1,
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
        "NOTE: The hasEqualSum method  needs to be defined as public static like we have been doing so far in the course.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": 0,
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
        "void",
        "String",
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"LeapYearCalculatorCodingChallenge.java\"?\n\n___ class LeapYearCalculatorCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_leap-year-calculator-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "Which of the following statements about Leap Year Calculator Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Methods In Java.",
        "Its source file is LeapYearCalculatorCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for LeapYearCalculatorCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_leap-year-calculator-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"LeapYearCalculatorCodingChallenge.java\".",
      "code": "___ class LeapYearCalculatorCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for LeapYearCalculatorCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_leap-year-calculator-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Methods In Java - Leap Year Calculator Coding Challenge\");",
      "answer": [
        "Methods In Java - Leap Year Calculator Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_leap-year-calculator-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "Explain the main ideas in Leap Year Calculator Coding Challenge.",
      "modelAnswer": "Write a method isLeapYear with a parameter of type int named year. The parameter needs to be greater than or equal to 1 and less than or equal to 9999. @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "Write a method isLeapYear with a parameter of type int named year.",
        "The parameter needs to be greater than or equal to 1 and less than or equal to 9999.",
        "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
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
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!"
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
        "The parameter needs to be greater than or equal to 1 and less than or equal to 9999.",
        "Write a method named area with one double parameter named radius.",
        "Write a method isLeapYear with a parameter of type int named year.",
        "If the parameter is not in that range return false.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": [
        0,
        2,
        3
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
        "Write",
        "Methods",
        "method",
        "Method"
      ],
      "answer": 0,
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
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius."
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
        "void",
        "int",
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"MegaBytesConverterCodingChallenge.java\"?\n\n___ class MegaBytesConverterCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_mega-bytes-converter-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Mega Bytes Converter Coding Challenge",
      "question": "Which of the following statements about Mega Bytes Converter Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Methods In Java.",
        "Its source file is MegaBytesConverterCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for MegaBytesConverterCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_mega-bytes-converter-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Mega Bytes Converter Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"MegaBytesConverterCodingChallenge.java\".",
      "code": "___ class MegaBytesConverterCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for MegaBytesConverterCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_mega-bytes-converter-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Mega Bytes Converter Coding Challenge",
      "question": "What does this code print?",
      "code": "            System.out.println(\"Invalid Value\");\r",
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
      "modelAnswer": "Write a method called printMegaBytesAndKiloBytes that has 1 parameter of type int with the name kiloBytes. The method should not return anything (void) and it needs to calculate the megabytes and remaining kilobytes from the kilobytes parameter. @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "Write a method called printMegaBytesAndKiloBytes that has 1 parameter of type int with the name kiloBytes.",
        "The method should not return anything (void) and it needs to calculate the megabytes and remaining kilobytes from the kilobytes parameter.",
        "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
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
        "Write a method called printMegaBytesAndKiloBytes that has 1 parameter of type int with the name kiloBytes.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!"
      ],
      "answer": 1,
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
        "The method should not return anything (void) and it needs to calculate the megabytes and remaining kilobytes from the kilobytes parameter.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius.",
        "Then it needs to print a message in the format \"XX KB = YY MB and ZZ KB\".",
        "Write a method called printMegaBytesAndKiloBytes that has 1 parameter of type int with the name kiloBytes."
      ],
      "answer": [
        0,
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
        "Method",
        "Write",
        "Methods",
        "method"
      ],
      "answer": 1,
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
        "Write a method named area with one double parameter named radius.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "TIP: Be extremely careful about spaces in the printed message.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"MethodsChallengeProblem.java\"?\n\n___ class MethodsChallengeProblem {",
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
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_methods-challenge-problem_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods Challenge Problem",
      "question": "Which of the following statements about Methods Challenge Problem are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Methods In Java.",
        "Its source file is MethodsChallengeProblem.java.",
        "This topic has 1 inline annotation.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for MethodsChallengeProblem.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_methods-challenge-problem_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods Challenge Problem",
      "question": "Complete the missing keyword in this snippet from \"MethodsChallengeProblem.java\".",
      "code": "___ class MethodsChallengeProblem {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for MethodsChallengeProblem.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_methods-challenge-problem_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods Challenge Problem",
      "question": "What does this code print?",
      "code": "        System.out.println(name + \" managed to get into position \" + position + \" on the high score table \");\r",
      "answer": [
        " managed to get into position "
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_methods-challenge-problem_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods Challenge Problem",
      "question": "Explain the main ideas in Methods Challenge Problem.",
      "modelAnswer": "Create a method called displayHighScorePosition. It should have player's name as a parameter, and a 2nd parameter as a position in the high score table. You should display the players name along with a message like \" managed to get into position \" and the position they got and a further message @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "Create a method called displayHighScorePosition. It should have player's name as a parameter, and a 2nd parameter as a position in the high score table.",
        "You should display the players name along with a message like \" managed to get into position \" and the position they got and a further message",
        "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
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
        "Write a method named area with one double parameter named radius.",
        "Create a method called displayHighScorePosition. It should have player's name as a parameter, and a 2nd parameter as a position in the high score table.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": 1,
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
        "\" on the high score table \".",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Create a method called displayHighScorePosition. It should have player's name as a parameter, and a 2nd parameter as a position in the high score table.",
        "You should display the players name along with a message like \" managed to get into position \" and the position they got and a further message"
      ],
      "answer": [
        0,
        3,
        4
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
        "Methods",
        "Method",
        "method",
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
        "int",
        "void",
        "String",
        "boolean"
      ],
      "answer": 0,
      "explanation": "The method calculateHighScorePosition() is declared with return type 'int' in MethodsChallengeProblem.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_minutes-to-years-and-days-calculator-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Minutes To Years And Days Calculator Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MinutesToYearsAndDaysCalculatorCodingChallenge.java\"?\n\n___ class MinutesToYearsAndDaysCalculatorCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_minutes-to-years-and-days-calculator-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Minutes To Years And Days Calculator Coding Challenge",
      "question": "Which of the following statements about Minutes To Years And Days Calculator Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Methods In Java.",
        "Its source file is MinutesToYearsAndDaysCalculatorCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for MinutesToYearsAndDaysCalculatorCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_minutes-to-years-and-days-calculator-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Minutes To Years And Days Calculator Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"MinutesToYearsAndDaysCalculatorCodingChallenge.java\".",
      "code": "___ class MinutesToYearsAndDaysCalculatorCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for MinutesToYearsAndDaysCalculatorCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_minutes-to-years-and-days-calculator-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Minutes To Years And Days Calculator Coding Challenge",
      "question": "What does this code print?",
      "code": "            System.out.println(\"Invalid value\");\r",
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
      "modelAnswer": "Write a method printYearsAndDays with parameter of type long named minutes. The method should not return anything (void) and it needs to calculate the years and days from the minutes parameter. @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "Write a method printYearsAndDays with parameter of type long named minutes.",
        "The method should not return anything (void) and it needs to calculate the years and days from the minutes parameter.",
        "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
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
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius.",
        "Write a method printYearsAndDays with parameter of type long named minutes."
      ],
      "answer": 3,
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
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method printYearsAndDays with parameter of type long named minutes.",
        "The method should not return anything (void) and it needs to calculate the years and days from the minutes parameter.",
        "Write a method named area with one double parameter named radius.",
        "If the parameter is less than 0, print text \"Invalid Value\"."
      ],
      "answer": [
        1,
        2,
        4
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
        "Method",
        "method"
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
        "* Be extra careful about spaces in the printed message.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!"
      ],
      "answer": 1,
      "explanation": "This is a key gotcha or note taken directly from the source for Minutes To Years And Days Calculator Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_playing-cat-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PlayingCatCodingChallenge.java\"?\n\n___ class PlayingCatCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_playing-cat-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "Which of the following statements about Playing Cat Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Methods In Java.",
        "Its source file is PlayingCatCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for PlayingCatCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_playing-cat-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"PlayingCatCodingChallenge.java\".",
      "code": "___ class PlayingCatCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for PlayingCatCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_playing-cat-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Methods In Java - Playing Cat Coding Challenge\");",
      "answer": [
        "Methods In Java - Playing Cat Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_playing-cat-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "Explain the main ideas in Playing Cat Coding Challenge.",
      "modelAnswer": "The cats spend most of the day playing. In particular, they play if the temperature is between 25 and 35 (inclusive). Unless it is summer, then the upper limit is 45 (inclusive) instead of 35. Write a method isCatPlaying that has 2 parameters. Method needs to return true if the cat is playing, otherwise return false @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "The cats spend most of the day playing. In particular, they play if the temperature is between 25 and 35 (inclusive). Unless it is summer, then the upper limit is 45 (inclusive) instead of 35.",
        "Write a method isCatPlaying that has 2 parameters. Method needs to return true if the cat is playing, otherwise return false",
        "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
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
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "The cats spend most of the day playing. In particular, they play if the temperature is between 25 and 35 (inclusive). Unless it is summer, then the upper limit is 45 (inclusive) instead of 35."
      ],
      "answer": 3,
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
        "The cats spend most of the day playing. In particular, they play if the temperature is between 25 and 35 (inclusive). Unless it is summer, then the upper limit is 45 (inclusive) instead of 35.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "1st parameter should be of type boolean and be named summer it represents if it is summer.",
        "Write a method isCatPlaying that has 2 parameters. Method needs to return true if the cat is playing, otherwise return false",
        "Write a method named area with one double parameter named radius."
      ],
      "answer": [
        0,
        2,
        3
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
        "spend",
        "Methods",
        "method"
      ],
      "answer": 1,
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
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "NOTES",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method named area with one double parameter named radius."
      ],
      "answer": 1,
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
        "int",
        "boolean",
        "void",
        "String"
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"PositiveNegativeZeroCodingChallenge.java\"?\n\nThe method should not ___ any value, and it needs to print out:",
      "options": [
        "return",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_positive-negative-zero-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Positive Negative Zero Coding Challenge",
      "question": "Which of the following statements about Positive Negative Zero Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Methods In Java.",
        "Its source file is PositiveNegativeZeroCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for PositiveNegativeZeroCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_positive-negative-zero-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Positive Negative Zero Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"PositiveNegativeZeroCodingChallenge.java\".",
      "code": "The method should not ___ any value, and it needs to print out:\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for PositiveNegativeZeroCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_positive-negative-zero-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Positive Negative Zero Coding Challenge",
      "question": "What does this code print?",
      "code": "            System.out.println(\"positive\");\r",
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
      "modelAnswer": "Positive, Negative or Zero Write a method called checkNumber with an int parameter named number. @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "Positive, Negative or Zero",
        "Write a method called checkNumber with an int parameter named number.",
        "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
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
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
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
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Positive, Negative or Zero",
        "Write a method called checkNumber with an int parameter named number.",
        "The method should not return any value, and it needs to print out:",
        "Write a method named area with one double parameter named radius."
      ],
      "answer": [
        1,
        2,
        3
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
        "Method",
        "Methods",
        "method",
        "Positive"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Positive', from the notes for Positive Negative Zero Coding Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-7-methods-in-java_speed-converter-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SpeedConverterCodingChallenge.java\"?\n\n___ class SpeedConverterCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_speed-converter-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "Which of the following statements about Speed Converter Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Methods In Java.",
        "Its source file is SpeedConverterCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for SpeedConverterCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_speed-converter-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"SpeedConverterCodingChallenge.java\".",
      "code": "___ class SpeedConverterCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for SpeedConverterCodingChallenge.java.",
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
      "code": "            System.out.println(\"Invalid Value\");\r",
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
      "modelAnswer": "Write a method called toMilesPerHour that has 1 parameter of type double with the name kilometersPerHour. This method needs to return the rounded value of the calculation of type long. If the parameter kilometersPerHour is less than 0, the method toMilesPerHour needs to return -1 to indicate an invalid value. @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "Write a method called toMilesPerHour that has 1 parameter of type double with the name kilometersPerHour. This method needs to return the rounded value of the calculation of type long.",
        "If the parameter kilometersPerHour is less than 0, the method toMilesPerHour needs to return -1 to indicate an invalid value.",
        "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
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
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius.",
        "Write a method called toMilesPerHour that has 1 parameter of type double with the name kilometersPerHour. This method needs to return the rounded value of the calculation of type long.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!"
      ],
      "answer": 2,
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
        "Write a method called toMilesPerHour that has 1 parameter of type double with the name kilometersPerHour. This method needs to return the rounded value of the calculation of type long.",
        "Otherwise, if it is positive, calculate the value of miles per hour, round it and return it. For conversion and rounding, check the notes in the text below.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius."
      ],
      "answer": [
        0,
        1,
        2
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
        "method",
        "Write",
        "Methods"
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
        "Otherwise, if it is positive, calculate the value of miles per hour, round it and return it. For conversion and rounding, check the notes in the text below.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Write a method named area with one double parameter named radius."
      ],
      "answer": 0,
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
        "int",
        "void",
        "String"
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"TeenNumberCheckerCodingChallenge.java\"?\n\n___ class TeenNumberCheckerCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-7-methods-in-java_teen-number-checker-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "Which of the following statements about Teen Number Checker Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Methods In Java.",
        "Its source file is TeenNumberCheckerCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for TeenNumberCheckerCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-7-methods-in-java_teen-number-checker-coding-challenge_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"TeenNumberCheckerCodingChallenge.java\".",
      "code": "___ class TeenNumberCheckerCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for TeenNumberCheckerCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-7-methods-in-java_teen-number-checker-coding-challenge_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Methods In Java - Teen Number Checker Coding Challenge\");",
      "answer": [
        "Methods In Java - Teen Number Checker Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-7-methods-in-java_teen-number-checker-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "Explain the main ideas in Teen Number Checker Coding Challenge.",
      "modelAnswer": "We'll say that a number is \"teen\" if it is in the range 13 -19 (inclusive). Write a method named hasTeen with 3 parameters of type int. @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "keyPoints": [
        "We'll say that a number is \"teen\" if it is in the range 13 -19 (inclusive).",
        "Write a method named hasTeen with 3 parameters of type int.",
        "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped."
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
        "Write a method named area with one double parameter named radius.",
        "We'll say that a number is \"teen\" if it is in the range 13 -19 (inclusive).",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed."
      ],
      "answer": 1,
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
        "Write a method named area with one double parameter named radius.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "We'll say that a number is \"teen\" if it is in the range 13 -19 (inclusive).",
        "The method should return boolean and it needs to return true if one of the parameters is in range 13(inclusive) - 19 (inclusive). Otherwise return false.",
        "Write a method named hasTeen with 3 parameters of type int."
      ],
      "answer": [
        2,
        3,
        4
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
        "method",
        "number",
        "Method",
        "Methods"
      ],
      "answer": 1,
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
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method named area with one double parameter named radius."
      ],
      "answer": 0,
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
        "int",
        "void",
        "boolean",
        "String"
      ],
      "answer": 2,
      "explanation": "The method hasTeen() is declared with return type 'boolean' in TeenNumberCheckerCodingChallenge.java.",
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"SwitchStatementInJava.java\"?\n\n___ class SwitchStatementInJava {",
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
      "type": "mcq",
      "qid": "chapter-8-switch-statements_switch-statement-in-java_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "question": "Which of the following statements about Switch Statement In Java are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Switch Statements.",
        "Its source file is SwitchStatementInJava.java.",
        "This topic has 12 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for SwitchStatementInJava.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-8-switch-statements_switch-statement-in-java_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "question": "Complete the missing keyword in this snippet from \"SwitchStatementInJava.java\".",
      "code": "___ class SwitchStatementInJava {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for SwitchStatementInJava.java.",
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
      "code": "// Multiple case labels can share the same code block: case 1: case 2: case 3: System.out.println(\"1, 2 or 3\");",
      "answer": [
        "1, 2 or 3"
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
      "modelAnswer": "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values. Switch is cleaner and more readable than nested if-else when you have many possible values to test. Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive.",
      "keyPoints": [
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "Switch is cleaner and more readable than nested if-else when you have many possible values to test.",
        "Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-in-java_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "question": "Which statement best describes Switch Statement In Java?",
      "options": [
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "Write a method called printNumberInWord.",
        "Write a method isLeapYear with a parameter of type int named year.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14."
      ],
      "answer": 0,
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
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "switch can be used with: byte, short, char, int (primitives), and String (since Java 7), as well as enum types.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "Switch is cleaner and more readable than nested if-else when you have many possible values to test.",
        "Write a method isLeapYear with a parameter of type int named year."
      ],
      "answer": [
        0,
        1,
        3
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
        "enhanced",
        "switch",
        "arrow",
        "Traditional"
      ],
      "answer": 1,
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
        "boolean",
        "String",
        "void"
      ],
      "answer": 2,
      "explanation": "The method getQuarter() is declared with return type 'String' in SwitchStatementInJava.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_enhanced-switch-statement-in-java_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "Which Java keyword correctly fills in the blank in this code from \"EnhancedSwitchStatementInJava.java\"?\n\n___ class EnhancedSwitchStatementInJava {",
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
      "type": "mcq",
      "qid": "chapter-8-switch-statements_enhanced-switch-statement-in-java_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "Which of the following statements about Enhanced Switch Statement In Java are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Switch Statements.",
        "Its source file is EnhancedSwitchStatementInJava.java.",
        "This topic has 7 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for EnhancedSwitchStatementInJava.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-8-switch-statements_enhanced-switch-statement-in-java_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "Complete the missing keyword in this snippet from \"EnhancedSwitchStatementInJava.java\".",
      "code": "___ class EnhancedSwitchStatementInJava {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for EnhancedSwitchStatementInJava.java.",
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
      "code": "                System.out.println(\"Value is 1\");\r",
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
      "modelAnswer": "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14. It uses the arrow (->) syntax instead of colon (:), eliminating fall-through by design — no 'break' needed. Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive.",
      "keyPoints": [
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "It uses the arrow (->) syntax instead of colon (:), eliminating fall-through by design — no 'break' needed.",
        "Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_enhanced-switch-statement-in-java_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "Which statement best describes Enhanced Switch Statement In Java?",
      "options": [
        "Write a method called printNumberInWord.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "Write a method isLeapYear with a parameter of type int named year.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values."
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
        "Write a method isLeapYear with a parameter of type int named year.",
        "It uses the arrow (->) syntax instead of colon (:), eliminating fall-through by design — no 'break' needed.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "Traditional switch: case 1: ... break;   Enhanced switch: case 1 -> ..."
      ],
      "answer": [
        1,
        2,
        4
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
        "short",
        "Switch",
        "switch",
        "enhanced"
      ],
      "answer": 3,
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
        "String",
        "boolean",
        "void",
        "int"
      ],
      "answer": 0,
      "explanation": "The method getQuarter() is declared with return type 'String' in EnhancedSwitchStatementInJava.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_number-of-days-in-a-month-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"NumberOfDaysInAMonthCodingChallenge.java\"?\n\nIf the parameter is not in that range ___ false.",
      "options": [
        "return",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-8-switch-statements_number-of-days-in-a-month-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "Which of the following statements about Number Of Days In A Month Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Switch Statements.",
        "Its source file is NumberOfDaysInAMonthCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for NumberOfDaysInAMonthCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-8-switch-statements_number-of-days-in-a-month-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"NumberOfDaysInAMonthCodingChallenge.java\".",
      "code": "        If the parameter is not in that range ___ false.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for NumberOfDaysInAMonthCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-8-switch-statements_number-of-days-in-a-month-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Switch Statements - Number Of Days In A Month Coding Challenge\");",
      "answer": [
        "Switch Statements - Number Of Days In A Month Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-8-switch-statements_number-of-days-in-a-month-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "Explain the main ideas in Number Of Days In A Month Coding Challenge.",
      "modelAnswer": "Write a method isLeapYear with a parameter of type int named year. The parameter needs to be greater than or equal to 1 and less than or equal to 9999. Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive.",
      "keyPoints": [
        "Write a method isLeapYear with a parameter of type int named year.",
        "The parameter needs to be greater than or equal to 1 and less than or equal to 9999.",
        "Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive."
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
        "Write a method isLeapYear with a parameter of type int named year.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "Write a method called printNumberInWord.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values."
      ],
      "answer": 0,
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
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "If the parameter is not in that range return false.",
        "The parameter needs to be greater than or equal to 1 and less than or equal to 9999.",
        "Write a method isLeapYear with a parameter of type int named year."
      ],
      "answer": [
        2,
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
        "short",
        "Write",
        "Switch",
        "switch"
      ],
      "answer": 1,
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
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "NOTE:  The solution to the Leap Year coding exercise earlier in the course created the isLeapYear method. You can use that solution if you wish.",
        "Write a method called printNumberInWord.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values."
      ],
      "answer": 1,
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
        "int",
        "void",
        "boolean",
        "String"
      ],
      "answer": 2,
      "explanation": "The method isLeapYear() is declared with return type 'boolean' in NumberOfDaysInAMonthCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_print-number-in-a-world-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Print Number In A World Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PrintNumberInAWorldCodingChallenge.java\"?\n\n___ class PrintNumberInAWorldCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-8-switch-statements_print-number-in-a-world-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Print Number In A World Coding Challenge",
      "question": "Which of the following statements about Print Number In A World Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Switch Statements.",
        "Its source file is PrintNumberInAWorldCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for PrintNumberInAWorldCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-8-switch-statements_print-number-in-a-world-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Print Number In A World Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"PrintNumberInAWorldCodingChallenge.java\".",
      "code": "___ class PrintNumberInAWorldCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for PrintNumberInAWorldCodingChallenge.java.",
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
      "code": "System.out.println(\"Switch Statements - Print Number In A World Coding Challenge\");",
      "answer": [
        "Switch Statements - Print Number In A World Coding Challenge"
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
      "modelAnswer": "Write a method called printNumberInWord. The method has one parameter number which is the whole number. Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive.",
      "keyPoints": [
        "Write a method called printNumberInWord.",
        "The method has one parameter number which is the whole number.",
        "Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive."
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
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "The method has one parameter number which is the whole number.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "Write a method called printNumberInWord.",
        "The method needs to print \"ZERO\", \"ONE\", \"TWO\", ... \"NINE\", \"OTHER\" if the int parameter number is 0, 1, 2, .... 9 or other for any other number including negative numbers."
      ],
      "answer": [
        1,
        3,
        4
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
        "short",
        "switch",
        "Write",
        "Switch"
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
        "void",
        "int",
        "String",
        "boolean"
      ],
      "answer": 2,
      "explanation": "The method returnNumberInAWordUsingTraditionalSwitch() is declared with return type 'String' in PrintNumberInAWorldCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SwitchStatementChallenge.java\"?\n\n___ class SwitchStatementChallenge {",
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
      "type": "mcq",
      "qid": "chapter-8-switch-statements_switch-statement-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge",
      "question": "Which of the following statements about Switch Statement Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Switch Statements.",
        "Its source file is SwitchStatementChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for SwitchStatementChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-8-switch-statements_switch-statement-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge",
      "question": "Complete the missing keyword in this snippet from \"SwitchStatementChallenge.java\".",
      "code": "___ class SwitchStatementChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for SwitchStatementChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-8-switch-statements_switch-statement-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge",
      "question": "What does this code print?",
      "code": "                System.out.println(\"A is found\");\r",
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
      "modelAnswer": "Create a new switch statement using char instead of int. Create a new char variable Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive.",
      "keyPoints": [
        "Create a new switch statement using char instead of int.",
        "Create a new char variable",
        "Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive."
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
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "Write a method isLeapYear with a parameter of type int named year.",
        "Create a new switch statement using char instead of int."
      ],
      "answer": 3,
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
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "Create a switch statement testing for",
        "Create a new char variable"
      ],
      "answer": [
        0,
        3,
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
        "Switch",
        "short",
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"SwitchStatementChallengeReturnDayOfTheWeek.java\"?\n\ncall ___ method for the values 0 through 7.",
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
      "type": "mcq",
      "qid": "chapter-8-switch-statements_switch-statement-challenge-return-day-of-the-week_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge Return Day Of The Week",
      "question": "Which of the following statements about Switch Statement Challenge Return Day Of The Week are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Switch Statements.",
        "Its source file is SwitchStatementChallengeReturnDayOfTheWeek.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for SwitchStatementChallengeReturnDayOfTheWeek.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-8-switch-statements_switch-statement-challenge-return-day-of-the-week_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge Return Day Of The Week",
      "question": "Complete the missing keyword in this snippet from \"SwitchStatementChallengeReturnDayOfTheWeek.java\".",
      "code": "   call ___ method for the values 0 through 7.\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for SwitchStatementChallengeReturnDayOfTheWeek.java.",
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
      "code": "System.out.println(\"Switch Statements - Switch Statement Challenge Return Day Of The Week\");",
      "answer": [
        "Switch Statements - Switch Statement Challenge Return Day Of The Week"
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
      "modelAnswer": "Use the enhanced switch statement as an expression, returning the result to a String named dayOfTheWeek. Print both the day variable  and the dayOfTheWeek variable. In the main method, call this method for the values 0 through 7. Challenge Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive.",
      "keyPoints": [
        "Use the enhanced switch statement as an expression, returning the result to a String named dayOfTheWeek. Print both the day variable  and the dayOfTheWeek variable. In the main method, call this method for the values 0 through 7.",
        "Challenge",
        "Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive."
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
        "Use the enhanced switch statement as an expression, returning the result to a String named dayOfTheWeek. Print both the day variable  and the dayOfTheWeek variable. In the main method, call this method for the values 0 through 7.",
        "Write a method isLeapYear with a parameter of type int named year.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14."
      ],
      "answer": 0,
      "explanation": "This is drawn directly from the notes for Switch Statement Challenge Return Day Of The Week.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-8-switch-statements_switch-statement-challenge-return-day-of-the-week_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge Return Day Of The Week",
      "question": "Which of the following are TRUE about Switch Statement Challenge Return Day Of The Week? Select all that apply.",
      "options": [
        "Use the enhanced switch statement as an expression, returning the result to a String named dayOfTheWeek. Print both the day variable  and the dayOfTheWeek variable. In the main method, call this method for the values 0 through 7.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "1. Create a method called printDaysOfWeek, that takes an int parameter called day, but doesn't return any value",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14."
      ],
      "answer": [
        0,
        2
      ],
      "explanation": "The true statements are taken directly from the notes for Switch Statement Challenge Return Day Of The Week.",
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
        "switch",
        "enhanced",
        "short"
      ],
      "answer": 2,
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
        "int",
        "String",
        "boolean",
        "void"
      ],
      "answer": 1,
      "explanation": "The method returnDayOfWeek() is declared with return type 'String' in SwitchStatementChallengeReturnDayOfTheWeek.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-8-switch-statements_switch-statement-n-a-t-o-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement N A T O Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SwitchStatementNATOChallenge.java\"?\n\n___ class SwitchStatementNATOChallenge {",
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
      "type": "mcq",
      "qid": "chapter-8-switch-statements_switch-statement-n-a-t-o-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement N A T O Challenge",
      "question": "Which of the following statements about Switch Statement N A T O Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Switch Statements.",
        "Its source file is SwitchStatementNATOChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for SwitchStatementNATOChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-8-switch-statements_switch-statement-n-a-t-o-challenge_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement N A T O Challenge",
      "question": "Complete the missing keyword in this snippet from \"SwitchStatementNATOChallenge.java\".",
      "code": "___ class SwitchStatementNATOChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for SwitchStatementNATOChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-8-switch-statements_switch-statement-n-a-t-o-challenge_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement N A T O Challenge",
      "question": "What does this code print?",
      "code": "                System.out.println(\"A is Able\");\r",
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
      "modelAnswer": "In this challenge, we'll be using the NATO alphabet to replace a character or letter,with NATO's standardized word for that letter. 1) Create a new char variable. Use the traditional switch statement (with a colon in case labels)  that tests the value in the variable from Step 1. Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive.",
      "keyPoints": [
        "In this challenge, we'll be using the NATO alphabet to replace a character or letter,with NATO's standardized word for that letter.",
        "1) Create a new char variable. Use the traditional switch statement (with a colon in case labels)  that tests the value in the variable from Step 1.",
        "Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive."
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
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.",
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "Write a method isLeapYear with a parameter of type int named year.",
        "In this challenge, we'll be using the NATO alphabet to replace a character or letter,with NATO's standardized word for that letter."
      ],
      "answer": 3,
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
        "The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.",
        "2) Create cases for the characters, A, B, C, D, and E. Display a message in each case block,with the letter and the NATO word, then break.",
        "In this challenge, we'll be using the NATO alphabet to replace a character or letter,with NATO's standardized word for that letter.",
        "1) Create a new char variable. Use the traditional switch statement (with a colon in case labels)  that tests the value in the variable from Step 1.",
        "The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14."
      ],
      "answer": [
        1,
        2,
        3
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
        "switch",
        "challenge",
        "short",
        "Switch"
      ],
      "answer": 1,
      "explanation": "The missing word is 'challenge', from the notes for Switch Statement N A T O Challenge.",
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"ForStatement.java\"?\n\ncode in a loop, and start a ___ iteration. A continue statement is a good way to continue to execute iterations of your code, but perhaps skip code for certain elements,",
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
      "type": "mcq",
      "qid": "chapter-9-java-looping-concepts_for-statement_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "question": "Which of the following statements about For Statement are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Java Looping Concepts.",
        "Its source file is ForStatement.java.",
        "This topic has 1 inline annotation.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for ForStatement.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-9-java-looping-concepts_for-statement_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "question": "Complete the missing keyword in this snippet from \"ForStatement.java\".",
      "code": "   code in a loop, and start a ___ iteration. A continue statement is a good way to continue to execute iterations of your code, but perhaps skip code for certain elements,\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for ForStatement.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-9-java-looping-concepts_for-statement_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "question": "What does this code print?",
      "code": "System.out.println(\"Java Looping Concepts - For Statement\");",
      "answer": [
        "Java Looping Concepts - For Statement"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-9-java-looping-concepts_for-statement_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "question": "Explain the main ideas in For Statement.",
      "modelAnswer": "Looping :- Looping let us execute the code multiple number of times Java supports several statements for looping, or executing code repetitively for -->   The for loop is more complex to set up but is commonly used when you are iterating over set of values while --> The while loop executes until a specified condition becomes false do while --> The do while loop always executes at least one and continues until specified condition becomes false Always be aware of scope, type constraints, and compiler rules in this area.",
      "keyPoints": [
        "Looping :- Looping let us execute the code multiple number of times",
        "Java supports several statements for looping, or executing code repetitively for -->   The for loop is more complex to set up but is commonly used when you are iterating over set of values while --> The while loop executes until a specified condition becomes false do while --> The do while loop always executes at least one and continues until specified condition becomes false",
        "Always be aware of scope, type constraints, and compiler rules in this area."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_for-statement_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "question": "Which statement best describes For Statement?",
      "options": [
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.",
        "Looping :- Looping let us execute the code multiple number of times"
      ],
      "answer": 3,
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
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Java supports several statements for looping, or executing code repetitively for -->   The for loop is more complex to set up but is commonly used when you are iterating over set of values while --> The while loop executes until a specified condition becomes false do while --> The do while loop always executes at least one and continues until specified condition becomes false",
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "Looping :- Looping let us execute the code multiple number of times",
        "The for statement is often referred to as the for loop"
      ],
      "answer": [
        1,
        3,
        4
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
        "Looping",
        "Create",
        "number",
        "statement"
      ],
      "answer": 0,
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
        "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.",
        "Java supports several statements for looping, or executing code repetitively for -->   The for loop is more complex to set up but is commonly used when you are iterating over set of values while --> The while loop executes until a specified condition becomes false do while --> The do while loop always executes at least one and continues until specified condition becomes false",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5."
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
        "void",
        "int",
        "String",
        "double"
      ],
      "answer": 3,
      "explanation": "The method calculateInterest() is declared with return type 'double' in ForStatement.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_for-loop-prime-number-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Prime Number Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ForLoopPrimeNumberChallenge.java\"?\n\n___ class ForLoopPrimeNumberChallenge {",
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
      "type": "mcq",
      "qid": "chapter-9-java-looping-concepts_for-loop-prime-number-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Prime Number Challenge",
      "question": "Which of the following statements about For Loop Prime Number Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Java Looping Concepts.",
        "Its source file is ForLoopPrimeNumberChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for ForLoopPrimeNumberChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-9-java-looping-concepts_for-loop-prime-number-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Prime Number Challenge",
      "question": "Complete the missing keyword in this snippet from \"ForLoopPrimeNumberChallenge.java\".",
      "code": "___ class ForLoopPrimeNumberChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ForLoopPrimeNumberChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-9-java-looping-concepts_for-loop-prime-number-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Prime Number Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Java Looping Concepts - For Loop Prime Number Challenge\");",
      "answer": [
        "Java Looping Concepts - For Loop Prime Number Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-9-java-looping-concepts_for-loop-prime-number-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Prime Number Challenge",
      "question": "Explain the main ideas in For Loop Prime Number Challenge.",
      "modelAnswer": "Create a prime number counter variable, that will keep count of how many prime numbers were found. Create a for statement, using any range of numbers, where the maximum number is <= 1000. Always be aware of scope, type constraints, and compiler rules in this area.",
      "keyPoints": [
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Create a for statement, using any range of numbers, where the maximum number is <= 1000.",
        "Always be aware of scope, type constraints, and compiler rules in this area."
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
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.",
        "Looping :- Looping let us execute the code multiple number of times"
      ],
      "answer": 1,
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
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Create a for statement, using any range of numbers, where the maximum number is <= 1000.",
        "For each number in the range: Check to see if it's a prime number using the isPrime method. If the number is prime, print it out and increment the prime number counter variable. Once the prime number counter equals three, exit the loop (Hint, use the break statement to exit). Your challenge is to create a for statement, using any range of numbers, to determine if the numbers, are prime numbers.",
        "Looping :- Looping let us execute the code multiple number of times"
      ],
      "answer": [
        1,
        2,
        3
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
        "supports",
        "Looping",
        "Create",
        "statement"
      ],
      "answer": 2,
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
        "void",
        "int",
        "String",
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
      "type": "mcq",
      "qid": "chapter-9-java-looping-concepts_for-loop-sum3and5-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Sum3and5 Challenge",
      "question": "Which of the following statements about For Loop Sum3and5 Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Java Looping Concepts.",
        "Its source file is ForLoopSum3and5Challenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for ForLoopSum3and5Challenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-9-java-looping-concepts_for-loop-sum3and5-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Sum3and5 Challenge",
      "question": "Complete the missing keyword in this snippet from \"ForLoopSum3and5Challenge.java\".",
      "code": "___ class ForLoopSum3and5Challenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ForLoopSum3and5Challenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-9-java-looping-concepts_for-loop-sum3and5-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Sum3and5 Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Java Looping Concepts - For Loop Sum3and5 Challenge\");",
      "answer": [
        "Java Looping Concepts - For Loop Sum3and5 Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-9-java-looping-concepts_for-loop-sum3and5-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Sum3and5 Challenge",
      "question": "Explain the main ideas in For Loop Sum3and5 Challenge.",
      "modelAnswer": "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5. And for those numbers, that meet the above conditions, in other words, that are found to be divisible by both 3, and also divisible by 5, you want to print out that number. Always be aware of scope, type constraints, and compiler rules in this area.",
      "keyPoints": [
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "And for those numbers, that meet the above conditions, in other words, that are found to be divisible by both 3, and also divisible by 5, you want to print out that number.",
        "Always be aware of scope, type constraints, and compiler rules in this area."
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
        "Looping :- Looping let us execute the code multiple number of times",
        "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.",
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
        "And for those numbers, that meet the above conditions, in other words, that are found to be divisible by both 3, and also divisible by 5, you want to print out that number.",
        "Looping :- Looping let us execute the code multiple number of times",
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5.",
        "You also want to break out of the loop, once you find five numbers, that meet those above conditions.",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found."
      ],
      "answer": [
        0,
        2,
        3
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
        "statement",
        "supports",
        "challenge"
      ],
      "answer": 3,
      "explanation": "The missing word is 'challenge', from the notes for For Loop Sum3and5 Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-9-java-looping-concepts_sum-odd-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Sum Odd Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SumOddChallenge.java\"?\n\nWrite a method called isOdd with an int parameter and call it number. The method needs to ___ a boolean.",
      "options": [
        "return",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-9-java-looping-concepts_sum-odd-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Sum Odd Challenge",
      "question": "Which of the following statements about Sum Odd Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Java Looping Concepts.",
        "Its source file is SumOddChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for SumOddChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-9-java-looping-concepts_sum-odd-challenge_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Sum Odd Challenge",
      "question": "Complete the missing keyword in this snippet from \"SumOddChallenge.java\".",
      "code": "Write a method called isOdd with an int parameter and call it number. The method needs to ___ a boolean.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for SumOddChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-9-java-looping-concepts_sum-odd-challenge_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Sum Odd Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Java Looping Concepts - Sum Odd Challenge\");",
      "answer": [
        "Java Looping Concepts - Sum Odd Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-9-java-looping-concepts_sum-odd-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Sum Odd Challenge",
      "question": "Explain the main ideas in Sum Odd Challenge.",
      "modelAnswer": "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean. Check that number is > 0, if it is not return false. Always be aware of scope, type constraints, and compiler rules in this area.",
      "keyPoints": [
        "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.",
        "Check that number is > 0, if it is not return false.",
        "Always be aware of scope, type constraints, and compiler rules in this area."
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
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "Looping :- Looping let us execute the code multiple number of times",
        "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.",
        "This is the sum 3 and 5 challenge. So the challenge is to create a for statement, using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers, when you're looping through, that can be divided with both the number 3, and also with 5."
      ],
      "answer": 2,
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
        "Looping :- Looping let us execute the code multiple number of times",
        "Check that number is > 0, if it is not return false.",
        "Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.",
        "Create a prime number counter variable, that will keep count of how many prime numbers were found.",
        "If number is odd return true, otherwise return false."
      ],
      "answer": [
        1,
        2,
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
        "Looping",
        "Write",
        "statement",
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
        "String",
        "int",
        "void"
      ],
      "answer": 0,
      "explanation": "The method isOdd() is declared with return type 'boolean' in SumOddChallenge.java.",
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
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loops_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "question": "Which of the following statements about While Loops are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is WhileLoops.java.",
        "This topic has 9 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for WhileLoops.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loops_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "question": "Complete the missing keyword in this snippet from \"WhileLoops.java\".",
      "code": "___ class WhileLoops {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for WhileLoops.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loops_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - While Loops\");",
      "answer": [
        "While And Do While Looping Concepts - While Loops"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loops_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "question": "Explain the main ideas in While Loops.",
      "modelAnswer": "WHILE LOOPS The while loop repeatedly executes its body as long as a condition remains true. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "WHILE LOOPS",
        "The while loop repeatedly executes its body as long as a condition remains true.",
        "IMPORTANT: Always check your loop condition carefully."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
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
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "WHILE LOOPS",
        "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int."
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
        "The while loop repeatedly executes its body as long as a condition remains true.",
        "Unlike the for loop, the while loop does NOT have a built-in initialisation or update step in its declaration.",
        "Number Palindrome",
        "WHILE LOOPS",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": [
        0,
        1,
        3
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
        "makes",
        "dowhile",
        "regular",
        "while"
      ],
      "answer": 3,
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
        "Number Palindrome",
        "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int.",
        "IMPORTANT: Always check your loop condition carefully.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": 2,
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
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_do-while-loops_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "question": "Which of the following statements about Do While Loops are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is DoWhileLoops.java.",
        "This topic has 5 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for DoWhileLoops.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_do-while-loops_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "question": "Complete the missing keyword in this snippet from \"DoWhileLoops.java\".",
      "code": "___ class DoWhileLoops {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for DoWhileLoops.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_do-while-loops_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Do While Loops\");",
      "answer": [
        "While And Do While Looping Concepts - Do While Loops"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_do-while-loops_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "question": "Explain the main ideas in Do While Loops.",
      "modelAnswer": "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once. In a regular while loop, if the condition is false from the start, the body NEVER runs. In a do-while, the body runs first, THEN the condition is checked. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "In a regular while loop, if the condition is false from the start, the body NEVER runs. In a do-while, the body runs first, THEN the condition is checked.",
        "IMPORTANT: Always check your loop condition carefully."
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
        "This makes do-while ideal for situations like \"ask the user for input at least once, then keep asking if the input is invalid.\"",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "In a regular while loop, if the condition is false from the start, the body NEVER runs. In a do-while, the body runs first, THEN the condition is checked.",
        "WHILE LOOPS",
        "Number Palindrome"
      ],
      "answer": [
        0,
        1,
        2
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
        "WHILE",
        "regular",
        "while",
        "Unlike"
      ],
      "answer": 1,
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
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Number Palindrome",
        "WHILE LOOPS",
        "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int."
      ],
      "answer": 0,
      "explanation": "This is a key gotcha or note taken directly from the source for Do While Loops.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_check-number-palindrome-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Check Number Palindrome Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"CheckNumberPalindromeCodingChallenge.java\"?\n\nThe method needs to ___ a boolean.",
      "options": [
        "return",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_check-number-palindrome-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Check Number Palindrome Coding Challenge",
      "question": "Which of the following statements about Check Number Palindrome Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is CheckNumberPalindromeCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for CheckNumberPalindromeCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_check-number-palindrome-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Check Number Palindrome Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"CheckNumberPalindromeCodingChallenge.java\".",
      "code": "The method needs to ___ a boolean.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for CheckNumberPalindromeCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_check-number-palindrome-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Check Number Palindrome Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Check Number Palindrome Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Check Number Palindrome Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_check-number-palindrome-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Check Number Palindrome Coding Challenge",
      "question": "Explain the main ideas in Check Number Palindrome Coding Challenge.",
      "modelAnswer": "Number Palindrome Write a method called isPalindrome with one int parameter called number. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "Number Palindrome",
        "Write a method called isPalindrome with one int parameter called number.",
        "IMPORTANT: Always check your loop condition carefully."
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
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int.",
        "Number Palindrome",
        "WHILE LOOPS"
      ],
      "answer": 2,
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
        "Write a method called isPalindrome with one int parameter called number.",
        "The method needs to return a boolean.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Number Palindrome",
        "WHILE LOOPS"
      ],
      "answer": [
        0,
        1,
        3
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
        "Number",
        "WHILE",
        "Unlike",
        "while"
      ],
      "answer": 0,
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
        "int",
        "boolean",
        "void",
        "String"
      ],
      "answer": 1,
      "explanation": "The method checkIfNumberIsPalindrome() is declared with return type 'boolean' in CheckNumberPalindromeCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_digit-sum-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Digit Sum Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"DigitSumCodingChallenge.java\"?\n\nhas a single parameter named number, of type int, and it should ___ an int.",
      "options": [
        "return",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_digit-sum-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Digit Sum Coding Challenge",
      "question": "Which of the following statements about Digit Sum Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is DigitSumCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for DigitSumCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_digit-sum-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Digit Sum Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"DigitSumCodingChallenge.java\".",
      "code": "has a single parameter named number, of type int, and it should ___ an int.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for DigitSumCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_digit-sum-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Digit Sum Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Digit Sum Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Digit Sum Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_digit-sum-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Digit Sum Coding Challenge",
      "question": "Explain the main ideas in Digit Sum Coding Challenge.",
      "modelAnswer": "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int. The method should only take a number that is a positive number. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int.",
        "The method should only take a number that is a positive number.",
        "IMPORTANT: Always check your loop condition carefully."
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
        "Number Palindrome",
        "WHILE LOOPS"
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
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "If a negative number is passed, it should return -1, meaning, an invalid value was passed."
      ],
      "answer": [
        0,
        2,
        4
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
        "while",
        "Unlike",
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
        "boolean",
        "String",
        "void",
        "int"
      ],
      "answer": 3,
      "explanation": "The method sumDigits() is declared with return type 'int' in DigitSumCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_even-digit-sum-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Even Digit Sum Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"EvenDigitSumCodingChallenge.java\"?\n\nThe method should ___ the sum of the even digits within the number.",
      "options": [
        "return",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_even-digit-sum-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Even Digit Sum Coding Challenge",
      "question": "Which of the following statements about Even Digit Sum Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is EvenDigitSumCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for EvenDigitSumCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_even-digit-sum-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Even Digit Sum Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"EvenDigitSumCodingChallenge.java\".",
      "code": "The method should ___ the sum of the even digits within the number.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for EvenDigitSumCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_even-digit-sum-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Even Digit Sum Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Even Digit Sum Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Even Digit Sum Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_even-digit-sum-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Even Digit Sum Coding Challenge",
      "question": "Explain the main ideas in Even Digit Sum Coding Challenge.",
      "modelAnswer": "Even Digit Sum Write a method named getEvenDigitSum with one parameter of type int called number. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "Even Digit Sum",
        "Write a method named getEvenDigitSum with one parameter of type int called number.",
        "IMPORTANT: Always check your loop condition carefully."
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
        "Number Palindrome",
        "Even Digit Sum",
        "WHILE LOOPS",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": 1,
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
        "Write a method named getEvenDigitSum with one parameter of type int called number.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "WHILE LOOPS",
        "Even Digit Sum",
        "The method should return the sum of the even digits within the number."
      ],
      "answer": [
        0,
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
        "while",
        "Unlike",
        "WHILE"
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
        "boolean",
        "String",
        "void",
        "int"
      ],
      "answer": 3,
      "explanation": "The method getEvenDigitSum() is declared with return type 'int' in EvenDigitSumCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_factor-printer-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Factor Printer Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"FactorPrinterCodingChallenge.java\"?\n\n___ class  FactorPrinterCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_factor-printer-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Factor Printer Coding Challenge",
      "question": "Which of the following statements about Factor Printer Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is FactorPrinterCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for FactorPrinterCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_factor-printer-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Factor Printer Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"FactorPrinterCodingChallenge.java\".",
      "code": "___ class  FactorPrinterCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for FactorPrinterCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_factor-printer-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Factor Printer Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Factor Printer Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Factor Printer Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_factor-printer-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Factor Printer Coding Challenge",
      "question": "Explain the main ideas in Factor Printer Coding Challenge.",
      "modelAnswer": "Factor Printer Challenge: A factor of a number N is any integer that divides N with no remainder. For example, the factors of 32 are: 1, 2, 4, 8, 16, 32 — each divides 32 evenly. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "Factor Printer Challenge: A factor of a number N is any integer that divides N with no remainder.",
        "For example, the factors of 32 are: 1, 2, 4, 8, 16, 32 — each divides 32 evenly.",
        "IMPORTANT: Always check your loop condition carefully."
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
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Factor Printer Challenge: A factor of a number N is any integer that divides N with no remainder.",
        "Number Palindrome",
        "WHILE LOOPS"
      ],
      "answer": 1,
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
        "WHILE LOOPS",
        "Factor Printer Challenge: A factor of a number N is any integer that divides N with no remainder.",
        "For example, the factors of 32 are: 1, 2, 4, 8, 16, 32 — each divides 32 evenly.",
        "The approach uses a while loop counting from 1 to N, checking if number % counter == 0 (i.e., divisible with no remainder).",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": [
        1,
        2,
        3
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
        "WHILE",
        "while"
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"FirstAndLastDigitSumCodingChallenge.java\"?\n\nThe method needs to find the first and the last digit of the parameter number passed to the method, using a loop and ___ the sum of the first and the last digit of that number.",
      "options": [
        "return",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_first-and-last-digit-sum-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "First And Last Digit Sum Coding Challenge",
      "question": "Which of the following statements about First And Last Digit Sum Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is FirstAndLastDigitSumCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for FirstAndLastDigitSumCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_first-and-last-digit-sum-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "First And Last Digit Sum Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"FirstAndLastDigitSumCodingChallenge.java\".",
      "code": "The method needs to find the first and the last digit of the parameter number passed to the method, using a loop and ___ the sum of the first and the last digit of that number.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for FirstAndLastDigitSumCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_first-and-last-digit-sum-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "First And Last Digit Sum Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - First And Last Digit Sum Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - First And Last Digit Sum Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_first-and-last-digit-sum-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "First And Last Digit Sum Coding Challenge",
      "question": "Explain the main ideas in First And Last Digit Sum Coding Challenge.",
      "modelAnswer": "First And Last Digit Sum Write a method named sumFirstAndLastDigit with one parameter of type int called number. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "First And Last Digit Sum",
        "Write a method named sumFirstAndLastDigit with one parameter of type int called number.",
        "IMPORTANT: Always check your loop condition carefully."
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
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "WHILE LOOPS",
        "First And Last Digit Sum"
      ],
      "answer": 3,
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
        "The method needs to find the first and the last digit of the parameter number passed to the method, using a loop and return the sum of the first and the last digit of that number.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Write a method named sumFirstAndLastDigit with one parameter of type int called number.",
        "First And Last Digit Sum",
        "WHILE LOOPS"
      ],
      "answer": [
        0,
        2,
        3
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
        "while",
        "Unlike",
        "Digit",
        "WHILE"
      ],
      "answer": 2,
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
        "int",
        "String",
        "void"
      ],
      "answer": 1,
      "explanation": "The method sumFirstAndLastDigit() is declared with return type 'int' in FirstAndLastDigitSumCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_floor-pack-problem-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Floor Pack Problem Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"FloorPackProblemCodingChallenge.java\"?\n\nTherefore, the sum of the kilos of bigCount and smallCount must be at least equal to the value of goal. The method should ___ true if it is possible to make a package with goal kilos of flour.",
      "options": [
        "return",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_floor-pack-problem-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Floor Pack Problem Coding Challenge",
      "question": "Which of the following statements about Floor Pack Problem Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is FloorPackProblemCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for FloorPackProblemCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_floor-pack-problem-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Floor Pack Problem Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"FloorPackProblemCodingChallenge.java\".",
      "code": "Therefore, the sum of the kilos of bigCount and smallCount must be at least equal to the value of goal. The method should ___ true if it is possible to make a package with goal kilos of flour.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for FloorPackProblemCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_floor-pack-problem-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Floor Pack Problem Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Floor Pack Problem Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Floor Pack Problem Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_floor-pack-problem-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Floor Pack Problem Coding Challenge",
      "question": "Explain the main ideas in Floor Pack Problem Coding Challenge.",
      "modelAnswer": "Write a method named canPack with three parameters of type int named bigCount, smallCount, and goal. The parameter bigCount represents the count of big flour bags (5 kilos each). IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "Write a method named canPack with three parameters of type int named bigCount, smallCount, and goal.",
        "The parameter bigCount represents the count of big flour bags (5 kilos each).",
        "IMPORTANT: Always check your loop condition carefully."
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
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Write a method named canPack with three parameters of type int named bigCount, smallCount, and goal.",
        "Number Palindrome",
        "WHILE LOOPS"
      ],
      "answer": 1,
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
        "WHILE LOOPS",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Write a method named canPack with three parameters of type int named bigCount, smallCount, and goal.",
        "The parameter smallCount represents the count of small flour bags (1 kilo each)."
      ],
      "answer": [
        0,
        3,
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
        "Write",
        "WHILE",
        "while",
        "Unlike"
      ],
      "answer": 0,
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
        "boolean",
        "int",
        "String",
        "void"
      ],
      "answer": 0,
      "explanation": "The method canPack() is declared with return type 'boolean' in FloorPackProblemCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_greatest-common-divisor-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Greatest Common Divisor Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"GreatestCommonDivisorCodingChallenge.java\"?\n\n___ class GreatestCommonDivisorCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_greatest-common-divisor-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Greatest Common Divisor Coding Challenge",
      "question": "Which of the following statements about Greatest Common Divisor Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is GreatestCommonDivisorCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for GreatestCommonDivisorCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_greatest-common-divisor-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Greatest Common Divisor Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"GreatestCommonDivisorCodingChallenge.java\".",
      "code": "___ class GreatestCommonDivisorCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for GreatestCommonDivisorCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_greatest-common-divisor-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Greatest Common Divisor Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Greatest Common Divisor Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Greatest Common Divisor Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_greatest-common-divisor-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Greatest Common Divisor Coding Challenge",
      "question": "Explain the main ideas in Greatest Common Divisor Coding Challenge.",
      "modelAnswer": "Greatest Common Divisor (GCD) Challenge: the GCD of two numbers is the largest integer that divides both without a remainder. For example, GCD(81, 153) = 27, since 27 is the largest number that divides both 81 and 153 evenly. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "Greatest Common Divisor (GCD) Challenge: the GCD of two numbers is the largest integer that divides both without a remainder.",
        "For example, GCD(81, 153) = 27, since 27 is the largest number that divides both 81 and 153 evenly.",
        "IMPORTANT: Always check your loop condition carefully."
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
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "WHILE LOOPS",
        "Number Palindrome",
        "Greatest Common Divisor (GCD) Challenge: the GCD of two numbers is the largest integer that divides both without a remainder."
      ],
      "answer": 3,
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
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "For example, GCD(81, 153) = 27, since 27 is the largest number that divides both 81 and 153 evenly.",
        "The method iterates over all divisors of the smaller number and checks which ones also divide the larger number — the last common divisor found is the GCD.",
        "Greatest Common Divisor (GCD) Challenge: the GCD of two numbers is the largest integer that divides both without a remainder.",
        "WHILE LOOPS"
      ],
      "answer": [
        1,
        2,
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
        "Greatest",
        "while",
        "Unlike",
        "WHILE"
      ],
      "answer": 0,
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
        "int",
        "String",
        "boolean",
        "void"
      ],
      "answer": 0,
      "explanation": "The method getGreatestCommonDivisor() is declared with return type 'int' in GreatestCommonDivisorCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_largest-prime-factor-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Largest Prime Factor Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"LargestPrimeFactorCodingChallenge.java\"?\n\nIf the number is negative or does not have any prime numbers, the method should ___ -1 to indicate an invalid value.",
      "options": [
        "return",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_largest-prime-factor-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Largest Prime Factor Coding Challenge",
      "question": "Which of the following statements about Largest Prime Factor Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is LargestPrimeFactorCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for LargestPrimeFactorCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_largest-prime-factor-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Largest Prime Factor Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"LargestPrimeFactorCodingChallenge.java\".",
      "code": "If the number is negative or does not have any prime numbers, the method should ___ -1 to indicate an invalid value.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for LargestPrimeFactorCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_largest-prime-factor-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Largest Prime Factor Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Largest Prime Factor Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Largest Prime Factor Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_largest-prime-factor-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Largest Prime Factor Coding Challenge",
      "question": "Explain the main ideas in Largest Prime Factor Coding Challenge.",
      "modelAnswer": "Write a method named getLargestPrime with one parameter of type int named number. If the number is negative or does not have any prime numbers, the method should return -1 to indicate an invalid value. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "Write a method named getLargestPrime with one parameter of type int named number.",
        "If the number is negative or does not have any prime numbers, the method should return -1 to indicate an invalid value.",
        "IMPORTANT: Always check your loop condition carefully."
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
        "Number Palindrome",
        "Write a method named getLargestPrime with one parameter of type int named number.",
        "WHILE LOOPS",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": 1,
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
        "The method should calculate the largest prime factor of a given number and return it.",
        "If the number is negative or does not have any prime numbers, the method should return -1 to indicate an invalid value.",
        "Write a method named getLargestPrime with one parameter of type int named number.",
        "WHILE LOOPS",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": [
        0,
        1,
        2
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
        "WHILE",
        "while",
        "Write",
        "Unlike"
      ],
      "answer": 2,
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
        "void",
        "String",
        "int",
        "boolean"
      ],
      "answer": 2,
      "explanation": "The method getLargestPrime() is declared with return type 'int' in LargestPrimeFactorCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_last-digit-checker-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Last Digit Checker Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"LastDigitCheckerCodingChallenge.java\"?\n\nEach number should be within the range of 10 (inclusive) - 1000 (inclusive). If one of the numbers is not within the range, the method should ___ false.",
      "options": [
        "return",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_last-digit-checker-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Last Digit Checker Coding Challenge",
      "question": "Which of the following statements about Last Digit Checker Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is LastDigitCheckerCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for LastDigitCheckerCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_last-digit-checker-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Last Digit Checker Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"LastDigitCheckerCodingChallenge.java\".",
      "code": "Each number should be within the range of 10 (inclusive) - 1000 (inclusive). If one of the numbers is not within the range, the method should ___ false.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for LastDigitCheckerCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_last-digit-checker-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Last Digit Checker Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Last Digit Checker Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Last Digit Checker Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_last-digit-checker-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Last Digit Checker Coding Challenge",
      "question": "Explain the main ideas in Last Digit Checker Coding Challenge.",
      "modelAnswer": "Last Digit Checker Write a method named hasSameLastDigit with three parameters of type int. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "Last Digit Checker",
        "Write a method named hasSameLastDigit with three parameters of type int.",
        "IMPORTANT: Always check your loop condition carefully."
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
        "WHILE LOOPS",
        "Number Palindrome",
        "Last Digit Checker",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
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
        "Each number should be within the range of 10 (inclusive) - 1000 (inclusive). If one of the numbers is not within the range, the method should return false.",
        "Write a method named hasSameLastDigit with three parameters of type int.",
        "WHILE LOOPS",
        "Last Digit Checker",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": [
        0,
        1,
        3
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
        "WHILE",
        "Unlike",
        "while"
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
        "String",
        "int",
        "void",
        "boolean"
      ],
      "answer": 3,
      "explanation": "The method isValid() is declared with return type 'boolean' in LastDigitCheckerCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-to-words-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number To Words Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"NumberToWordsCodingChallenge.java\"?\n\n___ class NumberToWordsCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-to-words-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number To Words Coding Challenge",
      "question": "Which of the following statements about Number To Words Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is NumberToWordsCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for NumberToWordsCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_number-to-words-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number To Words Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"NumberToWordsCodingChallenge.java\".",
      "code": "___ class NumberToWordsCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for NumberToWordsCodingChallenge.java.",
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
      "code": "            System.out.println(\"Invalid Value\");\r",
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
      "modelAnswer": "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge. Review the class NumberToWordsCodingChallenge and understand its key responsibilities. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.",
        "Review the class NumberToWordsCodingChallenge and understand its key responsibilities.",
        "IMPORTANT: Always check your loop condition carefully."
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
        "WHILE LOOPS",
        "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.",
        "Number Palindrome",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": 1,
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
        "This example defines 3 methods; trace method behavior step by step.",
        "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.",
        "WHILE LOOPS",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Review the class NumberToWordsCodingChallenge and understand its key responsibilities."
      ],
      "answer": [
        0,
        1,
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
        "WHILE",
        "while",
        "Unlike",
        "topic"
      ],
      "answer": 3,
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
        "boolean",
        "int",
        "String",
        "void"
      ],
      "answer": 1,
      "explanation": "The method getDigitCount() is declared with return type 'int' in NumberToWordsCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_perfect-number-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Perfect Number Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PerfectNumberCodingChallenge.java\"?\n\n___ class PerfectNumberCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_perfect-number-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Perfect Number Coding Challenge",
      "question": "Which of the following statements about Perfect Number Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is PerfectNumberCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for PerfectNumberCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_perfect-number-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Perfect Number Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"PerfectNumberCodingChallenge.java\".",
      "code": "___ class PerfectNumberCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for PerfectNumberCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_perfect-number-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Perfect Number Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Perfect Number Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Perfect Number Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_perfect-number-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Perfect Number Coding Challenge",
      "question": "Explain the main ideas in Perfect Number Coding Challenge.",
      "modelAnswer": "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge. Review the class PerfectNumberCodingChallenge and understand its key responsibilities. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.",
        "Review the class PerfectNumberCodingChallenge and understand its key responsibilities.",
        "IMPORTANT: Always check your loop condition carefully."
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
        "Number Palindrome",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.",
        "WHILE LOOPS"
      ],
      "answer": 2,
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
        "This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "This example defines 2 methods; trace method behavior step by step.",
        "Review the class PerfectNumberCodingChallenge and understand its key responsibilities.",
        "WHILE LOOPS"
      ],
      "answer": [
        0,
        2,
        3
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
        "Unlike",
        "topic",
        "while",
        "WHILE"
      ],
      "answer": 1,
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
        "boolean",
        "String",
        "int",
        "void"
      ],
      "answer": 0,
      "explanation": "The method isPerfectNumber() is declared with return type 'boolean' in PerfectNumberCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_shared-digit-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Shared Digit Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SharedDigitCodingChallenge.java\"?\n\nEach number should be within the range of 10 (inclusive) - 99 (inclusive). If one of the numbers is not within the range, the method should ___ false.",
      "options": [
        "return",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_shared-digit-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Shared Digit Coding Challenge",
      "question": "Which of the following statements about Shared Digit Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is SharedDigitCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for SharedDigitCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_shared-digit-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Shared Digit Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"SharedDigitCodingChallenge.java\".",
      "code": "Each number should be within the range of 10 (inclusive) - 99 (inclusive). If one of the numbers is not within the range, the method should ___ false.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for SharedDigitCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_shared-digit-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Shared Digit Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Shared Digit Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Shared Digit Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_shared-digit-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Shared Digit Coding Challenge",
      "question": "Explain the main ideas in Shared Digit Coding Challenge.",
      "modelAnswer": "Shared Digit Write a method named hasSharedDigit with two parameters of type int. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "Shared Digit",
        "Write a method named hasSharedDigit with two parameters of type int.",
        "IMPORTANT: Always check your loop condition carefully."
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
        "WHILE LOOPS",
        "Shared Digit"
      ],
      "answer": 3,
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
        "WHILE LOOPS",
        "Each number should be within the range of 10 (inclusive) - 99 (inclusive). If one of the numbers is not within the range, the method should return false.",
        "Write a method named hasSharedDigit with two parameters of type int.",
        "Shared Digit"
      ],
      "answer": [
        2,
        3,
        4
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
        "Write",
        "while",
        "Unlike",
        "WHILE"
      ],
      "answer": 0,
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
        "String",
        "void",
        "boolean",
        "int"
      ],
      "answer": 2,
      "explanation": "The method hasSharedDigit() is declared with return type 'boolean' in SharedDigitCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"WhileLoopCodingChallenge.java\"?\n\neven number; otherwise, ___ false. Next, use a while loop to test a range",
      "options": [
        "return",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge",
      "question": "Which of the following statements about While Loop Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is WhileLoopCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for WhileLoopCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"WhileLoopCodingChallenge.java\".",
      "code": "  even number; otherwise, ___ false. Next, use a while loop to test a range\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for WhileLoopCodingChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - While Loop Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - While Loop Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge",
      "question": "Explain the main ideas in While Loop Coding Challenge.",
      "modelAnswer": "Create a method called isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed to the method is an even number or not. Return true from the method if it's an even number; otherwise, return false. Next, use a while loop to test a range of numbers from 5 up to and including 20, but printing out only the even numbers determined by the call to the isEvenNumber method. Okay, so the challenge is to create a method called isEvenNumber, and it takes a parameter of type int. The purpose of the method is to determine whether the argument that's been passed to the method, the int, in other words, is an even number or not. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "Create a method called isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed to the method is an even number or not. Return true from the method if it's an even number; otherwise, return false. Next, use a while loop to test a range of numbers from 5 up to and including 20, but printing out only the even numbers determined by the call to the isEvenNumber method. Okay, so the challenge is to create a method called isEvenNumber, and it takes a parameter of type int.",
        "The purpose of the method is to determine whether the argument that's been passed to the method, the int, in other words, is an even number or not.",
        "IMPORTANT: Always check your loop condition carefully."
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
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Create a method called isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed to the method is an even number or not. Return true from the method if it's an even number; otherwise, return false. Next, use a while loop to test a range of numbers from 5 up to and including 20, but printing out only the even numbers determined by the call to the isEvenNumber method. Okay, so the challenge is to create a method called isEvenNumber, and it takes a parameter of type int.",
        "WHILE LOOPS",
        "Number Palindrome"
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
        "WHILE LOOPS",
        "If it's an even number, return true, otherwise, return false.",
        "Create a method called isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed to the method is an even number or not. Return true from the method if it's an even number; otherwise, return false. Next, use a while loop to test a range of numbers from 5 up to and including 20, but printing out only the even numbers determined by the call to the isEvenNumber method. Okay, so the challenge is to create a method called isEvenNumber, and it takes a parameter of type int.",
        "The purpose of the method is to determine whether the argument that's been passed to the method, the int, in other words, is an even number or not.",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once."
      ],
      "answer": [
        1,
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
        "while",
        "WHILE",
        "Unlike",
        "Create"
      ],
      "answer": 3,
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
        "void",
        "int",
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"WhileLoopCodingChallengePart2.java\"?\n\n___ class WhileLoopCodingChallengePart2 {",
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
      "type": "mcq",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge-part2_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge Part2",
      "question": "Which of the following statements about While Loop Coding Challenge Part2 are correct? (Select all that apply)",
      "options": [
        "This topic belongs to While And Do While Looping Concepts.",
        "Its source file is WhileLoopCodingChallengePart2.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for WhileLoopCodingChallengePart2.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge-part2_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge Part2",
      "question": "Complete the missing keyword in this snippet from \"WhileLoopCodingChallengePart2.java\".",
      "code": "___ class WhileLoopCodingChallengePart2 {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for WhileLoopCodingChallengePart2.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge-part2_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge Part2",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - While Loop Coding Challenge Part2\");",
      "answer": [
        "While And Do While Looping Concepts - While Loop Coding Challenge Part2"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-10-while-and-do-while-looping-concepts_while-loop-coding-challenge-part2_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge Part2",
      "question": "Explain the main ideas in While Loop Coding Challenge Part2.",
      "modelAnswer": "Step 2 is to modify the while code. Make it also record the total number of even numbers it has found. Break out of the loop once 5 even numbers are found. Finally, display the total number of odd and even numbers found. Alright, so the challenge is to modify the while code above. So, you want to leave the existing functionality as it is, but make it so it also records the total number of even numbers, as well as odd numbers that it's found. And once five even numbers have been found, break out of the code and display the total number of even numbers. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "Step 2 is to modify the while code. Make it also record the total number of even numbers it has found. Break out of the loop once 5 even numbers are found. Finally, display the total number of odd and even numbers found. Alright, so the challenge is to modify the while code above. So, you want to leave the existing functionality as it is, but make it so it also records the total number of even numbers, as well as odd numbers that it's found. And once five even numbers have been found, break out of the code and display the total number of even numbers.",
        "IMPORTANT: Always check your loop condition carefully."
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
        "WHILE LOOPS",
        "Number Palindrome",
        "The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.",
        "Step 2 is to modify the while code. Make it also record the total number of even numbers it has found. Break out of the loop once 5 even numbers are found. Finally, display the total number of odd and even numbers found. Alright, so the challenge is to modify the while code above. So, you want to leave the existing functionality as it is, but make it so it also records the total number of even numbers, as well as odd numbers that it's found. And once five even numbers have been found, break out of the code and display the total number of even numbers."
      ],
      "answer": 3,
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
        "while",
        "modify",
        "Unlike",
        "WHILE"
      ],
      "answer": 1,
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
        "String",
        "int",
        "boolean",
        "void"
      ],
      "answer": 2,
      "explanation": "The method isEvenNumber() is declared with return type 'boolean' in WhileLoopCodingChallengePart2.java.",
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"ClassExample.java\"?\n\n___ class ClassExample {",
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
      "type": "mcq",
      "qid": "chapter-11-class-object-static-and-instance-fields_class-example_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "question": "Which of the following statements about Class Example are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Class Object Static And Instance Fields.",
        "Its source file is ClassExample.java.",
        "This topic has 3 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for ClassExample.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-11-class-object-static-and-instance-fields_class-example_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "question": "Complete the missing keyword in this snippet from \"ClassExample.java\".",
      "code": "___ class ClassExample {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ClassExample.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-11-class-object-static-and-instance-fields_class-example_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "question": "What does this code print?",
      "code": "System.out.println(\"Class Object Static And Instance Fields - Class Example\");",
      "answer": [
        "Class Object Static And Instance Fields - Class Example"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-11-class-object-static-and-instance-fields_class-example_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "question": "Explain the main ideas in Class Example.",
      "modelAnswer": "A class can be described as :- 1) A custom data type --> For Ex :- String Always be aware of scope, type constraints, and compiler rules in this area.",
      "keyPoints": [
        "A class can be described as :-",
        "1) A custom data type --> For Ex :- String",
        "Always be aware of scope, type constraints, and compiler rules in this area."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_class-example_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "question": "Which statement best describes Class Example?",
      "options": [
        "There are 2 ways to create fields on classes.",
        "Object",
        "A class can be described as :-",
        "null"
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
        "1) A custom data type --> For Ex :- String",
        "2) A special code block that contains methods",
        "There are 2 ways to create fields on classes.",
        "A class can be described as :-"
      ],
      "answer": [
        0,
        1,
        3
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
        "class",
        "create",
        "static",
        "Without"
      ],
      "answer": 0,
      "explanation": "The missing word is 'class', from the notes for Class Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-11-class-object-static-and-instance-fields_create-field-on-classes_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "question": "Which Java keyword correctly fills in the blank in this code from \"CreateFieldOnClasses.java\"?\n\n___ class CreateFieldOnClasses {",
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
      "type": "mcq",
      "qid": "chapter-11-class-object-static-and-instance-fields_create-field-on-classes_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "question": "Which of the following statements about Create Field On Classes are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Class Object Static And Instance Fields.",
        "Its source file is CreateFieldOnClasses.java.",
        "This topic has 2 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for CreateFieldOnClasses.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-11-class-object-static-and-instance-fields_create-field-on-classes_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "question": "Complete the missing keyword in this snippet from \"CreateFieldOnClasses.java\".",
      "code": "___ class CreateFieldOnClasses {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for CreateFieldOnClasses.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-11-class-object-static-and-instance-fields_create-field-on-classes_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "question": "What does this code print?",
      "code": "*     System.out.println(greet.toUpperCase()); // A method called toUpperCase is called on the instance of String with value \"hello\"\r",
      "answer": [
        "hello"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-11-class-object-static-and-instance-fields_create-field-on-classes_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "question": "Explain the main ideas in Create Field On Classes.",
      "modelAnswer": "There are 2 ways to create fields on classes. 1) With static keyword Always be aware of scope, type constraints, and compiler rules in this area.",
      "keyPoints": [
        "There are 2 ways to create fields on classes.",
        "1) With static keyword",
        "Always be aware of scope, type constraints, and compiler rules in this area."
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
        "There are 2 ways to create fields on classes.",
        "null",
        "Object",
        "A class can be described as :-"
      ],
      "answer": 0,
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
        "There are 2 ways to create fields on classes.",
        "2) Without static keyword",
        "1) With static keyword",
        "A class can be described as :-"
      ],
      "answer": [
        0,
        1,
        2
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
        "special",
        "create",
        "custom",
        "class"
      ],
      "answer": 1,
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
        "Always initialize variables before use.",
        "Be careful with null references.",
        "A class can be described as :-",
        "Value of the field always stays with the class iii) Value is accessed by ClassName.fieldname"
      ],
      "answer": 3,
      "explanation": "This is a key gotcha or note taken directly from the source for Create Field On Classes.",
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"ParsingValuesReadingInput.java\"?\n\n___ class ParsingValuesReadingInput {",
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
      "type": "mcq",
      "qid": "chapter-12-parsing-values-reading-input_parsing-values-reading-input_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "Which of the following statements about Parsing Values Reading Input are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Parsing Values Reading Input.",
        "Its source file is ParsingValuesReadingInput.java.",
        "This topic has 13 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for ParsingValuesReadingInput.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-12-parsing-values-reading-input_parsing-values-reading-input_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "Complete the missing keyword in this snippet from \"ParsingValuesReadingInput.java\".",
      "code": "___ class ParsingValuesReadingInput {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ParsingValuesReadingInput.java.",
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
      "code": "        // System.out.println(\"Age = \" + (currentYear - userDateOfBirth));\r",
      "answer": [
        "Age = "
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
      "modelAnswer": "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value. Reading Data From Console You cannot do arithmetic on Strings — \"100\" - \"50\" is a compile error because - is not defined for Strings.",
      "keyPoints": [
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Reading Data From Console",
        "You cannot do arithmetic on Strings — \"100\" - \"50\" is a compile error because - is not defined for Strings."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly.",
      "tags": [
        "interview"
      ]
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_parsing-values-reading-input_concept-scq_5",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "Which statement best describes Parsing Values Reading Input?",
      "options": [
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.",
        "Input Calculator",
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
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Reading Data From Console",
        "Technique              | Description",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "Input Calculator"
      ],
      "answer": [
        0,
        1,
        2
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
        "method",
        "Write",
        "either",
        "Input"
      ],
      "answer": 2,
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
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.",
        "Input Calculator",
        "Always close the Scanner when done: sc.close(); (or use try-with-resources).",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered."
      ],
      "answer": 2,
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
        "boolean",
        "String",
        "void",
        "int"
      ],
      "answer": 1,
      "explanation": "The method getInputFromConsole() is declared with return type 'String' in ParsingValuesReadingInput.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_input-calculator-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Calculator Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"InputCalculatorChallenge.java\"?\n\nThe method should not return anything (___) and it needs to keep reading int numbers from the keyboard.",
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
      "type": "mcq",
      "qid": "chapter-12-parsing-values-reading-input_input-calculator-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Calculator Challenge",
      "question": "Which of the following statements about Input Calculator Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Parsing Values Reading Input.",
        "Its source file is InputCalculatorChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for InputCalculatorChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-12-parsing-values-reading-input_input-calculator-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Calculator Challenge",
      "question": "Complete the missing keyword in this snippet from \"InputCalculatorChallenge.java\".",
      "code": "The method should not return anything (___) and it needs to keep reading int numbers from the keyboard.\r",
      "answer": [
        "void"
      ],
      "explanation": "The missing keyword is 'void', taken from the parsed source for InputCalculatorChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-12-parsing-values-reading-input_input-calculator-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Calculator Challenge",
      "question": "What does this code print?",
      "code": "            System.out.println(\"SUM = \" + sum + \" AVG = \" + average);\r",
      "answer": [
        "SUM = "
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-12-parsing-values-reading-input_input-calculator-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Calculator Challenge",
      "question": "Explain the main ideas in Input Calculator Challenge.",
      "modelAnswer": "Input Calculator Write a method called inputThenPrintSumAndAverage that does not have any parameters. You cannot do arithmetic on Strings — \"100\" - \"50\" is a compile error because - is not defined for Strings.",
      "keyPoints": [
        "Input Calculator",
        "Write a method called inputThenPrintSumAndAverage that does not have any parameters.",
        "You cannot do arithmetic on Strings — \"100\" - \"50\" is a compile error because - is not defined for Strings."
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
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Input Calculator"
      ],
      "answer": 3,
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
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Write a method called inputThenPrintSumAndAverage that does not have any parameters.",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "Input Calculator"
      ],
      "answer": [
        0,
        2,
        4
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
        "either",
        "Reading",
        "Input",
        "Technique"
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
        "NOTE: Use the method Math.round to round the calculated average (double). The method round returns long.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area."
      ],
      "answer": 0,
      "explanation": "This is a key gotcha or note taken directly from the source for Input Calculator Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_min-max-coding-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Min Max Coding Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MinMaxCodingChallenge.java\"?\n\n___ class MinMaxCodingChallenge {",
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
      "type": "mcq",
      "qid": "chapter-12-parsing-values-reading-input_min-max-coding-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Min Max Coding Challenge",
      "question": "Which of the following statements about Min Max Coding Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Parsing Values Reading Input.",
        "Its source file is MinMaxCodingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for MinMaxCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-12-parsing-values-reading-input_min-max-coding-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Min Max Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"MinMaxCodingChallenge.java\".",
      "code": "___ class MinMaxCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for MinMaxCodingChallenge.java.",
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
      "code": "            System.out.println(\"Enter any number of your choice. To quit, press any character\");\r",
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
      "modelAnswer": "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered. If the user has previously entered a set of numbers (or even just one), display the minimum and maximum number that the user entered. So, you'll want to create a loop that continues to process until the user enters non-numeric data. You'll prompt the user to enter a number or type a character to quit each iteration. After the user enters some data, you'll read the input as a string, and then test if it can be parsed to a number. You cannot do arithmetic on Strings — \"100\" - \"50\" is a compile error because - is not defined for Strings.",
      "keyPoints": [
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "If the user has previously entered a set of numbers (or even just one), display the minimum and maximum number that the user entered. So, you'll want to create a loop that continues to process until the user enters non-numeric data. You'll prompt the user to enter a number or type a character to quit each iteration. After the user enters some data, you'll read the input as a string, and then test if it can be parsed to a number.",
        "You cannot do arithmetic on Strings — \"100\" - \"50\" is a compile error because - is not defined for Strings."
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
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.",
        "Input Calculator",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value."
      ],
      "answer": 2,
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
        "Input Calculator",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "If the user has previously entered a set of numbers (or even just one), display the minimum and maximum number that the user entered. So, you'll want to create a loop that continues to process until the user enters non-numeric data. You'll prompt the user to enter a number or type a character to quit each iteration. After the user enters some data, you'll read the input as a string, and then test if it can be parsed to a number.",
        "You can decide if you want the user to enter integers or decimal numbers."
      ],
      "answer": [
        1,
        3,
        4
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
        "either",
        "Technique",
        "previously",
        "Reading"
      ],
      "answer": 2,
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
        "int",
        "boolean",
        "void"
      ],
      "answer": 2,
      "explanation": "The method checkIfUserInputIsNumber() is declared with return type 'boolean' in MinMaxCodingChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_paint-job-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PaintJobChallenge.java\"?\n\n___ class PaintJobChallenge {",
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
      "type": "mcq",
      "qid": "chapter-12-parsing-values-reading-input_paint-job-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "Which of the following statements about Paint Job Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Parsing Values Reading Input.",
        "Its source file is PaintJobChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for PaintJobChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-12-parsing-values-reading-input_paint-job-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "Complete the missing keyword in this snippet from \"PaintJobChallenge.java\".",
      "code": "___ class PaintJobChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for PaintJobChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-12-parsing-values-reading-input_paint-job-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Parsing Values Reading Input - Paint Job Challenge\");",
      "answer": [
        "Parsing Values Reading Input - Paint Job Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-12-parsing-values-reading-input_paint-job-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "Explain the main ideas in Paint Job Challenge.",
      "modelAnswer": "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area. The wall area is calculated as width * height. Each bucket covers a fixed area (areaPerBucket). You cannot do arithmetic on Strings — \"100\" - \"50\" is a compile error because - is not defined for Strings.",
      "keyPoints": [
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.",
        "The wall area is calculated as width * height. Each bucket covers a fixed area (areaPerBucket).",
        "You cannot do arithmetic on Strings — \"100\" - \"50\" is a compile error because - is not defined for Strings."
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
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.",
        "Input Calculator"
      ],
      "answer": 2,
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
        "The wall area is calculated as width * height. Each bucket covers a fixed area (areaPerBucket).",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Math.ceil() is used to round up — you always need whole buckets, never a fraction.",
        "Input Calculator",
        "Paint Job Challenge: calculates how many paint buckets are required to cover a wall area."
      ],
      "answer": [
        0,
        2,
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
        "Technique",
        "Paint",
        "either",
        "Reading"
      ],
      "answer": 1,
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
        "Math.ceil() is used to round up — you always need whole buckets, never a fraction.",
        "Input Calculator",
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered."
      ],
      "answer": 0,
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
        "String",
        "void",
        "int",
        "boolean"
      ],
      "answer": 2,
      "explanation": "The method getBucketCount() is declared with return type 'int' in PaintJobChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-12-parsing-values-reading-input_reading-user-input-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ReadingUserInputChallenge.java\"?\n\nIn ___ challenge, you'll read 5 valid numbers from the console entered by the",
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
      "type": "mcq",
      "qid": "chapter-12-parsing-values-reading-input_reading-user-input-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "Which of the following statements about Reading User Input Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Parsing Values Reading Input.",
        "Its source file is ReadingUserInputChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for ReadingUserInputChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-12-parsing-values-reading-input_reading-user-input-challenge_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "Complete the missing keyword in this snippet from \"ReadingUserInputChallenge.java\".",
      "code": "In ___ challenge, you'll read 5 valid numbers from the console entered by the\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for ReadingUserInputChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-12-parsing-values-reading-input_reading-user-input-challenge_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Parsing Values Reading Input - Reading User Input Challenge\");",
      "answer": [
        "Parsing Values Reading Input - Reading User Input Challenge"
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
      "modelAnswer": "Reading User Input Challenge. In this challenge, you'll read 5 valid numbers from the console entered by the user and print the sum of those ten numbers. By valid numbers, I mean you need to check that the numbers entered are valid integers. If they are not, print out the message You cannot do arithmetic on Strings — \"100\" - \"50\" is a compile error because - is not defined for Strings.",
      "keyPoints": [
        "Reading User Input Challenge.",
        "In this challenge, you'll read 5 valid numbers from the console entered by the user and print the sum of those ten numbers. By valid numbers, I mean you need to check that the numbers entered are valid integers. If they are not, print out the message",
        "You cannot do arithmetic on Strings — \"100\" - \"50\" is a compile error because - is not defined for Strings."
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
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Input Calculator",
        "You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.",
        "Reading User Input Challenge."
      ],
      "answer": 3,
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
        "When we read data in from either a file or from user input, it's common for the data to be initially stored as a String, which we'll need to convert to a numeric value.",
        "Reading User Input Challenge.",
        "In this challenge, you'll read 5 valid numbers from the console entered by the user and print the sum of those ten numbers. By valid numbers, I mean you need to check that the numbers entered are valid integers. If they are not, print out the message",
        "Input Calculator",
        "\"Invalid number\" to the console, but continue looping until you do have 5 valid numbers."
      ],
      "answer": [
        1,
        2,
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
        "Technique",
        "Console",
        "either",
        "Reading"
      ],
      "answer": 3,
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
        "void",
        "String",
        "boolean",
        "int"
      ],
      "answer": 3,
      "explanation": "The method printSumOfNumbersEnteredByUserUsingWhileLoop() is declared with return type 'int' in ReadingUserInputChallenge.java.",
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"ExceptionHandlingInJava.java\"?\n\nAn exception is caught by wrapping the risky code inside a ___-catch block.",
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
      "type": "mcq",
      "qid": "chapter-13-exception-handling_exception-handling-in-java_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "question": "Which of the following statements about Exception Handling In Java are correct? (Select all that apply)",
      "options": [
        "This topic belongs to Exception Handling.",
        "Its source file is ExceptionHandlingInJava.java.",
        "This topic has 10 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for ExceptionHandlingInJava.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-13-exception-handling_exception-handling-in-java_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "question": "Complete the missing keyword in this snippet from \"ExceptionHandlingInJava.java\".",
      "code": "   An exception is caught by wrapping the risky code inside a ___-catch block.",
      "answer": [
        "try"
      ],
      "explanation": "The missing keyword is 'try', taken from the parsed source for ExceptionHandlingInJava.java.",
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
      "code": "// @answer Example: try { return 1; } finally { System.out.println(\"finally\"); } prints finally first and then returns 1.",
      "answer": [
        "finally"
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
      "modelAnswer": "Exception An exception is an abnormal condition that disrupts the normal flow of the program. An exception is a runtime error — an abnormal condition that occurs while the program is running and disrupts normal execution.",
      "keyPoints": [
        "Exception",
        "An exception is an abnormal condition that disrupts the normal flow of the program.",
        "An exception is a runtime error — an abnormal condition that occurs while the program is running and disrupts normal execution."
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
        "Integer",
        "Object",
        "String",
        "exception"
      ],
      "answer": 3,
      "explanation": "The missing word is 'exception', from the notes for Exception Handling In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-13-exception-handling_exception-handling-in-java_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "question": "What is an important consideration when working with Exception Handling In Java?",
      "options": [
        "@quiz (INTERVIEW TRAP) Does a finally block always execute in Java, even if there is a return in try or catch?",
        "Always initialize variables before use.",
        "Be careful with null references.",
        "Avoid using raw types in generics."
      ],
      "answer": 0,
      "explanation": "This is a key gotcha or note taken directly from the source for Exception Handling In Java.",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_classes-and-inheritance_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "question": "Which of the following statements about Classes And Inheritance are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is ClassesAndInheritance.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for ClassesAndInheritance.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_classes-and-inheritance_codefill_2",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "question": "Complete the missing keyword in this snippet from \"ClassesAndInheritance.java\".",
      "code": "___ class ClassesAndInheritance {",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ClassesAndInheritance.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_classes-and-inheritance_predict_3",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Classes And Inheritance\");",
      "answer": [
        "OOP Concepts - Classes And Inheritance"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_classes-and-inheritance_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "question": "Explain the main ideas in Classes And Inheritance.",
      "modelAnswer": "Object-oriented programming is a way to model real world objects as software objects which contain both data and code OOP is sometimes called class-based programming. Class-based programming starts with classes which, become the blueprints for objects Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "OOP is sometimes called class-based programming. Class-based programming starts with classes which, become the blueprints for objects",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Create a new class for a bank account."
      ],
      "answer": 1,
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
        "access",
        "writing",
        "sometimes",
        "Unlike"
      ],
      "answer": 2,
      "explanation": "The missing word is 'sometimes', from the notes for Classes And Inheritance.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_car_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Car",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Car.java\"?\n\nUnlike local variables, ___ variables should have some type of access modifier declared for it.",
      "options": [
        "class",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_car_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Car",
      "question": "Which of the following statements about Car are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is Car.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Car.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_car_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Car",
      "question": "Complete the missing keyword in this snippet from \"Car.java\".",
      "code": "Unlike local variables, ___ variables should have some type of access modifier declared for it.\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for Car.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_car_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Car",
      "question": "What does this code print?",
      "code": "        System.out.println(doors + \"-Door \" + color + \" \" + make + \" \" + model + \" \" + (convertible ? \"Convertible\" : \"\"));\r",
      "answer": [
        "-Door "
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_car_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Car",
      "question": "Explain the main ideas in Car.",
      "modelAnswer": "Unlike local variables, class variables should have some type of access modifier declared for it. If no access modifier is declared explicitly, Java declares the default one (package private), implicitly. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "If no access modifier is declared explicitly, Java declares the default one (package private), implicitly.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Create a new class for a bank account.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 0,
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "If no access modifier is declared explicitly, Java declares the default one (package private), implicitly.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "When writing methods that use non-static fields, your method can't be declared static.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": [
        1,
        3,
        4
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
        "Modelling",
        "sometimes",
        "Objectoriented",
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
        "String",
        "int",
        "void",
        "boolean"
      ],
      "answer": 3,
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_main_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which of the following statements about Main are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is Main.java.",
        "This topic has 6 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Main.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_main_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "___ class Main {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Main.java.",
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
      "code": "        System.out.println(\"make = \" + car.getMake());\r",
      "answer": [
        "make = "
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
      "modelAnswer": "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods. Car car = null; — the variable car exists, but points to nothing. Calling car.describeCar() here causes a NullPointerException. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Car car = null; — the variable car exists, but points to nothing. Calling car.describeCar() here causes a NullPointerException.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Create a new class for a bank account.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
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
        "When you create a class instance (Car car = new Car()), Java sets all un-initialised fields to their default values: Strings -> null, int -> 0, boolean -> false.",
        "Car car = null; — the variable car exists, but points to nothing. Calling car.describeCar() here causes a NullPointerException.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        0,
        1,
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
      "question": "Complete the blank: \"This ___ demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.\"",
      "options": [
        "sometimes",
        "Objectoriented",
        "class",
        "Modelling"
      ],
      "answer": 2,
      "explanation": "The missing word is 'class', from the notes for Main.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_bank-account_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bank Account",
      "question": "Which Java keyword correctly fills in the blank in this code from \"BankAccount.java\"?\n\n___ class BankAccount {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_bank-account_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bank Account",
      "question": "Which of the following statements about Bank Account are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is BankAccount.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for BankAccount.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_bank-account_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bank Account",
      "question": "Complete the missing keyword in this snippet from \"BankAccount.java\".",
      "code": "___ class BankAccount {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for BankAccount.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_bank-account_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bank Account",
      "question": "What does this code print?",
      "code": "        System.out.println(\"Deposit of $\" + depositAmount + \" made. New balance is $\" + accountBalance);\r",
      "answer": [
        "Deposit of $"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_bank-account_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bank Account",
      "question": "Explain the main ideas in Bank Account.",
      "modelAnswer": "Create a new class for a bank account. Create fields for account characteristics like: Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Create a new class for a bank account.",
        "Create fields for account characteristics like:",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Create a new class for a bank account.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 0,
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
        "account number. account balance. customer name. email. and phone number.",
        "Create a new class for a bank account.",
        "Create fields for account characteristics like:",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
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
        "Create",
        "Modelling",
        "sometimes",
        "Objectoriented"
      ],
      "answer": 0,
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
        "String",
        "int",
        "boolean",
        "void"
      ],
      "answer": 0,
      "explanation": "The method getAccountNumber() is declared with return type 'String' in BankAccount.java.",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_main_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which of the following statements about Main are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is Main.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Main.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_main_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "___ class Main {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Main.java.",
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
      "code": "System.out.println(\"OOP Concepts - Main\");",
      "answer": [
        "OOP Concepts - Main"
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
      "modelAnswer": "This topic belongs to Chapter 14: OOP Concepts → Classes Challenge. Review the class Main and understand its key responsibilities. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "This topic belongs to Chapter 14: OOP Concepts → Classes Challenge.",
        "Review the class Main and understand its key responsibilities.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "This topic belongs to Chapter 14: OOP Concepts → Classes Challenge.",
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
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This example defines 1 method; trace method behavior step by step.",
        "This topic belongs to Chapter 14: OOP Concepts → Classes Challenge.",
        "Review the class Main and understand its key responsibilities.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        1,
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
        "sometimes",
        "topic",
        "Modelling",
        "Objectoriented"
      ],
      "answer": 1,
      "explanation": "The missing word is 'topic', from the notes for Main.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-over-loading-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MethodOverLoadingChallenge.java\"?\n\nYou'll convert inches to centimeters, in ___  method, and pass back the number of centimeters,",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_method-over-loading-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Challenge",
      "question": "Which of the following statements about Method Over Loading Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is MethodOverLoadingChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for MethodOverLoadingChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_method-over-loading-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Challenge",
      "question": "Complete the missing keyword in this snippet from \"MethodOverLoadingChallenge.java\".",
      "code": "You'll convert inches to centimeters, in ___  method, and pass back the number of centimeters,\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for MethodOverLoadingChallenge.java.",
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
      "code": "            System.out.println(feet + \" ft \" + inches + \" inch = \" + centimetersValue + \" cm \");\r",
      "answer": [
        " ft "
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
      "modelAnswer": "Create two methods with the  same name: convertToCentimeters The first method has one parameter of type int,  which represents the entire height in inches. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Create two methods with the  same name: convertToCentimeters",
        "The first method has one parameter of type int,  which represents the entire height in inches.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "The first method has one parameter of type int,  which represents the entire height in inches.",
        "Create two methods with the  same name: convertToCentimeters",
        "You'll convert inches to centimeters, in this  method, and pass back the number of centimeters, as a double. The second method has two parameters  of type int, one to represent height in feet, and one to represent the remaining height  in inches. So if a person is 5 foot, 8 inches, the values 5 for feet and 8 for  inches would be passed to this method.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": [
        1,
        2,
        3
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
        "Objectoriented",
        "Create",
        "Modelling",
        "sometimes"
      ],
      "answer": 1,
      "explanation": "The missing word is 'Create', from the notes for Method Over Loading Challenge.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-overloading-in-java_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MethodOverloadingInJava.java\"?\n\n___ class MethodOverloadingInJava {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_method-overloading-in-java_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "Which of the following statements about Method Overloading In Java are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is MethodOverloadingInJava.java.",
        "This topic has 18 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for MethodOverloadingInJava.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_method-overloading-in-java_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "Complete the missing keyword in this snippet from \"MethodOverloadingInJava.java\".",
      "code": "___ class MethodOverloadingInJava {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for MethodOverloadingInJava.java.",
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
      "code": "        System.out.println(\"New Score is \" + score);\r",
      "answer": [
        "New Score is "
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
      "modelAnswer": "To the code calling an overloaded method, it looks like a single method can be called with different sets of arguments. In actuality, each call that's made with a different set of arguments is calling a separate method. Java developers often refer to method overloading, as compile-time polymorphism. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "To the code calling an overloaded method, it looks like a single method can be called with different sets of arguments. In actuality, each call that's made with a different set of arguments is calling a separate method.",
        "Java developers often refer to method overloading, as compile-time polymorphism.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "To the code calling an overloaded method, it looks like a single method can be called with different sets of arguments. In actuality, each call that's made with a different set of arguments is calling a separate method.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 0,
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
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Java developers often refer to method overloading, as compile-time polymorphism.",
        "To the code calling an overloaded method, it looks like a single method can be called with different sets of arguments. In actuality, each call that's made with a different set of arguments is calling a separate method.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This means the compiler is determining the right method to call, based on the method name and argument list. Usually overloading happens within a single class."
      ],
      "answer": [
        1,
        2,
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
        "sometimes",
        "Objectoriented",
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
        "boolean",
        "String",
        "void"
      ],
      "answer": 0,
      "explanation": "The method calculateScore() is declared with return type 'int' in MethodOverloadingInJava.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-overloading-second-and-minutes-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MethodOverloadingSecondAndMinutesChallenge.java\"?\n\n___ class MethodOverloadingSecondAndMinutesChallenge {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_method-overloading-second-and-minutes-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "Which of the following statements about Method Overloading Second And Minutes Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is MethodOverloadingSecondAndMinutesChallenge.java.",
        "This topic has 1 inline annotation.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for MethodOverloadingSecondAndMinutesChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_method-overloading-second-and-minutes-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "Complete the missing keyword in this snippet from \"MethodOverloadingSecondAndMinutesChallenge.java\".",
      "code": "___ class MethodOverloadingSecondAndMinutesChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for MethodOverloadingSecondAndMinutesChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_method-overloading-second-and-minutes-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Method Overloading Second And Minutes Challenge\");",
      "answer": [
        "OOP Concepts - Method Overloading Second And Minutes Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_method-overloading-second-and-minutes-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "Explain the main ideas in Method Overloading Second And Minutes Challenge.",
      "modelAnswer": "Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds. You should validate that the first parameter minutes is >= 0. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds.",
        "You should validate that the first parameter minutes is >= 0.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds."
      ],
      "answer": 3,
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
        "You should validate that the 2nd parameter seconds is >= 0 and <= 59.",
        "Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds.",
        "You should validate that the first parameter minutes is >= 0.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": [
        0,
        1,
        2
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
        "Modelling",
        "Objectoriented",
        "sometimes",
        "Create"
      ],
      "answer": 3,
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
        "String",
        "int",
        "boolean",
        "void"
      ],
      "answer": 0,
      "explanation": "The method getDurationString() is declared with return type 'String' in MethodOverloadingSecondAndMinutesChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_person-age-validation_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PersonAgeValidation.java\"?\n\nWrite a ___ with the name Person. The ___ needs three fields (instance variables) with the names firstName, lastName of type String and age of type int.",
      "options": [
        "class",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_person-age-validation_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "Which of the following statements about Person Age Validation are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is PersonAgeValidation.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for PersonAgeValidation.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_person-age-validation_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "Complete the missing keyword in this snippet from \"PersonAgeValidation.java\".",
      "code": "Write a ___ with the name Person. The ___ needs three fields (instance variables) with the names firstName, lastName of type String and age of type int.\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for PersonAgeValidation.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_person-age-validation_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "What does this code print?",
      "code": "System.out.println(\"fullName= \" + person.getFullName());\r",
      "answer": [
        "fullName= "
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_person-age-validation_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "Explain the main ideas in Person Age Validation.",
      "modelAnswer": "Person Class and Age Validation Write a class with the name Person. The class needs three fields (instance variables) with the names firstName, lastName of type String and age of type int. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Person Class and Age Validation",
        "Write a class with the name Person. The class needs three fields (instance variables) with the names firstName, lastName of type String and age of type int.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Person Class and Age Validation",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
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
        "Person Class and Age Validation",
        "Write the following methods (instance methods):",
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
        "sometimes",
        "Objectoriented",
        "Modelling",
        "Person"
      ],
      "answer": 3,
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
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
        "boolean",
        "String",
        "void",
        "int"
      ],
      "answer": 1,
      "explanation": "The method getFirstName() is declared with return type 'String' in PersonAgeValidation.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_sum-calculator-implementation-challenge_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SumCalculatorImplementationChallenge.java\"?\n\nWrite a ___ with the name SimpleCalculator. The ___ needs two fields (instance variables) with names firstNumber and secondNumber both of type double.",
      "options": [
        "class",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_sum-calculator-implementation-challenge_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "Which of the following statements about Sum Calculator Implementation Challenge are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is SumCalculatorImplementationChallenge.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for SumCalculatorImplementationChallenge.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_sum-calculator-implementation-challenge_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "Complete the missing keyword in this snippet from \"SumCalculatorImplementationChallenge.java\".",
      "code": "Write a ___ with the name SimpleCalculator. The ___ needs two fields (instance variables) with names firstNumber and secondNumber both of type double.\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for SumCalculatorImplementationChallenge.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_sum-calculator-implementation-challenge_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"add= \" + calculator.getAdditionResult());\r",
      "answer": [
        "add= "
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_sum-calculator-implementation-challenge_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "Explain the main ideas in Sum Calculator Implementation Challenge.",
      "modelAnswer": "Sum Calculator Implementation Write a class with the name SimpleCalculator. The class needs two fields (instance variables) with names firstNumber and secondNumber both of type double. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Sum Calculator Implementation",
        "Write a class with the name SimpleCalculator. The class needs two fields (instance variables) with names firstNumber and secondNumber both of type double.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Sum Calculator Implementation",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 2,
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
        "Write the following methods (instance methods):",
        "Write a class with the name SimpleCalculator. The class needs two fields (instance variables) with names firstNumber and secondNumber both of type double.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Sum Calculator Implementation",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": [
        0,
        1,
        3
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
        "Calculator",
        "Modelling",
        "sometimes",
        "Objectoriented"
      ],
      "answer": 0,
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
        "NOTE: All methods should be defined as public NOT public static.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 0,
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
        "double",
        "String",
        "void",
        "int"
      ],
      "answer": 0,
      "explanation": "The method getFirstNumber() is declared with return type 'double' in SumCalculatorImplementationChallenge.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_constructor-concept_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ConstructorConcept.java\"?\n\nIt has the same name as the ___ itself, and it doesn't return any values.",
      "options": [
        "class",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_constructor-concept_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "Which of the following statements about Constructor Concept are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is ConstructorConcept.java.",
        "This topic has 7 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for ConstructorConcept.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_constructor-concept_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "Complete the missing keyword in this snippet from \"ConstructorConcept.java\".",
      "code": "It has the same name as the ___ itself, and it doesn't return any values.\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for ConstructorConcept.java.",
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
      "code": "        System.out.println(\"Constructor with 5 arguments is called\");\r",
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
      "modelAnswer": "A constructor is used in the creation of an object. It is a special type of code block that has a specific name and parameters, much like a method. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "A constructor is used in the creation of an object.",
        "It is a special type of code block that has a specific name and parameters, much like a method.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "A constructor is used in the creation of an object.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 1,
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
        "A constructor is used in the creation of an object.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "It is a special type of code block that has a specific name and parameters, much like a method.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "It has the same name as the class itself, and it doesn't return any values."
      ],
      "answer": [
        0,
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
        "Modelling",
        "constructor",
        "sometimes"
      ],
      "answer": 2,
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
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "It should never include a return type from a constructor, not even void."
      ],
      "answer": 3,
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
        "int",
        "boolean",
        "void",
        "String"
      ],
      "answer": 3,
      "explanation": "The method getAccountNumber() is declared with return type 'String' in ConstructorConcept.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_super-keyword-use-example_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SuperKeywordUseExample.java\"?\n\n___ class SuperKeywordUseExample { // parent class also known as super class",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_super-keyword-use-example_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "question": "Which of the following statements about Super Keyword Use Example are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is SuperKeywordUseExample.java.",
        "This topic has 3 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for SuperKeywordUseExample.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_super-keyword-use-example_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "question": "Complete the missing keyword in this snippet from \"SuperKeywordUseExample.java\".",
      "code": "___ class SuperKeywordUseExample { // parent class also known as super class\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for SuperKeywordUseExample.java.",
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
      "code": "        System.out.println(\"Printed in SuperClass.\");\r",
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
      "modelAnswer": "The keyword super is commonly used with method overriding when we call a method with the same name from the parent class. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "The keyword super is commonly used with method overriding when we call a method with the same name from the parent class.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "The keyword super is commonly used with method overriding when we call a method with the same name from the parent class.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
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
        "Modelling",
        "Objectoriented",
        "keyword",
        "sometimes"
      ],
      "answer": 2,
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
        "Runnable",
        "Object",
        "Comparable",
        "SuperKeywordUseExample"
      ],
      "answer": 3,
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_this-and-super_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This And Super",
      "question": "Which of the following statements about This And Super are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is ThisAndSuper.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for ThisAndSuper.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_this-and-super_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This And Super",
      "question": "Complete the missing keyword in this snippet from \"ThisAndSuper.java\".",
      "code": "___ class ThisAndSuper {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ThisAndSuper.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_this-and-super_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This And Super",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - This And Super\");",
      "answer": [
        "OOP Concepts - This And Super"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_this-and-super_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This And Super",
      "question": "Explain the main ideas in This And Super.",
      "modelAnswer": "super keyword :- 1) The keyword super is used to access or call the parent class members (both variables and methods). Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "super keyword :-",
        "1) The keyword super is used to access or call the parent class members (both variables and methods).",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "super keyword :-",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 2,
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
        "super keyword :-",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "this keyword :-",
        "1) The keyword super is used to access or call the parent class members (both variables and methods).",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        0,
        2,
        3
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
        "sometimes",
        "Modelling",
        "Objectoriented"
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
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "NOTE: Both the keywords can be used anywhere in a class except for static elements such as a static method."
      ],
      "answer": 3,
      "explanation": "This is a key gotcha or note taken directly from the source for This And Super.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_this-key-word-use-example_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "Which Java keyword correctly fills in the blank in this code from \"ThisKeyWordUseExample.java\"?\n\n___ class ThisKeyWordUseExample {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_this-key-word-use-example_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "Which of the following statements about This Key Word Use Example are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is ThisKeyWordUseExample.java.",
        "This topic has 2 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for ThisKeyWordUseExample.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_this-key-word-use-example_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "Complete the missing keyword in this snippet from \"ThisKeyWordUseExample.java\".",
      "code": "___ class ThisKeyWordUseExample {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ThisKeyWordUseExample.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_this-key-word-use-example_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - This Key Word Use Example\");",
      "answer": [
        "OOP Concepts - This Key Word Use Example"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_this-key-word-use-example_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "Explain the main ideas in This Key Word Use Example.",
      "modelAnswer": "The keyword this is commonly used within constructors and setters and is optionally used within getters. In the getter, there are no parameters so there's no conflict. Therefore,the use of this keyword is optional there. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "The keyword this is commonly used within constructors and setters and is optionally used within getters.",
        "In the getter, there are no parameters so there's no conflict. Therefore,the use of this keyword is optional there.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "The keyword this is commonly used within constructors and setters and is optionally used within getters."
      ],
      "answer": 3,
      "explanation": "This is drawn directly from the notes for This Key Word Use Example.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_this-key-word-use-example_true-false-mcq_5",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "Which of the following are TRUE about This Key Word Use Example? Select all that apply.",
      "options": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "The keyword this is commonly used within constructors and setters and is optionally used within getters.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "In the getter, there are no parameters so there's no conflict. Therefore,the use of this keyword is optional there."
      ],
      "answer": [
        1,
        3
      ],
      "explanation": "The true statements are taken directly from the notes for This Key Word Use Example.",
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
        "sometimes",
        "Modelling",
        "Objectoriented",
        "keyword"
      ],
      "answer": 3,
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"GoodConstructorSuperCallExample.java\"?\n\n___ class GoodConstructorSuperCallExample {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_good-constructor-super-call-example_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "question": "Which of the following statements about Good Constructor Super Call Example are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is GoodConstructorSuperCallExample.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for GoodConstructorSuperCallExample.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_good-constructor-super-call-example_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "question": "Complete the missing keyword in this snippet from \"GoodConstructorSuperCallExample.java\".",
      "code": "___ class GoodConstructorSuperCallExample {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for GoodConstructorSuperCallExample.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_good-constructor-super-call-example_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Good Constructor Super Call Example\");",
      "answer": [
        "OOP Concepts - Good Constructor Super Call Example"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_good-constructor-super-call-example_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "question": "Explain the main ideas in Good Constructor Super Call Example.",
      "modelAnswer": "The 1st constructor is calling the 2nd constructor. The 2nd constructor calls the parent constructor with parameters x and y. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "The 1st constructor is calling the 2nd constructor.",
        "The 2nd constructor calls the parent constructor with parameters x and y.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "The 1st constructor is calling the 2nd constructor.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 0,
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
        "The 2nd constructor calls the parent constructor with parameters x and y.",
        "The parent constructor will initialize the x and y variables, while the 2nd Rectangle constructor will initialize the width and height variables. Here, as you can see in this code, Both the super() and this() calls are made, but in different constructors.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "The 1st constructor is calling the 2nd constructor."
      ],
      "answer": [
        0,
        1,
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
        "constructor",
        "Modelling",
        "Objectoriented",
        "sometimes"
      ],
      "answer": 0,
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
        "Comparable",
        "GoodConstructorSuperCallExample",
        "Runnable",
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"BadConstructorThisCallExample.java\"?\n\n___ class BadConstructorThisCallExample {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_bad-constructor-this-call-example_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "question": "Which of the following statements about Bad Constructor This Call Example are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is BadConstructorThisCallExample.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for BadConstructorThisCallExample.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_bad-constructor-this-call-example_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "question": "Complete the missing keyword in this snippet from \"BadConstructorThisCallExample.java\".",
      "code": "___ class BadConstructorThisCallExample {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for BadConstructorThisCallExample.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_bad-constructor-this-call-example_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Bad Constructor This Call Example\");",
      "answer": [
        "OOP Concepts - Bad Constructor This Call Example"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_bad-constructor-this-call-example_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "question": "Explain the main ideas in Bad Constructor This Call Example.",
      "modelAnswer": "Here, there are three constructors. All three constructors initialize variables. But There's repeated code in each constructor, The variables are initialized in each constructor with some default values. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Here, there are three constructors.",
        "All three constructors initialize variables. But There's repeated code in each constructor, The variables are initialized in each constructor with some default values.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Here, there are three constructors.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 1,
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
        "All three constructors initialize variables. But There's repeated code in each constructor, The variables are initialized in each constructor with some default values.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Here, there are three constructors."
      ],
      "answer": [
        1,
        2,
        4
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
        "Modelling",
        "three",
        "sometimes",
        "Objectoriented"
      ],
      "answer": 1,
      "explanation": "The missing word is 'three', from the notes for Bad Constructor This Call Example.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_good-constructor-this-call-example_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "Which Java keyword correctly fills in the blank in this code from \"GoodConstructorThisCallExample.java\"?\n\n___ class GoodConstructorThisCallExample {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_good-constructor-this-call-example_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "Which of the following statements about Good Constructor This Call Example are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is GoodConstructorThisCallExample.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for GoodConstructorThisCallExample.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_good-constructor-this-call-example_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "Complete the missing keyword in this snippet from \"GoodConstructorThisCallExample.java\".",
      "code": "___ class GoodConstructorThisCallExample {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for GoodConstructorThisCallExample.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_good-constructor-this-call-example_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Good Constructor This Call Example\");",
      "answer": [
        "OOP Concepts - Good Constructor This Call Example"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_good-constructor-this-call-example_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "Explain the main ideas in Good Constructor This Call Example.",
      "modelAnswer": "Here, the 1st constructor calls the 2nd constructor, the 2nd constructor calls the 3rd constructor, and then the 3rd constructor actually initializes the instance variables. In other words, The 3rd constructor does all the work. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Here, the 1st constructor calls the 2nd constructor, the 2nd constructor calls the 3rd constructor, and then the 3rd constructor actually initializes the instance variables.",
        "In other words, The 3rd constructor does all the work.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Here, the 1st constructor calls the 2nd constructor, the 2nd constructor calls the 3rd constructor, and then the 3rd constructor actually initializes the instance variables.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 0,
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
        "Here, the 1st constructor calls the 2nd constructor, the 2nd constructor calls the 3rd constructor, and then the 3rd constructor actually initializes the instance variables.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "The variables will always be initialized in the 3rd constructor, and only there.",
        "In other words, The 3rd constructor does all the work.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        0,
        2,
        3
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
        "constructor",
        "Modelling",
        "Objectoriented",
        "sometimes"
      ],
      "answer": 0,
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
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "The variables will always be initialized in the 3rd constructor, and only there.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"Customer.java\"?\n\nCreate a ___ class, called Customer, with three fields: name. credit limit. and email address.",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_customer_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Customer",
      "question": "Which of the following statements about Customer are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is Customer.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Customer.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_customer_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Customer",
      "question": "Complete the missing keyword in this snippet from \"Customer.java\".",
      "code": "Create a ___ class, called Customer, with three fields: name. credit limit. and email address.\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for Customer.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_customer_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Customer",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Customer\");",
      "answer": [
        "OOP Concepts - Customer"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_customer_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Customer",
      "question": "Explain the main ideas in Customer.",
      "modelAnswer": "Create a new class, called Customer, with three fields: name. credit limit. and email address. Create the getter methods only for each field. You don't need to create the setters. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Create a new class, called Customer, with three fields: name. credit limit. and email address.",
        "Create the getter methods only for each field. You don't need to create the setters.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Create a new class, called Customer, with three fields: name. credit limit. and email address."
      ],
      "answer": 3,
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
        "Create a new class, called Customer, with three fields: name. credit limit. and email address.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Create three constructors for this class: First, create a constructor for all three fields which should assign the arguments directly to the instance fields. Second, create a no-args constructor that calls another constructor, passing some literal values for each argument. And lastly, create a constructor with just the name and email parameters, which also calls another constructor.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Create the getter methods only for each field. You don't need to create the setters."
      ],
      "answer": [
        0,
        2,
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
        "Objectoriented",
        "Modelling",
        "sometimes",
        "Create"
      ],
      "answer": 3,
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
        "int",
        "boolean"
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"House.java\"?\n\n___ class House {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_house_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "House",
      "question": "Which of the following statements about House are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is House.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for House.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_house_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "House",
      "question": "Complete the missing keyword in this snippet from \"House.java\".",
      "code": "___ class House {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for House.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_house_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "House",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - House\");",
      "answer": [
        "OOP Concepts - House"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_house_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "House",
      "question": "Explain the main ideas in House.",
      "modelAnswer": "This topic belongs to Chapter 14: OOP Concepts → Reference Object Instance. Review the class House and understand its key responsibilities. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "This topic belongs to Chapter 14: OOP Concepts → Reference Object Instance.",
        "Review the class House and understand its key responsibilities.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This topic belongs to Chapter 14: OOP Concepts → Reference Object Instance.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 2,
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
        "Review the class House and understand its key responsibilities.",
        "This example defines 2 methods; trace method behavior step by step.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This topic belongs to Chapter 14: OOP Concepts → Reference Object Instance."
      ],
      "answer": [
        1,
        2,
        4
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
        "sometimes",
        "Objectoriented",
        "topic",
        "Modelling"
      ],
      "answer": 2,
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
        "String",
        "void",
        "int",
        "boolean"
      ],
      "answer": 0,
      "explanation": "The method getColor() is declared with return type 'String' in House.java.",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_main_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which of the following statements about Main are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is Main.java.",
        "This topic has 13 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Main.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_main_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "___ class Main {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Main.java.",
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
      "code": "System.out.println(\"OOP Concepts - Main\");",
      "answer": [
        "OOP Concepts - Main"
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
      "modelAnswer": "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"ReferenceObjectsInstanceClass.java\"?\n\n___ class ReferenceObjectsInstanceClass {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_reference-objects-instance-class_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "question": "Which of the following statements about Reference Objects Instance Class are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is ReferenceObjectsInstanceClass.java.",
        "This topic has 7 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for ReferenceObjectsInstanceClass.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_reference-objects-instance-class_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "question": "Complete the missing keyword in this snippet from \"ReferenceObjectsInstanceClass.java\".",
      "code": "___ class ReferenceObjectsInstanceClass {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ReferenceObjectsInstanceClass.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_reference-objects-instance-class_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Reference Objects Instance Class\");",
      "answer": [
        "OOP Concepts - Reference Objects Instance Class"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_reference-objects-instance-class_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "question": "Explain the main ideas in Reference Objects Instance Class.",
      "modelAnswer": "A Class is like a blueprint Using blueprint, we can create as many objects that we want Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "A Class is like a blueprint",
        "Using blueprint, we can create as many objects that we want",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "A Class is like a blueprint",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 1,
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
        "This object can also be known as an instance.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Using blueprint, we can create as many objects that we want",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "A Class is like a blueprint"
      ],
      "answer": [
        0,
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
        "Modelling",
        "sometimes",
        "Class",
        "Objectoriented"
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"StaticAndInstanceMethods.java\"?\n\n___ class StaticAndInstanceMethods {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_static-and-instance-methods_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Methods",
      "question": "Which of the following statements about Static And Instance Methods are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is StaticAndInstanceMethods.java.",
        "This topic has 4 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for StaticAndInstanceMethods.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_static-and-instance-methods_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Methods",
      "question": "Complete the missing keyword in this snippet from \"StaticAndInstanceMethods.java\".",
      "code": "___ class StaticAndInstanceMethods {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for StaticAndInstanceMethods.java.",
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
      "code": "        System.out.println(\"Hello\");\r",
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
      "modelAnswer": "Static Methods 1) Static methods are declared using a static modifier and they belong to Class Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Static Methods",
        "1) Static methods are declared using a static modifier and they belong to Class",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Static Methods",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 2,
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
        "1) Static methods are declared using a static modifier and they belong to Class",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Static Methods",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "2) Static methods can't access instance methods and instance variables directly."
      ],
      "answer": [
        0,
        2,
        4
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
        "sometimes",
        "Modelling",
        "Static",
        "Objectoriented"
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "5)  Whenever a method that doesn't use instance variables is declared, that method should probably be declared as a static method.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 1,
      "explanation": "This is a key gotcha or note taken directly from the source for Static And Instance Methods.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_plain-old-java-object_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Plain Old Java Object",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PlainOldJavaObject.java\"?\n\ni)   A plain old Java object acronym POJO is a ___ that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data",
      "options": [
        "class",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_plain-old-java-object_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Plain Old Java Object",
      "question": "Which of the following statements about Plain Old Java Object are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is PlainOldJavaObject.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for PlainOldJavaObject.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_plain-old-java-object_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Plain Old Java Object",
      "question": "Complete the missing keyword in this snippet from \"PlainOldJavaObject.java\".",
      "code": "   i)   A plain old Java object acronym POJO is a ___ that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for PlainOldJavaObject.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_plain-old-java-object_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Plain Old Java Object",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Plain Old Java Object\");",
      "answer": [
        "OOP Concepts - Plain Old Java Object"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_plain-old-java-object_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Plain Old Java Object",
      "question": "Explain the main ideas in Plain Old Java Object.",
      "modelAnswer": "POJO CONCEPTS i)   A plain old Java object acronym POJO is a class that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data ii)  It's used to house data and pass data between functional classes. iii) It usually has no other, or very few methods, other than getters and setters for the instance fields. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "POJO CONCEPTS i)   A plain old Java object acronym POJO is a class that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data ii)  It's used to house data and pass data between functional classes.",
        "iii) It usually has no other, or very few methods, other than getters and setters for the instance fields.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "POJO CONCEPTS i)   A plain old Java object acronym POJO is a class that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data ii)  It's used to house data and pass data between functional classes.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 0,
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
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "iii) It usually has no other, or very few methods, other than getters and setters for the instance fields.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "POJO CONCEPTS i)   A plain old Java object acronym POJO is a class that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data ii)  It's used to house data and pass data between functional classes.",
        "iv)  Many database frameworks use POJO's to read data from, or to write data to databases,files or streams."
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
        "Modelling",
        "sometimes",
        "Objectoriented",
        "CONCEPTS"
      ],
      "answer": 3,
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Annotations (@Override, @SuppressWarnings, etc.) are metadata — they provide information to the compiler or tools. They do not change runtime behaviour.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 2,
      "explanation": "This is a key gotcha or note taken directly from the source for Plain Old Java Object.",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_main_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which of the following statements about Main are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is Main.java.",
        "This topic has 17 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Main.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_main_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "___ class Main {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Main.java.",
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
      "code": "        System.out.println(\"*****************************************\");\r",
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
      "modelAnswer": "StudentRecord[id=1, name=Navneet, dateOfBirth=19/03/1994, classList=Java MasterClass] StudentRecord[id=2, name=Puttu, dateOfBirth=20/04/1995, classList=Javascript MasterClass] Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "StudentRecord[id=1, name=Navneet, dateOfBirth=19/03/1994, classList=Java MasterClass]",
        "StudentRecord[id=2, name=Puttu, dateOfBirth=20/04/1995, classList=Javascript MasterClass]",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "StudentRecord[id=1, name=Navneet, dateOfBirth=19/03/1994, classList=Java MasterClass]",
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
        "StudentRecord[id=1, name=Navi, dateOfBirth=21/05/1996, classList=Python MasterClass]",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "StudentRecord[id=2, name=Puttu, dateOfBirth=20/04/1995, classList=Javascript MasterClass]",
        "StudentRecord[id=1, name=Navneet, dateOfBirth=19/03/1994, classList=Java MasterClass]"
      ],
      "answer": [
        0,
        3,
        4
      ],
      "explanation": "The true statements are taken directly from the notes for Main.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_student_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Student.java\"?\n\n___ class Student {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_student_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student",
      "question": "Which of the following statements about Student are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is Student.java.",
        "This topic has 5 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Student.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_student_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student",
      "question": "Complete the missing keyword in this snippet from \"Student.java\".",
      "code": "___ class Student {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Student.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_student_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Student\");",
      "answer": [
        "OOP Concepts - Student"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_student_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student",
      "question": "Explain the main ideas in Student.",
      "modelAnswer": "The toString() method is a special method in Java. The method called toString() will print out all the attributes(instance variables) of the instances(objects) in the class in a formatted way. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "The toString() method is a special method in Java.",
        "The method called toString() will print out all the attributes(instance variables) of the instances(objects) in the class in a formatted way.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "The toString() method is a special method in Java."
      ],
      "answer": 3,
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
        "The toString() method can be implemented in any class, and doing this helps to print out the current state of the object.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "The toString() method is a special method in Java."
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
        "toString",
        "Objectoriented",
        "Modelling"
      ],
      "answer": 1,
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
        "void",
        "String",
        "boolean",
        "int"
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"StaticAndInstanceVariables.java\"?\n\n1) A ___ variable is Declared by using the keyword ___.",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_static-and-instance-variables_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Variables",
      "question": "Which of the following statements about Static And Instance Variables are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is StaticAndInstanceVariables.java.",
        "This topic has 12 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for StaticAndInstanceVariables.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_static-and-instance-variables_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Variables",
      "question": "Complete the missing keyword in this snippet from \"StaticAndInstanceVariables.java\".",
      "code": "1) A ___ variable is Declared by using the keyword ___.\r",
      "answer": [
        "static"
      ],
      "explanation": "The missing keyword is 'static', taken from the parsed source for StaticAndInstanceVariables.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_static-and-instance-variables_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Variables",
      "question": "What does this code print?",
      "code": "        System.out.println(\"name = \" + name);\r",
      "answer": [
        "name = "
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_static-and-instance-variables_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Variables",
      "question": "Explain the main ideas in Static And Instance Variables.",
      "modelAnswer": "Static Variables 1) A static variable is Declared by using the keyword static. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Static Variables",
        "1) A static variable is Declared by using the keyword static.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Static Variables"
      ],
      "answer": 3,
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
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Static Variables",
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
        "Static",
        "Objectoriented",
        "sometimes",
        "Modelling"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Static', from the notes for Static And Instance Variables.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_student-record_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student Record",
      "question": "Which Java keyword correctly fills in the blank in this code from \"StudentRecord.java\"?\n\n3) The record is a special ___ that contains data that's not meant to be altered.",
      "options": [
        "class",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_student-record_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student Record",
      "question": "Which of the following statements about Student Record are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is StudentRecord.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for StudentRecord.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_student-record_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student Record",
      "question": "Complete the missing keyword in this snippet from \"StudentRecord.java\".",
      "code": "  3) The record is a special ___ that contains data that's not meant to be altered.\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for StudentRecord.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_student-record_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student Record",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Student Record\");",
      "answer": [
        "OOP Concepts - Student Record"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_student-record_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student Record",
      "question": "Explain the main ideas in Student Record.",
      "modelAnswer": "The Record Type 1) The record was introduced in JDK 14 and became officially part of Java in JDK 16. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "The Record Type",
        "1) The record was introduced in JDK 14 and became officially part of Java in JDK 16.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "The Record Type"
      ],
      "answer": 3,
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
        "The Record Type",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "1) The record was introduced in JDK 14 and became officially part of Java in JDK 16.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "2) It's purpose is to replace the boilerplate code of the POJO but to be more restrictive."
      ],
      "answer": [
        0,
        2,
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
        "Record",
        "sometimes",
        "Modelling",
        "Objectoriented"
      ],
      "answer": 0,
      "explanation": "The missing word is 'Record', from the notes for Student Record.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_point-class-distance-calculation_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "Which Java keyword correctly fills in the blank in this code from \"PointClassDistanceCalculation.java\"?\n\nYou have to represent a point in 2D space. Write a ___ with the name Point. The ___ needs two fields (instance variables) with name x and y of type int.",
      "options": [
        "class",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_point-class-distance-calculation_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "Which of the following statements about Point Class Distance Calculation are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is PointClassDistanceCalculation.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for PointClassDistanceCalculation.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_point-class-distance-calculation_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "Complete the missing keyword in this snippet from \"PointClassDistanceCalculation.java\".",
      "code": "You have to represent a point in 2D space. Write a ___ with the name Point. The ___ needs two fields (instance variables) with name x and y of type int.\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for PointClassDistanceCalculation.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_point-class-distance-calculation_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Point Class Distance Calculation\");",
      "answer": [
        "OOP Concepts - Point Class Distance Calculation"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_point-class-distance-calculation_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "Explain the main ideas in Point Class Distance Calculation.",
      "modelAnswer": "Point Class and Distance Calculation You have to represent a point in 2D space. Write a class with the name Point. The class needs two fields (instance variables) with name x and y of type int. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Point Class and Distance Calculation",
        "You have to represent a point in 2D space. Write a class with the name Point. The class needs two fields (instance variables) with name x and y of type int.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Point Class and Distance Calculation",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": 0,
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
        "The class needs to have two constructors. The first constructor does not have any parameters (no-arg constructor). The second constructor has parameters x and y of type int and it needs to initialize the fields.",
        "You have to represent a point in 2D space. Write a class with the name Point. The class needs two fields (instance variables) with name x and y of type int.",
        "Point Class and Distance Calculation",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": [
        0,
        1,
        2
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
        "sometimes",
        "Objectoriented",
        "Modelling"
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
        "String",
        "boolean"
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
      "question": "Which Java keyword correctly fills in the blank in this code from \"WallAreaComputation.java\"?\n\nWrite a ___ with the name Wall. The ___ needs two fields (instance variables) with name width and height of type double.",
      "options": [
        "class",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_wall-area-computation_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Wall Area Computation",
      "question": "Which of the following statements about Wall Area Computation are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is WallAreaComputation.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for WallAreaComputation.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_wall-area-computation_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Wall Area Computation",
      "question": "Complete the missing keyword in this snippet from \"WallAreaComputation.java\".",
      "code": "Write a ___ with the name Wall. The ___ needs two fields (instance variables) with name width and height of type double.\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for WallAreaComputation.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_wall-area-computation_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Wall Area Computation",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Wall Area Computation\");",
      "answer": [
        "OOP Concepts - Wall Area Computation"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_wall-area-computation_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Wall Area Computation",
      "question": "Explain the main ideas in Wall Area Computation.",
      "modelAnswer": "Wall Area Computation Write a class with the name Wall. The class needs two fields (instance variables) with name width and height of type double. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Wall Area Computation",
        "Write a class with the name Wall. The class needs two fields (instance variables) with name width and height of type double.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Wall Area Computation",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 2,
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
        "Write a class with the name Wall. The class needs two fields (instance variables) with name width and height of type double.",
        "The class needs to have two constructors:",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Wall Area Computation"
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
        "Objectoriented",
        "sometimes",
        "Modelling",
        "Computation"
      ],
      "answer": 3,
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
        "double",
        "int"
      ],
      "answer": 2,
      "explanation": "The method getWidth() is declared with return type 'double' in WallAreaComputation.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_animal_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Animal",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Animal.java\"?\n\n___ class Animal {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_animal_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Animal",
      "question": "Which of the following statements about Animal are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is Animal.java.",
        "This topic has 4 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Animal.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_animal_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Animal",
      "question": "Complete the missing keyword in this snippet from \"Animal.java\".",
      "code": "___ class Animal {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Animal.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_animal_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Animal",
      "question": "What does this code print?",
      "code": "        System.out.println(type + \" moves \" + speed);\r",
      "answer": [
        " moves "
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_animal_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Animal",
      "question": "Explain the main ideas in Animal.",
      "modelAnswer": "This is a super class, aka top parent class. This class will contain all the attributes that all types of animal has. Also, the super class will have all the behaviour that animals have in common. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "This is a super class, aka top parent class. This class will contain all the attributes that all types of animal has.",
        "Also, the super class will have all the behaviour that animals have in common.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
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
        "This is a super class, aka top parent class. This class will contain all the attributes that all types of animal has.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Method Overriding",
        "Also, the super class will have all the behaviour that animals have in common.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code"
      ],
      "answer": [
        0,
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
        "Objectoriented",
        "Modelling"
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
        "String",
        "boolean",
        "int",
        "void"
      ],
      "answer": 0,
      "explanation": "The method toString() is declared with return type 'String' in Animal.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_dog_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Dog.java\"?\n\n___ class Dog extends Animal { // Using extends specifies the superclass ( or the parent class ) of the class that has been declatred",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_dog_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Which of the following statements about Dog are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is Dog.java.",
        "This topic has 11 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Dog.java.",
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
      "code": "      //  System.out.println(type + \" makes some noise\");\r",
      "answer": [
        " makes some noise"
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
      "modelAnswer": "Dog inherits from Animal Dog \"IS A\" a type of Animal Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Dog inherits from Animal",
        "Dog \"IS A\" a type of Animal",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Dog inherits from Animal",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Dog inherits from Animal",
        "Dog is a subclass or child class of Animal",
        "Dog \"IS A\" a type of Animal",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": [
        1,
        2,
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
        "sometimes",
        "Modelling"
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
        "int",
        "void",
        "boolean",
        "String"
      ],
      "answer": 3,
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
        "Comparable",
        "Animal",
        "Object",
        "Runnable"
      ],
      "answer": 1,
      "explanation": "Dog extends Animal as declared in Dog.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_fish_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Fish",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Fish.java\"?\n\n___ class Fish extends Animal{",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_fish_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Fish",
      "question": "Which of the following statements about Fish are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is Fish.java.",
        "This topic has 2 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Fish.java.",
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
      "code": "        System.out.println(\"muscle moving \");\r",
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
      "modelAnswer": "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Object",
        "Animal",
        "Comparable"
      ],
      "answer": 2,
      "explanation": "Fish extends Animal as declared in Fish.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_inheritance_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Inheritance",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Inheritance.java\"?\n\n___ class Inheritance {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_inheritance_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Inheritance",
      "question": "Which of the following statements about Inheritance are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is Inheritance.java.",
        "This topic has 5 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Inheritance.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_inheritance_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Inheritance",
      "question": "Complete the missing keyword in this snippet from \"Inheritance.java\".",
      "code": "___ class Inheritance {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Inheritance.java.",
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
      "code": "System.out.println(\"OOP Concepts - Inheritance\");",
      "answer": [
        "OOP Concepts - Inheritance"
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
      "modelAnswer": "Inheritance is basically a form of code reuse. It's a way to organize classes into a parent-child hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent. Animal (Base Class) Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Inheritance is basically a form of code reuse. It's a way to organize classes into a parent-child hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent.",
        "Animal (Base Class)",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Inheritance is basically a form of code reuse. It's a way to organize classes into a parent-child hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent."
      ],
      "answer": 3,
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
        "Inheritance is basically a form of code reuse. It's a way to organize classes into a parent-child hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Vertebrates (Sub Class of Animal)",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Animal (Base Class)"
      ],
      "answer": [
        0,
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
        "Inheritance",
        "sometimes",
        "Objectoriented",
        "Modelling"
      ],
      "answer": 0,
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
        "Object",
        "Animal"
      ],
      "answer": 3,
      "explanation": "Dog extends Animal as declared in Inheritance.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_main_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Main.java\"?\n\nimplement the methods of ___ class.",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_main_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which of the following statements about Main are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is Main.java.",
        "This topic has 4 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Main.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_main_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "  implement the methods of ___ class.\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for Main.java.",
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
      "code": "System.out.println(\"OOP Concepts - Main\");",
      "answer": [
        "OOP Concepts - Main"
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
      "modelAnswer": "Every class created in Java extends a special Java class. That class is named Object, and it's in the java.lang package. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Every class created in Java extends a special Java class.",
        "That class is named Object, and it's in the java.lang package.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Every class created in Java extends a special Java class."
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
        "That class is named Object, and it's in the java.lang package.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Every class created in Java extends a special Java class.",
        "Class Object is the root of the class hierarchy."
      ],
      "answer": [
        0,
        3,
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
        "sometimes",
        "Modelling",
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
        "boolean",
        "String",
        "int"
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
        "Serializable",
        "Comparable",
        "Runnable",
        "Object"
      ],
      "answer": 3,
      "explanation": "Main extends Object as declared in Main.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_employee_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Employee",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Employee.java\"?\n\n___ class Employee extends Worker {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_employee_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Employee",
      "question": "Which of the following statements about Employee are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is Employee.java.",
        "This topic has 3 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Employee.java.",
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
      "type": "predict",
      "qid": "chapter-14-oop-concepts_employee_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Employee",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Employee\");",
      "answer": [
        "OOP Concepts - Employee"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_employee_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Employee",
      "question": "Explain the main ideas in Employee.",
      "modelAnswer": "Employee Class Extends the Worker Class Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Employee Class Extends the Worker Class",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Employee Class Extends the Worker Class"
      ],
      "answer": 3,
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
        "Modelling",
        "Employee",
        "Objectoriented",
        "sometimes"
      ],
      "answer": 1,
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
        "String",
        "void",
        "boolean",
        "int"
      ],
      "answer": 0,
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
        "Object",
        "Worker",
        "Runnable",
        "Comparable"
      ],
      "answer": 1,
      "explanation": "Employee extends Worker as declared in Employee.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_hourly-employee_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Hourly Employee",
      "question": "Which Java keyword correctly fills in the blank in this code from \"HourlyEmployee.java\"?\n\n___ class HourlyEmployee extends Employee {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_hourly-employee_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Hourly Employee",
      "question": "Which of the following statements about Hourly Employee are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is HourlyEmployee.java.",
        "This topic has 2 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for HourlyEmployee.java.",
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
      "type": "predict",
      "qid": "chapter-14-oop-concepts_hourly-employee_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Hourly Employee",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Hourly Employee\");",
      "answer": [
        "OOP Concepts - Hourly Employee"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_hourly-employee_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Hourly Employee",
      "question": "Explain the main ideas in Hourly Employee.",
      "modelAnswer": "The HourlyEmployee Class extends the Employee Class Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "The HourlyEmployee Class extends the Employee Class",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "The HourlyEmployee Class extends the Employee Class",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 0,
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
        "sometimes",
        "HourlyEmployee",
        "Modelling"
      ],
      "answer": 2,
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
        "void",
        "double",
        "String"
      ],
      "answer": 2,
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
        "Object",
        "Runnable",
        "Employee",
        "Comparable"
      ],
      "answer": 2,
      "explanation": "HourlyEmployee extends Employee as declared in HourlyEmployee.java.",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_main_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Which of the following statements about Main are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is Main.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Main.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_main_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "___ class Main {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Main.java.",
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
      "code": "System.out.println(\"OOP Concepts - Main\");",
      "answer": [
        "OOP Concepts - Main"
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
      "modelAnswer": "This is the Inheritance Coding Challenge demo: a Worker → Employee → SalariedEmployee/HourlyEmployee hierarchy. Worker is the base class. Employee extends Worker, adding employeeId and hireDate. SalariedEmployee and HourlyEmployee extend Employee. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "This is the Inheritance Coding Challenge demo: a Worker → Employee → SalariedEmployee/HourlyEmployee hierarchy.",
        "Worker is the base class. Employee extends Worker, adding employeeId and hireDate. SalariedEmployee and HourlyEmployee extend Employee.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "This is the Inheritance Coding Challenge demo: a Worker → Employee → SalariedEmployee/HourlyEmployee hierarchy.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
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
        "Worker is the base class. Employee extends Worker, adding employeeId and hireDate. SalariedEmployee and HourlyEmployee extend Employee.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This is the Inheritance Coding Challenge demo: a Worker → Employee → SalariedEmployee/HourlyEmployee hierarchy.",
        "Each subclass overrides the collectPay() method to compute pay differently: salaried divides annual salary by 26, hourly multiplies rate by 40 hours."
      ],
      "answer": [
        0,
        3,
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
        "Modelling",
        "sometimes",
        "Inheritance",
        "Objectoriented"
      ],
      "answer": 2,
      "explanation": "The missing word is 'Inheritance', from the notes for Main.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_salaried-employee_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Salaried Employee",
      "question": "Which Java keyword correctly fills in the blank in this code from \"SalariedEmployee.java\"?\n\n___ class SalariedEmployee extends Employee {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_salaried-employee_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Salaried Employee",
      "question": "Which of the following statements about Salaried Employee are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is SalariedEmployee.java.",
        "This topic has 3 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for SalariedEmployee.java.",
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
      "type": "predict",
      "qid": "chapter-14-oop-concepts_salaried-employee_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Salaried Employee",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Salaried Employee\");",
      "answer": [
        "OOP Concepts - Salaried Employee"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_salaried-employee_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Salaried Employee",
      "question": "Explain the main ideas in Salaried Employee.",
      "modelAnswer": "The salaried employee class, extends the Employee Class Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "The salaried employee class, extends the Employee Class",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "The salaried employee class, extends the Employee Class",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods."
      ],
      "answer": 0,
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
        "Modelling",
        "salaried",
        "sometimes"
      ],
      "answer": 2,
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
        "int",
        "double",
        "void",
        "String"
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
        "Employee",
        "Comparable",
        "Object",
        "Runnable"
      ],
      "answer": 0,
      "explanation": "SalariedEmployee extends Employee as declared in SalariedEmployee.java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_worker_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Worker",
      "question": "Which Java keyword correctly fills in the blank in this code from \"Worker.java\"?\n\nBelow the Worker Class, introduce another Class named Employee which ___ the Worker Class",
      "options": [
        "extends",
        "static",
        "void",
        "public"
      ],
      "answer": 0,
      "explanation": "The correct keyword is 'extends'. It fits the syntax and semantics of this Java statement.",
      "tags": []
    },
    {
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_worker_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Worker",
      "question": "Which of the following statements about Worker are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is Worker.java.",
        "This topic has 4 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for Worker.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_worker_codefill_2",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Worker",
      "question": "Complete the missing keyword in this snippet from \"Worker.java\".",
      "code": "Below the Worker Class, introduce another Class named Employee which ___ the Worker Class\r",
      "answer": [
        "extends"
      ],
      "explanation": "The missing keyword is 'extends', taken from the parsed source for Worker.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_worker_predict_3",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Worker",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Worker\");",
      "answer": [
        "OOP Concepts - Worker"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_worker_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Worker",
      "question": "Explain the main ideas in Worker.",
      "modelAnswer": "Inheritance Challenge Problem Create Worker Class -> This should be on top of the Hierarchy Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Inheritance Challenge Problem",
        "Create Worker Class -> This should be on top of the Hierarchy",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "Create Worker Class -> This should be on top of the Hierarchy",
        "Create attributes :-",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "Inheritance Challenge Problem"
      ],
      "answer": [
        1,
        2,
        4
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
        "Modelling",
        "sometimes",
        "Objectoriented",
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
      "qid": "chapter-14-oop-concepts_method-overriding-in-java_scq_0",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "question": "Which Java keyword correctly fills in the blank in this code from \"MethodOverridingInJava.java\"?\n\n___ class MethodOverridingInJava {",
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
      "type": "mcq",
      "qid": "chapter-14-oop-concepts_method-overriding-in-java_mcq_1",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "question": "Which of the following statements about Method Overriding In Java are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is MethodOverridingInJava.java.",
        "This topic has 0 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for MethodOverridingInJava.java.",
      "tags": []
    },
    {
      "type": "codefill",
      "qid": "chapter-14-oop-concepts_method-overriding-in-java_codefill_2",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "question": "Complete the missing keyword in this snippet from \"MethodOverridingInJava.java\".",
      "code": "___ class MethodOverridingInJava {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for MethodOverridingInJava.java.",
      "tags": [
        "codefill"
      ]
    },
    {
      "type": "predict",
      "qid": "chapter-14-oop-concepts_method-overriding-in-java_predict_3",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "question": "What does this code print?",
      "code": "// @quiz (OCJP TRAP) What is the output? class Animal { void speak(){ System.out.println(\"Animal\"); } } class Dog extends Animal { void speak(){ System.out.println(\"Dog\"); } } Animal a = new Dog(); a.speak();\r",
      "answer": [
        "Animal"
      ],
      "explanation": "The output comes directly from the string literal in the println call.",
      "tags": [
        "predict"
      ]
    },
    {
      "type": "interview",
      "qid": "chapter-14-oop-concepts_method-overriding-in-java_interview_4",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "question": "Explain the main ideas in Method Overriding In Java.",
      "modelAnswer": "Method overriding, means defining a method in a child class that already exists in the parent class, with the same signature (In other words, the same name, and same parameters). By extending the parent class, the child class gets all the methods defined in the parent class. Those methods are also known as derived methods. Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "keyPoints": [
        "Method overriding, means defining a method in a child class that already exists in the parent class, with the same signature (In other words, the same name, and same parameters).",
        "By extending the parent class, the child class gets all the methods defined in the parent class. Those methods are also known as derived methods.",
        "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error)."
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
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Method overriding, means defining a method in a child class that already exists in the parent class, with the same signature (In other words, the same name, and same parameters).",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": 2,
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
        "Method overriding is also known as Runtime Polymorphism or Dynamic Method Dispatch because the method that is going to be called is decided at runtime by the Java virtual machine.",
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "By extending the parent class, the child class gets all the methods defined in the parent class. Those methods are also known as derived methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it."
      ],
      "answer": [
        0,
        1,
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
        "Objectoriented",
        "sometimes",
        "Modelling",
        "Method"
      ],
      "answer": 3,
      "explanation": "The missing word is 'Method', from the notes for Method Overriding In Java.",
      "tags": []
    },
    {
      "type": "scq",
      "qid": "chapter-14-oop-concepts_method-overriding-in-java_gotcha-scq_5",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overriding In Java",
      "question": "What is an important consideration when working with Method Overriding In Java?",
      "options": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "@answer TRAP: beginners think Animal's speak() is called because the reference is Animal. Wrong — it's always the actual object's method."
      ],
      "answer": 3,
      "explanation": "This is a key gotcha or note taken directly from the source for Method Overriding In Java.",
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
        "Object",
        "Animal",
        "Comparable"
      ],
      "answer": 2,
      "explanation": "Dog extends Animal as declared in MethodOverridingInJava.java.",
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
      "main"
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
      "@quiz (INTERVIEW TRAP) int a=10; int b=20; String c=\"Navneet\"; What is the output of: System.out.println(a + b + c);",
      "@quiz (INTERVIEW TRAP) int a=10; int b=20; String c=\"Navneet\"; What is the output of: System.out.println(c + a + b);",
      "@quiz (INTERVIEW TRAP) What is the output of: System.out.println(\"Result: \" + 1 + 2);"
    ],
    "syntax": "public class StringExample {\n\r\n    public static void main(String[] args) {\r\n\r\n        String myString = \"This is a string\";\r\n        System.out.println(\"MyString is equal to \" + myString);\r\n        myString = myString  + \", and this is more.\";\r\n        System.out.println(\"myString is equal to \" + myString);\r\n        myString = myString + \" \\u00A9 2022\";\r\n        System.out.println(\"myString is equal to \" + myString);",
    "badges": [
      "main",
      "aMethod"
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
      "@quiz (INTERVIEW TRAP) What is the output of: System.out.println(10 + 20 + \"Java\");",
      "@quiz (INTERVIEW TRAP) What is the output of: System.out.println(\"Java\" + 10 + 20);",
      "@quiz (INTERVIEW TRAP) What is the output of: System.out.println(\"Java\" + (10 + 20));",
      "@quiz (INTERVIEW TRAP) What is wrong with writing if (x = 5) instead of if (x == 5)?"
    ],
    "syntax": "public class OperatorsOperandsExpressions {\n\r\n    public static void main(String[] args) {\r\n\r\n        int myVar = 15 + 12; // 15 and 12 are operands; + is the addition operator.\r\n        double hoursWorked = 9.5d;\r\n        double hourlyRate = 5d;\r\n        double mySalary = hoursWorked * hourlyRate; // hoursWorked and hourlyRate are operands; * is the multiplication operator.\r\n\r\n        // myVar = myVar + 1 is equivalent to myVar++ (increment by 1).",
    "badges": [
      "main"
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
      "main"
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
      "main"
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
      "@answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.",
      "NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "NOTE: Do not add a main method to your solution code!",
      "NOTE: The shouldWakeUp method  needs to be defined as public static like we have been doing so far in the course."
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
      "main"
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
      "@quiz (INTERVIEW TRAP) Does a finally block always execute in Java, even if there is a return in try or catch?"
    ],
    "syntax": "public class ExceptionHandlingInJava {\n    public static void main(String[] args) {\r\n\r\n        try{ // The try block wraps any code that might throw an exception at runtime.\r\n            // Place only the risky code here — keep try blocks as small as possible.\r\n        } // The try block ends here; the catch block immediately follows.\r\n        catch (Exception e){  // The catch parameter specifies which exception type to handle. 'Exception' is the base class that catches any exception.\r\n                              // The variable 'e' holds information about the exception, including its message and stack trace.\r\n                              // The catch block contains your error handling logic — log the error, show a message, or recover gracefully.\r\n        }",
    "badges": [
      "main"
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
  }
};
