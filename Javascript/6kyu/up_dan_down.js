function arrange(s) {
  let words = s.split(" ");

  for (let i = 0; i < words.length - 1; i++) {
    if (i % 2 === 0) {
      if (words[i].length > words[i + 1].length) {
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
      }
    } else {
      if (words[i].length < words[i + 1].length) {
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
      }
    }
  }

  for (let i = 0; i < words.length; i++) {
    if (i % 2 === 0) {
      words[i] = words[i].toLowerCase();
    } else {
      words[i] = words[i].toUpperCase();
    }
  }

  return words.join(" ");
}
