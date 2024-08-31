const listToArray = (list) => {
  const result = [];
  let currentNode = list;
  while (currentNode !== null) {
    result.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return result;
};
