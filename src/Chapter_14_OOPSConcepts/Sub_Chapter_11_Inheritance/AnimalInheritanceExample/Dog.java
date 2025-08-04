package Chapter_14_OOPSConcepts.Sub_Chapter_11_Inheritance.AnimalInheritanceExample;

/*
* Dog inherits from Animal
*
* Dog "IS A" a type of Animal
*
* Dog is a subclass or child class of Animal
*
* Animal is a parent or super class of Dog
*
*
* When a Dog object gets created, it will inherit Animal's attributes (type, size and weight).
*
* This is also true for Animal's methods. Dog will inherit these as well.
*
* Dog class can be specialised with its own fields and behaviour.
*
*
*/

public class Dog extends Animal { // Using extends specifies the superclass ( or the parent class ) of the class that has been declatred

    private String earShape;

    private String tailShape;

    private String type;

// Most Important Point :- A class can specify one and only one class in it's extends clause.

// Java creates a default constructor implicitly, if we don't explicitly declare 1
   public Dog(){
    // Since we created a 2 parameter constructor in the parent class, the default constructor was not created automatically for the parent class by Java.

 //   super(); // This will call the no argument constructor of the parent class, if no constructors are defined in the parent's class, java will implicitly create one.
    // Similarly, if no constructors are defined in the child class, java will implicitly create one for parent class too, and super() will also be implicitly defined (called) in the child class constructor, which in turn will call the implicitly defined constructor of parent class.

    // But, let us suppose, an argument constructor is explicitly defined in the parent class, the child class will throw an error, as the implicitly defined super call to the parent constructor will fail as the implicitly defined super() call in the implicitly defined child constructor doesn't have any arguments.

    // To resolve this, either the parent class should have an explicit no argument constructor defined, or the child class should explicitly call the parent class constructor using super(args1,args2) with arguments.

    
/* super() is a lot like this()

It's a way to call a constructor on the super class directly from the sub class's constructor.

Like this(), it has to be the first statement of the constructor.

Because of that rule, this() and super() can never be called from the same constructor.

If no explicit call is made to the super(),
then Java handles it using super's default constructor.

If the super class doesn't have a default constructor, then explicitly call to
super() should be made in all child constructors, passing the right arguments to that constructor.
*/

    super("Mutt","Big", 50);
    this.type = "Mutt";

    }

    public Dog(String type, double weight, String earShape, String tailShape) {
        super(type, weight); // It calls the Animal Constructor that accepts two parameter :- type and weight
        this.earShape = earShape;
        this.tailShape = tailShape;
        this.type = type;

    }

    public Dog(String type, double weight){
       this(type,weight,"Perky","Curled"); // It calls the Dog constructor that accepts 4 parameters :- type, weight, earShape, tailShape

    }

    // This method overrides the toString method of the parent Animal Class
    @Override
    public String toString() {
        return "Dog{" +
                "earShape='" + earShape + '\'' +
                ", tailShape='" + tailShape + '\'' +
                '}' + super.toString();

        /*
        * The super keyword used above is different than the super parentheses call.
        * It's a lot like using the this keyword with the dot notation to access a field on the current instance. This code lets us call a super class's method.
        *
        * If we want to call a method of a superclass we need to call super.methodName();
        *
        * */

    }


    /*
     * Here, below, the makeNoise method is overridden method of the parent Animal Class makeNoise method
     * For all the dog objects(instances) the overridden method will be called, and since nothing is implemented,
     * the makeNoise will not do anything
     *
     * */


    // This method overrides the makeNoise method of the parent Animal class
    public void makeNoise(){
      //  System.out.println(type + " makes some noise");
      //  super.makeNoise();
        bark();
    }


    // This method overrides the move method of the parent Animal Class
    public void move(String speed){
     //   System.out.println(type + " moves fast");
        // super.move(speed);
        // System.out.println("Animals move very quickly");

        // the parent class's method is called and include other code to run so it can extend the functionality for the Dog
        if(speed == "slow"){
            walk();
            wagTail();
        } else{
            run();
          //  bark();
        }
    }

    private void bark() {
        System.out.println("Woof! ");
    }

    private void run() {
        System.out.println(type + " Running");
    }

    private void walk(){
        System.out.println(type + " Walking");
    }

    private void wagTail(){
        System.out.println("Tail Wagging");
    }


}
