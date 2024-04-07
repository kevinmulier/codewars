const evenLast = (numbers) => numbers.reduce((acc, c, i) => (i % 2 ? acc : acc + c * numbers[numbers.length - 1]), 0);

// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.
