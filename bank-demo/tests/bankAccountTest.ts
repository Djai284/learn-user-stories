import { Bank } from '../src/bank';

console.log('Starting Bank and BankAccount Tests');

const bank = new Bank();

// Test Account Creation
console.log('\n--- Account Creation Tests ---');

try {
  const account = bank.createAccount('John Doe', 30, '1234567890');
  console.log('Account created successfully:', account);
} catch (err) {
  console.log('Error creating account:', err instanceof Error ? err.message : 'An unknown error occurred');
}

try {
  const account2 = bank.createAccount('Jane Doe', 25, '1234567890');
  console.log('Second account created successfully:', account2);
} catch (err) {
  console.log('Error creating second account:', err instanceof Error ? err.message : 'An unknown error occurred');
}

// Test Deposit
console.log('\n--- Deposit Tests ---');

const testDeposit = (account: any, amount: number) => {
  try {
    account.deposit(amount);
    console.log(`Deposited $${amount}. New balance: $${account.getBalance()}`);
  } catch (err) {
    console.log(`Error depositing $${amount}:`, err instanceof Error ? err.message : 'An unknown error occurred');
  }
};

const account = bank.createAccount('Test User', 35, '9876543210');
testDeposit(account, 100);
testDeposit(account, 50.75);
testDeposit(account, 25.123);  // Should fail
testDeposit(account, -50);
testDeposit(account, 0);
testDeposit(account, 100.50);

// Test Withdraw
console.log('\n--- Withdraw Tests ---');

const testWithdraw = (account: any, amount: number) => {
  try {
    account.withdraw(amount);
    console.log(`Withdrawn $${amount}. New balance: $${account.getBalance()}`);
  } catch (err) {
    console.log(`Error withdrawing $${amount}:`, err instanceof Error ? err.message : 'An unknown error occurred');
  }
};

testWithdraw(account, 75);
testWithdraw(account, 25.50);
testWithdraw(account, 1000);  // Should fail due to insufficient funds
testWithdraw(account, -50);
testWithdraw(account, 0);
testWithdraw(account, 10.123);  // Should fail due to invalid amount

// Test Check Balance
console.log('\n--- Check Balance Tests ---');

console.log('Initial balance:', account.getBalance());
account.deposit(1000);
console.log('Balance after $1000 deposit:', account.getBalance());
account.withdraw(250.75);
console.log('Balance after $250.75 withdrawal:', account.getBalance());
account.deposit(50.50);
console.log('Final balance after $50.50 deposit:', account.getBalance());

console.log('\nBank and BankAccount Tests Completed');