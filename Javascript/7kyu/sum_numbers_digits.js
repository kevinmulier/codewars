// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

const sumDigits = (number) =>
  number
    .toString()
    .split("")
    .filter((el) => /\d/i.test(el))
    .reduce((a, b) => Number(a) + Number(b), 0);
