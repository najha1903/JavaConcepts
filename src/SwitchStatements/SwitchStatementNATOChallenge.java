package SwitchStatements;

// In this challenge, we'll be using the NATO alphabet to replace a character or letter,with NATO's standardized word for that letter.

// 1) Create a new char variable. Use the traditional switch statement (with a colon in case labels)  that tests the value in the variable from Step 1.

// 2) Create cases for the characters, A, B, C, D, and E. Display a message in each case block,with the letter and the NATO word, then break.

// 3) Add a default block, which displays the letter with a message saying not found.

public class SwitchStatementNATOChallenge {

    public static void main(String[] args) {

        char ch = 'D';

        returnNatoStringForGivenCharacter(ch);

    }

    public static void returnNatoStringForGivenCharacter(char ch){

        switch (ch){
            case 'A':
                System.out.println("A is Able");
                break;
            case 'B':
                System.out.println("B is Baker");
                break;
            case 'C':
                System.out.println("C is Charlie");
                break;
            case 'D':
                System.out.println("D is Dog");
                break;
            case 'E':
                System.out.println("E is Easy");
                break;
            default:
                System.out.println("Not Found");
        }
    }

}
