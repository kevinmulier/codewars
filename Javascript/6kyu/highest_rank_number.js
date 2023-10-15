// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

function highestRank(arr) {
  let numbersObj = {};
  let mostAppearances = 0;
  let mostFrequent = 0;

  for (let num of arr) {
    if (!numbersObj[num]) {
      numbersObj[num] = 1;
    } else {
      numbersObj[num]++;
    }
  }

  for (let key of Object.keys(numbersObj)) {
    if (numbersObj[key] >= mostAppearances) {
      mostAppearances = numbersObj[key];
      if (Number(key) > mostFrequent) {
        mostFrequent = key;
      }
    }
  }

  return Number(mostFrequent);
}
