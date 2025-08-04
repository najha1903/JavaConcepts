package Chapter_14_OOPSConcepts.Sub_Chapter_11_Inheritance.AnimalInheritanceExample.ObjectClass;

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


// Since, every class in java, implicitly extend object, there is no need to explicitly extend the Object class
public class Main extends Object{

    public static void main(String[] args) {

        Student s = new Student("Navneet", 21);
      //  System.out.println(s.toString());
        // Since the toString method, is explicitly called by an object,
        // there is no need to make an explicit call to toString method from an object
        System.out.println(s);
        // Output :- Here, the toString method is actually the parent class toString method, which in this case is Object Class

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
