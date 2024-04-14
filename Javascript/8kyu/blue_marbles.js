const guessBlue = (blueStart, redStart, bluePulled, redPulled) =>
  (blueStart - bluePulled) / (blueStart + redStart - bluePulled - redPulled);
