package Chapter_14_OOPSConcepts.Sub_Chapter_2_Getters_Encapsulation_Object_Access;

/*
*

Unlike local variables, class variables should have some type of access modifier declared for it.

If no access modifier is declared explicitly, Java declares the default one (package private), implicitly.
*
*
When writing methods that use non-static fields, your method can't be declared static.
*
*
* */

public class Car {




    public boolean isConvertible() {
        return convertible;
    }

    public void setConvertible(boolean convertible) {
        this.convertible = convertible;
    }

    public int getDoors() {
        return doors;
    }

    public void setDoors(int doors) {
        this.doors = doors;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getMake() {
        return make;
    }


    /* "this" is a special keyword in Java. What it really refers to is the instance
            that was created when the object was instantiated.
            "this" is a special reference name for the
            object or instance, which it can use to describe itself.
            "this" is used to access fields on the class.     */

    public void setMake(String make) {

        if(make == null){
            make = "Unknown";
        }
        String lowercaseMake = make.toLowerCase();
        switch (lowercaseMake){
            case "holden": case "porsche": case "tesla":
                this.make = make;
                break;
            default:
             this.make = "Unsupported";
        }
       // this.make = make;
    }

/*    public void setMake(String make) {
      make = make; // Here we are assigning the parameter named make to itself
    }
 */

        private String make = "Tesla";
        private String model = "Model X";
        private String color = "Gray";
        private int doors = 2;
        private boolean convertible = true;

    public void describeCar(){

        System.out.println(doors + "-Door " + color + " " + make + " " + model + " " + (convertible ? "Convertible" : ""));
    }

    /*
    * If values are assigned to the fields then the output is :- 2-Door Gray Tesla Model X Convertible
    *
    * */


    /* Getters and Setters in Java
    
    A getter is a method on a class that retrieves the value of a private field and returns it.
    A setter is a method on a class that sets the value of a private field.
    The purpose of these methods is to control and protect access to private fields.

    A getter method usually just returns the value of a private field.
    It's usual to name a getter method with the get prefix, followed by the field name in
    lower camel case

    There could be getter methods for fields that are not really declared on your class but that are derived in some way.

    A setter method may simply just assign the argument passed to the method, to the field,
    but it can contain code to validate data, check additional security requirements,
    ensure immutability of the field value, or any other code required
    to protect and validate an object's state.

    It's usual to name a setter method with the set prefix, followed by the field name, in lower camel case

    There may be many cases where we won't have a setter method for a particular private field.
    The class may contain data only needed within the class itself and doesn't need
    to be exposed to the outside world.


    In the setter methods we can set up all the rules related to that class,
    what is valid, and what is not valid. We cna have all the functionalities set
    up within the car class itself, so that these rules are in place as we're creating the object.

    In this way, we can make sure that, the code that's creating objects can't make invalid objects.


    This is the whole concept of encapsulation. Not allowing
    people to access the field directly. We force them to go through a controlled
    way of setting up the data on the object. Using a setter method, we can really make
    sure that the data in our objects is valid data.
    *
    * */

}
