package Chapter_13_Exception_Handling;

/*
   Exception

*  An exception is an abnormal condition that disrupts the normal flow of the program.
*
   Catching an exception

   An exception is caught first by creating a code block around the code that gets the error.
   This is done with the try statement code block

   // The try statement

   The try statement has 2 code blocks.

   The first is declared directly after the try keyword, and this code block end, and is followed by declaration of the catch keyword

    The catch keyword includes the declaration of variables, in parentheses, and then has its own code block.
*
*
* */


public class ExceptionHandlingInJava {
    public static void main(String[] args) {

        try{ // After try keyword, the code block starts
            // statements that might giver errors
        } // The code block end here
        catch (Exception e){  // After the end of first code block, it is followed by keyword "catch" and parentheses, where a declaration is required.
                              // The declaration includes the type of the exception and a variable name.
                              // The second code block inside catch contains code to handle the exception
        }

       // String value = null;

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
