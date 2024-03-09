const orderFood = (list) =>
  list.reduce((acc, c) => {
    acc[c.meal] ? acc[c.meal]++ : (acc[c.meal] = 1);
    return acc;
  }, {});
