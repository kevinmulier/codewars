const binRota = (arr) => arr.map((row, i) => (i % 2 ? row.reverse() : row)).flat();
