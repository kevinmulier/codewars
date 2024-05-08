function nextHappyYear(year) {
  let currentYear = year + 1;

  while ([...new Set(currentYear.toString().split(""))].length !== 4) {
    currentYear++;
  }

  return currentYear;
}
