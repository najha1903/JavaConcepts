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

// @quiz (INTERVIEW) What is the difference between JVM, JRE, and JDK?
// @answer JVM executes Java bytecode, JRE is the runtime package with the JVM and core libraries, and JDK adds tools like javac.
// @answer In short, JDK is for development, JRE is for running programs, and JVM is the execution engine.

// @quiz (INTERVIEW) What does public static void main(String[] args) mean in Java?
// @answer public lets the JVM access it, static lets it run without creating an object, and void means it returns no value.
// @answer main is the entry-point method name, and String[] args holds command-line arguments.

// @quiz (INTERVIEW) Is Java compiled or interpreted?
// @answer Java is both: javac compiles source code to bytecode, and the JVM interprets or JIT-compiles that bytecode at runtime.
// @answer This two-step model is why Java can stay portable across platforms.

// @quiz (INTERVIEW) Why is Java called platform-independent?
// @answer Java source is compiled to bytecode, and any platform with a compatible JVM can run that bytecode.
// @answer That is the basis of Java's "write once, run anywhere" idea.

// @quiz (OCJP) What happens here: class A { public void main(String[] args) {} }?
// @answer It compiles, but the JVM will not treat it as the entry point because main is not static.
// @answer Running the class gives a main method not found error.

// @quiz (OCJP) Is this a valid entry point: public static void main(String... args)?
// @answer Yes. String... is varargs syntax, and it is treated as a String[] parameter by the JVM.
// @answer This signature is a valid Java entry point.
public class HelloWorld {

    public static void main(String[] args) {

        System.out.println("Hello World");
    }

}
