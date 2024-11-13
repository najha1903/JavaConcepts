package Chapter_7_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;

// Create a method called displayHighScorePosition. It should have player's name as a parameter, and a 2nd parameter as a position in the high score table.
// You should display the players name along with a message like " managed to get into position " and the position they got and a further message
// " on the high score table ".

// Create a 2nd method called calculateHighScorePosition.
// It should send one argument only, the player score
// It should return an int
// the return data should be
// 1 if the score is >= 1000
// 2 is the score is >= 500 and < 1000
// 3 if the score is >= 100 and < 500
// 4 in all other cases
// call both methods and display the results of the following
// a score of 1500, 900, 400 and 50

public class MethodsChallengeProblem {

    public static void main(String[] args) {

        int position = calculateHighScorePosition(1500);
        displayHighScorePosition("Navneet",position);

        position = calculateHighScorePosition(900);
        displayHighScorePosition("Andrew", position);

        position= calculateHighScorePosition(400);
        displayHighScorePosition("Harvey",position);

        position = calculateHighScorePosition(50);
        displayHighScorePosition("Mike",position);


    }

    public static void displayHighScorePosition(String name, int position){
        System.out.println(name + " managed to get into position " + position + " on the high score table ");
    }

    public static int calculateHighScorePosition(int score){
//        if(score >= 1000){
//            return 1;
//        }else if(score >= 500){
//         return 2;
//        }else if(score >= 100){
//            return 3;
//        }
////        else{
////            return 4;
////        }
//        return 4;

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
