package Chapter_6_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;

// This challenge classifies the relationship between three int values and prints one exact message.
// printEqual(int firstNumber, int secondNumber, int thirdNumber) is a void method because the visible output is the printed text.
// Any negative input is invalid and must print "Invalid Value" before any equality checks.
// If all three numbers are equal, the method prints "All numbers are equal".
// If every pair of numbers is different, the method prints "All numbers are different".
// All remaining valid combinations print "Neither all are equal or different".
// Important: exact output text matters in coding challenge platforms, including capitalization and spaces.

public class EqualityPrinterCodingChallenge {



    public static void main(String[] args) {

        printEqual(1, 1, 1);

        printEqual(1, 1, 2);

        printEqual(-1, -1, -1);

        printEqual(1, 2, 3);

    }

    public static void printEqual(int firstNumber,int secondNumber,int thirdNumber){

        if(firstNumber < 0 || secondNumber < 0 || thirdNumber < 0){
            System.out.println("Invalid Value");
        }else if((firstNumber == thirdNumber) && (secondNumber == thirdNumber)){
            System.out.println("All numbers are equal");
        }else if((firstNumber != secondNumber) && (firstNumber != thirdNumber) && (secondNumber != thirdNumber)){
            System.out.println("All numbers are different");
        }else{
            System.out.println("Neither all are equal or different");
        }
    }
}
