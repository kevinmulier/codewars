// Kata

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// My solution
function positiveSum(arr) {
  let result = 0;
  arr.forEach((numb) => {
    if (numb > 0) {
      result += numb;
    }
  });
  return result;
}

// One liner

const positiveSum = (arr) => arr.filter((numb) => numb > 0).reduce((a, b) => a + b, 0);
