package Chapter_13_OOPSConcepts.Sub_Chapter_5_Constructors_Challenge;


/*

Create a new class, called Customer, with three fields: name. credit limit. and email address.

Create the getter methods only for each field. You don't need to create the setters.

Create three constructors for this class: First, create a constructor for all three fields which should

assign the arguments directly to the instance fields. Second, create a no-args constructor

that calls another constructor, passing some literal values for each argument. And lastly,

create a constructor with just the name and email parameters, which also calls another constructor.

 */

// @quiz (INTERVIEW) In Customer(String name, double creditLimit, String emailAddress), what does each parameter initialize?
// @answer name initializes the name field, creditLimit initializes the creditLimit field, and emailAddress initializes the emailAddress field.
// @quiz (INTERVIEW TRAP) What is the important effect of Customer() calling this("Navneet", "navneet.jha@gmail.com")?
// @answer The no-args constructor does not set fields directly; it reuses the two-parameter constructor, which then supplies the default credit limit and delegates to the three-parameter constructor.
// @quiz (OCJP) Why does this.name = name use this.name on the left side?
// @answer The parameter name shadows the field name, so this.name explicitly means the current object's field while name means the constructor parameter.
// @quiz (INTERVIEW) How should a caller choose the creditLimit argument?
// @answer Pass the numeric credit amount the Customer should start with, usually a non-negative business value, because this constructor stores it directly without validation.

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
