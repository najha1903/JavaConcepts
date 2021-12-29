package Operators;

/*

OPERATOR CHALLENGE

1. Create a double variable with a value of 20.00
2. Create a second variable of type double with the value 80.00
3. Add both numbers together and multiply by 100.00
4. Use the remainder operator to figure out what the remainder from the result of the operation in step 3 and 40.00
   We used the modulus or remainder operator on int in the course, but we can also use it on a double.
5. Create a boolean variable that assigns the value "true" if the remainder in step 4 is 0, or "false" , if it's not 0
6. Output the boolean variable.
7. Write an if-then statement that displays a message "Got some remainder" if the boolean in step is "not true".

*/

public class OperatorChallenge {

    public static void main(String[] args) {

        double myFirstValue = 20.00D;

        double mySecondValue = 80.00D;

        double sum = (myFirstValue + mySecondValue) * 100.00D;

        double remainder = sum % 40.00D;

        boolean checkRemainder = (remainder == 0) ? true : false;

        System.out.println("Remainder check is :-  " + checkRemainder);

        if(!checkRemainder){
            System.out.println("Got some remainder");
        }

    }
}
