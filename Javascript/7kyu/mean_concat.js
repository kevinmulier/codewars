const mean = (lst) => {
  const numbers = lst.filter((el) => !isNaN(el)).map(Number);
  const strings = lst.filter((el) => isNaN(el)).join('');

  const meanNumber = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;

  return [meanNumber, strings];
};
