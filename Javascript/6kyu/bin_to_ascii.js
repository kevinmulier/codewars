function binaryToString(binary) {
  return (
    binary
      .match(/.{8}/g)
      ?.map((b) => String.fromCharCode(parseInt(b, 2)))
      .join('') || ''
  );
}
