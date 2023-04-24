function mix(s1, s2) {
  let s1Uniques = {};
  let s2Uniques = {};

  let regex = /^[a-z]+/g;

  for (let character of s1.split("").sort()) {
    if (regex.test(character)) {
      if (s1Uniques[character]) {
        s1Uniques[character] += 1;
      } else {
        s1Uniques[character] = 1;
      }
    }
  }
  console.log(s1.split("").sort());
  console.log(s1Uniques);

  for (let character of s2.split("").sort()) {
    if (regex.test(character)) {
      if (s2Uniques[character]) {
        s2Uniques[character] += 1;
      } else {
        s2Uniques[character] = 1;
      }
    }
  }
  console.log(s2Uniques);
}
