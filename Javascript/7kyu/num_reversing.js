function reverse(n) {
  let reversed = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    reversed = reversed * 10 + lastDigit;
    n = Math.floor(n / 10);
  }

  return reversed;
}
