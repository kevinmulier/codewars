function liftoff(instructions) {
  instructions.sort((a, b) => b - a);

  let countdown = instructions.join(" ");

  countdown += " liftoff!";

  return countdown;
}
