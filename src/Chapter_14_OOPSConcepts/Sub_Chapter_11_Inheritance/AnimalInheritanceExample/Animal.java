package Chapter_14_OOPSConcepts.Sub_Chapter_11_Inheritance.AnimalInheritanceExample;
// This is the superclass (parent class) of the Animal inheritance hierarchy.
// Inheritance allows a child class to reuse (inherit) fields and methods from a parent class, adding or customising as needed.
// Method Overriding: a subclass can provide its own implementation of a method defined in the superclass.
// The method signature (name + parameter types) must match exactly for overriding to work.
// Use @Override annotation to tell the compiler you intend to override — it will give an error if the signatures don't match.
// Polymorphism ("many forms"): an Animal reference can point to a Dog or Fish object. When you call animal.makeNoise(), Java calls the Dog's or Fish's version — not Animal's. This is runtime (dynamic) dispatch.
// Three things an overriding method can do: (1) completely replace the parent's behaviour, (2) call the parent's method and do nothing else (redundant), or (3) call the parent's method AND add extra logic (extension).
// The super.methodName() syntax calls the PARENT class's version of the method from within the overriding method.
/*
* This is a super class, aka top parent class. This class will contain all the attributes that all types of animal has.
*
* Also, the super class will have all the behaviour that animals have in common.
*
* Method Overriding
*
* Overriding a method is when you create a method on a subclass, which has the same
* signature as a method on a super class.
*
* A method signature consists
* of the method name and the number and types of parameters.
*
* A parent class method is overridden when we want the child class to show different
* behavior for that method.
*
* The overridden method can do one of three things: It can implement completely different behavior,
* overriding the behavior of the parent. It can simply call the parent class's method,
* which is somewhat redundant to do. This is the default behavior of an inherited method.
* Or the method can call the parent class's method and include other code to run so it can extend the
* functionality for the Dog
*
* Polymorphism
*
* Polymorphism simply means "many forms"
*
* Advantages :-
*
* 1) It makes code simpler
*
* 2) It encourages code extensibility
* */

public class Animal {

    private String type;
    private String size;
    private double weight;

    public Animal(){

    }

    public Animal(String type, String size, double weight) {
        this.type = type;
        this.size = size;
        this.weight = weight;
    }

    public Animal(String type, double weight){
        String size = (weight < 15 ? "small" : (weight < 35 ? "medium" : "large"));
        this.size = size;
        this.type = type;
    }


    // This method has overridden the Object toString method
    // It got override by the toString method of Dog Class and Fish Class
    @Override
    public String toString() {
        return "Animal{" +
                "type='" + type + '\'' +
                ", size='" + size + '\'' +
                ", weight=" + weight +
                '}';
    }

    // This method got override by the Fish Class and the Animal Class
    public void move(String speed){
        System.out.println(type + " moves " + speed);
    }

   // This method got override by the Animal Class
    public void makeNoise(){
        System.out.println(type + " makes noise");
    }


}
