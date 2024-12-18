function encode(str) {
  const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return str.split('').reduce((acc, c) => {
    const index = alph.indexOf(c.toUpperCase());
    return acc + (index !== -1 ? index + 1 : c);
  }, '');
}
