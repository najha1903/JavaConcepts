package Chapter_11_Class_Object_Static_And_Instance_Fields.Sub_Chapter_3_Class_Fields_CodingChallenge;

/*
 * Challenge: Create a Student class with a shared static schoolName field and instance fields for
 * name, grade, and gpa. Create two students, print their details, and show static field behaviour.
 */
public class StudentClassChallenge {

    static class Student {
        static String schoolName = "Greenwood High";

        String name;
        int grade;
        double gpa;

        Student(String name, int grade, double gpa) {
            this.name = name;
            this.grade = grade;
            this.gpa = gpa;
        }

        void printDetails() {
            System.out.println("Name: " + name + ", Grade: " + grade + ", GPA: " + gpa + ", School: " + schoolName);
        }
    }

    public static void main(String[] args) {
        Student firstStudent = new Student("Alice", 10, 3.8);
        Student secondStudent = new Student("Bob", 11, 3.6);

        firstStudent.printDetails();
        secondStudent.printDetails();

        System.out.println("Updating school name through the first student...");
        firstStudent.schoolName = "Riverdale High";

        firstStudent.printDetails();
        secondStudent.printDetails();
    }
}
