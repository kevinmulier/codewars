function alienLanguage(str) {
  str = str.toUpperCase();
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let lastLetter = word.slice(-1).toLowerCase();
    let restOfWord = word.slice(0, -1).toUpperCase();
    let convertedWord = restOfWord + lastLetter;
    words[i] = convertedWord;
  }
  let result = words.join(' ');
  return result;
}
