function solve(s) {
  let sortedString = s.split('').sort().join('');

  for (let i = 0; i < sortedString.length - 1; i++) {
    if (sortedString.charCodeAt(i) + 1 !== sortedString.charCodeAt(i + 1)) {
      return false;
    }
  }

  return true;
}
