package Chapter_6_If_Else_Statements.Sub_Chapter_1_If_Then_Else_Control_Statement;
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
