package Chapter_5_If_Else_Statements.Sub_Chapter_1_If_Then_Else_Control_Statement;
// Conditional logic (also called control flow) lets your program make decisions: execute different code depending on whether a condition is true or false.
// The if statement evaluates a boolean expression. If the expression is true, the code block runs. If false, it is skipped.
// IMPORTANT: Do NOT put a semicolon after if(condition) — that would end the statement before the code block, creating an empty if.
// Always use curly braces { } with if — even for single-line bodies. It prevents bugs when you add more code later.
// Comparison operators for conditions: == (equal to), != (not equal to), > (greater than), < (less than), >= (greater or equal), <= (less or equal).
// Logical AND (&&): both conditions must be true. Example: (score >= 50) && (score < 100)
// Logical OR (||): at least one condition must be true. Example: (score < 10) || (score > 90)
// The NOT operator (!): inverts a boolean. !true = false. !false = true. Example: if(!isAlien) means "if isAlien is false".
// The assignment operator (=) assigns a value. The equality operator (==) compares values. Never use = inside a condition — use == instead.
// Ternary Operator: a compact if-else in a single expression. Syntax: condition ? valueIfTrue : valueIfFalse
// Example from code below: boolean wasCar = isCar ? true : false; — if isCar is true, wasCar = true; else wasCar = false.
// Reference for operator precedence: cs.bilkent.edu.tr/~guvenir/courses/CS101/op_precedence.html
/*
    Ternary Operator Example :-

    int ageOfClient = 20;

    boolean isEighteenOrOver = (ageOfClient == 20) ? true : false;

    Operand one - ageOfClient == 20, in this case we are checking the condition. It will return either true or false.

    Operand two - true, is the value to be assigned to the variable isEighteenOrOver if the condition above is true.

    Operand three - false. is the value to be assigned to the variable isEighteenOrOver if the condition above is false.

 */

// @quiz (INTERVIEW) What is the dangling else problem in Java?
// @answer A dangling else happens when nested if statements omit braces and it is unclear which if the else belongs to.
// @answer In Java, else always matches the nearest unmatched if.

// @quiz (INTERVIEW) Can an if condition use non-boolean types in Java?
// @answer No. Java requires the condition to be a boolean expression.
// @answer Unlike C, Java does not allow numbers or object references directly as if conditions.

// @quiz (INTERVIEW) When should you use the ternary operator instead of if-else?
// @answer Use the ternary operator for short value-producing decisions, such as assigning one of two values.
// @answer Use if-else when the logic is longer or you need multiple statements.

// @quiz (INTERVIEW) Why are braces recommended even for a single if statement?
// @answer Braces make the controlled block explicit and prevent bugs when more lines are added later.
// @answer They also make nested conditions easier to read.

// @quiz (OCJP) What happens here: int x = 5; if (x = 5) { System.out.println("Hi"); }?
// @answer It does not compile because x = 5 is an int assignment expression, not a boolean condition.
// @answer Java if conditions must evaluate to true or false.

// @quiz (OCJP) How many statements does if control here: if (true) System.out.println("A"); System.out.println("B");?
// @answer Only the first statement after if is controlled by the condition.
// @answer The second println is outside the if unless braces are used.
// Parameter notes (what each method/constructor argument means and how to choose it):
// - main(String[] args): args contains command-line arguments in the order typed after the class name; choose values only when the program is launched from a terminal or run configuration.
// - System.out.println(String x): x is the text to print followed by a new line; choose a clear message that explains which branch ran. Passing null prints the literal text "null".
// - The ternary expression condition ? valueIfTrue : valueIfFalse has three operands: the boolean condition to test, the value chosen when true, and the value chosen when false; choose compatible result types.
// - if(condition) and logical operators such as && and || are not method calls, but their boolean expressions act like decision inputs; important: choose expressions that evaluate to true or false only.
//
// @quiz (INTERVIEW) In main(String[] args), what does the args parameter contain?
// @answer It contains command-line arguments as a zero-based String array, in the same order the user supplied them when starting the program.
//
// @quiz (INTERVIEW TRAP) What parameter value does System.out.println(null) print?
// @answer It prints the literal text "null" followed by a newline; careful, it does not print an empty line.
//
// @quiz (OCJP) In condition ? a : b, what do the second and third operands mean?
// @answer The second operand is the value used when the condition is true, and the third operand is the value used when the condition is false.
// @quiz (OCJP, HARD) What does this code print?
// @code int x = 5;
// @code if (x > 3) ; { System.out.println("Hello"); }
// @option Hello, and it is printed even if the condition were false. [correct]
// @option Nothing at all.
// @option It does not compile.
// @option Hello, but only when x > 3 is true.
// @explain The semicolon straight after the condition ends the if statement, creating an empty body. The braced block that follows is then a separate statement that always runs. This is why a semicolon must never be placed after if (condition).
// @why B: the block is no longer controlled by the if, so it does run.
// @why C: it is legal Java, which is exactly what makes the mistake so easy to miss.
// @why D: the block is outside the if, so the condition no longer affects it.

// @quiz (INTERVIEW, EASY) Why is it recommended to always use braces with if, even for a single statement?
// @option Braces make the controlled block explicit and prevent bugs when more lines are added later. [correct]
// @option Braces make the code run faster.
// @option Java requires braces, otherwise the code will not compile.
// @option Braces are needed only when the condition is complex.
// @explain Without braces, only the single next statement belongs to the if. A later edit that adds a line is easy to get wrong, and the second line silently falls outside the condition.
// @why B: braces have no effect on execution speed.
// @why C: braces are optional for a single statement, which is the reason the guidance exists.
// @why D: the risk applies to simple conditions too.

// @quiz (INTERVIEW, MEDIUM) In the ternary expression condition ? a : b, what are the three parts?
// @option A boolean condition, the value used when it is true, and the value used when it is false. [correct]
// @option An assignment, a variable, and a literal.
// @option Two conditions and one value.
// @option A method call, its argument, and its return value.
// @explain The ternary operator is a compact if-else that produces a value. The condition must be boolean, and the two result expressions should be of compatible types.
// @why B: there is no assignment in the operator itself.
// @why C: only the first part is a condition; the other two are the results.
// @why D: it is an operator, not a method call.

// @quiz (OCJP, HARD) With braces omitted, which if does an else belong to?
// @code if (a) if (b) x = 1; else x = 2;
// @option The inner if, because else always binds to the nearest unmatched if. [correct]
// @option The outer if, because else always belongs to the first if.
// @option It does not compile without braces.
// @option It is ambiguous and the compiler picks at random.
// @explain This is the dangling else problem. Java resolves it by binding else to the closest if that does not already have one, which is the inner if here. Braces remove the doubt.
// @why B: binding to the outer if would change the meaning, and Java does not do that.
// @why C: it compiles, and it compiles in a way that often surprises people.
// @why D: the rule is fixed and deterministic, not random.

// @quiz (OCJP, MEDIUM) Can a Java if condition use a number or an object reference directly?
// @option No. The condition must be a boolean expression, unlike C where a number can be tested. [correct]
// @option Yes, where 0 means false and any other number means true.
// @option Yes, where null means false.
// @option Yes, but only for int values.
// @explain Java is strict here. Something like if (1) is a compile-time error, and it must be written as a real comparison such as if (x != 0).
// @why B: that rule belongs to C and C++, not to Java.
// @why C: an object reference cannot be used directly either. Write if (obj != null) instead.
// @why D: no numeric type is accepted, not even int.

// @quiz (OCJP, MEDIUM) How many statements does the if control here?
// @code if (true) System.out.println("A");
// @code System.out.println("B");
// @option Only the first, so B is printed whatever the condition is. [correct]
// @option Both, because the condition is true.
// @option Neither, because there are no braces.
// @option It does not compile without braces.
// @explain Without braces, an if controls exactly one statement, the one immediately after it. Everything after that is outside the condition.
// @why B: braces would be needed to control both lines.
// @why C: an if with no braces still controls the single following statement.
// @why D: braces are optional for one statement.

// @quiz (INTERVIEW, MEDIUM) What is the difference between && and || in a condition?
// @option && requires both sides to be true, while || requires at least one side to be true. [correct]
// @option && requires at least one side to be true, while || requires both.
// @option Both mean the same thing.
// @option && works only with numbers, and || only with Strings.
// @explain They are the logical AND and OR operators. Both also short-circuit, so the right side is skipped once the answer is already known.
// @why B: the two are swapped.
// @why C: they differ, and swapping them changes when a block runs.
// @why D: both operators work on boolean expressions.

public class IfExample {

    public static void main(String[] args) {

        boolean isAlien = false;

        // If keyword, takes what inside the parenthesis,and if(and only if), the result of expression is true, next line will be executed.
        if(isAlien == false){ // condition check
            System.out.println("It is not an alien!");
        } // Always uses code block, with if statement, it reduces confusion. It allows more than one statement to be executed.

        int topScore = 100;
        if(topScore == 100){
            System.out.println("You got the high score!");
        }
        if(topScore != 100){
            System.out.println("You didn't get the high score!");
        }
        if(topScore >= 100){
            System.out.println("You got the high score for greater than equal to!");
        }
        if((topScore >= 100) && (topScore < 200)){ // && represents logical AND operator
            System.out.println("You got the high score");
        }

        if((topScore < 100) || (topScore >= 100)){ // || represents logical OR operator
            System.out.println("You got the high score");
        }

        boolean isCar = false;
        if(isCar == true){ // Ideally, we should have used equalsTo(==) operator in place of assignment(=) operator. In this case,
            System.out.println("This is not supposed to happen");

            boolean wasCar = isCar ? true : false; //Here since isCar value is false, the condition is checked first, since the condition is false, so false value gets assigned to wasCar.

            if(wasCar){
                System.out.println("wasCar is true");
            }
        }
    }

}
