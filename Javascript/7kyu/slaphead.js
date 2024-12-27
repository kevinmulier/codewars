function bald(x) {
  const hairCount = (x.match(/\//g) || []).length;
  const cleanHead = x.replace(/\//g, '-');
  let message;

  switch (hairCount) {
    case 0:
      message = 'Clean!';
      break;
    case 1:
      message = 'Unicorn!';
      break;
    case 2:
      message = 'Homer!';
      break;
    case 3:
    case 4:
    case 5:
      message = 'Careless!';
      break;
    default:
      message = 'Hobo!';
  }

  return [cleanHead, message];
}
