package Chapter_12_Exception_Handling;

// Core Concepts: Exception Handling in Java
// An exception is an abnormal condition or runtime error that occurs during program execution and disrupts normal control flow.
// Without handling, an exception immediately terminates execution and prints a stack trace.
//
// Exception Hierarchy Overview:
// - `Throwable`: Root class for all errors and exceptions.
// - `Error`: Serious problems (e.g. `OutOfMemoryError`) that applications should NOT attempt to catch.
// - `Exception`: Checked exceptions (compulsory handling/declaration, e.g. `IOException`).
// - `RuntimeException`: Unchecked exceptions (programmer logic errors, e.g. `NullPointerException`, `ArithmeticException`).
//
// Key Components & Blocks:
// - `try` block: Encloses statements that might throw an exception. Keep try blocks scoped tightly.
// - `catch` block: Handles a specific exception type thrown from the associated `try` block.
// - `finally` block: Guarantees execution regardless of whether an exception was thrown or caught (used for resource cleanup).
//
// Useful Diagnostic Methods:
// - `e.getMessage()`: Returns detailed string description of the exception.
// - `e.printStackTrace()`: Prints stack trace details to standard error.


// Warning: Avoid broad `catch (Exception e)` blocks as they can swallow unintended bugs; catch specific exceptions instead.

// Handling exceptions in practice :-
// 1) try, catch and finally together :-
// try {
//     int result = 10 / divisor;         // the risky line
//     System.out.println(result);
// } catch (ArithmeticException e) {
//     System.out.println("Cannot divide by zero");
// } finally {
//     System.out.println("Done");        // runs whether or not anything went wrong
// }
// Output for divisor 0 :- Cannot divide by zero, then Done
// Note :- try holds the code that might fail, catch runs only when that type of failure happens, and finally runs in both cases. This is why finally is used to close files and other resources.
//
// 2) Checked against unchecked :-
// Checked, such as IOException: the compiler insists you either catch it or declare it with throws. It represents something outside your control, like a missing file.
// Unchecked, such as NullPointerException or ArithmeticException: the compiler asks for nothing. These are usually mistakes in the program's own logic.
// Note :- the rule of thumb is that checked problems are expected and recoverable, while unchecked ones are bugs to be fixed.
//
// 3) throw raises one now, throws warns the caller :-
// static void checkAge(int age) {
//     if (age < 0) {
//         throw new IllegalArgumentException("Age cannot be negative");   // raised at this moment
//     }
// }
// static void readFile() throws IOException {   // declares that this method may pass the problem on
//     // ...
// }
// Note :- throw is a statement that fires the exception. throws is part of the method signature, telling callers that they may have to deal with one.
//
// 4) Catch the specific type first :-
// try {
//     // ...
// } catch (NumberFormatException e) {     // narrower type first
//     System.out.println("Bad number");
// } catch (Exception e) {                 // broader type afterwards
//     System.out.println("Something else");
// }
// Note :- reversing these two is a compile error, because the broader catch would already have handled everything and the narrower one could never be reached.
//
// 5) One catch for several types :-
// try {
//     // ...
// } catch (NumberFormatException | NullPointerException e) {
//     System.out.println("Bad input");
// }
// Note :- the pipe form handles two unrelated types in one block. The variable e is a common type, so it cannot be used to call methods that belong to only one of them.
//
// 6) Handling and re-throwing :-
// try {
//     Integer.parseInt(text);
// } catch (NumberFormatException e) {
//     System.out.println("Invalid input: " + e.getMessage());   // report it
//     throw e;                                                  // and let the caller decide what to do
// }
// Note :- catching an exception does not mean you must swallow it. You can note what happened and pass it upwards.
//
// Pitfall :- a broad `catch (Exception e)` around a whole method hides programming mistakes. A NullPointerException caused by a bug then looks the same as a recoverable bad input, and the bug survives unnoticed.
// Pitfall :- `Error` and its subclasses such as OutOfMemoryError are not meant to be caught. An application cannot reasonably carry on after them.
// Pitfall :- an empty catch block is the worst version of the same problem. The failure disappears completely and nothing tells you why.

// @takeaway An exception interrupts the normal flow; unhandled, the program stops and prints a stack trace.
// @takeaway `try` holds the risky code, `catch` handles one type of failure, and `finally` runs whatever happened.
// @snippet try { Integer.parseInt("x"); }
// @snippet catch (NumberFormatException e) { System.out.println("bad input"); }
// @snippet finally { System.out.println("done"); }
// @takeaway Checked exceptions such as `IOException` must be handled; unchecked ones such as `NullPointerException` are usually bugs.
// @snippet java.io.FileReader r = new java.io.FileReader("x");      // compile error
// @takeaway `throw` raises an exception; `throws` in the signature warns callers that this method may pass one on.
// @snippet void risky() throws java.io.IOException { throw new java.io.IOException("boom"); }
// @takeaway List the most specific catch first, because a broader one above it makes the narrower one unreachable and the file will not compile.
// @snippet try { } catch (Exception e) { } catch (RuntimeException e) { }      // compile error
// @gotcha A `catch (Exception e)` around everything treats a programming bug and a recoverable problem the same way.
// @gotcha An empty catch block makes the failure disappear silently.
// @gotcha `finally` still runs when the `try` block returns, which is why resources are closed there.
// @snippet try { return; } finally { System.out.println("still runs"); }
// @gotcha `Error` and its subclasses such as `OutOfMemoryError` signal a JVM-level failure, not something your code can recover from.
// @gotcha `e.getMessage()` can be null, so the stack trace is what actually shows where the problem happened.


// @quiz (INTERVIEW) What is the difference between checked and unchecked exceptions?
// @answer Checked exceptions (subclasses of Exception excluding RuntimeException) are checked at compile-time and must be caught or declared with `throws`.
// @answer Unchecked exceptions (subclasses of RuntimeException) occur at runtime due to logic bugs and do not require explicit compiler handling.

// @quiz (INTERVIEW TRAP) Does a `finally` block execute if the `try` block contains a `return` statement?
// @answer Yes. The `finally` block executes before the method returns. The main exception is if `System.exit()` is called, terminating the JVM.


// @quiz (INTERVIEW TRAP) Does a finally block always execute in Java, even if there is a return in try or catch?
// @answer Yes. The finally block runs even when try or catch executes a return statement.
// @answer Example: try { return 1; } finally { System.out.println("finally"); } prints finally first and then returns 1.
// @answer The main practical exception is System.exit(), which terminates the JVM before finally can run.

// @quiz (INTERVIEW) What is the difference between checked and unchecked exceptions in Java?
// @answer Checked exceptions are exceptions the compiler forces you to handle with try-catch or declare with throws, such as IOException and SQLException.
// @answer Unchecked exceptions are RuntimeException and its subclasses, such as NullPointerException and ArrayIndexOutOfBoundsException, and the compiler does not require you to declare or catch them.
// @answer Checked exceptions represent recoverable conditions the API wants you to consider explicitly, while unchecked exceptions usually indicate programming bugs or invalid runtime state.

// @quiz (INTERVIEW) What is the basic exception hierarchy in Java?
// @answer At the top is Throwable.
// @answer Throwable has two major branches: Error and Exception.
// @answer Error represents serious JVM-level problems such as OutOfMemoryError and is generally not something application code should try to catch and recover from.
// @answer Exception contains checked exceptions and also RuntimeException, whose subclasses are the unchecked exceptions.

// @quiz (INTERVIEW) What is multi-catch in Java?
// @answer Multi-catch lets you catch multiple exception types in one catch block using the pipe symbol, for example catch (IOException | SQLException e).
// @answer It was added in Java 7 and is useful when the handling logic is the same for several exception types.
// @answer The caught exception variable is effectively final, so you cannot reassign e inside that catch block.

// @quiz (INTERVIEW) What is the difference between throw and throws in Java?
// @answer throw is used inside a method body to actually create or pass an exception object, such as throw new IllegalArgumentException("bad input").
// @answer throws is used in the method signature to declare that the method may propagate certain checked exceptions to its caller.
// @answer Think of throw as the action and throws as the declaration.

// @quiz (INTERVIEW) What is a NullPointerException and when does it occur?
// @answer A NullPointerException happens when you try to call a method, access a field, or otherwise use an object reference that is null.
// @answer Example: String s = null; s.length(); throws NullPointerException because s does not point to any actual String object.
// @answer It is one of the most common runtime exceptions in Java and usually indicates missing null checks or incorrect object initialization.

// @quiz (INTERVIEW, EASY) What is the basic structure of the exception hierarchy in Java?
// @option Throwable is the root, splitting into Error, which applications should not catch, and Exception, which includes RuntimeException and the checked exceptions. [correct]
// @option Exception is the root of every throwable type.
// @option Error and RuntimeException are the same branch of the hierarchy.
// @option RuntimeException is a checked exception.
// @explain Everything throwable descends from Throwable. Error covers serious JVM-level problems such as OutOfMemoryError. Exception covers the conditions your code is expected to handle.
// @why B: Throwable is the root. Exception is one of its two main branches.
// @why C: Error and RuntimeException sit on different branches, because Error is not something application code recovers from.
// @why D: RuntimeException and its subclasses are the unchecked exceptions.
//
// Note:- the question "What is the difference between checked and unchecked exceptions?" is already
// asked above as a written question, so it is not repeated here as a multiple-choice question.

// @quiz (INTERVIEW TRAP, HARD) What is printed by this code?
// @code try { return 1; } finally { System.out.println("finally"); }
// @option finally is printed, and then the method returns 1. [correct]
// @option Nothing is printed, because return skips the finally block.
// @option It does not compile, because return is not allowed inside try.
// @option finally runs only when an exception is thrown.
// @explain A finally block runs before control leaves the try statement, including when a return is on its way out. The return value is settled after finally completes.
// @why B: finally is designed to run even on the way out through a return.
// @why C: return inside try is perfectly legal.
// @why D: finally runs whether or not an exception occurred. The practical exception is System.exit, which ends the JVM.

// @quiz (INTERVIEW, MEDIUM) What is the difference between throw and throws?
// @option throw raises an exception inside a method body, while throws declares in the signature which checked exceptions may propagate. [correct]
// @option Both are written in the method signature.
// @option throws is used inside the body to raise an exception.
// @option throw can be used only with unchecked exceptions.
// @explain Think of throw as the action and throws as the declaration. throw new IllegalArgumentException("bad") creates and passes an exception now; throws warns the caller that a checked exception may arrive.
// @why B: throw belongs in the body, not the signature.
// @why C: raises is throw's job; throws only declares.
// @why D: throw works with any Throwable, including checked exceptions.

// @quiz (INTERVIEW, MEDIUM) When does a NullPointerException occur?
// @option When a method or field is used through a reference that is null, such as String s = null; s.length(); [correct]
// @option When null is assigned to a variable.
// @option It is a checked exception that must be caught.
// @option It occurs at compile time.
// @explain Assigning null is harmless. The failure comes later, when you try to use the reference as though it pointed at a real object, and there is nothing there to run the method on.
// @why B: the assignment itself is fine, and local variables must simply be assigned before use.
// @why C: NullPointerException extends RuntimeException, so it is unchecked.
// @why D: the compiler cannot know whether a reference will be null, so this is a runtime failure.

// @quiz (INTERVIEW TRAP, MEDIUM) Why is a broad catch (Exception e) usually a poor choice?
// @option It can swallow unrelated bugs, so it is better to catch the specific exception you expect. [correct]
// @option It is always the recommended practice.
// @option You must always catch Throwable instead.
// @option Specific catch blocks must come after the general one.
// @explain A broad catch treats every failure as the one you anticipated, which hides the problems you did not. Catching the specific type keeps the handler honest about what it can actually deal with.
// @why B: the general guidance is the opposite, unless you genuinely intend to handle everything.
// @why C: catching Throwable is even broader, and it would also catch Error.
// @why D: this is reversed. A more specific catch must come first, because a general one would otherwise capture the exception before the specific block is reached.

// @quiz (INTERVIEW, EASY) What do getMessage() and printStackTrace() do?
// @option getMessage() returns the description of the exception, and printStackTrace() writes the trace to standard error. [correct]
// @option getMessage() prints the trace to standard error.
// @option printStackTrace() returns a String that you must print yourself.
// @option Both are fields rather than methods.
// @explain These are the two diagnostic tools you reach for first. The message explains what went wrong, and the trace shows where it happened by listing the call chain.
// @why B: that is what printStackTrace does. getMessage only returns the text.
// @why C: it writes the trace itself and returns nothing, which is why you cannot capture it directly.
// @why D: they are methods, called with parentheses.

// @quiz (OCJP, HARD) Does this code compile?
// @code try {
// @code     int value = Integer.parseInt("42");
// @code } catch (Exception e) {
// @code     System.out.println("general");
// @code } catch (NumberFormatException e) {
// @code     System.out.println("number");
// @code }
// @option No. The broader catch comes first, so the narrower one can never be reached. [correct]
// @option Yes, and it prints general when parsing fails.
// @option Yes, and it prints number when parsing fails.
// @option Yes, because the catch blocks are checked in order at runtime.
// @explain Catch blocks are tested in the order written. Since NumberFormatException is a kind of Exception, the first block would already handle it, which makes the second block unreachable and therefore a compile error.
// @why B: the code does not compile, so nothing runs.
// @why C: the specific catch must be written before the general one.
// @why D: the order matters, and the compiler rejects an order that makes a block unreachable.

// @quiz (OCJP, MEDIUM) What happens when this code runs?
// @code int result = 10 / 0;
// @code System.out.println(result);
// @option It compiles and then throws ArithmeticException at runtime. [correct]
// @option It does not compile, because division by zero is an error.
// @option It prints 0.
// @option It prints Infinity.
// @explain Division by zero is legal to write, because 0 is a perfectly valid int. The failure happens when the division is actually performed, so the exception appears at runtime rather than at compile time.
// @why B: the compiler cannot know the value of the divisor at compile time.
// @why C: there is no result to print. The exception is thrown during the division.
// @why D: integer division never yields Infinity. For a double, 10.0 / 0 would give Infinity instead.

// @quiz (OCJP, MEDIUM) What is thrown by this code?
// @code int[] numbers = {1, 2, 3};
// @code System.out.println(numbers[3]);
// @option ArrayIndexOutOfBoundsException, because valid indexes are 0 to 2. [correct]
// @option NullPointerException.
// @option Nothing. It prints 0.
// @option Nothing. It prints 3.
// @explain A three-element array has indexes 0, 1 and 2. Asking for index 3 is past the end, so the runtime rejects the access. Both this and NullPointerException are unchecked exceptions.
// @why B: the array exists. The problem is the index, not a null reference.
// @why C: Java does not return a default for an out-of-range index.
// @why D: index 3 does not exist, so no value can be returned.

// @quiz (INTERVIEW TRAP, HARD) What does this method return?
// @code static int test() {
// @code     try {
// @code         return 1;
// @code     } finally {
// @code         return 2;
// @code     }
// @code }
// @option 2, because a return inside finally overrides the return from try. [correct]
// @option 1, because the return in try is evaluated first.
// @option 3, because the two values are added.
// @option It does not compile, because a method cannot have two returns.
// @explain The finally block runs before the method actually returns, so its return statement replaces the value that was on its way out. Returning from finally is legal but usually a mistake, because it silently discards the original result.
// @why B: the value from try is discarded, because finally runs afterwards.
// @why C: nothing is added. Only the last return value is used.
// @why D: several return statements in one method are normal.

// @quiz (INTERVIEW, MEDIUM) Which exception type is NOT required to be caught or declared?
// @option ArithmeticException, because it extends RuntimeException and is unchecked. [correct]
// @option IOException, because it is unchecked.
// @option SQLException, because it is unchecked.
// @option FileNotFoundException, because it is unchecked.
// @explain Unchecked exceptions extend RuntimeException, and the compiler does not force handling for them. The other three listed types extend Exception directly, which makes them checked, so they must be caught or declared with throws.
// @why B: IOException is checked, so it must be handled.
// @why C: SQLException is checked as well.
// @why D: FileNotFoundException extends IOException, so it is checked too.

// Exam practice :-
// @quiz (OCJP, MEDIUM) What is printed by this program?
// @code public class TryMe {
// @code     public static void main(String[] args) {
// @code         try {
// @code             System.out.print("A");
// @code             int x = 1 / 0;
// @code             System.out.print("B");
// @code         } catch (ArithmeticException e) {
// @code             System.out.print("C");
// @code         } finally {
// @code             System.out.print("D");
// @code         }
// @code         System.out.print("E");
// @code     }
// @code }
// @option ACDE [correct]
// @option ABCDE
// @option ACD
// @option ADE
// @explain A is printed, then the division throws and skips the rest of the try block, so B never runs. C is printed by the matching catch, D by the finally, and E continues after the whole structure.
// @why B: B sits after the line that throws, so it is skipped.
// @why C: E runs once the try statement is finished. The catch does not end the program.
// @why D: the catch matches, so C is printed before the finally runs.

// @quiz (OCJP, HARD) What does this method return?
// @code static int check() {
// @code     try {
// @code         return 1;
// @code     } finally {
// @code         return 2;
// @code     }
// @code }
// @option 2, because the value from finally replaces the one from try. [correct]
// @option 1, because try returns first.
// @option It does not compile, because two returns cannot exist in one method.
// @option It does not compile until the finally block has no return.
// @explain A `return` in a finally block discards the value the try block was returning, and the method exits from the finally instead. The code compiles, which is what makes the mistake so easy to ship. Only one path out of a method ever runs. Writing a return inside finally has no warning at all, so it is best avoided.
// @why B: the try block's return begins, then finally runs and overrides it.
// @why C: several returns are allowed. What is wrong here is the value being replaced, not the number of returns.
// @why D: it compiles as written. That is the trap.

// @quiz (OCJP, MEDIUM) Which exception is UNCHECKED?
// @option NumberFormatException [correct]
// @option IOException
// @option FileNotFoundException
// @option InterruptedException
// @explain NumberFormatException extends IllegalArgumentException, which extends RuntimeException, so the compiler does not require it to be caught or declared. The other three are checked exceptions, so a method that can throw one must catch it or declare it with throws.
// @why B: IOException is the classic checked exception.
// @why C: FileNotFoundException extends IOException, so it is checked too.
// @why D: InterruptedException is checked, which is why a blocking call makes you deal with it.

// @quiz (OCJP, HARD) What is printed by this program?
// @code public class Narrow {
// @code     public static void main(String[] args) {
// @code         try {
// @code             throw new IllegalArgumentException("bad");
// @code         } catch (RuntimeException e) {
// @code             System.out.print("R");
// @code         } catch (IllegalArgumentException e) {
// @code             System.out.print("I");
// @code         }
// @code     }
// @code }
// @option It does not compile, because the later catch can never be reached. [correct]
// @option It prints R.
// @option It prints I.
// @option It prints RI.
// @explain A more general catch placed above a more specific one makes the specific one unreachable, and Java reports that while compiling. The order has to be the other way round: narrow first, then broad.
// @why B: nothing runs, because the file is rejected before any bytecode is produced.
// @why C: the same compile error stops the program.
// @why D: only one catch block ever runs, and here none can.

// @quiz (OCJP, MEDIUM) Which statement about finally is correct?
// @option It runs whether the try block completes, throws, or returns, unless the JVM exits first. [correct]
// @option It runs only when an exception is thrown.
// @option It runs only when no exception is thrown.
// @option It runs after every catch block, only if a catch matched.
// @explain The finally block is the one place that runs on every path out of the try structure, which is what makes it the right place to close a file or a connection. The single exception is when the JVM itself stops, such as through System.exit.
// @why B: it runs on the normal path too, which is the point of having it.
// @why C: it runs after a catch as well.
// @why D: it runs even when no catch matched, and then the exception continues on its way after finally finishes.

public class ExceptionHandlingInJava {
    public static void main(String[] args) {

        try{ // The try block wraps any code that might throw an exception at runtime.
            // Place only the risky code here — keep try blocks as small as possible.
        } // The try block ends here; the catch block immediately follows.
        catch (Exception e){  // The catch parameter specifies which exception type to handle. 'Exception' is the base class that catches any exception.
                              // The variable 'e' holds information about the exception, including its message and stack trace.
                              // The catch block contains your error handling logic — log the error, show a message, or recover gracefully.
        }

       // The String `value` is intentionally set to null below to demonstrate a caught NullPointerException.
        String value = null;

        try {
            System.out.println(value.toUpperCase()); // `value` is null, so calling a method on it throws NullPointerException.
                                                    // The risky statement belongs inside the `try` block so the program can handle the failure gracefully.

            }catch (NullPointerException e){         // This catch block handles only NullPointerException from the try block above.
                                                    // Using the specific exception type makes it clear what failure this demo is teaching.

            System.out.println("You are trying to access a null value.");
            System.out.println("Caught exception message: " + e.getMessage());
        }

    }
}
