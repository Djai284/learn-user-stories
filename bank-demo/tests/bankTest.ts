import { Bank } from '../src/bank';

// Scenario 1: 
const bank = new Bank();
try {
  const acc = bank.createAccount('John Doe', 30, '1234567890');
  console.log(acc);
}
catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  } else {
    console.log('An unknown error occurred');
  }
}

// Scenario 2:
try {
  const acc2 = bank.createAccount('John Doe', 30, '1234567890');
}
catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  } else {
    console.log('An unknown error occurred');
  }
}