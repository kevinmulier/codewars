const modifyMultiply = (str, loc, num) => `${str.split(' ')[loc]}-`.repeat(num).slice(0, -1);
