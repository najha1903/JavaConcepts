package Chapter_13_OOPSConcepts.Sub_Chapter_11_Inheritance.AnimalInheritanceExample.ObjectClass;

/*
* Every class created in Java extends a special Java class.
*
* That class is named Object, and it's in the java.lang package.
*
* Class Object is the root of the class hierarchy.
*
* All classes, which do not explicitly extend another class will implicitly extend a class named object
*
* Every class has Object as a superclass. All objects, including arrays,
  implement the methods of this class.
*
* Java only supports 1 class in the extends class
*
*
* */


// @quiz (INTERVIEW) In PrimarySchoolStudent(String name, int age, String parentName), which parameters are passed to super?
// @answer name and age are passed to Student(String, int); parentName is stored in the PrimarySchoolStudent field.
// @quiz (INTERVIEW TRAP) What should callers avoid when choosing the age parameter for Student(String name, int age)?
// @answer Avoid invalid values such as negative ages, because the constructor stores the int directly without validation.
// @quiz (OCJP) What does main(String[] args) receive?
// @answer It receives command-line arguments as a String array, although this program does not use them.
// Since, every class in java, implicitly extend object, there is no need to explicitly extend the Object class
public class Main extends Object{

    public static void main(String[] args) {

        Student s = new Student("Navneet", 21);
      //  System.out.println(s.toString());
        // Since the toString method, is explicitly called by an object,
        // there is no need to make an explicit call to toString method from an object
        System.out.println(s);
        // Output :- Here, the Student class's overridden toString() method runs.

        PrimarySchoolStudent primarySchoolStudent = new PrimarySchoolStudent("Navneet", 21,"Puttu");
        System.out.println(primarySchoolStudent.toString());
    }

}

class Student {

    private String name;
    private int age;

    Student(String name, int age){
        this.name = name;
        this.age = age;
    }

//    @Override
//    public String toString() {
//        return super.toString(); // This override is redundant, as it is simply calling the parent class toString() method, and hence, will give the same output, when the toString() method was called without overriding
//        // The parent class toString() method is implicitly called, when super.toString() is explicitly called
//    }


        @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

}

class PrimarySchoolStudent extends Student { //,Object // Class cannot extend multiple class {

    private String parentName;

    PrimarySchoolStudent(String name, int age, String parentName){
        super(name,age); // Call to parent constructor is been made
        this.parentName = parentName;
    }

    @Override
    public String toString() {
        return "PrimarySchoolStudent{" +
                "parentName='" + parentName + '\'' +
                "} " + super.toString();
    }
}
