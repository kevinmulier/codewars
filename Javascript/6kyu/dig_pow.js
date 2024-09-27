function digPow(n, p) {
  const digits = n.toString().split('');

  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(parseInt(digits[i]), p + i);
  }

  if (sum % n === 0) {
    return sum / n;
  } else {
    return -1;
  }
}
