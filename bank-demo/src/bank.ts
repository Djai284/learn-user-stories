/**
 * This is a type for all bank accoutns in the bank
 */
interface IBankAccount {
  name: string;
  age: number;
  accountNumber: string;
  balance: number;

  deposit(amount: number): void;
  withdraw(amount: number): void;
  getBalance(): number;
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

  /**
   * Method to deposit money into the account
   * @param amount The amount to deposit. Should be a valid dollar amount.
   */
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Deposit amount must be greater than 0');
    }

    // check if the amount is a valid dollar amount with cents but no fractions
    if (!Number.isInteger(amount*100)) {
      throw new Error('Deposit amount should be a valid dollar amount (up to two decimal places)');
    }

    this.balance += amount;
  }

  /**
   * Method to withdraw money from the account
   * @param amount The amount to withdraw
   */
  withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error('Withdrawal amount must be greater than 0');
    }

    // check if the amount is a valid dollar amount with cents but no fractions
    if (!Number.isInteger(amount*100)) {
      throw new Error('Withdrawal amount should be a valid dollar amount (up to two decimal places)');
    }

    if (amount > this.balance) {
      throw new Error('Insufficient funds');
    }

    this.balance -= amount;
  }

  /**
   * Method to get the account balance
   * @returns The account balance
   */
  getBalance(): number {
    return this.balance;
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