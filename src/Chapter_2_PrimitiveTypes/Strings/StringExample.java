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

// @quiz (INTERVIEW TRAP) int a=10; int b=20; String c="Navneet"; What is the output of: System.out.println(a + b + c);
// @answer Output: 30Navneet
// @answer Java evaluates + left to right: (a + b) is done first (both ints) giving 30, then 30 + "Navneet" triggers String concatenation giving "30Navneet".
// @answer KEY RULE: if both operands of + are numeric, it is arithmetic. Once one operand is a String, + becomes concatenation for the rest of the expression.

// @quiz (INTERVIEW TRAP) int a=10; int b=20; String c="Navneet"; What is the output of: System.out.println(c + a + b);
// @answer Output: Navneet1020
// @answer Java evaluates + left to right: c+"Navneet" + a=10 gives "Navneet10", then "Navneet10" + b=20 gives "Navneet1020".
// @answer Once the first operand is a String, ALL subsequent + operations become string concatenation — even int + int after it.

// @quiz (INTERVIEW TRAP) What is the output of: System.out.println("Result: " + 1 + 2);
// @answer Output: Result: 12 (NOT Result: 3)
// @answer Because + is left-to-right: "Result: " + 1 = "Result: 1", then "Result: 1" + 2 = "Result: 12". Both additions become concatenation once a String is involved.
// @answer To get "Result: 3", use parentheses: "Result: " + (1 + 2). Parentheses force arithmetic first.

// @quiz (INTERVIEW TRAP) What is the output of: System.out.println(1 + 2 + "Result");
// @answer Output: 3Result
// @answer Java evaluates left to right: 1 + 2 = 3 (both ints, arithmetic), then 3 + "Result" = "3Result" (String concat).
// @answer Contrast: "Result" + 1 + 2 = "Result12". Order matters!

// @quiz (INTERVIEW TRAP) What is the output of: System.out.println("Value: " + (10 + 20) + " done");
// @answer Output: Value: 30 done
// @answer Parentheses (10 + 20) are evaluated first as arithmetic giving 30. Then "Value: " + 30 = "Value: 30", then + " done" = "Value: 30 done".

// @quiz (INTERVIEW TRAP) What is the output of: char ch = 'A'; System.out.println(ch + 1);
// @answer Output: 66 (NOT A1)
// @answer char in arithmetic context is treated as its Unicode/ASCII integer value. 'A' = 65. 65 + 1 = 66. Result is int 66, not a String.
// @answer To get "A1", use: "" + ch + 1 OR String.valueOf(ch) + 1. Adding an empty String "" forces concatenation.

// @quiz (INTERVIEW) How do you find the length of a String WITHOUT using the built-in .length() method?
// @answer Use a for-each loop over toCharArray(): int count = 0; for (char ch : str.toCharArray()) { count++; } // count is the length.
// @answer Another approach: convert to char array and use array.length — but that internally calls length anyway.
// @answer Conceptually: iterate over each character and count. This is O(n) — which is what .length() avoids by caching the value internally.

// @quiz (INTERVIEW) What is the output of: String s = "Java"; s.concat(" is fun"); System.out.println(s);
// @answer Output: Java
// @answer Strings are immutable. concat() returns a NEW String but does NOT modify s. Since the return value is ignored, s is still "Java".
// @answer Fix: s = s.concat(" is fun"); — you must assign the result back.

// @quiz (INTERVIEW TRAP) int a=5; What is the output of: System.out.println("" + a + a);
// @answer Output: 55 (NOT 10)
// @answer "" is an empty String. "" + a = "5" (String), then "5" + a = "55". Not arithmetic because the first operand is a String.
// @answer To add them arithmetically: System.out.println(a + a + "") = "10"
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
