const tailSwap = (arr) => [
  arr[0].split(':')[0] + ':' + arr[1].split(':')[1],
  arr[1].split(':')[0] + ':' + arr[0].split(':')[1],
];
