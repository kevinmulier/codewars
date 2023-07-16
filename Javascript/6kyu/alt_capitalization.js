// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s) {
  let s1 = [];
  let s2 = [];
  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      s1.push(s[i].toUpperCase());
      s2.push(s[i]);
    } else {
      s2.push(s[i].toUpperCase());
      s1.push(s[i]);
    }
  }
  return [s1.join(""), s2.join("")];
}
