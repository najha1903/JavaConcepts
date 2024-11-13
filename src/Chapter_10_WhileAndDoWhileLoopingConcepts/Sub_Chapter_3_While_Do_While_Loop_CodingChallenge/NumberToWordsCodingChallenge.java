package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;

public class NumberToWordsCodingChallenge {

    // write code here


    public static int getDigitCount(int number){

        int counter = 0;

        if(number < 0) {
            counter = -1;
        }else if(number == 0){
            counter = 1;
        }else{

            while(number != 0){
                number = number / 10;
                counter++;
            }

        }

        return counter;
    }

    public static int reverse(int number){

        int reverseNumber = 0;

        while(number != 0){

            int remainder = number % 10;

            reverseNumber = (reverseNumber * 10) + remainder;

            number = number / 10;
        }

        return reverseNumber;
    }

    public static void numberToWords(int number){

        String word = "";

        if(number < 0){
            System.out.println("Invalid Value");
        }else {

            int originalNumberDigitCount = getDigitCount(number);

            int reverseNumber = reverse(number);

            int reverseNumberDigitCount = getDigitCount(reverseNumber);

            int differenceOfDigitCount = originalNumberDigitCount - reverseNumberDigitCount;

            if (getDigitCount(reverseNumber) == 0 || reverseNumber == 0) {

                switch (reverseNumber) {
                    case 0 -> word = word + "Zero";
                    case 1 -> word = word + "One";
                    case 2 -> word = word + "Two";
                    case 3 -> word = word + "Three";
                    case 4 -> word = word + "Four";
                    case 5 -> word = word + "Five";
                    case 6 -> word = word + "Six";
                    case 7 -> word = word + "Seven";
                    case 8 -> word = word + "Eight";
                    case 9 -> word = word + "Nine";
                }

            } else {


                while (reverseNumber != 0) {

                    int remainder = reverseNumber % 10;

                    switch (remainder) {
                        case 0 -> word = word + " Zero";
                        case 1 -> word = word + " One";
                        case 2 -> word = word + " Two";
                        case 3 -> word = word + " Three";
                        case 4 -> word = word + " Four";
                        case 5 -> word = word + " Five";
                        case 6 -> word = word + " Six";
                        case 7 -> word = word + " Seven";
                        case 8 -> word = word + " Eight";
                        case 9 -> word = word + " Nine";
                    }

                    reverseNumber = reverseNumber / 10;


                }

                while (differenceOfDigitCount != 0) {
                    word = word + " Zero";
                    differenceOfDigitCount--;
                }


            }

            System.out.println(word);
        }
    }

}