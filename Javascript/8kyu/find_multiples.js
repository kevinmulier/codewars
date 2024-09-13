function findMultiples(integer, limit) {
  let multiples = [];
  let multiplier = 1;

  while (integer * multiplier <= limit) {
    multiples.push(integer * multiplier);
    multiplier++;
  }

  return multiples;
}
