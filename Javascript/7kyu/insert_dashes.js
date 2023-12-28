// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
  const digits = num.toString().split("");
  let result = "";

  for (let i = 0; i < digits.length; i++) {
    result += digits[i];
    if (isOdd(digits[i]) && isOdd(digits[i + 1])) {
      result += "-";
    }
  }

  return result;
}

function isOdd(digit) {
  return digit % 2 === 1;
}
