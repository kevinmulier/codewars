const cutIt = (arr) => arr.map((w) => w.slice(0, Math.min(...arr.map((e) => e.length))));
