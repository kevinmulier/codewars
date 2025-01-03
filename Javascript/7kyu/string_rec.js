const sentence = (arrayOfObjects) =>
  [...arrayOfObjects]
    .sort((a, b) => Number(Object.keys(a)[0]) - Number(Object.keys(b)[0]))
    .reduce((acc, c) => acc + " " + Object.values(c)[0], "")
    .trim();
