function getTotalCashPrize(prizeFund, correctAnswers, playerActions) {
  let result = 0;
  let lifelinesUsed = 0;
  let safeHaven = 0;
  for (let i = 0; i < playerActions.length; i++) {
    if (i === 5 || i === 10) {
      safeHaven = result;
    }

    //     Lifelines cases
    if (playerActions[i].split("").includes("1") || playerActions[i].split("").includes("2") || playerActions[i].split("").includes("3")) {
      lifelinesUsed += playerActions[i].split("").length - 1;
      if (playerActions[i].split("").includes("X")) {
        result = safeHaven;
      } else if (playerActions[i].split("").includes(correctAnswers[i])) {
        result += prizeFund[i];
      } else if (playerActions[i].split("").includes(correctAnswers[i]) === false) {
        result = 0;
      }
    }
    //     Exit after question = safehaven
    else if (playerActions[i] === "X") {
      result = safeHaven;
    }
    //     Correct answer = +prize to result
    else if (playerActions[i] === correctAnswers[i]) {
      result += prizeFund[i];
    }
    //     Wrong answer = loose everything
    else if (playerActions[i] !== correctAnswers[i] && playerActions[i] !== "W") {
      result = 0;
    }
  }
  return [result, lifelinesUsed];
}
