const neutralise = (s1, s2) =>
  s1
    .split('')
    .map((char, index) => (char === s2[index] ? char : '0'))
    .join('');
