const remove = (string) => {
  let modifiedString = string.replace(/!+/g, '');
  let endExclamations = string.match(/!+$/);
  if (endExclamations) {
    modifiedString += endExclamations[0];
  }
  return modifiedString;
};
