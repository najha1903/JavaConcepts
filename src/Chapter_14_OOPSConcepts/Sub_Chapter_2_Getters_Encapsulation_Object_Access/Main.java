package Chapter_14_OOPSConcepts.Sub_Chapter_2_Getters_Encapsulation_Object_Access;

public class Main {

    public static void main(String[] args) {

     //  Car car; // This will give compile time error as the car variable is not initialised

        Car car = null; // This will give run time error as the variable car is pointing to a null reference

      // Car car = new Car();
        car.describeCar();

        /* Output :- 0-Door null null null
         *
         * Null :- null is a special keyword in Java, meaning, the variable or attribute has a type but no reference to an Main.
         *
         * This means that no instance or object is assigned to the variable or field.
         *
         * Strings are really objects, not primitive data types, so Java assigned each a null reference.
         *
         * Fields with primitive data types are never null.
         *
         * Fields with a primitive data type will get assigned a default value by Java.
         *
         * Fields on classes are assigned default values automatically by Java, if you don't assign values yourself.
         *
         * Data type :- boolean
         * Default Value Assigned :- false
         *
         * Data type :- byte,short,int,long,char
         * Default value Assigned :- 0
         *
         * Data type :- double,float
         * Default value assigned :- 0.0
         *
         *
        * */

         // car.make = "Porsche";
        // Since this field has private access, the main class is not allowed to access them

        // The best practice is to allow access to this data, either through getters and setters

      //  car.setMake("Porsche");
        car.setModel("Carrera");
        car.setMake("Maserati"); // As per the validations conditions mentioned in the setter, the output of this line of code will be "Unsupported"
        car.setDoors(2);
        car.setConvertible(true);
        car.setColor("black");

        System.out.println("make = " + car.getMake());
        System.out.println("model = " + car.getModel());

        // Output :- make = Porsche
        // model = Model X
        
    }
}
