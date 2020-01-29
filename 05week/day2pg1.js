array1 = ["john", "mark", "matt", "bob"];
array2 = ["jim", "mark", "andrew", "matt"];

var testDiff = diff(array1, array2);
console.log("The shared elements are", testDiff.shared);
console.log("The sideA elements are", testDiff.sideA);
console.log("The sideB elements are", testDiff.sideB);

/*
    testDiff =>{
        shared: ["mark",matt]
        sideA: ["john", "bob"]
        sideB: ["jim", "andrew"]
    }
*/

function diff(array1, array2) {
  //for each element in the first array, see if it exits in 2nd
  //if true = shared. If not it is sideA
  //for each element in the second array, see if it exists in the first array.
  //if false = sideB

  let shared = array1.filter(function(element) {
    return array2.includes(element);
  });

  let sideA = array1.filter(function(element) {
    return !array2.includes(element);
  });

  let sideB = array2.filter(function(element) {
    return !array1.includes(element);
  });

  var result = {
    shared: shared,
    sideA: sideA,
    sideB: sideB
  };

  return result;
}
