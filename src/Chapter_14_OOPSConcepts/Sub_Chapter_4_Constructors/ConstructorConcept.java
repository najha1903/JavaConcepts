package Chapter_14_OOPSConcepts.Sub_Chapter_4_Constructors;

/*
* A constructor is used in the creation of an object.

It is a special type of code block that has a specific name and parameters, much like a method.

It has the same name as the class itself, and it doesn't return any values.

It should never include a return type from a constructor, not even void.

It should have an appropriate access modifier to control the creation of
new instances of the class, using this constructor.

Constructor should essentially be used to set the values
of the fields in the instance of a class.

In addition, add other initialization code you want to perform, in the constructor.

A constructor is created for us, implicitly, by Java.

Implicitly called in Java means we can't see the code in the source,
but it's in the byte code, generated during the compilation process.

If a class contains no constructor declarations, then a default constructor is implicitly declared.

This constructor has no parameters and is often called the no-args (no arguments) constructor.
If a class contains any other constructor declarations, then a default constructor
is NOT implicitly declared.

The purpose of the constructor is to essentially initialize the object
It's only ever called once, at the start, when the object is created.
A class can have one or many constructors, one of which can be a no args constructor.

Constructor Overloading

Constructor overloading is declaring multiple constructors with different parameters.
The number of parameters can be different between constructors.

If the number of parameters is the same between two constructors, their types, or order of the types must differ.


Constructor chaining is when one constructor explicitly calls another overloaded constructor.

Constructor chaining can be used within constructors and it is completely optional

The special statement this() is used to execute another constructor,
passing it arguments if required. And this() must be the first executable
statement if it's used from another constructor.

The this() keyword can be parameterised or non - parameterised.
The this()keyword calls which constructor, is determined
by the arguments passed inside this().

The type and number of arguments passed inside the this() keyword must match one of the defined constructors.

Once we start adding more complex code, it's good to create multiple constructors

And in that situation, initialization of the instance variables can happen in the one
constructor.
All other constructors can call that major constructor, passing default values or null references as arguments.

That's a good way of doing things, and it often leads to good coding because it avoids
having to duplicate code by duplicating initialization in more than one place.

*/

public class ConstructorConcept {

    private String accountNumber;
    private double accountBalance;
    private String customerName;
    private String email;
    private String  phoneNumber;

    /*
    * Creation of constructor
    *
    * Rules for creating a constructor :-
    *
    * It's name has to be the same as the class
    * Two, it has no return type, not even void.
    *
    *  The general rule of thumb is, it's always better to assign the values directly to the field,
    * rather than calling the setter in a constructor.
    * This will guarantee that the instance variable values are set properly
    * The general rule of thumb with constructors is, don't call setters or any other method other than
    * another constructor, within those constructors.
    * */

    /*
    Access modifier :- public has also been defined for the constructor
    * Explicit constructor without any parameters or arguments
    * */
//    public ConstructorConcept(){
//        System.out.println("Empty Constructor Called");
//    }
    
    public ConstructorConcept(String accountNumber,double accountBalance, String customerName, String email, String phoneNumber){
        System.out.println("Constructor with 5 arguments is called");
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
        this.customerName = customerName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public ConstructorConcept(String accountNumber, String customerName, String email, String phoneNumber){
        this(accountNumber,100.00,customerName,email,phoneNumber);
        System.out.println("Constructor with 4 Arguments called");
    }


    public ConstructorConcept(){
        this("1234567890",5000.0,"Navneet Jha","puttu.jha500@gmail.com","(+91) 8093958396");
        System.out.println("Empty Constructor Called");
        // this() cannot be the last statement of the body, if this() is put at last, then the compiler will throw an error "Call to 'this()' must be first statement in constructor body"
      //  this("123456789",1000.0,"Navneet Jha","navneet.jha500@gmail.com","(+91) 8093958396");

    }






    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public double getAccountBalance() {
        return accountBalance;
    }

    public void setAccountBalance(double accountBalance) {
        this.accountBalance = accountBalance;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void depositFunds(double depositAmount){
        accountBalance = accountBalance + depositAmount;
        System.out.println("Deposit of $" + depositAmount + " made. New balance is $" + accountBalance);
    }

    public void withdrawFunds(double withdrawalAmount){
        if(withdrawalAmount > accountBalance){
            System.out.println("Insufficient funds in your account. You have only $" + accountBalance + " in your account");
        }else if(withdrawalAmount <= accountBalance){
            accountBalance = accountBalance - withdrawalAmount;
            System.out.println("Withdrawal of $" + withdrawalAmount + " processed, Remaining balance = $" + accountBalance);
        }
    }

    public void printBankAccountHolderDetails(){
        System.out.println("Name :- " + getCustomerName());
        System.out.println("Balance :- " + getAccountBalance());
        System.out.println("Account Number :- " + getAccountNumber());
        System.out.println("Email :- " + getEmail());
        System.out.println("Phone Number :- " + getPhoneNumber());
    }


    public static void main(String[] args) {

   /* So, when the keyword new is typed, and the name of the class, and then parentheses, this is actually calling that implicit constructor, if no explicit constructor is defined.
      If no constructor is explicitly created in the account class, Java creates one which is called the default constructor. */

   /* This code is actually calling that special constructor that creates the class. Its purpose is to create the object from the class.*/


//        ConstructorConcept constructorConcept = new ConstructorConcept();
//
//        constructorConcept.setAccountNumber("123456789");
//        constructorConcept.setAccountBalance(1000.0);
//        constructorConcept.setCustomerName("Navneet Jha");
//        constructorConcept.setEmail("navneet.jha500@gmail.com");
//        constructorConcept.setPhoneNumber("(+91) 8093958396");
//
//        constructorConcept.printBankAccountHolderDetails();
//
//        constructorConcept.withdrawFunds(100.0);
//        constructorConcept.depositFunds(250.00);
//        constructorConcept.withdrawFunds(50.00);
//
//        constructorConcept.withdrawFunds(200.00);
//
//        constructorConcept.depositFunds(100.00);
//        constructorConcept.withdrawFunds(45.55);
//        constructorConcept.withdrawFunds(54.46);


        // Explicit constructor with parameters is called
     //   ConstructorConcept constructorConcept1 = new ConstructorConcept("123456789",1000.0,"Navneet Jha","navneet.jha500@gmail.com","(+91) 8093958396");

        // Constructor chaining example, where a no-args constructor will call the other args constructor using this keyword, where all the parameters required by the second constructor will be passed to this() keyword


        // As per the below code. the behaviour will be :-
        // As this() should always be the first line in the constructor, when the no - args constructor is called, then as per the flow, it then calls, the args constructor using this() and once the args constructor code block is executed, the controls then comes back to the no-args constructor

//        ConstructorConcept constructorConcept1 = new ConstructorConcept();
//
//        constructorConcept1.printBankAccountHolderDetails();
//
//        constructorConcept1.withdrawFunds(100.0);
//        constructorConcept1.depositFunds(250.00);
//        constructorConcept1.withdrawFunds(50.00);
//
//        constructorConcept1.withdrawFunds(200.00);
//
//        constructorConcept1.depositFunds(100.00);
//        constructorConcept1.withdrawFunds(45.55);
//        constructorConcept1.withdrawFunds(54.46);


        // As per the below code. the behaviour will be :-
        // As this() should always be the first line in the constructor, when the parameterised constructor with 4 arguments is called, then as per the flow, it then calls, the args constructor which has 5 arguments using this() and once the args constructor code block is executed, the controls then comes back to the parameterised constructor with 4 arguments

        ConstructorConcept constructorConcept2 = new ConstructorConcept("123456789001","Navneet Puttu","puttu.jha@gmail.com","(+91) 9834876330");

        constructorConcept2.printBankAccountHolderDetails();

        constructorConcept2.withdrawFunds(100.0);
        constructorConcept2.depositFunds(250.00);
        constructorConcept2.withdrawFunds(50.00);

        constructorConcept2.withdrawFunds(200.00);

        constructorConcept2.depositFunds(100.00);
        constructorConcept2.withdrawFunds(45.55);
        constructorConcept2.withdrawFunds(54.46);

    }
}
