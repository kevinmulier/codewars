const consecutive = (array) => (array.length >= 2 ? Math.max(...array) - Math.min(...array) - array.length + 1 : 0);
