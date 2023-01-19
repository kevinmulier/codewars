// Kata

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Solution

function isTriangle(a, b, c) {
  let arrSides = [a, b, c];
  arrSides = arrSides.sort((a, b) => a - b);
  if (arrSides[2] >= arrSides[1] + arrSides[0]) {
    return false;
  }
  return true;
}
