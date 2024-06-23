var paintLetterboxes = function (start, end) {
  const distribution = Array(10).fill(0);

  for (let i = start; i <= end; i++) {
    for (let num of i.toString().split("")) {
      distribution[Number(num)]++;
    }
  }

  return distribution;
};
