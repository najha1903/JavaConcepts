package Chapter_13_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_2_This_And_Super;

/*
* The keyword this is commonly used within constructors and setters and is optionally used within getters.
*
* In the getter, there are no parameters so there's no conflict. Therefore,the use of this keyword is optional there.
* */

// @quiz (INTERVIEW TRAP) Why is this.color needed in this.color = color?
// @answer The parameter shadows the field, so this.color identifies the instance field and color identifies the constructor or setter parameter.
// @quiz (OCJP) Does getColor() need a parameter to return the color?
// @answer No. It returns the color already stored in the current object.

public class ThisKeyWordUseExample {

    private String color;

    public ThisKeyWordUseExample(String color){
        // this keyword is required, same parameter name as the field
        this.color = color;
    }

    public String getColor(){
        // this is optional
        return color;
    }

    public void setColor(String color){
        // this keyword is required, same parameter name as the field
        this.color = color;
    }
}

