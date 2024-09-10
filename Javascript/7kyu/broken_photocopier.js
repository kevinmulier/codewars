function broken(original) {
  let reversed = '';
  for (let i = 0; i < original.length; i++) {
    if (original[i] === '0') {
      reversed += '1';
    } else if (original[i] === '1') {
      reversed += '0';
    }
  }
  return reversed;
}
