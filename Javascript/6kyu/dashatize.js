function dashatize(num) {
  if (isNaN(num)) return "NaN";
  num = Math.abs(num).toString();
  let result = "";

  for (let i = 0; i < num.length; i++) {
    let digit = num[i];
    if (digit % 2 === 0) {
      result += digit;
    } else {
      result += (i > 0 && num[i - 1] % 2 === 0 ? "-" : "") + digit + "-";
    }
  }

  return result.replace(/^-|-$/g, "");
}

// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'
