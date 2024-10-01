function remove(string) {
  let exclamations = (string.match(/!/g) || []).length;
  let result = string.replace(/!/g, '');
  return result + '!'.repeat(exclamations);
}
