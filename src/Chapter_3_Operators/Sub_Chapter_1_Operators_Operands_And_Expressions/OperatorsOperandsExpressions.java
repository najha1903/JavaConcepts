package Chapter_3_Operators.Sub_Chapter_1_Operators_Operands_And_Expressions;

// Operators in Java are special symbols that perform specific operations on multiple operations and then return a result.

// Operand is a term used to describe any object that is manipulated by an operator. Variables used instead of literals are also operands.

// An expression is formed by combining variables,literals,method return values and operators.

public class OperatorsOperandsExpressions {

    public static void main(String[] args) {

        int myVar = 15 + 12; // 15 and 12 are the operands. +(plus) is the operator.
        double hoursWorked = 9.5d;
        double hourlyRate = 5d;
        double mySalary = hoursWorked * hourlyRate; // hoursWorked and hourlyRate are operands. *(Multiplication) is the operator.

        //myVar = myVar + 1;
        myVar++;
        System.out.println(myVar);

        //myVar = myVar - 1;
        myVar--;
        System.out.println(myVar);

        //myVar = myVar + 2;
        myVar += 2;
        System.out.println(myVar);

        //myVar = myVar - 2;
        myVar -= 2;
        System.out.println(myVar);

        //myVar = myVar * 10;
        myVar *= 10;
        System.out.println(myVar);

        //myVar = myVar / 10;
        myVar /= 10;
        System.out.println(myVar);

    }
}
