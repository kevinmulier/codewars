function stringExpansion(s) {
  let tempNum = 1;
  let resultStr = "";

  for (let char of s) {
    !isNaN(char) ? (tempNum = Number(char)) : (resultStr += char.repeat(tempNum));
  }

  return resultStr;
}
