package Chapter_7_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;

//        Write a method hasEqualSum with 3 parameters of type int.
//
//        The method should return boolean and it needs to return true if the sum of the first and second parameter is equal to the third parameter. Otherwise, return false.
//
//
//        EXAMPLES OF INPUT/OUTPUT:
//
//        * hasEqualSum(1, 1, 1);  should return false since 1 + 1 is not equal to 1
//
//        * hasEqualSum(1, 1, 2);  should return true since 1 + 1 is equal to 2
//
//        * hasEqualSum(1, -1, 0);  should return true since 1 + (-1) is 1 - 1 and is equal to 0
//
//
//        NOTE: The hasEqualSum method  needs to be defined as public static like we have been doing so far in the course.
//        NOTE: Do not add a  main method to solution code.

public class EqualSumCheckerCodingChallenge {

    public static void main(String[] args) {

        System.out.println(hasEqualSum(1,1,1));
        System.out.println(hasEqualSum(1,1,2));
        System.out.println(hasEqualSum(1,-1,0));

    }

    public static boolean hasEqualSum(int firstNumber,int secondNumber, int sum){

        if(firstNumber + secondNumber == sum){
            return true;
        }else{
            return false;
        }

    }

}
