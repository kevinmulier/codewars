// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let sortedArr = array.slice();
  let isSame = true;
  let i = 0;
  sortedArr.sort((a, b) => a - b);
  while (isSame == true && i < array.length) {
    if (sortedArr[i] === array[i]) {
      isSame = true;
    } else {
      isSame = false;
    }
    i++;
  }
  if (isSame == true) {
    return "yes, ascending";
  } else {
    for (let i = 0; i < array.length; i++) {
      sortedArr.sort((a, b) => b - a);
      if (sortedArr[i] === array[i]) {
        isSame = true;
      } else {
        isSame = false;
      }
    }
    return isSame ? "yes, descending" : "no";
  }
}
