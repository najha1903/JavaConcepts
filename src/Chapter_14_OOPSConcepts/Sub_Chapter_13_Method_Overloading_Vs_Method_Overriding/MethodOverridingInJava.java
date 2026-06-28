package Chapter_14_OOPSConcepts.Sub_Chapter_13_Method_Overloading_Vs_Method_Overriding;

/*
*    Method overriding, means defining a method in a child class that already exists in the parent class, with the same signature (In
*    other words, the same name, and same parameters).
*
*    By extending the parent class, the child class gets all the methods defined in the parent class. Those methods are also known as derived methods.
*
*    Method overriding is also known as Runtime Polymorphism or Dynamic Method Dispatch because the method that is going to be called is decided at runtime by the Java virtual machine.
*
*    When we override a method, it's recommended to put @Override immediately above the method definition.
*    The @Override statement is not required, but it's a way to get the compiler to flag
*    an error if you don't actually properly override this method.
*    We'll get an error if we don't follow the overriding rules correctly for that method.
*
*     We can't override static methods,only instance methods can be overridden.
*
*     Method overriding rules
*
*     A method will be considered overridden if we follow these rules.
*
*     1) Firstly, It must have the same name and same arguments.
*     2) The return type can be a subclass of the return type in the parent class.
*     3) It can't have a lower access modifier. In other words, it
*     can't have more restrictive access privileges. For example, if the parent's method is protected, then
*     using private in the child's overridden method is not allowed. However, using public for the child's
*     method would be allowed, in this example.
*     4) Only inherited methods can be overridden, in other words, methods can be overridden only in child classes.
*     5) Constructors and private methods cannot be overridden.
*     6) And Methods that are final also cannot be overridden.
*     7) A subclass can use super.methodName() to call the superclass version of an overridden method.
*
*
*
* */

// @quiz (INTERVIEW) What is method overriding in Java?
// @answer Defining a method in a child class with the SAME name, SAME parameters, and compatible return type as a method in the parent class.
// @answer The child's version replaces the parent's version when called on a child object — this is Runtime Polymorphism (Dynamic Method Dispatch).
// @answer The JVM decides at RUNTIME which version to call based on the actual object type, not the reference type.

// @quiz (INTERVIEW) What is the difference between method overloading and method overriding?
// @answer Overloading: SAME class, SAME name, DIFFERENT parameters. Resolved at COMPILE TIME (static polymorphism).
// @answer Overriding: CHILD class, SAME name, SAME parameters. Resolved at RUNTIME (dynamic polymorphism).
// @answer Key interview distinction: overloading = compile-time, overriding = runtime. Overloading changes the method signature; overriding keeps it identical.

// @quiz (INTERVIEW) What are the rules for method overriding in Java?
// @answer 1) Same method name and same parameters (signature must match exactly).
// @answer 2) Return type must be the same OR a subclass (covariant return type — Java 5+).
// @answer 3) Access modifier cannot be MORE restrictive (public > protected > default > private). Can be less restrictive.
// @answer 4) Only inherited (non-private, non-static, non-final) methods can be overridden.
// @answer 5) Constructors and private methods CANNOT be overridden.
// @answer 6) final methods CANNOT be overridden — compiler error.
// @answer 7) static methods CANNOT be overridden — they are hidden (method hiding), not overridden.

// @quiz (OCJP TRAP) What is the output? class Animal { void speak(){ System.out.println("Animal"); } } class Dog extends Animal { void speak(){ System.out.println("Dog"); } } Animal a = new Dog(); a.speak();
// @answer Output: Dog
// @answer Even though the reference type is Animal, the ACTUAL object is Dog. Java uses dynamic dispatch — the JVM calls Dog's speak() at runtime. This is the core of runtime polymorphism.
// @answer TRAP: beginners think Animal's speak() is called because the reference is Animal. Wrong — it's always the actual object's method.

// @quiz (OCJP TRAP) Can you override a static method in Java?
// @answer NO. Static methods belong to the class, not the object. You can declare a static method with the same name in a subclass, but this is called METHOD HIDING, not overriding.
// @answer With hiding: the method called depends on the REFERENCE type (compile-time). With overriding: it depends on the OBJECT type (runtime). This is the key difference.
// @answer @Override annotation on a static method causes a COMPILE ERROR.

// @quiz (OCJP TRAP) What is the output? class Parent { String name = "Parent"; void show() { System.out.println("Parent show"); } } class Child extends Parent { String name = "Child"; void show() { System.out.println("Child show"); } } Parent p = new Child(); System.out.println(p.name); p.show();
// @answer Output: Parent (then) Child show
// @answer Fields are resolved at COMPILE TIME based on reference type → p.name uses Parent's name field.
// @answer Methods are resolved at RUNTIME based on object type → p.show() calls Child's show().
// @answer CRITICAL TRAP: fields are NOT polymorphic. Only methods are. Always remember: fields → compile-time (reference), methods → runtime (object).

// @quiz (INTERVIEW) What is covariant return type in method overriding?
// @answer Java 5+ allows the overriding method to return a subtype of the parent method's return type.
// @answer Example: Parent returns Animal, Child can override to return Dog (Dog IS-A Animal). This is valid.
// @answer Why useful: allows more specific return types without breaking the contract.

// @quiz (INTERVIEW) What is the purpose of the @Override annotation?
// @answer It tells the compiler you INTEND to override a method. If the signatures don't match (e.g., you made a typo), the compiler gives an error instead of silently creating an overloaded method.
// @answer Best practice: ALWAYS use @Override when overriding — it's a safety net against bugs.
// @answer Without @Override: if you accidentally write the wrong signature, Java silently treats it as a new overloaded method. You'd think you overrode, but you didn't.

// @quiz (INTERVIEW) Can a private method be overridden?
// @answer NO. Private methods are not inherited — the child class cannot see them. If you define a method with the same name in the child class, it's a completely NEW method, not an override.
// @answer @Override on a "private method override" will cause a compile error.

// @quiz (INTERVIEW) What happens when you call super.methodName() inside an overriding method?
// @answer It explicitly calls the PARENT class's version of the method. This is used to extend (not replace) the parent's behaviour.
// @answer Example: child's toString() calls super.toString() to include parent's fields in the output, then adds its own fields.

// @quiz (INTERVIEW) Can a constructor be overridden?
// @answer NO. Constructors are not inherited — they cannot be overridden. Each class has its own constructor(s).
// @answer Constructors can be OVERLOADED (same class, different parameters) but not overridden.

// @challenge Design a Shape hierarchy demonstrating method overriding
// @desc Create a Shape base class with area() and perimeter() methods. Override in Circle, Rectangle, and Triangle subclasses. Add a printInfo() method in Shape that calls area() and perimeter() — demonstrate polymorphism by storing all shapes in a Shape[] array and calling printInfo() on each.
// @hint area() and perimeter() in Shape should either be abstract or return 0.0. Each subclass overrides with real formula. Circle: area = π*r², perimeter = 2*π*r. Rectangle: area = l*w, perimeter = 2*(l+w).
// @testcase Shape[] shapes = {new Circle(5), new Rectangle(4,6), new Triangle(3,4,5)}; for(Shape s: shapes) s.printInfo(); — should print area and perimeter of each

// @challenge Demonstrate the field hiding vs method overriding trap
// @desc Create a Parent class with a String field name="Parent" and void display(). Create Child extending Parent with name="Child" and override display(). Show that: (1) Parent ref = new Child() — which name is accessed? (2) which display() is called? Explain why.
// @hint Fields use compile-time (reference) binding. Methods use runtime (object) binding. This is one of the most common OCJP traps.
// @testcase Parent p = new Child(); p.name should be "Parent". p.display() should call Child's version.

// @challenge Implement a polymorphic payment system using method overriding
// @desc Create Payment base class with processPayment(double amount). Override in CreditCardPayment, UPIPayment, NetBankingPayment. Each adds its own processing fee logic. Process a list of mixed payments polymorphically.
// @hint Store all payment types as Payment[] array. Call processPayment() on each — Java will dispatch to the right subclass at runtime. This is real-world polymorphism.
// @testcase payments[0] = new CreditCardPayment(); payments[1] = new UPIPayment(); for(Payment p: payments) p.processPayment(1000.0);

public class  MethodOverridingInJava {
}
