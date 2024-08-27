function counterEffect(hitCount) {
  return hitCount.split('').map((digit) => {
    const num = parseInt(digit, 10);
    return Array.from({ length: num + 1 }, (_, index) => index);
  });
}
