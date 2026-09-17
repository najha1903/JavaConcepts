package Chapter_13_OOPSConcepts.Sub_Chapter_14_Method_Overriding_In_Java.MethodOverridingExample;

// Parameter notes (what each argument means and how the parameter list matters):
// - Dog.bark() has an empty parameter list, so callers pass no values and the method always prints one default bark.
// - GermanShepherd.bark() also has an empty parameter list, matching Dog.bark() exactly.
// important: this is OVERRIDING because the child method keeps the same name and identical parameter list as the parent method.
// trap: if GermanShepherd used bark(int number), it would be overloading, not overriding, because the parameter count changed.
// remember: @Override helps catch parameter-list mistakes that would otherwise create a new overload by accident.
// - Overloading depends on different parameter types/counts/order; overriding depends on the same parameter list.

// @quiz (INTERVIEW) Why does GermanShepherd.bark() override Dog.bark()?
// @answer It has the same method name and the identical empty parameter list in a child class.
// @quiz (INTERVIEW TRAP) What would GermanShepherd.bark(int number) be in this example?
// @answer It would be an overload, not an override, because the parameter count differs from Dog.bark().
// @quiz (OCJP) What parameter list must an overriding bark method use here?
// @answer It must use the identical empty parameter list: bark().

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
