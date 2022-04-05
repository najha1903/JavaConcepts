package OOPSConcepts;

public class MethodOverloadingInJava {
//
//    If a class has multiple methods having same name but different in parameters, it is known as Method Overloading.
//
//    There are two ways to overload the method in java
//
//    By changing number of arguments
//    By changing the data type

    public static void main(String[] args) {
        int score = calculateScore("Navneet", 1000);
        System.out.println("New Score is " + score);
        score = calculateScore(75);
        System.out.println("Second new Score is " + score);
        score = calculateScore("Navneet",1000);
        System.out.println("Second new Score is " + score);

    }

    public static int calculateScore(String playerName, int score){
        System.out.println("Player " + playerName + " scored " + score + " points ");
        return score * 1000;
    }

    public static int calculateScore(int score){ // Example of method overloading. Number of arguments are changed
        System.out.println("Unnamed player scored " + score + " points");
        return score * 1000;
    }

//        public static long calculateScore(String playerName, int score){ // Just by changing the return type of the method is not sufficient, as it may lead to ambiguity.
//        System.out.println("Player " + playerName + " scored " + score + " points ");
//        return score * 1000L;
//    }
}
