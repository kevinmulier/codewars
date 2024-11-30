const sumSquareEvenRootOdd = (ns) => {
  const transformed = ns.map((num) => (num % 2 === 0 ? num ** 2 : Math.sqrt(num)));
  const sum = transformed.reduce((acc, val) => acc + val, 0);
  return parseFloat(sum.toFixed(2));
};
