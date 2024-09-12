function calculate(str) {
  const operator = str.includes('loses') ? '-' : '+';
  const numbers = str.match(/\d+/g).map(Number);
  const result = eval(`${numbers[0]} ${operator} ${numbers[1]}`);
  return result;
}
