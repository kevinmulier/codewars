function solve(arr) {
  const maxSorted = [...arr].sort((a, b) => b - a);
  const minSorted = [...arr].sort((a, b) => a - b);
  const resultArr = [];

  const midIndex = Math.floor(arr.length / 2);

  for (let i = 0; i < midIndex; i++) {
    resultArr.push(maxSorted.shift());
    resultArr.push(minSorted.shift());
  }

  if (arr.length % 2 !== 0) {
    resultArr.push(maxSorted.shift());
  }

  return resultArr;
}
