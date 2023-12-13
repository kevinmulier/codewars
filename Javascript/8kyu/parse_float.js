function parseF(s) {
  if (typeof s !== "string" && typeof s !== "number") {
    return null;
  }
  return isNaN(Number(s)) ? null : Number(s);
}

// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
