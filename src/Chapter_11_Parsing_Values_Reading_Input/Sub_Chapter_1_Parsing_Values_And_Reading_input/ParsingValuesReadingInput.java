package Chapter_11_Parsing_Values_Reading_Input.Sub_Chapter_1_Parsing_Values_And_Reading_input;
// @quiz (INTERVIEW, EASY) What does Integer.parseInt() do, and what can go wrong?
// @option It converts numeric text such as "42" into a primitive int, and throws NumberFormatException if the text is not a valid integer. [correct]
// @option It converts a number into text.
// @option It returns null when the text is not numeric.
// @option It rounds a decimal value to the nearest whole number.
// @explain parseInt is a conversion from text to a number. It only accepts valid integer text, so a decimal point, letters, or a blank string cause NumberFormatException at runtime.
// @why B: that is the opposite direction, done by String.valueOf or Integer.toString.
// @why C: it does not return a value on failure. It throws.
// @why D: parseInt rejects decimals such as "22.5" rather than rounding them.

// @quiz (OCJP, MEDIUM) What happens when Integer.parseInt("22.5") is called?
// @option It throws NumberFormatException, because "22.5" is not valid integer text. [correct]
// @option It returns 22 by trimming the decimal part.
// @option It returns 22.5 as a double.
// @option It returns 0 and prints a warning.
// @explain parseInt expects whole-number text. The decimal point makes the input invalid, so the method throws rather than guessing what you meant.
// @why B: it does not truncate. Use Double.parseDouble("22.5") when decimals are expected.
// @why C: the return type is int, so it can never hand back a double.
// @why D: there is no warning path. The method throws an exception.

// @quiz (OCJP, MEDIUM) In Integer.parseInt("1010", 2), what does the second argument mean?
// @option It is the radix, so "1010" is read as binary and the method returns the decimal value 10. [correct]
// @option It is the number of digits to read.
// @option It is the maximum value allowed.
// @option It is a rounding mode.
// @explain The radix selects the number base used to interpret the text. Base 2 means binary, so the digits 1010 represent 8 + 0 + 2 + 0, which is 10.
// @why B: the whole string is parsed. The second argument never limits how many characters are used.
// @why C: radix controls the base, not a limit.
// @why D: rounding is not involved in parsing an integer.

// @quiz (INTERVIEW TRAP, HARD) Why is mixing Scanner.nextInt() and Scanner.nextLine() a common bug?
// @option nextInt() reads the number but leaves the newline in the input, so the next nextLine() returns an empty string unless the leftover line is consumed first. [correct]
// @option nextInt() consumes the newline automatically, so the two can be mixed freely.
// @option nextLine() does not compile after nextInt().
// @option You must always use next() instead of nextLine().
// @explain Token methods such as nextInt read up to the number and stop. The line break is still waiting, so the following nextLine call sees an empty line. Reading one extra line first clears it.
// @why B: if the newline were consumed, this bug would not exist.
// @why C: it compiles. The problem appears at runtime as an unexpectedly empty string.
// @why D: next() and nextLine() both have their uses; the issue is the leftover newline, not the choice of method.

// @quiz (INTERVIEW, MEDIUM) When is Double.parseDouble the right choice?
// @option When decimal values are expected, such as "22.5", because parseInt would reject the decimal point. [correct]
// @option Whenever the input might contain letters.
// @option Only when the value is guaranteed to be a whole number.
// @option When you want an int result from decimal text.
// @explain Choose the parse method that matches the text you expect. Any input can still fail with NumberFormatException, so letters remain a problem for both methods.
// @why B: letters fail in both methods. The choice is about decimals, not letters.
// @why C: a whole number works with parseInt too. Decimals are the reason to prefer parseDouble.
// @why D: parseDouble returns a double. Use parseInt for an int result from whole-number text.

// @quiz (INTERVIEW, MEDIUM) Why does "100" + "50" give "10050" rather than 150?
// @option Because + on Strings performs concatenation, so the two pieces are joined into one text value. [correct]
// @option Because Java converts the Strings to numbers before adding.
// @option Because Java always treats + as addition when it sees digits.
// @option Because the compiler reports an error and this never runs.
// @explain The + operator is defined for text as concatenation. The type of the operands decides the meaning, so two Strings produce one longer String. To add them you must parse them first.
// @why B: no automatic conversion happens. That is why parse methods exist.
// @why C: + does arithmetic only when both operands are numeric.
// @why D: it compiles and runs, producing "10050".

// @quiz (INTERVIEW, MEDIUM) Why can System.console() be a problem in some development environments?
// @option It returns null when there is no console attached, which happens in some IDEs, so the result must be null-checked. [correct]
// @option It always returns a valid Console object, so no check is needed.
// @option It is another name for System.out.
// @option It can only be used to write output, never to read input.
// @explain Console is a convenient way to read a line and show a prompt, but it is not always available. When the JVM is not connected to a terminal, console() returns null and calling a method on it would throw.
// @why B: returning null is exactly the risk, so the check matters.
// @why C: System.out is an output stream. Console offers both reading and a prompt.
// @why D: Console is mainly used for reading input with a prompt.

// Parameter notes (what each argument means and how to choose it):
// - main(String[] args): args holds command-line inputs as Strings; use it when startup values should come from the terminal command.
// - Integer.parseInt(String s): s is base-10 integer text such as "2024"; avoid null, blanks, decimals, and letters because they throw NumberFormatException.
// - Integer.parseInt(String s, int radix): radix chooses the number base from Character.MIN_RADIX to Character.MAX_RADIX, commonly 2, 8, 10, or 16.
// - Double.parseDouble(String s): s is floating-point text such as "22.5"; choose it when decimals are valid and handle NumberFormatException for bad text.
// - getInputFromConsole(int currentYear): currentYear is the reference year used for age calculation; choose the current calendar year or a fixed test year.
// - System.console().readLine(String prompt): prompt is the text shown before input; choose a clear question and remember System.console() can be null in some IDEs.
// - getInputFromScanner(int currentYear): currentYear has the same age-calculation meaning as above and is passed into validation logic.
// - new Scanner(System.in): System.in selects keyboard/stdin as the input source; choose a File or other source when reading somewhere else.
// - sc.nextLine(): no parameter; it reads the rest of the current line, including spaces, and is useful for names or full text answers.
// - checkValidDOB(int currentYear, String yearOfBirth): currentYear is the maximum allowed birth year; yearOfBirth is user-entered numeric text to parse and validate.
// - System.out.println(value): value is the message to display; choose user-friendly text, especially in validation and catch blocks.
// - catch (NumberFormatException e): the parameter type chooses which exception is handled; choose the most specific exception before broader ones.
// - Important pitfall: Scanner token methods such as nextInt() leave a newline behind; use nextLine() carefully when mixing token and line reads.
//
// @quiz (INTERVIEW) What does the parameter to new Scanner(System.in) decide?
// @answer It decides the input source. System.in means read from keyboard/stdin; use another source, such as a File, when input should come from elsewhere.
//
// @quiz (INTERVIEW) What must be true about the String passed to Integer.parseInt(String s)?
// @answer It must contain valid integer text for the expected radix, with no decimal point or non-numeric characters except a valid sign.
//
// @quiz (OCJP) What happens if Integer.parseInt("22.5") is called?
// @answer It throws NumberFormatException because "22.5" is not valid integer text.
//
// @quiz (INTERVIEW) When would you choose Double.parseDouble(userInput) instead of Integer.parseInt(userInput)?
// @answer Choose Double.parseDouble when decimal values are allowed or expected, such as "22.5".
//
// @quiz (INTERVIEW) In checkValidDOB(currentYear, yearOfBirth), why are both parameters needed?
// @answer currentYear sets the upper validation limit, while yearOfBirth supplies the user text that must be parsed and checked against the allowed range.
//
// @quiz (INTERVIEW TRAP) Why should the catch parameter often be NumberFormatException instead of plain Exception here?
// @answer NumberFormatException is specific to parsing failures, so it avoids accidentally hiding unrelated bugs that a broad Exception catch would also catch.
//
// @quiz (OCJP) In Integer.parseInt("1010", 2), what does the second parameter mean?
// @answer The second parameter is the radix/base; 2 means interpret "1010" as binary, producing decimal 10.
//
// @quiz (INTERVIEW) What is the purpose of the prompt parameter in System.console().readLine("Question")?
// @answer It displays a clear question before reading the user's line, so choose wording that tells the user exactly what value to enter.
// When you read data from the user (keyboard input) or from a file, it arrives as a String. But you often need to use it as a number.
// You cannot do arithmetic on Strings — "100" - "50" is a compile error because - is not defined for Strings.
// You also cannot use + for addition on Strings — "100" + "50" = "10050" (concatenation, not addition).
// To convert a String to a number, use the wrapper class's parse method:
//   Integer.parseInt("42")  -> int 42
//   Double.parseDouble("3.14") -> double 3.14
//   Long.parseLong("1000000") -> long 1000000
// If the String cannot be parsed (e.g., "abc"), a NumberFormatException is thrown at runtime.
// The Scanner class (java.util.Scanner) is the standard way to read keyboard input in Java.
// To use Scanner: import java.util.Scanner;   Scanner sc = new Scanner(System.in);
// Then call sc.nextLine() to read a whole line, sc.nextInt() for an int, sc.nextDouble() for a double, etc.
// Always close the Scanner when done: sc.close(); (or use try-with-resources).
// The import statement lets you use classes defined in Java's standard library or other packages.
/*
*  When we read data in from either a file or from user input, it's common for the data
*  to be initially stored as a String, which we'll need to convert to a numeric value.
*
*  Reading Data From Console
*
*  Technique              | Description
*
*  System.in              | Like System.out, Java provides System.in which can read input from the console or terminal.
*  System.console         | This is Java's solution for easier support for reading a single line and prompting user for information
*  Command Line Arguments | This is calling the Java program and specifying data in the call
*  Scanner                | The scanner class was built to be a common way to read input either using System.in or a file.
*
* */

import java.util.Scanner; // the import statement lets us use classes from other people's code.
                           // In this case, Java provides a library of code,
                           // which includes the Scanner class in a library called java.util.

// @quiz (INTERVIEW) What does Integer.parseInt() do, and what exception can it throw?
// @answer Integer.parseInt() converts a numeric String like "42" into a primitive int.
// @answer It throws NumberFormatException if the text is not a valid integer.

// @quiz (INTERVIEW) What is the difference between Integer.parseInt() and Integer.valueOf()?
// @answer parseInt() returns a primitive int, while valueOf() returns an Integer object.
// @answer valueOf() is useful when you need the wrapper type instead of the primitive.

// @quiz (INTERVIEW) What is Scanner, and how does it read input?
// @answer Scanner is a utility class that reads tokens or lines from sources such as System.in.
// @answer Methods like nextInt(), next(), and nextLine() parse different kinds of input.

// @quiz (INTERVIEW) Why do Java programs often need parsing when reading console input?
// @answer Console input arrives as text, so you must convert numeric text into number types before doing arithmetic.
// @answer That is why parsing methods are common when reading user input.

// @quiz (OCJP) What happens with: Integer.parseInt("3.5")?
// @answer It throws NumberFormatException because parseInt accepts only valid integer text.
// @answer Decimal text must be parsed with a floating-point parser instead.

// @quiz (OCJP) Why can nextLine() appear to skip input after nextInt() in Scanner?
// @answer nextInt() leaves the trailing newline in the input buffer.
// @answer The following nextLine() reads that leftover newline, so you often need an extra nextLine() to consume it first.

// @quiz (OCJP, HARD) What does Integer.parseInt("FF", 16) return?
// @option 255, because the second argument sets the radix to hexadecimal. [correct]
// @option 16, because FF is two characters.
// @option 170, because FF is read as decimal.
// @option It throws NumberFormatException, because FF is not a number.
// @explain The radix decides the number base used to read the text. In base 16 the letters A to F are valid digits, so "FF" means 15 times 16 plus 15, which is 255.
// @why B: the second argument is the base, not a count of characters.
// @why C: with no radix, "FF" would fail. Base 16 is what makes it readable as digits.
// @why D: letters are valid in a base that is large enough to include them.

// @quiz (OCJP, HARD) What happens when Integer.parseInt(" 42 ") runs?
// @option It throws NumberFormatException, because surrounding spaces are not allowed. [correct]
// @option It returns 42, because parseInt ignores whitespace.
// @option It returns 0, because the spaces invalidate the value.
// @option It compiles but returns null.
// @explain parseInt accepts only the digits and an optional leading sign. Any other character, including a space, makes the whole text invalid, so the method throws rather than trimming it for you.
// @why B: trimming is not part of parsing. You would call trim() first.
// @why C: it throws instead of returning a fallback value.
// @why D: the return type is int, so null is not possible.

// @quiz (OCJP, HARD) What happens when Integer.parseInt(null) runs?
// @option It throws NumberFormatException, because null is not valid integer text. [correct]
// @option It returns 0.
// @option It throws NullPointerException.
// @option It compiles but returns -1.
// @explain parseInt validates the text rather than the reference, so a null argument is reported as invalid text and produces NumberFormatException. This is worth remembering, because it is easy to expect NullPointerException and catch the wrong type.
// @why B: there is no fallback value. The method throws.
// @why C: validate the input first if you need to distinguish null from bad text.
// @why D: the return type is int, and an exception is thrown instead of returning.

// @quiz (INTERVIEW, MEDIUM) What is printed by this code when the user enters 80 and 90?
// @code String a = "80";
// @code String b = "90";
// @code int average = (Integer.parseInt(a) + Integer.parseInt(b)) / 2;
// @code System.out.println(average);
// @option 85, because the values are parsed to int and then averaged. [correct]
// @option 8090, because the Strings are concatenated.
// @option 85.0, because parseInt produces a decimal.
// @option It does not compile, because Strings cannot be added.
// @explain parseInt converts each String to an int before any arithmetic, so the sum is 170 and the average is 85. Integer division still applies, which is why the result has no decimal part.
// @why B: concatenation would happen only if + were applied to the Strings themselves.
// @why C: parseInt returns an int, and int division produces an int.
// @why D: the parsing happens first, so the addition is between two int values.

// @quiz (INTERVIEW, MEDIUM) What does this code print when the user types the word hello?
// @code try {
// @code     int value = Integer.parseInt("hello");
// @code     System.out.println("parsed " + value);
// @code } catch (NumberFormatException e) {
// @code     System.out.println("not a number");
// @code }
// @option not a number, because parsing fails and the catch block runs. [correct]
// @option parsed 0, because failed parsing returns zero.
// @option It crashes with an uncaught exception.
// @option not a number, and then parsed 0.
// @explain parseInt cannot read "hello" as an integer, so it throws. The matching catch block handles the exception, and the code after the try never runs for that input.
// @why B: parsing does not return a fallback. It throws.
// @why C: the catch block matches NumberFormatException, so the exception is handled.
// @why D: only one branch runs when an exception is thrown.

public class ParsingValuesReadingInput {

    public static void main(String[] args) {

        String currentYear = "2024";

        String userDateOfBirth = "1999";

        // System.out.println("Age = " + (currentYear - userDateOfBirth));

        // The above code will give error as both the data type is in String
        // java: bad operand types for binary operator '-'
        //  first type:  java.lang.String
        //  second type: java.lang.String

        // System.out.println("Age = " + (currentYear + userDateOfBirth));

        /* The above code will compile, and since currentYear and userDateOfBirth
            are of type String, both strings will be concatenated together.
        */


        /*  To parse and transform Strings into numeric values, we have to use wrapper-class methods.

            Wrapper |  Wrapper Method
            Integer |  parseInt(String)
            Double  |  parseDouble(String)
        *
        * */

        int currentYearOfBirth = Integer.parseInt(currentYear);
        int dateOfBirth = Integer.parseInt(userDateOfBirth);

        System.out.println("The age is " + (currentYearOfBirth - dateOfBirth));

        // Integer is a class. It has a static method called parseInt that takes a String and returns a value of data type int.
        // To access a static method, we use ClassName.methodName. Integer is the class name, and parseInt is the static method.

        String userAgeWithPartialYear = "22.5";
        double ageWithPartialYear = Double.parseDouble(userAgeWithPartialYear);

        // Double is a class. It has a static method called parseDouble that takes a String and returns a value of data type double.
        // To access a static method, we use ClassName.methodName. Double is the class name, and parseDouble is the static method.

        System.out.println("The partial age is " + ageWithPartialYear);

    //    System.out.println(getInputFromConsole(currentYearOfBirth));

        System.out.println(getInputFromScanner(2024));


    }

    public static String getInputFromConsole(int currentYear) {

        /*
        * To run java code from console in Intellij, we need to go to terminal, then
        * change directory using cd to the chapter source folder
        * cd src
        * cd Chapter_11_Parsing_Values_Reading_Input
        *
        * and then run the packaged class using its fully qualified name after compiling it
        *
        * */

        String name = System.console().readLine("Hi, What's your name? ");
        System.out.println("Hi " + name + ", Nice to meet you!");

        String yearOfBirth = System.console().readLine("What's your year of birth? ");

        int age = currentYear - Integer.parseInt(yearOfBirth);

        return name + "'s" + " age is " + age;
    }


    /*
    *
    * The scanner class is described as a simple text scanner which can parse primitive types and strings
    *  To use the Scanner class, we have to create an instance / object of type Scanner using keyword new
    *
    * Reading input from console -->
    *
    * For reading input from the console or terminal, we instantiate a scanner object using new,
    * followed by the Scanner class name, and passing System.in, as an argument, in the parentheses
    *
    * Scanner sc = new Scanner(System.in);
    *
    * For reading input from a file, we instantiate a scanner object using new,
    * again with the Scanner class name, but pass a File object, as an argument, in the parentheses.
    *
    * File is another class provided by Java, for reading and writing files.
    *
    * Scanner sc = new Scanner(new File("nameOfFileOnFileSystem")); // Since, we want to read file we create object of file using new keyword
    * */
    // This function checks if the date of birth entered through user input is valid or not.
    // It returns a boolean value of false, if the date of birth entered is not within the range mentioned in the if condition logic and vice versa

    public static boolean checkValidDOB(int currentYear, String yearOfBirth){

        int birthYear = Integer.parseInt(yearOfBirth); // The yearOfBirth entered in the form of String is converted into int usingInteger.parseInt method

        if((birthYear < 1895) || (birthYear > currentYear)){ // The if condition checks for the condition that the year of Birth entered is well within the range of required parameters
                                                             //  If the birth year is not within the required condition the code returns a boolean value of false and vice versa

            System.out.println("Enter the year of birth greater than 1895 and less than or equal to current year");

            return false;

        }

        return true;
    }

    public static String getInputFromScanner(int currentYear){

        Scanner sc = new Scanner(System.in);

        System.out.println("Hi, What's your name? ");

        String name = sc.nextLine(); // sc is the local variable of type Scanner class on which the instance methods can be executed

        System.out.println("Hi " + name + ", Nice to meet you!");

        boolean checkDOBValidity; // A boolean variable checkDOBValidity is created on which the value returned from checkValidDOB(currentYear, yearOfBirth)

        String yearOfBirth = "";

        do { // The idea of putting the logic to get the user input of year of birth inside do while block is to make sure that the code executes at least one time,
             // and if the user input is not within the proper range, the code continues to execute till the time the correct year of birth
             // within the prescribed year range is entered by the user.


            System.out.println("What is your year of Birth ?");

            try {  // There could be a possibility that the user might not enter the correct year of Birth,
                   // they might enter characters in place of numbers which might lead to NumberFormat Exception
                   // hence, the code is wrapped around a try catch block, where the code logic that might create problem
                   // is written inside try code block.
                yearOfBirth = sc.nextLine();

                checkDOBValidity = checkValidDOB(currentYear, yearOfBirth); // The boolean return value of checkValidDOB(currentYear, yearOfBirth) is assigned to checkDOBValidity variable of type boolean
            }catch (NumberFormatException e){ // The catch block accepts the parameter of the type exception, which the code might throw, in this case, it's NumberFormatException
                System.out.println("You have entered characters in year of birth, please enter the correct details");
                checkDOBValidity = false; // Since, the user definitely have entered the wrong year of birth, that's why the exception got caught, we are setting the checkDOBValidity value back to false,
                                          // so the do while loop continues to execute until the user enters the correct year of birth value within the desired year range
            }

        }while(!checkDOBValidity); // On the basis of boolean value of checkDOBValidity, the do while loop might continue to execute or terminate
                                   // If the user enters the correct date of birth as per the format and range, the checkDOBValidity boolean value
                                   // is evaluated to true, and the while loop will terminate as while condition will evaluate to false as we have used not check
                                   // Similarly,if the checkDOBValidity boolean value is evaluated to false,the loop will continue to execute, as the while condition
                                   // will evaluate to true because of not condition

        int age = currentYear - Integer.parseInt(yearOfBirth); 

        return name + "'s" + " Age is " + age;
    }

}
