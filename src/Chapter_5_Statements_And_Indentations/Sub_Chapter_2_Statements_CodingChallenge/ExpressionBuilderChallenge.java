package Chapter_5_Statements_And_Indentations.Sub_Chapter_2_Statements_CodingChallenge;

/*
 * Challenge: Use separate statements to calculate the area and perimeter of a rectangle,
 * and the hypotenuse of a right triangle using Math.sqrt and Math.pow.
 */
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
