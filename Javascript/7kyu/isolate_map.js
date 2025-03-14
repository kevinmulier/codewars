function isolateIt(arr) {
  return arr.map(s => {
    let mid = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? s.slice(0, mid) + '|' + s.slice(mid) : s.slice(0, mid) + '|' + s.slice(mid + 1);
  });
}