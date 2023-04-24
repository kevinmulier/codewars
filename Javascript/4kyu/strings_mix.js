function mix(s1, s2) {
  let s1Uniques = {};
  let s2Uniques = {};

  for (let character of s1
    .replaceAll(/[^a-z]/g, "")
    .split("")
    .sort()) {
    if (s1Uniques[character]) {
      s1Uniques[character] += 1;
    } else {
      s1Uniques[character] = 1;
    }
  }
  console.log(s1Uniques);

  for (let character of s2
    .replaceAll(/[^a-z]/g, "")
    .split("")
    .sort()) {
    if (s2Uniques[character]) {
      s2Uniques[character] += 1;
    } else {
      s2Uniques[character] = 1;
    }
  }
  console.log(s2Uniques);

  let uniquesSup1 = [];

  for (let key of Object.keys(s1Uniques)) {
    if (s1Uniques[key] > 1) {
      uniquesSup1.push(key);
    }
  }
  for (let key of Object.keys(s2Uniques)) {
    if (s2Uniques[key] > 1) {
      uniquesSup1.push(key);
    }
  }

  uniquesSup1 = [...new Set(uniquesSup1)];

  let sortedCharacters = [];

  for (let character of uniquesSup1) {
    if (s1Uniques[character] && s2Uniques[character]) {
      switch (true) {
        case s1Uniques[character] > s2Uniques[character]:
          sortedCharacters.push(`1:${character.repeat(s1Uniques[character])}`);
          break;
        case s1Uniques[character] < s2Uniques[character]:
          sortedCharacters.push(`2:${character.repeat(s2Uniques[character])}`);
          break;
        case s1Uniques[character] == s2Uniques[character]:
          sortedCharacters.push(`=:${character.repeat(s1Uniques[character])}`);
          break;
      }
    } else if (s1Uniques[character]) {
      sortedCharacters.push(`1:${character.repeat(s1Uniques[character])}`);
    } else {
      sortedCharacters.push(`2:${character.repeat(s2Uniques[character])}`);
    }
  }
  return sortedCharacters
    .sort()
    .sort((a, b) => b.length - a.length)
    .join("/");
}
