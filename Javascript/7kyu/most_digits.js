// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

const findLongest = (array) => {
  let currentLongest = 0;
  for (let i = 0; i < array.length; i++) {
    if (("" + array[i]).length > ("" + currentLongest).length) {
      currentLongest = array[i];
    }
  }
  return currentLongest;
};
