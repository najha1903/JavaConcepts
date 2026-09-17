package Chapter_6_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;

// This challenge models a temperature rule that changes when the season changes.
// isCatPlaying(boolean isSummer, int temperature) returns true when the temperature is in the allowed range.
// In normal weather, the allowed range is 25 through 35, inclusive.
// In summer, the upper limit expands to 45, so the allowed range is 25 through 45.
// Example results: isCatPlaying(true, 10) returns false, isCatPlaying(false, 36) returns false, and isCatPlaying(false, 35) returns true.
// Important: inclusive boundaries mean 25, 35, and 45 can be valid depending on the value of isSummer.

public class PlayingCatCodingChallenge {


    public static void main(String[] args) {

        System.out.println(isCatPlaying(true, 10));
        System.out.println(isCatPlaying(false, 36));
        System.out.println(isCatPlaying(false, 35));
    }

    public static boolean isCatPlaying(boolean isSummer,int temperature){

        int upperLimit = isSummer ? 45 : 35;
        return temperature >= 25 && temperature <= upperLimit;
    }
}
