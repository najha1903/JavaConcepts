package Chapter_15_Strings.Sub_Chapter_1_Text_Block_And_Advanced_Formatting;

// @quiz (INTERVIEW) What is a text block in Java, and which Java version introduced it?
// @answer A text block is a multi-line String literal written with triple double quotes.
// @answer It appeared as a preview in Java 13 and became a standard feature in Java 15.

// @quiz (INTERVIEW) What do common printf format specifiers like %d, %s, %f, and %n mean?
// @answer %d formats integers, %s formats strings, %f formats floating-point numbers, and %n inserts a platform-safe newline.
// @answer These specifiers are used by printf(), format(), and related formatting APIs.

// @quiz (INTERVIEW) What is the difference between String.format() and .formatted()?
// @answer String.format() is a static utility method, while .formatted() is an instance method called on a format string.
// @answer Both produce a formatted String instead of printing directly to the console.

// @quiz (INTERVIEW) Why are text blocks useful compared with ordinary string literals?
// @answer They make multi-line text easier to read and reduce the need for escape sequences and string concatenation.
// @answer They are especially useful for JSON, SQL, XML, or formatted console output templates.

// @quiz (OCJP) What happens with: System.out.printf("%f", 10);?
// @answer It throws IllegalFormatConversionException because %f expects a floating-point argument, not an int.
// @answer Use 10.0 or a %d specifier instead.

// @quiz (OCJP) In a text block like String s = """\n    hi\n    """;, what controls the incidental indentation?
// @answer The position of the closing triple quotes helps determine how much leading whitespace is stripped.
// @answer Moving the closing delimiter changes the resulting indentation in the String.

public class TextBlockAndAdvancedOutputFormatting {

    /*

    * Text Block
    * 1) A Test block is just a special format for multi-line String literals
    *
    * 2) It's simply a String, with a new representation in the source code
    *
    * Escape Sequences
    * 1) An escape sequence starts with a backslash.
    *
    * i)   \t - Inserts a tab character
    * ii)  \n - Inserts a new line character
    * iii) \" - Inserts a double quote character
    * iv)  \\ - Inserts a backslash character
    *
    * Format Specifiers
    * %[argument_index$][flags][width][.precision]conversion
    * Java formatter official docs link for reference = "https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html"
    *
    * */

    public static void main(String[] args){

        String bulletIt = "Print a Bulleted List:\n" +
                          "\t\u2022 First Point\n" +
                          "\t\t\u2022 Sub Point";

        System.out.println(bulletIt);

        /*
        * System.out.println(bulletIt) Output :-
        * Print a Bulleted List:
        *         • First Point
        *               • Sub Point
        *
        * */



        /*
         * In order to create a text block, the text should be enclosed within triple quotes
         * The text block allows to format text in the source code the same way it is expected to see it in the output
         * No additional quotes, + sign, escape character sequences are required
         * */



        String textBlock = """
                Print a Bullet List:
                      \u2022 First Point
                            \u2022 Sub Point
                """;

        System.out.println(textBlock);

        /*
        * System.out.println(textBlock) Output :-
        * Print a Bullet List:
        *        • First Point
        *              • Sub Point
        *
        * */


        /*
        * 1) printf() allows to format strings using placeholders and variables but does not automatically add a newline
        * 2) printf() accepts multiple arguments, the first one is a string which will be printed to the console, and the following arguments
             are values that'll be used in the String.
        * 3) %d which is symbol used for decimal value is a special indicator called a format specifier which acts as a placeholder for other data which is passed as 2nd argument
             which will eventually replace the specifier in the text
        * 4) If there are multiple instances of format specifier, then multiple arguments needs to be passed,
             as those arguments will eventually replace the specifiers in the text
        * 5) We can use either /n or %n to move the cursor to a new line, to shift the cursor to a new line with printf statement
         */

        int age = 35;
        System.out.printf("Your age is %d\n", age);

        /*
        * System.out.printf("Your age is %d\n", age) Output :- Your age is 35;
        * */

        int yearOfBirth = 2023 - age;
        System.out.printf("Age = %d, Birth year = %d%n" , age, yearOfBirth);

        /*
        * System.out.printf("Age = %d, Birth year = %d%n" , age, yearOfBirth) Output :- Age = 35, Birth year = 1988
        * */

        System.out.printf("Your age is %f\n", age);

        /*
        * This will throw java.util.IllegalFormatConversionException : f! = java.lang.Integer
        * The expression was expecting float or double but the value that was passed was of integer type
        * */

        System.out.printf("Your age is %.2f\n", (float) age);

        /*
        * The above expression works, as the age is now casted to float
        *
        * System.out.printf("Your age is %.2f\n", (float) age) Output :- Your age is 35.0000
        *
        * */


        System.out.printf("Your age is %f\n", (float) age);

        /*
         * In order to set precision to a specific decimal places, after the % sign . and the number of precision is used
         * System.out.printf("Your age is %f\n", (float) age) Output :- Your age is 35.00
         *
         * */


        for ( int i = 1; i <= 100000 ; i *= 10){
            System.out.printf("Printing %d %n", i);
        }

        /*
        * System.out.printf("Printing %d %n", i) Output :-
        *
        * Printing   1
        * Printing   10
        * Printing   100
        * Printing   1000
        * Printing   10000
        * Printing   100000
        *
        * */


        for ( int i = 1; i <= 100000 ; i *= 10){
            System.out.printf("Printing %6d %n", i);
        }



        /*
         Here, the number 6 represents the width of the number (space) in the specifier
         * System.out.printf("Printing %6d %n", i) Output :-
         *
         * Printing       1
         * Printing      10
         * Printing     100
         * Printing    1000
         * Printing   10000
         * Printing  100000
         *
         *
         * */

        /*
         * String.format() is a static method on the String class.
         * It works exactly like printf() — same format specifiers — but instead of printing directly,
           it RETURNS the formatted string so you can store it in a variable and use it later.
         * Syntax: String.format("template with %specifiers", arg1, arg2, ...)
         */
        String formattedString = String.format("Your age is %d", age);
        System.out.println(formattedString);

        /*
         * System.out.println(formattedString) Output :- Your age is 35
         * */

        /*
         * .formatted() is an instance method on String (introduced in Java 15).
         * It does the same job as String.format(), but is called directly ON the template string.
         * Syntax: "template with %specifiers".formatted(arg1, arg2, ...)
         * Both String.format() and .formatted() produce the same result — .formatted() is just more concise.
         */
        formattedString = "Your age is %d".formatted(age);
        System.out.println(formattedString);

        /*
         * System.out.println(formattedString) Output :- Your age is 35
         * */

    }


}
