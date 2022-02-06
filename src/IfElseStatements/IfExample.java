package IfElseStatements;

// The if-then(else) statement tells the program to execute a certain section of code only if a particular tests evaluate to true also known as conditional logic.

// Conditional logic uses specific statements in Java to allow usd to check a condition and execute certain code based on whether that condition(the expression) is true or false.

// After if statement, no semicolon should be added, as semicolon means end of the statement

// Logical AND operator checks multiple conditions, and if multiple conditions are true, then only it executes the if code inside code block. If any one condition is false, then it will not execute code inside code block.

// Logical OR operator checks multiple conditions, and if only one condition is true, it executes the code inside the if code block.

// = represents assignment operator , == represents equal to operator. To assign value(s) we should use assignment(=) operator. To compare value(s) we should use equalTo(==) operator.

// The NOT(!) operator aka Logical Complement Operator. For use with booleans, it tests the alternate value, by adding a NOT(!) operator before the value.

// Ternary Operator takes three operands. First operand is the condition we are testing which should evaluate as all conditions to true or false.Second operand is the value to assign to variable if the first condition is true. Third operand is the value to assign to variable if the second condition is false.

// Ternary operator is a shortcut to assigning one of two values to a variables depending on a given condition.

 /*
    Ternary Operator Example :-

    int ageOfClient = 20;

    boolean isEighteenOrOver = (ageOfClient == 20) ? true : false;

    Operand one - ageOfClient === 20, in this case we are checking the condition. It will return either true or false.

    Operand two - true, is the value to be assigned to the variable isEighteenOrOver if the condition above is true.

    Operand three - false. is the value to be assigned to the variable isEighteenOrOver if the condition above is false.

 */

// For Operator precedence table reference link :- cs.bilkent.edu.tr/~guvenir/courses/CS101/op_precedence.html

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
