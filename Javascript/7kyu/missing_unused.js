function unusedDigits(...args) {
  const combinedDigits = args.map((num) => num.toString()).join('');

  return [...'0123456789'].filter((digit) => !combinedDigits.includes(digit)).join('');
}
