package Chapter_13_OOPSConcepts.Sub_Chapter_1_Classes_And_Inheritance;
// Object-Oriented Programming (OOP) is a programming paradigm that models real-world entities as software objects.
// In OOP, everything revolves around CLASSES (blueprints) and OBJECTS (instances of those blueprints).
// OOP is built on four pillars: Encapsulation, Inheritance, Polymorphism, and Abstraction.
// A class defines FIELDS (data/state) and METHODS (behaviour). Together these are called class members.
// A static field has one copy shared by all instances. An instance field has one copy per object.
// A static method cannot use instance data. An instance method can use both static and instance data.
/*
*  Object-oriented programming is a way to model real world objects as software objects which contain both data and code
*
*  OOP is sometimes called class-based programming. Class-based programming starts with classes which, become the blueprints for objects
*
*  Modelling real-world objects, as software objects is a fundamental part of Object-Oriented Programming.
*
* A software object stores its state in fields, which can also be called variables or attributes.
*
* Objects expose their behavior with methods.
*
* Class is basically a template or a blueprint for creating objects.
*
* The class describes the data (fields), and the behavior (methods), that are relevant to the real-world object we want to describe. These are called class members.
*
* A class member can be a field or a method, or some other type of dependent element.
*
* If a field is static, there is only one copy in memory, and this value is associated with the class or template itself.
*
* If a field is not static, it's called an instance field, and each object may have a different value stored for this field.
*
* A static method can't be dependent on any one object's state, so it can't reference any instance members.
*
* Any method that operates on instance fields needs to be non-static. These class or member fields can be thought of as variables, though it's more common to call them fields or attributes.
*
*/


/*
* The public keyword is an access modifier. This lets us determine what access others will have to this new class that we're creating.
*
* Classes can be organized into logical groupings which are called packages.
*
* You declare a package name in the class using the package statement.
*
* If you don't declare a package, the class implicitly belongs to the default package.
*
* A class is said to be a top-level class if it is defined in the source code file
*
* and not enclosed in the code block of another class, type, or method.
*
* A top-level class has only two valid access modifier options: public or none.
*
* The word public gives unrestricted access to a class.
*
* When there is no modifier specified at all, Java, by default, implicitly allows package-private access.
*
* This means that classes grouped into the same package can access the class.
* */


/*
* An access modifier at the member level allows granular control over class members.
*
* Access Keyword :- public
* Description :- public means any other class in any package can access this class.
*
* Access Keyword :- protected
* Description :- protected allows classes in the same package, and any subclass in other packages to have access to the member
*
* Access Keyword :- None ( No access keyword specified)
* Description :- When the modifier is omitted, this has special meaning, called package access, meaning the member is accessible only to classes in the same package
*
* Access Keyword :- private
* Description :- private means that no other class can access this member
*
* */

// @quiz (INTERVIEW) What is the difference between an abstract class and an interface in Java?
// @answer An abstract class can have constructors, instance fields, concrete methods, and abstract methods, so it is useful for sharing common state and behavior in a base class.
// @answer An interface represents a contract or capability. It has no constructors and no instance state for objects, though Java 8+ allows default and static methods.
// @answer A class can extend only ONE abstract class, but it can implement MULTIPLE interfaces.
// @answer Use an abstract class when related classes share core implementation or state. Use an interface when you want unrelated classes to promise the same behavior, such as Comparable or Runnable.

// @quiz (INTERVIEW) What are the three common uses of the final keyword in Java?
// @answer A final variable can be assigned only once after initialization, so its reference or primitive value cannot be reassigned.
// @answer A final method cannot be overridden by subclasses.
// @answer A final class cannot be extended, which is why classes like String and Integer cannot be subclassed.

// @quiz (INTERVIEW) What is the order of Java access modifiers from most restrictive to least restrictive?
// @answer Order: private, default (package-private), protected, public.
// @answer private means only inside the same class.
// @answer default means only classes in the same package.
// @answer protected means same package plus subclasses in other packages.
// @answer public means accessible from everywhere.

// @quiz (INTERVIEW) What is the difference between this and super in Java?
// @answer this refers to the current object and is used to access current class fields, methods, or another constructor in the same class through this().
// @answer super refers to the parent-class part of the current object and is used to call the parent constructor with super() or access overridden parent methods and hidden parent fields.
// @answer this resolves current-object context, while super explicitly moves one level up the inheritance chain.

// @quiz (INTERVIEW) What is polymorphism in Java, and what is the difference between compile-time and runtime polymorphism?
// @answer Compile-time polymorphism usually means method overloading, where the compiler decides which overloaded method signature matches the arguments.
// @answer Runtime polymorphism usually means method overriding, where the JVM decides at runtime which overridden method to call based on the ACTUAL object type, not the reference type.
// @answer Example: Animal a = new Dog(); a.sound(); calls Dog.sound() if sound() is overridden in Dog. This is dynamic dispatch.

// @quiz (INTERVIEW) When a constructor parameter has the same name as an instance field, what does this.field = field mean?
// @answer The bare name field is the parameter, while this.field is the current object's instance field; the assignment stores the caller's argument in the object.
// @quiz (OCJP) How does Java choose between overloaded methods or constructors that take parameters?
// @answer Java matches the argument list at compile time by number, compatible types, and order, so passing arguments in the wrong order can call a different overload or fail to compile.

// @quiz (INTERVIEW, EASY) What are the four pillars of Object-Oriented Programming?
// @option Encapsulation, inheritance, polymorphism and abstraction. [correct]
// @option Classes, objects, methods and fields.
// @option Compilation, interpretation, bytecode and the JVM.
// @option Overloading, overriding, hiding and shadowing.
// @explain The four pillars describe the design principles of OOP. Classes, objects, methods and fields are the building blocks you use to apply them, not the pillars themselves.
// @why B: those are the basic building blocks of a class, not the four design pillars.
// @why C: those belong to how Java code is built and run, not to OOP design.
// @why D: those are features of how methods and fields behave, not the pillars.

// @quiz (INTERVIEW, EASY) What are the members of a class?
// @option Its fields, which hold data, and its methods, which define behaviour. [correct]
// @option Only its methods.
// @option Only the objects created from it.
// @option The packages it belongs to.
// @explain A class describes the data it holds and what it can do. Fields store the state, methods provide the behaviour, and together they are called class members.
// @why B: methods are only half of it. The fields that hold the state are members too.
// @why C: objects are instances of the class, not members of it.
// @why D: a package groups related classes. It is not a member of a class.

// @quiz (INTERVIEW, MEDIUM) How does a static field differ from an instance field?
// @option A static field has one copy shared by the whole class, while an instance field has one copy per object. [correct]
// @option A static field has one copy per object, and an instance field is shared.
// @option Both have one copy per object.
// @option A static field cannot be read outside its own class.
// @explain Static means it belongs to the class itself, so every object sees the same value. Instance fields belong to the object, so different objects can hold different values at the same time.
// @why B: this is the reverse. Static is the shared one.
// @why C: instance fields are per object, but a static field is not.
// @why D: visibility is controlled by the access modifier, such as public or private, not by static.

// @quiz (INTERVIEW, MEDIUM) Why can a static method not use instance data?
// @option Because a static method belongs to the class and may run when no object exists, so there is no instance state to read. [correct]
// @option Because static methods run before the class is loaded.
// @option Because instance fields are private by definition.
// @option Because static methods are always private.
// @explain A static method is called on the class, so it has no object to take state from. That is why it cannot reference instance fields directly, while an instance method can use both static and instance data.
// @why B: the class must be loaded before anything in it runs, including static methods.
// @why C: instance fields can have any access modifier.
// @why D: a static method can be public, and the restriction on instance data applies either way.

// @quiz (OCJP, MEDIUM) What access modifiers may a top-level class have?
// @option Only public or none, where none means package-private access. [correct]
// @option public, protected or private, just like a field.
// @option Any access modifier at all.
// @option private only, because a class is used by its own file.
// @explain A top-level class can be public or package-private. protected and private describe access relative to a class, so they make sense for members, not for the top-level class itself.
// @why B: protected and private are valid for members, not for a top-level class.
// @why C: only two options apply to a top-level class.
// @why D: a private top-level class would be unreachable, and Java does not allow it.

// @quiz (INTERVIEW, MEDIUM) Two classes are declared in the same package. One is public, and the other has no access modifier. Which is true?
// @option The class with no modifier is package-private, so other classes in the same package can use it, but classes in other packages cannot. [correct]
// @option The class with no modifier is public by default.
// @option The class with no modifier can only be used inside its own file.
// @option The class with no modifier cannot be instantiated at all.
// @explain Leaving the modifier off gives package-private access. That is more open than private and narrower than public: everything inside the package can see it, and nothing outside can.
// @why B: public has to be written. The default is package-private, not public.
// @why C: package-private covers the whole package, and other classes in the same package can use it.
// @why D: it can be instantiated by anything in the same package.

// @quiz (OCJP, MEDIUM) Does this class compile?
// @code class Holder {
// @code     int value = 5;
// @code     static void show() {
// @code         System.out.println(value);
// @code     }
// @code }
// @option No. A static method has no object to read an instance field from. [correct]
// @option Yes, and it prints 5.
// @option Yes, and it prints 0.
// @option Yes, because value is initialised when the class is loaded.
// @explain An instance field belongs to an object, and a static method can run with no object in existence. The compiler therefore refuses the reference, which is why static methods cannot use instance data.
// @why B: the compiler rejects it, so nothing is printed.
// @why C: the field is not zero. The problem is that there is no object at all.
// @why D: instance fields are created with the object, not when the class is loaded.

// @quiz (INTERVIEW, MEDIUM) A subclass inherits from a parent. Which members does it inherit?
// @option The accessible members, which means public and protected ones, and package-private ones when the packages match. [correct]
// @option Every member, including private ones.
// @option Only the private members.
// @option Only the members declared static.
// @explain Inheriting a member means the subclass can use it. private members are not inherited, because they belong to the parent alone. public and protected members are, and package-private members are inherited when both classes share a package.
// @why B: private members are excluded. A subclass cannot see or override them.
// @why C: private members are exactly the ones that are not inherited.
// @why D: static members may be inherited, but they are not the only kind.

// @quiz (INTERVIEW, MEDIUM) What is a class member in Java?
// @option A field or a method declared inside the class, together with other elements such as nested types. [correct]
// @option Only the methods of a class.
// @option Only the objects created from the class.
// @option The package that contains the class.
// @explain Members are the things a class declares: fields that hold state and methods that provide behaviour, along with nested types and initialisers. The objects created from the class are instances, not members.
// @why B: methods are members, but the fields are members too.
// @why C: objects are instances of the class, not members of it.
// @why D: a package groups classes. It is not a member of any one class.

// The four pillars, one line each :-
// - Encapsulation: keep the fields private and let the outside world change them only through methods you control. This is the reason getters and setters exist.
// - Inheritance: a child class reuses a parent's fields and methods with `extends`. It models an IS-A relationship, so a Dog IS-A Animal.
// - Polymorphism: one reference type can hold different object types, and which version of a method runs depends on the actual object rather than on the reference.
// - Abstraction: show what something does and hide how it does it, which is what an abstract class or an interface lets you write.

// Static against instance, shown side by side :-
// class Counter {
//     static int shared = 0;      // ONE copy for the whole class
//     int mine = 0;               // one copy in every object
//
//     void tick() { shared++; mine++; }
//
//     static void resetShared() { shared = 0; }   // fine, shared belongs to the class
//     static void bad() { mine = 0; }   // Compile Error :- mine is not static
// }
// Counter a = new Counter();
// Counter b = new Counter();
// a.tick(); a.tick(); b.tick();
// System.out.println(Counter.shared);           // prints 3, all three ticks landed on the one shared copy
// System.out.println(a.mine + " " + b.mine);    // prints 2 1, each object kept its own count
// Note :- the compile error inside bad() is the whole reason a static method cannot touch instance fields. When resetShared runs there may be no object in existence for `mine` to belong to.

 // @takeaway A class is a template listing fields and methods; an object is a copy of it, and the copy holds the values.
 // @takeaway `static` is one copy shared by the class; an instance member is one copy per object.
 // @takeaway A static method has no object, so it cannot read or change instance fields, and the compiler refuses it.
 // @takeaway `extends` reuses a parent's fields and methods, and models IS-A: a Dog IS-A Animal.
 // @takeaway `private` is the class, nothing written means package, `protected` adds subclasses, `public` is everyone.
 // @gotcha `extends` does not copy constructors, so the child must call `super(...)`, and it is compulsory when the parent has no no-arg constructor.
 // @gotcha A `private` field is invisible to a child class even though it inherits it, so it has to go through the parent's methods.
 // @gotcha A top-level class can be `public` or have no modifier; `protected` and `private` are not valid on it.
 // @gotcha A static method called through an object reference works the same, which makes it look like an instance method.


// @quiz (OCJP, MEDIUM) What is printed by this program?
// @code public class Main {
// @code     static int field;
// @code     public static void main(String[] args) {
// @code         int local;
// @code         System.out.println(field);
// @code         System.out.println(local);
// @code     }
// @code }
// @option It does not compile, because the local variable local is read before it is assigned. [correct]
// @option It prints 0 and 0.
// @option It prints 0 and then throws a NullPointerException.
// @option It prints 0 and then a leftover value from memory.
// @explain A field gets a default of 0, but a local variable gets none, so reading local is a compile error.
// @why B: only the field gets a default of 0. The local has no value at all, so this never compiles.
// @why C: no object is involved here, so a NullPointerException cannot happen.
// @why D: Java never exposes uninitialised memory, so there is no leftover value to print.

// @quiz (OCJP, MEDIUM) What is printed by this program?
// @code String a = new String("java");
// @code String b = new String("java");
// @code System.out.println(a == b);
// @code System.out.println(a.equals(b));
// @option false, then true. [correct]
// @option true, then true.
// @option true, then false.
// @option false, then false.
// @explain == asks whether the references point at one object; they do not. equals compares content, so true.
// @why B: == is true only when both names point at one object, which two new expressions never produce.
// @why C: this is the reverse of what happens. The references differ and the contents match.
// @why D: equals is true here, because String compares the characters rather than the identity.

// @quiz (OCJP, MEDIUM) Does this code compile?
// @code class Parent {
// @code     private int secret = 7;
// @code }
// @code class Child extends Parent {
// @code     int read() { return secret; }
// @code }
// @option No. A private field is not visible in the subclass, so secret cannot be found there. [correct]
// @option Yes, and read() returns 7.
// @option Yes, but read() returns 0 because the field is hidden.
// @option No, because a class may not extend a class that has private fields.
// @explain private means the declaring class only, so secret is not visible in Child and cannot be found.
// @why B: the compiler rejects the reference, so the method never runs.
// @why C: the field holds 7, not 0, and in any case the name is not visible in Child.
// @why D: extending a class that has private fields is normal. The parent exposes them via its methods.

// @quiz (OCJP, HARD) Does this code compile?
// @code class Parent {
// @code     Parent(int n) { System.out.println("Parent " + n); }
// @code }
// @code class Child extends Parent {
// @code     Child() { System.out.println("Child"); }
// @code }
// @option No. Child never calls super(int), and the parent has no no-argument constructor. [correct]
// @option Yes, because Child's constructor belongs to Child only.
// @option Yes, and it prints Parent 0 and then Child.
// @option No, because a class may only declare one constructor.
// @explain Constructors are not inherited, so the inserted super() finds no no-argument parent constructor.
// @why B: access has nothing to do with it. The missing no-argument parent constructor is the problem.
// @why C: nothing is printed, because the compiler rejects the class before it can run.
// @why D: a class may declare as many constructors as it likes, as long as their parameter lists differ.

// @quiz (OCJP, MEDIUM) Does this code compile?
// @code protected class Helper {
// @code     int size = 3;
// @code }
// @option No. A top-level class may only be public or have no modifier, so protected is rejected. [correct]
// @option Yes, and Helper is visible to subclasses in other packages.
// @option Yes, because protected is the default for a class.
// @option No, because a top-level class must always be public.
// @explain protected is relative to an enclosing class. A top-level class has none, so use public or none.
// @why B: protected does mean that for a member, but it cannot be written on a top-level class at all.
// @why C: the default is package-private, written by leaving the modifier off, not by protected.
// @why D: public is allowed but not required. A class with no modifier is also valid.

// The rules above, shown in code :-
//
// class Counter {
//     static int total = 0;          // ONE copy for the whole class, shared by every object
//     int own = 0;                   // one copy per object
//
//     static void bump() {
//         total++;                   // allowed: a static method may touch static state
//         // own++;                  // compile error: no object, so no instance field
//     }
// }
//
// class Helper { }                   // no modifier: package-private, visible in this package only


public class ClassesAndInheritance {



}
