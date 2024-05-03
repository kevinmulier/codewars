const toNato = (words) =>
  words
    .toUpperCase()
    .replaceAll(" ", "")
    .split("")
    .map((w) => (NATO[w] ? NATO[w] : w))
    .join(" ");
