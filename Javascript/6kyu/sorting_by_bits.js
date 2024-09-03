function sortByBit(arr) {
  arr.sort((a, b) => {
    const countBits = (num) => {
      let count = 0;
      while (num > 0) {
        count += num & 1;
        num >>= 1;
      }
      return count;
    };

    const bitsA = countBits(a);
    const bitsB = countBits(b);

    if (bitsA === bitsB) {
      return a - b;
    } else {
      return bitsA - bitsB;
    }
  });
}
