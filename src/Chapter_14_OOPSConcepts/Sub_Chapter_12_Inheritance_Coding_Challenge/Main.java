package Chapter_14_OOPSConcepts.Sub_Chapter_12_Inheritance_Coding_Challenge;

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
