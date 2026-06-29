/* Deep Problem: Menu-Driven Decision Engine — Build a calculator that evaluates arithmetic operations through an enhanced switch and a day classifier that categorizes weekday and weekend values. The program should also guard against invalid input such as division by zero or unknown day names. */
package Chapter_8_Switch_Statements.Sub_Chapter_4_DeepProblems;

import java.util.Locale;

public class MenuDrivenCalculatorDeepProblem {

    public static String calculate(double first, double second, char operator) {
        try {
            double result = switch (operator) {
                case '+' -> first + second;
                case '-' -> first - second;
                case '*' -> first * second;
                case '/' -> {
                    if (second == 0) {
                        throw new ArithmeticException("Division by zero is not allowed.");
                    }
                    yield first / second;
                }
                case '%' -> {
                    if (second == 0) {
                        throw new ArithmeticException("Modulo by zero is not allowed.");
                    }
                    yield first % second;
                }
                default -> throw new IllegalArgumentException("Unsupported operator: " + operator);
            };
            return String.format("%.2f %s %.2f = %.2f", first, operator, second, result);
        } catch (ArithmeticException | IllegalArgumentException exception) {
            return "Error: " + exception.getMessage();
        }
    }

    public static String dayType(String day) {
        if (day == null) {
            return "Invalid";
        }

        return switch (day.trim().toUpperCase(Locale.ROOT)) {
            case "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY" -> "Weekday";
            case "SATURDAY", "SUNDAY" -> "Weekend";
            default -> "Invalid";
        };
    }

    public static void main(String[] args) {
        char[] operators = {'+', '-', '*', '/', '%'};
        double first = 25;
        double second = 4;

        System.out.println("Calculator tests:");
        for (char operator : operators) {
            System.out.println(calculate(first, second, operator));
        }
        System.out.println(calculate(10, 0, '/'));

        System.out.println();
        System.out.println("Day classifier tests:");
        String[] days = {"Monday", "Saturday", "SUNDAY", "Holiday"};
        for (String day : days) {
            System.out.printf("%-10s -> %s%n", day, dayType(day));
        }
    }
}
