// Kata

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// Solution

const reverseSeq = (n) => {
  let seq = [];
  for (let i = 0; i < n; i++) {
    seq.unshift(i + 1);
  }
  return seq;
};
