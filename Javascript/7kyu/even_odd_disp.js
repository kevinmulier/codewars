const solve = (a) => a.filter((el) => !isNaN(el)).reduce((acc, cur) => acc + (cur % 2 ? -1 : 1), 0);
