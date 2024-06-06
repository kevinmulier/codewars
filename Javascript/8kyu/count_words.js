const countWords = (str) =>
  str
    .trim()
    .split(/\s+|[^a-zA-Z0-9'-]+/)
    .filter((word) => word.length > 0).length;
