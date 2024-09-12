/**
 * This is a type for all bank accoutns in the bank
 */
interface IBankAccount {
  name: string;
  age: number;
  accountNumber: string;
  balance: number;
}

/**
 * This is a class that represents a bank account
 */
class BankAccount implements IBankAccount {
  name: string;
  age: number;
  accountNumber: string;
  balance: number;

  constructor(name: string, age: number, accountNumber: string) {
    this.name = name;
    this.age = age;
    this.accountNumber = accountNumber;
    this.balance = 0;
  }
}

/**
 * This is a class that represents a simple bank
 */
class Bank {
    private accounts: BankAccount[] = [];

    /**
     * Method to create a new bank account
     * @param name The name of the account holder
     * @param age The age of the account holder
     * @param accountNumber The account number assigned to the account holder
     * @returns A new bank account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {

        const accountExists = this.isAccountExists(accountNumber);
        if (accountExists) {
            throw new Error(`Account ${accountExists.accountNumber} already exists`);
        }

        // Check if the account already exists in the bank
        const account: BankAccount = new BankAccount(name, age, accountNumber);

        this.accounts.push(account);

        return account;
    }

    /**
     * Checks if an account exists in the bank
     * @param accountNumber The account number to check if it exists
     * @returns The bank account if it exists
     */
    private isAccountExists(accountNumber: string): BankAccount | undefined {
        return this.accounts.find((acc) => acc.accountNumber === accountNumber);
    }
}

export { Bank, BankAccount };