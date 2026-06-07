package Chapter_14_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_3_Constructor_Good_Practices.Super_Call_Example;

/*
* The 1st constructor is calling the 2nd constructor.
* The 2nd constructor calls the parent constructor with parameters x and y.
* The parent constructor will initialize the x and y variables, while the 2nd Rectangle constructor
* will initialize the width and height variables. Here, as you can see in this code,
* Both the super() and this() calls are made, but in different constructors.
*
* */

public class GoodConstructorSuperCallExample {

    private int x;
    private int y;

    public GoodConstructorSuperCallExample(int x, int y){
        this.x = x;
        this.y = y;
    }

}

class AnotherGoodConstructorSuperCallExample extends GoodConstructorSuperCallExample {

    private int width;
    private int height;

    public AnotherGoodConstructorSuperCallExample(int x, int y){
        this(x,y,0,0);
    }

    public AnotherGoodConstructorSuperCallExample(int x, int y, int width, int height){
        super(x,y);
        this.width = width;
        this.height = height;
    }
}
