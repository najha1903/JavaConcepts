package Chapter_9_Java_Looping_Concepts.Sub_Chapter_1_For_Statement;

/* Looping :- Looping let us execute the code multiple number of times
* Java supports several statements for looping, or executing code repetitively
*
* for -->   The for loop is more complex to set up but is commonly used when you are iterating over set of values
* while --> The while loop executes until a specified condition becomes false
* do while --> The do while loop always executes at least one and continues until specified condition becomes false
*
*  The for statement is often referred to as the for loop
*  It repeatedly loops until a condition is satisfied
*
* for(initialisation; expression; increment){ // Initialisation, condition and expression happens in the same line
* // block of statements
* }
*
*  The initialisation section declares or sets state, usually declaring and initialising a loop variable, before the loop begins processing.
*
*  The expression section, once it becomes false, will end the loop processing.
*
*  The increment section is executed after the expression is tested, and is generally the place where the loop variable is incremented.
*
*  Break Statement :- A break statement transfers control out of an enclosing statement
*
*  Break Statement can also be used in a loop.
*
*  Continue Statement :- The continue statement, in its simplest form, will stop executing the current iteration of a block of
   code in a loop, and start a new iteration. A continue statement is a good way to continue to execute iterations of your code, but perhaps skip code for certain elements,
   or only partially execute code in certain cases.

   Example of Continue statement :-    public static void main(String[] args) {
        int number = 0;

        while (number < 50){

            number = number + 5;

            if(number % 25 == 0){  // Number 25 and 50 will get skipped and loop will start a new iteration
                continue;
            }
            if(number < 50){
                System.out.print(number + " ");
            }else{
                System.out.print(number);
            }
        }
    }

    Output :- 5 10 15 20 30 35 40 45 [Numbers 25 and 50 are not printed]

*/


public class ForStatement {

    public static void main(String[] args) {

        for(int counter = 1; counter <=5; counter++){ // counter is the variable that got initialised. It is then compared with the value less than equal to 5. If the counter is greater than 5, the loop will terminate. Lastly the loop is incremented, after the expression is tested.
           // System.out.println(counter);
        }

        for(double rate = 2.0; rate<=5.0; rate++){
           // System.out.println(calculateInterest(10000,rate));
        }

       // System.out.println(calculateInterest(10000, 2));

        /* Using a new for statement, call the calculateInterest method with the dollar amount of 100

            Use the interest rate between 7.5 to 10, but increment by a quarter of percent each time, meaning 0.25 percent
        */
        for(double rate = 7.5; rate<=10; rate+=0.25){
           // System.out.println(calculateInterest(100,rate));
        }


    // For Statement with break keyword
        for(double rate = 7.5; rate<=10; rate+=0.25){
            double interestAmount = calculateInterest(100.00,rate);
            if(interestAmount > 8.5){
                break;
            }
            System.out.println(calculateInterest(100.00,rate));
        }
    }

    public static double calculateInterest(double amount, double interestRate){

        return (amount * (interestRate / 100));
    }

}
