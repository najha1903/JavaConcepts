package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;

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
