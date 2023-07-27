function moveZeros(arr) {
  let sortedArr = arr.filter((el) => el !== 0);
  const lengthDiff = arr.length - sortedArr.length;

  for (let i = 0; i < lengthDiff; i++) {
    sortedArr.push(0);
  }

  return sortedArr;
}
