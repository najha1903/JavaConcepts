package Chapter_10_WhileAndDoWhileLoopingConcepts;

public class DoWhileLoops {

        /*   do while always executes at least once, and then the condition is checked.
         If the expression is evaluated to true, the execution continues, otherwise the loop will not iterate

         It will first enter the do block and execute it at least once, and then check for while condition,
         if the while condition expression evaluates to false, it won't iterate,
         but if it's true, the loop will continue to execute.

    */

    // do while statement format
        /*
        do {
            // block of statements
        } while(expression);
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
        }

}
