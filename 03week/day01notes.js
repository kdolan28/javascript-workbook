"use strict";
//return the sum of all the numbers in the list
function sum(list) {
  let result = 0;
  for (let j = 0; j < list.length; j++) {
    result = result + list(j);
  }

  return result;
}

function avg(list) {
  sum(list) / list.length;
}
