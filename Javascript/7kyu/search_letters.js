const change = (string) =>
  [...'abcdefghijklmnopqrstuvwxyz'].reduce((acc, c) => (string.toLowerCase().includes(c) ? acc + '1' : acc + '0'), '');
