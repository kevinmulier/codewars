const filterHomogenous = (arrays) => arrays.filter((arr) => arr.length > 0 && arr.every((el) => typeof el === typeof arr[0]));
