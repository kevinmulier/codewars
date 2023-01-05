// Kata

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// My solution

function accum(s) {
  // your code
  s = s.toUpperCase().split("");
  let finalString = `${s[0]}`;
  for (let i = 1; i < s.length; i++) {
    finalString += `-${s[i]}${s[i].toLowerCase().repeat(i)}`;
  }
  return finalString;
}