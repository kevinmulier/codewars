const golfScoreCalculator = (parList, scoreList) => {
  const splittedParList = parList.split("");

  return scoreList.split("").reduce((acc, c, i) => acc + (c - splittedParList[i]), 0);
};
