package Chapter_13_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_3_Constructor_Good_Practices.This_Call_Example;
// BAD PRACTICE — Repeated initialisation in every constructor:
// When each constructor separately initialises all fields, the same initialisation code is duplicated.
// If you ever need to change the default value or add validation, you must update EVERY constructor separately — error-prone.
// This is why constructor chaining with this() is preferred — it centralises initialisation in one place.
/*
* Here, there are three constructors.
* All three constructors initialize variables. But There's repeated code in each constructor,
* The variables are initialized in each constructor with some default values.
* This is a bad way to write constructors like this.
* */

// Parameter notes (what each constructor/method argument means and how to choose it):
// - BadConstructorThisCallExample(): takes no arguments and manually sets x, y, width, and height to 0.
// - BadConstructorThisCallExample(int width, int height): width and height are size dimensions; x and y are manually defaulted to 0 in this constructor.
// - BadConstructorThisCallExample(int x, int y, int width, int height): x and y are position coordinates, while width and height are dimensions.
// - pitfall: because all parameters are int, Java cannot detect if the caller accidentally passes x/y values where width/height values were intended.
// - warning: this file intentionally duplicates assignments instead of using this(...), so changing parameter handling would require updates in multiple constructors.
//
// @quiz (INTERVIEW) What do width and height mean in BadConstructorThisCallExample(int width, int height)?
// @answer They are the object's dimensions; the constructor stores them while defaulting x and y to 0.
// @quiz (INTERVIEW TRAP) Why is parameter order especially important in the 4-argument constructor?
// @answer All four parameters are ints, so wrong ordering still compiles but assigns coordinates and dimensions incorrectly.
// @quiz (OCJP) What constructor call could reduce duplicate initialization in this class?
// @answer A this(...) call from simpler constructors to the most complete constructor could centralize field assignment.

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
