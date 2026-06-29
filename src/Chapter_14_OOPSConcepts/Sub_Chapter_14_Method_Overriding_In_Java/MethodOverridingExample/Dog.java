package Chapter_14_OOPSConcepts.Sub_Chapter_14_Method_Overriding_In_Java.MethodOverridingExample;

public class Dog {

/*
* Bark method has same name and same parameters
*
* */

    public void bark(){
        System.out.println("woof");
    }

}



class GermanShepherd extends Dog {

    @Override
    public void bark(){
     System.out.println("woof woof woof");
    }
}
