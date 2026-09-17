package Chapter_13_OOPSConcepts.Sub_Chapter_12_Inheritance_Coding_Challenge;

// @quiz (INTERVIEW) In SalariedEmployee(String name, String birthDate, String hireDate, double annualSalary), what does annualSalary represent?
// @answer It is the yearly salary amount used by collectPay(), which divides it by 26.
// @quiz (INTERVIEW) What do the arguments in super(name, birthDate, hireDate) do?
// @answer They call Employee(String, String, String), passing identity and dates up the inheritance chain.
// @quiz (INTERVIEW TRAP) What does the "12/12/2025" argument in terminate("12/12/2025") mean?
// @answer It is the endDate String stored by Worker.terminate(), and it is hard-coded by retire().
// The salaried employee class, extends the Employee Class
public class SalariedEmployee extends Employee {

    /*
    * Here, 2 new fields are introduced for SalariedEmployee Class, namely annualSalary, isRetired
    * */
    private double annualSalary;
    private boolean isRetired;


    /*
    * A Salaried employee constructor is created, that accepts name, birthDate, hireDate and annualSalary as the parameters
    * */

    public SalariedEmployee(String name, String birthDate, String hireDate, double annualSalary) {
        super(name, birthDate, hireDate); // With the help of super keyword, the Employee constructor is called, through constructor chaining
        // The name and birthDate information gets set in the Worker class using constructor chaining using super keyword, whenever the Employee constructor is called as the Employee constructor then calls Worker constructor using super keyword (constructor chaining)
        // The hireDate information gets set in the Employee Class, using constructor chaining using super keyword, whenever the SalariedEmployee constructor is called
        this.annualSalary = annualSalary;
    }


    public void retire(){
        // The terminate(String endDate parameter) method of the Worker Class is called
       terminate("12/12/2025");
       isRetired = true;
    }


    /*
     * The Worker class collectPay() method is being overridden in the SalariedEmployeeClass
     * */

    @Override
    public double collectPay() {

        double salary = annualSalary / 26;

        double adjustedPay = (isRetired) ? 0.9 * salary : salary;

        return adjustedPay;
    }

}
