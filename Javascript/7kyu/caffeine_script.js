function caffeineBuzz(n) {
  let result = '';

  if (n % 3 !== 0) {
    return 'mocha_missing!';
  }

  if (n % 3 === 0 && n % 4 === 0) {
    result = 'Coffee';
  } else {
    result = 'Java';
  }

  if (n % 2 === 0) {
    result += 'Script';
  }

  return result;
}
