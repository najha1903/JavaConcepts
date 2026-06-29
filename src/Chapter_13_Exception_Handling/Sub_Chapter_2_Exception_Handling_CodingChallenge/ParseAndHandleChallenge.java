package Chapter_13_Exception_Handling.Sub_Chapter_2_Exception_Handling_CodingChallenge;

/*
 * Challenge: Parse an age from a String using Integer.parseInt, catch NumberFormatException,
 * and return -1 for invalid input.
 */
public class ParseAndHandleChallenge {

    public static void main(String[] args) {
        System.out.println("Parsed age for \"25\": " + parseAge("25"));
        System.out.println("Parsed age for \"abc\": " + parseAge("abc"));
        System.out.println("Parsed age for null: " + parseAge(null));
    }

    public static int parseAge(String input) {
        try {
            return Integer.parseInt(input);
        } catch (NumberFormatException exception) {
            System.out.println("Invalid age input: " + input);
            return -1;
        }
    }
}
