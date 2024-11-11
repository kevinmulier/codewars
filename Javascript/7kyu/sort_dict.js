const sortDict = (dict) =>
  Object.entries(dict)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value]) => [isNaN(key) ? key : Number(key), value]);
