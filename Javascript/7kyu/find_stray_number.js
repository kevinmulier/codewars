// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  const uniquesNum = {};
  for (let number of [...new Set(numbers)]) {
    uniquesNum[number] = 0;
  }
  for (let number of numbers) {
    uniquesNum[number] += 1;
  }
  for (let unique of Object.keys(uniquesNum)) {
    if (uniquesNum[unique] === 1) {
      return Number(unique);
    }
  }
}
