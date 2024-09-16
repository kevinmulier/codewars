function rank(st, we, n) {
  if (st === '') {
    return 'No participants';
  }

  const names = st.split(',');

  if (n > names.length) {
    return 'Not enough participants';
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const getRank = (name) => {
    let rank = 0;
    for (let i = 0; i < name.length; i++) {
      const char = name[i].toLowerCase();
      rank += alphabet.indexOf(char) + 1;
    }
    return rank;
  };

  const participants = names.map((name, index) => {
    const sum = getRank(name) + name.length;
    const winningNumber = sum * we[index];
    return { name, winningNumber };
  });

  participants.sort((a, b) => {
    if (a.winningNumber === b.winningNumber) {
      return a.name.localeCompare(b.name);
    }
    return b.winningNumber - a.winningNumber;
  });

  return participants[n - 1].name;
}
