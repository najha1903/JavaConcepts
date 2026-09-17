package Chapter_9_WhileAndDoWhileLoopingConcepts.Sub_Chapter_2_Do_While_Loop;
// The do-while loop is like a while loop, but with one key difference: the body ALWAYS executes at least once.
// In a regular while loop, if the condition is false from the start, the body NEVER runs. In a do-while, the body runs first, THEN the condition is checked.
// This makes do-while ideal for situations like "ask the user for input at least once, then keep asking if the input is invalid."
// Syntax:
//   do {
//       // body — executes first, at least once
//   } while (condition);  // NOTE: semicolon required after the closing parenthesis!
// The semicolon after while(condition); is MANDATORY — forgetting it is a syntax error.
// continue and break work the same way in do-while: continue jumps to the condition check; break exits the loop.
// When using loops: always check for infinite loops (condition never becomes false) and never-executing loops (condition false from the very start — can't happen in do-while, but watch for it in while and for loops).

// Seeing the difference between while and do-while :-
// int n = 10;
// while (n < 5) { System.out.println("while ran"); }        // prints nothing, the test is false from the start
// int m = 10;
// do { System.out.println("do-while ran"); } while (m < 5); // prints do-while ran once
// Note :- this is the whole difference in one example. The while loop checks first and skips; the do-while runs first and then checks.
//
// Where a do-while earns its place — asking at least once :-
// int number;
// do {
//     System.out.print("Enter a number between 1 and 10: ");
//     number = Integer.parseInt(scanner.nextLine());
// } while (number < 1 || number > 10);
// Note :- the question must be asked at least once, so a while loop would need the same code duplicated before the loop. The do-while states the intent directly.
//
// The mandatory semicolon :-
// do { System.out.println("hi"); } while (false)     // Compile Error :- ';' expected
// do { System.out.println("hi"); } while (false);    // prints hi
// Note :- the semicolon is what ends the do-while statement. Leaving it out is the single most common mistake with this loop.
//
// Pitfall :- a do-while always runs its body once, even when the condition is false from the start. That is a feature here, but it is a surprise if you meant to guard the work with the condition.

// @takeaway A do-while runs its body first and tests the condition afterwards, so the body always runs at least once, while a while loop can skip its body completely.
// @takeaway A do-while suits work that must happen once before it can be tested, such as asking for input and then repeating while the answer is out of range.
// @takeaway The semicolon after `while (condition);` is part of the do-while statement. Leaving it out is a syntax error.
// @gotcha A do-while always executes its body at least once, even when the condition is false from the very start, so it can never behave like a guarded while loop.
// @gotcha `while (condition)` inside a do-while needs a statement terminator, unlike the `while` that starts a normal loop.
// @gotcha `continue` inside a do-while jumps to the condition test rather than to the top of the body, so the body may run fewer times than you expect.

// @quiz (INTERVIEW) What does the isReady value control in do { ... } while (isReady)?
// @answer It controls whether another iteration starts after the body finishes; because it is checked after the body, the body runs at least once.
//
// @quiz (INTERVIEW TRAP) If isReady is false before a do-while starts, how many times does the body run?
// @answer It still runs once, because do-while checks the condition after executing the body.
//
// @quiz (OCJP) In if(j > 5), does the loop break when j is exactly 5?
// @answer No. The > operator is exclusive, so the break condition becomes true only when j is greater than 5.
public class DoWhileLoops {

        /*   do while always executes at least once, and then the condition is checked.
         If the expression is evaluated to true, the execution continues, otherwise the loop will not iterate

         It will first enter the do block and execute it at least once, and then check for while condition,
         if the while condition expression evaluates to false, it won't iterate,
         but if it's true, the loop will continue to execute.


      When using loops, you want to carefully examine the conditions

      for terminating or continuing a loop. Check for endless or infinite loops.

      Check for conditions where a loop will never execute.

      So, be careful with conditions because it's very easy to end up with an endless loop,

    */

    // do while statement format: the do block runs first, then the while condition is evaluated. A semicolon is required after the while condition.
        /*
        do {
            // Code to execute at least once, and again if the while condition is true.
        } while(expression); // semicolon required
         */


    public static void main(String[] args) {

        // do while example: demonstrates that the loop body always executes at least once, even when the exit condition is already set up.

        int j = 1;
        boolean isReady = true;
        do{
            if (j > 5){
                break;
            }
            System.out.println(j);
            j++;
        }
        while (isReady);


 // do while with break and continue: 'continue' skips remaining code in the current iteration and rechecks the while condition. 'break' exits the loop immediately.

 /*       int number = 0; // Variable is initialised

          do{ // do code block gets executed first regardless of the while condition. At least one time the do block will get executed

            number++; // Number is incremented

            if(number <=5){
                System.out.println("Skipping number " + number);
                continue; // The continue statement will skip the remaining code, and continue with the condition of the while loop.
                }

            if(number >=10){
                System.out.println("Breaking at " + number);
                break; // The break statement will exit the loop
            }

            System.out.println(number);

        }
        while(number < 15);

*/

    }

}
