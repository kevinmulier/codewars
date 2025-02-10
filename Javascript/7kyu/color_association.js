function colourAssociation(array) {
  return array.map((item) => {
    let obj = {};
    obj[item[0]] = item[1];
    return obj;
  });
}
