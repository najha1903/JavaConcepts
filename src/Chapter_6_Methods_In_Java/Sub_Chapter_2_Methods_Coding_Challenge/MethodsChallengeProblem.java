package Chapter_6_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;

// This challenge separates calculation from display so each method has one clear responsibility.
// calculateHighScorePosition(int score) converts a player's score into a ranking position.
// Scores of 1000 or more get position 1, scores of 500 to 999 get position 2, scores of 100 to 499 get position 3, and all lower scores get position 4.
// displayHighScorePosition(String name, int position) prints a readable message using the player's name and calculated position.
// The main method demonstrates the full flow with sample scores 1500, 900, 400, and 50.
// Important: calculate the position first, then pass that result into the display method instead of mixing both jobs in one method.

public class MethodsChallengeProblem {

    public static void main(String[] args) {

        int position = calculateHighScorePosition(1500);
        displayHighScorePosition("Navneet",position);

        position = calculateHighScorePosition(900);
        displayHighScorePosition("Andrew", position);

        position = calculateHighScorePosition(400);
        displayHighScorePosition("Harvey",position);

        position = calculateHighScorePosition(50);
        displayHighScorePosition("Mike",position);


    }

    public static void displayHighScorePosition(String name, int position){
        System.out.println(name + " managed to get into position " + position + " on the high score table ");
    }

    public static int calculateHighScorePosition(int score){

        // Alternative and much better way to return position value

        int position = 4;

        if(score >= 1000){
            position = 1;
        }else if(score >= 500){
            position = 2;
        }else if(score >= 100){
            position = 3;
        }

        return position;
    }
}
