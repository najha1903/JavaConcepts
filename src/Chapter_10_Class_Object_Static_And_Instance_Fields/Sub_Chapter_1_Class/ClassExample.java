package Chapter_10_Class_Object_Static_And_Instance_Fields.Sub_Chapter_1_Class;
// @quiz (INTERVIEW, EASY) What is the difference between a class and an object?
// @option A class is a blueprint that defines fields and methods, and an object is an instance created from that blueprint. [correct]
// @option A class is an instance of an object.
// @option A class can only ever be used to create one object.
// @option An object is a copy of the class file stored on disk.
// @explain The class describes the data and behaviour; the object is the real thing in memory, created from that description. There is no limit on how many objects one class can produce.
// @why B: the relationship is the other way round. An object is an instance of a class.
// @why C: a single class can create any number of objects, each with its own values.
// @why D: an object is created in memory at runtime by the new keyword. It is not a copy of the source file.
// @answer A class is a blueprint that defines fields and methods, and an object is an instance created from it.

// @quiz (INTERVIEW, EASY) How is an object created from a class?
// @option By using the new keyword, as in ClassName obj = new ClassName(); [correct]
// @option By declaring a variable of the class type on its own.
// @option By writing the class name with no keyword in front of it.
// @option Objects are created automatically when the source file is compiled.
// @explain new performs the class instance creation expression. It allocates the object and gives you a reference to it. Declaring the variable only reserves a name; no object exists until new runs.
// @why B: a declaration such as ClassName obj; creates a reference that is still null, not an object.
// @why C: writing the class name alone is not valid syntax for creating an object.
// @why D: compilation produces bytecode. Objects exist only while the program runs.

// @quiz (INTERVIEW, MEDIUM) How do instance fields behave across several objects of the same class?
// @option Each object gets its own copy of the instance fields, so the values can differ between objects. [correct]
// @option All objects share one copy of each instance field.
// @option Instance fields are shared between objects, and static fields are per object.
// @option Instance fields cannot hold different values in different objects at the same time.
// @explain An instance field belongs to the object. Two Car objects can have different colours at the same time, because each holds its own copy.
// @why B: that describes a static field, not an instance field.
// @why C: this is reversed. Static fields are the shared ones.
// @why D: holding different values per object is exactly what instance fields are for.

// @quiz (INTERVIEW, MEDIUM) What is the difference between a static field and an instance field?
// @option A static field belongs to the class and is shared by all objects, while an instance field belongs to each object. [correct]
// @option A static field is created once for every object.
// @option An instance field is accessed through the class name.
// @option A static field cannot be changed after it is set.
// @explain A static field has one value for the whole class, so every object sees the same value. An instance field gives each object its own storage.
// @why B: static means one per class, not one per object.
// @why C: an instance field is reached through an object reference, as in myCar.colour. ClassName.field is the static style.
// @why D: a static field can be changed unless it is also declared final.

// @quiz (INTERVIEW TRAP, HARD) How do System.out.println(null) and calling a method on a null String differ?
// @option println prints the text "null", while calling an instance method on a null reference throws NullPointerException. [correct]
// @option Both throw NullPointerException.
// @option Both handle null safely and print "null".
// @option println(null) does not compile.
// @explain println is built to accept a null argument and prints the word null. The danger is elsewhere: any instance method called on a null reference fails, because there is no object to run it on.
// @why B: println(null) is safe. Only the method call fails.
// @why C: the method call does not survive a null reference.
// @why D: println(null) compiles and prints the text null.

// @quiz (INTERVIEW, MEDIUM) How does new String("Hello") differ from writing the literal "Hello"?
// @option new String("Hello") creates a distinct String object, while the literal "Hello" is reused from the String pool. [correct]
// @option Both always produce the same object in memory.
// @option new String("Hello") returns the pooled literal for you.
// @option The literal creates a new object every time it appears in the code.
// @explain new always allocates a fresh object. A literal is looked up in the String pool and reused, which is why two identical literals usually share one object.
// @why B: they are different objects, which is why == can be false for two equal Strings.
// @why C: if it returned the pooled literal, new would be pointless.
// @why D: literals are pooled and reused, not recreated each time.

// @answer In new String("Hello"), the "Hello" argument provides the initial characters for a brand new String object.

// Parameter notes (what each argument means and how to choose it):
// - main(String[] args): args receives command-line words passed after the class name; choose values only when the program needs startup input.
// - new String("Hello"): the constructor argument is the initial character content; prefer a string literal unless you specifically need a distinct String object.
// - System.out.println(value): the parameter is the value to display; choose any expression you want converted to text and printed with a newline.
// - Important pitfall: passing null to println is safe and prints "null", but many String constructors or methods may reject null.
//
// @quiz (INTERVIEW) In new String("Hello"), what does the "Hello" parameter provide?
// @answer It provides the initial characters for the new String object; in normal code, prefer the literal "Hello" unless a separate object is deliberately needed.
//
// @quiz (OCJP) What does the args parameter in public static void main(String[] args) contain?
// @answer It contains command-line arguments passed to the Java program, in order, as Strings.
//
// @quiz (INTERVIEW TRAP) Is System.out.println(null) the same risk as calling a method on a null String reference?
// @answer No. println can print null as the text "null", but calling an instance method on a null reference throws NullPointerException.
// A CLASS is the most fundamental building block of Object-Oriented Programming (OOP) in Java.
// A class is a blueprint or template that defines: (1) what data (fields/attributes) an object will hold, and (2) what behaviour (methods) it will have.
// Think of a class like a blank form template — it defines what fields exist. An OBJECT is a filled-in copy of that form.
// Creating an object from a class is called instantiation. Each object is an instance of its class.
// A class can describe a real-world concept: a Car class has fields like colour, make, model; a Person class has name, age, etc.
// Objects are created using the 'new' keyword: ClassName obj = new ClassName();
// Each object has its own copy of the class's instance fields, so different objects can have different values.
// There is no limit on how many objects you can create from a single class.
/*
*   A class can be described as :-
*
*   1) A custom data type --> For Ex :- String
*   2) A special code block that contains methods
*
*
*    A class is like an empty form that gets copied and handed out.
*    For Example :- A form containing fields like Name and Address can be considered as an example of Class
*
*    A class is like an empty form. It describes information or placeholders for data that'll be filled in,
*    when that form is given to a unique individual.
*    The empty form, the class is the template for the data to be collected
*    The class provides a shape or framework that describes the object being created
*
*    The process of copying that empty form and then delivering it to some process or person
*    to fill in the blanks is a loose analogy to what happens when you create an object.
*    Multiple copies of form can be considered as an example of object creation from the class.
*
*    An object, is like the form, once it's been handed out and filled in.
*    If the class has a field for name, then the object will have a value in the name field,
*    which will be unique to the object. If the class has a field for address,
*    then the object will have a value for the address field, and so on.
*
*    The populated form, the object may be completely different each time
*    because of the values used to fill in the data.
*    The data being collected each time is determined by the class or the form, in this analogy.
*
*    An object is called an instance of a particular class.
*    Creation of the object can be called as instantiation or instantiating a class
*    Object and instance can be used interchangeably
*    There is no limit on number of object one can create from a class
*
*    The most common way to create an object is to use the new keyword.
*    The new keyword creates an instance of a class,
*    and you can optionally pass data when creating that instance to set up data on that object.
*
*    The new keyword is used in what Java calls a Class Instance Creation Expression.
*    In its simplest form, it's the word new, followed by class name, and empty parenthesis
*
*    ClassName variableName = new ClassName();
*
*    We can optionally pass arguments in those parentheses, as we saw with methods.
*
*    ClassName variableName = new ClassName(argument1, argument2);
*
*
*
* */

// @quiz (INTERVIEW) What is the difference between a class and an object in Java?
// @answer A class is a blueprint that defines fields and methods, while an object is a real instance created from that blueprint.
// @answer Many objects can be created from one class, each with its own state.

// @quiz (INTERVIEW) What is the difference between static fields and instance fields?
// @answer A static field belongs to the class itself and is shared by all objects of that class.
// @answer An instance field belongs to each object, so every object gets its own copy.

// @quiz (INTERVIEW) What are the default values of instance fields in Java?
// @answer Numeric instance fields default to 0 or 0.0, boolean defaults to false, and reference fields default to null.
// @answer These defaults apply to fields, not to local variables.

// @quiz (INTERVIEW) When would you make a field static?
// @answer Use a static field when the value should be shared across all objects, such as a counter or constant-like class state.
// @answer Do not use static when every object needs its own separate value.

// @quiz (OCJP) What prints here: class Counter { static int c = 0; } Counter a = new Counter(); Counter b = new Counter(); a.c = 5; System.out.println(b.c);?
// @answer It prints 5.
// @answer The field is static, so both references access the same shared class variable.

// @quiz (OCJP) Can a static method directly access an instance field like int age; without an object?
// @answer No. A static method has no current object, so direct access to an instance field causes a compile-time error.
// @answer It must use an object reference or access a static field instead.

public class ClassExample {

    public static void main(String[] args) {
        //  We can create String using 2 ways

         // 1) Literal form

           String s = "Hello";  // s is a local variable on which the objects memory location also known as reference is assigned.
           System.out.println("Literal String = " + s);

        //  2) Using new keyword

        String value = new String("Hello"); // When we create an object, we can pass initial data to be associated with it in parentheses.
        System.out.println("String created with new = " + value);

    }


}
