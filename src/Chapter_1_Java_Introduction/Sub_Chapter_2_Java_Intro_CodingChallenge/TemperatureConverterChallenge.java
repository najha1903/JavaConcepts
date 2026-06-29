package Chapter_1_Java_Introduction.Sub_Chapter_2_Java_Intro_CodingChallenge;

/*
 * Challenge: Given a hardcoded Celsius temperature, calculate Fahrenheit using F = (C * 9/5) + 32.
 * Print the result in the format: "25°C is 77.0°F".
 */
public class TemperatureConverterChallenge {

    public static void main(String[] args) {
        double celsius = 25;
        double fahrenheit = toFahrenheit(celsius);

        System.out.printf("%.0f°C is %.1f°F%n", celsius, fahrenheit);
    }

    public static double toFahrenheit(double celsius) {
        return (celsius * 9 / 5) + 32;
    }
}
