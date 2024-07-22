function dbSort(a) {
  const numbers = a.filter((el) => typeof el === 'number').sort((a, b) => a - b);
  const strings = a.filter((el) => typeof el === 'string').sort();

  return [...numbers, ...strings];
}
