function makeValley(arr) {
  const sortedArr = [...arr].sort((a, b) => b - a);
  const left = [];
  const right = [];

  sortedArr.forEach((value, index) => {
    if (index % 2 === 0) {
      left.push(value);
    } else {
      right.unshift(value);
    }
  });

  return [...left, ...right];
}
