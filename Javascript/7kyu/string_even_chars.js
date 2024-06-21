const evenChars = (s) => (s.length <= 1 || s.length > 100 ? "invalid string" : s.split("").filter((char, index) => (index + 1) % 2 === 0));
