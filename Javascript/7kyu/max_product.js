function maxProduct(arr) {
    let max1 = 0, max2 = 0;
    for (let num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }
    return max1 * max2;
}
