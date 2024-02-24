function anagramDifference(w1, w2) {
  const charsW1 = {};
  const charsW2 = {};

  const splittedW1 = w1.split('');
  const splittedW2 = w2.split('');

  splittedW1.forEach(
    (char) => (charsW1[char] = charsW1[char] ? charsW1[char] + 1 : 1),
  );
  splittedW2.forEach(
    (char) => (charsW2[char] = charsW2[char] ? charsW2[char] + 1 : 1),
  );

  let deletedCharsCount = 0;

  const uniqueChars = [...new Set(splittedW1.concat(splittedW2))];

  for (let char of uniqueChars) {
    deletedCharsCount += charsW1[char]
      ? charsW2[char]
        ? Math.abs(charsW1[char] - charsW2[char])
        : charsW1[char]
      : charsW2[char];
  }

  return deletedCharsCount;
}

// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word : c od e w ar s (4 letters removed)
// Second word : ha c k er r a nk (6 letters removed)
// Result : 10
// Hints
// A word is an anagram of another word if they have the same letters (usually in a different order).
// Do not worry about case. All inputs will be lowercase.
