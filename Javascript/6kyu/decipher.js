function decipherThis(str) {
  return str
    .split(" ")
    .map((word) => {
      let charCode = word.match(/\d+/)[0];
      let firstLetter = String.fromCharCode(charCode);
      let restOfWord = word.replace(/\d+/, "");

      if (restOfWord.length >= 2) {
        let secondLetter = restOfWord.charAt(0);
        let lastLetter = restOfWord.charAt(restOfWord.length - 1);
        restOfWord = lastLetter + restOfWord.slice(1, -1) + secondLetter;
      }

      return firstLetter + restOfWord;
    })
    .join(" ");
}

// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'
