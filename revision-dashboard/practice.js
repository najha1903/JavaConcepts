// Auto-generated. Do NOT edit manually — run 'npm run revise' to regenerate.
const GENERATED_PRACTICE_CHALLENGES = [
  {
    "id": "checknumberpalindromecodingchallenge",
    "title": "Check Number Palindrome",
    "difficulty": "Medium",
    "chapter": "Chapter 10: While And Do While Looping Concepts",
    "description": "<p>Number Palindrome</p><p>Write a method called isPalindrome with one int parameter called number.</p><p>The method needs to return a boolean.</p><p>It should return true if the number is a palindrome number otherwise it should return false.</p><p>Check the tips below for more info about palindromes.</p><p>Example Input/Output isPalindrome(-1221); → should return true isPalindrome(707); → should return true isPalindrome(11212); → should return false because reverse is 21211 and that is not equal to 11212.</p><p>Tip: What is a Palindrome number?  A palindrome number is a number which when reversed is equal to the original number. For example: 121, 12321, 1001 etc.</p><p>Tip: Logic to check a palindrome number</p><p>Find the the reverse of the given number. Store it in some variable say reverse. Compare the number with reverse.</p><p>If both are the the same then the number is a palindrome otherwise it is not.</p><p>Tip: Logic to reverse a number</p><p>Declare and initialize another variable to store the reverse of a number, for example reverse = 0.</p><p>Extract the last digit of the given number by performing the modulo division (remainder).</p><p>Store the last digit to some variable say lastDigit = num % 10.</p><p>Increase the place value of reverse by one.</p><p>To increase place value multiply the reverse variable by 10 e.g. reverse = reverse * 10.</p><p>Add lastDigit to reverse.</p><p>Since the last digit of the number is processed, remove the last digit of num. To remove the last digit divide number by 10.</p><p>Repeat steps until number is not equal to (or greater than) zero.</p><p>A while loop would be good for this coding exercise.</p><p>CODING CHALLENGE — While Loop with Number Reversal</p><p>A palindrome number reads the same forwards and backwards: 121, 1001, 707.</p><p>Technique: reverse the number using arithmetic. Extract the last digit with (number % 10), add it to the reversed number (reversed * 10 + digit), then remove the last digit (number / 10). Compare reversed == original.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean checkIfNumberIsPalindrome(int number) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [],
        "expected": null
      }
    ],
    "selfCheck": true,
    "methodName": "checkIfNumberIsPalindrome",
    "hasVerify": false,
    "verifyFnStr": null
  },
  {
    "id": "digitsumcodingchallenge",
    "title": "Digit Sum",
    "difficulty": "Medium",
    "chapter": "Chapter 10: While And Do While Looping Concepts",
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
    "chapter": "Chapter 10: While And Do While Looping Concepts",
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
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"getEvenDigitSum\");\n          const fn = new Function(\"number\", body);\n          const result = fn(testCase.args[0]);\n          return result === testCase.expected;\n        } catch(e) { return false; }\n      }"
  },
  {
    "id": "factorprintercodingchallenge",
    "title": "Factor Printer",
    "difficulty": "Medium",
    "chapter": "Chapter 10: While And Do While Looping Concepts",
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
    "chapter": "Chapter 10: While And Do While Looping Concepts",
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
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"sumFirstAndLastDigit\");\n          const fn = new Function(\"number\", body);\n          const result = fn(testCase.args[0]);\n          return result === testCase.expected;\n        } catch(e) { return false; }\n      }"
  },
  {
    "id": "floorpackproblemcodingchallenge",
    "title": "Floor Pack Problem",
    "difficulty": "Medium",
    "chapter": "Chapter 10: While And Do While Looping Concepts",
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
    "difficulty": "Medium",
    "chapter": "Chapter 10: While And Do While Looping Concepts",
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
    "chapter": "Chapter 10: While And Do While Looping Concepts",
    "description": "<p>Write a method named getLargestPrime with one parameter of type int named number.</p><p>If the number is negative or does not have any prime numbers, the method should return -1 to indicate an invalid value.</p><p>The method should calculate the largest prime factor of a given number and return it.</p><p>EXAMPLE INPUT/OUTPUT:</p><p>getLargestPrime (21); should return 7 since 7 is the largest prime (3 * 7 = 21) getLargestPrime (217); should return 31 since 31 is the largest prime (7 * 31 = 217) getLargestPrime (0); should return -1 since 0 does not have any prime numbers getLargestPrime (45); should return 5 since 5 is the largest prime (3 * 3 * 5 = 45) getLargestPrime (-1); should return -1 since the parameter is negative</p>",
    "template": "public class PracticeWorkspace {\n    public static int getLargestPrime(int number) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [
          21
        ],
        "expected": 1
      },
      {
        "args": [
          45
        ],
        "expected": 1
      }
    ],
    "selfCheck": false,
    "methodName": "getLargestPrime",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"getLargestPrime\");\n          const fn = new Function(\"number\", body);\n          const result = fn(testCase.args[0]);\n          return result === testCase.expected;\n        } catch(e) { return false; }\n      }"
  },
  {
    "id": "lastdigitcheckercodingchallenge",
    "title": "Last Digit Checker",
    "difficulty": "Medium",
    "chapter": "Chapter 10: While And Do While Looping Concepts",
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
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isValid\");\n          const fn = new Function(\"number\", body);\n          const result = fn(testCase.args[0]);\n          return result === testCase.expected;\n        } catch(e) { return false; }\n      }"
  },
  {
    "id": "numbertowordscodingchallenge",
    "title": "Number To Words",
    "difficulty": "Medium",
    "chapter": "Chapter 10: While And Do While Looping Concepts",
    "description": "<p>This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.</p><p>Review the class NumberToWordsCodingChallenge and understand its key responsibilities.</p><p>This example defines 3 methods; trace method behavior step by step.</p>",
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
    "chapter": "Chapter 10: While And Do While Looping Concepts",
    "description": "<p>This topic belongs to Chapter 10: While And Do While Looping Concepts → While Do While Loop Coding Challenge.</p><p>Review the class PerfectNumberCodingChallenge and understand its key responsibilities.</p><p>This example defines 2 methods; trace method behavior step by step.</p><p>Run through the main method flow to understand execution order and output.</p>",
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
    "difficulty": "Medium",
    "chapter": "Chapter 10: While And Do While Looping Concepts",
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
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"hasSharedDigit\");\n          const fn = new Function(\"number1\", \"number2\", body);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          return result === testCase.expected;\n        } catch(e) { return false; }\n      }"
  },
  {
    "id": "whileloopcodingchallenge",
    "title": "While Loop",
    "difficulty": "Medium",
    "chapter": "Chapter 10: While And Do While Looping Concepts",
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
    "difficulty": "Medium",
    "chapter": "Chapter 10: While And Do While Looping Concepts",
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
    "id": "inputcalculatorchallenge",
    "title": "Input Calculator",
    "difficulty": "Hard",
    "chapter": "Chapter 12: Parsing Values Reading Input",
    "description": "<p>Input Calculator</p><p>Write a method called inputThenPrintSumAndAverage that does not have any parameters.</p><p>The method should not return anything (void) and it needs to keep reading int numbers from the keyboard.</p><p>When the user enters something that is not an int then it needs to print a message in the format \"SUM = XX AVG = YY\".</p><p>XX represents the sum of all entered numbers of type int.</p><p>YY represents the calculated average of all numbers of type long.</p><p>EXAMPLES OF INPUT/OUTPUT:</p><p>EXAMPLE 1:</p><p>INPUT:</p><p>OUTPUT</p><p>SUM = 15 AVG = 3</p><p>EXAMPLE 2:</p><p>INPUT:</p><p>hello</p><p>OUTPUT:</p><p>SUM = 0 AVG = 0</p><p>TIP: Use Scanner to read an input from the user.</p><p>TIP: Use casting when calling the round method since it needs double as a parameter.</p><p>NOTE: Use the method Math.round to round the calculated average (double). The method round returns long.</p><p>NOTE: Be mindful of spaces in the printed message.</p><p>NOTE: Be mindful of users who may type an invalid input right away (see example above).</p><p>NOTE: The method inputThenPrintSumAndAverage should be defined as public static like we have been doing so far in the course.</p>",
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
    "difficulty": "Hard",
    "chapter": "Chapter 12: Parsing Values Reading Input",
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
    "chapter": "Chapter 12: Parsing Values Reading Input",
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
    "chapter": "Chapter 12: Parsing Values Reading Input",
    "description": "<p>Reading User Input Challenge.</p><p>In this challenge, you'll read 5 valid numbers from the console entered by the user and print the sum of those ten numbers. By valid numbers, I mean you need to check that the numbers entered are valid integers. If they are not, print out the message</p><p>\"Invalid number\" to the console, but continue looping until you do have 5 valid numbers.</p><p>Before the user enters each number, prompt them with the message, \"Enter number #x:\", where x represents the count 1, 2, 3, etc. As an example, the first message would look something like, \"Enter number #1:\", the next, \"Enter number #2:\", and so on.</p><p>Some hints for completing this are, firstly, use a while loop or a do while loop.</p><p>Use a scanner object and the next line method to read input as a string.</p><p>Use integer dot parse int, as we did in the previous videos.</p><p>You'll need some local variables to keep track of the count of valid integers, as well as the sum of the integers.</p>",
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
    "id": "methodoverloadingchallenge",
    "title": "Method Over Loading",
    "difficulty": "Hard",
    "chapter": "Chapter 14: OOP Concepts",
    "description": "<p>Create two methods with the  same name: convertToCentimeters</p><p>The first method has one parameter of type int,  which represents the entire height in inches.</p><p>You'll convert inches to centimeters, in this  method, and pass back the number of centimeters, as a double. The second method has two parameters  of type int, one to represent height in feet, and one to represent the remaining height  in inches. So if a person is 5 foot, 8 inches, the values 5 for feet and 8 for  inches would be passed to this method.</p><p>This method will convert feet and inches to just  inches, then call the first method, to get the number of centimeters, also returning the value as  a double. Both methods should return a real number or decimal value for total height in centimeters.  Call both methods, and print out the results.</p>",
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
    "difficulty": "Hard",
    "chapter": "Chapter 14: OOP Concepts",
    "description": "<p>Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds.</p><p>You should validate that the first parameter minutes is >= 0.</p><p>You should validate that the 2nd parameter seconds is >= 0 and <= 59.</p><p>The method should return Invalid value in the method if either of the above are not true.</p><p>If the parameters are valid then calculate how many hours minutes and seconds equal the minutes and seconds passed to this method and return that value as string in format gXXh YYm ZZsh where XX represents a number of hours, YY the minutes and ZZ the seconds.</p><p>Create a 2nd method of the same name but with only one parameter seconds.</p><p>Validate that it is >= 0, and return Invalid value ife it is not true.</p><p>If it is valid, then calculate how many minutes are in the seconds value and then call the other overloaded method passing the correct minutes and seconds calculated so that it can calculate correctly.</p><p>Call both methods to print values to the console.</p><p>Tips:</p><p>Use int or long for your number data types is probably a good idea.</p><p>1 minute = 60 seconds and 1 hour = 60 minutes or 3600 seconds.</p><p>Methods should be static as we have used previously.</p><p>Bonus:</p><p>For the input 61 minutes output should be 01h 01m 00s, but it is ok if it is 1h 1m 0s (Tip: use if-else)</p><p>Create a new console project and call it SecondsAndMinutesChallenge</p>",
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
    "id": "areacalculatorcodingchallenge",
    "title": "Area Calculator",
    "difficulty": "Easy",
    "chapter": "Chapter 7: Methods In Java",
    "description": "<p>Write a method named area with one double parameter named radius.</p><p>The method needs to return a double value that represents the area of a circle.</p><p>If the parameter radius is negative then return -1.0 to represent an invalid value.</p><p>Write another overloaded method with 2 parameters x and y (both doubles), where x and y represent the sides of a rectangle.</p><p>The method needs to return an area of a rectangle.</p><p>If either or both parameters is/are a negative return -1.0 to indicate an invalid value.</p><p>For formulas and PI value please check the tips below.</p><p>Examples of input/output:</p><p>* area(5.0); should return 78.53975</p><p>* area(-1);  should return -1 since the parameter is negative</p><p>* area(5.0, 4.0); should return 20.0 (5 * 4 = 20)</p><p>* area(-1.0, 4.0);  should return -1 since first the parameter is negative</p><p>TIP: The formula for calculating the area of a rectangle is x * y.</p><p>TIP: The formula for calculating 3*a circle area is radius * radius * PI.</p><p>TIP: For PI use a constant from Math class e.g. Math.PI</p><p>NOTE: All methods need to be defined as public static like we have been doing so far in the course.</p><p>NOTE: Do not add a main method to your solution code!</p>",
    "template": "public class PracticeWorkspace {\n    public static double area(double radius) {\n        // Write your code here\n        return 0;\n    }\n}",
    "testCases": [
      {
        "args": [
          -1
        ],
        "expected": 1
      },
      {
        "args": [
          -1,
          4
        ],
        "expected": 1
      }
    ],
    "selfCheck": false,
    "methodName": "area",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"area\");\n          const fn = new Function(\"radius\", body);\n          const result = fn(testCase.args[0]);\n          return result === testCase.expected;\n        } catch(e) { return false; }\n      }"
  },
  {
    "id": "barkingdogcodingchallenge",
    "title": "Barking Dog",
    "difficulty": "Easy",
    "chapter": "Chapter 7: Methods In Java",
    "description": "<p>We have a dog that likes to bark.  We need to wake up if the dog is barking at night!</p><p>Write a method shouldWakeUp that has 2 parameters.</p><p>1st parameter should be of type boolean and be named barking it represents if our dog is currently barking.</p><p>2nd parameter represents the hour of the day and is of type int with the name hourOfDay and has a valid range of 0-23.</p><p>We have to wake up if the dog is barking before 8 or after 22 hours so in that case return true.</p><p>In all other cases return false.</p><p>If the hourOfDay parameter is less than 0 or greater than 23 return false.</p><p>Examples of input/output:</p><p>* shouldWakeUp (true, 1); → should return true</p><p>* shouldWakeUp (false, 2); → should return false since the dog is not barking.</p><p>* shouldWakeUp (true, 8); → should return false, since it's not before 8.</p><p>* shouldWakeUp (true, -1); → should return false since the hourOfDay parameter needs to be in a range 0-23.</p><p>TIP: Use the if else statement with multiple conditions.</p><p>NOTE: The shouldWakeUp method  needs to be defined as public static like we have been doing so far in the course.</p><p>NOTE: Do not add a  main method to solution code.</p>",
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
      },
      {
        "args": [
          true,
          -1
        ],
        "expected": false
      }
    ],
    "selfCheck": false,
    "methodName": "shouldWakeUp",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"shouldWakeUp\");\n          const fn = new Function(\"barking\", \"hourOfDay\", body);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          return result === testCase.expected;\n        } catch(e) { return false; }\n      }"
  },
  {
    "id": "decimalcomparatorcodingchallenge",
    "title": "Decimal Comparator",
    "difficulty": "Easy",
    "chapter": "Chapter 7: Methods In Java",
    "description": "<p>Write a method areEqualByThreeDecimalPlaces with two parameters of type double.</p><p>The method should return boolean and it needs to return true if two double numbers are the same up to three decimal places. Otherwise, return false.</p><p>EXAMPLES OF INPUT/OUTPUT:</p><p>* areEqualByThreeDecimalPlaces(-3.1756, -3.175); → should return true since numbers are equal up to 3 decimal places.</p><p>* areEqualByThreeDecimalPlaces(3.175, 3.176); → should return false since numbers are not equal up to 3 decimal places</p><p>* areEqualByThreeDecimalPlaces(3.0, 3.0); → should return true since numbers are equal up to 3 decimal places.</p><p>* areEqualByThreeDecimalPlaces(-3.123, 3.123); → should return false since numbers are not equal up to 3 decimal places.</p><p>TIP: Use paper and pencil.</p><p>TIP: Use casting.</p><p>NOTE: The areEqualByThreeDecimalPlaces method  needs to be defined as public static like we have been doing so far in the course.</p><p>NOTE: Do not add a  main method to solution code.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean areEqualByThreeDecimalPlaces(double firstNumber, double secondNumber) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          -3.1756,
          -3.175
        ],
        "expected": true
      },
      {
        "args": [
          3.175,
          3.176
        ],
        "expected": false
      },
      {
        "args": [
          3,
          3
        ],
        "expected": true
      },
      {
        "args": [
          -3.123,
          3.123
        ],
        "expected": false
      }
    ],
    "selfCheck": false,
    "methodName": "areEqualByThreeDecimalPlaces",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"areEqualByThreeDecimalPlaces\");\n          const fn = new Function(\"firstNumber\", \"secondNumber\", body);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          return result === testCase.expected;\n        } catch(e) { return false; }\n      }"
  },
  {
    "id": "equalityprintercodingchallenge",
    "title": "Equality Printer",
    "difficulty": "Easy",
    "chapter": "Chapter 7: Methods In Java",
    "description": "<p>Write a method printEqual with 3 parameters of type int. The method should not return anything (void).</p><p>If one of the parameters is less than 0, print text \"Invalid Value\".</p><p>If all numbers are equal print text \"All numbers are equal\"</p><p>If all numbers are different print text \"All numbers are different\".</p><p>Otherwise, print \"Neither all are equal or different\".</p><p>EXAMPLES OF INPUT/OUTPUT:</p><p>* printEqual(1, 1, 1); should print text All numbers are equal</p><p>* printEqual(1, 1, 2); should print text Neither all are equal or different</p><p>* printEqual(-1, -1, -1); should print text Invalid Value</p><p>* printEqual(1, 2, 3); should print text All numbers are different</p><p>TIP: Be extremely careful about spaces in the printed message.</p><p>NOTES</p><p>* The solution will not be accepted if there are extra spaces.</p><p>* The method printEqual needs to be defined as public static like we have been doing so far in the course.</p><p>* Do not add main method to solution code.</p>",
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
    "chapter": "Chapter 7: Methods In Java",
    "description": "<p>Write a method hasEqualSum with 3 parameters of type int.</p><p>The method should return boolean and it needs to return true if the sum of the first and second parameter is equal to the third parameter. Otherwise, return false.</p><p>EXAMPLES OF INPUT/OUTPUT:</p><p>* hasEqualSum(1, 1, 1);  should return false since 1 + 1 is not equal to 1</p><p>* hasEqualSum(1, 1, 2);  should return true since 1 + 1 is equal to 2</p><p>* hasEqualSum(1, -1, 0);  should return true since 1 + (-1) is 1 - 1 and is equal to 0</p><p>NOTE: The hasEqualSum method  needs to be defined as public static like we have been doing so far in the course.</p><p>NOTE: Do not add a  main method to solution code.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean hasEqualSum(int firstNumber, int secondNumber, int sum) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          1,
          -1,
          0
        ],
        "expected": 1
      }
    ],
    "selfCheck": false,
    "methodName": "hasEqualSum",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"hasEqualSum\");\n          const fn = new Function(\"firstNumber\", \"secondNumber\", \"sum\", body);\n          const result = fn(testCase.args[0], testCase.args[1], testCase.args[2]);\n          return result === testCase.expected;\n        } catch(e) { return false; }\n      }"
  },
  {
    "id": "leapyearcalculatorcodingchallenge",
    "title": "Leap Year Calculator",
    "difficulty": "Easy",
    "chapter": "Chapter 7: Methods In Java",
    "description": "<p>Write a method isLeapYear with a parameter of type int named year.</p><p>The parameter needs to be greater than or equal to 1 and less than or equal to 9999.</p><p>If the parameter is not in that range return false.</p><p>Otherwise, if it is in the valid range, calculate if the year is a leap year and return true if it is a leap year, otherwise return false.</p><p>To determine whether a year is a leap year, follow these steps:</p><p>1. If the year is evenly divisible by 4,   go to step 2.Otherwise, go to step 5.</p><p>2. If the year is evenly divisible by 100, go to step 3.Otherwise, go to step 4.</p><p>3. If the year is evenly divisible by 400, go to step 4.Otherwise, go to step 5.</p><p>4. The year is a leap year (it has 366 days). The method isLeapYear needs to return true.</p><p>5. The year is not a leap year (it has 365 days). The method isLeapYear needs to return false.</p><p>The following years are not leap years:</p><p>This is because they are evenly divisible by 100 but not by 400.</p><p>The following years are leap years:</p><p>This is because they are evenly divisible by both 100 and 400.</p><p>Examples of input/output:</p><p>* isLeapYear(-1600); → should return false since the parameter is not in range (1-9999)</p><p>* isLeapYear(1600); → should return true since 1600 is a leap year</p><p>* isLeapYear(2017); → should return false since 2017 is not a leap year</p><p>* isLeapYear(2000);  → should return true because 2000 is a leap year</p><p>NOTE: The method isLeapYear needs to be defined as public static like we have been doing so far in the course.</p><p>NOTE: Do not add a  main method to solution code.</p>",
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
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isLeapYear\");\n          const fn = new Function(\"year\", body);\n          const result = fn(testCase.args[0]);\n          return result === testCase.expected;\n        } catch(e) { return false; }\n      }"
  },
  {
    "id": "megabytesconvertercodingchallenge",
    "title": "Mega Bytes Converter",
    "difficulty": "Easy",
    "chapter": "Chapter 7: Methods In Java",
    "description": "<p>Write a method called printMegaBytesAndKiloBytes that has 1 parameter of type int with the name kiloBytes.</p><p>The method should not return anything (void) and it needs to calculate the megabytes and remaining kilobytes from the kilobytes parameter.</p><p>Then it needs to print a message in the format \"XX KB = YY MB and ZZ KB\".</p><p>XX represents the original value kiloBytes.</p><p>YY represents the calculated megabytes.</p><p>ZZ represents the calculated remaining kilobytes.</p><p>For example, when the parameter kiloBytes is 2500 it needs to print \"2500 KB = 2 MB and 452 KB\"</p><p>If the parameter kiloBytes is less than 0 then print the text \"Invalid Value\".</p><p>EXAMPLE INPUT/OUTPUT</p><p>* printMegaBytesAndKiloBytes(2500); → should print the following text: \"2500 KB = 2 MB and 452 KB\"</p><p>* printMegaBytesAndKiloBytes(-1024); → should print the following text: \"Invalid Value\" because parameter is less than 0.</p><p>* printMegaBytesAndKiloBytes(5000); → should print the following text: \"5000 KB = 4 MB and 904 KB\"</p><p>TIP: Be extremely careful about spaces in the printed message.</p><p>TIP: Use the remainder operator</p><p>TIP: 1 MB = 1024 KB</p><p>NOTE: Do not set kilobytes parameter value inside your method.</p><p>NOTE: The solution will not be accepted if there are extra spaces.</p><p>NOTE: The printMegaBytesAndKiloBytes method  needs to be defined as public static like we have been doing so far in the course.NOTE: Do not add a  main method to solution code.</p>",
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
    "difficulty": "Easy",
    "chapter": "Chapter 7: Methods In Java",
    "description": "<p>Create a method called displayHighScorePosition. It should have player's name as a parameter, and a 2nd parameter as a position in the high score table.</p><p>You should display the players name along with a message like \" managed to get into position \" and the position they got and a further message</p><p>\" on the high score table \".</p><p>Create a 2nd method called calculateHighScorePosition.</p><p>It should send one argument only, the player score</p><p>It should return an int the return data should be</p><p>1 if the score is >= 1000</p><p>2 is the score is >= 500 and < 1000</p><p>3 if the score is >= 100 and < 500</p><p>4 in all other cases call both methods and display the results of the following a score of 1500, 900, 400 and 50</p>",
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
    "chapter": "Chapter 7: Methods In Java",
    "description": "<p>Write a method printYearsAndDays with parameter of type long named minutes.</p><p>The method should not return anything (void) and it needs to calculate the years and days from the minutes parameter.</p><p>If the parameter is less than 0, print text \"Invalid Value\".</p><p>Otherwise, if the parameter is valid then it needs to print a message in the format \"XX min = YY y and ZZ d\".</p><p>XX represents the original value minutes.</p><p>YY represents the calculated years.</p><p>ZZ represents the calculated days.</p><p>EXAMPLES OF INPUT/OUTPUT:</p><p>* printYearsAndDays(525600);  → should print \"525600 min = 1 y and 0 d\"</p><p>* printYearsAndDays(1051200); → should print \"1051200 min = 2 y and 0 d\"</p><p>* printYearsAndDays(561600);  → should print \"561600 min = 1 y and 25 d\"</p><p>TIPS:</p><p>* Be extra careful about spaces in the printed message.</p><p>* Use the remainder operator</p><p>* 1 hour = 60 minutes</p><p>* 1 day = 24 hours</p><p>* 1 year = 365 days</p><p>NOTES</p><p>* The printYearsAndDays method needs to be defined as public static like we have been doing so far in the course.</p><p>* Do not add main method to solution code.</p><p>* The solution will not be accepted if there are extra spaces</p>",
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
    "chapter": "Chapter 7: Methods In Java",
    "description": "<p>The cats spend most of the day playing. In particular, they play if the temperature is between 25 and 35 (inclusive). Unless it is summer, then the upper limit is 45 (inclusive) instead of 35.</p><p>Write a method isCatPlaying that has 2 parameters. Method needs to return true if the cat is playing, otherwise return false</p><p>1st parameter should be of type boolean and be named summer it represents if it is summer.</p><p>2nd parameter represents the temperature and is of type int with the name temperature.</p><p>EXAMPLES OF INPUT/OUTPUT:</p><p>* isCatPlaying(true, 10); should return false since temperature is not in range 25 - 45</p><p>* isCatPlaying(false, 36); should return false since temperature is not in range 25 - 35 (summer parameter is false)</p><p>* isCatPlaying(false, 35); should return true since temperature is in range 25 - 35</p><p>NOTES</p><p>* The isCatPlaying method needs to be defined as public static like we have been doing so far in the course.</p><p>* Do not add the main method to the solution code.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean isCatPlaying(boolean isSummer, int temperature) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          true,
          10
        ],
        "expected": 45
      },
      {
        "args": [
          false,
          36
        ],
        "expected": 35
      },
      {
        "args": [
          false,
          35
        ],
        "expected": 35
      }
    ],
    "selfCheck": false,
    "methodName": "isCatPlaying",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isCatPlaying\");\n          const fn = new Function(\"isSummer\", \"temperature\", body);\n          const result = fn(testCase.args[0], testCase.args[1]);\n          return result === testCase.expected;\n        } catch(e) { return false; }\n      }"
  },
  {
    "id": "positivenegativezerocodingchallenge",
    "title": "Positive Negative Zero",
    "difficulty": "Easy",
    "chapter": "Chapter 7: Methods In Java",
    "description": "<p>Positive, Negative or Zero</p><p>Write a method called checkNumber with an int parameter named number.</p><p>The method should not return any value, and it needs to print out:</p><p>- \"positive\" if the parameter number is > 0</p><p>- \"negative\" if the parameter number is < 0</p><p>- \"zero\" if the parameter number is equal to 0</p>",
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
    "difficulty": "Easy",
    "chapter": "Chapter 7: Methods In Java",
    "description": "<p>Write a method called toMilesPerHour that has 1 parameter of type double with the name kilometersPerHour. This method needs to return the rounded value of the calculation of type long.</p><p>If the parameter kilometersPerHour is less than 0, the method toMilesPerHour needs to return -1 to indicate an invalid value.</p><p>Otherwise, if it is positive, calculate the value of miles per hour, round it and return it. For conversion and rounding, check the notes in the text below.</p><p>Examples of input/output:</p><p>* toMilesPerHour(1.5); → should return value 1</p><p>* toMilesPerHour(10.25); → should return value 6</p><p>* toMilesPerHour(-5.6); → should return value -1</p><p>* toMilesPerHour(25.42); → should return value 16</p><p>* toMilesPerHour(75.114); → should return value 47</p><p>2. Write another method called printConversion with 1 parameter of type double with the name kilometersPerHour.</p><p>This method should not return anything (void) and it needs to calculate milesPerHour from the kilometersPerHour parameter.</p><p>Then it needs to print a message in the format \"XX km/h = YY mi/h\".</p><p>XX represents the original value kilometersPerHour.</p><p>YY represents the rounded milesPerHour from the kilometersPerHour parameter.</p><p>If the parameter kilometersPerHour is < 0 then print the text \"Invalid Value\".</p><p>Examples of input/output:</p><p>* printConversion(1.5); → should print the following text (into the console - System.out): 1.5 km/h = 1 mi/h</p><p>* printConversion(10.25); → should print the following text (into the console - System.out): 10.25 km/h = 6 mi/h</p><p>* printConversion(-5.6); → should print the following text (into the console - System.out): Invalid Value</p><p>* printConversion(25.42); → should print the following text (into the console - System.out): 25.42 km/h = 16 mi/h</p><p>* printConversion(75.114); → should print the following text (into the console - System.out): 75.114 km/h = 47 mi/h</p><p>Use method Math.round to round the number of calculated miles per hour(double). The method round returns long.</p><p>How to use the method round and how it works?</p><p>The Math.round() is a built-in math method which returns the closest long to the argument. The result is rounded to an integer by adding 1/2, taking the floor of the result after adding 1/2, and typecasting the result to type long. The method returns the value of the argument rounded to the nearest int value.</p><p>TIP: In the method printConversion, call the method toMilesPerHour instead of duplicating the code.</p><p>NOTE: All methods should be defined as public static like we have been doing so far in the course.</p><p>NOTE: 1 mile per hour is 1.609 kilometers per hour</p>",
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
      },
      {
        "args": [
          25.42
        ],
        "expected": 16
      }
    ],
    "selfCheck": false,
    "methodName": "toMilesPerHour",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"toMilesPerHour\");\n          const fn = new Function(\"kilometersPerHour\", body);\n          const result = fn(testCase.args[0]);\n          return result === testCase.expected;\n        } catch(e) { return false; }\n      }"
  },
  {
    "id": "teennumbercheckercodingchallenge",
    "title": "Teen Number Checker",
    "difficulty": "Easy",
    "chapter": "Chapter 7: Methods In Java",
    "description": "<p>We'll say that a number is \"teen\" if it is in the range 13 -19 (inclusive).</p><p>Write a method named hasTeen with 3 parameters of type int.</p><p>The method should return boolean and it needs to return true if one of the parameters is in range 13(inclusive) - 19 (inclusive). Otherwise return false.</p><p>EXAMPLES OF INPUT/OUTPUT:</p><p>* hasTeen(9, 99, 19);  should return true since 19 is in range 13 - 19</p><p>* hasTeen(23, 15, 42);  should return true since 15 is in range 13 - 19</p><p>* hasTeen(22, 23, 34);  should return false since numbers 22, 23, 34 are not in range 13-19</p><p>Write another method named isTeen with 1 parameter of type int.</p><p>The method should return boolean and it needs to return true if the parameter is in range 13(inclusive) - 19 (inclusive). Otherwise return false.</p><p>EXAMPLES OF INPUT/OUTPUT:</p><p>* isTeen(9);  should return false since 9 is in not range 13 - 19</p><p>* isTeen(13);  should return true since 13 is in range 13 - 19</p><p>NOTE: All methods need to be defined as public static like we have been doing so far in the course.</p><p>NOTE: Do not add a  main method to solution code.</p>",
    "template": "public class PracticeWorkspace {\n    public static boolean hasTeen(int firstNumber, int secondNumber, int thirdNumber) {\n        // Write your code here\n        return false;\n    }\n}",
    "testCases": [
      {
        "args": [
          9,
          99,
          19
        ],
        "expected": 19
      },
      {
        "args": [
          23,
          15,
          42
        ],
        "expected": 19
      },
      {
        "args": [
          22,
          23,
          34
        ],
        "expected": 19
      }
    ],
    "selfCheck": false,
    "methodName": "hasTeen",
    "hasVerify": true,
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"hasTeen\");\n          const fn = new Function(\"firstNumber\", \"secondNumber\", \"thirdNumber\", body);\n          const result = fn(testCase.args[0], testCase.args[1], testCase.args[2]);\n          return result === testCase.expected;\n        } catch(e) { return false; }\n      }"
  },
  {
    "id": "numberofdaysinamonthcodingchallenge",
    "title": "Number Of Days In A Month",
    "difficulty": "Medium",
    "chapter": "Chapter 8: Switch Statements",
    "description": "<p>Write a method isLeapYear with a parameter of type int named year.</p><p>The parameter needs to be greater than or equal to 1 and less than or equal to 9999.</p><p>If the parameter is not in that range return false.</p><p>Otherwise, if it is in the valid range, calculate if the year is a leap year and return true if it is, otherwise return false.</p><p>A year is a leap year if it is divisible by 4 but not by 100, or it is divisible by 400.</p><p>Examples of input/output:</p><p>isLeapYear(-1600); →  should return false since the parameter is not in the range (1-9999) isLeapYear(1600); → should return true since 1600 is a leap year isLeapYear(2017); → should return false since 2017 is not a leap year isLeapYear(2000); → should return true because 2000 is a leap year</p><p>NOTE:  The solution to the Leap Year coding exercise earlier in the course created the isLeapYear method. You can use that solution if you wish.</p><p>Write another method getDaysInMonth with two parameters month and year. Both of type int.</p><p>If parameter month is < 1 or > 12 return -1.</p><p>If parameter year is < 1 or > 9999 then return -1.</p><p>This method needs to return the number of days in the month. Be careful about leap years they have 29 days in month 2 (February).</p><p>You should check if the year is a leap year using the method isLeapYear described above.</p><p>Examples of input/output:</p><p>getDaysInMonth(1, 2020); → should return 31 since January has 31 days.</p><p>getDaysInMonth(2, 2020); → should return 29 since February has 29 days in a leap year and 2020 is a leap year.</p><p>getDaysInMonth(2, 2018); → should return 28 since February has 28 days if it's not a leap year and 2018 is not a leap year.</p><p>getDaysInMonth(-1, 2020); → should return -1 since the parameter month is invalid.</p><p>getDaysInMonth(1, -2020); → should return -1 since the parameter year is outside the range of 1 to 9999.</p>",
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
    "verifyFnStr": "function(userCode, testCase) {\n        try {\n          const body = extractMethodBody(userCode, \"isLeapYear\");\n          const fn = new Function(\"year\", body);\n          const result = fn(testCase.args[0]);\n          return result === testCase.expected;\n        } catch(e) { return false; }\n      }"
  },
  {
    "id": "printnumberinaworldcodingchallenge",
    "title": "Print Number In A World",
    "difficulty": "Medium",
    "chapter": "Chapter 8: Switch Statements",
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
    "difficulty": "Medium",
    "chapter": "Chapter 8: Switch Statements",
    "description": "<p>Create a new switch statement using char instead of int.</p><p>Create a new char variable</p><p>Create a switch statement testing for</p><p>A,B,C,D or E display a message if any of these are found and then break</p><p>Add a default which displays a message saying not found</p>",
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
    "difficulty": "Medium",
    "chapter": "Chapter 8: Switch Statements",
    "description": "<p>Use the enhanced switch statement as an expression, returning the result to a String named dayOfTheWeek. Print both the day variable  and the dayOfTheWeek variable. In the main method, call this method for the values 0 through 7.</p><p>Challenge</p><p>1. Create a method called printDaysOfWeek, that takes an int parameter called day, but doesn't return any value</p>",
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
    "difficulty": "Medium",
    "chapter": "Chapter 8: Switch Statements",
    "description": "<p>In this challenge, we'll be using the NATO alphabet to replace a character or letter,with NATO's standardized word for that letter.</p><p>1) Create a new char variable. Use the traditional switch statement (with a colon in case labels)  that tests the value in the variable from Step 1.</p><p>2) Create cases for the characters, A, B, C, D, and E. Display a message in each case block,with the letter and the NATO word, then break.</p><p>3) Add a default block, which displays the letter with a message saying not found.</p>",
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
    "id": "forloopprimenumberchallenge",
    "title": "For Loop Prime Number",
    "difficulty": "Medium",
    "chapter": "Chapter 9: Java Looping Concepts",
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
    "chapter": "Chapter 9: Java Looping Concepts",
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
  }
];
