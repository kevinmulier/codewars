function scramble(str, arr) {
  return arr.map((index, i) => str[arr.indexOf(i)]).join('');
}
