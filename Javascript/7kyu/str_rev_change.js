const reverseAndMirror = (s1, s2) =>
  `${s2
    .split("")
    .map((el) => (el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase()))
    .reverse()
    .join("")}@@@${s1
    .split("")
    .map((el) => (el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase()))
    .reverse()
    .join("")}${s1
    .split("")
    .map((el) => (el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase()))
    .join("")}`;
