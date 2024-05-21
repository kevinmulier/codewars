function isVeryEvenNumber(n) {
  if (n.toString().length > 1) {
    return isVeryEvenNumber(
      n
        .toString()
        .split("")
        .reduce((acc, c) => Number(acc) + Number(c), 0)
    );
  }
  return n % 2 === 0;
}
