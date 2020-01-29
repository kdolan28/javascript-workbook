let someArr = [3, 1, 2, 7, 10, 8, 11, 9];

function bubbleSort(arr) {
  let len = arr.length;
  let flipped;
  do {
    flipped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        /*let in_i = arr[i];
      let in_iplusOne = arr[i + 1];
      arr[i] = in_iplusOne;
      arr[i + 1] = in_i;*/
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        flipped = true;
      }
    }
  } while (flipped);
}

console.log("Array before sort:", someArr);
bubbleSort(someArr);
console.log("Array after sort:", someArr);
