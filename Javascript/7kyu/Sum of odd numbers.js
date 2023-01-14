// Kata

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// My solution

function rowSumOddNumbers(n) {
  // TODO
  let baseNumber = 1;
  let result;
  for (let i = 0; i < n; i++) {
    baseNumber = baseNumber + 2 * i;
    result = (baseNumber + i) * (i + 1);
  }
  return result;
}

// Alt solution

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
