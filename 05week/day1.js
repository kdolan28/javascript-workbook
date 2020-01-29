let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let squaredArr = numArray.map(function(element) {
  return element * element;
});

// optional syntax

// let squaredArr = numArray.map(value => value*value)

let fiteredArr = squaredArr.filter(function(element) {
  return element % 4 === 0;
});

let reducedArr = fiteredArr.reduce(function(prev, curr) {
  return prev + curr;
});

console.log(reducedArr);
