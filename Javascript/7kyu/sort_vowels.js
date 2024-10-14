const sortVowels = (s) =>
  typeof s === "string"
    ? s
        .split("")
        .map((el) => ("aeiou".includes(el.toLowerCase()) ? `|${el}` : `${el}|`))
        .join("\n")
    : "";
