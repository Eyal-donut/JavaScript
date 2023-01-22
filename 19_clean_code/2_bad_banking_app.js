/* 
  ! This code is not very readable, maintainable, or reusable. 
  ! The methods are disconnected from any context as well as from each other. 
  ! Also, if we want to reuse the logic somewhere else we would have to copy and paste the entire code.
*/

const account1 = {
  name: 'John Doe',
  balance: 100,
  interestRate: 0.02,
  loan: 500,
};

const account2 = {
  name: 'Jane Smith',
  balance: 200,
  interestRate: 0.03,
  loan: 1000,
};

const deposit = (account, amount) => {
  account.balance += amount;
  console.log(`Deposited ${amount} to ${account.name}'s account. New balance: ${account.balance}`);
};

const withdraw = (account, amount) => {
  if (account.balance - amount < 0) {
    console.log(`Insufficient funds in ${account.name}'s account`);
    return;
  }
  account.balance -= amount;
  console.log(`Withdrew ${amount} from ${account.name}'s account. New balance: ${account.balance}`);
};

const addInterest = (account) => {
  account.balance += account.balance * account.interestRate;
  console.log(`Added interest to ${account.name}'s account. New balance: ${account.balance}`);
};

const checkBalance = (account) => {
  console.log(`${account.name}'s account balance: ${account.balance}`);
};

const loan = (account, amount) => {
  if (account.loan - amount < 0) {
    console.log(`${account.name} has exceeded the loan limit`);
    return;
  }
  account.loan -= amount;
  account.balance += amount;
  console.log(`${amount} loan approved to ${account.name}. Remaining loan: ${account.loan}`);
};

deposit(account1, 50);
withdraw(account1, 20);
addInterest(account1);
checkBalance(account1);
loan(account1, 200);

deposit(account2, 80);
withdraw(account2, 40);
addInterest(account2);
checkBalance(account2);
loan(account2, 400);
