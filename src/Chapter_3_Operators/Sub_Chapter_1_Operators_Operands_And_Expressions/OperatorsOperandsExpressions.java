package Chapter_3_Operators.Sub_Chapter_1_Operators_Operands_And_Expressions;
// Operators in Java are special symbols that perform specific operations on one or more values (operands) and produce a result.
// An operand is any value, variable, or expression that an operator acts upon. Example: in '15 + 12', 15 and 12 are operands, + is the operator.
// An expression is a combination of variables, literals, operators, and method calls that evaluates to a single value.
// Java supports arithmetic, comparison (relational), logical, bitwise, assignment, and other operators.
// Shorthand (compound assignment) operators combine an operation with assignment: += (add and assign), -= (subtract and assign), *= (multiply and assign), /= (divide and assign).
// Increment (++) adds 1 to a variable: myVar++ is equivalent to myVar = myVar + 1.
// Decrement (--) subtracts 1 from a variable: myVar-- is equivalent to myVar = myVar - 1.
// Operator precedence determines the order in which operators are evaluated in an expression (like BODMAS/PEMDAS in maths). Use parentheses to override precedence.
// Reference for operator precedence: cs.bilkent.edu.tr/~guvenir/courses/CS101/op_precedence.html
/*
*  Summary of Operators
*
* 1) Operator --> (+) plus operator
*  For Numeric types --> Addition
*  For char          --> Addition
*  For boolean       --> Not Applicable
*  For String        --> Concatenation
*
* 2) Operator --> (-) Subtraction
*  For Numeric types --> Subtraction
*  For char          --> Subtraction
*  For boolean       --> Not Applicable
*  For String        --> Not Applicable
*
* 3) Operator --> (*) Multiplication
*  For Numeric Types  --> Multiplication
*  For char           --> Multiplication
*  For boolean        --> Not Applicable
*  For String         --> Not Applicable
*
* 4) Operator --> ( / ) Division
*  For Numeric Types --> Division
*  For char          --> Division
*  For boolean       --> Not Applicable
*  For String        --> Not Applicable
*
* 5) Operator --> ( % ) Modulus (Remainder)
*  For Numeric Types --> Remainder (Modulus)
*  For char          --> Remainder (Modulus)
*  For boolean       --> Not Applicable
*  For String        --> Not Applicable
*
*
* */

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

public class OperatorsOperandsExpressions {

    public static void main(String[] args) {

        int myVar = 15 + 12; // 15 and 12 are operands; + is the addition operator.
        double hoursWorked = 9.5d;
        double hourlyRate = 5d;
        double mySalary = hoursWorked * hourlyRate; // hoursWorked and hourlyRate are operands; * is the multiplication operator.

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
