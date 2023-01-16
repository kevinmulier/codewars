// Kata

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// Solution

function isPangram(string) {
  let counter = 0;
  const lettersArray = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < lettersArray.length; i++) {
    if (string.toLowerCase().includes(lettersArray[i])) {
      counter++;
    }
  }
  return counter === 26 ? true : false;
}
