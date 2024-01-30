// dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

// data and towns can be seen in "Your Test Cases:".

// Task:
// function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
// function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.
// Examples:
// mean("London", data), 51.19(9999999999996)
// variance("London", data), 57.42(833333333374)
// Notes:
// if functions mean or variance have as parameter town a city which has no records return -1 or -1.0 (depending on the language)

// Don't truncate or round: the tests will pass if abs(your_result - test_result) <= 1e-2 or abs((your_result - test_result) / test_result) <= 1e-6 depending on the language.

function mean(town, strng) {
  const townData = extractTownData(town, strng);
  if (!townData) return -1;

  const sum = townData.reduce((acc, val) => acc + val, 0);
  return sum / townData.length;
}

function variance(town, strng) {
  const townData = extractTownData(town, strng);
  if (!townData) return -1;

  const meanValue = mean(town, strng);
  const squaredDiffs = townData.map((val) => Math.pow(val - meanValue, 2));
  const sumOfSquaredDiffs = squaredDiffs.reduce((acc, val) => acc + val, 0);
  return sumOfSquaredDiffs / townData.length;
}

function extractTownData(town, strng) {
  const records = strng.split('\n');
  for (const record of records) {
    const [recordedTown, data] = record.split(':');
    if (recordedTown === town) {
      return data
        .split(',')
        .map((monthData) => parseFloat(monthData.split(' ')[1]));
    }
  }
  return null;
}
