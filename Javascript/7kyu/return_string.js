// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

function makeString(s) {
  const separatedStr = s.split(" ");
  let finalStr = [];
  for (let el of separatedStr) {
    finalStr.push(el[0]);
  }
  return finalStr.join("");
}
