package Chapter_8_Switch_Statements;

// Create a new switch statement using char instead of int.
// Create a new char variable
// Create a switch statement testing for
// A,B,C,D or E
// display a message if any of these are found and then break
// Add a default which displays a message saying not found

public class SwitchStatementChallenge {

    public static void main(String[] args) {
        switchStatementUsingChar('F');
    }

    public static void switchStatementUsingChar(char ch){
        switch (ch){
            case 'A' :
                System.out.println("A is found");
                break;
            case 'B' :
                System.out.println("B is found");
                break;
            case 'C' : case 'D' : case 'E' :
                System.out.println(ch + " is found");
                break;
            default:
                System.out.println("Could not find A, B, C, D or E");
        }
    }

}
