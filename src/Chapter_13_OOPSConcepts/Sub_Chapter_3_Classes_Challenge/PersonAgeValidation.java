package Chapter_13_OOPSConcepts.Sub_Chapter_3_Classes_Challenge;

/*

* Person Class and Age Validation
Write a class with the name Person. The class needs three fields (instance variables) with the names firstName, lastName of type String and age of type int.

Write the following methods (instance methods):

Method named getFirstName without any parameters, it needs to return the value of the firstName field.

Method named getLastName without any parameters, it needs to return the value of the lastName field.

Method named getAge without any parameters, it needs to return the value of the age field.

Method named setFirstName with one parameter of type String, it needs to set the value of the firstName field.

Method named setLastName with one parameter of type String, it needs to set the value of the lastName field.

Method named setAge with one parameter of type int, it needs to set the value of the age field. If the parameter is less than 0 or greater than 100, it needs to set the age field value to 0.

Method named isTeen without any parameters, it needs to return true if the value of the age field is greater than 12 and less than 20, otherwise, return false.

Method named getFullName without any parameters, it needs to return the full name of the person.

In case both firstName and lastName fields are empty, Strings return an empty String.

In case lastName is an empty String, return firstName.

In case firstName is an empty String, return lastName.

To check if s String is empty, use the method isEmpty from the String class. For example, firstName.isEmpty() returns true if the String is empty or in other words, when the String does not contain any characters.



TEST EXAMPLE

TEST CODE:

Person person = new Person();
person.setFirstName("");   // firstName is set to empty string
person.setLastName("");    // lastName is set to empty string
person.setAge(10);
System.out.println("fullName= " + person.getFullName());
System.out.println("teen= " + person.isTeen());
person.setFirstName("John");    // firstName is set to John
person.setAge(18);
System.out.println("fullName= " + person.getFullName());
System.out.println("teen= " + person.isTeen());
person.setLastName("Smith");    // lastName is set to Smith
System.out.println("fullName= " + person.getFullName());
OUTPUT

fullName=
teen= false
fullName= John
teen= true
fullName= John Smith


NOTE: All methods should be defined as public NOT public static.

NOTE: In total, you have to write 8 methods.

NOTE: Do not add the main method to the solution code.
*
*
*
* */

// Parameter notes (what each constructor/method argument means and how to choose it):
// - setFirstName(String firstName): firstName is the person's given name; use "" for intentionally blank, and avoid null because getFullName() calls isEmpty().
// - setLastName(String lastName): lastName is the family name; use "" for intentionally blank, and avoid null for the same isEmpty() reason.
// - setAge(int age): age is the person's age in years; valid values are 0 through 100, and invalid values below 0 or above 100 reset the field to 0.
// - getFirstName().isEmpty() and getLastName().isEmpty(): these parameterless calls depend on the stored name Strings not being null.
// - remember: isTeen() has no parameter because it uses the current object's stored age; change the age by calling setAge(value) first.
//
// @quiz (INTERVIEW) What values should be passed to setAge(int age), and what happens outside the valid range?
// @answer Pass an age from 0 to 100 inclusive; values less than 0 or greater than 100 cause the field to be set to 0.
// @quiz (INTERVIEW TRAP) Why is passing null to setFirstName(String firstName) or setLastName(String lastName) dangerous here?
// @answer getFullName() calls isEmpty() on the stored names, and calling isEmpty() on null would throw NullPointerException.
// @quiz (OCJP) In this.age = age, what does the age on the right side refer to?
// @answer The right-side age is the setter parameter, while this.age is the instance field being updated.

public class PersonAgeValidation {

    private String firstName;

    private String lastName;

    private int age;

    public String getFirstName(){
        return firstName;
    }

    public String getLastName(){
        return lastName;
    }

    public int getAge(){
        return age;
    }

    public void setFirstName(String firstName){
        this.firstName = firstName;
    }

    public void setLastName(String lastName){
        this.lastName = lastName;
    }

    public void setAge(int age){
        if(age < 0 || age > 100){
            this.age = 0;
        }else{
            this.age = age;
        }
    }

    public boolean isTeen(){

        boolean checkIfIsTeen = false;

        if(getAge() > 12 && getAge() < 20){
            checkIfIsTeen = true;
        }

        return checkIfIsTeen;
    }

    public String getFullName(){
        String fullName = null;

        if(getFirstName().isEmpty() && getLastName().isEmpty()){
            fullName = "";
        }else if(getFirstName().isEmpty()){
            fullName = getLastName();
        }else if(getLastName().isEmpty()){
            fullName = getFirstName();
        }else{
            fullName = getFirstName() + " " + getLastName();
        }

        return fullName;
    }
}

