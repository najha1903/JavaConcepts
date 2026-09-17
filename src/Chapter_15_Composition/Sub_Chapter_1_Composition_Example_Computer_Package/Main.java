package Chapter_15_Composition.Sub_Chapter_1_Composition_Example_Computer_Package;

public class Main {

    public static void main(String[] args) {

        ComputerCase theCase = new ComputerCase("2208","Dell","240");

        Monitor monitor = new Monitor("27 inch Beast","Acer",27,"2540 * 1440");

        MotherBoard theMotherBoard = new MotherBoard("BJ-200","Asus",4,6,"v2.44");

        PersonalComputer thePC = new PersonalComputer("2208","Dell",monitor,theMotherBoard,theCase);

        thePC.getMonitor().drawPixelAt(10,10,"red");
    }
}
