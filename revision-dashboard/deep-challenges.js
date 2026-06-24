// Auto-generated. Do NOT edit manually — run 'npm run revise' to regenerate.
const DEEP_CHALLENGES = [
  {
    "id": "deep-chapter-2-primitive-types-implement-a-stringutils-class-with-methods-that-do-not-use-any-built-in-string-methods-except-charat-and-length",
    "title": "Implement a StringUtils class with methods that do NOT use any built-in String methods except charAt() and length()",
    "chapter": "Chapter 2: Primitive Types",
    "topic": "String Example",
    "difficulty": "Hard",
    "tags": [
      "deep",
      "coding"
    ],
    "source": "custom",
    "description": "Implement: reverse(String s), isPalindrome(String s), countChar(String s, char target), toUpperCase(String s), countVowels(String s), removeSpaces(String s)",
    "hints": [
      "For reverse: use two pointers on a char array. For palindrome: compare from both ends. For toUpperCase: use ASCII arithmetic (subtract 32 from lowercase chars)."
    ],
    "testcases": [
      "reverse(\"hello\") → \"olleh\", isPalindrome(\"racecar\") → true, isPalindrome(\"java\") → false, countVowels(\"Hello World\") → 3"
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-2-primitive-types-string-ops",
    "title": "String Manipulation Mastery",
    "chapter": "Chapter 2: Primitive Types",
    "topic": "Strings Deep Challenge",
    "difficulty": "Medium",
    "tags": [
      "deep",
      "coding",
      "strings",
      "ocjp"
    ],
    "source": "auto",
    "description": "Implement these String utility methods WITHOUT using external libraries:\n\n1. isPalindrome(String s) → boolean — ignore case and spaces\n2. countVowels(String s) → int\n3. reverseWords(String sentence) → String — reverse word order, not characters\n4. titleCase(String sentence) → String — capitalize first letter of each word\n5. countOccurrences(String text, String word) → int — count non-overlapping occurrences\n\nOCJP focus: String immutability, .equals() vs ==, StringBuilder for efficiency, String methods: .split(), .trim(), .toLowerCase(), .charAt(), .length().",
    "hints": [
      "Use StringBuilder for reverseWords() for efficiency",
      "Split on \"\\\\s+\" to handle multiple spaces",
      "isPalindrome: strip spaces, toLowerCase, then compare char by char"
    ],
    "testcases": [
      "isPalindrome(\"A man a plan a canal Panama\") → true",
      "countVowels(\"Hello World\") → 3",
      "reverseWords(\"Hello World\") → \"World Hello\""
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-5-statements-and-indentations-grading",
    "title": "Grade & Decision Engine",
    "chapter": "Chapter 5: Statements And Indentations",
    "topic": "Control Flow Deep Challenge",
    "difficulty": "Easy",
    "tags": [
      "deep",
      "coding"
    ],
    "source": "auto",
    "description": "Build a student grade calculator:\n\n1. getGrade(int score) → String\n   - 90-100: \"A\"\n   - 80-89: \"B\"\n   - 70-79: \"C\"\n   - 60-69: \"D\"\n   - Below 60: \"F\"\n   - Outside 0-100: \"Invalid\"\n\n2. getDayType(String day) → String\n   - \"Monday\"...\"Friday\" → \"Weekday\"\n   - \"Saturday\", \"Sunday\" → \"Weekend\"\n   - anything else → \"Unknown\"\n   - Use switch statement (not if-else)\n\n3. getFizzBuzz(int n) → String\n   - Multiple of 15: \"FizzBuzz\"\n   - Multiple of 3: \"Fizz\"\n   - Multiple of 5: \"Buzz\"\n   - Otherwise: String.valueOf(n)",
    "hints": [
      "Use enhanced switch for getDayType()",
      "FizzBuzz: check 15 FIRST (before 3 and 5)",
      "int score → score / 10 gives you the tens digit"
    ],
    "testcases": [
      "getGrade(85) → \"B\"",
      "getDayType(\"Saturday\") → \"Weekend\"",
      "getFizzBuzz(15) → \"FizzBuzz\""
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-6-if-else-statements-grading",
    "title": "Grade & Decision Engine",
    "chapter": "Chapter 6: If Else Statements",
    "topic": "Control Flow Deep Challenge",
    "difficulty": "Easy",
    "tags": [
      "deep",
      "coding"
    ],
    "source": "auto",
    "description": "Build a student grade calculator:\n\n1. getGrade(int score) → String\n   - 90-100: \"A\"\n   - 80-89: \"B\"\n   - 70-79: \"C\"\n   - 60-69: \"D\"\n   - Below 60: \"F\"\n   - Outside 0-100: \"Invalid\"\n\n2. getDayType(String day) → String\n   - \"Monday\"...\"Friday\" → \"Weekday\"\n   - \"Saturday\", \"Sunday\" → \"Weekend\"\n   - anything else → \"Unknown\"\n   - Use switch statement (not if-else)\n\n3. getFizzBuzz(int n) → String\n   - Multiple of 15: \"FizzBuzz\"\n   - Multiple of 3: \"Fizz\"\n   - Multiple of 5: \"Buzz\"\n   - Otherwise: String.valueOf(n)",
    "hints": [
      "Use enhanced switch for getDayType()",
      "FizzBuzz: check 15 FIRST (before 3 and 5)",
      "int score → score / 10 gives you the tens digit"
    ],
    "testcases": [
      "getGrade(85) → \"B\"",
      "getDayType(\"Saturday\") → \"Weekend\"",
      "getFizzBuzz(15) → \"FizzBuzz\""
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-7-methods-in-java-calculator",
    "title": "Build a Multi-Operation Calculator",
    "chapter": "Chapter 7: Methods In Java",
    "topic": "Methods Deep Challenge",
    "difficulty": "Medium",
    "tags": [
      "deep",
      "coding",
      "methods"
    ],
    "source": "auto",
    "description": "Create a Calculator class with static methods:\n- add(double a, double b) → returns sum\n- subtract(double a, double b) → returns difference\n- multiply(double a, double b) → returns product\n- divide(double a, double b) → returns quotient; throws ArithmeticException if b is 0\n- power(double base, int exp) → returns base^exp (do NOT use Math.pow)\n\nAll methods must be public static. Handle edge cases: negative numbers, zero division.",
    "hints": [
      "Use a loop for power()",
      "Return special value -1 for invalid divide input if not throwing exception"
    ],
    "testcases": [
      "add(3.5, 2.5) → 6.0",
      "divide(10, 0) → ArithmeticException",
      "power(2, 8) → 256.0"
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-8-switch-statements-grading",
    "title": "Grade & Decision Engine",
    "chapter": "Chapter 8: Switch Statements",
    "topic": "Control Flow Deep Challenge",
    "difficulty": "Easy",
    "tags": [
      "deep",
      "coding"
    ],
    "source": "auto",
    "description": "Build a student grade calculator:\n\n1. getGrade(int score) → String\n   - 90-100: \"A\"\n   - 80-89: \"B\"\n   - 70-79: \"C\"\n   - 60-69: \"D\"\n   - Below 60: \"F\"\n   - Outside 0-100: \"Invalid\"\n\n2. getDayType(String day) → String\n   - \"Monday\"...\"Friday\" → \"Weekday\"\n   - \"Saturday\", \"Sunday\" → \"Weekend\"\n   - anything else → \"Unknown\"\n   - Use switch statement (not if-else)\n\n3. getFizzBuzz(int n) → String\n   - Multiple of 15: \"FizzBuzz\"\n   - Multiple of 3: \"Fizz\"\n   - Multiple of 5: \"Buzz\"\n   - Otherwise: String.valueOf(n)",
    "hints": [
      "Use enhanced switch for getDayType()",
      "FizzBuzz: check 15 FIRST (before 3 and 5)",
      "int score → score / 10 gives you the tens digit"
    ],
    "testcases": [
      "getGrade(85) → \"B\"",
      "getDayType(\"Saturday\") → \"Weekend\"",
      "getFizzBuzz(15) → \"FizzBuzz\""
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-9-java-looping-concepts-bank",
    "title": "Design a BankAccount System (OOP)",
    "chapter": "Chapter 9: Java Looping Concepts",
    "topic": "OOP Deep Challenge",
    "difficulty": "Hard",
    "tags": [
      "deep",
      "coding",
      "oop",
      "interview"
    ],
    "source": "auto",
    "description": "Design three classes:\n\n1. BankAccount (base class)\n   - Fields: accountNumber (String), balance (double), ownerName (String)\n   - Constructor: BankAccount(String accountNumber, String ownerName)\n   - Methods: deposit(double amount), withdraw(double amount) throws InsufficientFundsException, getBalance(), toString()\n\n2. SavingsAccount extends BankAccount\n   - Extra field: interestRate (double)\n   - Method: applyInterest() — adds balance * interestRate to balance\n\n3. CurrentAccount extends BankAccount\n   - Extra field: overdraftLimit (double)\n   - Override withdraw() to allow overdraft up to overdraftLimit\n\nThis tests: inheritance, method overriding, constructors, exceptions, encapsulation.",
    "hints": [
      "Call super(accountNumber, ownerName) in subclass constructors",
      "In CurrentAccount.withdraw(), check balance + overdraftLimit >= amount",
      "Use private fields with public getters"
    ],
    "testcases": [
      "new SavingsAccount(\"S001\", \"Alice\").deposit(1000) → balance=1000",
      "applyInterest() at 5% on 1000 → balance=1050",
      "new CurrentAccount(\"C001\", \"Bob\", 500.0).withdraw(600) on empty account → throws if > overdraftLimit"
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-9-java-looping-concepts-shape",
    "title": "Polymorphism: Shape Area Calculator",
    "chapter": "Chapter 9: Java Looping Concepts",
    "topic": "Polymorphism Deep Challenge",
    "difficulty": "Hard",
    "tags": [
      "deep",
      "coding",
      "oop",
      "ocjp"
    ],
    "source": "auto",
    "description": "Create an abstract class Shape with:\n- abstract double area()\n- abstract double perimeter()\n- toString() returns \"ShapeType: area=X, perimeter=Y\"\n\nImplement:\n- Circle(double radius) — area = π*r², perimeter = 2*π*r\n- Rectangle(double width, double height)\n- Triangle(double a, double b, double c) — use Heron's formula for area\n\nStore shapes in a Shape[] array and print each. Demonstrate runtime polymorphism.\n\nOCJP focus: abstract classes, method overriding, runtime dispatch, array of parent type.",
    "hints": [
      "Math.PI for π, Math.sqrt() for Heron formula",
      "Shape[] shapes = {new Circle(5), new Rectangle(4,3)}; — runtime dispatch",
      "Abstract class cannot be instantiated directly"
    ],
    "testcases": [
      "new Circle(5).area() → ~78.54",
      "new Rectangle(4,3).perimeter() → 14.0",
      "Heron Triangle(3,4,5) → area = 6.0"
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-9-java-looping-concepts-patterns",
    "title": "Number Patterns & Algorithm Challenges",
    "chapter": "Chapter 9: Java Looping Concepts",
    "topic": "Loops Deep Challenge",
    "difficulty": "Medium",
    "tags": [
      "deep",
      "coding",
      "loops"
    ],
    "source": "auto",
    "description": "Implement these loop-based methods:\n\n1. isPrime(int n) → boolean — return true if n is prime\n2. fibonacci(int n) → int — return the nth Fibonacci number (0-indexed)\n3. sumDigits(int n) → int — return sum of all digits of n\n4. reverseNumber(int n) → int — reverse the digits of n\n5. printPyramid(int rows) — print a right-angled star pyramid\n\nAll without converting to String. Use only loops.\n\nThis tests: loop logic, integer math (%, /), algorithm thinking.",
    "hints": [
      "isPrime: check divisors from 2 to Math.sqrt(n)",
      "fibonacci(0)=0, fibonacci(1)=1, fibonacci(n)=f(n-1)+f(n-2)",
      "sumDigits: use % 10 to get last digit, / 10 to remove it"
    ],
    "testcases": [
      "isPrime(7) → true",
      "fibonacci(6) → 8",
      "sumDigits(123) → 6",
      "reverseNumber(1234) → 4321"
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-10-while-and-do-while-looping-concepts-bank",
    "title": "Design a BankAccount System (OOP)",
    "chapter": "Chapter 10: While And Do While Looping Concepts",
    "topic": "OOP Deep Challenge",
    "difficulty": "Hard",
    "tags": [
      "deep",
      "coding",
      "oop",
      "interview"
    ],
    "source": "auto",
    "description": "Design three classes:\n\n1. BankAccount (base class)\n   - Fields: accountNumber (String), balance (double), ownerName (String)\n   - Constructor: BankAccount(String accountNumber, String ownerName)\n   - Methods: deposit(double amount), withdraw(double amount) throws InsufficientFundsException, getBalance(), toString()\n\n2. SavingsAccount extends BankAccount\n   - Extra field: interestRate (double)\n   - Method: applyInterest() — adds balance * interestRate to balance\n\n3. CurrentAccount extends BankAccount\n   - Extra field: overdraftLimit (double)\n   - Override withdraw() to allow overdraft up to overdraftLimit\n\nThis tests: inheritance, method overriding, constructors, exceptions, encapsulation.",
    "hints": [
      "Call super(accountNumber, ownerName) in subclass constructors",
      "In CurrentAccount.withdraw(), check balance + overdraftLimit >= amount",
      "Use private fields with public getters"
    ],
    "testcases": [
      "new SavingsAccount(\"S001\", \"Alice\").deposit(1000) → balance=1000",
      "applyInterest() at 5% on 1000 → balance=1050",
      "new CurrentAccount(\"C001\", \"Bob\", 500.0).withdraw(600) on empty account → throws if > overdraftLimit"
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-10-while-and-do-while-looping-concepts-shape",
    "title": "Polymorphism: Shape Area Calculator",
    "chapter": "Chapter 10: While And Do While Looping Concepts",
    "topic": "Polymorphism Deep Challenge",
    "difficulty": "Hard",
    "tags": [
      "deep",
      "coding",
      "oop",
      "ocjp"
    ],
    "source": "auto",
    "description": "Create an abstract class Shape with:\n- abstract double area()\n- abstract double perimeter()\n- toString() returns \"ShapeType: area=X, perimeter=Y\"\n\nImplement:\n- Circle(double radius) — area = π*r², perimeter = 2*π*r\n- Rectangle(double width, double height)\n- Triangle(double a, double b, double c) — use Heron's formula for area\n\nStore shapes in a Shape[] array and print each. Demonstrate runtime polymorphism.\n\nOCJP focus: abstract classes, method overriding, runtime dispatch, array of parent type.",
    "hints": [
      "Math.PI for π, Math.sqrt() for Heron formula",
      "Shape[] shapes = {new Circle(5), new Rectangle(4,3)}; — runtime dispatch",
      "Abstract class cannot be instantiated directly"
    ],
    "testcases": [
      "new Circle(5).area() → ~78.54",
      "new Rectangle(4,3).perimeter() → 14.0",
      "Heron Triangle(3,4,5) → area = 6.0"
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-10-while-and-do-while-looping-concepts-patterns",
    "title": "Number Patterns & Algorithm Challenges",
    "chapter": "Chapter 10: While And Do While Looping Concepts",
    "topic": "Loops Deep Challenge",
    "difficulty": "Medium",
    "tags": [
      "deep",
      "coding",
      "loops"
    ],
    "source": "auto",
    "description": "Implement these loop-based methods:\n\n1. isPrime(int n) → boolean — return true if n is prime\n2. fibonacci(int n) → int — return the nth Fibonacci number (0-indexed)\n3. sumDigits(int n) → int — return sum of all digits of n\n4. reverseNumber(int n) → int — reverse the digits of n\n5. printPyramid(int rows) — print a right-angled star pyramid\n\nAll without converting to String. Use only loops.\n\nThis tests: loop logic, integer math (%, /), algorithm thinking.",
    "hints": [
      "isPrime: check divisors from 2 to Math.sqrt(n)",
      "fibonacci(0)=0, fibonacci(1)=1, fibonacci(n)=f(n-1)+f(n-2)",
      "sumDigits: use % 10 to get last digit, / 10 to remove it"
    ],
    "testcases": [
      "isPrime(7) → true",
      "fibonacci(6) → 8",
      "sumDigits(123) → 6",
      "reverseNumber(1234) → 4321"
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-11-class-object-static-and-instance-fields-bank",
    "title": "Design a BankAccount System (OOP)",
    "chapter": "Chapter 11: Class Object Static And Instance Fields",
    "topic": "OOP Deep Challenge",
    "difficulty": "Hard",
    "tags": [
      "deep",
      "coding",
      "oop",
      "interview"
    ],
    "source": "auto",
    "description": "Design three classes:\n\n1. BankAccount (base class)\n   - Fields: accountNumber (String), balance (double), ownerName (String)\n   - Constructor: BankAccount(String accountNumber, String ownerName)\n   - Methods: deposit(double amount), withdraw(double amount) throws InsufficientFundsException, getBalance(), toString()\n\n2. SavingsAccount extends BankAccount\n   - Extra field: interestRate (double)\n   - Method: applyInterest() — adds balance * interestRate to balance\n\n3. CurrentAccount extends BankAccount\n   - Extra field: overdraftLimit (double)\n   - Override withdraw() to allow overdraft up to overdraftLimit\n\nThis tests: inheritance, method overriding, constructors, exceptions, encapsulation.",
    "hints": [
      "Call super(accountNumber, ownerName) in subclass constructors",
      "In CurrentAccount.withdraw(), check balance + overdraftLimit >= amount",
      "Use private fields with public getters"
    ],
    "testcases": [
      "new SavingsAccount(\"S001\", \"Alice\").deposit(1000) → balance=1000",
      "applyInterest() at 5% on 1000 → balance=1050",
      "new CurrentAccount(\"C001\", \"Bob\", 500.0).withdraw(600) on empty account → throws if > overdraftLimit"
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-11-class-object-static-and-instance-fields-shape",
    "title": "Polymorphism: Shape Area Calculator",
    "chapter": "Chapter 11: Class Object Static And Instance Fields",
    "topic": "Polymorphism Deep Challenge",
    "difficulty": "Hard",
    "tags": [
      "deep",
      "coding",
      "oop",
      "ocjp"
    ],
    "source": "auto",
    "description": "Create an abstract class Shape with:\n- abstract double area()\n- abstract double perimeter()\n- toString() returns \"ShapeType: area=X, perimeter=Y\"\n\nImplement:\n- Circle(double radius) — area = π*r², perimeter = 2*π*r\n- Rectangle(double width, double height)\n- Triangle(double a, double b, double c) — use Heron's formula for area\n\nStore shapes in a Shape[] array and print each. Demonstrate runtime polymorphism.\n\nOCJP focus: abstract classes, method overriding, runtime dispatch, array of parent type.",
    "hints": [
      "Math.PI for π, Math.sqrt() for Heron formula",
      "Shape[] shapes = {new Circle(5), new Rectangle(4,3)}; — runtime dispatch",
      "Abstract class cannot be instantiated directly"
    ],
    "testcases": [
      "new Circle(5).area() → ~78.54",
      "new Rectangle(4,3).perimeter() → 14.0",
      "Heron Triangle(3,4,5) → area = 6.0"
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-13-exception-handling-validation",
    "title": "Custom Exception Hierarchy & Input Validation",
    "chapter": "Chapter 13: Exception Handling",
    "topic": "Exception Handling Deep Challenge",
    "difficulty": "Hard",
    "tags": [
      "deep",
      "coding",
      "exceptions",
      "interview"
    ],
    "source": "auto",
    "description": "Build a user registration validator:\n\n1. Create custom exceptions:\n   - ValidationException extends Exception (checked)\n   - InvalidAgeException extends ValidationException\n   - InvalidEmailException extends ValidationException\n\n2. Create UserValidator class with:\n   - validateAge(int age) throws InvalidAgeException — valid range: 18-120\n   - validateEmail(String email) throws InvalidEmailException — must contain @ and .\n   - validateUser(String email, int age) throws ValidationException — calls both\n\n3. In main(), demonstrate try-catch-finally with multiple catch blocks.\n\nFocus: checked exceptions, custom exception hierarchy, multi-catch, finally.",
    "hints": [
      "Checked exceptions must be declared with throws or caught",
      "multi-catch: catch (InvalidAgeException | InvalidEmailException e)",
      "finally runs even when exception is thrown"
    ],
    "testcases": [
      "validateAge(17) → InvalidAgeException",
      "validateEmail(\"notanemail\") → InvalidEmailException",
      "finally block always executes"
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-14-oop-concepts-design-a-shape-hierarchy-demonstrating-method-overriding",
    "title": "Design a Shape hierarchy demonstrating method overriding",
    "chapter": "Chapter 14: OOP Concepts",
    "topic": "Method Overriding In Java",
    "difficulty": "Hard",
    "tags": [
      "deep",
      "coding"
    ],
    "source": "custom",
    "description": "Create a Shape base class with area() and perimeter() methods. Override in Circle, Rectangle, and Triangle subclasses. Add a printInfo() method in Shape that calls area() and perimeter() — demonstrate polymorphism by storing all shapes in a Shape[] array and calling printInfo() on each.",
    "hints": [
      "area() and perimeter() in Shape should either be abstract or return 0.0. Each subclass overrides with real formula. Circle: area = π*r², perimeter = 2*π*r. Rectangle: area = l*w, perimeter = 2*(l+w)."
    ],
    "testcases": [
      "Shape[] shapes = {new Circle(5), new Rectangle(4,6), new Triangle(3,4,5)}; for(Shape s: shapes) s.printInfo(); — should print area and perimeter of each"
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-14-oop-concepts-demonstrate-the-field-hiding-vs-method-overriding-trap",
    "title": "Demonstrate the field hiding vs method overriding trap",
    "chapter": "Chapter 14: OOP Concepts",
    "topic": "Method Overriding In Java",
    "difficulty": "Hard",
    "tags": [
      "deep",
      "coding"
    ],
    "source": "custom",
    "description": "Create a Parent class with a String field name=\"Parent\" and void display(). Create Child extending Parent with name=\"Child\" and override display(). Show that: (1) Parent ref = new Child() — which name is accessed? (2) which display() is called? Explain why.",
    "hints": [
      "Fields use compile-time (reference) binding. Methods use runtime (object) binding. This is one of the most common OCJP traps."
    ],
    "testcases": [
      "Parent p = new Child(); p.name should be \"Parent\". p.display() should call Child's version."
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-14-oop-concepts-implement-a-polymorphic-payment-system-using-method-overriding",
    "title": "Implement a polymorphic payment system using method overriding",
    "chapter": "Chapter 14: OOP Concepts",
    "topic": "Method Overriding In Java",
    "difficulty": "Hard",
    "tags": [
      "deep",
      "coding"
    ],
    "source": "custom",
    "description": "Create Payment base class with processPayment(double amount). Override in CreditCardPayment, UPIPayment, NetBankingPayment. Each adds its own processing fee logic. Process a list of mixed payments polymorphically.",
    "hints": [
      "Store all payment types as Payment[] array. Call processPayment() on each — Java will dispatch to the right subclass at runtime. This is real-world polymorphism."
    ],
    "testcases": [
      "payments[0] = new CreditCardPayment(); payments[1] = new UPIPayment(); for(Payment p: payments) p.processPayment(1000.0);"
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-14-oop-concepts-bank",
    "title": "Design a BankAccount System (OOP)",
    "chapter": "Chapter 14: OOP Concepts",
    "topic": "OOP Deep Challenge",
    "difficulty": "Hard",
    "tags": [
      "deep",
      "coding",
      "oop",
      "interview"
    ],
    "source": "auto",
    "description": "Design three classes:\n\n1. BankAccount (base class)\n   - Fields: accountNumber (String), balance (double), ownerName (String)\n   - Constructor: BankAccount(String accountNumber, String ownerName)\n   - Methods: deposit(double amount), withdraw(double amount) throws InsufficientFundsException, getBalance(), toString()\n\n2. SavingsAccount extends BankAccount\n   - Extra field: interestRate (double)\n   - Method: applyInterest() — adds balance * interestRate to balance\n\n3. CurrentAccount extends BankAccount\n   - Extra field: overdraftLimit (double)\n   - Override withdraw() to allow overdraft up to overdraftLimit\n\nThis tests: inheritance, method overriding, constructors, exceptions, encapsulation.",
    "hints": [
      "Call super(accountNumber, ownerName) in subclass constructors",
      "In CurrentAccount.withdraw(), check balance + overdraftLimit >= amount",
      "Use private fields with public getters"
    ],
    "testcases": [
      "new SavingsAccount(\"S001\", \"Alice\").deposit(1000) → balance=1000",
      "applyInterest() at 5% on 1000 → balance=1050",
      "new CurrentAccount(\"C001\", \"Bob\", 500.0).withdraw(600) on empty account → throws if > overdraftLimit"
    ],
    "selfCheck": true
  },
  {
    "id": "deep-chapter-14-oop-concepts-shape",
    "title": "Polymorphism: Shape Area Calculator",
    "chapter": "Chapter 14: OOP Concepts",
    "topic": "Polymorphism Deep Challenge",
    "difficulty": "Hard",
    "tags": [
      "deep",
      "coding",
      "oop",
      "ocjp"
    ],
    "source": "auto",
    "description": "Create an abstract class Shape with:\n- abstract double area()\n- abstract double perimeter()\n- toString() returns \"ShapeType: area=X, perimeter=Y\"\n\nImplement:\n- Circle(double radius) — area = π*r², perimeter = 2*π*r\n- Rectangle(double width, double height)\n- Triangle(double a, double b, double c) — use Heron's formula for area\n\nStore shapes in a Shape[] array and print each. Demonstrate runtime polymorphism.\n\nOCJP focus: abstract classes, method overriding, runtime dispatch, array of parent type.",
    "hints": [
      "Math.PI for π, Math.sqrt() for Heron formula",
      "Shape[] shapes = {new Circle(5), new Rectangle(4,3)}; — runtime dispatch",
      "Abstract class cannot be instantiated directly"
    ],
    "testcases": [
      "new Circle(5).area() → ~78.54",
      "new Rectangle(4,3).perimeter() → 14.0",
      "Heron Triangle(3,4,5) → area = 6.0"
    ],
    "selfCheck": true
  }
];
