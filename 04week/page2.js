//make an array of objects
//where each object represents an credit card transaction

let transaction = [
  { date: "01/01/2020", payee: "Target", amt: 43.0 },
  { date: "01/01/2020", payee: "Hat Creek", amt: 17.0 },
  { date: "01/01/2020", payee: "Shell", amt: 55.0 },
  { date: "01/01/2020", payee: "HEB", amt: 102.0 },
  { date: "01/01/2020", payee: "Texco", amt: 22.0 },
  { date: "01/01/2020", payee: "Best Buy", amt: 222.0 },
  { date: "01/01/2020", payee: "Regal", amt: 83.0 }
];

transaction.forEach(function(element) {
  console.log(`I spent ${element.amt} at ${element.payee} on ${element.date}.`);
});

let discounted = transaction.map(function(element, index) {
  let newTransaction = {};
  newTransaction.date = element.date;
  newTransaction.payee = element.payee;
  newTransaction.amt = element.amt * 0.9;
  return newTransaction;
});

discounted.forEach(function(element) {
  console.log(`I spent ${element.amt} at ${element.payee} on ${element.date}.`);
});

let amounts = transaction.map(function(element, index) {
  return element.amt;
});
console.log(`The amounts are = `, amounts);

let suspicious = transaction.filter(function(element, index) {
  if (element.amt > 20) {
    return true;
  } else {
    return false;
  }
});

console.log("I have " + suspicious.length + " suspicious transactions.");

let nums = [4, 3, 6, 2];

let answer = nums.reduce(function(prev, curr, index) {
  let next = prev + curr;
  console.log(" prev = ", prev, "   curr = ", curr, "   next = ", next);
  return next;
});

console.log("the answer is", answer);

let greatest = transaction.reduce(function(prev, curr, index) {
  if (prev.amt > curr.amt) {
    return prev;
  } else {
    return curr;
  }
});

console.log(
  `The greatest amount was at ${greatest.payee} for ${greatest.amt}.`
);
