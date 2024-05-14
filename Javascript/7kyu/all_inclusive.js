function containAllRots(strng, arr) {
  if (strng === "") {
    return true;
  }

  function generateRotations(s) {
    let rotations = [];
    for (let i = 0; i < s.length; i++) {
      let rotation = s.slice(i) + s.slice(0, i);
      rotations.push(rotation);
    }
    return rotations;
  }

  let rotations = generateRotations(strng);

  for (let rotation of rotations) {
    if (!arr.includes(rotation)) {
      return false;
    }
  }

  return true;
}
