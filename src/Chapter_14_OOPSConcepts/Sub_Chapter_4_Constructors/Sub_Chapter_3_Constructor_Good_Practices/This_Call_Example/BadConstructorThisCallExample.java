package Chapter_14_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_3_Constructor_Good_Practices.This_Call_Example;

/*
* Here, there are three constructors.
* All three constructors initialize variables. But There's repeated code in each constructor,
* The variables are initialized in each constructor with some default values.
* This is a bad way to write constructors like this.
* */

public class BadConstructorThisCallExample {

    private int x;
    private int y;
    private int width;
    private int height;

    public BadConstructorThisCallExample() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }

    public BadConstructorThisCallExample(int width, int height) {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
    }

    public BadConstructorThisCallExample(int x, int y, int width, int height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
