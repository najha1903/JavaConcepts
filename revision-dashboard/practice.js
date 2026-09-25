// Auto-generated. Do NOT edit manually — run 'npm run revise' to regenerate.
//
// Holds BOTH kinds of challenge, so this is the single source for them:
//   - the hand-written ones from data/practice-challenges.js, first
//   - the generated ones from the author's *Challenge* and *Problem* files
// Every entry carries chapter and concepts. The audit enforces both.
const GENERATED_PRACTICE_CHALLENGES = [
  {
    "id": "casting",
    "title": "Tricky Primitive Casting",
    "difficulty": "Easy",
    "chapter": "Chapter 2: Primitive Types",
    "concepts": [
      "casting"
    ],
    "description": "\n      <p>Write a method <code>public static boolean isLossyCast(double val)</code> that checks whether casting a <code>double</code> to an <code>int</code> will result in a loss of precision/data (i.e. losing the fractional part).</p>\n      <p>Your method should return:</p>\n      <ul>\n        <li><code>true</code> if the cast is lossy (e.g. <code>3.14</code> becomes <code>3</code>, which loses <code>0.14</code>).</li>\n        <li><code>false</code> if there is no loss of precision (e.g. <code>5.0</code> becomes <code>5</code>, which is identical).</li>\n      </ul>\n    ",
    "template": "public class PracticeWorkspace {\n    public static boolean isLossyCast(double val) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          3.14
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      },
      {
        "args": [
          5
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      },
      {
        "args": [
          -2.5
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      },
      {
        "args": [
          0
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      }
    ],
    "source": "curated",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract"
    },
    "conceptsSource": "topic",
    "hasVerify": true,
    "verifyFnStr": "function (userCode, testCase) {\r\n      const body = extractMethodBody(userCode, 'isLossyCast');\r\n      const fn = new Function('val', body);\r\n      return fn(testCase.args[0]) === testCase.expected;\r\n    }"
  },
  {
    "id": "modulus",
    "title": "Modulus Without Operators",
    "difficulty": "Medium",
    "chapter": "Chapter 3: Operators",
    "concepts": [
      "operators"
    ],
    "description": "\n      <p>Write a method <code>public static int getModulus(int dividend, int divisor)</code> that returns the remainder of the division of <code>dividend</code> by <code>divisor</code> <strong>without</strong> using the modulus operator (<code>%</code>) or division operator (<code>/</code>).</p>\n      <p>Assume both inputs are positive integers.</p>\n    ",
    "template": "public class PracticeWorkspace {\n    public static int getModulus(int dividend, int divisor) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [
          10,
          3
        ],
        "expected": 1,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      },
      {
        "args": [
          20,
          5
        ],
        "expected": 0,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      },
      {
        "args": [
          7,
          8
        ],
        "expected": 7,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      },
      {
        "args": [
          0,
          4
        ],
        "expected": 0,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      }
    ],
    "source": "curated",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract"
    },
    "conceptsSource": "topic",
    "hasVerify": true,
    "verifyFnStr": "function (userCode, testCase) {\r\n      const body = extractMethodBody(userCode, 'getModulus');\r\n      const fn = new Function('dividend', 'divisor', body);\r\n      return fn(testCase.args[0], testCase.args[1]) === testCase.expected;\r\n    }"
  },
  {
    "id": "leapyear",
    "title": "Perfect Leap Year Checker",
    "difficulty": "Medium",
    "chapter": "Chapter 6: Methods In Java",
    "concepts": [
      "statements",
      "if-else"
    ],
    "description": "\n      <p>Write a method <code>public static boolean isLeapYear(int year)</code> that returns <code>true</code> if the parameter <code>year</code> is a leap year, and <code>false</code> otherwise.</p>\n      <p>A year is a leap year if it is divisible by 4, but not by 100, unless it is also divisible by 400.</p>\n      <p>If the parameter <code>year</code> is not in the range <strong>[1, 9999]</strong>, return <code>false</code> immediately.</p>\n    ",
    "template": "public class PracticeWorkspace {\n    public static boolean isLeapYear(int year) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          2000
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      },
      {
        "args": [
          1900
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      },
      {
        "args": [
          2024
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      },
      {
        "args": [
          2023
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      },
      {
        "args": [
          10000
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      }
    ],
    "source": "curated",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract"
    },
    "conceptsSource": "topic",
    "hasVerify": true,
    "verifyFnStr": "function (userCode, testCase) {\r\n      const body = extractMethodBody(userCode, 'isLeapYear');\r\n      const fn = new Function('year', body);\r\n      return fn(testCase.args[0]) === testCase.expected;\r\n    }"
  },
  {
    "id": "palindrome",
    "title": "Tricky Palindrome Numbers",
    "difficulty": "Medium",
    "chapter": "Chapter 8: Java Looping Concepts",
    "concepts": [
      "loops",
      "operators"
    ],
    "description": "\n      <p>Write a method <code>public static boolean isPalindrome(int number)</code> that returns <code>true</code> if the number is a palindrome, and <code>false</code> otherwise.</p>\n      <p>A palindrome number reads the same forwards and backwards. Negative numbers should be supported by ignoring their negative sign (e.g. <code>-121</code> is a palindrome).</p>\n      <p>Do <strong>not</strong> convert the number to a <code>String</code> to solve this!</p>\n    ",
    "template": "public class PracticeWorkspace {\n    public static boolean isPalindrome(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          121
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      },
      {
        "args": [
          -121
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      },
      {
        "args": [
          123
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      },
      {
        "args": [
          7
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      }
    ],
    "source": "curated",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract"
    },
    "conceptsSource": "topic",
    "hasVerify": true,
    "verifyFnStr": "function (userCode, testCase) {\r\n      const body = extractMethodBody(userCode, 'isPalindrome');\r\n      const fn = new Function('number', body);\r\n      return fn(testCase.args[0]) === testCase.expected;\r\n    }"
  },
  {
    "id": "statictracking",
    "title": "Static Instance Tracking",
    "difficulty": "Medium",
    "chapter": "Chapter 10: Class Object Static And Instance Fields",
    "concepts": [
      "static",
      "classes"
    ],
    "description": "\n      <p>Create a static variable tracker. Write a method <code>public static int track(int countToCreate)</code> that simulates instantiating a class multiple times.</p>\n      <p>Each instantiation increments a static counter. Return the total instances created.</p>\n      <p>For example, if the class has a static counter, starting from 0, and you instantiate it 3 times, the counter should be 3.</p>\n    ",
    "template": "public class PracticeWorkspace {\n    private static int instanceCount = 0;\n    \n    public PracticeWorkspace() {\n        instanceCount++;\n    }\n    \n    public static int track(int countToCreate) {\n        // Write your code here to instantiate PracticeWorkspace countToCreate times\n        // and return the current instanceCount.\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [
          3
        ],
        "expected": 3,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      },
      {
        "args": [
          5
        ],
        "expected": 8,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      },
      {
        "args": [
          1
        ],
        "expected": 9,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      }
    ],
    "source": "curated",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract"
    },
    "conceptsSource": "topic",
    "hasVerify": true,
    "verifyFnStr": "function (userCode, testCase) {\r\n      const count = testCase.args[0];\r\n      const body = extractMethodBody(userCode, 'track');\r\n\r\n      const simulator = `\r\n        let instanceCount = ${this.accumulated || 0};\r\n        function Constructor() {\r\n            instanceCount++;\r\n        }\r\n        function track(countToCreate) {\r\n            ${body.replace(/new\\s+PracticeWorkspace\\(\\)/g, 'Constructor()')}\r\n            return instanceCount;\r\n        }\r\n        return track(${count});\r\n      `;\r\n      const fn = new Function(simulator);\r\n      const res = fn();\r\n      this.accumulated = res;\r\n      return res === testCase.expected;\r\n    }"
  },
  {
    "id": "polymorphism",
    "title": "Method Overriding with super()",
    "difficulty": "Hard",
    "chapter": "Chapter 13: OOP Concepts",
    "concepts": [
      "polymorphism",
      "inheritance"
    ],
    "description": "\n      <p>In OOP, overriding allows a child class to provide a specific implementation of a method that is already provided by its parent class.</p>\n      <p>Write a method <code>public static String getPolymorphicMessage()</code> inside a subclass <code>Child</code> that overrides the parent <code>Parent</code>'s method <code>public String getMessage()</code>.</p>\n      <p>Your child method should invoke <code>super.getMessage()</code> and prepend the string <code>\"Child: \"</code> to it.</p>\n      <p>The parent <code>Parent</code> class has been defined for you and returns <code>\"Parent Message\"</code>.</p>\n    ",
    "template": "class Parent {\n    public String getMessage() {\n        return \"Parent Message\";\n    }\n}\n\npublic class PracticeWorkspace extends Parent {\n    @Override\n    public String getMessage() {\n        // Write code here to override getMessage and return: \"Child: \" + parent message\n        return \"\";\n    }\n    \n    public static String getPolymorphicMessage() {\n        PracticeWorkspace child = new PracticeWorkspace();\n        return child.getMessage();\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": "Child: Parent Message",
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-challenges.js"
        }
      }
    ],
    "source": "curated",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract"
    },
    "conceptsSource": "topic",
    "hasVerify": true,
    "verifyFnStr": "function (userCode, testCase) {\r\n      const body = extractMethodBody(userCode, 'getMessage');\r\n\r\n      const simulator = `\r\n        class Parent {\r\n            getMessage() { return \"Parent Message\"; }\r\n        }\r\n        class PracticeWorkspace extends Parent {\r\n            getMessage() {\r\n                const super_getMessage = () => super.getMessage();\r\n                ${body.replace(/super\\.getMessage\\(\\)/g, 'super_getMessage()')}\r\n            }\r\n        }\r\n        const child = new PracticeWorkspace();\r\n        return child.getMessage();\r\n      `;\r\n      const fn = new Function(simulator);\r\n      return fn() === testCase.expected;\r\n    }"
  },
  {
    "id": "temperatureconverterchallenge",
    "title": "Temperature Converter",
    "difficulty": "Easy",
    "chapter": "Chapter 1: Java Introduction",
    "sourceFile": "src/Chapter_1_Java_Introduction/Sub_Chapter_2_Java_Intro_CodingChallenge/TemperatureConverterChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract",
      "contractId": "celsius-to-fahrenheit"
    },
    "concepts": [
      "statements"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Challenge: Given a hardcoded Celsius temperature, calculate Fahrenheit using F = (C * 9/5) + 32.</p><p>Print the result in the format: \"25°C is 77.0°F\".</p><p>Practises :- variables, arithmetic with `double`, and printing a formatted result.</p><p>Note :- celsius is double, so (celsius * 9 / 5) uses floating-point arithmetic throughout.</p><p>Writing celsius * (9 / 5) would instead evaluate the integer division first, giving an incorrect factor of 1.</p><p>Expected output for 25 :- 25°C is 77.0°F</p>",
    "template": "public class PracticeWorkspace {\n    public static double toFahrenheit(double celsius) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "category": "normal",
        "args": [
          12.5
        ],
        "expected": 54.5,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        },
        "tolerance": 1e-12
      },
      {
        "category": "normal",
        "args": [
          -10
        ],
        "expected": 14,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        },
        "tolerance": 1e-12
      },
      {
        "category": "boundary",
        "args": [
          0
        ],
        "expected": 32,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        },
        "tolerance": 1e-12
      },
      {
        "category": "boundary",
        "args": [
          100
        ],
        "expected": 212,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        },
        "tolerance": 1e-12
      },
      {
        "category": "boundary",
        "args": [
          -40
        ],
        "expected": -40,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        },
        "tolerance": 1e-12
      }
    ],
    "selfCheck": false,
    "methodName": "toFahrenheit",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"toFahrenheit\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"celsius\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "fibonaccideepproblem",
    "title": "Fibonacci",
    "difficulty": "Hard",
    "chapter": "Chapter 1: Java Introduction",
    "sourceFile": "src/Chapter_1_Java_Introduction/Sub_Chapter_3_DeepProblems/FibonacciDeepProblem.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract",
      "contractId": "fibonacci-sequence"
    },
    "concepts": [
      "statements"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Deep Problem: Fibonacci Analysis — Generate the first N Fibonacci numbers using iteration and build a detector that determines whether a given number belongs to the Fibonacci sequence. The solution should be efficient, easy to trace, and demonstrate both sequence generation and membership checking.</p><p>Practises :- loops, building and returning a long[], and testing membership of a sequence.</p><p>Note :- the sequence starts 0, 1, and each later term is the sum of the two before it, so generateFibonacci(6) gives 0, 1, 1, 2, 3, 5.</p><p>Note :- watch the boundary where count is 0 or negative, which is why the method returns an empty array.</p><p>Parameter limits :- at most 93 terms (F0 through F92) fit in long. Use target <= 7540113804746346429L for membership checks; larger targets can overflow the loop's addition and prevent a reliable result or termination.</p>",
    "template": "public class PracticeWorkspace {\n    public static long[] generateFibonacci(int count) {\n        // Write your code here\n        return null;\n    }\n}",
    "testCases": [
      {
        "category": "normal",
        "args": [
          6
        ],
        "expected": [
          0,
          1,
          1,
          2,
          3,
          5
        ],
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          12
        ],
        "expected": [
          0,
          1,
          1,
          2,
          3,
          5,
          8,
          13,
          21,
          34,
          55,
          89
        ],
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          0
        ],
        "expected": [],
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          1
        ],
        "expected": [
          0
        ],
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          2
        ],
        "expected": [
          0,
          1
        ],
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          3
        ],
        "expected": [
          0,
          1,
          1
        ],
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          -1
        ],
        "expected": [],
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "generateFibonacci",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"generateFibonacci\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"count\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "bitwiseoperationsdeepproblem",
    "title": "Bitwise Operations",
    "difficulty": "Medium",
    "chapter": "Chapter 2: Primitive Types",
    "sourceFile": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_5_DeepProblems/BitwiseOperationsDeepProblem.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "authored-note",
      "contractId": null
    },
    "concepts": [
      "primitives",
      "literals",
      "wrappers",
      "casting",
      "strings",
      "string-pool",
      "var"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Deep Problem: Bitwise Diagnostics — Given an integer, use bitwise operators to answer practical low-level questions: determine odd/even status, count the number of set bits, and swap two integers without a temporary variable by relying on XOR. The program should print a readable diagnostic report.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isOdd(int value) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          3
        ],
        "expected": true,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_5_DeepProblems/BitwiseOperationsDeepProblem.java"
        }
      },
      {
        "args": [
          4
        ],
        "expected": false,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_5_DeepProblems/BitwiseOperationsDeepProblem.java"
        }
      },
      {
        "args": [
          0
        ],
        "expected": false,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_5_DeepProblems/BitwiseOperationsDeepProblem.java"
        }
      },
      {
        "args": [
          -7
        ],
        "expected": true,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_2_PrimitiveTypes/Sub_Chapter_5_DeepProblems/BitwiseOperationsDeepProblem.java"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "isOdd",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isOdd\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"value\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "expressionevaluatordeepproblem",
    "title": "Expression Evaluator",
    "difficulty": "Hard",
    "chapter": "Chapter 3: Operators",
    "sourceFile": "src/Chapter_3_Operators/Sub_Chapter_3_DeepProblems/ExpressionEvaluatorDeepProblem.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "solution-derived-smoke",
      "contractId": null
    },
    "concepts": [
      "operators",
      "casting",
      "statements"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Deep Problem: Expression Evaluator Utilities — Build core numeric helper methods without using Math library shortcuts. Compute powers using repeated multiplication, determine absolute value manually, find the maximum of three values, and classify a number's sign. The goal is to practice operator-driven problem solving.</p>",
    "template": "public class PracticeWorkspace {\n    public static long power(int base, int exponent) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [
          1,
          1
        ],
        "expected": 1,
        "provenance": {
          "kind": "solution-derived-smoke",
          "sourceFile": "src/Chapter_3_Operators/Sub_Chapter_3_DeepProblems/ExpressionEvaluatorDeepProblem.java",
          "sourceHash": "098d71aaab7f3c84689eb75c09960315feba2f7dde5702663604c348bd74d36e",
          "frameworkFingerprint": "b2301b72",
          "execution": "native-reference-and-browser-approximate",
          "nativeValidation": {
            "release": 21,
            "preview": false,
            "compilerVersion": "javac 25.0.4.1",
            "runtimeVersion": "openjdk version \"25.0.4.1\" 2026-08-18 LTS\nOpenJDK Runtime Environment Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS)\nOpenJDK 64-Bit Server VM Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS, mixed mode, sharing)",
            "runtimeEvidence": "observed-on-recorded-runtime; --release constrains language/API, not runtime behavior",
            "validator": "scripts/fill-practice-expectations.js",
            "validatorFingerprint": "fe7c00b12167febf1042690312e744a7465065872715afda68b9e84d4bc68c7c"
          }
        }
      }
    ],
    "selfCheck": false,
    "methodName": "power",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"power\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"base\", \"exponent\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "unitconverterdeepproblem",
    "title": "Unit Converter",
    "difficulty": "Medium",
    "chapter": "Chapter 4: Statements And Indentations",
    "sourceFile": "src/Chapter_4_Statements_And_Indentations/Sub_Chapter_3_DeepProblems/UnitConverterDeepProblem.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "authored-note",
      "contractId": null
    },
    "concepts": [
      "statements",
      "if-else"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Deep Problem: Multi-Domain Unit Converter — Implement a conversion utility that handles distance, weight, temperature, and volume. Each conversion must be isolated in its own method, and the program should generate readable tables for values 1 through 10 to simulate the kind of output a small engineering tool might need.</p>",
    "template": "public class PracticeWorkspace {\n    public static double kilometersToMiles(double kilometers) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [
          1
        ],
        "expected": 0.621371,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_4_Statements_And_Indentations/Sub_Chapter_3_DeepProblems/UnitConverterDeepProblem.java"
        }
      },
      {
        "args": [
          10
        ],
        "expected": 6.21371,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_4_Statements_And_Indentations/Sub_Chapter_3_DeepProblems/UnitConverterDeepProblem.java"
        }
      },
      {
        "args": [
          0
        ],
        "expected": 0,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_4_Statements_And_Indentations/Sub_Chapter_3_DeepProblems/UnitConverterDeepProblem.java"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "kilometersToMiles",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"kilometersToMiles\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"kilometers\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "gradeclassifierdeepproblem",
    "title": "Grade Classifier",
    "difficulty": "Medium",
    "chapter": "Chapter 5: If Else Statements",
    "sourceFile": "src/Chapter_5_If_Else_Statements/Sub_Chapter_3_DeepProblems/GradeClassifierDeepProblem.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "authored-note",
      "contractId": null
    },
    "concepts": [
      "if-else",
      "operators",
      "statements"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Deep Problem: Academic Result Classifier — Create a grading engine that converts numeric scores into fine-grained labels, determines pass/fail status, and maps results into broader academic bands such as Distinction and Merit. The main method should sweep through a range of scores to demonstrate how each rule behaves.</p>",
    "template": "public class PracticeWorkspace {\n    public static String classify(int score) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "testCases": [
      {
        "args": [
          98
        ],
        "expected": "A+",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_5_If_Else_Statements/Sub_Chapter_3_DeepProblems/GradeClassifierDeepProblem.java"
        }
      },
      {
        "args": [
          88
        ],
        "expected": "A",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_5_If_Else_Statements/Sub_Chapter_3_DeepProblems/GradeClassifierDeepProblem.java"
        }
      },
      {
        "args": [
          78
        ],
        "expected": "B",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_5_If_Else_Statements/Sub_Chapter_3_DeepProblems/GradeClassifierDeepProblem.java"
        }
      },
      {
        "args": [
          40
        ],
        "expected": "F",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_5_If_Else_Statements/Sub_Chapter_3_DeepProblems/GradeClassifierDeepProblem.java"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "classify",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"classify\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"score\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "methodsinjava",
    "title": "Methods In Java",
    "difficulty": "Medium",
    "chapter": "Chapter 6: Methods In Java",
    "sourceFile": "src/Chapter_6_Methods_In_Java/Sub_Chapter_1_Methods_In_Java/MethodsInJava.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "casting",
      "overloading"
    ],
    "conceptsSource": "topic",
    "description": "<p>A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.</p><p>Methods are the foundation of the DRY principle — Don't Repeat Yourself. They make code organized, readable, and maintainable.</p><p>Method syntax: accessModifier static returnType methodName(paramType paramName, ...) { ... }</p><p>The return type declares what type of value the method sends back to the caller. Use 'void' if the method returns nothing.</p><p>A non-void method cannot reach its closing brace normally: it must return a compatible value, throw, or keep running.</p><p>Parameters are local variables automatically created when the method is called, holding the values (arguments) passed in. They are destroyed when the method returns.</p><p>You can call a method with literal values: calculateScore(true, 800, 5, 100)</p><p>Or with variables: calculateScore(gameOver, score, levelCompleted, bonus) — the VALUES of those variables are passed.</p><p>Method overloading: you can have multiple methods with the SAME name but DIFFERENT parameter lists (different number or types of parameters). Java picks the correct version based on the arguments you pass.</p><p>A negative return value (like -1) is a common programming convention to signal that something went wrong or the input was invalid.</p><p>This file evolves ONE method, calculateScore, through three stages, defined further down in this same file in this order:</p><p>Stage 1 — calculateScore() with no parameters: void, hard-coded values, only prints (see the method with empty parentheses).</p><p>Stage 2 — a commented-out calculateScore(boolean, int, int, int): still void, now WITH parameters; kept only as a block to show the in-between step — it never compiles or runs.</p><p>Stage 3 — calculateScore(boolean, int, int, int): the final, real overload; same parameters as stage 2, but now returns an int so the caller can capture and reuse the result.</p><p>How a method call actually works :-</p><p>1) Parameters receive copies of the argument values :-</p><p>Note :- Java is always pass-by-value. For a primitive, the copy is the number itself, so changing the parameter inside the method can never change the caller's variable.</p><p>2) The classic swap that does nothing :-</p><p>Note :- only the copies a and b are swapped. swap only works if the values come back through a return value, or if they are objects whose fields you swap.</p><p>3) For an object, the copy is the reference :-</p><p>Note :- the parameter holds a copy of the reference, and both copies point at the same array, so writing through it is visible to the caller.</p><p>4) Reassigning the reference is not visible :-</p><p>Note :- comparing 3 and 4 is the whole of the pass-by-value trap. Changing the object is visible, pointing the parameter at a new object is not.</p><p>5) A non-void method must return on every path :-</p><p>Note :- when n is 0 or less the method would finish without a value, so the compiler refuses the file.</p><p>6) An overload is chosen by the argument types :-</p><p>Note :- Java decides at compile time and prefers the most specific match, so an int argument takes the int version rather than widening to double.</p><p>7) void means the call produces no value :-</p><p>Note :- this assignment does not compile, so nothing runs. Calling printScore(10); on its own would print without returning a value.</p><p>Parameter notes :-</p><p>- score is the starting points, levelCompleted is the number of completed levels, and bonus is points per level; the result is score + levelCompleted * bonus + 1000.</p><p>- With non-negative levelCompleted, a zero bonus adds no level points; a negative bonus subtracts them. These int inputs are not validated and can overflow.</p><p>- gameOver: true calculates the final score; false returns -1 as this exercise's \"no final score\" sentinel. The caller decides whether to print it.</p>",
    "template": "public class PracticeWorkspace {\n    public static int calculateScore(boolean gameOver, int score, int levelCompleted, int bonus) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "calculateScore",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"calculateScore\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"gameOver\", \"score\", \"levelCompleted\", \"bonus\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1], testCase.args[2], testCase.args[3]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "areacalculatorcodingchallenge",
    "title": "Area Calculator",
    "difficulty": "Medium",
    "chapter": "Chapter 6: Methods In Java",
    "sourceFile": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/AreaCalculatorCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract",
      "contractId": "circle-area"
    },
    "concepts": [
      "overloading",
      "statements",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>This challenge uses method overloading to give the same method name two related meanings.</p><p>area(double radius) calculates the area of a circle with Math.PI * radius * radius.</p><p>area(double x, double y) calculates the area of a rectangle with x * y.</p><p>Any negative measurement is invalid, so each overload returns -1.0 when it receives a negative argument.</p><p>Java chooses the correct overloaded method at compile time by looking at the number and types of arguments.</p><p>Example results: area(5.0) returns about 78.53975, area(5.0, 4.0) returns 20.0, and area(-1.0, 4.0) returns -1.0.</p>",
    "template": "public class PracticeWorkspace {\n    public static double area(double radius) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "category": "normal",
        "args": [
          1
        ],
        "expected": 3.141592653589793,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        },
        "tolerance": 1e-12
      },
      {
        "category": "normal",
        "args": [
          2
        ],
        "expected": 12.566370614359172,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        },
        "tolerance": 1e-12
      },
      {
        "category": "boundary",
        "args": [
          0
        ],
        "expected": 0,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        },
        "tolerance": 1e-12
      },
      {
        "category": "invalid",
        "args": [
          -1
        ],
        "expected": -1,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        },
        "tolerance": 1e-12
      }
    ],
    "selfCheck": false,
    "methodName": "area",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"area\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"radius\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "barkingdogcodingchallenge",
    "title": "Barking Dog",
    "difficulty": "Medium",
    "chapter": "Chapter 6: Methods In Java",
    "sourceFile": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/BarkingDogCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract",
      "contractId": "barking-hours"
    },
    "concepts": [
      "overloading",
      "statements",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>This challenge practices boolean logic with two inputs: whether barking is happening and what hour it is.</p><p>shouldWakeUp(boolean barking, int hourOfDay) returns true only when barking is true and the time is before 8 or after 22.</p><p>The valid hour range is 0 through 23; any value outside that range returns false because the input itself is invalid.</p><p>The first guard clause rejects all cases where no action is needed: not barking, negative hour, or hour greater than 23.</p><p>Example results: shouldWakeUp(true, 1) returns true, shouldWakeUp(false, 2) returns false, and shouldWakeUp(true, 8) returns false.</p><p>Important: combine conditions carefully so invalid hours never accidentally produce a true result.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean shouldWakeUp(boolean barking, int hourOfDay) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "category": "normal",
        "args": [
          true,
          3
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          true,
          12
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          false,
          3
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          true,
          0
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          true,
          7
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          true,
          8
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          true,
          22
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          true,
          23
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          false,
          23
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          true,
          -1
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          true,
          24
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "shouldWakeUp",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"shouldWakeUp\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"barking\", \"hourOfDay\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "decimalcomparatorcodingchallenge",
    "title": "Decimal Comparator",
    "difficulty": "Easy",
    "chapter": "Chapter 6: Methods In Java",
    "sourceFile": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/DecimalComparatorCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "authored-note",
      "contractId": null
    },
    "concepts": [
      "overloading",
      "statements",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>This challenge compares two double values only up to three decimal places.</p><p>Multiplying by 1000 shifts the first three decimal places into the whole-number part of the value.</p><p>Casting the shifted double to int truncates the remaining decimal portion instead of rounding it.</p><p>Limits :- this compares truncated binary-double products. Near decimal boundaries rounding can matter; large products saturate at int limits and NaN casts to 0, so this is not a general decimal-equality test.</p><p>If the two truncated int values are equal, the original numbers match to three decimal places.</p><p>Example results: -3.1756 and -3.175 match, 3.175 and 3.176 do not match, and -3.123 and 3.123 do not match.</p><p>Important: this exercise intentionally uses casting and truncation, so it is checking decimal-place equality rather than true mathematical closeness.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean areEqualByThreeDecimalPlaces(double firstNumber, double secondNumber) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          -3.1756,
          -3.175
        ],
        "expected": true,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/DecimalComparatorCodingChallenge.java"
        }
      },
      {
        "args": [
          3.175,
          3.176
        ],
        "expected": false,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/DecimalComparatorCodingChallenge.java"
        }
      },
      {
        "args": [
          -3.123,
          3.123
        ],
        "expected": false,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/DecimalComparatorCodingChallenge.java"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "areEqualByThreeDecimalPlaces",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"areEqualByThreeDecimalPlaces\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"firstNumber\", \"secondNumber\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "equalityprintercodingchallenge",
    "title": "Equality Printer",
    "difficulty": "Medium",
    "chapter": "Chapter 6: Methods In Java",
    "sourceFile": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/EqualityPrinterCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "authored-note",
      "contractId": null
    },
    "concepts": [
      "overloading",
      "statements",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>This challenge classifies the relationship between three int values and prints one exact message.</p><p>printEqual(int firstNumber, int secondNumber, int thirdNumber) is a void method because the visible output is the printed text.</p><p>Any negative input is invalid and must print \"Invalid Value\" before any equality checks.</p><p>If all three numbers are equal, the method prints \"All numbers are equal\".</p><p>If every pair of numbers is different, the method prints \"All numbers are different\".</p><p>All remaining valid combinations print \"Neither all are equal or different\".</p><p>Important: exact output text matters in coding challenge platforms, including capitalization and spaces.</p>",
    "template": "public class PracticeWorkspace {\n    public static void printEqual(int firstNumber, int secondNumber, int thirdNumber) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [
          1,
          1,
          1
        ],
        "expected": "All numbers are equal",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/EqualityPrinterCodingChallenge.java"
        }
      },
      {
        "args": [
          1,
          2,
          3
        ],
        "expected": "All numbers are different",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/EqualityPrinterCodingChallenge.java"
        }
      },
      {
        "args": [
          1,
          1,
          2
        ],
        "expected": "Neither all are equal or different",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/EqualityPrinterCodingChallenge.java"
        }
      },
      {
        "args": [
          -1,
          -1,
          -1
        ],
        "expected": "Invalid Value",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/EqualityPrinterCodingChallenge.java"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "printEqual",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          if (typeof prepareJavaBody !== \"function\") return null;\n          const body = extractMethodBody(userCode, \"printEqual\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = prepareJavaBody(body, true);\n          const out = [];\n          const __print = (v) => { out.push(v === undefined ? \"\" : String(v)); };\n          const __printLn = (v) => { out.push((v === undefined ? \"\" : String(v)) + \"\\n\"); };\n          const fn = new Function(\"__print\", \"__printLn\", \"firstNumber\", \"secondNumber\", \"thirdNumber\", prepared);\n          fn(__print, __printLn, testCase.args[0], testCase.args[1], testCase.args[2]);\n          const actual = out.join(\"\").replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          const expected = String(testCase.expected).replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          return actual === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "equalsumcheckercodingchallenge",
    "title": "Equal Sum Checker",
    "difficulty": "Easy",
    "chapter": "Chapter 6: Methods In Java",
    "sourceFile": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/EqualSumCheckerCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "authored-note",
      "contractId": null
    },
    "concepts": [
      "overloading",
      "statements",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>This challenge practices returning a boolean expression directly from a method.</p><p>hasEqualSum(int firstNumber, int secondNumber, int sum) checks whether firstNumber + secondNumber equals sum.</p><p>The method should return true for matching totals and false for all other totals.</p><p>Example results: hasEqualSum(1, 1, 1) returns false, hasEqualSum(1, 1, 2) returns true, and hasEqualSum(1, -1, 0) returns true.</p><p>Important: because the comparison already produces a boolean, the method can return the expression directly.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean hasEqualSum(int firstNumber, int secondNumber, int sum) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          1,
          1,
          1
        ],
        "expected": false,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/EqualSumCheckerCodingChallenge.java"
        }
      },
      {
        "args": [
          1,
          1,
          2
        ],
        "expected": true,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/EqualSumCheckerCodingChallenge.java"
        }
      },
      {
        "args": [
          1,
          -1,
          0
        ],
        "expected": true,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/EqualSumCheckerCodingChallenge.java"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "hasEqualSum",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"hasEqualSum\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"firstNumber\", \"secondNumber\", \"sum\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1], testCase.args[2]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "leapyearcalculatorcodingchallenge",
    "title": "Leap Year Calculator",
    "difficulty": "Easy",
    "chapter": "Chapter 6: Methods In Java",
    "sourceFile": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/LeapYearCalculatorCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract",
      "contractId": "gregorian-leap-year"
    },
    "concepts": [
      "overloading",
      "statements",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>This challenge implements the leap-year rule as a clean boolean method.</p><p>isLeapYear(int year) first validates that the year is between 1 and 9999, inclusive.</p><p>A valid year is a leap year when it is divisible by 4, except century years must also be divisible by 400.</p><p>Years such as 1700, 1800, 1900, and 2100 are not leap years because they are divisible by 100 but not by 400.</p><p>Years such as 1600, 2000, and 2400 are leap years because they satisfy the special century rule.</p><p>Example results: isLeapYear(-1600) returns false, isLeapYear(1600) returns true, and isLeapYear(2017) returns false.</p><p>Important: place the range validation first so invalid years cannot pass the divisibility checks.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isLeapYear(int year) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "category": "normal",
        "args": [
          2024
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          2023
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          1900
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          2000
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          1
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          9999
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          0
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          10000
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          -400
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "isLeapYear",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isLeapYear\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"year\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "megabytesconvertercodingchallenge",
    "title": "Mega Bytes Converter",
    "difficulty": "Easy",
    "chapter": "Chapter 6: Methods In Java",
    "sourceFile": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/MegaBytesConverterCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "authored-note",
      "contractId": null
    },
    "concepts": [
      "overloading",
      "statements",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>This challenge converts a whole number of kilobytes into megabytes plus leftover kilobytes.</p><p>printMegaBytesAndKiloBytes(int kiloBytes) is a void method because its job is to print a formatted result, not return one.</p><p>Integer division gives the whole megabytes: 2500 / 1024 is 2.</p><p>The remainder operator gives the leftover kilobytes: 2500 % 1024 is 452.</p><p>Invalid input should print exactly \"Invalid Value\"; the exercise treats negative kilobyte values as invalid.</p><p>Important: output formatting is part of the requirement, so extra spaces can make an otherwise correct calculation fail.</p><p>Example results: 2500 prints \"2500 KB = 2 MB and 452 KB\", and 5000 prints \"5000 KB = 4 MB and 904 KB\".</p>",
    "template": "public class PracticeWorkspace {\n    public static void printMegaBytesAndKiloBytes(int kilobytes) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [
          2500
        ],
        "expected": "2500 KB = 2 MB and 452 KB",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/MegaBytesConverterCodingChallenge.java"
        }
      },
      {
        "args": [
          5000
        ],
        "expected": "5000 KB = 4 MB and 904 KB",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/MegaBytesConverterCodingChallenge.java"
        }
      },
      {
        "args": [
          -1024
        ],
        "expected": "Invalid Value",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/MegaBytesConverterCodingChallenge.java"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "printMegaBytesAndKiloBytes",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          if (typeof prepareJavaBody !== \"function\") return null;\n          const body = extractMethodBody(userCode, \"printMegaBytesAndKiloBytes\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = prepareJavaBody(body, true);\n          const out = [];\n          const __print = (v) => { out.push(v === undefined ? \"\" : String(v)); };\n          const __printLn = (v) => { out.push((v === undefined ? \"\" : String(v)) + \"\\n\"); };\n          const fn = new Function(\"__print\", \"__printLn\", \"kilobytes\", prepared);\n          fn(__print, __printLn, testCase.args[0]);\n          const actual = out.join(\"\").replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          const expected = String(testCase.expected).replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          return actual === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "methodschallengeproblem",
    "title": "Methods Challenge Problem",
    "difficulty": "Medium",
    "chapter": "Chapter 6: Methods In Java",
    "sourceFile": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/MethodsChallengeProblem.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "overloading",
      "statements",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>This challenge separates calculation from display so each method has one clear responsibility.</p><p>calculateHighScorePosition(int score) converts a player's score into a ranking position.</p><p>Scores of 1000 or more get position 1, scores of 500 to 999 get position 2, scores of 100 to 499 get position 3, and all lower scores get position 4.</p><p>displayHighScorePosition(String name, int position) prints a readable message using the player's name and calculated position.</p><p>The main method demonstrates the full flow with sample scores 1500, 900, 400, and 50.</p><p>Important: calculate the position first, then pass that result into the display method instead of mixing both jobs in one method.</p>",
    "template": "public class PracticeWorkspace {\n    public static void displayHighScorePosition(String name, int position) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "displayHighScorePosition",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          if (typeof prepareJavaBody !== \"function\") return null;\n          const body = extractMethodBody(userCode, \"displayHighScorePosition\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = prepareJavaBody(body, true);\n          const out = [];\n          const __print = (v) => { out.push(v === undefined ? \"\" : String(v)); };\n          const __printLn = (v) => { out.push((v === undefined ? \"\" : String(v)) + \"\\n\"); };\n          const fn = new Function(\"__print\", \"__printLn\", \"name\", \"position\", prepared);\n          fn(__print, __printLn, testCase.args[0], testCase.args[1]);\n          const actual = out.join(\"\").replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          const expected = String(testCase.expected).replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          return actual === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "minutestoyearsanddayscalculatorcodingchallenge",
    "title": "Minutes To Years And Days Calculator",
    "difficulty": "Easy",
    "chapter": "Chapter 6: Methods In Java",
    "sourceFile": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/MinutesToYearsAndDaysCalculatorCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "authored-note",
      "contractId": null
    },
    "concepts": [
      "overloading",
      "statements",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>This challenge converts a long minute count into full years plus leftover days.</p><p>printYearsAndDays(long minutes) is a void method because it prints the formatted answer directly.</p><p>The conversion uses fixed calendar assumptions: 60 minutes per hour, 24 hours per day, and 365 days per year.</p><p>Only full days are reported; leftover hours and minutes are discarded. Leap years are outside this exercise.</p><p>Implementation limit :- minutes / 60 is narrowed to int, so values above 128849018879L minutes can overflow the hour count.</p><p>Integer division gives the number of complete years, while the remainder operator gives the days left after those years.</p><p>Negative minutes are invalid and must print exactly \"Invalid Value\".</p><p>Example results: 525600 prints \"525600 min = 1 y and 0 d\", and 561600 prints \"561600 min = 1 y and 25 d\".</p><p>Important: exact spacing and capitalization matter because this kind of challenge often checks output text literally.</p>",
    "template": "public class PracticeWorkspace {\n    public static void printYearsAndDays(long minutes) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [
          525600
        ],
        "expected": "525600 min = 1 y and 0 d",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/MinutesToYearsAndDaysCalculatorCodingChallenge.java"
        }
      },
      {
        "args": [
          561600
        ],
        "expected": "561600 min = 1 y and 25 d",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/MinutesToYearsAndDaysCalculatorCodingChallenge.java"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "printYearsAndDays",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          if (typeof prepareJavaBody !== \"function\") return null;\n          const body = extractMethodBody(userCode, \"printYearsAndDays\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = prepareJavaBody(body, true);\n          const out = [];\n          const __print = (v) => { out.push(v === undefined ? \"\" : String(v)); };\n          const __printLn = (v) => { out.push((v === undefined ? \"\" : String(v)) + \"\\n\"); };\n          const fn = new Function(\"__print\", \"__printLn\", \"minutes\", prepared);\n          fn(__print, __printLn, testCase.args[0]);\n          const actual = out.join(\"\").replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          const expected = String(testCase.expected).replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          return actual === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "playingcatcodingchallenge",
    "title": "Playing Cat",
    "difficulty": "Easy",
    "chapter": "Chapter 6: Methods In Java",
    "sourceFile": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/PlayingCatCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract",
      "contractId": "seasonal-playing-temperature"
    },
    "concepts": [
      "overloading",
      "statements",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>This challenge models a temperature rule that changes when the season changes.</p><p>isCatPlaying(boolean isSummer, int temperature) returns true when the temperature is in the allowed range.</p><p>In normal weather, the allowed range is 25 through 35, inclusive.</p><p>In summer, the upper limit expands to 45, so the allowed range is 25 through 45.</p><p>Example results: isCatPlaying(true, 10) returns false, isCatPlaying(false, 36) returns false, and isCatPlaying(false, 35) returns true.</p><p>Important: inclusive boundaries mean 25, 35, and 45 can be valid depending on the value of isSummer.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isCatPlaying(boolean isSummer, int temperature) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "category": "normal",
        "args": [
          false,
          30
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          true,
          40
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          false,
          -5
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          false,
          24
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          false,
          25
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          false,
          35
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          false,
          36
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          true,
          24
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          true,
          25
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          true,
          35
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          true,
          36
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          true,
          45
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          true,
          46
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "isCatPlaying",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isCatPlaying\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"isSummer\", \"temperature\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "positivenegativezerocodingchallenge",
    "title": "Positive Negative Zero",
    "difficulty": "Easy",
    "chapter": "Chapter 6: Methods In Java",
    "sourceFile": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/PositiveNegativeZeroCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "authored-note",
      "contractId": null
    },
    "concepts": [
      "overloading",
      "statements",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>This challenge practices simple branching with a void method.</p><p>checkNumber(int number) classifies one integer and prints the matching label.</p><p>A value greater than 0 prints \"positive\", a value less than 0 prints \"negative\", and 0 prints \"zero\".</p><p>The method does not return a value because the result is communicated through console output.</p><p>Important: the zero case must be handled separately because zero is neither positive nor negative.</p>",
    "template": "public class PracticeWorkspace {\n    public static void checkNumber(int number) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [
          1
        ],
        "expected": "positive",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/PositiveNegativeZeroCodingChallenge.java"
        }
      },
      {
        "args": [
          -1
        ],
        "expected": "negative",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/PositiveNegativeZeroCodingChallenge.java"
        }
      },
      {
        "args": [
          0
        ],
        "expected": "zero",
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/PositiveNegativeZeroCodingChallenge.java"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "checkNumber",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          if (typeof prepareJavaBody !== \"function\") return null;\n          const body = extractMethodBody(userCode, \"checkNumber\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = prepareJavaBody(body, true);\n          const out = [];\n          const __print = (v) => { out.push(v === undefined ? \"\" : String(v)); };\n          const __printLn = (v) => { out.push((v === undefined ? \"\" : String(v)) + \"\\n\"); };\n          const fn = new Function(\"__print\", \"__printLn\", \"number\", prepared);\n          fn(__print, __printLn, testCase.args[0]);\n          const actual = out.join(\"\").replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          const expected = String(testCase.expected).replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          return actual === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "speedconvertercodingchallenge",
    "title": "Speed Converter",
    "difficulty": "Medium",
    "chapter": "Chapter 6: Methods In Java",
    "sourceFile": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/SpeedConverterCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract",
      "contractId": "speed-kmh-to-mph"
    },
    "concepts": [
      "overloading",
      "statements",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>This challenge converts speed from kilometers per hour to miles per hour using small, reusable static methods.</p><p>toMilesPerHour(double kilometersPerHour) validates the input, converts kilometers to miles, rounds the answer, and returns it as a long.</p><p>A negative speed is invalid, so the method returns -1 as a sentinel value instead of a real conversion.</p><p>printConversion(double kilometersPerHour) reuses toMilesPerHour() and prints either \"Invalid Value\" or \"XX km/h = YY mi/h\".</p><p>Method reuse matters here: printConversion() should call toMilesPerHour() instead of duplicating the conversion formula.</p><p>Math.round(double value) returns the nearest long, which is useful when a decimal conversion must be displayed as a whole number.</p><p>Important: 1 mile per hour is approximately 1.609 kilometers per hour, so milesPerHour = kilometersPerHour / 1.609.</p><p>Example results: toMilesPerHour(1.5) returns 1, toMilesPerHour(10.25) returns 6, and toMilesPerHour(-5.6) returns -1.</p>",
    "template": "public class PracticeWorkspace {\n    public static long toMilesPerHour(double kilometersPerHour) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "category": "normal",
        "args": [
          10.25
        ],
        "expected": 6,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          75.114
        ],
        "expected": 47,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          0
        ],
        "expected": 0,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          1.609
        ],
        "expected": 1,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          -0.01
        ],
        "expected": -1,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "toMilesPerHour",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"toMilesPerHour\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"kilometersPerHour\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "teennumbercheckercodingchallenge",
    "title": "Teen Number Checker",
    "difficulty": "Medium",
    "chapter": "Chapter 6: Methods In Java",
    "sourceFile": "src/Chapter_6_Methods_In_Java/Sub_Chapter_2_Methods_Coding_Challenge/TeenNumberCheckerCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract",
      "contractId": "any-teen-range"
    },
    "concepts": [
      "overloading",
      "statements",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>This challenge breaks a repeated age-range check into a helper method.</p><p>isTeen(int number) returns true when number is between 13 and 19, inclusive.</p><p>hasTeen(int firstNumber, int secondNumber, int thirdNumber) returns true when at least one of its three arguments is a teen number.</p><p>Calling isTeen() from hasTeen() keeps the range rule in one place and avoids repeating the same condition three times.</p><p>Example results: hasTeen(9, 99, 19) returns true, hasTeen(23, 15, 42) returns true, and hasTeen(22, 23, 24) returns false.</p><p>Important: inclusive range checks use >= for the lower boundary and <= for the upper boundary.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean hasTeen(int firstNumber, int secondNumber, int thirdNumber) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "category": "normal",
        "args": [
          16,
          30,
          40
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          30,
          16,
          40
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          30,
          40,
          16
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          14,
          16,
          18
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          -1,
          16,
          40
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          30,
          40,
          50
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          13,
          12,
          20
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          12,
          13,
          20
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          12,
          20,
          13
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          19,
          12,
          20
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          12,
          19,
          20
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          12,
          20,
          19
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          12,
          20,
          12
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "hasTeen",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"hasTeen\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"firstNumber\", \"secondNumber\", \"thirdNumber\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1], testCase.args[2]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "recursiondeepproblem",
    "title": "Recursion",
    "difficulty": "Hard",
    "chapter": "Chapter 6: Methods In Java",
    "sourceFile": "src/Chapter_6_Methods_In_Java/Sub_Chapter_3_DeepProblems/RecursionDeepProblem.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "overloading",
      "statements",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Deep Problem: Recursive Number Toolkit — Implement recursive solutions for factorial, Fibonacci, digit summation, and number reversal, while also comparing iterative and recursive factorial side by side. The challenge highlights where recursion is elegant and where iteration can be more direct.</p>",
    "template": "public class PracticeWorkspace {\n    public static long factorialRecursive(int number) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "factorialRecursive",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"factorialRecursive\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "switchstatementinjava",
    "title": "Switch Statement In Java",
    "difficulty": "Easy",
    "chapter": "Chapter 7: Switch Statements",
    "sourceFile": "src/Chapter_7_Switch_Statements/Sub_Chapter_1_Switch_Statement/SwitchStatementInJava.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "switch",
      "break-continue",
      "statements"
    ],
    "conceptsSource": "chapter",
    "description": "<p>The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.</p><p>Switch is cleaner and more readable than nested if-else when you have many possible values to test.</p><p>switch can be used with: byte, short, char, int (primitives), and String (since Java 7), as well as enum types.</p><p>Structure: switch(variable) { case value1: code; break; case value2: code; break; default: code; }</p><p>The 'break' statement is critical — without it, execution \"falls through\" to the next case and continues running (even if that case's value doesn't match).</p><p>Fall-through can sometimes be useful (grouping multiple cases together), but is mostly a source of bugs if not intended.</p><p>The 'default' case is like the 'else' in an if-else — it runs when no case matches. It is optional but recommended.</p><p>A return statement inside a switch also acts like a break — it exits both the switch AND the method.</p><p>Multiple case labels can share the same code block: case 1: case 2: case 3: System.out.println(\"1, 2 or 3\");</p><p>The traditional switch uses colon (:) after each case and requires explicit break statements to stop fall-through.</p><p>Switch in detail :-</p><p>1) Which types the selector may use :-</p><p>The selector may be int, char, byte, short, their wrapper types, a String, or an enum value.</p><p>Note :- float and double are not allowed either. Use an if-else chain for those types.</p><p>2) Fall-through is exactly what break prevents :-</p><p>Output :- BC</p><p>Note :- case 2 matches and prints B, then execution falls into case 3 because case 2 has no break, so C is printed as well. default is never reached, because case 3 breaks.</p><p>3) Falling through deliberately groups cases :-</p><p>Output :- low</p><p>Note :- stacked labels share one body, and only the last of them needs a break.</p><p>4) default is matched, not ordered :-</p><p>Output :- B</p><p>Note :- default is written first, but a matching case 2 is still where execution starts. Writing default first only changes what falls into it.</p><p>5) break leaves the switch, return leaves the method :-</p><p>6) String cases are compared by content, and the comparison is case-sensitive :-</p><p>Output :- unknown</p><p>Note :- the switch compared the characters exactly, so lowercase monday did not match Monday.</p><p>Pitfall :- two case labels with the same value do not compile, so a duplicated constant is caught while compiling rather than running twice.</p><p>Parameter notes :-</p><p>- month (passed to getQuarter(String month)): the exact uppercase month name the case labels expect, such as \"JANUARY\" or \"NOVEMBER\". An unlisted spelling, a lowercase name, or null all fall through to the default branch.</p><p>- value (the selector of switchCaseWithoutUsingBreak): it only picks the case where execution STARTS. Without break statements the run continues into the later cases, so a value of 4 prints the output of 4 and everything after it.</p>",
    "template": "public class PracticeWorkspace {\n    public static String getQuarter(String month) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "getQuarter",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"getQuarter\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"month\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "enhancedswitchstatementinjava",
    "title": "Enhanced Switch Statement In Java",
    "difficulty": "Medium",
    "chapter": "Chapter 7: Switch Statements",
    "sourceFile": "src/Chapter_7_Switch_Statements/Sub_Chapter_2_Enhanced_Switch_Statement/EnhancedSwitchStatementInJava.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "switch",
      "break-continue",
      "statements"
    ],
    "conceptsSource": "chapter",
    "description": "<p>The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.</p><p>It uses the arrow (->) syntax instead of colon (:), eliminating fall-through by design — no 'break' needed.</p><p>Traditional switch: case 1: ... break; Enhanced switch: case 1 -> ...</p><p>Multiple values can be grouped with comma-separated lists: case 3, 4, 5 -> ... (instead of stacking three case labels)</p><p>The enhanced switch can be used as an EXPRESSION — it can return a value directly. This makes code concise and readable.</p><p>When used as a switch expression, the 'default' case is mandatory to ensure all possible values are covered.</p><p>The 'yield' keyword is used inside a case block { } when you need multiple statements before returning a value.</p><p>yield is to a switch expression what return is to a method — it provides the value for that case.</p><p>Example: default -> { String msg = \"INVALID\"; yield msg; }</p><p>Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive.</p><p>Enhanced switch in detail :-</p><p>1) No fall-through, so there is no break to forget :-</p><p>case 1 -> System.out.println(\"one\"); case 2 -> System.out.println(\"two\"); default -> System.out.println(\"other\");</p><p>Output :- two</p><p>Note :- an arrow arm is finished when its statement ends, so execution can never slide into the arm below it.</p><p>2) Several values share one arrow :-</p><p>default -> System.out.println(\"out of range\");</p><p>Output :- high</p><p>Note :- the comma list does the job of three stacked case labels, with less to get wrong.</p><p>3) A switch expression produces a value :-</p><p>case 1 -> \"Monday\"; case 2 -> \"Tuesday\"; default -> \"Unknown\";</p><p>Note :- the value of the chosen arm becomes the value of the whole switch, so it can be assigned to a variable or returned from a method.</p><p>4) An arm may need more than one statement :-</p><p>default -> {</p><p>Note :- an arm that needs a block ends with `yield`, which hands the value back to the switch. `yield` is to a switch expression what `return` is to a method.</p><p>Pitfall :- a switch expression must cover every possible input, so the `default` arm is compulsory there. A switch statement may omit it, but then an unmatched value does nothing at all.</p><p>Pitfall :- `yield` is only allowed inside a switch expression. Writing it in an ordinary method is a compile error.</p>",
    "template": "public class PracticeWorkspace {\n    public static String getQuarter(String month) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "getQuarter",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"getQuarter\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"month\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "numberofdaysinamonthcodingchallenge",
    "title": "Number Of Days In A Month",
    "difficulty": "Medium",
    "chapter": "Chapter 7: Switch Statements",
    "sourceFile": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/NumberOfDaysInAMonthCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "authored-note",
      "contractId": null
    },
    "concepts": [
      "switch",
      "break-continue",
      "statements"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Write a method isLeapYear with a parameter of type int named year.</p><p>The parameter needs to be greater than or equal to 1 and less than or equal to 9999.</p><p>If the parameter is not in that range return false.</p><p>Otherwise, if it is in the valid range, calculate if the year is a leap year and return true if it is, otherwise return false.</p><p>A year is a leap year if it is divisible by 4 but not by 100, or it is divisible by 400.</p><p>Examples of input/output:</p><p>isLeapYear(-1600); → should return false since the parameter is not in the range (1-9999)</p><p>isLeapYear(1600); → should return true since 1600 is a leap year</p><p>isLeapYear(2017); → should return false since 2017 is not a leap year</p><p>isLeapYear(2000); → should return true because 2000 is a leap year</p><p>NOTE: The solution to the Leap Year coding exercise earlier in the course created the isLeapYear method. You can use that solution if you wish.</p><p>Write another method getDaysInMonth with two parameters month and year. Both of type int.</p><p>If parameter month is < 1 or > 12 return -1.</p><p>If parameter year is < 1 or > 9999 then return -1.</p><p>This method needs to return the number of days in the month. Be careful about leap years they have 29 days in month 2 (February).</p><p>You should check if the year is a leap year using the method isLeapYear described above.</p><p>Examples of input/output:</p><p>getDaysInMonth(1, 2020); → should return 31 since January has 31 days.</p><p>getDaysInMonth(2, 2020); → should return 29 since February has 29 days in a leap year and 2020 is a leap year.</p><p>getDaysInMonth(2, 2018); → should return 28 since February has 28 days if it's not a leap year and 2018 is not a leap year.</p><p>getDaysInMonth(-1, 2020); → should return -1 since the parameter month is invalid.</p><p>getDaysInMonth(1, -2020); → should return -1 since the parameter year is outside the range of 1 to 9999.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isLeapYear(int year) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          -1600
        ],
        "expected": false,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/NumberOfDaysInAMonthCodingChallenge.java"
        }
      },
      {
        "args": [
          1600
        ],
        "expected": true,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/NumberOfDaysInAMonthCodingChallenge.java"
        }
      },
      {
        "args": [
          2017
        ],
        "expected": false,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/NumberOfDaysInAMonthCodingChallenge.java"
        }
      },
      {
        "args": [
          2000
        ],
        "expected": true,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/NumberOfDaysInAMonthCodingChallenge.java"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "isLeapYear",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isLeapYear\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"year\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "printnumberinaworldcodingchallenge",
    "title": "Print Number In A World",
    "difficulty": "Medium",
    "chapter": "Chapter 7: Switch Statements",
    "sourceFile": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/PrintNumberInAWorldCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "solution-derived-smoke",
      "contractId": null
    },
    "concepts": [
      "switch",
      "break-continue",
      "statements"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Write a method called printNumberInWord.</p><p>The method has one parameter number which is the whole number.</p><p>The method needs to print \"ZERO\", \"ONE\", \"TWO\", ... \"NINE\", \"OTHER\" if the int parameter number is 0, 1, 2, .... 9 or other for any other number including negative numbers.</p>",
    "template": "public class PracticeWorkspace {\n    public static String returnNumberInAWordUsingTraditionalSwitch(int number) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "testCases": [
      {
        "args": [
          1
        ],
        "expected": "ONE",
        "provenance": {
          "kind": "solution-derived-smoke",
          "sourceFile": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/PrintNumberInAWorldCodingChallenge.java",
          "sourceHash": "36f910b7e7193015bb88b72041cf6dc15eb1ff34459fdb30b9e2ca6c0791da8c",
          "frameworkFingerprint": "b2301b72",
          "execution": "native-reference-and-browser-approximate",
          "nativeValidation": {
            "release": 21,
            "preview": false,
            "compilerVersion": "javac 25.0.4.1",
            "runtimeVersion": "openjdk version \"25.0.4.1\" 2026-08-18 LTS\nOpenJDK Runtime Environment Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS)\nOpenJDK 64-Bit Server VM Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS, mixed mode, sharing)",
            "runtimeEvidence": "observed-on-recorded-runtime; --release constrains language/API, not runtime behavior",
            "validator": "scripts/fill-practice-expectations.js",
            "validatorFingerprint": "fe7c00b12167febf1042690312e744a7465065872715afda68b9e84d4bc68c7c"
          }
        }
      }
    ],
    "selfCheck": false,
    "methodName": "returnNumberInAWordUsingTraditionalSwitch",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"returnNumberInAWordUsingTraditionalSwitch\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "switchstatementchallenge",
    "title": "Switch Statement",
    "difficulty": "Easy",
    "chapter": "Chapter 7: Switch Statements",
    "sourceFile": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/SwitchStatementChallenge.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "switch",
      "break-continue",
      "statements"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Create a new switch statement using char instead of int.</p><p>Create a new char variable</p><p>Create a switch statement testing for A,B,C,D or E display a message if any of these are found and then break</p><p>Add a default which displays a message saying not found</p>",
    "template": "public class PracticeWorkspace {\n    public static void switchStatementUsingChar(char ch) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "switchStatementUsingChar",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          if (typeof prepareJavaBody !== \"function\") return null;\n          const body = extractMethodBody(userCode, \"switchStatementUsingChar\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = prepareJavaBody(body, true);\n          const out = [];\n          const __print = (v) => { out.push(v === undefined ? \"\" : String(v)); };\n          const __printLn = (v) => { out.push((v === undefined ? \"\" : String(v)) + \"\\n\"); };\n          const fn = new Function(\"__print\", \"__printLn\", \"ch\", prepared);\n          fn(__print, __printLn, testCase.args[0]);\n          const actual = out.join(\"\").replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          const expected = String(testCase.expected).replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          return actual === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "switchstatementchallengereturndayoftheweek",
    "title": "Switch Statement Challenge Return Day Of The Week",
    "difficulty": "Easy",
    "chapter": "Chapter 7: Switch Statements",
    "sourceFile": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/SwitchStatementChallengeReturnDayOfTheWeek.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "switch",
      "break-continue",
      "statements"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Use the enhanced switch statement as an expression, returning the result to a String named dayOfTheWeek. Print both the day variable and the dayOfTheWeek variable. In the main method, call this method for the values 0 through 7.</p><p>Challenge</p><p>1. Create a method called printDaysOfWeek, that takes an int parameter called day, but doesn't return any value</p>",
    "template": "public class PracticeWorkspace {\n    public static void printDayOfWeek(int day) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "printDayOfWeek",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          if (typeof prepareJavaBody !== \"function\") return null;\n          const body = extractMethodBody(userCode, \"printDayOfWeek\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = prepareJavaBody(body, true);\n          const out = [];\n          const __print = (v) => { out.push(v === undefined ? \"\" : String(v)); };\n          const __printLn = (v) => { out.push((v === undefined ? \"\" : String(v)) + \"\\n\"); };\n          const fn = new Function(\"__print\", \"__printLn\", \"day\", prepared);\n          fn(__print, __printLn, testCase.args[0]);\n          const actual = out.join(\"\").replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          const expected = String(testCase.expected).replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          return actual === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "switchstatementnatochallenge",
    "title": "Switch Statement N A T O",
    "difficulty": "Easy",
    "chapter": "Chapter 7: Switch Statements",
    "sourceFile": "src/Chapter_7_Switch_Statements/Sub_Chapter_3_CodingChallenge/SwitchStatementNATOChallenge.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "switch",
      "break-continue",
      "statements"
    ],
    "conceptsSource": "chapter",
    "description": "<p>In this challenge, we'll be using the NATO alphabet to replace a character or letter,with NATO's standardized word for that letter.</p><p>1) Create a new char variable. Use the traditional switch statement (with a colon in case labels) that tests the value in the variable from Step 1.</p><p>2) Create cases for the characters, A, B, C, D, and E. Display a message in each case block,with the letter and the NATO word, then break.</p><p>3) Add a default block, which displays the letter with a message saying not found.</p>",
    "template": "public class PracticeWorkspace {\n    public static void returnNatoStringForGivenCharacter(char ch) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "returnNatoStringForGivenCharacter",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          if (typeof prepareJavaBody !== \"function\") return null;\n          const body = extractMethodBody(userCode, \"returnNatoStringForGivenCharacter\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = prepareJavaBody(body, true);\n          const out = [];\n          const __print = (v) => { out.push(v === undefined ? \"\" : String(v)); };\n          const __printLn = (v) => { out.push((v === undefined ? \"\" : String(v)) + \"\\n\"); };\n          const fn = new Function(\"__print\", \"__printLn\", \"ch\", prepared);\n          fn(__print, __printLn, testCase.args[0]);\n          const actual = out.join(\"\").replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          const expected = String(testCase.expected).replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          return actual === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "menudrivencalculatordeepproblem",
    "title": "Menu Driven Calculator",
    "difficulty": "Hard",
    "chapter": "Chapter 7: Switch Statements",
    "sourceFile": "src/Chapter_7_Switch_Statements/Sub_Chapter_4_DeepProblems/MenuDrivenCalculatorDeepProblem.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "switch",
      "break-continue",
      "statements"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Deep Problem: Menu-Driven Decision Engine — Build a calculator that evaluates arithmetic operations through an enhanced switch and a day classifier that categorizes weekday and weekend values. The program should also guard against invalid input such as division by zero or unknown day names.</p>",
    "template": "public class PracticeWorkspace {\n    public static String calculate(double first, double second, char operator) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "calculate",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"calculate\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"first\", \"second\", \"operator\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1], testCase.args[2]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "forstatement",
    "title": "For Statement",
    "difficulty": "Easy",
    "chapter": "Chapter 8: Java Looping Concepts",
    "sourceFile": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_1_For_Statement/ForStatement.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "loops",
      "break-continue"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Loops let us execute the same block of code multiple times without writing that code again and again.</p><p>Java supports several looping statements for repetitive execution:</p><p>- for --> best when you are iterating over a known range or set of values.</p><p>- while --> runs until a specified condition becomes false.</p><p>- do while --> always runs at least once, then continues until the condition becomes false.</p><p>The for statement is often referred to as the for loop.</p><p>It repeatedly loops until a condition is no longer satisfied.</p><p>- Initialisation runs once before the loop starts and usually declares or sets a loop variable.</p><p>- Condition is checked before each iteration. If it becomes false, the loop ends.</p><p>- Update runs after each iteration body and usually increments or decrements the loop variable.</p><p>- A variable declared inside for(int i = ...) is local to that loop and does not exist outside it.</p><p>Break Statement :-</p><p>A break statement transfers control out of an enclosing statement.</p><p>It can also be used inside a loop to exit immediately.</p><p>Continue Statement :-</p><p>The continue statement stops the current iteration, skips the remaining code in that iteration, and starts the next one.</p><p>It is useful when you want to keep looping but skip certain values or partially execute some iterations.</p><p>Example of continue statement:</p><p>Output :- 5 10 15 20 30 35 40 45 [Numbers 25 and 50 are not printed]</p><p>The three parts in more detail :-</p><p>1) Off-by-one is decided by < or <= :-</p><p>Note :- starting at 0 with < gives exactly 5 passes. Changing < to <= adds one more pass, which is the usual off-by-one mistake.</p><p>2) The loop variable and the header :-</p><p>Note :- i is declared in the header, so it belongs to the loop and is gone once the loop ends. To keep it, declare it before the loop.</p><p>3) Two counters in one header :-</p><p>Output :- 0 10, then 1 9, then 2 8, and so on Note :- the initialisation and update sections may each hold several statements separated by commas.</p><p>4) The endless for loop :-</p><p>Note :- all three sections are optional. Only a break or a return inside the body can end this loop.</p><p>5) continue skips the rest of this pass, but still runs the update :-</p><p>Note :- continue jumps to the update step, so i still increases. That is why the loop cannot get stuck here.</p><p>6) Nested loops, and how to leave both at once :-</p><p>outer:</p><p>Note :- the inner loop runs its whole 3 passes for every single pass of the outer loop. A plain break would leave only the inner loop, which is why a label is used when both must stop.</p>",
    "template": "public class PracticeWorkspace {\n    public static double calculateInterest(double amount, double interestRate) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "calculateInterest",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"calculateInterest\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"amount\", \"interestRate\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "forloopprimenumberchallenge",
    "title": "For Loop Prime Number",
    "difficulty": "Medium",
    "chapter": "Chapter 8: Java Looping Concepts",
    "sourceFile": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_2_For_Loop_Coding_Challenge/ForLoopPrimeNumberChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "solution-derived-smoke",
      "contractId": null
    },
    "concepts": [
      "loops",
      "break-continue"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Create a prime number counter variable, that will keep count of how many prime numbers were found.</p><p>Create a for statement, using any range of numbers, where the maximum number is <= 1000.</p><p>For each number in the range: Check to see if it's a prime number using the isPrime method. If the number is prime, print it out and increment the prime number counter variable. Once the prime number counter equals three, exit the loop (Hint, use the break statement to exit). Your challenge is to create a for statement, using any range of numbers, to determine if the numbers, are prime numbers.</p><p>If it's a prime number, print it out, and increment a count of the number of prime numbers found. if you get to the stage where 3 or more prime numbers are found, end the loop. In other words, you'll be iterating through the loop, but you've found three prime numbers before the range is fully processed.</p><p>CODING CHALLENGE — For Loop with Break</p><p>This challenge practices: for loops, a helper method (isPrime), the break statement, and prime number logic.</p><p>A prime number is only divisible by 1 and itself. The isPrime method checks divisibility up to number/2 (any factor beyond that would have a corresponding factor below it).</p><p>The challenge: find 3 prime numbers in range 10-20 using a for loop, then break once 3 are found.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isPrime(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          1
        ],
        "expected": false,
        "provenance": {
          "kind": "solution-derived-smoke",
          "sourceFile": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_2_For_Loop_Coding_Challenge/ForLoopPrimeNumberChallenge.java",
          "sourceHash": "2ae08770bcf8400615e36fbaa4ceef81515ed8cf6ad3468a989d90e26e356720",
          "frameworkFingerprint": "b2301b72",
          "execution": "native-reference-and-browser-approximate",
          "nativeValidation": {
            "release": 21,
            "preview": false,
            "compilerVersion": "javac 25.0.4.1",
            "runtimeVersion": "openjdk version \"25.0.4.1\" 2026-08-18 LTS\nOpenJDK Runtime Environment Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS)\nOpenJDK 64-Bit Server VM Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS, mixed mode, sharing)",
            "runtimeEvidence": "observed-on-recorded-runtime; --release constrains language/API, not runtime behavior",
            "validator": "scripts/fill-practice-expectations.js",
            "validatorFingerprint": "fe7c00b12167febf1042690312e744a7465065872715afda68b9e84d4bc68c7c"
          }
        }
      }
    ],
    "selfCheck": false,
    "methodName": "isPrime",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isPrime\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "sumoddchallenge",
    "title": "Sum Odd",
    "difficulty": "Medium",
    "chapter": "Chapter 8: Java Looping Concepts",
    "sourceFile": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_2_For_Loop_Coding_Challenge/SumOddChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract",
      "contractId": "positive-odd-number"
    },
    "concepts": [
      "loops",
      "break-continue"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.</p><p>Check that number is > 0, if it is not return false.</p><p>If number is odd return true, otherwise return false.</p><p>Write a second method called sumOdd that has 2 int parameters start and end, which represent a range of numbers.</p><p>The method should use a for loop to sum all odd numbers in that range including the end and return the sum.</p><p>It should call the method isOdd to check if each number is odd.</p><p>The parameter end needs to be greater than or equal to start and both start and end parameters have to be greater than 0.</p><p>If those conditions are not satisfied return -1 from the method to indicate invalid input.</p><p>Example input/output:</p><p>sumOdd(1, 100); → should return 2500</p><p>sumOdd(-1, 100); → should return -1</p><p>sumOdd(100, 100); → should return 0</p><p>sumOdd(13, 13); → should return 13 (This set contains one number, 13, and it is odd)</p><p>sumOdd(100, -100); → should return -1</p><p>sumOdd(100, 1000); → should return 247500</p><p>CODING CHALLENGE — For Loop with Method Decomposition</p><p>This challenge decomposes the problem into two methods: isOdd() checks a single number, sumOdd() uses a for loop to accumulate the sum.</p><p>Method decomposition: breaking a complex problem into smaller, single-purpose methods is a fundamental good programming practice.</p><p>Guard clauses: checking invalid input at the start of a method and returning early (-1) to signal invalid input.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isOdd(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "category": "normal",
        "args": [
          3
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          4
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          1
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          0
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          -3
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "isOdd",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isOdd\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "patternprinterdeepproblem",
    "title": "Pattern Printer",
    "difficulty": "Medium",
    "chapter": "Chapter 8: Java Looping Concepts",
    "sourceFile": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_3_DeepProblems/PatternPrinterDeepProblem.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "solution-derived-smoke",
      "contractId": null
    },
    "concepts": [
      "loops",
      "break-continue"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Deep Problem: Pattern Rendering Engine — Use nested loops to generate multiple console-based patterns, including star triangles, a number pyramid, and a full multiplication table. The challenge mirrors the kind of structured output logic often needed in reporting and diagnostic tools.</p>",
    "template": "public class PracticeWorkspace {\n    public static void printRightTriangle(int size) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [
          1
        ],
        "expected": "* ",
        "provenance": {
          "kind": "solution-derived-smoke",
          "sourceFile": "src/Chapter_8_Java_Looping_Concepts/Sub_Chapter_3_DeepProblems/PatternPrinterDeepProblem.java",
          "sourceHash": "a4c5e652a8d6d77d3f9c9c11d480201d02b1b14302f18bf2241b6647d5a78421",
          "frameworkFingerprint": "b2301b72",
          "execution": "native-reference-and-browser-approximate",
          "nativeValidation": {
            "release": 21,
            "preview": false,
            "compilerVersion": "javac 25.0.4.1",
            "runtimeVersion": "openjdk version \"25.0.4.1\" 2026-08-18 LTS\nOpenJDK Runtime Environment Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS)\nOpenJDK 64-Bit Server VM Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS, mixed mode, sharing)",
            "runtimeEvidence": "observed-on-recorded-runtime; --release constrains language/API, not runtime behavior",
            "validator": "scripts/fill-practice-expectations.js",
            "validatorFingerprint": "fe7c00b12167febf1042690312e744a7465065872715afda68b9e84d4bc68c7c"
          }
        }
      }
    ],
    "selfCheck": false,
    "methodName": "printRightTriangle",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          if (typeof prepareJavaBody !== \"function\") return null;\n          const body = extractMethodBody(userCode, \"printRightTriangle\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = prepareJavaBody(body, true);\n          const out = [];\n          const __print = (v) => { out.push(v === undefined ? \"\" : String(v)); };\n          const __printLn = (v) => { out.push((v === undefined ? \"\" : String(v)) + \"\\n\"); };\n          const fn = new Function(\"__print\", \"__printLn\", \"size\", prepared);\n          fn(__print, __printLn, testCase.args[0]);\n          const actual = out.join(\"\").replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          const expected = String(testCase.expected).replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          return actual === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "checknumberpalindromecodingchallenge",
    "title": "Check Number Palindrome",
    "difficulty": "Easy",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/CheckNumberPalindromeCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "authored-note",
      "contractId": null
    },
    "concepts": [
      "loops",
      "break-continue",
      "operators"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Number Palindrome</p><p>Write a method called isPalindrome with one int parameter called number.</p><p>The method needs to return a boolean.</p><p>It should return true if the number is a palindrome number otherwise it should return false.</p><p>Check the tips below for more info about palindromes.</p><p>Example Input/Output checkIfNumberIsPalindrome(-1221); → should return true</p><p>checkIfNumberIsPalindrome(707); → should return true</p><p>checkIfNumberIsPalindrome(11212); → should return false because reverse is 21211 and that is not equal to 11212.</p><p>Tip: What is a Palindrome number? A palindrome number is a number which when reversed is equal to the original number. For example: 121, 12321, 1001 etc.</p><p>Tip: Logic to check a palindrome number</p><p>Find the the reverse of the given number. Store it in some variable say reverse. Compare the number with reverse.</p><p>If both are the the same then the number is a palindrome otherwise it is not.</p><p>Tip: Logic to reverse a number</p><p>Declare and initialize another variable to store the reverse of a number, for example reverse = 0.</p><p>Extract the last digit of the given number by performing the modulo division (remainder).</p><p>Store the last digit to some variable say lastDigit = num % 10.</p><p>Increase the place value of reverse by one.</p><p>To increase place value multiply the reverse variable by 10 e.g. reverse = reverse * 10.</p><p>Add lastDigit to reverse.</p><p>Since the last digit of the number is processed, remove the last digit of num. To remove the last digit divide number by 10.</p><p>Repeat steps until number is not equal to (or greater than) zero.</p><p>A while loop would be good for this coding exercise.</p><p>CODING CHALLENGE — While Loop with Number Reversal</p><p>A palindrome number reads the same forwards and backwards: 121, 1001, 707.</p><p>Technique: reverse the number using arithmetic. Extract the last digit with (number % 10), add it to the reversed number (reversed * 10 + digit), then remove the last digit (number / 10). Compare reversed == original.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean checkIfNumberIsPalindrome(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          -1221
        ],
        "expected": true,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/CheckNumberPalindromeCodingChallenge.java"
        }
      },
      {
        "args": [
          707
        ],
        "expected": true,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/CheckNumberPalindromeCodingChallenge.java"
        }
      },
      {
        "args": [
          11212
        ],
        "expected": false,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/CheckNumberPalindromeCodingChallenge.java"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "checkIfNumberIsPalindrome",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"checkIfNumberIsPalindrome\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "digitsumcodingchallenge",
    "title": "Digit Sum",
    "difficulty": "Easy",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/DigitSumCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "solution-derived-smoke",
      "contractId": null
    },
    "concepts": [
      "loops",
      "break-continue",
      "operators"
    ],
    "conceptsSource": "chapter",
    "description": "<p>In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int.</p><p>The method should only take a number that is a positive number.</p><p>If a negative number is passed, it should return -1, meaning, an invalid value was passed.</p><p>The method should parse out each digit from the number and sum the digits up.</p><p>So, if 125 is the value passed to the method, the code should sum each digit, in this case, 1 + 2 + 5, and return 8, as a value. And another example, if the value is 1000, the code should sum each digit, 1 + 0 + 0 + 0, and return 1 as a value.</p><p>If the number is a single digit number, simply return the number itself as the result.</p>",
    "template": "public class PracticeWorkspace {\n    public static int sumDigits(int number) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [
          1
        ],
        "expected": 1,
        "provenance": {
          "kind": "solution-derived-smoke",
          "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/DigitSumCodingChallenge.java",
          "sourceHash": "1df13361482c8b98aaf36937915d9d2b789b05f21ef9e952572809df98396f13",
          "frameworkFingerprint": "b2301b72",
          "execution": "native-reference-and-browser-approximate",
          "nativeValidation": {
            "release": 21,
            "preview": false,
            "compilerVersion": "javac 25.0.4.1",
            "runtimeVersion": "openjdk version \"25.0.4.1\" 2026-08-18 LTS\nOpenJDK Runtime Environment Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS)\nOpenJDK 64-Bit Server VM Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS, mixed mode, sharing)",
            "runtimeEvidence": "observed-on-recorded-runtime; --release constrains language/API, not runtime behavior",
            "validator": "scripts/fill-practice-expectations.js",
            "validatorFingerprint": "fe7c00b12167febf1042690312e744a7465065872715afda68b9e84d4bc68c7c"
          }
        }
      }
    ],
    "selfCheck": false,
    "methodName": "sumDigits",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"sumDigits\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "evendigitsumcodingchallenge",
    "title": "Even Digit Sum",
    "difficulty": "Medium",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/EvenDigitSumCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract",
      "contractId": "even-digit-sum"
    },
    "concepts": [
      "loops",
      "break-continue",
      "operators"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Even Digit Sum</p><p>Write a method named getEvenDigitSum with one parameter of type int called number.</p><p>The method should return the sum of the even digits within the number.</p><p>If the number is negative, the method should return -1 to indicate an invalid value.</p><p>EXAMPLE INPUT/OUTPUT:</p><p>getEvenDigitSum(123456789); → should return 20 since 2 + 4 + 6 + 8 = 20</p><p>getEvenDigitSum(252); → should return 4 since 2 + 2 = 4</p><p>getEvenDigitSum(-22); → should return -1 since the number is negative</p>",
    "template": "public class PracticeWorkspace {\n    public static int getEvenDigitSum(int number) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "category": "normal",
        "args": [
          123456789
        ],
        "expected": 20,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          2468
        ],
        "expected": 20,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          13579
        ],
        "expected": 0,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          0
        ],
        "expected": 0,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          2
        ],
        "expected": 2,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          -22
        ],
        "expected": -1,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "getEvenDigitSum",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"getEvenDigitSum\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "factorprintercodingchallenge",
    "title": "Factor Printer",
    "difficulty": "Medium",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/FactorPrinterCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "solution-derived-smoke",
      "contractId": null
    },
    "concepts": [
      "loops",
      "break-continue",
      "operators"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Factor Printer Challenge: A factor of a number N is any integer that divides N with no remainder.</p><p>For example, the factors of 32 are: 1, 2, 4, 8, 16, 32 — each divides 32 evenly.</p><p>The approach uses a while loop counting from 1 to N, checking if number % counter == 0 (i.e., divisible with no remainder).</p><p>If the number is less than 1, the method returns -1 to indicate invalid input.</p>",
    "template": "public class PracticeWorkspace {\n    public static void printFactors(int number) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [
          1
        ],
        "expected": "1 ",
        "provenance": {
          "kind": "solution-derived-smoke",
          "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/FactorPrinterCodingChallenge.java",
          "sourceHash": "528d64310f98c758268ffbecb94350832a9f516f65c81c64756f09460837616c",
          "frameworkFingerprint": "b2301b72",
          "execution": "native-reference-and-browser-approximate",
          "nativeValidation": {
            "release": 21,
            "preview": false,
            "compilerVersion": "javac 25.0.4.1",
            "runtimeVersion": "openjdk version \"25.0.4.1\" 2026-08-18 LTS\nOpenJDK Runtime Environment Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS)\nOpenJDK 64-Bit Server VM Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS, mixed mode, sharing)",
            "runtimeEvidence": "observed-on-recorded-runtime; --release constrains language/API, not runtime behavior",
            "validator": "scripts/fill-practice-expectations.js",
            "validatorFingerprint": "fe7c00b12167febf1042690312e744a7465065872715afda68b9e84d4bc68c7c"
          }
        }
      }
    ],
    "selfCheck": false,
    "methodName": "printFactors",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          if (typeof prepareJavaBody !== \"function\") return null;\n          const body = extractMethodBody(userCode, \"printFactors\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = prepareJavaBody(body, true);\n          const out = [];\n          const __print = (v) => { out.push(v === undefined ? \"\" : String(v)); };\n          const __printLn = (v) => { out.push((v === undefined ? \"\" : String(v)) + \"\\n\"); };\n          const fn = new Function(\"__print\", \"__printLn\", \"number\", prepared);\n          fn(__print, __printLn, testCase.args[0]);\n          const actual = out.join(\"\").replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          const expected = String(testCase.expected).replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          return actual === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "firstandlastdigitsumcodingchallenge",
    "title": "First And Last Digit Sum",
    "difficulty": "Medium",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/FirstAndLastDigitSumCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "authored-note",
      "contractId": null
    },
    "concepts": [
      "loops",
      "break-continue",
      "operators"
    ],
    "conceptsSource": "chapter",
    "description": "<p>First And Last Digit Sum</p><p>Write a method named sumFirstAndLastDigit with one parameter of type int called number.</p><p>The method needs to find the first and the last digit of the parameter number passed to the method, using a loop and return the sum of the first and the last digit of that number.</p><p>If the number is negative then the method needs to return -1 to indicate an invalid value.</p><p>Example input/output sumFirstAndLastDigit(252); → should return 4, the first digit is 2 and the last is 2 which gives us 2+2 and the sum is 4.</p><p>sumFirstAndLastDigit(257); → should return 9, the first digit is 2 and the last is 7 which gives us 2+7 and the sum is 9.</p><p>sumFirstAndLastDigit(0); → should return 0, the first digit and the last digit is 0 since we only have 1 digit, which gives us 0+0 and the sum is 0.</p><p>sumFirstAndLastDigit(5); → should return 10, the first digit and the last digit is 5 since we only have 1 digit, which gives us 5+5 and the sum is 10.</p><p>sumFirstAndLastDigit(-10); → should return -1, since the parameter is negative and needs to be positive.</p>",
    "template": "public class PracticeWorkspace {\n    public static int sumFirstAndLastDigit(int number) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [
          252
        ],
        "expected": 4,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/FirstAndLastDigitSumCodingChallenge.java"
        }
      },
      {
        "args": [
          257
        ],
        "expected": 9,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/FirstAndLastDigitSumCodingChallenge.java"
        }
      },
      {
        "args": [
          0
        ],
        "expected": 0,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/FirstAndLastDigitSumCodingChallenge.java"
        }
      },
      {
        "args": [
          5
        ],
        "expected": 10,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/FirstAndLastDigitSumCodingChallenge.java"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "sumFirstAndLastDigit",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"sumFirstAndLastDigit\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "floorpackproblemcodingchallenge",
    "title": "Floor Pack Problem",
    "difficulty": "Hard",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/FloorPackProblemCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract",
      "contractId": "whole-flour-bags"
    },
    "concepts": [
      "loops",
      "break-continue",
      "operators"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Write a method named canPack with three parameters of type int named bigCount, smallCount, and goal.</p><p>The parameter bigCount represents the count of big flour bags (5 kilos each).</p><p>The parameter smallCount represents the count of small flour bags (1 kilo each).</p><p>The parameter goal represents the goal amount of kilos of flour needed to assemble a package.</p><p>Therefore, the sum of the kilos of bigCount and smallCount must be at least equal to the value of goal. The method should return true if it is possible to make a package with goal kilos of flour.</p><p>If the sum is greater than goal, ensure that only full bags are used towards the goal amount. For example, if goal = 9, bigCount = 2, and smallCount = 0, the method should return false since each big bag is 5 kilos and cannot be divided. However, if goal = 9, bigCount = 1, and smallCount = 5, the method should return true because of 1 full bigCount bag and 4 full smallCount bags equal goal, and it's okay if there are additional bags left over.</p><p>If any of the parameters are negative, return false.</p><p>EXAMPLE INPUT/OUTPUT:</p><p>canPack (1, 0, 4); should return false since bigCount is 1 (big bag of 5 kilos) and goal is 4 kilos.</p><p>canPack (1, 0, 5); should return true since bigCount is 1 (big bag of 5 kilos) and goal is 5 kilos.</p><p>canPack (0, 5, 4); should return true since smallCount is 5 (small bags of 1 kilo) and goal is 4 kilos, and we have 1 bag left which is ok as mentioned above.</p><p>canPack (2, 2, 11); should return true since bigCount is 2 (big bags 5 kilos each) and smallCount is 2 (small bags of 1 kilo), makes in total 12 kilos and goal is 11 kilos.</p><p>canPack (-3, 2, 12); should return false since bigCount is negative.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean canPack(int bigCount, int smallCount, int goal) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "category": "normal",
        "args": [
          2,
          2,
          11
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          1,
          3,
          9
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          0,
          6,
          4
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          0,
          0,
          0
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          2,
          0,
          0
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          2,
          0,
          5
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          2,
          0,
          9
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          2,
          0,
          10
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          1,
          0,
          4
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          0,
          0,
          1
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          -1,
          5,
          5
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          1,
          -1,
          5
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          1,
          1,
          -1
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "canPack",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"canPack\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"bigCount\", \"smallCount\", \"goal\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1], testCase.args[2]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "greatestcommondivisorcodingchallenge",
    "title": "Greatest Common Divisor",
    "difficulty": "Hard",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/GreatestCommonDivisorCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract",
      "contractId": "gcd-minimum-ten"
    },
    "concepts": [
      "loops",
      "break-continue",
      "operators"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Greatest Common Divisor (GCD) Challenge: the GCD of two numbers is the largest integer that divides both without a remainder.</p><p>For example, GCD(81, 153) = 9, since 9 is the largest number that divides both 81 and 153 evenly.</p><p>The method iterates over all divisors of the smaller number and checks which ones also divide the larger number — the last common divisor found is the GCD.</p><p>Both numbers must be >= 10; otherwise -1 is returned to indicate invalid input.</p><p>The approach uses nested while loops to compare factors of both numbers, tracking the largest common one found.</p>",
    "template": "public class PracticeWorkspace {\n    public static int getGreatestCommonDivisor(int number1, int number2) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "category": "normal",
        "args": [
          81,
          153
        ],
        "expected": 9,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          11,
          13
        ],
        "expected": 1,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          10,
          10
        ],
        "expected": 10,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          10,
          20
        ],
        "expected": 10,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          9,
          20
        ],
        "expected": -1,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          20,
          9
        ],
        "expected": -1,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          -10,
          20
        ],
        "expected": -1,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "getGreatestCommonDivisor",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"getGreatestCommonDivisor\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number1\", \"number2\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "largestprimefactorcodingchallenge",
    "title": "Largest Prime Factor",
    "difficulty": "Medium",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/LargestPrimeFactorCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "solution-derived-smoke",
      "contractId": null
    },
    "concepts": [
      "loops",
      "break-continue",
      "operators"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Write a method named getLargestPrime with one parameter of type int named number.</p><p>If the number is negative or does not have any prime numbers, the method should return -1 to indicate an invalid value.</p><p>The method should calculate the largest prime factor of a given number and return it.</p><p>EXAMPLE INPUT/OUTPUT:</p><p>getLargestPrime (21); should return 7 since 7 is the largest prime (3 * 7 = 21)</p><p>getLargestPrime (217); should return 31 since 31 is the largest prime (7 * 31 = 217)</p><p>getLargestPrime (0); should return -1 since 0 does not have any prime numbers</p><p>getLargestPrime (45); should return 5 since 5 is the largest prime (3 * 3 * 5 = 45)</p><p>getLargestPrime (-1); should return -1 since the parameter is negative</p>",
    "template": "public class PracticeWorkspace {\n    public static int getLargestPrime(int number) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [
          1
        ],
        "expected": -1,
        "provenance": {
          "kind": "solution-derived-smoke",
          "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/LargestPrimeFactorCodingChallenge.java",
          "sourceHash": "d5ab09fd1dd85c0a154ad0db26be52ab3fd88cefe0970d3518dc23df6f9f2919",
          "frameworkFingerprint": "b2301b72",
          "execution": "native-reference-and-browser-approximate",
          "nativeValidation": {
            "release": 21,
            "preview": false,
            "compilerVersion": "javac 25.0.4.1",
            "runtimeVersion": "openjdk version \"25.0.4.1\" 2026-08-18 LTS\nOpenJDK Runtime Environment Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS)\nOpenJDK 64-Bit Server VM Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS, mixed mode, sharing)",
            "runtimeEvidence": "observed-on-recorded-runtime; --release constrains language/API, not runtime behavior",
            "validator": "scripts/fill-practice-expectations.js",
            "validatorFingerprint": "fe7c00b12167febf1042690312e744a7465065872715afda68b9e84d4bc68c7c"
          }
        }
      }
    ],
    "selfCheck": false,
    "methodName": "getLargestPrime",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"getLargestPrime\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "lastdigitcheckercodingchallenge",
    "title": "Last Digit Checker",
    "difficulty": "Medium",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/LastDigitCheckerCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "authored-note",
      "contractId": null
    },
    "concepts": [
      "loops",
      "break-continue",
      "operators"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Last Digit Checker</p><p>Write a method named hasSameLastDigit with three parameters of type int.</p><p>Each number should be within the range of 10 (inclusive) - 1000 (inclusive). If one of the numbers is not within the range, the method should return false.</p><p>The method should return true if at least two of the numbers share the same rightmost digit; otherwise, it should return false.</p><p>EXAMPLE INPUT/OUTPUT:</p><p>hasSameLastDigit (41, 22, 71); → should return true since 1 is the rightmost digit in numbers 41 and 71</p><p>hasSameLastDigit (23, 32, 42); → should return true since 2 is the rightmost digit in numbers 32 and 42</p><p>hasSameLastDigit (9, 99, 999); → should return false since 9 is not within the range of 10-1000</p><p>Write another method named isValid with one parameter of type int.</p><p>The method needs to return true if the number parameter is in range of 10(inclusive) - 1000(inclusive), otherwise return false.</p><p>EXAMPLE INPUT/OUTPUT isValid(10); → should return true since 10 is within the range of 10-1000</p><p>isValid(468); → should return true since 468 is within the range of 10-1000</p><p>isValid(1051); → should return false since 1051 is not within the range of 10-1000</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isValid(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          10
        ],
        "expected": true,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/LastDigitCheckerCodingChallenge.java"
        }
      },
      {
        "args": [
          468
        ],
        "expected": true,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/LastDigitCheckerCodingChallenge.java"
        }
      },
      {
        "args": [
          1051
        ],
        "expected": false,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/LastDigitCheckerCodingChallenge.java"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "isValid",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isValid\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "numbertowordscodingchallenge",
    "title": "Number To Words",
    "difficulty": "Hard",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/NumberToWordsCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "solution-derived-smoke",
      "contractId": null
    },
    "concepts": [
      "loops",
      "break-continue",
      "operators"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Implement the method in <code>NumberToWordsCodingChallenge.java</code>. Read the source code for details.</p>",
    "template": "public class PracticeWorkspace {\n    public static int getDigitCount(int number) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [
          1
        ],
        "expected": 1,
        "provenance": {
          "kind": "solution-derived-smoke",
          "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/NumberToWordsCodingChallenge.java",
          "sourceHash": "d7c70e6d1754aafcf54aca658d02753358866b5fbfad2bed2534d9e493d3b584",
          "frameworkFingerprint": "b2301b72",
          "execution": "native-reference-and-browser-approximate",
          "nativeValidation": {
            "release": 21,
            "preview": false,
            "compilerVersion": "javac 25.0.4.1",
            "runtimeVersion": "openjdk version \"25.0.4.1\" 2026-08-18 LTS\nOpenJDK Runtime Environment Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS)\nOpenJDK 64-Bit Server VM Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS, mixed mode, sharing)",
            "runtimeEvidence": "observed-on-recorded-runtime; --release constrains language/API, not runtime behavior",
            "validator": "scripts/fill-practice-expectations.js",
            "validatorFingerprint": "fe7c00b12167febf1042690312e744a7465065872715afda68b9e84d4bc68c7c"
          }
        }
      }
    ],
    "selfCheck": false,
    "methodName": "getDigitCount",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"getDigitCount\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "perfectnumbercodingchallenge",
    "title": "Perfect Number",
    "difficulty": "Medium",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/PerfectNumberCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "solution-derived-smoke",
      "contractId": null
    },
    "concepts": [
      "loops",
      "break-continue",
      "operators"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Implement the method in <code>PerfectNumberCodingChallenge.java</code>. Read the source code for details.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isPerfectNumber(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          1
        ],
        "expected": false,
        "provenance": {
          "kind": "solution-derived-smoke",
          "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/PerfectNumberCodingChallenge.java",
          "sourceHash": "226cdd09003f21796ca71094e10ee78722db5d1dc04d0f8b41197e823463ef75",
          "frameworkFingerprint": "b2301b72",
          "execution": "native-reference-and-browser-approximate",
          "nativeValidation": {
            "release": 21,
            "preview": false,
            "compilerVersion": "javac 25.0.4.1",
            "runtimeVersion": "openjdk version \"25.0.4.1\" 2026-08-18 LTS\nOpenJDK Runtime Environment Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS)\nOpenJDK 64-Bit Server VM Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS, mixed mode, sharing)",
            "runtimeEvidence": "observed-on-recorded-runtime; --release constrains language/API, not runtime behavior",
            "validator": "scripts/fill-practice-expectations.js",
            "validatorFingerprint": "fe7c00b12167febf1042690312e744a7465065872715afda68b9e84d4bc68c7c"
          }
        }
      }
    ],
    "selfCheck": false,
    "methodName": "isPerfectNumber",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isPerfectNumber\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "shareddigitcodingchallenge",
    "title": "Shared Digit",
    "difficulty": "Hard",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/SharedDigitCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract",
      "contractId": "two-digit-sharing"
    },
    "concepts": [
      "loops",
      "break-continue",
      "operators"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Shared Digit</p><p>Write a method named hasSharedDigit with two parameters of type int.</p><p>Each number should be within the range of 10 (inclusive) - 99 (inclusive). If one of the numbers is not within the range, the method should return false.</p><p>The method should return true if there is a digit that appears in both numbers, such as 2 in 12 and 23; otherwise, the method should return false.</p><p>EXAMPLE INPUT/OUTPUT:</p><p>hasSharedDigit(12, 23); → should return true since the digit 2 appears in both numbers</p><p>hasSharedDigit(9, 99); → should return false since 9 is not within the range of 10-99</p><p>hasSharedDigit(15, 55); → should return true since the digit 5 appears in both numbers</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean hasSharedDigit(int number1, int number2) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "category": "normal",
        "args": [
          12,
          23
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          23,
          12
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          12,
          34
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          12,
          13
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          12,
          32
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          10,
          20
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          99,
          19
        ],
        "expected": true,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          10,
          99
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          9,
          19
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          19,
          9
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          100,
          10
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          10,
          100
        ],
        "expected": false,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "hasSharedDigit",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"hasSharedDigit\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number1\", \"number2\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "whileloopcodingchallenge",
    "title": "While Loop",
    "difficulty": "Easy",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/WhileLoopCodingChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "solution-derived-smoke",
      "contractId": null
    },
    "concepts": [
      "loops",
      "break-continue",
      "operators"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Create a method called isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed to the method is an even number or not. Return true from the method if it's an even number; otherwise, return false. Next, use a while loop to test a range of numbers from 5 up to and including 20, but printing out only the even numbers determined by the call to the isEvenNumber method. Okay, so the challenge is to create a method called isEvenNumber, and it takes a parameter of type int.</p><p>The purpose of the method is to determine whether the argument that's been passed to the method, the int, in other words, is an even number or not.</p><p>If it's an even number, return true, otherwise, return false.</p><p>CODING CHALLENGE — While Loop Basics</p><p>This challenge practices: writing a boolean-returning helper method, using a while loop with a counter, and using continue to skip iterations.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isEvenNumber(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          1
        ],
        "expected": false,
        "provenance": {
          "kind": "solution-derived-smoke",
          "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/WhileLoopCodingChallenge.java",
          "sourceHash": "e5af60b58cf3d873bcc022d4e025ec6626ddc06ef3875c3bb242f04d6f015f05",
          "frameworkFingerprint": "b2301b72",
          "execution": "native-reference-and-browser-approximate",
          "nativeValidation": {
            "release": 21,
            "preview": false,
            "compilerVersion": "javac 25.0.4.1",
            "runtimeVersion": "openjdk version \"25.0.4.1\" 2026-08-18 LTS\nOpenJDK Runtime Environment Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS)\nOpenJDK 64-Bit Server VM Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS, mixed mode, sharing)",
            "runtimeEvidence": "observed-on-recorded-runtime; --release constrains language/API, not runtime behavior",
            "validator": "scripts/fill-practice-expectations.js",
            "validatorFingerprint": "fe7c00b12167febf1042690312e744a7465065872715afda68b9e84d4bc68c7c"
          }
        }
      }
    ],
    "selfCheck": false,
    "methodName": "isEvenNumber",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isEvenNumber\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "whileloopcodingchallengepart2",
    "title": "While Loop Coding Challenge Part2",
    "difficulty": "Easy",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/WhileLoopCodingChallengePart2.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "solution-derived-smoke",
      "contractId": null
    },
    "concepts": [
      "loops",
      "break-continue",
      "operators"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Step 2 is to modify the while code. Make it also record the total number of even numbers it has found. Break out of the loop once 5 even numbers are found. Finally, display the total number of odd and even numbers found. Alright, so the challenge is to modify the while code above. So, you want to leave the existing functionality as it is, but make it so it also records the total number of even numbers, as well as odd numbers that it's found. And once five even numbers have been found, break out of the code and display the total number of even numbers.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isEvenNumber(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          1
        ],
        "expected": false,
        "provenance": {
          "kind": "solution-derived-smoke",
          "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_3_While_Do_While_Loop_CodingChallenge/WhileLoopCodingChallengePart2.java",
          "sourceHash": "2a721710830bf65eeb0c55b880a29a31093550f699b7b2cbaa85a2ae1126a21a",
          "frameworkFingerprint": "b2301b72",
          "execution": "native-reference-and-browser-approximate",
          "nativeValidation": {
            "release": 21,
            "preview": false,
            "compilerVersion": "javac 25.0.4.1",
            "runtimeVersion": "openjdk version \"25.0.4.1\" 2026-08-18 LTS\nOpenJDK Runtime Environment Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS)\nOpenJDK 64-Bit Server VM Corretto-25.0.4.8.1 (build 25.0.4.1+8-LTS, mixed mode, sharing)",
            "runtimeEvidence": "observed-on-recorded-runtime; --release constrains language/API, not runtime behavior",
            "validator": "scripts/fill-practice-expectations.js",
            "validatorFingerprint": "fe7c00b12167febf1042690312e744a7465065872715afda68b9e84d4bc68c7c"
          }
        }
      }
    ],
    "selfCheck": false,
    "methodName": "isEvenNumber",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isEvenNumber\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "numberguesserdeepproblem",
    "title": "Number Guesser",
    "difficulty": "Hard",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "sourceFile": "src/Chapter_9_WhileAndDoWhileLoopingConcepts/Sub_Chapter_4_DeepProblems/NumberGuesserDeepProblem.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "loops",
      "break-continue",
      "operators"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Deep Problem: Guided Search and Sequence Analysis — Simulate a non-interactive number guessing routine that advances toward a secret using Fibonacci-sized jumps, then analyze Collatz sequence lengths for a range of inputs to discover which starting value produces the longest run.</p>",
    "template": "public class PracticeWorkspace {\n    public static void simulateGuessingGame(int secret) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "simulateGuessingGame",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          if (typeof prepareJavaBody !== \"function\") return null;\n          const body = extractMethodBody(userCode, \"simulateGuessingGame\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = prepareJavaBody(body, true);\n          const out = [];\n          const __print = (v) => { out.push(v === undefined ? \"\" : String(v)); };\n          const __printLn = (v) => { out.push((v === undefined ? \"\" : String(v)) + \"\\n\"); };\n          const fn = new Function(\"__print\", \"__printLn\", \"secret\", prepared);\n          fn(__print, __printLn, testCase.args[0]);\n          const actual = out.join(\"\").replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          const expected = String(testCase.expected).replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          return actual === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "librarysystemdeepproblem",
    "title": "Library System",
    "difficulty": "Medium",
    "chapter": "Chapter 10: Class Object Static And Instance Fields",
    "sourceFile": "src/Chapter_10_Class_Object_Static_And_Instance_Fields/Sub_Chapter_4_DeepProblems/LibrarySystemDeepProblem.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "classes",
      "static",
      "encapsulation"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Deep Problem: Library Inventory Tracker — Design a compact library system that models books as objects, tracks a shared total count through a static field, and supports checkout and return workflows. The solution should show how instance state and class-wide state interact in a realistic domain model.</p>",
    "template": "public class PracticeWorkspace {\n    public static int getBookCount() {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "getBookCount",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "inputcalculatorchallenge",
    "title": "Input Calculator",
    "difficulty": "Easy",
    "chapter": "Chapter 11: Parsing Values Reading Input",
    "sourceFile": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_2_Parsing_Values_Coding_Challenge/InputCalculatorChallenge.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "wrappers",
      "strings",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Input Calculator</p><p>Write a method called inputThenPrintSumAndAverage that does not have any parameters.</p><p>The method should not return anything (void) and it needs to keep reading int numbers from the keyboard.</p><p>When the user enters something that is not an int then it needs to print a message in the format \"SUM = XX AVG = YY\".</p><p>XX represents the sum of all entered numbers of type int.</p><p>YY represents the calculated average of all numbers of type long.</p><p>EXAMPLES OF INPUT/OUTPUT:</p><p>EXAMPLE 1:</p><p>INPUT:</p><p>OUTPUT</p><p>EXAMPLE 2:</p><p>INPUT:</p><p>hello</p><p>OUTPUT:</p><p>TIP: Use Scanner to read an input from the user.</p><p>TIP: Use casting when calling the round method since it needs double as a parameter.</p><p>NOTE: Use the method Math.round to round the calculated average (double). The method round returns long.</p><p>NOTE: Be mindful of spaces in the printed message.</p><p>NOTE: Be mindful of users who may type an invalid input right away (see example above).</p><p>NOTE: The method inputThenPrintSumAndAverage should be defined as public static like we have been doing so far in the course.</p>",
    "template": "public class PracticeWorkspace {\n    public static void inputThenPrintSumAndAverage() {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "inputThenPrintSumAndAverage",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "minmaxcodingchallenge",
    "title": "Min Max",
    "difficulty": "Medium",
    "chapter": "Chapter 11: Parsing Values Reading Input",
    "sourceFile": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_2_Parsing_Values_Coding_Challenge/MinMaxCodingChallenge.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "wrappers",
      "strings",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>You'll be using an endless loop which: Prompts the user to enter a number or any character to quit. Validates if the user-entered data really is a number. You can choose either an integer or double validation method. If the user-entered data is not a number, quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.</p><p>If the user has previously entered a set of numbers (or even just one), display the minimum and maximum number that the user entered. So, you'll want to create a loop that continues to process until the user enters non-numeric data. You'll prompt the user to enter a number or type a character to quit each iteration. After the user enters some data, you'll read the input as a string, and then test if it can be parsed to a number.</p><p>You can decide if you want the user to enter integers or decimal numbers.</p><p>If the user entered a valid number, you'll want to see if it is less than what you have for a minimum number, and if it is, you'll set that to the current number.</p><p>You'll do the same check for maximum number. For example, after one valid numeric entry, minimum and maximum numbers should be the same number.</p>",
    "template": "public class PracticeWorkspace {\n    public static void printMinAndMaxFromUserInputs() {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "printMinAndMaxFromUserInputs",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "paintjobchallenge",
    "title": "Paint Job",
    "difficulty": "Hard",
    "chapter": "Chapter 11: Parsing Values Reading Input",
    "sourceFile": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_2_Parsing_Values_Coding_Challenge/PaintJobChallenge.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "independent-contract",
      "contractId": "paint-extra-buckets"
    },
    "concepts": [
      "wrappers",
      "strings",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.</p><p>The wall area is calculated as width * height. Each bucket covers a fixed area (areaPerBucket).</p><p>Math.ceil() is used to round up — you always need whole buckets, never a fraction.</p><p>The method is overloaded with 3 versions: (area, areaPerBucket), (width, height, areaPerBucket), and (width, height, areaPerBucket, extraBuckets) to handle different input scenarios.</p><p>If any parameter is invalid (negative or zero), the method returns -1.</p>",
    "template": "public class PracticeWorkspace {\n    public static int getBucketCount(double width, double height, double areaOfBucket, int extraBuckets) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "category": "normal",
        "args": [
          3,
          4,
          5,
          1
        ],
        "expected": 2,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "normal",
        "args": [
          2.5,
          4,
          2,
          3
        ],
        "expected": 2,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          2,
          3,
          6,
          0
        ],
        "expected": 1,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          2,
          3.001,
          6,
          1
        ],
        "expected": 1,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          2,
          3,
          6,
          1
        ],
        "expected": 0,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "boundary",
        "args": [
          2,
          3,
          6,
          2
        ],
        "expected": 0,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          0,
          3,
          6,
          0
        ],
        "expected": -1,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          2,
          0,
          6,
          0
        ],
        "expected": -1,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          2,
          3,
          0,
          0
        ],
        "expected": -1,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      },
      {
        "category": "invalid",
        "args": [
          2,
          3,
          6,
          -1
        ],
        "expected": -1,
        "provenance": {
          "kind": "independent-contract",
          "file": "data/practice-contracts.js"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "getBucketCount",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"getBucketCount\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"width\", \"height\", \"areaOfBucket\", \"extraBuckets\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1], testCase.args[2], testCase.args[3]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "readinguserinputchallenge",
    "title": "Reading User Input",
    "difficulty": "Hard",
    "chapter": "Chapter 11: Parsing Values Reading Input",
    "sourceFile": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_2_Parsing_Values_Coding_Challenge/ReadingUserInputChallenge.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "wrappers",
      "strings",
      "casting"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Reading User Input Challenge.</p><p>In this challenge, you'll read 5 valid numbers from the console entered by the user and print the sum of those five numbers. By valid numbers, I mean you need to check that the numbers entered are valid integers. If they are not, print out the message</p><p>\"Invalid number\" to the console, but continue looping until you do have 5 valid numbers.</p><p>Before the user enters each number, prompt them with the message, \"Enter number #x:\", where x represents the count 1, 2, 3, etc. As an example, the first message would look something like, \"Enter number #1:\", the next, \"Enter number #2:\", and so on.</p><p>Some hints for completing this are, firstly, use a while loop or a do while loop.</p><p>Use a scanner object and the next line method to read input as a string.</p><p>Use integer dot parse int, as we did in the previous videos.</p><p>You'll need some local variables to keep track of the count of valid integers, as well as the sum of the integers.</p>",
    "template": "public class PracticeWorkspace {\n    public static int printSumOfNumbersEnteredByUserUsingWhileLoop() {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "printSumOfNumbersEnteredByUserUsingWhileLoop",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "inputvalidatordeepproblem",
    "title": "Input Validator",
    "difficulty": "Medium",
    "chapter": "Chapter 11: Parsing Values Reading Input",
    "sourceFile": "src/Chapter_11_Parsing_Values_Reading_Input/Sub_Chapter_3_DeepProblems/InputValidatorDeepProblem.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "wrappers",
      "strings"
    ],
    "conceptsSource": "topic",
    "description": "<p>Deep Problem: Form Validation Pipeline — Build reusable parsing and validation methods that verify integer and decimal fields, enforce numeric ranges, and aggregate multiple form errors into a single readable report. This mirrors the validation logic used in real business forms and APIs.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isValidInt(String value) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "isValidInt",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isValidInt\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"value\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "multicatchchallenge",
    "title": "Multi Catch",
    "difficulty": "Easy",
    "chapter": "Chapter 12: Exception Handling",
    "sourceFile": "src/Chapter_12_Exception_Handling/Sub_Chapter_2_Exception_Handling_CodingChallenge/MultiCatchChallenge.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "exceptions",
      "checked-unchecked",
      "throw-throws",
      "multi-catch"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Challenge: Demonstrate handling NullPointerException, ArrayIndexOutOfBoundsException, and NumberFormatException with separate catch blocks and a finally block.</p>",
    "template": "public class PracticeWorkspace {\n    public static void demonstrateException(String scenario) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "demonstrateException",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          if (typeof prepareJavaBody !== \"function\") return null;\n          const body = extractMethodBody(userCode, \"demonstrateException\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = prepareJavaBody(body, true);\n          const out = [];\n          const __print = (v) => { out.push(v === undefined ? \"\" : String(v)); };\n          const __printLn = (v) => { out.push((v === undefined ? \"\" : String(v)) + \"\\n\"); };\n          const fn = new Function(\"__print\", \"__printLn\", \"scenario\", prepared);\n          fn(__print, __printLn, testCase.args[0]);\n          const actual = out.join(\"\").replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          const expected = String(testCase.expected).replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          return actual === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "parseandhandlechallenge",
    "title": "Parse And Handle",
    "difficulty": "Easy",
    "chapter": "Chapter 12: Exception Handling",
    "sourceFile": "src/Chapter_12_Exception_Handling/Sub_Chapter_2_Exception_Handling_CodingChallenge/ParseAndHandleChallenge.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "exceptions",
      "checked-unchecked",
      "throw-throws",
      "multi-catch"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Challenge: Parse an age from a String using Integer.parseInt, catch NumberFormatException, and return -1 for invalid input.</p>",
    "template": "public class PracticeWorkspace {\n    public static int parseAge(String input) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "parseAge",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"parseAge\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"input\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "safedivisionchallenge",
    "title": "Safe Division",
    "difficulty": "Easy",
    "chapter": "Chapter 12: Exception Handling",
    "sourceFile": "src/Chapter_12_Exception_Handling/Sub_Chapter_2_Exception_Handling_CodingChallenge/SafeDivisionChallenge.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "exceptions",
      "checked-unchecked",
      "throw-throws",
      "multi-catch"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Challenge: Write a safeDivide method that returns a / b and catches ArithmeticException when the divisor is zero, returning 0 instead.</p>",
    "template": "public class PracticeWorkspace {\n    public static int safeDivide(int a, int b) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "safeDivide",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"safeDivide\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"a\", \"b\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "methodoverloadingchallenge",
    "title": "Method Over Loading",
    "difficulty": "Medium",
    "chapter": "Chapter 13: OOP Concepts",
    "sourceFile": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/MethodOverLoadingChallenge.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "classes",
      "encapsulation",
      "constructors",
      "inheritance",
      "polymorphism",
      "overloading",
      "abstract",
      "object-class",
      "static",
      "records-enums"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Create two methods with the same name: convertToCentimeters</p><p>The first method has one parameter of type int, which represents the entire height in inches.</p><p>You'll convert inches to centimeters, in this method, and pass back the number of centimeters, as a double. The second method has two parameters of type int, one to represent height in feet, and one to represent the remaining height in inches. So if a person is 5 foot, 8 inches, the values 5 for feet and 8 for inches would be passed to this method.</p><p>This method will convert feet and inches to just inches, then call the first method, to get the number of centimeters, also returning the value as a double. Both methods should return a real number or decimal value for total height in centimeters. Call both methods, and print out the results.</p>",
    "template": "public class PracticeWorkspace {\n    public static void calcFeetAndInchesToCentimeters(double feet, double inches) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "calcFeetAndInchesToCentimeters",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          if (typeof prepareJavaBody !== \"function\") return null;\n          const body = extractMethodBody(userCode, \"calcFeetAndInchesToCentimeters\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = prepareJavaBody(body, true);\n          const out = [];\n          const __print = (v) => { out.push(v === undefined ? \"\" : String(v)); };\n          const __printLn = (v) => { out.push((v === undefined ? \"\" : String(v)) + \"\\n\"); };\n          const fn = new Function(\"__print\", \"__printLn\", \"feet\", \"inches\", prepared);\n          fn(__print, __printLn, testCase.args[0], testCase.args[1]);\n          const actual = out.join(\"\").replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          const expected = String(testCase.expected).replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          return actual === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "methodoverloadingsecondandminuteschallenge",
    "title": "Method Overloading Second And Minutes",
    "difficulty": "Medium",
    "chapter": "Chapter 13: OOP Concepts",
    "sourceFile": "src/Chapter_13_OOPSConcepts/Sub_Chapter_3_Classes_Challenge/MethodOverloadingSecondAndMinutesChallenge.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "classes",
      "encapsulation",
      "constructors",
      "inheritance",
      "polymorphism",
      "overloading",
      "abstract",
      "object-class",
      "static",
      "records-enums"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds.</p><p>You should validate that the first parameter minutes is >= 0.</p><p>You should validate that the 2nd parameter seconds is >= 0 and <= 59.</p><p>The method should return Invalid value if either of the above are not true.</p><p>If the parameters are valid then calculate how many hours, minutes, and seconds equal the minutes and seconds passed to this method and return that value as a String in the format \"XXh YYm ZZs\", where XX represents hours, YY the minutes, and ZZ the seconds.</p><p>Create a 2nd method of the same name but with only one parameter seconds.</p><p>Validate that it is >= 0, and return Invalid value if it is not true.</p><p>If it is valid, then calculate how many minutes are in the seconds value and then call the other overloaded method passing the correct minutes and seconds calculated so that it can calculate correctly.</p><p>Call both methods to print values to the console.</p><p>Tips:</p><p>Use int or long for your number data types is probably a good idea.</p><p>1 minute = 60 seconds and 1 hour = 60 minutes or 3600 seconds.</p><p>Methods should be static as we have used previously.</p><p>Bonus:</p><p>For the input 61 minutes output should be 01h 01m 00s, but it is ok if it is 1h 1m 0s (Tip: use if-else)</p><p>Create a new console project and call it SecondsAndMinutesChallenge</p>",
    "template": "public class PracticeWorkspace {\n    public static String getDurationString(int minutes, int seconds) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "getDurationString",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"getDurationString\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"minutes\", \"seconds\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "methodoverloadinginjava",
    "title": "Method Overloading In Java",
    "difficulty": "Medium",
    "chapter": "Chapter 13: OOP Concepts",
    "sourceFile": "src/Chapter_13_OOPSConcepts/Sub_Chapter_13_Method_OverLoading_In_Java/MethodOverloadingInJava.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "inheritance",
      "overloading"
    ],
    "conceptsSource": "topic",
    "description": "<p>important: calculateScore(String, int) and calculateScore(int) are OVERLOADS because their parameter counts and types differ.</p><p>- sum(int a, long b): a and b are the two numbers to add; an int second argument can widen to long when no exact sum(int, int) exists.</p><p>- sum(int a, int b, int c): a, b, and c are the three numbers to add; this overload is chosen by parameter COUNT.</p><p>- performingSum(int a, long b) vs performingSum(long a, int b): choose argument types carefully because (int, int) can widen in two equally valid ways, causing ambiguity.</p><p>warning: type promotion can help choose an overload, but symmetric widening choices can make the call ambiguous at compile time.</p><p>- performingSumAgain(int a, int b) vs performingSumAgain(long a, long b): exact int matches are preferred before widening to long.</p><p>remember: overloading is compile-time selection based on method name plus parameter list; return type is not part of the overload key.</p><p>- Overriding would require the child method to keep the identical parameter list, not merely a similar or wider one.</p>",
    "template": "public class PracticeWorkspace {\n    public static int calculateScore(String playerName, int score) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "calculateScore",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"calculateScore\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"playerName\", \"score\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "shapehierarchydeepproblem",
    "title": "Shape Hierarchy",
    "difficulty": "Medium",
    "chapter": "Chapter 13: OOP Concepts",
    "sourceFile": "src/Chapter_13_OOPSConcepts/Sub_Chapter_16_DeepProblems/ShapeHierarchyDeepProblem.java",
    "evidence": {
      "execution": "self-check",
      "expectation": "none",
      "contractId": null
    },
    "concepts": [
      "classes",
      "encapsulation",
      "constructors",
      "inheritance",
      "polymorphism",
      "overloading",
      "abstract",
      "object-class",
      "static",
      "records-enums"
    ],
    "conceptsSource": "chapter",
    "description": "<p>Deep Problem: Shape Hierarchy and Polymorphic Reporting — Model a small geometry system with a base Shape type and specialized subclasses for circles, rectangles, and triangles. Each shape must compute its own area, while a shared reporting method uses instanceof checks and polymorphism to print detailed runtime information.</p>",
    "template": "public class PracticeWorkspace {\n    public static void printShapeInfo(Shape shape) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "printShapeInfo",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          if (typeof prepareJavaBody !== \"function\") return null;\n          const body = extractMethodBody(userCode, \"printShapeInfo\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = prepareJavaBody(body, true);\n          const out = [];\n          const __print = (v) => { out.push(v === undefined ? \"\" : String(v)); };\n          const __printLn = (v) => { out.push((v === undefined ? \"\" : String(v)) + \"\\n\"); };\n          const fn = new Function(\"__print\", \"__printLn\", \"shape\", prepared);\n          fn(__print, __printLn, testCase.args[0]);\n          const actual = out.join(\"\").replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          const expected = String(testCase.expected).replace(/\\r\\n?/g, \"\\n\").replace(/\\n$/, \"\");\n          return actual === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "stringanalyzerdeepproblem",
    "title": "String Analyzer",
    "difficulty": "Hard",
    "chapter": "Chapter 14: Strings",
    "sourceFile": "src/Chapter_14_Strings/Sub_Chapter_5_DeepProblems/StringAnalyzerDeepProblem.java",
    "evidence": {
      "execution": "browser-approximate",
      "expectation": "authored-note",
      "contractId": null
    },
    "concepts": [
      "strings",
      "text-blocks"
    ],
    "conceptsSource": "topic",
    "description": "<p>Deep Problem: Text Intelligence Analyzer — Create a utility that inspects sentences for palindrome behavior, word count, character frequency, and reversed word order, then combines the findings into a formatted report. The challenge reflects common string-processing tasks used in search, validation, and reporting systems.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isPalindrome(String text) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          "racecar"
        ],
        "expected": true,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_14_Strings/Sub_Chapter_5_DeepProblems/StringAnalyzerDeepProblem.java"
        }
      },
      {
        "args": [
          "hello"
        ],
        "expected": false,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_14_Strings/Sub_Chapter_5_DeepProblems/StringAnalyzerDeepProblem.java"
        }
      },
      {
        "args": [
          "A man a plan a canal Panama"
        ],
        "expected": true,
        "provenance": {
          "kind": "authored-note",
          "file": "src/Chapter_14_Strings/Sub_Chapter_5_DeepProblems/StringAnalyzerDeepProblem.java"
        }
      }
    ],
    "selfCheck": false,
    "methodName": "isPalindrome",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isPalindrome\");\n          {\n            const flat = body.replace(/\\s+/g, ' ');\n            if (/\\*\\s*[^;{}]*\\/\\s*/.test(flat) || /Math\\.(?:ceil|round|floor)\\s*\\([^)]*\\//.test(flat)) return null;\n          }\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"text\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = testCase.tolerance === undefined\n              ? (Number.isInteger(expected) ? 0 : Math.max(1e-9, Math.abs(expected) * 1e-6))\n              : testCase.tolerance;\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  }
];
