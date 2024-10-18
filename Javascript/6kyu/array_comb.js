const solve = (arr) => arr.map((a) => Array.from(new Set(a))).reduce((acc, c) => acc * c.length, 1);
