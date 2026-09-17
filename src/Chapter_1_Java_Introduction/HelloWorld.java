package Chapter_1_Java_Introduction;

// Core Concepts: Java Architecture & Execution Flow
// Java is both a compiled and interpreted language.
// Source code (.java) is compiled by `javac` into intermediate bytecode (.class files),
// which is then executed by the Java Virtual Machine (JVM) on any platform ("Write Once, Run Anywhere").
//
// Key Components of Java Ecosystem:
// - JDK (Java Development Kit): Contains development tools (`javac`, `javadoc`, debugger) + JRE.
// - JRE (Java Runtime Environment): Contains core libraries + JVM for running applications.
// - JVM (Java Virtual Machine): The execution engine that translates bytecode into native machine instructions.
//
// Main Method Signature Breakdown (`public static void main(String[] args)`):
// - `public`: Access modifier allowing the JVM to invoke the method from outside the class package.
// - `static`: Allows the JVM to invoke `main` directly on the class without instantiating an object first.
// - `void`: Indicates that the method returns no value to the caller.
// - `main`: The exact identifier search target for the JVM application entry point.
// - `String[] args`: Parameter array that captures command-line arguments passed during execution.

// Parameter notes (what each argument means and how to choose it):
// - args (main): String[] array supplied by the JVM containing command-line tokens passed after the class name.
// - x (System.out.println): The message, variable, or expression printed to standard output followed by a newline.

// @quiz (INTERVIEW) What is the difference between JVM, JRE, and JDK?
// @answer JDK is for development (contains compiler javac), JRE is for running Java programs (libraries + JVM), and JVM is the execution engine.

// @quiz (INTERVIEW) Why is Java called platform-independent?
// @answer Java source code compiles to platform-neutral bytecode (.class), which runs on any system equipped with a compatible JVM.

// @quiz (OCJP) What happens if the main method is declared without the `static` keyword?
// @answer The code compiles cleanly, but running the class throws a runtime error indicating no entry-point main method was found.

// @quiz (OCJP) Is `public static void main(String... args)` a valid Java entry point?
// @answer Yes. Varargs syntax (`String...`) is treated as `String[]` by the JVM and is recognized as a valid main method signature.

// @quiz (INTERVIEW, EASY) Which statement correctly describes how JDK, JRE, and JVM relate to each other?
// @option The JDK contains the development tools and the JRE, and the JRE contains the core libraries and the JVM. [correct]
// @option The JRE contains the JDK and the javac compiler.
// @option The JVM contains the JRE and the core libraries.
// @option The three are unrelated components installed separately.
// @explain The nesting is JDK > JRE > JVM. The JDK adds development tools such as javac on top of the JRE, and the JRE provides the libraries and the JVM that runs a program.
// @why B: it is the other way round. The JDK contains the JRE, and javac lives in the JDK, not the JRE.
// @why C: the JVM is the innermost piece. The JRE contains the JVM, and the JVM does not contain the libraries.
// @why D: they are nested, not independent. Installing a JDK also gives you a JRE and a JVM.

// @quiz (INTERVIEW, EASY) What does javac produce, and what runs it?
// @option It compiles .java source into platform-neutral bytecode in .class files, which the JVM executes. [correct]
// @option It compiles .java source straight into native machine code for the current operating system.
// @option It interprets the .java source line by line, leaving no intermediate file.
// @option It produces a stand-alone .exe that runs without a JVM.
// @explain javac turns source into bytecode, and the JVM translates that bytecode into the native instructions of whatever machine it is running on.
// @why B: producing native code directly is not what javac does. Bytecode is the intermediate step, and that is exactly what makes the same .class file portable.
// @why C: javac is a compiler, not an interpreter, and it does write .class files to disk.
// @why D: a .class file is not an executable. It needs a JVM to run.

// @quiz (INTERVIEW, MEDIUM) Why must the main method be static?
// @option So the JVM can call it on the class itself, without creating an object first. [correct]
// @option So that other classes are allowed to call it.
// @option So that no subclass is able to override it.
// @option So that the method is not allowed to return a value.
// @explain A program needs an entry point before any object exists, so main must be callable without an instance. That is what static provides.
// @why B: being callable from other classes is the job of public, not static.
// @why C: preventing overriding is the job of final, not static.
// @why D: returning nothing is the job of void, not static.

// @quiz (OCJP, HARD) Which single change to `public static void main(String[] args)` still leaves a valid entry point?
// @option Adding final, as in `public static final void main(String[] args)` [correct]
// @option Removing static
// @option Removing public
// @option Changing the return type to int
// @explain The launcher requires a method named main that is public, static, and void, with one String[] parameter. Extra modifiers such as final are allowed, so the method is still a valid entry point.
// @why B: without static it becomes an instance method, so the launcher finds no entry point and the program fails at runtime.
// @why C: the launcher requires main to be public, so removing public breaks it.
// @why D: the return type must be void. A static int main compiles, but it is not accepted as the entry point.

// @quiz (INTERVIEW, EASY) What does the String[] args parameter of main actually receive?
// @option The command-line arguments passed after the class name, each as a String. [correct]
// @option The name of the class that is being run.
// @option The lines of output the program has printed so far.
// @option The list of methods declared in the class.
// @explain args carries the values typed after the class name, for example `java HelloWorld Navneet 25` gives args[0] = "Navneet" and args[1] = "25". They are Strings, not numbers.
// @why B: the class name is used by the launcher to find the class; it is not placed inside args.
// @why C: args is input to the program, not a record of its output.
// @why D: args holds data values only. Reflection is the tool for inspecting methods.

// @quiz (OCJP, HARD) What actually makes "Write Once, Run Anywhere" possible?
// @option The compiler produces platform-neutral bytecode, and each platform's own JVM translates it into that machine's instructions. [correct]
// @option The .java source file is copied to the new machine and compiled there by javac.
// @option The JVM is a single build that runs on every operating system unchanged.
// @option Bytecode is already native machine code, so nothing has to be translated.
// @explain The portable artefact is the .class file. The JVM is platform-specific, and that is the piece that adapts the same bytecode to each operating system.
// @why B: copying source and recompiling is possible, but it is not the mechanism. The whole point is that the compiled .class file is already portable.
// @why C: the JVM itself is not portable in that sense; there is a different JVM implementation for each platform, and installing one is how a machine gains the ability to run Java.
// @why D: bytecode is an intermediate form, not native code. Translating it is precisely what the JVM does.

public class HelloWorld {

    public static void main(String[] args) {

        System.out.println("Hello World");
    }

}
