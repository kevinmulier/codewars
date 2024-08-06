function presses(phrase) {
  const keyMapping = {
    1: 1,
    2: 4, A: 1, B: 2, C: 3,
    3: 4, D: 1, E: 2, F: 3,
    4: 4, G: 1, H: 2, I: 3,
    5: 4, J: 1, K: 2, L: 3,
    6: 4, M: 1, N: 2, O: 3,
    7: 5, P: 1, Q: 2, R: 3, S: 4,
    8: 4, T: 1, U: 2, V: 3,
    9: 5, W: 1, X: 2, Y: 3, Z: 4,
    0: 2, ' ': 1, '*': 1, '#': 1
  };
  
  let normalizedPhrase = phrase.toUpperCase();

  let totalPresses = 0;
  for (let char of normalizedPhrase) {
    totalPresses += keyMapping[char] || 0;
  }

  return totalPresses;
}
