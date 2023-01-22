/*
  * This code is much more readable, maintainable, and reusable. 
  * The logic is abstracted into a single function, createAccount, which returns an object with all the methods and properties that represent a bank account. 
  * The methods are written in the context of an object that is a bank account, so it is clearer what the code is for and its use depends on the context.
  * This object can now be reused anywhere we need to create a similar account, with different properties, without having to copy and paste the entire code. This makes the code more generic and less prone to errors.
*/

const createAccount = (name, balance, interestRate, loan) => {
  return {
    name,
    balance,
    interestRate,
    loan,
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount} to ${this.name}'s account. New balance: ${this.balance}`);
    },
    withdraw(amount) {
      if (this.balance - amount < 0) {
        console.log(`Insufficient funds in ${this.name}'s account`);
        return;
      }
      this.balance -= amount;
      console.log(`Withdrew ${amount} from ${this.name}'s account. New balance: ${this.balance}`);
    },
    addInterest() {
      this.balance += this.balance * this.interestRate;
      console.log(`Added interest to ${this.name}'s account. New balance: ${this.balance}`);
    },
    checkBalance() {
      console.log(`${this.name}'s account balance: ${this.balance}`);
    },
    takeLoan(amount) {
      if (this.takeLoan - amount < 0) {
        console.log(`${this.name} has exceeded the loan limit`);
        return;
      }
      this.takeLoan -= amount;
      this.balance += amount;
      console.log(`${amount} loan approved to ${this.name}. Remaining loan: ${this.takeLoan}`);
    }
  };
};

const account1 = createAccount('John Doe', 100, 0.02, 500);
const account2 = createAccount('Jane Smith', 200, 0.03, 1000);

account1.deposit(50);
account1.withdraw(20);
account1.addInterest();
account1.checkBalance();
account1.loan(200);


account2.deposit(80);
account2.withdraw(40);
account2.addInterest();
account2.checkBalance();
account2.loan(400);