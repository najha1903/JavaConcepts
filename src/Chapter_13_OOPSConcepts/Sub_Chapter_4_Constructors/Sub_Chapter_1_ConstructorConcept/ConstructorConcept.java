package Chapter_13_OOPSConcepts.Sub_Chapter_4_Constructors.Sub_Chapter_1_ConstructorConcept;
// A constructor is a special method used to initialise a new object. It runs ONCE when the object is created with 'new'.
// Constructors have the SAME name as the class and NO return type (not even void).
// If you don't define any constructors, Java provides a default no-args constructor implicitly.
// If you define ANY constructor explicitly, Java does NOT provide the default constructor — you must define it yourself if needed.
// Constructor overloading: you can define multiple constructors with different parameter lists — Java picks the right one based on arguments passed.
// Constructor chaining: one constructor calls another using 'this(args...)'. The this() call MUST be the FIRST statement in the constructor.
// A class can have both 'this()' chaining (calls another constructor in same class) and 'super()' chaining (calls parent constructor), but never BOTH in the same constructor.
// Best practice: do all initialisation in ONE "master" constructor and have other constructors chain to it using this(). This avoids duplicating initialisation code.
// Best practice: don't call setter methods from constructors — assign field values directly to guarantee correctness.
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

// @quiz (INTERVIEW) What does the accountBalance argument represent in the 5-argument ConstructorConcept constructor?
// @answer It is the initial balance copied into the accountBalance field when the object is created.
// @quiz (INTERVIEW TRAP) Why can swapping email and phoneNumber arguments be a subtle bug in this constructor?
// @answer Both parameters are Strings, so the code can compile even though the values are stored in the wrong fields.
// @quiz (OCJP) Where must the this(accountNumber, 100.00, customerName, email, phoneNumber) call appear?
// @answer A this(...) constructor call must be the first executable statement in the constructor body.

// @quiz (OCJP, MEDIUM) A class declares only this constructor. What happens when someone writes new Demo()?
// @code class Demo {
// @code     Demo(int n) { System.out.println(n); }
// @code }
// @code new Demo();
// @option It does not compile, because the implicit no-argument constructor is no longer supplied. [correct]
// @option It compiles, because Java always adds a no-argument constructor.
// @option It compiles and prints 0.
// @option It compiles and prints nothing.
// @explain The implicit no-argument constructor exists only if the class declares no constructor at all.
// @why B: the implicit constructor exists only in a class that declares no constructors.
// @why C: there is no constructor to run, so nothing is printed.
// @why D: for the same reason. The call matches no constructor, so the class does not compile.

// @quiz (OCJP, MEDIUM) Does this class compile, and what is void Demo(int n)?
// @code class Demo {
// @code     void Demo(int n) { System.out.println(n); }
// @code }
// @option It compiles, and void Demo(int n) is a plain method, since a constructor has no return. [correct]
// @option It does not compile, because a constructor may not be void.
// @option It compiles, and void Demo(int n) is the constructor of the class.
// @option It does not compile, because a method may not share the class name.
// @explain Writing void gives the declaration a return type, so it is a method named Demo, not a constructor.
// @why B: writing void does not make it an illegal constructor. It makes it a legal method.
// @why C: a constructor never has a return type, not even void.
// @why D: a method may share the class name, as long as it has a return type.

// @quiz (OCJP, MEDIUM) Does this constructor compile?
// @code class Demo {
// @code     int n;
// @code     Demo() {
// @code         System.out.println("start");
// @code         this(5);
// @code     }
// @code     Demo(int n) { this.n = n; }
// @code }
// @option No. A this(...) call must be the first statement in the constructor body. [correct]
// @option Yes, and it prints start before the second constructor runs.
// @option Yes, because this(5) is just a method call on the current object.
// @option No, because a constructor may never call another constructor.
// @explain A constructor may delegate only through this(...), and that call must be the very first statement.
// @why B: the compiler rejects the constructor, so nothing runs.
// @why C: this(5) is a constructor call, not a method call, which is why the first-statement rule applies.
// @why D: a constructor may call another one with this(...). It just has to do it first.

// @quiz (OCJP, MEDIUM) Which pair of constructors is a valid overload?
// @option Demo(int a) and Demo(double a), because the parameter types differ. [correct]
// @option Demo(int a) and Demo(int b), because the parameter names differ.
// @option Two Demo(int a) constructors in one class, because their bodies differ.
// @option Demo(int a) and void Demo(int a), because the return types differ.
// @explain Overloading depends on the parameter list: its number, types and order. Names are not part of it.
// @why B: parameter names are not part of the signature, so this pair clashes.
// @why C: two constructors with the same parameter list clash, whatever their bodies contain.
// @why D: a constructor has no return type, so void Demo(int a) is a method, not another constructor.

// @quiz (OCJP, MEDIUM) What is printed by this program?
// @code class Demo {
// @code     Demo() {
// @code         this(5);
// @code         System.out.println("no-args");
// @code     }
// @code     Demo(int n) {
// @code         System.out.println("int " + n);
// @code     }
// @code }
// @code new Demo();
// @option int 5, then no-args. [correct]
// @option no-args, then int 5.
// @option int 5 only.
// @option It does not compile, because a constructor may not call another one.
// @explain this(5) runs first, and control returns to the no-argument constructor, which prints its own line.
// @why B: this(5) is first, so the delegated constructor always finishes before the other lines run.
// @why C: control returns to the calling constructor after this(5) finishes, so its own println still runs.
// @why D: a constructor may call another one with this(...), which is exactly what constructor chaining is.


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

/*
        ConstructorConcept constructorConcept = new ConstructorConcept();

        constructorConcept.setAccountNumber("123456789");
        constructorConcept.setAccountBalance(1000.0);
        constructorConcept.setCustomerName("Navneet Jha");
        constructorConcept.setEmail("navneet.jha500@gmail.com");
        constructorConcept.setPhoneNumber("(+91) 8093958396");

        constructorConcept.printBankAccountHolderDetails();

        constructorConcept.withdrawFunds(100.0);
        constructorConcept.depositFunds(250.00);
        constructorConcept.withdrawFunds(50.00);

        constructorConcept.withdrawFunds(200.00);

        constructorConcept.depositFunds(100.00);
        constructorConcept.withdrawFunds(45.55);
        constructorConcept.withdrawFunds(54.46);
*/

        // Explicit constructor with parameters is called
     //   ConstructorConcept constructorConcept1 = new ConstructorConcept("123456789",1000.0,"Navneet Jha","navneet.jha500@gmail.com","(+91) 8093958396");

        // Constructor chaining example, where a no-args constructor will call the other args constructor using this keyword, where all the parameters required by the second constructor will be passed to this() keyword

        // As per the below code. the behaviour will be :-
        // As this() should always be the first line in the constructor, when the no - args constructor is called, then as per the flow, it then calls, the args constructor using this() and once the args constructor code block is executed, the controls then comes back to the no-args constructor

/*
        ConstructorConcept constructorConcept1 = new ConstructorConcept();

        constructorConcept1.printBankAccountHolderDetails();

        constructorConcept1.withdrawFunds(100.0);
        constructorConcept1.depositFunds(250.00);
        constructorConcept1.withdrawFunds(50.00);

        constructorConcept1.withdrawFunds(200.00);

        constructorConcept1.depositFunds(100.00);
        constructorConcept1.withdrawFunds(45.55);
        constructorConcept1.withdrawFunds(54.46);
*/

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
