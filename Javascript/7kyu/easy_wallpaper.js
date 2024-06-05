function wallpaper(l, w, h) {
  if (l == 0 || w == 0 || h == 0) {
    return numbers[0];
  }

  let perimeter = 2 * (l + w);
  let totalWallArea = perimeter * h;

  let rollWidth = 0.52;
  let rollLength = 10;

  let rollCoverage = rollWidth * rollLength;
  let rollsNeeded = totalWallArea / rollCoverage;

  rollsNeeded *= 1.15;

  rollsNeeded = Math.ceil(rollsNeeded);

  return numbers[rollsNeeded];
}
