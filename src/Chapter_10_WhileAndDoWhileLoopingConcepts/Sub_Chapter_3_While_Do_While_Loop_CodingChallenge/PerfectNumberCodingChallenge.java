package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;

public class PerfectNumberCodingChallenge {

    public static void main(String[] args) {

        System.out.println(isPerfectNumber(6));
    }

    public static boolean isPerfectNumber(int number){

        if(number <= 0){
            return false;
        }

        int sum = 0;

        int i = 1;

        while (i < number){

            if(number % i == 0){
                sum = sum + i;
            }

            i++;

        }

        if(sum == number){
            return true;
        }else
        return false;
    }
}
