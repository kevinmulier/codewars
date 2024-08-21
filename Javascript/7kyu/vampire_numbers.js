function vampireTest(a, b) {
  let product = (a * b).toString().split('');
  let multiplicands = `${a}${b}`;

  for (let char of product) {
    multiplicands = multiplicands.replace(char, '');
  }

  return multiplicands.length === 0;
}
