function looseChange(cents) {
  cents = Math.max(0, Math.floor(cents));
  
  return {
    Quarters: Math.floor(cents / 25),
    Dimes: Math.floor((cents % 25) / 10),
    Nickels: Math.floor((cents % 25 % 10) / 5),
    Pennies: cents % 5
  };
}