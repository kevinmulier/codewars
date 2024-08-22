const isMonotone = (arr) => arr.length <= 1 || arr.every((_, i) => i === 0 || arr[i] >= arr[i - 1]);
