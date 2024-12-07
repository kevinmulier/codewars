function reverseByCenter(word) {
  const len = word.length;
  const mid = Math.floor(len / 2);

  if (len % 2 === 0) {
    return word.slice(mid) + word.slice(0, mid);
  } else {
    return word.slice(mid + 1) + word[mid] + word.slice(0, mid);
  }
}
