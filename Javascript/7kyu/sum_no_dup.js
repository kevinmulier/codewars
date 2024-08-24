function sumNoDuplicates(numList) {
  return numList
    .filter(num => numList.indexOf(num) === numList.lastIndexOf(num))
    .reduce((acc, c) => acc + c, 0);
}
