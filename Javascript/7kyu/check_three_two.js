function checkThreeAndTwo(array) {
  const occurences = array.reduce((acc, c) => {
    acc[c] ? (acc[c] = acc[c] + 1) : (acc[c] = 1);
    return acc;
  }, {});

  if (Object.keys(occurences).length === 1 || Object.keys(occurences).length > 2) {
    return false;
  }

  return Object.values(occurences).includes(3);
}

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"
