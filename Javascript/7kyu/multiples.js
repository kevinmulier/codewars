function multiple(x) {
  let returnStr = '';
  switch (true) {
    case x % 3 === 0 && x % 5 === 0:
      returnStr += 'BangBoom';
      break;
    case x % 3 === 0:
      returnStr += 'Bang';
      break;
    case x % 5 === 0:
      returnStr += 'Boom';
      break;
    default:
      returnStr += 'Miss';
      break;
  }

  return returnStr;
}
