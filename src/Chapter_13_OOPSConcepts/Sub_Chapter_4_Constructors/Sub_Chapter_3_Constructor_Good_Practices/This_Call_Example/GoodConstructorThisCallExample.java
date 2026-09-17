package Chapter_13_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_3_Constructor_Good_Practices.This_Call_Example;
// GOOD PRACTICE — Constructor chaining with this():
// The no-arg constructor calls the 2-arg constructor. The 2-arg constructor calls the 4-arg constructor.
// The "master" constructor (4-arg) does all the actual field assignment.
// Only ONE place in the code initialises the fields — changes are made once, not everywhere.
// This is the "constructor chain" pattern — a clean, DRY (Don't Repeat Yourself) approach to constructors.
/*
* Here, the 1st constructor calls the 2nd constructor, the 2nd constructor calls the 3rd constructor,
* and then the 3rd constructor actually initializes the instance variables.
* In other words, The 3rd constructor does all the work.
* The variables will always be initialized in the 3rd constructor, and only there.
* The last constructor has the responsibility to initialize the variables.
* This is known as constructor chaining.
* */

// @quiz (INTERVIEW) In this(0, 0, width, height), which arguments are defaults and which come from the caller?
// @answer The first two arguments, 0 and 0, default x and y; width and height are the caller's parameters forwarded to the master constructor.
// @quiz (INTERVIEW TRAP) Why must callers be careful with the 4-int constructor argument order?
// @answer Since every parameter is int, swapped values can compile while assigning coordinates and dimensions to the wrong fields.
// @quiz (OCJP) Where must this(0, 0) appear in the no-argument constructor?
// @answer It must be the first statement in the constructor body.

public class GoodConstructorThisCallExample {

    private int x;
    private int y;
    private int width;
    private int height;

    public GoodConstructorThisCallExample() {
        this(0,0);
    }

    public GoodConstructorThisCallExample(int width, int height) {
       this(0,0,width,height);
    }


    public GoodConstructorThisCallExample(int x, int y, int width, int height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
