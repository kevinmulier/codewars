function solve(a, b) {
  let alicePoints = 0;
  let bobPoints = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) alicePoints++;
    if (b[i] > a[i]) bobPoints++;
  }

  let result = `${alicePoints}, ${bobPoints}: `;

  if (alicePoints > bobPoints) {
    result += 'Alice made "Kurt" proud!';
  } else if (bobPoints > alicePoints) {
    result += 'Bob made "Jeff" proud!';
  } else {
    result += 'that looks like a "draw"! Rock on!';
  }

  return result;
}
