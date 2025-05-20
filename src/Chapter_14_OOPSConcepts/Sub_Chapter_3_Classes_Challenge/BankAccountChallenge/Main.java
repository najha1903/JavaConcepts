package Chapter_14_OOPSConcepts.Sub_Chapter_3_Classes_Challenge.BankAccountChallenge;

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
