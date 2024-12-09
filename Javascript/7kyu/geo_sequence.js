function geometricSequenceElements(a, r, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(a * Math.pow(r, i));
  }
  return result.join(", ");
}
