function collinearity(x1, y1, x2, y2) {
  const crossProduct = x1 * y2 - y1 * x2;

  return crossProduct === 0;
}
