// Kata

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//  --------------------------------------------------

// My solution

function getCount(str) {
  const strSplitted = str.split("");
  let vowelsResult = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < strSplitted.length; i++) {
    if (vowels.includes(strSplitted[i]) === true) {
      vowelsResult++;
    }
  }
  return vowelsResult;
}