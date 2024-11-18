function wordPattern(word) {
  word = word.toLowerCase();
  let pattern = "";
  let charMap = {};
  let nextCode = 0;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!(char in charMap)) {
      charMap[char] = nextCode++;
    }
    pattern += charMap[char] + ".";
  }

  return pattern.slice(0, -1);
}
