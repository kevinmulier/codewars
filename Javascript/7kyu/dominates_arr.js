function dominator(arr) {
  const occurrences = arr.reduce((acc, c) => {
    acc[c] = acc[c] ? acc[c] + 1 : 1;
    return acc;
  }, {});

  return Number(Object.keys(occurrences).find((el) => occurrences[el] > arr.length / 2)) || -1;
}
