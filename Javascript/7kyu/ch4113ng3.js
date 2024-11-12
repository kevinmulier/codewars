const nerdify = (txt) => {
  const replaceDict = { a: 4, A: 4, e: 3, E: 3, l: 1 };

  return txt
    .split("")
    .map((el) => (Object.keys(replaceDict).includes(el) ? replaceDict[el] : el))
    .join("");
};
