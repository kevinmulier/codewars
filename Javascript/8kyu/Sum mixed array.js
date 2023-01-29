// Kata

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// Solution

const sumMix = (s) => s.map((element) => Number(element)).reduce((a, b) => a + b);
