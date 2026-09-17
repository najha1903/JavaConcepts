package Chapter_13_OOPSConcepts.Sub_Chapter_12_Inheritance_Coding_Challenge;

// This is the Inheritance Coding Challenge demo: a Worker → Employee → SalariedEmployee/HourlyEmployee hierarchy.
// Worker is the base class. Employee extends Worker, adding employeeId and hireDate. SalariedEmployee and HourlyEmployee extend Employee.
// Each subclass overrides the collectPay() method to compute pay differently: salaried divides annual salary by 26, hourly multiplies rate by 40 hours.
// Constructor chaining (super()) passes data up through the hierarchy — HourlyEmployee → Employee → Worker.
// This demonstrates polymorphism: calling collectPay() on an Employee reference calls the correct subclass implementation.
// Parameter notes (what each argument means and how to choose it):
// - new Employee("Tim", "11/11/1985", "01/01/2010"): pass name, birthDate, and hireDate in that order.
// - new SalariedEmployee("Joe", "11/11/1990", "03/03/2020", 35000): annualSalary is the yearly pay used by collectPay().
// - joe.retire() takes no arguments, but internally passes a termination date to terminate(String endDate).
// - new HourlyEmployee("Mary", "05/05/1984", "05/06/2009", 20): hourlyRate is the per-hour pay, and collectPay() assumes 40 hours.
// - Important date note: choose birthDate strings with the year starting at character index 6 because Worker.getAge() depends on that.
// @quiz (INTERVIEW) What do the four arguments in new SalariedEmployee("Joe", "11/11/1990", "03/03/2020", 35000) represent?
// @answer They are name, birthDate, hireDate, and annualSalary, in that order.
// @quiz (INTERVIEW) How does new HourlyEmployee("Mary", "05/05/1984", "05/06/2009", 20) use the 20 argument?
// @answer It becomes hourlyRate, so collectPay() returns 40 times 20.
// @quiz (INTERVIEW TRAP) Why is the birthDate argument format a careful choice in this demo?
// @answer Worker.getAge() extracts the year with substring(6), so the date string must put the year at that position.

public class Main {

    public static void main(String[] args) {
        Employee tim = new Employee("Tim","11/11/1985","01/01/2010");
        System.out.println(tim);
        System.out.println("Age = " + tim.getAge());
        System.out.println("Pay = " + tim.collectPay());

        SalariedEmployee joe = new SalariedEmployee("Joe","11/11/1990","03/03/2020",35000);
        System.out.println(joe);
        System.out.println("Joe's paycheck = $" + (int)joe.collectPay());
        joe.retire();
        System.out.println("Joe's retirement pension paycheck = $" + (int)joe.collectPay());


        HourlyEmployee mary = new HourlyEmployee("Mary","05/05/1984","05/06/2009",20);
        System.out.println(mary);
        System.out.println("Mary's paycheck = $" + (int)mary.collectPay());
        System.out.println("Mary's Holiday Pay = $" + (int)mary.getDoublePay());

    }



}
