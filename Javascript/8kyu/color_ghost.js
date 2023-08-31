// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

var Ghost = function () {
  var possibleColors = ["white", "yellow", "purple", "red"];
  var randomIndex = Math.floor(Math.random() * possibleColors.length);

  this.color = possibleColors[randomIndex];
};
