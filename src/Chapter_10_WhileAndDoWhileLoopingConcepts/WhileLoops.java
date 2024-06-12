package Chapter_10_WhileAndDoWhileLoopingConcepts;

// Java has 2 types of while loops

// While --> Continue executing code block until the loop expression becomes false

// Do While --> Executes the code block once, then continue executing until the loop condition becomes false
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
        int j = 1;

       /* while (j <= 5) {
            System.out.println(j);
            j++;
        }*/

        // Another common way to program while loop is :-

        while(true){ // If break condition is not put, it will lead to infinite loop condition
            if(j > 5){ // Here in this code, we are breaking the loop, as soon as the condition is met.
                break;
            }
            System.out.println(j);
            j++;
        }

}

}


