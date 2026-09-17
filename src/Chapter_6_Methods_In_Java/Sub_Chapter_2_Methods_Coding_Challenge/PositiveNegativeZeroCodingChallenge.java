package Chapter_6_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;

/*
 * This challenge practices simple branching with a void method.
 * checkNumber(int number) classifies one integer and prints the matching label.
 * A value greater than 0 prints "positive", a value less than 0 prints "negative", and 0 prints "zero".
 * The method does not return a value because the result is communicated through console output.
 * Important: the zero case must be handled separately because zero is neither positive nor negative.
 */



public class PositiveNegativeZeroCodingChallenge {

    public static void main(String[] args) {
        checkNumber(1);
        checkNumber(-1);
        checkNumber(0);
    }
    public static void checkNumber(int number){

        if(number > 0){
            System.out.println("positive");
        }else if(number < 0){
            System.out.println("negative");
        }else{
            System.out.println("zero");
        }

    }

}
