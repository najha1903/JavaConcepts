package Chapter_14_OOPSConcepts.Sub_Chapter_5_Constructors_Challenge;


/*

Create a new class, called Customer, with three fields: name. credit limit. and email address.

Create the getter methods only for each field. You don't need to create the setters.

Create three constructors for this class: First, create a constructor for all three fields which should

assign the arguments directly to the instance fields. Second, create a no-args constructor

that calls another constructor, passing some literal values for each argument. And lastly,

create a constructor with just the name and email parameters, which also calls another constructor.

 */

public class Customer {

    private String name;
    private double creditLimit;
    private String emailAddress;

    public Customer() {
        this("Navneet", "navneet.jha@gmail.com");
    }

    public Customer(String name, String emailAddress) {
       this(name,1200000.00,emailAddress);
    }

    public Customer(String name, double creditLimit, String emailAddress) {
        this.name = name;
        this.creditLimit = creditLimit;
        this.emailAddress = emailAddress;
    }

    public String getName() {
        return name;
    }

    public double getCreditLimit() {
        return creditLimit;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public static void main(String[] args) {

        Customer customer = new Customer();

        System.out.println(customer.getName());
        System.out.println(customer.getCreditLimit());
        System.out.println(customer.getEmailAddress());

        Customer customer1 = new Customer("Puttu","puttujha500@gmail.com");

        System.out.println(customer1.getName());
        System.out.println(customer1.getCreditLimit());
        System.out.println(customer1.getEmailAddress());

        Customer customer2 = new Customer("NaviPut",1000000.00,"naviput_gmail.com");


        System.out.println(customer2.getName());
        System.out.println(customer2.getCreditLimit());
        System.out.println(customer2.getEmailAddress());


    }

}
