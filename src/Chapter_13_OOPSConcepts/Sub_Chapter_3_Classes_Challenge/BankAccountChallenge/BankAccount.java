package Chapter_13_OOPSConcepts.Sub_Chapter_3_Classes_Challenge.BankAccountChallenge;

//Create a new class for a bank account.
//
//Create fields for account characteristics like:
//
//account number. account balance. customer name. email. and phone number.
//
//Create getters and setters for each field. Create two additional methods:
//
//one for depositing funds into the account. and one for withdrawing funds from the account.
//
//A customer should not be allowed to withdraw funds if that withdrawal takes their balance negative.
//
//Create a new project called ClassesChallenge with the usual Main class with the usual main method.
//
//You'll create an instance of an Account class and then test your withdrawal and deposit methods.
//
//You'll print information to the console that confirms the account balance after the methods are called.

// Parameter notes (what each constructor/method argument means and how to choose it):
// - setAccountNumber(String accountNumber): accountNumber is the account identifier; choose the exact text/number format you want stored for display.
// - setAccountBalance(double accountBalance): accountBalance is the starting or replacement balance; important: this setter does not stop negative balances.
// - setCustomerName(String customerName): customerName is the account holder's display name; choose a non-null readable name.
// - setEmail(String email): email is contact information stored as text; this setter does not validate email format.
// - setPhoneNumber(String phoneNumber): phoneNumber is contact information stored as text; include country/area code formatting if desired.
// - depositFunds(double depositAmount): depositAmount is added to the current balance; avoid zero or negative deposits because no validation prevents them.
// - withdrawFunds(double withdrawalAmount): withdrawalAmount is subtracted only when it is not greater than the current balance; choose an amount the balance can cover.
//
// @quiz (INTERVIEW) What does the withdrawalAmount parameter control in withdrawFunds(double withdrawalAmount)?
// @answer It is the amount requested for withdrawal; the method subtracts it only if it is less than or equal to the current accountBalance.
// @quiz (INTERVIEW TRAP) Why is passing a negative depositAmount a pitfall in this implementation?
// @answer depositFunds directly adds the parameter without validation, so a negative value would reduce the balance instead of behaving like a normal deposit.
// @quiz (OCJP) In setCustomerName(String customerName), why is this.customerName = customerName used?
// @answer The parameter shadows the field; this.customerName selects the instance field and the bare customerName selects the incoming argument.

public class BankAccount {

    private String accountNumber;
    private double accountBalance;
    private String customerName;
    private String email;
    private String  phoneNumber;

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




}
