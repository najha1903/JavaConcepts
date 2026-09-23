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
