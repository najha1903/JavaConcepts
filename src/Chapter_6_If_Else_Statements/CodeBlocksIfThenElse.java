package Chapter_6_If_Else_Statements;

// The if statement identifies which statement or code block to run based on the value of an expression. In other words based on a specific condition.

// Inside the code block defined by curly braces. we can have one or multiple statements

// We can use the else statement after the if. In that case, when the condition is false, the else block will get executed.

// We can also add else if, to test multiple conditions.

// In an if, else if and else block, firstly if condition is checked, if the (if condition) is matched, the code inside the if block gets executed.
// If the (if condition) gets executed, the (else if) and (else condition) gets skipped.
// If the (if condition) fails, the control is transferred to else if condition, and if the (else if) condition matches, the code inside the else if block gets executed and the else condition is skipped.
// If the (if condition and else if condition) both fails, the control is transferred to else condition, the code inside the else condition gets executed.

// If there is a code block, inside another code block, the inside code block can access the variables created in outside code block.

// If there is a code block, inside another code block, the outside code block cannot access the variables created in inside code block.

// The concept of variables inside a code block is called scope.

// If you have created a variable in a code block, you can't access that variable you have created outside that code block.

//As soon as the code block is finished, Java will delete the variables.

public class CodeBlocksIfThenElse {

    public static void main(String[] args) {
        boolean gameOver = true;
        int score = 5000;
        int levelCompleted = 5;
        int bonus = 100;

        if(score < 5000 && score > 1000){ //If the (if condition) passes, the code block inside (if condition) will execute and (else if condition) and (else condition) will be skipped, otherwise the control will shift/switch to (else if condition).
            System.out.println("Your score was less than 5000 but greater than 1000");
        }else if(score < 1000){ //If the (else if condition) passes, the code block inside (else if condition) will execute and (else condition) will be skipped, otherwise the control will shift/switch to (else condition).
            System.out.println("Your score was less than 1000");
        }else { // The (else condition) code block will get executed, if the (if condition) and (else if condition) both fails, the code block inside (else condition) will execute.
            System.out.println("Got here");
        }

        if(gameOver){
            int finalScore = score + (levelCompleted * bonus); // Since, score, levelCompleted and bonus variable are part of outer scope(they have been defined in the outside code block), the inner scope / inner code block can access these variables
            System.out.println("Your final score was " + finalScore);
        }

       // int myFinalScore = finalScore; // Since, finalScore variable is defined in the inner code block / inner scope, the outer code block cannot access inner scope variables. Hence, the error is shown.

        if(gameOver){
            int finalScore = score + (levelCompleted * bonus); // As soon as the first inner scope code block finishes, the finalScore variable gets removed by Java, hence we again reuse finalScore variable inside the new code block.
            System.out.println("Your final score was " + finalScore);
        }

    }
}
