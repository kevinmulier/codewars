function cake(x, y) {
  if (x === 0) return "That was close!";

  let total = 0;
  for (let i = 0; i < y.length; i++) {
    total += i % 2 === 0 ? y.charCodeAt(i) : y.charCodeAt(i) - 96;
  }

  return total > x * 0.7 ? "Fire!" : "That was close!";
}
