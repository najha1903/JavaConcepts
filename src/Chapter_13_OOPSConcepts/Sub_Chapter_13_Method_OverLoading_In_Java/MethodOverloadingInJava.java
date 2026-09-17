package Chapter_13_OOPSConcepts.Sub_Chapter_13_Method_OverLoading_In_Java;

// Parameter notes (what each argument means and how the parameter list matters):
// - calculateScore(String playerName, int score): playerName names the player to print, and score is the points value to convert; use this overload when the name is known.
// - calculateScore(int score): score is the points value for an unnamed player; this overload is chosen when only one int argument is passed.
// important: calculateScore(String, int) and calculateScore(int) are OVERLOADS because their parameter counts and types differ.
// - sum(int a, long b): a and b are the two numbers to add; an int second argument can widen to long when no exact sum(int, int) exists.
// - sum(int a, int b, int c): a, b, and c are the three numbers to add; this overload is chosen by parameter COUNT.
// - performingSum(int a, long b) vs performingSum(long a, int b): choose argument types carefully because (int, int) can widen in two equally valid ways, causing ambiguity.
// warning: type promotion can help choose an overload, but symmetric widening choices can make the call ambiguous at compile time.
// - performingSumAgain(int a, int b) vs performingSumAgain(long a, long b): exact int matches are preferred before widening to long.
// remember: overloading is compile-time selection based on method name plus parameter list; return type is not part of the overload key.
// - Overriding would require the child method to keep the identical parameter list, not merely a similar or wider one.

// @quiz (INTERVIEW) Which calculateScore overload is called by calculateScore("Navneet", 1000), and why?
// @answer calculateScore(String, int) is called because the argument list has a String followed by an int.
// @quiz (INTERVIEW) Which calculateScore overload is called by calculateScore(75), and what does the score parameter mean?
// @answer calculateScore(int) is called; score is the unnamed player's points value before multiplying by 1000.
// @quiz (OCJP) Why does sum(1, 2) call sum(int a, long b) in this file?
// @answer There is no exact sum(int, int), so the second int argument can widen to long and match sum(int, long).
// @quiz (INTERVIEW TRAP) Why is performingSum(1, 3) ambiguous here?
// @answer Both performingSum(int, long) and performingSum(long, int) need one int-to-long widening conversion, so neither overload is more specific.
// @quiz (OCJP) If performingSumAgain(20, 20) is called, why is the int,int overload chosen?
// @answer Java prefers the exact parameter match performingSumAgain(int, int) before widening both arguments to long.
// @quiz (INTERVIEW TRAP) Can changing only the return type create another calculateScore overload?
// @answer No. Overloading requires a different parameter list; the return type alone cannot distinguish methods.

public class MethodOverloadingInJava {

//    If a class has multiple methods having same name but different in parameters, it is known as Method Overloading.

//    Method return type may or may not be different, and that allows us to reuse the same method name

//    Overloading is very handy, it reduces duplicated code, and we don't have to remember multiple method names.

//    We can overload, static or instance methods

/*    To the code calling an overloaded method, it looks like a single method can be
      called with different sets of arguments. In actuality, each call that's made with
      a different set of arguments is calling a separate method.

      Java developers often refer to method overloading, as compile-time polymorphism.

      This means the compiler is determining the right method to call, based on the method name and argument list. Usually overloading happens within a single class.

      But methods can also be overloaded by subclasses. That's because a subclass inherits one version of the method from the parent class, and then the subclass can have
      another overloaded version of that method. */

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
