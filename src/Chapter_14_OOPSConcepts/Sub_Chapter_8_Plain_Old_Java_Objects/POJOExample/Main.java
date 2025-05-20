package Chapter_14_OOPSConcepts.Sub_Chapter_8_Plain_Old_Java_Objects.POJOExample;

import Chapter_14_OOPSConcepts.Sub_Chapter_9_JavaRecords.StudentRecord;

public class Main {

    public static void main(String[] args) {

        System.out.println("*****************************************");

        Main.createStudentObjectsUsingPojo();

        System.out.println("*****************************************");

        Main.createStudentObjectsUsingRecordClass();

        System.out.println("*****************************************");

    }

    public static void createStudentObjectsUsingPojo() {

        // Objects are created using POJO
        Student s1 = new Student("1", "Navneet", "19/03/1994", "Java MasterClass");
        Student s2 = new Student("2", "Puttu", "20/04/1995", "Javascript MasterClass");
        Student s3 = new Student("1", "Navi", "21/05/1996", "Python MasterClass");
        Student s4 = new Student("1", "NaviPuttu", "22/06/1997", "Kotlin MasterClass");
        Student s5 = new Student("1", "PuttuNavi", "23/07/1998", "Golang MasterClass");

        System.out.println();
        System.out.println("Student Objects using POJO is created below :- ");
        System.out.println();
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
        System.out.println(s4);
        System.out.println(s5);
        System.out.println();

        // Getter methods that are defined explicitly in the Student POJO class are called below
        // The pre-defined best practice to define an explicit getter method name is that the getter method name to access any instance field will have a prefix like (get or is) before the instance variable name for which the value is retrieved(get) which together will form the getter method name
        // Ex :- getName() & getClassName() are explicitly defined getter methods for name and className instance variables
        System.out.println(s1.getName() + " is taking " + s1.getClassList());
        System.out.println(s2.getName() + " is taking " + s2.getClassList());
        System.out.println(s3.getName() + " is taking " + s3.getClassList());
        System.out.println(s4.getName() + " is taking " + s4.getClassList());
        System.out.println(s5.getName() + " is taking " + s5.getClassList());
        System.out.println();

        // The values of the instance variables in POJO based approach can be set using the explicitly defined setter methods.
        // For ex :-  s1.setClassList(s1.getClassList() + ", Java OCJP Exam 829") will work as expected as the setClassList setter method has been defined explicitly and the value of classList instance of the s1 object will get set to "Java MasterClass", Java OCJP Exam 829"

        // Output of the code
        // Difference between the outputs :- i) toString() method should be there in the pojo
        //                                   ii) It starts with curly bracket
        //                                   iii) Single quotes around Strings are there

        /*
        * Student{id='1', name='Navneet', dateOfBirth='19/03/1994', classList='Java MasterClass'}
          Student{id='2', name='Puttu', dateOfBirth='20/04/1995', classList='Javascript MasterClass'}
          Student{id='1', name='Navi', dateOfBirth='21/05/1996', classList='Python MasterClass'}
          Student{id='1', name='NaviPuttu', dateOfBirth='22/06/1997', classList='Kotlin MasterClass'}
          Student{id='1', name='PuttuNavi', dateOfBirth='23/07/1998', classList='Golang MasterClass'}
        *
        * */


    }

    public static void createStudentObjectsUsingRecordClass() {

        // Objects are created using Record Class
        StudentRecord s1 = new StudentRecord("1", "Navneet", "19/03/1994", "Java MasterClass");
        StudentRecord s2 = new StudentRecord("2", "Puttu", "20/04/1995", "Javascript MasterClass");
        StudentRecord s3 = new StudentRecord("1", "Navi", "21/05/1996", "Python MasterClass");
        StudentRecord s4 = new StudentRecord("1", "NaviPuttu", "22/06/1997", "Kotlin MasterClass");
        StudentRecord s5 = new StudentRecord("1", "PuttuNavi", "23/07/1998", "Golang MasterClass");

        System.out.println();
        System.out.println("Student Records using Record Type is created below :- ");
        System.out.println();
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
        System.out.println(s4);
        System.out.println(s5);
        System.out.println();

        // Getter methods are implicitly handled in the Record Type StudentRecord class. There is no need to explicitly define the getter methods in the Record Type Class
        // The implicit defined getter method name to retrieve(get) the value of the specific instance field will only have the instance variable name for which the value is retrieved(get) as the getter method name to access that instance variable value
        // Ex :- name() & className() are implicitly defined getter methods for name and className instance variables
        System.out.println(s1.name() + " is taking " + s1.classList());
        System.out.println(s2.name() + " is taking " + s2.classList());
        System.out.println(s3.name() + " is taking " + s3.classList());
        System.out.println(s4.name() + " is taking " + s4.classList());
        System.out.println(s5.name() + " is taking " + s5.classList());
        System.out.println();

        // 1) The values of the instance variables in Record Type based approach cannot be set ever and the Record Type class do not have implicitly defined setter methods
        // 2) For ex :- s1.setClassList(s1.classList() + ", Java OCJP Exam 829") will not work as there is no implicitly defined setter method for any of the instance field in the Record Type Class
        // 3) This is by design because the Record type class goal is to be immutable and they are built like that specifically
        // 4) The objective of the record type Class suits well for the use cases of immutable
        //    data transfer objects and keeping them well encapsulated. The data needs to be
        //    well protected from unintended mutations

        // Output of the code
        // Difference between the outputs :- i) toString() method is not required. It is handled implicitly by the Record type class
        //                                   ii) It starts with square bracket
        //                                   iii) Single quotes around Strings are not there

        /*
        * StudentRecord[id=1, name=Navneet, dateOfBirth=19/03/1994, classList=Java MasterClass]
          StudentRecord[id=2, name=Puttu, dateOfBirth=20/04/1995, classList=Javascript MasterClass]
          StudentRecord[id=1, name=Navi, dateOfBirth=21/05/1996, classList=Python MasterClass]
          StudentRecord[id=1, name=NaviPuttu, dateOfBirth=22/06/1997, classList=Kotlin MasterClass]
          StudentRecord[id=1, name=PuttuNavi, dateOfBirth=23/07/1998, classList=Golang MasterClass]
        *
        * */

    }
}



/*
* Student s = null;
        for(int i = 1; i <=5; i++){
             s = new Student(switch(i){
                case 1 -> "1";
                case 2 -> "2";
                case 3 -> "3";
                case 4 -> "4";
                case 5 -> "5";
                default -> "0";
            },switch(i){
                case 1 -> "Navneet";
                case 2 -> "Puttu";
                case 3 -> "Navi";
                case 4 -> "NaviPuttu";
                case 5 -> "PuttuNavi";
                default -> "Random";
            },switch(i){
                case 1 -> "19/03/1994";
                case 2 -> "20/04/1995";
                case 3 -> "21/05/1996";
                case 4 -> "22/06/1997";
                case 5 -> "23/07/1998";
                default -> "01/01/2001";
            },switch (i){
                case 1 -> "Java MasterClass";
                case 2 -> "Javascript MasterClass";
                case 3 -> "21/05/1996";
                case 4 -> "22/06/1997";
                case 5 -> "23/07/1998";
                default -> "01/01/2001";
            });
            System.out.println(s);
        }
        return s;
        *
        *
        *      List<Student> s = new LinkedList<>();
//        s.add(s1);
//        s.add(s2);
//        s.add(s3);
//        s.add(s4);
//        s.add(s5);
//
//        for(int i = 0; i <= 4; i++){
//            System.out.println(s.get(i));
//        }
*
*
* */