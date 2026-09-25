package Chapter_5_If_Else_Statements.Sub_Chapter_2_Code_Block_If_Then_Else_Challenge;
// An if-else if-else chain allows you to test multiple conditions in sequence, executing only the FIRST matching branch.
// Structure: if(condition1) { ... } else if(condition2) { ... } else { ... }
// The 'else' block is the fallback — it runs only when ALL preceding conditions are false.
// Once one branch executes, ALL other branches are skipped — even if their conditions would also be true.
// Code blocks (curly braces {}) create a new scope. Variables declared INSIDE an if/else block are local to that block.
// A variable declared inside an if block IS accessible by inner nested blocks, but NOT by the outer block or sibling else blocks.
// Scope example: if(gameOver) { int finalScore = ...; } — finalScore is only accessible inside the if block.
// Trying to use finalScore outside that if block would cause a compile error: "Cannot resolve symbol 'finalScore'".
// The two if blocks have separate local scopes, so each may declare finalScore. Scope is a source-code rule, not a promise that memory is erased at the brace.
// Inner blocks CAN access variables from their containing outer block (e.g., score, levelCompleted, bonus are in the outer method block and accessible inside the if block).
// The concept of where a variable is accessible is called its SCOPE. Narrowing scope is a best practice — declare variables as close to where they are used as possible.
// @quiz (INTERVIEW TRAP) In an if/else-if chain with parameter-like conditions, what happens if two conditions could both be true?
// @answer Only the first true branch executes; later branches are skipped, so order conditions carefully.
//
// @quiz (OCJP) How should a caller choose values for String[] args in main?
// @answer Provide command-line words after the class name; Java stores them as args[0], args[1], and so on, using zero-based indexing.

// @quiz (OCJP, MEDIUM) What is printed by this code?
// @code int score = 5000;
// @code if (score < 5000 && score > 1000) { System.out.println("A"); }
// @code else if (score < 1000) { System.out.println("B"); }
// @code else { System.out.println("C"); }
// @option C, because neither condition is true for 5000. [correct]
// @option A, because 5000 is greater than 1000.
// @option B, because the else-if is tested when the first test fails.
// @option A and C, because the else block always runs as well.
// @explain 5000 < 5000 is false and 5000 < 1000 is false, so the else branch is the only one left.
// @why A: the first test also requires score to be below 5000, and it is not.
// @why B: the else-if is tested, but its condition is false too, so B is not printed.
// @why D: only one branch of an if/else-if/else chain ever runs.

// @quiz (OCJP, MEDIUM) With score = 5000, levelCompleted = 5 and bonus = 100, what does this print?
// @code int finalScore = score + (levelCompleted * bonus);
// @code System.out.println("Your final score was " + finalScore);
// @option Your final score was 5500, because the parentheses give 500 and 5000 + 500 is 5500. [correct]
// @option Your final score was 50100, because the numbers are joined as text.
// @option Your final score was 5100, because bonus is added once per level.
// @option It does not compile, because finalScore is used outside its block.
// @explain The parentheses are evaluated first, giving 5 * 100 = 500, and the addition then gives 5500.
// @why B: the values inside the parentheses are numbers, so they are added, not joined.
// @why C: bonus is multiplied by levelCompleted exactly once, giving 500.
// @why D: the line that uses finalScore is inside the same block, so it is in scope.

// @quiz (OCJP, MEDIUM) Does this code compile?
// @code if (gameOver) { int finalScore = 100; }
// @code System.out.println(finalScore);
// @option No. finalScore is declared in the if block, so it is out of scope at the next line. [correct]
// @option Yes, and it prints 100 when gameOver is true.
// @option Yes, and it prints 0 when gameOver is false.
// @option Yes, because a block-local variable lives until the method ends.
// @explain A local variable lives only inside the block that declares it, so the name is gone after the brace.
// @why B: the file is rejected while compiling, so nothing is printed.
// @why C: a variable that is out of scope is a compile error, not a zero.
// @why D: block scope ends at the closing brace, not at the end of the method.

// @quiz (OCJP, MEDIUM) With boolean gameOver = true already declared, does this code compile?
// @code if (gameOver) { int n = 1; System.out.println(n); }
// @code if (gameOver) { int n = 2; System.out.println(n); }
// @option Yes, and it prints 1 then 2, because each block has its own n. [correct]
// @option No, because n is declared twice in the same method.
// @option Yes, and it prints 2 both times, because the second declaration wins.
// @option No, because a local variable may be declared only once per class.
// @explain The two blocks are separate scopes, so each block declares and prints its own n.
// @why B: the duplicate-name rule applies within one scope, and these two scopes differ.
// @why C: the first block prints its own n, which is still 1.
// @why D: local variables in separate blocks may share a name.

// @quiz (OCJP, HARD) Does this code compile?
// @code int score = 10;
// @code if (gameOver) { int score = 20; System.out.println(score); }
// @option No. A local variable in an inner block may not shadow one from the enclosing block. [correct]
// @option Yes, and it prints 20, because the inner declaration hides the outer one.
// @option Yes, and it prints 10, because the outer declaration wins.
// @option Yes, and it prints 30, because the two values are added.
// @explain Only fields may be hidden this way; a local variable may not shadow another local variable.
// @why B: hiding a name this way is allowed for fields, not for local variables.
// @why C: the file does not compile, so no value is printed at all.
// @why D: declarations never add their values together.

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
            int finalScore = score + (levelCompleted * bonus); // This separate block declares its own finalScore; the earlier local name is out of scope.
            System.out.println("Your final score was " + finalScore);
        }

    }
}
