function isItANum(str) {
  str = str.replace(/[^0-9.]/g, '');

  return str.length === 11 && str.startsWith('0') ? str : 'Not a phone number';
}
