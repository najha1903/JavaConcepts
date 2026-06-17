package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;

// Greatest Common Divisor (GCD) Challenge: the GCD of two numbers is the largest integer that divides both without a remainder.
// For example, GCD(81, 153) = 27, since 27 is the largest number that divides both 81 and 153 evenly.
// The method iterates over all divisors of the smaller number and checks which ones also divide the larger number — the last common divisor found is the GCD.
// Both numbers must be >= 10; otherwise -1 is returned to indicate invalid input.
// The approach uses nested while loops to compare factors of both numbers, tracking the largest common one found.

public class GreatestCommonDivisorCodingChallenge {

    public static void main(String[] args) {

        System.out.println(getGreatestCommonDivisor(81,153));
    }

    public static int getGreatestCommonDivisor(int number1, int number2){

        int greatestCommonDivisor = 0;

        int counter1 = 1;

        int counter2 = 1;

        if((number1 >=10) && (number2 >=10)){

            int minValue = Math.min(number1,number2);

            int maxValue = Math.max(number1,number2);

            while (counter1 <= minValue){

                if(minValue % counter1 == 0){

                    counter2 = 1;

                    while ((counter2 <= maxValue)){

                        if(maxValue % counter2 == 0){

                            if(counter1 == counter2){

                                greatestCommonDivisor = counter1;
                            }

                        }
                        counter2++;
                    }
                }

                counter1++;
            }



        }else{
            return -1;
        }

        return greatestCommonDivisor;
    }
}
