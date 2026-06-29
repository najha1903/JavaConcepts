package Chapter_7_Methods_In_Java.Sub_Chapter_1_Methods_In_Java;
// A method is a named, reusable block of code that performs a specific task. Instead of writing the same logic multiple times, define it once in a method and call it wherever needed.
// Methods are the foundation of the DRY principle — Don't Repeat Yourself. They make code organized, readable, and maintainable.
// Method syntax: accessModifier static returnType methodName(paramType paramName, ...) { ... }
// The return type declares what type of value the method sends back to the caller. Use 'void' if the method returns nothing.
// If a method has a non-void return type, it MUST have a 'return statement' that returns a value of that type.
// Parameters are local variables automatically created when the method is called, holding the values (arguments) passed in. They are destroyed when the method returns.
// You can call a method with literal values: calculateScore(true, 800, 5, 100)
// Or with variables: calculateScore(gameOver, score, levelCompleted, bonus) — the VALUES of those variables are passed.
// Method overloading: you can have multiple methods with the SAME name but DIFFERENT parameter lists (different number or types of parameters). Java picks the correct version based on the arguments you pass.
// A negative return value (like -1) is a common programming convention to signal that something went wrong or the input was invalid.
// This file shows: (1) a void method with no parameters, (2) a commented-out void method with parameters (showing the evolution), and (3) the final int-returning overloaded method.

// @quiz (INTERVIEW) Is Java pass-by-value or pass-by-reference?
// @answer Java is ALWAYS pass-by-value.
// @answer For primitives, the actual value is copied into the method parameter, so changing the parameter does not change the caller's variable.
// @answer For objects, the value being copied is the reference. That means the method receives a copy of the reference to the same object, so it can modify the object's fields, but reassigning the parameter to a new object does NOT change the caller's reference.
// @answer Classic trap: swap(int a, int b) does not swap the original variables because only copies of a and b are swapped.

// @quiz (INTERVIEW) How does Java choose between overloaded methods such as print(int x) and print(double x)?
// @answer Java resolves overloads at compile time and chooses the most specific applicable method.
// @answer Calling print(5) picks print(int) because the argument is already an int, so that overload is a better match than widening to double.
// @answer If no exact match exists, Java may apply widening, boxing, or varargs in that general preference order.

// @quiz (INTERVIEW) What is the difference between a void method and a method with a return type?
// @answer A void method performs work but does not return a value to the caller.
// @answer A method with a return type must return a value of that declared type on every valid execution path.
// @answer You cannot write return 5; inside a void method, and you cannot use the result of calling a void method in an expression because there is no value to use.

// @quiz (INTERVIEW) What is the difference between a static method and an instance method in Java?
// @answer A static method belongs to the class itself and is typically called with the class name, such as Math.max() or MyClass.doWork().
// @answer An instance method belongs to a specific object and is called on an object reference.
// @answer Static methods cannot directly access instance fields or instance methods because they have no current object, but instance methods can access both instance and static members.
public class MethodsInJava {

    public static void main(String[] args) {
     calculateScore(); //method without any parameter
     // calculateScore(true,800,5,100); // Calling the overloaded method with parameters
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

/*
//    public static void calculateScore(boolean gameOver, int score, int levelCompleted, int bonus){

        // When we define parameters,Java will automatically create variables with appropriate data types, and it gets deleted, once process goes back to the line where method is called.
        // void means don't send any value back.If we don 't the method to return any information, we use void as a return type of method.

        if(gameOver){
            int finalScore = score + (levelCompleted * bonus);
            finalScore += 1000;
            System.out.println("Your final score was " + finalScore);
        }

//    }
*/

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
