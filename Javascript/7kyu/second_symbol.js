function secondSymbol(s, symbol) {
  let firstIndex = s.indexOf(symbol);
  return firstIndex === -1 ? -1 : s.indexOf(symbol, firstIndex + 1);
}