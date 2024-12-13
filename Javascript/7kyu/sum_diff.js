function getAges(sum, difference) {
  if (sum < 0 || difference < 0) {
    return null;
  }

  let age1 = (sum + difference) / 2;
  let age2 = sum - age1;

  if (age1 < 0 || age2 < 0) {
    return null;
  }

  return age1 > age2 ? [age1, age2] : [age2, age1];
}
