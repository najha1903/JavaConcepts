package Chapter_12_Parsing_Values_Reading_Input.Sub_Chapter_2_Parsing_Values_Coding_Challenge;

/*
*
Reading User Input Challenge.

In this challenge, you'll read 5 valid numbers from the console entered by the

user and print the sum of those ten numbers. By valid numbers, I mean you need to check that

the numbers entered are valid integers. If they are not, print out the message

"Invalid number" to the console, but continue looping until you do have 5 valid numbers.

Before the user enters each number, prompt them with the message, "Enter number #x:",

where x represents the count 1, 2, 3, etc. As an example, the first message would

look something like, "Enter number #1:", the next, "Enter number #2:", and so on.

Some hints for completing this are, firstly, use a while loop or a do while loop.

Use a scanner object and the next line method to read input as a string.

Use integer dot parse int, as we did in the previous videos.

You'll need some local variables to keep track of the count of valid integers, as well as the

sum of the integers.
*
* */

import java.util.Scanner;

public class ReadingUserInputChallenge {
    public static void main(String[] args) {

        int sum = printSumOfNumbersEnteredByUserUsingDoWhileLoop();

        System.out.println(sum);

    }

    public static int printSumOfNumbersEnteredByUserUsingWhileLoop(){

        int sum = 0;

        int counter = 1;

        Scanner sc= new Scanner(System.in);

        while(counter <= 5 ){

            System.out.println("Enter number #" + counter);

           String userNumberInput = sc.nextLine();

           if(checkIfNumberIsValid(userNumberInput)){
               sum = sum + Integer.parseInt(userNumberInput);
               counter++;
           }


        }

        return sum;
    }

    public static int printSumOfNumbersEnteredByUserUsingDoWhileLoop(){

        int sum = 0;

        int counter = 1;

        Scanner sc= new Scanner(System.in);

        do{
            System.out.println("Enter number #" + counter);

            String userNumberInput = sc.nextLine();

            if(checkIfNumberIsValid(userNumberInput)){
                sum = sum + Integer.parseInt(userNumberInput);
                counter++;
            }
        }while(counter <= 5);


        return sum;
    }


    public static boolean checkIfNumberIsValid(String userNumberInput){

        boolean isValid = true;

        try{
           Integer.parseInt(userNumberInput);
           return isValid;
        }catch (NumberFormatException e){
            System.out.println("Invalid number");
            isValid = false;
        }
        return isValid;
    }
}
