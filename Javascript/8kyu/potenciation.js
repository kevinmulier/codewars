function power(x, y) {
  if (y === 0) {
    return 1;
  }

  let result = x;

  for (let i = 1; i < y; i++) {
    result *= x;
  }

  return result;
}
