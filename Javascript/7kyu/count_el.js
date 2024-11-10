function solve(s) {
  let counts = [0, 0, 0, 0];
  for (let char of s) {
    if (char >= 'A' && char <= 'Z') {
      counts[0]++;
    } else if (char >= 'a' && char <= 'z') {
      counts[1]++;
    } else if (char >= '0' && char <= '9') {
      counts[2]++;
    } else {
      counts[3]++;
    }
  }
  return counts;
}
