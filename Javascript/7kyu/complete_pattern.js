function pattern(n) {
  if (n <= 0) return "";

  let result = [];

  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = i; j <= n; j++) {
      line += j;
    }
    result.push(line);
  }

  return result.join("\n");
}
