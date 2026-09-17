package Chapter_13_OOPSConcepts.Sub_Chapter_11_Inheritance.AnimalInheritanceExample;

// @quiz (INTERVIEW) In Fish(String type, double weight, int gills, int fins), what does super(type, "small", weight) do?
// @answer It invokes Animal(String, String, double), passing the fish type, hard-coding size to "small", and passing the fish weight.
// @quiz (INTERVIEW) How should callers choose gills and fins?
// @answer They should pass int counts that describe the fish, usually non-negative values.
// @quiz (INTERVIEW TRAP) What is the warning about move(String speed) checking for "fast"?
// @answer Only the text "fast" triggers moveBackFin(); other speed values still move the fish, but without the extra back-fin output.
public class Fish extends Animal{

    private int gills;
    private int fins;

    public Fish(String type,double weight,int gills, int fins){
        super(type,"small",weight); // The constructor of animal class is called, using constructor chaining
        this.gills = gills;
        this.fins = fins;
    }

    // This method overrides the toString method of the parent Animal Class
    @Override
    public String toString() { // The toString() method of Fish class is called, as it overrides the animal class toString() method
        return "Fish{" +
                "gills=" + gills +
                ", fins=" + fins +
                "} " + super.toString(); // With the help of super.toString() the animal class toString() method is called
    }

    private void moveMuscles(){
        System.out.println("muscle moving ");
    }

    private void moveBackFin(){
        System.out.println("backfin moving ");
    }

    // This method overrides the move method of the parent Animal Class
    public void move(String speed){
        super.move(speed);
        moveMuscles();
        if("fast".equalsIgnoreCase(speed)){
            moveBackFin();
        }
    }

}
