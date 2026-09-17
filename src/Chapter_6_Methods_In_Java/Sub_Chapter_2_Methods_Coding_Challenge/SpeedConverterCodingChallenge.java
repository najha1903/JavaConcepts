package Chapter_6_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;

// This challenge converts speed from kilometers per hour to miles per hour using small, reusable static methods.
// toMilesPerHour(double kilometersPerHour) validates the input, converts kilometers to miles, rounds the answer, and returns it as a long.
// A negative speed is invalid, so the method returns -1 as a sentinel value instead of a real conversion.
// printConversion(double kilometersPerHour) reuses toMilesPerHour() and prints either "Invalid Value" or "XX km/h = YY mi/h".
// Method reuse matters here: printConversion() should call toMilesPerHour() instead of duplicating the conversion formula.
// Math.round(double value) returns the nearest long, which is useful when a decimal conversion must be displayed as a whole number.
// Important: 1 mile per hour is approximately 1.609 kilometers per hour, so milesPerHour = kilometersPerHour / 1.609.
// Example results: toMilesPerHour(1.5) returns 1, toMilesPerHour(10.25) returns 6, and toMilesPerHour(-5.6) returns -1.

public class SpeedConverterCodingChallenge {

    public static void main(String[] args) {

        printConversion(1.5);
        printConversion(10.25);
        printConversion(-5.6);
        printConversion(25.42);
        printConversion(75.114);

    }

    public static long toMilesPerHour(double kilometersPerHour){

        long milesPerHour;

        if(kilometersPerHour < 0){

            milesPerHour = -1;
        }else{

            milesPerHour = Math.round(kilometersPerHour / 1.609);
        }

        return milesPerHour;

    }

    public static void printConversion(double kilometersPerHour){

        long milesPerHour = toMilesPerHour(kilometersPerHour);

        if(kilometersPerHour < 0){
            System.out.println("Invalid Value");
        }else{
            System.out.println(kilometersPerHour + " km/h = " + milesPerHour + " mi/h");
        }


    }
}
