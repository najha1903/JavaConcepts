package Chapter_8_Switch_Statements.Sub_Chapter_1_Switch_Statement;
// The switch statement is an alternative to a long if-else if chain when you need to test a single variable against multiple fixed values.
// Switch is cleaner and more readable than nested if-else when you have many possible values to test.
// switch can be used with: byte, short, char, int (primitives), and String (since Java 7), as well as enum types.
// Structure: switch(variable) { case value1: code; break; case value2: code; break; default: code; }
// The 'break' statement is critical — without it, execution "falls through" to the next case and continues running (even if that case's value doesn't match).
// Fall-through can sometimes be useful (grouping multiple cases together), but is mostly a source of bugs if not intended.
// The 'default' case is like the 'else' in an if-else — it runs when no case matches. It is optional but recommended.
// A return statement inside a switch also acts like a break — it exits both the switch AND the method.
// Multiple case labels can share the same code block: case 1: case 2: case 3: System.out.println("1, 2 or 3");
// The traditional switch uses colon (:) after each case and requires explicit break statements to stop fall-through.
public class SwitchStatementInJava {

    public static void main(String[] args) {

//        ifElseExample(3);
//        switchCase(2);

//        switchCaseWithoutUsingBreak(1);

        String month = "NOVEMBER";

        String quarterValue = getQuarter(month);

        if(quarterValue.equals("INVALID MONTH")){
            System.out.println(quarterValue);
        }else {
            System.out.println(month + " is in " + quarterValue);
        }
    }

    // The same logic can be written using if-else; switch is cleaner when testing one variable against many values.

    public static void ifElseExample(int value){
        if(value == 1){
            System.out.println("Value is 1");
        }else if(value == 2){
            System.out.println("Value is 2");
        }else {
            System.out.println("Is not 1 or 2");
        }

    }

     // The switch expression is matched against each case label. When a match is found, its code block executes. Without break, execution 'falls through' to the next case.

    // The condition is provided as parameter to switch statement, which is then matched to the case statement.
    // If the condition provided in the switch statement, matches the condition provided in case statement,
    // the code mentioned in that case statement gets executed.

    public static void switchCase(int value){
        switch (value){ // Similar to if statement
            case 1: // Similar to else if statement
                System.out.println("Value is 1");
                break; // Once the condition is met, the break statement forces the program to come out of switch condition
            case 2: // Similar to else if statement
                System.out.println("Value is 2");
                break;
            case 3: // Similar to else if statement
                System.out.println("Value is 3");
                break;
            default: // It is similar to else statement. If the switch condition is not met in either case, the default, as the name suggest will get executed.
                System.out.println("Neither numbers are provided"); // It is similar to else statement. If the switch condition is not met in either case, the default, as the name suggest will get executed.
        }
    }

    // Multiple case labels can share the same code block. If any of the listed values match, the shared code block executes.

    public static void switchCaseMultipleCasesTogether(int value){
        switch (value){  // Similar to if statement
            case 1: // Similar to else if statement
                System.out.println("Value is 1");
                break; // Once the condition is met, the break statement forces the program to come out of switch condition
            case 2: // Similar to else if statement
                System.out.println("Value is 2");
                break;
            case 3: case 4: case 5: // We can club multiple case statements together
                System.out.println("Value is 3 or 4 or 5");
                break;
            default: // It is similar to else statement. If the switch condition is not met in either case, the default, as the name suggest will get executed.
                System.out.println("Neither numbers are provided");
        }
    }

    // Program in switch case without any break statement

    // We should always use break statements, after the case statements.
    // If break statements are not used, it will result to unpredictable behaviour.

    // For example, in below method, in the worst case scenario if value is provided as 1, the case matches with the 1, it will execute all statements mentioned in case 1.
    // Since, there is no break statement, it will execute all statements of case 2, case 3, case 4, case 5 and the default case as neither of them have break statement.

    public static void switchCaseWithoutUsingBreak(int value){
        switch (value){
                case 1:
                System.out.println("Value is 1");
                case 2:
                System.out.println("Value is 2");
                case 3: case 4: case 5: // We can club multiple case statements together
                System.out.println("Value is 3 or 4 or 5");
                default:
                System.out.println("Neither numbers are provided");
        }
    }

    // Returning a value from a switch: instead of printing inside the switch, the switch can return a String result. A return statement acts like a break — it exits both the switch and the method.
    public static String getQuarter(String month){

        // The traditional switch uses colon after each case and requires an explicit break statement to stop fall-through.

        switch (month){
            case "JANUARY": case "FEBRUARY": case "MARCH":
                return "1st Quarter"; // Return statement acts like break, since the code wil exit both out of switch statement and the method
            case "APRIL": case "MAY": case "JUNE":
                return "2nd Quarter";
            case "JULY": case "AUGUST": case "SEPTEMBER":
                return "3rd Quarter";
            case "OCTOBER": case "NOVEMBER": case "DECEMBER":
                return "4th Quarter";
        }

        return "INVALID MONTH"; // We also don't need the default statement, as if the value is not found, the code will fall through the last statement and this value is returned.
    }

}
