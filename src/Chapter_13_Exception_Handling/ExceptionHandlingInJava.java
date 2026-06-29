package Chapter_13_Exception_Handling;
// An exception is a runtime error — an abnormal condition that occurs while the program is running and disrupts normal execution.
// Common causes: null references (NullPointerException), dividing by zero (ArithmeticException), invalid array index (ArrayIndexOutOfBoundsException), invalid string-to-number parsing (NumberFormatException).
// Without exception handling, an unhandled exception crashes your program and prints a stack trace.
// Java uses try-catch blocks to handle exceptions gracefully, keeping the program running even when errors occur.
// The try block contains the "risky" code — code that might throw an exception.
// The catch block catches the exception and lets you handle it (log it, show a user-friendly message, recover, etc.).
// Keep try blocks small — only put the specific risky statements inside try, not your entire method.
// The catch parameter specifies WHICH type of exception to catch. 'Exception' is the most general (catches anything).
// Useful methods on the exception object: e.getMessage() -> the error message, e.printStackTrace() -> full call stack.
// You can have multiple catch blocks for different exception types, ordered from most specific to most general.
// The NullPointerException (NPE) occurs when you try to call a method or access a field on a variable that is null (has no object).
/*
   Exception

*  An exception is an abnormal condition that disrupts the normal flow of the program.
*  Exceptions can occur due to invalid input, null references, division by zero, file not found, etc.
*
   Catching an exception

   An exception is caught by wrapping the risky code inside a try-catch block.
   The code that might throw an exception goes inside the 'try' block.

   The try statement has 2 code blocks.

   The first block is declared directly after the try keyword and contains the risky code.
   The catch keyword follows the try block and includes a parameter that specifies the type of exception to catch.

   The catch block contains the code that runs when an exception of the specified type is thrown.
   You can access the exception message with e.getMessage() or print the full trace with e.printStackTrace().
*
*
* */

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

public class ExceptionHandlingInJava {
    public static void main(String[] args) {

        try{ // The try block wraps any code that might throw an exception at runtime.
            // Place only the risky code here — keep try blocks as small as possible.
        } // The try block ends here; the catch block immediately follows.
        catch (Exception e){  // The catch parameter specifies which exception type to handle. 'Exception' is the base class that catches any exception.
                              // The variable 'e' holds information about the exception, including its message and stack trace.
                              // The catch block contains your error handling logic — log the error, show a message, or recover gracefully.
        }

       // The String 'value' is intentionally set to null below to demonstrate a NullPointerException being caught.

    /*    try {
            if (value != null) {
                System.out.println(value.toUpperCase());
            } else {
                throw new NullPointerException("Value is null");
            }
        } catch (NullPointerException e) {
            System.out.println(e.getMessage());
            // Uncomment the next line if you want to see the stack trace
            // e.printStackTrace();
        }

*/
        String value = null;

        try {
            System.out.println(value.toUpperCase()); // Since String value is null,
                                                     // and we are trying to access the null value
                                                     // and trying to convert the null value(which doesn't exist) into uppercase
                                                     // the program will throw a null pointer exception.
                                                     // But, since the code is wrapped around a try catch block,
                                                     // the exception will be handled.
                                                     // The code, which may create problem is to be written inside the try block.

            }catch (NullPointerException e){         // Since, the code written inside the try block will lead to null pointer exception,
                                                     // the catch block, will catch that exception and handle it.
                                                     // Since, the code inside the try block will throw null pointer, in the catch parameter,
                                                     // we need to pass the parameter of the exception type, in this case we have passed NullPointerException

            System.out.println("You are trying to access a null value");
        }

    }
}
