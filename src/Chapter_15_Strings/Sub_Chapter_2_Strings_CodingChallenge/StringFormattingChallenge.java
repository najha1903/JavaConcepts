package Chapter_15_Strings.Sub_Chapter_2_Strings_CodingChallenge;

/*
 * Challenge: Use printf and String.format to print a formatted employee summary and a
 * right-aligned table of names and numbers.
 */
public class StringFormattingChallenge {

    public static void main(String[] args) {
        String name = "Alice";
        int age = 30;
        double salary = 75000.50;

        String summary = String.format("Name: %s, Age: %d, Salary: $%,.2f", name, age, salary);
        System.out.printf("%s%n", summary);

        String[] names = {"Alice", "Bob", "Charlie", "Diana", "Ethan"};
        int[] numbers = {95, 88, 91, 100, 76};

        System.out.printf("%12s %8s%n", "Name", "Number");
        for (int i = 0; i < names.length; i++) {
            System.out.printf("%12s %8d%n", names[i], numbers[i]);
        }
    }
}
