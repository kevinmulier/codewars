function newAvg(arr, newavg) {
  const currentTotal = arr.reduce((sum, donation) => sum + donation, 0);

  const requiredTotal = newavg * (arr.length + 1);

  const requiredDonation = Math.ceil(requiredTotal - currentTotal);

  if (requiredDonation <= 0) {
    throw new Error('Expected New Average is too low');
  }

  return requiredDonation;
}
