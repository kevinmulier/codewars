function dative(word) {
  const frontVowels = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'];
  const backVowels = ['a', 'á', 'o', 'ó', 'u', 'ú'];

  for (let i = word.length - 1; i >= 0; i--) {
    if (frontVowels.includes(word[i])) {
      return word + 'nek';
    }
    if (backVowels.includes(word[i])) {
      return word + 'nak';
    }
  }
  return word;
}
