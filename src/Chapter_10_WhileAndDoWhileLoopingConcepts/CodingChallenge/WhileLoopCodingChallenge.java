package Chapter_10_WhileAndDoWhileLoopingConcepts.CodingChallenge;

/*
* Create a method called

  isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed

  to the method is an even number or not. Return true from the method if it's an

  even number; otherwise, return false. Next, use a while loop to test a range

  of numbers from 5 up to and including 20, but printing out only the even numbers determined

  by the call to the isEvenNumber method. Okay, so the challenge is to create a

  method called isEvenNumber, and it takes a parameter of type int.

 The purpose of the method is to determine whether the argument that's been

 passed to the method, the int, in other words, is an even number or not.

 If it's an even number, return true, otherwise, return false.
*
*
* */



public class WhileLoopCodingChallenge {

    public static void main(String[] args) {

        int startingNumberRange = 5;

        int endNumberRange = 20;
        
        int countOfEvenNumbers = 0;


//        while(startingNumberRange <= endNumberRange){
//            if(isEvenNumber(startingNumberRange)){
//                System.out.print(startingNumberRange + " ");
//            }
//            startingNumberRange++;
//        }


        while(startingNumberRange  <= endNumberRange) {
            startingNumberRange++;
            if(!isEvenNumber(startingNumberRange)){
               continue;
            }
            System.out.print(startingNumberRange + " ");
            countOfEvenNumbers++;
            if(countOfEvenNumbers >= 5){
                break;
            }
        }

    }

    public static boolean isEvenNumber(int number){

        boolean isNumberEven;

       if(number > 0 && number % 2 == 0){
           isNumberEven = true;
       }else {
           isNumberEven = false;
       }

       return isNumberEven;
    }
}
