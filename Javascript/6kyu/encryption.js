function encrypt(text, rounds) {
  if (!text || rounds <= 0) return text;

  let result = text;
  for (let i = 0; i < rounds; i++) {
    let oddChars = '';
    let evenChars = '';
    for (let j = 0; j < result.length; j++) {
      if (j % 2 === 0) evenChars += result[j];
      else oddChars += result[j];
    }
    result = oddChars + evenChars;
  }
  return result;
}

function decrypt(encryptedText, rounds) {
  if (!encryptedText || rounds <= 0) return encryptedText;

  for (let i = 0; i < rounds; i++) {
    const halfIndex = Math.floor(encryptedText.length / 2);
    let tempText = '';

    for (let j = 0; j < halfIndex; j++) {
      tempText += encryptedText[halfIndex + j] + (encryptedText[j] || '');
    }

    if (encryptedText.length % 2 === 1) {
      tempText += encryptedText[encryptedText.length - 1];
    }
    encryptedText = tempText;
  }
  return encryptedText;
}

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.
