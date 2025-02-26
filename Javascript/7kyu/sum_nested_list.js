const sumNested = (arr) => arr.flat(Infinity).reduce((acc, c) => acc + c, 0);
