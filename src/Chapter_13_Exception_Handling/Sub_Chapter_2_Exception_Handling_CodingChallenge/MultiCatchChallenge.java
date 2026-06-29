package Chapter_13_Exception_Handling.Sub_Chapter_2_Exception_Handling_CodingChallenge;

/*
 * Challenge: Demonstrate handling NullPointerException, ArrayIndexOutOfBoundsException,
 * and NumberFormatException with separate catch blocks and a finally block.
 */
public class MultiCatchChallenge {

    public static void main(String[] args) {
        demonstrateException("null");
        demonstrateException("array");
        demonstrateException("number");
    }

    public static void demonstrateException(String scenario) {
        try {
            if ("null".equals(scenario)) {
                String text = null;
                System.out.println(text.length());
            } else if ("array".equals(scenario)) {
                int[] numbers = {1, 2, 3};
                System.out.println(numbers[5]);
            } else if ("number".equals(scenario)) {
                System.out.println(Integer.parseInt("abc"));
            }
        } catch (NullPointerException exception) {
            System.out.println("Caught NullPointerException: " + exception.getMessage());
        } catch (ArrayIndexOutOfBoundsException exception) {
            System.out.println("Caught ArrayIndexOutOfBoundsException: " + exception.getMessage());
        } catch (NumberFormatException exception) {
            System.out.println("Caught NumberFormatException: " + exception.getMessage());
        } finally {
            System.out.println("Done");
        }
    }
}
