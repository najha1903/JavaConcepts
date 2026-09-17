package Chapter_13_OOPSConcepts.Sub_Chapter_6_Reference_Object_Instance.Example;

// Parameter notes (what each argument means and how to choose it):
// - House(String color): color is the initial color state for the new House object. Choose a descriptive color String such as "blue", "red", or "green"; this code stores it directly and does not validate spelling, null, or empty text.
// - setColor(String color): color is the replacement color for the same existing House object. Choose the new state you want all references to that object to observe.
// - In both House(String color) and setColor(String color), this.color = color copies the parameter into the object's field; important: the parameter shadows the field name.
// - getColor() has no parameters because it simply returns the current field value from the object referenced by the caller.
//
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
