package OOPSConcepts;

public class MethodOverloadingInJava {

//    If a class has multiple methods having same name but different in parameters, it is known as Method Overloading.

//    There are two ways to overload the method in java

//    By changing number of arguments
//    By changing the data type

//    Method Overloading and Type Promotion*

//    One type is promoted to another implicitly if no matching datatype is found.
//    byte can be promoted to short, int, long, float or double. The short datatype can be promoted to int, long, float or double.
//    The char datatype can be promoted to int,long,float or double and so on.

//    If there are matching type arguments in the method, type promotion is not performed.

//    If there are no matching type arguments in the method, and each method promotes similar number of arguments, there will be ambiguity.

    public static void main(String[] args) {
        int score = calculateScore("Navneet", 1000);
        System.out.println("New Score is " + score);
        score = calculateScore(75);
        System.out.println("Second new Score is " + score);
        score = calculateScore("Navneet",1000);
        System.out.println("Second new Score is " + score);

        sum(1,2); //The b parameter is promoted to long
        sum(1,2,4);

        performingSumAgain(20,20); // Type promotion will not happen since there are matching arguments

       // performingSum(1,3); // Since there are no matching type arguments, and each method promotes similar number of arguments, there will be ambiguity.

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

    // Example of Method Overloading with TypePromotion

    public static void sum(int a, long b){
        System.out.println(a + b);
    }

    public static void sum(int a,int b,int c){
        System.out.println(a+b+c);
    }

    // Example of Method Overloading with Type Promotion in case of ambiguity

    public static void performingSum(int a,long b){
        System.out.println("a method invoked");
    }

    public static void performingSum(long a,int b){
        System.out.println("b method invoked");
    }


    // Example of Method Overloading with Type Promotion if matching found

    public static void performingSumAgain(int a, int b){
        System.out.println("Int argument is invoked");
    }

    public static void performingSumAgain(long a,long b){
        System.out.println("Long Argument is invoked");
    }

}
