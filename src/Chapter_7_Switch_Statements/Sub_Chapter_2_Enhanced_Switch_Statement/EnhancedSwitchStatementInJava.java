package Chapter_7_Switch_Statements.Sub_Chapter_2_Enhanced_Switch_Statement;
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

// Enhanced switch in detail :-
// 1) No fall-through, so there is no break to forget :-
// int x = 2;
// switch (x) {
//     case 1 -> System.out.println("one");
//     case 2 -> System.out.println("two");
//     default -> System.out.println("other");
// }
// Output :- two
// Note :- an arrow arm is finished when its statement ends, so execution can never slide into the arm below it.
//
// 2) Several values share one arrow :-
// int x = 4;
// switch (x) {
//     case 1, 2, 3 -> System.out.println("low");
//     case 4, 5    -> System.out.println("high");
//     default      -> System.out.println("out of range");
// }
// Output :- high
// Note :- the comma list does the job of three stacked case labels, with less to get wrong.
//
// 3) A switch expression produces a value :-
// String day = switch (2) {
//     case 1 -> "Monday";
//     case 2 -> "Tuesday";
//     default -> "Unknown";
// };
// System.out.println(day);           // prints Tuesday
// Note :- the value of the chosen arm becomes the value of the whole switch, so it can be assigned to a variable or returned from a method.
//
// 4) An arm may need more than one statement :-
// String month = "JANUARY";
// String quarter = switch (month) {
//     case "JANUARY", "FEBRUARY", "MARCH" -> "Q1";
//     default -> {
//         String msg = "INVALID MONTH";
//         yield msg;
//     }
// };
// System.out.println(quarter);       // prints Q1
// Note :- an arm that needs a block ends with `yield`, which hands the value back to the switch. `yield` is to a switch expression what `return` is to a method.
//
// Pitfall :- a switch expression must cover every possible input, so the `default` arm is compulsory there. A switch statement may omit it, but then an unmatched value does nothing at all.
// Pitfall :- `yield` is only allowed inside a switch expression. Writing it in an ordinary method is a compile error.

// @takeaway The enhanced switch uses `->` in place of `:`, and each arm ends when its statement ends, so there is no fall-through and no `break` to forget.
// @takeaway A comma-separated list groups values into one arm, so `case 1, 2, 3 -> ...` does the work of three stacked case labels.
// @takeaway An enhanced switch can be used as an expression: whatever the chosen arm produces becomes the value of the whole switch, ready to be assigned or returned.
// @gotcha A switch expression requires a `default` arm, because the expression has to produce a value for every possible input.
// @gotcha `yield` is valid only inside a switch expression, and it is what returns the value from an arm that needs more than one statement.

// @quiz (INTERVIEW) What is the difference between a traditional switch statement and an enhanced switch expression?
// @answer Traditional switch uses colon syntax and can fall through, while enhanced switch uses arrow syntax and does not fall through.
// @answer Enhanced switch can also be used as an expression that directly returns a value.

// @quiz (INTERVIEW) Can an enhanced switch return a value?
// @answer Yes. An enhanced switch can be used on the right side of an assignment or in a return statement.
// @answer Each case provides the result with an expression or with yield inside a block.

// @quiz (INTERVIEW) What is the purpose of yield in an enhanced switch?
// @answer yield returns a value from a case block when that case needs multiple statements.
// @answer It is only used inside switch expressions, not ordinary methods.

// @quiz (OCJP) Does an enhanced switch fall through here: switch (x) { case 1 -> System.out.println("A"); case 2 -> System.out.println("B"); default -> System.out.println("C"); }?
// @answer No. Each arrow case is isolated, so execution stops after the matching case.
// @answer That is why enhanced switch does not need break statements.
// @quiz (INTERVIEW) How should the month parameter be chosen for getQuarterUsingYieldKeyword?
// @answer Use an exact uppercase month name from the case labels, such as "JANUARY" or "DECEMBER"; otherwise the default branch yields "INVALID MONTH".
//
// @quiz (INTERVIEW TRAP) Why is equals("INVALID MONTH") case-sensitive?
// @answer String.equals compares exact character content, so "invalid month" and "INVALID MONTH" are different argument values.
//
// @quiz (OCJP) What parameter-like value does switch(month) use to choose a case?
// @answer It uses the selector expression month and matches it exactly against each String case label.
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
        String quarterFromExpression = getQuarter(month);

        System.out.println();
        System.out.println("Quarter using switch expression: " + month + " is in " + quarterFromExpression);

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
            case "APRIL", "MAY", "JUNE" -> "2nd Quarter";
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
            case "APRIL", "MAY", "JUNE" -> "2nd Quarter";
            case "JULY", "AUGUST", "SEPTEMBER" -> "3rd Quarter";
            case "OCTOBER", "NOVEMBER", "DECEMBER" -> "4th Quarter";
            default -> {
                String defaultResponse = "INVALID MONTH"; // When switch statement is used as an expression, meaning it returns a value, then a default label is required under most conditions.
                yield defaultResponse;
            }
        };
    }
}
