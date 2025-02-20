function ballCollector(detritus) {
  return {
    weight: detritus.filter((weight) => weight === 58).reduce((sum, weight) => sum + weight, 0),
  };
}
