function myParseInt(str) {
  const trimmedStr = str.trim();
  return /^[+-]?\d+$/.test(trimmedStr) ? parseInt(trimmedStr, 10) : NaN;
}
