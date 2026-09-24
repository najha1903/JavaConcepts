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

// @takeaway A `do-while` runs its body first and tests the condition afterwards, so it always runs at least once.
// @takeaway A `do-while` suits work that must happen once before it can be tested, such as asking for input.
// @takeaway The semicolon after `while (condition);` is part of the statement; leaving it out is a syntax error.
// @gotcha A `do-while` always runs its body once, even when the condition is false from the very start.
// @gotcha The `while (condition)` that ends a `do-while` needs a semicolon, unlike the one that starts a loop.
// @gotcha `continue` in a `do-while` jumps to the condition test, not to the top of the body.

// @quiz (INTERVIEW) What does the isReady value control in do { ... } while (isReady)?
// @answer It controls whether another iteration starts after the body finishes; because it is checked after the body, the body runs at least once.
//
// @quiz (INTERVIEW TRAP) If isReady is false before a do-while starts, how many times does the body run?
// @answer It still runs once, because do-while checks the condition after executing the body.
//
// @quiz (OCJP) In if(j > 5), does the loop break when j is exactly 5?
// @answer No. The > operator is exclusive, so the break condition becomes true only when j is greater than 5.
// @quiz (OCJP, MEDIUM) What is printed by this code?
// @code int n = 10;
// @code do {
// @code     System.out.print("ran once ");
// @code } while (n < 5);
// @option ran once, because a do-while runs its body before testing the condition. [correct]
// @option Nothing, because n < 5 is false from the start.
// @option ran once, printed over and over forever.
// @option It does not compile, because n is never changed inside the loop.
// @explain A do-while runs the body first, so one pass happens before n < 5 is found false.
// @why B: that is the behaviour of a while loop, which tests before running the body.
// @why C: after the first pass the false condition ends the loop.
// @why D: a loop variable that never changes is legal; here the condition is false anyway.
// @quiz (OCJP, MEDIUM) What happens with this statement?
// @code do {
// @code     System.out.println("hi");
// @code } while (false)
// @option It does not compile, because the do-while needs a semicolon after while (false). [correct]
// @option It prints hi once.
// @option It prints hi forever.
// @option It prints nothing, because the condition is false.
// @explain The semicolon ends the do-while statement, so without it the compiler reports a missing ';'.
// @why B: the missing terminator stops the file from compiling, so nothing runs.
// @why C: false ends the loop after the first pass, so it cannot repeat.
// @why D: the body always runs at least once, so hi would print if the code compiled.
// @quiz (OCJP, MEDIUM) What is printed by this code?
// @code int n = 5;
// @code while (n < 5) { System.out.print("while"); }
// @code do { System.out.print("do"); } while (n < 5);
// @option do, because only the do-while body runs when the condition is false from the start. [correct]
// @option whiledo, because both bodies run once.
// @option Nothing, because n < 5 is false in both loops.
// @option dodo, because the do-while runs its body twice.
// @explain The while loop tests first and skips its body; the do-while prints once before testing.
// @why B: the while loop never enters its body, so it prints nothing at all.
// @why C: the do-while always prints once, even when the test fails.
// @why D: after the first pass the false condition ends the loop.
// @quiz (OCJP, HARD) What does this do-while print?
// @code int i = 0;
// @code do {
// @code     i++;
// @code     if (i % 2 == 0) { continue; }
// @code     if (i > 5) { break; }
// @code     System.out.print(i + " ");
// @code } while (i < 10);
// @option 1 3 5, because continue skips the even values and break stops the loop at 7. [correct]
// @option 1 3 5 7 9, because the loop runs until i reaches 10.
// @option 2 4 6, because continue prints the even values.
// @option 1 3 5 7, because break prints the value that stopped the loop.
// @explain continue jumps to the condition, so 2, 4 and 6 are skipped, and break stops it at i = 7.
// @why B: break ends the loop at i = 7, so 7 and 9 never print.
// @why C: continue skips the rest of the body, so the print is not reached for even values.
// @why D: break does not print anything.
// @quiz (INTERVIEW, MEDIUM) Which loop fits "ask at least once, then repeat while the answer is invalid"?
// @option A do-while loop, because the prompt must run once before the answer can be tested. [correct]
// @option A while loop, because the condition should be tested before the prompt.
// @option A for loop with a fixed count, because the number of attempts is known.
// @option An enhanced for loop, because it reads each typed value exactly once.
// @explain The prompt must appear once, so the test cannot come first; a do-while reads, then repeats.
// @why B: testing first would skip the prompt or force the prompt to be duplicated before the loop.
// @why C: the number of attempts is not known in advance; it depends on what the user types.
// @why D: an enhanced for loop walks a collection that already exists and cannot read keyboard input.
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
