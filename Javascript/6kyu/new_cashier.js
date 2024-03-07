function getOrder(input) {
  let menu = {
    burger: 1,
    fries: 2,
    chicken: 3,
    pizza: 4,
    sandwich: 5,
    onionrings: 6,
    milkshake: 7,
    coke: 8,
  };

  let splittedInput = input.split('');

  let orderArr = [];
  let currentOrder = '';

  for (let i = 0; i <= splittedInput.length; i++) {
    currentOrder += splittedInput[i];

    if (Object.keys(menu).includes(currentOrder)) {
      orderArr.push(currentOrder);
      currentOrder = '';
    }
  }

  return orderArr
    .sort((a, b) => menu[a] - menu[b])
    .map((order) => capitalize(order))
    .join(' ');
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
