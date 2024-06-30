const gordon = (a) => {
  return a
    .toUpperCase()
    .replaceAll(/A/g, '@')
    .replaceAll(/[EIOU]/g, '*')
    .split(' ')
    .map((word) => word + '!!!!')
    .join(' ');
};
