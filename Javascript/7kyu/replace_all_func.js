function replaceAll(seq, find, replace) {
  if (typeof seq === 'string') {
    return seq.split(find).join(replace);
  } else if (Array.isArray(seq)) {
    return seq.map((item) => (item === find ? replace : item));
  }
  return seq;
}
