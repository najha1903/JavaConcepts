package Chapter_13_OOPSConcepts.Sub_Chapter_14_Method_Overriding_In_Java;

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

// important: CreditCardPayment.processPayment(double amount) overrides Payment.processPayment(double amount) only because the parameter list is identical.
// trap: processPayment(int amount), processPayment(double amount, String currency), or processPayment(Double amount) would be overloads, not overrides.
// - For overriding, Java decides which implementation runs at runtime from the actual object type.
// - For overloading, Java decides which parameter list matches at compile time from the reference type and argument expressions.
// warning: changing parameter type by boxing, widening, or adding parameters breaks overriding even if the method name looks correct.
// remember: a covariant return type may be allowed in overriding, but the parameters must still match exactly.

// @quiz (INTERVIEW) For a child method to override a parent method, what must be true about its parameters?
// @answer The parameter list must be identical: same count, same types, and same order.
// @quiz (INTERVIEW TRAP) Does processPayment(int amount) override processPayment(double amount)?
// @answer No. int and double are different parameter types, so this creates an overload instead of an override.
// @quiz (OCJP) When is an overloaded method selected versus an overridden method selected?
// @answer Overloading is selected at compile time by the argument list; overriding is selected at runtime by the actual object type.
// @quiz (INTERVIEW TRAP) Can @Override catch a parameter-list mismatch?
// @answer Yes. If the child method's parameters do not exactly match an inherited method, @Override causes a compile-time error.

// @quiz (INTERVIEW, MEDIUM) What is method overriding, and when is the choice of method made?
// @option Defining a method in a child class with the same name and parameters as the parent's, with the version chosen at runtime. [correct]
// @option Defining two methods with the same name but different parameters in one class.
// @option Replacing a method in the same class so the old one no longer exists.
// @option Choosing the method at compile time, based on the reference type.
// @explain Overriding is runtime polymorphism, also called dynamic method dispatch. The JVM looks at the actual object, not the declared type of the reference, when deciding which version to run.
// @why B: same name and different parameters in one class is overloading.
// @why C: you cannot replace a method in the same class. Overriding happens in a child class.
// @why D: compile-time resolution based on the reference type describes overloading.

// @quiz (INTERVIEW, MEDIUM) What is the key difference between overloading and overriding?
// @option Overloading is in the same class with different parameters and is resolved at compile time. Overriding is in a child class with the same parameters and is resolved at runtime. [correct]
// @option Overloading happens in a child class, and overriding happens in the same class.
// @option Overloading is resolved at runtime, and overriding at compile time.
// @option They are the same thing with different names.
// @explain The distinction interviewers look for is which one the compiler decides and which one the JVM decides. Changing the parameters means a new overload; keeping them identical means an override.
// @why B: this is reversed. Overloading stays within one class.
// @why C: this is also reversed. Overloading is the compile-time one.
// @why D: they differ in where they happen, in their parameters, and in when they are resolved.

// @quiz (OCJP, HARD) A parent method is declared protected. Which access modifier in the overriding child method is invalid?
// @option private, because an override cannot be more restrictive than the method it overrides. [correct]
// @option public, because it is more accessible.
// @option protected, because it is identical.
// @option No modifier at all, because that gives package access.
// @explain An override may widen access but never narrow it. protected can become public, but it cannot become private, because callers that could reach the parent's method would suddenly be locked out.
// @why B: public is allowed, because it is less restrictive.
// @why C: the same modifier is always allowed.
// @why D: package-private is more restrictive than protected, so it is not allowed here either, but private is the clearly invalid one being asked for.

// @quiz (OCJP, HARD) What is printed?
// @code class Animal { void speak() { System.out.println("Animal"); } }
// @code class Dog extends Animal { void speak() { System.out.println("Dog"); } }
// @code Animal a = new Dog();
// @code a.speak();
// @option Dog, because the JVM uses the actual object type at runtime. [correct]
// @option Animal, because the reference is declared as Animal.
// @option Both lines, Animal then Dog.
// @option It does not compile, because the types do not match.
// @explain This is the heart of runtime polymorphism. The reference type only decides what you are allowed to call; the object type decides which version actually runs. Assigning a Dog to an Animal reference is legal because a Dog is an Animal.
// @why B: this is the classic trap. The reference type does not choose the method at runtime.
// @why C: only one version runs, not both.
// @why D: the assignment is allowed, because Dog extends Animal.

// @quiz (OCJP, HARD) Which methods can NOT be overridden?
// @option static methods, private methods, final methods and constructors. [correct]
// @option Only final methods.
// @option Any method that returns void.
// @option Any method that takes parameters.
// @explain static methods are hidden rather than overridden, private methods are not inherited at all, final methods are locked down by the compiler, and constructors are not inherited methods. A method must be inheritable before it can be overridden.
// @why B: final is only one of several cases.
// @why C: a void return type has no bearing on whether a method can be overridden.
// @why D: overridden methods have parameters all the time. The signature simply has to match the parent's.

// @quiz (INTERVIEW, MEDIUM) Why is @Override recommended, even though it is optional?
// @option It makes the compiler flag the method if it does not actually override anything, which catches a mistyped signature. [correct]
// @option It makes the method run faster.
// @option It is required for runtime polymorphism to work.
// @option It marks the method as final.
// @explain The annotation is a promise to the compiler. If the signature does not match a parent method, the compiler reports an error instead of silently creating a new method that never gets called.
// @why B: the annotation has no effect on performance.
// @why C: polymorphism works without it. The annotation is a safety check.
// @why D: final does the opposite, preventing further overrides.

// @quiz (INTERVIEW, MEDIUM) What is a covariant return type in an overriding method?
// @option The overriding method may return a subclass of the return type declared by the parent. [correct]
// @option The overriding method must change the return type.
// @option The overriding method may return a supertype of the parent's return type.
// @option The return type must always match exactly, with no exceptions.
// @explain Covariance lets an override narrow the return type, which is more specific and therefore safe. If the parent returns Animal, the child may return Dog, because a Dog is an Animal.
// @why B: the return type may stay exactly the same. Changing it is optional.
// @why C: widening to a supertype would break callers who expect the narrower type.
// @why D: an exact match is always allowed, but it is not the only option.

// @quiz (OCJP, HARD) Does this code compile?
// @code class Parent {
// @code     static void show() { System.out.println("parent"); }
// @code }
// @code class Child extends Parent {
// @code     @Override
// @code     static void show() { System.out.println("child"); }
// @code }
// @option No. A static method is hidden rather than overridden, so @Override is a compile error. [correct]
// @option Yes, and calling Child.show() prints child.
// @option Yes, because @Override is optional.
// @option Yes, and calling show() on a Parent reference prints child.
// @explain Static methods belong to the class, so a same-name static method in a subclass hides the parent's version rather than overriding it. @Override promises an override, and the compiler reports the mismatch.
// @why B: the annotation is checked, and it fails here.
// @why C: @Override is optional only when a real override exists. Here there is none.
// @why D: hiding resolves at compile time from the reference type, so a Parent reference would print parent.

// @quiz (OCJP, HARD) What is printed by this code?
// @code class Parent {
// @code     private void greet() { System.out.println("parent"); }
// @code     void hello() { greet(); }
// @code }
// @code class Child extends Parent {
// @code     void greet() { System.out.println("child"); }
// @code }
// @code new Child().hello();
// @option parent, because the private method is not overridden, so Parent's own method is still used. [correct]
// @option child, because Child declares a method with the same name.
// @option It does not compile, because Child cannot declare greet().
// @option It prints both parent and child.
// @explain A private method is not inherited, so Child's greet() is a new method that happens to share the name. Parent.hello() calls the greet() it can see, which is its own private one.
// @why B: overriding needs an inherited method. A private method is not inherited.
// @why C: declaring a method with the same name is allowed; it simply is not an override.
// @why D: only one method is called.

// @quiz (INTERVIEW, MEDIUM) What does super.toString() do inside an overriding toString method?
// @option It calls the parent class version of toString, which is useful for adding the parent fields to the result. [correct]
// @option It creates a new parent object.
// @option It calls the constructor of the parent class.
// @option It returns the class name only.
// @explain super.methodName() reaches the parent implementation of that method. It is the usual way to reuse the parent's text and append the subclass's own fields, rather than rewriting the whole thing.
// @why B: no object is created. The method is simply called on the same object.
// @why C: a constructor call is super(...) with parentheses and arguments, not super.method().
// @why D: it runs whatever the parent toString returns, which normally includes the parent fields.

// @quiz (OCJP, MEDIUM) A parent declares a method as protected. Which access modifier in an overriding child method is allowed?
// @option public, because an override may widen access but never narrow it. [correct]
// @option private, because an override may be more restrictive.
// @option It does not matter, because an override can use any modifier.
// @option Only protected, exactly matching the parent.
// @explain An override cannot take access away from callers who already had it. protected can become public, and it can stay protected, but it cannot become private or package-private.
// @why B: private is more restrictive, which is exactly what is forbidden.
// @why C: the modifier is constrained by the rule that access may not be reduced.
// @why D: an exact match is allowed, but so is widening it to public.

// Seeing overriding decide the method at runtime :-
// Animal myPet = new Dog();      // a parent reference holding a child object
// myPet.move(5);                 // runs Dog's version, because the OBJECT type decides
// Note :- the reference type (Animal) only decides which methods you are allowed to call. The object type (Dog) decides which body actually runs. That is runtime polymorphism.

// A parent reference cannot see methods that only the child declares :-
// Animal myPet = new Dog();
// myPet.fetch();                 // Compile Error :- cannot find symbol, because fetch is declared only on Dog
// Note :- to call a child-only method you need a Dog reference, either declared as Dog or obtained by casting.

// Which method runs, and when that is decided :-
// | Question | Overriding | Overloading |
// |---|---|---|
// | Same name? | Yes | Yes |
// | Parameter list | Identical | Different |
// | Which one runs | Decided at runtime from the object type | Decided at compile time from the argument types |
// | Also called | Runtime polymorphism | Compile-time selection |
// Note :- this single distinction explains why `@Override` reports an error when you accidentally change a parameter type: the method has quietly become an overload instead of an override.

// @takeaway Overriding means a child class writes its own version of a method the parent already has, keeping the same name and exactly the same parameter list.
// @takeaway Which overridden method runs is decided at runtime from the actual object type, not from the reference type, which is why overriding is called runtime polymorphism.
// @takeaway Which overloaded method runs is decided at compile time from the argument types, so overloading has nothing to do with polymorphism.
// @takeaway A child version may not take access away from callers, so a public parent method cannot become protected or private in the child, and it may narrow the return type to a subclass.
// @takeaway Static methods, private methods, final methods and constructors cannot be overridden. `@Override` above the child method makes the compiler check all of this for you.
// @gotcha Changing the parameter list turns an intended override into an overload, and the code still compiles. `@Override` is what turns that silent mistake into an error.
// @gotcha A private method in the parent cannot be overridden, because the child cannot even see it. A same-named method in the child is a separate, unrelated method.
// @gotcha Through a parent reference you can only call the methods the parent declares, so calling a child-only method needs a child reference or a cast.


// @quiz (OCJP, MEDIUM) What is printed by this program?
// @code class Animal {
// @code     String speak() { return "animal"; }
// @code }
// @code class Dog extends Animal {
// @code     @Override String speak() { return "dog"; }
// @code }
// @code public class Main {
// @code     public static void main(String[] args) {
// @code         Animal a = new Dog();
// @code         System.out.println(a.speak());
// @code     }
// @code }
// @option dog, because the object type decides which override runs, not the reference type. [correct]
// @option animal, because the reference is declared as Animal.
// @option It does not compile, because a Dog is not an Animal.
// @option It prints both animal and dog.
// @explain The reference type only says which methods you may call. The object, a Dog, decides the body.
// @why B: that is true for an overload. An override is resolved from the object, not the reference.
// @why C: a Dog IS-A Animal, so widening the reference is legal and the code compiles.
// @why D: one method runs per call, and it returns a single value.

// @quiz (OCJP, MEDIUM) Does this code compile?
// @code class Parent {
// @code     void move() { System.out.println("move"); }
// @code }
// @code class Child extends Parent {
// @code     void fetch() { System.out.println("fetch"); }
// @code }
// @code Parent p = new Child();
// @code p.fetch();
// @option No. The reference type decides what you may call, and Parent does not declare fetch. [correct]
// @option Yes, and it prints fetch, because the object really is a Child.
// @option Yes, and it throws a ClassCastException at runtime.
// @option No, because fetch() is not overridden in Parent.
// @explain The compiler allows only methods the reference type declares, and Parent has no fetch().
// @why B: that rule needs the parent to declare the method. Here Parent never declares fetch().
// @why C: this is a compile-time error, so the program never runs and no exception is thrown.
// @why D: the problem is not a missing override. The problem is that Parent does not declare fetch() at all.

// @quiz (OCJP, HARD) What happens when this code is compiled?
// @code class Parent {
// @code     void print(int n) { System.out.println("parent " + n); }
// @code }
// @code class Child extends Parent {
// @code     @Override void print(long n) { System.out.println("child " + n); }
// @code }
// @option It does not compile, because @Override finds no Parent method with that parameter list. [correct]
// @option It compiles, and print(long) overrides print(int).
// @option It compiles, and print(long) is both an overload and an override.
// @option It does not compile, because a child may not widen a parameter type.
// @explain An override must keep the same parameter list, so print(long) is an overload @Override rejects.
// @why B: widening int to long is not part of overriding. The parameter lists have to match exactly.
// @why C: without @Override it is a legal overload, but @Override makes the mismatch a compile error.
// @why D: a child may add an overload with any parameter type. The error comes from @Override, not widening.

// @quiz (OCJP, HARD) What is printed by this program?
// @code class Parent {
// @code     static void show() { System.out.println("parent"); }
// @code }
// @code class Child extends Parent {
// @code     static void show() { System.out.println("child"); }
// @code }
// @code public class Main {
// @code     public static void main(String[] args) {
// @code         Parent ref = new Child();
// @code         ref.show();
// @code     }
// @code }
// @option parent, because a static method is chosen from the reference type, not the object type. [correct]
// @option child, because the object is a Child.
// @option It does not compile, because Child may not declare show().
// @option It does not compile, because @Override is missing on show().
// @explain A static method is hidden, not overridden, so the call is bound from the reference type, Parent.
// @why B: that is how an overridden instance method behaves. A static method follows the reference.
// @why C: hiding a static method with the same signature is allowed.
// @why D: @Override is optional, and on a static method it would be an error.

// @quiz (OCJP, MEDIUM) A child class overrides a public method that returns Number. Which change is legal?
// @option Narrowing the return type to Integer, because an override may return a subtype. [correct]
// @option Reducing the access from public to package-private, because a child may be more restrictive.
// @option Making the child method private, because the child owns its own code.
// @option Making the child method static, because static methods are not inherited.
// @explain An override may narrow the return type to a subtype, but access may be widened, never reduced.
// @why B: reducing access is forbidden. Callers already hold the public promise made by the parent.
// @why C: private is the most restrictive choice of all, so it is forbidden for the same reason.
// @why D: a static method hides the parent's method instead of overriding it, so it is not an override.


public class MethodOverridingInJava {
}
