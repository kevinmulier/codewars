function gap(num) {
  let binary = num.toString(2);
  let gaps = binary.split('1');

  if (binary.endsWith('0')) {
    gaps.pop();
  }
  if (binary.startsWith('0')) {
    gaps.shift();
  }

  let longestGap = 0;
  for (let gap of gaps) {
    if (gap.length > longestGap) {
      longestGap = gap.length;
    }
  }

  return longestGap;
}
