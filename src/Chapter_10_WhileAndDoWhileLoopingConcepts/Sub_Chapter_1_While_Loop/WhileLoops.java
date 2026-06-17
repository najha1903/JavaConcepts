package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_1_While_Loop;
/*
  WHILE LOOPS

  The while loop repeatedly executes its body as long as a condition remains true.
  Unlike the for loop, the while loop does NOT have a built-in initialisation or update step in its declaration.
  You must declare and initialise any counter variables BEFORE the loop, and update them INSIDE the loop body.

  Syntax:
    while (condition) {
        // body
        // must update loop variable here, or you get an infinite loop!
    }

  Key difference from for loop:
  - for loop: initialisation, condition, and update are all in one line — ideal when you know the count upfront.
  - while loop: only the condition is in the declaration — ideal when you don't know upfront how many times to loop.

  EXAMPLE 1 — Basic counting with while:
    int j = 1;           // initialisation happens OUTSIDE the while
    while (j <= 5) {     // condition
        System.out.println(j);
        j++;             // update happens INSIDE the while
    }

  EXAMPLE 2 — while(true) with break (common pattern for "loop until done"):
    while (true) {       // infinite loop — will loop forever unless break is used
        if (j > 5) {
            break;       // exits the loop when j exceeds 5
        }
    }

  CONTINUE and BREAK:
  - continue: skips the REMAINING code in the current iteration and starts the next iteration immediately.
  - break: exits the loop entirely at the point it is executed. No further iterations run.

  IMPORTANT: Always check your loop condition carefully.
  - An infinite loop (condition never becomes false, no break) will freeze or crash your program.
  - A never-executing loop (condition is false from the start) will silently skip all the loop code.
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

// while statement with continue and break: 'continue' skips to the next iteration, 'break' exits the loop entirely.





