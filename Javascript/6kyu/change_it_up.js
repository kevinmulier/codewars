function changer(str) {
  return str.replace(/[a-zA-Z]/g, function(c) {
    let nextChar = String.fromCharCode(c.charCodeAt(0) + 1);
    if (c === 'z') nextChar = 'a';
    if (c === 'Z') nextChar = 'A';
    if (/[aeiou]/i.test(nextChar)) return nextChar.toUpperCase();
    return nextChar.toLowerCase();
  });
}