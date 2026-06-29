/* Deep Problem: Multi-Domain Unit Converter — Implement a conversion utility that handles distance, weight, temperature, and volume. Each conversion must be isolated in its own method, and the program should generate readable tables for values 1 through 10 to simulate the kind of output a small engineering tool might need. */
package Chapter_5_Statements_And_Indentations.Sub_Chapter_3_DeepProblems;

import java.util.function.DoubleUnaryOperator;

public class UnitConverterDeepProblem {

    private static final double KILOMETERS_TO_MILES = 0.621371;
    private static final double KILOGRAMS_TO_POUNDS = 2.20462;
    private static final double LITERS_TO_GALLONS = 0.264172;

    public static double kilometersToMiles(double kilometers) {
        return kilometers * KILOMETERS_TO_MILES;
    }

    public static double kilogramsToPounds(double kilograms) {
        return kilograms * KILOGRAMS_TO_POUNDS;
    }

    public static double celsiusToFahrenheit(double celsius) {
        return (celsius * 9.0 / 5.0) + 32.0;
    }

    public static double litersToGallons(double liters) {
        return liters * LITERS_TO_GALLONS;
    }

    private static void printTable(String title, String fromUnit, String toUnit, DoubleUnaryOperator converter) {
        System.out.println(title);
        System.out.printf("%-10s%-12s%n", fromUnit, toUnit);
        for (int value = 1; value <= 10; value++) {
            System.out.printf("%-10d%-12.3f%n", value, converter.applyAsDouble(value));
        }
        System.out.println();
    }

    public static void main(String[] args) {
        printTable("Kilometers to Miles", "KM", "Miles", UnitConverterDeepProblem::kilometersToMiles);
        printTable("Kilograms to Pounds", "KG", "Pounds", UnitConverterDeepProblem::kilogramsToPounds);
        printTable("Celsius to Fahrenheit", "C", "Fahrenheit", UnitConverterDeepProblem::celsiusToFahrenheit);
        printTable("Liters to Gallons", "Litres", "Gallons", UnitConverterDeepProblem::litersToGallons);
    }
}
