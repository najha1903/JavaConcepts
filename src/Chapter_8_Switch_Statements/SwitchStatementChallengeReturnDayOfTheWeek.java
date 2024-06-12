package Chapter_8_Switch_Statements;

//Challenge

// 1. Create a method called printDaysOfWeek, that takes an int parameter called day, but doesn't return any value

/* Use the enhanced switch statement as an expression, returning the result to a String
   named dayOfTheWeek. Print both the day variable  and the dayOfTheWeek variable. In the main method,
   call this method for the values 0 through 7.
 */

public class SwitchStatementChallengeReturnDayOfTheWeek {

    public static void main(String[] args) {
        printDayOfWeek(1);
        System.out.println(returnDayOfWeek(5));
    }

    public static void printDayOfWeek(int day) {
        switch (day) {
            case 0 -> System.out.println("Sunday");
            case 1 -> System.out.println("Monday");
            case 2 -> System.out.println("Tuesday");
            case 3 -> System.out.println("Wednesday");
            case 4 -> System.out.println("Thursday");
            case 5 -> System.out.println("Friday");
            case 6 -> System.out.println("Saturday");
            default -> System.out.println("Invalid day");
        }
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
            default -> "Invalid Month";
        };
    }
}
