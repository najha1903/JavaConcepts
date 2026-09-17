package Chapter_6_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;

// This challenge compares two double values only up to three decimal places.
// Multiplying by 1000 shifts the first three decimal places into the whole-number part of the value.
// Casting the shifted double to int truncates the remaining decimal portion instead of rounding it.
// If the two truncated int values are equal, the original numbers match to three decimal places.
// Example results: -3.1756 and -3.175 match, 3.175 and 3.176 do not match, and -3.123 and 3.123 do not match.
// Important: this exercise intentionally uses casting and truncation, so it is checking decimal-place equality rather than true mathematical closeness.

public class DecimalComparatorCodingChallenge {

    public static void main(String[] args) {

        System.out.println(areEqualByThreeDecimalPlaces(-3.1756, -3.175));
        System.out.println(areEqualByThreeDecimalPlaces(3.175,3.176));
        System.out.println(areEqualByThreeDecimalPlaces(3.0, 3.0));
        System.out.println(areEqualByThreeDecimalPlaces(-3.123, 3.123));

    }

    public static boolean areEqualByThreeDecimalPlaces(double firstNumber,double secondNumber){

        int firstNum = (int) (firstNumber * 1000);

        int secondNum = (int) (secondNumber * 1000);

        return firstNum == secondNum;
    }

}
