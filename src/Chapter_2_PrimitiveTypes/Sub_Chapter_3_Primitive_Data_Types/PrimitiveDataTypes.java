package Chapter_2_PrimitiveTypes.Sub_Chapter_3_Primitive_Data_Types;
// Java has exactly 8 primitive data types — these are the most fundamental building blocks for storing data.
// Unlike objects, primitive types are stored directly in memory (not as references), making them fast and memory-efficient.
//
// The 8 Primitive Types:
// Type     | Width  | Range / Notes
// ---------|--------|--------------------------------------------------------------
// boolean  | 1 bit  | Only two values: true or false
// byte     | 8 bits | -128 to 127
// short    | 16 bits| -32,768 to 32,767
// char     | 16 bits| A single Unicode character — written in single quotes: 'A'
// int      | 32 bits| -2,147,483,648 to 2,147,483,647 (default for whole numbers)
// long     | 64 bits| Very large whole numbers — add 'L' suffix: 100L
// float    | 32 bits| Single-precision decimal — add 'f' suffix: 3.14f (NOT for precise math)
// double   | 64 bits| Double-precision decimal — default for decimals, add 'd': 3.14d
//
// Wrapper Classes: Java provides a wrapper class for each primitive (e.g., int -> Integer, double -> Double).
// These wrapper classes offer utility methods and constants like Integer.MAX_VALUE and Integer.MIN_VALUE.
//
// Overflow and Underflow: If you exceed the maximum value of a type, it wraps around (overflow).
// If you go below the minimum, it wraps to the maximum (underflow).
// Example: int max = Integer.MAX_VALUE; then max + 1 = Integer.MIN_VALUE (it wraps around!)
//
// Casting: Converting from one type to another.
// Widening (automatic) — smaller type to larger: byte -> short -> char -> int -> long -> float -> double
// Narrowing (manual, requires cast) — larger type to smaller: double -> ... -> byte
// Example: byte b = (byte)(someIntValue / 2);  — the (byte) cast tells Java to treat the int result as a byte.
//
// Integer division: when both operands are int, the result is also int — the decimal part is DROPPED.
// Example: 5/2 = 2 (not 2.5). Use 5.0/2.0 or 5d/2d to get 2.5.
//
// Precision: double has more decimal places than float.
// 5f/3f = 1.6666666 (7 significant digits)
// 5d/3d = 1.6666666666666667 (15+ significant digits)
// For currency or financial calculations, use BigDecimal instead of float/double.
//
// char and Unicode: char holds a single character, uses single quotes: char c = 'D';
// You can also use Unicode escape sequences: char d = '\u0044'; (both give 'D')
// Unicode is an international encoding standard — every character in every language has a unique code point.
// Reference: https://unicode-table.com/en/
//
// boolean: can only be true or false. It is the result of any comparison or logical expression.

// @quiz (INTERVIEW) What are the default values of Java primitive fields and object references if you do not initialize them explicitly?
// @answer Instance fields get type-specific defaults: int = 0, boolean = false, double = 0.0, and char = '\u0000' which is the Unicode null character.
// @answer Reference type fields default to null because they store no object reference yet.
// @answer Local variables are different: Java does NOT give them default values, so you must initialize them before use.

// @quiz (INTERVIEW) What happens in Java when you run: int x = Integer.MAX_VALUE; x++; ?
// @answer Output/value: x becomes -2147483648, which is Integer.MIN_VALUE.
// @answer int is a 32-bit signed two's-complement type, so incrementing the largest possible bit pattern wraps around to the smallest negative value.
// @answer Java does not throw an exception for primitive integer overflow; the extra carry bit is discarded.

// @quiz (INTERVIEW) What is the difference between widening and narrowing primitive conversions in Java?
// @answer Widening means converting a smaller compatible type to a larger one, such as int to long. It is automatic because no information is lost.
// @answer Narrowing means converting a larger type to a smaller one, such as double to int. It requires an explicit cast because precision or range can be lost.
// @answer Example: double d = 9.8; int n = (int) d; gives 9 because the fractional part is truncated.

// @quiz (INTERVIEW) Is this valid Java: int x = 1_000_000; and what is the purpose of the underscores?
// @answer Yes, it is valid in Java 7 and later, and the value is still one million.
// @answer Underscores in numeric literals are ignored by the compiler and exist only to improve human readability.
// @answer They cannot be placed at the start or end of the literal, next to a decimal point, or right before a type suffix such as L or F.
public class PrimitiveDataTypes {

    public static void main(String[] args) {

        // int myValue = 10000; // A variable named myValue is created which is of datatype int and the value initialised = 10000;

        int intMaxValue = Integer.MAX_VALUE; //int is a primitive data type and Integer is its wrapper class.

        int intMinValue = Integer.MIN_VALUE; //By specifying wrapper class Integer, it allows us to perform different operations on int.

        System.out.println("The max Value of the integer is = " + intMaxValue); //The max Value of the integer is = 2147483647
        System.out.println("The min Value of the integer is = " + intMinValue); //The min Value of the integer is = -2147483648

        //If we try and put a larger value than the maximum in Java, or a smaller value than the minimum in Java,
        // then we will get an Overflow in the case of the maximum value and underflow in the case of minimum

        System.out.println("The overflow value of int is  = " + (intMaxValue + 1)); //The overflow value of int is  = -2147483648
        System.out.println("The underflow value of int is = " + (intMinValue - 1)); //The underflow value of int is = 2147483647

        byte myMaxByteValue = Byte.MAX_VALUE;
        byte myMinByteValue = Byte.MIN_VALUE;

        System.out.println("The max Value of the Byte is = " + myMaxByteValue); //The max Value of the Byte is = 127
        System.out.println("The min Value of the Byte is = " + myMinByteValue); //The min Value of the Byte is = -128

        short myShortMaxValue = Short.MAX_VALUE;
        short myShortMinValue = Short.MIN_VALUE;

        System.out.println("The max Value of Short is = " + myShortMaxValue); //The max Value of Short is = 32767
        System.out.println("The min Value of Short is = " + myShortMinValue); //The min Value of Short is = -32768

        long myLongValue = 100L; //We need to put letter L in the end to make it as long value.

        long myLongMaxValue = Long.MAX_VALUE;
        long myLongMinValue = Long.MIN_VALUE;

        System.out.println("The max Value of Long is = " + myLongMaxValue); //The max Value of Long is = 9223372036854775807
        System.out.println("The min Value of Long is = " + myLongMinValue); //The min Value of Long is = -9223372036854775808

        byte myNewByteValue = (byte) (intMinValue / 2); //By Casting, we tell/instruct java to treat the int value as byte

        float myMaxFloatValue = Float.MAX_VALUE;
        float myMinFloatValue = Float.MIN_VALUE;

        System.out.println("The max Value of Float is = " + myMaxFloatValue); //The max Value of Float is = 3.4028235E38
        System.out.println("The min Value of Float is = " + myMinFloatValue); //The min Value of Float is = 1.4E-45

        double myMaxDoubleValue = Double.MAX_VALUE;
        double myMinDoubleValue = Double.MIN_VALUE;

        System.out.println("The max Value of Double is = " + myMaxDoubleValue); //The max Value of Double is = 1.7976931348623157E308
        System.out.println("The min Value of Double is = " + myMinDoubleValue); //The min Value of Double is = 4.9E-324

        int myIntValue = 5;          // For whole numbers int is considered as default
        float myFloatValue = 5.3f;   // To declare float, it is best practice adding f after declaring number at the end of expression
        double myDoubleValue = 5.4d; // For floating point numbers, double is accepted as default. To declare double, it is best practice adding d after declaring number at the end of the declaration

        int intValue = (5 / 2);
        float floatValue = (5f / 2f);
        double doubleValue = (5d / 2d);

        System.out.println("Int value is = " + intValue);       //Int value is = 2. Since integer is a whole number, it doesn't handle the remainder of the dividend and divisor
        System.out.println("Float value is = " + floatValue);   //Float value is = 2.5
        System.out.println("Double value is = " + doubleValue); //Double value is = 2.5

        int intValuePrecision = (5 / 3);
        float floatValuePrecision = (5f / 3f);

        double doubleValuePrecision = (5d / 3d);

        System.out.println("Int precision value is = " + intValuePrecision);       //Int precision value is = 1
        System.out.println("Float precision value is = " + floatValuePrecision);   //Float precision value is = 1.6666666
        System.out.println("Double precision value is = " + doubleValuePrecision); //Double precision value is = 1.6666666666666667

        char myChar = 'D';
        char myUnicodeChar = '\u0044';

        System.out.println("myChar value is " + myChar);
        System.out.println("myUnicodeChar value is " + myUnicodeChar);

        boolean myTrueBooleanValue = true;
       boolean myFalseBooleanValue = false;


    }

}
