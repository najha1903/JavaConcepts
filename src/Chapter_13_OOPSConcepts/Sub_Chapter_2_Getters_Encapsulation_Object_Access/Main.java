package Chapter_13_OOPSConcepts.Sub_Chapter_2_Getters_Encapsulation_Object_Access;
// This class demonstrates the use of a Car object created using the Car class with private fields and getter/setter methods.
// Car car = null; — the variable car exists, but points to nothing. Calling car.describeCar() here causes a NullPointerException.
// When you create a class instance (Car car = new Car()), Java sets all un-initialised fields to their default values: Strings -> null, int -> 0, boolean -> false.
// Private fields CANNOT be accessed directly from outside the class (e.g., car.make = "Porsche" would be a compile error).
// To read field values, use the getter: car.getMake(). To update, use the setter: car.setMake("Porsche").
// The setMake() method in Car validates the input — only "holden", "porsche", or "tesla" are accepted. Passing "Maserati" results in "Unsupported".
// This demonstrates encapsulation at work — the class controls what data is valid, and outside code cannot bypass those rules.
// Parameter notes (what each constructor/method argument means and how to choose it):
// - car.setModel("Carrera"): the String argument becomes the model field, so choose the exact model name you want describeCar() and getModel() to show.
// - car.setMake("Maserati"): the argument is validated by Car.setMake; warning: unsupported makes are stored as "Unsupported" rather than the original value.
// - car.setDoors(2): the int argument becomes the door count; choose a realistic positive number because the setter does not reject bad values.
// - car.setConvertible(true): true means convertible, false means not convertible; choose the boolean that matches the vehicle.
// - car.setColor("black"): the String argument becomes the color field; avoid null if you want meaningful printed output.
// - careful: these setter calls require car to reference an actual Car object; calling them while car is null causes a NullPointerException before parameters matter.
// @quiz (INTERVIEW TRAP) Why will car.setModel("Carrera") fail here if car is still null?
// @answer A parameterized method call needs a real target object; null has no object to receive the "Carrera" argument, so Java throws NullPointerException.
// @quiz (INTERVIEW) What does the argument true mean in car.setConvertible(true)?
// @answer It tells the Car object to store convertible as true; pass false for a non-convertible car.
public class Main {

    public static void main(String[] args) {

     //  Car car; // This will give compile time error as the car variable is not initialised

       Car car = null; // This would give a runtime error if we called a method now, because the variable is pointing to a null reference

      // Car car = new Car();
       System.out.println("car = null -> calling describeCar() now would throw NullPointerException.");
       car = new Car();
       car.describeCar();

        /*
         * Null :- null is a special keyword in Java, meaning, the variable or attribute has a type but no reference to an object.
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

        car.describeCar();
        System.out.println("make = " + car.getMake());
        System.out.println("model = " + car.getModel());

    }
}
