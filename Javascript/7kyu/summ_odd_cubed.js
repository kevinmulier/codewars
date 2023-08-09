// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  for (let el of arr) {
    if (typeof el != "number") {
      return undefined;
    }
  }

  let cubedOddTotal = 0;
  for (let number of arr) {
    let cubedNum = number ** 3;
    if (cubedNum % 2 != 0) {
      cubedOddTotal += cubedNum;
    }
  }

  return cubedOddTotal;
}
