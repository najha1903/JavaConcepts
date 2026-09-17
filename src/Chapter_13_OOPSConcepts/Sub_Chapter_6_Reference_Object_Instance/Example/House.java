package Chapter_13_OOPSConcepts.Sub_Chapter_6_Reference_Object_Instance.Example;

// @quiz (INTERVIEW TRAP) If two references point to the same House and one calls setColor("red"), what will the other reference see?
// @answer It will see red too, because setColor changes the shared object, not just one reference variable.
// @quiz (OCJP) In this.color = color, which color is the field and which is the parameter?
// @answer this.color is the instance field of the current object; color without this is the method or constructor parameter.

public class House {

    private String color;

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public House(String color) {
        this.color = color;
    }
}
