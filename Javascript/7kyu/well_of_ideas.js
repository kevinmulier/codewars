function well(x) {
  let goodCounts = 0;

  for (let arr of x) {
    for (let el of arr) {
      if (typeof el === 'string') {
        goodCounts += el.toLowerCase() === 'good' ? 1 : 0;
      }
    }
  }

  return goodCounts > 2 ? 'I smell a series!' : goodCounts > 0 ? 'Publish!' : 'Fail!';
}
