function take(arr, n) {
  if (arr.length === 0) {
    return [];
  }
  let returnArr = [];
  if (arr.length >= n) {
    for (let i = 0; i < n; i++) {
      returnArr.push(arr[i]);
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      returnArr.push(arr[i]);
    }
  }
  return returnArr;
}
