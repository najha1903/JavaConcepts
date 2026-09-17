package Chapter_15_Composition.Sub_Chapter_1_Composition_Example_Computer_Package;

public class ComputerCase extends Product{

    private String powerSupply;

    public ComputerCase(String model, String manufacturer){
        super(model,manufacturer);
    }

    public ComputerCase(String model, String manufacturer, String powerSupply){
        super(model,manufacturer);
        this.powerSupply = powerSupply;
    }

    public void pressPowerButton(){
        System.out.println("Power button pressed");
    }

}
