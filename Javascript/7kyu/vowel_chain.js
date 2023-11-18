// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

function solve(s) {
  const vowels = "aeiou".split("");
  let longestVowelChain = 0;
  let currentChain = 0;

  for (let el of s.split("")) {
    if (vowels.includes(el)) {
      currentChain++;
      if (currentChain > longestVowelChain) {
        longestVowelChain = currentChain;
      }
    } else {
      currentChain = 0;
    }
  }

  return longestVowelChain;
}
