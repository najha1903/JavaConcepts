package Chapter_2_PrimitiveTypes.Sub_Chapter_3_Primitive_Data_Types;

//The eight primitive data types in Java are boolean,byte,char,short,int,long,float,double.

//When we start using a literal string, we use a + operator and whatever follows the plus operator is converted to the string and gets outputted.

//Java used the concept of Wrapper class for all eight primitive types

//A byte occupies 8 bits. A byte has a width of 8

//A short occupies 16 bits.A Short has a width of 16

//An int occupies 32 bits.An int has a width of 32

//A long occupies 64 bit.A long has a width of 64

//Floating point numbers have fractional parts that we express with decimal point. For ex :- 3.141

//Floating point numbers are also known as real numbers.

//Float and double primitive types are the two primitive data types for expressing floating type numbers.Float is a single precision number and double is double precision number

//Precision refers to the format and amount of space occupied by the type.

//Single precision(float) occupies 32 bits(width 32) and double precision occupies 64 bits(width 64)

//In general, float and double are great for general floating options but are not great to use when precise calculations are required because of the limitations of how floating points are stored.
//Java has a class called BigDecimal that overcomes this. But for general calculations float and double are fine.
//When precise calculations are necessary for ex :- Currency Calculations, floating type should not be used.

//Casting in Java :- Casting means to treat or convert from one dataType to another.

// In Java, there are two types of casting:
//
//        Widening Casting (automatically) - converting a smaller type to a larger type size
//        byte -> short -> char -> int -> long -> float -> double
//
//        Narrowing Casting (manually) - converting a larger type to a smaller size type
//        double -> float -> long -> int -> char -> short -> byte


//Char DataType can store only one character in a single char variable. Char values are defined under single quotes.

//A Char occupies two bytes of memory, or 16 bits, and thus has width of 16.

//Char allows us to store Unicode characters. A unicode is an international encoding standard for use with different languages and scripts, by which each letter, digit or symbol is assigned a unique numerical value that applies across different platforms and programs.

// Unicode website for reference :-  https://unicode-table.com/en/

// A boolean value allows for two choices 'True' or 'False', 'Yes' or 'No', 1 or 0. In Java terms, we have a boolean primitive type and it can be set to two values only. true or false.

public class PrimitiveDataTypes {

    public static void main(String[] args) {

        // int myValue = 10000; // A variable named myValue is created which is of datatype int and the value initialised = 10000;

        int intMaxValue = Integer.MAX_VALUE; //int is primitive dataType and Integer is wrapper

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
