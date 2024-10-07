const createArrayOfTiers = (num) => Array.from(num.toString()).map((_, i) => num.toString().slice(0, i + 1));
