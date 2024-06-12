package Chapter_10_WhileAndDoWhileLoopingConcepts.CodingChallenge;

/*
* Step 2 is to modify the while code. Make it also record the total number of

even numbers it has found. Break out of the loop

once 5 even numbers are found. Finally, display the total number

of odd and even numbers found. Alright, so the challenge is

to modify the while code above. So, you want to leave the existing

functionality as it is, but make it so it also records the total number of even numbers,

as well as odd numbers that it's found. And once five even numbers have been found,

break out of the code and display the total number of even numbers,
*
*
* */

public class WhileLoopCodingChallengePart2 {

    public static void main(String[] args) {


        int startingNumberRange = 5;

        int endNumberRange = 20;

        int totalEvenNumbersFound = 0;

        while(startingNumberRange <= endNumberRange){

            if (totalEvenNumbersFound >= 5){
                break;
            }

            if(isEvenNumber(startingNumberRange)){
               totalEvenNumbersFound++;
                System.out.print(startingNumberRange + " ");

            }
            startingNumberRange++;

        }

    }

    public static boolean isEvenNumber(int number){

        boolean isNumberEven;

        if(number > 0 && number % 2 == 0){
            isNumberEven = true;
        }else {
            isNumberEven = false;
        }

        return isNumberEven;
    }
}
