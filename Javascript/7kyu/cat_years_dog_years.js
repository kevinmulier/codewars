function ownedCatAndDog(catYears, dogYears) {
  const calculateYears = (years, firstYear, secondYear, subsequentYears) => {
    if (years < firstYear) return 0;
    if (years < firstYear + secondYear) return 1;
    return 2 + Math.floor((years - firstYear - secondYear) / subsequentYears);
  };

  const ownedCat = calculateYears(catYears, 15, 9, 4);
  const ownedDog = calculateYears(dogYears, 15, 9, 5);

  return [ownedCat, ownedDog];
}
