"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function handleClick() {
  var input = document.getElementById("word");
  let word = input.value;
  let translation = pigLatin(word);
  let translatedWord = document.getElementById("translatedWord");
  translatedWord.innerText = translation;
}

function pigLatin(word) {
  let trimmedWord = word.trim();
  let loweredWord = trimmedWord.toLowerCase();
  let firstVowelPosition = firstVowel(loweredWord);
  if (firstVowelPosition > 0) {
    return (
      loweredWord.slice(firstVowelPosition) +
      loweredWord.slice(0, firstVowelPosition) +
      "ay"
    );
  }
  return loweredWord + "way";
}

function firstVowel(word) {
  for (var i = 0; i < word.length; i++) {
    if ("aeiou".indexOf(word[i]) !== -1) {
      return i;
    }
  }
}

function getPrompt() {
  rl.question("word ", answer => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  describe("#pigLatin()", () => {
    it("should translate a simple word", () => {
      assert.equal(pigLatin("car"), "arcay");
      assert.equal(pigLatin("dog"), "ogday");
    });
    it("should translate a complex word", () => {
      assert.equal(pigLatin("create"), "eatecray");
      assert.equal(pigLatin("valley"), "alleyvay");
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggyay");
      assert.equal(pigLatin("emission"), "emissionyay");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
  });
} else {
  getPrompt();
}
