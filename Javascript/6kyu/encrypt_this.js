var encryptThis = function (text) {
  let encrypted = [];
  text = text.split(" ");
  for (let el of text) {
    let temp2 = el[1];
    let tempFin = el[el.length - 1];
    let encryptTemp = el.split("");
    encryptTemp[0] = encryptTemp[0].charCodeAt(0);
    if (el.length == 1) {
      encrypted.push(encryptTemp[0]);
    } else {
      encryptTemp[1] = tempFin;
      encryptTemp[el.length - 1] = temp2;
      encrypted.push(encryptTemp.join(""));
    }
  }
  return encrypted.join(" ");
};

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"
