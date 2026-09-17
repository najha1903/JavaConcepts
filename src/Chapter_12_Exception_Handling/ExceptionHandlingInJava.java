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

// Parameter notes (what each argument means and how to choose it):
// - e (catch): Receives the exception thrown inside the matching `try` block. In this file, `Exception e` is the generic template example,
//   while `NullPointerException e` is the specific type used for the runnable null-handling demo below.

// Warning: Avoid broad `catch (Exception e)` blocks as they can swallow unintended bugs; catch specific exceptions instead.

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
