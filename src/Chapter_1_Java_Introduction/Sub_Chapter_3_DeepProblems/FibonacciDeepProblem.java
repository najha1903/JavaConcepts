/* Deep Problem: Fibonacci Analysis — Generate the first N Fibonacci numbers using iteration and build a detector that determines whether a given number belongs to the Fibonacci sequence. The solution should be efficient, easy to trace, and demonstrate both sequence generation and membership checking. */
package Chapter_1_Java_Introduction.Sub_Chapter_3_DeepProblems;

public class FibonacciDeepProblem {

    public static long[] generateFibonacci(int count) {
        if (count <= 0) {
            return new long[0];
        }

        long[] sequence = new long[count];
        long previous = 0;
        long current = 1;

        for (int index = 0; index < count; index++) {
            sequence[index] = previous;
            long next = previous + current;
            previous = current;
            current = next;
        }

        return sequence;
    }

    public static boolean isFibonacci(long target) {
        if (target < 0) {
            return false;
        }
        if (target == 0) {
            return true;
        }

        long previous = 0;
        long current = 1;

        while (current < target) {
            long next = previous + current;
            previous = current;
            current = next;
        }

        return current == target;
    }

    public static void printSequence(long[] sequence) {
        for (int index = 0; index < sequence.length; index++) {
            System.out.printf("Term %2d -> %d%n", index + 1, sequence[index]);
        }
    }

    public static void main(String[] args) {
        int n = 15;
        long[] sequence = generateFibonacci(n);

        System.out.println("First " + n + " Fibonacci numbers:");
        printSequence(sequence);

        long[] samples = {0, 1, 13, 14, 34, 35, 377};
        System.out.println();
        System.out.println("Fibonacci membership tests:");
        for (long sample : samples) {
            System.out.printf("%d -> %s%n", sample, isFibonacci(sample) ? "is a Fibonacci number" : "is not a Fibonacci number");
        }
    }
}
