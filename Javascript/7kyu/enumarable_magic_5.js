function one(arr, fun) {
  let occurences = 0;
  for (let num of arr) {
    occurences += fun(num) ? 1 : 0;
    if (occurences > 1) {
      return false;
    }
  }
  return occurences === 1;
}
