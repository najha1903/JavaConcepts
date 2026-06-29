package Chapter_14_OOPSConcepts.Sub_Chapter_1_Classes_And_Inheritance;
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

public class ClassesAndInheritance {



}
