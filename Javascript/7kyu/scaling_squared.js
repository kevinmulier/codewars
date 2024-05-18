function scale(strng, k, v) {
  if (strng === "") return "";

  let lines = strng.split("\n");
  let scaledLines = [];

  for (let line of lines) {
    let horizontallyScaledLine = "";
    for (let char of line) {
      horizontallyScaledLine += char.repeat(k);
    }

    for (let i = 0; i < v; i++) {
      scaledLines.push(horizontallyScaledLine);
    }
  }

  return scaledLines.join("\n");
}
