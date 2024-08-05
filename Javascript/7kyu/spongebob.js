function spongeMeme(sentence) {
  return sentence
    .split('')
    .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
    .join('');
}
