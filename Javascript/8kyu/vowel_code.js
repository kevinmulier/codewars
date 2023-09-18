// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
  const vowelsCharCodes = [97, 101, 105, 111, 117];
  const resultArr = [];

  for (let num of a) {
    vowelsCharCodes.includes(num) ? resultArr.push(String.fromCharCode(num)) : resultArr.push(num);
  }

  return resultArr;
}
