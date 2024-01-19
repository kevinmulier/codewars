// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

function balance(left, right) {
  let leftSum = left
    .split('')
    .reduce((acc, c) => (c === '?' ? acc + 3 : acc + 2), 0);
  let rightSum = right
    .split('')
    .reduce((acc, c) => (c === '?' ? acc + 3 : acc + 2), 0);
  return leftSum === rightSum
    ? 'Balance'
    : leftSum > rightSum
    ? 'Left'
    : 'Right';
}
