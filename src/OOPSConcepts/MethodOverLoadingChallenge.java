package OOPSConcepts;

/*

Create two methods with the  same name: convertToCentimeters

The first method has one parameter of type int,  which represents the entire height in inches.

You'll convert inches to centimeters, in this  method, and pass back the number of centimeters,

as a double. The second method has two parameters  of type int, one to represent height in feet,

and one to represent the remaining height  in inches. So if a person is 5 foot,

8 inches, the values 5 for feet and 8 for  inches would be passed to this method.

This method will convert feet and inches to just  inches, then call the first method, to get the

number of centimeters, also returning the value as  a double. Both methods should return a real number

or decimal value for total height in centimeters.  Call both methods, and print out the results.

 */

public class MethodOverLoadingChallenge {

    public static void main(String[] args) {

        calcFeetAndInchesToCentimeters(5,7);

       // calcFeetAndInchesToCentimeters(67);

        calcFeetAndInchesToCentimeters(171);


    }

    public static void calcFeetAndInchesToCentimeters(double feet, double inches){

        double centimetersValue;

        if(feet >=0 && (inches >=0 && inches <= 12)){

            double feetIntoInches = feet * 12;

            double totalInches = feetIntoInches + inches;

            centimetersValue = Math.round(totalInches * 2.54);

            System.out.println(feet + " ft " + inches + " inch = " + centimetersValue + " cm ");

        }else {

            System.out.println("Invalid value, please enter correct value");
        }


    }

    public static void calcFeetAndInchesToCentimeters(double centimeters){

        int feet;

        double inches;

        if(centimeters < 0){

            System.out.println("Invalid value");
        }else{

            double totalInches = centimeters / 2.54;

            feet = (int) (totalInches / 12);

           // double feetInInches = feet * 12;

            // inches = Math.round(totalInches - feetInInches);

            inches = Math.round(totalInches % 12);

            System.out.println(centimeters + " cm = " + feet + " ft " + inches + " inch ");


        }
    }

/*
        public static void calcFeetAndInchesToCentimeters(double inches){

        int feet;
        double remaining_inches;

        if(inches < 0){

            System.out.println("Invalid value");

        }else{

             feet = (int) (inches / 12);

         //  remaining_inches = inches - feet * 12;

             remaining_inches = inches % 12;

             calcFeetAndInchesToCentimeters(feet,remaining_inches);


        }
    }
*/

}


