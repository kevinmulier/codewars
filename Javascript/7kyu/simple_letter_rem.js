function solve(s, k) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let char of alphabet) {
    while (k > 0 && s.includes(char)) {
      s = s.replace(char, "");
      k--;
    }
    if (k === 0) break;
  }
  return s;
}
