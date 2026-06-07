package Chapter_14_OOPSConcepts.Sub_Chapter_12_Inheritance_Coding_Challenge;

// The HourlyEmployee Class extends the Employee Class
public class HourlyEmployee extends Employee {

    /*
     * Here, 1 new field is introduced for HourlyEmployee Class, namely hourlyRate
     * */
    private double hourlyRate;

    /*
     * An Hourly employee constructor is created, that accepts name, birthDate, hireDate and hourlyRate as the parameters
     * */

    public HourlyEmployee(String name, String birthDate, String hireDate, double hourlyRate) {
        super(name, birthDate, hireDate); // With the help of super keyword, the Employee constructor is called, through constructor chaining
        // The name and birthDate information gets set in the Worker class using constructor chaining using super keyword, whenever the Employee constructor is called as the Employee constructor then calls Worker constructor using super keyword (constructor chaining)
        // The hireDate information gets set in the Employee Class, using constructor chaining using super keyword, whenever the SalariedEmployee constructor is called
        this.hourlyRate = hourlyRate;
    }

    /*
     * The Worker class collectPay() method is being overridden in the SalariedEmployeeClass
     * */
    @Override
    public double collectPay() {
        return 40 * hourlyRate;
    }

    public double getDoublePay(){
        return 2 * collectPay();
    }


}
