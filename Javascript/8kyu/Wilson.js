function amIWilson(num) {
  if (num < 2 || !isPrime(num)) return false;

  let factorialMod = 1;
  for (let i = 2; i < num; i++) {
    factorialMod = (factorialMod * i) % (num * num);
  }

  return (factorialMod + 1) % (num * num) === 0;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
