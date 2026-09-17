package Chapter_6_Methods_In_Java.Sub_Chapter_2_Methods_Coding_Challenge;

// This challenge practices boolean logic with two inputs: whether barking is happening and what hour it is.
// shouldWakeUp(boolean barking, int hourOfDay) returns true only when barking is true and the time is before 8 or after 22.
// The valid hour range is 0 through 23; any value outside that range returns false because the input itself is invalid.
// The first guard clause rejects all cases where no action is needed: not barking, negative hour, or hour greater than 23.
// Example results: shouldWakeUp(true, 1) returns true, shouldWakeUp(false, 2) returns false, and shouldWakeUp(true, 8) returns false.
// Important: combine conditions carefully so invalid hours never accidentally produce a true result.

public class BarkingDogCodingChallenge {

    public static void main(String[] args) {

        System.out.println(shouldWakeUp(false,2));
        System.out.println(shouldWakeUp(true,-1));
        System.out.println(shouldWakeUp(true,8));
        System.out.println(shouldWakeUp(true,0));
        System.out.println(shouldWakeUp(true,4));
        System.out.println(shouldWakeUp(true,22));
        System.out.println(shouldWakeUp(true,23));
    }

    public static boolean shouldWakeUp(boolean barking,int hourOfDay){

        boolean wakeUp = false;

        if(!barking || hourOfDay < 0 || hourOfDay > 23){
            wakeUp = false;
        }else if(hourOfDay < 8 || hourOfDay > 22){
         wakeUp = true;
        }
        return wakeUp;
    }
}
