package Chapter_1_Java_Introduction;

// Core Concepts: Java Architecture & Execution Flow
// Version note :- these entry-point examples and quizzes use Java 17 without preview features.
// Java 25 also supports instance main methods; the traditional signature here remains valid.
// Java is both a compiled and interpreted language.
// Source code (.java) is compiled by `javac` into intermediate bytecode (.class files),
// which is then executed by a compatible JVM with the required libraries on the target platform ("Write Once, Run Anywhere").
// A JVM may interpret bytecode and compile frequently used code to native instructions at runtime (JIT).
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
// Note :- this is a conceptual breakdown; modern JDKs include a runtime without a separate jre folder.
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

// @quiz (OCJP, MEDIUM) The class below compiles successfully. What happens when it is run with `java Startup`?
// @code public class Startup {
// @code     public void main(String[] args) {
// @code         System.out.println("started");
// @code     }
// @code }
// @option The JVM reports that the main method is missing, because no valid entry point exists. [correct]
// @option It prints started.
// @option It does not compile, because main must be static.
// @option It prints started once for each argument in args.
// @explain Compilation succeeds, because a non-static main is a legal method like any other. The launcher, however, looks for `public static void main(String[])`, does not find it, and reports that no main method could be found.
// @why B: the method is never called, so nothing is printed.
// @why C: the compiler has no objection. `static` is required by the launcher, not by the language.
// @why D: args is never supplied, because the method is never reached.

// @quiz (OCJP, MEDIUM) Which main method signatures let the class be started with `java Startup`?
// @option `public static void main(String[] args)` and `public static void main(String... args)` [correct]
// @option Only `public static void main(String[] args)`.
// @option Only `public static void main(String... args)`.
// @option Any method named main that takes one parameter.
// @explain Both forms are accepted, because `String...` is compiled to `String[]`, so the two are the same signature once compiled. Nothing else qualifies: the method must be public, static, void, and take exactly one String array.
// @why B: the varargs form is equally valid and is common in modern code.
// @why C: the array form is the classic signature and still the one the launcher expects.
// @why D: the return type and the parameter type matter. `private void main(int)` is not an entry point.

// @quiz (OCJP, HARD) What is printed by this program?
// @code public class Trace {
// @code     public static void main(String[] args) {
// @code         int a = 10;
// @code         System.out.print("A" + a + 5);
// @code         System.out.println();
// @code         System.out.println(a + 5 + "B");
// @code     }
// @code }
// @option A105 on one line, then 15B on the next. [correct]
// @option A15 on one line, then 15B on the next.
// @option A105 on one line, then 105B on the next.
// @option A155 on one line, then 155B on the next.
// @explain `+` is evaluated left to right. In `"A" + a + 5` the text comes first, so both numbers are joined: A105. In `a + 5 + "B"` the arithmetic comes first, so 10 + 5 is 15 and then the text is joined: 15B. The empty println only ends the line.
// @why B: this would need parentheses, as in `"A" + (a + 5)`.
// @why C: the second expression is arithmetic first, so 10 + 5 is 15 and not 105.
// @why D: nothing here adds 155. The digits are 10 and 5, never 15 and 5.

// @quiz (OCJP, HARD) These two public classes are declared together in One.java. What happens when it is compiled?
// @code // File One.java
// @code public class One { }
// @code public class Two { }
// @option It does not compile, because only one class in a file may be public. [correct]
// @option It compiles, and both classes are usable.
// @option It compiles only if Two is also declared in its own file.
// @option It compiles, and One.java is renamed to Two.java automatically.
// @explain A source file may hold several classes, but only one of them may be public, and its name must match the file name. Two public classes in one file is a compile-time error.
// @why B: the second public declaration is rejected before anything is produced.
// @why C: declaring Two in its own file is exactly the fix. It is not an additional condition on this file.
// @why D: the compiler never renames files.

// @quiz (OCJP, MEDIUM) A file is saved as `Start.java` and contains `public class Startup { }`. What is the result?
// @option It does not compile, because the public class name must match the file name. [correct]
// @option It compiles, and produces Start.class.
// @option It compiles, and produces Startup.class.
// @option It compiles only if Startup is also mentioned in a package statement.
// @explain A public class must live in a file of the same name, so `public class Startup` has to be in Startup.java. The compiler reports this before producing any bytecode.
// @why B: no bytecode is produced from this file.
// @why C: the class name is fine; the mismatch between the class name and the file name is what fails.
// @why D: a package statement is unrelated to this rule.

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
// @explain In the Java 17 entry-point form, static lets the launcher call main without constructing an instance of its class.
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

// Getting a program to run, from the beginning :-
// 1) Source, bytecode, then the JVM :-
// HelloWorld.java   --javac-->   HelloWorld.class   --java-->   runs on the JVM
// Note :- javac produces bytecode. Class-name launch runs that bytecode; source-file launch (`java HelloWorld.java`, Java 11+) compiles source in memory first.
// Note :- this two-step arrangement is why Java is described as both compiled and interpreted: compiled to bytecode once, then the JVM runs that bytecode on whatever machine it is on.

// 2) The two commands you actually type :-
// javac HelloWorld.java      // compiles, and writes HelloWorld.class next to the source
// java HelloWorld            // runs the class, with NO .java or .class on the end
// Note :- `java HelloWorld.class` fails. The argument is a class name, not a file name.
// These commands assume the package-free example below. For this repository file, run from the project root:
// javac -d out src/Chapter_1_Java_Introduction/HelloWorld.java
// java -cp out Chapter_1_Java_Introduction.HelloWorld
//
// 3) The smallest complete program :-
// public class HelloWorld {
//     public static void main(String[] args) {
//         System.out.println("Hello, Navneet!");
//     }
// }
// Output :- Hello, Navneet!
//
// 4) Reading System.out.println in three parts :-
// System  is a class that Java provides, holding the standard streams.
// out     is the standard output stream inside that class, normally the console.
// println is the method called on it, and the "ln" means it moves to a new line after printing.
// Note :- print does the same without the new line, and printf takes a format string instead.
//
// 5) Four rules that decide whether the file even compiles :-
// - The file name must match the public class inside it, so this file is HelloWorld.java and it declares `public class HelloWorld`.
// - Java is case-sensitive: `system.out.println` and `String` written as `string` are both wrong.
// - One file may hold several classes, but only one of them may be public.
// - A top-level class cannot be private or protected; this is a declaration rule, independent of main.
//
// What you should be able to do after this chapter :-
// - Write, compile and run a class that prints something, and explain what javac did and what java did.
// - Explain why a change to the source appears to be ignored until the file is compiled again.
// - Read `System.out.println("...")` as a class, a stream and a method rather than as one magic word.

// @takeaway `javac` compiles a file; `java` runs a class name, so `java HelloWorld.class` fails.

// @takeaway Java compiles to portable bytecode; a compatible JVM executes it using interpretation and/or native compilation.

// @takeaway `main` is `public static void`: public so the launcher can call it, static so the JVM needs no object, void because it returns nothing.
// @snippet public static void main(String[] args)

// @takeaway The file name must match the public class name, or it is a compile error.

// @takeaway Java is case-sensitive: `String` and `string` are two different names.

// @takeaway JDK = tools + JRE. JRE = libraries + JVM. JVM runs the bytecode.

// @takeaway `System.out.println` is three things joined by dots: the `System` class, the `out` stream, and the `println` method. `print` leaves the newline off.
// @snippet System.out.println("Hello World");

// @takeaway A String literal is the text in quotes, and `println` takes any value, not only text.

// @gotcha The JVM runs the `.class` on disk, so editing the source without recompiling changes nothing.
// @gotcha Only one class per file may be public, and it must be the one the file is named after.
// @gotcha A name mismatch is a compile error, not a runtime one.


public class HelloWorld {

    public static void main(String[] args) {

        System.out.println("Hello World");
    }

}
