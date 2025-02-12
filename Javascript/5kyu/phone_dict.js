function phone(s, num) {
  const lines = s.split("\n");
  const phoneRegEx = new RegExp(`\\+${num}\\b`);
  const found = lines.filter((line) => phoneRegEx.test(line));

  if (found.length === 0) return `Error => Not found: ${num}`;
  if (found.length > 1) return `Error => Too many people: ${num}`;

  let line = found[0];

  const nameMatch = line.match(/<([^>]+)>/);
  if (!nameMatch) return `Error => Not found: ${num}`;
  const name = nameMatch[1];

  line = line.replace(phoneRegEx, "");
  line = line.replace(/<[^>]+>/, "");

  let address = line.replace(/[^a-zA-Z0-9\.\-]/g, " ");
  address = address.replace(/\s+/g, " ").trim();

  return `Phone => ${num}, Name => ${name}, Address => ${address}`;
}
