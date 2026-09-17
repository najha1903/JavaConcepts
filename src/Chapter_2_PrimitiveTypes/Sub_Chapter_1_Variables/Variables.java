package Chapter_2_PrimitiveTypes.Sub_Chapter_1_Variables;

// Core Concepts: Java Variables & Initialization
// A variable is a named storage location in memory that holds a data value.
// In Java, variables are strongly typed: every variable must be declared with a specific data type before it can be used.
//
// Syntax: dataType variableName = initialValue;
// Example: int myFirstNumber = 5;
//
// Naming Rules & Conventions:
// - Identifiers must begin with a letter, underscore (_), or dollar sign ($).
// - By convention, variable names follow camelCase (e.g. myFirstNumber, totalAccountBalance).
// - Keywords (such as int, double, class, public) cannot be used as variable identifiers.
//
// Local Variable Lifecycle & Rules:
// - Local variables are declared inside methods, constructors, or code blocks.
// - Unlike instance/static fields, local variables NEVER receive default values.
// - Warning: You MUST initialize a local variable before reading or referencing it, otherwise the code will fail to compile.
//
// The three kinds of variable :-
// - Local variable :- declared inside a method, constructor or block. It exists only while that block
//   runs, and it must be assigned before it is read.
// - Instance field :- declared in the class but outside any method. Every object gets its own copy.
// - Static field :- declared with the static keyword. One copy is shared by the whole class.
//
// Default values, for fields only. Local variables get none :-
// - int, long, short, byte :- 0
// - double, float :- 0.0
// - boolean :- false
// - char :- the null character, Unicode 0000
// - any reference type, including String :- null
//
// Syntax and a declaration in practice :-
// dataType variableName = initialValue;
// int myFirstNumber = 5;


// @quiz (INTERVIEW) What are Java's 8 primitive types and their sizes?
// @answer byte (8-bit), short (16-bit), int (32-bit), long (64-bit), char (16-bit Unicode), float (32-bit IEEE 754), double (64-bit IEEE 754), and boolean (true/false).
// @answer Primitives store their actual raw values directly in stack memory, whereas reference types store object memory addresses.

// @quiz (INTERVIEW TRAP) Do local variables receive default values in Java?
// @answer No. Instance and static fields get default values (0, false, null), but local variables do not.
// @answer An uninitialized local variable causes a compile-time error if read before assignment.

// @quiz (INTERVIEW, EASY) Which of these is a valid Java variable identifier that also follows the usual naming convention?
// @option totalAccountBalance [correct]
// @option 2ndPlaceScore
// @option class
// @option total-balance
// @explain An identifier must begin with a letter, an underscore, or a dollar sign, may not be a keyword, and by convention uses camelCase.
// @why B: an identifier cannot begin with a digit.
// @why C: class is a Java keyword and cannot be used as a variable name.
// @why D: a hyphen is not allowed in an identifier; the compiler reads it as a subtraction.

// @quiz (INTERVIEW, MEDIUM) Is `int x = 1_000_000;` valid Java, and what do the underscores do?
// @option It is valid from Java 7 onward, the value is one million, and the underscores are ignored by the compiler. [correct]
// @option It is invalid, because underscores are not permitted in numeric literals.
// @option It creates a String rather than a number.
// @option The underscores must appear after every third digit, or the code will not compile.
// @explain Underscores exist purely to make long numbers easier for a human to read. The compiler strips them, so the value is unchanged.
// @why B: Java 7 added underscores in numeric literals exactly for readability.
// @why C: it is still an int literal, and x holds the number 1000000.
// @why D: grouping in threes is only a convention. The real rules forbid an underscore at the very start or end, next to a decimal point, or directly before a suffix such as L or f.

public class Variables {

    public static void main(String[] args) {

        // Declaration statement: declares data type (int), identifier (myFirstNumber), and initial value (5).
        int myFirstNumber = 5;

        System.out.println(myFirstNumber);
    }
}

