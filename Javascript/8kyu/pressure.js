const solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  const R = 0.082;
  const tempInKelvin = temp + 273.15;

  const moles1 = givenMass1 / molarMass1;
  const moles2 = givenMass2 / molarMass2;

  const totalPressure = ((moles1 + moles2) * R * tempInKelvin) / volume;

  return totalPressure;
};
