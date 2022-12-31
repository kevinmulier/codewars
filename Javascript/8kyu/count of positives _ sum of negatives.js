// Kata

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

//     Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//  ---------------------------------------------------

// My solution

function countPositivesSumNegatives(input) {
    // your code here
    if (input === null || input.length === 0) {
        let resultArray = [];
        return resultArray;
    }
    else {
        let result = 0;
        let positiveNumbers = input.filter(function (v) {
            return v > 0;
        })
        let negativeNumbers = input.filter(function (n) {
            return n < 0;
        })
        for (let numb of negativeNumbers) {
            result += numb;
        }
        resultArray = new Array(positiveNumbers.length, result);
        return resultArray;
    }
}