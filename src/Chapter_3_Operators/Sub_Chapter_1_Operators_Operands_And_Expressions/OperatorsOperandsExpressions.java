package Chapter_3_Operators.Sub_Chapter_1_Operators_Operands_And_Expressions;

// Operators in Java are special symbols that perform specific operations on multiple operations and then return a result.

// Operand is a term used to describe any object that is manipulated by an operator. Variables used instead of literals are also operands.

// An expression is formed by combining variables,literals,method return values and operators.

/*
*  Summary of Operators
*
* 1) Operator --> (+) plus operator
*  For Numeric types --> Addition
*  For char          --> Addition
*  For boolean       --> Not Applicable
*  For String        --> Concatenation
*
* 2) Operator --> (-) Subtraction
*  For Numeric types --> Subtraction
*  For char          --> Subtraction
*  For boolean       --> Not Applicable
*  For String        --> Not Applicable
*
* 3) Operator --> (*) Multiplication
*  For Numeric Types  --> Multiplication
*  For char           --> Multiplication
*  For boolean        --> Not Applicable
*  For String         --> Not Applicable
*
* 4) Operator --> ( / ) Division
*  For Numeric Types --> Division
*  For char          --> Division
*  For boolean       --> Not Applicable
*  For String        --> Not Applicable
*
* 5) Operator --> ( % ) Modulus (Remainder)
*  For Numeric Types --> Remainder (Modulus)
*  For char          --> Remainder (Modulus)
*  For boolean       --> Not Applicable
*  For String        --> Not Applicable
*
*
* */

public class OperatorsOperandsExpressions {

    public static void main(String[] args) {

        int myVar = 15 + 12; // 15 and 12 are operands; + is the addition operator.
        double hoursWorked = 9.5d;
        double hourlyRate = 5d;
        double mySalary = hoursWorked * hourlyRate; // hoursWorked and hourlyRate are operands; * is the multiplication operator.

        // myVar = myVar + 1 is equivalent to myVar++ (increment by 1).
        myVar++;
        System.out.println(myVar);

        // myVar = myVar - 1 is equivalent to myVar-- (decrement by 1).
        myVar--;
        System.out.println(myVar);

        // myVar = myVar + 2 is equivalent to myVar += 2.
        myVar += 2;
        System.out.println(myVar);

        // myVar = myVar - 2 is equivalent to myVar -= 2.
        myVar -= 2;
        System.out.println(myVar);

        // myVar = myVar * 10 is equivalent to myVar *= 10.
        myVar *= 10;
        System.out.println(myVar);

        // myVar = myVar / 10 is equivalent to myVar /= 10.
        myVar /= 10;
        System.out.println(myVar);

    }
}
