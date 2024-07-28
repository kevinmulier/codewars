function makePassword(phrase) {
  let password = phrase
    .split(' ')
    .map((word) => word[0])
    .join('');

  password = password.replace(/i/gi, '1').replace(/o/gi, '0').replace(/s/gi, '5');

  return password;
}
