package Chapter_7_Switch_Statements.Sub_Chapter_1_Switch_Statement;
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

// @quiz (INTERVIEW) What data types can be used in a traditional Java switch statement?
// @answer switch supports byte, short, char, int, their wrapper types, enum types, and String.
// @answer It does not support every type, so larger or unrelated types still need if-else logic.

// @quiz (INTERVIEW) What is fall-through in a switch statement, and when is it useful?
// @answer Fall-through means execution continues into the next case when break is omitted.
// @answer It is useful when multiple cases should share the same logic, but accidental fall-through is a common bug.

// @quiz (INTERVIEW) What is the default case in a switch statement, and is it required?
// @answer default runs when no case label matches the switch value.
// @answer It is optional, but it is often useful for invalid or unexpected values.

// @quiz (INTERVIEW) When is switch usually preferred over a long if-else chain?
// @answer switch is cleaner when one expression is compared against many fixed constant values.
// @answer if-else is better when conditions are ranges, combinations, or more complex boolean expressions.

// @quiz (OCJP) What prints here: int x = 2; switch (x) { case 1: System.out.print("A"); case 2: System.out.print("B"); default: System.out.print("C"); }?
// @answer It prints BC.
// @answer Execution starts at case 2 and falls through to default because there are no break statements.

// @quiz (OCJP) Can a traditional switch use long or boolean as the selector?
// @answer No. long and boolean are not valid selector types for a traditional switch statement.
// @answer For those cases, use if-else instead.
// Parameter notes (what each method/constructor argument means and how to choose it):
// - main(String[] args): args holds optional command-line Strings; choose values when launch-time input is needed, otherwise it may be unused.
// - ifElseExample(int value): value is the number to compare against 1 and 2; choose an int whose exact value should select a message.
// - switchCase(int value): value is the switch selector matched against case labels 1, 2, and 3; choose one of those values for a specific branch or another int for default.
// - switchCaseMultipleCasesTogether(int value): value selects case 1, 2, or the grouped 3/4/5 branch; careful, grouped labels all run the same code.
// - switchCaseWithoutUsingBreak(int value): value chooses the starting case, but missing breaks cause fall-through; warning: choose 1 only if you expect all later messages too.
// - getQuarter(String month): month is expected to be an uppercase English month name such as "NOVEMBER"; choose exactly one of the listed names to avoid "INVALID MONTH".
// - quarterValue.equals("INVALID MONTH"): the argument is the Object/String to compare with quarterValue; choose the exact text you want to test, and remember equals is case-sensitive.
// - System.out.println(String x): x is the line printed with a newline; choose either the result alone or a concatenated explanatory sentence.
//
// @quiz (INTERVIEW) What values should be passed to getQuarter(String month)?
// @answer Pass an exact uppercase month name like "JANUARY" or "NOVEMBER"; any unlisted spelling, case, or null fails to match the cases.
//
// @quiz (INTERVIEW TRAP) What is dangerous about the value parameter in switchCaseWithoutUsingBreak?
// @answer It selects the starting case only; without break statements, execution falls through and runs later cases too.
//
// @quiz (OCJP) In quarterValue.equals("INVALID MONTH"), what does the parameter represent?
// @answer It is the value being compared to quarterValue; equals returns true only when the contents match exactly.

// @quiz (INTERVIEW, EASY) Which types can be used as the selector of a traditional switch statement?
// @option byte, short, char and int, plus their wrapper types, together with String and enum types. [correct]
// @option Every primitive type, including long, float, double and boolean.
// @option Any object type, because switch compares the selector with the case labels using equals.
// @option Only int and enum, because every case label must be an int constant.
// @explain A traditional switch accepts the smaller integral types byte, short, char and int, their wrapper classes, String from Java 7 onwards, and enum types. Nothing larger than int is allowed, and unrelated object types are not allowed either.
// @why B: long, float, double and boolean are primitives too, but none of them is a valid selector type, so such a switch would not compile.
// @why C: switch does not call equals on arbitrary objects; String and enum are the only reference types it accepts.
// @why D: char, byte, short and String are all valid selectors, so limiting switch to int and enum is wrong.

// @quiz (OCJP, MEDIUM) What does this code print when x is 2?
// @code switch (x) {
// @code     case 1: System.out.print("A"); break;
// @code     case 2: System.out.print("B");
// @code     case 3: System.out.print("C"); break;
// @code     default: System.out.print("D");
// @code }
// @option BC, because execution starts at case 2 and falls through into case 3 before that break stops it. [correct]
// @option B, because the matching case finishes as soon as its statement has run.
// @option BCD, because the default case always runs after the matching case.
// @option The code does not compile, because case 2 has no break statement.
// @explain The matching label is case 2, so B is printed. With no break there, execution falls through into the next case and prints C, and the break in case 3 then leaves the switch. default is never reached because a case did match.
// @why B: B on its own would need a break straight after case 2; the missing break causes fall-through into case 3.
// @why C: default runs only when no case label matches, and here case 2 matched.
// @why D: Omitting break is legal in a traditional switch; it causes fall-through rather than a compile error.

// @quiz (INTERVIEW, MEDIUM) Which statement about the default label of a switch is correct?
// @option It is optional, and it runs when no case label matches the selector. [correct]
// @option It is mandatory, because a switch written without default does not compile.
// @option It must be written before the first case, so that it is checked first.
// @option It is needed only when the selector is a String.
// @explain default is the switch equivalent of the final else: it is chosen only when the selector matches none of the case labels. Java lets you leave it out, but including it handles unexpected values.
// @why B: A switch compiles without default; it is recommended rather than required.
// @why C: A case label is still matched first wherever default is written, so there is no rule that it must come first.
// @why D: default is unrelated to the selector type; it applies to every form of switch.

// @quiz (OCJP, MEDIUM) Which of these types cannot be used as the selector of a traditional switch statement?
// @option long [correct]
// @option char
// @option String
// @option enum
// @explain A traditional switch accepts byte, short, char, int and their wrapper types, plus String and enum types. long is not in that list, so a switch on a long would not compile, and the same is true of float, double and boolean.
// @why B: char is a valid selector type and has been since the earliest version of the language.
// @why C: String has been allowed since Java 7, which is why the month lookup in this file works.
// @why D: enum types are valid selectors and are commonly combined with switch.

// @quiz (INTERVIEW TRAP, MEDIUM) Given getQuarter(String month), what does the call getQuarter("november") return?
// @option "INVALID MONTH", because the case labels are uppercase and String matching in a switch is case-sensitive. [correct]
// @option "4th Quarter", because a switch comparison ignores the case of a String.
// @option The code does not compile, because getQuarter has no default label.
// @option null, because an unmatched switch with no default produces no value.
// @explain String matching in a switch is exact and case-sensitive, so lowercase "november" matches none of the uppercase labels. Execution falls past every case to the final return, which supplies the text "INVALID MONTH".
// @why B: The comparison is case-sensitive, so the label "NOVEMBER" does not match the argument "november".
// @why C: The code compiles without default, because the return statement after the switch provides a value on that path.
// @why D: Nothing returns null here; the statement after the switch always returns the literal "INVALID MONTH".

// @quiz (INTERVIEW, MEDIUM) What happens when a return statement is executed inside a case block?
// @option It exits both the switch and the method, so no break is needed after it. [correct]
// @option It exits only the switch, and the rest of the method continues to run.
// @option It is not allowed inside a switch, where only break may be used.
// @option It behaves like break but still needs a following break to stop fall-through.
// @explain return leaves the method altogether, so control never comes back to the switch. That is why getQuarter can return from each group of cases without writing any break.
// @why B: return ends the whole method, not just the switch statement.
// @why C: Returning from inside a case is legal and is used in getQuarter.
// @why D: Once the method has returned, no later case can execute, so a following break would be unreachable.

// @quiz (INTERVIEW, EASY) In switchCaseMultipleCasesTogether, what does a call with value 4 print?
// @option "Value is 3 or 4 or 5", because case 3, case 4 and case 5 share the same code block. [correct]
// @option "Neither numbers are provided", because case 4 has no statements of its own.
// @option Nothing, because only the first label of a group of cases can match.
// @option The code does not compile, because an empty case label is not allowed.
// @explain Labels written one after another share the single block that follows them, so any of 3, 4 or 5 starts the same message. The shared block ends with a break, so there is no fall-through beyond it.
// @why B: default is chosen only when no label matches, and case 4 does match here.
// @why C: Every label in the group is a real match, so 4 selects the shared block.
// @why D: An empty case label is legal, and that is exactly how cases are grouped to share one block.

// @quiz (OCJP, HARD) What does switchCaseWithoutUsingBreak(4) print?
// @option "Value is 3 or 4 or 5" followed by "Neither numbers are provided". [correct]
// @option Only "Value is 3 or 4 or 5", because the switch stops once a matching case has run.
// @option "Value is 1", "Value is 2", "Value is 3 or 4 or 5" and "Neither numbers are provided", because every case runs when there is no break.
// @option Nothing, because a switch that contains no break statement cannot execute.
// @explain With no break anywhere, execution starts at the matching label and then falls through every following label. Starting at the grouped case 3/4/5, it prints that message and then falls into default.
// @why B: Nothing stops the flow at the end of the matched block, so default also runs.
// @why C: Execution starts at the label that matched, so the earlier messages for case 1 and case 2 are not printed.
// @why D: A switch without break is legal; it falls through instead of failing.

public class SwitchStatementInJava {

    public static void main(String[] args) {

        System.out.println("If-else example:");
        ifElseExample(3);

        System.out.println();
        System.out.println("Traditional switch example:");
        switchCase(2);

        System.out.println();
        System.out.println("Grouped cases example:");
        switchCaseMultipleCasesTogether(4);

        System.out.println();
        System.out.println("Switch without break example:");
        switchCaseWithoutUsingBreak(1);

        System.out.println();
        System.out.println("Quarter lookup:");

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
    // If break statements are not used, it will result in fall-through behaviour.

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
