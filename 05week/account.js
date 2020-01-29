//create two classes:
//"Account" Class=
//-account number // this is passed into the constructor
//-owner // passed into the consrtrutor
//-a list of transactions // starts off empty
//Method called balance()
//-a way to get the current balance
//loops through all transactions and returns the current balance

//"Transaction" Class=
//-dollar amount (either positive or negative)
//-payee // passed into constructor
//-date // auto set in the constructor

//create a savings account that extends account
//-interest rate
//Method=
//-accrueInterest(): gets the balance and adds a new transaction and adds it to the list
//for the interest accrued on the account

//Method=
//addTransaction(amount,payee) // checks to see if the amount is valid

class Account {
  constructor(acctNum, owner) {
    this.acctNum = acctNum;
    this.owner = owner;
    this.newTrans = [];
  }
  addTransaction(amnt, vendor) {
    if (balance < amount) {
    }
    let newTrans = new Transaction(amnt, vendor);
    tansaction.push(newTrans);
  }

  balance() {}
}

class Transaction {
  constructor(amnt, vendor, date) {
    this.amnt = amnt;
    this.vendor = vendor;
    this.date = date || new Date();
  }
}

let acctA = new Account("123-456-789", "John Doe");
acctA.addTransaction("Deposit", 1000);
acctA.addTransaction("Target", -45);
acctA.addTransaction("Free Birds", -7.35);
console.log(acctA, balance()); //should print 942.65
acctA.addTransaction("Fraud", -1000); // this should not go through
console.log(acctA.balance()); //should print 942.65

//if you create 2 different methods for deposits and debits
let acctA = new Account("123-456-789", "John Doe");
acctA.deposit(1000);
acctA.debit(45);
acctA.debit(7.35);
console.log(acctA, balance()); //should print 942.65
acctA.debit(1000); // this should not go through
console.log(acctA.balance()); //should print 942.65
