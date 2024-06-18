function mergeArrays(a, b) {
  const longestArrLength = Math.max(a.length, b.length);

  const reversedA = a.reverse();
  const reversedB = b.reverse();

  const returnArr = [];

  for (let i = 0; i < longestArrLength; i++) {
    reversedA.length > 0 && returnArr.push(reversedA.pop());
    reversedB.length > 0 && returnArr.push(reversedB.pop());
  }

  return returnArr;
}
