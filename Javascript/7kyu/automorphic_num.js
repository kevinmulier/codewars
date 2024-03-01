// Definition
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

// Task
// Given a number determine if it Automorphic or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// The number passed to the function is positive

const automorphic = (n) =>
  String(n * n).endsWith(String(n)) ? 'Automorphic' : 'Not!!';
