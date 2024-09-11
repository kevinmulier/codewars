function computeDepth(n) {
  let digits = new Set();
  let count = 0;

  while (digits.size < 10) {
    count++;
    let multiple = n * count;
    let str = multiple.toString();

    for (let digit of str) {
      digits.add(digit);
    }
  }

  return count;
}
