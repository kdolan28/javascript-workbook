//this function takes in two inputs
//x: the first number to add
//y: the second number to add
//returns the sum
function sum1(x, y) {
  //creates a new varaible z that is the sum of x and y passed in
  let z = x + y;
  //return the computed sum z
  return z;
}

let sum2 = function(a, b, c) {
  let ab = a + b;
  console.log("the sume of the first two numbers is", ab);

  let abc = ab + c;
  console.log("the sum for all three numbers is", abc);
  return abc;
};

let sum3 = (l, m, n, o, p) => {
  let lm = sum1(l, m);
  let nop = sum2(n, o, p);
  let finalSum = sum1(lm, nop);
  return finalSum;
};

console.log(sum3(1, 1, 2, 3, 5));

function foo() {
  console.log("I am foo.");
}

function bar(a, b) {
  console.log("I am bar.");
  console.log("the first input is a", a);
  console.log("the second input is b", b);
}

let x = function(n) {
  if (n > 0) {
    return "p";
  } else {
    return "n";
  }
};

console.log(x(25));

foo();
bar(1, 2);
bar("Hello");
bar("Hi", "there", "friend");
