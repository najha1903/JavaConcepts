package Chapter_8_Switch_Statements.Sub_Chapter_2_Enhanced_Switch_Statement;

public class EnhancedSwitchStatementInJava {

    public static void main(String[] args) {

        int value = 3;

        // Traditional (old) way to write switch statement
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

        // Enhanced (new) way to write switch statement
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

       // String quarterValue = getQuarter(month);

        String quarterValue = getQuarterUsingYieldKeyword(month);

        if(quarterValue.equals("INVALID MONTH")){
            System.out.println(quarterValue);
        }else {
            System.out.println(month + " is in " + quarterValue);
        }
    }

    // Program in enhanced switch case that returns a value
    public static String getQuarter(String month){

        //Enhanced Switch Case Statement which returns a value

        return switch (month) { // return keyword is used before the switch keyword
            case "JANUARY", "FEBRUARY", "MARCH" -> "1st Quarter";
            case "JULY", "AUGUST", "SEPTEMBER" -> "3rd Quarter";
            case "OCTOBER", "NOVEMBER", "DECEMBER" -> "4th Quarter";
            default -> "INVALID MONTH"; // When switch statement is used as an expression, meaning it returns a value, then a default label is required under most conditions.
        };
    }

    // Program in enhanced switch case that returns a value
    public static String getQuarterUsingYieldKeyword(String month){

        //Enhanced Switch Case Statement which returns a value

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
