package Chapter_9_Java_Looping_Concepts.Sub_Chapter_2_For_Loop_Coding_Challenge;

/* * This is the sum 3 and 5 challenge. So the challenge is to create a for statement,

    using a range of numbers, from 1 to 1,000 inclusive. You want to sum all the numbers,

    when you're looping through, that can be divided with both the number 3, and also with 5.

    And for those numbers, that meet the above conditions, in other words,

    that are found to be divisible by both 3, and also divisible by 5, you want to print out that number.

    You also want to break out of the loop, once you find five numbers, that meet those above conditions.

    And then finally, after breaking out of the loop, print the sum of the numbers you found,
    that have met those above conditions.

    * */


public class ForLoopSum3and5Challenge {

    public static void main(String[] args) {

        int sum = 0;
        int matches = 0;

        for(int i = 1; i <= 1000; i++){
            if((i % 3 == 0) && (i % 5 == 0)){
                matches++;
                sum = sum + i;
            }
            if(matches == 5){
                break;
            }
        }


        System.out.println(sum);
    }




}
