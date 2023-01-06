// Kata
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// Solution

function maps(x) {
  let arrFinal = [];
  for (let a of x) {
    arrFinal.push(a * 2);
  }
  return arrFinal;
}
