package Chapter_3_Operators.Sub_Chapter_1_Operators_Operands_And_Expressions;
// Core Concepts: Operators, Operands & Expression Evaluation
// - Operator: A special symbol that performs operations on one or more operands and evaluates to a result.
// - Operand: A value, variable, or sub-expression acted upon by an operator (e.g. in `15 + 12`, `15` and `12` are operands).
// - Expression: A combination of variables, literals, operators, and method calls that evaluates to a single output value.
//
// Operator Summary Table:
// | Operator | Target Type | Behavior | Code Example |
// |---|---|---|---|
// | `+` | Numeric / String | Addition for numbers, Concatenation if any operand is String | `10 + 20` -> `30`, `"Score: " + 10` -> `"Score: 10"` |
// | `-` | Numeric | Subtraction | `20 - 5` -> `15` |
// | `*` | Numeric | Multiplication | `4 * 5` -> `20` |
// | `/` | Numeric | Division (integer division truncates decimal part) | `10 / 3` -> `3` |
// | `%` | Numeric | Modulus (returns division remainder) | `10 % 3` -> `1` |
//
// Critical Gotchas & Precedence Rules:
// - Left-to-right evaluation for `+`: As soon as a String operand is encountered, all subsequent `+` operations become String concatenation.
// - Compound Assignment (`+=`, `-=`, `*=`, `/=`): Performs implicit narrowing cast back to the target variable's type.
// - Equality (`==`) vs Assignment (`=`): `==` compares primitive values or reference addresses; `=` assigns a new value.
//
// Operator Categories (named by how many operands they take):
// - Unary: one operand, such as `!flag`, `-5`, or `x++`
// - Binary: two operands, such as `a + b`, `x > y`, or `p && q`
// - Ternary: three operands, such as `condition ? valueIfTrue : valueIfFalse`
//
// Complete Operator Reference:
// | Category | Operators | Notes |
// |---|---|---|
// | Arithmetic | `+ - * / %` | `%` returns the remainder. `int / int` drops the fraction. |
// | Unary | `+ - ++ -- !` | `++` and `--` change the variable itself by 1. |
// | Relational | `< > <= >=` | Produces a boolean. Cannot be chained, so `a > b > c` is an error. |
// | Equality | `== !=` | On primitives it compares values; on objects it compares references. |
// | Logical | `&&` `&` `!` | Short-circuiting AND is `&&`; `&` always evaluates both sides. |
// | Assignment | `= += -= *= /= %=` | The compound forms include an implicit cast back to the left-hand type. |
// | Ternary | `?:` | Both branches must produce a compatible type. |
//
// Note :- logical OR works the same way as logical AND. Double-pipe short-circuits, so it stops at the first true, while the single-pipe form always evaluates both sides.
//
// Precedence (highest first, so work out the top row before the rows below it):
// 1) unary operators: increment, decrement, logical NOT, unary plus and minus
// 2) multiplication, division and remainder
// 3) addition and subtraction
// 4) relational: less than, greater than, less-or-equal, greater-or-equal
// 5) equality: double-equals and not-equals
// 6) logical AND
// 7) logical OR
// 8) ternary
// 9) assignment, including the compound forms
// Note :- when in doubt, add parentheses. They cost nothing and they remove the doubt.
//
// Worked examples :-
// 1) Precedence decides the result :-
// System.out.println(2 + 3 * 4);        // prints 14, because * binds tighter than +
// System.out.println((2 + 3) * 4);      // prints 20, the parentheses override precedence
//
// 2) Prefix or postfix changes the value you get back :-
// int i = 5;
// System.out.println(i++);              // prints 5, then i becomes 6. Use the value, then increment.
// System.out.println(++i);              // prints 7. Increment first, then use the value.
// Note :- on a line by itself, i++ and ++i do the same thing. The difference only shows when the value is used, such as in a print, an assignment, or an array index.
//
// 3) Integer division truncates, it does not round :-
// System.out.println(10 / 3);           // prints 3, not 3.33
// System.out.println(10 % 3);           // prints 1, the remainder
// System.out.println(-10 % 3);          // prints -1. The sign follows the left operand, not the divisor.
// Note :- to get 3.33, make one operand a decimal type: 10 / 3.0
//
// 4) Dividing by zero behaves differently for int and double :-
// System.out.println(10 / 0);           // ArithmeticException: / by zero
// System.out.println(10.0 / 0);         // prints Infinity, and throws no exception
//
// 5) The compound form carries its own cast :-
// byte b = 10;
// b += 5;                               // fine, += casts the int result back to byte
// b = b + 5;                            // compile error, because b + 5 is an int
// Note :- this is the reason the two lines above are not interchangeable.
//
// 6) A String turns everything after it into text :-
// System.out.println(10 + 20 + "Java");     // prints 30Java
// System.out.println("Java" + 10 + 20);     // prints Java1020
// System.out.println("Java" + (10 + 20));   // prints Java30, the parentheses force the addition first
//
// Parameter notes :-
// - divisor (the value on the right of `/` and `%`): choose a non-zero divisor for int arithmetic, because integer division by zero throws ArithmeticException. For double, the result is Infinity instead.
// - leftOperand (`10 + 20`, `"Score: " + 10`): the operand you read first decides the operation. If it is a String, every `+` after it concatenates; if it is numeric, `+` adds until a String appears.


// @quiz (INTERVIEW TRAP) What is the output of: System.out.println(10 + 20 + "Java");
// @answer Output: 30Java
// @answer + is left-to-right: 10 + 20 = 30 (arithmetic, both ints), then 30 + "Java" = "30Java" (String concat).

// @quiz (INTERVIEW TRAP) What is the output of: System.out.println("Java" + 10 + 20);
// @answer Output: Java1020 (NOT Java30)
// @answer "Java" + 10 = "Java10" (String concat), then "Java10" + 20 = "Java1020". Once a String is the left operand, all + after it are concatenation.

// @quiz (INTERVIEW TRAP) What is the output of: System.out.println("Java" + (10 + 20));
// @answer Output: Java30
// @answer Parentheses force (10 + 20) to be evaluated as arithmetic first = 30. Then "Java" + 30 = "Java30".
// @answer This is the FIX when you want arithmetic inside a String expression: wrap with parentheses.

// @quiz (INTERVIEW) What is the golden rule for the + operator in Java when Strings are involved?
// @answer Java evaluates + strictly left to right. If BOTH operands are numeric, + is arithmetic addition. The moment one operand is a String, + becomes String concatenation for that operation and all subsequent ones in the same expression.
// @answer Use parentheses to control evaluation order: "Score: " + (a + b) gives arithmetic sum. "Score: " + a + b gives two separate concatenations.

// @quiz (INTERVIEW TRAP) What is wrong with writing if (x = 5) instead of if (x == 5)?
// @answer = is the assignment operator, while == is the equality comparison operator.
// @answer With int x, if (x = 5) does not compare anything; it tries to assign 5 to x and causes a compile-time error because if requires a boolean expression, not an int.
// @answer The correct comparison is if (x == 5), which evaluates to true only when x currently holds the value 5.

// @quiz (INTERVIEW TRAP) What is the output of: int x = 10; String result = (x > 5) ? "big" : "small"; System.out.println(result);
// @answer Output: big
// @answer The ternary operator evaluates the condition x > 5. Since 10 > 5 is true, Java chooses the first expression, which is "big".

// @quiz (INTERVIEW) Why does byte b = 10; b += 5; compile, but b = b + 5; does not?
// @answer b += 5 is a compound assignment, and Java automatically inserts an implicit cast back to byte after doing the addition.
// @answer b = b + 5 does not compile because b + 5 is promoted to int, and Java will not assign that int back to byte without an explicit cast.
// @answer After b += 5, the value of b becomes 15.

// @quiz (INTERVIEW) What is the difference between & and && when used with boolean expressions?
// @answer && is the short-circuit logical AND. If the left side is false, Java skips evaluating the right side.
// @answer & on booleans still performs AND, but it always evaluates BOTH sides even when the left side is false.
// @answer This matters when the right side has side effects or could throw an exception, such as checking obj != null && obj.isReady().

// @quiz (INTERVIEW TRAP) How do the operands you choose affect the + operator?
// @answer If both operands are numeric, + performs addition. If either operand is a String, + performs concatenation for that operation.
//
// @quiz (OCJP) What is important about the right-hand value in myVar += 2?
// @answer The right-hand value is the amount added before assigning back to myVar; compound assignment also performs an implicit cast when needed.
// @quiz (INTERVIEW, EASY) Which statement correctly defines an operator, an operand, and an expression?
// @option An operator is the symbol that performs an operation, an operand is a value or variable it acts on, and an expression is a combination that evaluates to one value. [correct]
// @option An operator is the value being calculated, and an operand is the symbol that calculates it.
// @option An expression is any line of code that ends with a semicolon.
// @option An operand is always a literal value and can never be a variable or a method call.
// @explain In 15 + 12, the + is the operator and 15 and 12 are the operands. The whole thing is an expression, because it evaluates to a single value, 27.
// @why B: the two are the other way round. The symbol is the operator and the values are the operands.
// @why C: a line ending in a semicolon is a statement. An expression is defined by producing a value, not by the semicolon.
// @why D: an operand may be a literal, a variable, or a whole sub-expression such as (a + b).

// @quiz (INTERVIEW TRAP, MEDIUM) Reading strictly left to right, what is printed by this statement?
// @code System.out.println(10 + 20 + "Java");
// @option 30Java [correct]
// @option 1020Java
// @option Java30
// @option It does not compile, because + cannot mix int and String.
// @explain Java evaluates + strictly from left to right. 10 + 20 are both int, so that is arithmetic and gives 30. Then 30 + "Java" involves a String, so it becomes concatenation and produces 30Java.
// @why B: 1020Java is what you get when the String appears first, as in "Java" + 10 + 20.
// @why C: the string is on the right here, so it cannot come out in front of the number.
// @why D: + with a String operand is legal. It concatenates rather than adding.

// @quiz (INTERVIEW TRAP, MEDIUM) What is printed when the String operand comes first?
// @code System.out.println("Java" + 10 + 20);
// @option Java1020 [correct]
// @option Java30
// @option 30Java
// @option It does not compile.
// @explain Once the left operand is a String, every following + is concatenation. "Java" + 10 gives "Java10", and "Java10" + 20 gives "Java1020".
// @why B: to get Java30 the addition must be forced first with parentheses: "Java" + (10 + 20).
// @why C: the String is first, so the digits cannot appear before the word.
// @why D: this is valid Java. It simply concatenates instead of adding.

// @quiz (OCJP, HARD) Why does `byte b = 10; b += 5;` compile, while `b = b + 5;` does not?
// @option Compound assignment performs an implicit narrowing cast back to byte, while b + 5 is promoted to int and cannot be assigned to byte without a cast. [correct]
// @option += is only allowed on byte variables.
// @option b + 5 is evaluated at runtime, so the compiler cannot check it.
// @option The two forms are identical, and both compile.
// @explain A compound assignment such as += is defined to perform the arithmetic and then cast the result back to the type of the left-hand variable. A plain addition promotes byte to int, and Java will not narrow back automatically.
// @why B: += works on every numeric type, not only byte.
// @why C: the compiler resolves types at compile time, which is exactly why it rejects the plain addition.
// @why D: only the compound form compiles. The plain form is a compile-time error unless you write b = (byte)(b + 5);

// @quiz (OCJP, HARD) What is the difference between & and && for boolean expressions?
// @option && short-circuits, so the right side is skipped when the left side is false. & always evaluates both sides. [correct]
// @option & short-circuits, and && always evaluates both sides.
// @option Both short-circuit in exactly the same way.
// @option && can only be used with numbers, not with booleans.
// @explain Short-circuiting is what makes a guard such as obj != null && obj.isReady() safe. With &, the right side would still run and could throw a NullPointerException.
// @why B: the behaviour is the other way round. & is the non-short-circuiting form.
// @why C: they differ precisely in whether the right operand is evaluated.
// @why D: && is a logical operator for booleans. The bitwise form & also works on integers, but that is a separate use.

// @quiz (INTERVIEW, MEDIUM) What are the results of 10 / 3 and 10 % 3?
// @option 3 and 1 [correct]
// @option 3.33 and 1
// @option 3 and 0
// @option 1 and 3
// @explain With two int operands, / is integer division and discards the remainder, so 10 / 3 is 3. The % operator returns that remainder, which is 1.
// @why B: 10 / 3 cannot produce 3.33, because both operands are int.
// @why C: the remainder is 1, not 0. 3 * 3 is 9, and 10 - 9 = 1.
// @why D: the two results are swapped. / gives the whole part and % gives the remainder.

// @quiz (OCJP, HARD) What happens with `int x = 5; if (x = 5) { ... }`?
// @option It does not compile, because x = 5 is an int assignment and if requires a boolean condition. [correct]
// @option It compiles and the block always runs.
// @option It compiles but the block never runs.
// @option It compiles and prints a warning only.
// @explain = assigns a value, while == compares. The assignment x = 5 has the type int, and a Java if requires a boolean, so the compiler rejects it. This is why the mistake is caught rather than silently misbehaving.
// @why B: it never reaches runtime. The type error is found while compiling.
// @why C: the code does not compile at all, so nothing runs.
// @why D: Java reports this as an error, not a warning.

// @quiz (OCJP, MEDIUM) What is printed by this statement?
// @code System.out.println(2 + 3 * 4);
// @option 14, because * is evaluated before +. [correct]
// @option 20, because + is evaluated first.
// @option 24, because the expression is read left to right.
// @option It does not compile without parentheses.
// @explain Java applies operator precedence: multiplication binds more tightly than addition. So 3 * 4 is worked out first, giving 12, and then 2 is added.
// @why B: + is lower precedence than *, so it cannot run first.
// @why C: left-to-right order applies between operators of the same precedence, which these are not.
// @why D: the expression is perfectly legal, and parentheses are only needed to change the order.

// @quiz (OCJP, HARD) Does this condition compile?
// @code int a = 5, b = 3, c = 1;
// @code if (a > b > c) { System.out.println("yes"); }
// @option No. a > b produces a boolean, and a boolean cannot be compared with c using >. [correct]
// @option Yes, and it prints yes.
// @option Yes, and it prints nothing.
// @option Yes, because Java compares all three values at once.
// @explain The > operator produces a boolean. The second > then tries to compare that boolean with the int c, and Java allows only numeric operands there. The intent has to be written as a > b && b > c.
// @why B: the compiler rejects the expression, so nothing runs.
// @why C: it never reaches runtime for the same reason.
// @why D: Java has no three-way comparison like that. You must chain with &&.

// @quiz (INTERVIEW, MEDIUM) Does this line compile?
// @code int x = true ? 1 : "one";
// @option No. The two branches have incompatible types, int and String. [correct]
// @option Yes, and x becomes 1.
// @option Yes, and x becomes the text "one".
// @option Yes, because Java converts the String to a number.
// @explain The ternary operator produces one value, so both branches must have a compatible type. 1 is an int and "one" is a String, which means there is no common type for the result.
// @why B: it does not compile, so nothing is assigned.
// @why C: the same type problem stops it, and "one" could never go into an int.
// @why D: Java does not convert text to a number automatically. That is what Integer.parseInt is for.

// @quiz (OCJP, MEDIUM) What is printed by this code?
// @code String s = "Total: ";
// @code s += 10 + 20;
// @code System.out.println(s);
// @option Total: 30, because 10 + 20 is worked out before the concatenation. [correct]
// @option Total: 1020, because += concatenates everything.
// @option Total: 30 is not possible, since += only concatenates text.
// @option It does not compile, because += cannot be used with a String.
// @explain The right-hand side is evaluated first. Both 10 and 20 are int, so that part is arithmetic and gives 30. Only then is 30 appended to the String, which is why the result is Total: 30.
// @why B: 1020 would need the String to be involved in the addition, which it is not.
// @why C: += performs concatenation for a String, and the numeric part is already resolved.
// @why D: += with a String is legal and is one of the most common uses of compound assignment.

// @quiz (INTERVIEW, MEDIUM) What does the ! operator do, and what is printed?
// @code boolean ready = false;
// @code System.out.println(!ready);
// @option true, because ! inverts a boolean value. [correct]
// @option false, because ! leaves the value unchanged.
// @option It does not compile, because ! needs a number.
// @option -1, because ! negates the value numerically.
// @explain ! is the logical NOT operator. It turns true into false and false into true, and it works only on boolean expressions.
// @why B: inversion is exactly what it does, so the value must change.
// @why C: ! requires a boolean, and ready is one.
// @why D: there is no numeric negation for boolean. For an int, the unary - is the operator that flips the sign.

// @takeaway An operator is the symbol that does the work, such as `+` or `*`, and the values it works on are called operands. Put them together and you have an expression, which always works out to one value: `15 + 12` is an expression worth 27.
// @takeaway `+` does two different jobs. While both sides are numbers it adds, so `10 + 20` is 30. The moment one side is text it joins instead, so `10 + 20 + "Java"` gives `30Java` because the two numbers were added first, while `"Java" + 10 + 20` gives `Java1020` because the text came first.
// @takeaway Dividing two whole numbers throws the fraction away: `10 / 3` is 3 and not 3.33. The `%` operator hands you that thrown-away remainder instead, so `10 % 3` is 1. Write `10 / 3.0` when you want the decimal answer.
// @takeaway `b += 5` is not just a shorthand for `b = b + 5`. The compound form quietly converts the result back to the type on the left, which is why `byte b = 10; b += 5;` compiles while `b = b + 5;` does not: `b + 5` has become an int, and Java will not put an int back into a byte unless it is told to.
// @takeaway Multiply and divide happen before you add and subtract, so `2 + 3 * 4` is 14 and not 20. `i++` uses the value and then increases it, while `++i` increases first and then uses it: with `i = 5`, printing `i++` shows 5, and printing `++i` afterwards shows 7.
// @gotcha Dividing an int by zero throws ArithmeticException, but dividing a double by zero gives Infinity and no error at all, so the same mistake behaves differently depending on the type.
// @gotcha `a > b > c` does not compile. `a > b` gives you a boolean, and a boolean cannot be compared with a number using `>`. Write it as `a > b && b > c`.
// @gotcha `=` puts a value into a variable, and `==` asks whether two values are the same. Because `x = 5` produces an int, `if (x = 5)` is a compile error, which is Java catching a mistake that would go unnoticed in other languages.
// @gotcha A remainder keeps the sign of the number on the left, not the divisor: `-10 % 3` is -1 and not 1.

// @quiz (OCJP, MEDIUM) What is printed by this code?
// @code int i = 5;
// @code System.out.println(i++);
// @code System.out.println(++i);
// @option 5 and then 7 [correct]
// @option 5 and then 6
// @option 6 and then 6
// @option 6 and then 7
// @explain i++ uses the current value and then increases it, so the first print shows 5 and i becomes 6. ++i increases first, so the second print shows 7.
// @why B: the prefix form adds one to 6 before the value is used, so it prints 7.
// @why C: i++ prints the value as it was, which is 5, and only then increments.
// @why D: the postfix form prints first and increments afterwards, so the first output is 5.

// @quiz (OCJP, MEDIUM) This program compiles. What happens when it runs?
// @code int result = 10 / 0;
// @option It throws ArithmeticException at run time. [correct]
// @option It prints Infinity.
// @option It does not compile, because division by zero is illegal.
// @option It prints 0.
// @explain Integer division by zero is undefined, so the JVM throws ArithmeticException. Dividing by the double 0.0 would give Infinity instead.
// @why B: Infinity is what double division by zero gives. That is not the behaviour for int.
// @why C: division by a constant zero is accepted by the compiler and fails when it runs.
// @why D: Java does not define 10 / 0 as zero. It stops the program with an exception.

// @quiz (OCJP, HARD) What is printed by these two statements?
// @code System.out.println(-10 % 3);
// @code System.out.println(10 % -3);
// @option -1 and 1, because a remainder takes the sign of the left operand. [correct]
// @option 1 and -1, because a remainder takes the sign of the right operand.
// @option -1 and -1, because a remainder is always negative.
// @option 2 and 2, because Java keeps only the positive remainder.
// @explain The % operator returns the remainder after division that truncates towards zero. -10 / 3 is -3, leaving -1, and 10 / -3 is -3, leaving 1.
// @why B: the sign of the right operand is not what decides it. The dividend decides the sign.
// @why C: Java does not force the remainder to be negative.
// @why D: 2 would be the remainder for a divisor of 4. Here the divisor is 3, so the remainder is 1 or -1.

// @quiz (OCJP, HARD) What is printed by this code?
// @code int x = 0;
// @code boolean r = false && (++x > 0);
// @code System.out.println(x);
// @option 0, because && stops as soon as the left side is false. [correct]
// @option 1, because ++x is evaluated before the right side is checked.
// @option false, because r is false.
// @option It does not compile, because a boolean cannot be assigned to x.
// @explain && short-circuits: when the left operand is false the result must be false, so the right operand is never evaluated. That is why ++x never runs.
// @why B: the right operand is skipped, so the increment never happens. With & it would run and x would be 1.
// @why C: false is the value of r, but the code prints x, which is an int.
// @why D: the println takes x, which is an int. r is never printed.

// @quiz (OCJP, MEDIUM) What is printed by this code?
// @code System.out.println(10.0 / 0);
// @option Infinity, because floating-point division by zero is defined by the IEEE standard. [correct]
// @option It throws ArithmeticException.
// @option It does not compile, because a double cannot be divided by an int zero.
// @option NaN, because the result is not a number.
// @explain The int 0 is widened to 0.0, so this is double division. In IEEE 754 that gives Infinity rather than an exception.
// @why B: ArithmeticException comes from integer division by zero, as in 10 / 0.
// @why C: the int is widened to double automatically, so the division is legal.
// @why D: NaN comes from 0.0 / 0.0. A non-zero value divided by zero gives Infinity.

// @quiz (OCJP, HARD) What is printed by this code?
// @code int x = 2;
// @code x *= 3 + 1;
// @code System.out.println(x);
// @option 8, because the whole right-hand side is worked out first: x = x * (3 + 1). [correct]
// @option 7, because the multiplication happens first: x = x * 3 + 1.
// @option 6, because the +1 is ignored by the compound operator.
// @option It does not compile, because *= needs parentheses.
// @explain A compound assignment evaluates its right-hand side completely and then applies the operator to the variable. This is x = x * (3 + 1), which is 2 * 4.
// @why B: the compound form wraps the whole right-hand side, so it is not x * 3 + 1.
// @why C: the +1 is part of the right-hand side and is used.
// @why D: no parentheses are needed here, which is exactly what makes the result surprising.

public class OperatorsOperandsExpressions {

    public static void main(String[] args) {

        int myVar = 15 + 12; // 15 and 12 are operands; + is the addition operator.
        double hoursWorked = 9.5d;
        double hourlyRate = 5d;
        double mySalary = hoursWorked * hourlyRate; // hoursWorked and hourlyRate are operands; * is the multiplication operator.
        System.out.println(mySalary);

        // myVar = myVar + 1 is equivalent to myVar++ (increment by 1).
        myVar++;
        System.out.println(myVar);

        // myVar = myVar - 1 is equivalent to myVar-- (decrement by 1).
        myVar--;
        System.out.println(myVar);

        // myVar = myVar + 2 is equivalent to myVar += 2.
        myVar += 2;
        System.out.println(myVar);

        // myVar = myVar - 2 is equivalent to myVar -= 2.
        myVar -= 2;
        System.out.println(myVar);

        // myVar = myVar * 10 is equivalent to myVar *= 10.
        myVar *= 10;
        System.out.println(myVar);

        // myVar = myVar / 10 is equivalent to myVar /= 10.
        myVar /= 10;
        System.out.println(myVar);

    }
}
