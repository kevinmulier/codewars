function howManyGifts(maxBudget, gifts) {
  gifts.sort((a, b) => a - b);
  let count = 0, total = 0;
  for (let gift of gifts) {
    if (total + gift > maxBudget) break;
    total += gift;
    count++;
  }
  return count;
}