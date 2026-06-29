/* Deep Problem: Expression Evaluator Utilities — Build core numeric helper methods without using Math library shortcuts. Compute powers using repeated multiplication, determine absolute value manually, find the maximum of three values, and classify a number's sign. The goal is to practice operator-driven problem solving. */
package Chapter_3_Operators.Sub_Chapter_3_DeepProblems;

public class ExpressionEvaluatorDeepProblem {

    public static long power(int base, int exponent) {
        if (exponent < 0) {
            throw new IllegalArgumentException("Exponent must be non-negative.");
        }

        long result = 1;
        for (int count = 0; count < exponent; count++) {
            result *= base;
        }
        return result;
    }

    public static int absolute(int value) {
        return value < 0 ? -value : value;
    }

    public static int maxOfThree(int first, int second, int third) {
        int largest = first;
        if (second > largest) {
            largest = second;
        }
        if (third > largest) {
            largest = third;
        }
        return largest;
    }

    public static int sign(int value) {
        if (value > 0) {
            return 1;
        }
        if (value < 0) {
            return -1;
        }
        return 0;
    }

    public static void main(String[] args) {
        System.out.println("Power calculations:");
        System.out.println("2^10 = " + power(2, 10));
        System.out.println("5^4 = " + power(5, 4));

        System.out.println();
        System.out.println("Absolute values:");
        System.out.println("absolute(-42) = " + absolute(-42));
        System.out.println("absolute(17) = " + absolute(17));

        System.out.println();
        System.out.println("Maximum of three numbers:");
        System.out.println("maxOfThree(12, 98, 34) = " + maxOfThree(12, 98, 34));
        System.out.println("maxOfThree(-3, -9, -1) = " + maxOfThree(-3, -9, -1));

        System.out.println();
        System.out.println("Sign checks:");
        int[] samples = {-25, 0, 48};
        for (int sample : samples) {
            System.out.println("sign(" + sample + ") = " + sign(sample));
        }
    }
}
