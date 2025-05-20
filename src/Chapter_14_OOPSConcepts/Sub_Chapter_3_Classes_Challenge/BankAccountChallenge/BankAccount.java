package Chapter_14_OOPSConcepts.Sub_Chapter_3_Classes_Challenge.BankAccountChallenge;

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
//You'll print information to the console that confirms what the
//
//balance is after the methods are called. So, pause the video and try that out,

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
