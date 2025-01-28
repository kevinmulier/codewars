function capitalsFirst(str) {
  const words = str.split(" ");
  const upperCaseWords = [];
  const lowerCaseWords = [];

  words.forEach((word) => {
    if (/^[A-Z]/.test(word)) {
      upperCaseWords.push(word);
    } else if (/^[a-z]/.test(word)) {
      lowerCaseWords.push(word);
    }
  });

  return [...upperCaseWords, ...lowerCaseWords].join(" ");
}
