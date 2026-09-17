package Chapter_1_Java_Introduction;

// Core Concepts: Java Architecture & Execution Flow
// Java is both a compiled and interpreted language.
// Source code (.java) is compiled by `javac` into intermediate bytecode (.class files),
// which is then executed by the Java Virtual Machine (JVM) on any platform ("Write Once, Run Anywhere").
//
// Those two steps, in order:
// - javac HelloWorld.java :- writes HelloWorld.class, the bytecode
// - java HelloWorld :- starts the JVM, which runs HelloWorld.class
//
// Note :- the file name must match the name of the public class inside it, so this file is
// HelloWorld.java and it declares `public class HelloWorld`. A mismatch is a compile error.
// Note :- Java is case-sensitive. `HelloWorld` and `helloworld` are two different names.
//
// Key Components of Java Ecosystem:
// - JDK (Java Development Kit): Contains development tools (`javac`, `javadoc`, debugger) + JRE.
// - JRE (Java Runtime Environment): Contains core libraries + JVM for running applications.
// - JVM (Java Virtual Machine): The execution engine that translates bytecode into native machine instructions.
//
// Main Method Signature Breakdown (`public static void main(String[] args)`):
// - `public`: The launcher has to call `main`, so the method must be visible outside its own class.
// - `static`: Allows the JVM to invoke `main` directly on the class without instantiating an object first.
// - `void`: Indicates that the method returns no value to the caller.
// - `main`: The exact identifier search target for the JVM application entry point.
// - `String[] args`: Parameter array that captures command-line arguments passed during execution.
//
// The smallest complete program, with each part labelled:
// public class HelloWorld {                       // the class name matches the file name
//     public static void main(String[] args) {    // the entry point the JVM looks for
//         System.out.println("Hello World");      // prints the text, then moves to a new line
//     }
// }
//
// `System.out.println` is three parts joined by dots :-
// - `System`  :- the class that gives access to the machine's standard streams.
// - `out`     :- the standard output stream, normally the console.
// - `println` :- prints the value it is given, then a newline. Use `print` when no newline is wanted.
// Note :- the text inside the quotes is a String literal, and `println` accepts any value, not only text.
//
// What you should be able to do after this topic :-
// - Compile a .java file and run the resulting .class file from the terminal.
// - Say what the JDK, the JRE and the JVM each provide.
// - Explain why `main` is public, static and void.


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

// @quiz (INTERVIEW, MEDIUM) The program below is run with:  java HelloWorld Java notes
// @code public class HelloWorld {
// @code     public static void main(String[] args) {
// @code         System.out.println(args.length);
// @code         System.out.println(args[0]);
// @code     }
// @code }
// @option It prints 2 and then Java. [correct]
// @option It prints 2 and then notes.
// @option It prints 1 and then Java.
// @option It does not compile, because args is never assigned a value.
// @explain args receives the words typed after the class name, in order. Two words were supplied, so the length is 2, and args[0] is the first one, "Java".
// @why B: args[1] is "notes". Index 0 is always the first argument.
// @why C: the length counts every argument, and two were given.
// @why D: the JVM creates args and fills it in. You never assign it yourself.

// @quiz (INTERVIEW, MEDIUM) This source is saved and you run javac HelloWorld.java. What happens?
// @code public class HelloWorld {
// @code     public static void main(String[] args) {
// @code         System.out.println("Hello")   // semicolon missing
// @code     }
// @code }
// @option javac reports a compile error, no .class file is produced, and nothing runs. [correct]
// @option javac still produces the .class file and the error appears only when you run it.
// @option The .class file is produced and the program runs, printing Hello.
// @option The compiler inserts the missing semicolon and compiles normally.
// @explain Compilation is a separate stage that happens before anything runs. A syntax problem stops javac, so the bytecode is never created and there is nothing to execute.
// @why B: javac only writes the .class when the whole file is valid, so the failure comes first.
// @why C: the file never reaches the point of producing bytecode.
// @why D: the compiler never repairs syntax. It reports the problem and stops.

// @quiz (INTERVIEW, MEDIUM) A colleague's machine has the JRE installed, but no JDK. Which task can they do?
// @option Run an existing .class file, but not compile .java source. [correct]
// @option Compile .java source, but not run the result.
// @option Both compile and run, because the JVM ships in the JRE.
// @option Neither, because the JVM is only installed with the JDK.
// @explain The JRE contains the core libraries and the JVM, which is everything needed to run a program. The development tools, including javac, live in the JDK, which is the larger set that contains the JRE.
// @why B: compiling needs javac, and javac is part of the JDK, not the JRE.
// @why C: the JVM is present, but the compiler is not, so compiling is not possible.
// @why D: the JVM is precisely what the JRE provides.

// @quiz (INTERVIEW, MEDIUM) You compile a program on Windows, then copy only the .class files to a Mac. What happens when a Java program is started there?
// @option The Mac's JVM runs the same bytecode, because the JVM translates it for that machine. [correct]
// @option It fails, because the .class files were produced for Windows.
// @option It fails, because the .java source has to be copied as well.
// @option It runs only after javac is used again on the Mac.
// @explain The compiled .class file is the portable part. It contains bytecode, not machine code, and each platform's JVM turns that bytecode into instructions its own processor understands.
// @why B: bytecode is platform-neutral. That is what makes the same file usable elsewhere.
// @why C: the source is not needed to run. It is needed only to compile.
// @why D: compiling again is unnecessary. That would defeat the purpose of bytecode.

// @quiz (OCJP, HARD) The class below compiles successfully. What happens when you try to run it?
// @code public class Start {
// @code     public static int main(String[] args) {
// @code         return 42;
// @code     }
// @code }
// @option It compiles but the launcher reports that no main method was found, because the return type must be void. [correct]
// @option It runs and prints 42.
// @option It does not compile, because main may not return an int.
// @option It runs and ignores the returned value.
// @explain A static int method named main is a perfectly legal Java method, so the compiler accepts it. The launcher, however, looks for public static void main with a single String[] parameter, so it finds no entry point and refuses to start.
// @why B: nothing calls the method, so nothing prints, and the JVM stops before main runs.
// @why C: the compiler allows it. Only the launcher's rule rejects it.
// @why D: the method is never reached. The failure happens before it is invoked.

// @quiz (INTERVIEW, HARD) You change a message inside HelloWorld.java, then run `java HelloWorld` without running javac first. What is the effect of the change?
// @option The old .class file still runs, so the change does not appear yet. [correct]
// @option The new source is used automatically, so the change appears.
// @option It fails, because the JVM always compiles the source first.
// @option It fails, because the .class file becomes invalid once the source changes.
// @explain java runs compiled bytecode; it does not read your .java file. Until javac produces a new .class, the JVM keeps running the previous version, which is why changing source without recompiling appears to do nothing.
// @why B: the source is not consulted at run time, so the new text cannot take effect.
// @why C: the JVM executes bytecode. Compiling is javac's job, and it is a separate step.
// @why D: the existing .class stays valid. It simply does not contain your change.

public class HelloWorld {

    public static void main(String[] args) {

        System.out.println("Hello World");
    }

}
