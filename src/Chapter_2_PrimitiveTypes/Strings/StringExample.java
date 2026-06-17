package Chapter_2_PrimitiveTypes.Strings;
// String is a special class in Java — it is NOT a primitive type, but it is used so commonly that Java gives it special treatment.
// A String is a sequence of characters of any length — from empty "" to thousands of characters long.
// Contrast: a 'char' can hold only ONE character. A String can hold many. char uses single quotes ('A'), String uses double quotes ("Hello").
// String immutability: once a String object is created, its value CANNOT be changed.
// When you "modify" a String (e.g., add to it), Java actually creates a brand NEW String object in memory.
// The original String object is discarded — it becomes eligible for garbage collection.
// Example: myString = myString + ", more text";  — this does NOT change the original String; it creates a new one and assigns the reference to myString.
// The + operator is used to concatenate (join) String values. You can join any data type to a String using +:
// Example: "Score: " + 100 -> "Score: 100" (the integer 100 is automatically converted to its String representation)
// Unicode in Strings: you can embed Unicode escape sequences in String literals.
// Example: "\u00A9" = copyright symbol. Unicode lets Strings contain characters from any language.
// Best practice: for large amounts of string manipulation (many concatenations in a loop), use StringBuilder instead, as it avoids creating many intermediate String objects.

// @quiz What does it mean that Strings are immutable in Java?
// @answer Once a String is created, its value cannot be changed. Any modification creates a new String object.
// @answer The original String is discarded and becomes eligible for garbage collection.

// @quiz What is the difference between a char and a String in Java?
// @answer char holds exactly ONE character and uses single quotes ('A'). String holds any number of characters and uses double quotes ("Hello").

// @quiz When should you use StringBuilder instead of String concatenation?
// @answer When performing many concatenations, especially inside a loop. String + String creates a new object each time, which is wasteful. StringBuilder modifies the same object in place.
public class StringExample {

    public static void main(String[] args) {

        String myString = "This is a string";
        System.out.println("MyString is equal to " + myString);
        myString = myString  + ", and this is more.";
        System.out.println("myString is equal to " + myString);
        myString = myString + " \u00A9 2022";
        System.out.println("myString is equal to " + myString);



    }
}
