package Chapter_15_Composition.Sub_Chapter_2_Inheritence_Vs_Composition;

/*
*  Inheritence is a way to reuse functionality and attributes
*
*  Composition is a way to make the combination of classes act like a single coherent object
* */

// @quiz (INTERVIEW, MEDIUM) How is inheritance described in these notes?
// @option Inheritance is a way to reuse functionality and attributes from a parent class. [correct]
// @option Inheritance is a way to make several objects act as one.
// @option Inheritance means copying the source code of one class into another.
// @option Inheritance is only possible between classes in the same package.
// @explain Inheritance lets a subclass reuse what the parent already defines, and then add to it or change it. It is reuse through a parent-child relationship, not copying.
// @why B: making a combination of classes act as one coherent object is the description of composition.
// @why C: the subclass reuses the parent's definition. Nothing is copied into the file.
// @why D: a subclass may extend a class from another package, provided the class is visible.

// @quiz (INTERVIEW, MEDIUM) How is composition described in these notes?
// @option Composition is a way to make a combination of classes act like a single coherent object. [correct]
// @option Composition is a way to reuse attributes through a parent-child hierarchy.
// @option Composition means one class can have only one field.
// @option Composition is another word for inheritance.
// @explain Composition is about building one thing out of others and presenting the result as a single object. The containing class delegates work to the parts it holds.
// @why B: reusing attributes through a parent-child hierarchy is inheritance.
// @why C: a composed class can hold as many parts as it needs.
// @why D: they are different approaches, which is why this topic compares them.

// @quiz (INTERVIEW, MEDIUM) A PersonalComputer holds a Monitor, a MotherBoard and a ComputerCase as fields. Which relationship is that?
// @option HAS-A, which is composition, because the parts are held inside the whole. [correct]
// @option IS-A, because the parts are all products.
// @option IS-A, because the computer uses the parts.
// @option Neither. Holding a field is not a relationship between classes.
// @explain The computer is built from those objects, so it has them. IS-A describes inheritance, where one class is a kind of another, which is a different relationship.
// @why B: the parts being Products is a separate IS-A relationship, and it is not what the fields express.
// @why C: using a part is still HAS-A. The whole contains it.
// @why D: one object holding another as a field is exactly how composition is expressed.

// @quiz (OCJP, HARD) Why can a Monitor be used in both of these ways?
// @code Product p = new Monitor();          // IS-A
// @code personalComputer.setMonitor(m);    // HAS-A
// @option Because Monitor is a kind of Product and is also able to be held as a part of another object. [correct]
// @option Because Monitor inherits from PersonalComputer.
// @option Because setMonitor converts the Monitor into a Product.
// @option Because composition and inheritance are the same relationship.
// @explain Monitor extends Product, so a Monitor can be used as a Product. At the same time, any object can be stored in a field of a type it is compatible with, which is what makes it a part of the computer.
// @why B: the inheritance runs the other way, from Monitor up to Product.
// @why C: no conversion happens. A Monitor already is a Product.
// @why D: they are different: IS-A is a kind of, HAS-A is made of parts.

// Telling the two apart in one sentence :-
// IS-A   -> inheritance: `class Monitor extends Product` means a Monitor is a kind of Product, so it can be used wherever a Product is expected.
// HAS-A  -> composition: a PersonalComputer holds a Monitor in a field, so a computer is made of parts it owns.
//
// When to reach for which :-
// Choose inheritance when the child really is a more specific version of the parent, and the parent's behaviour belongs to the child unchanged. A Monitor genuinely is a Product.
// Choose composition when one thing is built from others, or when you only want to reuse behaviour without claiming to be a kind of the other type. A computer is not a kind of monitor.
// Note :- inheritance ties the child to the parent's definition, so a change in the parent reaches every subclass. Composition leaves the parts independent, which is why "prefer composition over inheritance" is common advice.
//
// A class can be in both relationships at once :-
// Monitor IS-A Product       (inheritance, through extends)
// PersonalComputer HAS-A Monitor   (composition, through a field)
// Note :- they are not competing choices for a whole program, and this example uses both together.

// Exam practice :-
// @quiz (OCJP, MEDIUM) Which statement about the two relationships is correct?
// @option `extends` creates an IS-A relationship, and holding an object in a field creates a HAS-A relationship. [correct]
// @option `extends` creates a HAS-A relationship, and holding an object in a field creates an IS-A relationship.
// @option Both create an IS-A relationship, and HAS-A needs an interface.
// @option Neither creates a relationship until the code is run.
// @explain The keyword decides the relationship. `class Monitor extends Product` claims a Monitor IS-A Product, so a Monitor can be used wherever a Product is expected. Storing a Monitor in a field of PersonalComputer makes it a part, which is HAS-A.
// @why B: the two are the wrong way round.
// @why C: composition needs no interface. A field is enough, which is what makes it so flexible.
// @why D: relationships between types are fixed when the code compiles, not when it runs.

// @quiz (OCJP, HARD) What is printed by this program?
// @code class Engine {
// @code     String type() { return "petrol"; }
// @code }
// @code class Car {
// @code     private Engine engine = new Engine();
// @code     String describe() { return "car with " + engine.type(); }
// @code }
// @code public class Main {
// @code     public static void main(String[] args) {
// @code         System.out.println(new Car().describe());
// @code     }
// @code }
// @option car with petrol [correct]
// @option It does not compile, because Car does not extend Engine.
// @option It does not compile, because engine is private.
// @option car with null
// @explain Car HAS-A Engine rather than IS-A Engine, so it reaches the engine's behaviour by calling through the field. That call is delegation: Car asks its own Engine to answer. A private field is freely usable inside the class that declares it.
// @why B: extending Engine is one way to reuse it, not a requirement. Composition reuses it through a field.
// @why C: private restricts access from outside the class, and describe() is inside Car.
// @why D: the field is initialised with new Engine(), so it is never null.

// @quiz (OCJP, HARD) A class needs the behaviour of another class but is not a kind of it. Which change is safest?
// @option Hold an instance of that class in a field and call its methods from yours. [correct]
// @option Extend that class with `extends`.
// @option Copy the methods into your class.
// @option Make every method of the other class static.
// @explain Composition reuses behaviour without claiming a relationship that does not exist. Extending a class you are not a kind of misleads every reader, and it also ties your class to the parent's implementation, so a change in the parent can break you.
// @why B: extending asserts an IS-A relationship. Using it only to borrow code is the mistake the advice about composition is warning against.
// @why C: copying the methods duplicates logic, so a fix has to be made in more than one place.
// @why D: making methods static removes them from the object and prevents the other class from being replaced or tested separately.

// @quiz (OCJP, MEDIUM) Which of these is a HAS-A relationship?
// @option A Library that keeps a list of Book objects. [correct]
// @option A Novel that extends Book.
// @option A Book that implements Printable.
// @option A Book whose class is declared final.
// @explain Holding Book objects inside Library is composition, so a Library HAS-A collection of Books. Extending a class is IS-A, and implementing an interface is a can-do relationship.
// @why B: Novel IS-A Book, which is inheritance.
// @why C: implementing an interface is not a HAS-A relationship. It is a promise to provide the interface's methods.
// @why D: final prevents subclassing. It says nothing about composition.


public class InheritenceVsComposition {
}
