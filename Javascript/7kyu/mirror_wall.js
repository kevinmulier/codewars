function mirror(data) {
  const sort = data.slice().sort((a, b) => a - b);
  return [...sort, ...sort.reverse().slice(1)];
}
