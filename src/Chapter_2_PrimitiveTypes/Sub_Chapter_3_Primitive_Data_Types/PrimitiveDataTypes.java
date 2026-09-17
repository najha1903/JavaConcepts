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
// Overflow and Underflow: If you exceed the maximum value of a type, it wraps around to the minimum (overflow); if you go below the minimum, it wraps back to the maximum (underflow).
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
//
// Worked examples :-
// 1) Overflow wraps around instead of failing :-
// int max = Integer.MAX_VALUE;
// System.out.println(max + 1);        // prints -2147483648, which is Integer.MIN_VALUE
//
// 2) Widening is automatic, narrowing needs a cast :-
// int i = 100;
// long l = i;                         // widening, nothing to write
// double d = 9.8;
// int n = (int) d;                    // narrowing, the cast is required and prints 9
// Note :- a cast truncates rather than rounds, so (int) 9.8 is 9 and not 10.
//
// 3) Integer division drops the fraction :-
// System.out.println(5 / 2);          // prints 2, because both operands are int
// System.out.println(5 / 2.0);        // prints 2.5, because one operand is double
//
// 4) char is a number underneath :-
// char c = 'A';
// System.out.println(c + 1);          // prints 66, because 'A' is 65 and c is promoted to int
// System.out.println((char) (c + 1)); // prints B, after casting the int back to char
// Note :- this is why adding a char to an int gives an int, not a char. The cast is needed to get a character back.
//
// 5) A wrapper class lets a primitive be used where an object is needed :-
// Integer boxed = 5;                  // autoboxing, int to Integer
// int unboxed = boxed;                // unboxing, Integer back to int
// Note :- Integer.MAX_VALUE and Integer.MIN_VALUE come from the wrapper class, not from the primitive.
// Pitfall :- comparing two Integer objects with == compares references, not values, so use equals for the numbers.

// @quiz (INTERVIEW) What is the difference between widening and narrowing casting in Java?
// @answer Widening converts a smaller compatible type to a larger one, like int to long, and Java does it automatically.
// @answer Narrowing converts a larger type to a smaller one, like double to int, and requires an explicit cast.

// @quiz (INTERVIEW) What is integer overflow in Java?
// @answer Integer overflow happens when a value goes past the type's range and wraps around to the opposite end.
// @answer For example, Integer.MAX_VALUE + 1 becomes Integer.MIN_VALUE.

// @quiz (INTERVIEW) Why does integer division drop the decimal part?
// @answer When both operands are integer types, Java performs integer division and keeps only the whole-number result.
// @answer So 1 / 2 is 0, while 1.0 / 2 uses floating-point division and keeps the fraction.

// @quiz (OCJP) What is the output of: System.out.println(1 / 2); System.out.println(1.0 / 2);?
// @answer The output is 0 and 0.5.
// @answer The first uses integer division, while the second uses double division.

// @quiz (OCJP) What happens here: long l = 10; int i = l;?
// @answer It does not compile because assigning long to int is narrowing and may lose data.
// @answer You need an explicit cast, such as int i = (int) l;.

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
// @quiz (INTERVIEW, EASY) Which statement about primitive type sizes and ranges is correct?
// @option int is 32-bit, covering -2,147,483,648 to 2,147,483,647. [correct]
// @option byte is 8-bit, covering -128 to 128.
// @option short is 16-bit, covering -32,768 to 32,768.
// @option long is 32-bit, the same width as int.
// @explain Java has exactly 8 primitive types, and their ranges are asymmetric because one bit is used for the sign. The largest positive value is one less than the magnitude of the smallest negative value.
// @why B: byte covers -128 to 127. The upper bound is 127, not 128, because 0 occupies one of the 256 values.
// @why C: short covers -32,768 to 32,767. The upper bound is 32,767, not 32,768.
// @why D: long is 64-bit. int is 32-bit. That is why a literal such as 100L is written with the L suffix.

// @quiz (INTERVIEW, MEDIUM) What is the difference between widening and narrowing conversion?
// @option Widening goes from a smaller type to a larger compatible type and is automatic. Narrowing goes the other way and requires an explicit cast. [correct]
// @option Widening requires a cast because the larger type needs more memory.
// @option Both directions are automatic, and Java truncates silently when needed.
// @option Narrowing never loses information because Java rounds the value.
// @explain Widening follows the chain byte -> short -> char -> int -> long -> float -> double and is applied for you. Narrowing converts back down and needs the cast to be written, because range or precision can be lost.
// @why B: requiring a cast has nothing to do with memory size. Widening is automatic precisely because nothing is lost.
// @why C: if both were automatic, Java could silently corrupt values, which is exactly what the compiler prevents.
// @why D: narrowing can lose information. A cast truncates rather than rounds, so 9.8 becomes 9, not 10.

// @quiz (OCJP, MEDIUM) What is printed by these two statements?
// @code System.out.println(5 / 2);
// @code System.out.println(5 / 2.0);
// @option 2 and 2.5 [correct]
// @option 2.5 and 2.5
// @option 2 and 2
// @option 3 and 2.5
// @explain When both operands of / are integers, Java performs integer division and drops the fractional part. As soon as one operand is a floating-point value, floating-point division happens and the fraction is kept.
// @why B: the first line has two int operands, so it cannot produce 2.5.
// @why C: the second line has a double operand, so it cannot produce 2.
// @why D: integer division truncates towards zero, it does not round up. 5 / 2 is 2, never 3.

// @quiz (OCJP, HARD) What is the value of x after this code runs?
// @code int x = Integer.MAX_VALUE;
// @code x++;
// @option -2147483648, because the value wraps around to Integer.MIN_VALUE. [correct]
// @option 2147483648, because int is promoted to long automatically.
// @option It throws ArithmeticException.
// @option It stays at 2147483647 and the increment is ignored.
// @explain int is a 32-bit signed two's-complement type. Incrementing the largest bit pattern carries over into the sign bit, which produces the smallest negative value. Java discards the carry bit and throws nothing.
// @why B: no promotion happens on overflow. The result is stored back into an int, so there is nowhere to hold 2147483648.
// @why C: Java does not raise an exception for primitive integer overflow. Only integer division by zero throws ArithmeticException.
// @why D: the value does change. The carry bit is discarded, which is what makes the value wrap to the opposite end of the range.

// @quiz (INTERVIEW, EASY) Which statement about numeric literal suffixes is correct?
// @option 100L creates a long, 3.14f creates a float, and a plain decimal literal such as 3.14 is a double. [correct]
// @option 100L creates an int, and a plain decimal literal such as 3.14 is a float.
// @option The suffix d is compulsory for every double literal.
// @option A decimal literal such as 3.14 is treated as a float by default.
// @explain Whole-number literals are int unless L is added. Decimal literals are double by default, so float needs the f suffix. The d suffix is allowed but never required.
// @why B: L means long, not int, and a decimal literal is double, not float.
// @why C: double is the default for decimals, so the d suffix is optional. float is the type that needs a suffix.
// @why D: decimals default to double. Writing float f = 3.14; fails to compile without the f suffix.

// @quiz (INTERVIEW, MEDIUM) Which statement about default values in Java is correct?
// @option Instance and static fields receive type defaults such as 0 and false, while local variables must be assigned before they are read. [correct]
// @option Every variable, including a local variable, receives a default value.
// @option Local variables default to null.
// @option Only static fields receive default values.
// @explain Fields are zeroed as part of creating the object or class. Local variables live only as long as the method call, so Java refuses to guess a value and reports a compile error if you read one before assigning it.
// @why B: locals are the exception. Reading an unassigned local variable is a compile-time error.
// @why C: a local primitive is not set to null, and null is not even a valid value for a primitive. It simply has no value yet.
// @why D: instance fields receive defaults too, not only static fields.

// @quiz (INTERVIEW, MEDIUM) Which statement about char is correct?
// @option The escape written as backslash-u 0044 is the character 'D', because char is 16-bit and Unicode-based. [correct]
// @option char is 8-bit and holds one ASCII character.
// @option char uses double quotes, just like a String.
// @option The escape backslash-u 0044 is decimal 44, which is the comma character.
// @explain A char is a single 16-bit Unicode code unit written in single quotes. The Unicode escape is written in hexadecimal, so the escape for 0044 is 0x44, which is decimal 68, the letter D.
// @why B: char is 16-bit so it can represent Unicode, not just 8-bit ASCII.
// @why C: double quotes create a String. A char literal always uses single quotes, as in 'D'.
// @why D: the escape is hexadecimal, not decimal. 0x44 is 68, which is 'D'; decimal 44 is the comma.

// @quiz (OCJP, HARD) What is the value of n?
// @code double d = 9.8;
// @code int n = (int) d;
// @option 9, because the cast truncates towards zero. [correct]
// @option 10, because the cast rounds to the nearest whole number.
// @option 9.8, because int keeps the fractional part.
// @option It does not compile, because a double can never be converted to an int.
// @explain Narrowing a decimal to an int discards the fractional part; it does not round it. Use Math.round when rounding is what you actually want.
// @why B: a cast truncates. To round 9.8 up to 10 you would need Math.round(d).
// @why C: an int cannot hold a fraction at all, which is why precision is lost here.
// @why D: the conversion is legal once the explicit (int) cast is present. Without the cast it would fail to compile.

// @quiz (INTERVIEW TRAP) What does the (byte) parameter-like target in (byte) (intMinValue / 2) tell Java?
// @answer It tells Java to narrow the int result to byte. Be careful: narrowing can overflow or discard information.
//
// @quiz (OCJP) Why choose 5f instead of 5 in floatValue = (5f / 2f)?
// @answer The f suffix makes each literal a float, so Java performs floating-point division and keeps the decimal result instead of integer division.
// @quiz (INTERVIEW, MEDIUM) Does this line compile?
// @code byte b = 128;
// @option No. 128 is outside the byte range, so the compiler rejects the assignment. [correct]
// @option Yes, and b holds 128.
// @option Yes, and b wraps around to -128.
// @option Yes, but only because 128 fits in a nibble.
// @explain A byte is 8 bits and holds -128 to 127. A literal outside that range cannot be assigned to a byte without a cast. Wrapping happens with arithmetic at run time, not when the compiler can see the value is out of range.
// @why B: 128 is one past the maximum, so the value does not fit.
// @why C: the wrap-around happens only for a computed value at runtime, such as byte b = (byte) 128;. Here the compiler stops first.
// @why D: the range is fixed by the type, and 127 is the largest byte.

// @quiz (OCJP, HARD) What is printed by these two statements?
// @code System.out.println(-7 / 2);
// @code System.out.println(-7 % 2);
// @option -3 and -1 [correct]
// @option -4 and 1
// @option -3.5 and -1
// @option -4 and -1
// @explain Integer division truncates towards zero, so -3.5 becomes -3. The remainder then has the same sign as the dividend, which makes -7 % 2 equal to -1.
// @why B: -7 / 2 truncates towards zero to -3, not away from it to -4.
// @why C: both operands are int, so the result of / is an int and cannot be -3.5.
// @why D: the division result is -3, not -4.

// @quiz (OCJP, HARD) What is printed by this code?
// @code System.out.println(0.1 + 0.2);
// @code System.out.println(0.1 + 0.2 == 0.3);
// @option 0.30000000000000004 and false [correct]
// @option 0.3 and true
// @option 0.3 and false
// @option 0.30000000000000004 and true
// @explain double is a binary floating-point type, and 0.1 and 0.2 cannot be stored exactly in binary. The tiny errors add up, so the sum is slightly more than 0.3 and the exact comparison fails. This is why BigDecimal is used for money.
// @why B: the sum is not exactly 0.3, so the comparison cannot be true.
// @why C: the printed value shows the accumulated error rather than a clean 0.3.
// @why D: the two halves cannot both be right. If the sum differs from 0.3, the comparison is false.

// @quiz (INTERVIEW, MEDIUM) Does this code compile?
// @code short s = 1;
// @code s = s + 1;
// @option No. s + 1 is promoted to int, and an int cannot be assigned back to a short without a cast. [correct]
// @option Yes, and s becomes 2.
// @option Yes, and s wraps around.
// @option Yes, because short and int are the same width.
// @explain Java promotes short and byte operands to int before arithmetic. The result of s + 1 is therefore an int, and narrowing it back to short needs an explicit cast such as s = (short)(s + 1).
// @why B: the promotion makes the assignment invalid, so it never reaches runtime.
// @why C: nothing wraps here. The compiler rejects the type mismatch first.
// @why D: short is 16 bits and int is 32 bits, so they differ.

// @quiz (OCJP, MEDIUM) Which statement about boolean in Java is correct?
// @option boolean is not a numeric type, so it cannot be cast to or from an int. [correct]
// @option true is equal to 1 and false is equal to 0, so int x = (int) true; is valid.
// @option A boolean can be used directly as an if condition only after converting it to an int.
// @option boolean and byte are interchangeable because both are 8 bits.
// @explain Java keeps boolean completely separate from the numeric types. Unlike C, there is no conversion between true and 1, and a boolean is already the only thing an if condition needs.
// @why B: that rule belongs to C and C++. Java does not allow the cast.
// @why C: no conversion is needed or possible. A boolean is exactly what if requires.
// @why D: a boolean is not a number, so it is not interchangeable with any numeric type.

public class PrimitiveDataTypes {

    public static void main(String[] args) {

        int myValue = 10000; // A plain int declaration: datatype int, identifier myValue, value 10000.
        System.out.println("myValue is = " + myValue); //myValue is = 10000

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
        System.out.println("myNewByteValue is = " + myNewByteValue);

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

        System.out.println("myTrueBooleanValue is = " + myTrueBooleanValue);   //myTrueBooleanValue is = true
        System.out.println("myFalseBooleanValue is = " + myFalseBooleanValue); //myFalseBooleanValue is = false
    }

}
