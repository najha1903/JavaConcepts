package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_2_Do_While_Loop;

public class DoWhileLoops {

        /*   do while always executes at least once, and then the condition is checked.
         If the expression is evaluated to true, the execution continues, otherwise the loop will not iterate

         It will first enter the do block and execute it at least once, and then check for while condition,
         if the while condition expression evaluates to false, it won't iterate,
         but if it's true, the loop will continue to execute.


      When using loops, you want to carefully examine the conditions

      or terminating or continuing a loop. Check for endless or infinite loops.

      Check for conditions where a loop will never execute.

      So, be careful with conditions because it's very easy to end up with an endless loop,

    */

    // do while statement format
        /*
        do {
            // block of statements
        } while(expression); // semicolon required
         */


    public static void main(String[] args) {

        // do while example

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


 // Do while program with break and continue condition

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
