package Chapter_14_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_2_This_And_Super;
// 'this' and 'super' are two special Java keywords that refer to objects in the class hierarchy.
// 'this' refers to the CURRENT object — the instance the method/constructor is currently executing in.
// 'super' refers to the PARENT class (superclass) of the current class.
// 'this.fieldName' — accesses an instance field on the current object. Needed when a parameter shadows a field (same name).
// 'super.methodName()' — calls the parent class's version of a method (used in method overriding).
// 'this()' — calls another constructor in the SAME class. Must be the FIRST statement in the constructor. Used for constructor chaining.
// 'super()' — calls the parent class constructor. Must be the FIRST statement in the constructor. Java inserts a no-arg super() call automatically if you don't write one.
// You can use EITHER this() OR super() in a constructor, but NEVER BOTH — each must be the first statement, and there can only be one first statement.
// Neither this() nor super() can be used inside static methods — they require an object instance.
/*
* super keyword :-
*
* 1) The keyword super is used to access or call the parent class members (both variables and methods).
*
* this keyword :-
*
* 1) The keyword this, is used to call the current class members (both variables and methods).
* 2) this keyword is required when we have a parameter with the same name as an instance variable or field.
*
* NOTE: Both the keywords can be used anywhere in a class except for static elements such as a static method.
* Any attempt to do so will lead to compile time errors.
*
* this() method call :-
*
* 1) this() parentheses is used to call a constructor from another overloaded constructor in the same class.
* 2) The call to this() parentheses can only be used in a constructor, and it must be the first statement in a constructor.
* 3) It's used with constructor chaining, in other words, when one constructor calls another constructor, and it helps to reduce duplicated code.
*
* super() method call :-
*
* 1) The only way to call a parent constructor is by calling super() parentheses, which calls the parent constructor.
* 2) The Java compiler puts a default call to super() parentheses if we don't add it, and it's always a call to the no argument constructor, which is inserted by the compiler.
*    In other words, a call to the constructor that hasn't got any arguments.
* 3) The call to super() parentheses must be the first statement in each constructor.
*
* Note :- 1) this() and super() keyword are known as calls, since they look like regular method calls, although they are used to call constructors
*         2) A constructor can have a call to super() or this(), but never both
* */
public class ThisAndSuper {
}
