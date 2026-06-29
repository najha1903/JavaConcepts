package Chapter_13_Exception_Handling.Sub_Chapter_2_Exception_Handling_CodingChallenge;

/*
 * Challenge: Write a safeDivide method that returns a / b and catches ArithmeticException when
 * the divisor is zero, returning 0 instead.
 */
public class SafeDivisionChallenge {

    public static void main(String[] args) {
        System.out.println("10 / 2 = " + safeDivide(10, 2));
        System.out.println("10 / 0 = " + safeDivide(10, 0));
    }

    public static int safeDivide(int a, int b) {
        try {
            return a / b;
        } catch (ArithmeticException exception) {
            System.out.println("Cannot divide by zero. Returning 0.");
            return 0;
        }
    }
}
