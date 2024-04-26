function findMissingNumber(sequence) {
  if (sequence.trim() === "") return 0;

  const entries = sequence.split(" ").map(Number);
  const numbers = new Set();

  for (const number of entries) {
    if (isNaN(number)) return 1;
    numbers.add(number);
  }

  let expectedNumber = 1;
  while (numbers.has(expectedNumber)) {
    expectedNumber++;
  }

  return expectedNumber > Math.max(...numbers) ? 0 : expectedNumber;
}
