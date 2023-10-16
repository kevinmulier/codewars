// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26

function lowercaseCount(str) {
  let totalLowerCase = 0;
  for (let char of str.split("")) {
    if (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123) {
      totalLowerCase++;
    }
  }
  return totalLowerCase;
}
