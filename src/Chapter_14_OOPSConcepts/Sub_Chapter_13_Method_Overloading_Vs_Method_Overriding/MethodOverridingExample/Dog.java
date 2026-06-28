package Chapter_14_OOPSConcepts.Sub_Chapter_13_Method_Overloading_Vs_Method_Overriding.MethodOverridingExample;

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
