package Chapter_11_Class_Object_Static_And_Instance_Fields.Sub_Chapter_2_Create_Field_On_Classes;
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
