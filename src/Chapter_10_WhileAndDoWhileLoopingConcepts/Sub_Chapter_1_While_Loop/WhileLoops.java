package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_1_While_Loop;

/*
Java has 2 types of while loops

While --> Continue executing code block until the loop expression becomes false

While loop checks the condition at the start, before executing the block

Do While --> Executes the code block once, then continue executing until the loop condition becomes false

In while loop, the initialisation of the variable happens outside the while block

In while loop, the iteration happens inside the while block

Point to note :- When using loops, you want to carefully examine the conditions

for terminating or continuing a loop. Check for endless or infinite loops.

Check for conditions where a loop will never execute.

So, be careful with conditions because it's very easy to end up with an endless loop

Continue and Break

 The continue and break statements both interrupt normal loop processing.

 The continue statement starts a new iteration but continues to iterate through the loop.

 The break statement exits the loop at the point it's executed, and no longer completes any code in the loop, and won't continue iterating any longer.

*/

public class WhileLoops {

    /* while loop simply has expression

    While loop code format :-

    while(expression)  {
    // block of statements

    } */

    /*
Unlike the for loop, there is no place for the declaration of a temporary variable, in
    the declaration of the while statement.
    So we have to declare any iteration variables, outside the loop.
 */

    public static void main(String[] args) {
/*        int j = 1; // In while loop the initialisation of the variable happens outside the while loop

        while (j <= 5) { // condition
            System.out.println(j);
            j++;   // Iteration
        }

        // Another common way to program while loop is :-

        while(true){ // If break condition is not put, it will lead to infinite loop condition
            if(j > 5){ // Here in this code, we are breaking the loop, as soon as the condition is met.
                break;
            }
        }*/

        int number = 0;

        while(number < 15){
            number++;

            if(number <= 5){
                System.out.println("Skipping number " + number);
                continue;
            }

            if(number >= 10){
                System.out.println("Skipping number " + number);
                break;
            }

            System.out.println(number);
        }

    }

// while statement with continue and break



}


