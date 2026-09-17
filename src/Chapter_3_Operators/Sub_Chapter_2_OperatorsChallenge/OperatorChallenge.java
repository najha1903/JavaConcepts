package Chapter_3_Operators.Sub_Chapter_2_OperatorsChallenge;
// CODING CHALLENGE — Operators Practice
// This challenge demonstrates practical use of arithmetic operators, the modulus (remainder) operator, boolean logic, and the ternary operator.
// Key concept: the modulus operator (%) gives the REMAINDER of division. If a % b == 0, then a is perfectly divisible by b with no remainder.
// The ternary operator syntax: condition ? valueIfTrue : valueIfFalse — a compact way to assign one of two values based on a condition.
// The NOT operator (!) inverts a boolean: if checkRemainder is true, !checkRemainder is false, and vice versa.
/*

OPERATOR CHALLENGE

1. Create a double variable with a value of 20.00
2. Create a second variable of type double with the value 80.00
3. Add both numbers together and multiply by 100.00
4. Use the remainder operator to figure out what the remainder from the result of the operation in step 3 and 40.00
   We used the modulus or remainder operator on int in the course, but we can also use it on a double.
5. Create a boolean variable that assigns the value "true" if the remainder in step 4 is 0, or "false" , if it's not 0
6. Output the boolean variable.
7. Write an if-then statement that displays a message "Got some remainder" if the boolean in step is "not true".

*/

// What the challenge practises :-
// 1) Order of operations without parentheses :-
// double first = 20.00d;
// double second = 80.00d;
// double total = (first + second) * 100.00d;   // 100.00 is forced first by the parentheses
// System.out.println("Total = " + total);      // prints Total = 10000.0
// Note :- without the parentheses, 20.00 + 80.00 * 100.00 would be 8020.0, because * binds tighter than +.
//
// 2) The remainder operator works on double too :-
// double remainder = total % 40.00d;
// System.out.println("Remainder = " + remainder);   // prints Remainder = 0.0
// Note :- the course used % on int only, but it is defined for double as well. 40.00 divides 10000.0 exactly, so the remainder is 0.0.
//
// 3) A comparison already produces a boolean :-
// boolean isDivisible = (remainder == 0);
// System.out.println("isDivisible = " + isDivisible);   // prints isDivisible = true
// Note :- `remainder == 0` is the test, and the result is stored. There is no need for an if here.
//
// 4) The NOT operator inverts a boolean :-
// if (!isDivisible) {
//     System.out.println("Got some remainder");
// }
// Note :- !isDivisible is true only when the remainder was not 0, which is why the message is written inside the NOT branch.
//
// Pitfall :- comparing two double values with `==` is risky in general, because 0.1 + 0.2 is not exactly 0.3. It is safe here only because 40.00 divides 10000.0 exactly and no rounding is involved.
//
// Parameter notes :-
// - first and second (the two double operands): represent the values being combined, so choose numbers whose sum is exactly divisible by the third value when you want the remainder branch to be skipped.
// - divisor (the value on the right of the remainder operator): choose a non-zero divisor. A double divisor of 0.0 gives NaN instead of throwing, so the boolean test would silently become false.

public class OperatorChallenge {
    public static void main(String[] args) {

        double myFirstValue = 20.00D;

        double mySecondValue = 80.00D;

        double sum = (myFirstValue + mySecondValue) * 100.00D;

        double remainder = sum % 40.00D;

        boolean checkRemainder = (remainder == 0) ? true : false;

        System.out.println("Remainder check is :-  " + checkRemainder);

        if(!checkRemainder){
            System.out.println("Got some remainder");
        }

    }
}
