// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

const bmi = (weight, height) => {
  const bmiIndex = weight / (height * height);
  switch (true) {
    case bmiIndex > 30:
      return "Obese";
    case bmiIndex > 25:
      return "Overweight";
    case bmiIndex > 18.5:
      return "Normal";
    default:
      return "Underweight";
  }
};
