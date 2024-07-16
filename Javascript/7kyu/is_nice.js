const isNice = (arr) => {
  if (arr.length === 0) {
    return false;
  }

  const numSet = new Set(arr);

  for (let num of arr) {
    if (!numSet.has(num - 1) && !numSet.has(num + 1)) {
      return false;
    }
  }

  return true;
};
