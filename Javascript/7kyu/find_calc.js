function calcType(a, b, res) {
  switch (true) {
    case a - b === res:
      return 'subtraction';
    case a + b === res:
      return 'addition';
    case a * b === res:
      return 'multiplication';
    case a / b === res:
      return 'division';
  }
}
