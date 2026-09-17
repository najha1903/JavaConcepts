package Chapter_4_Statements_And_Indentations.Sub_Chapter_2_Statements_CodingChallenge;

/*
 * Challenge: Use separate statements to calculate the area and perimeter of a rectangle,
 * and the hypotenuse of a right triangle using Math.sqrt and Math.pow.
 */

// What the challenge practises :-
// 1) One calculation per statement :-
// double area = length * width;
// double perimeter = 2 * (length + width);
// Note :- writing each result on its own line keeps the steps readable, and each line is itself a complete statement.
//
// 2) The hypotenuse :-
// double hypotenuse = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
// System.out.println("Hypotenuse = " + hypotenuse);   // for base 3 and height 4 prints Hypotenuse = 5.0
// Note :- Math.sqrt returns a double, so the result is 5.0 and not 5.
//
// Parameter notes :-
// - length and width (the two sides of the rectangle): use the same unit for both, and use non-negative values, because a negative side has no physical meaning here.
// - base and height (the two legs of the right triangle): use the two sides that meet at the right angle. Passing the hypotenuse as one of them would give the wrong result.
public class ExpressionBuilderChallenge {

    public static void main(String[] args) {
        double width = 8.5;
        double height = 4.0;
        double area = width * height;
        double perimeter = 2 * (width + height);

        double sideA = 3;
        double sideB = 4;
        double hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

        System.out.println("Rectangle area: " + area);
        System.out.println("Rectangle perimeter: " + perimeter);
        System.out.println("Triangle hypotenuse: " + hypotenuse);
    }
}
