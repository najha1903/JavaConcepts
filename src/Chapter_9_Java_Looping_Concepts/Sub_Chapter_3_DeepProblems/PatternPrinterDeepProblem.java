/* Deep Problem: Pattern Rendering Engine — Use nested loops to generate multiple console-based patterns, including star triangles, a number pyramid, and a full multiplication table. The challenge mirrors the kind of structured output logic often needed in reporting and diagnostic tools. */
package Chapter_9_Java_Looping_Concepts.Sub_Chapter_3_DeepProblems;

public class PatternPrinterDeepProblem {

    public static void printRightTriangle(int size) {
        for (int row = 1; row <= size; row++) {
            for (int column = 1; column <= row; column++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void printInvertedRightTriangle(int size) {
        for (int row = size; row >= 1; row--) {
            for (int column = 1; column <= row; column++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void printNumberPyramid(int size) {
        for (int row = 1; row <= size; row++) {
            for (int number = 1; number <= row; number++) {
                System.out.print(number);
            }
            System.out.println();
        }
    }

    public static void printMultiplicationTable(int limit) {
        System.out.printf("%4s", "x");
        for (int column = 1; column <= limit; column++) {
            System.out.printf("%4d", column);
        }
        System.out.println();

        for (int row = 1; row <= limit; row++) {
            System.out.printf("%4d", row);
            for (int column = 1; column <= limit; column++) {
                System.out.printf("%4d", row * column);
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int size = 5;

        System.out.println("1. Right-angle triangle:");
        printRightTriangle(size);

        System.out.println();
        System.out.println("2. Inverted right-angle triangle:");
        printInvertedRightTriangle(size);

        System.out.println();
        System.out.println("3. Number pyramid:");
        printNumberPyramid(size);

        System.out.println();
        System.out.println("4. Multiplication table (1-10):");
        printMultiplicationTable(10);
    }
}
