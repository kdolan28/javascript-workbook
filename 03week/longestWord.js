//Write a function that takes in a sentence and returns the longest word in the sentence.
"use srtict";

function findLongest(sentence) {
  let words = sentence.split(" ");
  console.log("Sentence", sentence);
  console.log("words", words);
  let longest = words[0];
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    if (currentWord.length > longest.length) {
      longest = currentWord;
    }
  }
  return longest;
}

function handleClick() {
  let textAreaElement = document.getElementById("userInput");
  let mySentence = textAreaElement.value;
  let theWord = findLongest(mySentence);
  let resultElement = document.getElementById("result");
  resultElement.innerText = theWord;
}
