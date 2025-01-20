function moreZeros(s) {
  const result = [];
  const seen = new Set();

  for (const char of s) {
    if (seen.has(char)) continue;
    seen.add(char);

    const binary = char.charCodeAt(0).toString(2);
    const zeros = binary.split('0').length - 1;
    const ones = binary.split('1').length - 1;

    if (zeros > ones) {
      result.push(char);
    }
  }

  return result;
}
