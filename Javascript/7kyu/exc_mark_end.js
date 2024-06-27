const remove = (string) =>
  string
    .split(' ')
    .map((word) => {
      let currWord = word;
      while (currWord.endsWith('!')) {
        currWord = currWord.slice(0, -1);
      }
      return currWord;
    })
    .join(' ');
