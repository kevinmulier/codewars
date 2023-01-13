// Kata

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// Solution

function abbrevName(name) {
  name = name.split(" ");
  for (let subName of name) {
    name[name.indexOf(subName)] = subName.charAt(0).toUpperCase();
  }
  return name.join(".");
}

// Better

const abbrevName = (name) =>
  name
    .split(" ")
    .map((i) => i.charAt(0).toUpperCase())
    .join(".");
