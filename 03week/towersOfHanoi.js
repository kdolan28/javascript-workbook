"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//movePiece
//move the top piece from the top of startStack to the top of endStack
function movePiece(startStack, endStack) {
  // Your code here
}
// isLegal
// if the move is legal
//return true
//if the move is not legal
//return false
//a legal move is when the end stack is empty and the top from the start stack is smaller than the top piece of the end stack
//a legal move is when there is at least one piece in the start stack
function isLegal(startStack, endStack) {
  // Your code here
}

//check for win
//if the player one, return true
//if the player did not win, return false
//a win is when a player has moved all 4 blocks to stack b or c
function checkForWin() {
  // Your code here
}

//takes in the user input for startStack and endStack
//and digitally plays the round
function towersOfHanoi(startStack, endStack) {
  // Your code here
  //check to see if the move is legal
  //if the move is legal
  //  -move the piece
  //  -check if they won
  //    -tell them they won
  //if the move is not legal
  //  -tell them the move is not legal
}

function getPrompt() {
  printStacks();
  rl.question("start stack: ", startStack => {
    rl.question("end stack: ", endStack => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
