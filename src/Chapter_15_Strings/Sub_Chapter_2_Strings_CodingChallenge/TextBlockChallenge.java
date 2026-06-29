package Chapter_15_Strings.Sub_Chapter_2_Strings_CodingChallenge;

/*
 * Challenge: Create a JSON-like text block, build the same content with traditional string
 * concatenation, print both, and compare them using equals().
 */
public class TextBlockChallenge {

    public static void main(String[] args) {
        String jsonTextBlock = """
                {
                  \"name\": \"Alice\",
                  \"age\": 30,
                  \"city\": \"Paris\"
                }""";

        String jsonWithConcatenation = "{\n" +
                "  \"name\": \"Alice\",\n" +
                "  \"age\": 30,\n" +
                "  \"city\": \"Paris\"\n" +
                "}";

        System.out.println(jsonTextBlock);
        System.out.println(jsonWithConcatenation);
        System.out.println("Strings are equal: " + jsonTextBlock.equals(jsonWithConcatenation));
    }
}
