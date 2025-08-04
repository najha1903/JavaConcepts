package Chapter_14_OOPSConcepts.Sub_Chapter_1_Classes_And_Inheritance;

/*
*  Main-oriented programming is a wa to model real world objects as software objects which contain both data and code
*
*  OOP is sometimes called class-based programming. Class-based programming starts with classes which, become the blueprints for objects
*
*  Modelling real-world objects, as software objects is a fundamental part of Main-Oriented Programming.
*
* A software object stores its state in fields, which can also be called variables or attributes.
*
* Objects expose their behavior with methods/
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

public class ClassesAndInheritance {



}
