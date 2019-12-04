//Write a JavaScript program to display the current day and time.
let currentDate = new Date();
console.log("The current date and time is ", currentDate);

//Write a JavaScript program to convert a number to a string.
var num = 15;
var n = num.toString();
console.log("The number is", num);
console.log("The string representing the number is ", n);

//Write a JavaScript program to convert a string to the number.
var string = "Alphabet soup";
var integer = string.length;
console.log("The string is", string);
console.log("The number representing the string is", integer);

//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
var name = "John Doe";
var age = 12;
var isMale = true;
var x = null;
var y;
var z = NaN;
console.log("The variable name is a", typeof name);
console.log("The variable age is a", typeof age);
console.log("The variable isMale is a", typeof isMale);
console.log("The variable x is a", typeof x);
console.log("The variable y is a", typeof y);
console.log("The variable z is a", typeof z);

//Write a JavaScript program that adds 2 numbers together.
var sum = 99 + 1;
console.log("The variable sum equlas", sum);

//Write a JavaScript program that runs only when 2 things are true.
var numOne = 15;
var numTwo = 13;
if (numOne && numTwo) {
  console.log("Both are truthy");
}

//Write a JavaScript program that runs when 1 of 2 things are true.
var redOne = 1;
var redTwo = 0;
if (redOne || redTwo) {
  console.log("One is truthy");
}

//Write a JavaScript program that runs when both things are not true.
var thingOne = 0;
var thingTwo = 0;
if (!thingOne && !thingTwo) {
  console.log("Both are falsey");
}
