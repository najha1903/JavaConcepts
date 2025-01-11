package Chapter_12_Parsing_Values_Reading_Input.Sub_Chapter_1_Parsing_Values_And_Reading_input;

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
            is of type String, both the strings will be concatenated together.
        */


        /*  To pass and transform Strings into numeric values. we have to convert String into Wrapper method

            Wrapper |  Wrapper Method
            Integer |  parseInt(String)
            Double  |  parseDouble(String)
        *
        * */

        int currentYearOfBirth = Integer.parseInt(currentYear);
        int dateOfBirth = Integer.parseInt(userDateOfBirth);

      //  System.out.println("The age is " + (currentYearOfBirth - dateOfBirth));

        // Integer is a class. It has a static method called parseInt that takes a String, and return a value of dataType int.
        // To access static method, we use the className.static method name. Integer = classMame & parseInt is the static method

        String userAgeWithPartialYear = "22.5";
        double ageWithPartialYear = Double.parseDouble(userAgeWithPartialYear);

        // Double is a class. It has a static method called parseDouble that takes a String, and return a value of dataType
        // To access static method. we use the className.static method name. Double = className & parseDouble is the static method

      //  System.out.println("The partial age is " + ageWithPartialYear);

    //    System.out.println(getInputFromConsole(currentYearOfBirth));

        System.out.println(getInputFromScanner(2024));


    }

    public static String getInputFromConsole(int currentYear) {

        /*
        * To run java code from console in Intellij, we need to go to terminal, then
        * change directory using cd to the java class
        * cd src
        * cd Chapter_12_Parsing_Values_Reading_Input
        *
        * and then run Java program using
        * java ParsingValuesReadingInput.java
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



/*    public static String getInputFromScanner(int currentYear){

        Scanner sc = new Scanner(System.in);

        System.out.println("Hi, What's your name? ");

        String name = sc.nextLine(); // sc is the local variable of type Scanner class on which the instance methods can be executed

        System.out.println("Hi " + name + ", Nice to meet you!");

        System.out.println("What is your year of Birth ?");

        String yearOfBirth = sc.nextLine();

        int age = currentYear - Integer.parseInt(yearOfBirth);

        return name + "'s" + " Age is " + age;
    }*/


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
