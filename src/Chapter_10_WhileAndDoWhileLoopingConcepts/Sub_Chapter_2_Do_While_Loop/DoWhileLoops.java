package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_2_Do_While_Loop;
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
