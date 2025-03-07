function isTriangular(T) {
  if (T < 1) return false;
  let discriminant = 1 + 8 * T;
  let sqrtDiscriminant = Math.sqrt(discriminant);
  if (Number.isInteger(sqrtDiscriminant)) {
    let n = (-1 + sqrtDiscriminant) / 2;
    return Number.isInteger(n);
  }
  return false;
}