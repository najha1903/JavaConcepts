// ============================================================================
// The hand-written practice challenges.
//
// WHY THEY LIVE HERE
//
// These six were typed straight into `app.js` years ago, which meant challenges came
// from TWO places: 63 generated from the author's `*Challenge*` files, and these 6 in
// the website code. That caused a real defect, found while adding the "order challenges
// by what you are weakest at" feature:
//
//   - each challenge needs to know which CONCEPTS it teaches, so it can be sorted and
//     so Mastery can point at it
//   - the 63 generated ones get that from the parser
//   - these 6 would not, because nobody adds it by hand
//   - so the sorting would silently cover 63 of 69, and these six would never be
//     suggested, with nothing to say so
//
// The audit could not even report it, because the audit reads `practice.js` and these
// six were in `app.js`.
//
// Moving them here fixes that: `parse-concepts.js` merges this file with the generated
// ones, so there is ONE source of challenges, the audit sees all of them, and every
// challenge gets its concepts. This is the same pattern the researched OCJP exam
// questions already use in `data/ocjp-bank.js`.
//
// THE SHAPE
//
//   id, title, difficulty, chapter   as before
//   concepts                          which concepts this challenge teaches. Required:
//                                     the audit fails without it.
//   description, template, testCases  as before
//   verify                            a real function here, so it stays readable and
//                                     editable. parse-concepts.js writes it into
//                                     practice.js as a string, and the browser evals it
//                                     back - the same mechanism the generated
//                                     challenges already use.
//
// A challenge that cannot be checked automatically simply has no `verify`, and the lab
// reports it as self-check.
// ============================================================================

const CURATED_PRACTICE_CHALLENGES = [
  {
    id: 'casting',
    title: 'Tricky Primitive Casting',
    difficulty: 'Easy',
    chapter: 'Chapter 2: Primitive Types',
    concepts: ['casting'],
    description: `
      <p>Write a method <code>public static boolean isLossyCast(double val)</code> that checks whether casting a <code>double</code> to an <code>int</code> will result in a loss of precision/data (i.e. losing the fractional part).</p>
      <p>Your method should return:</p>
      <ul>
        <li><code>true</code> if the cast is lossy (e.g. <code>3.14</code> becomes <code>3</code>, which loses <code>0.14</code>).</li>
        <li><code>false</code> if there is no loss of precision (e.g. <code>5.0</code> becomes <code>5</code>, which is identical).</li>
      </ul>
    `,
    template: `public class PracticeWorkspace {\n    public static boolean isLossyCast(double val) {\n        // Write your code here\n        return false;\n    }\n}`,
    testCases: [
      { args: [3.14], expected: true },
      { args: [5.0], expected: false },
      { args: [-2.5], expected: true },
      { args: [0.0], expected: false }
    ],
    verify: function (userCode, testCase) {
      const body = extractMethodBody(userCode, 'isLossyCast');
      const fn = new Function('val', body);
      return fn(testCase.args[0]) === testCase.expected;
    }
  },
  {
    id: 'modulus',
    title: 'Modulus Without Operators',
    difficulty: 'Medium',
    chapter: 'Chapter 3: Operators',
    concepts: ['operators'],
    description: `
      <p>Write a method <code>public static int getModulus(int dividend, int divisor)</code> that returns the remainder of the division of <code>dividend</code> by <code>divisor</code> <strong>without</strong> using the modulus operator (<code>%</code>) or division operator (<code>/</code>).</p>
      <p>Assume both inputs are positive integers.</p>
    `,
    template: `public class PracticeWorkspace {\n    public static int getModulus(int dividend, int divisor) {\n        // Write your code here\n        return 0;\n    }\n}`,
    testCases: [
      { args: [10, 3], expected: 1 },
      { args: [20, 5], expected: 0 },
      { args: [7, 8], expected: 7 },
      { args: [0, 4], expected: 0 }
    ],
    verify: function (userCode, testCase) {
      const body = extractMethodBody(userCode, 'getModulus');
      const fn = new Function('dividend', 'divisor', body);
      return fn(testCase.args[0], testCase.args[1]) === testCase.expected;
    }
  },
  {
    id: 'leapyear',
    title: 'Perfect Leap Year Checker',
    difficulty: 'Medium',
    chapter: 'Chapter 6: Methods In Java',
    concepts: ['statements', 'if-else'],
    description: `
      <p>Write a method <code>public static boolean isLeapYear(int year)</code> that returns <code>true</code> if the parameter <code>year</code> is a leap year, and <code>false</code> otherwise.</p>
      <p>A year is a leap year if it is divisible by 4, but not by 100, unless it is also divisible by 400.</p>
      <p>If the parameter <code>year</code> is not in the range <strong>[1, 9999]</strong>, return <code>false</code> immediately.</p>
    `,
    template: `public class PracticeWorkspace {\n    public static boolean isLeapYear(int year) {\n        // Write your code here\n        return false;\n    }\n}`,
    testCases: [
      { args: [2000], expected: true },
      { args: [1900], expected: false },
      { args: [2024], expected: true },
      { args: [2023], expected: false },
      { args: [10000], expected: false }
    ],
    verify: function (userCode, testCase) {
      const body = extractMethodBody(userCode, 'isLeapYear');
      const fn = new Function('year', body);
      return fn(testCase.args[0]) === testCase.expected;
    }
  },
  {
    id: 'palindrome',
    title: 'Tricky Palindrome Numbers',
    difficulty: 'Medium',
    chapter: 'Chapter 8: Java Looping Concepts',
    concepts: ['loops', 'operators'],
    description: `
      <p>Write a method <code>public static boolean isPalindrome(int number)</code> that returns <code>true</code> if the number is a palindrome, and <code>false</code> otherwise.</p>
      <p>A palindrome number reads the same forwards and backwards. Negative numbers should be supported by ignoring their negative sign (e.g. <code>-121</code> is a palindrome).</p>
      <p>Do <strong>not</strong> convert the number to a <code>String</code> to solve this!</p>
    `,
    template: `public class PracticeWorkspace {\n    public static boolean isPalindrome(int number) {\n        // Write your code here\n        return false;\n    }\n}`,
    testCases: [
      { args: [121], expected: true },
      { args: [-121], expected: true },
      { args: [123], expected: false },
      { args: [7], expected: true }
    ],
    verify: function (userCode, testCase) {
      const body = extractMethodBody(userCode, 'isPalindrome');
      const fn = new Function('number', body);
      return fn(testCase.args[0]) === testCase.expected;
    }
  },
  {
    id: 'statictracking',
    title: 'Static Instance Tracking',
    difficulty: 'Medium',
    chapter: 'Chapter 10: Class Object Static And Instance Fields',
    concepts: ['static', 'classes'],
    description: `
      <p>Create a static variable tracker. Write a method <code>public static int track(int countToCreate)</code> that simulates instantiating a class multiple times.</p>
      <p>Each instantiation increments a static counter. Return the total instances created.</p>
      <p>For example, if the class has a static counter, starting from 0, and you instantiate it 3 times, the counter should be 3.</p>
    `,
    template: `public class PracticeWorkspace {\n    private static int instanceCount = 0;\n    \n    public PracticeWorkspace() {\n        instanceCount++;\n    }\n    \n    public static int track(int countToCreate) {\n        // Write your code here to instantiate PracticeWorkspace countToCreate times\n        // and return the current instanceCount.\n        return 0;\n    }\n}`,
    testCases: [
      { args: [3], expected: 3 },
      { args: [5], expected: 8 },
      { args: [1], expected: 9 }
    ],
    // This one carries state between test cases, so the lab resets `accumulated`
    // before the first case. `this` is the challenge object, which is why this stays a
    // normal function and not an arrow function.
    verify: function (userCode, testCase) {
      const count = testCase.args[0];
      const body = extractMethodBody(userCode, 'track');

      const simulator = `
        let instanceCount = ${this.accumulated || 0};
        function Constructor() {
            instanceCount++;
        }
        function track(countToCreate) {
            ${body.replace(/new\s+PracticeWorkspace\(\)/g, 'Constructor()')}
            return instanceCount;
        }
        return track(${count});
      `;
      const fn = new Function(simulator);
      const res = fn();
      this.accumulated = res;
      return res === testCase.expected;
    }
  },
  {
    id: 'polymorphism',
    title: 'Method Overriding with super()',
    difficulty: 'Hard',
    chapter: 'Chapter 13: OOP Concepts',
    concepts: ['polymorphism', 'inheritance'],
    description: `
      <p>In OOP, overriding allows a child class to provide a specific implementation of a method that is already provided by its parent class.</p>
      <p>Write a method <code>public static String getPolymorphicMessage()</code> inside a subclass <code>Child</code> that overrides the parent <code>Parent</code>'s method <code>public String getMessage()</code>.</p>
      <p>Your child method should invoke <code>super.getMessage()</code> and prepend the string <code>"Child: "</code> to it.</p>
      <p>The parent <code>Parent</code> class has been defined for you and returns <code>"Parent Message"</code>.</p>
    `,
    template: `class Parent {\n    public String getMessage() {\n        return "Parent Message";\n    }\n}\n\npublic class PracticeWorkspace extends Parent {\n    @Override\n    public String getMessage() {\n        // Write code here to override getMessage and return: "Child: " + parent message\n        return "";\n    }\n    \n    public static String getPolymorphicMessage() {\n        PracticeWorkspace child = new PracticeWorkspace();\n        return child.getMessage();\n    }\n}`,
    testCases: [
      { args: [], expected: 'Child: Parent Message' }
    ],
    verify: function (userCode, testCase) {
      const body = extractMethodBody(userCode, 'getMessage');

      const simulator = `
        class Parent {
            getMessage() { return "Parent Message"; }
        }
        class PracticeWorkspace extends Parent {
            getMessage() {
                const super_getMessage = () => super.getMessage();
                ${body.replace(/super\.getMessage\(\)/g, 'super_getMessage()')}
            }
        }
        const child = new PracticeWorkspace();
        return child.getMessage();
      `;
      const fn = new Function(simulator);
      return fn() === testCase.expected;
    }
  }
];

module.exports = { CURATED_PRACTICE_CHALLENGES };
