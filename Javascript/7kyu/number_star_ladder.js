function pattern(n) {
  let output = "1";

  for (let i = 2; i <= n; i++) {
    output += `\n1${"*".repeat(i - 1)}${i}`;
  }

  return output;
}
