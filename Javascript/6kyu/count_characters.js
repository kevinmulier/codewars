// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  let uniqueCharacters = [...new Set(string.split(""))];
  let charactersCount = {};
  for (let element of uniqueCharacters) {
    charactersCount[element] = 0;
  }
  for (let character of string.split("")) {
    charactersCount[character] += 1;
  }
  return charactersCount;
}

// Shorter solution :
function count(string) {
  let uniqueCharacters = [...new Set(string.split(""))];
  let charactersCount = {};
  for (let character of string.split("")) {
    charactersCount[character] ? (charactersCount[character] += 1) : (charactersCount[character] = 1);
  }
  return charactersCount;
}
