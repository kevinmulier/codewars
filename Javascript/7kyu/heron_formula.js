const heron = (a, b, c) => {
  const s = (a + b + c) / 2;
  return Number(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2));
};
