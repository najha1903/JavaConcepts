package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;

/*
* Even Digit Sum
Write a method named getEvenDigitSum with one parameter of type int called number.

The method should return the sum of the even digits within the number.

If the number is negative, the method should return -1 to indicate an invalid value.



EXAMPLE INPUT/OUTPUT:

getEvenDigitSum(123456789); → should return 20 since 2 + 4 + 6 + 8 = 20

getEvenDigitSum(252); → should return 4 since 2 + 2 = 4

getEvenDigitSum(-22); → should return -1 since the number is negative
*
*
*
*
* */

public class EvenDigitSumCodingChallenge {

    public static void main(String[] args) {

        System.out.println(getEvenDigitSum(1234567));
    }

    public static int getEvenDigitSum(int number){

        int evenDigitSum = 0;

        if(number < 0){
            return -1;
        }

        while(number != 0){

            int remainder = number % 10;

            if(number % 2 == 0){
                evenDigitSum = evenDigitSum + remainder;
            }

            number = number / 10;
        }

        return evenDigitSum;
    }
}
