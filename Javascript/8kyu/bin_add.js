function arr2bin(arr) {
  const sum = arr.reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);

  return sum.toString(2);
}
