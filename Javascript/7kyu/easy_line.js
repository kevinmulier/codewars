function easyLine(n) {
  let logSum = 0;
  for (let i = 1; i <= n; i++) {
    logSum += Math.log(n + i) - Math.log(i);
  }
  return Math.round(logSum);
}