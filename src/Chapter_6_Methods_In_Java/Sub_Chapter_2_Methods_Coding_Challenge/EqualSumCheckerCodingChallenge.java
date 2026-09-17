package Chapter_6_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;

// This challenge practices returning a boolean expression directly from a method.
// hasEqualSum(int firstNumber, int secondNumber, int sum) checks whether firstNumber + secondNumber equals sum.
// The method should return true for matching totals and false for all other totals.
// Example results: hasEqualSum(1, 1, 1) returns false, hasEqualSum(1, 1, 2) returns true, and hasEqualSum(1, -1, 0) returns true.
// Important: because the comparison already produces a boolean, the method can return the expression directly.

public class EqualSumCheckerCodingChallenge {

    public static void main(String[] args) {

        System.out.println(hasEqualSum(1,1,1));
        System.out.println(hasEqualSum(1,1,2));
        System.out.println(hasEqualSum(1,-1,0));

    }

    public static boolean hasEqualSum(int firstNumber,int secondNumber, int sum){

        return firstNumber + secondNumber == sum;

    }

}
