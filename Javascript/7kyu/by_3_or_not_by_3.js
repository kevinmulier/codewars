const divisibleByThree = (str) => Number.isInteger(str.split("").reduce((acc, c) => acc + Number(c), 0) / 3);
