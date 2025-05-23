package Chapter_10_WhileAndDoWhileLoopingConcepts.Sub_Chapter_3_While_Do_While_Loop_CodingChallenge;

/*
* Write a method named getLargestPrime with one parameter of type int named number.

If the number is negative or does not have any prime numbers, the method should return -1 to indicate an invalid value.



The method should calculate the largest prime factor of a given number and return it.



EXAMPLE INPUT/OUTPUT:

getLargestPrime (21); should return 7 since 7 is the largest prime (3 * 7 = 21)

getLargestPrime (217); should return 31 since 31 is the largest prime (7 * 31 = 217)

getLargestPrime (0); should return -1 since 0 does not have any prime numbers

getLargestPrime (45); should return 5 since 5 is the largest prime (3 * 3 * 5 = 45)

getLargestPrime (-1); should return -1 since the parameter is negative
* */

public class LargestPrimeFactorCodingChallenge {

    public static void main(String[] args) {

        System.out.println(getLargestPrime(21));
    }

    public static int getLargestPrime(int number){

        if(number == 0 || number == 1 || (number < 0 )){

            return -1;
        }

        int largestPrime = 2;

        int counter = 2;

        int factor = 0;

        boolean flag = true;

        while(counter <= number){

            if(number % counter == 0){
                factor = counter;

                int counter2 = 2;
                while(counter2 < factor){

                    if(factor % counter2 == 0){
                        flag = false;
                  break;
                    }
                    counter2++;
                }

            }

            if(flag){
                largestPrime = factor;
            }

            counter++;
        }

        return largestPrime;
    }
}
