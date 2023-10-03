// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

function maxProduct(numbers, size) {
  numbers.sort((a, b) => b - a);
  let result = numbers[0];
  for (let i = 1; i < size; i++) {
    result *= numbers[i];
  }
  return result;
}
