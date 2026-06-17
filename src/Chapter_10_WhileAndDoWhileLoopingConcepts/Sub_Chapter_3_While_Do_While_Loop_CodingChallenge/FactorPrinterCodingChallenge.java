package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;

// Factor Printer Challenge: A factor of a number N is any integer that divides N with no remainder.
// For example, the factors of 32 are: 1, 2, 4, 8, 16, 32 — each divides 32 evenly.
// The approach uses a while loop counting from 1 to N, checking if number % counter == 0 (i.e., divisible with no remainder).
// If the number is less than 1, the method returns -1 to indicate invalid input.

public class  FactorPrinterCodingChallenge {

    public static void main(String[] args) {

        printFactors(32);
    }

    public static void printFactors(int number){

        int counter = 1;

        if(number < 1){
            System.out.println(-1);

        }else{

            while(counter <= number){


                if(number % counter == 0){
                    System.out.println(counter + " ");
                }

                counter++;


            }
        }

    }
}
