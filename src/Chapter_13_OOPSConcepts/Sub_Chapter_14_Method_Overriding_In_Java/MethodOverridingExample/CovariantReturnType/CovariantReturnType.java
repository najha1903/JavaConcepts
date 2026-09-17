package Chapter_13_OOPSConcepts.Sub_Chapter_14_Method_Overriding_In_Java.MethodOverridingExample.CovariantReturnType;

// Parameter notes (what each argument means and how the parameter list matters):
// - Person(String name, String birthDate): name stores the person's display name, and birthDate stores the date text used when cloning.
// - Choose name as meaningful person text and birthDate in the same format expected by the rest of your example or application.
// - The Person constructor is overloaded only if another Person constructor has a different parameter count, type, or order.
// important: constructors cannot be overridden because they are not inherited; only methods can be overridden.
// - clone() has an empty parameter list in Object and in Person, so the parameter list is identical for overriding.
// remember: Person clone() can return Person instead of Object because covariant return types are allowed in overriding.
// pitfall: a different return type can help overriding only when it is covariant; return type alone still does not create an overload.
// careful: if Person wrote clone(String name), that would be an overload, not an override, because the parameter list changed.

// @quiz (INTERVIEW) What do the name and birthDate parameters in Person(String name, String birthDate) represent?
// @answer name is the person's stored name, and birthDate is the stored birth-date text copied into the new Person.
// @quiz (INTERVIEW TRAP) Can Person(String name, String birthDate) override a constructor from another class?
// @answer No. Constructors are not inherited, so they can be overloaded but never overridden.
// @quiz (OCJP) Why is public Person clone() a valid override of Object clone() even though the return type differs?
// @answer The parameter list is identical and Person is a covariant return type, meaning it is more specific than Object.
// @quiz (INTERVIEW TRAP) Would clone(String name) override Object's clone()?
// @answer No. Changing the parameter list makes it a different overloaded method, not an override.

/*
* The return type of an overriden method can be the same type as the parent method's declaration, but it can also be a subclass.
*
* The term, covariant return type, can include types such as interfaces and generic types
*
* All classes ultimately have Object as a baseclass, so every class can be said to be a covariant of Object
*
* In general, when we are cloning an instance, we want to return an Object, that's the same type as the Object we want to clone
*
* */
public class CovariantReturnType {


   /*
   * This is how, clone method looks like, when it is overridden from Object Class
   * */

  @Override
  protected Object clone() throws CloneNotSupportedException {
      return super.clone();
  }

}


class Person {
    private String name;
    private String birthDate;

    public Person(String name, String birthDate){
        this.name = name;
        this.birthDate = birthDate;
    }

    @Override
    /*
    * Person is a valid covariant return type for object
    *
    * The clone method in the person class is a valid overriding method, overriding object's clone method
    *
    * The object clone method is declared as protected, but the access modifier for the Person clone method is public, as the overridden clone method can have higher access modifiers compared to it's parent
    * */

    public Person clone(){
     return new Person(name, birthDate);
    }
}
