const key = "GA-DE-RY-PO-LU-KI";
const map = {};

for (let i = 0; i < key.length; i += 3) {
  map[key[i]] = key[i + 1];
  map[key[i + 1]] = key[i];
  map[key[i].toLowerCase()] = key[i + 1].toLowerCase();
  map[key[i + 1].toLowerCase()] = key[i].toLowerCase();
}

function encode(str) {
  return str
    .split("")
    .map((char) => map[char] || char)
    .join("");
}

function decode(str) {
  return encode(str);
}
