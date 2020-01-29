let array = [0, 1, 0, 3, 12];
function sort(arr) {
  let len = arr.length;
  for (i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
      i--;
      len--;
    }
  }
}

sort(array);
console.log(array);
