function evenOrOdd(str) {
    const digits = str.split('').map(Number);

    const evenSum = digits
        .filter(digit => digit % 2 === 0)
        .reduce((acc, digit) => acc + digit, 0);

    const oddSum = digits
        .filter(digit => digit % 2 !== 0)
        .reduce((acc, digit) => acc + digit, 0);

    if (evenSum > oddSum) {
        return "Even is greater than Odd";
    } else if (oddSum > evenSum) {
        return "Odd is greater than Even";
    } else {
        return "Even and Odd are the same";
    }
}
