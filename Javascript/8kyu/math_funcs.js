function cutCube(volume, n) {
  const isPerfectCube = (x) => Number.isInteger(Math.cbrt(x));

  return isPerfectCube(volume) && isPerfectCube(n) && isPerfectCube(volume / n);
}
