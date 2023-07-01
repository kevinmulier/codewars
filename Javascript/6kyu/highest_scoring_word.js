function high(x) {
  x = x.split(" ");
  let currentBestScore = 0;
  let bestIndex = 0;
  for (let i = 0; i < x.length; i++) {
    let currentWordScore = 0;
    x[i].split("").forEach((el) => (currentWordScore += el.charCodeAt(0) - 96));
    if (currentWordScore > currentBestScore) {
      currentBestScore = currentWordScore;
      bestIndex = i;
    }
  }
  return x[bestIndex];
}

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
