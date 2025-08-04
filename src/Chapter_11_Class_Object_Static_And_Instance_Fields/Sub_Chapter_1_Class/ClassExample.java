package Chapter_11_Class_Object_Static_And_Instance_Fields.Sub_Chapter_1_Class;

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
*    An Main is called an instance of a particular class.
*    Creation of the object can be called as instantiation or instantiating a class
*    Main and instance can be used interchangeably
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




public class ClassExample {

    public static void main(String[] args) {
        //  We can create String using 2 ways

         // 1) Literal form

           String s = "Hello";  // s is a local variable on which the objects memory location also known as reference is assigned.

        //  2) Using new keyword

        String value = new String("Hello"); // When we create an object, we can pass initial data to be associated with it in parentheses.





    }


}
