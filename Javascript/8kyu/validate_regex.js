function validateCode(code) {
  const codeString = code.toString();
  const pattern = /^[123]/;
  return pattern.test(codeString);
}
