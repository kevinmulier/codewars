function noIfsNoButs(a, b) {
  const comparison = Math.sign(a - b);
  const result = {
    [-1]: `${a} is smaller than ${b}`,
    [0]: `${a} is equal to ${b}`,
    [1]: `${a} is greater than ${b}`,
  };
  return result[comparison];
}
