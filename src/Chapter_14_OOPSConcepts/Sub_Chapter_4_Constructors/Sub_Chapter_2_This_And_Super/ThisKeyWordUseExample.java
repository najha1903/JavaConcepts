package Chapter_14_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_2_This_And_Super;


/*
* The keyword this is commonly used within constructors and setters and is optionally used within getters.
*
* In the getter, there are no parameters so there's no conflict. Therefore,the use of this keyword is optional there.
* */

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

