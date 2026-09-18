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

// Converting text into a number :-
// 1) The two ways to parse, and the difference :-
// int a = Integer.parseInt("42");        // returns a primitive int
// Integer b = Integer.valueOf("42");     // returns an Integer object
// System.out.println(a + " / " + b);     // prints 42 / 42
// Note :- parseInt gives you an int to do arithmetic with. valueOf gives you an Integer object, which is what you want when the value has to be stored where an object is expected.
//
// 2) Why parsing is needed at all :-
// System.out.println("100" + "50");      // prints 10050, because + joins text
// int sum = Integer.parseInt("100") + Integer.parseInt("50");
// System.out.println(sum);               // prints 150
// Note :- the text has to be turned into numbers before arithmetic means anything. `-` is not defined for Strings at all, so `"100" - "50"` does not even compile.
//
// 3) Bad text throws at runtime :-
// int n = Integer.parseInt("abc");       // NumberFormatException: For input string: "abc"
// Note :- this is a runtime failure, not a compile error, so it appears while the program is running. Chapter 12 covers catching it.
//
// 4) Spaces are enough to break a parse :-
// int n = Integer.parseInt(" 42 ");      // NumberFormatException
// int m = Integer.parseInt(" 42 ".trim());   // works, trim removes the spaces first
// Note :- parseInt is strict. Anything that is not exactly a number, including a stray space, is rejected.
//
// 5) Reading with Scanner :-
// Scanner sc = new Scanner(System.in);
// System.out.print("Enter your name: ");
// String name = sc.nextLine();           // reads the whole line, spaces included
// System.out.print("Enter your age: ");
// int age = sc.nextInt();                // reads one integer token
// Note :- nextLine reads to the end of the line, while nextInt reads a single token and stops before the newline.
//
// 6) The classic nextInt then nextLine trap :-
// int age = sc.nextInt();                // the Enter key is still waiting in the buffer
// String name = sc.nextLine();           // reads that leftover newline, so name becomes ""
// Note :- nextInt consumes the digits but leaves the newline behind. Either call an extra `sc.nextLine();` to clear it, or read everything with nextLine() and parse the text yourself.
//
// Pitfall :- System.console() returns null when the program is not started from a real terminal, which is usual inside an IDE. Code that uses it then throws NullPointerException, which is why Scanner is the safer choice for practice.
// Pitfall :- a Scanner reading System.in should not be closed while input may still be needed, because closing it closes System.in as well.

// Parameter notes :-
// - s (the String given to Integer.parseInt, Double.parseDouble and the other parse methods): it must be exactly the digits of the number, with no spaces and no other characters. Choose it from trimmed user input so that " 42 " does not reach the parser.
// - currentYear (passed to getInputFromConsole and getInputFromScanner): the year used to work out an age, so pass the real current year, or a fixed year when you want a repeatable test.
// - yearOfBirth (passed to checkValidDOB): the text the user typed for their birth year. It is still a String at this point, so it is parsed and checked, and it must not be later than currentYear.

// @takeaway Input always arrives as text, even when the user typed digits. `Integer.parseInt("42")` turns that text into 42, and `Double.parseDouble("3.14")` into 3.14.
// @takeaway Text and numbers behave differently with the same operator. `"100" + "50"` gives "10050" because + joins text, and `"100" - "50"` does not compile at all. Parse first, then do the arithmetic.
// @takeaway Parsing fails at runtime with a NumberFormatException when the text is not a valid number, so bad input has to be expected rather than assumed away.
// @takeaway `new Scanner(System.in)` reads the keyboard: `nextLine()` takes the whole line including spaces, and `nextInt()` takes a single number token.
// @takeaway The two Scanner methods disagree about newlines, which is the source of the most common input bug: `nextInt()` leaves the Enter key behind, so the `nextLine()` after it reads an empty line.
// @gotcha `nextInt()` stops before the newline, so a `nextLine()` straight afterwards returns "" instead of the text you typed. Call an extra `nextLine()` to clear the leftover.
// @gotcha `Integer.parseInt(" 42 ")` throws, because the spaces make it invalid text. Trim the input first.
// @gotcha `System.console()` returns null inside most IDEs, because the program is not attached to a real terminal, so code that calls it throws a NullPointerException.
// @gotcha `Math.round` returns a long, not an int, so storing its result in an int needs a cast.

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

// @quiz (OCJP, MEDIUM) Which of these declarations compile?
// @code int a = Integer.parseInt("42");
// @code double b = Double.parseDouble("3.14");
// @code int c = Math.round(3.6);
// @option a and b compile, but c does not, because Math.round(double) returns a long. [correct]
// @option All three compile, because all three produce a number.
// @option Only a compiles, because the other two return Objects.
// @option None of them compile, because parsing always returns text.
// @explain parseInt returns an int, parseDouble a double, but Math.round(double) returns a long.
// @why B: Math.round(3.6) returns a long, and a long does not fit into an int without a cast.
// @why C: parseDouble returns a primitive double, not an Object.
// @why D: parsing turns text into a primitive number, it does not return text.
// @quiz (OCJP, HARD) What happens when this code runs?
// @code int a = Integer.parseInt("abc");
// @code int b = Integer.parseInt(" 42 ");
// @option It throws NumberFormatException on line one, and the spaces would fail line two too. [correct]
// @option It does not compile, because "abc" is not a number.
// @option It sets a to 0 and b to 42, because bad text is ignored.
// @option It sets a to null and b to 42.
// @explain It is a runtime NumberFormatException, not a compile error, and " 42 " needs trim().
// @why B: the compiler cannot inspect String contents, so the program compiles and fails when it runs.
// @why C: there is no fallback value; the method throws instead of returning 0.
// @why D: parseInt returns a primitive int, so it can never produce null.
// @quiz (OCJP, MEDIUM) What is the result of compiling and running this code?
// @code System.out.println("100" + "50");
// @code System.out.println("100" - "50");
// @option The program does not compile, because - is not defined for String operands. [correct]
// @option It prints 10050 and then 50.
// @option It prints 10050 and then throws an exception at runtime.
// @option It prints 150 and then 50.
// @explain + joins the two Strings into "10050", but - has no String version, so javac rejects the file.
// @why B: the whole file fails to compile, so neither line ever executes.
// @why C: this is a compile-time error, not something that can happen at runtime.
// @why D: + on two Strings concatenates the text instead of adding the numbers.
// @quiz (OCJP, MEDIUM) The user types 5 and presses Enter. What does line hold?
// @code Scanner sc = new Scanner(System.in);
// @code int n = sc.nextInt();
// @code String line = sc.nextLine();
// @option line is an empty String, because nextInt left the newline in the buffer. [correct]
// @option line is "5", because nextLine reads the same input again.
// @option line is null, because there is nothing left to read.
// @option It throws InputMismatchException, because the input was already consumed.
// @explain nextInt stops before the newline, so the next nextLine() returns that empty leftover line.
// @why B: the 5 was already consumed by nextInt, only the Enter key remains.
// @why C: nextLine returns an empty String rather than null when the line is empty.
// @why D: the leftover newline is valid input for nextLine, so no exception is thrown.
// @quiz (INTERVIEW, MEDIUM) Why does code calling System.console().readLine() often fail inside an IDE?
// @option System.console() returns null in most IDEs, so readLine() throws NullPointerException. [correct]
// @option System.console() is not part of the Java API and never compiles.
// @option readLine() returns a String, so it cannot be called on a console.
// @option It fails only on a machine that has no keyboard attached.
// @explain An IDE has no terminal, so console() returns null and calling it throws NullPointerException.
// @why B: it compiles fine; the problem is the null value at run time.
// @why C: readLine() does return a String, and that is a normal method call.
// @why D: the cause is the missing terminal attachment, not the hardware.

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
