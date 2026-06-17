package Chapter_14_OOPSConcepts.Sub_Chapter_7_Static_And_Instance_Methods;
// Java methods are either STATIC (belong to the class) or INSTANCE (belong to individual objects).
// Deciding which to use: does the method need to access any instance fields or instance methods? If YES -> instance method. If NO -> static method.
// Static methods are called on the class: ClassName.methodName() or just methodName() if called from within the same class.
// Instance methods require an object: first create the object, then call the method on it.
// Static methods CANNOT access instance fields or call instance methods directly (no 'this' in static context).
// Instance methods CAN freely access both static and instance fields/methods.
// The main() method is static — it runs without any object being created. That's why you can't use 'this' in main.
/*
*    Static Methods
*    1) Static methods are declared using a static modifier and they belong to Class
*    2) Static methods can't access instance methods and instance variables directly.
*    3) They're usually used for operations that don't require any data from an instance of the class (from this)
*    4) Inside a static method, we can't use this keyword
*    5)  Whenever a method that doesn't use instance variables is declared, that method should probably be declared as a static method.
*    6)  For Ex :- main is a static method. It is called by the Java virtual machine when it starts the Java application.
*    7) Static methods are called as ClassName.methodName();
*    8) Static methods are called directly as methodName(); only if the static method is defined in the same class from which it is called
*
*    Instance Methods
*    1) Instance methods belong to an instance of a Class
*    2) To use an instance method, the class needs to be instantiated first, usually by using the new keyword.
*    3) Instance methods can access instance methods and instance variables directly
*    4) Instance methods can also access static methods and static variables directly.
*
*    Decision on when to use Static or Instance method
*
*    Should a method be static?
*    Does it use any fields (instance) variables or instance methods?
*    If yes, then the method should be an instance method
*    If no, then the method should be a static method
*
* */

public class StaticAndInstanceMethods {

    public static void main(String[] args) {
        // Static method called using ClassName.methodName();
        StaticAndInstanceMethods.printSum(2,3);
        // Static method called directly using methodName() as printHello() method was declared within the StaticAndInstanceMethods class, and also called in the same class
        printHello();

        // In order to access the instance method, first an instance of the class needs to be created
        StaticAndInstanceMethods staticAndInstanceMethods = new StaticAndInstanceMethods();
        // Then with the help of reference variable which is referencing the object, the instance method named printName() is called
        staticAndInstanceMethods.printName("Navneet");
    }

    public static void printHello(){
        System.out.println("Hello");
    }

    public static void printSum(int a, int b){
        System.out.println("sum = " + (a + b));
    }

    public void printName(String name){
        System.out.println("My Name is :- " + name);
    }
}
