// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function upArray(arr) {
  if (arr.length === 0) {
    return null;
  }
  for (let num of arr) {
    if (num < 0 || num > 9) {
      return null;
    }
  }

  let carry = 1;
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    let sum = arr[i] + carry;
    if (sum >= 10) {
      carry = 1;
      result.unshift(sum % 10);
    } else {
      carry = 0;
      result.unshift(sum);
    }
  }

  if (carry === 1) {
    result.unshift(1);
  }

  return result;
}
