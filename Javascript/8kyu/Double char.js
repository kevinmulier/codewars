// Kata

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Solution

const doubleChar = (str) => {
  let finalString = [];
  str.split("").forEach((element) => finalString.push(element.repeat(2)));
  return finalString.join("");
};
