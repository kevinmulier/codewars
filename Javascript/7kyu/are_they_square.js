function isSquare(arr) {
  if (arr.length === 0) return undefined;
  return arr.every((num) => Number.isInteger(Math.sqrt(num)));
}
