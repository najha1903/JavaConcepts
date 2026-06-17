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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for HelloWorld.java."
    },
    {
      "type": "codefill",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "question": "Complete the missing keyword in this snippet from \"HelloWorld.java\".",
      "code": "___ class HelloWorld {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for HelloWorld.java."
    },
    {
      "type": "predict",
      "difficulty": "easy",
      "chapter": "Chapter 1: Java Introduction",
      "topic": "Hello World",
      "question": "What does this code print?",
      "code": "System.out.println(\"Java Introduction - Hello World\");",
      "answer": [
        "Java Introduction - Hello World"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    }
  ],
  "Chapter 2: Primitive Types": [
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for StringExample.java."
    },
    {
      "type": "codefill",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "question": "Complete the missing keyword in this snippet from \"StringExample.java\".",
      "code": "___ class StringExample {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for StringExample.java."
    },
    {
      "type": "predict",
      "difficulty": "easy",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "String Example",
      "question": "What does this code print?",
      "code": "        System.out.println(\"MyString is equal to \" + myString);\r",
      "answer": [
        "MyString is equal to "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for LocalVariablesAndScope.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "question": "Complete the missing keyword in this snippet from \"LocalVariablesAndScope.java\".",
      "code": "  public ___ void aMethod(int counter) {",
      "answer": [
        "static"
      ],
      "explanation": "The missing keyword is 'static', taken from the parsed source for LocalVariablesAndScope.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Local Variables And Scope",
      "question": "What does this code print?",
      "code": "System.out.println(\"Primitive Types - Local Variables And Scope\");",
      "answer": [
        "Primitive Types - Local Variables And Scope"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Variables.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "question": "Complete the missing keyword in this snippet from \"Variables.java\".",
      "code": "___ class Variables {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Variables.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Variables",
      "question": "What does this code print?",
      "code": "System.out.println(\"Primitive Types - Variables\");",
      "answer": [
        "Primitive Types - Variables"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for KeyWordsAndExpressionsInJava.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "question": "Complete the missing keyword in this snippet from \"KeyWordsAndExpressionsInJava.java\".",
      "code": "___ class KeyWordsAndExpressionsInJava {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for KeyWordsAndExpressionsInJava.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Key Words And Expressions In Java",
      "question": "What does this code print?",
      "code": "            System.out.println(\"You got the high score!\"); // You got the highscore! is a part of expression.\r",
      "answer": [
        "You got the high score!"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for PrimitiveDataTypes.java."
    },
    {
      "type": "codefill",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "question": "Complete the missing keyword in this snippet from \"PrimitiveDataTypes.java\".",
      "code": "___ class PrimitiveDataTypes {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for PrimitiveDataTypes.java."
    },
    {
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 2: Primitive Types",
      "topic": "Primitive Data Types",
      "question": "What does this code print?",
      "code": "        System.out.println(\"The max Value of the integer is = \" + intMaxValue); //The max Value of the integer is = 2147483647\r",
      "answer": [
        "The max Value of the integer is = "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    }
  ],
  "Chapter 3: Operators": [
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for OperatorsOperandsExpressions.java."
    },
    {
      "type": "codefill",
      "difficulty": "easy",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "question": "Complete the missing keyword in this snippet from \"OperatorsOperandsExpressions.java\".",
      "code": "___ class OperatorsOperandsExpressions {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for OperatorsOperandsExpressions.java."
    },
    {
      "type": "predict",
      "difficulty": "easy",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "question": "What does this code print?",
      "code": "System.out.println(\"Operators - Operators Operands Expressions\");",
      "answer": [
        "Operators - Operators Operands Expressions"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operators Operands Expressions",
      "question": "Explain the main ideas in Operators Operands Expressions.",
      "modelAnswer": "Summary of Operators 1) Operator --> (+) plus operator Always be aware of scope, type constraints, and compiler rules in this area.",
      "keyPoints": [
        "Summary of Operators",
        "1) Operator --> (+) plus operator",
        "Always be aware of scope, type constraints, and compiler rules in this area."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for OperatorChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operator Challenge",
      "question": "Complete the missing keyword in this snippet from \"OperatorChallenge.java\".",
      "code": "___ class OperatorChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for OperatorChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operator Challenge",
      "question": "What does this code print?",
      "code": "        System.out.println(\"Remainder check is :-  \" + checkRemainder);\r",
      "answer": [
        "Remainder check is :-  "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 3: Operators",
      "topic": "Operator Challenge",
      "question": "Explain the main ideas in Operator Challenge.",
      "modelAnswer": "OPERATOR CHALLENGE 1. Create a double variable with a value of 20.00 Always be aware of scope, type constraints, and compiler rules in this area.",
      "keyPoints": [
        "OPERATOR CHALLENGE",
        "1. Create a double variable with a value of 20.00",
        "Always be aware of scope, type constraints, and compiler rules in this area."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    }
  ],
  "Chapter 5: Statements And Indentations": [
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for StatementsWhiteSpaceAndIndentation.java."
    },
    {
      "type": "codefill",
      "difficulty": "easy",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "question": "Complete the missing keyword in this snippet from \"StatementsWhiteSpaceAndIndentation.java\".",
      "code": "___ class StatementsWhiteSpaceAndIndentation {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for StatementsWhiteSpaceAndIndentation.java."
    },
    {
      "type": "predict",
      "difficulty": "easy",
      "chapter": "Chapter 5: Statements And Indentations",
      "topic": "Statements White Space And Indentation",
      "question": "What does this code print?",
      "code": "// Types of statements: declaration statements (int x = 5;), assignment statements (x = 10;), method call statements (System.out.println(\"hi\");), and more.",
      "answer": [
        "hi"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    }
  ],
  "Chapter 6: If Else Statements": [
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'this'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for IfExample.java."
    },
    {
      "type": "codefill",
      "difficulty": "easy",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "question": "Complete the missing keyword in this snippet from \"IfExample.java\".",
      "code": "    Operand one - ageOfClient == 20, in ___ case we are checking the condition. It will return either true or false.\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for IfExample.java."
    },
    {
      "type": "predict",
      "difficulty": "easy",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "If Example",
      "question": "What does this code print?",
      "code": "            System.out.println(\"It is not an alien!\");\r",
      "answer": [
        "It is not an alien!"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for CodeBlocksIfThenElse.java."
    },
    {
      "type": "codefill",
      "difficulty": "hard",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Code Blocks If Then Else",
      "question": "Complete the missing keyword in this snippet from \"CodeBlocksIfThenElse.java\".",
      "code": "___ class CodeBlocksIfThenElse {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for CodeBlocksIfThenElse.java."
    },
    {
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 6: If Else Statements",
      "topic": "Code Blocks If Then Else",
      "question": "What does this code print?",
      "code": "            System.out.println(\"Your score was less than 5000 but greater than 1000\");\r",
      "answer": [
        "Your score was less than 5000 but greater than 1000"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    }
  ],
  "Chapter 7: Methods In Java": [
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for MethodsInJava.java."
    },
    {
      "type": "codefill",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "question": "Complete the missing keyword in this snippet from \"MethodsInJava.java\".",
      "code": "___ class MethodsInJava {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for MethodsInJava.java."
    },
    {
      "type": "predict",
      "difficulty": "easy",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "question": "What does this code print?",
      "code": "        System.out.println(\"Your final score was \" + highScore);\r",
      "answer": [
        "Your final score was "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods In Java",
      "question": "Explain the main ideas in Methods In Java.",
      "modelAnswer": "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed. Methods are the foundation of the DRY principle — Don't Repeat Yourself. They make code organized, readable, and maintainable. NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "keyPoints": [
        "A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.",
        "Methods are the foundation of the DRY principle — Don't Repeat Yourself. They make code organized, readable, and maintainable.",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for AreaCalculatorCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"AreaCalculatorCodingChallenge.java\".",
      "code": "___ class AreaCalculatorCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for AreaCalculatorCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Methods In Java - Area Calculator Coding Challenge\");",
      "answer": [
        "Methods In Java - Area Calculator Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Area Calculator Coding Challenge",
      "question": "Explain the main ideas in Area Calculator Coding Challenge.",
      "modelAnswer": "Write a method named area with one double parameter named radius. The method needs to return a double value that represents the area of a circle. NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "keyPoints": [
        "Write a method named area with one double parameter named radius.",
        "The method needs to return a double value that represents the area of a circle.",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for BarkingDogCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"BarkingDogCodingChallenge.java\".",
      "code": "___ class BarkingDogCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for BarkingDogCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Methods In Java - Barking Dog Coding Challenge\");",
      "answer": [
        "Methods In Java - Barking Dog Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Barking Dog Coding Challenge",
      "question": "Explain the main ideas in Barking Dog Coding Challenge.",
      "modelAnswer": "We have a dog that likes to bark.  We need to wake up if the dog is barking at night! Write a method shouldWakeUp that has 2 parameters. NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "keyPoints": [
        "We have a dog that likes to bark.  We need to wake up if the dog is barking at night!",
        "Write a method shouldWakeUp that has 2 parameters.",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for DecimalComparatorCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"DecimalComparatorCodingChallenge.java\".",
      "code": "___ class DecimalComparatorCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for DecimalComparatorCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Methods In Java - Decimal Comparator Coding Challenge\");",
      "answer": [
        "Methods In Java - Decimal Comparator Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Decimal Comparator Coding Challenge",
      "question": "Explain the main ideas in Decimal Comparator Coding Challenge.",
      "modelAnswer": "Write a method areEqualByThreeDecimalPlaces with two parameters of type double. The method should return boolean and it needs to return true if two double numbers are the same up to three decimal places. Otherwise, return false. NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "keyPoints": [
        "Write a method areEqualByThreeDecimalPlaces with two parameters of type double.",
        "The method should return boolean and it needs to return true if two double numbers are the same up to three decimal places. Otherwise, return false.",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for EqualityPrinterCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equality Printer Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"EqualityPrinterCodingChallenge.java\".",
      "code": "___ class EqualityPrinterCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for EqualityPrinterCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equality Printer Coding Challenge",
      "question": "What does this code print?",
      "code": "            System.out.println(\"Invalid Value\");\r",
      "answer": [
        "Invalid Value"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equality Printer Coding Challenge",
      "question": "Explain the main ideas in Equality Printer Coding Challenge.",
      "modelAnswer": "Write a method printEqual with 3 parameters of type int. The method should not return anything (void). If one of the parameters is less than 0, print text \"Invalid Value\". NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "keyPoints": [
        "Write a method printEqual with 3 parameters of type int. The method should not return anything (void).",
        "If one of the parameters is less than 0, print text \"Invalid Value\".",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for EqualSumCheckerCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"EqualSumCheckerCodingChallenge.java\".",
      "code": "___ class EqualSumCheckerCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for EqualSumCheckerCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Methods In Java - Equal Sum Checker Coding Challenge\");",
      "answer": [
        "Methods In Java - Equal Sum Checker Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Equal Sum Checker Coding Challenge",
      "question": "Explain the main ideas in Equal Sum Checker Coding Challenge.",
      "modelAnswer": "Write a method hasEqualSum with 3 parameters of type int. The method should return boolean and it needs to return true if the sum of the first and second parameter is equal to the third parameter. Otherwise, return false. NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "keyPoints": [
        "Write a method hasEqualSum with 3 parameters of type int.",
        "The method should return boolean and it needs to return true if the sum of the first and second parameter is equal to the third parameter. Otherwise, return false.",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for LeapYearCalculatorCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"LeapYearCalculatorCodingChallenge.java\".",
      "code": "___ class LeapYearCalculatorCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for LeapYearCalculatorCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Methods In Java - Leap Year Calculator Coding Challenge\");",
      "answer": [
        "Methods In Java - Leap Year Calculator Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Leap Year Calculator Coding Challenge",
      "question": "Explain the main ideas in Leap Year Calculator Coding Challenge.",
      "modelAnswer": "Write a method isLeapYear with a parameter of type int named year. The parameter needs to be greater than or equal to 1 and less than or equal to 9999. NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "keyPoints": [
        "Write a method isLeapYear with a parameter of type int named year.",
        "The parameter needs to be greater than or equal to 1 and less than or equal to 9999.",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for MegaBytesConverterCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Mega Bytes Converter Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"MegaBytesConverterCodingChallenge.java\".",
      "code": "___ class MegaBytesConverterCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for MegaBytesConverterCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Mega Bytes Converter Coding Challenge",
      "question": "What does this code print?",
      "code": "            System.out.println(\"Invalid Value\");\r",
      "answer": [
        "Invalid Value"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Mega Bytes Converter Coding Challenge",
      "question": "Explain the main ideas in Mega Bytes Converter Coding Challenge.",
      "modelAnswer": "Write a method called printMegaBytesAndKiloBytes that has 1 parameter of type int with the name kiloBytes. The method should not return anything (void) and it needs to calculate the megabytes and remaining kilobytes from the kilobytes parameter. NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "keyPoints": [
        "Write a method called printMegaBytesAndKiloBytes that has 1 parameter of type int with the name kiloBytes.",
        "The method should not return anything (void) and it needs to calculate the megabytes and remaining kilobytes from the kilobytes parameter.",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for MethodsChallengeProblem.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods Challenge Problem",
      "question": "Complete the missing keyword in this snippet from \"MethodsChallengeProblem.java\".",
      "code": "___ class MethodsChallengeProblem {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for MethodsChallengeProblem.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods Challenge Problem",
      "question": "What does this code print?",
      "code": "        System.out.println(name + \" managed to get into position \" + position + \" on the high score table \");\r",
      "answer": [
        " managed to get into position "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Methods Challenge Problem",
      "question": "Explain the main ideas in Methods Challenge Problem.",
      "modelAnswer": "Create a method called displayHighScorePosition. It should have player's name as a parameter, and a 2nd parameter as a position in the high score table. You should display the players name along with a message like \" managed to get into position \" and the position they got and a further message NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "keyPoints": [
        "Create a method called displayHighScorePosition. It should have player's name as a parameter, and a 2nd parameter as a position in the high score table.",
        "You should display the players name along with a message like \" managed to get into position \" and the position they got and a further message",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for MinutesToYearsAndDaysCalculatorCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Minutes To Years And Days Calculator Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"MinutesToYearsAndDaysCalculatorCodingChallenge.java\".",
      "code": "___ class MinutesToYearsAndDaysCalculatorCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for MinutesToYearsAndDaysCalculatorCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Minutes To Years And Days Calculator Coding Challenge",
      "question": "What does this code print?",
      "code": "            System.out.println(\"Invalid value\");\r",
      "answer": [
        "Invalid value"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Minutes To Years And Days Calculator Coding Challenge",
      "question": "Explain the main ideas in Minutes To Years And Days Calculator Coding Challenge.",
      "modelAnswer": "Write a method printYearsAndDays with parameter of type long named minutes. The method should not return anything (void) and it needs to calculate the years and days from the minutes parameter. NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "keyPoints": [
        "Write a method printYearsAndDays with parameter of type long named minutes.",
        "The method should not return anything (void) and it needs to calculate the years and days from the minutes parameter.",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for PlayingCatCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"PlayingCatCodingChallenge.java\".",
      "code": "___ class PlayingCatCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for PlayingCatCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Methods In Java - Playing Cat Coding Challenge\");",
      "answer": [
        "Methods In Java - Playing Cat Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Playing Cat Coding Challenge",
      "question": "Explain the main ideas in Playing Cat Coding Challenge.",
      "modelAnswer": "The cats spend most of the day playing. In particular, they play if the temperature is between 25 and 35 (inclusive). Unless it is summer, then the upper limit is 45 (inclusive) instead of 35. Write a method isCatPlaying that has 2 parameters. Method needs to return true if the cat is playing, otherwise return false NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "keyPoints": [
        "The cats spend most of the day playing. In particular, they play if the temperature is between 25 and 35 (inclusive). Unless it is summer, then the upper limit is 45 (inclusive) instead of 35.",
        "Write a method isCatPlaying that has 2 parameters. Method needs to return true if the cat is playing, otherwise return false",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for PositiveNegativeZeroCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Positive Negative Zero Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"PositiveNegativeZeroCodingChallenge.java\".",
      "code": "The method should not ___ any value, and it needs to print out:\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for PositiveNegativeZeroCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Positive Negative Zero Coding Challenge",
      "question": "What does this code print?",
      "code": "            System.out.println(\"positive\");\r",
      "answer": [
        "positive"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Positive Negative Zero Coding Challenge",
      "question": "Explain the main ideas in Positive Negative Zero Coding Challenge.",
      "modelAnswer": "Positive, Negative or Zero Write a method called checkNumber with an int parameter named number. NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "keyPoints": [
        "Positive, Negative or Zero",
        "Write a method called checkNumber with an int parameter named number.",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for SpeedConverterCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"SpeedConverterCodingChallenge.java\".",
      "code": "___ class SpeedConverterCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for SpeedConverterCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "What does this code print?",
      "code": "            System.out.println(\"Invalid Value\");\r",
      "answer": [
        "Invalid Value"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Speed Converter Coding Challenge",
      "question": "Explain the main ideas in Speed Converter Coding Challenge.",
      "modelAnswer": "Write a method called toMilesPerHour that has 1 parameter of type double with the name kilometersPerHour. This method needs to return the rounded value of the calculation of type long. If the parameter kilometersPerHour is less than 0, the method toMilesPerHour needs to return -1 to indicate an invalid value. NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "keyPoints": [
        "Write a method called toMilesPerHour that has 1 parameter of type double with the name kilometersPerHour. This method needs to return the rounded value of the calculation of type long.",
        "If the parameter kilometersPerHour is less than 0, the method toMilesPerHour needs to return -1 to indicate an invalid value.",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for TeenNumberCheckerCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"TeenNumberCheckerCodingChallenge.java\".",
      "code": "___ class TeenNumberCheckerCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for TeenNumberCheckerCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Methods In Java - Teen Number Checker Coding Challenge\");",
      "answer": [
        "Methods In Java - Teen Number Checker Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 7: Methods In Java",
      "topic": "Teen Number Checker Coding Challenge",
      "question": "Explain the main ideas in Teen Number Checker Coding Challenge.",
      "modelAnswer": "We'll say that a number is \"teen\" if it is in the range 13 -19 (inclusive). Write a method named hasTeen with 3 parameters of type int. NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "keyPoints": [
        "We'll say that a number is \"teen\" if it is in the range 13 -19 (inclusive).",
        "Write a method named hasTeen with 3 parameters of type int.",
        "NOTE: All methods need to be defined as public static like we have been doing so far in the course."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    }
  ],
  "Chapter 8: Switch Statements": [
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for SwitchStatementInJava.java."
    },
    {
      "type": "codefill",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "question": "Complete the missing keyword in this snippet from \"SwitchStatementInJava.java\".",
      "code": "___ class SwitchStatementInJava {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for SwitchStatementInJava.java."
    },
    {
      "type": "predict",
      "difficulty": "easy",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement In Java",
      "question": "What does this code print?",
      "code": "// Multiple case labels can share the same code block: case 1: case 2: case 3: System.out.println(\"1, 2 or 3\");",
      "answer": [
        "1, 2 or 3"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for EnhancedSwitchStatementInJava.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "Complete the missing keyword in this snippet from \"EnhancedSwitchStatementInJava.java\".",
      "code": "___ class EnhancedSwitchStatementInJava {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for EnhancedSwitchStatementInJava.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Enhanced Switch Statement In Java",
      "question": "What does this code print?",
      "code": "                System.out.println(\"Value is 1\");\r",
      "answer": [
        "Value is 1"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for NumberOfDaysInAMonthCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"NumberOfDaysInAMonthCodingChallenge.java\".",
      "code": "        If the parameter is not in that range ___ false.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for NumberOfDaysInAMonthCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Number Of Days In A Month Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Switch Statements - Number Of Days In A Month Coding Challenge\");",
      "answer": [
        "Switch Statements - Number Of Days In A Month Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for PrintNumberInAWorldCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Print Number In A World Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"PrintNumberInAWorldCodingChallenge.java\".",
      "code": "___ class PrintNumberInAWorldCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for PrintNumberInAWorldCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Print Number In A World Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Switch Statements - Print Number In A World Coding Challenge\");",
      "answer": [
        "Switch Statements - Print Number In A World Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for SwitchStatementChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge",
      "question": "Complete the missing keyword in this snippet from \"SwitchStatementChallenge.java\".",
      "code": "___ class SwitchStatementChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for SwitchStatementChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge",
      "question": "What does this code print?",
      "code": "                System.out.println(\"A is found\");\r",
      "answer": [
        "A is found"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'this'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for SwitchStatementChallengeReturnDayOfTheWeek.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge Return Day Of The Week",
      "question": "Complete the missing keyword in this snippet from \"SwitchStatementChallengeReturnDayOfTheWeek.java\".",
      "code": "   call ___ method for the values 0 through 7.\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for SwitchStatementChallengeReturnDayOfTheWeek.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement Challenge Return Day Of The Week",
      "question": "What does this code print?",
      "code": "System.out.println(\"Switch Statements - Switch Statement Challenge Return Day Of The Week\");",
      "answer": [
        "Switch Statements - Switch Statement Challenge Return Day Of The Week"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for SwitchStatementNATOChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement N A T O Challenge",
      "question": "Complete the missing keyword in this snippet from \"SwitchStatementNATOChallenge.java\".",
      "code": "___ class SwitchStatementNATOChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for SwitchStatementNATOChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 8: Switch Statements",
      "topic": "Switch Statement N A T O Challenge",
      "question": "What does this code print?",
      "code": "                System.out.println(\"A is Able\");\r",
      "answer": [
        "A is Able"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    }
  ],
  "Chapter 9: Java Looping Concepts": [
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'new'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for ForStatement.java."
    },
    {
      "type": "codefill",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "question": "Complete the missing keyword in this snippet from \"ForStatement.java\".",
      "code": "   code in a loop, and start a ___ iteration. A continue statement is a good way to continue to execute iterations of your code, but perhaps skip code for certain elements,\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for ForStatement.java."
    },
    {
      "type": "predict",
      "difficulty": "easy",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Statement",
      "question": "What does this code print?",
      "code": "System.out.println(\"Java Looping Concepts - For Statement\");",
      "answer": [
        "Java Looping Concepts - For Statement"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for ForLoopPrimeNumberChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Prime Number Challenge",
      "question": "Complete the missing keyword in this snippet from \"ForLoopPrimeNumberChallenge.java\".",
      "code": "___ class ForLoopPrimeNumberChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ForLoopPrimeNumberChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Prime Number Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Java Looping Concepts - For Loop Prime Number Challenge\");",
      "answer": [
        "Java Looping Concepts - For Loop Prime Number Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for ForLoopSum3and5Challenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Sum3and5 Challenge",
      "question": "Complete the missing keyword in this snippet from \"ForLoopSum3and5Challenge.java\".",
      "code": "___ class ForLoopSum3and5Challenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ForLoopSum3and5Challenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "For Loop Sum3and5 Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Java Looping Concepts - For Loop Sum3and5 Challenge\");",
      "answer": [
        "Java Looping Concepts - For Loop Sum3and5 Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for SumOddChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Sum Odd Challenge",
      "question": "Complete the missing keyword in this snippet from \"SumOddChallenge.java\".",
      "code": "Write a method called isOdd with an int parameter and call it number. The method needs to ___ a boolean.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for SumOddChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 9: Java Looping Concepts",
      "topic": "Sum Odd Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Java Looping Concepts - Sum Odd Challenge\");",
      "answer": [
        "Java Looping Concepts - Sum Odd Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    }
  ],
  "Chapter 10: While And Do While Looping Concepts": [
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for WhileLoops.java."
    },
    {
      "type": "codefill",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "question": "Complete the missing keyword in this snippet from \"WhileLoops.java\".",
      "code": "___ class WhileLoops {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for WhileLoops.java."
    },
    {
      "type": "predict",
      "difficulty": "easy",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loops",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - While Loops\");",
      "answer": [
        "While And Do While Looping Concepts - While Loops"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for DoWhileLoops.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "question": "Complete the missing keyword in this snippet from \"DoWhileLoops.java\".",
      "code": "___ class DoWhileLoops {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for DoWhileLoops.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Do While Loops",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Do While Loops\");",
      "answer": [
        "While And Do While Looping Concepts - Do While Loops"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for CheckNumberPalindromeCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Check Number Palindrome Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"CheckNumberPalindromeCodingChallenge.java\".",
      "code": "The method needs to ___ a boolean.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for CheckNumberPalindromeCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Check Number Palindrome Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Check Number Palindrome Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Check Number Palindrome Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for DigitSumCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Digit Sum Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"DigitSumCodingChallenge.java\".",
      "code": "has a single parameter named number, of type int, and it should ___ an int.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for DigitSumCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Digit Sum Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Digit Sum Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Digit Sum Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for EvenDigitSumCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Even Digit Sum Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"EvenDigitSumCodingChallenge.java\".",
      "code": "The method should ___ the sum of the even digits within the number.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for EvenDigitSumCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Even Digit Sum Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Even Digit Sum Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Even Digit Sum Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for FactorPrinterCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Factor Printer Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"FactorPrinterCodingChallenge.java\".",
      "code": "___ class  FactorPrinterCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for FactorPrinterCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Factor Printer Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Factor Printer Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Factor Printer Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for FirstAndLastDigitSumCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "First And Last Digit Sum Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"FirstAndLastDigitSumCodingChallenge.java\".",
      "code": "The method needs to find the first and the last digit of the parameter number passed to the method, using a loop and ___ the sum of the first and the last digit of that number.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for FirstAndLastDigitSumCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "First And Last Digit Sum Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - First And Last Digit Sum Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - First And Last Digit Sum Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for FloorPackProblemCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Floor Pack Problem Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"FloorPackProblemCodingChallenge.java\".",
      "code": "Therefore, the sum of the kilos of bigCount and smallCount must be at least equal to the value of goal. The method should ___ true if it is possible to make a package with goal kilos of flour.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for FloorPackProblemCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Floor Pack Problem Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Floor Pack Problem Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Floor Pack Problem Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for GreatestCommonDivisorCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Greatest Common Divisor Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"GreatestCommonDivisorCodingChallenge.java\".",
      "code": "___ class GreatestCommonDivisorCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for GreatestCommonDivisorCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Greatest Common Divisor Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Greatest Common Divisor Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Greatest Common Divisor Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for LargestPrimeFactorCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Largest Prime Factor Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"LargestPrimeFactorCodingChallenge.java\".",
      "code": "If the number is negative or does not have any prime numbers, the method should ___ -1 to indicate an invalid value.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for LargestPrimeFactorCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Largest Prime Factor Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Largest Prime Factor Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Largest Prime Factor Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for LastDigitCheckerCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Last Digit Checker Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"LastDigitCheckerCodingChallenge.java\".",
      "code": "Each number should be within the range of 10 (inclusive) - 1000 (inclusive). If one of the numbers is not within the range, the method should ___ false.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for LastDigitCheckerCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Last Digit Checker Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Last Digit Checker Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Last Digit Checker Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for NumberToWordsCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number To Words Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"NumberToWordsCodingChallenge.java\".",
      "code": "___ class NumberToWordsCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for NumberToWordsCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Number To Words Coding Challenge",
      "question": "What does this code print?",
      "code": "            System.out.println(\"Invalid Value\");\r",
      "answer": [
        "Invalid Value"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for PerfectNumberCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Perfect Number Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"PerfectNumberCodingChallenge.java\".",
      "code": "___ class PerfectNumberCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for PerfectNumberCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Perfect Number Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Perfect Number Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Perfect Number Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for SharedDigitCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Shared Digit Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"SharedDigitCodingChallenge.java\".",
      "code": "Each number should be within the range of 10 (inclusive) - 99 (inclusive). If one of the numbers is not within the range, the method should ___ false.\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for SharedDigitCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "Shared Digit Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - Shared Digit Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - Shared Digit Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'return'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for WhileLoopCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"WhileLoopCodingChallenge.java\".",
      "code": "  even number; otherwise, ___ false. Next, use a while loop to test a range\r",
      "answer": [
        "return"
      ],
      "explanation": "The missing keyword is 'return', taken from the parsed source for WhileLoopCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - While Loop Coding Challenge\");",
      "answer": [
        "While And Do While Looping Concepts - While Loop Coding Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for WhileLoopCodingChallengePart2.java."
    },
    {
      "type": "codefill",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge Part2",
      "question": "Complete the missing keyword in this snippet from \"WhileLoopCodingChallengePart2.java\".",
      "code": "___ class WhileLoopCodingChallengePart2 {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for WhileLoopCodingChallengePart2.java."
    },
    {
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge Part2",
      "question": "What does this code print?",
      "code": "System.out.println(\"While And Do While Looping Concepts - While Loop Coding Challenge Part2\");",
      "answer": [
        "While And Do While Looping Concepts - While Loop Coding Challenge Part2"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 10: While And Do While Looping Concepts",
      "topic": "While Loop Coding Challenge Part2",
      "question": "Explain the main ideas in While Loop Coding Challenge Part2.",
      "modelAnswer": "Step 2 is to modify the while code. Make it also record the total number of even numbers it has found. Break out of the loop once 5 even numbers are found. Finally, display the total number of odd and even numbers found. Alright, so the challenge is to modify the while code above. So, you want to leave the existing functionality as it is, but make it so it also records the total number of even numbers, as well as odd numbers that it's found. And once five even numbers have been found, break out of the code and display the total number of even numbers. IMPORTANT: Always check your loop condition carefully.",
      "keyPoints": [
        "Step 2 is to modify the while code. Make it also record the total number of even numbers it has found. Break out of the loop once 5 even numbers are found. Finally, display the total number of odd and even numbers found. Alright, so the challenge is to modify the while code above. So, you want to leave the existing functionality as it is, but make it so it also records the total number of even numbers, as well as odd numbers that it's found. And once five even numbers have been found, break out of the code and display the total number of even numbers.",
        "IMPORTANT: Always check your loop condition carefully."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    }
  ],
  "Chapter 11: Class Object Static And Instance Fields": [
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for ClassExample.java."
    },
    {
      "type": "codefill",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "question": "Complete the missing keyword in this snippet from \"ClassExample.java\".",
      "code": "___ class ClassExample {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ClassExample.java."
    },
    {
      "type": "predict",
      "difficulty": "easy",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Class Example",
      "question": "What does this code print?",
      "code": "System.out.println(\"Class Object Static And Instance Fields - Class Example\");",
      "answer": [
        "Class Object Static And Instance Fields - Class Example"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for CreateFieldOnClasses.java."
    },
    {
      "type": "codefill",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "question": "Complete the missing keyword in this snippet from \"CreateFieldOnClasses.java\".",
      "code": "___ class CreateFieldOnClasses {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for CreateFieldOnClasses.java."
    },
    {
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 11: Class Object Static And Instance Fields",
      "topic": "Create Field On Classes",
      "question": "What does this code print?",
      "code": "*     System.out.println(greet.toUpperCase()); // A method called toUpperCase is called on the instance of String with value \"hello\"\r",
      "answer": [
        "hello"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    }
  ],
  "Chapter 12: Parsing Values Reading Input": [
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for ParsingValuesReadingInput.java."
    },
    {
      "type": "codefill",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "Complete the missing keyword in this snippet from \"ParsingValuesReadingInput.java\".",
      "code": "___ class ParsingValuesReadingInput {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ParsingValuesReadingInput.java."
    },
    {
      "type": "predict",
      "difficulty": "easy",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Parsing Values Reading Input",
      "question": "What does this code print?",
      "code": "        // System.out.println(\"Age = \" + (currentYear - userDateOfBirth));\r",
      "answer": [
        "Age = "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'void'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for InputCalculatorChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Calculator Challenge",
      "question": "Complete the missing keyword in this snippet from \"InputCalculatorChallenge.java\".",
      "code": "The method should not return anything (___) and it needs to keep reading int numbers from the keyboard.\r",
      "answer": [
        "void"
      ],
      "explanation": "The missing keyword is 'void', taken from the parsed source for InputCalculatorChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Input Calculator Challenge",
      "question": "What does this code print?",
      "code": "            System.out.println(\"SUM = \" + sum + \" AVG = \" + average);\r",
      "answer": [
        "SUM = "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for MinMaxCodingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Min Max Coding Challenge",
      "question": "Complete the missing keyword in this snippet from \"MinMaxCodingChallenge.java\".",
      "code": "___ class MinMaxCodingChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for MinMaxCodingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Min Max Coding Challenge",
      "question": "What does this code print?",
      "code": "            System.out.println(\"Enter any number of your choice. To quit, press any character\");\r",
      "answer": [
        "Enter any number of your choice. To quit, press any character"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for PaintJobChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "Complete the missing keyword in this snippet from \"PaintJobChallenge.java\".",
      "code": "___ class PaintJobChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for PaintJobChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Paint Job Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Parsing Values Reading Input - Paint Job Challenge\");",
      "answer": [
        "Parsing Values Reading Input - Paint Job Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'this'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for ReadingUserInputChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "Complete the missing keyword in this snippet from \"ReadingUserInputChallenge.java\".",
      "code": "In ___ challenge, you'll read 5 valid numbers from the console entered by the\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for ReadingUserInputChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 12: Parsing Values Reading Input",
      "topic": "Reading User Input Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"Parsing Values Reading Input - Reading User Input Challenge\");",
      "answer": [
        "Parsing Values Reading Input - Reading User Input Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    }
  ],
  "Chapter 13: Exception Handling": [
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'try'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for ExceptionHandlingInJava.java."
    },
    {
      "type": "codefill",
      "difficulty": "easy",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "question": "Complete the missing keyword in this snippet from \"ExceptionHandlingInJava.java\".",
      "code": "   An exception is caught by wrapping the risky code inside a ___-catch block.\r",
      "answer": [
        "try"
      ],
      "explanation": "The missing keyword is 'try', taken from the parsed source for ExceptionHandlingInJava.java."
    },
    {
      "type": "predict",
      "difficulty": "easy",
      "chapter": "Chapter 13: Exception Handling",
      "topic": "Exception Handling In Java",
      "question": "What does this code print?",
      "code": "System.out.println(\"Exception Handling - Exception Handling In Java\");",
      "answer": [
        "Exception Handling - Exception Handling In Java"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
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
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    }
  ],
  "Chapter 14: OOP Concepts": [
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for PointClassDistanceCalculation.java."
    },
    {
      "type": "codefill",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "Complete the missing keyword in this snippet from \"PointClassDistanceCalculation.java\".",
      "code": "You have to represent a point in 2D space. Write a ___ with the name Point. The ___ needs two fields (instance variables) with name x and y of type int.\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for PointClassDistanceCalculation.java."
    },
    {
      "type": "predict",
      "difficulty": "easy",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Point Class Distance Calculation\");",
      "answer": [
        "OOP Concepts - Point Class Distance Calculation"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Point Class Distance Calculation",
      "question": "Explain the main ideas in Point Class Distance Calculation.",
      "modelAnswer": "Point Class and Distance Calculation You have to represent a point in 2D space. Write a class with the name Point. The class needs two fields (instance variables) with name x and y of type int. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Point Class and Distance Calculation",
        "You have to represent a point in 2D space. Write a class with the name Point. The class needs two fields (instance variables) with name x and y of type int.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for WallAreaComputation.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Wall Area Computation",
      "question": "Complete the missing keyword in this snippet from \"WallAreaComputation.java\".",
      "code": "Write a ___ with the name Wall. The ___ needs two fields (instance variables) with name width and height of type double.\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for WallAreaComputation.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Wall Area Computation",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Wall Area Computation\");",
      "answer": [
        "OOP Concepts - Wall Area Computation"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Wall Area Computation",
      "question": "Explain the main ideas in Wall Area Computation.",
      "modelAnswer": "Wall Area Computation Write a class with the name Wall. The class needs two fields (instance variables) with name width and height of type double. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Wall Area Computation",
        "Write a class with the name Wall. The class needs two fields (instance variables) with name width and height of type double.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Animal.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Animal",
      "question": "Complete the missing keyword in this snippet from \"Animal.java\".",
      "code": "___ class Animal {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Animal.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Animal",
      "question": "What does this code print?",
      "code": "        System.out.println(type + \" moves \" + speed);\r",
      "answer": [
        " moves "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Animal",
      "question": "Explain the main ideas in Animal.",
      "modelAnswer": "This is a super class, aka top parent class. This class will contain all the attributes that all types of animal has. Also, the super class will have all the behaviour that animals have in common. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "This is a super class, aka top parent class. This class will contain all the attributes that all types of animal has.",
        "Also, the super class will have all the behaviour that animals have in common.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Dog.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Complete the missing keyword in this snippet from \"Dog.java\".",
      "code": "___ class Dog extends Animal { // Using extends specifies the superclass ( or the parent class ) of the class that has been declatred\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Dog.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "What does this code print?",
      "code": "      //  System.out.println(type + \" makes some noise\");\r",
      "answer": [
        " makes some noise"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Dog",
      "question": "Explain the main ideas in Dog.",
      "modelAnswer": "Dog inherits from Animal Dog \"IS A\" a type of Animal Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Dog inherits from Animal",
        "Dog \"IS A\" a type of Animal",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Fish.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Fish",
      "question": "Complete the missing keyword in this snippet from \"Fish.java\".",
      "code": "___ class Fish extends Animal{\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Fish.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Fish",
      "question": "What does this code print?",
      "code": "        System.out.println(\"muscle moving \");\r",
      "answer": [
        "muscle moving "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Fish",
      "question": "Explain the main ideas in Fish.",
      "modelAnswer": "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Inheritance.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Inheritance",
      "question": "Complete the missing keyword in this snippet from \"Inheritance.java\".",
      "code": "___ class Inheritance {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Inheritance.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Inheritance",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Inheritance\");",
      "answer": [
        "OOP Concepts - Inheritance"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Inheritance",
      "question": "Explain the main ideas in Inheritance.",
      "modelAnswer": "Inheritance is basically a form of code reuse. It's a way to organize classes into a parent-child hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent. Animal (Base Class) Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Inheritance is basically a form of code reuse. It's a way to organize classes into a parent-child hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent.",
        "Animal (Base Class)",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'this'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Main.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "  implement the methods of ___ class.\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for Main.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Main\");",
      "answer": [
        "OOP Concepts - Main"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Explain the main ideas in Main.",
      "modelAnswer": "Every class created in Java extends a special Java class. That class is named Object, and it's in the java.lang package. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Every class created in Java extends a special Java class.",
        "That class is named Object, and it's in the java.lang package.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Employee.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Employee",
      "question": "Complete the missing keyword in this snippet from \"Employee.java\".",
      "code": "___ class Employee extends Worker {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Employee.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Employee",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Employee\");",
      "answer": [
        "OOP Concepts - Employee"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Employee",
      "question": "Explain the main ideas in Employee.",
      "modelAnswer": "Employee Class Extends the Worker Class Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Employee Class Extends the Worker Class",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for HourlyEmployee.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Hourly Employee",
      "question": "Complete the missing keyword in this snippet from \"HourlyEmployee.java\".",
      "code": "___ class HourlyEmployee extends Employee {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for HourlyEmployee.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Hourly Employee",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Hourly Employee\");",
      "answer": [
        "OOP Concepts - Hourly Employee"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Hourly Employee",
      "question": "Explain the main ideas in Hourly Employee.",
      "modelAnswer": "The HourlyEmployee Class extends the Employee Class Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "The HourlyEmployee Class extends the Employee Class",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Main.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "___ class Main {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Main.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Main\");",
      "answer": [
        "OOP Concepts - Main"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Explain the main ideas in Main.",
      "modelAnswer": "This is the Inheritance Coding Challenge demo: a Worker → Employee → SalariedEmployee/HourlyEmployee hierarchy. Worker is the base class. Employee extends Worker, adding employeeId and hireDate. SalariedEmployee and HourlyEmployee extend Employee. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "This is the Inheritance Coding Challenge demo: a Worker → Employee → SalariedEmployee/HourlyEmployee hierarchy.",
        "Worker is the base class. Employee extends Worker, adding employeeId and hireDate. SalariedEmployee and HourlyEmployee extend Employee.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for SalariedEmployee.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Salaried Employee",
      "question": "Complete the missing keyword in this snippet from \"SalariedEmployee.java\".",
      "code": "___ class SalariedEmployee extends Employee {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for SalariedEmployee.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Salaried Employee",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Salaried Employee\");",
      "answer": [
        "OOP Concepts - Salaried Employee"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Salaried Employee",
      "question": "Explain the main ideas in Salaried Employee.",
      "modelAnswer": "The salaried employee class, extends the Employee Class Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "The salaried employee class, extends the Employee Class",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'extends'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Worker.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Worker",
      "question": "Complete the missing keyword in this snippet from \"Worker.java\".",
      "code": "Below the Worker Class, introduce another Class named Employee which ___ the Worker Class\r",
      "answer": [
        "extends"
      ],
      "explanation": "The missing keyword is 'extends', taken from the parsed source for Worker.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Worker",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Worker\");",
      "answer": [
        "OOP Concepts - Worker"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Worker",
      "question": "Explain the main ideas in Worker.",
      "modelAnswer": "Inheritance Challenge Problem Create Worker Class -> This should be on top of the Hierarchy Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Inheritance Challenge Problem",
        "Create Worker Class -> This should be on top of the Hierarchy",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for ClassesAndInheritance.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "question": "Complete the missing keyword in this snippet from \"ClassesAndInheritance.java\".",
      "code": "___ class ClassesAndInheritance {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ClassesAndInheritance.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Classes And Inheritance\");",
      "answer": [
        "OOP Concepts - Classes And Inheritance"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Classes And Inheritance",
      "question": "Explain the main ideas in Classes And Inheritance.",
      "modelAnswer": "Object-oriented programming is a way to model real world objects as software objects which contain both data and code OOP is sometimes called class-based programming. Class-based programming starts with classes which, become the blueprints for objects Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Object-oriented programming is a way to model real world objects as software objects which contain both data and code",
        "OOP is sometimes called class-based programming. Class-based programming starts with classes which, become the blueprints for objects",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Car.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Car",
      "question": "Complete the missing keyword in this snippet from \"Car.java\".",
      "code": "Unlike local variables, ___ variables should have some type of access modifier declared for it.\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for Car.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Car",
      "question": "What does this code print?",
      "code": "        System.out.println(doors + \"-Door \" + color + \" \" + make + \" \" + model + \" \" + (convertible ? \"Convertible\" : \"\"));\r",
      "answer": [
        "-Door "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Car",
      "question": "Explain the main ideas in Car.",
      "modelAnswer": "Unlike local variables, class variables should have some type of access modifier declared for it. If no access modifier is declared explicitly, Java declares the default one (package private), implicitly. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Unlike local variables, class variables should have some type of access modifier declared for it.",
        "If no access modifier is declared explicitly, Java declares the default one (package private), implicitly.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Main.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "___ class Main {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Main.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "What does this code print?",
      "code": "        System.out.println(\"make = \" + car.getMake());\r",
      "answer": [
        "make = "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Explain the main ideas in Main.",
      "modelAnswer": "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods. Car car = null; — the variable car exists, but points to nothing. Calling car.describeCar() here causes a NullPointerException. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.",
        "Car car = null; — the variable car exists, but points to nothing. Calling car.describeCar() here causes a NullPointerException.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for BankAccount.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bank Account",
      "question": "Complete the missing keyword in this snippet from \"BankAccount.java\".",
      "code": "___ class BankAccount {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for BankAccount.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bank Account",
      "question": "What does this code print?",
      "code": "        System.out.println(\"Deposit of $\" + depositAmount + \" made. New balance is $\" + accountBalance);\r",
      "answer": [
        "Deposit of $"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bank Account",
      "question": "Explain the main ideas in Bank Account.",
      "modelAnswer": "Create a new class for a bank account. Create fields for account characteristics like: Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Create a new class for a bank account.",
        "Create fields for account characteristics like:",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Main.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "___ class Main {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Main.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Main\");",
      "answer": [
        "OOP Concepts - Main"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Explain the main ideas in Main.",
      "modelAnswer": "This topic belongs to Chapter 14: OOP Concepts → Classes Challenge. Review the class Main and understand its key responsibilities. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "This topic belongs to Chapter 14: OOP Concepts → Classes Challenge.",
        "Review the class Main and understand its key responsibilities.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'this'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for MethodOverLoadingChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Challenge",
      "question": "Complete the missing keyword in this snippet from \"MethodOverLoadingChallenge.java\".",
      "code": "You'll convert inches to centimeters, in ___  method, and pass back the number of centimeters,\r",
      "answer": [
        "this"
      ],
      "explanation": "The missing keyword is 'this', taken from the parsed source for MethodOverLoadingChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Challenge",
      "question": "What does this code print?",
      "code": "            System.out.println(feet + \" ft \" + inches + \" inch = \" + centimetersValue + \" cm \");\r",
      "answer": [
        " ft "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Over Loading Challenge",
      "question": "Explain the main ideas in Method Over Loading Challenge.",
      "modelAnswer": "Create two methods with the  same name: convertToCentimeters The first method has one parameter of type int,  which represents the entire height in inches. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Create two methods with the  same name: convertToCentimeters",
        "The first method has one parameter of type int,  which represents the entire height in inches.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "Which of the following statements about Method Overloading In Java are correct? (Select all that apply)",
      "options": [
        "This topic belongs to OOP Concepts.",
        "Its source file is MethodOverloadingInJava.java.",
        "This topic has 15 inline annotations.",
        "This topic has no Java source code."
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "The correct statements come directly from the parsed source metadata for MethodOverloadingInJava.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "Complete the missing keyword in this snippet from \"MethodOverloadingInJava.java\".",
      "code": "___ class MethodOverloadingInJava {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for MethodOverloadingInJava.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "What does this code print?",
      "code": "        System.out.println(\"New Score is \" + score);\r",
      "answer": [
        "New Score is "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading In Java",
      "question": "Explain the main ideas in Method Overloading In Java.",
      "modelAnswer": "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for MethodOverloadingSecondAndMinutesChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "Complete the missing keyword in this snippet from \"MethodOverloadingSecondAndMinutesChallenge.java\".",
      "code": "___ class MethodOverloadingSecondAndMinutesChallenge {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for MethodOverloadingSecondAndMinutesChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Method Overloading Second And Minutes Challenge\");",
      "answer": [
        "OOP Concepts - Method Overloading Second And Minutes Challenge"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Method Overloading Second And Minutes Challenge",
      "question": "Explain the main ideas in Method Overloading Second And Minutes Challenge.",
      "modelAnswer": "Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds. You should validate that the first parameter minutes is >= 0. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds.",
        "You should validate that the first parameter minutes is >= 0.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for PersonAgeValidation.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "Complete the missing keyword in this snippet from \"PersonAgeValidation.java\".",
      "code": "Write a ___ with the name Person. The ___ needs three fields (instance variables) with the names firstName, lastName of type String and age of type int.\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for PersonAgeValidation.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "What does this code print?",
      "code": "System.out.println(\"fullName= \" + person.getFullName());\r",
      "answer": [
        "fullName= "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Person Age Validation",
      "question": "Explain the main ideas in Person Age Validation.",
      "modelAnswer": "Person Class and Age Validation Write a class with the name Person. The class needs three fields (instance variables) with the names firstName, lastName of type String and age of type int. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Person Class and Age Validation",
        "Write a class with the name Person. The class needs three fields (instance variables) with the names firstName, lastName of type String and age of type int.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for SumCalculatorImplementationChallenge.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "Complete the missing keyword in this snippet from \"SumCalculatorImplementationChallenge.java\".",
      "code": "Write a ___ with the name SimpleCalculator. The ___ needs two fields (instance variables) with names firstNumber and secondNumber both of type double.\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for SumCalculatorImplementationChallenge.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "What does this code print?",
      "code": "System.out.println(\"add= \" + calculator.getAdditionResult());\r",
      "answer": [
        "add= "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Sum Calculator Implementation Challenge",
      "question": "Explain the main ideas in Sum Calculator Implementation Challenge.",
      "modelAnswer": "Sum Calculator Implementation Write a class with the name SimpleCalculator. The class needs two fields (instance variables) with names firstNumber and secondNumber both of type double. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Sum Calculator Implementation",
        "Write a class with the name SimpleCalculator. The class needs two fields (instance variables) with names firstNumber and secondNumber both of type double.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for ConstructorConcept.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "Complete the missing keyword in this snippet from \"ConstructorConcept.java\".",
      "code": "It has the same name as the ___ itself, and it doesn't return any values.\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for ConstructorConcept.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "What does this code print?",
      "code": "        System.out.println(\"Constructor with 5 arguments is called\");\r",
      "answer": [
        "Constructor with 5 arguments is called"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Constructor Concept",
      "question": "Explain the main ideas in Constructor Concept.",
      "modelAnswer": "A constructor is used in the creation of an object. It is a special type of code block that has a specific name and parameters, much like a method. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "A constructor is used in the creation of an object.",
        "It is a special type of code block that has a specific name and parameters, much like a method.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for SuperKeywordUseExample.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "question": "Complete the missing keyword in this snippet from \"SuperKeywordUseExample.java\".",
      "code": "___ class SuperKeywordUseExample { // parent class also known as super class\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for SuperKeywordUseExample.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "question": "What does this code print?",
      "code": "        System.out.println(\"Printed in SuperClass.\");\r",
      "answer": [
        "Printed in SuperClass."
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Super Keyword Use Example",
      "question": "Explain the main ideas in Super Keyword Use Example.",
      "modelAnswer": "The keyword super is commonly used with method overriding when we call a method with the same name from the parent class. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "The keyword super is commonly used with method overriding when we call a method with the same name from the parent class.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for ThisAndSuper.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This And Super",
      "question": "Complete the missing keyword in this snippet from \"ThisAndSuper.java\".",
      "code": "___ class ThisAndSuper {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ThisAndSuper.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This And Super",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - This And Super\");",
      "answer": [
        "OOP Concepts - This And Super"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This And Super",
      "question": "Explain the main ideas in This And Super.",
      "modelAnswer": "super keyword :- 1) The keyword super is used to access or call the parent class members (both variables and methods). Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "super keyword :-",
        "1) The keyword super is used to access or call the parent class members (both variables and methods).",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for ThisKeyWordUseExample.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "Complete the missing keyword in this snippet from \"ThisKeyWordUseExample.java\".",
      "code": "___ class ThisKeyWordUseExample {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ThisKeyWordUseExample.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - This Key Word Use Example\");",
      "answer": [
        "OOP Concepts - This Key Word Use Example"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "This Key Word Use Example",
      "question": "Explain the main ideas in This Key Word Use Example.",
      "modelAnswer": "The keyword this is commonly used within constructors and setters and is optionally used within getters. In the getter, there are no parameters so there's no conflict. Therefore,the use of this keyword is optional there. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "The keyword this is commonly used within constructors and setters and is optionally used within getters.",
        "In the getter, there are no parameters so there's no conflict. Therefore,the use of this keyword is optional there.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for GoodConstructorSuperCallExample.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "question": "Complete the missing keyword in this snippet from \"GoodConstructorSuperCallExample.java\".",
      "code": "___ class GoodConstructorSuperCallExample {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for GoodConstructorSuperCallExample.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Good Constructor Super Call Example\");",
      "answer": [
        "OOP Concepts - Good Constructor Super Call Example"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor Super Call Example",
      "question": "Explain the main ideas in Good Constructor Super Call Example.",
      "modelAnswer": "The 1st constructor is calling the 2nd constructor. The 2nd constructor calls the parent constructor with parameters x and y. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "The 1st constructor is calling the 2nd constructor.",
        "The 2nd constructor calls the parent constructor with parameters x and y.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for BadConstructorThisCallExample.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "question": "Complete the missing keyword in this snippet from \"BadConstructorThisCallExample.java\".",
      "code": "___ class BadConstructorThisCallExample {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for BadConstructorThisCallExample.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Bad Constructor This Call Example\");",
      "answer": [
        "OOP Concepts - Bad Constructor This Call Example"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Bad Constructor This Call Example",
      "question": "Explain the main ideas in Bad Constructor This Call Example.",
      "modelAnswer": "Here, there are three constructors. All three constructors initialize variables. But There's repeated code in each constructor, The variables are initialized in each constructor with some default values. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Here, there are three constructors.",
        "All three constructors initialize variables. But There's repeated code in each constructor, The variables are initialized in each constructor with some default values.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for GoodConstructorThisCallExample.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "Complete the missing keyword in this snippet from \"GoodConstructorThisCallExample.java\".",
      "code": "___ class GoodConstructorThisCallExample {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for GoodConstructorThisCallExample.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Good Constructor This Call Example\");",
      "answer": [
        "OOP Concepts - Good Constructor This Call Example"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Good Constructor This Call Example",
      "question": "Explain the main ideas in Good Constructor This Call Example.",
      "modelAnswer": "Here, the 1st constructor calls the 2nd constructor, the 2nd constructor calls the 3rd constructor, and then the 3rd constructor actually initializes the instance variables. In other words, The 3rd constructor does all the work. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Here, the 1st constructor calls the 2nd constructor, the 2nd constructor calls the 3rd constructor, and then the 3rd constructor actually initializes the instance variables.",
        "In other words, The 3rd constructor does all the work.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'new'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Customer.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Customer",
      "question": "Complete the missing keyword in this snippet from \"Customer.java\".",
      "code": "Create a ___ class, called Customer, with three fields: name. credit limit. and email address.\r",
      "answer": [
        "new"
      ],
      "explanation": "The missing keyword is 'new', taken from the parsed source for Customer.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Customer",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Customer\");",
      "answer": [
        "OOP Concepts - Customer"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Customer",
      "question": "Explain the main ideas in Customer.",
      "modelAnswer": "Create a new class, called Customer, with three fields: name. credit limit. and email address. Create the getter methods only for each field. You don't need to create the setters. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Create a new class, called Customer, with three fields: name. credit limit. and email address.",
        "Create the getter methods only for each field. You don't need to create the setters.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for House.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "House",
      "question": "Complete the missing keyword in this snippet from \"House.java\".",
      "code": "___ class House {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for House.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "House",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - House\");",
      "answer": [
        "OOP Concepts - House"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "House",
      "question": "Explain the main ideas in House.",
      "modelAnswer": "This topic belongs to Chapter 14: OOP Concepts → Reference Object Instance. Review the class House and understand its key responsibilities. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "This topic belongs to Chapter 14: OOP Concepts → Reference Object Instance.",
        "Review the class House and understand its key responsibilities.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Main.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "___ class Main {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Main.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Main\");",
      "answer": [
        "OOP Concepts - Main"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Explain the main ideas in Main.",
      "modelAnswer": "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for ReferenceObjectsInstanceClass.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "question": "Complete the missing keyword in this snippet from \"ReferenceObjectsInstanceClass.java\".",
      "code": "___ class ReferenceObjectsInstanceClass {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for ReferenceObjectsInstanceClass.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Reference Objects Instance Class\");",
      "answer": [
        "OOP Concepts - Reference Objects Instance Class"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Reference Objects Instance Class",
      "question": "Explain the main ideas in Reference Objects Instance Class.",
      "modelAnswer": "A Class is like a blueprint Using blueprint, we can create as many objects that we want Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "A Class is like a blueprint",
        "Using blueprint, we can create as many objects that we want",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for StaticAndInstanceMethods.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Methods",
      "question": "Complete the missing keyword in this snippet from \"StaticAndInstanceMethods.java\".",
      "code": "___ class StaticAndInstanceMethods {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for StaticAndInstanceMethods.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Methods",
      "question": "What does this code print?",
      "code": "        System.out.println(\"Hello\");\r",
      "answer": [
        "Hello"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Methods",
      "question": "Explain the main ideas in Static And Instance Methods.",
      "modelAnswer": "Static Methods 1) Static methods are declared using a static modifier and they belong to Class Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Static Methods",
        "1) Static methods are declared using a static modifier and they belong to Class",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for PlainOldJavaObject.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Plain Old Java Object",
      "question": "Complete the missing keyword in this snippet from \"PlainOldJavaObject.java\".",
      "code": "   i)   A plain old Java object acronym POJO is a ___ that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for PlainOldJavaObject.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Plain Old Java Object",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Plain Old Java Object\");",
      "answer": [
        "OOP Concepts - Plain Old Java Object"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Plain Old Java Object",
      "question": "Explain the main ideas in Plain Old Java Object.",
      "modelAnswer": "POJO CONCEPTS i)   A plain old Java object acronym POJO is a class that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data ii)  It's used to house data and pass data between functional classes. iii) It usually has no other, or very few methods, other than getters and setters for the instance fields. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "POJO CONCEPTS i)   A plain old Java object acronym POJO is a class that has boilerplate codes for instance fields, getters, setters, and constructors to get, update, set data ii)  It's used to house data and pass data between functional classes.",
        "iii) It usually has no other, or very few methods, other than getters and setters for the instance fields.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Main.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Complete the missing keyword in this snippet from \"Main.java\".",
      "code": "___ class Main {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Main.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "What does this code print?",
      "code": "        System.out.println(\"*****************************************\");\r",
      "answer": [
        "*****************************************"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Main",
      "question": "Explain the main ideas in Main.",
      "modelAnswer": "StudentRecord[id=1, name=Navneet, dateOfBirth=19/03/1994, classList=Java MasterClass] StudentRecord[id=2, name=Puttu, dateOfBirth=20/04/1995, classList=Javascript MasterClass] Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "StudentRecord[id=1, name=Navneet, dateOfBirth=19/03/1994, classList=Java MasterClass]",
        "StudentRecord[id=2, name=Puttu, dateOfBirth=20/04/1995, classList=Javascript MasterClass]",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'public'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for Student.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student",
      "question": "Complete the missing keyword in this snippet from \"Student.java\".",
      "code": "___ class Student {\r",
      "answer": [
        "public"
      ],
      "explanation": "The missing keyword is 'public', taken from the parsed source for Student.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Student\");",
      "answer": [
        "OOP Concepts - Student"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student",
      "question": "Explain the main ideas in Student.",
      "modelAnswer": "The toString() method is a special method in Java. The method called toString() will print out all the attributes(instance variables) of the instances(objects) in the class in a formatted way. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "The toString() method is a special method in Java.",
        "The method called toString() will print out all the attributes(instance variables) of the instances(objects) in the class in a formatted way.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'static'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for StaticAndInstanceVariables.java."
    },
    {
      "type": "codefill",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Variables",
      "question": "Complete the missing keyword in this snippet from \"StaticAndInstanceVariables.java\".",
      "code": "1) A ___ variable is Declared by using the keyword ___.\r",
      "answer": [
        "static"
      ],
      "explanation": "The missing keyword is 'static', taken from the parsed source for StaticAndInstanceVariables.java."
    },
    {
      "type": "predict",
      "difficulty": "medium",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Variables",
      "question": "What does this code print?",
      "code": "        System.out.println(\"name = \" + name);\r",
      "answer": [
        "name = "
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Static And Instance Variables",
      "question": "Explain the main ideas in Static And Instance Variables.",
      "modelAnswer": "Static Variables 1) A static variable is Declared by using the keyword static. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "Static Variables",
        "1) A static variable is Declared by using the keyword static.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
    },
    {
      "type": "scq",
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
      "explanation": "The correct keyword is 'class'. It fits the syntax and semantics of this Java statement."
    },
    {
      "type": "mcq",
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
      "explanation": "The correct statements come directly from the parsed source metadata for StudentRecord.java."
    },
    {
      "type": "codefill",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student Record",
      "question": "Complete the missing keyword in this snippet from \"StudentRecord.java\".",
      "code": "  3) The record is a special ___ that contains data that's not meant to be altered.\r",
      "answer": [
        "class"
      ],
      "explanation": "The missing keyword is 'class', taken from the parsed source for StudentRecord.java."
    },
    {
      "type": "predict",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student Record",
      "question": "What does this code print?",
      "code": "System.out.println(\"OOP Concepts - Student Record\");",
      "answer": [
        "OOP Concepts - Student Record"
      ],
      "explanation": "The output comes directly from the string literal in the println call."
    },
    {
      "type": "interview",
      "difficulty": "hard",
      "chapter": "Chapter 14: OOP Concepts",
      "topic": "Student Record",
      "question": "Explain the main ideas in Student Record.",
      "modelAnswer": "The Record Type 1) The record was introduced in JDK 14 and became officially part of Java in JDK 16. Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "keyPoints": [
        "The Record Type",
        "1) The record was introduced in JDK 14 and became officially part of Java in JDK 16.",
        "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match."
      ],
      "explanation": "Use the source comments and code structure to summarize the topic clearly."
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
      "Understanding what forms an expression vs a statement is important — a statement is a complete unit of execution (ends with ;), while an expression is the part that produces a value.",
      "Type     | Width  | Range / Notes boolean  | 1 bit  | Only two values: true or false byte     | 8 bits | -128 to 127 short    | 16 bits| -32,768 to 32,767 char     | 16 bits| A single Unicode character — written in single quotes: 'A' int      | 32 bits| -2,147,483,648 to 2,147,483,647 (default for whole numbers) long     | 64 bits| Very large whole numbers — add 'L' suffix: 100L float    | 32 bits| Single-precision decimal — add 'f' suffix: 3.14f (NOT for precise math) double   | 64 bits| Double-precision decimal — default for decimals, add 'd': 3.14d",
      "Overflow and Underflow: If you exceed the maximum value of a type, it wraps around (overflow)."
    ],
    "syntax": "public class StringExample {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        String myString = \"This is a string\";\r\n        System.out.println(\"MyString is equal to \" + myString);\r\n        myString = myString  + \", and this is more.\";\r\n        System.out.println(\"myString is equal to \" + myString);\r\n        myString = myString + \" \\u00A9 2022\";\r\n        System.out.println(\"myString is equal to \" + myString);",
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
      "Always be aware of scope, type constraints, and compiler rules in this area."
    ],
    "syntax": "public class OperatorsOperandsExpressions {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        int myVar = 15 + 12; // 15 and 12 are operands; + is the addition operator.\r\n        double hoursWorked = 9.5d;\r\n        double hourlyRate = 5d;\r\n        double mySalary = hoursWorked * hourlyRate; // hoursWorked and hourlyRate are operands; * is the multiplication operator.\r\n\r\n        // myVar = myVar + 1 is equivalent to myVar++ (increment by 1).",
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
      "NOTE: All methods need to be defined as public static like we have been doing so far in the course.",
      "NOTE: Do not add a main method to your solution code!",
      "NOTE: The shouldWakeUp method  needs to be defined as public static like we have been doing so far in the course.",
      "NOTE: Do not add a  main method to solution code."
    ],
    "syntax": "public class MethodsInJava {\r\n\r\n    public static void main(String[] args) {\r\n     calculateScore(); //method without any parameter\r\n     // calculateScore(true,800,5,100); // Calling the overloaded method with parameters\r\n        // The parameters should be passed in the same order as it is defined in the method.\r\n\r\n        int highScore = calculateScore(true,800,5,100); // The value returned by calculateScore function is now assigned to highScore variable.\r\n        System.out.println(\"Your final score was \" + highScore);",
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
      "Useful methods on the exception object: e.getMessage() -> the error message, e.printStackTrace() -> full call stack."
    ],
    "syntax": "public class ExceptionHandlingInJava {\r\n    public static void main(String[] args) {\r\n\r\n        try{ // The try block wraps any code that might throw an exception at runtime.\r\n            // Place only the risky code here — keep try blocks as small as possible.\r\n        } // The try block ends here; the catch block immediately follows.\r\n        catch (Exception e){  // The catch parameter specifies which exception type to handle. 'Exception' is the base class that catches any exception.\r\n                              // The variable 'e' holds information about the exception, including its message and stack trace.\r\n                              // The catch block contains your error handling logic — log the error, show a message, or recover gracefully.\r\n        }",
    "badges": [
      "main"
    ]
  },
  "Chapter 14: OOP Concepts": {
    "takeaways": [
      "Point Class and Distance Calculation",
      "You have to represent a point in 2D space. Write a class with the name Point. The class needs two fields (instance variables) with name x and y of type int.",
      "The class needs to have two constructors. The first constructor does not have any parameters (no-arg constructor). The second constructor has parameters x and y of type int and it needs to initialize the fields.",
      "Write the following methods (instance methods):",
      "Method named getX without any parameters, it needs to return the value of x field.",
      "Method named getY without any parameters, it needs to return the value of y field."
    ],
    "gotchas": [
      "Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.",
      "Private fields CANNOT be accessed directly from outside the class (e.g., car.make = \"Porsche\" would be a compile error).",
      "NOTE: All methods should be defined as public NOT public static.",
      "NOTE: In total, you have to write 8 methods."
    ],
    "syntax": "public class PointClassDistanceCalculation {\r\n\r\n    private int x;\r\n\r\n    private int y;\r\n\r\n    public PointClassDistanceCalculation(){\r\n\r\n    }",
    "badges": [
      "PointClassDistanceCalculation",
      "getX",
      "getY",
      "setX",
      "setY"
    ]
  }
};
