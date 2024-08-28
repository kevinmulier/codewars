const consonantCount = (str) =>
  str
    .toLowerCase()
    .split('')
    .reduce((acc, c) => ('bcdfghjklmnpqrstvwxyz'.includes(c) ? acc + 1 : acc), 0);
