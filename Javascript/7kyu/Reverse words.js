// Kata

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// My solution

function reverseWords(str) {
  // Go for it
  let finalString = [];
  str = str.split(/(\s+)/);
  for (let word of str) {
    finalString.push(word.split("").reverse().join(""));
  }
  return finalString.join("");
}
