const isIntArray = (arr) => (Array.isArray(arr) ? arr.every((el) => Number.isInteger(el)) : false);
