package Chapter_6_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;

// This challenge breaks a repeated age-range check into a helper method.
// isTeen(int number) returns true when number is between 13 and 19, inclusive.
// hasTeen(int firstNumber, int secondNumber, int thirdNumber) returns true when at least one of its three arguments is a teen number.
// Calling isTeen() from hasTeen() keeps the range rule in one place and avoids repeating the same condition three times.
// Example results: hasTeen(9, 99, 19) returns true, hasTeen(23, 15, 42) returns true, and hasTeen(22, 23, 24) returns false.
// Important: inclusive range checks use >= for the lower boundary and <= for the upper boundary.

public class TeenNumberCheckerCodingChallenge {

    public static void main(String[] args) {

        System.out.println(hasTeen(9,99,19));
        System.out.println(hasTeen(23,15,42));
        System.out.println(hasTeen(22,23,24));
    }

    public static boolean hasTeen(int firstNumber, int secondNumber, int thirdNumber){
       return isTeen(firstNumber) || isTeen(secondNumber) || isTeen(thirdNumber);
    }

    public static boolean isTeen(int number){
        return number >= 13 && number <= 19;
    }

}

