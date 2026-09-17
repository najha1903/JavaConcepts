package Chapter_13_OOPSConcepts.Sub_Chapter_3_Classes_Challenge.BankAccountChallenge;

// Parameter notes (what each constructor/method argument means and how to choose it):
// - new BankAccount(): this no-args constructor call supplies no parameters, so fields start with Java defaults until setter calls provide values.
// - setAccountNumber("123456789"): choose the account identifier string to store and later print.
// - setAccountBalance(1000.0): choose the initial balance amount; note that the setter itself does not validate negative balances.
// - setCustomerName, setEmail, and setPhoneNumber each take the text that should be stored for the account holder's details.
// - withdrawFunds(100.0) and depositFunds(250.00): the double argument is the money amount to subtract or add; avoid negative values because only withdrawal overdrafts are checked.
//
// @quiz (INTERVIEW) What does the argument 1000.0 mean in bankAccount.setAccountBalance(1000.0)?
// @answer It becomes the account's starting/replacement balance before deposits and withdrawals are tested.
// @quiz (INTERVIEW TRAP) Why should callers avoid passing negative amounts to depositFunds or withdrawFunds in this demo?
// @answer The methods do not fully validate negative amounts, so negative deposits can reduce the balance and negative withdrawals can increase it.
// @quiz (OCJP) Does new BankAccount() pass any constructor arguments?
// @answer No. It calls a no-argument constructor, so the object fields keep default values until setter methods receive arguments.

public class Main {

    public static void main(String[] args) {

        BankAccount bankAccount = new BankAccount();

        bankAccount.setAccountNumber("123456789");
        bankAccount.setAccountBalance(1000.0);
        bankAccount.setCustomerName("Navneet Jha");
        bankAccount.setEmail("navneet.jha500@gmail.com");
        bankAccount.setPhoneNumber("(+91) 8093958396");

        bankAccount.printBankAccountHolderDetails();

        bankAccount.withdrawFunds(100.0);
        bankAccount.depositFunds(250.00);
        bankAccount.withdrawFunds(50.00);

        bankAccount.withdrawFunds(200.00);

        bankAccount.depositFunds(100.00);
        bankAccount.withdrawFunds(45.55);
        bankAccount.withdrawFunds(54.46);

    }
}
