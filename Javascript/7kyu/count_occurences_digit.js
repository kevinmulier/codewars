class List {
  countSpecDigits(integersList, digitsList) {
    const allDigits = integersList.join('').replace(/-/g, '');

    const result = [];

    for (const digit of digitsList) {
      const count = allDigits.split(digit).length - 1;

      result.push([digit, count]);
    }

    return result;
  }
}
