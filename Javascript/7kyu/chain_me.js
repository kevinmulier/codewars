const chain = (input, fs) => fs.reduce((acc, fn) => fn(acc), input);
