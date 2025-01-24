function randomCase(str) {
  return str
    .split('')
    .map((char) => {
      return Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
    })
    .join('');
}
