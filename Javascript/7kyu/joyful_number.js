function numberJoy(n) {
  const sum = [...n.toString()].reduce((acc, c) => acc + Number(c), 0);
  return sum * Number(sum.toString().split('').reverse().join('')) === n;
}
