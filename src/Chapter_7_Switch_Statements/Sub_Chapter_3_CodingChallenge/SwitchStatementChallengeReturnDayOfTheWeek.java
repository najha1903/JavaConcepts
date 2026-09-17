package Chapter_7_Switch_Statements.Sub_Chapter_3_CodingChallenge;

//Challenge

// 1. Create a method called printDaysOfWeek, that takes an int parameter called day, but doesn't return any value

/* Use the enhanced switch statement as an expression, returning the result to a String
   named dayOfTheWeek. Print both the day variable  and the dayOfTheWeek variable. In the main method,
   call this method for the values 0 through 7.
 */

public class SwitchStatementChallengeReturnDayOfTheWeek {

    public static void main(String[] args) {
        for (int day = 0; day <= 7; day++) {
            printDayOfWeek(day);
        }
    }

    public static void printDayOfWeek(int day) {
        String dayOfTheWeek = returnDayOfWeek(day);
        System.out.println(day + " stands for " + dayOfTheWeek);
    }

    public static String returnDayOfWeek(int day) {
        return switch (day) {
            case 0 -> "Sunday";
            case 1 -> "Monday";
            case 2 -> "Tuesday";
            case 3 -> "Wednesday";
            case 4 -> "Thursday";
            case 5 -> "Friday";
            case 6 -> "Saturday";
            default -> "Invalid day";
        };
    }
}
