package Chapter_8_Switch_Statements.Sub_Chapter_2_Enhanced_Switch_Statement;
// The enhanced (modern) switch statement was introduced as a preview in Java 12 and became standard in Java 14.
// It uses the arrow (->) syntax instead of colon (:), eliminating fall-through by design — no 'break' needed.
// Traditional switch: case 1: ... break;   Enhanced switch: case 1 -> ...
// Multiple values can be grouped with comma-separated lists: case 3, 4, 5 -> ... (instead of stacking three case labels)
// The enhanced switch can be used as an EXPRESSION — it can return a value directly. This makes code concise and readable.
// Syntax for switch expression: return switch(variable) { case X -> "value"; default -> "fallback"; };
// When used as a switch expression, the 'default' case is mandatory to ensure all possible values are covered.
// The 'yield' keyword is used inside a case block { } when you need multiple statements before returning a value.
// yield is to a switch expression what return is to a method — it provides the value for that case.
// Example: default -> { String msg = "INVALID"; yield msg; }
// Choosing between traditional and enhanced: prefer enhanced switch for new code — it is less error-prone and more expressive.
public class EnhancedSwitchStatementInJava {

    public static void main(String[] args) {

        int value = 3;

        // Traditional switch: uses colon (:) after each case and requires break to prevent fall-through.
        switch (value) {  // Similar to if statement
            case 1: // Similar to else if statement
                System.out.println("Value is 1");
                break; // Once the condition is met, the break statement forces the program to come out of switch condition
            case 2: // Similar to else if statement
                System.out.println("Value is 2");
                break;
            case 3:
            case 4:
            case 5: // We can club multiple case statements together
                System.out.println("Value is 3 or 4 or 5");
                break;
            default: // It is similar to else statement. If the switch condition is not met in either case, the default, as the name suggest will get executed.
                System.out.println("Neither numbers are provided");
        }

        // Enhanced switch: uses arrow (->) syntax. No break needed — each case automatically ends after its expression.
        switch (value) {
            case 1 -> // Double colon(:) which was part of traditional switch statement is replaced by arrow(->) in the enhanced switch statement
                    System.out.println("Value is 1");
            // No Break statement is required in enhanced switch statement
            case 2 ->
                    System.out.println("Value is 2");
            case 3, 4, 5 -> // Multiple cases are separated by comma delimited list of values
                    System.out.println("Value is 3 or 4 or 5");
            default ->
                    System.out.println("Neither numbers are provided");
        }

        String month = "NOVEMBER";

        String quarterValue = getQuarterUsingYieldKeyword(month);

        if(quarterValue.equals("INVALID MONTH")){
            System.out.println(quarterValue);
        }else {
            System.out.println(month + " is in " + quarterValue);
        }
    }

    // Enhanced switch as a return expression: the switch can directly return a value when used with the 'return' keyword before 'switch'.
    public static String getQuarter(String month){

        // Each arrow case maps directly to a return value — concise and no fall-through risk.

        return switch (month) { // return keyword is used before the switch keyword
            case "JANUARY", "FEBRUARY", "MARCH" -> "1st Quarter";
            case "JULY", "AUGUST", "SEPTEMBER" -> "3rd Quarter";
            case "OCTOBER", "NOVEMBER", "DECEMBER" -> "4th Quarter";
            default -> "INVALID MONTH"; // When switch statement is used as an expression, meaning it returns a value, then a default label is required under most conditions.
        };
    }

    // Using yield: when a case block has multiple statements, use 'yield' to return the value from inside a block body.
    public static String getQuarterUsingYieldKeyword(String month){

        // yield is needed when the case body is a block { } rather than a simple expression.

        return switch (month) { // return keyword is used before the switch keyword
            case "JANUARY", "FEBRUARY", "MARCH" -> "1st Quarter";
            case "JULY", "AUGUST", "SEPTEMBER" -> "3rd Quarter";
            case "OCTOBER", "NOVEMBER", "DECEMBER" -> "4th Quarter";
            default -> {
                String defaultResponse = "INVALID MONTH"; // When switch statement is used as an expression, meaning it returns a value, then a default label is required under most conditions.
                yield defaultResponse;
            }
        };
    }
}
