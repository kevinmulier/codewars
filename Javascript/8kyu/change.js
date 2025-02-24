function changeMe(moneyIn) {
  const values = {
    '£5': 500,
    '£2': 200,
    '£1': 100,
    '50p': 50,
    '20p': 20
  };

  if (!values.hasOwnProperty(moneyIn)) {
    return moneyIn;
  }

  let amount = values[moneyIn];
  let change = [];

  if (moneyIn === '20p') {
    return '10p 10p';
  }

  while (amount >= 20) {
    change.push('20p');
    amount -= 20;
  }

  while (amount >= 10) {
    change.push('10p');
    amount -= 10;
  }

  return change.join(' ');
}