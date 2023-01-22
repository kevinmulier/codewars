// Kata

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

// Solution

function expandedForm(num) {
  // Your code here
  let resultString = "";
  num = num.toString().split("");
  let counterDecrease = num.length - 1;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
      resultString += ` ${num[i]}${"0".repeat(counterDecrease)} +`;
      console.log(resultString);
    }
    counterDecrease--;
  }
  return resultString.trim().slice(0, -2);
}
