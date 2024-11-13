package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;

/*
*
* Shared Digit
*
*
Write a method named hasSharedDigit with two parameters of type int.

Each number should be within the range of 10 (inclusive) - 99 (inclusive). If one of the numbers is not within the range, the method should return false.

The method should return true if there is a digit that appears in both numbers, such as 2 in 12 and 23; otherwise, the method should return false.



EXAMPLE INPUT/OUTPUT:

hasSharedDigit(12, 23); → should return true since the digit 2 appears in both numbers

hasSharedDigit(9, 99); → should return false since 9 is not within the range of 10-99

hasSharedDigit(15, 55); → should return true since the digit 5 appears in both numbers
*
*
*
* */

public class SharedDigitCodingChallenge {

    public static void main(String[] args) {

        System.out.println(hasSharedDigit(12,23));


    }

    public static boolean hasSharedDigit(int number1, int number2){

        boolean checkIfHasSharedDigit = false;

        if(((number1 >= 10) && (number1 <= 99)) && ((number2 >= 10) && (number2 <= 99))){

            while(number1 !=0 ){

                int numberToBeCompared = number2;

                int remainder1 = number1 % 10;

                while (numberToBeCompared !=0){

                    int remainder2 = numberToBeCompared % 10;

                    if(remainder1 == remainder2){
                        checkIfHasSharedDigit = true;
                        break;
                    }else{

                        numberToBeCompared = numberToBeCompared / 10;
                    }
                }

                if(checkIfHasSharedDigit){
                    break;
                }else{
                    number1 = number1 / 10;
                }

            }

        }

        return checkIfHasSharedDigit;
    }
}
