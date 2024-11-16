const fizzBuzzCuckooClock = (time) => {
  const [hour, minute] = time.split(":").map(Number);
  return minute === 0
    ? "Cuckoo ".repeat(hour % 12 || 12).trim()
    : minute === 30
    ? "Cuckoo"
    : minute % 15 === 0
    ? "Fizz Buzz"
    : minute % 3 === 0
    ? "Fizz"
    : minute % 5 === 0
    ? "Buzz"
    : "tick";
};