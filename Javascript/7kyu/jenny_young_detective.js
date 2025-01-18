function missingWord(nums, str) {
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();

  nums.sort((a, b) => a - b);

  let word = '';
  for (let num of nums) {
    if (num >= cleanedStr.length) {
      return 'No mission today';
    }
    word += cleanedStr[num];
  }

  return word;
}
