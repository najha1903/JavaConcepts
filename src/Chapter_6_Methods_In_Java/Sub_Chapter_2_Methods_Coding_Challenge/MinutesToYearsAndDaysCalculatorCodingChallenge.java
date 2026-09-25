package Chapter_6_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;

// This challenge converts a long minute count into full years plus leftover days.
// printYearsAndDays(long minutes) is a void method because it prints the formatted answer directly.
// The conversion uses fixed calendar assumptions: 60 minutes per hour, 24 hours per day, and 365 days per year.
// Only full days are reported; leftover hours and minutes are discarded. Leap years are outside this exercise.
// Implementation limit :- minutes / 60 is narrowed to int, so values above 128849018879L minutes can overflow the hour count.
// Integer division gives the number of complete years, while the remainder operator gives the days left after those years.
// Negative minutes are invalid and must print exactly "Invalid Value".
// Example results: 525600 prints "525600 min = 1 y and 0 d", and 561600 prints "561600 min = 1 y and 25 d".
// Important: exact spacing and capitalization matter because this kind of challenge often checks output text literally.

// @testcase printYearsAndDays(525600) -> 525600 min = 1 y and 0 d
// @testcase printYearsAndDays(561600) -> 561600 min = 1 y and 25 d

public class MinutesToYearsAndDaysCalculatorCodingChallenge {

    public static void main(String[] args) {

        printYearsAndDays(-1);
        printYearsAndDays(525600);
        printYearsAndDays(561600);
    }

    public static void printYearsAndDays(long minutes){

        if(minutes < 0){

            System.out.println("Invalid Value");

        }else {

            int hours = (int) (minutes / 60);

            int days = hours / 24;

            int years = days / 365;

            int remainingDays = days % 365;

            System.out.println(minutes + " min = " + years + " y and " + remainingDays + " d");

        }
    }
}
