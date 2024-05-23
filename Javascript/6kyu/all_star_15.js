function rotate(str) {
  if (!str) {
    return [];
  }

  let arr = [str];

  while (arr.length < str.length) {
    arr.unshift(arr[0].slice(-1) + arr[0].slice(0, -1));
  }

  return arr;
}
