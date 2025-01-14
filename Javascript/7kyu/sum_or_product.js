function sumOrProduct(array, n) {
    array.sort((a, b) => a - b);
    const largestSum = array.slice(-n).reduce((acc, num) => acc + num, 0);
    const smallestProduct = array.slice(0, n).reduce((acc, num) => acc * num, 1);
    if (largestSum > smallestProduct) {
        return "sum";
    } else if (smallestProduct > largestSum) {
        return "product";
    } else {
        return "same";
    }
}
