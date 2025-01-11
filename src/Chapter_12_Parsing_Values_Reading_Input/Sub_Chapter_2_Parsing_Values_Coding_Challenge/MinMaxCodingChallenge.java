package Chapter_12_Parsing_Values_Reading_Input.Sub_Chapter_2_Parsing_Values_Coding_Challenge;

/*
* You'll be using an endless loop which: Prompts the user to enter a number or any

character to quit. Validates if the user-entered data really is a number. You can choose either

an integer or double validation method. If the user-entered data is not a number,

quit the loop. Keep track of the minimum number entered. Keep track of the maximum number entered.

If the user has previously entered a set of numbers (or even just one), display the

minimum and maximum number that the user entered. So, you'll want to create a loop that continues to

process until the user enters non-numeric data. You'll prompt the user to enter a number or type

a character to quit each iteration. After the user enters some data,

you'll read the input as a string, and then test if it can be parsed to a number.

You can decide if you want the user to enter integers or decimal numbers.

If the user entered a valid number, you'll want to see if it is less than what you

have for a minimum number, and if it is, you'll set that to the current number.

You'll do the same check for maximum number. For example, after one valid numeric entry,

minimum and maximum numbers should be the same number.
*
*
* */

import java.util.Scanner;

public class MinMaxCodingChallenge {

    public static void main(String[] args) {

        printMinAndMaxFromUserInputs();
    }

    public static void printMinAndMaxFromUserInputs(){

        Scanner sc = new Scanner(System.in);

        int minNumber = 0;

        int maxNumber = 0;

        int counter = 0;

        while (true){

            System.out.println("Enter any number of your choice. To quit, press any character");

            String userInput = sc.nextLine();

            if(!checkIfUserInputIsNumber(userInput)){
                break;
            }

            int userDefinedNumber = Integer.parseInt(userInput);

            if((userDefinedNumber < minNumber) || (counter == 0)){
                minNumber = userDefinedNumber;
            }

             if(userDefinedNumber > maxNumber || (counter == 0)){
                 maxNumber = userDefinedNumber;
             }

             counter++;
        }

        System.out.println("Min number is " + minNumber + " and Max number is " + maxNumber);

    }

    public static boolean checkIfUserInputIsNumber(String userInput){

        boolean isNumber = true;

        try{
            Integer.parseInt(userInput);
        }catch (NumberFormatException e){
            isNumber = false;
        }
        return isNumber;
    }
}
