package Chapter_14_OOPSConcepts.Sub_Chapter_14_Method_Overriding_In_Java.MethodOverridingExample.CovariantReturnType;

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
