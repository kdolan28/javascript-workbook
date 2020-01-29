//implement a function that takes in an array
//and returns an array that is double the size
//with each element repeated

let doubleIt = function(original) {
  let doubled = [];

  original.forEach(function(element) {
    doubled.push(element, element);
  });
  return doubled;
};

let growIt = function(theArray) {
  let len = theArray.length;
  for (let i = 0; i < theArray; i++) {
    theArray.push(theArray[i]);
  }
};

let a1 = [1, 4, 5, 6];
let a2 = ["mike", "bob", "smith"];

console.log("a1 doubled = ", doubledA1);
console.log("a2 doubled = ", doubledA2);

growIt(a1);
console.log("expanded A1 = ", a1);
