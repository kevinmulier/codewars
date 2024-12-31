function mirror(text) {
  const words = text.split(" ");
  const reversedWords = words.map((word) => word.split("").reverse().join(""));
  const maxLength = Math.max(...reversedWords.map((word) => word.length));
  const framedWords = reversedWords.map((word) => `* ${word.padEnd(maxLength, " ")} *`);
  const border = "*".repeat(maxLength + 4);

  return [border, ...framedWords, border].join("\n");
}
