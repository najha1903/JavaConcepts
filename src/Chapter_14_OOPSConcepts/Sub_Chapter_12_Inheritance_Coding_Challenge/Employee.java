package Chapter_14_OOPSConcepts.Sub_Chapter_12_Inheritance_Coding_Challenge;

/* Employee Class Extends the Worker Class */
public class Employee extends Worker {

    /*
    * Two new fields are introduced for Employee class, employeeId, hireDate
    * */
    private int employeeId;
    private String hireDate;

    // Here the employeeNumber is taken as static, hence, whenever a new employee gets created, the employeeId gets incremented by 1
    private static int employeeNumber = 1;


    // An Employee constructor is created, that accepts name, birthDate and hireDate as the parameters
    public Employee(String name, String birthDate,  String hireDate) {
        super(name, birthDate); // With the help of super keyword, the Worker constructor is called, through constructor chaining
        // The name and birthDate information gets set in the worker class using constructor chaining using super keyword, whenever the Employee constructor is called
        this.employeeId = Employee.employeeNumber++;
        this.hireDate = hireDate;
    }

    /* Here, the toString() method of the Worker Class is overridden, and with the help of super.toString(),
       the toString() method of Worker class is called   */
    @Override
    public String toString() {
        return "Employee{" +
                "employeeId=" + employeeId +
                ", hireDate='" + hireDate + '\'' +
                "} " + super.toString(); // Worker class toString() method is called
    }
}
