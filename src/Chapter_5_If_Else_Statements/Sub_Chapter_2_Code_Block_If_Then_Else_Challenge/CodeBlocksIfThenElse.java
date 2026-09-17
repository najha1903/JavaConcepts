package Chapter_5_If_Else_Statements.Sub_Chapter_2_Code_Block_If_Then_Else_Challenge;
// An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.
// Structure: if(condition1) { ... } else if(condition2) { ... } else { ... }
// The 'else' block is the fallback — it runs only when ALL preceding conditions are false.
// Once one branch executes, ALL other branches are skipped — even if their conditions would also be true.
// Code blocks (curly braces {}) create a new scope. Variables declared INSIDE an if/else block are local to that block.
// A variable declared inside an if block IS accessible by inner nested blocks, but NOT by the outer block or sibling else blocks.
// Scope example: if(gameOver) { int finalScore = ...; } — finalScore is only accessible inside the if block.
// Trying to use finalScore outside that if block would cause a compile error: "Cannot resolve symbol 'finalScore'".
// Once a code block ends, Java removes the variables declared inside it from memory. This is why you can re-declare finalScore in a second if(gameOver) block — Java treats it as a fresh variable.
// Inner blocks CAN access variables from their containing outer block (e.g., score, levelCompleted, bonus are in the outer method block and accessible inside the if block).
// The concept of where a variable is accessible is called its SCOPE. Narrowing scope is a best practice — declare variables as close to where they are used as possible.
// Parameter notes (what each method/constructor argument means and how to choose it):
// - main(String[] args): args is the optional command-line input array; choose it when you want outside values to influence the program at launch time.
// - System.out.println(String x): x is the message to print with a newline; choose a value that makes the active if/else branch or calculated result obvious.
// - String concatenation inside println, such as "Your final score was " + finalScore, builds one String argument before println receives it; careful with order because left-to-right concatenation affects the final message.
// - if/else-if conditions are parameter-like boolean inputs to control flow; choose non-overlapping ranges when only one branch should execute, because the first true branch wins.
//
// @quiz (INTERVIEW) What single argument is passed to System.out.println("Your final score was " + finalScore)?
// @answer The concatenation expression is evaluated first, producing one String that println receives and prints with a newline.
//
// @quiz (INTERVIEW TRAP) In an if/else-if chain with parameter-like conditions, what happens if two conditions could both be true?
// @answer Only the first true branch executes; later branches are skipped, so order conditions carefully.
//
// @quiz (OCJP) How should a caller choose values for String[] args in main?
// @answer Provide command-line words after the class name; Java stores them as args[0], args[1], and so on, using zero-based indexing.
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
