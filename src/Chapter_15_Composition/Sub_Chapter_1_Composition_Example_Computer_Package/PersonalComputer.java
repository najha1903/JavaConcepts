package Chapter_15_Composition.Sub_Chapter_1_Composition_Example_Computer_Package;

public class PersonalComputer extends Product{

    private Monitor monitor;
    private MotherBoard motherboard;
    private ComputerCase computerCase;

    public PersonalComputer(String model, String manufacturer){
        super(model,manufacturer);
    }

    public PersonalComputer(String model, String manufacturer, Monitor monitor, MotherBoard motherboard, ComputerCase computerCase){
        super(model,manufacturer);
        this.monitor = monitor;
        this.motherboard = motherboard;
        this.computerCase = computerCase;
    }

    public ComputerCase getComputerCase(){
        return computerCase;
    }

    public Monitor getMonitor() {
        return monitor;
    }

    public MotherBoard getMotherboard() {
        return motherboard;
    }



}
