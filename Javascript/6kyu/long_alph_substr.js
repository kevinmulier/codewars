function longest(str) {
  return str
    .split('')
    .reduce(
      (acc, c) => {
        if (acc.length === 0 || acc[acc.length - 1].slice(-1) <= c) {
          acc[acc.length - 1] = (acc[acc.length - 1] || '') + c;
        } else {
          acc.push(c);
        }
        return acc;
      },
      [''],
    )
    .reduce((longest, current) => (longest.length >= current.length ? longest : current), '');
}
