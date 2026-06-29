/* Deep Problem: Guided Search and Sequence Analysis — Simulate a non-interactive number guessing routine that advances toward a secret using Fibonacci-sized jumps, then analyze Collatz sequence lengths for a range of inputs to discover which starting value produces the longest run. */
package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_4_DeepProblems;

public class NumberGuesserDeepProblem {

    public static void simulateGuessingGame(int secret) {
        int guess = 1;
        int attempts = 0;

        System.out.println("Secret number: " + secret);
        System.out.println("Starting guess: " + guess);

        while (guess < secret) {
            int remaining = secret - guess;
            int step = largestFibonacciStep(remaining);
            guess += step;
            attempts++;
            System.out.printf("Attempt %d -> step=%d, guess=%d%n", attempts, step, guess);
        }

        System.out.println("Found the secret number in " + attempts + " attempts.");
    }

    private static int largestFibonacciStep(int limit) {
        if (limit <= 1) {
            return limit;
        }

        int previous = 1;
        int current = 1;
        while (current <= limit) {
            int next = previous + current;
            previous = current;
            current = next;
        }
        return previous;
    }

    public static int collatz(int number) {
        if (number <= 0) {
            throw new IllegalArgumentException("Collatz is defined only for positive integers.");
        }

        long value = number;
        int length = 1;
        while (value != 1) {
            if ((value & 1) == 0) {
                value /= 2;
            } else {
                value = (3 * value) + 1;
            }
            length++;
        }
        return length;
    }

    public static void main(String[] args) {
        simulateGuessingGame(42);

        System.out.println();
        System.out.println("Collatz sequence lengths for 1 to 20:");
        int longestStarter = 1;
        int longestLength = 1;

        int current = 1;
        while (current <= 20) {
            int length = collatz(current);
            System.out.printf("%2d -> %d%n", current, length);
            if (length > longestLength) {
                longestLength = length;
                longestStarter = current;
            }
            current++;
        }

        System.out.println();
        System.out.printf("Longest Collatz sequence between 1 and 20 starts at %d with length %d.%n", longestStarter, longestLength);
    }
}
