/* Deep Problem: Bitwise Diagnostics — Given an integer, use bitwise operators to answer practical low-level questions: determine odd/even status, count the number of set bits, and swap two integers without a temporary variable by relying on XOR. The program should print a readable diagnostic report. */
package Chapter_2_PrimitiveTypes.Sub_Chapter_5_DeepProblems;

public class BitwiseOperationsDeepProblem {

    public static boolean isOdd(int value) {
        return (value & 1) == 1;
    }

    public static int countSetBits(int value) {
        int count = 0;
        int working = value;

        while (working != 0) {
            count += (working & 1);
            working >>>= 1;
        }

        return count;
    }

    public static int[] swapWithXor(int first, int second) {
        first = first ^ second;
        second = first ^ second;
        first = first ^ second;
        return new int[]{first, second};
    }

    public static void main(String[] args) {
        int number = 29;
        int first = 14;
        int second = 27;

        System.out.println("Bitwise analysis for number: " + number);
        System.out.println("Binary representation: " + Integer.toBinaryString(number));
        System.out.println("Odd or even: " + (isOdd(number) ? "Odd" : "Even"));
        System.out.println("Set bit count: " + countSetBits(number));

        System.out.println();
        System.out.println("Before XOR swap -> first=" + first + ", second=" + second);
        int[] swapped = swapWithXor(first, second);
        System.out.println("After XOR swap  -> first=" + swapped[0] + ", second=" + swapped[1]);
    }
}
