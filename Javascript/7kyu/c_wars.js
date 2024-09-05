function initials(n) {
  const splittedN = n.split(' ');

  return splittedN
    .map((el, i) => (i < splittedN.length - 1 ? el[0].toUpperCase() : el[0].toUpperCase() + el.slice(1)))
    .join('.');
}
