package Chapter_9_Java_Looping_Concepts.Sub_Chapter_2_For_Loop_Coding_Challenge;
// CODING CHALLENGE — For Loop with Break
// This challenge practices: for loops, a helper method (isPrime), the break statement, and prime number logic.
// A prime number is only divisible by 1 and itself. The isPrime method checks divisibility up to number/2 (any factor beyond that would have a corresponding factor below it).
// The challenge: find 3 prime numbers in range 10-20 using a for loop, then break once 3 are found.
/*
Create a prime number counter variable, that will keep count of how many prime numbers were found.

Create a for statement, using any range of numbers, where the maximum number is <= 1000.

For each number in the range: Check to see if it's a prime

number using the isPrime method. If the number is prime, print it out and increment the prime

number counter variable. Once the prime number counter equals three, exit the loop (Hint,

use the break statement to exit). Your challenge is to create a for

statement, using any range of numbers, to determine if the numbers, are prime numbers.

If it's a prime number, print it out, and increment a count

of the number of prime numbers found. if you get to the stage where 3 or more

prime numbers are found, end the loop. In other words, you'll be iterating

through the loop, but you've found three prime numbers before the range is fully processed.

 */

public class ForLoopPrimeNumberChallenge {

    public static void main(String[] args) {

        int count = 0;
                for(int i = 10; i <= 20;i++){
            if(isPrime(i)){
             count++;
             if(count == 3){
                 break;
             }
            }
        }

        System.out.println(count);
    }

    public static boolean isPrime(int number){

        if(number == 2){
            return true;
        }

        for(int i = 2; i <= number / 2; i++){
            if( number % i == 0){
                return false;
            }
        }

        return true;
    }
}
