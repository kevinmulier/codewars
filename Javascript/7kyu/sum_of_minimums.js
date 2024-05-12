const sumOfMinimums = (arr) => arr.reduce((acc, c) => acc + Math.min(...c), 0);
