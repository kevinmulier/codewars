function scrollingText(text) {
  text = text.toUpperCase();
  let result = [];
  for (let i = 0; i < text.length; i++) {
    result.push(text.slice(i) + text.slice(0, i));
  }
  return result;
}
