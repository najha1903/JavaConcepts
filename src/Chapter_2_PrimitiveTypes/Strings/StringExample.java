package Chapter_2_PrimitiveTypes.Strings;

// The string is a datatype in Java. It's not a primitive type, but a Class.

//A String is a sequence of characters. String can contain large number of characters.

//A char contains a single character only(regular character or Unicode character)

// +(plus) operator is used to concatenate string literals

//Chapter_2_PrimitiveTypes.Strings in java are immutable, which means String cannot be changed after it's created. Instead, a new String is created.

//If we append another data type to String, the entire thing is still configured and set up as a String.

public class StringExample {

    public static void main(String[] args) {

        String myString = "This is a string";
        System.out.println("MyString is equal to " + myString);
        myString = myString  + ", and this is more.";
        System.out.println("myString is equal to " + myString);
        myString = myString + " \u00A9 2022";
        System.out.println("myString is equal to " + myString);



    }
}
