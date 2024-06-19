function catchSignChange(arr) {
  if (arr.length <= 1) {
    return 0;
  }

  let signChanges = 0;

  for (let i = 1; i < arr.length; i++) {
    if ((arr[i] < 0 && arr[i - 1] >= 0) || (arr[i] >= 0 && arr[i - 1] < 0)) {
      signChanges++;
    }
  }

  return signChanges;
}
