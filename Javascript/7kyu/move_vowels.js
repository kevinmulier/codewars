function moveVowel(str) {
  const vowels = str.match(/[aeiou]/g) || [];
  const consonants = str.replace(/[aeiou]/g, "");
  return consonants + vowels.join("");
}
