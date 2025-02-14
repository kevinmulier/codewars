function compose(s1, s2) {
  const arr1 = s1.split("\n");
  const arr2 = s2.split("\n");
  const n = arr1.length;

  let result = [];

  for (let i = 0; i < n; i++) {
    let fromS1 = arr1[i].slice(0, i + 1);
    let fromS2 = arr2[n - 1 - i].slice(0, n - i);
    result.push(fromS1 + fromS2);
  }

  return result.join("\n");
}
