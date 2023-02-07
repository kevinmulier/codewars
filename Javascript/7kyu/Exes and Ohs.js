// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Solution

function XO(str) {
  let arrO = str
    .toLowerCase()
    .split("")
    .filter((o) => o === "o");
  let arrX = str
    .toLowerCase()
    .split("")
    .filter((x) => x === "x");
  return arrO.length === arrX.length;
}
