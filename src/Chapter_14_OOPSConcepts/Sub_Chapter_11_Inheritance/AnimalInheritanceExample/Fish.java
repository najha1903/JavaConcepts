package Chapter_14_OOPSConcepts.Sub_Chapter_11_Inheritance.AnimalInheritanceExample;

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
        if(speed == "fast"){
            moveBackFin();
        }
    }

}
