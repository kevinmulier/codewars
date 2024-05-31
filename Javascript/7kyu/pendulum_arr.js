const pendulum = (values) => {
  const sortedValues = [...values].sort((a, b) => a - b);
  const pendulumArr = [];

  for (let i = 0; i < sortedValues.length; i++) {
    i % 2 ? pendulumArr.push(sortedValues[i]) : pendulumArr.unshift(sortedValues[i]);
  }

  return pendulumArr;
};
