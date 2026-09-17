package Chapter_13_OOPSConcepts.Sub_Chapter_10_Constructors_Coding_Challenge;


/*
* Wall Area Computation
Write a class with the name Wall. The class needs two fields (instance variables) with name width and height of type double.



The class needs to have two constructors:

The first constructor does not have any parameters (no-args constructor).

The second constructor has parameters width and height of type double and it needs to initialize the fields.

In case the width parameter is less than 0 it needs to set the width field value to 0.

In case the height parameter is less than 0 it needs to set the height field value to 0.



Write the following methods (instance methods):

Method named getWidth without any parameters, it needs to return the value of width field.

Method named getHeight without any parameters, it needs to return the value of height field.

Method named setWidth with one parameter of type double, it needs to set the value of the width field. If the parameter is less than 0 it needs to set the width field value to 0.

Method named setHeight with one parameter of type double, it needs to set the value of the height field. If the parameter is less than 0 it needs to set the height field value to 0.

Method named getArea without any parameters, it needs to return the area of the wall.


*
* */

// @quiz (INTERVIEW) What do width and height mean in WallAreaComputation(double width, double height)?
// @answer They are the wall's two dimensions, and callers should choose non-negative values in the same unit.
// @quiz (INTERVIEW TRAP) What happens if setWidth(double width) receives a negative value?
// @answer The width field is set to 0, so the negative input is not stored.
// @quiz (OCJP) Why does getArea() not need width and height parameters?
// @answer It multiplies the object's current width and height fields, which were set by the constructor or setters.
public class WallAreaComputation {

    private double width;

    private double height;

    public WallAreaComputation(){

    }

    public WallAreaComputation(double width, double height){
        if(height < 0){
            this.height = 0;
        }else{
            this.height = height;
        }
        if(width < 0){
            this.width = 0;
        }else{
            this.width = width;
        }
    }

    public double getWidth(){
        return width;
    }

    public double getHeight(){
        return height;
    }

    public void setWidth(double width){
        if(width < 0){
            this.width = 0;
        }else if(width >=0){
            this.width = width;
        }
    }

    public void setHeight(double height){
        if(height < 0){
            this.height = 0;
        }else if(height >=0){
            this.height = height;
        }
    }


    public double getArea(){
        double area = getWidth() * getHeight();
        return area;
    }

}


