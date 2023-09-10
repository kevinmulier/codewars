function reverse(str) {
  let reversedStr = [];
  for (let i = 0; i < str.split(" ").length; i++) {
    i % 2 ? reversedStr.push(str.split(" ")[i].split("").reverse().join("")) : reversedStr.push(str.split(" ")[i]);
  }
  return reversedStr.join(" ").trim();
}

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
