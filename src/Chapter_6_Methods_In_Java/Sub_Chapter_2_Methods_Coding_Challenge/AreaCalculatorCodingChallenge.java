package Chapter_6_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;

// This challenge uses method overloading to give the same method name two related meanings.
// area(double radius) calculates the area of a circle with Math.PI * radius * radius.
// area(double x, double y) calculates the area of a rectangle with x * y.
// Any negative measurement is invalid, so each overload returns -1.0 when it receives a negative argument.
// Java chooses the correct overloaded method at compile time by looking at the number and types of arguments.
// Example results: area(5.0) returns about 78.53975, area(5.0, 4.0) returns 20.0, and area(-1.0, 4.0) returns -1.0.

public class AreaCalculatorCodingChallenge {

    public static void main(String[] args) {

        System.out.println(area(5.0));
        System.out.println(area(5.0,4.0));
        System.out.println(area(-1.0,4.0));

    }

    public static double area(double radius){

        double circleArea;

        if(radius < 0){
            circleArea = -1.0;
        }else{

            circleArea = Math.PI * radius * radius;
        }

        return circleArea;
    }

    public static double area(double x, double y){

        double rectangleArea;

        if(x < 0 || y < 0){
            rectangleArea = -1.0;
        }else{
            rectangleArea = x * y;
        }
        return rectangleArea;
    }
}
