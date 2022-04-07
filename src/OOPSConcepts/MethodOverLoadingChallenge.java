package OOPSConcepts;

public class MethodOverLoadingChallenge {

    public static void main(String[] args) {

        calcFeetAndInchesToCentimeters(5,7);

       // calcFeetAndInchesToCentimeters(67);

        calcFeetAndInchesToCentimeters(171);


    }

    public static void calcFeetAndInchesToCentimeters(double feet, double inches){

        double centiMetersvalue;

        if(feet >=0 && (inches >=0 && inches <= 12)){

            double feetIntoInches = feet * 12;

            double totalInches = feetIntoInches + inches;

            centiMetersvalue = Math.round(totalInches * 2.54);

            System.out.println(feet + " ft " + inches + " inch = " + centiMetersvalue + " cm ");

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


//        public static void calcFeetAndInchesToCentimeters(double inches){
//
//        int feet;
//        double remaining_inches;
//
//        if(inches < 0){
//
//            System.out.println("Invalid value");
//
//        }else{
//
//             feet = (int) (inches / 12);
//
//         //    remaining_inches = inches - feet * 12;
//
//             remaining_inches = inches % 12;
//
//             calcFeetAndInchesToCentimeters(feet,remaining_inches);
//
//
//        }
//    }


}


