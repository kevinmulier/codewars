const remove = (string) =>
  string
    .split(' ')
    .filter((word) => !word.includes('!') || word.replace('!', '').includes('!'))
    .join(' ');
