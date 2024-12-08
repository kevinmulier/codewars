function singleDigit(n) {
  if (n < 10) return n;

  while (n >= 10) {
    n = n
      .toString(2)
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }

  return n;
}
