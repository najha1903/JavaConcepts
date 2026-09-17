package Chapter_15_Composition.Sub_Chapter_1_Composition_Example_Computer_Package;

/*
*                              Product is the base Class
*             All of the computer parts are going to be inherited from Product
*             All of the base parts will have set of attributes names manufacturer, model and dimensions ( width, height and depth )
*             All of these items are products, hence they have a IS-A relationship
*             Inheritance defines an IS-A relationship
*             Composition defines HAS-A relationship
*
*
*
*
*
*
*                                           Product
*                                           model:String
*                                           manufacturer:String
*                                           width:int
*                                           height:int
*                                           depth:int
*                                               |
*                                               |
*                                               | All the below classes will extend the Product Class
*                                               | All of these class inherits from the Product
*                                               |
*           -----------------------------------------------------------------------------------------------------
*           |                        |                                                  |                        |
*           |                        |                                                  |                        |
*   PersonalComputer              Monitor                                          MotherBoard             ComputerCase
*                                 size:int                                         ramSlots:int            powerSupply:String
*                                 resolution:String                                cardSlots:int           pressPowerButton()
*                                 drawPixel(int x,int y,String color)              bios:String
*                                          |                                            |                        |
*  monitor:Monitor -------------------------                                            |                        |
*  motherBoard:MotherBoard --------------------------------------------------------------                        |
*  computerCase:ComputerCase ----------------------------------------------------------------------------------- |
*
* The Monitor, MotherBoard and ComputerCase, are also part of Personal Computer
* In other words, Personal Computer HAS-A Monitor, MotherBoard and ComputerCase
* */

// @quiz (INTERVIEW, EASY) What do IS-A and HAS-A mean in Java?
// @option Inheritance defines an IS-A relationship, and composition defines a HAS-A relationship. [correct]
// @option Inheritance defines a HAS-A relationship, and composition defines an IS-A relationship.
// @option Both describe the same relationship.
// @option IS-A means an object stores another object as a field.
// @explain A Monitor IS-A Product, which is inheritance. A PersonalComputer HAS-A Monitor, which is composition, because the computer holds a Monitor as one of its parts.
// @why B: the two are the other way round.
// @why C: they describe different relationships, and choosing between them is a design decision.
// @why D: storing another object as a field is HAS-A, which is composition.

// @quiz (INTERVIEW, MEDIUM) In this design, why is PersonalComputer HAS-A Monitor an example of composition?
// @option Because the computer is built from other objects held as its parts, rather than inheriting from them. [correct]
// @option Because PersonalComputer extends Monitor.
// @option Because Monitor and PersonalComputer share the same fields.
// @option Because composition always requires an interface.
// @explain Composition means one object is made up of others. A PersonalComputer contains a Monitor, a MotherBoard and a ComputerCase, so those are parts of it rather than parents of it.
// @why B: extending Monitor would make the computer a kind of monitor, which is not what the design says. They both extend Product instead.
// @why C: sharing fields is not what composition means.
// @why D: composition works with concrete classes too. Interfaces are optional.

// @quiz (INTERVIEW, MEDIUM) All of Monitor, MotherBoard, ComputerCase and PersonalComputer extend Product. What does that inheritance give them?
// @option They all inherit Product's common attributes, such as model and manufacturer, without repeating that code. [correct]
// @option Each of them gets its own separate copy of the Product class file.
// @option It makes them all the same type at runtime.
// @option It prevents them from adding their own fields.
// @explain Inheritance is a form of code reuse. The shared attributes live once in Product, and every subclass inherits them while still being free to add its own fields and behaviour.
// @why B: there is one Product class. The subclasses share its definition.
// @why C: they remain distinct types, which is what allows each to have its own behaviour.
// @why D: subclasses can add their own fields freely, such as ramSlots on MotherBoard.

// @quiz (OCJP, MEDIUM) MotherBoard extends Product, and Product declares its fields as private. What must the MotherBoard constructor do to set the model?
// @option Call super(model, manufacturer), because private fields of the parent cannot be assigned directly. [correct]
// @option Assign this.model = model, because a subclass can reach the parent fields.
// @option Declare model again inside MotherBoard and assign that.
// @option Nothing. The parent fields are set automatically from the parameter names.
// @explain private means the field is visible only inside Product. A subclass therefore has to go through a Product constructor, which is what super(...) does.
// @why B: private really does block the subclass, which is the point of encapsulation.
// @why C: that would create a second, unrelated field and leave the parent's copy unset.
// @why D: Java does not match parameters to fields by name. You must pass the values yourself.

// @quiz (INTERVIEW, MEDIUM) Monitor, MotherBoard and ComputerCase all extend Product. What does that let them do?
// @option Reuse the model and manufacturer attributes from Product instead of declaring them again. [correct]
// @option Share one set of field values between all three classes.
// @option Avoid having any fields of their own.
// @option Become the same class at runtime.
// @explain Inheritance lets each subclass reuse the parent's definition. Each object still has its own copy of those fields, but the declarations live once in Product.
// @why B: sharing one value happens with static fields. Each instance field here is per object.
// @why C: each subclass is free to add its own fields, such as ramSlots on MotherBoard.
// @why D: they remain distinct types, which is what allows each to have its own behaviour.

// Composition against inheritance, side by side :-
// IS-A, which is inheritance :-
// class Monitor extends Product { }        // a Monitor IS-A Product, so it reuses Product's fields and methods
//
// HAS-A, which is composition :-
// class PersonalComputer {
//     private Monitor monitor;             // the computer HAS-A monitor, held as an ordinary field
//     private MotherBoard motherBoard;
//     private ComputerCase computerCase;
// }
// Note :- the second relationship is just fields. There is no `extends`, and the parts are objects this class owns.

// Delegation is what makes composition work :-
// void drawPixel(int x, int y, String colour) {
//     monitor.drawPixel(x, y, colour);      // the computer passes the job to the monitor
// }
// Note :- the calling code asks the computer, and the computer asks its part. Each class only knows its own job, which is what keeps the pieces separable.

// Why the parts are easier to change than a deep inheritance tree :-
// A Monitor can be replaced with a different model, or tested on its own, without touching the computer class, because it arrives as a field rather than as a superclass.
// Changing a parent class, by contrast, can affect every subclass at once, because they all depend on the parent's definition.

// Parameter notes :-
// - model, manufacturer, width, height and depth (the Product constructor): the shared description every product has. They are inherited by Monitor, MotherBoard and ComputerCase, so they are passed up with super(...).
// - monitor, motherBoard and computerCase (the PersonalComputer constructor): the parts this computer is made of. They are stored as fields, so the computer only works once real objects have been passed in rather than null.

 // @takeaway Composition means a class holds other objects in its fields, so a PersonalComputer HAS-A Monitor, a MotherBoard and a ComputerCase. The parts are ordinary fields, and the whole class works by asking them to do their jobs.
 // @takeaway Inheritance models IS-A, so a Dog IS-A Animal and reuses the parent's fields and methods. Composition models HAS-A, so a computer HAS-A monitor, which is a part it owns rather than a kind of itself.
 // @takeaway Composition keeps the parts independent, so a Monitor can be tested, replaced or reused without touching the computer class, while a change in a parent class can affect every subclass at once.
 // @takeaway Delegation is the method that makes composition work: `drawPixel` on the computer simply calls `monitor.drawPixel(...)` and passes the arguments along.
 // @takeaway The two relationships can exist together. In this example every part IS-A Product through inheritance, and the PersonalComputer HAS-A Monitor through composition.
 // @gotcha A composed object is only usable once its parts exist, so a constructor that stores them must receive or create real objects. Otherwise the fields stay null and every delegated call throws a NullPointerException.
 // @gotcha Composition and inheritance are not a choice you make once for a whole program. The same class can belong to both relationships, as Monitor does here.


public class Product {

    private String model;
    private String manufacturer;
    private int width;
    private int height;
    private int depth;

    public Product(String model, String manufacturer){
        this.model = model;
        this.manufacturer = manufacturer;
    }




}
