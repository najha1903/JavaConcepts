package Chapter_11_Class_Object_Static_And_Instance_Fields.Sub_Chapter_3_Class_Fields_CodingChallenge;

/*
 * Challenge: Create a BankAccount class with a shared static bankName field, instance fields for
 * account holder and balance, plus deposit and withdraw methods.
 */
public class BankAccountFieldsChallenge {

    static class BankAccount {
        static String bankName = "Java National Bank";

        String accountHolder;
        double balance;

        BankAccount(String accountHolder, double balance) {
            this.accountHolder = accountHolder;
            this.balance = balance;
        }

        void deposit(double amount) {
            if (amount > 0) {
                balance += amount;
            }
        }

        boolean withdraw(double amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return true;
            }
            return false;
        }

        void printAccountDetails() {
            System.out.printf("Bank: %s, Holder: %s, Balance: $%.2f%n", bankName, accountHolder, balance);
        }
    }

    public static void main(String[] args) {
        BankAccount account = new BankAccount("Alice", 500.00);

        account.printAccountDetails();

        account.deposit(250.00);
        System.out.println("After deposit:");
        account.printAccountDetails();

        boolean withdrew = account.withdraw(100.00);
        System.out.println("Withdrawal successful: " + withdrew);
        account.printAccountDetails();

        boolean failedWithdrawal = account.withdraw(1000.00);
        System.out.println("Withdrawal successful: " + failedWithdrawal);
        account.printAccountDetails();
    }
}
