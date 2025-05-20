package Chapter_14_OOPSConcepts.Sub_Chapter_8_Static_And_Instance_Variables;


/*
Static Variables

1) A static variable is Declared by using the keyword static.

2) Static variables are also known as static member variables. They belong to the class, not the instance

3) Every instance of the class shares the same static variable.

4) If changes are made to that variable, all other instances of that class will see the effect of that change.

5) Static variables can be used to :-
  i)   Storing counters
  ii)  Generating unique IDs
  iii) Storing constant value that doesn't change. For Ex :- value of pi
  iv)  Creating and controlling access to a shared resource. For ex :- log file, a database, input stream, output stream etc

Instance Variables

1) Static keyword is not used
2) They're also known as fields or member variables.
3) Unlike a static variable, Instance variables belong to a specific instance of a class.
4) Each instance(object) has its own copy of an instance variable.
5) Every instance(object) can have a different value. Instance variables represent the state
   of a specific instance(object) of a class.

* */

public class StaticAndInstanceVariables {

    // Static variable example
    static String name = "Bravo";

    private String instanceName;

    private int age;

    public StaticAndInstanceVariables(String instanceName, int age) {
        this.instanceName = instanceName;
        this.age = age;
    }

    public StaticAndInstanceVariables(String name) {
        StaticAndInstanceVariables.name = name;
    }

    public StaticAndInstanceVariables() {
    }

    public void printName(){
        System.out.println("name = " + name);
    }

    public void printDogNameAndAge(){
        System.out.println("name = " + instanceName);
        System.out.println("age = " + age);
    }

    public static void main(String[] args) {

        StaticAndInstanceVariables staticAndInstanceVariables = new StaticAndInstanceVariables();

        /*
        * It is considered best practice to use the Class name and not a reference variable
        * to access a static variable. This makes it clearer that the
        * variable is associated with the class and therefore not stored with the instance.
        * An instance isn't required to exist to access the value of a static variable.
        * */

        // Although this line will compile and run successfully, it is not considered best practice to call static method with an instance(reference) variable
        System.out.println(staticAndInstanceVariables.name);

        // This is the correct way of calling a static variable
        // This makes it clearer that the variable is associated with the class and therefore not stored with the instance
        // An instance isn't required to exist to access the value of a static variable.
        System.out.println(StaticAndInstanceVariables.name);


        // When the first parameterised constructor is called, the value of static String name is set to "Rex"
        StaticAndInstanceVariables staticAndInstanceVariables1 = new StaticAndInstanceVariables("Rex");
        // When the second parameterised constructor is called, the value os static String name is now set to "Fluffy"

        // Since, the static members are shared between the instances,once the changes are made to the static variable all instances will see the change that has been made.
        StaticAndInstanceVariables staticAndInstanceVariables2 = new StaticAndInstanceVariables("Fluffy");

        // Both the instances are sharing the same variable "name", hence the last modified value of static variable "name" which is set to "Fluffy" will be printed when the printName method is called by both the instances
        staticAndInstanceVariables1.printName(); // Output :- name = Fluffy
        staticAndInstanceVariables2.printName(); // Output :- name = Fluffy


        // Each instance of the class has its own state or its own values for any variables that have been defined.
        // Because instance variables are used, every object instance variables has its own value for the name field.
        // It's not shared like it was before, when a static variable was used.
        StaticAndInstanceVariables staticAndInstanceVariables3 = new StaticAndInstanceVariables("Rex",4); // Creates a new object, and update the instance variables values of that object [instanceName = "Rex" , age = 4]
        StaticAndInstanceVariables staticAndInstanceVariables4 = new StaticAndInstanceVariables("Fluffy", 2); // Creates a new object, and update the instance variables values of that object [instanceName = "Fluffy" , age = 2]

        staticAndInstanceVariables3.printDogNameAndAge(); // Output :- name = Rex
                                                          //  age = 4

        staticAndInstanceVariables4.printDogNameAndAge(); // name = Fluffy
                                                          // age = 2

    }
}
