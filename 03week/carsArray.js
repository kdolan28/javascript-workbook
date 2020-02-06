let cars = ["Ford", "Honda", "Chevrolet", "Dodge"];

console.log(cars.length);

let moreCars = ["Toyota", "Volvo", "Acura", "Honda"];
let totalCars = cars.concat(moreCars);
console.log(totalCars);
console.log(totalCars.indexOf("Honda"));
console.log(totalCars.lastIndexOf("Ford"));

let stringOfCars = totalCars.join();
console.log(stringOfCars);

totalCars = stringOfCars.split(",");
console.log(totalCars);

let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

let sortedCars = carsInReverse.sort();
console.log(carsInReverse);
let yourPrediction = "Acura";

console.log(carsInReverse.indexOf("Acura"));

let removedCars = carsInReverse.slice(3, 5);
console.log(removedCars);

let splicedCars = carsInReverse.splice(1, 2, "Ford", "Honda");
console.log(splicedCars);
console.log(carsInReverse);

carsInReverse.push("Chevrolet", "Dodge");
console.log(carsInReverse);

console.log(carsInReverse.pop());
console.log(carsInReverse.shift());
console.log(carsInReverse);

carsInReverse.unshift("BMW");
console.log(carsInReverse);

let numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34];

numbers.forEach(function sum(element, index, arr) {
  arr[index] += 2;
  return arr;
});

console.log(numbers);
