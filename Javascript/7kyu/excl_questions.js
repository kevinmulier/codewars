function product(string) {
  let exclamationMarks = 0;
  let questionMarks = 0;

  for (let char of string.split('')) {
    if (char === '!') {
      exclamationMarks++;
    }
    if (char === '?') {
      questionMarks++;
    }
  }

  return exclamationMarks * questionMarks;
}

// Description:
// Count the number of exclamation marks and question marks, return the product.

// Examples
// ""          --->   0
// "!"         --->   0
// "!ab? ?"    --->   2
// "!!"        --->   0
// "!??"       --->   2
// "!???"      --->   3
// "!!!??"     --->   6
// "!!!???"    --->   9
// "!???!!"    --->   9
// "!????!!!?" --->  20
