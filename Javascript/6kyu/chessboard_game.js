function game(n) {
  if (n === 0) return [0];

  const square = n * n;

  if (square % 2 === 0) {
    return [square / 2];
  } else {
    return [square, 2];
  }
}
