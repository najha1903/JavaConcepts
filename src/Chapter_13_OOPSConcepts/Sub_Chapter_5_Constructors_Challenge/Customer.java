package Chapter_13_OOPSConcepts.Sub_Chapter_5_Constructors_Challenge;


/*

Create a new class, called Customer, with three fields: name. credit limit. and email address.

Create the getter methods only for each field. You don't need to create the setters.

Create three constructors for this class: First, create a constructor for all three fields which should

assign the arguments directly to the instance fields. Second, create a no-args constructor

that calls another constructor, passing some literal values for each argument. And lastly,

create a constructor with just the name and email parameters, which also calls another constructor.

 */

// Parameter notes (what each argument means and how to choose it):
// - Customer(): no caller arguments are chosen; it delegates with this("Navneet", "navneet.jha@gmail.com"), so those two literal arguments become the default name and emailAddress.
// - Customer(String name, String emailAddress): name is the customer's display name; emailAddress is the customer's contact email. This constructor delegates with this(name, 1200000.00, emailAddress), so creditLimit is chosen as a fixed default.
// - Customer(String name, double creditLimit, String emailAddress): name identifies the customer, creditLimit is the allowed credit amount, and emailAddress is contact information. Choose meaningful non-empty strings and a sensible non-negative money value; this code does not validate them.
// - this(name, creditLimit, emailAddress) and this(name, 1200000.00, emailAddress): the argument order must match the target constructor exactly; important pitfall: swapping creditLimit and emailAddress would not compile because their types differ.
// - Getter calls getName(), getCreditLimit(), and getEmailAddress() take no parameters because they only read the values already copied into fields by the constructor.
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
