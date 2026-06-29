/* Deep Problem: Fault-Tolerant Calculator — Build a calculator that performs standard arithmetic and square root operations while handling invalid expressions, divide-by-zero cases, negative square roots, and parsing errors gracefully. The solution should expose safe operation methods and a parser for simple text expressions. */
package Chapter_13_Exception_Handling.Sub_Chapter_3_DeepProblems;

public class RobustCalculatorDeepProblem {

    public String add(double first, double second) {
        return formatBinaryResult(first, "+", second, first + second);
    }

    public String subtract(double first, double second) {
        return formatBinaryResult(first, "-", second, first - second);
    }

    public String multiply(double first, double second) {
        return formatBinaryResult(first, "*", second, first * second);
    }

    public String divide(double first, double second) {
        try {
            if (second == 0) {
                throw new ArithmeticException("Division by zero is not allowed.");
            }
            return formatBinaryResult(first, "/", second, first / second);
        } catch (ArithmeticException exception) {
            return "Error: " + exception.getMessage();
        }
    }

    public String sqrt(double value) {
        try {
            if (value < 0) {
                throw new IllegalArgumentException("Square root of a negative number is not defined in real numbers.");
            }
            return String.format("sqrt(%.2f) = %.2f", value, Math.sqrt(value));
        } catch (IllegalArgumentException exception) {
            return "Error: " + exception.getMessage();
        }
    }

    public String calculate(String expression) {
        if (expression == null || expression.trim().isEmpty()) {
            return "Error: expression must not be empty.";
        }

        String[] parts = expression.trim().split("\\s+");

        try {
            if (parts.length == 2 && parts[0].equalsIgnoreCase("sqrt")) {
                return sqrt(Double.parseDouble(parts[1]));
            }

            if (parts.length != 3) {
                return "Error: expected format 'number operator number' or 'sqrt number'.";
            }

            double first = Double.parseDouble(parts[0]);
            String operator = parts[1];
            double second = Double.parseDouble(parts[2]);

            return switch (operator) {
                case "+" -> add(first, second);
                case "-" -> subtract(first, second);
                case "*" -> multiply(first, second);
                case "/" -> divide(first, second);
                default -> "Error: unsupported operator '" + operator + "'.";
            };
        } catch (NumberFormatException exception) {
            return "Error: unable to parse numeric value in expression '" + expression + "'.";
        }
    }

    private String formatBinaryResult(double first, String operator, double second, double result) {
        return String.format("%.2f %s %.2f = %.2f", first, operator, second, result);
    }

    public static void main(String[] args) {
        RobustCalculatorDeepProblem calculator = new RobustCalculatorDeepProblem();

        String[] expressions = {
                "10 + 5",
                "9 - 13",
                "7 * 8",
                "8 / 0",
                "8 / 2",
                "sqrt 49",
                "sqrt -9",
                "4 ^ 2",
                "bad input"
        };

        for (String expression : expressions) {
            System.out.println(expression + " -> " + calculator.calculate(expression));
        }
    }
}
