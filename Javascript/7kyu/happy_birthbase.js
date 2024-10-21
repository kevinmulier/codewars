function womensAge(n) {
  let base = Math.floor(n / 2);
  let age = n % base === 0 ? 20 : 21;
  return `${n}? That's just ${age}, in base ${base}!`;
}
