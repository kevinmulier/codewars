function fiveLine(s) {
  const trimmed = s.trim();

  let result = '';

  for (let i = 1; i <= 5; i++) {
    result += trimmed.repeat(i) + (i < 5 ? '\n' : '');
  }

  return result;
}
