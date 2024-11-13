package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;

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
