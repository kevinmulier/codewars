function startingMark(bodyHeight) {
  const height1 = 1.52;
  const mark1 = 9.45;
  const height2 = 1.83;
  const mark2 = 10.67;

  const slope = (mark2 - mark1) / (height2 - height1);

  const startingMark = slope * (bodyHeight - height1) + mark1;

  return Math.round(startingMark * 100) / 100;
}
