function nextPal(val) {
  let candidate = val + 1;
  while (true) {
    let strCandidate = candidate.toString();
    let reversed = strCandidate.split("").reverse().join("");
    if (strCandidate === reversed) {
      return candidate;
    }
    candidate++;
  }
}
