package Chapter_13_OOPSConcepts.Sub_Chapter_6_Reference_Object_Instance.Example;

// Parameter notes (what each argument means and how to choose it):
// - new House("blue"), new House("green"): the String argument is the initial color copied into that new House object's color field. Choose the starting color state for the object being created.
// - anotherHouse.setColor("red"): the String argument is the new color assigned to the existing House object referenced by anotherHouse. Important: because blueHouse and anotherHouse initially refer to the same object, blueHouse observes the changed color too.
// - getColor() takes no parameters because the object reference already identifies which House to read from.
// @quiz (INTERVIEW) In House blueHouse = new House("blue"), what does the "blue" argument choose?
// @answer It chooses the initial color field value for the new House object referenced by blueHouse.
// @quiz (INTERVIEW TRAP) Why does anotherHouse.setColor("red") affect blueHouse.getColor() at first?
// @answer anotherHouse and blueHouse are two references to the same House object, so the setColor parameter updates that shared object's field.
// @quiz (OCJP) After anotherHouse = greenHouse, does passing "green" to the constructor change the old red object?
// @answer No. The "green" argument initialized a separate new House object; reassignment changes the reference, not the old object's color.

public class Main {

    public static void main(String[] args) {

        // A reference named "blueHouse" of type House is created which is pointing to an object(which got created by new keyword, which in turns calls a parameterised constructor) of type House
        // In this object, the instance variable color of Class House is set to "blue" using parameterised constructor called while creating new object using new keyword
        House blueHouse = new House("blue");
        House anotherHouse = blueHouse;

        // This line will print blue, as the reference blueHouse is pointing to the house object, which contains the instance variable color value as "blue"
        System.out.println(blueHouse.getColor());
        // This line will also print blue, as anotherHouse reference is a copy of blueHouse reference, and both of them are still pointing to the house object, which contains the instance variable color value as "blue"
        System.out.println(anotherHouse.getColor());

        // Here, anotherHouse reference is pointing to the same object (which was created earlier). With the help of the reference, the instance variable color value of the House object has been changed to "red"
        anotherHouse.setColor("red");
        // As anotherHouse reference has changed the value of the instance variable of the object (which was created earlier), and blueHouse reference is also pointing to the same object, hence the output of the below line of code would be "red"
        System.out.println(blueHouse.getColor());
        // Output of the below line of code would also be "red" as anotherHouse reference is pointing to the object (which was created earlier), and value of the instance variable color of the House object is "red"
        System.out.println(anotherHouse.getColor());


        // A new object gets created using the new keyword which calls the parameterised constructor which in turn sets the value of the instance variable color of the newly created object as "green"
        // A new reference named greenhouse of type House gets created which is pointing to the newly created object which has instance value of color field set to "green".
        House greenHouse = new House("green");
        // Here anotherHouse reference refers to the greenHouse reference, latter of which is pointing to the newly created object which has instance value of color field set to "green".
        anotherHouse = greenHouse;

        // The output of the below line will be "red", as the reference blueHouse is still referring to the old object, whose instance variable color value is set to "red"
        System.out.println(blueHouse.getColor());
        // The output of the below line will be "green", as the reference greenHouse is pointing towards the newly created object, whose instance variable color value is set to "green"
        System.out.println(greenHouse.getColor());
        //Since, the anotherHouse reference is pointing towards the greenHouse reference,  pointing towards the newly created object, whose instance variable color value is set to "green"
        // the output of the below line of code would be "green"
        System.out.println(anotherHouse.getColor());


    }





}
