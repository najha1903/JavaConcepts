package OOPSConcepts;

public class MethodOverloadingSecondAndMinutesChallenge {

    public static void main(String[] args) {

        System.out.println(getDurationString(65, 30));
    }

    public static String getDurationString(int minutes, int seconds){

        String duration;

        if(minutes >=0 && (seconds >=0 && seconds <=59)){

           int hours = minutes / 60;

         //   int remainingMinutes = minutes - (hours * 60);

            int remainingMinutes = minutes % 60;

           duration = (hours + " hh " + remainingMinutes + " mm " + seconds + " ss ");
        }else {
            duration = "Invalid Value";
        }

        return duration;
    }

//    public static String getDurationString(int seconds){
//
//    }

}
