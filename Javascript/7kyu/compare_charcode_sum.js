function compare(s1, s2) {
  const sumS1 =
    s1 === null
      ? 0
      : s1
          .toUpperCase()
          .split("")
          .every((char) => char.charCodeAt() >= 65 && char.charCodeAt() <= 90)
      ? s1
          .toUpperCase()
          .split("")
          .reduce((acc, c) => acc + c.charCodeAt(), 0)
      : 0;

  const sumS2 =
    s2 === null
      ? 0
      : s2
          .toUpperCase()
          .split("")
          .every((char) => char.charCodeAt() >= 65 && char.charCodeAt() <= 90)
      ? s2
          .toUpperCase()
          .split("")
          .reduce((acc, c) => acc + c.charCodeAt(), 0)
      : 0;

  return sumS1 === sumS2;
}
