package Chapter_13_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_3_Constructor_Good_Practices.Super_Call_Example;

/*
* The 1st constructor is calling the 2nd constructor.
* The 2nd constructor calls the parent constructor with parameters x and y.
* The parent constructor will initialize the x and y variables, while the 2nd Rectangle constructor
* will initialize the width and height variables. Here, as you can see in this code,
* Both the super() and this() calls are made, but in different constructors.
*
* */
// PARENT CONSTRUCTOR CALL — Rules for calling the parent constructor from a child class:
// If the parent class has no parameterised constructor, the child class doesn't need to call the parent constructor, because Java inserts the super() call automatically.
// If the parent class has 1 parameterised constructor, then the child class has to call the same parameterised constructor using super, otherwise the code will not compile.
// If the parent class has multiple parameterised constructors, then the child class has to call any of those parameterised constructors, whichever matches the arguments passed inside super().
// Important :- the parent constructor is always called, either implicitly by the compiler or explicitly through super(), and the super() call has to be the first statement in the child constructor.
// Pitfall :- if the parent class has no accessible no - args constructor, and a child constructor has no super() call, the compiler throws an error, for example "constructor GoodConstructorSuperCallExample in class GoodConstructorSuperCallExample cannot be applied to given types".
// Note :- a constructor can have a call to this() or super(), but never both, because both of these calls have to be the first statement, and only 1 statement can be first in a constructor body.
// Note :- if the only constructor of the parent class is private, the child class cannot call it at all.
/*
* The parent class in this example has 1 parameterised constructor, which accepts x and y.
* As a parameterised constructor has been declared explicitly in the parent class, the implicit no - args
* constructor is not created for the parent class by Java.
* So, the child class cannot depend on the implicit super() call, and the child constructor has to call the
* parameterised constructor of the parent class using super(x, y), passing arguments that match it.
* The 2 argument constructor of the child class doesn't call super() on its own. It calls this(x, y, 0, 0),
* and the 4 argument constructor then performs the super(x, y) call, so the parent constructor is still
* called, with the help of constructor chaining.
* If the parent class had multiple parameterised constructors, the child class could call any one of them,
* whichever matches the arguments passed inside super().
* And if the parent class had no parameterised constructor, the child class wouldn't need to call the parent
* constructor at all, since Java would handle it using the implicit super() call.
* */

// WHY THE CHILD HAS TO CALL THE PARENT CONSTRUCTOR — The free no - args constructor rule:
// Java creates the free no - args constructor for a class only when that class declares no constructor at all.
// So if the parent class declares even 1 parameterised constructor, the parent class has no no - args constructor.
// Because of that, the implicit super() call, which Java inserts at the start of a child constructor, has nothing to call, and the code will not compile.
// That is why the child constructor has to explicitly call one of the parameterised constructors of the parent class, using super(args...), with arguments that match it.
/*
* Whenever a child class object is created, the parent class part has to be built first, and Java does it
* automatically, by inserting a super() call with empty parentheses at the start of the child constructor.
* In this example, the parent class GoodConstructorSuperCallExample has only 1 parameterised constructor,
* which accepts x and y, so the free no - args constructor is not created for the parent class.
* So the implicit super() call fails, because there is no constructor in the parent class which takes no
* arguments, and the compiler throws an error like this :-
* constructor GoodConstructorSuperCallExample in class GoodConstructorSuperCallExample cannot be applied to given types; required: int,int; found: no arguments
*
* To fix this, the child constructor tells Java which constructor of the parent class to use, by calling
* super(x, y), which matches GoodConstructorSuperCallExample(int x, int y).
* If the fields of the parent class are private, as x and y are here, the child class cannot set them
* directly, and super(...) is the only way to initialize them.
*
* Note :- the super() call has to be the first statement in the child constructor.
*
* Note :- Why does this call have to be the first statement ? Because the parent class part of the object has
* to be completely initialized before any statement of the child constructor runs. If statements of the child
* constructor were allowed to run first, they could read inherited fields, or call inherited methods, on an
* object which is not initialized yet, and the object would be in a half built state.
* Note :- for this(), the reason is the same. The constructor called by this() has to finish its work first,
* so that all the fields are initialized before the remaining statements of the current constructor run.
*
* Note :- this() and super() cannot be used together in the same constructor, because both of them have to be
* the first statement, and a constructor body can have only 1 first statement. So Java would have no way to
* decide which of the two constructors has to be called first.
* If either call is written after another statement, the compiler throws an error like :-
* call to this must be first statement in constructor
* call to super must be first statement in constructor
*
* Note :- every constructor of the child class needs this call, either directly through super(args...), or
* through this(args...) chaining to a constructor which performs the super() call.
*
* Note :- Why is this needed when 1 constructor is already calling the parent constructor ? Because creating
* an object runs only 1 constructor of the child class, the one which matches the arguments passed with new.
* The other constructors do not run at all, so they cannot do the work on behalf of the constructor which is
* called. That is why each constructor has to reach a super() call on its own, either directly through
* super(args...), or through this(args...) chaining, and exactly 1 super() call happens for each object created.
*
* Note :- if the parent class had no constructor declared at all, Java would have created the no - args
* constructor for it, and the child class would not need to call the parent constructor explicitly.
* */

// @quiz (INTERVIEW) What do the x and y arguments passed to super(x, y) represent?
// @answer They are position coordinates forwarded to the parent constructor so the parent fields can be initialized.
// @quiz (INTERVIEW TRAP) Why is swapping width and height easy to miss in this example?
// @answer Both parameters are ints, so swapped values still compile but store the wrong dimensions.
// @quiz (OCJP) Where must super(x, y) appear in the child constructor?
// @answer It must be the first statement in the constructor body before child-field assignments.

public class GoodConstructorSuperCallExample {

    private int x;
    private int y;

    public GoodConstructorSuperCallExample(int x, int y){
        this.x = x;
        this.y = y;
    }

}

class AnotherGoodConstructorSuperCallExample extends GoodConstructorSuperCallExample {

    private int width;
    private int height;

    public AnotherGoodConstructorSuperCallExample(int x, int y){
        this(x,y,0,0);
    }

    public AnotherGoodConstructorSuperCallExample(int x, int y, int width, int height){
        super(x,y);
        this.width = width;
        this.height = height;
    }
}
