"use strict";
console.log("loading js script");

let button2 = document.getElementById("button2");
button2.addEventListener("click", handleClick);

let inputElement = document.getElementById("word");
inputElement.addEventListener("keyup", function() {
  let value = document.getElementById("word").value;
  console.log(value.length);
  let span = document.getElementById("wordLength");
  span.innerText = value.length;
});

function handleClick() {
  console.log("I am inside handleClick");
  // get the word
  var myInput = document.getElementById("word");
  let word = myInput.value;
  console.log("word :", word);
  // translate the word
  let translation = pigLatin(word);
  console.log("translation", translation);
  // update the span
  let translatedWord = document.getElementById("translatedWord");
  translatedWord.innerText = translation;
  console.log("i am at the end of handleClick");
}

function pigLatin(word) {
  return word + "ay";
}
