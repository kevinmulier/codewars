// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// Solution

function incrementString(strng) {
  let strngModified = strng.split("");
  //   Check if last char isNaN, add 1 at the end
  if (isNaN(strngModified[strngModified.length - 1])) {
    return strngModified.join("") + 1;
  } else {
    for (let i = strngModified.length - 1; i >= 0; i--) {
      //       Check if the length of the array is 1, and simply add 1 to the result
      if (strngModified.length === 1) {
        return String(Number(strngModified) + 1);
      }
      //       Check if the char at i isNaN
      if (isNaN(strngModified[i])) {
        return strngModified.slice(0, i + 1).join("") + (Number(strngModified.slice(i + 1).join("")) + 1);
      }
      //       Check if the char at i is a 0
      if (Number(strngModified[i]) === 0) {
        if (Number(strngModified[i + 1]) === 9) {
          return strngModified.slice(0, i).join("") + (Number(strngModified.slice(i + 1).join("")) + 1);
        } else if (Number(strngModified[i + 1]) > 0) {
          return strngModified.slice(0, i + 1).join("") + (Number(strngModified.slice(i).join("")) + 1);
        } else {
          return strngModified.slice(0, i).join("") + 1;
        }
      }
    }
  }
}

// Better solution

const incrementString = (s) => s.replace(/[0-8]?9*$/, (m) => String(++m));
