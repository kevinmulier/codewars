function consecutive(arr, a, b) {
  let indexA = arr.indexOf(a);
  let indexB = arr.indexOf(b);

  return Math.abs(indexA - indexB) === 1;
}
