/* Deep Problem: Recursive Number Toolkit — Implement recursive solutions for factorial, Fibonacci, digit summation, and number reversal, while also comparing iterative and recursive factorial side by side. The challenge highlights where recursion is elegant and where iteration can be more direct. */
package Chapter_7_Methods_In_Java.Sub_Chapter_3_DeepProblems;

public class RecursionDeepProblem {

    public static long factorialRecursive(int number) {
        if (number < 0) {
            throw new IllegalArgumentException("Factorial is undefined for negative numbers.");
        }
        if (number <= 1) {
            return 1;
        }
        return number * factorialRecursive(number - 1);
    }

    public static long factorialIterative(int number) {
        if (number < 0) {
            throw new IllegalArgumentException("Factorial is undefined for negative numbers.");
        }

        long result = 1;
        for (int value = 2; value <= number; value++) {
            result *= value;
        }
        return result;
    }

    public static long fibonacci(int number) {
        if (number < 0) {
            throw new IllegalArgumentException("Fibonacci is undefined for negative numbers.");
        }
        if (number <= 1) {
            return number;
        }
        return fibonacci(number - 1) + fibonacci(number - 2);
    }

    public static int sumDigits(int number) {
        int positive = number < 0 ? -number : number;
        if (positive < 10) {
            return positive;
        }
        return (positive % 10) + sumDigits(positive / 10);
    }

    public static int reverseNumber(int number) {
        int sign = number < 0 ? -1 : 1;
        int positive = number < 0 ? -number : number;
        return sign * reversePositive(positive, 0);
    }

    private static int reversePositive(int remaining, int reversed) {
        if (remaining == 0) {
            return reversed;
        }
        return reversePositive(remaining / 10, (reversed * 10) + (remaining % 10));
    }

    public static void main(String[] args) {
        System.out.println("Factorial comparison:");
        System.out.printf("%-5s%-15s%-15s%n", "n", "Iterative", "Recursive");
        for (int value = 0; value <= 7; value++) {
            System.out.printf("%-5d%-15d%-15d%n", value, factorialIterative(value), factorialRecursive(value));
        }

        System.out.println();
        System.out.println("Recursive Fibonacci values:");
        for (int value = 0; value <= 10; value++) {
            System.out.printf("fibonacci(%d) = %d%n", value, fibonacci(value));
        }

        System.out.println();
        System.out.println("sumDigits(48391) = " + sumDigits(48391));
        System.out.println("sumDigits(-7024) = " + sumDigits(-7024));

        System.out.println();
        System.out.println("reverseNumber(12345) = " + reverseNumber(12345));
        System.out.println("reverseNumber(-9070) = " + reverseNumber(-9070));
    }
}
