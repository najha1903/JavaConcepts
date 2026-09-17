package Chapter_15_Composition.Sub_Chapter_3_DeepProblems;

/*
* Deep Problem: Computer Assembly — composition in practice.
*
* A PersonalComputer HAS-A Monitor, a MotherBoard and a ComputerCase.
* Each part is its own object with its own model and manufacturer, and the computer
* is built by holding those parts, not by inheriting from them.
* This is the difference between HAS-A (composition) and IS-A (inheritance).
*
* This exercise works with the parts as simple values, so the idea can be practised
* without building the whole object graph.
*
* describePart      :- returns the part as "model by manufacturer", or "incomplete part"
*                      when either value is missing.
* totalCost         :- adds the three part prices to give the cost of the whole build.
* isFullyAssembled  :- returns true only when every part is present.
* */

// @testcase describePart("U2720Q", "Dell") -> U2720Q by Dell
// @testcase describePart("H510", "NZXT") -> H510 by NZXT

public class CompositionDeepProblem {

    public static String describePart(String model, String manufacturer) {
        if (model == null || manufacturer == null) {
            return "incomplete part";
        }
        return model + " by " + manufacturer;
    }

    public static double totalCost(double computerCase, double motherBoard, double monitor) {
        return computerCase + motherBoard + monitor;
    }

    public static boolean isFullyAssembled(String monitor, String motherBoard, String computerCase) {
        return isPresent(monitor) && isPresent(motherBoard) && isPresent(computerCase);
    }

    private static boolean isPresent(String value) {
        return value != null && !value.isBlank();
    }

    public static void main(String[] args) {

        System.out.println(describePart("U2720Q", "Dell"));
        System.out.println("Total build cost: " + totalCost(120.0, 240.5, 380.0));
        System.out.println("Fully assembled: " + isFullyAssembled("U2720Q", "ROG STRIX", "H510"));
        System.out.println("Missing a part: " + isFullyAssembled("U2720Q", null, "H510"));
    }
}
