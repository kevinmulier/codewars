// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

// If you like this Kata, please try:

// Last digit symmetry

// Alternate capitalization

function solve(arr) {
  let solvedArr = [];
  for (let element of arr) {
    let sum = 0;
    for (let i = 0; i < element.length; i++) {
      if (element.toLowerCase().charCodeAt(i) - 97 == i) {
        sum += 1;
      }
    }
    solvedArr.push(sum);
  }
  return solvedArr;
}
