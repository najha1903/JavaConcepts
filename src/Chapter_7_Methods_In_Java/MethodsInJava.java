package Chapter_7_Methods_In_Java;

// To avoid duplication of code, and reduce efforts, it is advisable to create method.
// We can create method once, and use the code time and time again.

public class MethodsInJava {

    public static void main(String[] args) {
     calculateScore(); //method without any parameter
    // calculateScore(true,800,5,100); // method with parameters.
        // The parameters should be passed in the same order as it is defined in the method.

        int highScore = calculateScore(true,800,5,100); // The value returned by calculateScore function is now assigned to highScore variable.
        System.out.println("Your final score was " + highScore);

        // We can also pass the values to the method using variables

        boolean gameOver = true;
        int score = 800;
        int levelCompleted = 5;
        int bonus = 100;

        int highScoreValue = calculateScore(gameOver,score,levelCompleted,bonus); // Here, the value supplied to the method is in the form of variables, which is also valid input to the method.
        System.out.println("Your final score was " + highScoreValue);
    }

    public static void calculateScore(){

        boolean gameOver = true;
        int score = 800;
        int levelCompleted = 5;
        int bonus = 100;

        if(gameOver){
            int finalScore = score + (levelCompleted * bonus);
            finalScore += 1000;
            System.out.println("Your final score was " + finalScore);
        }

    }

//    public static void calculateScore(boolean gameOver, int score, int levelCompleted, int bonus){
//
//        // When we define parameters,Java will automatically create variables with appropriate data types, and it gets deleted, once process goes back to the line where method is called.
//        // void means don't send any value back.If we don 't the method to return any information, we use void as a return type of method.

//        if(gameOver){
//            int finalScore = score + (levelCompleted * bonus);
//            finalScore += 1000;
//            System.out.println("Your final score was " + finalScore);
//        }
//
//    }

    public static int calculateScore(boolean gameOver, int score, int levelCompleted, int bonus){

        // Here, the data return type is int, which means method is returning a value of type int.
        // If we have to return any information, and send the value(result) back to the method call, we can use the method with return type option

        if(gameOver){
            int finalScore = score + (levelCompleted * bonus);
            finalScore += 1000;
            return finalScore;
        }
      /*  else{
            return -1;
        }*/

        return -1; // In programming terms, negative value indicates programming error.
    }
}
