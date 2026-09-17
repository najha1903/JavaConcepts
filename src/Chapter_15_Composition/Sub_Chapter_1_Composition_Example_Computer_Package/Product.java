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
