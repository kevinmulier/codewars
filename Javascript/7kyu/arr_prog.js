function ArithmeticSequenceSum(a, r, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += a + i * r;
  }
  return sum;
}
