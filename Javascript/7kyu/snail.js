const snail = (column, day, night) => {
  if (day >= column) {
    return 1;
  }

  const netProgress = day - night;
  const daysNeeded = Math.ceil((column - day) / netProgress) + 1;

  return daysNeeded;
};
