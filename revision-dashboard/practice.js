// Auto-generated. Do NOT edit manually — run 'npm run revise' to regenerate.
const GENERATED_PRACTICE_CHALLENGES = [
  {
    "id": "temperatureconverterchallenge",
    "title": "Temperature Converter",
    "difficulty": "Easy",
    "chapter": "Chapter 1: Java Introduction",
    "description": "<p>Challenge: Given a hardcoded Celsius temperature, calculate Fahrenheit using F = (C * 9/5) + 32.</p><p>Print the result in the format: \"25°C is 77.0°F\".</p><p>Practises :- variables, arithmetic with `double`, and printing a formatted result.</p><p>Note :- integer division in (celsius * 9 / 5) drops the fraction, so use 9.0 / 5 to keep the decimals.</p><p>Expected output for 25 :- 25°C is 77.0°F</p>",
    "template": "public class PracticeWorkspace {\n    public static double toFahrenheit(double celsius) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "toFahrenheit",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "fibonaccideepproblem",
    "title": "Fibonacci",
    "difficulty": "Hard",
    "chapter": "Chapter 1: Java Introduction",
    "description": "<p>Deep Problem: Fibonacci Analysis — Generate the first N Fibonacci numbers using iteration and build a detector that determines whether a given number belongs to the Fibonacci sequence. The solution should be efficient, easy to trace, and demonstrate both sequence generation and membership checking.</p><p>Practises :- loops, building and returning a long[], and testing membership of a sequence.</p><p>Note :- the sequence starts 0, 1, and each later term is the sum of the two before it, so generateFibonacci(6) gives 0, 1, 1, 2, 3, 5.</p><p>Note :- watch the boundary where count is 0 or negative, which is why the method returns an empty array.</p>",
    "template": "public class PracticeWorkspace {\n    public static long[] generateFibonacci(int count) {\n        // Write your code here\n        return null;\n    }\n}",
    "testCases": [
      {
        "args": [
          6
        ],
        "expected": 0
      }
    ],
    "selfCheck": false,
    "methodName": "generateFibonacci",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"generateFibonacci\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"count\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "bitwiseoperationsdeepproblem",
    "title": "Bitwise Operations",
    "difficulty": "Medium",
    "chapter": "Chapter 2: Primitive Types",
    "description": "<p>Deep Problem: Bitwise Diagnostics — Given an integer, use bitwise operators to answer practical low-level questions: determine odd/even status, count the number of set bits, and swap two integers without a temporary variable by relying on XOR. The program should print a readable diagnostic report.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isOdd(int value) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          3
        ],
        "expected": true
      },
      {
        "args": [
          4
        ],
        "expected": false
      },
      {
        "args": [
          0
        ],
        "expected": false
      },
      {
        "args": [
          -7
        ],
        "expected": true
      }
    ],
    "selfCheck": false,
    "methodName": "isOdd",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isOdd\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"value\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "expressionevaluatordeepproblem",
    "title": "Expression Evaluator",
    "difficulty": "Hard",
    "chapter": "Chapter 3: Operators",
    "description": "<p>Deep Problem: Expression Evaluator Utilities — Build core numeric helper methods without using Math library shortcuts. Compute powers using repeated multiplication, determine absolute value manually, find the maximum of three values, and classify a number's sign. The goal is to practice operator-driven problem solving.</p>",
    "template": "public class PracticeWorkspace {\n    public static long power(int base, int exponent) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "power",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "unitconverterdeepproblem",
    "title": "Unit Converter",
    "difficulty": "Medium",
    "chapter": "Chapter 4: Statements And Indentations",
    "description": "<p>Deep Problem: Multi-Domain Unit Converter — Implement a conversion utility that handles distance, weight, temperature, and volume. Each conversion must be isolated in its own method, and the program should generate readable tables for values 1 through 10 to simulate the kind of output a small engineering tool might need.</p>",
    "template": "public class PracticeWorkspace {\n    public static double kilometersToMiles(double kilometers) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [
          1
        ],
        "expected": 0.621371
      },
      {
        "args": [
          10
        ],
        "expected": 6.21371
      },
      {
        "args": [
          0
        ],
        "expected": 0
      }
    ],
    "selfCheck": false,
    "methodName": "kilometersToMiles",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"kilometersToMiles\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"kilometers\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "gradeclassifierdeepproblem",
    "title": "Grade Classifier",
    "difficulty": "Medium",
    "chapter": "Chapter 5: If Else Statements",
    "description": "<p>Deep Problem: Academic Result Classifier — Create a grading engine that converts numeric scores into fine-grained labels, determines pass/fail status, and maps results into broader academic bands such as Distinction and Merit. The main method should sweep through a range of scores to demonstrate how each rule behaves.</p>",
    "template": "public class PracticeWorkspace {\n    public static String classify(int score) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "testCases": [
      {
        "args": [
          98
        ],
        "expected": "A+"
      },
      {
        "args": [
          88
        ],
        "expected": "A"
      },
      {
        "args": [
          78
        ],
        "expected": "B"
      },
      {
        "args": [
          40
        ],
        "expected": "F"
      }
    ],
    "selfCheck": false,
    "methodName": "classify",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"classify\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"score\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "areacalculatorcodingchallenge",
    "title": "Area Calculator",
    "difficulty": "Medium",
    "chapter": "Chapter 6: Methods In Java",
    "description": "<p>This challenge uses method overloading to give the same method name two related meanings.</p><p>area(double radius) calculates the area of a circle with Math.PI * radius * radius.</p><p>area(double x, double y) calculates the area of a rectangle with x * y.</p><p>Any negative measurement is invalid, so each overload returns -1.0 when it receives a negative argument.</p><p>Java chooses the correct overloaded method at compile time by looking at the number and types of arguments.</p><p>Example results: area(5.0) returns about 78.53975, area(5.0, 4.0) returns 20.0, and area(-1.0, 4.0) returns -1.0.</p>",
    "template": "public class PracticeWorkspace {\n    public static double area(double radius) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [
          5
        ],
        "expected": 78.53975
      }
    ],
    "selfCheck": false,
    "methodName": "area",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"area\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"radius\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "barkingdogcodingchallenge",
    "title": "Barking Dog",
    "difficulty": "Medium",
    "chapter": "Chapter 6: Methods In Java",
    "description": "<p>This challenge practices boolean logic with two inputs: whether barking is happening and what hour it is.</p><p>shouldWakeUp(boolean barking, int hourOfDay) returns true only when barking is true and the time is before 8 or after 22.</p><p>The valid hour range is 0 through 23; any value outside that range returns false because the input itself is invalid.</p><p>The first guard clause rejects all cases where no action is needed: not barking, negative hour, or hour greater than 23.</p><p>Example results: shouldWakeUp(true, 1) returns true, shouldWakeUp(false, 2) returns false, and shouldWakeUp(true, 8) returns false.</p><p>Important: combine conditions carefully so invalid hours never accidentally produce a true result.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean shouldWakeUp(boolean barking, int hourOfDay) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          true,
          1
        ],
        "expected": true
      },
      {
        "args": [
          false,
          2
        ],
        "expected": false
      },
      {
        "args": [
          true,
          8
        ],
        "expected": false
      }
    ],
    "selfCheck": false,
    "methodName": "shouldWakeUp",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"shouldWakeUp\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"barking\", \"hourOfDay\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "decimalcomparatorcodingchallenge",
    "title": "Decimal Comparator",
    "difficulty": "Easy",
    "chapter": "Chapter 6: Methods In Java",
    "description": "<p>This challenge compares two double values only up to three decimal places.</p><p>Multiplying by 1000 shifts the first three decimal places into the whole-number part of the value.</p><p>Casting the shifted double to int truncates the remaining decimal portion instead of rounding it.</p><p>If the two truncated int values are equal, the original numbers match to three decimal places.</p><p>Example results: -3.1756 and -3.175 match, 3.175 and 3.176 do not match, and -3.123 and 3.123 do not match.</p><p>Important: this exercise intentionally uses casting and truncation, so it is checking decimal-place equality rather than true mathematical closeness.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean areEqualByThreeDecimalPlaces(double firstNumber, double secondNumber) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "areEqualByThreeDecimalPlaces",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "equalityprintercodingchallenge",
    "title": "Equality Printer",
    "difficulty": "Medium",
    "chapter": "Chapter 6: Methods In Java",
    "description": "<p>This challenge classifies the relationship between three int values and prints one exact message.</p><p>printEqual(int firstNumber, int secondNumber, int thirdNumber) is a void method because the visible output is the printed text.</p><p>Any negative input is invalid and must print \"Invalid Value\" before any equality checks.</p><p>If all three numbers are equal, the method prints \"All numbers are equal\".</p><p>If every pair of numbers is different, the method prints \"All numbers are different\".</p><p>All remaining valid combinations print \"Neither all are equal or different\".</p><p>Important: exact output text matters in coding challenge platforms, including capitalization and spaces.</p>",
    "template": "public class PracticeWorkspace {\n    public static void printEqual(int firstNumber, int secondNumber, int thirdNumber) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "printEqual",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "equalsumcheckercodingchallenge",
    "title": "Equal Sum Checker",
    "difficulty": "Easy",
    "chapter": "Chapter 6: Methods In Java",
    "description": "<p>This challenge practices returning a boolean expression directly from a method.</p><p>hasEqualSum(int firstNumber, int secondNumber, int sum) checks whether firstNumber + secondNumber equals sum.</p><p>The method should return true for matching totals and false for all other totals.</p><p>Example results: hasEqualSum(1, 1, 1) returns false, hasEqualSum(1, 1, 2) returns true, and hasEqualSum(1, -1, 0) returns true.</p><p>Important: because the comparison already produces a boolean, the method can return the expression directly.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean hasEqualSum(int firstNumber, int secondNumber, int sum) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          1,
          1,
          1
        ],
        "expected": false
      },
      {
        "args": [
          1,
          1,
          2
        ],
        "expected": true
      },
      {
        "args": [
          1,
          -1,
          0
        ],
        "expected": true
      }
    ],
    "selfCheck": false,
    "methodName": "hasEqualSum",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"hasEqualSum\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"firstNumber\", \"secondNumber\", \"sum\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1], testCase.args[2]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "leapyearcalculatorcodingchallenge",
    "title": "Leap Year Calculator",
    "difficulty": "Easy",
    "chapter": "Chapter 6: Methods In Java",
    "description": "<p>This challenge implements the leap-year rule as a clean boolean method.</p><p>isLeapYear(int year) first validates that the year is between 1 and 9999, inclusive.</p><p>A valid year is a leap year when it is divisible by 4, except century years must also be divisible by 400.</p><p>Years such as 1700, 1800, 1900, and 2100 are not leap years because they are divisible by 100 but not by 400.</p><p>Years such as 1600, 2000, and 2400 are leap years because they satisfy the special century rule.</p><p>Example results: isLeapYear(-1600) returns false, isLeapYear(1600) returns true, and isLeapYear(2017) returns false.</p><p>Important: place the range validation first so invalid years cannot pass the divisibility checks.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isLeapYear(int year) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          -1600
        ],
        "expected": false
      },
      {
        "args": [
          1600
        ],
        "expected": true
      },
      {
        "args": [
          2017
        ],
        "expected": false
      }
    ],
    "selfCheck": false,
    "methodName": "isLeapYear",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isLeapYear\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"year\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "megabytesconvertercodingchallenge",
    "title": "Mega Bytes Converter",
    "difficulty": "Easy",
    "chapter": "Chapter 6: Methods In Java",
    "description": "<p>This challenge converts a whole number of kilobytes into megabytes plus leftover kilobytes.</p><p>printMegaBytesAndKiloBytes(int kiloBytes) is a void method because its job is to print a formatted result, not return one.</p><p>Integer division gives the whole megabytes: 2500 / 1024 is 2.</p><p>The remainder operator gives the leftover kilobytes: 2500 % 1024 is 452.</p><p>Invalid input should print exactly \"Invalid Value\"; the exercise treats negative kilobyte values as invalid.</p><p>Important: output formatting is part of the requirement, so extra spaces can make an otherwise correct calculation fail.</p><p>Example results: 2500 prints \"2500 KB = 2 MB and 452 KB\", and 5000 prints \"5000 KB = 4 MB and 904 KB\".</p>",
    "template": "public class PracticeWorkspace {\n    public static void printMegaBytesAndKiloBytes(int kilobytes) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "printMegaBytesAndKiloBytes",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "methodschallengeproblem",
    "title": "Methods Challenge Problem",
    "difficulty": "Medium",
    "chapter": "Chapter 6: Methods In Java",
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
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "minutestoyearsanddayscalculatorcodingchallenge",
    "title": "Minutes To Years And Days Calculator",
    "difficulty": "Easy",
    "chapter": "Chapter 6: Methods In Java",
    "description": "<p>This challenge converts a long minute count into full years plus leftover days.</p><p>printYearsAndDays(long minutes) is a void method because it prints the formatted answer directly.</p><p>The conversion uses fixed calendar assumptions: 60 minutes per hour, 24 hours per day, and 365 days per year.</p><p>Integer division gives the number of complete years, while the remainder operator gives the days left after those years.</p><p>Negative minutes are invalid and must print exactly \"Invalid Value\".</p><p>Example results: 525600 prints \"525600 min = 1 y and 0 d\", and 561600 prints \"561600 min = 1 y and 25 d\".</p><p>Important: exact spacing and capitalization matter because this kind of challenge often checks output text literally.</p>",
    "template": "public class PracticeWorkspace {\n    public static void printYearsAndDays(long minutes) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "printYearsAndDays",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "playingcatcodingchallenge",
    "title": "Playing Cat",
    "difficulty": "Easy",
    "chapter": "Chapter 6: Methods In Java",
    "description": "<p>This challenge models a temperature rule that changes when the season changes.</p><p>isCatPlaying(boolean isSummer, int temperature) returns true when the temperature is in the allowed range.</p><p>In normal weather, the allowed range is 25 through 35, inclusive.</p><p>In summer, the upper limit expands to 45, so the allowed range is 25 through 45.</p><p>Example results: isCatPlaying(true, 10) returns false, isCatPlaying(false, 36) returns false, and isCatPlaying(false, 35) returns true.</p><p>Important: inclusive boundaries mean 25, 35, and 45 can be valid depending on the value of isSummer.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isCatPlaying(boolean isSummer, int temperature) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          true,
          10
        ],
        "expected": false
      },
      {
        "args": [
          false,
          36
        ],
        "expected": false
      },
      {
        "args": [
          false,
          35
        ],
        "expected": true
      }
    ],
    "selfCheck": false,
    "methodName": "isCatPlaying",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isCatPlaying\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"isSummer\", \"temperature\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "positivenegativezerocodingchallenge",
    "title": "Positive Negative Zero",
    "difficulty": "Easy",
    "chapter": "Chapter 6: Methods In Java",
    "description": "<p>This challenge practices simple branching with a void method.</p><p>checkNumber(int number) classifies one integer and prints the matching label.</p><p>A value greater than 0 prints \"positive\", a value less than 0 prints \"negative\", and 0 prints \"zero\".</p><p>The method does not return a value because the result is communicated through console output.</p><p>Important: the zero case must be handled separately because zero is neither positive nor negative.</p>",
    "template": "public class PracticeWorkspace {\n    public static void checkNumber(int number) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "checkNumber",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "speedconvertercodingchallenge",
    "title": "Speed Converter",
    "difficulty": "Medium",
    "chapter": "Chapter 6: Methods In Java",
    "description": "<p>This challenge converts speed from kilometers per hour to miles per hour using small, reusable static methods.</p><p>toMilesPerHour(double kilometersPerHour) validates the input, converts kilometers to miles, rounds the answer, and returns it as a long.</p><p>A negative speed is invalid, so the method returns -1 as a sentinel value instead of a real conversion.</p><p>printConversion(double kilometersPerHour) reuses toMilesPerHour() and prints either \"Invalid Value\" or \"XX km/h = YY mi/h\".</p><p>Method reuse matters here: printConversion() should call toMilesPerHour() instead of duplicating the conversion formula.</p><p>Math.round(double value) returns the nearest long, which is useful when a decimal conversion must be displayed as a whole number.</p><p>Important: 1 mile per hour is approximately 1.609 kilometers per hour, so milesPerHour = kilometersPerHour / 1.609.</p><p>Example results: toMilesPerHour(1.5) returns 1, toMilesPerHour(10.25) returns 6, and toMilesPerHour(-5.6) returns -1.</p>",
    "template": "public class PracticeWorkspace {\n    public static long toMilesPerHour(double kilometersPerHour) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [
          1.5
        ],
        "expected": 1
      },
      {
        "args": [
          10.25
        ],
        "expected": 6
      },
      {
        "args": [
          -5.6
        ],
        "expected": -1
      }
    ],
    "selfCheck": false,
    "methodName": "toMilesPerHour",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"toMilesPerHour\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"kilometersPerHour\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "teennumbercheckercodingchallenge",
    "title": "Teen Number Checker",
    "difficulty": "Medium",
    "chapter": "Chapter 6: Methods In Java",
    "description": "<p>This challenge breaks a repeated age-range check into a helper method.</p><p>isTeen(int number) returns true when number is between 13 and 19, inclusive.</p><p>hasTeen(int firstNumber, int secondNumber, int thirdNumber) returns true when at least one of its three arguments is a teen number.</p><p>Calling isTeen() from hasTeen() keeps the range rule in one place and avoids repeating the same condition three times.</p><p>Example results: hasTeen(9, 99, 19) returns true, hasTeen(23, 15, 42) returns true, and hasTeen(22, 23, 24) returns false.</p><p>Important: inclusive range checks use >= for the lower boundary and <= for the upper boundary.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean hasTeen(int firstNumber, int secondNumber, int thirdNumber) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          9,
          99,
          19
        ],
        "expected": true
      },
      {
        "args": [
          23,
          15,
          42
        ],
        "expected": true
      },
      {
        "args": [
          22,
          23,
          24
        ],
        "expected": false
      }
    ],
    "selfCheck": false,
    "methodName": "hasTeen",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"hasTeen\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"firstNumber\", \"secondNumber\", \"thirdNumber\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1], testCase.args[2]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "recursiondeepproblem",
    "title": "Recursion",
    "difficulty": "Hard",
    "chapter": "Chapter 6: Methods In Java",
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
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "numberofdaysinamonthcodingchallenge",
    "title": "Number Of Days In A Month",
    "difficulty": "Medium",
    "chapter": "Chapter 7: Switch Statements",
    "description": "<p>Write a method isLeapYear with a parameter of type int named year.</p><p>The parameter needs to be greater than or equal to 1 and less than or equal to 9999.</p><p>If the parameter is not in that range return false.</p><p>Otherwise, if it is in the valid range, calculate if the year is a leap year and return true if it is, otherwise return false.</p><p>A year is a leap year if it is divisible by 4 but not by 100, or it is divisible by 400.</p><p>Examples of input/output:</p><p>isLeapYear(-1600); → should return false since the parameter is not in the range (1-9999) isLeapYear(1600); → should return true since 1600 is a leap year isLeapYear(2017); → should return false since 2017 is not a leap year isLeapYear(2000); → should return true because 2000 is a leap year</p><p>NOTE: The solution to the Leap Year coding exercise earlier in the course created the isLeapYear method. You can use that solution if you wish.</p><p>Write another method getDaysInMonth with two parameters month and year. Both of type int.</p><p>If parameter month is < 1 or > 12 return -1.</p><p>If parameter year is < 1 or > 9999 then return -1.</p><p>This method needs to return the number of days in the month. Be careful about leap years they have 29 days in month 2 (February).</p><p>You should check if the year is a leap year using the method isLeapYear described above.</p><p>Examples of input/output:</p><p>getDaysInMonth(1, 2020); → should return 31 since January has 31 days.</p><p>getDaysInMonth(2, 2020); → should return 29 since February has 29 days in a leap year and 2020 is a leap year.</p><p>getDaysInMonth(2, 2018); → should return 28 since February has 28 days if it's not a leap year and 2018 is not a leap year.</p><p>getDaysInMonth(-1, 2020); → should return -1 since the parameter month is invalid.</p><p>getDaysInMonth(1, -2020); → should return -1 since the parameter year is outside the range of 1 to 9999.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isLeapYear(int year) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          -1600
        ],
        "expected": false
      },
      {
        "args": [
          1600
        ],
        "expected": true
      },
      {
        "args": [
          2017
        ],
        "expected": false
      },
      {
        "args": [
          2000
        ],
        "expected": true
      }
    ],
    "selfCheck": false,
    "methodName": "isLeapYear",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isLeapYear\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"year\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "printnumberinaworldcodingchallenge",
    "title": "Print Number In A World",
    "difficulty": "Medium",
    "chapter": "Chapter 7: Switch Statements",
    "description": "<p>Write a method called printNumberInWord.</p><p>The method has one parameter number which is the whole number.</p><p>The method needs to print \"ZERO\", \"ONE\", \"TWO\", ... \"NINE\", \"OTHER\" if the int parameter number is 0, 1, 2, .... 9 or other for any other number including negative numbers.</p>",
    "template": "public class PracticeWorkspace {\n    public static String returnNumberInAWordUsingTraditionalSwitch(int number) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "returnNumberInAWordUsingTraditionalSwitch",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "switchstatementchallenge",
    "title": "Switch Statement",
    "difficulty": "Easy",
    "chapter": "Chapter 7: Switch Statements",
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
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "switchstatementchallengereturndayoftheweek",
    "title": "Switch Statement Challenge Return Day Of The Week",
    "difficulty": "Easy",
    "chapter": "Chapter 7: Switch Statements",
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
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "switchstatementnatochallenge",
    "title": "Switch Statement N A T O",
    "difficulty": "Easy",
    "chapter": "Chapter 7: Switch Statements",
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
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "menudrivencalculatordeepproblem",
    "title": "Menu Driven Calculator",
    "difficulty": "Hard",
    "chapter": "Chapter 7: Switch Statements",
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
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "forloopprimenumberchallenge",
    "title": "For Loop Prime Number",
    "difficulty": "Medium",
    "chapter": "Chapter 8: Java Looping Concepts",
    "description": "<p>Create a prime number counter variable, that will keep count of how many prime numbers were found.</p><p>Create a for statement, using any range of numbers, where the maximum number is <= 1000.</p><p>For each number in the range: Check to see if it's a prime number using the isPrime method. If the number is prime, print it out and increment the prime number counter variable. Once the prime number counter equals three, exit the loop (Hint, use the break statement to exit). Your challenge is to create a for statement, using any range of numbers, to determine if the numbers, are prime numbers.</p><p>If it's a prime number, print it out, and increment a count of the number of prime numbers found. if you get to the stage where 3 or more prime numbers are found, end the loop. In other words, you'll be iterating through the loop, but you've found three prime numbers before the range is fully processed.</p><p>CODING CHALLENGE — For Loop with Break</p><p>This challenge practices: for loops, a helper method (isPrime), the break statement, and prime number logic.</p><p>A prime number is only divisible by 1 and itself. The isPrime method checks divisibility up to number/2 (any factor beyond that would have a corresponding factor below it).</p><p>The challenge: find 3 prime numbers in range 10-20 using a for loop, then break once 3 are found.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isPrime(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "isPrime",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "sumoddchallenge",
    "title": "Sum Odd",
    "difficulty": "Medium",
    "chapter": "Chapter 8: Java Looping Concepts",
    "description": "<p>Write a method called isOdd with an int parameter and call it number. The method needs to return a boolean.</p><p>Check that number is > 0, if it is not return false.</p><p>If number is odd return true, otherwise return false.</p><p>Write a second method called sumOdd that has 2 int parameters start and end, which represent a range of numbers.</p><p>The method should use a for loop to sum all odd numbers in that range including the end and return the sum.</p><p>It should call the method isOdd to check if each number is odd.</p><p>The parameter end needs to be greater than or equal to start and both start and end parameters have to be greater than 0.</p><p>If those conditions are not satisfied return -1 from the method to indicate invalid input.</p><p>Example input/output:</p><p>sumOdd(1, 100); → should return 2500 sumOdd(-1, 100); → should return -1 sumOdd(100, 100); → should return 0 sumOdd(13, 13); → should return 13 (This set contains one number, 13, and it is odd) sumOdd(100, -100); → should return -1 sumOdd(100, 1000); → should return 247500</p><p>CODING CHALLENGE — For Loop with Method Decomposition</p><p>This challenge decomposes the problem into two methods: isOdd() checks a single number, sumOdd() uses a for loop to accumulate the sum.</p><p>Method decomposition: breaking a complex problem into smaller, single-purpose methods is a fundamental good programming practice.</p><p>Guard clauses: checking invalid input at the start of a method and returning early (-1) to signal invalid input.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isOdd(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "isOdd",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "patternprinterdeepproblem",
    "title": "Pattern Printer",
    "difficulty": "Medium",
    "chapter": "Chapter 8: Java Looping Concepts",
    "description": "<p>Deep Problem: Pattern Rendering Engine — Use nested loops to generate multiple console-based patterns, including star triangles, a number pyramid, and a full multiplication table. The challenge mirrors the kind of structured output logic often needed in reporting and diagnostic tools.</p>",
    "template": "public class PracticeWorkspace {\n    public static void printRightTriangle(int size) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "printRightTriangle",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "checknumberpalindromecodingchallenge",
    "title": "Check Number Palindrome",
    "difficulty": "Easy",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "description": "<p>Number Palindrome</p><p>Write a method called isPalindrome with one int parameter called number.</p><p>The method needs to return a boolean.</p><p>It should return true if the number is a palindrome number otherwise it should return false.</p><p>Check the tips below for more info about palindromes.</p><p>Example Input/Output checkIfNumberIsPalindrome(-1221); → should return true checkIfNumberIsPalindrome(707); → should return true checkIfNumberIsPalindrome(11212); → should return false because reverse is 21211 and that is not equal to 11212.</p><p>Tip: What is a Palindrome number? A palindrome number is a number which when reversed is equal to the original number. For example: 121, 12321, 1001 etc.</p><p>Tip: Logic to check a palindrome number</p><p>Find the the reverse of the given number. Store it in some variable say reverse. Compare the number with reverse.</p><p>If both are the the same then the number is a palindrome otherwise it is not.</p><p>Tip: Logic to reverse a number</p><p>Declare and initialize another variable to store the reverse of a number, for example reverse = 0.</p><p>Extract the last digit of the given number by performing the modulo division (remainder).</p><p>Store the last digit to some variable say lastDigit = num % 10.</p><p>Increase the place value of reverse by one.</p><p>To increase place value multiply the reverse variable by 10 e.g. reverse = reverse * 10.</p><p>Add lastDigit to reverse.</p><p>Since the last digit of the number is processed, remove the last digit of num. To remove the last digit divide number by 10.</p><p>Repeat steps until number is not equal to (or greater than) zero.</p><p>A while loop would be good for this coding exercise.</p><p>CODING CHALLENGE — While Loop with Number Reversal</p><p>A palindrome number reads the same forwards and backwards: 121, 1001, 707.</p><p>Technique: reverse the number using arithmetic. Extract the last digit with (number % 10), add it to the reversed number (reversed * 10 + digit), then remove the last digit (number / 10). Compare reversed == original.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean checkIfNumberIsPalindrome(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          -1221
        ],
        "expected": true
      },
      {
        "args": [
          707
        ],
        "expected": true
      },
      {
        "args": [
          11212
        ],
        "expected": false
      }
    ],
    "selfCheck": false,
    "methodName": "checkIfNumberIsPalindrome",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"checkIfNumberIsPalindrome\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "digitsumcodingchallenge",
    "title": "Digit Sum",
    "difficulty": "Easy",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "description": "<p>In this challenge, your task is to write a method with the name sumDigits that has a single parameter named number, of type int, and it should return an int.</p><p>The method should only take a number that is a positive number.</p><p>If a negative number is passed, it should return -1, meaning, an invalid value was passed.</p><p>The method should parse out each digit from the number and sum the digits up.</p><p>So, if 125 is the value passed to the method, the code should sum each digit, in this case, 1 + 2 + 5, and return 8, as a value. And another example, if the value is 1000, the code should sum each digit, 1 + 0 + 0 + 0, and return 1 as a value.</p><p>If the number is a single digit number, simply return the number itself as the result.</p>",
    "template": "public class PracticeWorkspace {\n    public static int sumDigits(int number) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "sumDigits",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "evendigitsumcodingchallenge",
    "title": "Even Digit Sum",
    "difficulty": "Medium",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "description": "<p>Even Digit Sum</p><p>Write a method named getEvenDigitSum with one parameter of type int called number.</p><p>The method should return the sum of the even digits within the number.</p><p>If the number is negative, the method should return -1 to indicate an invalid value.</p><p>EXAMPLE INPUT/OUTPUT:</p><p>getEvenDigitSum(123456789); → should return 20 since 2 + 4 + 6 + 8 = 20 getEvenDigitSum(252); → should return 4 since 2 + 2 = 4 getEvenDigitSum(-22); → should return -1 since the number is negative</p>",
    "template": "public class PracticeWorkspace {\n    public static int getEvenDigitSum(int number) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [
          123456789
        ],
        "expected": 20
      },
      {
        "args": [
          252
        ],
        "expected": 4
      },
      {
        "args": [
          -22
        ],
        "expected": -1
      }
    ],
    "selfCheck": false,
    "methodName": "getEvenDigitSum",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"getEvenDigitSum\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "factorprintercodingchallenge",
    "title": "Factor Printer",
    "difficulty": "Medium",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "description": "<p>Factor Printer Challenge: A factor of a number N is any integer that divides N with no remainder.</p><p>For example, the factors of 32 are: 1, 2, 4, 8, 16, 32 — each divides 32 evenly.</p><p>The approach uses a while loop counting from 1 to N, checking if number % counter == 0 (i.e., divisible with no remainder).</p><p>If the number is less than 1, the method returns -1 to indicate invalid input.</p>",
    "template": "public class PracticeWorkspace {\n    public static void printFactors(int number) {\n        // Write your code here\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "printFactors",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "firstandlastdigitsumcodingchallenge",
    "title": "First And Last Digit Sum",
    "difficulty": "Medium",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "description": "<p>First And Last Digit Sum</p><p>Write a method named sumFirstAndLastDigit with one parameter of type int called number.</p><p>The method needs to find the first and the last digit of the parameter number passed to the method, using a loop and return the sum of the first and the last digit of that number.</p><p>If the number is negative then the method needs to return -1 to indicate an invalid value.</p><p>Example input/output sumFirstAndLastDigit(252); → should return 4, the first digit is 2 and the last is 2 which gives us 2+2 and the sum is 4.</p><p>sumFirstAndLastDigit(257); → should return 9, the first digit is 2 and the last is 7 which gives us 2+7 and the sum is 9.</p><p>sumFirstAndLastDigit(0); → should return 0, the first digit and the last digit is 0 since we only have 1 digit, which gives us 0+0 and the sum is 0.</p><p>sumFirstAndLastDigit(5); → should return 10, the first digit and the last digit is 5 since we only have 1 digit, which gives us 5+5 and the sum is 10.</p><p>sumFirstAndLastDigit(-10); → should return -1, since the parameter is negative and needs to be positive.</p>",
    "template": "public class PracticeWorkspace {\n    public static int sumFirstAndLastDigit(int number) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [
          252
        ],
        "expected": 4
      },
      {
        "args": [
          257
        ],
        "expected": 9
      },
      {
        "args": [
          0
        ],
        "expected": 0
      },
      {
        "args": [
          5
        ],
        "expected": 10
      }
    ],
    "selfCheck": false,
    "methodName": "sumFirstAndLastDigit",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"sumFirstAndLastDigit\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "floorpackproblemcodingchallenge",
    "title": "Floor Pack Problem",
    "difficulty": "Hard",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "description": "<p>Write a method named canPack with three parameters of type int named bigCount, smallCount, and goal.</p><p>The parameter bigCount represents the count of big flour bags (5 kilos each).</p><p>The parameter smallCount represents the count of small flour bags (1 kilo each).</p><p>The parameter goal represents the goal amount of kilos of flour needed to assemble a package.</p><p>Therefore, the sum of the kilos of bigCount and smallCount must be at least equal to the value of goal. The method should return true if it is possible to make a package with goal kilos of flour.</p><p>If the sum is greater than goal, ensure that only full bags are used towards the goal amount. For example, if goal = 9, bigCount = 2, and smallCount = 0, the method should return false since each big bag is 5 kilos and cannot be divided. However, if goal = 9, bigCount = 1, and smallCount = 5, the method should return true because of 1 full bigCount bag and 4 full smallCount bags equal goal, and it's okay if there are additional bags left over.</p><p>If any of the parameters are negative, return false.</p><p>EXAMPLE INPUT/OUTPUT:</p><p>canPack (1, 0, 4); should return false since bigCount is 1 (big bag of 5 kilos) and goal is 4 kilos.</p><p>canPack (1, 0, 5); should return true since bigCount is 1 (big bag of 5 kilos) and goal is 5 kilos.</p><p>canPack (0, 5, 4); should return true since smallCount is 5 (small bags of 1 kilo) and goal is 4 kilos, and we have 1 bag left which is ok as mentioned above.</p><p>canPack (2, 2, 11); should return true since bigCount is 2 (big bags 5 kilos each) and smallCount is 2 (small bags of 1 kilo), makes in total 12 kilos and goal is 11 kilos.</p><p>canPack (-3, 2, 12); should return false since bigCount is negative.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean canPack(int bigCount, int smallCount, int goal) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "canPack",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "greatestcommondivisorcodingchallenge",
    "title": "Greatest Common Divisor",
    "difficulty": "Hard",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "description": "<p>Greatest Common Divisor (GCD) Challenge: the GCD of two numbers is the largest integer that divides both without a remainder.</p><p>For example, GCD(81, 153) = 27, since 27 is the largest number that divides both 81 and 153 evenly.</p><p>The method iterates over all divisors of the smaller number and checks which ones also divide the larger number — the last common divisor found is the GCD.</p><p>Both numbers must be >= 10; otherwise -1 is returned to indicate invalid input.</p><p>The approach uses nested while loops to compare factors of both numbers, tracking the largest common one found.</p>",
    "template": "public class PracticeWorkspace {\n    public static int getGreatestCommonDivisor(int number1, int number2) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "getGreatestCommonDivisor",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "largestprimefactorcodingchallenge",
    "title": "Largest Prime Factor",
    "difficulty": "Medium",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "description": "<p>Write a method named getLargestPrime with one parameter of type int named number.</p><p>If the number is negative or does not have any prime numbers, the method should return -1 to indicate an invalid value.</p><p>The method should calculate the largest prime factor of a given number and return it.</p><p>EXAMPLE INPUT/OUTPUT:</p><p>getLargestPrime (21); should return 7 since 7 is the largest prime (3 * 7 = 21) getLargestPrime (217); should return 31 since 31 is the largest prime (7 * 31 = 217) getLargestPrime (0); should return -1 since 0 does not have any prime numbers getLargestPrime (45); should return 5 since 5 is the largest prime (3 * 3 * 5 = 45) getLargestPrime (-1); should return -1 since the parameter is negative</p>",
    "template": "public class PracticeWorkspace {\n    public static int getLargestPrime(int number) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "getLargestPrime",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "lastdigitcheckercodingchallenge",
    "title": "Last Digit Checker",
    "difficulty": "Medium",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "description": "<p>Last Digit Checker</p><p>Write a method named hasSameLastDigit with three parameters of type int.</p><p>Each number should be within the range of 10 (inclusive) - 1000 (inclusive). If one of the numbers is not within the range, the method should return false.</p><p>The method should return true if at least two of the numbers share the same rightmost digit; otherwise, it should return false.</p><p>EXAMPLE INPUT/OUTPUT:</p><p>hasSameLastDigit (41, 22, 71); → should return true since 1 is the rightmost digit in numbers 41 and 71 hasSameLastDigit (23, 32, 42); → should return true since 2 is the rightmost digit in numbers 32 and 42 hasSameLastDigit (9, 99, 999); → should return false since 9 is not within the range of 10-1000</p><p>Write another method named isValid with one parameter of type int.</p><p>The method needs to return true if the number parameter is in range of 10(inclusive) - 1000(inclusive), otherwise return false.</p><p>EXAMPLE INPUT/OUTPUT isValid(10); → should return true since 10 is within the range of 10-1000 isValid(468); → should return true since 468 is within the range of 10-1000 isValid(1051); → should return false since 1051 is not within the range of 10-1000</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isValid(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          10
        ],
        "expected": true
      },
      {
        "args": [
          468
        ],
        "expected": true
      },
      {
        "args": [
          1051
        ],
        "expected": false
      }
    ],
    "selfCheck": false,
    "methodName": "isValid",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isValid\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "numbertowordscodingchallenge",
    "title": "Number To Words",
    "difficulty": "Hard",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "description": "<p>This topic belongs to Chapter 9: While And Do While Looping Concepts → While Do While Loop Coding Challenge.</p><p>Review the class NumberToWordsCodingChallenge and understand its key responsibilities.</p><p>This example defines 3 methods; trace method behavior step by step.</p>",
    "template": "public class PracticeWorkspace {\n    public static int getDigitCount(int number) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "getDigitCount",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "perfectnumbercodingchallenge",
    "title": "Perfect Number",
    "difficulty": "Medium",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "description": "<p>This topic belongs to Chapter 9: While And Do While Looping Concepts → While Do While Loop Coding Challenge.</p><p>Review the class PerfectNumberCodingChallenge and understand its key responsibilities.</p><p>This example defines 2 methods; trace method behavior step by step.</p><p>Run through the main method flow to understand execution order and output.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isPerfectNumber(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "isPerfectNumber",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "shareddigitcodingchallenge",
    "title": "Shared Digit",
    "difficulty": "Hard",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "description": "<p>Shared Digit</p><p>Write a method named hasSharedDigit with two parameters of type int.</p><p>Each number should be within the range of 10 (inclusive) - 99 (inclusive). If one of the numbers is not within the range, the method should return false.</p><p>The method should return true if there is a digit that appears in both numbers, such as 2 in 12 and 23; otherwise, the method should return false.</p><p>EXAMPLE INPUT/OUTPUT:</p><p>hasSharedDigit(12, 23); → should return true since the digit 2 appears in both numbers hasSharedDigit(9, 99); → should return false since 9 is not within the range of 10-99 hasSharedDigit(15, 55); → should return true since the digit 5 appears in both numbers</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean hasSharedDigit(int number1, int number2) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          12,
          23
        ],
        "expected": true
      },
      {
        "args": [
          9,
          99
        ],
        "expected": false
      },
      {
        "args": [
          15,
          55
        ],
        "expected": true
      }
    ],
    "selfCheck": false,
    "methodName": "hasSharedDigit",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"hasSharedDigit\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"number1\", \"number2\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "whileloopcodingchallenge",
    "title": "While Loop",
    "difficulty": "Easy",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "description": "<p>Create a method called isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed to the method is an even number or not. Return true from the method if it's an even number; otherwise, return false. Next, use a while loop to test a range of numbers from 5 up to and including 20, but printing out only the even numbers determined by the call to the isEvenNumber method. Okay, so the challenge is to create a method called isEvenNumber, and it takes a parameter of type int.</p><p>The purpose of the method is to determine whether the argument that's been passed to the method, the int, in other words, is an even number or not.</p><p>If it's an even number, return true, otherwise, return false.</p><p>CODING CHALLENGE — While Loop Basics</p><p>This challenge practices: writing a boolean-returning helper method, using a while loop with a counter, and using continue to skip iterations.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isEvenNumber(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "isEvenNumber",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "whileloopcodingchallengepart2",
    "title": "While Loop Coding Challenge Part2",
    "difficulty": "Easy",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
    "description": "<p>Step 2 is to modify the while code. Make it also record the total number of even numbers it has found. Break out of the loop once 5 even numbers are found. Finally, display the total number of odd and even numbers found. Alright, so the challenge is to modify the while code above. So, you want to leave the existing functionality as it is, but make it so it also records the total number of even numbers, as well as odd numbers that it's found. And once five even numbers have been found, break out of the code and display the total number of even numbers.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isEvenNumber(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "isEvenNumber",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "numberguesserdeepproblem",
    "title": "Number Guesser",
    "difficulty": "Hard",
    "chapter": "Chapter 9: While And Do While Looping Concepts",
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
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "librarysystemdeepproblem",
    "title": "Library System",
    "difficulty": "Medium",
    "chapter": "Chapter 10: Class Object Static And Instance Fields",
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
    "description": "<p>Paint Job Challenge: calculates how many paint buckets are required to cover a wall area.</p><p>The wall area is calculated as width * height. Each bucket covers a fixed area (areaPerBucket).</p><p>Math.ceil() is used to round up — you always need whole buckets, never a fraction.</p><p>The method is overloaded with 3 versions: (area, areaPerBucket), (width, height, areaPerBucket), and (width, height, areaPerBucket, extraBuckets) to handle different input scenarios.</p><p>If any parameter is invalid (negative or zero), the method returns -1.</p>",
    "template": "public class PracticeWorkspace {\n    public static int getBucketCount(double width, double height, double areaOfBucket, int extraBuckets) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "getBucketCount",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "readinguserinputchallenge",
    "title": "Reading User Input",
    "difficulty": "Hard",
    "chapter": "Chapter 11: Parsing Values Reading Input",
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
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "multicatchchallenge",
    "title": "Multi Catch",
    "difficulty": "Easy",
    "chapter": "Chapter 12: Exception Handling",
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
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "parseandhandlechallenge",
    "title": "Parse And Handle",
    "difficulty": "Easy",
    "chapter": "Chapter 12: Exception Handling",
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
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "safedivisionchallenge",
    "title": "Safe Division",
    "difficulty": "Easy",
    "chapter": "Chapter 12: Exception Handling",
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
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "methodoverloadingchallenge",
    "title": "Method Over Loading",
    "difficulty": "Medium",
    "chapter": "Chapter 13: OOP Concepts",
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
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "methodoverloadingsecondandminuteschallenge",
    "title": "Method Overloading Second And Minutes",
    "difficulty": "Medium",
    "chapter": "Chapter 13: OOP Concepts",
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
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "shapehierarchydeepproblem",
    "title": "Shape Hierarchy",
    "difficulty": "Medium",
    "chapter": "Chapter 13: OOP Concepts",
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
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "stringanalyzerdeepproblem",
    "title": "String Analyzer",
    "difficulty": "Hard",
    "chapter": "Chapter 14: Strings",
    "description": "<p>Deep Problem: Text Intelligence Analyzer — Create a utility that inspects sentences for palindrome behavior, word count, character frequency, and reversed word order, then combines the findings into a formatted report. The challenge reflects common string-processing tasks used in search, validation, and reporting systems.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isPalindrome(String text) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          "racecar"
        ],
        "expected": true
      },
      {
        "args": [
          "hello"
        ],
        "expected": false
      },
      {
        "args": [
          "A man a plan a canal Panama"
        ],
        "expected": true
      }
    ],
    "selfCheck": false,
    "methodName": "isPalindrome",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isPalindrome\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"text\", prepared);\n          const result = fn(testCase.args[0]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  },
  {
    "id": "compositiondeepproblem",
    "title": "Composition",
    "difficulty": "Medium",
    "chapter": "Chapter 15: Composition",
    "description": "<p>Deep Problem: Computer Assembly — composition in practice.</p><p>A PersonalComputer HAS-A Monitor, a MotherBoard and a ComputerCase.</p><p>Each part is its own object with its own model and manufacturer, and the computer is built by holding those parts, not by inheriting from them.</p><p>This is the difference between HAS-A (composition) and IS-A (inheritance).</p><p>This exercise works with the parts as simple values, so the idea can be practised without building the whole object graph.</p><p>describePart :- returns the part as \"model by manufacturer\", or \"incomplete part\" when either value is missing.</p><p>totalCost :- adds the three part prices to give the cost of the whole build.</p><p>isFullyAssembled :- returns true only when every part is present.</p>",
    "template": "public class PracticeWorkspace {\n    public static String describePart(String model, String manufacturer) {\n        // Write your code here\n        return \"\";\n    }\n}",
    "testCases": [
      {
        "args": [
          "U2720Q",
          "Dell"
        ],
        "expected": "U2720Q by Dell"
      },
      {
        "args": [
          "H510",
          "NZXT"
        ],
        "expected": "H510 by NZXT"
      }
    ],
    "selfCheck": false,
    "methodName": "describePart",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"describePart\");\n          const prepared = (typeof prepareJavaBody === \"function\") ? prepareJavaBody(body) : body;\n          const fn = new Function(\"model\", \"manufacturer\", prepared);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          const expected = testCase.expected;\n          // Floating point results are compared with a small tolerance, because a\n          // note such as \"returns about 78.53975\" is a rounded value.\n          if (typeof result === \"number\" && typeof expected === \"number\") {\n            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);\n            return Math.abs(result - expected) <= tolerance;\n          }\n          return result === expected;\n        } catch(e) { return null; }\n      }"
  }
];
