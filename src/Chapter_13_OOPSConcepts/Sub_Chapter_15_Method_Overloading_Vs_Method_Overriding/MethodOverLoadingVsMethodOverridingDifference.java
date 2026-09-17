package Chapter_13_OOPSConcepts.Sub_Chapter_15_Method_Overloading_Vs_Method_Overriding;

// Parameter notes (what each argument means and how the parameter list matters):
// - Method overloading reuses one method name with different parameter lists, so callers choose values by the operation shape they need.
// - Different parameter COUNT means examples like area(int side) versus area(int length, int width).
// - Different parameter TYPE means examples like print(int value) versus print(String value).
// - Different parameter ORDER can overload methods, such as show(String name, int age) versus show(int age, String name), but use this carefully for readability.
// important: return type, access modifier, and thrown exceptions do not by themselves create overloaded methods; the parameter list must differ.
// - Method overriding keeps the parent parameter list identical so polymorphism can replace inherited behavior safely.
// remember: overriding allows the same return type or a covariant return type, but it does not allow changed parameters.
// pitfall: a child method with a different parameter list is an overload even if its name matches the parent method.
// warning: overloaded calls are resolved at compile time, while overridden calls are dispatched at runtime.

// @quiz (INTERVIEW) What parameter-list changes can create method overloading?
// @answer Different parameter count, different parameter types, or different parameter order can create overloads.
// @quiz (INTERVIEW TRAP) Can return type alone distinguish overloaded methods?
// @answer No. The parameter list must differ; return type alone is not enough.
// @quiz (OCJP) What must happen to the parameter list during method overriding?
// @answer It must stay identical to the parent method's parameter list: same count, types, and order.
// @quiz (INTERVIEW) How do parameter lists affect compile-time versus runtime polymorphism?
// @answer Overloading uses parameter lists for compile-time selection; overriding uses an identical parameter list and runtime dispatch by actual object type.

public class MethodOverLoadingVsMethodOverridingDifference {


    /*
    * Method OverLoading
    *
    * 1) Provides functionality to reuse a method name with different parameters.
    *
    * 2) Usually in a single class but also can be used in a child class
    *
    * 3) May have the same or different return type, but return type alone does not create overloading
    *
    * 4) May have the same or different access modifiers
    *
    * 5) May throw different exceptions
    *
    * Method Overriding
    *
    * 1) Used to override a behavior which the class has inherited from the parent Class
    *
    * 2) Always in two classes that have a child parent or IS-A relationship
    *
    * 3) Must have the same parameters and same name
    *
    * 4) Must have the same return type or covariant return type ( child class )
    *
    * 5) Must not have a lower modifier but may have a higher modifier
    *
    * 6) Must not throw a new or broader checked exception
    *
    * */


}
