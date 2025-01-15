function pyramid(balls) {
  let levels = 0;
  let totalBalls = 0;

  while (totalBalls + levels + 1 <= balls) {
    levels++;
    totalBalls += levels;
  }

  return levels;
}
