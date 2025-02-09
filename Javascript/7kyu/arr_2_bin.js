function arr2bin(arr) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) {
      return false;
    }
  }

  const sum = arr.reduce((acc, cur) => acc + cur, 0);

  return sum.toString(2);
}
