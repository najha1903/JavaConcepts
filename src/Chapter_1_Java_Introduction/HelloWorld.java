package Chapter_1_Java_Introduction;
// Java is a compiled and interpreted language. You write source code (.java), the compiler turns it into bytecode (.class), and the JVM (Java Virtual Machine) runs the bytecode on any platform.
// This "write once, run anywhere" principle is one of Java's greatest strengths.
// Java programs start execution from the main method — it is the entry point that the JVM looks for when running a program.
// Keywords are reserved words in Java with predefined meanings. They are case-sensitive — 'class' is valid, 'Class' is not.
// The public keyword is an access modifier — it determines who can see/use this piece of code. 'public' means unrestricted access.
// The class keyword defines a class (a blueprint or template). The class name immediately follows. By convention, class names start with a capital letter.
// The static keyword means this method belongs to the class itself, not to any specific object (instance). The main method must be static so the JVM can call it without creating an object first.
// The void keyword means this method does not return any value. Methods that return nothing are declared void.
// main is the special method name the JVM looks for to start the program. The name must be exactly 'main'.
// String[] args is a parameter — it allows you to pass command-line arguments into the program when it runs. args is an array of Strings.
// System.out.println() is a method call that prints a line of text to the console. System is a class, out is a static field (output stream), println is the method.
public class HelloWorld {

    public static void main(String[] args) {

        System.out.println("Hello World");
    }

}
