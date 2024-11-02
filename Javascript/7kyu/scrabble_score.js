const scrabbleScore = (str) =>
  str
    .toUpperCase()
    .replaceAll(' ', '')
    .split('')
    .reduce((acc, c) => acc + $dict[c], 0);
