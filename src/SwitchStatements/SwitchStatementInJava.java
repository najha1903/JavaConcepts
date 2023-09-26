package SwitchStatements;

// Both switch statement and if statement can achieve the same thing.
// The if statement is a little more flexible.
// Each time we do a test, we don't have to use the same test criteria.

// Switch can be used with 4 primitive types :- byte, short, char and int.
// Switch can also be used with string [should be using jdk version 7]

public class SwitchStatementInJava {

    public static void main(String[] args) {

//        ifElseExample(3);
//        switchCase(2);

        switchCaseWithoutUsingBreak(1);
        
    }

    // Program in if - else statement

    public static void ifElseExample(int value){
        if(value == 1){
            System.out.println("Value is 1");
        }else if(value == 2){
            System.out.println("Value is 2");
        }else {
            System.out.println("Is not 1 or 2");
        }

    }

     // Program in switch case

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

    // Program in switch case with multiple cases together

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


}
