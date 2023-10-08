package SwitchStatements.CodingChallenge;

/*
Write a method called printNumberInWord.
The method has one parameter number which is the whole number.
The method needs to print "ZERO", "ONE", "TWO", ... "NINE", "OTHER" if the int parameter number is 0, 1, 2, .... 9 or other for any other number including negative numbers.
*/

public class PrintNumberInAWorldCodingChallenge {
    public static void main(String[] args) {
        System.out.println(returnNumberInAWordUsingTraditionalSwitch(1));
        System.out.println(returnNumberInAWordUsingEnhancedSwitch(6));
        printNumberInAWordUsingTraditionalSwitch(4);
        printNumberInAWordUsingEnhancedSwitch(7);
    }

    public static String returnNumberInAWordUsingTraditionalSwitch(int number) {
        switch (number) {
            case 0:
                return "ZERO";
            case 1:
                return "ONE";
            case 2:
                return "TWO";
            case 3:
                return "THREE";
            case 4:
                return "FOUR";
            case 5:
                return "FIVE";
            case 6:
                return "SIX";
            case 7:
                return "SEVEN";
            case 8:
                return "EIGHT";
            case 9:
                return "NINE";
        }
        return "other";
    }


    public static String returnNumberInAWordUsingEnhancedSwitch(int number){
        return switch (number){
            case 0 -> "ZERO";
            case 1 -> "ONE";
            case 2 -> "TWO";
            case 3 -> "THREE";
            case 4 -> "FOUR";
            case 5 -> "FIVE";
            case 6 -> "SIX";
            case 7 -> "SEVEN";
            case 8 -> "EIGHT";
            case 9 -> "NINE";
            default -> "other";
        };
    }

    public static void printNumberInAWordUsingTraditionalSwitch(int number){
        switch (number){
            case 0: System.out.println("ZERO");
            break;
            case 1: System.out.println("ONE");
            break;
            case 2: System.out.println("TWO");
            break;
            case 3: System.out.println("THREE");
            break;
            case 4: System.out.println("FOUR");
            break;
            case 5: System.out.println("FIVE");
            break;
            case 6: System.out.println("SIX");
            break;
            case 7: System.out.println("SEVEN");
            break;
            case 8: System.out.println("EIGHT");
            break;
            case 9: System.out.println("NINE");
            break;
            default: System.out.println("other");
        }
    }

    public static void printNumberInAWordUsingEnhancedSwitch(int number){
        switch (number){
            case 0 -> System.out.println("ZERO");
            case 1 -> System.out.println("ONE");
            case 2 -> System.out.println("TWO");
            case 3 -> System.out.println("THREE");
            case 4 -> System.out.println("FOUR");
            case 5 -> System.out.println("FIVE");
            case 6 -> System.out.println("SIX");
            case 7 -> System.out.println("SEVEN");
            case 8 -> System.out.println("EIGHT");
            case 9 -> System.out.println("NINE");
            default-> System.out.println("other");
        }
    }

}
