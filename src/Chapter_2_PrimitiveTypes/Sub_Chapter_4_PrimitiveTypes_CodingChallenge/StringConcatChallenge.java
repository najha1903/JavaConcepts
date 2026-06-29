package Chapter_2_PrimitiveTypes.Sub_Chapter_4_PrimitiveTypes_CodingChallenge;

/*
 * Challenge: Build strings using a first name, last name, age, and salary.
 * Print the full name, a greeting, and a salary string formatted to 2 decimal places with String.format.
 */
public class StringConcatChallenge {

    public static void main(String[] args) {
        String firstName = "John";
        String lastName = "Doe";
        int age = 28;
        double salary = 52345.678;

        String fullName = firstName + " " + lastName;
        String greeting = "Hello, " + fullName + "!";
        String salaryString = String.format("Salary: $%.2f", salary);

        System.out.println("Full Name: " + fullName);
        System.out.println("Age: " + age);
        System.out.println(greeting);
        System.out.println(salaryString);
    }
}
