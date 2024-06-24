const capital = (capitals) => {
  return capitals.map((item) => {
    const placeName = item.state || item.country;
    const capitalName = item.capital;
    return `The capital of ${placeName} is ${capitalName}`;
  });
};
