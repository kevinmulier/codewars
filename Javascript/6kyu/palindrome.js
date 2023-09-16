const longestPalindrome = (s) => {
  let result = 0;
  const l = s.length;
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j <= l; j++) {
      const sub = s.slice(i, j);
      if (sub === sub.split``.reverse().join``) {
        result = Math.max(result, sub.length);
      }
    }
  }
  return result;
};

// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0
