const findOddNames = (list) =>
  list.filter((d) => d.firstName.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 2);
