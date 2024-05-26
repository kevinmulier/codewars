function findOutlier(integers) {
  let even = 0;
  let odd = 0;

  for (let num of integers.slice(0, 3)) {
    num % 2 === 0 ? even++ : odd++;
  }

  return even > odd ? integers.find((el) => el % 2 !== 0) : integers.find((el) => el % 2 === 0);
}
