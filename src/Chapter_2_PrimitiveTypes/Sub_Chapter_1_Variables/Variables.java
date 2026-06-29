package Chapter_2_PrimitiveTypes.Sub_Chapter_1_Variables;
// A variable is a named storage location in your computer's memory that holds a value. You give it a name so you can refer to and change that value throughout your program.
// As the name suggests, a variable's value can vary — it can be updated or reassigned after it is first set.
// To declare a variable in Java, you must specify: (1) the data type, (2) a name (identifier), and optionally (3) an initial value.
// Syntax: dataType variableName = value;  Example: int myFirstNumber = 5;
// Java has many built-in data types (like int, double, String, boolean) — together known as primitive types and reference types.
// Data types are keywords in Java — they are reserved words that tell Java what kind of value the variable will store.
// An identifier (variable name) must start with a letter, underscore, or dollar sign. By convention, variable names use camelCase (e.g., myFirstNumber).
// A String literal is any sequence of characters surrounded by double quotes — e.g., "Hello". Unlike variables, the literal itself cannot be changed; the variable pointing to it can be reassigned.
// Java operators perform operations on variables and values — for example + (addition), - (subtraction), * (multiplication), / (division), % (remainder).
// A declaration statement defines a variable: int myFirstNumber = 5; — the type is int, name is myFirstNumber, value is 5.

// @quiz (INTERVIEW) What are Java's 8 primitive types and their sizes?
// @answer byte=8 bits, short=16, int=32, long=64, char=16, float=32, double=64, and boolean stores true or false.
// @answer boolean has no fixed JVM-wide bit size in memory, but conceptually it has only two possible values.

// @quiz (INTERVIEW) What is the difference between a primitive type and a reference type?
// @answer A primitive stores its actual value directly, while a reference type stores the address-like reference to an object.
// @answer int, double, and boolean are primitives; String and arrays are reference types.

// @quiz (INTERVIEW) What is the default value of a local variable in Java?
// @answer Local variables do not get default values in Java.
// @answer You must initialize a local variable before reading it, or the code will not compile.

// @quiz (INTERVIEW) Do instance fields and local variables behave the same way for default values?
// @answer No. Instance and static fields get default values like 0, false, or null, but local variables do not.
// @answer That is why uninitialized locals cause compile-time errors while fields do not.

// @quiz (OCJP) What concept is shown here: Integer x = 10; int y = x;?
// @answer int to Integer is autoboxing, and Integer to int is unboxing.
// @answer Java inserts those conversions automatically when the types are compatible.

// @quiz (OCJP) What happens with: byte b = 128;?
// @answer It does not compile because 128 is outside the byte range of -128 to 127.
// @answer You need a smaller literal or an explicit cast, though a cast can still change the value.
public class Variables {

    public static void main(String[] args) {

        int myFirstNumber = 5;  //declaration statement is used to define a variable by indicating the data type, and the name, and optionally to set the variable to a certain value.

        // Datatype = int, variable name = myFirstNumber, value = 5;

        System.out.println(myFirstNumber);
    }
}
