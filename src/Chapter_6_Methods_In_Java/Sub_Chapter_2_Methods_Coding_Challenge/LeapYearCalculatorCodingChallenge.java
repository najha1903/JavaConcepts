package Chapter_6_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;

// This challenge implements the leap-year rule as a clean boolean method.
// isLeapYear(int year) first validates that the year is between 1 and 9999, inclusive.
// A valid year is a leap year when it is divisible by 4, except century years must also be divisible by 400.
// Years such as 1700, 1800, 1900, and 2100 are not leap years because they are divisible by 100 but not by 400.
// Years such as 1600, 2000, and 2400 are leap years because they satisfy the special century rule.
// Example results: isLeapYear(-1600) returns false, isLeapYear(1600) returns true, and isLeapYear(2017) returns false.
// Important: place the range validation first so invalid years cannot pass the divisibility checks.

public class LeapYearCalculatorCodingChallenge {

    public static void main(String[] args) {

        System.out.println(isLeapYear(-1600));
        System.out.println(isLeapYear(1600));
        System.out.println(isLeapYear(2017));
    }

    public static boolean isLeapYear(int year) {

        if(year < 1 || year > 9999){
            return false;
        }

        return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);

    }
}
