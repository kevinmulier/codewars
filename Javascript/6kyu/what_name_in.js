function nameInStr(str, name) {
  str = str.toLowerCase();
  name = name.toLowerCase();

  let index = 0;
  for (let char of str) {
    if (char === name[index]) {
      index++;
    }
    if (index === name.length) {
      return true;
    }
  }
  return false;
}
