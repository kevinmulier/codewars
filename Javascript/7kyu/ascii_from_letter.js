function convert(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    let num = str.substring(i, i + 2);
    result += String.fromCharCode(parseInt(num, 10));
  }
  return result;
}
