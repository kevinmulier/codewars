function threeInOne(arr) {
  let result = [];
  let tempArr = arr.slice();
  while (tempArr.length) {
    result.push(tempArr.splice(0, 3).reduce((a, b) => a + b, 0));
  }
  return result;
}
