function lastDigit(n, d) {
  let strN = n.toString();

  if (d <= 0) {
    return [];
  }

  if (d >= strN.length) {
    return strN.split("").map(Number);
  }

  return strN.slice(-d).split("").map(Number);
}
