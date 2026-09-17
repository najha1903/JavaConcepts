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

public class InheritenceVsComposition {
}
