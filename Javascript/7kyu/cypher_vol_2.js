function decode(code, key) {
  const keyStr = key.toString();
  let decodedMessage = '';

  for (let i = 0; i < code.length; i++) {
    const keyDigit = parseInt(keyStr[i % keyStr.length]);
    const decodedCharCode = code[i] - keyDigit;
    decodedMessage += String.fromCharCode(decodedCharCode + 96);
  }

  return decodedMessage;
}
