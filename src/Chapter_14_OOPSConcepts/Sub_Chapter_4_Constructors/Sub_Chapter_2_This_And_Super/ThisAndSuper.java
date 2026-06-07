package Chapter_14_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_2_This_And_Super;

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
