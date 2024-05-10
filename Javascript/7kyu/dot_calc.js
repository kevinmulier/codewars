function dotCalculator(equation) {
  const splittedEquation = equation.split(' ');
  const l1 = splittedEquation[0].length;
  const l2 = splittedEquation[2].length;

  switch (splittedEquation[1]) {
    case '+':
      return '.'.repeat(l1 + l2);
    case '-':
      return '.'.repeat(l1 - l2);
    case '*':
      return '.'.repeat(l1 * l2);
    case '//':
      return '.'.repeat(l1 / l2);
    default:
      return '';
  }
}
