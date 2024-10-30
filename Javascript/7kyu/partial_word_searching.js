const wordSearch = (query, seq) => {
  const result = seq.filter((s) => s.toLowerCase().includes(query.toLowerCase()));
  return result.length ? result : ["Empty"];
};
