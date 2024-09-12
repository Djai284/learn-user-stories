import { Bank } from '../src/bank';

// Scenario 1: 
const bank = new Bank();
try {
  const acc = bank.createAccount('John Doe', 30, '1234567890');
  console.log(acc);
}
catch (err) {
  console.log(err.message);
}

// Scenario 2:
try {
  const acc2 = bank.createAccount('Jane Doe', 25, '1234567890');
}
catch (err) {
  console.log(err.message);
}

