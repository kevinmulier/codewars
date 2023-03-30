// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

const replace = (s) =>
  s
    .split("")
    .map((letter) => (letter.match(/^[aeiou]$/i) ? "!" : letter))
    .join("");
