function howMuch(m, n) {
  let results = [];

  if (m > n) [m, n] = [n, m];

  for (let f = m; f <= n; f++) {
    if ((f - 1) % 9 === 0) {
      let c = (f - 1) / 9;
      if ((f - 2) % 7 === 0) {
        let b = (f - 2) / 7;
        results.push([`M: ${f}`, `B: ${b}`, `C: ${c}`]);
      }
    }
  }

  return results;
}
