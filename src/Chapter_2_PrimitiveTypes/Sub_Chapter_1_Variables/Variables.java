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
public class Variables {

    public static void main(String[] args) {

        int myFirstNumber = 5;  //declaration statement is used to define a variable by indicating the data type, and the name, and optionally to set the variable to a certain value.

        // Datatype = int, variable name = myFirstNumber, value = 5;

        System.out.println(myFirstNumber);
    }
}
