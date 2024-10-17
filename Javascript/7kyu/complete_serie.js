const completeSeries = (arr) => {
  if (new Set(arr).size < arr.length) {
    return [0];
  }

  const returnArr = [];

  for (let i = 0; i <= Math.max(...arr); i++) {
    returnArr.push(i);
  }

  return returnArr;
};
