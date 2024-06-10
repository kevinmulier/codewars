function findGlasses(arr) {
  const glassesPattern = /O-+O/;

  for (let i = 0; i < arr.length; i++) {
    if (glassesPattern.test(arr[i])) {
      return i;
    }
  }

  return -1;
}
