package Chapter_14_Strings.Sub_Chapter_1_Text_Block_And_Advanced_Formatting;
import java.util.IllegalFormatConversionException;
// @quiz (INTERVIEW) In System.out.printf("Age = %d", age), what does the first parameter control?
// @answer The first parameter is the format string; it controls the literal text and placeholders that later arguments fill.
//
// @quiz (OCJP) What happens if printf uses "%f" but the matching argument is an int?
// @answer It throws IllegalFormatConversionException because %f expects a floating-point value.
//
// @quiz (INTERVIEW) In "%6d", what does the 6 parameter-like value mean?
// @answer It is the minimum output width, used to pad the integer for alignment if the printed value is shorter.
//
// @quiz (INTERVIEW) How do String.format("Hi %s", name) parameters differ from System.out.printf("Hi %s", name)?
// @answer They use the same format and argument rules, but String.format returns the formatted String while printf prints it.

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

// New line in a format string - \n or %n :-
// | New line | What it is | Where it works | What it gives |
// |---|---|---|---|
// | `\n` | Escape sequence, put into the String while compiling | Any String | Always the LF character, on every OS |
// | `%n` | Format specifier, converted by the Formatter at run time | Only a format string | Line separator of the platform: \r\n on Windows, \n on Linux or macOS |
// Note :- %n works only inside a format string. System.out.println("Hello %n") prints Hello %n as it is.
// Note :- "Hello \n".length() is always 7, but String.format("Hello%n").length() is 6 on Linux and 7 on Windows.

// @quiz (OCJP, MEDIUM) What is printed by this code?
// @code int age = 35;
// @code System.out.printf("Age is %s%n", age);
// @option Age is 35, because %s accepts any value by converting it to text. [correct]
// @option It throws IllegalFormatConversionException, because age is not a String.
// @option Age is null, because an int is not a String.
// @option It does not compile, because %s requires a String argument.
// @explain %s calls toString() on whatever it is given, so an int is perfectly acceptable. That is different from %f, which insists on a floating-point value and throws for an int.
// @why B: the exception comes from a mismatched numeric specifier such as %f with an int, not from %s.
// @why C: the value is converted to its text form, so 35 is printed.
// @why D: the format string is not type-checked at compile time, and %s accepts any object or primitive.

// @quiz (OCJP, MEDIUM) What is printed by this statement?
// @code System.out.printf("100%% complete%n");
// @option 100% complete [correct]
// @option 100%% complete
// @option It throws an exception, because %% is not a valid specifier.
// @option 100 complete, because %% is removed.
// @explain The percent sign starts a format specifier, so a literal percent has to be written twice. The pair %% is replaced by a single % in the output.
// @why B: the doubled sign is a way of writing one, so the second is not printed literally.
// @why C: %% is a valid escape in a format string.
// @why D: the character is printed once, not removed.

// @quiz (OCJP, HARD) What does the -5 do in this statement?
// @code System.out.printf("[%-5d]%n", 42);
// @option It left-aligns the number in a field five characters wide, giving [42   ]. [correct]
// @option It right-aligns the number in a field five characters wide.
// @option It prints the number five times.
// @option It rounds the number to five decimal places.
// @explain The width sets the minimum field size and the minus flag pads on the right instead of the left. So 42 becomes 42 followed by three spaces inside the brackets.
// @why B: right alignment is the default with %5d, without the minus.
// @why C: repetition uses String.repeat, not a format flag.
// @why D: decimal places are set by .precision, which applies to floating-point values.

// Formatting in practice :-
// 1) printf prints straight away, String.format hands the text back :-
// System.out.printf("Age = %d%n", 42);                 // prints Age = 42 and moves to a new line
// String line = String.format("Age = %d", 42);         // builds the text without printing it
// System.out.println(line);                            // prints Age = 42 later
// Note :- the placeholders and arguments work the same way in both. printf is `System.out.print(format(...))`, and format is the version you can store.
//
// 2) What the common placeholders mean :-
// | Placeholder | Meaning | Example |
// |---|---|---|
// | `%d` | a whole number | `String.format("%d", 42)` gives `42` |
// | `%f` | a decimal number | `String.format("%.2f", 3.14159)` gives `3.14` |
// | `%s` | text | `String.format("%s", "hi")` gives `hi` |
// | `%5d` | pad to width 5, right-aligned | a 2-digit number is padded on the left |
// | `%-5d` | pad to width 5, left-aligned | a 2-digit number is padded on the right |
// | `%.2f` | keep two decimal places | `3.14159` becomes `3.14` |
// | `%n` | the platform's new line | `printf("Hi %n")` moves to a new line |
// Note :- %5d only pads when the value is shorter than the width. A longer value is printed in full and never truncated.
//
// 3) A mismatch between placeholder and argument throws :-
// System.out.printf("%f", 42);    // IllegalFormatConversionException: %f != java.lang.Integer
// Note :- the failure happens while printing, not while compiling, so the mistake appears when that line runs.
//
// 4) %n is not the same as a literal \n inside a plain String :-
// System.out.printf("Hello %n");      // prints Hello and moves to a new line
// System.out.println("Hello %n");     // prints Hello %n, because there is no format string here
// Note :- %n only means anything inside a format string. For a plain print, use an escape such as \n.

// @takeaway `System.out.printf` prints its result immediately, while `String.format` returns the same text as a String you can store, compare or print later. The placeholders and arguments behave identically.
// @takeaway In a format string, %d is a whole number, %f is a decimal, %s is text, %.2f keeps two decimal places, %5d pads to width 5, and %n is the platform's new line.
// @gotcha A placeholder that does not match its argument throws at runtime, not at compile time, so `printf("%f", 42)` looks fine until the line runs.
// @gotcha %n only has meaning inside a format string. `System.out.println("Hello %n")` prints the characters `%n` literally, because println is not a formatter.


public class TextBlockAndAdvancedOutputFormatting {

    /*

    * Text Block
    * 1) A text block is just a special format for multi-line String literals
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
         * A text block lets us format text in the source code the same way we expect to see it in the output.
         * No additional quotes, + signs, or escape sequences are required.
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
        * 5) We can use either \n or %n to move the cursor to a new line in a printf statement.
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

        try {
           String invalidFormatDemo = String.format("Your age is %f%n", age);
           System.out.print(invalidFormatDemo);
        } catch (IllegalFormatConversionException exception) {
           System.out.println("Caught expected exception: " + exception);
        }

        /*
        * This throws java.util.IllegalFormatConversionException: f != java.lang.Integer
        * because %f expects a float or double, but age is an int.
        * */

        System.out.printf("Your age is %.2f\n", (float) age);

        /*
        * The above expression works because age is now cast to float.
        *
        * System.out.printf("Your age is %.2f\n", (float) age) Output :- Your age is 35.00
        *
        * */


        System.out.printf("Your age is %f\n", (float) age);

        /*
         * In order to set precision to a specific decimal places, after the % sign . and the number of precision is used
         * System.out.printf("Your age is %f\n", (float) age) Output :- Your age is 35.000000
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
