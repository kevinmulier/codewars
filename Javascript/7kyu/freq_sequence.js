function freqSeq(str, sep) {
  const splittedStr = str.split('');

  const frequencies = splittedStr.reduce((acc, c) => {
    acc[c] ? (acc[c] += 1) : (acc[c] = 1);
    return acc;
  }, {});

  return splittedStr.map((char) => frequencies[char]).join(sep);
}
