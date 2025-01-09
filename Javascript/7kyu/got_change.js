function giveChange(amount) {
    const bills = [1, 5, 10, 20, 50, 100];
    const result = Array(bills.length).fill(0);
    for (let i = bills.length - 1; i >= 0; i--) {
        result[i] = Math.floor(amount / bills[i]);
        amount %= bills[i];
    }
    return result;
}
