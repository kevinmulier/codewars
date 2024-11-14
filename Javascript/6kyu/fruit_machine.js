function fruit(reels, spins) {
  const scoreTable = {
    Wild: [100, 10, 0],
    Star: [90, 9, 18],
    Bell: [80, 8, 16],
    Shell: [70, 7, 14],
    Seven: [60, 6, 12],
    Cherry: [50, 5, 10],
    Bar: [40, 4, 8],
    King: [30, 3, 6],
    Queen: [20, 2, 4],
    Jack: [10, 1, 2],
  };

  const results = spins.map((spin, index) => reels[index][spin]);
  const counts = results.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  let score = 0;
  for (const [item, count] of Object.entries(counts)) {
    if (count === 3) {
      score += scoreTable[item][0];
    } else if (count === 2) {
      if (counts["Wild"] > 0 && item !== "Wild") {
        score += scoreTable[item][2];
      } else {
        score += scoreTable[item][1];
      }
    }
  }

  return score;
}
