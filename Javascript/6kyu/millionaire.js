// Kata

// www.codewars.com/kata/6384c9ec84c67000230a15f1/train/javascript

// My solution

function getTotalCashPrize(prizeFund, correctAnswers, playerActions) {
  let result = 0;
  let lifelinesUsed = 0;
  let safeHaven = 0;
  for (let i = 0; i < playerActions.length; i++) {
    if (i === 5 || i === 11) {
      safeHaven = result;
    }
    if (playerActions[i].split("").includes("1") || playerActions[i].split("").includes("2") || playerActions[i].split("").includes("3")) {
      lifelinesUsed += playerActions[i].split("").length - 1;
      if (playerActions[i].split("").includes("X")) {
        console.log(`Used lifeline at question ${i + 1}. Total lifelines used : ${lifelinesUsed}`);
        console.log(`Left at question ${i + 1} after host asked question`);
        return [safeHaven, lifelinesUsed];
      } else if (playerActions[i].split("").includes("W")) {
        console.log(`Used lifeline at question ${i + 1}. Total lifelines used : ${lifelinesUsed}`);
        console.log(`Left at question ${i + 1} before host asked question`);
        return [result, lifelinesUsed];
      }
    }
  }
}
