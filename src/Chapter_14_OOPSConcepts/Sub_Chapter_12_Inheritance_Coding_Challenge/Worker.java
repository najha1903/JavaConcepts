package Chapter_14_OOPSConcepts.Sub_Chapter_12_Inheritance_Coding_Challenge;


/*  Inheritance Challenge Problem

Create Worker Class -> This should be on top of the Hierarchy

Create attributes :-
name      : String
birthDate : String
endDate   : String
intGetAge()
double collectPay()
terminate(String endDate)

Below the Worker Class, introduce another Class named Employee which extends the Worker Class

Create Attributes :-
employeeId : long
hireDate   : String

Create Two more classes, SalariedEmployee Class and HourlyEmployee Class, both of them extends Employee

For SalariedEmployee, Create Attributes :-
annualSalary : double
isRetired    : boolean
retire()

For HourlyEmployee, Create Attributes :-
hourlyPayRate : double
getDoublePay()

*
* */
public class Worker {

// Since name and birthDate are supposed to be used only by the worker class, it makes sense to make it private

// Since, endDate value might get set either by this class, or subclass, it would make sense to make it protected
    private String name;
    private String birthDate;
    protected String endDate;

// In real world scenario, it would be highly unlikely that we would be knowing a worker's end date, hence in the arg constructor,
// it would make sense, that we should only include two variables namely name and birthDate

    public Worker(String name, String birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }

// Adding a no argument constructor can also provide more flexibility, hence adding 1 no arg constructor to this class

    public Worker(){

    }



    public int getAge(){
        int currentYear = 2025;
        int birthYear = Integer.parseInt(birthDate.substring(6));

        return (currentYear - birthYear);
    }


/* The idea is to override the collectPay and terminate method by the subclasses so that specific implementation
   can be processed by the sub class */

    public double collectPay(){
        return 0.0;
    }

    public void terminate(String endDate){
        this.endDate = endDate;
    }

/*
* Here, the toString method is overridden, which overrides the toString method of the Object Class
* */

    @Override
    public String toString() {
        return "Worker{" +
                "name='" + name + '\'' +
                ", birthDate='" + birthDate + '\'' +
                ", endDate='" + endDate + '\'' +
                '}';
    }
}
