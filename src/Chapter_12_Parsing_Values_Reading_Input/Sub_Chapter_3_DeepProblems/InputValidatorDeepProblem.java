/* Deep Problem: Form Validation Pipeline — Build reusable parsing and validation methods that verify integer and decimal fields, enforce numeric ranges, and aggregate multiple form errors into a single readable report. This mirrors the validation logic used in real business forms and APIs. */
package Chapter_12_Parsing_Values_Reading_Input.Sub_Chapter_3_DeepProblems;

import java.util.ArrayList;
import java.util.List;

public class InputValidatorDeepProblem {

    public static boolean isValidInt(String value) {
        try {
            Integer.parseInt(value);
            return true;
        } catch (NumberFormatException exception) {
            return false;
        }
    }

    public static boolean isValidDouble(String value) {
        try {
            Double.parseDouble(value);
            return true;
        } catch (NumberFormatException exception) {
            return false;
        }
    }

    public static boolean isInRange(String value, int minimum, int maximum) {
        try {
            int parsed = Integer.parseInt(value);
            return parsed >= minimum && parsed <= maximum;
        } catch (NumberFormatException exception) {
            return false;
        }
    }

    public static String validateForm(String age, String salary, String zipCode) {
        List<String> errors = new ArrayList<>();

        if (!isValidInt(age)) {
            errors.add("Age must be a valid integer.");
        } else if (!isInRange(age, 18, 120)) {
            errors.add("Age must be between 18 and 120.");
        }

        if (!isValidDouble(salary)) {
            errors.add("Salary must be a valid decimal number.");
        } else if (Double.parseDouble(salary) < 0) {
            errors.add("Salary must not be negative.");
        }

        if (!isValidInt(zipCode)) {
            errors.add("Zip code must be numeric.");
        } else if (!isInRange(zipCode, 10000, 99999)) {
            errors.add("Zip code must be a 5-digit value.");
        }

        if (errors.isEmpty()) {
            return "Form is valid.";
        }

        StringBuilder builder = new StringBuilder("Validation errors:");
        for (String error : errors) {
            builder.append(System.lineSeparator()).append("- ").append(error);
        }
        return builder.toString();
    }

    public static void main(String[] args) {
        System.out.println("Valid form test:");
        System.out.println(validateForm("28", "55000.75", "56001"));

        System.out.println();
        System.out.println("Invalid form test:");
        System.out.println(validateForm("seventeen", "-1200.50", "12A4"));

        System.out.println();
        System.out.println("Mixed form test:");
        System.out.println(validateForm("16", "72000", "999"));
    }
}
