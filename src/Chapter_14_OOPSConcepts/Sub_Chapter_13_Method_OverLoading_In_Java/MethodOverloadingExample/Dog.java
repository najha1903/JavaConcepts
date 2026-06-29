package Chapter_14_OOPSConcepts.Sub_Chapter_13_Method_OverLoading_In_Java.MethodOverloadingExample;

public class Dog {

    /*
     * Bark method has same name but different parameters
     *
     * */

    public void bark(){
        System.out.println("woof");
    }

    public void bark(int number){
        for(int i = 0; i < number; i++){
            System.out.println("woof");
        }
    }
}
