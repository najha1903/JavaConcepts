package Chapter_10_Class_Object_Static_And_Instance_Fields.Sub_Chapter_2_Create_Field_On_Classes;
// @quiz (INTERVIEW) Why does new CreateFieldOnClasses() not need constructor arguments in this file?
// @answer The class defines no parameterized constructor, so the default no-argument constructor is used and field initializers supply the values.
//
// Java classes have two types of fields (variables declared at the class level, outside any method):
// STATIC FIELDS: declared with 'static'. There is exactly ONE copy in memory, shared by ALL objects of that class. Accessed via ClassName.fieldName.
// INSTANCE FIELDS: declared without 'static'. Each object gets its OWN separate copy. Accessed via objectVariable.fieldName.
// The same distinction applies to methods: static methods belong to the class; instance methods belong to individual objects.
// Static field example: Integer.MAX_VALUE — you access this without creating an Integer object.
// Instance field example: String greet = "hello"; greet.toUpperCase() — you call toUpperCase() on the specific greet object.
// Rule: a static method CANNOT directly access instance (non-static) fields or call instance methods — because static methods run without an object, so there is no 'this' to refer to.
// Instance methods CAN access both static and instance fields/methods freely.
/*
*   There are 2 ways to create fields on classes.
*
*   1) With static keyword
*
*   2) Without static keyword
*
*   Static  Field :-
*
*  i) Requires 'static' keyword when declared on the class
*
*  ii) It is used for value of the field that aren't changing constantly and remains constant.
*      It is stored in special memory location and only in one place.
*      Value of the field always stays with the class
*
*
*  iii) Value is accessed by ClassName.fieldname
*     Ex :- Integer.MAX_VALUE
*
*  Instance Field :-
*
*   i) Omits 'static' keyword when declared on the class
*
*   ii) Value of the field is not allocated any memory and has no value until the object is created.
*       The instance fields can have different values for every instance created.
*
*   iii) Value is accessed by ObjectVariable.fieldname
*     Ex :- myObject.myFieldName
*     (myObject is a variable name for the object created and myFieldName is an attribute on the class)
*
*   Static Method :-
*
*    i) Requires 'static' keyword when declared on the class
*
*    ii) Method is accessible by ClassName.methodName
*
*    Example :- Integer.parseInt("123"); // A method called parseInt is called directly from the Class, Integer
*
*     Instance Method
*
*     i) Omits 'static' keyword when declared on the class
*
*     ii) Method is accessed by ObjectVariable.methodName
*
*     Example :- String greet = "hello";
*
*     System.out.println(greet.toUpperCase()); // A method called toUpperCase is called on the instance of String with value "hello"
*
*
* */

// Exam practice :-
// @quiz (OCJP, MEDIUM) What is printed by this program?
// @code public class Counter {
// @code     static int total = 0;
// @code     int mine = 0;
// @code     void tick() { total++; mine++; }
// @code     public static void main(String[] args) {
// @code         Counter a = new Counter();
// @code         Counter b = new Counter();
// @code         a.tick(); a.tick(); b.tick();
// @code         System.out.println(total + " " + a.mine + " " + b.mine);
// @code     }
// @code }
// @option 3 2 1 [correct]
// @option 3 3 3
// @option 1 2 1
// @option 3 1 1
// @explain `total` is static, so there is one copy for the whole class and all three tick calls land on it, giving 3. `mine` is an instance field, so each object keeps its own count: a was ticked twice and b once.
// @why B: only a static field is shared. An instance field belongs to one object.
// @why C: the static field is written three times, not once.
// @why D: a was ticked twice, so its own field reaches 2.

// @quiz (OCJP, HARD) Which line does NOT compile?
// @code public class Demo {
// @code     int value = 5;
// @code     static void show() {
// @code         System.out.println(value);
// @code     }
// @code }
// @option The `System.out.println(value);` line, because a static method cannot read an instance field. [correct]
// @option The `int value = 5;` line, because a field cannot be initialised.
// @option The `static void show()` line, because a static method must return a value.
// @option Nothing. The class compiles and prints 5.
// @explain A static method runs without any object, so there may be no `value` for it to read. The compiler refuses the reference rather than leaving it to fail later. Writing `static int value = 5;` or making show() non-static would both compile.
// @why B: fields are initialised exactly like that.
// @why C: `void` is a valid return type for a static method.
// @why D: the reference is rejected while compiling, so the program never runs.

// @quiz (OCJP, MEDIUM) What is printed here?
// @code public class Shadow {
// @code     int count = 1;
// @code     void setCount(int count) { this.count = count; }
// @code     public static void main(String[] args) {
// @code         Shadow s = new Shadow();
// @code         s.setCount(9);
// @code         System.out.println(s.count);
// @code     }
// @code }
// @option 9 [correct]
// @option 1
// @option 0
// @option It does not compile, because count cannot be passed.
// @explain The parameter `count` hides the field `count`, so `this.count` is needed to reach the field. Without `this`, the assignment would give the parameter its own value and the field would stay 1.
// @why B: 1 is what the field holds before the call. The call changes it.
// @why C: the field is initialised to 1, not left at its default.
// @why D: a parameter may share a field's name. `this` is how the two are told apart.

// @quiz (OCJP, MEDIUM) Which statement about a static field is correct?
// @option It is created once when the class is first loaded, and every object of the class sees that one value. [correct]
// @option It is created once for each object, so each object has its own.
// @option It cannot be changed after it is given a value.
// @option It can only be used inside a static method.
// @explain A static field belongs to the class rather than to any object, so it is created once and shared. Being shared is exactly why it suits a counter or a constant, and why one object changing it affects every other.
// @why B: that describes an instance field. A static field is shared.
// @why C: a static field can be reassigned unless it is also declared final.
// @why D: an instance method can read and change a static field freely.


public class CreateFieldOnClasses {

    static String name = "Navneet" ;

    String hello = "Hello";

    public static void main(String[] args) {

        CreateFieldOnClasses createFieldOnClasses = new CreateFieldOnClasses();

        // createFieldOnClass.hello is an example of instance field

        // CreateFieldOnClasses.name is an example of static field
        System.out.println(createFieldOnClasses.hello + " " + CreateFieldOnClasses.name);
    }
}
