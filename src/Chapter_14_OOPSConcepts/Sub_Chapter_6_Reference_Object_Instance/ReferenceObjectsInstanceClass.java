package Chapter_14_OOPSConcepts.Sub_Chapter_6_Reference_Object_Instance;


import Chapter_14_OOPSConcepts.Sub_Chapter_6_Reference_Object_Instance.Example.House;

/*

A Class is like a blueprint
Using blueprint, we can create as many objects that we want

This object can also be known as an instance.

For the majority of created objects, we require a reference that points to the object.

We can copy that reference, as many times as we like, but there is still just one object that it might point / refer to.
In other words, we are just making the copy of the reference, not the object.

We can pass references as parameters to constructors and methods.

*/
public class ReferenceObjectsInstanceClass {

    public static void main(String[] args) {

        /*
        * No of objects created = 3
        * No of instance (reference) variable created = 2
        *
        * */

        new House("red"); // house object gets created in the memory
        // The object is created in the memory, but after the statement completes, the code has no way to access it
        // The object exist in memory, but the code, can't communicate with it, after the statement is executed
        // The first object is said to be eligible for garbage collection immediately
        // After that first statement execution, It's useless to the code because It's no longer accessible
        // There are times we might want to instantiate an object and immediately call a method on it, and not assign the object to a variable reference, but the chances of them happening is very low

        House myHouse = new House("beige"); // house object gets created in the memory and it's location(reference) is assigned to myHouse;
        // myHouse reference variable, can access to the beige house, as long as myHouse variable stays in scope, or until it gets reassigned to reference a different object

        House redHouse = new House("red");   // house object gets created in the memory and it's location(reference) is assigned to the redHouse;
        // This has no relationship to the object which got created in line no 29


    }

}
